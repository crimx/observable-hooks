import { Observable, Subscription } from 'rxjs'
import { withLatestFrom } from 'rxjs/operators'
import { useSubscription } from './use-subscription'
import { useObservable } from './use-observable'

/**
 * Whenever the Observable emits a value, callback
 * is called with that value.
 *
 * Note that changes of callback will not trigger
 * an emission. If you need that just create another
 * Observable with `useObservable`.
 *
 * Examples:
 *
 * ```typescript
 * const events$ = useObservable(() => interval(1000))
 *
 * useObservablePropsCallback(events$, props.onChange)
 * ```
 *
 * So why not use [[useSubscription]]?
 *
 * ```typescript
 * useSubscription(events$, props.onChange)
 * ```
 *
 * [[useSubscription]] works the same if `props.onChange` never changes.
 * `useObservablePropsCallback` ensures the latest `props.onChange` is called.
 */
export function useObservablePropsCallback<Event>(
  events$: Observable<Event>,
  callback: (e: Event) => any
): Subscription {
  const enhanced$ = useObservable(
    callbacks$ => events$.pipe(withLatestFrom(callbacks$)),
    [callback] as [typeof callback]
  )
  return useSubscription(enhanced$, subscribe)
}

/** @ignore */
function subscribe<E, T extends Function>([e, [callback]]: [E, [T]]) {
  callback(e)
}
