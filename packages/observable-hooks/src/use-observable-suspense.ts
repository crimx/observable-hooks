import { useDebugValue, useState } from 'react'
import { useSubscription } from './use-subscription'
import { useForceUpdate } from './helpers'
import { ObservableResource } from './observable-resource'

/**
 * Consume the Observable resource.
 *
 * Unlike Promise, Observable is a multiple push mechanism.
 * This hook triggers extra re-rendering when Suspense should restart.
 *
 * @param resource Observable resource
 */
export function useObservableSuspense<TInput, TOutput extends TInput = TInput>(
  resource: ObservableResource<TInput, TOutput>
): TOutput {
  const resourceValue = resource.read()
  const forceUpdate = useForceUpdate()
  const [state, setState] = useState<TOutput>(resourceValue)

  useSubscription(resource.shouldUpdate$$, valueRef => {
    // ObservableResource supports Stale-While-Revalidate pattern.
    // Schedule states to prevent tearing.
    if (valueRef) {
      setState(valueRef.current)
    } else {
      forceUpdate()
    }
  })

  useDebugValue(state)
  return state
}
