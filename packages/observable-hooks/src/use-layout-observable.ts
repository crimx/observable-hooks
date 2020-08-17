import { Observable } from 'rxjs'
import { useIsomorphicLayoutEffect } from './helpers'
import { useObservableInternal } from './internal/use-observable-internal'

/**
 * Same as [[useObservable]] excepts using `useLayoutEffect`.
 *
 * Accepts a function that returns an Observable.
 * Optionally accepts an array of dependencies which
 * will be turned into Observable and be passed to the
 * `init` function.
 *
 * React function components will be called many times during its life cycle.
 * Create or transform Observables in `init` function so that the operations
 * won't be repeatedly performed.
 *
 * ⚠ **Note:** `useLayoutObservable` will call `init` once and always return
 * the same Observable. It is not safe to access closure (except other Observables)
 * directly inside `init`.
 * You should use ref or pass them as dependencies through the second argument.
 *
 * ⚠ **Note:** Due to rules of hooks you can either offer or omit the
 * dependencies array but do not change to one another during Component's life cycle.
 * The length of the dependencies array must also be fixed.
 *
 * @template TOutupt Output value in Observable
 *
 * @param init A pure function that, when applied to an Observable,
 * returns an Observable.
 */
export function useLayoutObservable<TOutupt>(
  init: () => Observable<TOutupt>
): Observable<TOutupt>
/**
 * @template TOutupt Output value within Observable.
 * @template TInputs An readonly tuple of all dependencies.
 *
 * @param init A pure function that, when applied to an Observable,
 * returns an Observable.
 * @param inputs An dependency array with fixed length. When one of the dependencies
 * changes the Observable in `init` will emit an array of all the dependencies.
 */
export function useLayoutObservable<TOutupt, TInputs extends Readonly<any[]>>(
  init: (inputs$: Observable<TInputs>) => Observable<TOutupt>,
  inputs: TInputs
): Observable<TOutupt>
export function useLayoutObservable<TOutupt, TInputs extends Readonly<any[]>>(
  init:
    | (() => Observable<TOutupt>)
    | ((inputs$: Observable<TInputs>) => Observable<TOutupt>),
  inputs?: TInputs
): Observable<TOutupt> {
  return useObservableInternal(useIsomorphicLayoutEffect, init, inputs)
}
