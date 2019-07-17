import { Observable, Subscription } from 'rxjs'
import { withLatestFrom } from 'rxjs/operators'
import { useSubscription } from './use-subscription'
import { useObservable } from './use-observable'

/**
 * Whenever the Observable emits a value, callback
 * is called with that value.
 *
 * Note that changes of callback will not trigger
 * a emission. If you need that just create another
 * Observable with `useObservable`.
 */
export function useObservablePropsCallback<Event>(
  events$: Observable<Event>,
  callback: (e: Event) => any
): Subscription {
  const enhanced$ = useObservable(
    callbacks$ => events$.pipe(withLatestFrom(callbacks$)),
    [callback] as [typeof callback]
  )

  return useSubscription(enhanced$, ([e, [callback]]) => {
    callback(e)
  })
}
