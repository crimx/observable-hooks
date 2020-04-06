import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { useObservableState } from './use-observable-state'
import { useObservable } from './use-observable'

/**
 * Gets the value at path of state.
 * Only changes of the resulted value will trigger a rerendering.
 * Errors are thrown on unreachable path.
 *
 * @param state$ Output state.
 */
export function useObservableGetState<TState>(
  state$: Observable<TState>
): TState | undefined
export function useObservableGetState<TState, A extends keyof TState>(
  state$: Observable<TState>,
  pA: A
): TState[A] | undefined
export function useObservableGetState<
  TState,
  A extends keyof TState,
  B extends keyof TState[A]
>(state$: Observable<TState>, pA: A, pB: B): TState[A][B] | undefined
export function useObservableGetState<
  TState,
  A extends keyof TState,
  B extends keyof TState[A],
  C extends keyof TState[A][B]
>(state$: Observable<TState>, pA: A, pB: B, pC: C): TState[A][B][C] | undefined
export function useObservableGetState<
  TState,
  A extends keyof TState,
  B extends keyof TState[A],
  C extends keyof TState[A][B],
  D extends keyof TState[A][B][C]
>(
  state$: Observable<TState>,
  pA: A,
  pB: B,
  pC: C,
  pD: D
): TState[A][B][C][D] | undefined
export function useObservableGetState<
  TState,
  A extends keyof TState,
  B extends keyof TState[A],
  C extends keyof TState[A][B],
  D extends keyof TState[A][B][C],
  E extends keyof TState[A][B][C][D]
>(
  state$: Observable<TState>,
  pA: A,
  pB: B,
  pC: C,
  pD: D,
  pE: E
): TState[A][B][C][D][E] | undefined
export function useObservableGetState<
  TState,
  A extends keyof TState,
  B extends keyof TState[A],
  C extends keyof TState[A][B],
  D extends keyof TState[A][B][C],
  E extends keyof TState[A][B][C][D],
  F extends keyof TState[A][B][C][D][E]
>(
  state$: Observable<TState>,
  pA: A,
  pB: B,
  pC: C,
  pD: D,
  pE: E,
  pF: F
): TState[A][B][C][D][E][F] | undefined
export function useObservableGetState<
  TState,
  A extends keyof TState,
  B extends keyof TState[A],
  C extends keyof TState[A][B],
  D extends keyof TState[A][B][C],
  E extends keyof TState[A][B][C][D],
  F extends keyof TState[A][B][C][D][E],
  G extends keyof TState[A][B][C][D][E][F]
>(
  state$: Observable<TState>,
  pA: A,
  pB: B,
  pC: C,
  pD: D,
  pE: E,
  pF: F,
  pG: G
): TState[A][B][C][D][E][F][G] | undefined
export function useObservableGetState<
  TState,
  A extends keyof TState,
  B extends keyof TState[A],
  C extends keyof TState[A][B],
  D extends keyof TState[A][B][C],
  E extends keyof TState[A][B][C][D],
  F extends keyof TState[A][B][C][D][E],
  G extends keyof TState[A][B][C][D][E][F],
  H extends keyof TState[A][B][C][D][E][F][G]
>(
  state$: Observable<TState>,
  pA: A,
  pB: B,
  pC: C,
  pD: D,
  pE: E,
  pF: F,
  pG: G,
  pH: H
): TState[A][B][C][D][E][F][G][H] | undefined
export function useObservableGetState<
  TState,
  A extends keyof TState,
  B extends keyof TState[A],
  C extends keyof TState[A][B],
  D extends keyof TState[A][B][C],
  E extends keyof TState[A][B][C][D],
  F extends keyof TState[A][B][C][D][E],
  G extends keyof TState[A][B][C][D][E][F],
  H extends keyof TState[A][B][C][D][E][F][G],
  I extends keyof TState[A][B][C][D][E][F][G][H]
>(
  state$: Observable<TState>,
  pA: A,
  pB: B,
  pC: C,
  pD: D,
  pE: E,
  pF: F,
  pG: G,
  pH: H,
  pI: I
): TState[A][B][C][D][E][F][G][H][I] | undefined
export function useObservableGetState<
  TState,
  A extends keyof TState,
  B extends keyof TState[A],
  C extends keyof TState[A][B],
  D extends keyof TState[A][B][C],
  E extends keyof TState[A][B][C][D],
  F extends keyof TState[A][B][C][D][E],
  G extends keyof TState[A][B][C][D][E][F],
  H extends keyof TState[A][B][C][D][E][F][G],
  I extends keyof TState[A][B][C][D][E][F][G][H],
  J extends keyof TState[A][B][C][D][E][F][G][H][I]
>(
  state$: Observable<TState>,
  pA: A,
  pB: B,
  pC: C,
  pD: D,
  pE: E,
  pF: F,
  pG: G,
  pH: H,
  pI: I,
  pJ: J
): TState[A][B][C][D][E][F][G][H][I][J] | undefined
export function useObservableGetState<TState>(
  state$: Observable<TState>,
  ...path: any[]
) {
  return useObservableState(
    useObservable(() => state$.pipe(map(state => path.reduce(getValue, state))))
  )
}

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}
