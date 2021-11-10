import { Observable, PartialObserver, Subscription } from 'rxjs'
import { useForceUpdate, useIsomorphicLayoutEffect } from '../helpers'
import { MutableRefObject, useEffect, useRef } from 'react'

type Args<TInput> = [
  Observable<TInput>, // inputs$
  PartialObserver<TInput> | ((value: TInput) => void) | null | undefined,
  ((error: any) => void) | null | undefined,
  (() => void) | null | undefined
]

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
        const nextObserver =
          (argsRef.current[1] as PartialObserver<TInput>)?.next ||
          (argsRef.current[1] as ((value: TInput) => void) | null | undefined)
        if (nextObserver) {
          return nextObserver(value)
        }
      },
      error: error => {
        if (input$ !== argsRef.current[0]) {
          // stale observable
          return
        }
        const errorObserver =
          (argsRef.current[1] as PartialObserver<TInput>)?.error ||
          argsRef.current[2]
        if (errorObserver) {
          errorRef.current = null
          return errorObserver(error)
        }
        errorRef.current = error
        forceUpdate()
      },
      complete: () => {
        if (input$ !== argsRef.current[0]) {
          // stale observable
          return
        }
        const completeObserver =
          (argsRef.current[1] as PartialObserver<TInput>)?.complete ||
          argsRef.current[3]
        if (completeObserver) {
          return completeObserver()
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
