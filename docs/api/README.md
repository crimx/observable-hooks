# Core

## useObservable

```typescript
useObservable<TOutput>(init: function): Observable<TOutput>
useObservable<TOutput, TInputs>(
  init: function,
  inputs: TInputs
): Observable<TOutput>
```

React function components will be called many times during its life cycle. Create or transform Observables in init function so that the operations won't be repeatedly performed.

Accepts a function that returns an Observable. Optionally accepts an array of dependencies which will be turned into Observable and be passed to the init function.

::: warning
`useObservable` will call `init` once and always return the same Observable. It is not safe to access closure (except other Observables) directly inside `init`. You should pass them as dependencies through the second argument.
:::

::: danger CAUTION
Due to hooks policy you can either offer or omit the dependencies array but do not change to one another during Component's life cycle. The length of the dependencies array must also be fixed.
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

Create Observable

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

Mix them all together:

```typescript
const enhanced$ = useObservable(
  inputs$ => isEven$.pipe(
    withLatestFrom(inputs$),
    map(([isEven, [isOpen]]) => isEven && isOpen)
  ),
  [props.isOpen]
)
```

## useObservableCallback

```typescript
useObservableCallback<TOutput, TInput, TParams>(
  init: function,
  selector?: undefined | function
): [function, Observable<TOutput>]
```

Returns a callback function and an events Observable.

Whenever the callback is called, the Observable will emit the first argument of the callback.

<Badge text="v2.1.0"/> From <code>v2.1.0</code> optionally accepts a selector function which transforms an array of event arguments into a single value.

::: tip
If you want value output instead of Observable see example on [useObservableState](#useobservablestate).
:::

::: warning
`useObservableCallback` will call `init` once and always return
the same Observable. It is not safe to access closure (except other Observables)
directly inside `init`. Use [`useObservable`](#useobservable) and `withLatestFrom` instead.
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
): Subscription
```

Subscription will auto-unsubscribe when unmount, you can also unsubscribe manually.

<Badge text="v2.0.0"/> From <code>v2.0.0</code> you can reference closure variables directly inside callback. <code>useSubscription</code> will ensure the latest callback is called.

Accepts an Observable and optional `next`, `error`, `complete` functions. These functions must be in correct order. Use `undefined` or `null` for placeholder.

::: warning
Note that changes of callbacks will not trigger an emission. If you need that just create another Observable of the callback with [`useObservable`](#useobservable).
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

`Subscription` RxJS Subscription object.

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

## useObservableState

```typescript
useObservableState<TState, TSyncInit>(
  input$: Observable<TState>
): TSyncInit extends false ? TState | undefined : TState
useObservableState<TState>(
  input$: Observable<TState>,
  initState: TState
): TState
useObservableState<TState, TInput, TSyncInit>(
  init: function
): [TSyncInit extends false ? TState | undefined : TState, function]
useObservableState<TState, TInput>(
  init: function,
  initState: TState
): [TState, function]
```

A helper to get value from an Observable.

Accept an optional `initState` which will be directly passed to the result. But if sync values are also emitted from the Observable `initState` will be ignored.

You can also use the regular `useState` with [useSubscription](#usesubscription) directly which will trigger extra initial re-renders when sync values are emitted from the Observable (e.g. `of` or `startWith`).

::: tip
It it recommended to use `initState` for simple primitive value. For others, init with the Observable to save some (re)computations.
:::

::: warning
`useObservableState` will call `init` once and always return the same Observable. It is not safe to access closure (except other Observables) directly inside `init`. Use [`useObservable`](#useobservable) and `withLatestFrom` instead.
:::

::: danger CAUTION
Due to hooks policy you can offer either a function or an Observable as the first argument but do not change to one another during Component's life cycle.
:::

<Badge text="v2.1.2"/> From <code>v2.1.2</code> you can pass <code>true</code> to <code>TSyncInit</code> generic to remove <code>undefined</code> from resulted type.

---

**Type parameters:**

- `TState` Output state.
- `TSyncInit` Does the Observable emit sync values?

**Parameters:**

Name | Type | Description
------ | ------ | ------
`input$` | `Observable<TState>` | An Observable.
`initState` | `TState` | Optional initial state.

**Returns:**

`TState` State value.

---

**Type parameters:**

- `TState` Output state.
- `TInput` Input values.
- `TSyncInit` Does the Observable emit sync values?

**Parameters:**

Name | Type | Description
------ | ------ | ------
`init` | `(input$: Observable<TInput>): Observable<TState>` | A pure function that, when applied to an Observable, returns an Observable.
`initState` | `TState` | Optional initial state.

**Returns:**

`[TState, (input: TInput) => void]` A tuple with state-setState pair.

---

**Examples:**

Offer an Observable

```typescript
const count$ = useObservable(() => interval(1000))
const count = useObservableState(count$)
```

Offer an init function

```typescript
const [text, updateText] = useObservableState<string>(
  text$ => text$.pipe(delay(1000))
)
```

With different types

```typescript
const [isValid, updateText] = useObservableState<boolean, string>(text$ =>
  text$.pipe(map(text => text.length > 1))
)
```

With init value:

```typescript
const count$ = useObservable(() => interval(1000))
const count = useObservableState(count$, -1)
```

Or function with init value:

```typescript
// Types now can be inferred
const [text, updateText] = useObservableState(
  text$ => text$.pipe(delay(1000)),
  'init text'
)
```

Or use `startWith`. Pass `true` to `TSyncInit` generic to remove `undefined` from resulted type.

```typescript
// time is `string` now instead of `string | undefined`
const [text, updateText] = useObservableState<string, string, true>(
  text$ => text$.pipe(delay(1000), startWith('init text'))
)
```

For Observables you can also use the non-null assertion operator `!`.

```typescript
// time is `string` now instead of `string | undefined`
const time = useObservableState(
  useObservable(() =>
    interval(1000).pipe(
      startWith(-1),
      map(() => new Date().toLocaleString())
    )
  )
)!
```

Event listener:

```typescript
import { pluckCurrentTargetValue, useObservableState } from 'observable-hooks'

const [text, onChange] = useObservableState<
  string,
  React.ChangeEvent<HTMLInputElement>
>(pluckCurrentTargetValue, '')
```
