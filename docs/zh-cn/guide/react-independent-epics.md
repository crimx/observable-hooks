# 独立于 React 的 Epics

有的时侯我们可能希望让 Observable 的操作逻辑与 React 解耦，从而进一步在其它工具中复用。本文列举了一些方式以独立于 React 的方式编写 Observable 操作。

通常我们这么使用 `useObservable`：

```js
const enhanced$ = useObservable(
  inputs$ => inputs$.pipe(
    ...
  ),
  [props.a, stateB]
)
```

这非常好因为类 epic 的方法 `inputs$ => inputs$.pipe(...)` 与 React 以及 Observable Hooks 完全无关。我们可以这么复用：

```js
// path/to/logic/text.js
export const transformText = inputs$ => inputs$.pipe(
  ...
)
```

```js
import { transformText } from 'path/to/logic/text'

const enhanced$ = useObservable(
  transformText,
  [props.a, stateB]
)
```

但有时候组件中可能创建了多个 Observables：

```js
const [onChange, textChange$] = useObservableCallback(event$ => event$.pipe(...))

const enhanced$ = useObservable(
  inputs$ => inputs$.pipe(
    withLatestFrom(textChange$)
    ...
  ),
  [props.a, stateB]
)
```

这样开始不好复用了，因为存在本地依赖。

但是嘿，既然它们是依赖，那为何我们不直接把它们定义成“依赖”呢！

## 直接依赖

这个模式中 Observable 作为子流被传进去。

```js
const [onChange, textChange$] = useObservableCallback(event$ => event$.pipe(...))

const enhanced$ = useObservable(
  inputs$ => {
    const textChange$ = inputs$.pipe(
      distinctUntilKeyChanged(2)
      switchMap(inputs => inputs[2])
    )
    return inputs$.pipe(
      withLatestFrom(textChange$)
      ...
    )
  },
  [props.a, stateB, textChange$]
)
```

但当 Observable 较多的时侯这么定义可能有些费劲。

## 高阶依赖

另一种模式是区分普通依赖与响应式依赖，类似在定义高阶依赖。

```js
const [onChange, textChange$] = useObservableCallback(event$ => event$.pipe(...))

const metaValues$ = useObservable(identity, [props.a, stateB])

const enhanced$ = useObservable(
  inputs$ => inputs$.pipe(
    switchMap(([metaValues$, textChange$]) => metaValues$.pipe(
      withLatestFrom(textChange$)
      ...
    ))
  ),
  [metaValues$, textChange$]
)
```

这种方式在 Observable 较多的情况下会更简洁。

