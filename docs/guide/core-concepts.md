# Core Concepts

## Two Worlds

To understand the design behind observable-hooks you should have two worlds in mind: the Observable World and the Normal World.

```

  +--------------------------------+
  |                                |
  |        Observable World        |
  |                                |
  +--------------------------------+

         +------------------+
         | observable-hooks |
         +------------------+

  +--------------------------------+
  |                                |
  |          Normal World          |
  |                                |
  +--------------------------------+

```

These two worlds are just conceptual partition. The Observable World is where the observable pipelines are placed. It could be inside or outside of the React components. The Normal World is anyplace that does not belong to the Observable World.

## Observable to Normal

Almost every RxJS-React binding libraries provide ways to connect observable values to React state.

### Observable to State

In observable-hooks we have [`useObservableState`][useObservableState].

```

         +--------------------------------+
         |        Observable World        |
         +--------------------------------+
         |                                |
         |             input$             |
         |                                |
         +--------------------+-----------+
                              |
                              |
                              |
                  v-----------+
         const output = useObservableState(
                  |       input$,
                  |       initialOutput
                  |     )
                  |
                  |
                  |
                  |
         +--------v-----------------------+
         |          Normal World          |
         +--------------------------------+
         |                                |
         |         <p>{output}</p>        |
         |                                |
         +--------------------------------+

```

### Observable to Callbacks

In addition to states, you can also call observer callbacks with [`useSubscription`][useSubscription]. See the [API docs][useSubscription] for why it is preferred comparing to manual `useEffect`.

```

         +--------------------------------+
         |        Observable World        |
         +--------------------------------+
         |                                |
         |             input$             |
         |                                |
         +-------------------+------------+
                             |
                             |
                             |
                             v
           useSubscription(input$, onNext)
                                     |
                                     |
                                     |
                                     |
         +---------------------------v----+
         |          Normal World          |
         +--------------------------------+
         |                                |
         |   const onNext = v => log(v)   |
         |                                |
         +--------------------------------+

```

## Normal to Observable back to Normal

Some libraries also provide ways to create observables from Normal World, subscribe to those observables, then connect emitted values back to Normal World.

There are two ways to create observables from Normal World.

1. Function callbacks. Everytime the callback is called, a value is emitted from the observable.
2. Hook dependencies. Changes of props, states or context will trigger component re-rendering. Hooks like `useEffect` can be used to collect changes.

### Function Callbacks

In observable-hooks [`useObservableState`][useObservableState] can also be used for function callbacks.

```

     +--------------------------------+
     |        Observable World        |
     +--------------------------------+
     |                                |
     |  const transform =             |
     |    input$ => input$.pipe(...)  |
     |                                |
     +-------------^----------+-------+
                   |          |
                   |          |
                   |          |
          v-------------------+
 const [output, onInput] = useObservableState(
          |        ^         transform,
          |        |         initialOutput
          |        |       )
          |        |
          |        |
          |        |
     +----v--------+------------------+
     |          Normal World          |
     +--------------------------------+
     |                                |
     |   <button onClick={onInput}>   |
     |    {output}                    |
     |   </button>                    |
     |                                |
     +--------------------------------+

```

### Hook dependencies

This is a little different in observable-hooks which does not offer a "Normal-Observable-Normal" way with hook dependencies. If you read back on what we have just discussed, you should notice that we always end up in the Normal World. But observable-hooks truly shines with its ability to end in the Observable World. Keep reading and I will show you what it means.

## Normal to Observable

### Hook dependencies

In observable-hooks you can use [`useObservable`][useObservable] or [`useLayoutObservable`][useLayoutObservable] to create observables with hook dependencies.

```

   +--------------------------------+
   |        Observable World        |
   +--------------------------------+
   |                                |
   | const transform =              |
   |   inputs$ => inputs$.pipe(...) |
   |                                |
   |   output$                      |
   +------^-------------------------+
          |
          |
          |
          +--------------+
 const output$ = useObservable(
                   transform,
                   [props.A, state, ctx]
                 )       ^
                         |
                         |
                         |
   +---------------------+----------+
   |          Normal World          |
   +--------------------------------+
   |                                |
   | const App(props) {             |
   |   const [state] = useState()   |
   |   const ctx = useContext(Ctx)  |
   | }                              |
   |                                |
   +--------------------------------+

```

### Function Callbacks

You can also use [`useObservableCallback`][useObservableCallback] to create observables from function callbacks.

```

        +--------------------------------+
        |        Observable World        |
        +--------------------------------+
        |                                |
        |  const transform =             |
        |    input$ => input$.pipe(...)  |
        |                                |
        |           output$              |
        +--------------^-----------------+
                       |
            +-----+    |
            |     v    +
 const [onInput, output$] = useObservableCallback(
            ^                 transform
            |               )
            |
            |
            |
            |
        +---+----------------------------+
        |          Normal World          |
        +--------------------------------+
        |                                |
        | const App(props) {             |
        |   const [state] = useState()   |
        |   const ctx = useContext(Ctx)  |
        | }                              |
        |                                |
        +--------------------------------+

```

The resulted observables can then be consumed by [Observable to Normal](#observable-to-normal) with [`useObservableState`][useObservableState] or [`useSubscription`][useSubscription].

## Observable to Observable

Finally, you can also operate on multiple observables. This flexibility is powerful and can greatly simplify the observable flow design.

```

        +--------------------------------+
        |        Observable World        |
        +--------------------------------+
        |                                |
        |           fromProps$           |
        |                                |
        |           fromState$           |
        |                                |
        |           fromGlobal$          |
        |                                |
        | output$                        |
        +---^---------------+------------+
            |               |
            |               |
            +---------------v
    const output$ = useObservable(
                      () => combineLatest(
                        fromProps$,
                        fromState$,
                        fromGlobal$
                      )
                    )

        +--------------------------------+
        |                                |
        |          Normal World          |
        |                                |
        +--------------------------------+

```

The resulted observables can then be consumed by [Observable to Normal](#observable-to-normal) with [`useObservableState`][useObservableState] or [`useSubscription`][useSubscription].

## Helpers

There are also sugars like [`useObservableGetState`][useObservableGetState] and [`useObservablePickState`][useObservablePickState] which are inspired by lodash `get` and `pick`.

The epic-like signature makes the observable transformation logic highly reusable. In fact observable-hooks offers some [helpers][helpers] for common cases to reduce garbage collection burden.

[useobservable]: ../api/README.md#useobservable
[useLayoutObservable]: ../api/README.md#useLayoutObservable
[useObservableCallback]: ../api/README.md#useobservablecallback
[useSubscription]: ../api/README.md#usesubscription
[useLayoutSubscription]: ../api/README.md#uselayoutsubscription
[useObservableState]: ../api/README.md#useobservablestate
[useObservableGetState]: ../api/README.md#useobservableGetstate
[useObservablePickState]: ../api/README.md#useobservablePickstate

[helpers]: ../api/helpers.md
