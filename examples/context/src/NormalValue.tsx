import React, { FC, useContext, useState, useEffect } from 'react'
import { useObservable, useObservableState } from 'observable-hooks'
import { scan, take } from 'rxjs/operators'
import { NormalValueContext } from './contexts'

export const NormalValueExample: FC = ({ children }) => {
  const [num, setNum] = useState(1)

  useEffect(() => {
    const ticket = setInterval(() => {
      setNum(num => (num + 1) % 1000000)
    }, 1000)
    return () => clearInterval(ticket)
  }, [])

  return (
    <NormalValueContext.Provider value={num}>
      {children}
    </NormalValueContext.Provider>
  )
}

export const NormalValueDescendant = () => {
  const numList = useObservableState(
    useObservable(
      inputs$ =>
        inputs$.pipe(
          scan((acc, inputs) => [...acc, ...inputs], [] as number[]),
          take(10)
        ),
      [useContext(NormalValueContext)]
    ),
    []
  )

  return (
    <div className="panel">
      <p className="panel-heading">Normal Value as Context</p>
      {numList.map((num, i) => (
        <span className="panel-block" key={num + i}>
          item {num}
        </span>
      ))}
    </div>
  )
}
