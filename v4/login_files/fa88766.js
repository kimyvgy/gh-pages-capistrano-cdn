(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{921:function(e,t,n){"use strict";n.d(t,"a",(function(){return me}));var r=n(0),o=n(52),c=n(485),l=n(99),d=n(29),h=n(13),f=n(120),v=n(563),m=n(483),y=n(496),_=n(486),O=n(915),j=n(332),E=n(17),object=n(44),x="?",w=/^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,k=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,S=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,R=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,T=/\((\S*)(?::(\d+))(?::(\d+))\)/,I=/Minified React error #\d+;/i;function L(e){var t=null,n=0;e&&("number"==typeof e.framesToPop?n=e.framesToPop:I.test(e.message)&&(n=1));try{if(t=function(e){if(!e||!e.stacktrace)return null;for(var t,n=e.stacktrace,r=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,o=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i,c=n.split("\n"),l=[],line=0;line<c.length;line+=2){var element=null;(t=r.exec(c[line]))?element={url:t[2],func:t[3],args:[],line:+t[1],column:null}:(t=o.exec(c[line]))&&(element={url:t[6],func:t[3]||t[4],args:t[5]?t[5].split(","):[],line:+t[1],column:+t[2]}),element&&(!element.func&&element.line&&(element.func=x),l.push(element))}if(!l.length)return null;return{message:D(e),name:e.name,stack:l}}(e))return F(t,n)}catch(e){}try{if(t=function(e){if(!e||!e.stack)return null;for(var t,n,element,r=[],o=e.stack.split("\n"),i=0;i<o.length;++i){if(n=w.exec(o[i])){var c=n[2]&&0===n[2].indexOf("native");n[2]&&0===n[2].indexOf("eval")&&(t=T.exec(n[2]))&&(n[2]=t[1],n[3]=t[2],n[4]=t[3]);var l=n[2]&&0===n[2].indexOf("address at ")?n[2].substr("address at ".length):n[2],d=n[1]||x,h=-1!==d.indexOf("safari-extension"),f=-1!==d.indexOf("safari-web-extension");(h||f)&&(d=-1!==d.indexOf("@")?d.split("@")[0]:x,l=h?"safari-extension:"+l:"safari-web-extension:"+l),element={url:l,func:d,args:c?[n[2]]:[],line:n[3]?+n[3]:null,column:n[4]?+n[4]:null}}else if(n=S.exec(o[i]))element={url:n[2],func:n[1]||x,args:[],line:+n[3],column:n[4]?+n[4]:null};else{if(!(n=k.exec(o[i])))continue;n[3]&&n[3].indexOf(" > eval")>-1&&(t=R.exec(n[3]))?(n[1]=n[1]||"eval",n[3]=t[1],n[4]=t[2],n[5]=""):0!==i||n[5]||void 0===e.columnNumber||(r[0].column=e.columnNumber+1),element={url:n[3],func:n[1]||x,args:n[2]?n[2].split(","):[],line:n[4]?+n[4]:null,column:n[5]?+n[5]:null}}!element.func&&element.line&&(element.func=x),r.push(element)}if(!r.length)return null;return{message:D(e),name:e.name,stack:r}}(e))return F(t,n)}catch(e){}return{message:D(e),name:e&&e.name,stack:[],failed:!0}}function F(e,t){try{return Object(r.a)(Object(r.a)({},e),{stack:e.stack.slice(t)})}catch(t){return e}}function D(e){var t=e&&e.message;return t?t.error&&"string"==typeof t.error.message?t.error.message:t:"No error message"}function H(e){var t=M(e.stack),n={type:e.name,value:e.message};return t&&t.length&&(n.stacktrace={frames:t}),void 0===n.type&&""===n.value&&(n.value="Unrecoverable error caught"),n}function B(e){return{exception:{values:[H(e)]}}}function M(e){if(!e||!e.length)return[];var t=e,n=t[0].func||"",r=t[t.length-1].func||"";return-1===n.indexOf("captureMessage")&&-1===n.indexOf("captureException")||(t=t.slice(1)),-1!==r.indexOf("sentryWrapped")&&(t=t.slice(0,-1)),t.slice(0,50).map((function(e){return{colno:null===e.column?void 0:e.column,filename:e.url||t[0].url,function:e.func||"?",in_app:!0,lineno:null===e.line?void 0:e.line}})).reverse()}function A(e,t,n){var o;if(void 0===n&&(n={}),Object(E.e)(e)&&e.error)return o=B(L(e=e.error));if(Object(E.a)(e)||Object(E.b)(e)){var c=e,l=c.name||(Object(E.a)(c)?"DOMError":"DOMException"),h=c.message?l+": "+c.message:l;return o=P(h,t,n),Object(d.b)(o,h),"code"in c&&(o.tags=Object(r.a)(Object(r.a)({},o.tags),{"DOMException.code":""+c.code})),o}return Object(E.d)(e)?o=B(L(e)):Object(E.h)(e)||Object(E.f)(e)?(o=function(e,t,n){var r={exception:{values:[{type:Object(E.f)(e)?e.constructor.name:n?"UnhandledRejection":"Error",value:"Non-Error "+(n?"promise rejection":"exception")+" captured with keys: "+Object(object.b)(e)}]},extra:{__serialized__:Object(object.e)(e)}};if(t){var o=M(L(t).stack);r.stacktrace={frames:o}}return r}(e,t,n.rejection),Object(d.a)(o,{synthetic:!0}),o):(o=P(e,t,n),Object(d.b)(o,""+e,void 0),Object(d.a)(o,{synthetic:!0}),o)}function P(input,e,t){void 0===t&&(t={});var n={message:input};if(t.attachStacktrace&&e){var r=M(L(e).stack);n.stacktrace={frames:r}}return n}var U=n(316),N=n(484),C=n(871),W=n(916),X=n(72),G={event:"error",transaction:"transaction",session:"session",attachment:"attachment"},$=function(){function e(e){this.options=e,this._buffer=new W.a(30),this._rateLimits={},this._api=new N.a(e.dsn,e._metadata,e.tunnel),this.url=this._api.getStoreEndpointWithUrlEncodedAuth()}return e.prototype.sendEvent=function(e){throw new X.a("Transport Class has to implement `sendEvent` method")},e.prototype.close=function(e){return this._buffer.drain(e)},e.prototype._handleResponse=function(e){var t=e.requestType,n=e.response,r=e.headers,o=e.resolve,c=e.reject,l=C.a.fromHttpCode(n.status);this._handleRateLimit(r)&&h.a.warn("Too many "+t+" requests, backing off until: "+this._disabledUntil(t)),l!==C.a.Success?c(n):o({status:l})},e.prototype._disabledUntil=function(e){var t=G[e];return this._rateLimits[t]||this._rateLimits.all},e.prototype._isRateLimited=function(e){return this._disabledUntil(e)>new Date(Date.now())},e.prototype._handleRateLimit=function(e){var t,n,o,c,l=Date.now(),h=e["x-sentry-rate-limits"],f=e["retry-after"];if(h){try{for(var v=Object(r.f)(h.trim().split(",")),m=v.next();!m.done;m=v.next()){var y=m.value.split(":",2),_=parseInt(y[0],10),O=1e3*(isNaN(_)?60:_);try{for(var j=(o=void 0,Object(r.f)(y[1].split(";"))),E=j.next();!E.done;E=j.next()){var x=E.value;this._rateLimits[x||"all"]=new Date(l+O)}}catch(e){o={error:e}}finally{try{E&&!E.done&&(c=j.return)&&c.call(j)}finally{if(o)throw o.error}}}}catch(e){t={error:e}}finally{try{m&&!m.done&&(n=v.return)&&n.call(v)}finally{if(t)throw t.error}}return!0}return!!f&&(this._rateLimits.all=new Date(l+Object(d.g)(l,f)),!0)},e}();var z=function(e){function t(t,n){void 0===n&&(n=function(){var e,t,n=Object(d.e)();if(Object(j.a)(n.fetch))return n.fetch.bind(n);var r=n.document,o=n.fetch;if("function"==typeof(null===(e=r)||void 0===e?void 0:e.createElement))try{var c=r.createElement("iframe");c.hidden=!0,r.head.appendChild(c),(null===(t=c.contentWindow)||void 0===t?void 0:t.fetch)&&(o=c.contentWindow.fetch),r.head.removeChild(c)}catch(e){h.a.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",e)}return o.bind(n)}());var r=e.call(this,t)||this;return r._fetch=n,r}return Object(r.b)(t,e),t.prototype.sendEvent=function(e){return this._sendRequest(Object(U.a)(e,this._api),e)},t.prototype.sendSession=function(e){return this._sendRequest(Object(U.b)(e,this._api),e)},t.prototype._sendRequest=function(e,t){var n=this;if(this._isRateLimited(e.type))return Promise.reject({event:t,type:e.type,reason:"Transport for "+e.type+" requests locked till "+this._disabledUntil(e.type)+" due to too many requests.",status:429});var r={body:e.body,method:"POST",referrerPolicy:Object(j.e)()?"origin":""};return void 0!==this.options.fetchParameters&&Object.assign(r,this.options.fetchParameters),void 0!==this.options.headers&&(r.headers=this.options.headers),this._buffer.add((function(){return new f.a((function(t,o){n._fetch(e.url,r).then((function(r){var c={"x-sentry-rate-limits":r.headers.get("X-Sentry-Rate-Limits"),"retry-after":r.headers.get("Retry-After")};n._handleResponse({requestType:e.type,response:r,headers:c,resolve:t,reject:o})})).catch(o)}))}))},t}($),Y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.b)(t,e),t.prototype.sendEvent=function(e){return this._sendRequest(Object(U.a)(e,this._api),e)},t.prototype.sendSession=function(e){return this._sendRequest(Object(U.b)(e,this._api),e)},t.prototype._sendRequest=function(e,t){var n=this;return this._isRateLimited(e.type)?Promise.reject({event:t,type:e.type,reason:"Transport for "+e.type+" requests locked till "+this._disabledUntil(e.type)+" due to too many requests.",status:429}):this._buffer.add((function(){return new f.a((function(t,r){var o=new XMLHttpRequest;for(var header in o.onreadystatechange=function(){if(4===o.readyState){var c={"x-sentry-rate-limits":o.getResponseHeader("X-Sentry-Rate-Limits"),"retry-after":o.getResponseHeader("Retry-After")};n._handleResponse({requestType:e.type,response:o,headers:c,resolve:t,reject:r})}},o.open("POST",e.url),n.options.headers)n.options.headers.hasOwnProperty(header)&&o.setRequestHeader(header,n.options.headers[header]);o.send(e.body)}))}))},t}($),J=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(r.b)(t,e),t.prototype.eventFromException=function(e,t){return function(e,t,n){var r=A(t,n&&n.syntheticException||void 0,{attachStacktrace:e.attachStacktrace});return Object(d.a)(r,{handled:!0,type:"generic"}),r.level=O.a.Error,n&&n.event_id&&(r.event_id=n.event_id),f.a.resolve(r)}(this._options,e,t)},t.prototype.eventFromMessage=function(e,t,n){return void 0===t&&(t=O.a.Info),function(e,t,n,r){void 0===n&&(n=O.a.Info);var o=P(t,r&&r.syntheticException||void 0,{attachStacktrace:e.attachStacktrace});return o.level=n,r&&r.event_id&&(o.event_id=r.event_id),f.a.resolve(o)}(this._options,e,t,n)},t.prototype._setupTransport=function(){if(!this._options.dsn)return e.prototype._setupTransport.call(this);var t=Object(r.a)(Object(r.a)({},this._options.transportOptions),{dsn:this._options.dsn,tunnel:this._options.tunnel,_metadata:this._options._metadata});return this._options.transport?new this._options.transport(t):Object(j.b)()?new z(t):new Y(t)},t}(_.a),K=n(43),V=0;function Q(){return V>0}function Z(){V+=1,setTimeout((function(){V-=1}))}function ee(e,t,n){if(void 0===t&&(t={}),"function"!=typeof e)return e;try{if(e.__sentry__)return e;if(e.__sentry_wrapped__)return e.__sentry_wrapped__}catch(t){return e}var o=function(){var o=Array.prototype.slice.call(arguments);try{n&&"function"==typeof n&&n.apply(this,arguments);var c=o.map((function(e){return ee(e,t)}));return e.handleEvent?e.handleEvent.apply(this,c):e.apply(this,c)}catch(e){throw Z(),Object(K.b)((function(n){n.addEventProcessor((function(e){var n=Object(r.a)({},e);return t.mechanism&&(Object(d.b)(n,void 0,void 0),Object(d.a)(n,t.mechanism)),n.extra=Object(r.a)(Object(r.a)({},n.extra),{arguments:o}),n})),Object(K.a)(e)})),e}};try{for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&(o[c]=e[c])}catch(e){}e.prototype=e.prototype||{},o.prototype=e.prototype,Object.defineProperty(e,"__sentry_wrapped__",{enumerable:!1,value:o}),Object.defineProperties(o,{__sentry__:{enumerable:!1,value:!0},__sentry_original__:{enumerable:!1,value:e}});try{Object.getOwnPropertyDescriptor(o,"name").configurable&&Object.defineProperty(o,"name",{get:function(){return e.name}})}catch(e){}return o}function te(e){if(void 0===e&&(e={}),e.eventId)if(e.dsn){var script=document.createElement("script");script.async=!0,script.src=new N.a(e.dsn).getReportDialogEndpoint(e),e.onLoad&&(script.onload=e.onLoad),(document.head||document.body).appendChild(script)}else h.a.error("Missing dsn option in showReportDialog call");else h.a.error("Missing eventId option in showReportDialog call")}var ne=n(119),re=n(331),ae=function(){function e(t){this.name=e.id,this._options=Object(r.a)({console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0},t)}return e.prototype.addSentryBreadcrumb=function(e){this._options.sentry&&Object(l.b)().addBreadcrumb({category:"sentry."+("transaction"===e.type?"transaction":"event"),event_id:e.event_id,level:e.level,message:Object(d.d)(e)},{event:e})},e.prototype.setupOnce=function(){var e=this;this._options.console&&Object(v.a)({callback:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];e._consoleBreadcrumb.apply(e,Object(r.e)(t))},type:"console"}),this._options.dom&&Object(v.a)({callback:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];e._domBreadcrumb.apply(e,Object(r.e)(t))},type:"dom"}),this._options.xhr&&Object(v.a)({callback:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];e._xhrBreadcrumb.apply(e,Object(r.e)(t))},type:"xhr"}),this._options.fetch&&Object(v.a)({callback:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];e._fetchBreadcrumb.apply(e,Object(r.e)(t))},type:"fetch"}),this._options.history&&Object(v.a)({callback:function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];e._historyBreadcrumb.apply(e,Object(r.e)(t))},type:"history"})},e.prototype._consoleBreadcrumb=function(e){var t={category:"console",data:{arguments:e.args,logger:"console"},level:O.a.fromString(e.level),message:Object(ne.b)(e.args," ")};if("assert"===e.level){if(!1!==e.args[0])return;t.message="Assertion failed: "+(Object(ne.b)(e.args.slice(1)," ")||"console.assert"),t.data.arguments=e.args.slice(1)}Object(l.b)().addBreadcrumb(t,{input:e.args,level:e.level})},e.prototype._domBreadcrumb=function(e){var t,n="object"==typeof this._options.dom?this._options.dom.serializeAttribute:void 0;"string"==typeof n&&(n=[n]);try{t=e.event.target?Object(re.a)(e.event.target,n):Object(re.a)(e.event,n)}catch(e){t="<unknown>"}0!==t.length&&Object(l.b)().addBreadcrumb({category:"ui."+e.name,message:t},{event:e.event,name:e.name,global:e.global})},e.prototype._xhrBreadcrumb=function(e){if(e.endTimestamp){if(e.xhr.__sentry_own_request__)return;var t=e.xhr.__sentry_xhr__||{},n=t.method,r=t.url,o=t.status_code,body=t.body;Object(l.b)().addBreadcrumb({category:"xhr",data:{method:n,url:r,status_code:o},type:"http"},{xhr:e.xhr,input:body})}else;},e.prototype._fetchBreadcrumb=function(e){e.endTimestamp&&(e.fetchData.url.match(/sentry_key/)&&"POST"===e.fetchData.method||(e.error?Object(l.b)().addBreadcrumb({category:"fetch",data:e.fetchData,level:O.a.Error,type:"http"},{data:e.error,input:e.args}):Object(l.b)().addBreadcrumb({category:"fetch",data:Object(r.a)(Object(r.a)({},e.fetchData),{status_code:e.response.status}),type:"http"},{input:e.args,response:e.response})))},e.prototype._historyBreadcrumb=function(e){var t=Object(d.e)(),n=e.from,r=e.to,o=Object(d.h)(t.location.href),c=Object(d.h)(n),h=Object(d.h)(r);c.path||(c=o),o.protocol===h.protocol&&o.host===h.host&&(r=h.relative),o.protocol===c.protocol&&o.host===c.host&&(n=c.relative),Object(l.b)().addBreadcrumb({category:"navigation",data:{from:n,to:r}})},e.id="Breadcrumbs",e}(),oe=function(e){function t(t){void 0===t&&(t={});return t._metadata=t._metadata||{},t._metadata.sdk=t._metadata.sdk||{name:"sentry.javascript.browser",packages:[{name:"npm:@sentry/browser",version:m.a}],version:m.a},e.call(this,J,t)||this}return Object(r.b)(t,e),t.prototype.showReportDialog=function(e){void 0===e&&(e={}),Object(d.e)().document&&(this._isEnabled()?te(Object(r.a)(Object(r.a)({},e),{dsn:e.dsn||this.getDsn()})):h.a.error("Trying to call showReportDialog with Sentry Client disabled"))},t.prototype._prepareEvent=function(t,n,r){return t.platform=t.platform||"javascript",e.prototype._prepareEvent.call(this,t,n,r)},t.prototype._sendEvent=function(t){var n=this.getIntegration(ae);n&&n.addSentryBreadcrumb(t),e.prototype._sendEvent.call(this,t)},t}(y.a),ie=n(242),se=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],ce=function(){function e(t){this.name=e.id,this._options=Object(r.a)({XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0},t)}return e.prototype.setupOnce=function(){var e=Object(d.e)();(this._options.setTimeout&&Object(object.c)(e,"setTimeout",this._wrapTimeFunction.bind(this)),this._options.setInterval&&Object(object.c)(e,"setInterval",this._wrapTimeFunction.bind(this)),this._options.requestAnimationFrame&&Object(object.c)(e,"requestAnimationFrame",this._wrapRAF.bind(this)),this._options.XMLHttpRequest&&"XMLHttpRequest"in e&&Object(object.c)(XMLHttpRequest.prototype,"send",this._wrapXHR.bind(this)),this._options.eventTarget)&&(Array.isArray(this._options.eventTarget)?this._options.eventTarget:se).forEach(this._wrapEventTarget.bind(this))},e.prototype._wrapTimeFunction=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=t[0];return t[0]=ee(r,{mechanism:{data:{function:Object(ie.a)(e)},handled:!0,type:"instrument"}}),e.apply(this,t)}},e.prototype._wrapRAF=function(e){return function(t){return e.call(this,ee(t,{mechanism:{data:{function:"requestAnimationFrame",handler:Object(ie.a)(e)},handled:!0,type:"instrument"}}))}},e.prototype._wrapEventTarget=function(e){var t=Object(d.e)(),n=t[e]&&t[e].prototype;n&&n.hasOwnProperty&&n.hasOwnProperty("addEventListener")&&(Object(object.c)(n,"addEventListener",(function(t){return function(n,r,o){try{"function"==typeof r.handleEvent&&(r.handleEvent=ee(r.handleEvent.bind(r),{mechanism:{data:{function:"handleEvent",handler:Object(ie.a)(r),target:e},handled:!0,type:"instrument"}}))}catch(e){}return t.call(this,n,ee(r,{mechanism:{data:{function:"addEventListener",handler:Object(ie.a)(r),target:e},handled:!0,type:"instrument"}}),o)}})),Object(object.c)(n,"removeEventListener",(function(e){return function(t,n,r){var o,c=n;try{var l=null===(o=c)||void 0===o?void 0:o.__sentry_wrapped__;l&&e.call(this,t,l,r)}catch(e){}return e.call(this,t,c,r)}})))},e.prototype._wrapXHR=function(e){return function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r=this,o=["onload","onerror","onprogress","onreadystatechange"];return o.forEach((function(e){e in r&&"function"==typeof r[e]&&Object(object.c)(r,e,(function(t){var n={mechanism:{data:{function:e,handler:Object(ie.a)(t)},handled:!0,type:"instrument"}};return t.__sentry_original__&&(n.mechanism.data.handler=Object(ie.a)(t.__sentry_original__)),ee(t,n)}))})),e.apply(this,t)}},e.id="TryCatch",e}(),ue=function(){function e(t){this.name=e.id,this._onErrorHandlerInstalled=!1,this._onUnhandledRejectionHandlerInstalled=!1,this._options=Object(r.a)({onerror:!0,onunhandledrejection:!0},t)}return e.prototype.setupOnce=function(){Error.stackTraceLimit=50,this._options.onerror&&(h.a.log("Global Handler attached: onerror"),this._installGlobalOnErrorHandler()),this._options.onunhandledrejection&&(h.a.log("Global Handler attached: onunhandledrejection"),this._installGlobalOnUnhandledRejectionHandler())},e.prototype._installGlobalOnErrorHandler=function(){var t=this;this._onErrorHandlerInstalled||(Object(v.a)({callback:function(data){var n=data.error,r=Object(l.b)(),o=r.getIntegration(e),c=n&&!0===n.__sentry_own_request__;if(o&&!Q()&&!c){var h=r.getClient(),f=void 0===n&&Object(E.k)(data.msg)?t._eventFromIncompleteOnError(data.msg,data.url,data.line,data.column):t._enhanceEventWithInitialFrame(A(n||data.msg,void 0,{attachStacktrace:h&&h.getOptions().attachStacktrace,rejection:!1}),data.url,data.line,data.column);Object(d.a)(f,{handled:!1,type:"onerror"}),r.captureEvent(f,{originalException:n})}},type:"error"}),this._onErrorHandlerInstalled=!0)},e.prototype._installGlobalOnUnhandledRejectionHandler=function(){var t=this;this._onUnhandledRejectionHandlerInstalled||(Object(v.a)({callback:function(n){var r=n;try{"reason"in n?r=n.reason:"detail"in n&&"reason"in n.detail&&(r=n.detail.reason)}catch(e){}var o=Object(l.b)(),c=o.getIntegration(e),h=r&&!0===r.__sentry_own_request__;if(!c||Q()||h)return!0;var f=o.getClient(),v=Object(E.i)(r)?t._eventFromRejectionWithPrimitive(r):A(r,void 0,{attachStacktrace:f&&f.getOptions().attachStacktrace,rejection:!0});v.level=O.a.Error,Object(d.a)(v,{handled:!1,type:"onunhandledrejection"}),o.captureEvent(v,{originalException:r})},type:"unhandledrejection"}),this._onUnhandledRejectionHandlerInstalled=!0)},e.prototype._eventFromIncompleteOnError=function(e,t,line,n){var r,o=Object(E.e)(e)?e.message:e,c=o.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);c&&(r=c[1],o=c[2]);var l={exception:{values:[{type:r||"Error",value:o}]}};return this._enhanceEventWithInitialFrame(l,t,line,n)},e.prototype._eventFromRejectionWithPrimitive=function(e){return{exception:{values:[{type:"UnhandledRejection",value:"Non-Error promise rejection captured with value: "+String(e)}]}}},e.prototype._enhanceEventWithInitialFrame=function(e,t,line,n){e.exception=e.exception||{},e.exception.values=e.exception.values||[],e.exception.values[0]=e.exception.values[0]||{},e.exception.values[0].stacktrace=e.exception.values[0].stacktrace||{},e.exception.values[0].stacktrace.frames=e.exception.values[0].stacktrace.frames||[];var r=isNaN(parseInt(n,10))?void 0:n,o=isNaN(parseInt(line,10))?void 0:line,c=Object(E.k)(t)&&t.length>0?t:Object(d.f)();return 0===e.exception.values[0].stacktrace.frames.length&&e.exception.values[0].stacktrace.frames.push({colno:r,filename:c,function:"?",in_app:!0,lineno:o}),e},e.id="GlobalHandlers",e}(),le=n(248),pe=function(){function e(t){void 0===t&&(t={}),this.name=e.id,this._key=t.key||"cause",this._limit=t.limit||5}return e.prototype.setupOnce=function(){Object(le.b)((function(t,n){var r=Object(l.b)().getIntegration(e);if(r){var o=r._handler&&r._handler.bind(r);return"function"==typeof o?o(t,n):t}return t}))},e.prototype._handler=function(e,t){if(!(e.exception&&e.exception.values&&t&&Object(E.g)(t.originalException,Error)))return e;var n=this._walkErrorTree(t.originalException,this._key);return e.exception.values=Object(r.e)(n,e.exception.values),e},e.prototype._walkErrorTree=function(e,t,n){if(void 0===n&&(n=[]),!Object(E.g)(e[t],Error)||n.length+1>=this._limit)return n;var o=H(L(e[t]));return this._walkErrorTree(e[t],t,Object(r.e)([o],n))},e.id="LinkedErrors",e}(),de=function(){function e(){this.name=e.id}return e.prototype.setupOnce=function(t,n){t((function(t){var r=n().getIntegration(e);if(r){try{if(r._shouldDropEvent(t,r._previousEvent))return null}catch(e){return r._previousEvent=t}return r._previousEvent=t}return t}))},e.prototype._shouldDropEvent=function(e,t){return!!t&&(!!this._isSameMessageEvent(e,t)||!!this._isSameExceptionEvent(e,t))},e.prototype._isSameMessageEvent=function(e,t){var n=e.message,r=t.message;return!(!n&&!r)&&(!(n&&!r||!n&&r)&&(n===r&&(!!this._isSameFingerprint(e,t)&&!!this._isSameStacktrace(e,t))))},e.prototype._getFramesFromEvent=function(e){var t=e.exception;if(t)try{return t.values[0].stacktrace.frames}catch(e){return}else if(e.stacktrace)return e.stacktrace.frames},e.prototype._isSameStacktrace=function(e,t){var n=this._getFramesFromEvent(e),r=this._getFramesFromEvent(t);if(!n&&!r)return!0;if(n&&!r||!n&&r)return!1;if(n=n,(r=r).length!==n.length)return!1;for(var i=0;i<r.length;i++){var o=r[i],c=n[i];if(o.filename!==c.filename||o.lineno!==c.lineno||o.colno!==c.colno||o.function!==c.function)return!1}return!0},e.prototype._getExceptionFromEvent=function(e){return e.exception&&e.exception.values&&e.exception.values[0]},e.prototype._isSameExceptionEvent=function(e,t){var n=this._getExceptionFromEvent(t),r=this._getExceptionFromEvent(e);return!(!n||!r)&&(n.type===r.type&&n.value===r.value&&(!!this._isSameFingerprint(e,t)&&!!this._isSameStacktrace(e,t)))},e.prototype._isSameFingerprint=function(e,t){var n=e.fingerprint,r=t.fingerprint;if(!n&&!r)return!0;if(n&&!r||!n&&r)return!1;n=n,r=r;try{return!(n.join("")!==r.join(""))}catch(e){return!1}},e.id="Dedupe",e}(),he=Object(d.e)(),fe=function(){function e(){this.name=e.id}return e.prototype.setupOnce=function(){Object(le.b)((function(t){var n,o,c;if(Object(l.b)().getIntegration(e)){if(!he.navigator&&!he.location&&!he.document)return t;var d=(null===(n=t.request)||void 0===n?void 0:n.url)||(null===(o=he.location)||void 0===o?void 0:o.href),h=(he.document||{}).referrer,f=(he.navigator||{}).userAgent,v=Object(r.a)(Object(r.a)(Object(r.a)({},null===(c=t.request)||void 0===c?void 0:c.headers),h&&{Referer:h}),f&&{"User-Agent":f}),m=Object(r.a)(Object(r.a)({},d&&{url:d}),{headers:v});return Object(r.a)(Object(r.a)({},t),{request:m})}return t}))},e.id="UserAgent",e}(),ve=[new o.a.InboundFilters,new o.a.FunctionToString,new ce,new ae,new ue,new pe,new de,new fe];function me(e){if(void 0===e&&(e={}),void 0===e.defaultIntegrations&&(e.defaultIntegrations=ve),void 0===e.release){var t=Object(d.e)();t.SENTRY_RELEASE&&t.SENTRY_RELEASE.id&&(e.release=t.SENTRY_RELEASE.id)}void 0===e.autoSessionTracking&&(e.autoSessionTracking=!0),Object(c.a)(oe,e),e.autoSessionTracking&&function(){if(void 0===Object(d.e)().document)return void h.a.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");var e=Object(l.b)();if("function"!=typeof e.startSession||"function"!=typeof e.captureSession)return;e.startSession({ignoreDuration:!0}),e.captureSession(),Object(v.a)({callback:function(t){var n=t.from,r=t.to;void 0!==n&&n!==r&&(e.startSession({ignoreDuration:!0}),e.captureSession())},type:"history"})}()}}}]);