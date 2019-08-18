import { useEffect, useRef } from 'react'
import { Observable, BehaviorSubject } from 'rxjs'
import { useRefFn } from './helpers'

/**
 * Accepts a function that returns a Observable.
 * Optionally accepts an array of dependencies which
 * will be turned into Observable and be passed to the
 * `init` function.
 *
 * React function components will be called many times during its life cycle.
 * Create or transform Observables in `init` function so that the operations
 * won't be repeatedly performed. `useObservable` will call `init`
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
 *   // Listen to props or state change
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
 * @param init A function that, when applied to an inputs Observable,
 * returns an Observable.
 */
export function useObservable<State>(
  init: () => Observable<State>
): Observable<State>
/**
 * @param init A function that, when applied to an inputs Observable,
 * returns an Observable.
 * @param inputs An array of dependencies. When one of the dependencies
 * changes the Observable in `init` will emit an array of all the dependencies.
 */
export function useObservable<State, Inputs extends Readonly<any[]>>(
  init: (inputs$: Observable<Inputs>) => Observable<State>,
  inputs: Inputs
): Observable<State>
export function useObservable<State, Inputs extends Readonly<any[]>>(
  init: (inputs$: Observable<Inputs>) => Observable<State>,
  inputs: Inputs = [] as any
): Observable<State> {
  const inputs$Ref = useRefFn(() => new BehaviorSubject(inputs))
  const source$Ref = useRefFn(() => init(inputs$Ref.current))
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
