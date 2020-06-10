## Epic Closure

React Function Components can be called many times untill they are unmounted.

In observable-hooks, many hooks like [`useObservable`](#useobservable), [`useObservableCallback`](#useobservablecallback) or [`useObservableState`](#useobservablestate) accept an epic-like function which will be called only once and always returns the same observable, until the component unmounts.

Since the function is called only once it is not safe to directly reference other variables in closure.

```javascript
import { useObservableCallback } from 'observable-hooks'

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

You may think of `useRef` but is not safe either. In concurrent mode it could lead to tearing.

You should convert it into Observable and use `withLatestFrom`.

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

## Subscription Timing

To make observable-hooks compatible with React concurrent mode, the Observable subscription, which is side-effect for react, is established after the render is committed to the screen. It is unpredictable when the component will finish rendering, so there is a time gap. All the hooks in observable-hooks will keep you safe from tearing, but if the not-yet-subscribe observable is hot and emit values during this period, these values are lost.

These should be rare case though. There should always be better ways to structure the code for this type of scenario.

1. If the hot observable is from DOM events:
   1. For events that are triggered by user interaction like `click` and `keypress` it is safe to assume the subscription is established.
   2. If you are not sure or are having issues, use [`useLayoutSubscription`][useLayoutSubscription] which establishes subscription synchronously after the render phase and before browser paints.
2. If the observable is from other JavaScript module which you have no control of, it will be same issue even if subscription happens immediately on rendering. It is not safe to predict when the component will start rendering. In this case you should have a mechanism to cache the value, like `BehaviorSubject`.
3. If you have control of the emission timing, delay it with `useEffect` plus one event loop. React may not follow the exact order when invoking `useEffect` callback, an extra event loop will make sure emission happens after subscription.
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
   You may create a custom hook if this pattern is frequently used.
4. If you have better idea please share it with us or submit a PR!


[useLayoutSubscription]: ../api/README.md#uselayoutsubscription
