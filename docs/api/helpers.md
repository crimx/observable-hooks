# Helpers

Reduce garbage collection burden.

## pluckFirst

```typescript
pluckFirst<TArr>(inputs$: Observable<TArr>): Observable<TArr[0]>
```

Map an Observable of Arraylike to an Observable of the first item.

**Type parameters:**

- `TArr` ArrayLike

**Parameters:**

Name | Type | Description
------ | ------ | ------
`inputs$` | `Observable<TArr>` | An Observable of arraylike.

**Returns:**

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

Maps an Observable of DOM events to an Observable of the currentTarget value.

**Type parameters:**

- `TEvent` Event with `currentTarget.value`.

**Parameters:**

Name | Type | Description
------ | ------ | ------
`event$` | `Observable<TEvent>` | An Observable of events.

**Returns:**

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

Maps an Observable of DOM events to an Observable of the currentTarget checked.

**Type parameters:**

- `TEvent` Event with `currentTarget.checked`.

**Parameters:**

Name | Type | Description
------ | ------ | ------
`event$` | `Observable<TEvent>` | An Observable of events.

**Returns:**

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

Returns the first argument it receives.

**Type parameters:**

- `T` Any value.

**Parameters:**

Name | Type | Description
------ | ------ | ------
`value` | `T` | Any value.

**Returns:**

`T` The first argument.

## useRefFn

One-time ref init.

```typescript
useRefFn<T>(init: function): MutableRefObject<T>
```

**Type parameters:**

- `T` object | number | string | boolean | symbol.

**Parameters:**

Name | Type | Description
------ | ------ | ------
`init` | `(): T` | A function that returns a non-nullable value. Will be called only once.

**Returns:**

`MutableRefObject<T>` A Ref object with the value.

## useForceUpdate

Force re-renders Component.

```typescript
useForceUpdate(): () => void
```

**Returns:**

`() => void` A callback which re-renders component when called.
