(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1008:function(t,e,r){t.exports={card:"card_3l0YC",corner:"corner_1cpS6",corner__bg:"corner__bg_xN_AP","corner--favored":"corner--favored_3IU-w",star:"star_2wl3u"}},1102:function(t,e,r){t.exports={logo:"logo_1yBnx"}},1147:function(t,e,r){"use strict";var n=r(1008),c=r.n(n);r.d(e,"default",(function(){return c.a}))},1212:function(t,e,r){"use strict";r(31),r(20),r(22),r(34),r(35);var n=r(7),c=r(12),o=(r(30),r(38),r(14)),l=r(59);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={components:{DefaultAvatar:r(343).a},props:{namespace:{type:Object,required:!0}},computed:{link:function(){var t=this.namespace,e=t.scm,r=t.name;return"/dashboard?namespace=".concat(e,"/").concat(r)}},methods:m(m({},Object(o.b)("auth",["changeWorkspace"])),{},{changeCurrentWorkSpace:function(t){this.changeWorkspace({workspace:t})},addToFavorite:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.$nuxt.$loading.start(),n.prev=1,n.next=4,Object(l.a)("workspace",t);case 4:r.$store.commit("auth/setFavorite",{id:t,favorite:e}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),r.$message.error("Something went wrong, please try agian later");case 10:return n.prev=10,r.$nuxt.$loading.finish(),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[1,7,10,13]])})))()},clearFavorite:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.$nuxt.$loading.start(),n.prev=1,n.next=4,Object(l.b)("workspace",t);case 4:r.$store.commit("auth/setFavorite",{id:t,favorite:e}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),r.$message.error("Something went wrong, please try again later");case 10:return n.prev=10,r.$nuxt.$loading.finish(),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[1,7,10,13]])})))()},favorite:function(){var t=this.namespace,e=t.id,r=t.favorite;return r?this.clearFavorite(e,r):this.addToFavorite(e,r)}})},v=r(1147),h=r(6);var y={components:{Item:Object(h.a)(d,(function(){var t,e=this,r=e.$createElement,n=e._self._c||r;return n("ElCard",{staticClass:"shadow relative",class:e.$style.card,attrs:{"body-style":"padding: 0px"}},[n("div",{directives:[{name:"tooltip",rawName:"v-tooltip"}],staticClass:"absolute top-0 right-0 text-white cursor-pointer",class:[e.$style.corner,(t={},t[e.$style["corner--favored"]]=e.namespace.favorite,t)],attrs:{title:"Favorite",role:"button"},on:{click:e.favorite}},[n("div",{staticClass:"transform rotate-45",class:e.$style.corner__bg}),e._v(" "),n("Ionicon",{staticClass:"absolute top-0 right-0",class:e.$style.star,attrs:{name:"star",variant:"filled",size:"sm"}})],1),e._v(" "),n("div",{staticClass:"flex items-center px-4 py-6"},[e.namespace.avatar_url?n("ElAvatar",{staticClass:"mr-3 h-8 w-8",attrs:{slot:"icon",src:e.namespace.avatar_url,size:30},slot:"icon"},[n("span",{staticClass:"text-lg rounded-full h-8 flex items-center justify-center default-avatar"},[e._v("\n                "+e._s(e.namespace.name.slice(0,1).toUpperCase())+"\n            ")])]):n("DefaultAvatar",{staticClass:"mr-3 h-8 w-8 rounded-full flex items-center justify-center",attrs:{slot:"icon",name:e.namespace.name},slot:"icon"}),e._v(" "),n("h2",{staticClass:"text-xl flex items-center"},[n("nuxt-link",{staticClass:"flex items-center hover:text-blue-700 mr-2",attrs:{to:e.link},nativeOn:{click:function(t){return e.changeCurrentWorkSpace(e.namespace.id)}}},[e._v("\n                "+e._s(e.namespace.name)+"\n            ")])],1)],1)])}),[],!1,(function(t){this.$style=v.default.locals||v.default}),null,null).exports},props:{namespaces:{type:Array,required:!0}}},O=Object(h.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"my-5"},t._l(t.namespaces,(function(t){return r("li",{key:t.id,staticClass:"mb-5"},[r("Item",{attrs:{namespace:t}})],1)})),0)}),[],!1,null,null,null);e.a=O.exports},1229:function(t,e,r){},1298:function(t,e,r){"use strict";r(1229)},1299:function(t,e,r){"use strict";var n=r(1102),c=r.n(n);r.d(e,"default",(function(){return c.a}))},1436:function(t,e,r){"use strict";r.r(e);r(31),r(20),r(22),r(34),r(35);var n=r(7),c=r(12),o=(r(30),r(14)),l=r(912),f=r(928),m=(r(177),r(175),r(254),r(147),r(38),r(341)),d=r.n(m),v=r(991),h=r(1212),y={components:{Alert:v.a,NamespaceList:h.a},props:{workspaceList:{type:Array}}},O=r(6),w=Object(O.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.workspaceList.length?r("div",[r("NamespaceList",{attrs:{namespaces:t.workspaceList}})],1):r("div",[r("Alert",{attrs:{title:"You are not member of any organizations or repositories!"}},[r("nuxt-link",{attrs:{to:"/accounts/manage"}},[r("span",[t._v("Go to account management page.")])])],1)],1)])}),[],!1,null,null,null).exports;function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={components:{Loading:r(336).a,TabItem:w},props:{syncing:{type:Boolean}},data:function(){return{search:null}},computed:_(_(_({},Object(o.d)("auth",["user","workspaces"])),Object(o.c)("accounts",["currentAccount"])),{},{workspaceByScm:function(){var t=this,e=d()(this.workspaces.filter((function(e){return e.scm===t.currentAccount.provider})),["favorite"],["desc"]);return this.search?e.filter((function(e){return t.search.toLowerCase().split(" ").every((function(t){return e.name.toLowerCase().includes(t)}))})):e}})},k=(r(1298),Object(O.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("ElInput",{attrs:{size:"medium",placeholder:"Search for workspace","suffix-icon":"el-icon-search",clearable:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),t.syncing?r("div",{staticClass:"workspace flex justify-center items-center"},[r("Loading",{staticClass:"mr-2",attrs:{width:25,height:25}}),t._v(" "),r("span",{staticClass:"font-bold"},[t._v("Please Wait...")])],1):r("TabItem",{attrs:{"workspace-list":t.workspaceByScm}})],1)}),[],!1,null,null,null).exports),C=r(495),$=r(67);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var E={components:{UserMenu:C.a,Logo:$.a},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.d)("auth",["user"]))},D=r(1299);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function A(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var I={components:{DefaultNavbar:Object(O.a)(E,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ElHeader",{staticClass:"bg-white shadow flex items-center justify-between border-bottom"},[r("nav",{staticClass:"container mx-auto flex items-center justify-between"},[r("span",{staticClass:"flex items-center"},[r("Logo",{staticClass:"mx-auto mr-5",class:t.$style.logo})],1),t._v(" "),r("span",{staticClass:"flex items-center"},[r("ElDropdown",{staticClass:"flex",attrs:{trigger:"click"}},[r("Ionicon",{staticClass:"mr-5 cursor-pointer",attrs:{name:"help-circle",size:"lg"}}),t._v(" "),r("ElDropdownMenu",[r("ElDropdownItem",[r("nuxt-link",{staticClass:"flex items-center",attrs:{to:"/docs/introduction/getting-started.html",target:"_blank"}},[r("Ionicon",{staticClass:"mr-2",attrs:{name:"flame",size:"md"}}),r("span",[t._v("Get started")])],1)],1),t._v(" "),r("ElDropdownItem",[r("nuxt-link",{staticClass:"flex items-center",attrs:{to:"/docs/guide/yaml",target:"_blank"}},[r("Ionicon",{staticClass:"mr-2",attrs:{name:"book",size:"md"}}),r("span",[t._v("Build reference")])],1)],1),t._v(" "),t.user?r("ElDropdownItem",[r("nuxt-link",{staticClass:"flex items-center",attrs:{to:"/tools/yaml"}},[r("Ionicon",{staticClass:"mr-2",attrs:{name:"create",size:"md"}}),r("span",[t._v("Yaml editor")])],1)],1):t._e()],1)],1),t._v(" "),t.user?r("UserMenu"):t._e()],1)])])],1)}),[],!1,(function(t){this.$style=D.default.locals||D.default}),null,null).exports,WorkspaceTab:k},layout:"blank",middleware:["auth"],data:function(){return{title:"Workspaces",syncing:!1}},head:function(){return{title:this.title}},computed:A(A(A({},Object(o.d)(["githubAppId","gitlabAppId"])),Object(o.c)("accounts",["currentAccount"])),{},{organizationUrl:function(){return"github"===this.currentAccount.provider?"https://github.com/settings/connections/applications/".concat(this.githubAppId):"https://gitlab.com/-/profile/applications"}}),watch:{currentAccount:function(){this.autoSync()}},created:function(){this.autoSync()},mounted:function(){this.$gtag.pageview({page_title:this.title,page_path:this.$route.path,page_location:window.location.href})},methods:{autoSync:function(){var t=new Date,e=Object(l.a)(this.currentAccount.last_sync_at);this.currentAccount.last_sync_at&&!Object(f.a)(t,e)||this.sync(this.currentAccount.provider)},sync:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e.syncing=!0,r.next=4,e.$store.dispatch("user_repositories/sync",t);case 4:return r.next=6,e.$store.dispatch("auth/init");case 6:e.$nuxt.$loading.start(),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),r.t0.response&&401===r.t0.response.status?e.$message.error("".concat(r.t0.response.data.message,", you need to re-login again to update new credential")):e.$message.error("Something went wrong. Please try again later.");case 12:return r.prev=12,e.$nuxt.$loading.finish(),e.syncing=!1,r.finish(12);case 16:case"end":return r.stop()}}),r,null,[[0,9,12,16]])})))()}}},z=Object(O.a)(I,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("DefaultNavbar"),t._v(" "),r("div",{staticClass:"mx-auto p-8 w-1/2 items-center"},[r("ElCard",{staticClass:"items-center border-none",attrs:{shadow:"none"}},[r("div",{staticClass:"flex justify-between",attrs:{slot:"header"},slot:"header"},[r("span",{attrs:{slot:"title"},slot:"title"},[r("strong",{staticClass:"text-3xl pb-2"},[t._v("Select workspace")]),t._v(" "),r("p",{staticClass:"pt-2 italic text-sm"},[t._v("Select the workspace where you'd like to work.")]),t._v(" "),t.currentAccount.custom_provider?r("a",{staticClass:"pt-2 items-center hover:text-blue-700",attrs:{href:"/docs/general/self-managed-scm.html#retrieve-your-personal-access-token-with-gitlab"}},[r("span",{staticClass:"text-sm font-normal text-blue-700"},[t._v("\n                            This account is self SCM, if you can't see your organization, check this up\n                        ")])]):r("a",{staticClass:"pt-2 items-center hover:text-blue-700",attrs:{href:t.organizationUrl}},[r("span",{staticClass:"text-sm font-normal text-blue-700"},[t._v("\n                            Can't see your organization?\n                        ")])])]),t._v(" "),r("div",{staticClass:"flex py-6"},[r("ElButton",{attrs:{loading:t.syncing,icon:"el-icon-refresh"},on:{click:function(e){return t.sync(t.currentAccount.provider)}}},[t._v("\n                        Sync Account\n                    ")])],1)]),t._v(" "),r("WorkspaceTab",{attrs:{syncing:t.syncing}})],1)],1)],1)}),[],!1,null,null,null);e.default=z.exports},991:function(t,e,r){"use strict";var n={props:{title:{type:String}}},c=r(6),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ElAlert",{staticClass:"my-4 flex items-center",attrs:{title:t.title,type:"info","show-icon":"",closable:!1,size:"sm"}},[t._t("default")],2)],1)}),[],!1,null,null,null);e.a=component.exports}}]);