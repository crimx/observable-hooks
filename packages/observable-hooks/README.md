# [observable-hooks](https://github.com/crimx/observable-hooks)

[![npm-version](https://img.shields.io/npm/v/observable-hooks.svg)](https://www.npmjs.com/package/observable-hooks)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/observable-hooks)](https://bundlephobia.com/result?p=observable-hooks)
[![Build Status](https://img.shields.io/travis/com/crimx/observable-hooks/master)](https://travis-ci.com/crimx/observable-hooks)
[![Coverage Status](https://img.shields.io/coveralls/github/crimx/observable-hooks/master)](https://coveralls.io/github/crimx/observable-hooks?branch=master)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?maxAge=2592000)](http://commitizen.github.io/cz-cli/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-brightgreen.svg?maxAge=2592000)](https://conventionalcommits.org)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

![logo](https://github.com/crimx/observable-hooks/blob/master/logo.jpg?raw=true)

React hooks for RxJS Observables. Simple, flexible, testable and performant.

- Seamless integration of React and RxJS.
  - Props and states to Observables.
  - Observables to states and props events.
  - Conditional rendering with stream of React Components.
  - Render-as-You-Fetch with React Suspense.
  - No `tap` hack needed. With Epic-like signature Observable operation is pure and testable.
- Full-powered RxJS. Do whatever you want with Observables. No limitation nor compromise.
- Fully tested. We believe in stability first. This project will always maintain a 100% coverage.
- Tiny and fast. A lot of efforts had been put into improving integration. This library should have zero visible impact on performance.
- Compatible with RxJS 6 & 7.

## Why?

React added hooks for [reusing stateful logic](https://reactjs.org/docs/hooks-intro.html#its-hard-to-reuse-stateful-logic-between-components).

Observable is a powerful way to encapsulate both sync and async logic.

[Testing](https://rxjs-dev.firebaseapp.com/guide/testing/marble-testing) Observables is also way easier than testing other async implementations.

With [observable-hooks](https://github.com/crimx/observable-hooks) we can create rich reusable Components with ease.

## What It Is Not

This library is not for replacing state management tools like Redux but to reduce the need of dumping everything into global state.

Using this library does not mean you have to turn everything observable which is not encouraged. It plays well side by side with other hooks. Use it only on places where it's needed.

## At First Glance

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

// Logic is pure and can be tested like Epic in redux-observable
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

Read the docs at <https://observable-hooks.js.org>.

Here is how I designed the API. Might give you a perspective on when use what.

![mindmap](https://github.com/crimx/observable-hooks/blob/master/observable-hooks.png?raw=true)

Examples are in [here](https://github.com/crimx/observable-hooks/tree/master/examples). Play on CodeSandbox:

- [Pomodoro Timer Example](https://codesandbox.io/s/github/crimx/observable-hooks/tree/master/examples/pomodoro-timer)
- [Typeahead Example](https://codesandbox.io/s/github/crimx/observable-hooks/tree/master/examples/typeahead)

Note that there are also some useful [utilities](https://observable-hooks.js.org/modules/_helpers_.html) for common use cases to reduce garbage collection.
