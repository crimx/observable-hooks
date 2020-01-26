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
 * Maps an Observable of Arraylike to an Observable
 * of the first item.
 *
 * Example:
 *
 * ```typescript
 * const text$ = useObservable(pluckFirst, [props.text])
 * ```
 *
 * @param inputs$ An Observable of arraylike.
 *
 */
export function pluckFirst<TArr extends ArrayLike<any>>(
  inputs$: Observable<TArr>
): Observable<TArr[0]> {
  return pluck<TArr, 0>(0)(inputs$)
}

/**
 * Maps an Observable of DOM events to an Observable
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
  TEvent extends { currentTarget: { value: any } }
>(event$: Observable<TEvent>): Observable<TEvent['currentTarget']['value']> {
  return pluck<TEvent, 'currentTarget', 'value'>('currentTarget', 'value')(
    event$
  )
}

/**
 * Maps an Observable of DOM events to an Observable
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
  TEvent extends { currentTarget: { checked: any } }
>(event$: Observable<TEvent>): Observable<TEvent['currentTarget']['checked']> {
  return pluck<TEvent, 'currentTarget', 'checked'>('currentTarget', 'checked')(
    event$
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
