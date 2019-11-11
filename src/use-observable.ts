import { useEffect, useRef } from 'react'
import { Observable, BehaviorSubject } from 'rxjs'
import { useRefFn } from './helpers'

/**
 * Accepts a function that returns an Observable.
 * Optionally accepts an array of dependencies which
 * will be turned into Observable and be passed to the
 * `init` function.
 *
 * React function components will be called many times during its life cycle.
 * Create or transform Observables in `init` function so that the operations
 * won't be repeatedly performed.
 *
 * ⚠ **Node:** `useObservable` will call `init` once and always return
 * the same Observable. It is not safe to access closure variables
 * (except Observables) directly inside `init`. You should pass them
 * through the second argument as dependencies.
 *
 * ⚠ **Node:** You can either pass or not pass a dependencies array
 * but do not change to one another during Component's life cycle.
 * The length of the dependencies array must also be fixed.
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
  init:
    | (() => Observable<State>)
    | ((inputs$: Observable<Inputs>) => Observable<State>),
  inputs?: Inputs
): Observable<State> {
  if (!inputs) {
    return useRefFn(init as () => Observable<State>).current
  }

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
