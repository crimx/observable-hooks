import { Observable, Subscription } from 'rxjs'
import { useForceUpdate } from './helpers'
import { useEffect, useRef } from 'react'

/**
 *
 * @template TInput Input value within Observable.
 *
 * @param useCustomEffect useEffect or useLayoutEffect
 * @param args collected arguments
 */
export function useSubscriptionInternal<TInput>(
  useCustomEffect: typeof useEffect,
  args: [
    Observable<TInput>, // inputs$
    ((value: TInput) => void) | null | undefined, // next
    ((error: any) => void) | null | undefined, // error
    (() => void) | null | undefined // complete
  ]
): React.MutableRefObject<Subscription | undefined> {
  const argsRef = useRef(args)
  argsRef.current = args

  const forceUpdate = useForceUpdate()

  const subscriptionRef = useRef<Subscription>()
  const errorRef = useRef<Error | null>()

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
        if (argsRef.current[1]) {
          return argsRef.current[1](value)
        }
      },
      error: error => {
        if (input$ !== argsRef.current[0]) {
          // stale observable
          return
        }
        if (argsRef.current[2]) {
          errorRef.current = null
          return argsRef.current[2](error)
        }
        errorRef.current = error
        forceUpdate()
      },
      complete: () => {
        if (input$ !== argsRef.current[0]) {
          // stale observable
          return
        }
        if (argsRef.current[3]) {
          return argsRef.current[3]()
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
