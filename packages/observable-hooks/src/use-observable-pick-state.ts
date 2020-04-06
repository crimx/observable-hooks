import { Observable } from 'rxjs'
import { map, distinctUntilChanged } from 'rxjs/operators'
import { useObservableState } from './use-observable-state'
import { useObservable } from './use-observable'

/**
 * Creates an object composed of the picked state properties.
 * Changes of any of these properties will trigger a rerendering.
 * Errors are thrown on unreachable path.
 *
 * @param state$ Output state.
 * @param keys keys of state
 */
export function useObservablePickState<
  TState,
  TKeys extends Array<keyof TState>
>(
  state$: Observable<TState>,
  ...keys: TKeys
): { [K in TKeys[number]]: TState[K] } | undefined {
  return useObservableState(
    useObservable(() =>
      state$.pipe(
        distinctUntilChanged((s1, s2) => keys.every(k => s1[k] === s2[k])),
        map(state =>
          keys.reduce(
            // eslint-disable-next-line no-sequences
            (o, k) => ((o[k] = state[k]), o),
            {} as { [K in TKeys[number]]: TState[K] }
          )
        )
      )
    )
  )
}
