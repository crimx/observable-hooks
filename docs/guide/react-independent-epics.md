# React Independent Epics

Sometimes one may want the observable transformations to be independent of React so that they can be further reused by other tools or projects. This guide shows some of the patterns on how to write observable transformations in a React independent way.

Normally we use `useObservable` like this:

```js
const enhanced$ = useObservable(
  inputs$ => inputs$.pipe(
    ...
  ),
  [props.a, stateB]
)
```

This is great as the epic-like function `inputs$ => inputs$.pipe(...)` is completely independent of React and Observable Hooks. It can be reused like this:

```js
// path/to/logic/text.js
export const transformText = inputs$ => inputs$.pipe(
  ...
)
```

```js
import { transformText } from 'path/to/logic/text'

const enhanced$ = useObservable(
  transformText,
  [props.a, stateB]
)
```

But sometimes there may be more observables created in a component:

```js
const [onChange, textChange$] = useObservableCallback(event$ => event$.pipe(...))

const enhanced$ = useObservable(
  inputs$ => inputs$.pipe(
    withLatestFrom(textChange$)
    ...
  ),
  [props.a, stateB]
)
```

This starts to prevent logic from being reused as there are local dependencies.

But hey, if they are dependencies why not just declare them as "dependencies"!

## Direct Dependencies

In this pattern other observables are passed as inner observables.

```js
const [onChange, textChange$] = useObservableCallback(event$ => event$.pipe(...))

const enhanced$ = useObservable(
  inputs$ => {
    const textChange$ = inputs$.pipe(
      distinctUntilKeyChanged(2)
      switchMap(inputs => inputs[2])
    )
    return inputs$.pipe(
      withLatestFrom(textChange$)
      ...
    )
  },
  [props.a, stateB, textChange$]
)
```

It could be cumbersome to handle more observables this way.

## Higher-order Dependencies

Another pattern is to divide normal dependencies from observable dependencies. This is like declaring higher-order dependencies.

```js
const [onChange, textChange$] = useObservableCallback(event$ => event$.pipe(...))

const metaValues$ = useObservable(identity, [props.a, stateB])

const enhanced$ = useObservable(
  inputs$ => inputs$.pipe(
    switchMap(([metaValues$, textChange$]) => metaValues$.pipe(
      withLatestFrom(textChange$)
      ...
    ))
  ),
  [metaValues$, textChange$]
)
```

This is a much cleaner approach especially if there are more observables.

The `switchMap` here is more of a safe guard. Generally the observable instances should always be the same.
