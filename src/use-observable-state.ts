import { Observable } from 'rxjs'
import { useSubscription } from './use-subscription'
import { useState } from 'react'
import { isAsync } from './helpers'
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
 * `startWith` can be used here and won't trigger a initial rerender.
 *
 * Or just use the optional `initValue`.
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
  const isAsyncRef = isAsync()
  const [state, setState] = useState<State | undefined>(args[1])

  let callback: undefined | ((input: Input) => void)
  let states$: Observable<State>
  if (typeof args[0] === 'function') {
    ;[callback, states$] = useObservableCallback(args[0])
  } else {
    states$ = args[0]
  }

  let returnState = state

  useSubscription(states$, state => {
    if (isAsyncRef.current) {
      // trigger rerender
      setState(state)
    } else {
      returnState = state
    }
  })

  return callback ? [returnState, callback] : returnState
}
