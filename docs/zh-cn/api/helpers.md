# 辅助方法

用于减轻组件渲染的垃圾回收压力。

## pluckFirst

```typescript
pluckFirst<TArr>(inputs$: Observable<TArr>): Observable<TArr[0]>
```

提取数组的第一个元素。

**类型参数:**

- `TArr` ArrayLike

**参数:**

参数名 | 类型 | 描述
------ | ------ | ------
`inputs$` | `Observable<TArr>` | An Observable of arraylike.

**返回值:**

`Observable<TArr[0]>` Observable of the first item.

**Examples:**

```typescript
// An Observable of string
const text$ = useObservable(pluckFirst, [props.text])
```

## pluckCurrentTargetValue

```typescript
pluckCurrentTargetValue<TEvent>(
  event$: Observable<TEvent>
): Observable<TEvent["currentTarget"]["value"]>
```

提取 `.currentTarget.value`。

**类型参数:**

- `TEvent` Event with `currentTarget.value`.

**参数:**

参数名 | 类型 | 描述
------ | ------ | ------
`event$` | `Observable<TEvent>` | An Observable of events.

**返回值:**

`Observable<TEvent["currentTarget"]["value"]>` An Observable of event `currentTarget.value`.

**Examples:**

```typescript
const [onChange, textChange$] = useObservableCallback<
 string,
 React.FormEvent<HTMLInputElement>
>(pluckCurrentTargetValue)
```

## pluckCurrentTargetChecked

```typescript
pluckCurrentTargetChecked<TEvent>(
  event$: Observable<TEvent>
): Observable<TEvent["currentTarget"]["checked"]>
```

提取 `.currentTarget.checked`。

**类型参数:**

- `TEvent` Event with `currentTarget.checked`.

**参数:**

参数名 | 类型 | 描述
------ | ------ | ------
`event$` | `Observable<TEvent>` | An Observable of events.

**返回值:**

`Observable<TEvent["currentTarget"]["checked"]>` An Observable of event `currentTarget.checked`.

**Examples:**

```typescript
const [onChange, checked$] = useObservableCallback<
 boolean,
 React.FormEvent<HTMLInputElement>
>(pluckCurrentTargetChecked)
```

## identity

```typescript
identity<T>(value: T): T
```

返回第一个参数。

**类型参数:**

- `T` Any value.

**参数:**

参数名 | 类型 | 描述
------ | ------ | ------
`value` | `T` | Any value.

**返回值:**

`T` The first argument.

## useRefFn

带初始化方法的 Ref。

```typescript
useRefFn<T>(init: function): MutableRefObject<T>
```

**类型参数:**

- `T` any.

**参数:**

参数名 | 类型 | 描述
------ | ------ | ------
`init` | `(): T` | A function that returns a value. Will be called only once.

**返回值:**

`MutableRefObject<T>` A Ref object with the returned value.

## useForceUpdate

Force re-renders Component.

```typescript
useForceUpdate(): () => void
```

**返回值:**

`() => void` A callback which re-renders component when called.
