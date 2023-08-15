(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{325:function(t,e,n){"use strict";n.r(e);var a=n(17),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"核心概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心概念"}},[t._v("#")]),t._v(" 核心概念")]),t._v(" "),e("h2",{attrs:{id:"两个世界"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#两个世界"}},[t._v("#")]),t._v(" 两个世界")]),t._v(" "),e("p",[t._v("要理解 observable-hooks 的设计你需要有两个“世界”的概念：响应式世界与普通世界。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n  +--------------------------------+\n  |            　　　　　            |\n  |            响应式世界            |\n  |            　　　　　            |\n  +--------------------------------+\n\n         +------------------+\n         | observable-hooks |\n         +------------------+\n\n  +--------------------------------+\n  |             　　　　            |\n  |             普通世界            |\n  |             　　　　            |\n  +--------------------------------+\n\n")])])]),e("p",[t._v("这两个世界仅是概念上的区分。响应式世界是指 Observable 存放的地方。这可以是在 React 组件里面，但也可以在外部。普通世界是指非响应式世界的地方。")]),t._v(" "),e("h2",{attrs:{id:"响应式世界到普通世界"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应式世界到普通世界"}},[t._v("#")]),t._v(" 响应式世界到普通世界")]),t._v(" "),e("p",[t._v("几乎所有实现 RxJS 与 React 转接的库都会提供相应接口来连接 Observable 值与 React 状态（state）。")]),t._v(" "),e("h3",{attrs:{id:"observable-到-react-状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#observable-到-react-状态"}},[t._v("#")]),t._v(" Observable 到 React 状态")]),t._v(" "),e("p",[t._v("在 observable-hooks 中我们可以用 "),e("RouterLink",{attrs:{to:"/zh-cn/api/#useobservablestate"}},[e("code",[t._v("useObservableState")])]),t._v(" 或 "),e("RouterLink",{attrs:{to:"/zh-cn/api/#useobservableeagerstate"}},[e("code",[t._v("useObservableEagerState")])]),t._v("。")],1),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n  +--------------------------------+\n  |            响应式世界            |\n  +--------------------------------+\n  |                                |\n  |             input$             |\n  |                                |\n  +--------------------+-----------+\n                       |\n                       |\n                       |\n           v-----------+\n  const output = useObservableState(\n           |       input$,\n           |       initialOutput\n           |     )\n           |\n           |\n           |\n           |\n  +--------v-----------------------+\n  |             普通世界            |\n  +--------------------------------+\n  |                                |\n  |         <p>{output}</p>        |\n  |                                |\n  +--------------------------------+\n\n")])])]),e("h3",{attrs:{id:"observable-到订阅回调"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#observable-到订阅回调"}},[t._v("#")]),t._v(" Observable 到订阅回调")]),t._v(" "),e("p",[t._v("除了转换到状态，我们还可以提供订阅回调函数通过 "),e("RouterLink",{attrs:{to:"/zh-cn/api/#usesubscription"}},[e("code",[t._v("useSubscription")])]),t._v(" 订阅 Observables。见 "),e("RouterLink",{attrs:{to:"/zh-cn/api/#usesubscription"}},[t._v("API 文档")]),t._v(" 了解为什么推荐用它而不是手动 "),e("code",[t._v("useEffect")]),t._v("。")],1),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n  +--------------------------------+\n  |             响应式世界           |\n  +--------------------------------+\n  |                                |\n  |             input$             |\n  |                                |\n  +-------------------+------------+\n                      |\n                      |\n                      |\n                      v\n    useSubscription(input$, onNext)\n                              |\n                              |\n                              |\n                              |\n  +---------------------------v----+\n  |             普通世界            |\n  +--------------------------------+\n  |                                |\n  |   const onNext = v => log(v)   |\n  |                                |\n  +--------------------------------+\n\n")])])]),e("h2",{attrs:{id:"普通世界到响应式世界到普通世界"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#普通世界到响应式世界到普通世界"}},[t._v("#")]),t._v(" 普通世界到响应式世界到普通世界")]),t._v(" "),e("p",[t._v("有些库还提供了方法从普通世界中创建 Observables，然后再订阅这些 Observables，将值导回普通世界。")]),t._v(" "),e("p",[t._v("我们可以在 React 组件以外的某个地方创建 Observables 然后通过各种方式传进组件使用。但更多情况是我们希望可以在 React 组件里面创建 Observables。")]),t._v(" "),e("p",[t._v("有两种方式可以做到：")]),t._v(" "),e("ol",[e("li",[t._v("事件回调函数。每当函数被调用，新的值从 Subject 中弹出。")]),t._v(" "),e("li",[t._v("Hook 依赖。React 的 props、states 和 context 的变化都会触发组件渲染。如 "),e("code",[t._v("useEffect")]),t._v(" 之类的 hooks 可以收集到这些变化。")])]),t._v(" "),e("h3",{attrs:{id:"事件回调函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件回调函数"}},[t._v("#")]),t._v(" 事件回调函数")]),t._v(" "),e("p",[t._v("在 observable-hooks 中 "),e("RouterLink",{attrs:{to:"/zh-cn/api/#useobservablestate"}},[e("code",[t._v("useObservableState")])]),t._v(" 还支持接收事件回调函数。")],1),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n     +--------------------------------+\n     |             响应式世界           |\n     +--------------------------------+\n     |                                |\n     |  const transform =             |\n     |    input$ => input$.pipe(...)  |\n     |                                |\n     +-------------^----------+-------+\n                   |          |\n                   |          |\n                   |          |\n          v-------------------+\n const [output, onInput] = useObservableState(\n          |        ^         transform,\n          |        |         initialOutput\n          |        |       )\n          |        |\n          |        |\n          |        |\n     +----v--------+------------------+\n     |             普通世界            |\n     +--------------------------------+\n     |                                |\n     |   <button onClick={onInput}>   |\n     |    {output}                    |\n     |   </button>                    |\n     |                                |\n     +--------------------------------+\n\n")])])]),e("h3",{attrs:{id:"hook-依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hook-依赖"}},[t._v("#")]),t._v(" Hook 依赖")]),t._v(" "),e("p",[t._v("在 observable-hooks 中 Hook 依赖的处理与其它库有点不太一样，我们并没有针对 hook 依赖提供“普通世界-响应式世界-普通世界”的方式。")]),t._v(" "),e("p",[t._v("如果你重新看回我们刚讨论过的接口，也许能注意到我们最终都是以普通世界结束。但 observable-hooks 真正发光的地方在于它能够让我们结束在响应式世界。具体什么意思请容我细说。")]),t._v(" "),e("h2",{attrs:{id:"普通世界到响应式世界"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#普通世界到响应式世界"}},[t._v("#")]),t._v(" 普通世界到响应式世界")]),t._v(" "),e("h3",{attrs:{id:"hook-依赖-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hook-依赖-2"}},[t._v("#")]),t._v(" Hook 依赖")]),t._v(" "),e("p",[t._v("在 observable-hooks 中你可以通过 "),e("RouterLink",{attrs:{to:"/zh-cn/api/#useobservable"}},[e("code",[t._v("useObservable")])]),t._v(" 或 "),e("RouterLink",{attrs:{to:"/zh-cn/api/#uselayoutobservable"}},[e("code",[t._v("useLayoutObservable")])]),t._v(" 利用 hook 依赖创建 Observable。")],1),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n   +--------------------------------+\n   |            响应式世界            |\n   +--------------------------------+\n   |                                |\n   | const transform =              |\n   |   inputs$ => inputs$.pipe(...) |\n   |                                |\n   |   output$                      |\n   +------^-------------------------+\n          |\n          |\n          |\n          +--------------+\n const output$ = useObservable(\n                   transform,\n                   [props.A, state, ctx]\n                 )       ^\n                         |\n                         |\n                         |\n   +---------------------+----------+\n   |             普通世界            |\n   +--------------------------------+\n   |                                |\n   | const App(props) {             |\n   |   const [state] = useState()   |\n   |   const ctx = useContext(Ctx)  |\n   | }                              |\n   |                                |\n   +--------------------------------+\n\n")])])]),e("h3",{attrs:{id:"事件回调函数-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件回调函数-2"}},[t._v("#")]),t._v(" 事件回调函数")]),t._v(" "),e("p",[t._v("你还可以通过 "),e("RouterLink",{attrs:{to:"/zh-cn/api/#useobservablecallback"}},[e("code",[t._v("useObservableCallback")])]),t._v(" 利用事件回调函数来创建 Observable。")],1),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n        +--------------------------------+\n        |            响应式世界            |\n        +--------------------------------+\n        |                                |\n        |  const transform =             |\n        |    input$ => input$.pipe(...)  |\n        |                                |\n        |           output$              |\n        +--------------^-----------------+\n                       |\n            +-----+    |\n            |     v    +\n const [onInput, output$] = useObservableCallback(\n            ^                 transform\n            |               )\n            |\n            |\n            |\n            |\n        +---+----------------------------+\n        |             普通世界            |\n        +--------------------------------+\n        |                                |\n        |   <button onClick={onInput}>   |\n        |    Click                       |\n        |   </button>                    |\n        |                                |\n        +--------------------------------+\n\n")])])]),e("p",[t._v("得到的 Observable 可以借助 "),e("a",{attrs:{href:"#%E5%93%8D%E5%BA%94%E5%BC%8F%E4%B8%96%E7%95%8C%E5%88%B0%E6%99%AE%E9%80%9A%E4%B8%96%E7%95%8C"}},[t._v("响应式世界到普通世界")]),t._v(" 模式，通过 "),e("RouterLink",{attrs:{to:"/zh-cn/api/#useobservablestate"}},[e("code",[t._v("useObservableState")])]),t._v(" 或 "),e("RouterLink",{attrs:{to:"/zh-cn/api/#usesubscription"}},[e("code",[t._v("useSubscription")])]),t._v(" 接收。")],1),t._v(" "),e("h3",{attrs:{id:"ref-生成-observable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ref-生成-observable"}},[t._v("#")]),t._v(" Ref 生成 Observable")]),t._v(" "),e("p",[t._v("你还可以通过 "),e("RouterLink",{attrs:{to:"/zh-cn/api/#useobservableref"}},[e("code",[t._v("useObservableRef")])]),t._v(" 利用 React ref.current 的改变产生值。")],1),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n        +--------------------------------+\n        |            响应式世界            |\n        +--------------------------------+\n        |                                |\n        |         value$                 |\n        +-----------^--------------------+\n                    |\n            +----+  |\n            |    v  +\n    const [ref, value$] = useObservableRef(\n            ^               initialValue\n            |             )\n            |\n            |\n            |\n            |\n        +---+----------------------------+\n        |             普通世界            |\n        +--------------------------------+\n        |                                |\n        |   <button ref={ref}>           |\n        |    Click                       |\n        |   </button>                    |\n        |                                |\n        |   // or                        |\n        |   ref.current = xxx            |\n        +--------------------------------+\n\n")])])]),e("p",[t._v("得到的 Observable 可以借助 "),e("a",{attrs:{href:"#%E5%93%8D%E5%BA%94%E5%BC%8F%E4%B8%96%E7%95%8C%E5%88%B0%E6%99%AE%E9%80%9A%E4%B8%96%E7%95%8C"}},[t._v("响应式世界到普通世界")]),t._v(" 模式，通过 "),e("RouterLink",{attrs:{to:"/zh-cn/api/#useobservablestate"}},[e("code",[t._v("useObservableState")])]),t._v(" 或 "),e("RouterLink",{attrs:{to:"/zh-cn/api/#usesubscription"}},[e("code",[t._v("useSubscription")])]),t._v(" 接收。")],1),t._v(" "),e("h2",{attrs:{id:"响应式世界到响应式世界"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#响应式世界到响应式世界"}},[t._v("#")]),t._v(" 响应式世界到响应式世界")]),t._v(" "),e("p",[t._v("最后，我们还可以操作任意多条 Observable。这提供了巨大的灵活性，可以简化许多流的设计。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n    +--------------------------------+\n    |            响应式世界            |\n    +--------------------------------+\n    |                                |\n    |           fromProps$           |\n    |                                |\n    |           fromState$           |\n    |                                |\n    |           fromGlobal$          |\n    |                                |\n    |  output$                       |\n    +-----^--------------+-----------+\n          |              |\n          |              |\n          +--------------v\n  const output$ = useObservable(\n                    () => combineLatest([\n                      fromProps$,\n                      fromState$,\n                      fromGlobal$\n                    ])\n                  )\n\n    +--------------------------------+\n    |             　　　　            |\n    |             普通世界            |\n    |             　　　　            |\n    +--------------------------------+\n\n")])])]),e("p",[t._v("得到的 Observable 可以借助 "),e("a",{attrs:{href:"#%E5%93%8D%E5%BA%94%E5%BC%8F%E4%B8%96%E7%95%8C%E5%88%B0%E6%99%AE%E9%80%9A%E4%B8%96%E7%95%8C"}},[t._v("响应式世界到普通世界")]),t._v(" 模式，通过 "),e("RouterLink",{attrs:{to:"/zh-cn/api/#useobservablestate"}},[e("code",[t._v("useObservableState")])]),t._v(" 或 "),e("RouterLink",{attrs:{to:"/zh-cn/api/#usesubscription"}},[e("code",[t._v("useSubscription")])]),t._v(" 接收。")],1),t._v(" "),e("h2",{attrs:{id:"辅助方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#辅助方法"}},[t._v("#")]),t._v(" 辅助方法")]),t._v(" "),e("p",[t._v("Osbservable-hooks 中类 "),e("a",{attrs:{href:"https://redux-observable.js.org/docs/basics/Epics.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Epic"),e("OutboundLink")],1),t._v(" 的设计可以让 Observable 的转换逻辑高度可复用。事实上 observable-hooks 已经提供了一些常用 "),e("RouterLink",{attrs:{to:"/zh-cn/api/helpers.html"}},[t._v("辅助方法")]),t._v(" 来减少垃圾回收压力。")],1)])}),[],!1,null,null,null);e.default=s.exports}}]);