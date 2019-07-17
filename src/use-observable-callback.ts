import { Observable, Subject } from 'rxjs'
import { useCallback } from 'react'
import { useRefFn, getEmptySubject } from './helpers'

/**
 * Returns a callback function and a events Observable.
 * Whenever the callback is called, the Observable will
 * emit the first parameter of the callback.
 */
export function useObservableCallback<Event, Output>(
  enhance: (events$: Subject<Event>) => Observable<Output>
): [(e: Event) => void, Observable<Output>] {
  const events$Ref = useRefFn<Subject<Event>>(getEmptySubject)
  const outputs$Ref = useRefFn(() => enhance(events$Ref.current))
  const callback = useCallback((e: Event) => {
    events$Ref.current.next(e)
  }, [])
  return [callback, outputs$Ref.current]
}
