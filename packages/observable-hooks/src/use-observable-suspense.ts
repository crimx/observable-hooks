import { useDebugValue } from 'react'
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
  const forceUpdate = useForceUpdate()
  useSubscription(resource.shouldUpdate$$, forceUpdate)

  const value = resource.read()
  useDebugValue(value)
  return value
}
