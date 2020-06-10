import { Observable, Subscription } from 'rxjs'
import { useForceUpdate, useIsomorphicLayoutEffect } from './helpers'
import { useRef } from 'react'

// I know this is copy-paste from './useSubscription.ts'.
// Instead of leaving the performance penalty to users,
// I'll keep it this way until it gets too hard to maintain.

/**
 * Same as [[useSubscription]] except the subscription is established
 * under `useLayoutEffect`.
 *
 * Useful when values are needed before DOM paint.
 *
 * Use it scarcely as it runs synchronously before browser paint.
 * Too many synchronous emissons from the observable could
 * stretch the commit phase.
 *
 * @template TInput Input value within Observable.
 *
 * @param input$ Input Observable.
 * @param next Notify when a new value is emitted.
 * @param error Notify when a new error is thrown.
 * @param complete Notify when the Observable is complete.
 */
export function useLayoutSubscription<TInput>(
  input$: Observable<TInput>,
  next?: ((value: TInput) => void) | null | undefined,
  error?: ((error: any) => void) | null | undefined,
  complete?: (() => void) | null | undefined
): React.MutableRefObject<Subscription | undefined>
export function useLayoutSubscription<TInput>(
  ...args: [
    Observable<TInput>,
    ((value: TInput) => void) | null | undefined,
    ((error: any) => void) | null | undefined,
    (() => void) | null | undefined
  ]
): React.MutableRefObject<Subscription | undefined> {
  const argsRef = useRef(args)
  argsRef.current = args

  const forceUpdate = useForceUpdate()

  const subscriptionRef = useRef<Subscription>()
  const errorRef = useRef<Error | null>()

  useIsomorphicLayoutEffect(() => {
    errorRef.current = null

    // keep in closure for checking staleness
    const input$ = argsRef.current[0]

    const subscription = input$.subscribe({
      next: value => {
        // layout effect runs synchronously
        // this should never hit
        // keeping for alignment to useEffect
        /* istanbul ignore if */
        if (input$ !== argsRef.current[0]) {
          // stale observable
          return
        }
        if (argsRef.current[1]) {
          return argsRef.current[1](value)
        }
      },
      error: error => {
        // layout effect runs synchronously
        // this should never hit
        // keeping for alignment to useEffect
        /* istanbul ignore if */
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
        // layout effect runs synchronously
        // this should never hit
        // keeping for alignment to useEffect
        /* istanbul ignore if */
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
