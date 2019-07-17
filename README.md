# observable-hooks

React hooks for RxJS Observables with powerful APIs.

![mindmap](https://github.com/crimx/observable-hooks/blob/master/observable-hooks.png?raw=true)

Read the doc [here](https://www.crimx.com/observable-hooks).

This project is still in its early stage. Use with caution. PRs are welcome.

TODO

- Examples
  - [ ] Create an Observable from props and states with `useObservable`.
  - [ ] Create an Observable from event callback with `useObservableCallback`.
  - [ ] Subscribe Observable with `useSubscription`.
  - [ ] `useState`-like `[state, setState]` with `useObservableState`.
  - [ ] Call props function with `useObservablePropsCallback`.
  - [ ] Easily combine or chain Observables together to deal with complex scenarios.
- Testing
  - [ ] `useObservable` will not trigger an extra rerender on init.
  - [ ] `useObservableState` will not trigger an extra rerender with `startWith`.
  - [ ] `useSubscription` will unsubscribe on unmount.
