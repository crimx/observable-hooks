# [observable-hooks](https://github.com/crimx/observable-hooks)

[![npm-version](https://img.shields.io/npm/v/observable-hooks.svg)](https://www.npmjs.com/package/observable-hooks)
[![Build Status](https://img.shields.io/travis/com/crimx/observable-hooks/master)](https://travis-ci.com/crimx/observable-hooks)
[![Coverage Status](https://img.shields.io/coveralls/github/crimx/observable-hooks/master)](https://coveralls.io/github/crimx/observable-hooks?branch=master)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?maxAge=2592000)](http://commitizen.github.io/cz-cli/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-brightgreen.svg?maxAge=2592000)](https://conventionalcommits.org)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

React hooks for RxJS Observables with super flexible APIs.

- Seamless integration of React and RxJS.
  - Props and states to Observables.
  - Observables to states and props events.
  - Conditional rendering with stream of React Components. (Or Suspense with [use-suspensible](https://github.com/crimx/use-suspensible))
- Full-powered RxJS. Do whatever you want with Observables. No limitation or compromise.
- Lightweight and fast. **741 B** compressed & gzipped. A lot of efforts had been put into improving integration. This library should have zero visible impact on performance.
- Fully tested.

## Why?

React added hooks for [reusing stateful logic](https://reactjs.org/docs/hooks-intro.html#its-hard-to-reuse-stateful-logic-between-components).
Observable is a powerful way to encapsulate both sync and async logic.
And [testing](https://rxjs-dev.firebaseapp.com/guide/testing/marble-testing) Observables is way easier than testing other async implementations in a React Component.

Now we can reuse Observable logic joyfully with [observable-hooks](https://github.com/crimx/observable-hooks).

## What It Is Not

This library is not for replacing state management tools like Redux (though technically it could with its flexible APIs plus other hooks) but to reduce the need of dumping everything into global state just because there used to be no better way to handle it inside React Components.

Using this library does not mean you have to turn everything observable. It is not encouraged to abuse Observables. It plays well side by side with other hooks. Use it only on places where it's needed.

## At a Glance

```jsx
import * as React from 'react'
import { useObservableState } from 'observable-hooks'
import { timer } from 'rxjs'
import { switchMap, mapTo, startWith } from 'rxjs/operators'

const App = () => {
  const [isTyping, updateIsTyping] = useObservableState(
    transformTypingStatus,
    false
  )

  return (
    <div>
      <input type="text" onKeyDown={updateIsTyping} />
      <p>{isTyping ? 'Good you are typing.' : 'Why stop typing?'}</p>
    </div>
  )
}

// Logic can be tested like Epic in redux-observable
function transformTypingStatus(event$) {
  return event$.pipe(
    switchMap(() =>
      timer(1000).pipe(
        mapTo(false),
        startWith(true)
      )
    )
  )
}
```

## Installation

yarn

```bash
yarn add observable-hooks
```

npm

```bash
npm install --save observable-hooks
```

## Usage

Read the docs [here](https://www.crimx.com/observable-hooks).

Here is how I designed the APIs. Might give you a perspective on when use what.

![mindmap](https://github.com/crimx/observable-hooks/blob/master/observable-hooks.png?raw=true)

Examples are in [here](https://github.com/crimx/observable-hooks/tree/master/examples). Play on CodeSandbox:

- [Pomodoro Timer Example](https://codesandbox.io/s/github/crimx/observable-hooks/tree/master/examples/pomodoro-timer)
- [Typeahead Example](https://codesandbox.io/s/github/crimx/observable-hooks/tree/master/examples/typeahead)

Note that there are also some useful [utilities](https://www.crimx.com/observable-hooks/modules/_helpers_.html) for common use cases to reduce garbage collection.

All available APIs can be imported from the entry.

```javascript
import { ... } from 'observable-hooks'
```

## Overly Simplified Examples

### Conditional rendering (with vanilla JavaScript)

With observable-hooks you can have a stream of React Components which is like Suspense but armed with the incredible RxJS operators. If you want to you can also use React Suspense with the help of [use-suspensible](https://github.com/crimx/use-suspensible).

```jsx
import { from, of } from 'rxjs'
import { map, switchMap, startWith, catchError } from 'rxjs/operators'
import { useObservableState } from 'observable-hooks'
import { fetchData } from './api'
import { SuccessUI, LoadingUI, ErrorUI } from './components'

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
      catchError(error => of(<ErrorUI error={error} />))
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

### Debounce Text Verification (with vanilla JavaScript)

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

### Auto-cancelation (with TypeScript)

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
