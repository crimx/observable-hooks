import { useObservableState, useObservable } from "observable-hooks";
import * as React from "react";
import {
  map,
  distinctUntilChanged,
  switchMap,
  catchError,
  startWith,
  tap,
} from "rxjs/operators";
import { of, timer, Observable } from "rxjs";

export interface SuggestsItem {
  href: string;
  title: string;
  content: string;
}

export type SuggestsList = SuggestsItem[];

export type SuggestsFetcher = (text: string) => Observable<SuggestsList>;

export interface SuggestsProps {
  text: string;
  fetchFunc: SuggestsFetcher;
}

const StateDefault: React.FC = () => null;

const StateLoading: React.FC = () => (
  <div className="notification is-primary has-text-centered">Searching...</div>
);

const StateFinish: React.FC<{ list: SuggestsList }> = props => (
  <ul>
    {props.list.map(item => (
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
);

const StateError: React.FC = () => (
  <div className="notification is-danger has-text-centered">
    Failed fetching...
  </div>
);

/** Reusable Suggests Component */
export const Suggests: React.FC<SuggestsProps> = props => {
  const status$ = useObservable(
    // A stream of React elements!
    inputs$ =>
      inputs$.pipe(
        distinctUntilChanged((a, b) => a[0] === b[0]),
        switchMap(([text, fetchFunc]) =>
          text
            ? // delay in sub-stream so that users can see the
              // searching state quickly. But no actual request
              // is performed until the delay is hit.
              timer(750).pipe(
                tap(() => console.log(">>> really start searching...")),
                switchMap(() => fetchFunc(text)),
                map(suggests => <StateFinish list={suggests} />),
                // handle errors on sub-stream so that main stream stays alive
                catchError(() => of(<StateError />)),
                // show loading state immediately
                startWith(<StateLoading />)
              )
            : // cancel handling response, reset default state
              of(<StateDefault />)
        )
      ),
    [props.text, props.fetchFunc]
  );
  return useObservableState(status$, () => <StateDefault />);
};
