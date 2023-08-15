import { BehaviorSubject, Observable } from "rxjs";
import { useLayoutSubscription } from "./use-layout-subscription";
import { useObservableStateInternal } from "./internal/use-observable-state-internal";

/**
 * Same as [[useObservableState]] except the subscription is established
 * under `useLayoutEffect`.
 *
 * A sugar hook for getting values from an Observable.
 *
 * It can be used in two ways:
 *
 * 1. Offer an Observable and an optional initial state.
 *    ```js
 *    const output = useLayoutObservableState(input$, initialState)
 *    ```
 * 2. Offer an epic-like function and an optional initial state.
 *    ```js
 *    const [output, onInput] = useLayoutObservableState(
 *      (input$, initialState) => input$.pipe(...),
 *      initialState
 *    )
 *    ```
 *
 * The optional `initialState` is internally passed to `useState(initialState)`.
 * This means it can be either a state value or a function that returns the state
 * which is for expensive initialization.
 *
 * The `initialState`(or its returned result) is also passed to the `init` function.
 * This is useful if you want to implement reduer pattern which requires an initial state.
 *
 * ⚠ **Note:** These two ways use different hooks, choose either one each time
 * and do not change to the other one during Component's life cycle.
 *
 * ⚠ **Note:** `useLayoutObservableState` will call the epic-like `init` function only once
 * and always return the same Observable.
 * It is not safe to access closure directly inside `init`.
 * Use [[useObservable]] with `withLatestFrom` instead.
 *
 * ⚠ **Note:** To make it concurrent mode compatible, the subscription happens
 * after the render is committed to the screen which means even the Observable emits synchronous values
 * they will arrive after the first rendering.
 *
 * @template TState Output state.
 *
 * @param input$ A BehaviorSubject.
 */
export function useLayoutObservableState<TState>(
  input$: BehaviorSubject<TState>
): TState;
/**
 * @template TState Output state.
 *
 * @param input$ An Observable.
 */
export function useLayoutObservableState<TState>(
  input$: Observable<TState>
): TState | undefined;
/**
 * @template TState Output state.
 *
 * @param input$ An Observable.
 * @param initialState Optional initial state.
 * Can be the state value or a function that returns the state.
 */
export function useLayoutObservableState<TState>(
  input$: Observable<TState>,
  initialState: TState | (() => TState)
): TState;
/**
 * @template TState Output state.
 * @template TInput Input values.
 *
 * @param init A epic-like function that, when applied to an Observable
 * and the initial state value, returns an Observable.
 */
export function useLayoutObservableState<TState, TInput = TState>(
  init: (input$: Observable<TInput>) => Observable<TState>
): [TState | undefined, (input: TInput) => void];
/**
 * Different input output types with initial state.
 *
 * @template TState Output state.
 * @template TInput Input values.
 *
 * @param init A epic-like function that, when applied to an Observable
 * and the initial state value, returns an Observable.
 * @param initialState Optional initial state.
 * Can be the state value or a function that returns the state.
 */
export function useLayoutObservableState<TState, TInput = TState>(
  init: (
    input$: Observable<TInput>,
    initialState: TState
  ) => Observable<TState>,
  initialState: TState | (() => TState)
): [TState, (input: TInput) => void];
export function useLayoutObservableState<TState, TInput = TState>(
  state$OrInit:
    | Observable<TState>
    | ((
        input$: Observable<TInput>,
        initialState?: TState
      ) => Observable<TState>),
  initialState?: TState | (() => TState)
): TState | undefined | [TState | undefined, (input: TInput) => void] {
  return useObservableStateInternal(
    useLayoutSubscription,
    state$OrInit,
    initialState
  );
}
