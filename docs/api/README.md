# Core

## useObservable

```typescript
useObservable<TOutput>(init: function): Observable<TOutput>
useObservable<TOutput, TInputs>(
  init: function,
  inputs: TInputs
): Observable<TOutput>
```

React function components will be called many times during its life cycle. Create or transform Observables with `useObservable` so that the operations will not be repeatedly performed.

Accepts a epic-like function that returns an Observable. Optionally accepts an array of dependencies which will be turned into Observable and be passed to the epic function.

::: warning Gotcha
It is not safe to access other variables from closure directly in the `init` function. See [Gotchas](../guide/gotchas.md).
:::

::: warning Restriction
The dependencies array is internally passed to [`useEffect`][useEffect]. So same restriction is applied. The length of the dependencies array must be fixed.
:::

**Type parameters:**

- `TOutput` Output value within Observable.
- `TInputs` An readonly tuple of all dependencies.

**Parameters:**

Name | Type | Description
------ | ------ | ------
`init` | `(inputs$: Observable<TInputs>): Observable<TOutput>` | A pure function that, when applied to an Observable, returns an Observable.
`inputs` | `TInputs` | An optional dependency array with fixed length. When one of the dependencies changes the Observable in `init` will emit an array of all the dependencies.

**Returns:**

`Observable<TOutput>` Always the same Observable.

**Examples:**

```typescript
interface CompProps {
  isOpen: boolean
}

const Comp: React.FC<CompProps> = props => {
  const [showPanel, setShowPanel] = useState(false)

  // Listen to props or state change
  const enhanced$ = useObservable(
    inputs$ => inputs$.pipe(map(([isOpen, showPanel]) => isOpen && showPanel)),
    [props.isOpen, showPanel]
  )
}
```

Create Observable:

```typescript
const now$ = useObservable(
  () => interval(1000).pipe(
    map(() => new Date().toLocaleString())
  )
)
```

Transform Observables:

```typescript
// outers$ are created from other React-unrelated module
const enhanced$ = useObservable(() => outers$.pipe(mapTo(false)))
```

You can even mix them all together:

```typescript
const enhanced$ = useObservable(
  inputs$ => isEven$.pipe(
    withLatestFrom(inputs$),
    map(([isEven, [isOpen]]) => isEven && isOpen)
  ),
  [props.isOpen]
)
```

## useLayoutObservable

If no dependencies provided it is identical with [`useObservable`](#useobservable). Otherwise it uses [`useLayoutEffect`][useLayoutEffect] to listen props and state changes.

This is useful if you need values before next paint.

## useObservableCallback

```typescript
useObservableCallback<TOutput, TInput, TParams>(
  init: function,
  selector?: undefined | function
): [function, Observable<TOutput>]
```

Returns a callback function and an events Observable.

Whenever the callback is called, the Observable will emit the first argument of the callback.

<p>
  <Badge text="v2.1.0"/> From <code>v2.1.0</code> optionally accepts a selector function which transforms an array of event arguments into a single value.
</p>

::: tip
If you want to return state value instead of Observable see [useObservableState](#useobservablestate).
:::

::: warning Gotcha
It is not safe to access other variables from closure directly in the `init` function. See [Gotchas](../guide/gotchas.md).
:::

::: tip
In TypeScript if you want to invoke the callback with no argument, use `void` instead of `undefined` type.
:::

**Type parameters:**

- `TOutput` Output value within Observable.
- `TInput` Selected values.
- `TParams` A tuple of event callback parameters.

**Parameters:**

Name | Type | Description
------ | ------ | ------
`init` | `(inputs$: Observable<TInputs>): Observable<TOutput>` | A pure function that, when applied to an Observable, returns an Observable.
`selector` | `(args: TParams): TInput` | An optional function that transforms an array of event arguments into a single value.

**Returns:**

`[(...args: TParams): void, Observable<TOutput>]` A tuple with the same callback-Observable pair.

**Examples:**

```typescript
import { useObservableCallback, useSubscription } from 'observable-hooks'

const Comp = () => {
  const [onChange, textChange$] = useObservableCallback<
    string,
    React.FormEvent<HTMLInputElement>
  >(event$ => event$.pipe(
    pluck('currentTarget', 'value')
  )) // or just use "pluckCurrentTargetValue" helper

  useSubscription(textChange$, console.log)

  return <input type="text" onChange={onChange} />
}
```

Transform event arguments:

```typescript
import { useObservableCallback, identity } from 'observable-hooks'

const [onResize, height$] = useObservableCallback<
  number,
  number,
  [number, number]
>(identity, args => args[1])

// onResize is called with width and hegiht
// height$ gets height values
onResize(100, 500)
```

## useSubscription

```typescript
useSubscription<TInput>(
  input$: Observable<TInput>,
  next?: function | null | undefined,
  error?: function | null | undefined,
  complete?: function | null | undefined
): React.MutableRefObject<Subscription | undefined>
```

Concurrent mode safe Observable subscription. Accepts an Observable and optional `next`, `error`, `complete` functions. These functions must be in correct order. Use `undefined` or `null` for placeholder.

Why use it instead of just `useEffect`?

```js
useEffect(
  () => {
    const subscription = input$.subscribe({
      next: ...,
      error: ...,
      complete: ...,
    })
    
    return () => {
      subscription.unsubscribe()
    }
  },
  [input$]
)
```

Because:

1. The observer callbacks could suffer from stale closure problem. It is not easy to directly reference any local values in the callbacks.
2. It is not concurrent mode safe. Tearing could occur during changing of Observables.

<p>
  <Badge text="v2.0.0"/> From <code>v2.0.0</code>. <code>useSubscription</code> will ensure the latest callback is called. You can safely reference any closure variable directly inside the callbacks.
</p>

<p>
  <Badge text="v2.3.4"/> From <code>v2.3.4</code>. When the Observable changes <code>useSubscription</code> will automatically unsubscribe the old one and resubscribe to the new one.
</p>

<p>
  <Badge text="v3.0.0"/> From <code>v3.0.0</code>. <code>useSubscription</code> is concurrent mode safe. It will prevent observer callbacks being called from stale Observable.
</p>

To make it concurrent mode compatible, the subscription happens after the render is committed to the screen. Even if the Observable emits synchronous values they still will arrive after the first rendering.

::: tip
Note that changes of the observer callbacks will not trigger an emission. If you need that just create another Observable of the callback with [`useObservable`](#useobservable).
:::

::: tip Error Handling
Due to the design of RxJS, once an error occurs in an observable, the observable is killed. You can:

- Prevent errors from reaching observables or [`catchError`][catchError] in sub-observables.
- You can also make the observable as state and replace it on error. It will automatically switch to the new one.
- From `v3.0.0`, Observable error can be caught by React error boudary where you have replace a new Observable.
:::

**Type parameters:**

- `TInput` Input value within Observable.

**Parameters:**

Name | Type | Description
------ | ------ | ------
`input$` | `Observable<TInput> | null | undefined` | Input Observable.
`next` | `(value: TInput): void | null | undefined` | Notify when a new value is emitted.
`error` | `(error: any): void | null | undefined` | Notify when a new error is thrown.
`complete` | `(): void | null | undefined` | Notify when the Observable is complete.

**Returns:**

`React.MutableRefObject<Subscription | undefined>` A ref object with the RxJS Subscription. the ref `current` is `undefined` on first rendering.

**Examples:**

```typescript
const subscription = useSubscription(events$, e => console.log(e.type))
```

On complete

```typescript
const subscription = useSubscription(events$, null, null, () => console.log('complete'
```

Access closure:

```typescript
const [debug, setDebug] = useState(false)
const subscription = useSubscription(events$, null, error => {
  if (debug) {
    console.log(error)
  }
})
```

Invoke props callback

```typescript
const subscription = useSubscription(events$, props.onEvent)
```

## useLayoutSubscription

Same as [useSubscription](#usesubscription) except the subscription is established under `useLayoutEffect`.

Useful when values are needed before DOM paint.

Use it scarcely as it runs synchronously before browser paint. Too many synchronous emissons from the observable could stretch the commit phase.

## useObservableState

```typescript
useObservableState<TState>(
  input$: Observable<TState>
): TState | undefined
useObservableState<TState>(
  input$: Observable<TState>,
  initialState: TState | (() => TState)
): TState
useObservableState<TState, TInput = TState>(
  init: (input$: Observable<TInput>) => Observable<TState>
): [TState | undefined, (input: TInput) => void]
useObservableState<TState, TInput = TState>(
  init: (
    input$: Observable<TInput>,
    initialState: TState
  ) => Observable<TState>,
  initialState: TState | (() => TState)
): [TState, (input: TInput) => void]
```

A concurrent mode safe sugar to get values from Observables. Read [Core Concepts](../guide/core-concepts.md) to learn more about its design.

Is can be used in two ways:

1. Offer an Observable and an optional initial state.
   ```js
   const output = useObservableState(input$, initialState)
   ```
2. Offer an epic-like function and an optional initial state.
   ```js
   const [output, onInput] = useObservableState(
     (input$, initialState) => input$.pipe(...),
     initialState
   )
   ```

These two ways use different hooks, choose either one each time and do not change to the other one during Component's life cycle.

The optional `initialState` is internally passed to `useState(initialState)`. This means it can be either a state value or a function that returns the state which is for expensive initialization.

The `initialState`(or its returned result) is also passed to the `init` function. This is useful if you want to implement reduer pattern which requires an initial state.

To make it concurrent mode compatible, the subscription happens after the render is committed to the screen. Even if the Observable emits synchronous values they still will arrive after the first rendering.

::: warning Gotcha
It is not safe to access other variables from closure directly in the `init` function. See [Gotchas](../guide/gotchas.md).
:::

::: tip Error Handling
Due to the design of RxJS, once an error occurs in an observable, the observable is killed. You can:

- Prevent errors from reaching observables or [`catchError`][catchError] in sub-observables.
- You can also make the observable as state and replace it on error. It will automatically switch to the new one.
- From `v3.0.0`, Observable error can be caught by React error boudary where you have replace a new Observable.
:::

::: tip
In TypeScript if you want to invoke the callback with no argument, use `void` instead of `undefined` type.
:::

---

**Type parameters:**

- `TState` Output state.

**Parameters:**

Name | Type | Description
------ | ------ | ------
`input$` | `Observable<TState>` | An Observable.
`initialState` | `TState | (): TState` | Optional initial state. Can be the state value or a function that returns the state.

**Returns:**

`TState` State value.

---

**Type parameters:**

- `TState` Output state.
- `TInput` Input values.

**Parameters:**

Name | Type | Description
------ | ------ | ------
`init` | `(input$: Observable<TInput>, initialState: TState): Observable<TState>` | A epic-like function that, when applied to an Observable and the initial state value, returns an Observable.
`initialState` | `TState` | Optional initial state. Can be the state value or a function that returns the state.

**Returns:**

`[TState, (input: TInput): void]` A tuple with the state and input callback.

---

**Examples:**

Consume an Observable:

```typescript
const count$ = useObservable(() => interval(1000))
const count = useObservableState(count$, 0)
```

Or with an `init` function:

```typescript
const [text, updateText] = useObservableState<string>(
  text$ => text$.pipe(delay(1000)),
  ''
)
```

Input and output state can be different types

```typescript
// input: string, output: boolean
const [isValid, updateText] = useObservableState<boolean, string>(text$ =>
  text$.pipe(map(text => text.length > 1)),
  false
)
```

Event listener pattern:

```javascript
import { pluckCurrentTargetValue, useObservableState } from 'observable-hooks'

function App(props) {
  const [text, onChange] = useObservableState(pluckCurrentTargetValue, '')
  
  return (
    <input onChange={onChange} value={text} />
  )
}
```

Reducer pattern:

```javascript
const [state, dispatch] = useObservableState(
  (action$, initialState) => action$.pipe(
    scan((state, action) => {
      switch (action.type) {
        case 'INCREMENT':
          return {
            ...state,
            count: state.count +
              (isNaN(action.payload) ? 1 : action.payload)
          }
        case 'DECREMENT':
          return {
            ...state,
            count: state.count -
              (isNaN(action.payload) ? 1 : action.payload)
          }
        default:
          return state
      }
    }, initialState)
  ),
  () => ({ count: 0 })
)

dispatch({ type: 'INCREMENT' })
dispatch({ type: 'DECREMENT', payload: 2 })
```

## useObservableEagerState

```typescript
useObservableEagerState<TState>(
  state$: Observable<TState>
): TState
```

Optimized for getting values from observables which emit synchronous values on subscription (e.g. `BehaviorSubject`).

<Badge text="v3.1.0"/> Added since v3.1.0.

This hook will subscribe to the observable at least twice. The first time is for getting synchronous value to prevent extra initial re-rendering. In concurrent this may happen more than one time.

::: warning
If the observable is cold and with side effects they will be performed at least twice! It is only safe if the observable is hot or pure.
:::

**Type parameters:**

- `TState` Output state.

**Parameters:**

Name | Type | Description
------ | ------ | ------
`state$` | `Observable<TState>` | An Observable.

**Returns:**

`TState` state value.

**Examples:**

```typescript
const state$ = BehaviorSubject('A')

// 'A'
const text = useObservableEagerState(state$)
```

## useObservableGetState

```typescript
useObservableGetState<TState>(
  state$: Observable<TState>,
  initialState: TState | (() => TState)
): TState
useObservableGetState<TState, A extends keyof TState>(
  state$: Observable<TState>,
  initialState: TState[A] | (() => TState[A]),
  pA: A
): TState[A]
useObservableGetState<
  TState,
  A extends keyof TState,
  B extends keyof TState[A]
>(
  state$: Observable<TState>,
  initialState: TState[A][B] | (() => TState[A][B]),
  pA: A,
  pB: B
): TState[A][B]
...
```

Inspired by lodash `get`.

<p>
  <Badge text="v2.3.0"/> Added since <code>v2.3.0</code>. Get value at path of state from an Observable.
</p>

<p>
  <Badge text="v3.0.0"/> From <code>v3.0.0</code>. An initial state must be provided.
</p>

Only changes of the resulted value will trigger a rerendering.

::: warning
Unreachable path will throw errors.
:::

**Type parameters:**

- `TState` Output state.

**Parameters:**

Name | Type | Description
------ | ------ | ------
`state$` | `Observable<TState>` | An Observable.
`initialState` | `undefined | null | TState[...] | (() => TState[...])` | Initial value. Can be the value or a function that returns the value.
`pA` | `keyof TState` | Key of `TState`.
`pB` | `keyof TState[A]` | Key of `TState[A]`.
`pC` | `keyof TState[A][B]` | Key of `TState[A][B]`.
`...`| `...` | `....`

**Returns:**

`TState[...]` Initial value or the value at path of `TState`.

**Examples:**

```typescript
const state$ = of({ a: { b: { c: 'value' } } })

// 'default' on first rendering
// 'value' on next rendering
const text = useObservableGetState(state$, 'default', 'a', 'b', 'c')
```

## useObservablePickState

```typescript
useObservablePickState<
  TState,
  TKeys extends keyof TState,
  TInitial extends null | undefined | void
>(
  state$: Observable<TState>,
  initialState: TInitial,
  ...keys: TKeys[]
): { [K in TKeys]: TState[K] } | TInitial
useObservablePickState<TState, TKeys extends keyof TState>(
  state$: Observable<TState>,
  initialState:
    | { [K in TKeys]: TState[K] }
    | (() => { [K in TKeys]: TState[K] }),
  ...keys: TKeys[]
): { [K in TKeys]: TState[K] }
```

Inspired by lodash `pick`.

<p>
  <Badge text="v2.3.2"/> Added since <code>v2.3.2</code>. Creates an object composed of the picked state properties.
</p>

<p>
  <Badge text="v3.0.0"/> From <code>v3.0.0</code>. An initial state must be provided.
</p>

Changes of any of these properties will trigger a rerendering.

On first rendering it is always `undefined`.

::: warning
Unreachable path will throw errors.
:::

**Type parameters:**

- `TState` Output state.
- `TKeys` keys of state.

**Parameters:**

Name | Type | Description
------ | ------ | ------
`state$` | `Observable<TState>` | An Observable.
`initialState` | `undefined | null | { [K in TKeys]: TState[K] } | (() => { [K in TKeys]: TState[K] })` | Initial value. Can be the value or a function that returns the value.
`...path` | `Array<keyof TState>` | Keys of `TState`.

**Returns:**

`{ [K in TKeys]: TState[K] }` Initial value or partial `TState`.

**Examples:**

```typescript
const state$ = of({ a: 'a', b: 'b', c: 'c', d: 'd' })

// { a: '', b: '', c: '' } on first rendering
// { a: 'a', b: 'b', c: 'c' } on next rendering
const picked = useObservablePickState(
  state$,
  () =>({ a: '', b: '', c: '' }),
  'a', 'b', 'c'
)
```

[catchError]: https://rxjs-dev.firebaseapp.com/api/operators/catchError
[useEffect]: https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect
[useLayoutEffect]: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
