(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1008:function(t,e,r){t.exports={card:"card_3l0YC",corner:"corner_1cpS6",corner__bg:"corner__bg_xN_AP","corner--favored":"corner--favored_3IU-w",star:"star_2wl3u"}},1131:function(t,e,r){t.exports={search:"search_2mhWv"}},1147:function(t,e,r){"use strict";var n=r(1008),c=r.n(n);r.d(e,"default",(function(){return c.a}))},1212:function(t,e,r){"use strict";r(31),r(20),r(22),r(34),r(35);var n=r(7),c=r(12),o=(r(30),r(38),r(14)),l=r(59);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={components:{DefaultAvatar:r(343).a},props:{namespace:{type:Object,required:!0}},computed:{link:function(){var t=this.namespace,e=t.scm,r=t.name;return"/dashboard?namespace=".concat(e,"/").concat(r)}},methods:m(m({},Object(o.b)("auth",["changeWorkspace"])),{},{changeCurrentWorkSpace:function(t){this.changeWorkspace({workspace:t})},addToFavorite:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.$nuxt.$loading.start(),n.prev=1,n.next=4,Object(l.a)("workspace",t);case 4:r.$store.commit("auth/setFavorite",{id:t,favorite:e}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),r.$message.error("Something went wrong, please try agian later");case 10:return n.prev=10,r.$nuxt.$loading.finish(),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[1,7,10,13]])})))()},clearFavorite:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.$nuxt.$loading.start(),n.prev=1,n.next=4,Object(l.b)("workspace",t);case 4:r.$store.commit("auth/setFavorite",{id:t,favorite:e}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),r.$message.error("Something went wrong, please try again later");case 10:return n.prev=10,r.$nuxt.$loading.finish(),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[1,7,10,13]])})))()},favorite:function(){var t=this.namespace,e=t.id,r=t.favorite;return r?this.clearFavorite(e,r):this.addToFavorite(e,r)}})},v=r(1147),d=r(6);var y={components:{Item:Object(d.a)(h,(function(){var t,e=this,r=e.$createElement,n=e._self._c||r;return n("ElCard",{staticClass:"shadow relative",class:e.$style.card,attrs:{"body-style":"padding: 0px"}},[n("div",{directives:[{name:"tooltip",rawName:"v-tooltip"}],staticClass:"absolute top-0 right-0 text-white cursor-pointer",class:[e.$style.corner,(t={},t[e.$style["corner--favored"]]=e.namespace.favorite,t)],attrs:{title:"Favorite",role:"button"},on:{click:e.favorite}},[n("div",{staticClass:"transform rotate-45",class:e.$style.corner__bg}),e._v(" "),n("Ionicon",{staticClass:"absolute top-0 right-0",class:e.$style.star,attrs:{name:"star",variant:"filled",size:"sm"}})],1),e._v(" "),n("div",{staticClass:"flex items-center px-4 py-6"},[e.namespace.avatar_url?n("ElAvatar",{staticClass:"mr-3 h-8 w-8",attrs:{slot:"icon",src:e.namespace.avatar_url,size:30},slot:"icon"},[n("span",{staticClass:"text-lg rounded-full h-8 flex items-center justify-center default-avatar"},[e._v("\n                "+e._s(e.namespace.name.slice(0,1).toUpperCase())+"\n            ")])]):n("DefaultAvatar",{staticClass:"mr-3 h-8 w-8 rounded-full flex items-center justify-center",attrs:{slot:"icon",name:e.namespace.name},slot:"icon"}),e._v(" "),n("h2",{staticClass:"text-xl flex items-center"},[n("nuxt-link",{staticClass:"flex items-center hover:text-blue-700 mr-2",attrs:{to:e.link},nativeOn:{click:function(t){return e.changeCurrentWorkSpace(e.namespace.id)}}},[e._v("\n                "+e._s(e.namespace.name)+"\n            ")])],1)],1)])}),[],!1,(function(t){this.$style=v.default.locals||v.default}),null,null).exports},props:{namespaces:{type:Array,required:!0}}},O=Object(d.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"my-5"},t._l(t.namespaces,(function(t){return r("li",{key:t.id,staticClass:"mb-5"},[r("Item",{attrs:{namespace:t}})],1)})),0)}),[],!1,null,null,null);e.a=O.exports},1376:function(t,e,r){"use strict";var n=r(1131),c=r.n(n);r.d(e,"default",(function(){return c.a}))},1472:function(t,e,r){"use strict";r.r(e);r(31),r(20),r(34),r(35);var n=r(12),c=(r(147),r(22),r(177),r(175),r(254),r(38),r(14)),o=r(341),l=r.n(o),f=r(951),m=r(1212),h=r(991);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={components:{NamespaceList:m.a,Alert:h.a},inject:["setLinks"],validate:function(t){var e=t.params;return Object(f.a)(e.scm)},data:function(){return{search:null}},head:function(){return{title:"".concat(this.$route.params.scm)}},computed:d(d({},Object(c.d)("auth",["workspaces","currentAccount"])),{},{links:function(){var t=this.$route.params.scm,e=["gitlab","github","bitbucket"].includes(t)?t:"gitlab";return[{icon:"logo-".concat(e),text:t,to:this.$route.query.path}]},namespaces:function(){var t=this,e=l()(this.workspaces.filter((function(e){return e.scm===t.$route.params.scm})),["favorite"],["desc"]);return this.search?e.filter((function(e){return t.search.toLowerCase().split(" ").every((function(t){return e.name.toLowerCase().includes(t)}))})):e}}),watchQuery:!0,created:function(){this.setLinks(this.links)},mounted:function(){this.$gtag.pageview({page_title:"SCM Workspace",page_path:this.$route.path,page_location:window.location.href})}},O=r(1376),w=r(6);var component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"py-6 px-10 min-h-full bg-white"},[r("div",{staticClass:"my-5 text-right"},[r("ElInput",{class:t.$style.search,attrs:{size:"medium",placeholder:"Search","suffix-icon":"el-icon-search",clearable:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),t.namespaces.length?r("div",[r("NamespaceList",{attrs:{namespaces:t.namespaces}})],1):r("div",[r("Alert",{attrs:{title:"You are not member of any organizations or repositories!"}},[r("nuxt-link",{attrs:{to:"/accounts/manage"}},[r("span",[t._v("Go to account management page.")])])],1)],1)])}),[],!1,(function(t){this.$style=O.default.locals||O.default}),null,null);e.default=component.exports},951:function(t,e,r){"use strict";function n(t){return/(^(?!:\/\/)(?=.{1,255}$)((.{1,63}\.){1,127}(?![0-9]*$)[a-z0-9-]+\.?)$)|^github$|^gitlab$|^bitbucket$/i.test(t)}r.d(e,"a",(function(){return n}))},991:function(t,e,r){"use strict";var n={props:{title:{type:String}}},c=r(6),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ElAlert",{staticClass:"my-4 flex items-center",attrs:{title:t.title,type:"info","show-icon":"",closable:!1,size:"sm"}},[t._t("default")],2)],1)}),[],!1,null,null,null);e.a=component.exports}}]);