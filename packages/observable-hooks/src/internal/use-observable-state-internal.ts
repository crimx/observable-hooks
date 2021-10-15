import { Observable, isObservable, Subject } from 'rxjs'
import { useState, useRef, useDebugValue } from 'react'
import type { useSubscription as useSubscriptionType } from '../use-subscription'
import { useRefFn, getEmptySubject } from '../helpers'

export function useObservableStateInternal<TState, TInput = TState>(
  useSubscription: typeof useSubscriptionType,
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
