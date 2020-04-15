# Motivation

The main motivation of creating `observable-hooks` is that we want a simple, flexible, testable and performant solution to reuse complex async logic (e.g. intricate animation and user interaction sequence) with the Component.

## Why RxJS in Hooks

Nowadays developing stateful React Components is greatly simplified with hooks. We can boldly put complex logic in hooks and reuse it with the Component.

But hooks is just a mechanism to connect stateful logic to React Components. For complex logic itself, async specifically, we still need other libraries to reduce the complexity.

There are libraries that focus only on a few specific aysnc scenarios, like [swr](https://github.com/zeit/swr) for remote data fetching([See](./render-as-you-fetch-observable.md#stale-while-revalidate-pattern) how to achieve the same `stale-while-revalidate` pattern in observable-hooks with Suspense). This is like comparing Redux Saga with Redux Observable. The knowledge you gain from learning how to use these libraries is not as transferable as RxJS(or Reactive Programming, a language-independent programming paradigm) which is an all-round solution for async logic. You can use RxJS for almost any async scenario and still maintain good readability and testability.

Yes there is a learning curve on RxJS but that is mostly a one-time conceptual thing. Don't be scared by the number of RxJS opertators. You most likely only need a few of them. Also see the [Operator Decision Tree](https://rxjs-dev.firebaseapp.com/operator-decision-tree).

## Why Another Library

We first tried [rxjs-hooks](https://github.com/LeetCode-OpenSource/rxjs-hooks) but quickly encountered some [tricky TypeScript issues](https://github.com/LeetCode-OpenSource/rxjs-hooks/issues/60). We also think the `useEventCallback` is [taking too much responsibilities](https://github.com/LeetCode-OpenSource/rxjs-hooks/blob/505d71901a9ca7827472d750455d44e5bc3d9f48/src/use-event-callback.ts#L77-L80) which is a performance issue that is hard to fix due to [rules of hooks](https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level).

Unfortunately the project is not actively developed as the team has shifted focus to the redux-observable-like [ayanami](https://github.com/LeetCode-OpenSource/ayanami) project.

Ultimately we rethought the whole integration, redesigned API from the ground up and created observable-hooks for connecting RxJS Observable to React Components.

## What It Is Not

This library is not for replacing state management tools like Redux but to reduce the need of dumping everything into global state.

Using this library does not mean you have to turn everything observable which is not encouraged. It plays well side by side with other hooks. Use it only on places where it's needed.
