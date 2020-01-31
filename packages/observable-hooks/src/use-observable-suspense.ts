import { useSubscription } from './use-subscription'
import { useForceUpdate } from './helpers'
import { ObservableResource } from './observable-resource'

export function useObservableSuspense<TInput, TOutput extends TInput = TInput>(
  resource: ObservableResource<TInput, TOutput>
): TOutput {
  const forceUpdate = useForceUpdate()
  useSubscription(resource.shouldUpdate$$, forceUpdate)
  return resource.read()
}
