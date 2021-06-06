# Suspense

使用并行模式安全的方式连接 RxJS 与 React Suspense。使用方法见 [Render-as-You-Fetch (using Suspense)](../guide/render-as-you-fetch-suspense.md)。

## ObservableResource

```typescript
Class ObservableResource<TInput, TOutput>
```

将 Observable 转换为类 Relay 的 Suspense 数据源。

<Badge text="v2.2.0"/> 添加自 v2.2.0。

**类型参数:**

- `TInput` 输入源 Observable 的值类型。
- `TOutput` 输出源的值类型，默认与输入源一致。

**Constructors:**

```typescript
new ObservableResource(
  input$: Observable<TInput>,
  isSuccess?: (value: TInput) => value is TOutput
): ObservableResource
```

**参数:**

参数名 | 类型 | 描述
------ | ------ | ------
`input$` | `Observable<TInput>` | An Observable.
`isSuccess` | `(value: TInput): value is TOutput` | 可选函数用于判断 `input$` 产生的值是否为“成功”状态，不是则触发 Suspense。默认都为 `true`。

**Public 属性:**

参数名 | 类型 | 描述
------ | ------ | ------
`shouldUpdate$$` | `Subject<undefined>` | 组件需要重新渲染时会产生值。

**Public 方法:**

参数名 | 类型 | 描述
------ | ------ | ------
`read` | `(): TOutput` | 处于成功状态则返回值，否则抛出 Suspense。产生异常则抛出异常。
`destroy` | `(): void` | UnSubscribe input Observable.
`reload` | `(newInput$?: Observable<TInput>): void` | <Badge text="v2.3.5"/> 清理并重新订阅 input Observable。产生异常的 Hot Observable 因为无法重新启动故必须提供新的 Observable `newInput$`。推荐尽可能使用 Cold Observable 以便重载。（另外对于不熟悉 Observable 温度的朋友，注意即便 `Subject` 是 Hot, `subject.pipe(...)` 是 Cold 的）

## useObservableSuspense

```typescript
useObservableSuspense<TInput, TOutput>(
  resource: ObservableResource<TInput, TOutput>
): TOutput
```

从 Observable 数据源中获取值。

<Badge text="v2.2.0"/> 添加自 v2.2.0。

不同于 Promise，Observable 实现的是多次推值协议。这个 hook 会在 Suspense 重新触发时自动更新组件。

**类型参数:**

- `TInput` Value type of the input Observable.
- `TOutput` Resulted resource value. Default TInput.

**参数:**

参数名 | 类型 | 描述
------ | ------ | ------
`resource` | `ObservableResource<TInput, TOutput>` | Observable resource.

**Returns:**

`TOutput` resource value.
