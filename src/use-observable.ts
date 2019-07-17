import { useEffect, useRef } from 'react'
import { Observable, BehaviorSubject } from 'rxjs'
import { useRefFn } from './helpers'

/**
 * Accepts a function that returns a Observable.
 * Optionally accepts an array of dependencies which
 * will be turned into Observable and be passed to the
 * `enhance` function.
 *
 * @param enhance A function that, when applied to an inputs Observable, returns an Observable.
 * @param inputs An array of dependencies. The first arugment of `enhance` will emit
 *  the array of all dependencies when one of which has changed.
 */
export function useObservable<State>(
  enhance: () => Observable<State>
): Observable<State>
export function useObservable<State, Inputs extends any[]>(
  enhance: (inputs: Observable<Inputs>) => Observable<State>,
  inputs: Inputs
): Observable<State>
export function useObservable<State, Inputs extends any[]>(
  enhance: (inputs: Observable<Inputs>) => Observable<State>,
  inputs: Inputs = [] as any
): Observable<State> {
  const inputs$Ref = useRefFn(() => new BehaviorSubject(inputs))
  const source$Ref = useRefFn(() => enhance(inputs$Ref.current))
  const firstRef = useRef(true)
  useEffect(() => {
    if (firstRef.current) {
      // skip first round
      firstRef.current = false
      return
    }
    inputs$Ref.current.next(inputs)
  }, inputs || [])

  return source$Ref.current
}
