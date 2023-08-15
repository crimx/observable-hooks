/**
 * Useful utilities
 */
import {
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";

/**
 * Returns the first argument it receives.
 */
export const identity = <T>(value: T): T => value;

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
 * @param inputs$ An Observable of array-like.
 *
 */
export const pluckFirst = <TArr extends ArrayLike<any>>(
  inputs$: Observable<TArr>
): Observable<TArr[0]> => map<TArr, 0>(input => input[0])(inputs$);

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
export const pluckCurrentTargetValue = <
  TEvent extends { currentTarget: { value: any } }
>(
  event$: Observable<TEvent>
): Observable<TEvent["currentTarget"]["value"]> =>
  map<TEvent, TEvent["currentTarget"]["value"]>(
    event => event.currentTarget.value
  )(event$);

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
export const pluckCurrentTargetChecked = <
  TEvent extends { currentTarget: { checked: any } }
>(
  event$: Observable<TEvent>
): Observable<TEvent["currentTarget"]["checked"]> =>
  map<TEvent, TEvent["currentTarget"]["checked"]>(
    event => event.currentTarget.checked
  )(event$);

/**
 * Return an empty Subject
 * @ignore
 */
export const getEmptySubject = <T>() => new Subject<T>();

/**
 * One-time ref init.
 * @param init A function that returns a value. Will be called only once.
 * @returns A ref object with the returned value.
 */
export const useRefFn = <T>(init: () => T) => {
  const firstRef = useRef(true);
  const ref = useRef<T | null>(null);
  if (firstRef.current) {
    firstRef.current = false;
    ref.current = init();
  }
  return ref as MutableRefObject<T>;
};

const increment = (n: number): number => (n + 1) | 0;

/**
 * Force re-renders Component.
 */
export const useForceUpdate = (): (() => void) => {
  const updateState = useState(0)[1];
  return useRef(() => updateState(increment)).current;
};

/**
 * Prevent React warning when using useLayoutEffect on server.
 */
export const useIsomorphicLayoutEffect = /* @__PURE__ */ (() =>
  typeof window === "undefined" ? useEffect : useLayoutEffect)();
