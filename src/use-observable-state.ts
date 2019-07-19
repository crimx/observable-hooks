import { Observable } from 'rxjs'
import { useSubscription } from './use-subscription'
import { useState } from 'react'
import { isAsync } from './helpers'
import { useObservableCallback } from './use-observable-callback'

/**
 * Like `useState` but with Observable.
 *
 * Unlike `useState`, you can set and get with different types.
 *
 * `startWith` can be used here and won't trigger a initial rerender.
 *
 * Or just use the optional `initValue`.
 *
 * Examples:
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
 * // Types now can be inferred
 * const [text, updateText] = useObservableState(
 *   text$ => text$.pipe(delay(1000)),
 *   'init text'
 * )
 * ```
 *
 * Or:
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
export function useObservableState<State, Input = State>(
  enhance: (inputs$: Observable<Input>) => Observable<State>
): [State | undefined, (input: Input) => void]
export function useObservableState<State, Input = State>(
  enhance: (inputs$: Observable<Input>) => Observable<State>,
  initValue: State
): [State, (input: Input) => void]
export function useObservableState<State, Input = State>(
  enhance: (inputs$: Observable<Input>) => Observable<State>,
  initValue?: State
): [State | undefined, (input: Input) => void] {
  const isAsyncRef = isAsync()
  const [state, setState] = useState<State | undefined>(initValue)
  const [callback, states$] = useObservableCallback(enhance)

  let returnState = state

  useSubscription(states$, state => {
    if (isAsyncRef.current) {
      // trigger rerender
      setState(state)
    } else {
      returnState = state
    }
  })

  return [returnState, callback]
}
