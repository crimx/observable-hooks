# Motivation

The main motivation of creating `observable-hooks` is that we want a simple, flexible, testable and performant solution to reuse complex async logic (e.g. animation and user interation) with the Component.

## Why RxJS in Hooks

Nowadays developing stateful React Components is greatly simplified with hooks. We can boldly put complex logic in hooks and reuse it with the Component.

But hooks is just a mechanism to connect stateful logic to React Components. For complex logic, async specifically, we still need other libraries to reduce the complexity.

There are libraries that focus only on a few specific aysnc scenarios, like [swr](https://github.com/zeit/swr) for remote data fetching. This is like comparing Redux Saga with Redux Observable. The knowledge you gain from learning how to use these libraries is not as transferable as RxJS, which is an all-round solution for async logic. You can use RxJS for almost any async scenario and still maintain good readability and testability.

Yes there is a learning curve on RxJS but that is mostly a one-time conceptual thing. Don't be scared by the number of RxJS opertators. You most likely only need a few of them. Also see the [Operator Decision Tree](https://rxjs-dev.firebaseapp.com/operator-decision-tree).

## Why Another Library

Beforing creating observable-hooks we had tried other libraries like [reactjs-hooks-rxjs](https://github.com/leandrohsilveira/reactjs-hooks-rxjs) which is too simple and [rxjs-hooks](https://github.com/LeetCode-OpenSource/rxjs-hooks) in which we found typing issues that were unable to fix.
