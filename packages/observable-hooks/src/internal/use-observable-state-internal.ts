import { Observable, isObservable, Subject, BehaviorSubject } from 'rxjs'
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
  // Even though hooks are under conditional block
  // it is for a completely different use case
  // which unlikely coexists with the other one.
  // A warning is also added to the docs.
  if (isObservable(state$OrInit)) {
    const state$ = state$OrInit
    const [state, setState] = useState<TState | undefined>(() => {
      if (
        state$ instanceof BehaviorSubject ||
        (state$ as BehaviorSubject<TState>).value !== undefined
      ) {
        return (state$ as BehaviorSubject<TState>).value
      }
      if (typeof initialState === 'function') {
        return (initialState as () => TState)()
      }
      return initialState
    })

    useSubscription(state$, setState)

    useDebugValue(state)

    return state
  } else {
    const init = state$OrInit
    const [state, setState] = useState<TState | undefined>(initialState)

    const input$Ref = useRefFn<Subject<TInput>>(getEmptySubject)

    const state$ = useRefFn(() => init(input$Ref.current, state)).current
    const callback = useRef((state: TInput) =>
      input$Ref.current.next(state)
    ).current

    useSubscription(state$, setState)

    useDebugValue(state)

    return [state, callback]
  }
}
