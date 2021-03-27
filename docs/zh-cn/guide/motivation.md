# 项目动机

创建 `observable-hooks` 的主要原因是我们希望通过简洁、灵活、可测试且性能较好的方式将复杂的异步逻辑（如精细动效、按键组合解析）与 React 组件连接起来，从而实现可复用的富组件。

## 为什么在 Hooks 中使用 RxJS

有了 React hooks 之后开发带状态的组件已变得十分简单。我们可以甚至可以大胆地在组件中复用复杂的异步逻辑。

但 hooks 仅仅是一套在组件中连接状态逻辑的机制，对于状态逻辑本身，特别是复杂的异步逻辑，我们依然需要其它工具来减少设计复杂度。

社区中已经有许多专注于特定异步场景的库，如 [swr](https://github.com/zeit/swr) 用于服务器取数（可以[看看](./render-as-you-fetch-suspense.md#stale-while-revalidate-pattern)在 observable-hooks 中如何结合 Suspense 实现同样的 `stale-while-revalidate` 机制）。这就像对比 Redux Saga 与 Redux Observable。学习使用这些库得到的知识并不能像 RxJS（或者响应式编程，一个与语言无关的编程范式）一样可以转移复用。你可以用 RxJS 解决几乎任何复杂的异步场景，且同时保持良好的可读性与可测试性。

当然 RxJS 确实存在陡峭的学习曲线，但几乎都是一次性的概念性知识。不必被巨量的 RxJS 操作符吓到，大部分情况下只用一小部分就足够。同时可以看看这个有趣的[操作符决策树](https://rxjs-dev.firebaseapp.com/operator-decision-tree)。

## 为什么造轮子

我们首先尝试了 [rxjs-hooks](https://github.com/LeetCode-OpenSource/rxjs-hooks) 但很快遇到来一些奇怪的 [TypeScript 问题](https://github.com/LeetCode-OpenSource/rxjs-hooks/issues/60)。我们还认为其 `useEventCallback` [负责了太多东西](https://github.com/LeetCode-OpenSource/rxjs-hooks/blob/505d71901a9ca7827472d750455d44e5bc3d9f48/src/use-event-callback.ts#L77-L80)，可能会存在性能问题，且因 [hooks 固定顺序](https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level)的规则难以被优化。

另外随着团队将注意力转到了类 redux-observable 的 [ayanami](https://github.com/LeetCode-OpenSource/ayanami) 项目，该项目已不再活跃开发。

故最终我们重新思考了整个整合机制，重头设计了新的 API 并创建了 observable-hooks 来连接 RxJS Observable 与 React 组件。

## 它不是什么

这个库不是为了取代状态管理库如 Redux 而是为了避免将大量状态逻辑托管到状态管理中心，从而尽可能在组件中复用。

使用这个库并不代表就要将所有东西都转换成 Observable（且不推荐这么做）。这个库与其它 hooks 可以很好的并存，在需要的地方使用即可。
