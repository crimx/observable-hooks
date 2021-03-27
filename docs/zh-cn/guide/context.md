# 结合 React Context 使用

通过 [React Context](https://reactjs.org/docs/context.html) 可以很方便将数据传到任意层级的子组件树中。

本文将分享几个 `observable-hooks` 结合 React Context 使用的模式。

可以查看 [context](/examples/context.html) 项目样例。

## 普通传值

通常我们直接往 Context 传普通的值，然后通过 [`useContext`](https://reactjs.org/docs/hooks-reference.html#usecontext) 在组件中拿到。

可以利用 [`useObservable`](./README/md#useobservable) 获取 Context 值变化。

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

## 传 Observable

另一种方式是向 Context 传 Observables。

这些来自 Context 的 Observables 可以通过 [`useSubscription`](./README/md#usesubscription) 订阅。而且，如果传下来的 Observables 发生了变化它还会安全地自动切换去订阅新的 Observables。

```javascript
const num$ = useContext(ObservableValueContext)
useSubscription(num$, value => {
  console.log('useSubscription', value)
})
```

[`useObservableState`](./README/md#useobservablestate) 以及其它 state 相关的 hooks 都一样，因为它们底下都是用 `useSubscription` 订阅。

```javascript
const num$ = useContext(ObservableValueContext)
const num = useObservableState(num$)
console.log('useObservableState', num)
```

如果你需要对传下来的 Observable 进行变换（`pipe`）操作，则应该将其定义为依赖，因为它有可能会改变。

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
