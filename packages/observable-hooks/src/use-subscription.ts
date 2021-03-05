import { Observable, PartialObserver, Subscription } from 'rxjs'
import { MutableRefObject, useEffect } from 'react'
import { useSubscriptionInternal } from './internal/use-subscription-internal'

/**
 * Accepts an Observable and optional `next`, `error`, `complete` functions.
 * These functions must be in correct order.
 * Use `undefined` or `null` for placeholder.
 *
 * Subscription will unsubscribe when unmount, you can also
 * unsubscribe manually.
 *
 * ⚠ **Note:** To make it concurrent mode compatible, the subscription happens
 * after the render is committed to the screen
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
 * @param observer Observer
 */
export function useSubscription<TInput>(
  input$: Observable<TInput>,
  observer?: PartialObserver<TInput>
): MutableRefObject<Subscription | undefined>
/**
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
): MutableRefObject<Subscription | undefined>
export function useSubscription<TInput>(
  input$: Observable<TInput>,
  observerOrNext$?:
    | PartialObserver<TInput>
    | ((value: TInput) => void)
    | null
    | undefined,
  error?: ((error: any) => void) | null | undefined,
  complete?: (() => void) | null | undefined
): MutableRefObject<Subscription | undefined> {
  return useSubscriptionInternal(useEffect, [
    input$,
    observerOrNext$,
    error,
    complete
  ])
}
