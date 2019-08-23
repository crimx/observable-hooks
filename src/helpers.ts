/**
 * Useful utilities
 */
import { useRef, MutableRefObject } from 'react'
import { Subject, Observable } from 'rxjs'
import { pluck } from 'rxjs/operators'

/**
 * Returns the first argument it receives.
 */
export function identity<T>(value: T): T {
  return value
}

/**
 * Transform an Observable of Arraylike to an Observable
 * of the first item.
 *
 * Example:
 *
 * ```typescript
 * const text$ = useObservable(pluckFirst, [props.text])
 * ```
 *
 */
export function pluckFirst<T extends ArrayLike<any>>(
  inputs$: Observable<T>
): Observable<T[0]> {
  return pluck<T, 0>(0)(inputs$)
}

/**
 * Transform an Observable of DOM events to an Observable
 * of the currentTarget value.
 *
 * Example:
 *
 * ```typescript
 * const [onChange, textChange$] = useObservableCallback<
 *  string,
 *  React.FormEvent<HTMLInputElement>
 * >(pluckCurrentTargetValue)
 * ```
 *
 */
export function pluckCurrentTargetValue<
  T extends { currentTarget: { value: any } }
>(events$: Observable<T>): Observable<T['currentTarget']['value']> {
  return pluck<T, 'currentTarget', 'value'>('currentTarget', 'value')(events$)
}

/**
 * Transform an Observable of DOM events to an Observable
 * of the currentTarget checked.
 *
 * Example:
 *
 * ```typescript
 * const [onChange, checked$] = useObservableCallback<
 *  boolean,
 *  React.FormEvent<HTMLInputElement>
 * >(pluckCurrentTargetChecked)
 * ```
 *
 */
export function pluckCurrentTargetChecked<
  T extends { currentTarget: { checked: any } }
>(events$: Observable<T>): Observable<T['currentTarget']['checked']> {
  return pluck<T, 'currentTarget', 'checked'>('currentTarget', 'checked')(
    events$
  )
}

/**
 * Return an empty Subject
 * @ignore
 */
export function getEmptySubject<T>() {
  return new Subject<T>()
}

/**
 * Return an empty object
 * @ignore
 */
export function getEmptyObject() {
  return {}
}

/**
 * An empty tuple
 * @ignore
 */
export const EMPTY_TUPLE: Readonly<[]> = []

/**
 * One-time ref init.
 * @param init A function that returns a non-nullable value. Will be called only once.
 * @returns A ref object with the returned value.
 */
export function useRefFn<T extends object | number | string | boolean | symbol>(
  init: () => T
) {
  const ref = useRef<T | null>(null)
  if (ref.current === null) {
    ref.current = init()
  }
  return ref as MutableRefObject<T>
}
