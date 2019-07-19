import { Observable } from 'rxjs'
import { useSubscription } from './use-subscription'
import { useState, useRef } from 'react'
import { useAsync } from './helpers'
import { useObservableCallback } from './use-observable-callback'

/**
 * Like `useState` but with Observable.
 *
 * Unlike `useState`, you can also set and get with different types by
 * passing a function instead of an Observable.
 *
 * ⚠ **Note: You can pass either a function or an Observable but do not**
 * **change to one another during Component's life cycle cause it will**
 * **break hooks order.**
 *
 * `of`, `startWith` and other sync operations can be safely used here and
 * won't trigger an extra initial rerender. Or just use the optional `initValue`.
 * But if both are provided, `initValue` will be ignored.
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
 * Event listenr:
 *
 * ```typescript
 * const [text, onChange] = useObservableState<
 *  string,
 *  React.ChangeEvent<HTMLInputElement>
 * >(events$ => events$.pipe(pluck('currentTarget', 'value')), '')
 * ```
 */
export function useObservableState<State>(
  inputs$: Observable<State>
): State | undefined
export function useObservableState<State>(
  inputs$: Observable<State>,
  initValue: State
): State
export function useObservableState<State, Input = State>(
  enhance: (inputs$: Observable<Input>) => Observable<State>
): [State | undefined, (input: Input) => void]
export function useObservableState<State, Input = State>(
  enhance: (inputs$: Observable<Input>) => Observable<State>,
  initValue: State
): [State, (input: Input) => void]
export function useObservableState<State, Input = State>(
  ...args:
    | [Observable<State>]
    | [Observable<State>, State]
    | [((inputs$: Observable<Input>) => Observable<State>)]
    | [((inputs$: Observable<Input>) => Observable<State>), State]
): State | undefined | [State | undefined, (input: Input) => void] {
  const isAsyncRef = useAsync()
  const isRenderedRef = useRef(false)
  /** First returned state */
  const firstStateRef = useRef<State | undefined>(args[1])

  const [state, setState] = useState<State | undefined>(args[1])

  let callback: undefined | ((input: Input) => void)
  let states$: Observable<State>
  if (typeof args[0] === 'function') {
    ;[callback, states$] = useObservableCallback(args[0])
  } else {
    states$ = args[0]
  }

  useSubscription(states$, state => {
    // console.log(isAsyncRef.current, state, 'ssssss')
    if (isAsyncRef.current) {
      if (!isRenderedRef.current) {
        // Set this first so that the
        // first state from setState will be used
        isRenderedRef.current = true
        // Dump the hack state to free memory
        firstStateRef.current = undefined
      }
      // trigger rerender
      setState(state)
    } else {
      // Here we skip the first setState rerendering
      // by offering our own copy of init state.
      //
      // Because we skip the setState, we need to
      // keep a copy of this state in case the Component
      // rerenders before its first setState. (e.g. triggered
      // by parent Cromponent or other states)
      firstStateRef.current = state
    }
  })

  const returnState = isRenderedRef.current ? state : firstStateRef.current

  return callback ? [returnState, callback] : returnState
}
