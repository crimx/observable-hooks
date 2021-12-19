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

  useSubscription(resource.valueRef$$, valueRef => {
    /* Guard code. Value should always be ready when reaching this far. */
    /* istanbul ignore else */
    if (valueRef) {
      setState(valueRef.current)
    }
  })

  useSubscription(resource.shouldUpdate$$, forceUpdate)

  useDebugValue(state)
  return state
}
