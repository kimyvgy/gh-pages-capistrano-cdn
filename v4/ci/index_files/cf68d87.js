(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{248:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return l}));var r=n(0),o=n(17),c=n(144),h=n(120),_=n(29),d=function(){function t(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._user={},this._tags={},this._extra={},this._contexts={}}return t.clone=function(e){var n=new t;return e&&(n._breadcrumbs=Object(r.e)(e._breadcrumbs),n._tags=Object(r.a)({},e._tags),n._extra=Object(r.a)({},e._extra),n._contexts=Object(r.a)({},e._contexts),n._user=e._user,n._level=e._level,n._span=e._span,n._session=e._session,n._transactionName=e._transactionName,n._fingerprint=e._fingerprint,n._eventProcessors=Object(r.e)(e._eventProcessors),n._requestSession=e._requestSession),n},t.prototype.addScopeListener=function(t){this._scopeListeners.push(t)},t.prototype.addEventProcessor=function(t){return this._eventProcessors.push(t),this},t.prototype.setUser=function(t){return this._user=t||{},this._session&&this._session.update({user:t}),this._notifyScopeListeners(),this},t.prototype.getUser=function(){return this._user},t.prototype.getRequestSession=function(){return this._requestSession},t.prototype.setRequestSession=function(t){return this._requestSession=t,this},t.prototype.setTags=function(t){return this._tags=Object(r.a)(Object(r.a)({},this._tags),t),this._notifyScopeListeners(),this},t.prototype.setTag=function(t,e){var n;return this._tags=Object(r.a)(Object(r.a)({},this._tags),((n={})[t]=e,n)),this._notifyScopeListeners(),this},t.prototype.setExtras=function(t){return this._extra=Object(r.a)(Object(r.a)({},this._extra),t),this._notifyScopeListeners(),this},t.prototype.setExtra=function(t,e){var n;return this._extra=Object(r.a)(Object(r.a)({},this._extra),((n={})[t]=e,n)),this._notifyScopeListeners(),this},t.prototype.setFingerprint=function(t){return this._fingerprint=t,this._notifyScopeListeners(),this},t.prototype.setLevel=function(t){return this._level=t,this._notifyScopeListeners(),this},t.prototype.setTransactionName=function(t){return this._transactionName=t,this._notifyScopeListeners(),this},t.prototype.setTransaction=function(t){return this.setTransactionName(t)},t.prototype.setContext=function(t,e){var n;return null===e?delete this._contexts[t]:this._contexts=Object(r.a)(Object(r.a)({},this._contexts),((n={})[t]=e,n)),this._notifyScopeListeners(),this},t.prototype.setSpan=function(span){return this._span=span,this._notifyScopeListeners(),this},t.prototype.getSpan=function(){return this._span},t.prototype.getTransaction=function(){var t,e,n,r,span=this.getSpan();return(null===(t=span)||void 0===t?void 0:t.transaction)?null===(e=span)||void 0===e?void 0:e.transaction:(null===(r=null===(n=span)||void 0===n?void 0:n.spanRecorder)||void 0===r?void 0:r.spans[0])?span.spanRecorder.spans[0]:void 0},t.prototype.setSession=function(t){return t?this._session=t:delete this._session,this._notifyScopeListeners(),this},t.prototype.getSession=function(){return this._session},t.prototype.update=function(e){if(!e)return this;if("function"==typeof e){var n=e(this);return n instanceof t?n:this}return e instanceof t?(this._tags=Object(r.a)(Object(r.a)({},this._tags),e._tags),this._extra=Object(r.a)(Object(r.a)({},this._extra),e._extra),this._contexts=Object(r.a)(Object(r.a)({},this._contexts),e._contexts),e._user&&Object.keys(e._user).length&&(this._user=e._user),e._level&&(this._level=e._level),e._fingerprint&&(this._fingerprint=e._fingerprint),e._requestSession&&(this._requestSession=e._requestSession)):Object(o.h)(e)&&(e=e,this._tags=Object(r.a)(Object(r.a)({},this._tags),e.tags),this._extra=Object(r.a)(Object(r.a)({},this._extra),e.extra),this._contexts=Object(r.a)(Object(r.a)({},this._contexts),e.contexts),e.user&&(this._user=e.user),e.level&&(this._level=e.level),e.fingerprint&&(this._fingerprint=e.fingerprint),e.requestSession&&(this._requestSession=e.requestSession)),this},t.prototype.clear=function(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this},t.prototype.addBreadcrumb=function(t,e){var n="number"==typeof e?Math.min(e,100):100;if(n<=0)return this;var o=Object(r.a)({timestamp:Object(c.b)()},t);return this._breadcrumbs=Object(r.e)(this._breadcrumbs,[o]).slice(-n),this._notifyScopeListeners(),this},t.prototype.clearBreadcrumbs=function(){return this._breadcrumbs=[],this._notifyScopeListeners(),this},t.prototype.applyToEvent=function(t,e){var n;if(this._extra&&Object.keys(this._extra).length&&(t.extra=Object(r.a)(Object(r.a)({},this._extra),t.extra)),this._tags&&Object.keys(this._tags).length&&(t.tags=Object(r.a)(Object(r.a)({},this._tags),t.tags)),this._user&&Object.keys(this._user).length&&(t.user=Object(r.a)(Object(r.a)({},this._user),t.user)),this._contexts&&Object.keys(this._contexts).length&&(t.contexts=Object(r.a)(Object(r.a)({},this._contexts),t.contexts)),this._level&&(t.level=this._level),this._transactionName&&(t.transaction=this._transactionName),this._span){t.contexts=Object(r.a)({trace:this._span.getTraceContext()},t.contexts);var o=null===(n=this._span.transaction)||void 0===n?void 0:n.name;o&&(t.tags=Object(r.a)({transaction:o},t.tags))}return this._applyFingerprint(t),t.breadcrumbs=Object(r.e)(t.breadcrumbs||[],this._breadcrumbs),t.breadcrumbs=t.breadcrumbs.length>0?t.breadcrumbs:void 0,this._notifyEventProcessors(Object(r.e)(f(),this._eventProcessors),t,e)},t.prototype._notifyEventProcessors=function(t,e,n,c){var _=this;return void 0===c&&(c=0),new h.a((function(h,d){var f=t[c];if(null===e||"function"!=typeof f)h(e);else{var l=f(Object(r.a)({},e),n);Object(o.m)(l)?l.then((function(e){return _._notifyEventProcessors(t,e,n,c+1).then(h)})).then(null,d):_._notifyEventProcessors(t,l,n,c+1).then(h).then(null,d)}}))},t.prototype._notifyScopeListeners=function(){var t=this;this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach((function(e){e(t)})),this._notifyingListeners=!1)},t.prototype._applyFingerprint=function(t){t.fingerprint=t.fingerprint?Array.isArray(t.fingerprint)?t.fingerprint:[t.fingerprint]:[],this._fingerprint&&(t.fingerprint=t.fingerprint.concat(this._fingerprint)),t.fingerprint&&!t.fingerprint.length&&delete t.fingerprint},t}();function f(){var t=Object(_.e)();return t.__SENTRY__=t.__SENTRY__||{},t.__SENTRY__.globalEventProcessors=t.__SENTRY__.globalEventProcessors||[],t.__SENTRY__.globalEventProcessors}function l(t){f().push(t)}},99:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"c",(function(){return v})),n.d(e,"b",(function(){return S}));var r=n(0),o=n(914),c=n(29),time=n(144),h=n(13),_=n(63),d=n(248),object=n(44),f=function(){function t(t){this.errors=0,this.sid=Object(c.i)(),this.duration=0,this.status=o.a.Ok,this.init=!0,this.ignoreDuration=!1;var e=Object(time.c)();this.timestamp=e,this.started=e,t&&this.update(t)}return t.prototype.update=function(t){if(void 0===t&&(t={}),t.user&&(!this.ipAddress&&t.user.ip_address&&(this.ipAddress=t.user.ip_address),this.did||t.did||(this.did=t.user.id||t.user.email||t.user.username)),this.timestamp=t.timestamp||Object(time.c)(),t.ignoreDuration&&(this.ignoreDuration=t.ignoreDuration),t.sid&&(this.sid=32===t.sid.length?t.sid:Object(c.i)()),void 0!==t.init&&(this.init=t.init),!this.did&&t.did&&(this.did=""+t.did),"number"==typeof t.started&&(this.started=t.started),this.ignoreDuration)this.duration=void 0;else if("number"==typeof t.duration)this.duration=t.duration;else{var e=this.timestamp-this.started;this.duration=e>=0?e:0}t.release&&(this.release=t.release),t.environment&&(this.environment=t.environment),!this.ipAddress&&t.ipAddress&&(this.ipAddress=t.ipAddress),!this.userAgent&&t.userAgent&&(this.userAgent=t.userAgent),"number"==typeof t.errors&&(this.errors=t.errors),t.status&&(this.status=t.status)},t.prototype.close=function(t){t?this.update({status:t}):this.status===o.a.Ok?this.update({status:o.a.Exited}):this.update()},t.prototype.toJSON=function(){return Object(object.a)({sid:""+this.sid,init:this.init,started:new Date(1e3*this.started).toISOString(),timestamp:new Date(1e3*this.timestamp).toISOString(),status:this.status,errors:this.errors,did:"number"==typeof this.did||"string"==typeof this.did?""+this.did:void 0,duration:this.duration,attrs:Object(object.a)({release:this.release,environment:this.environment,ip_address:this.ipAddress,user_agent:this.userAgent})})},t}(),l=function(){function t(t,e,n){void 0===e&&(e=new d.a),void 0===n&&(n=4),this._version=n,this._stack=[{}],this.getStackTop().scope=e,t&&this.bindClient(t)}return t.prototype.isOlderThan=function(t){return this._version<t},t.prototype.bindClient=function(t){this.getStackTop().client=t,t&&t.setupIntegrations&&t.setupIntegrations()},t.prototype.pushScope=function(){var t=d.a.clone(this.getScope());return this.getStack().push({client:this.getClient(),scope:t}),t},t.prototype.popScope=function(){return!(this.getStack().length<=1)&&!!this.getStack().pop()},t.prototype.withScope=function(t){var e=this.pushScope();try{t(e)}finally{this.popScope()}},t.prototype.getClient=function(){return this.getStackTop().client},t.prototype.getScope=function(){return this.getStackTop().scope},t.prototype.getStack=function(){return this._stack},t.prototype.getStackTop=function(){return this._stack[this._stack.length-1]},t.prototype.captureException=function(t,e){var n=this._lastEventId=Object(c.i)(),o=e;if(!e){var h=void 0;try{throw new Error("Sentry syntheticException")}catch(t){h=t}o={originalException:t,syntheticException:h}}return this._invokeClient("captureException",t,Object(r.a)(Object(r.a)({},o),{event_id:n})),n},t.prototype.captureMessage=function(t,e,n){var o=this._lastEventId=Object(c.i)(),h=n;if(!n){var _=void 0;try{throw new Error(t)}catch(t){_=t}h={originalException:t,syntheticException:_}}return this._invokeClient("captureMessage",t,e,Object(r.a)(Object(r.a)({},h),{event_id:o})),o},t.prototype.captureEvent=function(t,e){var n=this._lastEventId=Object(c.i)();return this._invokeClient("captureEvent",t,Object(r.a)(Object(r.a)({},e),{event_id:n})),n},t.prototype.lastEventId=function(){return this._lastEventId},t.prototype.addBreadcrumb=function(t,e){var n=this.getStackTop(),o=n.scope,h=n.client;if(o&&h){var _=h.getOptions&&h.getOptions()||{},d=_.beforeBreadcrumb,f=void 0===d?null:d,l=_.maxBreadcrumbs,v=void 0===l?100:l;if(!(v<=0)){var y=Object(time.b)(),S=Object(r.a)({timestamp:y},t),O=f?Object(c.c)((function(){return f(S,e)})):S;null!==O&&o.addBreadcrumb(O,v)}}},t.prototype.setUser=function(t){var e=this.getScope();e&&e.setUser(t)},t.prototype.setTags=function(t){var e=this.getScope();e&&e.setTags(t)},t.prototype.setExtras=function(t){var e=this.getScope();e&&e.setExtras(t)},t.prototype.setTag=function(t,e){var n=this.getScope();n&&n.setTag(t,e)},t.prototype.setExtra=function(t,e){var n=this.getScope();n&&n.setExtra(t,e)},t.prototype.setContext=function(t,e){var n=this.getScope();n&&n.setContext(t,e)},t.prototype.configureScope=function(t){var e=this.getStackTop(),n=e.scope,r=e.client;n&&r&&t(n)},t.prototype.run=function(t){var e=y(this);try{t(this)}finally{y(e)}},t.prototype.getIntegration=function(t){var e=this.getClient();if(!e)return null;try{return e.getIntegration(t)}catch(e){return h.a.warn("Cannot retrieve integration "+t.id+" from the current Hub"),null}},t.prototype.startSpan=function(t){return this._callExtensionMethod("startSpan",t)},t.prototype.startTransaction=function(t,e){return this._callExtensionMethod("startTransaction",t,e)},t.prototype.traceHeaders=function(){return this._callExtensionMethod("traceHeaders")},t.prototype.captureSession=function(t){if(void 0===t&&(t=!1),t)return this.endSession();this._sendSessionUpdate()},t.prototype.endSession=function(){var t,e,n,r,o;null===(n=null===(e=null===(t=this.getStackTop())||void 0===t?void 0:t.scope)||void 0===e?void 0:e.getSession())||void 0===n||n.close(),this._sendSessionUpdate(),null===(o=null===(r=this.getStackTop())||void 0===r?void 0:r.scope)||void 0===o||o.setSession()},t.prototype.startSession=function(t){var e=this.getStackTop(),n=e.scope,h=e.client,_=h&&h.getOptions()||{},d=_.release,l=_.environment,v=(Object(c.e)().navigator||{}).userAgent,y=new f(Object(r.a)(Object(r.a)(Object(r.a)({release:d,environment:l},n&&{user:n.getUser()}),v&&{userAgent:v}),t));if(n){var S=n.getSession&&n.getSession();S&&S.status===o.a.Ok&&S.update({status:o.a.Exited}),this.endSession(),n.setSession(y)}return y},t.prototype._sendSessionUpdate=function(){var t=this.getStackTop(),e=t.scope,n=t.client;if(e){var r=e.getSession&&e.getSession();r&&n&&n.captureSession&&n.captureSession(r)}},t.prototype._invokeClient=function(t){for(var e,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var c=this.getStackTop(),h=c.scope,_=c.client;_&&_[t]&&(e=_)[t].apply(e,Object(r.e)(n,[h]))},t.prototype._callExtensionMethod=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=v(),o=r.__SENTRY__;if(o&&o.extensions&&"function"==typeof o.extensions[t])return o.extensions[t].apply(this,e);h.a.warn("Extension method "+t+" couldn't be found, doing nothing.")},t}();function v(){var t=Object(c.e)();return t.__SENTRY__=t.__SENTRY__||{extensions:{},hub:void 0},t}function y(t){var e=v(),n=j(e);return x(e,t),n}function S(){var t=v();return O(t)&&!j(t).isOlderThan(4)||x(t,new l),Object(_.b)()?function(t){var e,n,r;try{var o=null===(r=null===(n=null===(e=v().__SENTRY__)||void 0===e?void 0:e.extensions)||void 0===n?void 0:n.domain)||void 0===r?void 0:r.active;if(!o)return j(t);if(!O(o)||j(o).isOlderThan(4)){var c=j(t).getStackTop();x(o,new l(c.client,d.a.clone(c.scope)))}return j(o)}catch(e){return j(t)}}(t):j(t)}function O(t){return!!(t&&t.__SENTRY__&&t.__SENTRY__.hub)}function j(t){return t&&t.__SENTRY__&&t.__SENTRY__.hub||(t.__SENTRY__=t.__SENTRY__||{},t.__SENTRY__.hub=new l),t.__SENTRY__.hub}function x(t,e){return!!t&&(t.__SENTRY__=t.__SENTRY__||{},t.__SENTRY__.hub=e,!0)}}}]);