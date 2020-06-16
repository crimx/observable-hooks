import { useDebugValue } from 'react'
import { Observable } from 'rxjs'
import { map, distinctUntilChanged } from 'rxjs/operators'
import { useObservableState } from './use-observable-state'
import { useObservable } from './use-observable'

/**
 * Creates an object composed of the picked state properties. Similar to lodash `pick`.
 * Changes of any of these properties will trigger a rerendering.
 * Errors are thrown on unreachable path.
 *
 * @param state$ Output state.
 * @param keys keys of state
 */
export function useObservablePickState<
  TState,
  TKeys extends keyof TState,
  TInitial extends null | undefined | void
>(
  state$: Observable<TState>,
  initialState: TInitial,
  ...keys: TKeys[]
): { [K in TKeys]: TState[K] } | TInitial
export function useObservablePickState<TState, TKeys extends keyof TState>(
  state$: Observable<TState>,
  initialState:
    | { [K in TKeys]: TState[K] }
    | (() => { [K in TKeys]: TState[K] }),
  ...keys: TKeys[]
): { [K in TKeys]: TState[K] }
export function useObservablePickState<TState, TKeys extends keyof TState>(
  state$: Observable<TState>,
  initialState:
    | { [K in TKeys]: TState[K] }
    | (() => { [K in TKeys]: TState[K] }),
  ...keys: TKeys[]
): { [K in TKeys]: TState[K] } {
  const value = useObservableState(
    useObservable(() =>
      state$.pipe(
        distinctUntilChanged((s1, s2) => keys.every(k => s1[k] === s2[k])),
        map(state =>
          keys.reduce(
            // eslint-disable-next-line no-sequences
            (o, k) => ((o[k] = state[k]), o),
            {} as { [K in TKeys]: TState[K] }
          )
        )
      )
    ),
    initialState
  )
  useDebugValue(value)
  return value
}
