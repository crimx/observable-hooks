import React, { FC, useContext } from 'react'
import {
  useObservable,
  useObservableState,
  useSubscription
} from 'observable-hooks'
import { scan, take, switchMap } from 'rxjs/operators'
import { ObservableValueContext } from './contexts'
import { interval } from 'rxjs'

export const ObservableValueExample: FC = ({ children }) => {
  const num$ = useObservable(() => interval(1000))

  return (
    <ObservableValueContext.Provider value={num$}>
      {children}
    </ObservableValueContext.Provider>
  )
}

export const ObservableValueDescendant = () => {
  const num$ = useContext(ObservableValueContext)

  // If you need to transform(pipe) the Observable
  // you should list it as dependency since it may change over time.
  // Skip this if you are sure that the Observable
  // will not change.
  const numList = useObservableState(
    useObservable(
      input$ =>
        input$.pipe(
          switchMap(([num$]) =>
            num$.pipe(
              scan((acc, inputs) => [...acc, inputs], [] as number[]),
              take(20)
            )
          )
        ),
      [num$]
    ),
    []
  )

  // If you don't need to pipe the Observable just useSubscription
  // Which will auto switch to the new Observable
  useSubscription(num$, value => {
    console.log('useSubscription', value)
  })

  // Same as useObservableState and other state hooks
  // that use useSubscription under the hood.
  const num = useObservableState(num$)
  console.log('useObservableState', num)

  return (
    <div className="panel">
      <p className="panel-heading">Observable as Context</p>
      {numList.map((num, i) => (
        <span className="panel-block" key={num + i}>
          item {num}
        </span>
      ))}
    </div>
  )
}
