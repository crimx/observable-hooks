(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{326:function(t,s,a){"use strict";a.r(s);var n=a(17),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),s("h2",{attrs:{id:"epic-闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#epic-闭包"}},[t._v("#")]),t._v(" Epic 闭包")]),t._v(" "),s("p",[t._v("React 函数组件在每次计算渲染的时侯都会被调用。在 observable-hooks 中，许多 hooks 比如 "),s("a",{attrs:{href:"#useobservable"}},[s("code",[t._v("useObservable")])]),t._v("、"),s("a",{attrs:{href:"#useobservablecallback"}},[s("code",[t._v("useObservableCallback")])]),t._v(" 或者 "),s("a",{attrs:{href:"#useobservablestate"}},[s("code",[t._v("useObservableState")])]),t._v(" 都接受一个类 "),s("a",{attrs:{href:"https://redux-observable.js.org/docs/basics/Epics.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Epic"),s("OutboundLink")],1),t._v(" 的回调函数，里面的逻辑只会被调用一遍（React 并行模式下可能会调用多次），从而避免 Observable 被反复创建或反复执行 "),s("code",[t._v("pipe")]),t._v("。")]),t._v(" "),s("p",[t._v("所以在这些回调函数中直接引用外部变量是不安全的。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useObservableCallback "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'observable-hooks'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("onChange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" textChange$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useObservableCallback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event$")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" event$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentTarget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("flag")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flag "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 总会是初始值")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("你可能会想到利用 "),s("code",[t._v("useRef")]),t._v(" 来引用值，但这也是不安全的。在并行模式下可能会出现状态不一致的“撕裂”问题。")]),t._v(" "),s("p",[t._v("正确的方式是将外部的值转为 Observable 然后通过 "),s("code",[t._v("withLatestFrom")]),t._v(" 接入。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" pluckFirst"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useObservableCallback "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'observable-hooks'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("App")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" flag$ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useObservable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pluckFirst"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("onChange"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" textChange$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useObservableCallback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event$")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" event$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withLatestFrom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flag$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" flag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentTarget"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          flag\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"订阅时机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#订阅时机"}},[t._v("#")]),t._v(" 订阅时机")]),t._v(" "),s("p",[t._v("Observable 订阅对于 React 渲染来说是属于副作用，故为了使 observable-hooks 在并行模式下安全，它会在渲染已经提交（commit）到屏幕之后才会执行初次订阅。由于我们无法预判一个组件完成一次渲染需要多少时间，故这里有个细微的时间差。Observable-hooks 会保证组件不会出现（由于状态不一致导致的）“撕裂”问题，但如果被订阅的是一个 Hot Observable 且在这个时间差内产生了值，这些值将无法被获取。")]),t._v(" "),s("p",[t._v("当然这是非常极端少见的情况。一般来说对于这种场景总会有更好的方式来组织代码。")]),t._v(" "),s("ol",[s("li",[t._v("如果这个 Hot Observable 是来自 DOM 事件：\n"),s("ol",[s("li",[t._v("对于由用户操作触发的事件如 "),s("code",[t._v("click")]),t._v(" 或 "),s("code",[t._v("keypress")]),t._v(" 我们可以放心地认为此时订阅已经完成了。")]),t._v(" "),s("li",[t._v("对于其它事件，如果你不确定或者遇到了值丢失的问题，可以使用 "),s("RouterLink",{attrs:{to:"/zh-cn/api/#uselayoutsubscription"}},[s("code",[t._v("useLayoutSubscription")])]),t._v("，它会在 React 渲染计算结束后，提交到屏幕前的时机以同步的方式执行订阅。")],1)])]),t._v(" "),s("li",[t._v("如果被订阅的 Observable 是来自其它你无权控制的模块，那么这个问题已经与订阅时机无关了。因为我们甚至无法预判组件在什么时侯开始渲染。这种情况下如果的确需要拿到之前的值，你应该通过缓存的方式，如 "),s("code",[t._v("BehaviorSubject")]),t._v(" 来记录历史值。")]),t._v(" "),s("li",[t._v("同时可以看看 "),s("RouterLink",{attrs:{to:"/zh-cn/api/#useobservableeagerstate"}},[s("code",[t._v("useObservableEagerState")])]),t._v("，这个 hook 是为了获取同步值而设计。")],1),t._v(" "),s("li",[t._v("如果你可以控制 Hot Observable 产生值的时机，那么最好通过 "),s("code",[t._v("useEffect")]),t._v(" 再加一个事件周期（event loop）。React 执行 "),s("code",[t._v("useEffect")]),t._v(" 回调的顺序不定，多一个 event loop 可以保证在订阅之后 Hot Observable 才开始产生值。"),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" didUnmount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("didUnmount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\n      hot$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      didUnmount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),t._v("如果这个模式被大量使用，你也可以自行封装一个 hook。")]),t._v(" "),s("li",[t._v("如果有更好的方法也欢迎向我们提交 PR 分享！")])])])}),[],!1,null,null,null);s.default=e.exports}}]);