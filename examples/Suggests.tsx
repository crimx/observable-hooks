import * as React from 'react'
import { wikipedia } from './api'
import {
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError,
  startWith,
  pluck
} from 'rxjs/operators'
import { from, of } from 'rxjs'
import { useObservableState, useObservable } from '../src'

export interface SuggestsProps {
  text: string
}

export interface SuggestsItem {
  href: string
  title: string
  content: string
}

type FetchSuggestsResult =
  | [SuggestsItem[], 'finish']
  | [null, 'loading']
  | [null, 'error']
  | [null, '']

export const Suggests: React.FC<SuggestsProps> = props => {
  const text$ = useObservable(inputs$ => inputs$.pipe(pluck(0)), [props.text])

  const [[suggests, fetchState]] = useObservableState<FetchSuggestsResult>(() =>
    text$.pipe(
      filter(text => text && text.length > 1),
      distinctUntilChanged(),
      debounceTime(750),
      switchMap(text =>
        from(wikipedia(text)).pipe(
          map(([, titles, contents, hrefs]) => {
            return [
              titles.map((title, i) => ({
                href: hrefs[i],
                title,
                content: contents[i]
              })),
              'finish'
            ] as FetchSuggestsResult
          }),
          startWith([null, 'loading'] as FetchSuggestsResult)
        )
      ),
      catchError(() => of([null, 'error'] as FetchSuggestsResult)),
      startWith([null, ''] as FetchSuggestsResult)
    )
  )
  return fetchState === 'finish' ? (
    <ul>
      {suggests.map(item => (
        <li className="box" key={item.href}>
          <strong>
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </strong>
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
  ) : fetchState === 'loading' ? (
    <div className="notification is-primary has-text-centered">
      Searching...
    </div>
  ) : fetchState === 'error' ? (
    <div className="notification is-danger has-text-centered">
      Failed fetching...
    </div>
  ) : null
}
