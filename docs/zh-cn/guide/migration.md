# 旧版本迁移

## v2 到 v3

v3 支持了 React 同步模式，故去掉了同步订阅 Observable。

1. 如果 Observable 同步产生的值被用作初始状态值，请将初始化逻辑移到 `useObservableState`、`useObservablePickState` 或 `useObservableGetState` 的 `initialState` 参数中。
2. `useGetObservableState` 与 `usePickObservableState` 新增了必选参数 `initialState`。
3. 与 `useState` 一样，如果 `initialState` 是个函数它会在初始化时被调用。如果你希望使用函数作为状态，请多包一层函数。

## v3 到 v4

v4 不再兼容 TypeScript 3.

1. 移除 `useObservable` 和 `useLayoutObservable` 依赖列表的 `readonly` 属性。
