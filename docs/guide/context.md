# With React Context

[React Context](https://reactjs.org/docs/context.html) is an easy way to share data at any level down the component tree.

This article shares some of the patterns to use `observable-hooks` with React Context.

Also see the [context](/examples/context.html) example project.

## With Normal Value

Conventionally we pass normal values down the Context. React offers a [`useContext`](https://reactjs.org/docs/hooks-reference.html#usecontext) hook to cosume the value.

This can be easily captured by the [`useObservable`](./README/md#useobservable) hooks.

```javascript
const normalValue = useContext(NormalValueContext)

const normalValueList$ = useObservable(
  inputs$ => inputs$.pipe(
    scan((acc, inputs) => [...acc, ...inputs], []),
    take(10)
  ),
  [normalValue]
)
```

## With Observable Value

You can also pass Observables down the Context.

These Observables can be subscribed directly with [`useSubscription`](./README/md#usesubscription) which will automatically unsubscribe the old one and resubscribe to the new one.

```javascript
const num$ = useContext(ObservableValueContext)
useSubscription(num$, value => {
  console.log('useSubscription', value)
})
```

[`useObservableState`](./README/md#useobservablestate) and other state hooks work the same as they use `useSubscription` under the hood.

```javascript
const num$ = useContext(ObservableValueContext)
const num = useObservableState(num$)
console.log('useObservableState', num)
```

If you need to transform(`pipe`) the Observable then you should list it as dependency since it may change over time.

```javascript
const num$ = useContext(ObservableValueContext)

const numList$ = useObservable(
  input$ => input$.pipe(
    switchMap(([num$]) =>
      num$.pipe(
        scan((acc, inputs) => [...acc, inputs], []),
        take(20)
      )
    )
  ),
  [num$]
)
```
