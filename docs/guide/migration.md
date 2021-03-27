# Migration

## v2 to v3

v3 is React concurrent mode safe. There will be no synchronous subscription.

1. If synchronous values from observables are used as initial state, move the initialization logic to the `initialState` parameter of `useObservableState`, `useObservablePickState` and `useObservableGetState`.
2. `useGetObservableState` and `usePickObservableState` signatures are incompatible. The new added `initialState` is not optional.
3. If `initialState` is a function it will be called. If you need to use function as state wrap it with an extra function.

## v3 to v4

v4 is not compatible with TypeScript 3.

1. remove the readonly modifier of `useObservable` and `useLayoutObservable` dependency list.
