import { Observable, isObservable, Subject } from 'rxjs'
import { useState, useRef } from 'react'
import { useSubscription } from './use-subscription'
import { useRefFn, getEmptySubject } from './helpers'

/**
 * A sugar hook for getting values from an Observable.
 *
 * Is can be used in two ways:
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
 * ⚠ **Note:** These two ways use different hooks, choose either one each time
 * and do not change to the other one during Component's life cycle.
 *
 * ⚠ **Note:** `useObservableState` will call the epic-like `init` function only once
 * and always return the same Observable.
 * It is not safe to access closure directly inside `init`.
 * Use ref or [[useObservable]] with `withLatestFrom` instead.
 *
 * ⚠ **Note:** To make it concurrent mode compatible, the subscription happens
 * in commit phase which means even the Observable emits synchronous values
 * they will arrive after the first rendering.
 *
 * @template TState Output state.
 * @template TSyncInit Does the Observable emit sync values?
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
 * @param initialState Initial state.
 */
export function useObservableState<TState>(
  input$: Observable<TState>,
  initialState: TState | (() => TState)
): TState
/**
 * @template TState Output state.
 * @template TInput Input values.
 * @template TSyncInit Does the Observable emit sync values?
 *
 * @param init A pure function that, when applied to an Observable,
 * returns an Observable.
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
 * @param init A pure function that, when applied to an Observable
 * and the initialState, returns an Observable.
 * @param initialState Initial state.
 */
export function useObservableState<TState, TInput = TState>(
  init: (
    input$: Observable<TInput>,
    initialState: TState
  ) => Observable<TState>,
  initialState: TState | (() => TState)
): [TState, (input: TInput) => void]
export function useObservableState<TState, TInput = TState>(
  ...args:
    | [Observable<TState>]
    | [Observable<TState>, TState | (() => TState)]
    | [
        (
          input$: Observable<TInput>,
          initialState?: TState
        ) => Observable<TState>
      ]
    | [
        (
          input$: Observable<TInput>,
          initialState?: TState
        ) => Observable<TState>,
        TState | (() => TState)
      ]
): TState | undefined | [TState | undefined, (input: TInput) => void] {
  const [state, setState] = useState<TState | undefined>(args[1])

  let callback: undefined | ((input: TInput) => void)
  let state$: Observable<TState>

  if (isObservable(args[0])) {
    state$ = args[0]
  } else {
    // make ts infer call signatures from array item
    const init = args[0]
    // Even though hooks are under conditional block
    // it is for a completely different use case
    // which unlikely coexists with the other one.
    // A warning is also added to the docs.
    const input$Ref = useRefFn<Subject<TInput>>(getEmptySubject)

    state$ = useRefFn(() => init(input$Ref.current, state)).current
    callback = useRef((state: TInput) => input$Ref.current.next(state)).current
  }

  useSubscription(state$, state => setState(state))

  return callback ? [state, callback] : state
}
