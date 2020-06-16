import { useDebugValue } from 'react'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { useObservableState } from './use-observable-state'
import { useObservable } from './use-observable'

/**
 * Gets the value at path of state. Similar to lodash `get`.
 * Only changes of the resulted value will trigger a rerendering.
 * Errors are thrown on unreachable path.
 *
 * @param state$ Output state.
 */
export function useObservableGetState<TState>(
  state$: Observable<TState>,
  initialState: TState | (() => TState)
): TState
export function useObservableGetState<
  TState,
  TInitial extends null | undefined | void
>(state$: Observable<TState>, initialState: TInitial): TState | TInitial
export function useObservableGetState<TState, A extends keyof TState>(
  state$: Observable<TState>,
  initialState: TState[A] | (() => TState[A]),
  pA: A
): TState[A]
export function useObservableGetState<
  TState,
  TInitial extends null | undefined | void,
  A extends keyof TState
>(
  state$: Observable<TState>,
  initialState: TInitial,
  pA: A
): TState[A] | TInitial
export function useObservableGetState<
  TState,
  A extends keyof TState,
  B extends keyof TState[A]
>(
  state$: Observable<TState>,
  initialState: TState[A][B] | (() => TState[A][B]),
  pA: A,
  pB: B
): TState[A][B]
export function useObservableGetState<
  TState,
  TInitial extends null | undefined | void,
  A extends keyof TState,
  B extends keyof TState[A]
>(
  state$: Observable<TState>,
  initialState: TInitial,
  pA: A,
  pB: B
): TState[A][B] | TInitial
export function useObservableGetState<
  TState,
  A extends keyof TState,
  B extends keyof TState[A],
  C extends keyof TState[A][B]
>(
  state$: Observable<TState>,
  initialState: TState[A][B][C] | (() => TState[A][B][C]),
  pA: A,
  pB: B,
  pC: C
): TState[A][B][C]
export function useObservableGetState<
  TState,
  TInitial extends null | undefined | void,
  A extends keyof TState,
  B extends keyof TState[A],
  C extends keyof TState[A][B]
>(
  state$: Observable<TState>,
  initialState: TInitial,
  pA: A,
  pB: B,
  pC: C
): TState[A][B][C] | TInitial
export function useObservableGetState<
  TState,
  A extends keyof TState,
  B extends keyof TState[A],
  C extends keyof TState[A][B],
  D extends keyof TState[A][B][C]
>(
  state$: Observable<TState>,
  initialState: TState[A][B][C][D] | (() => TState[A][B][C][D]),
  pA: A,
  pB: B,
  pC: C,
  pD: D
): TState[A][B][C][D]
export function useObservableGetState<
  TState,
  TInitial extends null | undefined | void,
  A extends keyof TState,
  B extends keyof TState[A],
  C extends keyof TState[A][B],
  D extends keyof TState[A][B][C]
>(
  state$: Observable<TState>,
  initialState: TInitial,
  pA: A,
  pB: B,
  pC: C,
  pD: D
): TState[A][B][C][D] | TInitial
export function useObservableGetState<
  TState,
  A extends keyof TState,
  B extends keyof TState[A],
  C extends keyof TState[A][B],
  D extends keyof TState[A][B][C],
  E extends keyof TState[A][B][C][D]
>(
  state$: Observable<TState>,
  initialState: TState[A][B][C][D][E] | (() => TState[A][B][C][D][E]),
  pA: A,
  pB: B,
  pC: C,
  pD: D,
  pE: E
): TState[A][B][C][D][E]
export function useObservableGetState<
  TState,
  TInitial extends null | undefined | void,
  A extends keyof TState,
  B extends keyof TState[A],
  C extends keyof TState[A][B],
  D extends keyof TState[A][B][C],
  E extends keyof TState[A][B][C][D]
>(
  state$: Observable<TState>,
  initialState: TInitial,
  pA: A,
  pB: B,
  pC: C,
  pD: D,
  pE: E
): TState[A][B][C][D][E] | TInitial
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
  initialState: TState[A][B][C][D][E][F] | (() => TState[A][B][C][D][E][F]),
  pA: A,
  pB: B,
  pC: C,
  pD: D,
  pE: E,
  pF: F
): TState[A][B][C][D][E][F]
export function useObservableGetState<
  TState,
  TInitial extends null | undefined | void,
  A extends keyof TState,
  B extends keyof TState[A],
  C extends keyof TState[A][B],
  D extends keyof TState[A][B][C],
  E extends keyof TState[A][B][C][D],
  F extends keyof TState[A][B][C][D][E]
>(
  state$: Observable<TState>,
  initialState: TInitial,
  pA: A,
  pB: B,
  pC: C,
  pD: D,
  pE: E,
  pF: F
): TState[A][B][C][D][E][F] | TInitial
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
  initialState:
    | TState[A][B][C][D][E][F][G]
    | (() => TState[A][B][C][D][E][F][G]),
  pA: A,
  pB: B,
  pC: C,
  pD: D,
  pE: E,
  pF: F,
  pG: G
): TState[A][B][C][D][E][F][G]
export function useObservableGetState<
  TState,
  TInitial extends null | undefined | void,
  A extends keyof TState,
  B extends keyof TState[A],
  C extends keyof TState[A][B],
  D extends keyof TState[A][B][C],
  E extends keyof TState[A][B][C][D],
  F extends keyof TState[A][B][C][D][E],
  G extends keyof TState[A][B][C][D][E][F]
>(
  state$: Observable<TState>,
  initialState: TInitial,
  pA: A,
  pB: B,
  pC: C,
  pD: D,
  pE: E,
  pF: F,
  pG: G
): TState[A][B][C][D][E][F][G] | TInitial
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
  initialState:
    | TState[A][B][C][D][E][F][G][H]
    | (() => TState[A][B][C][D][E][F][G][H]),
  pA: A,
  pB: B,
  pC: C,
  pD: D,
  pE: E,
  pF: F,
  pG: G,
  pH: H
): TState[A][B][C][D][E][F][G][H]
export function useObservableGetState<
  TState,
  TInitial extends null | undefined | void,
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
  initialState: TInitial,
  pA: A,
  pB: B,
  pC: C,
  pD: D,
  pE: E,
  pF: F,
  pG: G,
  pH: H
): TState[A][B][C][D][E][F][G][H] | TInitial
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
  initialState:
    | TState[A][B][C][D][E][F][G][H][I]
    | (() => TState[A][B][C][D][E][F][G][H][I]),
  pA: A,
  pB: B,
  pC: C,
  pD: D,
  pE: E,
  pF: F,
  pG: G,
  pH: H,
  pI: I
): TState[A][B][C][D][E][F][G][H][I]
export function useObservableGetState<
  TState,
  TInitial extends null | undefined | void,
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
  initialState: TInitial,
  pA: A,
  pB: B,
  pC: C,
  pD: D,
  pE: E,
  pF: F,
  pG: G,
  pH: H,
  pI: I
): TState[A][B][C][D][E][F][G][H][I] | TInitial
export function useObservableGetState<
  TState,
  TInitial extends null | undefined | void,
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
  initialState: TInitial,
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
): TState[A][B][C][D][E][F][G][H][I][J] | TInitial
export function useObservableGetState<TState, TInit>(
  state$: Observable<TState>,
  initialState: TInit | (() => TInit),
  ...path: any[]
) {
  const value = useObservableState(
    useObservable(() =>
      state$.pipe(map(state => path.reduce(getValue, state)))
    ),
    initialState
  )
  useDebugValue(value)
  return value
}

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}
