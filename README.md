# observable-hooks

React hooks for RxJS Observables with powerful APIs.

![mindmap](https://github.com/crimx/observable-hooks/blob/master/observable-hooks.png?raw=true)

Read the doc [here](https://www.crimx.com/observable-hooks).

This project is still in its early stage. Use with caution. PRs are welcome.

TODO

- Examples
  - [x] Create an Observable from props and states with `useObservable`.
  - [x] Create an Observable from event callback with `useObservableCallback`.
  - [x] Subscribe Observable with `useSubscription`.
  - [x] `useState`-like `[state, setState]` with `useObservableState`.
  - [x] Call props function with `useObservablePropsCallback`.
  - [ ] Typeahead example. (Easily combine or chain Observables together to deal with complex scenarios.)
- Testing
  - [ ] `useObservable` will not trigger an extra rerender on init.
  - [ ] `useObservableState` will not trigger an extra rerender with `startWith`.
  - [ ] `useSubscription` will unsubscribe on unmount.
