import { useObservableState, useObservable } from 'observable-hooks'
import * as React from 'react'
import { map, switchMap, startWith } from 'rxjs/operators'
import { interval } from 'rxjs'

export interface InputTimeAgoProps {
  text: string
}

export const InputTimeAgo: React.FC<InputTimeAgoProps> = props => {
  const [text, diff] = useObservableState(
    useObservable(
      inputs$ =>
        inputs$.pipe(
          switchMap(([text]) =>
            interval(1000).pipe(
              startWith(-1),
              map(count => [text, fromNow(count + 1)] as [string, string])
            )
          )
        ),
      [props.text]
    )
  )!

  return (
    <div className="notification">
      You typed {text ? `"${text}"` : 'nothing'} {diff}.
    </div>
  )
}

function fromNow(diff: number): string {
  const minute = (diff / 60) | 0
  const second = diff - minute * 60
  const mstr =
    minute < 1 ? '' : minute === 1 ? `a minute and ` : `${minute} minutes and `
  const sstr =
    second < 1
      ? 'just now'
      : second === 1
      ? `a second ago`
      : `${second} seconds ago`
  return mstr + sstr
}
