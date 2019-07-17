import { PartialObserver, Observable, Subscription } from 'rxjs'
import { useRefFn } from './helpers'
import { useEffect } from 'react'

/**
 * Accepts an Observable and subscribe parameters.
 * Deprecated subscribe parameter types are not included
 * but you can use it anyway if writing js.
 */
export function useSubscription<T>(
  stream$: Observable<T>,
  observer?: PartialObserver<T>
): Subscription
export function useSubscription<T>(
  stream$: Observable<T>,
  next?: (value: T) => void,
  error?: (error: any) => void,
  complete?: () => void
): Subscription
export function useSubscription<T>(
  stream$: Observable<T>,
  ...args: any[]
): Subscription {
  const subscriptionRef = useRefFn(() => stream$.subscribe(...args))
  // unsubscribe when unmount
  useEffect(() => () => subscriptionRef.current.unsubscribe(), [])
  return subscriptionRef.current
}
