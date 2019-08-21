import { Observable, Subscription } from 'rxjs'
import { useRefFn, EMPTY_TUPLE } from './helpers'
import { useEffect, useRef } from 'react'

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
 * You can also access closure in the callback like in `useEffect`.
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
export function useSubscription<T>(stream$: Observable<T>): Subscription
export function useSubscription<T>(
  stream$: Observable<T>,
  next: (value: T) => void | null | undefined
): Subscription
export function useSubscription<T>(
  stream$: Observable<T>,
  next: (value: T) => void | null | undefined,
  error: (error: any) => void | null | undefined
): Subscription
export function useSubscription<T>(
  stream$: Observable<T>,
  next: (value: T) => void | null | undefined,
  error: (error: any) => void | null | undefined,
  complete: () => void | null | undefined
): Subscription
export function useSubscription<T>(
  stream$: Observable<T>,
  ...args:
    | []
    | [(value: T) => void | null | undefined]
    | [
        (value: T) => void | null | undefined,
        (error: any) => void | null | undefined
      ]
    | [
        (value: T) => void | null | undefined,
        (error: any) => void | null | undefined,
        () => void | null | undefined
      ]
): Subscription {
  const argsRef = useRef<
    Readonly<
      | []
      | [(value: T) => void | null | undefined]
      | [
          (value: T) => void | null | undefined,
          (error: any) => void | null | undefined
        ]
      | [
          (value: T) => void | null | undefined,
          (error: any) => void | null | undefined,
          () => void | null | undefined
        ]
    >
  >(EMPTY_TUPLE)
  argsRef.current = args

  const subscriptionRef = useRefFn(() =>
    stream$.subscribe({
      next: value => argsRef.current[0] && argsRef.current[0](value),
      error: error => argsRef.current[1] && argsRef.current[1](error),
      complete: () => argsRef.current[2] && argsRef.current[2]()
    })
  )

  // unsubscribe when unmount
  useEffect(() => () => subscriptionRef.current.unsubscribe(), EMPTY_TUPLE)

  return subscriptionRef.current
}
