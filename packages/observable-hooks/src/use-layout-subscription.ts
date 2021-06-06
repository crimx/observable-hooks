import { MutableRefObject } from 'react'
import { Observable, PartialObserver, Subscription } from 'rxjs'
import { useIsomorphicLayoutEffect } from './helpers'
import { useSubscriptionInternal } from './internal/use-subscription-internal'

/**
 * Same as [[useSubscription]] except the subscription is established
 * under `useLayoutEffect`.
 *
 * Useful when values are needed before DOM paint.
 *
 * Use it scarcely as it runs synchronously before browser paint.
 * Too many synchronous emissions from the observable could
 * stretch the commit phase.
 *
 * @template TInput Input value within Observable.
 *
 * @param input$ Input Observable.
 * @param observer Observer
 */
export function useLayoutSubscription<TInput>(
  input$: Observable<TInput>,
  observer?: PartialObserver<TInput>
): MutableRefObject<Subscription | undefined>
/**
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
): MutableRefObject<Subscription | undefined>
export function useLayoutSubscription<TInput>(
  input$: Observable<TInput>,
  observerOrNext$?:
    | PartialObserver<TInput>
    | ((value: TInput) => void)
    | null
    | undefined,
  error?: ((error: any) => void) | null | undefined,
  complete?: (() => void) | null | undefined
): MutableRefObject<Subscription | undefined> {
  return useSubscriptionInternal(useIsomorphicLayoutEffect, [
    input$,
    observerOrNext$,
    error,
    complete
  ])
}
