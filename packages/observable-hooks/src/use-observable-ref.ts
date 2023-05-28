import type { MutableRefObject, RefObject } from 'react'
import { BehaviorSubject } from 'rxjs'
import { useState } from 'react'

/**
 * Returns a mutable ref object and a BehaviorSubject.
 *
 * Whenever ref.current is changed, the BehaviorSubject will emit the new value.
 *
 * @param initialValue The initial value of the BehaviorSubject.
 */
export function useObservableRef<TValue>(
  initialValue: TValue
): [MutableRefObject<TValue>, BehaviorSubject<TValue>]
/**
 * Returns a ref object and a BehaviorSubject.
 *
 * Whenever ref.current is changed, the BehaviorSubject will emit the new value.
 *
 * @param initialValue The initial value of the BehaviorSubject.
 */
export function useObservableRef<TValue>(
  initialValue: TValue | null
): [RefObject<TValue>, BehaviorSubject<TValue>]
/**
 * Returns a mutable ref object and a BehaviorSubject.
 *
 * Whenever ref.current is changed, the BehaviorSubject will emit the new value.
 *
 * @param initialValue A optional initial value of the BehaviorSubject.
 */
export function useObservableRef<TValue = undefined>(
  initialValue?: TValue
): [MutableRefObject<TValue | undefined>, BehaviorSubject<TValue | undefined>]
export function useObservableRef<TValue>(
  initialValue?: TValue
): [MutableRefObject<TValue | undefined>, BehaviorSubject<TValue | undefined>] {
  const [value$] = useState(() => new BehaviorSubject(initialValue))
  const [ref] = useState<MutableRefObject<TValue | undefined>>(() => ({
    get current(): TValue | undefined {
      return value$.value
    },
    set current(value: TValue | undefined) {
      value$.next(value)
    }
  }))
  return [ref, value$]
}
