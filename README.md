# [observable-hooks](https://github.com/crimx/observable-hooks)

[![Docs](https://img.shields.io/badge/Docs-read-%23fdf9f5)](https://observable-hooks.js.org)
[![npm-version](https://img.shields.io/npm/v/observable-hooks.svg)](https://www.npmjs.com/package/observable-hooks)
[![Build Status](https://github.com/crimx/observable-hooks/actions/workflows/build.yml/badge.svg)](https://github.com/crimx/observable-hooks/actions/workflows/build.yml)
[![Coverage Status](https://img.shields.io/codeclimate/coverage/crimx/observable-hooks)](https://codeclimate.com/github/crimx/observable-hooks)

![logo](https://github.com/crimx/observable-hooks/blob/main/logo.jpg?raw=true)

Concurrent mode compatible React hooks for RxJS Observables. Simple, flexible, testable and performant.

- Seamless integration of React and RxJS.
  - Concurrent mode compatible.
  - Props, state and context to Observables.
  - Observables to states and props events.
  - Conditional rendering with stream of React Components.
  - Render-as-You-Fetch with React Suspense.
  - No `tap` hack needed. With Epic-like signature Observable operation is pure and testable.
- Full-powered RxJS. Do whatever you want with Observables. No limitation nor compromise.
- Fully tested. We believe in stability first. This project will always maintain a 100% coverage.
- Tiny and fast. A lot of efforts had been put into improving integration. This library should have zero visible impact on performance.
- Compatible with RxJS 6 & 7.

## Installation

yarn

```bash
yarn add observable-hooks
```

npm

```bash
npm install --save observable-hooks
```

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
import * as React from "react";
import { useObservableState } from "observable-hooks";
import { timer } from "rxjs";
import { switchMap, mapTo, startWith } from "rxjs/operators";

const App = () => {
  const [isTyping, updateIsTyping] = useObservableState(
    transformTypingStatus,
    false
  );

  return (
    <div>
      <input type="text" onKeyDown={updateIsTyping} />
      <p>{isTyping ? "Good you are typing." : "Why stop typing?"}</p>
    </div>
  );
};

// Logic is pure and can be tested like Epic in redux-observable
function transformTypingStatus(event$) {
  return event$.pipe(
    switchMap(() => timer(1000).pipe(mapTo(false), startWith(true)))
  );
}
```

## Usage

Read the docs at <https://observable-hooks.js.org> or [`./docs`](./docs/).

Examples are in [here](https://github.com/crimx/observable-hooks/tree/main/examples). Play on CodeSandbox:

- [Pomodoro Timer Example](https://codesandbox.io/s/github/crimx/observable-hooks/tree/main/examples/pomodoro-timer)
- [Typeahead Example](https://codesandbox.io/s/github/crimx/observable-hooks/tree/main/examples/typeahead)
- [Render-as-You-Fetch using Suspense](https://codesandbox.io/s/github/crimx/observable-hooks/tree/main/examples/suspense)
- [React Context](https://codesandbox.io/s/github/crimx/observable-hooks/tree/main/examples/context)

Note that there are also some useful [utilities](https://observable-hooks.js.org/api/helpers.html) for common use cases to reduce garbage collection.

[docs]: https://observable-hooks.js.org
