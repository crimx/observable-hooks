# 注意事项

## Epic 闭包

React 函数组件在每次计算渲染的时侯都会被调用。在 observable-hooks 中，许多 hooks 比如 [`useObservable`](#useobservable)、[`useObservableCallback`](#useobservablecallback) 或者 [`useObservableState`](#useobservablestate) 都接受一个类 [Epic](https://redux-observable.js.org/docs/basics/Epics.html) 的回调函数，里面的逻辑只会被调用一遍（React 并行模式下可能会调用多次），从而避免 Observable 被反复创建或反复执行 `pipe`。

所以在这些回调函数中直接引用外部变量是不安全的。

```javascript
import { useObservableCallback } from 'observable-hooks'

function App(props) {
  const [onChange, textChange$] = useObservableCallback(
    event$ => event$.pipe(
      map(event => {
        return {
          text: event.currentTarget.value,
          flag: props.flag // 总会是初始值
        }
      })
    )
  )
}
```

你可能会想到利用 `useRef` 来引用值，但这也是不安全的。在并行模式下可能会出现状态不一致的“撕裂”问题。

正确的方式是将外部的值转为 Observable 然后通过 `withLatestFrom` 接入。

```javascript
import { pluckFirst, useObservableCallback } from 'observable-hooks'

function App(props) {
  const flag$ = useObservable(pluckFirst, [props.flag])

  const [onChange, textChange$] = useObservableCallback(
    event$ => event$.pipe(
      withLatestFrom(flag$),
      map(([event, flag]) => {
        return {
          text: event.currentTarget.value,
          flag
        }
      })
    )
  )
}
```

## 订阅时机

Observable 订阅对于 React 渲染来说是属于副作用，故为了使 observable-hooks 在并行模式下安全，它会在渲染已经提交（commit）到屏幕之后才会执行初次订阅。由于我们无法预判一个组件完成一次渲染需要多少时间，故这里有个细微的时间差。Observable-hooks 会保证组件不会出现（由于状态不一致导致的）“撕裂”问题，但如果被订阅的是一个 Hot Observable 且在这个时间差内产生了值，这些值将无法被获取。

当然这是非常极端少见的情况。一般来说对于这种场景总会有更好的方式来组织代码。

1. 如果这个 Hot Observable 是来自 DOM 事件：
   1. 对于由用户操作触发的事件如 `click` 或 `keypress` 我们可以放心地认为此时订阅已经完成了。
   2. 对于其它事件，如果你不确定或者遇到了值丢失的问题，可以使用 [`useLayoutSubscription`][useLayoutSubscription]，它会在 React 渲染计算结束后，提交到屏幕前的时机以同步的方式执行订阅。
2. 如果被订阅的 Observable 是来自其它你无权控制的模块，那么这个问题已经与订阅时机无关了。因为我们甚至无法预判组件在什么时侯开始渲染。这种情况下如果的确需要拿到之前的值，你应该通过缓存的方式，如 `BehaviorSubject` 来记录历史值。
3. 同时可以看看 [`useObservableEagerState`][useObservableEagerState]，这个 hook 是为了获取同步值而设计。
4. 如果你可以控制 Hot Observable 产生值的时机，那么最好通过 `useEffect` 再加一个事件周期（event loop）。React 执行 `useEffect` 回调的顺序不定，多一个 event loop 可以保证在订阅之后 Hot Observable 才开始产生值。
   ```js
   useEffect(
     () => {
       let didUnmount = false

       setTimeout(() => {
         if (didUnmount) return

         hot$.next(value)
       }, 0)

       return () => {
         didUnmount = true
       }
     },
     []
   )
   ```
   如果这个模式被大量使用，你也可以自行封装一个 hook。
5. 如果有更好的方法也欢迎向我们提交 PR 分享！


[useLayoutSubscription]: ../api/README.md#uselayoutsubscription
[useObservableEagerState]: ../api/README.md#useobservableeagerstate
