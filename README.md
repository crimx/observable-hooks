# observable-hooks

React hooks for RxJS Observables with powerful APIs.

Read the doc [here](https://www.crimx.com/observable-hooks).

Example are [here](https://github.com/crimx/observable-hooks/tree/master/examples), or play on codesandbox:

- [Typeahead Example](https://codesandbox.io/s/github/crimx/observable-hooks/tree/master/examples/typeahead)

This project is still under heavy development. Use with caution. I will finish testing as soon as possible.

Here is how I designed the APIs.

![mindmap](https://github.com/crimx/observable-hooks/blob/master/observable-hooks.png?raw=true)

TODO

- Examples
  - [x] Create an Observable from props and states with `useObservable`.
  - [x] Create an Observable from event callback with `useObservableCallback`.
  - [x] Subscribe Observable with `useSubscription`.
  - [x] `useState`-like `[state, setState]` with `useObservableState`.
  - [x] Call props function with `useObservablePropsCallback`.
  - [x] Typeahead example. (Easily combine or chain Observables together to deal with complex scenarios.)
- Testing
  - [ ] `useObservable` will not trigger an extra rerender on init.
  - [ ] `useObservableState` will not trigger an extra rerender if the first emitted value is sync.
  - [ ] `useObservableState` will not lose the fisrt value when rerender is triggered from outside.
  - [ ] `useSubscription` will unsubscribe on unmount.
