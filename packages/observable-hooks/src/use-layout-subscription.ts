import { Observable, Subscription } from 'rxjs'
import { useIsomorphicLayoutEffect } from './helpers'
import { useSubscriptionInternal } from './use-subscription-internal'

// I know this is copy-paste from './useSubscription.ts'.
// Instead of leaving the performance penalty to users,
// I'll keep it this way until it gets too hard to maintain.

/**
 * Same as [[useSubscription]] except the subscription is established
 * under `useLayoutEffect`.
 *
 * Useful when values are needed before DOM paint.
 *
 * Use it scarcely as it runs synchronously before browser paint.
 * Too many synchronous emissons from the observable could
 * stretch the commit phase.
 *
 * @template TInput Input value within Observable.
 *
 * @param input$ Input Observable.
 * @param next Notify when a new value is emitted.
 * @param error Notify when a new error is thrown.
 * @param complete Notify when the Observable is complete.
 */
export function useLayoutSubscription<TInput>(
  input$: Observable<TInput>,
  next?: ((value: TInput) => void) | null | undefined,
  error?: ((error: any) => void) | null | undefined,
  complete?: (() => void) | null | undefined
): React.MutableRefObject<Subscription | undefined>
export function useLayoutSubscription<TInput>(
  ...args: [
    Observable<TInput>,
    ((value: TInput) => void) | null | undefined,
    ((error: any) => void) | null | undefined,
    (() => void) | null | undefined
  ]
): React.MutableRefObject<Subscription | undefined> {
  return useSubscriptionInternal(useIsomorphicLayoutEffect, args)
}
