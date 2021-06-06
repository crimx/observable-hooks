# 简单例子

## 条件渲染（原生 JavaScript 例子）

使用 observable-hooks 你甚至可以得到 React 元素流。如果想用 Suspense 可以看看 [Render-as-You-Fetch (using Suspense)](../guide/render-as-you-fetch-suspense.md)。

这会影响到虚拟 DOM 么？不会的，React 元素都是普通对象。 实际上重新渲染时这会比使用 Suspense 或错误边界要快，因为：

1. 它不需要 `throw` 并依赖 `try` 和 `catch`。但当然后者这么做可以支持类似 Context 的使用。
2. React 重新渲染父组件的时侯不需要对没有用到的分支也重新计算一遍。甚至如果没有新的值产生子组件都不会被重新渲染。它就像一层天然的缓存。

```jsx
import { from, of } from 'rxjs'
import { map, switchMap, startWith, catchError } from 'rxjs/operators'
import { useObservableState } from 'observable-hooks'
import { fetchData } from './api'
import { DefaultUI, SuccessUI, LoadingUI, FailedUI } from './components'

export function App() {
  const [status, onFetchData] = useObservableState(
    event$ => event$.pipe(
      // OMG I don't have to deal with race condition
      switchMap(event =>
        from(fetchData(event.currentTarget.id)).pipe(
          map(value => <SuccessUI value={value} />),
          // handle errors on sub-stream so that main stream stays alive
          catchError(error => of(<FailedUI error={error} />)),
          // show loading state immediately
          startWith(<LoadingUI />)
        )
      )
    ),
    () =>  <DefaultUI /> // initial state
  )

  return (
    <div>
      <button id="data1" onClick={onFetchData}>fetch</button>
      {status}
    </div>
  )
}
```

## 防抖输入校验（原生 JavaScript 例子）

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
  // `pluckFirst` 是一个简单的辅助方法
  // 相当于 `inputs$ => inputs$.pipe(map(inputs => inputs[0]))`
  const uuid$ = useObservable(pluckFirst, [props.uuid])

  const [isValid, onChange] = useObservableState(
    event$ =>
      event$.pipe(
        // React 合成事件对象会被自动回收
        // 先把值取出来
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

## 自动取消（TypeScript 例子）

```tsx
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
    [shouldSendBeacon, props.beacon]
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
