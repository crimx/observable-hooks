import { Observable } from 'rxjs'
import { useSubscription } from './use-subscription'
import { useState, useRef, Dispatch, SetStateAction } from 'react'
import { useObservableCallback } from './use-observable-callback'

/**
 * A helper to get value from an Observable.
 *
 * You can also use the regular `useState` with [[useSubscription]] directly
 * which will trigger extra initial re-renders
 * when sync values are emitted from the Observable (e.g. `of` or `startWith`).
 *
 * ⚠ **Note:** `useObservableState` will call `init` once and always return
 * the same Observable. It is not safe to access closure (except other Observables)
 * directly inside `init`. Use [[useObservable]] and `withLatestFrom` instead.
 *
 * ⚠ **Note:** Due to hooks policy you can offer either a function or an Observable
 * as the first argument but do not change to one another during Component's life cycle.
 *Subscription will auto-unsubscribe when unmount, you can also unsubscribe manually.
 * You can also use the optional `initState` which will be directly passed to the result.
 * But if sync values are also emitted from the Observable `initState` will be ignored.
 *
 * It it recommended to use `initState` for simple primitive value.
 * For others, init with the Observable to save some (re)computations.
 *
 * @template TState Output state.
 * @template TSyncInit Does the Observable emit sync values?
 *
 * @param input$ An Observable.
 */
export function useObservableState<TState, TSyncInit = false>(
  input$: Observable<TState>
): TSyncInit extends false ? TState | undefined : TState
/**
 * @template TState Output state.
 *
 * @param input$ An Observable.
 * @param initState Initial state.
 */
export function useObservableState<TState>(
  input$: Observable<TState>,
  initState: TState
): TState
/**
 * @template TState Output state.
 * @template TInput Input values.
 * @template TSyncInit Does the Observable emit sync values?
 *
 * @param init A pure function that, when applied to an Observable,
 * returns an Observable.
 */
export function useObservableState<TState, TInput = TState, TSyncInit = false>(
  init: (input$: Observable<TInput>) => Observable<TState>
): [
  TSyncInit extends false ? TState | undefined : TState,
  (input: TInput) => void
]
/**
 * Different input output types with initial state.
 *
 * @template TState Output state.
 * @template TInput Input values.
 *
 * @param init A pure function that, when applied to an Observable,
 * returns an Observable.
 * @param initState Initial state.
 */
export function useObservableState<TState, TInput = TState>(
  init: (input$: Observable<TInput>) => Observable<TState>,
  initState: TState
): [TState, (input: TInput) => void]
export function useObservableState<TState, TInput = TState>(
  ...args:
    | [Observable<TState>]
    | [Observable<TState>, TState]
    | [(input$: Observable<TInput>) => Observable<TState>]
    | [(input$: Observable<TInput>) => Observable<TState>, TState]
): TState | undefined | [TState | undefined, (input: TInput) => void] {
  const stateRef = useRef<TState | undefined>(args[1])
  const setStateRef = useRef<Dispatch<SetStateAction<TState | undefined>>>()

  let callback: undefined | ((input: TInput) => void)
  let states$: Observable<TState>
  if (typeof args[0] === 'function') {
    ;[callback, states$] = useObservableCallback(args[0])
  } else {
    states$ = args[0]
  }

  useSubscription(states$, state => {
    if (stateRef.current !== state) {
      // assign value before setState
      stateRef.current = state

      if (setStateRef.current) {
        setStateRef.current(state)
      }
    }
  })

  // Putting useState after subcription will skip re-rendering
  // of all sync emitted values from the Observable.
  setStateRef.current = useState(stateRef.current)[1]

  return callback ? [stateRef.current, callback] : stateRef.current
}
