/**
 * Useful utilities
 */
import {
  useRef,
  MutableRefObject,
  useState,
  useLayoutEffect,
  useEffect
} from 'react'
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
  return pluck<TEvent, 'currentTarget', 'value'>(
    'currentTarget',
    'value'
  )(event$)
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
  return pluck<TEvent, 'currentTarget', 'checked'>(
    'currentTarget',
    'checked'
  )(event$)
}

/**
 * Return an empty Subject
 * @ignore
 */
export function getEmptySubject<T>() {
  return new Subject<T>()
}

/**
 * One-time ref init.
 * @param init A function that returns a value. Will be called only once.
 * @returns A ref object with the returned value.
 */
export function useRefFn<T>(init: () => T) {
  const firstRef = useRef(true)
  const ref = useRef<T | null>(null)
  if (firstRef.current) {
    firstRef.current = false
    ref.current = init()
  }
  return ref as MutableRefObject<T>
}

/**
 * Force re-renders Component.
 */
export function useForceUpdate(): () => void {
  const updateState = useState(0)[1]
  return useRef(() => updateState(increment)).current
}

function increment(n: number): number {
  return (n + 1) % 1000000
}

/**
 * Prevent React warning when using useLayoutEffect on server.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined'
    ? useLayoutEffect
    : /* istanbul ignore next: both are not called on server */
      useEffect
