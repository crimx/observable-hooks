import { useState, useDebugValue, useEffect, useRef } from 'react'
import { Observable } from 'rxjs'
import { useForceUpdate, useIsomorphicLayoutEffect } from './helpers'

/**
 * Optimized for safely getting synchronous values from hot or pure observables
 * without triggering extra initial re-rendering.
 *
 * ⚠ If the observable is cold and with side effects
 * they will be performed at least twice!
 *
 * By default this hook will subscribe to the observable at least twice.
 * The first time is for getting synchronous value to prevent extra initial re-rendering.
 * In concurrent mode this may happen more than one time.
 *
 * @template TState State.
 *
 * @param state$ An observable of state value.
 */
export function useObservableEagerState<TState>(
  state$: Observable<TState>
): TState {
  const forceUpdate = useForceUpdate()

  const state$Ref = useRef(state$)
  const errorRef = useRef<Error | null>()
  const isAsyncEmissionRef = useRef(false)

  const didSyncEmit = useRef(false)

  const [state, setState] = useState<TState>(() => {
    let state: TState
    state$
      .subscribe({
        next: value => {
          didSyncEmit.current = true
          state = value
        },
        error: error => {
          errorRef.current = error
        }
      })
      .unsubscribe()
    return state!
  })

  // update the latest observable
  // synchronously after render being committed
  useIsomorphicLayoutEffect(() => {
    state$Ref.current = state$
  })

  useEffect(() => {
    errorRef.current = null

    // keep in closure for checking staleness
    const input$ = state$Ref.current

    const subscription = input$.subscribe({
      next: value => {
        if (input$ !== state$Ref.current) {
          // stale observable
          return
        }
        if (isAsyncEmissionRef.current) {
          // ignore synchronous value
          // prevent initial re-rendering
          setState(value)
        }
      },
      error: error => {
        if (input$ !== state$Ref.current) {
          // stale observable
          return
        }
        errorRef.current = error
        forceUpdate()
      }
    })

    isAsyncEmissionRef.current = true

    return () => {
      subscription.unsubscribe()
    }
  }, [state$])

  if (errorRef.current) {
    // Let error boundary catch the error
    throw errorRef.current
  }

  if (didSyncEmit.current) {
    useDebugValue(state)

    return state
  } else {
    throw new Error('Observable did not synchronously emit a value.')
  }
}
