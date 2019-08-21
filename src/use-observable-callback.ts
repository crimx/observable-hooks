import { Observable, Subject } from 'rxjs'
import { useCallback } from 'react'
import { useRefFn, getEmptySubject, EMPTY_TUPLE } from './helpers'

/**
 * Returns a callback function and a events Observable.
 *
 * Whenever the callback is called, the Observable will
 * emit the first argument of the callback.
 *
 * If you need a value instead of an Observable,
 * see example on [[useObservableState]].
 *
 * Examples:
 *
 * ```typescript
 * import { useObservableCallback, useSubscription } from 'observable-hooks'
 *
 * const Comp = () => {
 *   const [onChange, textChange$] = useObservableCallback<
 *     string,
 *     React.FormEvent<HTMLInputElement>
 *   >(event$ => event$.pipe(
 *     pluck('currentTarget', 'value')
 *   )) // or just use "pluckCurrentTargetValue" helper
 *
 *   useSubscription(textChange$, console.log)
 *
 *   return <input type="text" onChange={onChange} />
 * }
 * ```
 */
export function useObservableCallback<Output, Event = Output>(
  init: (events$: Subject<Event>) => Observable<Output>
): [(e: Event) => void, Observable<Output>] {
  const events$Ref = useRefFn<Subject<Event>>(getEmptySubject)
  const outputs$Ref = useRefFn(() => init(events$Ref.current))
  const callback = useCallback((e: Event) => {
    events$Ref.current.next(e)
  }, EMPTY_TUPLE)
  return [callback, outputs$Ref.current]
}
