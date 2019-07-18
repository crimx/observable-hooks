import { Observable } from 'rxjs'
import { useSubscription } from './use-subscription'
import { useState } from 'react'
import { isAsync } from './helpers'
import { useObservableCallback } from './use-observable-callback'

/**
 * Like `useState` but with Observable.
 *
 * `startWith` can be used here and won't trigger a initial rerender.
 *
 * Or just use the optional `initValue`.
 *
 * Examples:
 *
 * ```typescript
 * const [text, updateText] = useObservableState(
 *   text$ => text$.pipe(delay(1000))
 * )
 * ```
 *
 * With init value:
 *
 * ```typescript
 * const [text, updateText] = useObservableState(
 *   text$ => text$.pipe(delay(1000)),
 *   'init text'
 * )
 * ```
 *
 * Or:
 *
 * ```typescript
 * const [text, updateText] = useObservableState(
 *   text$ => text$.pipe(delay(1000), startWith('init text')),
 * )
 * ```
 */
export function useObservableState<Input, State>(
  enhance: (inputs$: Observable<Input>) => Observable<State>
): [State | undefined, (input: Input) => void]
export function useObservableState<Input, State>(
  enhance: (inputs$: Observable<Input>) => Observable<State>,
  initValue: State
): [State, (input: Input) => void]
export function useObservableState<Input, State>(
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
