import { Observable, BehaviorSubject } from 'rxjs'
import { useEffect, useRef, useState } from 'react'

/**
 * @template TOutput Output value within Observable.
 * @template TInputs A readonly tuple of all dependencies.
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
  // Even though hooks are under conditional block
  // it is for a completely different use case
  // which unlikely coexists with the other one.
  // A warning is also added to the docs.
  if (!inputs) {
    return useState(init as () => Observable<TOutput>)[0]
  }

  const [inputs$] = useState(() => new BehaviorSubject(inputs))
  const [source$] = useState(() => init(inputs$))

  const firstEffectRef = useRef(true)
  useCustomEffect(() => {
    if (firstEffectRef.current) {
      firstEffectRef.current = false
      return
    }
    inputs$.next(inputs)
  }, inputs)

  return source$
}
