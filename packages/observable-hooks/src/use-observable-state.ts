import { Observable, isObservable, Subject } from 'rxjs'
import { useState, useRef, useDebugValue } from 'react'
import { useSubscription } from './use-subscription'
import { useRefFn, getEmptySubject } from './helpers'

/**
 * A sugar hook for getting values from an Observable.
 *
 * It can be used in two ways:
 *
 * 1. Offer an Observable and an optional initial state.
 *    ```js
 *    const output = useObservableState(input$, initialState)
 *    ```
 * 2. Offer an epic-like function and an optional initial state.
 *    ```js
 *    const [output, onInput] = useObservableState(
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
 * ⚠ **Note:** `useObservableState` will call the epic-like `init` function only once
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
 * @param input$ An Observable.
 */
export function useObservableState<TState>(
  input$: Observable<TState>
): TState | undefined
/**
 * @template TState Output state.
 *
 * @param input$ An Observable.
 * @param initialState Optional initial state.
 * Can be the state value or a function that returns the state.
 */
export function useObservableState<TState>(
  input$: Observable<TState>,
  initialState: TState | (() => TState)
): TState
/**
 * @template TState Output state.
 * @template TInput Input values.
 *
 * @param init A epic-like function that, when applied to an Observable
 * and the initial state value, returns an Observable.
 */
export function useObservableState<TState, TInput = TState>(
  init: (input$: Observable<TInput>) => Observable<TState>
): [TState | undefined, (input: TInput) => void]
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
export function useObservableState<TState, TInput = TState>(
  init: (
    input$: Observable<TInput>,
    initialState: TState
  ) => Observable<TState>,
  initialState: TState | (() => TState)
): [TState, (input: TInput) => void]
export function useObservableState<TState, TInput = TState>(
  state$OrInit:
    | Observable<TState>
    | ((
        input$: Observable<TInput>,
        initialState?: TState
      ) => Observable<TState>),
  initialState?: TState | (() => TState)
): TState | undefined | [TState | undefined, (input: TInput) => void] {
  const [state, setState] = useState<TState | undefined>(initialState)

  let callback: undefined | ((input: TInput) => void)
  let state$: Observable<TState>

  if (isObservable(state$OrInit)) {
    state$ = state$OrInit
  } else {
    const init = state$OrInit
    // Even though hooks are under conditional block
    // it is for a completely different use case
    // which unlikely coexists with the other one.
    // A warning is also added to the docs.
    const input$Ref = useRefFn<Subject<TInput>>(getEmptySubject)

    state$ = useRefFn(() => init(input$Ref.current, state)).current
    callback = useRef((state: TInput) => input$Ref.current.next(state)).current
  }

  useSubscription(state$, setState)

  // Display state in React DevTools.
  useDebugValue(state)

  return callback ? [state, callback] : state
}
