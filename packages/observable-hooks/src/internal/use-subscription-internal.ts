import { Observable, PartialObserver, Subscription } from 'rxjs'
import { useForceUpdate, useIsomorphicLayoutEffect } from '../helpers'
import { MutableRefObject, useEffect, useRef } from 'react'

type Args<TInput> = [
  Observable<TInput>, // inputs$
  PartialObserver<TInput> | ((value: TInput) => void) | null | undefined,
  ((error: any) => void) | null | undefined,
  (() => void) | null | undefined
]

const getObserver = <TInput>(args: Args<TInput>) =>
  typeof args[1] === 'function' || args[1] === null || args[1] === undefined
    ? {
        next: args[1],
        error: args[2],
        complete: args[3]
      }
    : args[1]

/**
 *
 * @template TInput Input value within Observable.
 *
 * @param useCustomEffect useEffect or useLayoutEffect
 * @param args collected arguments
 */
export function useSubscriptionInternal<TInput>(
  useCustomEffect: typeof useEffect,
  args: Args<TInput>
): MutableRefObject<Subscription | undefined> {
  const forceUpdate = useForceUpdate()

  const argsRef = useRef(args)
  const errorRef = useRef<Error | null>()
  const subscriptionRef = useRef<Subscription>()

  // Update the latest observable and callbacks
  // synchronously after render being committed
  useIsomorphicLayoutEffect(() => {
    argsRef.current = args
  })

  useCustomEffect(() => {
    errorRef.current = null

    // keep in closure for checking staleness
    const input$ = argsRef.current[0]

    const subscription = input$.subscribe({
      next: value => {
        if (input$ !== argsRef.current[0]) {
          // stale observable
          return
        }
        const observer = getObserver(argsRef.current)
        if (observer.next) {
          return observer.next(value)
        }
      },
      error: error => {
        if (input$ !== argsRef.current[0]) {
          // stale observable
          return
        }
        const observer = getObserver(argsRef.current)
        if (observer.error) {
          errorRef.current = null
          return observer.error(error)
        }
        errorRef.current = error
        forceUpdate()
      },
      complete: () => {
        if (input$ !== argsRef.current[0]) {
          // stale observable
          return
        }
        const observer = getObserver(argsRef.current)
        if (observer.complete) {
          return observer.complete()
        }
      }
    })

    subscriptionRef.current = subscription

    return () => {
      subscription.unsubscribe()
    }
  }, [args[0]])

  if (errorRef.current) {
    // Let error boundary catch the error
    throw errorRef.current
  }

  return subscriptionRef
}
