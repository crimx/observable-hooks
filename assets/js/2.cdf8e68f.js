(window.webpackJsonp=window.webpackJsonp||[]).push([[2,11,12,19,21],{244:function(t,e,s){},245:function(t,e){t.exports=function(t){return null==t}},246:function(t,e,s){},247:function(t,e,s){},248:function(t,e,s){},249:function(t,e,s){},250:function(t,e,s){},254:function(t,e,s){"use strict";s(244)},255:function(t,e,s){"use strict";s.r(e);var i=s(269),n=s(256),a=s(242);function r(t,e){if("group"===e.type){const s=e.path&&Object(a.e)(t,e.path),i=e.children.some(e=>"group"===e.type?r(t,e):"page"===e.type&&Object(a.e)(t,e.path));return s||i}return!1}var o={name:"SidebarLinks",components:{SidebarGroup:i.default,SidebarLink:n.default},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=function(t,e){for(let s=0;s<e.length;s++){const i=e[s];if(r(t,i))return s}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(a.e)(this.$route,t.regularPath)}}},l=s(17),u=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(s,i){return e("li",{key:i},["group"===s.type?e("SidebarGroup",{attrs:{item:s,open:i===t.openGroupIndex,collapsable:s.collapsable||s.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):e("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:s}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=u.exports},256:function(t,e,s){"use strict";s.r(e);var i=s(242);function n(t,e,s,i,n){const a={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return n>2&&(a.style={"padding-left":n+"rem"}),t("RouterLink",a,s)}function a(t,e,s,r,o,l=1){return!e||l>o?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const u=Object(i.e)(r,s+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[n(t,s+"#"+e.slug,e.title,u,e.level-1),a(t,e.children,s,r,o,l+1)])}))}var r={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:s,$route:r,$themeConfig:o,$themeLocaleConfig:l},props:{item:u,sidebarDepth:c}}){const h=Object(i.e)(r,u.path),d="auto"===u.type?h||u.children.some(t=>Object(i.e)(r,u.basePath+"#"+t.slug)):h,p="external"===u.type?function(t,e,s){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[s,t("OutboundLink")])}(t,u.path,u.title||u.path):n(t,u.path,u.title||u.path,d),f=[e.frontmatter.sidebarDepth,c,l.sidebarDepth,o.sidebarDepth,1].find(t=>void 0!==t),g=l.displayAllHeaders||o.displayAllHeaders;if("auto"===u.type)return[p,a(t,u.children,u.basePath,r,f)];if((d||g)&&u.headers&&!i.d.test(u.path)){return[p,a(t,Object(i.c)(u.headers),u.path,r,f)]}return p}},o=(s(254),s(17)),l=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.default=l.exports},257:function(t,e,s){"use strict";s(246)},259:function(t,e,s){},260:function(t,e,s){},261:function(t,e,s){"use strict";s(247)},262:function(t,e,s){},263:function(t,e,s){"use strict";s(248)},264:function(t,e,s){var i=s(14),n=s(6),a=s(12);t.exports=function(t){return"string"==typeof t||!n(t)&&a(t)&&"[object String]"==i(t)}},265:function(t,e,s){"use strict";s(249)},266:function(t,e,s){},267:function(t,e,s){"use strict";s(250)},268:function(t,e,s){},269:function(t,e,s){"use strict";s.r(e);var i=s(242),n={name:"SidebarGroup",components:{DropdownTransition:s(252).default},props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=s(255).default},methods:{isActive:i.e}},a=(s(267),s(17)),r=Object(a.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?e("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):e("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),e("DropdownTransition",[t.open||!t.collapsable?e("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=r.exports},270:function(t,e,s){"use strict";s.r(e);s(93);var i={name:"AlgoliaSearchBox",props:["options"],data:()=>({placeholder:void 0}),watch:{$lang(t){this.update(this.options,t)},options(t){this.update(t,this.$lang)}},mounted(){this.initialize(this.options,this.$lang),this.placeholder=this.$site.themeConfig.searchPlaceholder||""},methods:{initialize(t,e){Promise.all([Promise.all([s.e(0),s.e(9)]).then(s.t.bind(null,297,7)),Promise.all([s.e(0),s.e(9)]).then(s.t.bind(null,298,7))]).then(([s])=>{s=s.default;const{algoliaOptions:i={}}=t;s(Object.assign({},t,{inputSelector:"#algolia-search-input",algoliaOptions:{...i,facetFilters:["lang:"+e].concat(i.facetFilters||[])},handleSelected:(t,e,s)=>{const{pathname:i,hash:n}=new URL(s.url),a=i.replace(this.$site.base,"/"),r=decodeURIComponent(n);this.$router.push(`${a}${r}`)}}))})},update(t,e){this.$el.innerHTML='<input id="algolia-search-input" class="search-query">',this.initialize(t,e)}}},n=(s(257),s(17)),a=Object(n.a)(i,(function(){var t=this._self._c;return t("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[t("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})])}),[],!1,null,null,null);e.default=a.exports},272:function(t,e,s){"use strict";s.r(e);var i=s(245),n=s.n(i),a=s(242),r={name:"PageEdit",computed:{lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){const t=n()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,{repo:e,docsDir:s="",docsBranch:i="master",docsRepo:a=e}=this.$site.themeConfig;return t&&a&&this.$page.relativePath?this.createEditLink(e,a,s,i,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,s,i,n){if(/bitbucket.org/.test(e)){return e.replace(a.a,"")+"/src"+`/${i}/`+(s?s.replace(a.a,"")+"/":"")+n+`?mode=edit&spa=0&at=${i}&fileviewer=file-view-default`}if(/gitlab.com/.test(e)){return e.replace(a.a,"")+"/-/edit"+`/${i}/`+(s?s.replace(a.a,"")+"/":"")+n}return(a.i.test(e)?e:"https://github.com/"+e).replace(a.a,"")+"/edit"+`/${i}/`+(s?s.replace(a.a,"")+"/":"")+n}}},o=(s(263),s(17)),l=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"page-edit"},[t.editLink?e("div",{staticClass:"edit-link"},[e("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),e("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?e("div",{staticClass:"last-updated"},[e("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null);e.default=l.exports},273:function(t,e,s){"use strict";s.r(e);s(93);var i=s(242),n=s(264),a=s.n(n),r=s(245),o=s.n(r),l={name:"PageNav",props:["sidebarItems"],computed:{prev(){return c(u.PREV,this)},next(){return c(u.NEXT,this)}}};const u={NEXT:{resolveLink:function(t,e){return h(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return h(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function c(t,{$themeConfig:e,$page:s,$route:n,$site:r,sidebarItems:l}){const{resolveLink:u,getThemeLinkConfig:c,getPageLinkConfig:h}=t,d=c(e),p=h(s),f=o()(p)?d:p;return!1===f?void 0:a()(f)?Object(i.k)(r.pages,f,n.path):u(s,l)}function h(t,e,s){const i=[];!function t(e,s){for(let i=0,n=e.length;i<n;i++)"group"===e[i].type?t(e[i].children||[],s):s.push(e[i])}(e,i);for(let e=0;e<i.length;e++){const n=i[e];if("page"===n.type&&n.path===decodeURIComponent(t.path))return i[e+s]}}var d=l,p=(s(265),s(17)),f=Object(p.a)(d,(function(){var t=this,e=t._self._c;return t.prev||t.next?e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.prev?e("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?e("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?e("span",{staticClass:"next"},["external"===t.next.type?e("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null);e.default=f.exports},274:function(t,e,s){"use strict";s.r(e);s(261);var i=s(17),n=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[e("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[e("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);e.default=n.exports},276:function(t,e,s){"use strict";s(259)},277:function(t,e,s){"use strict";s(260)},278:function(t,e,s){"use strict";s(262)},279:function(t,e,s){"use strict";s(266)},280:function(t,e,s){"use strict";s(268)},286:function(t,e,s){"use strict";s.r(e);var i=s(270),n=(s(93),s(94)),a=s.n(n),r=(t,e,s=null)=>{let i=a()(e,"title","");return a()(e,"frontmatter.tags")&&(i+=" "+e.frontmatter.tags.join(" ")),s&&(i+=" "+s),o(t,i)};const o=(t,e)=>{const s=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),i=new RegExp("[^\0-]"),n=t.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t);if(i.test(t))return n.some(t=>e.toLowerCase().indexOf(t)>-1);{const i=t.endsWith(" ");return new RegExp(n.map((t,e)=>n.length!==e+1||i?`(?=.*\\b${s(t)}\\b)`:`(?=.*\\b${s(t)})`).join("")+".+","gi").test(e)}};var l={name:"SearchBox",data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const t=this.query.trim().toLowerCase();if(!t)return;const{pages:e}=this.$site,s=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,n=[];for(let a=0;a<e.length&&!(n.length>=s);a++){const o=e[a];if(this.getPageLocalePath(o)===i&&this.isSearchable(o))if(r(t,o))n.push(o);else if(o.headers)for(let e=0;e<o.headers.length&&!(n.length>=s);e++){const s=o.headers[e];s.title&&r(t,o,s.title)&&n.push(Object.assign({},o,{path:o.path+"#"+s.slug,header:s}))}}return n},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath(t){for(const e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable(t){let e=null;return null===e||(e=Array.isArray(e)?e:new Array(e),e.filter(e=>t.path.match(e)).length>0)},onHotkey(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus(t){this.focusIndex=t},unfocus(){this.focusIndex=-1}}},u=(s(277),s(17)),c=Object(u.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"search-box"},[e("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?e("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(s,i){return e("li",{key:i,staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[e("a",{attrs:{href:s.path},on:{click:function(t){t.preventDefault()}}},[e("span",{staticClass:"page-title"},[t._v(t._s(s.title||s.path))]),t._v(" "),s.header?e("span",{staticClass:"header"},[t._v("> "+t._s(s.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports,h=s(274),d=s(271);function p(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var f={name:"Navbar",components:{SidebarButton:h.default,NavLinks:d.default,SearchBox:c,AlgoliaSearchBox:i.default},data:()=>({linksWrapMaxWidth:null}),computed:{algolia(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted(){const t=parseInt(p(this.$el,"paddingLeft"))+parseInt(p(this.$el,"paddingRight")),e=()=>{document.documentElement.clientWidth<719?this.linksWrapMaxWidth=null:this.linksWrapMaxWidth=this.$el.offsetWidth-t-(this.$refs.siteName&&this.$refs.siteName.offsetWidth||0)};e(),window.addEventListener("resize",e,!1)}},g=(s(278),Object(u.a)(f,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"navbar"},[e("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),e("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?e("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?e("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),e("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?e("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?e("SearchBox"):t._e(),t._v(" "),e("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null));e.default=g.exports},288:function(t,e,s){"use strict";s.r(e);var i={name:"Home",components:{NavLink:s(251).default},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},n=(s(276),s(17)),a=Object(n.a)(i,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?e("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(s,i){return e("div",{key:i,staticClass:"feature"},[e("h2",[t._v(t._s(s.title))]),t._v(" "),e("p",[t._v(t._s(s.details))])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):e("Content",{staticClass:"footer",attrs:{"slot-key":"footer"}})],1)}),[],!1,null,null,null);e.default=a.exports},289:function(t,e,s){"use strict";s.r(e);var i=s(272),n=s(273),a={components:{PageEdit:i.default,PageNav:n.default},props:["sidebarItems"]},r=(s(279),s(17)),o=Object(r.a)(a,(function(){var t=this._self._c;return t("main",{staticClass:"page"},[this._t("top"),this._v(" "),t("Content",{staticClass:"theme-default-content"}),this._v(" "),t("PageEdit"),this._v(" "),t("PageNav",this._b({},"PageNav",{sidebarItems:this.sidebarItems},!1)),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.default=o.exports},290:function(t,e,s){"use strict";s.r(e);var i=s(255),n=s(271),a={name:"Sidebar",components:{SidebarLinks:i.default,NavLinks:n.default},props:["items"]},r=(s(280),s(17)),o=Object(r.a)(a,(function(){var t=this._self._c;return t("aside",{staticClass:"sidebar"},[t("NavLinks"),this._v(" "),this._t("top"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.default=o.exports},303:function(t,e,s){"use strict";s.r(e);var i=s(288),n=s(286),a=s(289),r=s(290),o=s(242),l={name:"Layout",components:{Home:i.default,Page:a.default,Sidebar:r.default,Navbar:n.default},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(o.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,s=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(s)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},u=s(17),c=Object(u.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?e("Home"):e("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=c.exports}}]);