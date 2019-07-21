import { useEffect, useRef } from 'react'
import { Observable, BehaviorSubject } from 'rxjs'
import { useRefFn } from './helpers'

/**
 * Accepts a function that returns a Observable.
 * Optionally accepts an array of dependencies which
 * will be turned into Observable and be passed to the
 * `enhance` function.
 *
 * React function components will be called many times during its life cycle,
 * create or transform Observables in `enhance` function so that the operations
 * won't be repeatedly performed multiple times. `useObservable` will call `enhance`
 * once and always return the same Observable.
 *
 * Examples:
 *
 * ```typescript
 * interface CompProps {
 *   isOpen: boolean
 * }
 *
 * const Comp: React.FC<CompProps> = props => {
 *   const [showPanel, setShowPanel] = useState(false)
 *
 *   // Listen props or state change
 *   const enhanced$ = useObservable(
 *     inputs$ => inputs$.pipe(map(([isOpen, showPanel]) => isOpen && showPanel)),
 *     [props.isOpen, showPanel]
 *   )
 * }
 * ```
 *
 * Create Observable
 *
 * ```typescript
 * const now$ = useObservable(
 *   () => interval(1000).pipe(
 *     map(() => new Date().toLocaleString())
 *   )
 * )
 * ```
 *
 * Transform Observables:
 *
 * ```typescript
 * // outers$ are created from other React-unrelated module
 * const enhanced$ = useObservable(() => outers$.pipe(mapTo(false)))
 * ```
 *
 * Mix them all together:
 *
 * ```typescript
 * const enhanced$ = useObservable(
 *   inputs$ => isEven$.pipe(
 *     withLatestFrom(inputs$),
 *     map(([isEven, [isOpen]]) => isEven && isOpen)
 *   ),
 *   [props.isOpen]
 * )
 * ```
 *
 * @param enhance A function that, when applied to an inputs Observable,
 * returns an Observable.
 */
export function useObservable<State>(
  enhance: () => Observable<State>
): Observable<State>
/**
 * @param enhance A function that, when applied to an inputs Observable,
 * returns an Observable.
 * @param inputs An array of dependencies. When one of the dependencies
 * changes the Observable in `enhance` will emit an array of all the dependencies.
 */
export function useObservable<State, Inputs extends any[]>(
  enhance: (inputs$: BehaviorSubject<Inputs>) => Observable<State>,
  inputs: Inputs
): Observable<State>
export function useObservable<State, Inputs extends any[]>(
  enhance: (inputs$: BehaviorSubject<Inputs>) => Observable<State>,
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
  }, inputs)

  return source$Ref.current
}
