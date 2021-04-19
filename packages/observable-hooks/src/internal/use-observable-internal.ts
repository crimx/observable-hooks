import { Observable, BehaviorSubject } from 'rxjs'
import { useRefFn } from '../helpers'
import { useEffect, useRef } from 'react'

/**
 * @template TOutput Output value within Observable.
 * @template TInputs An readonly tuple of all dependencies.
 *
 * @param useCustomEffect useEffect or useLayoutEffect
 * @param init A pure function that, when applied to an Observable,
 * returns an Observable.
 * @param inputs An dependency array with fixed length. When one of the dependencies
 * changes the Observable in `init` will emit an array of all the dependencies.
 */
export function useObservableInternal<TOutput, TInputs extends Readonly<any[]>>(
  useCustomEffect: typeof useEffect,
  init:
    | (() => Observable<TOutput>)
    | ((inputs$: Observable<[...TInputs]>) => Observable<TOutput>),
  inputs?: [...TInputs]
): Observable<TOutput> {
  if (!inputs) {
    return useRefFn(init as () => Observable<TOutput>).current
  }

  const inputs$Ref = useRefFn(() => new BehaviorSubject(inputs))
  const source$Ref = useRefFn(() => init(inputs$Ref.current))

  const firstEffectRef = useRef(true)
  useCustomEffect(() => {
    if (firstEffectRef.current) {
      firstEffectRef.current = false
      return
    }
    inputs$Ref.current.next(inputs)
  }, inputs)

  return source$Ref.current
}
