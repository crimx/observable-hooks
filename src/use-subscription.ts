import { Observable, Subscription } from 'rxjs'
import { useRefFn, getEmptyObject, EMPTY_TUPLE } from './helpers'
import { useEffect } from 'react'

/**
 * Accepts an Observable and optional `next`, `error`, `complete` functions.
 * These functions must be in correct order.
 * Use `undefined` or `null` for placeholder.
 *
 * Subscription will unsubscribe when unmount, you can also
 * unsubscribe manually.
 *
 * Note that changes of callbacks will not trigger
 * an emission. If you need that just create another
 * Observable of the callback with [[useObservable]].
 *
 * (From v2.0) You can access closure directly inside callback like in `useEffect`.
 * `useSubscription` will ensure the latest callback is called.
 *
 * Examples:
 *
 * ```typescript
 * const subscription = useSubscription(events$, e => console.log(e.type))
 * ```
 *
 * On complete
 *
 * ```typescript
 * const subscription = useSubscription(events$, null, null, () => console.log('complete'))
 * ```
 *
 * Access closure:
 *
 * ```typescript
 * const [debug, setDebug] = useState(false)
 * const subscription = useSubscription(events$, null, error => {
 *   if (debug) {
 *     console.log(error)
 *   }
 * })
 * ```
 *
 * Invoke props callback
 *
 * ```typescript
 * const subscription = useSubscription(events$, props.onEvent)
 * ```
 */
export function useSubscription<T>(
  stream$: Observable<T>,
  next?: ((value: T) => void) | null | undefined,
  error?: ((error: any) => void) | null | undefined,
  complete?: (() => void) | null | undefined
): Subscription {
  const cbRef = useRefFn<{
    next?: typeof next
    error?: typeof error
    complete?: typeof complete
  }>(getEmptyObject)

  cbRef.current.next = next
  cbRef.current.error = error
  cbRef.current.complete = complete

  const subscriptionRef = useRefFn(() =>
    stream$.subscribe({
      next: value => cbRef.current.next && cbRef.current.next(value),
      error: error => cbRef.current.error && cbRef.current.error(error),
      complete: () => cbRef.current.complete && cbRef.current.complete()
    })
  )

  // unsubscribe when unmount
  useEffect(() => () => subscriptionRef.current.unsubscribe(), EMPTY_TUPLE)

  return subscriptionRef.current
}
