import { Observable, Subject } from "rxjs";
import { useRef, useState } from "react";
import { getEmptySubject, identity } from "./helpers";

/**
 * Returns a callback function and an events Observable.
 *
 * When the callback is called, the Observable will
 * emit the first argument of the callback.
 *
 * @template TEvent Output value of Observable.
 */
export function useObservableCallback<TEvent = void>(): [
  (event: TEvent) => void,
  Observable<TEvent>
];
/**
 * Returns a callback function and an events Observable.
 *
 * When the callback is called, the Observable will
 * emit the first argument of the callback.
 *
 * ⚠ **Note:** `useObservableCallback` will call `init` once and always return
 * the same Observable. It is not safe to access closure (except other Observables)
 * directly inside `init`. Use ref or [[useObservable]] with `withLatestFrom` instead.
 *
 * @template TOutput Output value within Observable.
 * @template TInput Selected values.
 *
 * @param init A pure function that, when applied to an Observable,
 * returns an Observable.
 */
export function useObservableCallback<TOutput, TInput = TOutput>(
  init: (events$: Observable<TInput>) => Observable<TOutput>
): [(event: TInput) => void, Observable<TOutput>];
/**
 * Returns a callback function and an events Observable.
 *
 * When the callback is called, the Observable will
 * emit the first argument of the callback.
 *
 * (From v2.1.0) Optionally accepts a selector function that transforms
 * a list of event arguments into a single value.
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
export function useObservableCallback<
  TOutput = undefined,
  TInput = TOutput,
  TParams extends Readonly<any[]> = [TInput]
>(
  init: (events$: Observable<TInput>) => Observable<TOutput>,
  selector: (args: TParams) => TInput
): [(...args: TParams) => void, Observable<TOutput>];
export function useObservableCallback<
  TOutput,
  TInput = TOutput,
  TParams extends Readonly<any[]> = [TInput]
>(
  init = identity as (events$: Observable<TInput>) => Observable<TOutput>,
  selector?: (args: TParams) => TInput
): [(...args: TParams) => void, Observable<TOutput>] {
  const [events$] = useState<Subject<TInput>>(getEmptySubject);
  const [outputs$] = useState(() => init(events$));
  const callback = useRef((...args: TParams) => {
    events$.next(selector ? selector(args) : args[0]);
  }).current;
  return [callback, outputs$];
}
