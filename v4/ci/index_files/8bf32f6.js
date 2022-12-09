(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1030:function(t,e,n){},1031:function(t,e,n){},1077:function(t,e,n){"use strict";n(1030)},1078:function(t,e,n){"use strict";n(1031)},1093:function(t,e,n){},1097:function(t,e,n){"use strict";n(22),n(38);var r=n(26),c=n.n(r),o=n(255),l=n.n(o),d={props:{current:String},data:function(){return{activeBarStyle:{}}},computed:{activeItem:function(){var t=this,e=this.$children.filter((function(t){return"TabItem"===t.$options.componentName}));return this.current?c()(e,(function(e){return e.$props.name===t.current})):this.$route.hash?c()(e,(function(e){return e.route.hash===l()(t.$route.hash,"#")})):c()(e,(function(e){var n=e.$props.route;return l()(n,"/")===l()(t.$route.path,"/")}))}},watch:{current:function(){this.updateActiveBar()},$route:function(){this.updateActiveBar()}},mounted:function(){this.updateActiveBar()},methods:{updateActiveBar:function(){var rect=this.$el.getBoundingClientRect();if(this.activeItem){var t=this.activeItem.$el.getBoundingClientRect();this.activeBarStyle={left:"".concat(t.left-rect.left,"px"),width:"".concat(t.width,"px")}}else{var e=this.$el.querySelector(".tab-links__item").getBoundingClientRect();this.activeBarStyle={left:"".concat(e.left-rect.left,"px"),width:"".concat(e.width,"px")}}}}},f=(n(1077),n(6)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"tab-links"},[t._t("default"),t._v(" "),n("div",{staticClass:"tab-links__active-bar",style:t.activeBarStyle})],2)}),[],!1,null,null,null);e.a=component.exports},1098:function(t,e,n){"use strict";var r={componentName:"TabItem",props:{name:{type:String},route:{type:[String,Object],required:!0},label:{type:String,default:""}}},c=(n(1078),n(6)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"tab-links__item"},[n("nuxt-link",{staticClass:"block",attrs:{to:t.route}},[t._t("default",[t._v(t._s(t.label))]),t._v(" "),t._t("icon")],2)],1)}),[],!1,null,null,null);e.a=component.exports},1200:function(t,e,n){"use strict";n(1093)},1223:function(t,e,n){"use strict";var r={data:function(){return{timeExpireCleaning:null,animationDuration:null}},computed:{getAnimationStyle:function(){return{"animation-duration":"".concat(this.animationDuration,"s")}}},methods:{countTimeCanRetry:function(t){var e=this;this.timeExpireCleaning=t,this.animationDuration=t,this.interval=setInterval((function(){e.timeExpireCleaning>0?e.timeExpireCleaning-=1:clearInterval(e.interval)}),1e3)}}},c=(n(1200),n(6)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"tooltip",rawName:"v-tooltip"}],staticClass:"flex px-4",attrs:{title:"Build is cleaning, please wait for about "+t.timeExpireCleaning+"s to retry"}},[n("div",{staticClass:"text-center text-sm relative h-10 w-10"},[n("div",{staticClass:"text-gray-600 cursor-default inline-block top-0 right-0 leading-10"},[t._v("\n            "+t._s(t.timeExpireCleaning)+"\n        ")]),t._v(" "),n("svg",{staticClass:"absolute top-0 right-0 h-10 w-10"},[n("circle",{style:t.getAnimationStyle,attrs:{r:"15",cx:"20",cy:"20"}})])]),t._v(" "),n("span")])}),[],!1,null,"7f2a580e",null);e.a=component.exports},1456:function(t,e,n){"use strict";n.r(e);n(31),n(20),n(22),n(34),n(35);var r=n(12),c=n(7),o=(n(30),n(23)),l=n.n(o),d=n(14),f=n(938),h=n(951),m=(n(57),n(882)),v=n.n(m),_=n(145),y=n.n(_),map=n(887),x=n.n(map),C=n(948),O=n(972),w=n(344);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function $(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var T={components:{BuildCleaningTimer:n(1223).a},props:{build:{type:Object,required:!0},job:{type:Object}},data:function(){return{loading:!1}},computed:{isFinished:function(){return Object(f.e)(this.build.status)},canCancel:function(){return Object(f.i)(this.build.status)||Object(f.g)(this.build.status)},canRetry:function(){return Object(f.e)(this.build.status)},expireCleaning:function(){return this.build.expire_cleaning}},created:function(){var t=this;this.expireCleaning&&setTimeout((function(){t.$refs.buildCleaningTimer.countTimeCanRetry(t.expireCleaning),t.startRefresher(t.expireCleaning)}),0)},methods:$($({},Object(d.b)("current-build",{fetchBuild:"fetch"})),{},{retry:function(){var t=arguments,e=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var r,c,o,l,d,f,h,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:{},e.loading=!0,c=e.$route.params,o=c.scm,l=c.namespace,d=c.repository,f=e.build.number,n.prev=4,n.next=7,Object(w.h)(o,l,d,f,r);case 7:h=n.sent,m=h.data.data,e.$store.commit("current-build/set",m),e.$message.success("Retry all job successfully"),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(4),e.$message.error("Something went wrong retrying this job");case 16:return n.prev=16,e.loading=!1,n.finish(16);case 19:case"end":return n.stop()}}),n,null,[[4,13,16,19]])})))()},retryWithoutCache:function(){return this.retry({no_cache:!0})},cancel:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r,c,o,l,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,n=t.$route.params,r=n.scm,c=n.namespace,o=n.repository,l=t.build.number,e.prev=3,e.next=6,Object(w.a)(r,c,o,l);case 6:d=e.sent,f=d.data.data,t.$store.commit("current-build/set",f),t.$message.success("Canceled all job successfully"),t.$set(t.build,"status",f.status),t.$set(t.build,"expire_cleaning",f.expire_cleaning),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),t.$message.error("Something went wrong canceling this job");case 17:return e.prev=17,t.loading=!1,t.startRefresher(t.expireCleaning),t.$refs&&t.$refs.buildCleaningTimer.countTimeCanRetry(t.expireCleaning),e.finish(17);case 22:case"end":return e.stop()}}),e,null,[[3,14,17,22]])})))()},startRefresher:function(t){var e=this;setTimeout((function(){e.fetchBuild(e.$route.params)}),1e3*t)}})},k=n(6),E=Object(k.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.canCancel&&!t.expireCleaning?n("ElButton",{staticClass:"py-2 px-4 text-gray-600",attrs:{loading:t.loading,type:"text",icon:"el-icon-close"},on:{click:t.cancel}},[t._v("\n        Cancel\n    ")]):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.expireCleaning>0,expression:"expireCleaning > 0"}]},[n("BuildCleaningTimer",{ref:"buildCleaningTimer"})],1),t._v(" "),t.canRetry&&!t.expireCleaning?n("ElDropdown",{attrs:{trigger:"click"}},[n("ElButton",{staticClass:"py-2 px-4 text-gray-600",attrs:{loading:t.loading,type:"text",icon:"el-icon-arrow-down"}},[t._v("\n            Retry\n        ")]),t._v(" "),n("ElDropdownMenu",{staticClass:"retry-menu"},[t.canCancel?t._e():n("ElDropdownItem",{staticClass:"px-2"},[n("ElButton",{staticClass:"px-4 py-2 text-gray-600 w-full text-left",attrs:{loading:t.loading,type:"text",icon:"el-icon-refresh-right"},on:{click:t.retry}},[t._v("\n                    Retry\n                ")])],1),t._v(" "),t.canCancel?t._e():n("ElDropdownItem",{staticClass:"px-2"},[n("ElButton",{staticClass:"px-4 py-2 text-gray-600 w-full text-left",attrs:{loading:t.loading,type:"text",icon:"el-icon-refresh"},on:{click:t.retryWithoutCache}},[t._v("\n                    Retry without cache\n                ")])],1)],1)],1):t._e()],1)}),[],!1,null,null,null).exports,B=n(996);function R(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function I(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?R(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):R(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var D={components:{StatusIcon:C.a,Timer:O.a,RetryBuild:E},props:{build:{type:Object,required:!0}},computed:I(I({},Object(d.c)("current-build",["canUpdateBuild"])),{},{isFinished:function(){return Object(f.e)(this.build.status)},isRunning:function(){return Object(f.i)(this.build.status)},canCancel:function(){return Object(f.i)(this.build.status)||Object(f.g)(this.build.status)},jobs:function(){return y()(x()("jobs"),v.a)(this.build.stages)},gitIcon:function(){return this.build.pr_number?"git-pull-request":"git-commit"},gitRef:function(){var symbol=Object(B.a)(this.build.event);return this.build.pr_number?"".concat(symbol).concat(this.build.pr_number):this.build.commit.slice(0,7)}})},S=Object(k.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"text-2xl mb-8 break-words"},[n("StatusIcon",{attrs:{status:t.build.status,size:"base","with-text":""}}),t._v(" "),n("span",[t._v(t._s(t.build.message_title))]),t._v(" "),n("span",{staticClass:"text-gray-600 text-2xl"},[t._v("#"+t._s(t.build.number))])],1),t._v(" "),n("ElCard",{staticClass:"border-gray-300",attrs:{shadow:"never"}},[n("div",{staticClass:"flex flex-auto justify-between"},[n("div",{staticClass:"text-lg flex items-center py-2"},[n("div",{staticClass:"pr-8 mr-8 border-r"},[n("div",{staticClass:"flex items-start mb-2"},[n("Ionicon",{staticClass:"mr-2",attrs:{name:"stopwatch",size:"lg"}}),t._v(" "),n("div",{staticClass:"leading-snug"},[n("b",[t._v(t._s(t.jobs.length))]),t._v(" jobs\n                        ")])],1),t._v(" "),n("div",{staticClass:"ml-8"},[t.isFinished?[t._v("\n                            Finished in "),n("b",[t._v(t._s(t._f("formatDuration")(t.build.duration)))])]:t.isRunning?[t._v("\n                            Running for "),n("b",[n("Timer",{attrs:{"start-time":t.build.started_at}})],1)]:[n("span",{staticClass:"text-gray-600"},[t._v("Waiting...")])]],2)]),t._v(" "),n("div",{staticClass:"pr-8 mr-8 border-r"},[n("div",{staticClass:"flex items-start mb-2"},[n("Ionicon",{staticClass:"mr-2",attrs:{name:"git-branch",size:"lg"}}),t._v(" "),n("div",{staticClass:"leading-snug hover:underline text-blue-700"},[n("nuxt-link",{attrs:{to:"/"+t.build.repository.path+"?branch="+t.build.branch}},[t._v("\n                                "+t._s(t.build.branch)+"\n                            ")])],1)],1),t._v(" "),n("div",{staticClass:"flex items-start"},[n("Ionicon",{staticClass:"mr-2",attrs:{name:t.gitIcon,size:"lg"}}),t._v(" "),n("div",{staticClass:"leading-snug hover:underline text-blue-700"},[n("a",{attrs:{href:t.build.link,target:"_blank"}},[t._v("\n                                "+t._s(t.gitRef)+"\n                            ")])])],1)]),t._v(" "),n("div",{staticClass:"text-gray-700"},[n("div",{staticClass:"flex items-start mb-2"},[n("ElAvatar",{staticClass:"mr-2",attrs:{src:t.build.sender_avatar,size:24}}),t._v(" "),n("div",{staticClass:"leading-snug"},[t._v("\n                            "+t._s(t.build.sender)+"\n                        ")])],1),t._v(" "),n("div",{staticClass:"flex items-center"},[n("Ionicon",{staticClass:"ml-px mr-3",attrs:{name:"calendar",size:"md"}}),t._v(" "),n("div",{directives:[{name:"tooltip",rawName:"v-tooltip"}],staticClass:"leading-snug",attrs:{title:t._f("formatDate")(t.build.created_at)}},[t._v("\n                            "+t._s(t._f("humanizeTime")(t.build.created_at))+"\n                        ")])],1)])]),t._v(" "),t.build.config_error?t._e():n("div",{staticClass:"text-gray-700"},[n("RetryBuild",{attrs:{build:t.build},on:{retry:function(e){return t.$emit("retry")}}})],1)])])],1)}),[],!1,null,null,null).exports,P=n(1097),z=n(1098);function A(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function N(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?A(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):A(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var F={name:"BuildDetails",components:{BuildInfo:S,Tabs:P.a,TabItem:z.a},inject:["setLinks"],layout:"repository",middleware:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r,c,o,d,f,h,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,r=t.params,c=t.redirect,o=r.scm,d=r.namespace,f=r.repository,h=r.number,e.prev=2,e.next=5,n.dispatch("current-build/fetch",r);case 5:e.next=15;break;case 7:if(e.prev=7,e.t0=e.catch(2),!e.t0.response){e.next=14;break}if(m=!0===l()(n.state,"auth.user.is_admin"),403!==e.t0.response.status||!m){e.next=14;break}return c("/admin/".concat(o,"/").concat(d,"/").concat(f,"/builds/").concat(h)),e.abrupt("return");case 14:throw e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,7]])})))()},validate:function(t){var e=t.params;return Object(h.a)(e.scm)},head:function(){var t=this.$route.params,e=t.namespace,n=t.repository;return{title:"Build #".concat(this.build.number," · ").concat(this.build.message_title," · ").concat(e,"/").concat(n),link:[{rel:"icon",hid:"icon",type:"image/png",href:this.favicon}]}},computed:N(N({},Object(d.d)("current-build",["build"])),{},{links:function(){var t=this.$route.params.repository,e=this.build,n=e.branch,r=e.number;return[{icon:"folder-open",text:t,to:"".concat(t)},{icon:"git-branch",text:n,to:"".concat(t,"?branch=").concat(n)},{icon:"cube",text:"Build #".concat(r)}]},finished:function(){return!this.build.config_error&&Object(f.e)(this.build.status)},favicon:function(){return"/favicons/favicon-".concat(this.build.status,".png")}}),created:function(){this.setLinks(this.links)},mounted:function(){this.startRefresher(),document.addEventListener("visibilitychange",this.onVisibilityChange),this.$gtag.pageview({page_title:"Build Details",page_path:this.$route.path,page_location:window.location.href})},beforeDestroy:function(){this.clearRefresher(),document.removeEventListener("visibilitychange",this.onVisibilityChange)},methods:N(N({},Object(d.b)("current-build",{fetchBuild:"fetch"})),{},{tab:function(path){var t=this.$route.params,e=t.scm,n=t.namespace,r=t.repository,c=t.number;return"/".concat(e,"/").concat(n,"/").concat(r,"/builds/").concat(c,"/").concat(path)},onVisibilityChange:function(){var t=this;if(this.$_refreshToggleTimer)clearTimeout(this.$_refreshToggleTimer),this.$_refreshToggleTimer=null;else{var e=document.hidden?this.clearRefresher:this.startRefresher;this.$_refreshToggleTimer=setTimeout((function(){e(),t.$_refreshToggleTimer=null}),3e4)}},startRefresher:function(){var t=this;this.$_refreshTimer=setInterval((function(){t.fetchBuild(t.$route.params)}),1e4)},clearRefresher:function(){this.$_refreshTimer&&(clearInterval(this.$_refreshTimer),this.$_refreshTimer=null)}})},L=Object(k.a)(F,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.$route.params.job?n("nuxt-child",{staticClass:"h-full"}):n("div",{staticClass:"flex flex-col min-h-full"},[n("BuildInfo",{staticClass:"px-10 my-6",attrs:{build:t.build}}),t._v(" "),n("Tabs",{staticClass:"px-10"},[t.build.config_error?t._e():n("TabItem",{attrs:{route:t.tab(""),label:"Stages"}}),t._v(" "),n("TabItem",{attrs:{route:t.tab("config"),label:"Configuration"},scopedSlots:t._u([t.build.config_warning?{key:"icon",fn:function(){return[n("Ionicon",{staticClass:"text-yellow-700",attrs:{name:"alert-circle"}})]},proxy:!0}:null],null,!0)}),t._v(" "),t.finished?n("TabItem",{attrs:{route:t.tab("artifacts"),label:"Artifacts"}}):t._e(),t._v(" "),t.finished?n("TabItem",{attrs:{route:t.tab("test-result"),label:"Test result"}}):t._e()],1),t._v(" "),n("nuxt-child",{staticClass:"flex-grow overflow-x-auto overflow-y-hidden px-10 py-8 bg-lightgray"})],1)}),[],!1,null,null,null);e.default=L.exports},938:function(t,e,n){"use strict";n.d(e,"i",(function(){return o})),n.d(e,"f",(function(){return l})),n.d(e,"d",(function(){return d})),n.d(e,"j",(function(){return f})),n.d(e,"g",(function(){return h})),n.d(e,"h",(function(){return m})),n.d(e,"c",(function(){return v})),n.d(e,"e",(function(){return _})),n.d(e,"k",(function(){return y})),n.d(e,"b",(function(){return x})),n.d(e,"a",(function(){return C})),n.d(e,"l",(function(){return O}));var r=n(880),c=n.n(r),o=function(t){return"running"===t},l=function(t){return"passed"===t},d=function(t){return"failed"===t},f=function(t){return"skipped"===t},h=function(t){return"pending"===t},m=function(t){return"queued"===t},v=function(t){return"created"===t},_=function(t){return c()(["passed","failed","canceled","skipped"],t)},y=function(t){return c()(["pending","queued","running"],t)},x=function(t){return _(t)&&!f(t)},C=function(t){return o(t)||h(t)||m(t)},O=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text",n=arguments.length>2?arguments[2]:void 0;switch(t){case"passed":return"".concat(e,"-green-500");case"failed":return"".concat(e,"-red-500");case"running":return"".concat(e,"-blue-500");case"pending":return"".concat(e,"-gray-500");case"passed with warning":return"".concat(e,"-yellow-600");case"created":return"".concat(e,n?"-orange-600":"-gray-500");default:return"".concat(e,"-gray-600")}}},948:function(t,e,n){"use strict";n(174);var r=n(340),c=n.n(r),o=n(938),l={props:{status:{type:String,required:!0},size:{type:[String,Number],default:"base"},variant:{type:String,default:"outline"},withText:{type:Boolean,default:!1},rounded:{type:Boolean,default:!0},canTrigger:{type:Boolean,default:!1}},computed:{icon:function(){switch(this.status){case"passed":return"checkmark-circle";case"failed":case"canceled":return"close-circle";case"running":return"logo-ionic";case"skipped":return"play-forward-circle";case"passed with warning":return"alert-circle";case"created":return this.canTrigger?"play":"remove-circle";default:return"remove-circle"}},color:function(){var t="queued"===this.status?"pending":this.status,e=this.withText?"bg":"text";return Object(o.l)(t,e,this.canTrigger)},spin:function(){return{"spin animate--very-slowly":"running"===this.status}},text:function(){var t="queued"===this.status?"pending":this.status;return c()(t)}}},d=n(6),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.withText?n("div",{staticClass:"inline-flex items-center py-1 pl-2 pr-3",class:[t.color,{"rounded-md":t.rounded}]},[n("Ionicon",{staticClass:"text-white mr-1",class:t.spin,attrs:{name:t.icon,size:t.size,variant:"filled"}}),t._v(" "),n("span",{staticClass:"text-white leading-3",class:"text-"+t.size},[t._v("\n        "+t._s(t.text)+"\n    ")])],1):n("Ionicon",{class:[t.color,t.spin],attrs:{name:t.icon,size:t.size,variant:t.variant}})}),[],!1,null,null,null);e.a=component.exports},951:function(t,e,n){"use strict";function r(t){return/(^(?!:\/\/)(?=.{1,255}$)((.{1,63}\.){1,127}(?![0-9]*$)[a-z0-9-]+\.?)$)|^github$|^gitlab$|^bitbucket$/i.test(t)}n.d(e,"a",(function(){return r}))},972:function(t,e,n){"use strict";n(174);var r=n(562),c=n(912),o={props:{startTime:{type:[String,Number],required:!0},icon:String},data:function(){return{timeElapsed:Object(r.a)(Date.now(),Object(c.a)(this.startTime))}},watch:{startTime:"startTimer"},mounted:function(){this.startTimer()},beforeDestroy:function(){this.clearTimer()},methods:{tick:function(){this.timeElapsed=Object(r.a)(Date.now(),Object(c.a)(this.startTime))},startTimer:function(){this.$_interval||(this.$_interval=setInterval(this.tick,1e3))},clearTimer:function(){this.$_interval&&clearInterval(this.$_interval)}}},l=n(6),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.timeElapsed>0?n("span",[t.icon?n("i",{class:t.icon}):t._e(),t._v("\n    "+t._s(t._f("formatDuration")(t.timeElapsed))+"\n")]):t._e()}),[],!1,null,null,null);e.a=component.exports},996:function(t,e,n){"use strict";function r(t){return"merge_request"===t?"!":"#"}n.d(e,"a",(function(){return r}))}}]);