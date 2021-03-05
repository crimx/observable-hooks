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
 * directly inside `init`. Use ref or [[useObservable]] with `withLatestFrom` instead.
 *
 * @template TOutput Output value within Observable.
 * @template TInput Selected values.
 * @template TParams A tuple of event callback parameters.
 *
 * @param init A pure function that, when applied to an Observable,
 * returns an Observable.
 * @param selector A function that transforms an array of event arguments
 * into a single value.
 */
export function useObservableCallback<TOutput, TInput = TOutput>(
  init: (events$: Observable<TInput>) => Observable<TOutput>
): [(args: TInput) => void, Observable<TOutput>]
export function useObservableCallback<
  TOutput,
  TInput = TOutput,
  TParams extends Readonly<any[]> = [TInput]
>(
  init: (events$: Observable<TInput>) => Observable<TOutput>,
  selector: (args: TParams) => TInput
): [(...args: TParams) => void, Observable<TOutput>]
export function useObservableCallback<
  TOutput,
  TInput = TOutput,
  TParams extends Readonly<any[]> = [TInput]
>(
  init: (events$: Observable<TInput>) => Observable<TOutput>,
  selector?: (args: TParams) => TInput
): [(...args: TParams) => void, Observable<TOutput>] {
  const events$Ref = useRefFn<Subject<TInput>>(getEmptySubject)
  const outputs$Ref = useRefFn(() => init(events$Ref.current))
  const callbackRef = useRef((...args: TParams) => {
    events$Ref.current.next(selector ? selector(args) : args[0])
  })
  return [callbackRef.current, outputs$Ref.current]
}
