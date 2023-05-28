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

Almost every RxJS-React binding library provides ways to connect observable values to React state.

### Observable to State

In observable-hooks we have [`useObservableState`][useobservablestate], [`useObservableEagerState`][useobservableeagerstate] and [`useLayoutObservableState`][uselayoutobservablestate].

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

In addition to states, you can also call observer callbacks with [`useSubscription`][usesubscription]. See the [API docs][usesubscription] for why it is preferred comparing to manual `useEffect`.

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

We can create observables somewhere outside of React components and somehow pass them in, but most likely we would like to create observables inside React components.

There are two ways to achieve that:

1. Event function callbacks. Every time the callback is called, a value is emitted from a Subject.
2. Hook dependencies. Changes of props, states or context will trigger component re-rendering. Hooks like `useEffect` can be used to collect changes.

### Function Callbacks

In observable-hooks [`useObservableState`][useobservablestate] can also be used for function callbacks.

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

This is a little different in observable-hooks which does not provide a "Normal-Observable-Normal" way with hook dependencies.

If you read back on what we have just discussed, you should notice that we always end up in the Normal World. But observable-hooks truly shines with its ability to end in the Observable World. Keep reading and I will show you what it means.

## Normal to Observable

### Hook dependencies

In observable-hooks you can use [`useObservable`][useobservable] or [`useLayoutObservable`][uselayoutobservable] to create observables with hook dependencies.

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

You can also use [`useObservableCallback`][useobservablecallback] to create observables from function callbacks.

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
        |   <button onClick={onInput}>   |
        |    Click                       |
        |   </button>                    |
        |                                |
        +--------------------------------+

```

The resulted observables can then be consumed by [Observable to Normal](#observable-to-normal) with [`useObservableState`][useobservablestate] or [`useSubscription`][usesubscription].

## Ref to Observable

You can also use [`useObservableRef`][useobservableref] to create observables from ref value.

```

        +--------------------------------+
        |        Observable World        |
        +--------------------------------+
        |                                |
        |           value$              |
        +--------------^-----------------+
                       |
            +-----+    |
            |     v    +
 const [ref, value$] = useObservableRef(
            ^            initialValue
            |          )
            |
            |
            |
            |
        +---+----------------------------+
        |          Normal World          |
        +--------------------------------+
        |                                |
        |   <button ref={ref}>           |
        |    Click                       |
        |   </button>                    |
        |                                |
        |   // or                        |
        |   ref.current = xxx            |
        +--------------------------------+

```

The resulted observables can then be consumed by [Observable to Normal](#observable-to-normal) with [`useObservableState`][useobservablestate] or [`useSubscription`][usesubscription].

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
    |  output$                       |
    +-----^--------------+-----------+
          |              |
          |              |
          +--------------v
  const output$ = useObservable(
                    () => combineLatest([
                      fromProps$,
                      fromState$,
                      fromGlobal$
                    ])
                  )

    +--------------------------------+
    |                                |
    |          Normal World          |
    |                                |
    +--------------------------------+

```

The resulted observables can then be consumed by [Observable to Normal](#observable-to-normal) with [`useObservableState`][useobservablestate] or [`useSubscription`][usesubscription].

## Helpers

There are also sugars like [`useObservableGetState`][useobservablegetstate] and [`useObservablePickState`][useobservablepickstate] which are inspired by lodash `get` and `pick`.

The [Epic](https://redux-observable.js.org/docs/basics/Epics.html)-like signature makes the observable transformation logic highly reusable. In fact observable-hooks offers some [helpers][helpers] for common cases to reduce garbage collection burden.

[useobservable]: ../api/README.md#useobservable
[uselayoutobservable]: ../api/README.md#uselayoutobservable
[useobservablecallback]: ../api/README.md#useobservablecallback
[useobservableref]: ../api/README.md#useobservableref
[usesubscription]: ../api/README.md#usesubscription
[uselayoutsubscription]: ../api/README.md#uselayoutsubscription
[useobservablestate]: ../api/README.md#useobservablestate
[useobservableeagerstate]: ../api/README.md#useobservableeagerstate
[uselayoutobservablestate]: ../api/README.md#uselayoutobservablestate
[useobservablegetstate]: ../api/README.md#useobservablegetstate
[useobservablepickstate]: ../api/README.md#useobservablepickstate
[helpers]: ../api/helpers.md
