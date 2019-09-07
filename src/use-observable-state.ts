import { Observable } from 'rxjs'
import { useSubscription } from './use-subscription'
import { useState, useRef, Dispatch, SetStateAction } from 'react'
import { useObservableCallback } from './use-observable-callback'

/**
 * Like `useState` but with Observable.
 *
 * Unlike `useState`, you can also set and get with different types by
 * passing a function instead of an Observable.
 *
 * ⚠ **Note: You can pass either a function or an Observable as first argument**
 * **but do not change to one another during Component's life cycle because it**
 * **will break hooks order.**
 *
 * `of`, `startWith` and other sync operations can be safely used here and
 * won't trigger an extra initial rerender.
 *
 * You can also use the optional `initState` which will be directly passed to the result.
 * But if sync values are also emitted from the Observable, `initState` will be ignored.
 *
 * It it recommended to use `initState` for simple primitive value.
 * For others, init in Observable to save some (re)computations.
 *
 * Examples:
 *
 *
 * Pass an Observable
 *
 * ```typescript
 * const count$ = useObservable(() => interval(1000))
 * const count = useObservableState(count$)
 * ```
 *
 * Pass a function
 *
 * ```typescript
 * const [text, updateText] = useObservableState<string>(
 *   text$ => text$.pipe(delay(1000))
 * )
 * ```
 *
 * With different types
 *
 * ```typescript
 * const [isValid, updateText] = useObservableState<boolean, string>(text$ =>
 *   text$.pipe(map(text => text.length > 1))
 * )
 * ```
 *
 * With init value:
 *
 * ```typescript
 * const count$ = useObservable(() => interval(1000))
 * const count = useObservableState(count$, -1)
 * ```
 *
 * Or function with init value:
 *
 * ```typescript
 * // Types now can be inferred
 * const [text, updateText] = useObservableState(
 *   text$ => text$.pipe(delay(1000)),
 *   'init text'
 * )
 * ```
 *
 * Or use `startWith`:
 *
 * ```typescript
 * const [text, updateText] = useObservableState<string>(
 *   text$ => text$.pipe(delay(1000), startWith('init text')),
 * )
 * ```
 *
 * (From v2.1.2) Pass `true` to `WithSyncValues` generic to remove `undefined`
 * from resulted type.
 *
 * ```typescript
 * // time is `string` now instead of `string | undefined`
 * const time = useObservableState<string, true>(
 *   useObservable(
 *     () => interval(1000).pipe(
 *       startWith(-1),
 *       map(() => new Date().toLocaleString())
 *     )
 *   )
 * )
 * ```
 *
 * Event listenr:
 *
 * ```typescript
 * import { pluckCurrentTargetValue, useObservableState } from 'observable-hooks'
 *
 * const [text, onChange] = useObservableState<
 *  string,
 *  React.ChangeEvent<HTMLInputElement>
 * >(pluckCurrentTargetValue, '')
 * ```
 */
export function useObservableState<State, WithSyncValues = false>(
  inputs$: Observable<State>
): WithSyncValues extends false ? State | undefined : State
export function useObservableState<State>(
  inputs$: Observable<State>,
  initState: State
): State
export function useObservableState<
  State,
  Input = State,
  WithSyncValues = false
>(
  init: (inputs$: Observable<Input>) => Observable<State>
): [
  WithSyncValues extends false ? State | undefined : State,
  (input: Input) => void
]
export function useObservableState<State, Input = State>(
  init: (inputs$: Observable<Input>) => Observable<State>,
  initState: State
): [State, (input: Input) => void]
export function useObservableState<State, Input = State>(
  ...args:
    | [Observable<State>]
    | [Observable<State>, State]
    | [((inputs$: Observable<Input>) => Observable<State>)]
    | [((inputs$: Observable<Input>) => Observable<State>), State]
): State | undefined | [State | undefined, (input: Input) => void] {
  const stateRef = useRef<State | undefined>(args[1])
  const setStateRef = useRef<Dispatch<SetStateAction<State | undefined>>>()

  let callback: undefined | ((input: Input) => void)
  let states$: Observable<State>
  if (typeof args[0] === 'function') {
    ;[callback, states$] = useObservableCallback(args[0])
  } else {
    states$ = args[0]
  }

  useSubscription(states$, state => {
    // assign value before setState
    stateRef.current = state

    if (setStateRef.current) {
      setStateRef.current(state)
    }
  })

  // Putting useState after subcription will skip re-rendering
  // of all sync emitted values from the Observable.
  setStateRef.current = useState(stateRef.current)[1]

  return callback ? [stateRef.current, callback] : stateRef.current
}
