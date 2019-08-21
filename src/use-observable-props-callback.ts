import { Observable, Subscription } from 'rxjs'
import { withLatestFrom } from 'rxjs/operators'
import { useSubscription } from './use-subscription'

/**
 * @deprecated use [[useSubscription]] instead.
 */
export const useObservablePropsCallback = useSubscription
