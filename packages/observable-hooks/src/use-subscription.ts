import { Observable, Subscription } from 'rxjs'
import { useRefFn, getEmptyObject, useForceUpdate } from './helpers'
import { useEffect, useRef } from 'react'

/**
 * Accepts an Observable and optional `next`, `error`, `complete` functions.
 * These functions must be in correct order.
 * Use `undefined` or `null` for placeholder.
 *
 * Subscription will unsubscribe when unmount, you can also
 * unsubscribe manually.
 *
 * To make it concurrent mode compatible, the subscription happens in commit phase
 * which means even the Observable emits synchronous values
 * they will arrive after the first rendering.
 *
 * Note that changes of callbacks will not trigger
 * an emission. If you need that just create another
 * Observable of the callback with [[useObservable]].
 *
 * (From v2.0) You can access closure directly inside callback like in `useEffect`.
 * `useSubscription` will ensure the latest callback is called.
 *
 * (From v2.3.4) when the Observable changes `useSubscription` will automatically
 * unsubscribe the old one and resubscribe to the new one.
 *
 * ⚠ **Note:** Due to the design of RxJS, once an error occurs in an observable, the observable
 * is killed.
 * You should prevent errors from reaching observables or `catchError` in sub-observables.
 * You can also make the observable as state and replace it on error.
 * `useSubscription` will automatically switch to the new one.
 *
 * @template TInput Input value within Observable.
 *
 * @param input$ Input Observable.
 * @param next Notify when a new value is emitted.
 * @param error Notify when a new error is thrown.
 * @param complete Notify when the Observable is complete.
 */
export function useSubscription<TInput>(
  input$: Observable<TInput>,
  next?: ((value: TInput) => void) | null | undefined,
  error?: ((error: any) => void) | null | undefined,
  complete?: (() => void) | null | undefined
): Subscription | undefined {
  const cbRef = useRefFn<{
    next?: typeof next
    error?: typeof error
    complete?: typeof complete
  }>(getEmptyObject)

  cbRef.current.next = next
  cbRef.current.error = error
  cbRef.current.complete = complete

  const forceUpdate = useForceUpdate()

  const subscriptionRef = useRef<Subscription>()
  const errorRef = useRef<Error | null>()

  useEffect(() => {
    if (subscriptionRef.current) {
      subscriptionRef.current.unsubscribe()
    }

    subscriptionRef.current = input$.subscribe({
      next: value => {
        errorRef.current = null
        if (cbRef.current.next) {
          return cbRef.current.next(value)
        }
      },
      error: error => {
        if (cbRef.current.error) {
          errorRef.current = null
          return cbRef.current.error(error)
        }

        errorRef.current = error
        forceUpdate()
      },
      complete: () => {
        if (cbRef.current.complete) {
          return cbRef.current.complete()
        }
      }
    })

    return () => {
      if (subscriptionRef.current) {
        subscriptionRef.current.unsubscribe()
      }
    }
  }, [input$])

  if (errorRef.current) {
    // Let error boundary catch the error
    throw errorRef.current
  }

  return subscriptionRef.current
}
