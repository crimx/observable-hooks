# Simple Examples

## Conditional rendering (Vanilla JavaScript)

With observable-hooks you can have a stream of React elements. This is like React Suspense but armed with the incredible RxJS operators. If you want Suspense instead see [use-suspensible](https://github.com/crimx/use-suspensible).

```jsx
import { from, of } from 'rxjs'
import { map, switchMap, startWith, catchError } from 'rxjs/operators'
import { useObservableState } from 'observable-hooks'
import { fetchData } from './api'
import { SuccessUI, LoadingUI, FailedUI } from './components'

export function App() {
  const [status, onFetchData] = useObservableState(
    event$ => event$.pipe(
      // initial fetching
      startWith(),
      // OMG I don't have to deal with race condition
      switchMap(event =>
        from(fetchData(event && event.currentTarget.id)).pipe(
          map(value => <SuccessUI value={value} />),
          startWith(<LoadingUI />)
        )
      ),
      catchError(error => of(<FailedUI error={error} />))
    )
  )

  return (
    <div>
      <button id="data1" onClick={onFetchData}>fetch</button>
      {status}
    </div>
  )
}
```

## Debounced Text Verification (Vanilla JavaScript)

```jsx
import React from 'react'
import PropTypes from 'prop-types'
import { withLatestFrom, switchMap, debounceTime, pluck } from 'rxjs/operators'
import { useObservable, useObservableState, pluckFirst } from 'observable-hooks'

const checkText = (text, uuid) =>
  fetch(`https://api/${text}?uuid=${uuid}`)
    .then(response => response.ok)
    .catch(() => false)

export const App = props => {
  // `pluckFirst` is a simple helper function to avoid garbage collection,
  // equivalent to `inputs$ => inputs$.pipe(map(inputs => inputs[0]))`
  const uuid$ = useObservable(pluckFirst, [props.uuid])

  const [isValid, onChange] = useObservableState(
    event$ =>
      event$.pipe(
        // React synthetic event object will be reused.
        // Pluck the value out first.
        pluck('currentTarget', 'value'),
        debounceTime(400),
        withLatestFrom(uuid$),
        switchMap(([text, uuid]) => checkText(text, uuid))
      ),
    false
  )

  return (
    <>
      <input onChange={onChange} />
      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </>
  )
}

App.propTypes = {
  uuid: PropTypes.string
}
```

## Auto-cancelation (TypeScript)

```typescript
import React, { FC, useState } from 'react'
import { timer, empty } from 'rxjs'
import { switchMap, mapTo } from 'rxjs/operators'
import { useObservable, useSubscription } from 'observable-hooks'

const sendBeacon = (beacon: string) => fetch(`https://api?beacon=${beacon}`)

export interface AppProps {
  beacon: string
}

export const App: FC<AppProps> = props => {
  const [shouldSendBeacon, setShouldSendBeacon] = useState(false)

  const beacon$ = useObservable(
    inputs$ =>
      inputs$.pipe(
        // auto-cancelation
        switchMap(([shouldSendBeacon, beacon]) =>
          shouldSendBeacon ? timer(1000).pipe(mapTo(beacon)) : empty()
        )
      ),
    // `as const` is a simple way to make an array tuple.
    // You can also use `as [boolean, string]` or `as [typeof xxx, typeof xxx]`
    [shouldSendBeacon, props.beacon] as const
  )

  useSubscription(beacon$, sendBeacon)

  return (
    <label>
      <input
        type="checkbox"
        checked={shouldSendBeacon}
        onChange={e => setShouldSendBeacon(e.currentTarget.checked)}
      />
      Should Send Beacon
    </label>
  )
}
```
