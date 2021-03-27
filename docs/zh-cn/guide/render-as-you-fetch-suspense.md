# Render-as-You-Fetch (结合 Suspense)

Observable-hooks 提供了专门的 React Suspense 支持！支持同步模式！

也可以看看 [suspense](/examples/suspense.html) 样例项目。

## 使用响应式数据源的好处

### 多次推值

因为响应式实现了多次推值协议:

|       |    单次    |    多次      |
| ----  | ---------- | ------------ |
|  拉值  | `Function` |  `Iterator`  |
|  推值  | `Promise`  | `Observable` |

你可以一直 `next` 推新的值而无须推一遍换一个数据源。

### 竞态条件

你无须为了解决资源争用的竞态条件而[将数据源写到状态中](https://reactjs.org/docs/concurrent-mode-suspense.html#solving-race-conditions-with-suspense)：

```javascript
const initialResource = fetchProfileData(0);

function App() {
  const [resource, setResource] = useState(initialResource);
```

直接 `switchMap` 即可。

### 高级控制

通过丰富的 Observable 操作符你可以轻易串联多个请求、超时处理、失败重试或者其它针对多个流的复杂操作。

## 使用

与 React 官方文档的 [Render-as-You-Fetch (using Suspense)](https://reactjs.org/docs/concurrent-mode-suspense.html#approach-3-render-as-you-fetch-using-suspense) 一样，我们先定义数据源，然后在组件中结合 Suspense Context 使用。

### Observable Resource

[`ObservableResource`](../api/README.md#ObservableResource) 将 Observables 转换为类 Relay 的兼容 Suspense 的数据源。

```javascript
// api.js
import { ObservableResource } from 'observable-hooks'

const postResource$$ = new Subject()

export const postsResource = new ObservableResource(postResource$$.pipe(
  switchMap(id => fakePostsXHR(id))
))

export function fetchPosts(id) {
  postResource$$.next(id)
}
```

### Observable Suspense Hook

你可以通过 `resource.read()` 读取数据源的值。但因为 Observable 可以多次推值，我们还需要在特定时机重新触发 Suspense。 `ObservableResource` 实例暴露了一个 `shouldUpdate$$` Subject，当需要重新触发 Suspense 时它会产生值。

但你无须处理这些细节，Observable-hooks 还提供一个轻量的 hook `useObservableSuspense` 来正确地接入 Observable 数据源。

```jsx
// App.jsx
import { useObservableSuspense } from 'observable-hooks'

import { postsResource, fetchPosts } from './api'

fetchPosts('crimx')

function ProfilePage() {
  return (
    <Suspense fallback={<h1>Loading posts...</h1>}>
      <ProfileTimeline />
    </Suspense>
  )
}

function ProfileTimeline() {
  // Try to read posts, although they might not have loaded yet
  const posts = useObservableSuspense(postsResource)
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  )
}
```

### Stale-While-Revalidate 模式

默认情况下 `ObservableResource` 把每个产生的值当作是“成功”的状态。这种情况下当新的值产生时，组件便直接重新渲染。


这也被叫做 Stale-While-Revalidate 模式, 一个从 [HTTP RFC 5861](https://tools.ietf.org/html/rfc5861) 广泛流传的缓存失效策略。

它首先从缓存中返回数据，然后发请求，最终切换到新的值。

### 多次触发 Suspense

要多次触发 Suspense， `ObservableResource` 还接受一个额外的回调参数用于判断新产生的值是否为“成功”状态，如果不是则重新触发 Suspense。

```javascript
export const userResource = new ObservableResource(
  userResource$$,
  // Trigger Suspense on null and undefined
  value => value != null
)
```

在 TypeScript 中如果产生值最终得到的类型与传入的类型不一样，你可以将回调定义为断言函数：

```typescript
interface Success {
  status: 'success'
  value: string
}

interface Pending {
  status: 'pending'
}

type State = Success | Pending

const input$$ = new Subject<State>()

const resouce = new ObservableResource(
  input$$,
  (value: State): value is Success => value.status !== 'pending'
)
```

### 异常处理

Observables 产生的异常会被 `ObservableResource` 收集并作为渲染异常重新抛出。参照 [React 文档](https://reactjs.org/docs/concurrent-mode-suspense.html#handling-errors)定义错误边界组件。

同时注意由于 RxJS 的设计，一个 Observable 一旦产生了异常便会被永远断流。要么避免异常传到 Observables 上，要么在子流中使用 [`catchError`][catchError]。

如果 Observable 确实产生了异常，可以在需要恢复组件时（如错误边界组件中处理）重载数据源。 对于 Cold Observable 调用 `resource.reload()`，对于 Hot Observable 调用 `resource.reload(newObservable$)`。建议尽可能在  `ObservableResource` 使用 Cold Observable 以便重载。

[catchError]: https://rxjs-dev.firebaseapp.com/api/operators/catchError
