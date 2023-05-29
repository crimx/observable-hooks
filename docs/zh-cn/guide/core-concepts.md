# 核心概念

## 两个世界

要理解 observable-hooks 的设计你需要有两个“世界”的概念：响应式世界与普通世界。

```

  +--------------------------------+
  |            　　　　　            |
  |            响应式世界            |
  |            　　　　　            |
  +--------------------------------+

         +------------------+
         | observable-hooks |
         +------------------+

  +--------------------------------+
  |             　　　　            |
  |             普通世界            |
  |             　　　　            |
  +--------------------------------+

```

这两个世界仅是概念上的区分。响应式世界是指 Observable 存放的地方。这可以是在 React 组件里面，但也可以在外部。普通世界是指非响应式世界的地方。

## 响应式世界到普通世界

几乎所有实现 RxJS 与 React 转接的库都会提供相应接口来连接 Observable 值与 React 状态（state）。

### Observable 到 React 状态

在 observable-hooks 中我们可以用 [`useObservableState`][useobservablestate] 或 [`useObservableEagerState`][useobservableeagerstate]。

```

  +--------------------------------+
  |            响应式世界            |
  +--------------------------------+
  |                                |
  |             input$             |
  |                                |
  +--------------------+-----------+
                       |
                       |
                       |
           v-----------+
  const output = useObservableState(
           |       input$,
           |       initialOutput
           |     )
           |
           |
           |
           |
  +--------v-----------------------+
  |             普通世界            |
  +--------------------------------+
  |                                |
  |         <p>{output}</p>        |
  |                                |
  +--------------------------------+

```

### Observable 到订阅回调

除了转换到状态，我们还可以提供订阅回调函数通过 [`useSubscription`][usesubscription] 订阅 Observables。见 [API 文档][usesubscription] 了解为什么推荐用它而不是手动 `useEffect`。

```

  +--------------------------------+
  |             响应式世界           |
  +--------------------------------+
  |                                |
  |             input$             |
  |                                |
  +-------------------+------------+
                      |
                      |
                      |
                      v
    useSubscription(input$, onNext)
                              |
                              |
                              |
                              |
  +---------------------------v----+
  |             普通世界            |
  +--------------------------------+
  |                                |
  |   const onNext = v => log(v)   |
  |                                |
  +--------------------------------+

```

## 普通世界到响应式世界到普通世界

有些库还提供了方法从普通世界中创建 Observables，然后再订阅这些 Observables，将值导回普通世界。

我们可以在 React 组件以外的某个地方创建 Observables 然后通过各种方式传进组件使用。但更多情况是我们希望可以在 React 组件里面创建 Observables。

有两种方式可以做到：

1. 事件回调函数。每当函数被调用，新的值从 Subject 中弹出。
2. Hook 依赖。React 的 props、states 和 context 的变化都会触发组件渲染。如 `useEffect` 之类的 hooks 可以收集到这些变化。

### 事件回调函数

在 observable-hooks 中 [`useObservableState`][useobservablestate] 还支持接收事件回调函数。

```

     +--------------------------------+
     |             响应式世界           |
     +--------------------------------+
     |                                |
     |  const transform =             |
     |    input$ => input$.pipe(...)  |
     |                                |
     +-------------^----------+-------+
                   |          |
                   |          |
                   |          |
          v-------------------+
 const [output, onInput] = useObservableState(
          |        ^         transform,
          |        |         initialOutput
          |        |       )
          |        |
          |        |
          |        |
     +----v--------+------------------+
     |             普通世界            |
     +--------------------------------+
     |                                |
     |   <button onClick={onInput}>   |
     |    {output}                    |
     |   </button>                    |
     |                                |
     +--------------------------------+

```

### Hook 依赖

在 observable-hooks 中 Hook 依赖的处理与其它库有点不太一样，我们并没有针对 hook 依赖提供“普通世界-响应式世界-普通世界”的方式。

如果你重新看回我们刚讨论过的接口，也许能注意到我们最终都是以普通世界结束。但 observable-hooks 真正发光的地方在于它能够让我们结束在响应式世界。具体什么意思请容我细说。

## 普通世界到响应式世界

### Hook 依赖

在 observable-hooks 中你可以通过 [`useObservable`][useobservable] 或 [`useLayoutObservable`][uselayoutobservable] 利用 hook 依赖创建 Observable。

```

   +--------------------------------+
   |            响应式世界            |
   +--------------------------------+
   |                                |
   | const transform =              |
   |   inputs$ => inputs$.pipe(...) |
   |                                |
   |   output$                      |
   +------^-------------------------+
          |
          |
          |
          +--------------+
 const output$ = useObservable(
                   transform,
                   [props.A, state, ctx]
                 )       ^
                         |
                         |
                         |
   +---------------------+----------+
   |             普通世界            |
   +--------------------------------+
   |                                |
   | const App(props) {             |
   |   const [state] = useState()   |
   |   const ctx = useContext(Ctx)  |
   | }                              |
   |                                |
   +--------------------------------+

```

### 事件回调函数

你还可以通过 [`useObservableCallback`][useobservablecallback] 利用事件回调函数来创建 Observable。

```

        +--------------------------------+
        |            响应式世界            |
        +--------------------------------+
        |                                |
        |  const transform =             |
        |    input$ => input$.pipe(...)  |
        |                                |
        |           output$              |
        +--------------^-----------------+
                       |
            +-----+    |
            |     v    +
 const [onInput, output$] = useObservableCallback(
            ^                 transform
            |               )
            |
            |
            |
            |
        +---+----------------------------+
        |             普通世界            |
        +--------------------------------+
        |                                |
        |   <button onClick={onInput}>   |
        |    Click                       |
        |   </button>                    |
        |                                |
        +--------------------------------+

```

得到的 Observable 可以借助 [响应式世界到普通世界](#%E5%93%8D%E5%BA%94%E5%BC%8F%E4%B8%96%E7%95%8C%E5%88%B0%E6%99%AE%E9%80%9A%E4%B8%96%E7%95%8C) 模式，通过 [`useObservableState`][useobservablestate] 或 [`useSubscription`][usesubscription] 接收。

### Ref 生成 Observable

你还可以通过 [`useObservableRef`][useobservableref] 利用 React ref.current 的改变产生值。

```

        +--------------------------------+
        |            响应式世界            |
        +--------------------------------+
        |                                |
        |         value$                 |
        +-----------^--------------------+
                    |
            +----+  |
            |    v  +
    const [ref, value$] = useObservableRef(
            ^               initialValue
            |             )
            |
            |
            |
            |
        +---+----------------------------+
        |             普通世界            |
        +--------------------------------+
        |                                |
        |   <button ref={ref}>           |
        |    Click                       |
        |   </button>                    |
        |                                |
        |   // or                        |
        |   ref.current = xxx            |
        +--------------------------------+

```

得到的 Observable 可以借助 [响应式世界到普通世界](#%E5%93%8D%E5%BA%94%E5%BC%8F%E4%B8%96%E7%95%8C%E5%88%B0%E6%99%AE%E9%80%9A%E4%B8%96%E7%95%8C) 模式，通过 [`useObservableState`][useobservablestate] 或 [`useSubscription`][usesubscription] 接收。

## 响应式世界到响应式世界

最后，我们还可以操作任意多条 Observable。这提供了巨大的灵活性，可以简化许多流的设计。

```

    +--------------------------------+
    |            响应式世界            |
    +--------------------------------+
    |                                |
    |           fromProps$           |
    |                                |
    |           fromState$           |
    |                                |
    |           fromGlobal$          |
    |                                |
    |  output$                       |
    +-----^--------------+-----------+
          |              |
          |              |
          +--------------v
  const output$ = useObservable(
                    () => combineLatest([
                      fromProps$,
                      fromState$,
                      fromGlobal$
                    ])
                  )

    +--------------------------------+
    |             　　　　            |
    |             普通世界            |
    |             　　　　            |
    +--------------------------------+

```

得到的 Observable 可以借助 [响应式世界到普通世界](#%E5%93%8D%E5%BA%94%E5%BC%8F%E4%B8%96%E7%95%8C%E5%88%B0%E6%99%AE%E9%80%9A%E4%B8%96%E7%95%8C) 模式，通过 [`useObservableState`][useobservablestate] 或 [`useSubscription`][usesubscription] 接收。

## 辅助方法

Osbservable-hooks 中类 [Epic](https://redux-observable.js.org/docs/basics/Epics.html) 的设计可以让 Observable 的转换逻辑高度可复用。事实上 observable-hooks 已经提供了一些常用 [辅助方法][helpers] 来减少垃圾回收压力。

[useobservable]: ../api/README.md#useobservable
[uselayoutobservable]: ../api/README.md#uselayoutobservable
[useobservablecallback]: ../api/README.md#useobservablecallback
[useobservableref]: ../api/README.md#useobservableref
[usesubscription]: ../api/README.md#usesubscription
[uselayoutsubscription]: ../api/README.md#uselayoutsubscription
[useobservablestate]: ../api/README.md#useobservablestate
[useobservableeagerstate]: ../api/README.md#useobservableeagerstate
[useobservablegetstate]: ../api/README.md#useobservablegetstate
[useobservablepickstate]: ../api/README.md#useobservablepickstate
[helpers]: ../api/helpers.md
