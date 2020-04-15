# Core Concepts

## TL;DR

![observable-hooks concepts](../../observable-hooks.png)

## Producer

Producers produce normal values. Normal values can be converted into Observables via many different helpers which use `observable.next` under the hood.

In the context of React Function Component, changes of props, states and context will trigger re-rendering. Then any variable changes can be captured with the `useEffect` and `useLayoutEffect` hooks. This makes it a valid Producer.

### useObservable

Observable Hooks offers [`useObservable`][useObservable] and [`useLayoutObservable`][useLayoutObservable] to convert these values into Observables.

### useObservableCallback

Another way to produce values is via callbacks. Whether it is data fetching or DOM event, anything inside React Components that accepts function callbacks can be converted into Observables with [`useObservableCallback`][useObservableCallback].

## Observable

React Function Components can be called many times untill they are unmounted.

Observable manipulations should be performed inside the first function argument of [`useObservable`](#useobservable), [`useObservableCallback`](#useobservablecallback) or [`useObservableState`](#useobservablestate) which is called only once and always returns the same Observable.

Since the function arugment is called only once it is not safe to directly reference other variables in closure.

```javascript
function App(props) {
  const [onChange, textChange$] = useObservableCallback(
    event$ => event$.pipe(
      map(event => {
        return {
          text: event.currentTarget.value,
          flag: props.flag // always the initial value
        }
      })
    )
  )
}
```

You should convert it into Observable and use `withLatestFrom`.

```javascript
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

If you already have multiple Observables and want to do something with them together, use [`useObservable`][useObservable] but without dependencies.

```javascript
const enhanced$ = useObservable(() => {
  return combineAll(stream1$, stream2$)
})
```

## Observer

Observers consume values emitted from Observables and perform side effects.

### useSubscription

Instead of manually subscribe Observables, use [`useSubscription`][useSubscription] which will auto-unsubscribe on unmount or Observable changes. You can also reference closure variables directly inside callback. [`useSubscription`][useSubscription] will ensure the latest callback is called.

```javascript
const [debug, setDebug] = useState(false)
const subscription = useSubscription(events$, null, error => {
  if (debug) {
    console.log(error)
  }
})
```

Reference props directly:

```javascript
const subscription = useSubscription(events$, props.onChange)
```

### useObservableState

[`useObservableState`][useObservableState] is a sugar of [`useObservable`](#useobservable) + [`useSubscription`](#usesubscription) + `useState` to get states from Observables. Unlike directly setting state on subscription, [`useObservableState`][useObservableState] will skip any initial sync re-rendering.

### useObservableGetState

[`useObservableGetState`][useObservableGetState] gets the value at path of state. Only changes of the resulted value will trigger a rerendering. This is handy if you only need a portion of an object.

::: tip
You can easily implement your own version should you need a fancier transformation. In fact [`useObservableGetState`][useObservableGetState] is just [`useObservableState`][useObservableState] with a few lines of code.
:::

### useObservablePickState

[`useObservablePickState`][useObservablePickState] Creates an object composed of the picked state properties. Changes of any of these properties will trigger a rerendering.

## Helpers

You may alreay notice that the first function parameter of [`useObservable`](#useobservable), [`useObservableCallback`](#useobservablecallback) and [`useObservableState`](#useobservablestate) is pure. This makes it highly testable and reuseable. In fact, Observable Hooks offers a few common [helpers][helpers] to reduce garbage collection.

[useobservable]: ../api/README.md#useobservable
[useLayoutObservable]: ../api/README.md#useLayoutObservable
[useObservableCallback]: ../api/README.md#useobservablecallback
[useSubscription]: ../api/README.md#usesubscription
[useObservableState]: ../api/README.md#useobservablestate
[useObservableGetState]: ../api/README.md#useobservableGetstate
[useObservablePickState]: ../api/README.md#useobservablePickstate

[helpers]: ../api/helpers.md
