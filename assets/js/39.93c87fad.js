(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{320:function(t,e,s){"use strict";s.r(e);var a=s(17),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"suspense"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#suspense"}},[t._v("#")]),t._v(" Suspense")]),t._v(" "),e("p",[t._v("使用并行模式安全的方式连接 RxJS 与 React Suspense。使用方法见 "),e("RouterLink",{attrs:{to:"/zh-cn/guide/render-as-you-fetch-suspense.html"}},[t._v("Render-as-You-Fetch (using Suspense)")]),t._v("。")],1),t._v(" "),e("h2",{attrs:{id:"observableresource"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#observableresource"}},[t._v("#")]),t._v(" ObservableResource")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[t._v("Class ObservableResource"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("TInput"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TOutput"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[t._v("将 Observable 转换为类 Relay 的 Suspense 数据源。")]),t._v(" "),e("Badge",{attrs:{text:"v2.2.0"}}),t._v(" 添加自 v2.2.0。\n"),e("p",[e("strong",[t._v("类型参数:")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("TInput")]),t._v(" 输入源 Observable 的值类型。")]),t._v(" "),e("li",[e("code",[t._v("TOutput")]),t._v(" 输出源的值类型，默认与输入源一致。")])]),t._v(" "),e("p",[e("strong",[t._v("Constructors:")])]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ObservableResource")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  input$"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Observable"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("TInput"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  isSuccess"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" TInput"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" value "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" TOutput\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ObservableResource\n")])])]),e("p",[e("strong",[t._v("参数:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数名")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("input$")])]),t._v(" "),e("td",[e("code",[t._v("Observable<TInput>")])]),t._v(" "),e("td",[t._v("An Observable.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("isSuccess")])]),t._v(" "),e("td",[e("code",[t._v("(value: TInput): value is TOutput")])]),t._v(" "),e("td",[t._v("可选函数用于判断 "),e("code",[t._v("input$")]),t._v(" 产生的值是否为“成功”状态，不是则触发 Suspense。默认都为 "),e("code",[t._v("true")]),t._v("。")])])])]),t._v(" "),e("p",[e("strong",[t._v("Public 属性:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数名")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("shouldUpdate$$")])]),t._v(" "),e("td",[e("code",[t._v("Subject<undefined>")])]),t._v(" "),e("td",[t._v("组件需要重新渲染时会产生值。")])])])]),t._v(" "),e("p",[e("strong",[t._v("Public 方法:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数名")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("read")])]),t._v(" "),e("td",[e("code",[t._v("(): TOutput")])]),t._v(" "),e("td",[t._v("处于成功状态则返回值，否则抛出 Suspense。产生异常则抛出异常。")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("destroy")])]),t._v(" "),e("td",[e("code",[t._v("(): void")])]),t._v(" "),e("td",[t._v("UnSubscribe input Observable.")])]),t._v(" "),e("tr",[e("td",[e("code",[t._v("reload")])]),t._v(" "),e("td",[e("code",[t._v("(newInput$?: Observable<TInput>): void")])]),t._v(" "),e("td",[e("Badge",{attrs:{text:"v2.3.5"}}),t._v(" 清理并重新订阅 input Observable。产生异常的 Hot Observable 因为无法重新启动故必须提供新的 Observable "),e("code",[t._v("newInput$")]),t._v("。推荐尽可能使用 Cold Observable 以便重载。（另外对于不熟悉 Observable 温度的朋友，注意即便 "),e("code",[t._v("Subject")]),t._v(" 是 Hot, "),e("code",[t._v("subject.pipe(...)")]),t._v(" 是 Cold 的）")],1)])])]),t._v(" "),e("h2",{attrs:{id:"useobservablesuspense"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#useobservablesuspense"}},[t._v("#")]),t._v(" useObservableSuspense")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token generic-function"}},[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("useObservableSuspense")]),e("span",{pre:!0,attrs:{class:"token generic class-name"}},[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("TInput"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TOutput"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  resource"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ObservableResource"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("TInput"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TOutput"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" TOutput\n")])])]),e("p",[t._v("从 Observable 数据源中获取值。")]),t._v(" "),e("Badge",{attrs:{text:"v2.2.0"}}),t._v(" 添加自 v2.2.0。\n"),e("p",[t._v("不同于 Promise，Observable 实现的是多次推值协议。这个 hook 会在 Suspense 重新触发时自动更新组件。")]),t._v(" "),e("p",[e("strong",[t._v("类型参数:")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("TInput")]),t._v(" Value type of the input Observable.")]),t._v(" "),e("li",[e("code",[t._v("TOutput")]),t._v(" Resulted resource value. Default TInput.")])]),t._v(" "),e("p",[e("strong",[t._v("参数:")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("参数名")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("code",[t._v("resource")])]),t._v(" "),e("td",[e("code",[t._v("ObservableResource<TInput, TOutput>")])]),t._v(" "),e("td",[t._v("Observable resource.")])])])]),t._v(" "),e("p",[e("strong",[t._v("Returns:")])]),t._v(" "),e("p",[e("code",[t._v("TOutput")]),t._v(" resource value.")])],1)}),[],!1,null,null,null);e.default=r.exports}}]);