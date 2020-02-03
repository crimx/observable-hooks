# Render-as-You-Fetch (using Suspense)

Observable-hooks offers first-class React Suspense support!

Also see the [suspense](/examples/suspense.html) example project.

::: tip
See [why](./render-as-you-fetch-observable.md) a stream of React Components could be a better choice for conditional rendering.
:::

## Benefits of Observable as Data Source

### Multiple Push

Since Observable implements multiple push protocol:

| | SINGLE | MULTIPLE |
| Pull | `Function` | `Iterator` |
| Push | `Promise` | `Observable` |

You can just keep pushing `next` values for new requests instead of replacing the resource.

### Race Conditions

You don't need to solve race conditions by [moving resource to states](https://reactjs.org/docs/concurrent-mode-suspense.html#solving-race-conditions-with-suspense).

```javascript
const initialResource = fetchProfileData(0);

function App() {
  const [resource, setResource] = useState(initialResource);
```

Just `switchMap` and consume the resource as usual.

## Usage

Just like the [Render-as-You-Fetch (using Suspense)](https://reactjs.org/docs/concurrent-mode-suspense.html#approach-3-render-as-you-fetch-using-suspense) in React Docs, we first define the data source, then use it directly in Components under Suspense Components.

### Observable Resource

[`ObservableResource`](../api/README.md#ObservableResource) transforms Observables into Relay-like Suspense compatible resource.

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

You can read the resouce with `resource.read()` but since Observable is multiple push we may need to re-trigger Suspense at some point. `ObservableResource` instance exposes a `shouldUpdate$$` Subject which emits values when Suspense should restart.

But you don't need to worry about that. Observable-hooks offers a lightweight hook `useObservableSuspense` to properly consume Observable Resources.

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

### Re-trigger Suspense

By default `ObservableResource` will treat every value as "success" value, which means when new value is emitted, the Component will just re-render itself with the new value.

`ObservableResource` also accepts an extra function that determine the if the value is of success state. If false then a Suspense is triggered.

```javascript
export const userResource = new ObservableResource(
  userResource$$,
  // Trigger Suspense on null and undefined
  value => !!value
)
```

In TypeScript if the resulted type is different from the input you will have to define the function as type predicate.

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

### Error Handling

Define an error boundary following the instructions on [React Docs](https://reactjs.org/docs/concurrent-mode-suspense.html#handling-errors).
