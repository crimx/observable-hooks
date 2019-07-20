import { useObservableState, useObservable, pluckFirst } from 'observable-hooks'
import * as React from 'react'
import {
  filter,
  map,
  distinctUntilChanged,
  switchMap,
  catchError,
  startWith,
  withLatestFrom,
  tap
} from 'rxjs/operators'
import { of, forkJoin, timer, Observable } from 'rxjs'

export interface SuggestsItem {
  href: string
  title: string
  content: string
}

export type SuggestsList = SuggestsItem[]

export type SuggestsFetcher = (text: string) => Observable<SuggestsList>

type FetchSuggestsResult =
  | [null, '']
  | [null, 'loading']
  | [SuggestsList, 'finish']
  | [null, 'error']

export interface SuggestsProps {
  text: string
  fetchFunc: SuggestsFetcher
}

/** Reusable Suggests Component */
export const Suggests: React.FC<SuggestsProps> = props => {
  const fetchFunc$ = useObservable(pluckFirst, [props.fetchFunc])
  const [suggests, fetchState] = useObservableState(
    useObservable(
      inputs$ =>
        inputs$.pipe(
          filter(([text]) => text.length > 1),
          distinctUntilChanged(),
          switchMap(([text]) =>
            // delay in sub-stream so that users can see the
            // searching state quickly. But no actual request
            // is performed until the delay is hit.
            forkJoin(
              // minimum 1s delay to prevent flickering if user got really greate network condition
              timer(1000),
              timer(750).pipe(
                tap(() => console.log('>>> really start searching...')),
                withLatestFrom(fetchFunc$),
                switchMap(([, fetchFunc]) => fetchFunc(text))
              )
            ).pipe(
              map(
                ([, suggests]) => [suggests, 'finish'] as FetchSuggestsResult
              ),
              startWith([null, 'loading'] as FetchSuggestsResult)
            )
          ),
          catchError(() => of([null, 'error'] as FetchSuggestsResult)),
          startWith([null, ''] as FetchSuggestsResult)
        ),
      [props.text]
    )
  )!

  switch (fetchState) {
    case 'finish':
      return (
        <ul>
          {suggests!.map(item => (
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
      )
    case 'loading':
      return (
        <div className="notification is-primary has-text-centered">
          Searching...
        </div>
      )
    case 'error':
      return (
        <div className="notification is-danger has-text-centered">
          Failed fetching...
        </div>
      )
    default:
      return null
  }
}
