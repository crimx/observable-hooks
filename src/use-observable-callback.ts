import { Observable, Subject } from 'rxjs'
import { useRef } from 'react'
import { useRefFn, getEmptySubject } from './helpers'

/**
 * Returns a callback function and an events Observable.
 *
 * Whenever the callback is called, the Observable will
 * emit the first argument of the callback.
 *
 * (From v2.1.0) Optionally accepts a selector function that transforms
 * a list of event arguments into a single value.
 *
 * If you want value instead of Observable
 * see example on [[useObservableState]].
 *
 * ⚠ **Note:** `useObservableCallback` will call `init` once and always return
 * the same Observable. It is not safe to access closure (except other Observables)
 * directly inside `init`. Use [[useObservable]] and `withLatestFrom` instead.
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
 *
 * Transform event arguments:
 *
 * ```typescript
 * import { useObservableCallback, identity } from 'observable-hooks'
 *
 * const [onResize, height$] = useObservableCallback<
 *   number,
 *   number,
 *   [number, number]
 * >(identity, args => args[1])
 *
 * // onResize is called with width and hegiht
 * // height$ gets height values
 * onResize(100, 500)
 * ```
 *
 * @param init A **pure** function that, when applied to an inputs Observable,
 * returns an Observable.
 * @param selector A function that transforms a list of event arguments
 * into a single value.
 */
export function useObservableCallback<
  Output,
  Event = Output,
  Args extends any[] = [Event]
>(
  init: (events$: Observable<Event>) => Observable<Output>,
  selector?: (args: Args) => Event
): [(...args: Args) => void, Observable<Output>] {
  const events$Ref = useRefFn<Subject<Event>>(getEmptySubject)
  const outputs$Ref = useRefFn(() => init(events$Ref.current))
  const callbackRef = useRef((...args: Args) => {
    events$Ref.current.next(selector ? selector(args) : args[0])
  })
  return [callbackRef.current, outputs$Ref.current]
}
