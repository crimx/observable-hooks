import { Observable, Subscription } from 'rxjs'
import { useRefFn, getEmptyObject } from './helpers'
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

  const subscriptionRef = useRef<Subscription>()

  useEffect(() => {
    if (subscriptionRef.current) {
      subscriptionRef.current.unsubscribe()
    }

    subscriptionRef.current = input$.subscribe({
      next: value => cbRef.current.next && cbRef.current.next(value),
      error: error => {
        if (cbRef.current.error) {
          cbRef.current.error(error)
        } else {
          throw error
        }
      },
      complete: () => cbRef.current.complete && cbRef.current.complete()
    })

    return () => {
      if (subscriptionRef.current) {
        subscriptionRef.current.unsubscribe()
      }
    }
  }, [input$])

  return subscriptionRef.current
}
