import { Observable, Subject } from 'rxjs'
import { useCallback } from 'react'
import { useRefFn, getEmptySubject } from './helpers'

/**
 * Returns a callback function and a events Observable.
 *
 * Whenever the callback is called, the Observable will
 * emit the first parameter of the callback.
 *
 * If you need a value instead of an Observable,
 * see example on [[useObservableState]].
 *
 * Examples:
 *
 * ```typescript
 * const Comp = () => {
 *   const [onChange, textChange$] = useObservableCallback<
 *     React.FormEvent<HTMLInputElement>,
 *     string
 *   >(events$ => events$.pipe(pluck('currentTarget', 'value')))
 *
 *   useSubscription(textChange$, console.log)
 *
 *   return <input type="text" onChange={onChange} />
 * }
 * ```
 */
export function useObservableCallback<Output, Event = Output>(
  enhance: (events$: Subject<Event>) => Observable<Output>
): [(e: Event) => void, Observable<Output>] {
  const events$Ref = useRefFn<Subject<Event>>(getEmptySubject)
  const outputs$Ref = useRefFn(() => enhance(events$Ref.current))
  const callback = useCallback((e: Event) => {
    events$Ref.current.next(e)
  }, [])
  return [callback, outputs$Ref.current]
}
