# 核心 API

## useObservable

```typescript
useObservable<TOutput>(init: function): Observable<TOutput>
useObservable<TOutput, TInputs>(
  init: function,
  inputs: TInputs
): Observable<TOutput>
```

React 函数组件每次计算渲染时都会被调用。利用 `useObservable` 创建或转换 Observables 以避免操作被反复执行。

参数接受一个返回 Observable 的类 epic 函数 `init`，以及一个可选的依赖数组。数组会被传到一个 Observable 并交给 `init` 函数。

::: warning 注意
因为 `init` 函数只会执行一遍，在里面通过闭包直接访问其它变量可能会不安全。见[注意事项](../guide/gotchas.md)。
:::

::: warning 依赖数组限制
依赖数组在内部将直接传给 [`useEffect`][useEffect]，故需要遵循同样的限制。比如数组的长度不能改变。
:::

**类型参数:**

- `TOutput` 输出 Observable 的值类型
- `TInputs` 依赖元组

**参数:**

参数名 | 类型 | 描述
------ | ------ | ------
`init` | `(inputs$: Observable<TInputs>): Observable<TOutput>` | 一个纯函数，接收一个 Observable，返回一个 Observable。
`inputs` | `TInputs` | 可选的依赖数组。当数组中的一个项发生改变时 `init` 中的 Observable 会产生一个值，其值为整个依赖数组。

**返回值:**

`Observable<TOutput>` 总会返回同一个 Observable。

**例子:**

```typescript
interface CompProps {
  isOpen: boolean
}

const Comp: React.FC<CompProps> = props => {
  const [showPanel, setShowPanel] = useState(false)

  // 监听 props 或 state 变化
  const enhanced$ = useObservable(
    inputs$ => inputs$.pipe(map(([isOpen, showPanel]) => isOpen && showPanel)),
    [props.isOpen, showPanel]
  )
}
```

创建 Observable：

```typescript
const now$ = useObservable(
  () => interval(1000).pipe(
    map(() => new Date().toLocaleString())
  )
)
```

操作 Observable：

```typescript
// outers$ are created from other React-unrelated module
const enhanced$ = useObservable(() => outers$.pipe(mapTo(false)))
```

也可以结合一起：

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

与 [`useObservable`](#useobservable) 基本一样，不同的是底下使用 [`useLayoutEffect`][useLayoutEffect] 监听改变。

如果需要在下次浏览器绘制前拿到值可以用它。

## useObservableCallback

```typescript
useObservableCallback<TOutput, TInput, TParams>(
  init: function,
  selector?: undefined | function
): [function, Observable<TOutput>]
```

返回一个回调函数以及一个事件 Observable。每当回调被调用，Observable 会产生一个值，其值为回调接收的第一个参数。

<p>
  <Badge text="v2.1.0"/> 添加自 <code>v2.1.0</code> 同时接受一个可选的选择函数以支持多参数事件。回调函数每次接受的所有参数将作为数组交给这个函数，返回一个值交给 Observable。
</p>

::: tip
如果你需要直接得到 state 值而不是一个 Observable 见 [useObservableState](#useobservablestate)。
:::

::: warning 注意
因为 `init` 函数只会执行一遍，在里面通过闭包直接访问其它变量可能会不安全。见[注意事项](../guide/gotchas.md)。
:::

::: tip
在 TypeScript 中如果想要回调不接受任何参数，用 `void` 类型定义而不是 `undefined`。
:::

**类型参数:**

- `TOutput` 输出 Observable 的值类型
- `TInput` 输入 Observable 的值类型
- `TParams` 回调函数参数类型数组

**参数:**

参数名 | 类型 | 描述
------ | ------ | ------
`init` | `(inputs$: Observable<TInputs>): Observable<TOutput>` | 一个纯函数，接收一个 Observable，返回一个 Observable。
`selector` | `(args: TParams): TInput` | 可选的函数，接受一个数组包含每次所有的参数，返回单一值。

**返回值:**

`[(...args: TParams): void, Observable<TOutput>]` 一个元组，包含一个回调和一个 Observable，两者值均不会发生变化。

**例子:**

```typescript
import { useObservableCallback, useSubscription } from 'observable-hooks'

const Comp = () => {
  const [onChange, textChange$] = useObservableCallback<
    string,
    React.FormEvent<HTMLInputElement>
  >(event$ => event$.pipe(
    pluck('currentTarget', 'value')
  )) // 或者直接用 "pluckCurrentTargetValue" 方法

  useSubscription(textChange$, console.log)

  return <input type="text" onChange={onChange} />
}
```

转换回调多个参数：

```typescript
import { useObservableCallback, identity } from 'observable-hooks'

const [onResize, height$] = useObservableCallback<
  number,
  number,
  [number, number]
>(identity, args => args[1])

// onResize 接收到 width 和 hegiht
// height$ 得到 height 的值
onResize(100, 500)
```

## useSubscription

```typescript
useSubscription<TInput>(
  input$: Observable<TInput>,
  observer?: PartialObserver<TInput>
): React.MutableRefObject<Subscription | undefined>
useSubscription<TInput>(
  input$: Observable<TInput>,
  next?: function | null | undefined,
  error?: function | null | undefined,
  complete?: function | null | undefined
): React.MutableRefObject<Subscription | undefined>
```

订阅 Observable，在并行模式下安全。

接受可选的 observer 对象或者可选的 `next`、 `error`、 `complete` 回调。如果选择后者则必须保持顺序，用 `undefined` 或者 `null` 占位。

为什么不能直接用 `useEffect`？

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

因为：

1. 回调闭包引用的值会过期，导致回调被调用时拿不到组件最新的值。
2. 并行模式下不安全。Observable 改变时可能会产生状态不同步的“撕裂”现象。

<p>
  <Badge text="v2.0.0"/> 添加自 <code>v2.0.0</code>。 <code>useSubscription</code> 会保证被调用的是最新的回调。你可以放心地在回调中通过闭包引用任何变量。
</p>

<p>
  <Badge text="v2.3.4"/> 添加自 <code>v2.3.4</code>。 当 Observable 改变时 <code>useSubscription</code> 会自动取消旧的并订阅新的。
</p>

<p>
  <Badge text="v3.0.0"/> 添加自 <code>v3.0.0</code>。 <code>useSubscription</code> 在并行模式下安全。它会避免过期的 Observable 触发回调。
</p>

<p>
  <Badge text="v3.2.0"/> 添加自 <code>v3.2.0</code>。 <code>useSubscription</code> 可以接受一个 observer 对象。非常感谢 <a href="https://github.com/crimx/observable-hooks/pull/38">OliverJAsh</a> 的贡献！
</p>

为了兼容并行模式，<code>useSubscription</code> 开始订阅 Observable 的时机是在渲染被绘制到屏幕之后的副作用阶段。故即使 Observable 在订阅时会产生同步的值，这些值也会在第一次渲染之后到达。另外也可以使用针对同步值优化的 [`useObservableEagerState`](#useobservableeagerstate)。

::: tip
注意 observer 回调发生改变并不会导致被订阅的 Observable 产生新的值。这不太常见但如果需要这种效果可以通过 [`useObservable`](#useobservable) 以回调函数为值造一个 Observable。
:::

::: tip 异常处理
因为 RxJS 的设计，Observable 一旦产生了异常就会被销毁。你可以：

- 通过在子流中放置 [`catchError`][catchError] 避免异常传达主流。
- 也可以将 Observable 作为 state，发生异常时换掉新的。<code>useSubscription</code> 会自动切换。
- 自 `v3.0.0` Observable 异常可以被 React 错误边界获取到。你可以在那里做处理并更换被销毁的 Observable。
:::

---

**类型参数:**

- `TInput` Input value within Observable.

**参数:**

参数名 | 类型 | 描述
------ | ------ | ------
`input$` | `Observable<TInput>` | Input Observable.
`next` | `(value: TInput): void | null | undefined` | Notify when a new value is emitted.
`error` | `(error: any): void | null | undefined` | Notify when a new error is thrown.
`complete` | `(): void | null | undefined` | Notify when the Observable is complete.

**返回值:**

`React.MutableRefObject<Subscription | undefined>` A ref object with the RxJS Subscription. the ref `current` is `undefined` on first rendering.

---

**类型参数:**

- `TInput` 输入 Observable 的值类型

**参数:**

参数名 | 类型 | 描述
------ | ------ | ------
`input$` | `Observable<TInput> | null | undefined` | 输入 Observable
`observer` | `PartialObserver<TInput>` | Observer

**返回值:**

`React.MutableRefObject<Subscription | undefined>` A ref object with the RxJS Subscription. the ref `current` is `undefined` on first rendering.

---

**例子:**

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

与 [useSubscription](#usesubscription) 一样，除了 subscription 是通过 `useLayoutEffect` 触发。

当需要在 DOM 绘制前拿到值时会有用。

尽量少用，因为其是在浏览器绘制前同步调用。过多的同步值产生会延长组件的 commit 周期。

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

并发模式下也能安全地从 Observable 中获取值。前往[核心概念](../guide/core-concepts.md)了解此设计原理。

它有两种使用方式：

1. 传一个 Observable 与一个可选的初始值。
   ```js
   const output = useObservableState(input$, initialState)
   ```
2. 传一个类 epic 的方法与一个可选的初始值.
   ```js
   const [output, onInput] = useObservableState(
     (input$, initialState) => input$.pipe(...),
     initialState
   )
   ```

这两种方式底层使用不同的 hooks，故请勿选了一种方式之后又通过改变参数切换到另一种方式。

在内部，可选的 `initialState` 会被传到 `useState(initialState)`。故其可以是状态值，也可以是返回状态的函数，以便昂贵计算。

同时 `initialState`（或它的返回值）会被传入到 `init` 函数。这会很有用如果你想实现 reducer 模式，这种模式下需要一个初始值。

为了兼容并行模式，<code>useObservableState</code> 开始订阅 Observable 的时机是在渲染被绘制到屏幕之后的副作用阶段。故即使 Observable 在订阅时会产生同步的值，这些值也会在第一次渲染之后到达。

::: warning 注意
因为 `init` 函数只会执行一遍，在里面通过闭包直接访问其它变量可能会不安全。见[注意事项](../guide/gotchas.md)。
:::

::: tip 异常处理
因为 RxJS 的设计，Observable 一旦产生了异常就会被销毁。你可以：

- 通过在子流中放置 [`catchError`][catchError] 避免异常传达主流。
- 也可以将 Observable 作为 state，发生异常时换掉新的。<code>useSubscription</code> 会自动切换。
- 自 `v3.0.0` Observable 异常可以被 React 错误边界获取到。你可以在那里做处理并更换被销毁的 Observable。
:::

::: tip
如果希望针对产生同步值的 Observable 跳过初始的额外一次 re-rendering，可以看看 [`useObservableEagerState`](#useobservableeagerstate)。
:::

::: tip
在 TypeScript 中如果你希望回调接受空参数，请用 `void` 而不是 `undefined` 类型。
:::

---

**类型参数:**

- `TState` Output state.

**参数:**

参数名 | 类型 | 描述
------ | ------ | ------
`input$` | `Observable<TState>` | 一个 Observable。
`initialState` | `TState | (): TState` | 可选的初始状态。可以是状态值或者返回状态值的函数。

**返回值:**

`TState` 状态值

---

**类型参数:**

- `TState` 输出的状态
- `TInput` 输入的状态

**参数:**

参数名 | 类型 | 描述
------ | ------ | ------
`init` | `(input$: Observable<TInput>, initialState: TState): Observable<TState>` | 一个纯函数，接收一个 Observable，返回一个 Observable。
`initialState` | `TState` | 可选的初始状态。可以是状态值或者返回状态值的函数。

**返回值:**

`[TState, (input: TInput): void]` 一个元组包含状态与输入回调。

---

**例子:**

接收一个 Observable：

```typescript
const count$ = useObservable(() => interval(1000))
const count = useObservableState(count$, 0)
```

或者接收一个 `init` 函数：

```typescript
const [text, updateText] = useObservableState<string>(
  text$ => text$.pipe(delay(1000)),
  ''
)
```

输入和输出状态可以是不同的类型：

```typescript
// 输入: string, 输出: boolean
const [isValid, updateText] = useObservableState<boolean, string>(text$ =>
  text$.pipe(map(text => text.length > 1)),
  false
)
```

事件监听模式：

```javascript
import { pluckCurrentTargetValue, useObservableState } from 'observable-hooks'

function App(props) {
  const [text, onChange] = useObservableState(pluckCurrentTargetValue, '')
  
  return (
    <input onChange={onChange} value={text} />
  )
}
```

Reducer 模式：

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

专门优化针对从热的或纯的 Observable（如 `BehaviorSubject`）中同步地取值，避免触发额外的初次重渲染。

<Badge text="v3.1.0"/> 添加自 v3.1.0。

这个 hook 会多次 subscribe Observable。第一遍是获取同步产生的值，然后马上 unsubscribe。第二遍是真正的 subscribe。在并行模式下如果渲染被打断可以还会出现多次 subscribe。

::: warning 注意
如果 Observable 是冷的且带副作用，这些副作用会被执行至少两次！只有热的或纯的 Observable 可以安全取值。
:::

**类型参数:**

- `TState` 输出的状态

**参数:**

参数名 | 类型 | 描述
------ | ------ | ------
`state$` | `Observable<TState>` | 一个 Observable

**返回值:**

`TState` 状态值

**例子:**

```typescript
const text1$ = new BehaviorSubject('A')
// 'A'
const text1 = useObservableEagerState(text1$)

const text2$ = of('A', 'B', 'C')
// 'C'
const text2 = useObservableEagerState(text2$)
```

## useLayoutObservableState

<p>
  <Badge text="v4.1.0"/> 添加自 <code>v4.1.0</code>。
</p>

与 [`useObservableState`](#useobservablestate) 基本一样，不同的是底下使用 [`useLayoutEffect`][useLayoutEffect] 监听改变。

与 [`useObservableEagerState`](#useobservableeagerstate) 不一样，[`useObservableEagerState`](#useobservableeagerstate) 会在第一次 React 渲染前同步获取值，而 `useLayoutObservableState` 是在 React 渲染之后同步获取值，`useObservableState` 则是在 React 渲染并绘制完成之后异步获取值。

如果需要在下次浏览器绘制前拿到值可以用它。

尽量少用，因为其是在浏览器绘制前同步调用。过多的同步值产生会延长组件的 commit 周期。

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

类似 lodash 的 `get`。

<p>
  <Badge text="v2.3.0"/> 添加自 <code>v2.3.0</code>。通过属性路径从 Observable 状态对象中获得值。
</p>

<p>
  <Badge text="v3.0.0"/> 添加自 <code>v3.0.0</code>。初始状态必须提供。
</p>

只有最终得出的状态发生改变才会触发重渲染。

::: warning
不可访问的路径会触发异常。
:::

**类型参数:**

- `TState` 输出的状态值。

**参数:**

参数名 | 类型 | 描述
------ | ------ | ------
`state$` | `Observable<TState>` | 一个 Observable。
`initialState` | `undefined | null | TState[...] | (() => TState[...])` | 初始状态。可以是状态值或者返回状态值的函数。
`pA` | `keyof TState` | Key of `TState`.
`pB` | `keyof TState[A]` | Key of `TState[A]`.
`pC` | `keyof TState[A][B]` | Key of `TState[A][B]`.
`...`| `...` | `....`

**返回值:**

`TState[...]` 初始的状态值或者经过路径得到 `TState` 的属性类型。

**例子:**

```typescript
const state$ = of({ a: { b: { c: 'value' } } })

// 第一次渲染：'default'
// 第二次渲染：'value'
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

类似 lodash 的 `pick`。

<p>
  <Badge text="v2.3.2"/> 添加自 <code>v2.3.2</code>。从一个状态对象中挑选属性组合成新的对象。
</p>

<p>
  <Badge text="v3.0.0"/> 添加自 <code>v3.0.0</code>。初始状态必须提供。
</p>

挑选出的属性任一发生变化都会触发重渲染。

::: warning
不可访问的路径会触发异常。
:::

**类型参数:**

- `TState` 输出的状态
- `TKeys` 挑选的状态键名

**参数:**

参数名 | 类型 | 描述
------ | ------ | ------
`state$` | `Observable<TState>` | 一个 Observable。
`initialState` | `undefined | null | { [K in TKeys]: TState[K] } | (() => { [K in TKeys]: TState[K] })` | 初始状态。可以是状态值或者返回状态值的函数。
`...path` | `Array<keyof TState>` | 挑选的 `TState` 键名。

**返回值:**

`{ [K in TKeys]: TState[K] }` Initial value or partial `TState`.

**例子:**

```typescript
const state$ = of({ a: 'a', b: 'b', c: 'c', d: 'd' })

// 第一次渲染：{ a: '', b: '', c: '' }
// 第二次渲染：{ a: 'a', b: 'b', c: 'c' }
const picked = useObservablePickState(
  state$,
  () =>({ a: '', b: '', c: '' }),
  'a', 'b', 'c'
)
```

[catchError]: https://rxjs-dev.firebaseapp.com/api/operators/catchError
[useEffect]: https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect
[useLayoutEffect]: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
