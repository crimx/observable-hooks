import { useSubscription } from './use-subscription'
import { useForceUpdate } from './helpers'
import { ObservableResource } from './observable-resource'

export function useObservableSuspense<TInput, TOutput extends TInput = TInput>(
  resource: ObservableResource<TInput, TOutput>
): TOutput {
  const forceUpdate = useForceUpdate()
  // Unlike Promise, Observable is a multiple push mechanism.
  // Only force update when Suspense needs to restart.
  useSubscription(resource.shouldUpdate$$, forceUpdate)
  return resource.read()
}
