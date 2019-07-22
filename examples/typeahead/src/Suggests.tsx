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

export interface SuggestsProps {
  text: string
  fetchFunc: SuggestsFetcher
}

const StateDefault: React.FC = () => null

const StateLoading: React.FC = () => (
  <div className="notification is-primary has-text-centered">Searching...</div>
)

const StateFinish: React.FC<{ list: SuggestsList }> = props => (
  <ul>
    {props.list!.map(item => (
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

const StateError: React.FC = () => (
  <div className="notification is-danger has-text-centered">
    Failed fetching...
  </div>
)

/** Reusable Suggests Component */
export const Suggests: React.FC<SuggestsProps> = props => {
  const fetchFunc$ = useObservable(pluckFirst, [props.fetchFunc])
  return useObservableState(
    // A stream of React elements! I know it's mind-blowing.
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
              map(([, suggests]) => <StateFinish list={suggests} />),
              startWith(<StateLoading />)
            )
          ),
          catchError(() => of(<StateError />)),
          startWith(<StateDefault />)
        ),
      [props.text]
    )
  )!
}
