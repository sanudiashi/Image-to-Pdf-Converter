var im=t=>{throw TypeError(t)};var wu=(t,e,n)=>e.has(t)||im("Cannot "+n);var Y=(t,e,n)=>(wu(t,e,"read from private field"),n?n.call(t):e.get(t)),qe=(t,e,n)=>e.has(t)?im("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Ne=(t,e,n,i)=>(wu(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),bt=(t,e,n)=>(wu(t,e,"access private method"),n);var sl=(t,e,n,i)=>({set _(r){Ne(t,e,r,n)},get _(){return Y(t,e,i)}});function MS(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Rp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Qv={exports:{}},Qc={},Zv={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ja=Symbol.for("react.element"),wS=Symbol.for("react.portal"),TS=Symbol.for("react.fragment"),bS=Symbol.for("react.strict_mode"),AS=Symbol.for("react.profiler"),CS=Symbol.for("react.provider"),RS=Symbol.for("react.context"),PS=Symbol.for("react.forward_ref"),DS=Symbol.for("react.suspense"),LS=Symbol.for("react.memo"),NS=Symbol.for("react.lazy"),rm=Symbol.iterator;function IS(t){return t===null||typeof t!="object"?null:(t=rm&&t[rm]||t["@@iterator"],typeof t=="function"?t:null)}var Jv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ex=Object.assign,tx={};function Os(t,e,n){this.props=t,this.context=e,this.refs=tx,this.updater=n||Jv}Os.prototype.isReactComponent={};Os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function nx(){}nx.prototype=Os.prototype;function Pp(t,e,n){this.props=t,this.context=e,this.refs=tx,this.updater=n||Jv}var Dp=Pp.prototype=new nx;Dp.constructor=Pp;ex(Dp,Os.prototype);Dp.isPureReactComponent=!0;var om=Array.isArray,ix=Object.prototype.hasOwnProperty,Lp={current:null},rx={key:!0,ref:!0,__self:!0,__source:!0};function ox(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)ix.call(e,i)&&!rx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ja,type:t,key:o,ref:s,props:r,_owner:Lp.current}}function US(t,e){return{$$typeof:ja,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Np(t){return typeof t=="object"&&t!==null&&t.$$typeof===ja}function FS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sm=/\/+/g;function Tu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?FS(""+t.key):e.toString(36)}function Zl(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ja:case wS:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Tu(s,0):i,om(r)?(n="",t!=null&&(n=t.replace(sm,"$&/")+"/"),Zl(r,e,n,"",function(c){return c})):r!=null&&(Np(r)&&(r=US(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(sm,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",om(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+Tu(o,a);s+=Zl(o,e,n,l,r)}else if(l=IS(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+Tu(o,a++),s+=Zl(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function al(t,e,n){if(t==null)return t;var i=[],r=0;return Zl(t,i,"","",function(o){return e.call(n,o,r++)}),i}function OS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},Jl={transition:null},kS={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:Jl,ReactCurrentOwner:Lp};function sx(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:al,forEach:function(t,e,n){al(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return al(t,function(){e++}),e},toArray:function(t){return al(t,function(e){return e})||[]},only:function(t){if(!Np(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Os;Xe.Fragment=TS;Xe.Profiler=AS;Xe.PureComponent=Pp;Xe.StrictMode=bS;Xe.Suspense=DS;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kS;Xe.act=sx;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ex({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Lp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ix.call(e,l)&&!rx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ja,type:t.type,key:r,ref:o,props:i,_owner:s}};Xe.createContext=function(t){return t={$$typeof:RS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:CS,_context:t},t.Consumer=t};Xe.createElement=ox;Xe.createFactory=function(t){var e=ox.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:PS,render:t}};Xe.isValidElement=Np;Xe.lazy=function(t){return{$$typeof:NS,_payload:{_status:-1,_result:t},_init:OS}};Xe.memo=function(t,e){return{$$typeof:LS,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Jl.transition;Jl.transition={};try{t()}finally{Jl.transition=e}};Xe.unstable_act=sx;Xe.useCallback=function(t,e){return an.current.useCallback(t,e)};Xe.useContext=function(t){return an.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return an.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return an.current.useEffect(t,e)};Xe.useId=function(){return an.current.useId()};Xe.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return an.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};Xe.useRef=function(t){return an.current.useRef(t)};Xe.useState=function(t){return an.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return an.current.useTransition()};Xe.version="18.3.1";Zv.exports=Xe;var I=Zv.exports;const Ni=Rp(I),zS=MS({__proto__:null,default:Ni},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BS=I,HS=Symbol.for("react.element"),VS=Symbol.for("react.fragment"),GS=Object.prototype.hasOwnProperty,WS=BS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jS={key:!0,ref:!0,__self:!0,__source:!0};function ax(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)GS.call(e,i)&&!jS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:HS,type:t,key:o,ref:s,props:r,_owner:WS.current}}Qc.Fragment=VS;Qc.jsx=ax;Qc.jsxs=ax;Qv.exports=Qc;var D=Qv.exports,lx={exports:{}},Ln={},cx={exports:{}},ux={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,q){var te=N.length;N.push(q);e:for(;0<te;){var oe=te-1>>>1,Se=N[oe];if(0<r(Se,q))N[oe]=q,N[te]=Se,te=oe;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var q=N[0],te=N.pop();if(te!==q){N[0]=te;e:for(var oe=0,Se=N.length,Be=Se>>>1;oe<Be;){var Q=2*(oe+1)-1,ae=N[Q],ue=Q+1,ce=N[ue];if(0>r(ae,te))ue<Se&&0>r(ce,ae)?(N[oe]=ce,N[ue]=te,oe=ue):(N[oe]=ae,N[Q]=te,oe=Q);else if(ue<Se&&0>r(ce,te))N[oe]=ce,N[ue]=te,oe=ue;else break e}}return q}function r(N,q){var te=N.sortIndex-q.sortIndex;return te!==0?te:N.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],c=[],d=1,f=null,p=3,m=!1,v=!1,_=!1,h=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=N)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function y(N){if(_=!1,x(N),!v)if(n(l)!==null)v=!0,Z(A);else{var q=n(c);q!==null&&ee(y,q.startTime-N)}}function A(N,q){v=!1,_&&(_=!1,u(C),C=-1),m=!0;var te=p;try{for(x(q),f=n(l);f!==null&&(!(f.expirationTime>q)||N&&!P());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,p=f.priorityLevel;var Se=oe(f.expirationTime<=q);q=t.unstable_now(),typeof Se=="function"?f.callback=Se:f===n(l)&&i(l),x(q)}else i(l);f=n(l)}if(f!==null)var Be=!0;else{var Q=n(c);Q!==null&&ee(y,Q.startTime-q),Be=!1}return Be}finally{f=null,p=te,m=!1}}var b=!1,T=null,C=-1,M=5,S=-1;function P(){return!(t.unstable_now()-S<M)}function z(){if(T!==null){var N=t.unstable_now();S=N;var q=!0;try{q=T(!0,N)}finally{q?G():(b=!1,T=null)}}else b=!1}var G;if(typeof g=="function")G=function(){g(z)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,K=B.port2;B.port1.onmessage=z,G=function(){K.postMessage(null)}}else G=function(){h(z,0)};function Z(N){T=N,b||(b=!0,G())}function ee(N,q){C=h(function(){N(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,Z(A))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(p){case 1:case 2:case 3:var q=3;break;default:q=p}var te=p;p=q;try{return N()}finally{p=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var te=p;p=N;try{return q()}finally{p=te}},t.unstable_scheduleCallback=function(N,q,te){var oe=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?oe+te:oe):te=oe,N){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=te+Se,N={id:d++,callback:q,priorityLevel:N,startTime:te,expirationTime:Se,sortIndex:-1},te>oe?(N.sortIndex=te,e(c,N),n(l)===null&&N===n(c)&&(_?(u(C),C=-1):_=!0,ee(y,te-oe))):(N.sortIndex=Se,e(l,N),v||m||(v=!0,Z(A))),N},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(N){var q=p;return function(){var te=p;p=q;try{return N.apply(this,arguments)}finally{p=te}}}})(ux);cx.exports=ux;var XS=cx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qS=I,Dn=XS;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dx=new Set,Ea={};function Mo(t,e){ys(t,e),ys(t+"Capture",e)}function ys(t,e){for(Ea[t]=e,t=0;t<e.length;t++)dx.add(e[t])}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ud=Object.prototype.hasOwnProperty,$S=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,am={},lm={};function YS(t){return Ud.call(lm,t)?!0:Ud.call(am,t)?!1:$S.test(t)?lm[t]=!0:(am[t]=!0,!1)}function KS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function QS(t,e,n,i){if(e===null||typeof e>"u"||KS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Wt[t]=new ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Wt[e]=new ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Wt[t]=new ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Wt[t]=new ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Wt[t]=new ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Wt[t]=new ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Wt[t]=new ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Wt[t]=new ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Wt[t]=new ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ip=/[\-:]([a-z])/g;function Up(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ip,Up);Wt[e]=new ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ip,Up);Wt[e]=new ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ip,Up);Wt[e]=new ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Wt[t]=new ln(t,1,!1,t.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Wt[t]=new ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fp(t,e,n,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(QS(e,n,r,i)&&(n=null),i||r===null?YS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Zi=qS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ll=Symbol.for("react.element"),Vo=Symbol.for("react.portal"),Go=Symbol.for("react.fragment"),Op=Symbol.for("react.strict_mode"),Fd=Symbol.for("react.profiler"),fx=Symbol.for("react.provider"),px=Symbol.for("react.context"),kp=Symbol.for("react.forward_ref"),Od=Symbol.for("react.suspense"),kd=Symbol.for("react.suspense_list"),zp=Symbol.for("react.memo"),cr=Symbol.for("react.lazy"),hx=Symbol.for("react.offscreen"),cm=Symbol.iterator;function Ws(t){return t===null||typeof t!="object"?null:(t=cm&&t[cm]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,bu;function sa(t){if(bu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bu=e&&e[1]||""}return`
`+bu+t}var Au=!1;function Cu(t,e){if(!t||Au)return"";Au=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Au=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?sa(t):""}function ZS(t){switch(t.tag){case 5:return sa(t.type);case 16:return sa("Lazy");case 13:return sa("Suspense");case 19:return sa("SuspenseList");case 0:case 2:case 15:return t=Cu(t.type,!1),t;case 11:return t=Cu(t.type.render,!1),t;case 1:return t=Cu(t.type,!0),t;default:return""}}function zd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Go:return"Fragment";case Vo:return"Portal";case Fd:return"Profiler";case Op:return"StrictMode";case Od:return"Suspense";case kd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case px:return(t.displayName||"Context")+".Consumer";case fx:return(t._context.displayName||"Context")+".Provider";case kp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zp:return e=t.displayName||null,e!==null?e:zd(t.type)||"Memo";case cr:e=t._payload,t=t._init;try{return zd(t(e))}catch{}}return null}function JS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zd(e);case 8:return e===Op?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function eE(t){var e=mx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function cl(t){t._valueTracker||(t._valueTracker=eE(t))}function gx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=mx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function _c(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Bd(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function um(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vx(t,e){e=e.checked,e!=null&&Fp(t,"checked",e,!1)}function Hd(t,e){vx(t,e);var n=Nr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vd(t,e.type,Nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vd(t,e,n){(e!=="number"||_c(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var aa=Array.isArray;function ts(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Nr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Gd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(aa(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Nr(n)}}function xx(t,e){var n=Nr(e.value),i=Nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function pm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function _x(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Wd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?_x(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ul,yx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ul=ul||document.createElement("div"),ul.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ul.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var da={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tE=["Webkit","ms","Moz","O"];Object.keys(da).forEach(function(t){tE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),da[e]=da[t]})});function Sx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||da.hasOwnProperty(t)&&da[t]?(""+e).trim():e+"px"}function Ex(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Sx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var nE=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function jd(t,e){if(e){if(nE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function Xd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qd=null;function Bp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var $d=null,ns=null,is=null;function hm(t){if(t=$a(t)){if(typeof $d!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=nu(e),$d(t.stateNode,t.type,e))}}function Mx(t){ns?is?is.push(t):is=[t]:ns=t}function wx(){if(ns){var t=ns,e=is;if(is=ns=null,hm(t),e)for(t=0;t<e.length;t++)hm(e[t])}}function Tx(t,e){return t(e)}function bx(){}var Ru=!1;function Ax(t,e,n){if(Ru)return t(e,n);Ru=!0;try{return Tx(t,e,n)}finally{Ru=!1,(ns!==null||is!==null)&&(bx(),wx())}}function wa(t,e){var n=t.stateNode;if(n===null)return null;var i=nu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Yd=!1;if(ji)try{var js={};Object.defineProperty(js,"passive",{get:function(){Yd=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{Yd=!1}function iE(t,e,n,i,r,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var fa=!1,yc=null,Sc=!1,Kd=null,rE={onError:function(t){fa=!0,yc=t}};function oE(t,e,n,i,r,o,s,a,l){fa=!1,yc=null,iE.apply(rE,arguments)}function sE(t,e,n,i,r,o,s,a,l){if(oE.apply(this,arguments),fa){if(fa){var c=yc;fa=!1,yc=null}else throw Error(ie(198));Sc||(Sc=!0,Kd=c)}}function wo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Cx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function mm(t){if(wo(t)!==t)throw Error(ie(188))}function aE(t){var e=t.alternate;if(!e){if(e=wo(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return mm(r),t;if(o===i)return mm(r),e;o=o.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Rx(t){return t=aE(t),t!==null?Px(t):null}function Px(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Px(t);if(e!==null)return e;t=t.sibling}return null}var Dx=Dn.unstable_scheduleCallback,gm=Dn.unstable_cancelCallback,lE=Dn.unstable_shouldYield,cE=Dn.unstable_requestPaint,At=Dn.unstable_now,uE=Dn.unstable_getCurrentPriorityLevel,Hp=Dn.unstable_ImmediatePriority,Lx=Dn.unstable_UserBlockingPriority,Ec=Dn.unstable_NormalPriority,dE=Dn.unstable_LowPriority,Nx=Dn.unstable_IdlePriority,Zc=null,Si=null;function fE(t){if(Si&&typeof Si.onCommitFiberRoot=="function")try{Si.onCommitFiberRoot(Zc,t,void 0,(t.current.flags&128)===128)}catch{}}var ai=Math.clz32?Math.clz32:mE,pE=Math.log,hE=Math.LN2;function mE(t){return t>>>=0,t===0?32:31-(pE(t)/hE|0)|0}var dl=64,fl=4194304;function la(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Mc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=la(a):(o&=s,o!==0&&(i=la(o)))}else s=n&~r,s!==0?i=la(s):o!==0&&(i=la(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ai(e),r=1<<n,i|=t[n],e&=~r;return i}function gE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-ai(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=gE(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Qd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ix(){var t=dl;return dl<<=1,!(dl&4194240)&&(dl=64),t}function Pu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ai(e),t[e]=n}function xE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ai(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Vp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ai(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function Ux(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Fx,Gp,Ox,kx,zx,Zd=!1,pl=[],Mr=null,wr=null,Tr=null,Ta=new Map,ba=new Map,dr=[],_E="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vm(t,e){switch(t){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(e.pointerId)}}function Xs(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=$a(e),e!==null&&Gp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function yE(t,e,n,i,r){switch(e){case"focusin":return Mr=Xs(Mr,t,e,n,i,r),!0;case"dragenter":return wr=Xs(wr,t,e,n,i,r),!0;case"mouseover":return Tr=Xs(Tr,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Ta.set(o,Xs(Ta.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,ba.set(o,Xs(ba.get(o)||null,t,e,n,i,r)),!0}return!1}function Bx(t){var e=no(t.target);if(e!==null){var n=wo(e);if(n!==null){if(e=n.tag,e===13){if(e=Cx(n),e!==null){t.blockedOn=e,zx(t.priority,function(){Ox(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ec(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Jd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);qd=i,n.target.dispatchEvent(i),qd=null}else return e=$a(n),e!==null&&Gp(e),t.blockedOn=n,!1;e.shift()}return!0}function xm(t,e,n){ec(t)&&n.delete(e)}function SE(){Zd=!1,Mr!==null&&ec(Mr)&&(Mr=null),wr!==null&&ec(wr)&&(wr=null),Tr!==null&&ec(Tr)&&(Tr=null),Ta.forEach(xm),ba.forEach(xm)}function qs(t,e){t.blockedOn===e&&(t.blockedOn=null,Zd||(Zd=!0,Dn.unstable_scheduleCallback(Dn.unstable_NormalPriority,SE)))}function Aa(t){function e(r){return qs(r,t)}if(0<pl.length){qs(pl[0],t);for(var n=1;n<pl.length;n++){var i=pl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Mr!==null&&qs(Mr,t),wr!==null&&qs(wr,t),Tr!==null&&qs(Tr,t),Ta.forEach(e),ba.forEach(e),n=0;n<dr.length;n++)i=dr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)Bx(n),n.blockedOn===null&&dr.shift()}var rs=Zi.ReactCurrentBatchConfig,wc=!0;function EE(t,e,n,i){var r=lt,o=rs.transition;rs.transition=null;try{lt=1,Wp(t,e,n,i)}finally{lt=r,rs.transition=o}}function ME(t,e,n,i){var r=lt,o=rs.transition;rs.transition=null;try{lt=4,Wp(t,e,n,i)}finally{lt=r,rs.transition=o}}function Wp(t,e,n,i){if(wc){var r=Jd(t,e,n,i);if(r===null)Bu(t,e,i,Tc,n),vm(t,i);else if(yE(r,t,e,n,i))i.stopPropagation();else if(vm(t,i),e&4&&-1<_E.indexOf(t)){for(;r!==null;){var o=$a(r);if(o!==null&&Fx(o),o=Jd(t,e,n,i),o===null&&Bu(t,e,i,Tc,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Bu(t,e,i,null,n)}}var Tc=null;function Jd(t,e,n,i){if(Tc=null,t=Bp(i),t=no(t),t!==null)if(e=wo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Cx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tc=t,null}function Hx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uE()){case Hp:return 1;case Lx:return 4;case Ec:case dE:return 16;case Nx:return 536870912;default:return 16}default:return 16}}var Sr=null,jp=null,tc=null;function Vx(){if(tc)return tc;var t,e=jp,n=e.length,i,r="value"in Sr?Sr.value:Sr.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return tc=r.slice(t,1<i?1-i:void 0)}function nc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function hl(){return!0}function _m(){return!1}function Nn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?hl:_m,this.isPropagationStopped=_m,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),e}var ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xp=Nn(ks),qa=St({},ks,{view:0,detail:0}),wE=Nn(qa),Du,Lu,$s,Jc=St({},qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(Du=t.screenX-$s.screenX,Lu=t.screenY-$s.screenY):Lu=Du=0,$s=t),Du)},movementY:function(t){return"movementY"in t?t.movementY:Lu}}),ym=Nn(Jc),TE=St({},Jc,{dataTransfer:0}),bE=Nn(TE),AE=St({},qa,{relatedTarget:0}),Nu=Nn(AE),CE=St({},ks,{animationName:0,elapsedTime:0,pseudoElement:0}),RE=Nn(CE),PE=St({},ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),DE=Nn(PE),LE=St({},ks,{data:0}),Sm=Nn(LE),NE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},IE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=UE[t])?!!e[t]:!1}function qp(){return FE}var OE=St({},qa,{key:function(t){if(t.key){var e=NE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?IE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qp,charCode:function(t){return t.type==="keypress"?nc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kE=Nn(OE),zE=St({},Jc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Em=Nn(zE),BE=St({},qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qp}),HE=Nn(BE),VE=St({},ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),GE=Nn(VE),WE=St({},Jc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jE=Nn(WE),XE=[9,13,27,32],$p=ji&&"CompositionEvent"in window,pa=null;ji&&"documentMode"in document&&(pa=document.documentMode);var qE=ji&&"TextEvent"in window&&!pa,Gx=ji&&(!$p||pa&&8<pa&&11>=pa),Mm=" ",wm=!1;function Wx(t,e){switch(t){case"keyup":return XE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wo=!1;function $E(t,e){switch(t){case"compositionend":return jx(e);case"keypress":return e.which!==32?null:(wm=!0,Mm);case"textInput":return t=e.data,t===Mm&&wm?null:t;default:return null}}function YE(t,e){if(Wo)return t==="compositionend"||!$p&&Wx(t,e)?(t=Vx(),tc=jp=Sr=null,Wo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gx&&e.locale!=="ko"?null:e.data;default:return null}}var KE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!KE[t.type]:e==="textarea"}function Xx(t,e,n,i){Mx(i),e=bc(e,"onChange"),0<e.length&&(n=new Xp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ha=null,Ca=null;function QE(t){i_(t,0)}function eu(t){var e=qo(t);if(gx(e))return t}function ZE(t,e){if(t==="change")return e}var qx=!1;if(ji){var Iu;if(ji){var Uu="oninput"in document;if(!Uu){var bm=document.createElement("div");bm.setAttribute("oninput","return;"),Uu=typeof bm.oninput=="function"}Iu=Uu}else Iu=!1;qx=Iu&&(!document.documentMode||9<document.documentMode)}function Am(){ha&&(ha.detachEvent("onpropertychange",$x),Ca=ha=null)}function $x(t){if(t.propertyName==="value"&&eu(Ca)){var e=[];Xx(e,Ca,t,Bp(t)),Ax(QE,e)}}function JE(t,e,n){t==="focusin"?(Am(),ha=e,Ca=n,ha.attachEvent("onpropertychange",$x)):t==="focusout"&&Am()}function eM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return eu(Ca)}function tM(t,e){if(t==="click")return eu(e)}function nM(t,e){if(t==="input"||t==="change")return eu(e)}function iM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var di=typeof Object.is=="function"?Object.is:iM;function Ra(t,e){if(di(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ud.call(e,r)||!di(t[r],e[r]))return!1}return!0}function Cm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rm(t,e){var n=Cm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cm(n)}}function Yx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Yx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Kx(){for(var t=window,e=_c();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_c(t.document)}return e}function Yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rM(t){var e=Kx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Yx(n.ownerDocument.documentElement,n)){if(i!==null&&Yp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Rm(n,o);var s=Rm(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oM=ji&&"documentMode"in document&&11>=document.documentMode,jo=null,ef=null,ma=null,tf=!1;function Pm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tf||jo==null||jo!==_c(i)||(i=jo,"selectionStart"in i&&Yp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ma&&Ra(ma,i)||(ma=i,i=bc(ef,"onSelect"),0<i.length&&(e=new Xp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=jo)))}function ml(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xo={animationend:ml("Animation","AnimationEnd"),animationiteration:ml("Animation","AnimationIteration"),animationstart:ml("Animation","AnimationStart"),transitionend:ml("Transition","TransitionEnd")},Fu={},Qx={};ji&&(Qx=document.createElement("div").style,"AnimationEvent"in window||(delete Xo.animationend.animation,delete Xo.animationiteration.animation,delete Xo.animationstart.animation),"TransitionEvent"in window||delete Xo.transitionend.transition);function tu(t){if(Fu[t])return Fu[t];if(!Xo[t])return t;var e=Xo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Qx)return Fu[t]=e[n];return t}var Zx=tu("animationend"),Jx=tu("animationiteration"),e_=tu("animationstart"),t_=tu("transitionend"),n_=new Map,Dm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,e){n_.set(t,e),Mo(e,[t])}for(var Ou=0;Ou<Dm.length;Ou++){var ku=Dm[Ou],sM=ku.toLowerCase(),aM=ku[0].toUpperCase()+ku.slice(1);Or(sM,"on"+aM)}Or(Zx,"onAnimationEnd");Or(Jx,"onAnimationIteration");Or(e_,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(t_,"onTransitionEnd");ys("onMouseEnter",["mouseout","mouseover"]);ys("onMouseLeave",["mouseout","mouseover"]);ys("onPointerEnter",["pointerout","pointerover"]);ys("onPointerLeave",["pointerout","pointerover"]);Mo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lM=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function Lm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,sE(i,e,void 0,t),t.currentTarget=null}function i_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;Lm(r,a,c),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;Lm(r,a,c),o=l}}}if(Sc)throw t=Kd,Sc=!1,Kd=null,t}function ht(t,e){var n=e[af];n===void 0&&(n=e[af]=new Set);var i=t+"__bubble";n.has(i)||(r_(e,t,2,!1),n.add(i))}function zu(t,e,n){var i=0;e&&(i|=4),r_(n,t,i,e)}var gl="_reactListening"+Math.random().toString(36).slice(2);function Pa(t){if(!t[gl]){t[gl]=!0,dx.forEach(function(n){n!=="selectionchange"&&(lM.has(n)||zu(n,!1,t),zu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[gl]||(e[gl]=!0,zu("selectionchange",!1,e))}}function r_(t,e,n,i){switch(Hx(e)){case 1:var r=EE;break;case 4:r=ME;break;default:r=Wp}n=r.bind(null,e,n,t),r=void 0,!Yd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Bu(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=no(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}Ax(function(){var c=o,d=Bp(n),f=[];e:{var p=n_.get(t);if(p!==void 0){var m=Xp,v=t;switch(t){case"keypress":if(nc(n)===0)break e;case"keydown":case"keyup":m=kE;break;case"focusin":v="focus",m=Nu;break;case"focusout":v="blur",m=Nu;break;case"beforeblur":case"afterblur":m=Nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=bE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=HE;break;case Zx:case Jx:case e_:m=RE;break;case t_:m=GE;break;case"scroll":m=wE;break;case"wheel":m=jE;break;case"copy":case"cut":case"paste":m=DE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Em}var _=(e&4)!==0,h=!_&&t==="scroll",u=_?p!==null?p+"Capture":null:p;_=[];for(var g=c,x;g!==null;){x=g;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,u!==null&&(y=wa(g,u),y!=null&&_.push(Da(g,y,x)))),h)break;g=g.return}0<_.length&&(p=new m(p,v,null,n,d),f.push({event:p,listeners:_}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",p&&n!==qd&&(v=n.relatedTarget||n.fromElement)&&(no(v)||v[Xi]))break e;if((m||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?no(v):null,v!==null&&(h=wo(v),v!==h||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=c),m!==v)){if(_=ym,y="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(_=Em,y="onPointerLeave",u="onPointerEnter",g="pointer"),h=m==null?p:qo(m),x=v==null?p:qo(v),p=new _(y,g+"leave",m,n,d),p.target=h,p.relatedTarget=x,y=null,no(d)===c&&(_=new _(u,g+"enter",v,n,d),_.target=x,_.relatedTarget=h,y=_),h=y,m&&v)t:{for(_=m,u=v,g=0,x=_;x;x=Ao(x))g++;for(x=0,y=u;y;y=Ao(y))x++;for(;0<g-x;)_=Ao(_),g--;for(;0<x-g;)u=Ao(u),x--;for(;g--;){if(_===u||u!==null&&_===u.alternate)break t;_=Ao(_),u=Ao(u)}_=null}else _=null;m!==null&&Nm(f,p,m,_,!1),v!==null&&h!==null&&Nm(f,h,v,_,!0)}}e:{if(p=c?qo(c):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var A=ZE;else if(Tm(p))if(qx)A=nM;else{A=eM;var b=JE}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(A=tM);if(A&&(A=A(t,c))){Xx(f,A,n,d);break e}b&&b(t,p,c),t==="focusout"&&(b=p._wrapperState)&&b.controlled&&p.type==="number"&&Vd(p,"number",p.value)}switch(b=c?qo(c):window,t){case"focusin":(Tm(b)||b.contentEditable==="true")&&(jo=b,ef=c,ma=null);break;case"focusout":ma=ef=jo=null;break;case"mousedown":tf=!0;break;case"contextmenu":case"mouseup":case"dragend":tf=!1,Pm(f,n,d);break;case"selectionchange":if(oM)break;case"keydown":case"keyup":Pm(f,n,d)}var T;if($p)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Wo?Wx(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Gx&&n.locale!=="ko"&&(Wo||C!=="onCompositionStart"?C==="onCompositionEnd"&&Wo&&(T=Vx()):(Sr=d,jp="value"in Sr?Sr.value:Sr.textContent,Wo=!0)),b=bc(c,C),0<b.length&&(C=new Sm(C,t,null,n,d),f.push({event:C,listeners:b}),T?C.data=T:(T=jx(n),T!==null&&(C.data=T)))),(T=qE?$E(t,n):YE(t,n))&&(c=bc(c,"onBeforeInput"),0<c.length&&(d=new Sm("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=T))}i_(f,e)})}function Da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=wa(t,n),o!=null&&i.unshift(Da(t,o,r)),o=wa(t,e),o!=null&&i.push(Da(t,o,r))),t=t.return}return i}function Ao(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nm(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=wa(n,o),l!=null&&s.unshift(Da(n,l,a))):r||(l=wa(n,o),l!=null&&s.push(Da(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var cM=/\r\n?/g,uM=/\u0000|\uFFFD/g;function Im(t){return(typeof t=="string"?t:""+t).replace(cM,`
`).replace(uM,"")}function vl(t,e,n){if(e=Im(e),Im(t)!==e&&n)throw Error(ie(425))}function Ac(){}var nf=null,rf=null;function of(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var sf=typeof setTimeout=="function"?setTimeout:void 0,dM=typeof clearTimeout=="function"?clearTimeout:void 0,Um=typeof Promise=="function"?Promise:void 0,fM=typeof queueMicrotask=="function"?queueMicrotask:typeof Um<"u"?function(t){return Um.resolve(null).then(t).catch(pM)}:sf;function pM(t){setTimeout(function(){throw t})}function Hu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Aa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Aa(e)}function br(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zs=Math.random().toString(36).slice(2),_i="__reactFiber$"+zs,La="__reactProps$"+zs,Xi="__reactContainer$"+zs,af="__reactEvents$"+zs,hM="__reactListeners$"+zs,mM="__reactHandles$"+zs;function no(t){var e=t[_i];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xi]||n[_i]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fm(t);t!==null;){if(n=t[_i])return n;t=Fm(t)}return e}t=n,n=t.parentNode}return null}function $a(t){return t=t[_i]||t[Xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function nu(t){return t[La]||null}var lf=[],$o=-1;function kr(t){return{current:t}}function mt(t){0>$o||(t.current=lf[$o],lf[$o]=null,$o--)}function ft(t,e){$o++,lf[$o]=t.current,t.current=e}var Ir={},Jt=kr(Ir),hn=kr(!1),ho=Ir;function Ss(t,e){var n=t.type.contextTypes;if(!n)return Ir;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function mn(t){return t=t.childContextTypes,t!=null}function Cc(){mt(hn),mt(Jt)}function Om(t,e,n){if(Jt.current!==Ir)throw Error(ie(168));ft(Jt,e),ft(hn,n)}function o_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,JS(t)||"Unknown",r));return St({},n,i)}function Rc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ir,ho=Jt.current,ft(Jt,t),ft(hn,hn.current),!0}function km(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=o_(t,e,ho),i.__reactInternalMemoizedMergedChildContext=t,mt(hn),mt(Jt),ft(Jt,t)):mt(hn),ft(hn,n)}var Ui=null,iu=!1,Vu=!1;function s_(t){Ui===null?Ui=[t]:Ui.push(t)}function gM(t){iu=!0,s_(t)}function zr(){if(!Vu&&Ui!==null){Vu=!0;var t=0,e=lt;try{var n=Ui;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ui=null,iu=!1}catch(r){throw Ui!==null&&(Ui=Ui.slice(t+1)),Dx(Hp,zr),r}finally{lt=e,Vu=!1}}return null}var Yo=[],Ko=0,Pc=null,Dc=0,zn=[],Bn=0,mo=null,ki=1,zi="";function $r(t,e){Yo[Ko++]=Dc,Yo[Ko++]=Pc,Pc=t,Dc=e}function a_(t,e,n){zn[Bn++]=ki,zn[Bn++]=zi,zn[Bn++]=mo,mo=t;var i=ki;t=zi;var r=32-ai(i)-1;i&=~(1<<r),n+=1;var o=32-ai(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,ki=1<<32-ai(e)+r|n<<r|i,zi=o+t}else ki=1<<o|n<<r|i,zi=t}function Kp(t){t.return!==null&&($r(t,1),a_(t,1,0))}function Qp(t){for(;t===Pc;)Pc=Yo[--Ko],Yo[Ko]=null,Dc=Yo[--Ko],Yo[Ko]=null;for(;t===mo;)mo=zn[--Bn],zn[Bn]=null,zi=zn[--Bn],zn[Bn]=null,ki=zn[--Bn],zn[Bn]=null}var Pn=null,Rn=null,vt=!1,ri=null;function l_(t,e){var n=Vn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=br(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,Rn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mo!==null?{id:ki,overflow:zi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Vn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,Rn=null,!0):!1;default:return!1}}function cf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uf(t){if(vt){var e=Rn;if(e){var n=e;if(!zm(t,e)){if(cf(t))throw Error(ie(418));e=br(n.nextSibling);var i=Pn;e&&zm(t,e)?l_(i,n):(t.flags=t.flags&-4097|2,vt=!1,Pn=t)}}else{if(cf(t))throw Error(ie(418));t.flags=t.flags&-4097|2,vt=!1,Pn=t}}}function Bm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function xl(t){if(t!==Pn)return!1;if(!vt)return Bm(t),vt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!of(t.type,t.memoizedProps)),e&&(e=Rn)){if(cf(t))throw c_(),Error(ie(418));for(;e;)l_(t,e),e=br(e.nextSibling)}if(Bm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rn=br(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rn=null}}else Rn=Pn?br(t.stateNode.nextSibling):null;return!0}function c_(){for(var t=Rn;t;)t=br(t.nextSibling)}function Es(){Rn=Pn=null,vt=!1}function Zp(t){ri===null?ri=[t]:ri.push(t)}var vM=Zi.ReactCurrentBatchConfig;function Ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function _l(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hm(t){var e=t._init;return e(t._payload)}function u_(t){function e(u,g){if(t){var x=u.deletions;x===null?(u.deletions=[g],u.flags|=16):x.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Pr(u,g),u.index=0,u.sibling=null,u}function o(u,g,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<g?(u.flags|=2,g):x):(u.flags|=2,g)):(u.flags|=1048576,g)}function s(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,x,y){return g===null||g.tag!==6?(g=Yu(x,u.mode,y),g.return=u,g):(g=r(g,x),g.return=u,g)}function l(u,g,x,y){var A=x.type;return A===Go?d(u,g,x.props.children,y,x.key):g!==null&&(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===cr&&Hm(A)===g.type)?(y=r(g,x.props),y.ref=Ys(u,g,x),y.return=u,y):(y=cc(x.type,x.key,x.props,null,u.mode,y),y.ref=Ys(u,g,x),y.return=u,y)}function c(u,g,x,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=Ku(x,u.mode,y),g.return=u,g):(g=r(g,x.children||[]),g.return=u,g)}function d(u,g,x,y,A){return g===null||g.tag!==7?(g=po(x,u.mode,y,A),g.return=u,g):(g=r(g,x),g.return=u,g)}function f(u,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Yu(""+g,u.mode,x),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ll:return x=cc(g.type,g.key,g.props,null,u.mode,x),x.ref=Ys(u,null,g),x.return=u,x;case Vo:return g=Ku(g,u.mode,x),g.return=u,g;case cr:var y=g._init;return f(u,y(g._payload),x)}if(aa(g)||Ws(g))return g=po(g,u.mode,x,null),g.return=u,g;_l(u,g)}return null}function p(u,g,x,y){var A=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return A!==null?null:a(u,g,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ll:return x.key===A?l(u,g,x,y):null;case Vo:return x.key===A?c(u,g,x,y):null;case cr:return A=x._init,p(u,g,A(x._payload),y)}if(aa(x)||Ws(x))return A!==null?null:d(u,g,x,y,null);_l(u,x)}return null}function m(u,g,x,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(x)||null,a(g,u,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ll:return u=u.get(y.key===null?x:y.key)||null,l(g,u,y,A);case Vo:return u=u.get(y.key===null?x:y.key)||null,c(g,u,y,A);case cr:var b=y._init;return m(u,g,x,b(y._payload),A)}if(aa(y)||Ws(y))return u=u.get(x)||null,d(g,u,y,A,null);_l(g,y)}return null}function v(u,g,x,y){for(var A=null,b=null,T=g,C=g=0,M=null;T!==null&&C<x.length;C++){T.index>C?(M=T,T=null):M=T.sibling;var S=p(u,T,x[C],y);if(S===null){T===null&&(T=M);break}t&&T&&S.alternate===null&&e(u,T),g=o(S,g,C),b===null?A=S:b.sibling=S,b=S,T=M}if(C===x.length)return n(u,T),vt&&$r(u,C),A;if(T===null){for(;C<x.length;C++)T=f(u,x[C],y),T!==null&&(g=o(T,g,C),b===null?A=T:b.sibling=T,b=T);return vt&&$r(u,C),A}for(T=i(u,T);C<x.length;C++)M=m(T,u,C,x[C],y),M!==null&&(t&&M.alternate!==null&&T.delete(M.key===null?C:M.key),g=o(M,g,C),b===null?A=M:b.sibling=M,b=M);return t&&T.forEach(function(P){return e(u,P)}),vt&&$r(u,C),A}function _(u,g,x,y){var A=Ws(x);if(typeof A!="function")throw Error(ie(150));if(x=A.call(x),x==null)throw Error(ie(151));for(var b=A=null,T=g,C=g=0,M=null,S=x.next();T!==null&&!S.done;C++,S=x.next()){T.index>C?(M=T,T=null):M=T.sibling;var P=p(u,T,S.value,y);if(P===null){T===null&&(T=M);break}t&&T&&P.alternate===null&&e(u,T),g=o(P,g,C),b===null?A=P:b.sibling=P,b=P,T=M}if(S.done)return n(u,T),vt&&$r(u,C),A;if(T===null){for(;!S.done;C++,S=x.next())S=f(u,S.value,y),S!==null&&(g=o(S,g,C),b===null?A=S:b.sibling=S,b=S);return vt&&$r(u,C),A}for(T=i(u,T);!S.done;C++,S=x.next())S=m(T,u,C,S.value,y),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?C:S.key),g=o(S,g,C),b===null?A=S:b.sibling=S,b=S);return t&&T.forEach(function(z){return e(u,z)}),vt&&$r(u,C),A}function h(u,g,x,y){if(typeof x=="object"&&x!==null&&x.type===Go&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ll:e:{for(var A=x.key,b=g;b!==null;){if(b.key===A){if(A=x.type,A===Go){if(b.tag===7){n(u,b.sibling),g=r(b,x.props.children),g.return=u,u=g;break e}}else if(b.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===cr&&Hm(A)===b.type){n(u,b.sibling),g=r(b,x.props),g.ref=Ys(u,b,x),g.return=u,u=g;break e}n(u,b);break}else e(u,b);b=b.sibling}x.type===Go?(g=po(x.props.children,u.mode,y,x.key),g.return=u,u=g):(y=cc(x.type,x.key,x.props,null,u.mode,y),y.ref=Ys(u,g,x),y.return=u,u=y)}return s(u);case Vo:e:{for(b=x.key;g!==null;){if(g.key===b)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(u,g.sibling),g=r(g,x.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=Ku(x,u.mode,y),g.return=u,u=g}return s(u);case cr:return b=x._init,h(u,g,b(x._payload),y)}if(aa(x))return v(u,g,x,y);if(Ws(x))return _(u,g,x,y);_l(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,x),g.return=u,u=g):(n(u,g),g=Yu(x,u.mode,y),g.return=u,u=g),s(u)):n(u,g)}return h}var Ms=u_(!0),d_=u_(!1),Lc=kr(null),Nc=null,Qo=null,Jp=null;function eh(){Jp=Qo=Nc=null}function th(t){var e=Lc.current;mt(Lc),t._currentValue=e}function df(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function os(t,e){Nc=t,Jp=Qo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pn=!0),t.firstContext=null)}function jn(t){var e=t._currentValue;if(Jp!==t)if(t={context:t,memoizedValue:e,next:null},Qo===null){if(Nc===null)throw Error(ie(308));Qo=t,Nc.dependencies={lanes:0,firstContext:t}}else Qo=Qo.next=t;return e}var io=null;function nh(t){io===null?io=[t]:io.push(t)}function f_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,nh(e)):(n.next=r.next,r.next=n),e.interleaved=n,qi(t,i)}function qi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ur=!1;function ih(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function p_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,qi(t,n)}return r=i.interleaved,r===null?(e.next=e,nh(i)):(e.next=r.next,r.next=e),i.interleaved=e,qi(t,n)}function ic(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vp(t,n)}}function Vm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ic(t,e,n,i){var r=t.updateQueue;ur=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(o!==null){var f=r.baseState;s=0,d=c=l=null,a=o;do{var p=a.lane,m=a.eventTime;if((i&p)===p){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(p=e,m=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){f=v.call(m,f,p);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,p=typeof v=="function"?v.call(m,f,p):v,p==null)break e;f=St({},f,p);break e;case 2:ur=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[a]:p.push(a))}else m={eventTime:m,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=m,l=f):d=d.next=m,s|=p;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;p=a,a=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);vo|=s,t.lanes=s,t.memoizedState=f}}function Gm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Ya={},Ei=kr(Ya),Na=kr(Ya),Ia=kr(Ya);function ro(t){if(t===Ya)throw Error(ie(174));return t}function rh(t,e){switch(ft(Ia,e),ft(Na,t),ft(Ei,Ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Wd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Wd(e,t)}mt(Ei),ft(Ei,e)}function ws(){mt(Ei),mt(Na),mt(Ia)}function h_(t){ro(Ia.current);var e=ro(Ei.current),n=Wd(e,t.type);e!==n&&(ft(Na,t),ft(Ei,n))}function oh(t){Na.current===t&&(mt(Ei),mt(Na))}var _t=kr(0);function Uc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gu=[];function sh(){for(var t=0;t<Gu.length;t++)Gu[t]._workInProgressVersionPrimary=null;Gu.length=0}var rc=Zi.ReactCurrentDispatcher,Wu=Zi.ReactCurrentBatchConfig,go=0,yt=null,Nt=null,kt=null,Fc=!1,ga=!1,Ua=0,xM=0;function Xt(){throw Error(ie(321))}function ah(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!di(t[n],e[n]))return!1;return!0}function lh(t,e,n,i,r,o){if(go=o,yt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rc.current=t===null||t.memoizedState===null?EM:MM,t=n(i,r),ga){o=0;do{if(ga=!1,Ua=0,25<=o)throw Error(ie(301));o+=1,kt=Nt=null,e.updateQueue=null,rc.current=wM,t=n(i,r)}while(ga)}if(rc.current=Oc,e=Nt!==null&&Nt.next!==null,go=0,kt=Nt=yt=null,Fc=!1,e)throw Error(ie(300));return t}function ch(){var t=Ua!==0;return Ua=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?yt.memoizedState=kt=t:kt=kt.next=t,kt}function Xn(){if(Nt===null){var t=yt.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=kt===null?yt.memoizedState:kt.next;if(e!==null)kt=e,Nt=t;else{if(t===null)throw Error(ie(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},kt===null?yt.memoizedState=kt=t:kt=kt.next=t}return kt}function Fa(t,e){return typeof e=="function"?e(t):e}function ju(t){var e=Xn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Nt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,c=o;do{var d=c.lane;if((go&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,s=i):l=l.next=f,yt.lanes|=d,vo|=d}c=c.next}while(c!==null&&c!==o);l===null?s=i:l.next=a,di(i,e.memoizedState)||(pn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,yt.lanes|=o,vo|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xu(t){var e=Xn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);di(o,e.memoizedState)||(pn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function m_(){}function g_(t,e){var n=yt,i=Xn(),r=e(),o=!di(i.memoizedState,r);if(o&&(i.memoizedState=r,pn=!0),i=i.queue,uh(__.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,Oa(9,x_.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(ie(349));go&30||v_(n,e,r)}return r}function v_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function x_(t,e,n,i){e.value=n,e.getSnapshot=i,y_(e)&&S_(t)}function __(t,e,n){return n(function(){y_(e)&&S_(t)})}function y_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!di(t,n)}catch{return!0}}function S_(t){var e=qi(t,1);e!==null&&li(e,t,1,-1)}function Wm(t){var e=hi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:t},e.queue=t,t=t.dispatch=SM.bind(null,yt,t),[e.memoizedState,t]}function Oa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=yt.updateQueue,e===null?(e={lastEffect:null,stores:null},yt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function E_(){return Xn().memoizedState}function oc(t,e,n,i){var r=hi();yt.flags|=t,r.memoizedState=Oa(1|e,n,void 0,i===void 0?null:i)}function ru(t,e,n,i){var r=Xn();i=i===void 0?null:i;var o=void 0;if(Nt!==null){var s=Nt.memoizedState;if(o=s.destroy,i!==null&&ah(i,s.deps)){r.memoizedState=Oa(e,n,o,i);return}}yt.flags|=t,r.memoizedState=Oa(1|e,n,o,i)}function jm(t,e){return oc(8390656,8,t,e)}function uh(t,e){return ru(2048,8,t,e)}function M_(t,e){return ru(4,2,t,e)}function w_(t,e){return ru(4,4,t,e)}function T_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function b_(t,e,n){return n=n!=null?n.concat([t]):null,ru(4,4,T_.bind(null,e,t),n)}function dh(){}function A_(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ah(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function C_(t,e){var n=Xn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&ah(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function R_(t,e,n){return go&21?(di(n,e)||(n=Ix(),yt.lanes|=n,vo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pn=!0),t.memoizedState=n)}function _M(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=Wu.transition;Wu.transition={};try{t(!1),e()}finally{lt=n,Wu.transition=i}}function P_(){return Xn().memoizedState}function yM(t,e,n){var i=Rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},D_(t))L_(e,n);else if(n=f_(t,e,n,i),n!==null){var r=sn();li(n,t,i,r),N_(n,e,i)}}function SM(t,e,n){var i=Rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(D_(t))L_(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,di(a,s)){var l=e.interleaved;l===null?(r.next=r,nh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=f_(t,e,r,i),n!==null&&(r=sn(),li(n,t,i,r),N_(n,e,i))}}function D_(t){var e=t.alternate;return t===yt||e!==null&&e===yt}function L_(t,e){ga=Fc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function N_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vp(t,n)}}var Oc={readContext:jn,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},EM={readContext:jn,useCallback:function(t,e){return hi().memoizedState=[t,e===void 0?null:e],t},useContext:jn,useEffect:jm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,oc(4194308,4,T_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return oc(4194308,4,t,e)},useInsertionEffect:function(t,e){return oc(4,2,t,e)},useMemo:function(t,e){var n=hi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=hi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=yM.bind(null,yt,t),[i.memoizedState,t]},useRef:function(t){var e=hi();return t={current:t},e.memoizedState=t},useState:Wm,useDebugValue:dh,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=Wm(!1),e=t[0];return t=_M.bind(null,t[1]),hi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=yt,r=hi();if(vt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),zt===null)throw Error(ie(349));go&30||v_(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,jm(__.bind(null,i,o,t),[t]),i.flags|=2048,Oa(9,x_.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=hi(),e=zt.identifierPrefix;if(vt){var n=zi,i=ki;n=(i&~(1<<32-ai(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=xM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},MM={readContext:jn,useCallback:A_,useContext:jn,useEffect:uh,useImperativeHandle:b_,useInsertionEffect:M_,useLayoutEffect:w_,useMemo:C_,useReducer:ju,useRef:E_,useState:function(){return ju(Fa)},useDebugValue:dh,useDeferredValue:function(t){var e=Xn();return R_(e,Nt.memoizedState,t)},useTransition:function(){var t=ju(Fa)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:m_,useSyncExternalStore:g_,useId:P_,unstable_isNewReconciler:!1},wM={readContext:jn,useCallback:A_,useContext:jn,useEffect:uh,useImperativeHandle:b_,useInsertionEffect:M_,useLayoutEffect:w_,useMemo:C_,useReducer:Xu,useRef:E_,useState:function(){return Xu(Fa)},useDebugValue:dh,useDeferredValue:function(t){var e=Xn();return Nt===null?e.memoizedState=t:R_(e,Nt.memoizedState,t)},useTransition:function(){var t=Xu(Fa)[0],e=Xn().memoizedState;return[t,e]},useMutableSource:m_,useSyncExternalStore:g_,useId:P_,unstable_isNewReconciler:!1};function ei(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ff(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ou={isMounted:function(t){return(t=t._reactInternals)?wo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=sn(),r=Rr(t),o=Vi(i,r);o.payload=e,n!=null&&(o.callback=n),e=Ar(t,o,r),e!==null&&(li(e,t,r,i),ic(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=sn(),r=Rr(t),o=Vi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Ar(t,o,r),e!==null&&(li(e,t,r,i),ic(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=sn(),i=Rr(t),r=Vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ar(t,r,i),e!==null&&(li(e,t,i,n),ic(e,t,i))}};function Xm(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ra(n,i)||!Ra(r,o):!0}function I_(t,e,n){var i=!1,r=Ir,o=e.contextType;return typeof o=="object"&&o!==null?o=jn(o):(r=mn(e)?ho:Jt.current,i=e.contextTypes,o=(i=i!=null)?Ss(t,r):Ir),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ou,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function qm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ou.enqueueReplaceState(e,e.state,null)}function pf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},ih(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=jn(o):(o=mn(e)?ho:Jt.current,r.context=Ss(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(ff(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ou.enqueueReplaceState(r,r.state,null),Ic(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ts(t,e){try{var n="",i=e;do n+=ZS(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function qu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function hf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var TM=typeof WeakMap=="function"?WeakMap:Map;function U_(t,e,n){n=Vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){zc||(zc=!0,wf=i),hf(t,e)},n}function F_(t,e,n){n=Vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){hf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){hf(t,e),typeof i!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function $m(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new TM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=zM.bind(null,t,e,n),e.then(t,t))}function Ym(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Km(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vi(-1,1),e.tag=2,Ar(n,e,1))),n.lanes|=1),t)}var bM=Zi.ReactCurrentOwner,pn=!1;function on(t,e,n,i){e.child=t===null?d_(e,null,n,i):Ms(e,t.child,n,i)}function Qm(t,e,n,i,r){n=n.render;var o=e.ref;return os(e,r),i=lh(t,e,n,i,o,r),n=ch(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,$i(t,e,r)):(vt&&n&&Kp(e),e.flags|=1,on(t,e,i,r),e.child)}function Zm(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!_h(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,O_(t,e,o,i,r)):(t=cc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ra,n(s,i)&&t.ref===e.ref)return $i(t,e,r)}return e.flags|=1,t=Pr(o,i),t.ref=e.ref,t.return=e,e.child=t}function O_(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Ra(o,i)&&t.ref===e.ref)if(pn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(pn=!0);else return e.lanes=t.lanes,$i(t,e,r)}return mf(t,e,n,i,r)}function k_(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(Jo,An),An|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(Jo,An),An|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,ft(Jo,An),An|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,ft(Jo,An),An|=i;return on(t,e,r,n),e.child}function z_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function mf(t,e,n,i,r){var o=mn(n)?ho:Jt.current;return o=Ss(e,o),os(e,r),n=lh(t,e,n,i,o,r),i=ch(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,$i(t,e,r)):(vt&&i&&Kp(e),e.flags|=1,on(t,e,n,r),e.child)}function Jm(t,e,n,i,r){if(mn(n)){var o=!0;Rc(e)}else o=!1;if(os(e,r),e.stateNode===null)sc(t,e),I_(e,n,i),pf(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=jn(c):(c=mn(n)?ho:Jt.current,c=Ss(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==c)&&qm(e,s,i,c),ur=!1;var p=e.memoizedState;s.state=p,Ic(e,i,s,r),l=e.memoizedState,a!==i||p!==l||hn.current||ur?(typeof d=="function"&&(ff(e,n,d,i),l=e.memoizedState),(a=ur||Xm(e,n,a,i,p,l,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=c,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,p_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ei(e.type,a),s.props=c,f=e.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=jn(l):(l=mn(n)?ho:Jt.current,l=Ss(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||p!==l)&&qm(e,s,i,l),ur=!1,p=e.memoizedState,s.state=p,Ic(e,i,s,r);var v=e.memoizedState;a!==f||p!==v||hn.current||ur?(typeof m=="function"&&(ff(e,n,m,i),v=e.memoizedState),(c=ur||Xm(e,n,c,i,p,v,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,v,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),s.props=i,s.state=v,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return gf(t,e,n,i,o,r)}function gf(t,e,n,i,r,o){z_(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&km(e,n,!1),$i(t,e,o);i=e.stateNode,bM.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Ms(e,t.child,null,o),e.child=Ms(e,null,a,o)):on(t,e,a,o),e.memoizedState=i.state,r&&km(e,n,!0),e.child}function B_(t){var e=t.stateNode;e.pendingContext?Om(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Om(t,e.context,!1),rh(t,e.containerInfo)}function eg(t,e,n,i,r){return Es(),Zp(r),e.flags|=256,on(t,e,n,i),e.child}var vf={dehydrated:null,treeContext:null,retryLane:0};function xf(t){return{baseLanes:t,cachePool:null,transitions:null}}function H_(t,e,n){var i=e.pendingProps,r=_t.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(_t,r&1),t===null)return uf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=lu(s,i,0,null),t=po(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=xf(n),e.memoizedState=vf,t):fh(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return AM(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Pr(a,o):(o=po(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?xf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=vf,i}return o=t.child,t=o.sibling,i=Pr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function fh(t,e){return e=lu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yl(t,e,n,i){return i!==null&&Zp(i),Ms(e,t.child,null,n),t=fh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function AM(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=qu(Error(ie(422))),yl(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=lu({mode:"visible",children:i.children},r,0,null),o=po(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Ms(e,t.child,null,s),e.child.memoizedState=xf(s),e.memoizedState=vf,o);if(!(e.mode&1))return yl(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(ie(419)),i=qu(o,i,void 0),yl(t,e,s,i)}if(a=(s&t.childLanes)!==0,pn||a){if(i=zt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,qi(t,r),li(i,t,r,-1))}return xh(),i=qu(Error(ie(421))),yl(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=BM.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,Rn=br(r.nextSibling),Pn=e,vt=!0,ri=null,t!==null&&(zn[Bn++]=ki,zn[Bn++]=zi,zn[Bn++]=mo,ki=t.id,zi=t.overflow,mo=e),e=fh(e,i.children),e.flags|=4096,e)}function tg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),df(t.return,e,n)}function $u(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function V_(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(on(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tg(t,n,e);else if(t.tag===19)tg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Uc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),$u(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Uc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}$u(e,!0,n,null,o);break;case"together":$u(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $i(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function CM(t,e,n){switch(e.tag){case 3:B_(e),Es();break;case 5:h_(e);break;case 1:mn(e.type)&&Rc(e);break;case 4:rh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(Lc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?H_(t,e,n):(ft(_t,_t.current&1),t=$i(t,e,n),t!==null?t.sibling:null);ft(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return V_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,k_(t,e,n)}return $i(t,e,n)}var G_,_f,W_,j_;G_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_f=function(){};W_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ro(Ei.current);var o=null;switch(n){case"input":r=Bd(t,r),i=Bd(t,i),o=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),o=[];break;case"textarea":r=Gd(t,r),i=Gd(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ac)}jd(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ea.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ea.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ht("scroll",t),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(e.updateQueue=c)&&(e.flags|=4)}};j_=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ks(t,e){if(!vt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function RM(t,e,n){var i=e.pendingProps;switch(Qp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return mn(e.type)&&Cc(),qt(e),null;case 3:return i=e.stateNode,ws(),mt(hn),mt(Jt),sh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(xl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ri!==null&&(Af(ri),ri=null))),_f(t,e),qt(e),null;case 5:oh(e);var r=ro(Ia.current);if(n=e.type,t!==null&&e.stateNode!=null)W_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return qt(e),null}if(t=ro(Ei.current),xl(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[_i]=e,i[La]=o,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<ca.length;r++)ht(ca[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":um(i,o),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},ht("invalid",i);break;case"textarea":fm(i,o),ht("invalid",i)}jd(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&vl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&vl(i.textContent,a,t),r=["children",""+a]):Ea.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ht("scroll",i)}switch(n){case"input":cl(i),dm(i,o,!0);break;case"textarea":cl(i),pm(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Ac)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_x(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[_i]=e,t[La]=i,G_(t,e,!1,!1),e.stateNode=t;e:{switch(s=Xd(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<ca.length;r++)ht(ca[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":um(t,i),r=Bd(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),ht("invalid",t);break;case"textarea":fm(t,i),r=Gd(t,i),ht("invalid",t);break;default:r=i}jd(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Ex(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&yx(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ma(t,l):typeof l=="number"&&Ma(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ea.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ht("scroll",t):l!=null&&Fp(t,o,l,s))}switch(n){case"input":cl(t),dm(t,i,!1);break;case"textarea":cl(t),pm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Nr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?ts(t,!!i.multiple,o,!1):i.defaultValue!=null&&ts(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ac)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)j_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=ro(Ia.current),ro(Ei.current),xl(e)){if(i=e.stateNode,n=e.memoizedProps,i[_i]=e,(o=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:vl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vl(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[_i]=e,e.stateNode=i}return qt(e),null;case 13:if(mt(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(vt&&Rn!==null&&e.mode&1&&!(e.flags&128))c_(),Es(),e.flags|=98560,o=!1;else if(o=xl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(ie(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ie(317));o[_i]=e}else Es(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),o=!1}else ri!==null&&(Af(ri),ri=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?It===0&&(It=3):xh())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return ws(),_f(t,e),t===null&&Pa(e.stateNode.containerInfo),qt(e),null;case 10:return th(e.type._context),qt(e),null;case 17:return mn(e.type)&&Cc(),qt(e),null;case 19:if(mt(_t),o=e.memoizedState,o===null)return qt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)Ks(o,!1);else{if(It!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Uc(t),s!==null){for(e.flags|=128,Ks(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(_t,_t.current&1|2),e.child}t=t.sibling}o.tail!==null&&At()>bs&&(e.flags|=128,i=!0,Ks(o,!1),e.lanes=4194304)}else{if(!i)if(t=Uc(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ks(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!vt)return qt(e),null}else 2*At()-o.renderingStartTime>bs&&n!==1073741824&&(e.flags|=128,i=!0,Ks(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=At(),e.sibling=null,n=_t.current,ft(_t,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return vh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function PM(t,e){switch(Qp(e),e.tag){case 1:return mn(e.type)&&Cc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ws(),mt(hn),mt(Jt),sh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return oh(e),null;case 13:if(mt(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Es()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(_t),null;case 4:return ws(),null;case 10:return th(e.type._context),null;case 22:case 23:return vh(),null;case 24:return null;default:return null}}var Sl=!1,Qt=!1,DM=typeof WeakSet=="function"?WeakSet:Set,ye=null;function Zo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function yf(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var ng=!1;function LM(t,e){if(nf=wc,t=Kx(),Yp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,d=0,f=t,p=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=s+r),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===t)break t;if(p===n&&++c===r&&(a=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(rf={focusedElem:t,selectionRange:n},wc=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,h=v.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?_:ei(e.type,_),h);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(y){Tt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return v=ng,ng=!1,v}function va(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&yf(e,n,o)}r=r.next}while(r!==i)}}function su(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Sf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function X_(t){var e=t.alternate;e!==null&&(t.alternate=null,X_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_i],delete e[La],delete e[af],delete e[hM],delete e[mM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function q_(t){return t.tag===5||t.tag===3||t.tag===4}function ig(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||q_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ef(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ac));else if(i!==4&&(t=t.child,t!==null))for(Ef(t,e,n),t=t.sibling;t!==null;)Ef(t,e,n),t=t.sibling}function Mf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Mf(t,e,n),t=t.sibling;t!==null;)Mf(t,e,n),t=t.sibling}var Ht=null,ii=!1;function Ji(t,e,n){for(n=n.child;n!==null;)$_(t,e,n),n=n.sibling}function $_(t,e,n){if(Si&&typeof Si.onCommitFiberUnmount=="function")try{Si.onCommitFiberUnmount(Zc,n)}catch{}switch(n.tag){case 5:Qt||Zo(n,e);case 6:var i=Ht,r=ii;Ht=null,Ji(t,e,n),Ht=i,ii=r,Ht!==null&&(ii?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&(ii?(t=Ht,n=n.stateNode,t.nodeType===8?Hu(t.parentNode,n):t.nodeType===1&&Hu(t,n),Aa(t)):Hu(Ht,n.stateNode));break;case 4:i=Ht,r=ii,Ht=n.stateNode.containerInfo,ii=!0,Ji(t,e,n),Ht=i,ii=r;break;case 0:case 11:case 14:case 15:if(!Qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&yf(n,e,s),r=r.next}while(r!==i)}Ji(t,e,n);break;case 1:if(!Qt&&(Zo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}Ji(t,e,n);break;case 21:Ji(t,e,n);break;case 22:n.mode&1?(Qt=(i=Qt)||n.memoizedState!==null,Ji(t,e,n),Qt=i):Ji(t,e,n);break;default:Ji(t,e,n)}}function rg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new DM),e.forEach(function(i){var r=HM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Ht=a.stateNode,ii=!1;break e;case 3:Ht=a.stateNode.containerInfo,ii=!0;break e;case 4:Ht=a.stateNode.containerInfo,ii=!0;break e}a=a.return}if(Ht===null)throw Error(ie(160));$_(o,s,r),Ht=null,ii=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Y_(e,t),e=e.sibling}function Y_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kn(e,t),fi(t),i&4){try{va(3,t,t.return),su(3,t)}catch(_){Tt(t,t.return,_)}try{va(5,t,t.return)}catch(_){Tt(t,t.return,_)}}break;case 1:Kn(e,t),fi(t),i&512&&n!==null&&Zo(n,n.return);break;case 5:if(Kn(e,t),fi(t),i&512&&n!==null&&Zo(n,n.return),t.flags&32){var r=t.stateNode;try{Ma(r,"")}catch(_){Tt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&vx(r,o),Xd(a,s);var c=Xd(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?Ex(r,f):d==="dangerouslySetInnerHTML"?yx(r,f):d==="children"?Ma(r,f):Fp(r,d,f,c)}switch(a){case"input":Hd(r,o);break;case"textarea":xx(r,o);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?ts(r,!!o.multiple,m,!1):p!==!!o.multiple&&(o.defaultValue!=null?ts(r,!!o.multiple,o.defaultValue,!0):ts(r,!!o.multiple,o.multiple?[]:"",!1))}r[La]=o}catch(_){Tt(t,t.return,_)}}break;case 6:if(Kn(e,t),fi(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(_){Tt(t,t.return,_)}}break;case 3:if(Kn(e,t),fi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Aa(e.containerInfo)}catch(_){Tt(t,t.return,_)}break;case 4:Kn(e,t),fi(t);break;case 13:Kn(e,t),fi(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(mh=At())),i&4&&rg(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Qt=(c=Qt)||d,Kn(e,t),Qt=c):Kn(e,t),fi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(ye=t,d=t.child;d!==null;){for(f=ye=d;ye!==null;){switch(p=ye,m=p.child,p.tag){case 0:case 11:case 14:case 15:va(4,p,p.return);break;case 1:Zo(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){Tt(i,n,_)}}break;case 5:Zo(p,p.return);break;case 22:if(p.memoizedState!==null){sg(f);continue}}m!==null?(m.return=p,ye=m):sg(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Sx("display",s))}catch(_){Tt(t,t.return,_)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(_){Tt(t,t.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Kn(e,t),fi(t),i&4&&rg(t);break;case 21:break;default:Kn(e,t),fi(t)}}function fi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(q_(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ma(r,""),i.flags&=-33);var o=ig(t);Mf(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=ig(t);Ef(t,a,s);break;default:throw Error(ie(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function NM(t,e,n){ye=t,K_(t)}function K_(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Sl;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Qt;a=Sl;var c=Qt;if(Sl=s,(Qt=l)&&!c)for(ye=r;ye!==null;)s=ye,l=s.child,s.tag===22&&s.memoizedState!==null?ag(r):l!==null?(l.return=s,ye=l):ag(r);for(;o!==null;)ye=o,K_(o),o=o.sibling;ye=r,Sl=a,Qt=c}og(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,ye=o):og(t)}}function og(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qt||su(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ei(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Gm(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gm(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Aa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Qt||e.flags&512&&Sf(e)}catch(p){Tt(e,e.return,p)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function sg(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function ag(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{su(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var o=e.return;try{Sf(e)}catch(l){Tt(e,o,l)}break;case 5:var s=e.return;try{Sf(e)}catch(l){Tt(e,s,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){ye=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ye=a;break}ye=e.return}}var IM=Math.ceil,kc=Zi.ReactCurrentDispatcher,ph=Zi.ReactCurrentOwner,Wn=Zi.ReactCurrentBatchConfig,Qe=0,zt=null,Lt=null,Gt=0,An=0,Jo=kr(0),It=0,ka=null,vo=0,au=0,hh=0,xa=null,fn=null,mh=0,bs=1/0,Ii=null,zc=!1,wf=null,Cr=null,El=!1,Er=null,Bc=0,_a=0,Tf=null,ac=-1,lc=0;function sn(){return Qe&6?At():ac!==-1?ac:ac=At()}function Rr(t){return t.mode&1?Qe&2&&Gt!==0?Gt&-Gt:vM.transition!==null?(lc===0&&(lc=Ix()),lc):(t=lt,t!==0||(t=window.event,t=t===void 0?16:Hx(t.type)),t):1}function li(t,e,n,i){if(50<_a)throw _a=0,Tf=null,Error(ie(185));Xa(t,n,i),(!(Qe&2)||t!==zt)&&(t===zt&&(!(Qe&2)&&(au|=n),It===4&&fr(t,Gt)),gn(t,i),n===1&&Qe===0&&!(e.mode&1)&&(bs=At()+500,iu&&zr()))}function gn(t,e){var n=t.callbackNode;vE(t,e);var i=Mc(t,t===zt?Gt:0);if(i===0)n!==null&&gm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&gm(n),e===1)t.tag===0?gM(lg.bind(null,t)):s_(lg.bind(null,t)),fM(function(){!(Qe&6)&&zr()}),n=null;else{switch(Ux(i)){case 1:n=Hp;break;case 4:n=Lx;break;case 16:n=Ec;break;case 536870912:n=Nx;break;default:n=Ec}n=r0(n,Q_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Q_(t,e){if(ac=-1,lc=0,Qe&6)throw Error(ie(327));var n=t.callbackNode;if(ss()&&t.callbackNode!==n)return null;var i=Mc(t,t===zt?Gt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Hc(t,i);else{e=i;var r=Qe;Qe|=2;var o=J_();(zt!==t||Gt!==e)&&(Ii=null,bs=At()+500,fo(t,e));do try{OM();break}catch(a){Z_(t,a)}while(!0);eh(),kc.current=o,Qe=r,Lt!==null?e=0:(zt=null,Gt=0,e=It)}if(e!==0){if(e===2&&(r=Qd(t),r!==0&&(i=r,e=bf(t,r))),e===1)throw n=ka,fo(t,0),fr(t,i),gn(t,At()),n;if(e===6)fr(t,i);else{if(r=t.current.alternate,!(i&30)&&!UM(r)&&(e=Hc(t,i),e===2&&(o=Qd(t),o!==0&&(i=o,e=bf(t,o))),e===1))throw n=ka,fo(t,0),fr(t,i),gn(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:Yr(t,fn,Ii);break;case 3:if(fr(t,i),(i&130023424)===i&&(e=mh+500-At(),10<e)){if(Mc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){sn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=sf(Yr.bind(null,t,fn,Ii),e);break}Yr(t,fn,Ii);break;case 4:if(fr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-ai(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*IM(i/1960))-i,10<i){t.timeoutHandle=sf(Yr.bind(null,t,fn,Ii),i);break}Yr(t,fn,Ii);break;case 5:Yr(t,fn,Ii);break;default:throw Error(ie(329))}}}return gn(t,At()),t.callbackNode===n?Q_.bind(null,t):null}function bf(t,e){var n=xa;return t.current.memoizedState.isDehydrated&&(fo(t,e).flags|=256),t=Hc(t,e),t!==2&&(e=fn,fn=n,e!==null&&Af(e)),t}function Af(t){fn===null?fn=t:fn.push.apply(fn,t)}function UM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!di(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function fr(t,e){for(e&=~hh,e&=~au,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ai(e),i=1<<n;t[n]=-1,e&=~i}}function lg(t){if(Qe&6)throw Error(ie(327));ss();var e=Mc(t,0);if(!(e&1))return gn(t,At()),null;var n=Hc(t,e);if(t.tag!==0&&n===2){var i=Qd(t);i!==0&&(e=i,n=bf(t,i))}if(n===1)throw n=ka,fo(t,0),fr(t,e),gn(t,At()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yr(t,fn,Ii),gn(t,At()),null}function gh(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(bs=At()+500,iu&&zr())}}function xo(t){Er!==null&&Er.tag===0&&!(Qe&6)&&ss();var e=Qe;Qe|=1;var n=Wn.transition,i=lt;try{if(Wn.transition=null,lt=1,t)return t()}finally{lt=i,Wn.transition=n,Qe=e,!(Qe&6)&&zr()}}function vh(){An=Jo.current,mt(Jo)}function fo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,dM(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(Qp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Cc();break;case 3:ws(),mt(hn),mt(Jt),sh();break;case 5:oh(i);break;case 4:ws();break;case 13:mt(_t);break;case 19:mt(_t);break;case 10:th(i.type._context);break;case 22:case 23:vh()}n=n.return}if(zt=t,Lt=t=Pr(t.current,null),Gt=An=e,It=0,ka=null,hh=au=vo=0,fn=xa=null,io!==null){for(e=0;e<io.length;e++)if(n=io[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}io=null}return t}function Z_(t,e){do{var n=Lt;try{if(eh(),rc.current=Oc,Fc){for(var i=yt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Fc=!1}if(go=0,kt=Nt=yt=null,ga=!1,Ua=0,ph.current=null,n===null||n.return===null){It=1,ka=e,Lt=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Gt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Ym(s);if(m!==null){m.flags&=-257,Km(m,s,a,o,e),m.mode&1&&$m(o,c,e),e=m,l=c;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){$m(o,c,e),xh();break e}l=Error(ie(426))}}else if(vt&&a.mode&1){var h=Ym(s);if(h!==null){!(h.flags&65536)&&(h.flags|=256),Km(h,s,a,o,e),Zp(Ts(l,a));break e}}o=l=Ts(l,a),It!==4&&(It=2),xa===null?xa=[o]:xa.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var u=U_(o,l,e);Vm(o,u);break e;case 1:a=l;var g=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Cr===null||!Cr.has(x)))){o.flags|=65536,e&=-e,o.lanes|=e;var y=F_(o,a,e);Vm(o,y);break e}}o=o.return}while(o!==null)}t0(n)}catch(A){e=A,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function J_(){var t=kc.current;return kc.current=Oc,t===null?Oc:t}function xh(){(It===0||It===3||It===2)&&(It=4),zt===null||!(vo&268435455)&&!(au&268435455)||fr(zt,Gt)}function Hc(t,e){var n=Qe;Qe|=2;var i=J_();(zt!==t||Gt!==e)&&(Ii=null,fo(t,e));do try{FM();break}catch(r){Z_(t,r)}while(!0);if(eh(),Qe=n,kc.current=i,Lt!==null)throw Error(ie(261));return zt=null,Gt=0,It}function FM(){for(;Lt!==null;)e0(Lt)}function OM(){for(;Lt!==null&&!lE();)e0(Lt)}function e0(t){var e=i0(t.alternate,t,An);t.memoizedProps=t.pendingProps,e===null?t0(t):Lt=e,ph.current=null}function t0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=PM(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{It=6,Lt=null;return}}else if(n=RM(n,e,An),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);It===0&&(It=5)}function Yr(t,e,n){var i=lt,r=Wn.transition;try{Wn.transition=null,lt=1,kM(t,e,n,i)}finally{Wn.transition=r,lt=i}return null}function kM(t,e,n,i){do ss();while(Er!==null);if(Qe&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(xE(t,o),t===zt&&(Lt=zt=null,Gt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||El||(El=!0,r0(Ec,function(){return ss(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Wn.transition,Wn.transition=null;var s=lt;lt=1;var a=Qe;Qe|=4,ph.current=null,LM(t,n),Y_(n,t),rM(rf),wc=!!nf,rf=nf=null,t.current=n,NM(n),cE(),Qe=a,lt=s,Wn.transition=o}else t.current=n;if(El&&(El=!1,Er=t,Bc=r),o=t.pendingLanes,o===0&&(Cr=null),fE(n.stateNode),gn(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(zc)throw zc=!1,t=wf,wf=null,t;return Bc&1&&t.tag!==0&&ss(),o=t.pendingLanes,o&1?t===Tf?_a++:(_a=0,Tf=t):_a=0,zr(),null}function ss(){if(Er!==null){var t=Ux(Bc),e=Wn.transition,n=lt;try{if(Wn.transition=null,lt=16>t?16:t,Er===null)var i=!1;else{if(t=Er,Er=null,Bc=0,Qe&6)throw Error(ie(331));var r=Qe;for(Qe|=4,ye=t.current;ye!==null;){var o=ye,s=o.child;if(ye.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ye=c;ye!==null;){var d=ye;switch(d.tag){case 0:case 11:case 15:va(8,d,o)}var f=d.child;if(f!==null)f.return=d,ye=f;else for(;ye!==null;){d=ye;var p=d.sibling,m=d.return;if(X_(d),d===c){ye=null;break}if(p!==null){p.return=m,ye=p;break}ye=m}}}var v=o.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var h=_.sibling;_.sibling=null,_=h}while(_!==null)}}ye=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,ye=s;else e:for(;ye!==null;){if(o=ye,o.flags&2048)switch(o.tag){case 0:case 11:case 15:va(9,o,o.return)}var u=o.sibling;if(u!==null){u.return=o.return,ye=u;break e}ye=o.return}}var g=t.current;for(ye=g;ye!==null;){s=ye;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,ye=x;else e:for(s=g;ye!==null;){if(a=ye,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:su(9,a)}}catch(A){Tt(a,a.return,A)}if(a===s){ye=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,ye=y;break e}ye=a.return}}if(Qe=r,zr(),Si&&typeof Si.onPostCommitFiberRoot=="function")try{Si.onPostCommitFiberRoot(Zc,t)}catch{}i=!0}return i}finally{lt=n,Wn.transition=e}}return!1}function cg(t,e,n){e=Ts(n,e),e=U_(t,e,1),t=Ar(t,e,1),e=sn(),t!==null&&(Xa(t,1,e),gn(t,e))}function Tt(t,e,n){if(t.tag===3)cg(t,t,n);else for(;e!==null;){if(e.tag===3){cg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Cr===null||!Cr.has(i))){t=Ts(n,t),t=F_(e,t,1),e=Ar(e,t,1),t=sn(),e!==null&&(Xa(e,1,t),gn(e,t));break}}e=e.return}}function zM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=sn(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Gt&n)===n&&(It===4||It===3&&(Gt&130023424)===Gt&&500>At()-mh?fo(t,0):hh|=n),gn(t,e)}function n0(t,e){e===0&&(t.mode&1?(e=fl,fl<<=1,!(fl&130023424)&&(fl=4194304)):e=1);var n=sn();t=qi(t,e),t!==null&&(Xa(t,e,n),gn(t,n))}function BM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),n0(t,n)}function HM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),n0(t,n)}var i0;i0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pn=!1,CM(t,e,n);pn=!!(t.flags&131072)}else pn=!1,vt&&e.flags&1048576&&a_(e,Dc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;sc(t,e),t=e.pendingProps;var r=Ss(e,Jt.current);os(e,n),r=lh(null,e,i,t,r,n);var o=ch();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(o=!0,Rc(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,ih(e),r.updater=ou,e.stateNode=r,r._reactInternals=e,pf(e,i,t,n),e=gf(null,e,i,!0,o,n)):(e.tag=0,vt&&o&&Kp(e),on(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(sc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=GM(i),t=ei(i,t),r){case 0:e=mf(null,e,i,t,n);break e;case 1:e=Jm(null,e,i,t,n);break e;case 11:e=Qm(null,e,i,t,n);break e;case 14:e=Zm(null,e,i,ei(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),mf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Jm(t,e,i,r,n);case 3:e:{if(B_(e),t===null)throw Error(ie(387));i=e.pendingProps,o=e.memoizedState,r=o.element,p_(t,e),Ic(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Ts(Error(ie(423)),e),e=eg(t,e,i,n,r);break e}else if(i!==r){r=Ts(Error(ie(424)),e),e=eg(t,e,i,n,r);break e}else for(Rn=br(e.stateNode.containerInfo.firstChild),Pn=e,vt=!0,ri=null,n=d_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Es(),i===r){e=$i(t,e,n);break e}on(t,e,i,n)}e=e.child}return e;case 5:return h_(e),t===null&&uf(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,of(i,r)?s=null:o!==null&&of(i,o)&&(e.flags|=32),z_(t,e),on(t,e,s,n),e.child;case 6:return t===null&&uf(e),null;case 13:return H_(t,e,n);case 4:return rh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ms(e,null,i,n):on(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Qm(t,e,i,r,n);case 7:return on(t,e,e.pendingProps,n),e.child;case 8:return on(t,e,e.pendingProps.children,n),e.child;case 12:return on(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,ft(Lc,i._currentValue),i._currentValue=s,o!==null)if(di(o.value,s)){if(o.children===r.children&&!hn.current){e=$i(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Vi(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),df(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(ie(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),df(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}on(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,os(e,n),r=jn(r),i=i(r),e.flags|=1,on(t,e,i,n),e.child;case 14:return i=e.type,r=ei(i,e.pendingProps),r=ei(i.type,r),Zm(t,e,i,r,n);case 15:return O_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),sc(t,e),e.tag=1,mn(i)?(t=!0,Rc(e)):t=!1,os(e,n),I_(e,i,r),pf(e,i,r,n),gf(null,e,i,!0,t,n);case 19:return V_(t,e,n);case 22:return k_(t,e,n)}throw Error(ie(156,e.tag))};function r0(t,e){return Dx(t,e)}function VM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,e,n,i){return new VM(t,e,n,i)}function _h(t){return t=t.prototype,!(!t||!t.isReactComponent)}function GM(t){if(typeof t=="function")return _h(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kp)return 11;if(t===zp)return 14}return 2}function Pr(t,e){var n=t.alternate;return n===null?(n=Vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function cc(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")_h(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Go:return po(n.children,r,o,e);case Op:s=8,r|=8;break;case Fd:return t=Vn(12,n,e,r|2),t.elementType=Fd,t.lanes=o,t;case Od:return t=Vn(13,n,e,r),t.elementType=Od,t.lanes=o,t;case kd:return t=Vn(19,n,e,r),t.elementType=kd,t.lanes=o,t;case hx:return lu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fx:s=10;break e;case px:s=9;break e;case kp:s=11;break e;case zp:s=14;break e;case cr:s=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Vn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function po(t,e,n,i){return t=Vn(7,t,i,e),t.lanes=n,t}function lu(t,e,n,i){return t=Vn(22,t,i,e),t.elementType=hx,t.lanes=n,t.stateNode={isHidden:!1},t}function Yu(t,e,n){return t=Vn(6,t,null,e),t.lanes=n,t}function Ku(t,e,n){return e=Vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function WM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pu(0),this.expirationTimes=Pu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function yh(t,e,n,i,r,o,s,a,l){return t=new WM(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Vn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ih(o),t}function jM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function o0(t){if(!t)return Ir;t=t._reactInternals;e:{if(wo(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(mn(n))return o_(t,n,e)}return e}function s0(t,e,n,i,r,o,s,a,l){return t=yh(n,i,!0,t,r,o,s,a,l),t.context=o0(null),n=t.current,i=sn(),r=Rr(n),o=Vi(i,r),o.callback=e??null,Ar(n,o,r),t.current.lanes=r,Xa(t,r,i),gn(t,i),t}function cu(t,e,n,i){var r=e.current,o=sn(),s=Rr(r);return n=o0(n),e.context===null?e.context=n:e.pendingContext=n,e=Vi(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ar(r,e,s),t!==null&&(li(t,r,s,o),ic(t,r,s)),s}function Vc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ug(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sh(t,e){ug(t,e),(t=t.alternate)&&ug(t,e)}function XM(){return null}var a0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Eh(t){this._internalRoot=t}uu.prototype.render=Eh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));cu(t,e,null,null)};uu.prototype.unmount=Eh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xo(function(){cu(null,t,null,null)}),e[Xi]=null}};function uu(t){this._internalRoot=t}uu.prototype.unstable_scheduleHydration=function(t){if(t){var e=kx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dr.length&&e!==0&&e<dr[n].priority;n++);dr.splice(n,0,t),n===0&&Bx(t)}};function Mh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function du(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dg(){}function qM(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var c=Vc(s);o.call(c)}}var s=s0(e,i,t,0,null,!1,!1,"",dg);return t._reactRootContainer=s,t[Xi]=s.current,Pa(t.nodeType===8?t.parentNode:t),xo(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Vc(l);a.call(c)}}var l=yh(t,0,!1,null,null,!1,!1,"",dg);return t._reactRootContainer=l,t[Xi]=l.current,Pa(t.nodeType===8?t.parentNode:t),xo(function(){cu(e,l,n,i)}),l}function fu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=Vc(s);a.call(l)}}cu(e,s,t,r)}else s=qM(n,e,t,r,i);return Vc(s)}Fx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=la(e.pendingLanes);n!==0&&(Vp(e,n|1),gn(e,At()),!(Qe&6)&&(bs=At()+500,zr()))}break;case 13:xo(function(){var i=qi(t,1);if(i!==null){var r=sn();li(i,t,1,r)}}),Sh(t,1)}};Gp=function(t){if(t.tag===13){var e=qi(t,134217728);if(e!==null){var n=sn();li(e,t,134217728,n)}Sh(t,134217728)}};Ox=function(t){if(t.tag===13){var e=Rr(t),n=qi(t,e);if(n!==null){var i=sn();li(n,t,e,i)}Sh(t,e)}};kx=function(){return lt};zx=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};$d=function(t,e,n){switch(e){case"input":if(Hd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=nu(i);if(!r)throw Error(ie(90));gx(i),Hd(i,r)}}}break;case"textarea":xx(t,n);break;case"select":e=n.value,e!=null&&ts(t,!!n.multiple,e,!1)}};Tx=gh;bx=xo;var $M={usingClientEntryPoint:!1,Events:[$a,qo,nu,Mx,wx,gh]},Qs={findFiberByHostInstance:no,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},YM={bundleType:Qs.bundleType,version:Qs.version,rendererPackageName:Qs.rendererPackageName,rendererConfig:Qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rx(t),t===null?null:t.stateNode},findFiberByHostInstance:Qs.findFiberByHostInstance||XM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ml.isDisabled&&Ml.supportsFiber)try{Zc=Ml.inject(YM),Si=Ml}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$M;Ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mh(e))throw Error(ie(200));return jM(t,e,null,n)};Ln.createRoot=function(t,e){if(!Mh(t))throw Error(ie(299));var n=!1,i="",r=a0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=yh(t,1,!1,null,null,n,!1,i,r),t[Xi]=e.current,Pa(t.nodeType===8?t.parentNode:t),new Eh(e)};Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Rx(e),t=t===null?null:t.stateNode,t};Ln.flushSync=function(t){return xo(t)};Ln.hydrate=function(t,e,n){if(!du(e))throw Error(ie(200));return fu(null,t,e,!0,n)};Ln.hydrateRoot=function(t,e,n){if(!Mh(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=a0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=s0(e,null,t,1,n??null,r,!1,o,s),t[Xi]=e.current,Pa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new uu(e)};Ln.render=function(t,e,n){if(!du(e))throw Error(ie(200));return fu(null,t,e,!1,n)};Ln.unmountComponentAtNode=function(t){if(!du(t))throw Error(ie(40));return t._reactRootContainer?(xo(function(){fu(null,null,t,!1,function(){t._reactRootContainer=null,t[Xi]=null})}),!0):!1};Ln.unstable_batchedUpdates=gh;Ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!du(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return fu(t,e,n,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function l0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l0)}catch(t){console.error(t)}}l0(),lx.exports=Ln;var pu=lx.exports;const KM=Rp(pu);var c0,fg=pu;c0=fg.createRoot,fg.hydrateRoot;function QM(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,i,r,o,s=[],a="",l=t.split("/");for(l[0]||l.shift();r=l.shift();)n=r[0],n==="*"?(s.push(n),a+=r[1]==="?"?"(?:/(.*))?":"/(.*)"):n===":"?(i=r.indexOf("?",1),o=r.indexOf(".",1),s.push(r.substring(1,~i?i:~o?o:r.length)),a+=~i&&!~o?"(?:/([^/]+?))?":"/([^/]+?)",~o&&(a+=(~i?"?":"")+"\\"+r.substring(o))):a+="/"+r;return{keys:s,pattern:new RegExp("^"+a+(e?"(?=$|/)":"/?$"),"i")}}var u0={exports:{}},d0={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var As=I;function ZM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var JM=typeof Object.is=="function"?Object.is:ZM,ew=As.useState,tw=As.useEffect,nw=As.useLayoutEffect,iw=As.useDebugValue;function rw(t,e){var n=e(),i=ew({inst:{value:n,getSnapshot:e}}),r=i[0].inst,o=i[1];return nw(function(){r.value=n,r.getSnapshot=e,Qu(r)&&o({inst:r})},[t,n,e]),tw(function(){return Qu(r)&&o({inst:r}),t(function(){Qu(r)&&o({inst:r})})},[t]),iw(n),n}function Qu(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!JM(t,n)}catch{return!0}}function ow(t,e){return e()}var sw=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ow:rw;d0.useSyncExternalStore=As.useSyncExternalStore!==void 0?As.useSyncExternalStore:sw;u0.exports=d0;var aw=u0.exports;const lw=zS.useInsertionEffect,cw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",uw=cw?I.useLayoutEffect:I.useEffect,dw=lw||uw,f0=t=>{const e=I.useRef([t,(...n)=>e[0](...n)]).current;return dw(()=>{e[0]=t}),e[1]},fw="popstate",wh="pushState",Th="replaceState",pw="hashchange",pg=[fw,wh,Th,pw],hw=t=>{for(const e of pg)addEventListener(e,t);return()=>{for(const e of pg)removeEventListener(e,t)}},p0=(t,e)=>aw.useSyncExternalStore(hw,t,e),mw=()=>location.search,gw=({ssrSearch:t=""}={})=>p0(mw,()=>t),hg=()=>location.pathname,vw=({ssrPath:t}={})=>p0(hg,t?()=>t:hg),xw=(t,{replace:e=!1,state:n=null}={})=>history[e?Th:wh](n,"",t),_w=(t={})=>[vw(t),xw],mg=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[mg]>"u"){for(const t of[wh,Th]){const e=history[t];history[t]=function(){const n=e.apply(this,arguments),i=new Event(t);return i.arguments=arguments,dispatchEvent(i),n}}Object.defineProperty(window,mg,{value:!0})}const yw=(t,e)=>e.toLowerCase().indexOf(t.toLowerCase())?"~"+e:e.slice(t.length)||"/",h0=(t="")=>t==="/"?"":t,Sw=(t,e)=>t[0]==="~"?t.slice(1):h0(e)+t,Ew=(t="",e)=>yw(gg(h0(t)),gg(e)),gg=t=>{try{return decodeURI(t)}catch{return t}},m0={hook:_w,searchHook:gw,parser:QM,base:"",ssrPath:void 0,ssrSearch:void 0,hrefs:t=>t},g0=I.createContext(m0),Ka=()=>I.useContext(g0),v0={},x0=I.createContext(v0),Mw=()=>I.useContext(x0),hu=t=>{const[e,n]=t.hook(t);return[Ew(t.base,e),f0((i,r)=>n(Sw(i,t.base),r))]},ww=()=>hu(Ka()),_0=(t,e,n,i)=>{const{pattern:r,keys:o}=e instanceof RegExp?{keys:!1,pattern:e}:t(e||"*",i),s=r.exec(n)||[],[a,...l]=s;return a!==void 0?[!0,(()=>{const c=o!==!1?Object.fromEntries(o.map((f,p)=>[f,l[p]])):s.groups;let d={...l};return c&&Object.assign(d,c),d})(),...i?[a]:[]]:[!1,null]},Tw=({children:t,...e})=>{var d,f;const n=Ka(),i=e.hook?m0:n;let r=i;const[o,s]=((d=e.ssrPath)==null?void 0:d.split("?"))??[];s&&(e.ssrSearch=s,e.ssrPath=o),e.hrefs=e.hrefs??((f=e.hook)==null?void 0:f.hrefs);let a=I.useRef({}),l=a.current,c=l;for(let p in i){const m=p==="base"?i[p]+(e[p]||""):e[p]||i[p];l===c&&m!==c[p]&&(a.current=c={...c}),c[p]=m,m!==i[p]&&(r=c)}return I.createElement(g0.Provider,{value:r,children:t})},vg=({children:t,component:e},n)=>e?I.createElement(e,{params:n}):typeof t=="function"?t(n):t,bw=t=>{let e=I.useRef(v0),n=e.current;for(const i in t)t[i]!==n[i]&&(n=t);return Object.keys(t).length===0&&(n=t),e.current=n},Zs=({path:t,nest:e,match:n,...i})=>{const r=Ka(),[o]=hu(r),[s,a,l]=n??_0(r.parser,t,o,e),c=bw({...Mw(),...a});if(!s)return null;const d=l?I.createElement(Tw,{base:l},vg(i,c)):vg(i,c);return I.createElement(x0.Provider,{value:c,children:d})},bn=I.forwardRef((t,e)=>{const n=Ka(),[i,r]=hu(n),{to:o="",href:s=o,onClick:a,asChild:l,children:c,className:d,replace:f,state:p,...m}=t,v=f0(h=>{h.ctrlKey||h.metaKey||h.altKey||h.shiftKey||h.button!==0||(a==null||a(h),h.defaultPrevented||(h.preventDefault(),r(s,t)))}),_=n.hrefs(s[0]==="~"?s.slice(1):n.base+s,n);return l&&I.isValidElement(c)?I.cloneElement(c,{onClick:v,href:_}):I.createElement("a",{...m,onClick:v,href:_,className:d!=null&&d.call?d(i===s):d,children:c,ref:e})}),y0=t=>Array.isArray(t)?t.flatMap(e=>y0(e&&e.type===I.Fragment?e.props.children:e)):[t],Aw=({children:t,location:e})=>{const n=Ka(),[i]=hu(n);for(const r of y0(t)){let o=0;if(I.isValidElement(r)&&(o=_0(n.parser,r.props.path,e||i,r.props.nest))[0])return I.cloneElement(r,{match:o})}return null};var Qa=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},mu=typeof window>"u"||"Deno"in globalThis;function ti(){}function Cw(t,e){return typeof t=="function"?t(e):t}function Rw(t){return typeof t=="number"&&t>=0&&t!==1/0}function Pw(t,e){return Math.max(t+(e||0)-Date.now(),0)}function xg(t,e){return typeof t=="function"?t(e):t}function Dw(t,e){return typeof t=="function"?t(e):t}function _g(t,e){const{type:n="all",exact:i,fetchStatus:r,predicate:o,queryKey:s,stale:a}=t;if(s){if(i){if(e.queryHash!==bh(s,e.options))return!1}else if(!za(e.queryKey,s))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||r&&r!==e.state.fetchStatus||o&&!o(e))}function yg(t,e){const{exact:n,status:i,predicate:r,mutationKey:o}=t;if(o){if(!e.options.mutationKey)return!1;if(n){if(_o(e.options.mutationKey)!==_o(o))return!1}else if(!za(e.options.mutationKey,o))return!1}return!(i&&e.state.status!==i||r&&!r(e))}function bh(t,e){return((e==null?void 0:e.queryKeyHashFn)||_o)(t)}function _o(t){return JSON.stringify(t,(e,n)=>Cf(n)?Object.keys(n).sort().reduce((i,r)=>(i[r]=n[r],i),{}):n)}function za(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?!Object.keys(e).some(n=>!za(t[n],e[n])):!1}function S0(t,e){if(t===e)return t;const n=Sg(t)&&Sg(e);if(n||Cf(t)&&Cf(e)){const i=n?t:Object.keys(t),r=i.length,o=n?e:Object.keys(e),s=o.length,a=n?[]:{};let l=0;for(let c=0;c<s;c++){const d=n?c:o[c];(!n&&i.includes(d)||n)&&t[d]===void 0&&e[d]===void 0?(a[d]=void 0,l++):(a[d]=S0(t[d],e[d]),a[d]===t[d]&&t[d]!==void 0&&l++)}return r===s&&l===r?t:a}return e}function Lw(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(t[n]!==e[n])return!1;return!0}function Sg(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function Cf(t){if(!Eg(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!Eg(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function Eg(t){return Object.prototype.toString.call(t)==="[object Object]"}function Nw(t){return new Promise(e=>{setTimeout(e,t)})}function Iw(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?S0(t,e):e}function Uw(t,e,n=0){const i=[...t,e];return n&&i.length>n?i.slice(1):i}function Fw(t,e,n=0){const i=[e,...t];return n&&i.length>n?i.slice(0,-1):i}var Ah=Symbol();function E0(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===Ah?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var ao,hr,ds,Vv,Ow=(Vv=class extends Qa{constructor(){super();qe(this,ao);qe(this,hr);qe(this,ds);Ne(this,ds,e=>{if(!mu&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){Y(this,hr)||this.setEventListener(Y(this,ds))}onUnsubscribe(){var e;this.hasListeners()||((e=Y(this,hr))==null||e.call(this),Ne(this,hr,void 0))}setEventListener(e){var n;Ne(this,ds,e),(n=Y(this,hr))==null||n.call(this),Ne(this,hr,e(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(e){Y(this,ao)!==e&&(Ne(this,ao,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof Y(this,ao)=="boolean"?Y(this,ao):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},ao=new WeakMap,hr=new WeakMap,ds=new WeakMap,Vv),M0=new Ow,fs,mr,ps,Gv,kw=(Gv=class extends Qa{constructor(){super();qe(this,fs,!0);qe(this,mr);qe(this,ps);Ne(this,ps,e=>{if(!mu&&window.addEventListener){const n=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",i)}}})}onSubscribe(){Y(this,mr)||this.setEventListener(Y(this,ps))}onUnsubscribe(){var e;this.hasListeners()||((e=Y(this,mr))==null||e.call(this),Ne(this,mr,void 0))}setEventListener(e){var n;Ne(this,ps,e),(n=Y(this,mr))==null||n.call(this),Ne(this,mr,e(this.setOnline.bind(this)))}setOnline(e){Y(this,fs)!==e&&(Ne(this,fs,e),this.listeners.forEach(i=>{i(e)}))}isOnline(){return Y(this,fs)}},fs=new WeakMap,mr=new WeakMap,ps=new WeakMap,Gv),Gc=new kw;function zw(){let t,e;const n=new Promise((r,o)=>{t=r,e=o});n.status="pending",n.catch(()=>{});function i(r){Object.assign(n,r),delete n.resolve,delete n.reject}return n.resolve=r=>{i({status:"fulfilled",value:r}),t(r)},n.reject=r=>{i({status:"rejected",reason:r}),e(r)},n}function Bw(t){return Math.min(1e3*2**t,3e4)}function w0(t){return(t??"online")==="online"?Gc.isOnline():!0}var T0=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function Zu(t){return t instanceof T0}function b0(t){let e=!1,n=0,i=!1,r;const o=zw(),s=_=>{var h;i||(p(new T0(_)),(h=t.abort)==null||h.call(t))},a=()=>{e=!0},l=()=>{e=!1},c=()=>M0.isFocused()&&(t.networkMode==="always"||Gc.isOnline())&&t.canRun(),d=()=>w0(t.networkMode)&&t.canRun(),f=_=>{var h;i||(i=!0,(h=t.onSuccess)==null||h.call(t,_),r==null||r(),o.resolve(_))},p=_=>{var h;i||(i=!0,(h=t.onError)==null||h.call(t,_),r==null||r(),o.reject(_))},m=()=>new Promise(_=>{var h;r=u=>{(i||c())&&_(u)},(h=t.onPause)==null||h.call(t)}).then(()=>{var _;r=void 0,i||(_=t.onContinue)==null||_.call(t)}),v=()=>{if(i)return;let _;const h=n===0?t.initialPromise:void 0;try{_=h??t.fn()}catch(u){_=Promise.reject(u)}Promise.resolve(_).then(f).catch(u=>{var b;if(i)return;const g=t.retry??(mu?0:3),x=t.retryDelay??Bw,y=typeof x=="function"?x(n,u):x,A=g===!0||typeof g=="number"&&n<g||typeof g=="function"&&g(n,u);if(e||!A){p(u);return}n++,(b=t.onFail)==null||b.call(t,n,u),Nw(y).then(()=>c()?void 0:m()).then(()=>{e?p(u):v()})})};return{promise:o,cancel:s,continue:()=>(r==null||r(),o),cancelRetry:a,continueRetry:l,canStart:d,start:()=>(d()?v():m().then(v),o)}}function Hw(){let t=[],e=0,n=a=>{a()},i=a=>{a()},r=a=>setTimeout(a,0);const o=a=>{e?t.push(a):r(()=>{n(a)})},s=()=>{const a=t;t=[],a.length&&r(()=>{i(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;e++;try{l=a()}finally{e--,e||s()}return l},batchCalls:a=>(...l)=>{o(()=>{a(...l)})},schedule:o,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{i=a},setScheduler:a=>{r=a}}}var Vt=Hw(),lo,Wv,A0=(Wv=class{constructor(){qe(this,lo)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),Rw(this.gcTime)&&Ne(this,lo,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(mu?1/0:5*60*1e3))}clearGcTimeout(){Y(this,lo)&&(clearTimeout(Y(this,lo)),Ne(this,lo,void 0))}},lo=new WeakMap,Wv),hs,ms,On,Kt,Ga,co,ni,Di,jv,Vw=(jv=class extends A0{constructor(e){super();qe(this,ni);qe(this,hs);qe(this,ms);qe(this,On);qe(this,Kt);qe(this,Ga);qe(this,co);Ne(this,co,!1),Ne(this,Ga,e.defaultOptions),this.setOptions(e.options),this.observers=[],Ne(this,On,e.cache),this.queryKey=e.queryKey,this.queryHash=e.queryHash,Ne(this,hs,Ww(this.options)),this.state=e.state??Y(this,hs),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=Y(this,Kt))==null?void 0:e.promise}setOptions(e){this.options={...Y(this,Ga),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&Y(this,On).remove(this)}setData(e,n){const i=Iw(this.state.data,e,this.options);return bt(this,ni,Di).call(this,{data:i,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),i}setState(e,n){bt(this,ni,Di).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var i,r;const n=(i=Y(this,Kt))==null?void 0:i.promise;return(r=Y(this,Kt))==null||r.cancel(e),n?n.then(ti).catch(ti):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(Y(this,hs))}isActive(){return this.observers.some(e=>Dw(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Ah||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return this.state.isInvalidated?!0:this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0}isStaleByTime(e=0){return this.state.isInvalidated||this.state.data===void 0||!Pw(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(i=>i.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=Y(this,Kt))==null||n.continue()}onOnline(){var n;const e=this.observers.find(i=>i.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=Y(this,Kt))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),Y(this,On).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(Y(this,Kt)&&(Y(this,co)?Y(this,Kt).cancel({revert:!0}):Y(this,Kt).cancelRetry()),this.scheduleGc()),Y(this,On).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||bt(this,ni,Di).call(this,{type:"invalidate"})}fetch(e,n){var l,c,d;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(Y(this,Kt))return Y(this,Kt).continueRetry(),Y(this,Kt).promise}if(e&&this.setOptions(e),!this.options.queryFn){const f=this.observers.find(p=>p.options.queryFn);f&&this.setOptions(f.options)}const i=new AbortController,r=f=>{Object.defineProperty(f,"signal",{enumerable:!0,get:()=>(Ne(this,co,!0),i.signal)})},o=()=>{const f=E0(this.options,n),p={queryKey:this.queryKey,meta:this.meta};return r(p),Ne(this,co,!1),this.options.persister?this.options.persister(f,p,this):f(p)},s={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:o};r(s),(l=this.options.behavior)==null||l.onFetch(s,this),Ne(this,ms,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((c=s.fetchOptions)==null?void 0:c.meta))&&bt(this,ni,Di).call(this,{type:"fetch",meta:(d=s.fetchOptions)==null?void 0:d.meta});const a=f=>{var p,m,v,_;Zu(f)&&f.silent||bt(this,ni,Di).call(this,{type:"error",error:f}),Zu(f)||((m=(p=Y(this,On).config).onError)==null||m.call(p,f,this),(_=(v=Y(this,On).config).onSettled)==null||_.call(v,this.state.data,f,this)),this.scheduleGc()};return Ne(this,Kt,b0({initialPromise:n==null?void 0:n.initialPromise,fn:s.fetchFn,abort:i.abort.bind(i),onSuccess:f=>{var p,m,v,_;if(f===void 0){a(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(f)}catch(h){a(h);return}(m=(p=Y(this,On).config).onSuccess)==null||m.call(p,f,this),(_=(v=Y(this,On).config).onSettled)==null||_.call(v,f,this.state.error,this),this.scheduleGc()},onError:a,onFail:(f,p)=>{bt(this,ni,Di).call(this,{type:"failed",failureCount:f,error:p})},onPause:()=>{bt(this,ni,Di).call(this,{type:"pause"})},onContinue:()=>{bt(this,ni,Di).call(this,{type:"continue"})},retry:s.options.retry,retryDelay:s.options.retryDelay,networkMode:s.options.networkMode,canRun:()=>!0})),Y(this,Kt).start()}},hs=new WeakMap,ms=new WeakMap,On=new WeakMap,Kt=new WeakMap,Ga=new WeakMap,co=new WeakMap,ni=new WeakSet,Di=function(e){const n=i=>{switch(e.type){case"failed":return{...i,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...Gw(i.data,this.options),fetchMeta:e.meta??null};case"success":return{...i,data:e.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const r=e.error;return Zu(r)&&r.revert&&Y(this,ms)?{...Y(this,ms),fetchStatus:"idle"}:{...i,error:r,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...e.state}}};this.state=n(this.state),Vt.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),Y(this,On).notify({query:this,type:"updated",action:e})})},jv);function Gw(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:w0(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function Ww(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,i=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var mi,Xv,jw=(Xv=class extends Qa{constructor(e={}){super();qe(this,mi);this.config=e,Ne(this,mi,new Map)}build(e,n,i){const r=n.queryKey,o=n.queryHash??bh(r,n);let s=this.get(o);return s||(s=new Vw({cache:this,queryKey:r,queryHash:o,options:e.defaultQueryOptions(n),state:i,defaultOptions:e.getQueryDefaults(r)}),this.add(s)),s}add(e){Y(this,mi).has(e.queryHash)||(Y(this,mi).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=Y(this,mi).get(e.queryHash);n&&(e.destroy(),n===e&&Y(this,mi).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){Vt.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return Y(this,mi).get(e)}getAll(){return[...Y(this,mi).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(i=>_g(n,i))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(i=>_g(e,i)):n}notify(e){Vt.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){Vt.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){Vt.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},mi=new WeakMap,Xv),gi,rn,uo,vi,lr,qv,Xw=(qv=class extends A0{constructor(e){super();qe(this,vi);qe(this,gi);qe(this,rn);qe(this,uo);this.mutationId=e.mutationId,Ne(this,rn,e.mutationCache),Ne(this,gi,[]),this.state=e.state||C0(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){Y(this,gi).includes(e)||(Y(this,gi).push(e),this.clearGcTimeout(),Y(this,rn).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){Ne(this,gi,Y(this,gi).filter(n=>n!==e)),this.scheduleGc(),Y(this,rn).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){Y(this,gi).length||(this.state.status==="pending"?this.scheduleGc():Y(this,rn).remove(this))}continue(){var e;return((e=Y(this,uo))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var r,o,s,a,l,c,d,f,p,m,v,_,h,u,g,x,y,A,b,T;Ne(this,uo,b0({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(C,M)=>{bt(this,vi,lr).call(this,{type:"failed",failureCount:C,error:M})},onPause:()=>{bt(this,vi,lr).call(this,{type:"pause"})},onContinue:()=>{bt(this,vi,lr).call(this,{type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>Y(this,rn).canRun(this)}));const n=this.state.status==="pending",i=!Y(this,uo).canStart();try{if(!n){bt(this,vi,lr).call(this,{type:"pending",variables:e,isPaused:i}),await((o=(r=Y(this,rn).config).onMutate)==null?void 0:o.call(r,e,this));const M=await((a=(s=this.options).onMutate)==null?void 0:a.call(s,e));M!==this.state.context&&bt(this,vi,lr).call(this,{type:"pending",context:M,variables:e,isPaused:i})}const C=await Y(this,uo).start();return await((c=(l=Y(this,rn).config).onSuccess)==null?void 0:c.call(l,C,e,this.state.context,this)),await((f=(d=this.options).onSuccess)==null?void 0:f.call(d,C,e,this.state.context)),await((m=(p=Y(this,rn).config).onSettled)==null?void 0:m.call(p,C,null,this.state.variables,this.state.context,this)),await((_=(v=this.options).onSettled)==null?void 0:_.call(v,C,null,e,this.state.context)),bt(this,vi,lr).call(this,{type:"success",data:C}),C}catch(C){try{throw await((u=(h=Y(this,rn).config).onError)==null?void 0:u.call(h,C,e,this.state.context,this)),await((x=(g=this.options).onError)==null?void 0:x.call(g,C,e,this.state.context)),await((A=(y=Y(this,rn).config).onSettled)==null?void 0:A.call(y,void 0,C,this.state.variables,this.state.context,this)),await((T=(b=this.options).onSettled)==null?void 0:T.call(b,void 0,C,e,this.state.context)),C}finally{bt(this,vi,lr).call(this,{type:"error",error:C})}}finally{Y(this,rn).runNext(this)}}},gi=new WeakMap,rn=new WeakMap,uo=new WeakMap,vi=new WeakSet,lr=function(e){const n=i=>{switch(e.type){case"failed":return{...i,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...i,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:e.error,failureCount:i.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Vt.batch(()=>{Y(this,gi).forEach(i=>{i.onMutationUpdate(e)}),Y(this,rn).notify({mutation:this,type:"updated",action:e})})},qv);function C0(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Tn,Wa,$v,qw=($v=class extends Qa{constructor(e={}){super();qe(this,Tn);qe(this,Wa);this.config=e,Ne(this,Tn,new Map),Ne(this,Wa,Date.now())}build(e,n,i){const r=new Xw({mutationCache:this,mutationId:++sl(this,Wa)._,options:e.defaultMutationOptions(n),state:i});return this.add(r),r}add(e){const n=wl(e),i=Y(this,Tn).get(n)??[];i.push(e),Y(this,Tn).set(n,i),this.notify({type:"added",mutation:e})}remove(e){var i;const n=wl(e);if(Y(this,Tn).has(n)){const r=(i=Y(this,Tn).get(n))==null?void 0:i.filter(o=>o!==e);r&&(r.length===0?Y(this,Tn).delete(n):Y(this,Tn).set(n,r))}this.notify({type:"removed",mutation:e})}canRun(e){var i;const n=(i=Y(this,Tn).get(wl(e)))==null?void 0:i.find(r=>r.state.status==="pending");return!n||n===e}runNext(e){var i;const n=(i=Y(this,Tn).get(wl(e)))==null?void 0:i.find(r=>r!==e&&r.state.isPaused);return(n==null?void 0:n.continue())??Promise.resolve()}clear(){Vt.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}getAll(){return[...Y(this,Tn).values()].flat()}find(e){const n={exact:!0,...e};return this.getAll().find(i=>yg(n,i))}findAll(e={}){return this.getAll().filter(n=>yg(e,n))}notify(e){Vt.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return Vt.batch(()=>Promise.all(e.map(n=>n.continue().catch(ti))))}},Tn=new WeakMap,Wa=new WeakMap,$v);function wl(t){var e;return((e=t.options.scope)==null?void 0:e.id)??String(t.mutationId)}function Mg(t){return{onFetch:(e,n)=>{var d,f,p,m,v;const i=e.options,r=(p=(f=(d=e.fetchOptions)==null?void 0:d.meta)==null?void 0:f.fetchMore)==null?void 0:p.direction,o=((m=e.state.data)==null?void 0:m.pages)||[],s=((v=e.state.data)==null?void 0:v.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let _=!1;const h=x=>{Object.defineProperty(x,"signal",{enumerable:!0,get:()=>(e.signal.aborted?_=!0:e.signal.addEventListener("abort",()=>{_=!0}),e.signal)})},u=E0(e.options,e.fetchOptions),g=async(x,y,A)=>{if(_)return Promise.reject();if(y==null&&x.pages.length)return Promise.resolve(x);const b={queryKey:e.queryKey,pageParam:y,direction:A?"backward":"forward",meta:e.options.meta};h(b);const T=await u(b),{maxPages:C}=e.options,M=A?Fw:Uw;return{pages:M(x.pages,T,C),pageParams:M(x.pageParams,y,C)}};if(r&&o.length){const x=r==="backward",y=x?$w:wg,A={pages:o,pageParams:s},b=y(i,A);a=await g(A,b,x)}else{const x=t??o.length;do{const y=l===0?s[0]??i.initialPageParam:wg(i,a);if(l>0&&y==null)break;a=await g(a,y),l++}while(l<x)}return a};e.options.persister?e.fetchFn=()=>{var _,h;return(h=(_=e.options).persister)==null?void 0:h.call(_,c,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function wg(t,{pages:e,pageParams:n}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,n[i],n):void 0}function $w(t,{pages:e,pageParams:n}){var i;return e.length>0?(i=t.getPreviousPageParam)==null?void 0:i.call(t,e[0],e,n[0],n):void 0}var wt,gr,vr,gs,vs,xr,xs,_s,Yv,Yw=(Yv=class{constructor(t={}){qe(this,wt);qe(this,gr);qe(this,vr);qe(this,gs);qe(this,vs);qe(this,xr);qe(this,xs);qe(this,_s);Ne(this,wt,t.queryCache||new jw),Ne(this,gr,t.mutationCache||new qw),Ne(this,vr,t.defaultOptions||{}),Ne(this,gs,new Map),Ne(this,vs,new Map),Ne(this,xr,0)}mount(){sl(this,xr)._++,Y(this,xr)===1&&(Ne(this,xs,M0.subscribe(async t=>{t&&(await this.resumePausedMutations(),Y(this,wt).onFocus())})),Ne(this,_s,Gc.subscribe(async t=>{t&&(await this.resumePausedMutations(),Y(this,wt).onOnline())})))}unmount(){var t,e;sl(this,xr)._--,Y(this,xr)===0&&((t=Y(this,xs))==null||t.call(this),Ne(this,xs,void 0),(e=Y(this,_s))==null||e.call(this),Ne(this,_s,void 0))}isFetching(t){return Y(this,wt).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return Y(this,gr).findAll({...t,status:"pending"}).length}getQueryData(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=Y(this,wt).get(e.queryHash))==null?void 0:n.state.data}ensureQueryData(t){const e=this.getQueryData(t.queryKey);if(e===void 0)return this.fetchQuery(t);{const n=this.defaultQueryOptions(t),i=Y(this,wt).build(this,n);return t.revalidateIfStale&&i.isStaleByTime(xg(n.staleTime,i))&&this.prefetchQuery(n),Promise.resolve(e)}}getQueriesData(t){return Y(this,wt).findAll(t).map(({queryKey:e,state:n})=>{const i=n.data;return[e,i]})}setQueryData(t,e,n){const i=this.defaultQueryOptions({queryKey:t}),r=Y(this,wt).get(i.queryHash),o=r==null?void 0:r.state.data,s=Cw(e,o);if(s!==void 0)return Y(this,wt).build(this,i).setData(s,{...n,manual:!0})}setQueriesData(t,e,n){return Vt.batch(()=>Y(this,wt).findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,e,n)]))}getQueryState(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=Y(this,wt).get(e.queryHash))==null?void 0:n.state}removeQueries(t){const e=Y(this,wt);Vt.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=Y(this,wt),i={type:"active",...t};return Vt.batch(()=>(n.findAll(t).forEach(r=>{r.reset()}),this.refetchQueries(i,e)))}cancelQueries(t={},e={}){const n={revert:!0,...e},i=Vt.batch(()=>Y(this,wt).findAll(t).map(r=>r.cancel(n)));return Promise.all(i).then(ti).catch(ti)}invalidateQueries(t={},e={}){return Vt.batch(()=>{if(Y(this,wt).findAll(t).forEach(i=>{i.invalidate()}),t.refetchType==="none")return Promise.resolve();const n={...t,type:t.refetchType??t.type??"active"};return this.refetchQueries(n,e)})}refetchQueries(t={},e){const n={...e,cancelRefetch:(e==null?void 0:e.cancelRefetch)??!0},i=Vt.batch(()=>Y(this,wt).findAll(t).filter(r=>!r.isDisabled()).map(r=>{let o=r.fetch(void 0,n);return n.throwOnError||(o=o.catch(ti)),r.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(i).then(ti)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const n=Y(this,wt).build(this,e);return n.isStaleByTime(xg(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(ti).catch(ti)}fetchInfiniteQuery(t){return t.behavior=Mg(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(ti).catch(ti)}ensureInfiniteQueryData(t){return t.behavior=Mg(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return Gc.isOnline()?Y(this,gr).resumePausedMutations():Promise.resolve()}getQueryCache(){return Y(this,wt)}getMutationCache(){return Y(this,gr)}getDefaultOptions(){return Y(this,vr)}setDefaultOptions(t){Ne(this,vr,t)}setQueryDefaults(t,e){Y(this,gs).set(_o(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...Y(this,gs).values()];let n={};return e.forEach(i=>{za(t,i.queryKey)&&(n={...n,...i.defaultOptions})}),n}setMutationDefaults(t,e){Y(this,vs).set(_o(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...Y(this,vs).values()];let n={};return e.forEach(i=>{za(t,i.mutationKey)&&(n={...n,...i.defaultOptions})}),n}defaultQueryOptions(t){if(t._defaulted)return t;const e={...Y(this,vr).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=bh(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.enabled!==!0&&e.queryFn===Ah&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...Y(this,vr).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){Y(this,wt).clear(),Y(this,gr).clear()}},wt=new WeakMap,gr=new WeakMap,vr=new WeakMap,gs=new WeakMap,vs=new WeakMap,xr=new WeakMap,xs=new WeakMap,_s=new WeakMap,Yv),_r,yr,dn,Fi,Wi,uc,Rf,Kv,Kw=(Kv=class extends Qa{constructor(n,i){super();qe(this,Wi);qe(this,_r);qe(this,yr);qe(this,dn);qe(this,Fi);Ne(this,_r,n),this.setOptions(i),this.bindMethods(),bt(this,Wi,uc).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(n){var r;const i=this.options;this.options=Y(this,_r).defaultMutationOptions(n),Lw(this.options,i)||Y(this,_r).getMutationCache().notify({type:"observerOptionsUpdated",mutation:Y(this,dn),observer:this}),i!=null&&i.mutationKey&&this.options.mutationKey&&_o(i.mutationKey)!==_o(this.options.mutationKey)?this.reset():((r=Y(this,dn))==null?void 0:r.state.status)==="pending"&&Y(this,dn).setOptions(this.options)}onUnsubscribe(){var n;this.hasListeners()||(n=Y(this,dn))==null||n.removeObserver(this)}onMutationUpdate(n){bt(this,Wi,uc).call(this),bt(this,Wi,Rf).call(this,n)}getCurrentResult(){return Y(this,yr)}reset(){var n;(n=Y(this,dn))==null||n.removeObserver(this),Ne(this,dn,void 0),bt(this,Wi,uc).call(this),bt(this,Wi,Rf).call(this)}mutate(n,i){var r;return Ne(this,Fi,i),(r=Y(this,dn))==null||r.removeObserver(this),Ne(this,dn,Y(this,_r).getMutationCache().build(Y(this,_r),this.options)),Y(this,dn).addObserver(this),Y(this,dn).execute(n)}},_r=new WeakMap,yr=new WeakMap,dn=new WeakMap,Fi=new WeakMap,Wi=new WeakSet,uc=function(){var i;const n=((i=Y(this,dn))==null?void 0:i.state)??C0();Ne(this,yr,{...n,isPending:n.status==="pending",isSuccess:n.status==="success",isError:n.status==="error",isIdle:n.status==="idle",mutate:this.mutate,reset:this.reset})},Rf=function(n){Vt.batch(()=>{var i,r,o,s,a,l,c,d;if(Y(this,Fi)&&this.hasListeners()){const f=Y(this,yr).variables,p=Y(this,yr).context;(n==null?void 0:n.type)==="success"?((r=(i=Y(this,Fi)).onSuccess)==null||r.call(i,n.data,f,p),(s=(o=Y(this,Fi)).onSettled)==null||s.call(o,n.data,null,f,p)):(n==null?void 0:n.type)==="error"&&((l=(a=Y(this,Fi)).onError)==null||l.call(a,n.error,f,p),(d=(c=Y(this,Fi)).onSettled)==null||d.call(c,void 0,n.error,f,p))}this.listeners.forEach(f=>{f(Y(this,yr))})})},Kv),R0=I.createContext(void 0),Qw=t=>{const e=I.useContext(R0);if(!e)throw new Error("No QueryClient set, use QueryClientProvider to set one");return e},Zw=({client:t,children:e})=>(I.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),D.jsx(R0.Provider,{value:t,children:e}));function Jw(t,e){return typeof t=="function"?t(...e):!!t}function e1(){}function t1(t,e){const n=Qw(),[i]=I.useState(()=>new Kw(n,t));I.useEffect(()=>{i.setOptions(t)},[i,t]);const r=I.useSyncExternalStore(I.useCallback(s=>i.subscribe(Vt.batchCalls(s)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),o=I.useCallback((s,a)=>{i.mutate(s,a).catch(e1)},[i]);if(r.error&&Jw(i.options.throwOnError,[r.error]))throw r.error;return{...r,mutate:o,mutateAsync:r.mutate}}async function P0(t){if(!t.ok){const e=await t.text()||t.statusText;throw new Error(`${t.status}: ${e}`)}}async function n1(t,e,n){const i=await fetch(e,{method:t,headers:{},body:void 0,credentials:"include"});return await P0(i),i}const i1=({on401:t})=>async({queryKey:e})=>{const n=await fetch(e[0],{credentials:"include"});return t==="returnNull"&&n.status===401?null:(await P0(n),await n.json())},r1=new Yw({defaultOptions:{queries:{queryFn:i1({on401:"throw"}),refetchInterval:!1,refetchOnWindowFocus:!1,staleTime:1/0,retry:!1},mutations:{retry:!1}}}),o1=1,s1=1e6;let Ju=0;function a1(){return Ju=(Ju+1)%Number.MAX_SAFE_INTEGER,Ju.toString()}const ed=new Map,Tg=t=>{if(ed.has(t))return;const e=setTimeout(()=>{ed.delete(t),ya({type:"REMOVE_TOAST",toastId:t})},s1);ed.set(t,e)},l1=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,o1)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(n=>n.id===e.toast.id?{...n,...e.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=e;return n?Tg(n):t.toasts.forEach(i=>{Tg(i.id)}),{...t,toasts:t.toasts.map(i=>i.id===n||n===void 0?{...i,open:!1}:i)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(n=>n.id!==e.toastId)}}},dc=[];let fc={toasts:[]};function ya(t){fc=l1(fc,t),dc.forEach(e=>{e(fc)})}function c1({...t}){const e=a1(),n=r=>ya({type:"UPDATE_TOAST",toast:{...r,id:e}}),i=()=>ya({type:"DISMISS_TOAST",toastId:e});return ya({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:r=>{r||i()}}}),{id:e,dismiss:i,update:n}}function D0(){const[t,e]=I.useState(fc);return I.useEffect(()=>(dc.push(e),()=>{const n=dc.indexOf(e);n>-1&&dc.splice(n,1)}),[t]),{...t,toast:c1,dismiss:n=>ya({type:"DISMISS_TOAST",toastId:n})}}function Cn(t,e,{checkForDefaultPrevented:n=!0}={}){return function(r){if(t==null||t(r),n===!1||!r.defaultPrevented)return e==null?void 0:e(r)}}function u1(t,e){typeof t=="function"?t(e):t!=null&&(t.current=e)}function L0(...t){return e=>t.forEach(n=>u1(n,e))}function yo(...t){return I.useCallback(L0(...t),t)}function d1(t,e=[]){let n=[];function i(o,s){const a=I.createContext(s),l=n.length;n=[...n,s];function c(f){const{scope:p,children:m,...v}=f,_=(p==null?void 0:p[t][l])||a,h=I.useMemo(()=>v,Object.values(v));return D.jsx(_.Provider,{value:h,children:m})}function d(f,p){const m=(p==null?void 0:p[t][l])||a,v=I.useContext(m);if(v)return v;if(s!==void 0)return s;throw new Error(`\`${f}\` must be used within \`${o}\``)}return c.displayName=o+"Provider",[c,d]}const r=()=>{const o=n.map(s=>I.createContext(s));return function(a){const l=(a==null?void 0:a[t])||o;return I.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return r.scopeName=t,[i,f1(r,...e)]}function f1(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(o){const s=i.reduce((a,{useScope:l,scopeName:c})=>{const f=l(o)[`__scope${c}`];return{...a,...f}},{});return I.useMemo(()=>({[`__scope${e.scopeName}`]:s}),[s])}};return n.scopeName=e.scopeName,n}var Ba=I.forwardRef((t,e)=>{const{children:n,...i}=t,r=I.Children.toArray(n),o=r.find(h1);if(o){const s=o.props.children,a=r.map(l=>l===o?I.Children.count(s)>1?I.Children.only(null):I.isValidElement(s)?s.props.children:null:l);return D.jsx(Pf,{...i,ref:e,children:I.isValidElement(s)?I.cloneElement(s,void 0,a):null})}return D.jsx(Pf,{...i,ref:e,children:n})});Ba.displayName="Slot";var Pf=I.forwardRef((t,e)=>{const{children:n,...i}=t;if(I.isValidElement(n)){const r=g1(n);return I.cloneElement(n,{...m1(i,n.props),ref:e?L0(e,r):r})}return I.Children.count(n)>1?I.Children.only(null):null});Pf.displayName="SlotClone";var p1=({children:t})=>D.jsx(D.Fragment,{children:t});function h1(t){return I.isValidElement(t)&&t.type===p1}function m1(t,e){const n={...e};for(const i in e){const r=t[i],o=e[i];/^on[A-Z]/.test(i)?r&&o?n[i]=(...a)=>{o(...a),r(...a)}:r&&(n[i]=r):i==="style"?n[i]={...r,...o}:i==="className"&&(n[i]=[r,o].filter(Boolean).join(" "))}return{...t,...n}}function g1(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function v1(t){const e=t+"CollectionProvider",[n,i]=d1(e),[r,o]=n(e,{collectionRef:{current:null},itemMap:new Map}),s=m=>{const{scope:v,children:_}=m,h=Ni.useRef(null),u=Ni.useRef(new Map).current;return D.jsx(r,{scope:v,itemMap:u,collectionRef:h,children:_})};s.displayName=e;const a=t+"CollectionSlot",l=Ni.forwardRef((m,v)=>{const{scope:_,children:h}=m,u=o(a,_),g=yo(v,u.collectionRef);return D.jsx(Ba,{ref:g,children:h})});l.displayName=a;const c=t+"CollectionItemSlot",d="data-radix-collection-item",f=Ni.forwardRef((m,v)=>{const{scope:_,children:h,...u}=m,g=Ni.useRef(null),x=yo(v,g),y=o(c,_);return Ni.useEffect(()=>(y.itemMap.set(g,{ref:g,...u}),()=>void y.itemMap.delete(g))),D.jsx(Ba,{[d]:"",ref:x,children:h})});f.displayName=c;function p(m){const v=o(t+"CollectionConsumer",m);return Ni.useCallback(()=>{const h=v.collectionRef.current;if(!h)return[];const u=Array.from(h.querySelectorAll(`[${d}]`));return Array.from(v.itemMap.values()).sort((y,A)=>u.indexOf(y.ref.current)-u.indexOf(A.ref.current))},[v.collectionRef,v.itemMap])}return[{Provider:s,Slot:l,ItemSlot:f},p,i]}function x1(t,e=[]){let n=[];function i(o,s){const a=I.createContext(s),l=n.length;n=[...n,s];const c=f=>{var u;const{scope:p,children:m,...v}=f,_=((u=p==null?void 0:p[t])==null?void 0:u[l])||a,h=I.useMemo(()=>v,Object.values(v));return D.jsx(_.Provider,{value:h,children:m})};c.displayName=o+"Provider";function d(f,p){var _;const m=((_=p==null?void 0:p[t])==null?void 0:_[l])||a,v=I.useContext(m);if(v)return v;if(s!==void 0)return s;throw new Error(`\`${f}\` must be used within \`${o}\``)}return[c,d]}const r=()=>{const o=n.map(s=>I.createContext(s));return function(a){const l=(a==null?void 0:a[t])||o;return I.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return r.scopeName=t,[i,_1(r,...e)]}function _1(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(o){const s=i.reduce((a,{useScope:l,scopeName:c})=>{const f=l(o)[`__scope${c}`];return{...a,...f}},{});return I.useMemo(()=>({[`__scope${e.scopeName}`]:s}),[s])}};return n.scopeName=e.scopeName,n}var y1=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Mi=y1.reduce((t,e)=>{const n=I.forwardRef((i,r)=>{const{asChild:o,...s}=i,a=o?Ba:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),D.jsx(a,{...s,ref:r})});return n.displayName=`Primitive.${e}`,{...t,[e]:n}},{});function N0(t,e){t&&pu.flushSync(()=>t.dispatchEvent(e))}function Yi(t){const e=I.useRef(t);return I.useEffect(()=>{e.current=t}),I.useMemo(()=>(...n)=>{var i;return(i=e.current)==null?void 0:i.call(e,...n)},[])}function S1(t,e=globalThis==null?void 0:globalThis.document){const n=Yi(t);I.useEffect(()=>{const i=r=>{r.key==="Escape"&&n(r)};return e.addEventListener("keydown",i,{capture:!0}),()=>e.removeEventListener("keydown",i,{capture:!0})},[n,e])}var E1="DismissableLayer",Df="dismissableLayer.update",M1="dismissableLayer.pointerDownOutside",w1="dismissableLayer.focusOutside",bg,I0=I.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),U0=I.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:i,onPointerDownOutside:r,onFocusOutside:o,onInteractOutside:s,onDismiss:a,...l}=t,c=I.useContext(I0),[d,f]=I.useState(null),p=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,m]=I.useState({}),v=yo(e,T=>f(T)),_=Array.from(c.layers),[h]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),u=_.indexOf(h),g=d?_.indexOf(d):-1,x=c.layersWithOutsidePointerEventsDisabled.size>0,y=g>=u,A=b1(T=>{const C=T.target,M=[...c.branches].some(S=>S.contains(C));!y||M||(r==null||r(T),s==null||s(T),T.defaultPrevented||a==null||a())},p),b=A1(T=>{const C=T.target;[...c.branches].some(S=>S.contains(C))||(o==null||o(T),s==null||s(T),T.defaultPrevented||a==null||a())},p);return S1(T=>{g===c.layers.size-1&&(i==null||i(T),!T.defaultPrevented&&a&&(T.preventDefault(),a()))},p),I.useEffect(()=>{if(d)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(bg=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(d)),c.layers.add(d),Ag(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=bg)}},[d,p,n,c]),I.useEffect(()=>()=>{d&&(c.layers.delete(d),c.layersWithOutsidePointerEventsDisabled.delete(d),Ag())},[d,c]),I.useEffect(()=>{const T=()=>m({});return document.addEventListener(Df,T),()=>document.removeEventListener(Df,T)},[]),D.jsx(Mi.div,{...l,ref:v,style:{pointerEvents:x?y?"auto":"none":void 0,...t.style},onFocusCapture:Cn(t.onFocusCapture,b.onFocusCapture),onBlurCapture:Cn(t.onBlurCapture,b.onBlurCapture),onPointerDownCapture:Cn(t.onPointerDownCapture,A.onPointerDownCapture)})});U0.displayName=E1;var T1="DismissableLayerBranch",F0=I.forwardRef((t,e)=>{const n=I.useContext(I0),i=I.useRef(null),r=yo(e,i);return I.useEffect(()=>{const o=i.current;if(o)return n.branches.add(o),()=>{n.branches.delete(o)}},[n.branches]),D.jsx(Mi.div,{...t,ref:r})});F0.displayName=T1;function b1(t,e=globalThis==null?void 0:globalThis.document){const n=Yi(t),i=I.useRef(!1),r=I.useRef(()=>{});return I.useEffect(()=>{const o=a=>{if(a.target&&!i.current){let l=function(){O0(M1,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",r.current),r.current=l,e.addEventListener("click",r.current,{once:!0})):l()}else e.removeEventListener("click",r.current);i.current=!1},s=window.setTimeout(()=>{e.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(s),e.removeEventListener("pointerdown",o),e.removeEventListener("click",r.current)}},[e,n]),{onPointerDownCapture:()=>i.current=!0}}function A1(t,e=globalThis==null?void 0:globalThis.document){const n=Yi(t),i=I.useRef(!1);return I.useEffect(()=>{const r=o=>{o.target&&!i.current&&O0(w1,n,{originalEvent:o},{discrete:!1})};return e.addEventListener("focusin",r),()=>e.removeEventListener("focusin",r)},[e,n]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function Ag(){const t=new CustomEvent(Df);document.dispatchEvent(t)}function O0(t,e,n,{discrete:i}){const r=n.originalEvent.target,o=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?N0(r,o):r.dispatchEvent(o)}var C1=U0,R1=F0,Wc=globalThis!=null&&globalThis.document?I.useLayoutEffect:()=>{},P1="Portal",k0=I.forwardRef((t,e)=>{var a;const{container:n,...i}=t,[r,o]=I.useState(!1);Wc(()=>o(!0),[]);const s=n||r&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return s?KM.createPortal(D.jsx(Mi.div,{...i,ref:e}),s):null});k0.displayName=P1;function D1(t,e){return I.useReducer((n,i)=>e[n][i]??n,t)}var z0=t=>{const{present:e,children:n}=t,i=L1(e),r=typeof n=="function"?n({present:i.isPresent}):I.Children.only(n),o=yo(i.ref,N1(r));return typeof n=="function"||i.isPresent?I.cloneElement(r,{ref:o}):null};z0.displayName="Presence";function L1(t){const[e,n]=I.useState(),i=I.useRef({}),r=I.useRef(t),o=I.useRef("none"),s=t?"mounted":"unmounted",[a,l]=D1(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return I.useEffect(()=>{const c=Tl(i.current);o.current=a==="mounted"?c:"none"},[a]),Wc(()=>{const c=i.current,d=r.current;if(d!==t){const p=o.current,m=Tl(c);t?l("MOUNT"):m==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(d&&p!==m?"ANIMATION_OUT":"UNMOUNT"),r.current=t}},[t,l]),Wc(()=>{if(e){let c;const d=e.ownerDocument.defaultView??window,f=m=>{const _=Tl(i.current).includes(m.animationName);if(m.target===e&&_&&(l("ANIMATION_END"),!r.current)){const h=e.style.animationFillMode;e.style.animationFillMode="forwards",c=d.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=h)})}},p=m=>{m.target===e&&(o.current=Tl(i.current))};return e.addEventListener("animationstart",p),e.addEventListener("animationcancel",f),e.addEventListener("animationend",f),()=>{d.clearTimeout(c),e.removeEventListener("animationstart",p),e.removeEventListener("animationcancel",f),e.removeEventListener("animationend",f)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:I.useCallback(c=>{c&&(i.current=getComputedStyle(c)),n(c)},[])}}function Tl(t){return(t==null?void 0:t.animationName)||"none"}function N1(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function I1({prop:t,defaultProp:e,onChange:n=()=>{}}){const[i,r]=U1({defaultProp:e,onChange:n}),o=t!==void 0,s=o?t:i,a=Yi(n),l=I.useCallback(c=>{if(o){const f=typeof c=="function"?c(t):c;f!==t&&a(f)}else r(c)},[o,t,r,a]);return[s,l]}function U1({defaultProp:t,onChange:e}){const n=I.useState(t),[i]=n,r=I.useRef(i),o=Yi(e);return I.useEffect(()=>{r.current!==i&&(o(i),r.current=i)},[i,r,o]),n}var F1="VisuallyHidden",Ch=I.forwardRef((t,e)=>D.jsx(Mi.span,{...t,ref:e,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...t.style}}));Ch.displayName=F1;var Rh="ToastProvider",[Ph,O1,k1]=v1("Toast"),[B0,EL]=x1("Toast",[k1]),[z1,gu]=B0(Rh),H0=t=>{const{__scopeToast:e,label:n="Notification",duration:i=5e3,swipeDirection:r="right",swipeThreshold:o=50,children:s}=t,[a,l]=I.useState(null),[c,d]=I.useState(0),f=I.useRef(!1),p=I.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${Rh}\`. Expected non-empty \`string\`.`),D.jsx(Ph.Provider,{scope:e,children:D.jsx(z1,{scope:e,label:n,duration:i,swipeDirection:r,swipeThreshold:o,toastCount:c,viewport:a,onViewportChange:l,onToastAdd:I.useCallback(()=>d(m=>m+1),[]),onToastRemove:I.useCallback(()=>d(m=>m-1),[]),isFocusedToastEscapeKeyDownRef:f,isClosePausedRef:p,children:s})})};H0.displayName=Rh;var V0="ToastViewport",B1=["F8"],Lf="toast.viewportPause",Nf="toast.viewportResume",G0=I.forwardRef((t,e)=>{const{__scopeToast:n,hotkey:i=B1,label:r="Notifications ({hotkey})",...o}=t,s=gu(V0,n),a=O1(n),l=I.useRef(null),c=I.useRef(null),d=I.useRef(null),f=I.useRef(null),p=yo(e,f,s.onViewportChange),m=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),v=s.toastCount>0;I.useEffect(()=>{const h=u=>{var x;i.length!==0&&i.every(y=>u[y]||u.code===y)&&((x=f.current)==null||x.focus())};return document.addEventListener("keydown",h),()=>document.removeEventListener("keydown",h)},[i]),I.useEffect(()=>{const h=l.current,u=f.current;if(v&&h&&u){const g=()=>{if(!s.isClosePausedRef.current){const b=new CustomEvent(Lf);u.dispatchEvent(b),s.isClosePausedRef.current=!0}},x=()=>{if(s.isClosePausedRef.current){const b=new CustomEvent(Nf);u.dispatchEvent(b),s.isClosePausedRef.current=!1}},y=b=>{!h.contains(b.relatedTarget)&&x()},A=()=>{h.contains(document.activeElement)||x()};return h.addEventListener("focusin",g),h.addEventListener("focusout",y),h.addEventListener("pointermove",g),h.addEventListener("pointerleave",A),window.addEventListener("blur",g),window.addEventListener("focus",x),()=>{h.removeEventListener("focusin",g),h.removeEventListener("focusout",y),h.removeEventListener("pointermove",g),h.removeEventListener("pointerleave",A),window.removeEventListener("blur",g),window.removeEventListener("focus",x)}}},[v,s.isClosePausedRef]);const _=I.useCallback(({tabbingDirection:h})=>{const g=a().map(x=>{const y=x.ref.current,A=[y,...J1(y)];return h==="forwards"?A:A.reverse()});return(h==="forwards"?g.reverse():g).flat()},[a]);return I.useEffect(()=>{const h=f.current;if(h){const u=g=>{var A,b,T;const x=g.altKey||g.ctrlKey||g.metaKey;if(g.key==="Tab"&&!x){const C=document.activeElement,M=g.shiftKey;if(g.target===h&&M){(A=c.current)==null||A.focus();return}const z=_({tabbingDirection:M?"backwards":"forwards"}),G=z.findIndex(B=>B===C);td(z.slice(G+1))?g.preventDefault():M?(b=c.current)==null||b.focus():(T=d.current)==null||T.focus()}};return h.addEventListener("keydown",u),()=>h.removeEventListener("keydown",u)}},[a,_]),D.jsxs(R1,{ref:l,role:"region","aria-label":r.replace("{hotkey}",m),tabIndex:-1,style:{pointerEvents:v?void 0:"none"},children:[v&&D.jsx(If,{ref:c,onFocusFromOutsideViewport:()=>{const h=_({tabbingDirection:"forwards"});td(h)}}),D.jsx(Ph.Slot,{scope:n,children:D.jsx(Mi.ol,{tabIndex:-1,...o,ref:p})}),v&&D.jsx(If,{ref:d,onFocusFromOutsideViewport:()=>{const h=_({tabbingDirection:"backwards"});td(h)}})]})});G0.displayName=V0;var W0="ToastFocusProxy",If=I.forwardRef((t,e)=>{const{__scopeToast:n,onFocusFromOutsideViewport:i,...r}=t,o=gu(W0,n);return D.jsx(Ch,{"aria-hidden":!0,tabIndex:0,...r,ref:e,style:{position:"fixed"},onFocus:s=>{var c;const a=s.relatedTarget;!((c=o.viewport)!=null&&c.contains(a))&&i()}})});If.displayName=W0;var vu="Toast",H1="toast.swipeStart",V1="toast.swipeMove",G1="toast.swipeCancel",W1="toast.swipeEnd",j0=I.forwardRef((t,e)=>{const{forceMount:n,open:i,defaultOpen:r,onOpenChange:o,...s}=t,[a=!0,l]=I1({prop:i,defaultProp:r,onChange:o});return D.jsx(z0,{present:n||a,children:D.jsx(q1,{open:a,...s,ref:e,onClose:()=>l(!1),onPause:Yi(t.onPause),onResume:Yi(t.onResume),onSwipeStart:Cn(t.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Cn(t.onSwipeMove,c=>{const{x:d,y:f}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${d}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${f}px`)}),onSwipeCancel:Cn(t.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Cn(t.onSwipeEnd,c=>{const{x:d,y:f}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${d}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${f}px`),l(!1)})})})});j0.displayName=vu;var[j1,X1]=B0(vu,{onClose(){}}),q1=I.forwardRef((t,e)=>{const{__scopeToast:n,type:i="foreground",duration:r,open:o,onClose:s,onEscapeKeyDown:a,onPause:l,onResume:c,onSwipeStart:d,onSwipeMove:f,onSwipeCancel:p,onSwipeEnd:m,...v}=t,_=gu(vu,n),[h,u]=I.useState(null),g=yo(e,B=>u(B)),x=I.useRef(null),y=I.useRef(null),A=r||_.duration,b=I.useRef(0),T=I.useRef(A),C=I.useRef(0),{onToastAdd:M,onToastRemove:S}=_,P=Yi(()=>{var K;(h==null?void 0:h.contains(document.activeElement))&&((K=_.viewport)==null||K.focus()),s()}),z=I.useCallback(B=>{!B||B===1/0||(window.clearTimeout(C.current),b.current=new Date().getTime(),C.current=window.setTimeout(P,B))},[P]);I.useEffect(()=>{const B=_.viewport;if(B){const K=()=>{z(T.current),c==null||c()},Z=()=>{const ee=new Date().getTime()-b.current;T.current=T.current-ee,window.clearTimeout(C.current),l==null||l()};return B.addEventListener(Lf,Z),B.addEventListener(Nf,K),()=>{B.removeEventListener(Lf,Z),B.removeEventListener(Nf,K)}}},[_.viewport,A,l,c,z]),I.useEffect(()=>{o&&!_.isClosePausedRef.current&&z(A)},[o,A,_.isClosePausedRef,z]),I.useEffect(()=>(M(),()=>S()),[M,S]);const G=I.useMemo(()=>h?Z0(h):null,[h]);return _.viewport?D.jsxs(D.Fragment,{children:[G&&D.jsx($1,{__scopeToast:n,role:"status","aria-live":i==="foreground"?"assertive":"polite","aria-atomic":!0,children:G}),D.jsx(j1,{scope:n,onClose:P,children:pu.createPortal(D.jsx(Ph.ItemSlot,{scope:n,children:D.jsx(C1,{asChild:!0,onEscapeKeyDown:Cn(a,()=>{_.isFocusedToastEscapeKeyDownRef.current||P(),_.isFocusedToastEscapeKeyDownRef.current=!1}),children:D.jsx(Mi.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":o?"open":"closed","data-swipe-direction":_.swipeDirection,...v,ref:g,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:Cn(t.onKeyDown,B=>{B.key==="Escape"&&(a==null||a(B.nativeEvent),B.nativeEvent.defaultPrevented||(_.isFocusedToastEscapeKeyDownRef.current=!0,P()))}),onPointerDown:Cn(t.onPointerDown,B=>{B.button===0&&(x.current={x:B.clientX,y:B.clientY})}),onPointerMove:Cn(t.onPointerMove,B=>{if(!x.current)return;const K=B.clientX-x.current.x,Z=B.clientY-x.current.y,ee=!!y.current,N=["left","right"].includes(_.swipeDirection),q=["left","up"].includes(_.swipeDirection)?Math.min:Math.max,te=N?q(0,K):0,oe=N?0:q(0,Z),Se=B.pointerType==="touch"?10:2,Be={x:te,y:oe},Q={originalEvent:B,delta:Be};ee?(y.current=Be,bl(V1,f,Q,{discrete:!1})):Cg(Be,_.swipeDirection,Se)?(y.current=Be,bl(H1,d,Q,{discrete:!1}),B.target.setPointerCapture(B.pointerId)):(Math.abs(K)>Se||Math.abs(Z)>Se)&&(x.current=null)}),onPointerUp:Cn(t.onPointerUp,B=>{const K=y.current,Z=B.target;if(Z.hasPointerCapture(B.pointerId)&&Z.releasePointerCapture(B.pointerId),y.current=null,x.current=null,K){const ee=B.currentTarget,N={originalEvent:B,delta:K};Cg(K,_.swipeDirection,_.swipeThreshold)?bl(W1,m,N,{discrete:!0}):bl(G1,p,N,{discrete:!0}),ee.addEventListener("click",q=>q.preventDefault(),{once:!0})}})})})}),_.viewport)})]}):null}),$1=t=>{const{__scopeToast:e,children:n,...i}=t,r=gu(vu,e),[o,s]=I.useState(!1),[a,l]=I.useState(!1);return Q1(()=>s(!0)),I.useEffect(()=>{const c=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(c)},[]),a?null:D.jsx(k0,{asChild:!0,children:D.jsx(Ch,{...i,children:o&&D.jsxs(D.Fragment,{children:[r.label," ",n]})})})},Y1="ToastTitle",X0=I.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return D.jsx(Mi.div,{...i,ref:e})});X0.displayName=Y1;var K1="ToastDescription",q0=I.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return D.jsx(Mi.div,{...i,ref:e})});q0.displayName=K1;var $0="ToastAction",Y0=I.forwardRef((t,e)=>{const{altText:n,...i}=t;return n.trim()?D.jsx(Q0,{altText:n,asChild:!0,children:D.jsx(Dh,{...i,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${$0}\`. Expected non-empty \`string\`.`),null)});Y0.displayName=$0;var K0="ToastClose",Dh=I.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t,r=X1(K0,n);return D.jsx(Q0,{asChild:!0,children:D.jsx(Mi.button,{type:"button",...i,ref:e,onClick:Cn(t.onClick,r.onClose)})})});Dh.displayName=K0;var Q0=I.forwardRef((t,e)=>{const{__scopeToast:n,altText:i,...r}=t;return D.jsx(Mi.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":i||void 0,...r,ref:e})});function Z0(t){const e=[];return Array.from(t.childNodes).forEach(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent&&e.push(i.textContent),Z1(i)){const r=i.ariaHidden||i.hidden||i.style.display==="none",o=i.dataset.radixToastAnnounceExclude==="";if(!r)if(o){const s=i.dataset.radixToastAnnounceAlt;s&&e.push(s)}else e.push(...Z0(i))}}),e}function bl(t,e,n,{discrete:i}){const r=n.originalEvent.currentTarget,o=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?N0(r,o):r.dispatchEvent(o)}var Cg=(t,e,n=0)=>{const i=Math.abs(t.x),r=Math.abs(t.y),o=i>r;return e==="left"||e==="right"?o&&i>n:!o&&r>n};function Q1(t=()=>{}){const e=Yi(t);Wc(()=>{let n=0,i=0;return n=window.requestAnimationFrame(()=>i=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(i)}},[e])}function Z1(t){return t.nodeType===t.ELEMENT_NODE}function J1(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const r=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||r?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function td(t){const e=document.activeElement;return t.some(n=>n===e?!0:(n.focus(),document.activeElement!==e))}var eT=H0,J0=G0,ey=j0,ty=X0,ny=q0,iy=Y0,ry=Dh;function oy(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=oy(t[e]))&&(i&&(i+=" "),i+=n);else for(e in t)t[e]&&(i&&(i+=" "),i+=e);return i}function tT(){for(var t,e,n=0,i="";n<arguments.length;)(t=arguments[n++])&&(e=oy(t))&&(i&&(i+=" "),i+=e);return i}const Rg=t=>typeof t=="boolean"?"".concat(t):t===0?"0":t,Pg=tT,sy=(t,e)=>n=>{var i;if((e==null?void 0:e.variants)==null)return Pg(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:o}=e,s=Object.keys(r).map(c=>{const d=n==null?void 0:n[c],f=o==null?void 0:o[c];if(d===null)return null;const p=Rg(d)||Rg(f);return r[c][p]}),a=n&&Object.entries(n).reduce((c,d)=>{let[f,p]=d;return p===void 0||(c[f]=p),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,d)=>{let{class:f,className:p,...m}=d;return Object.entries(m).every(v=>{let[_,h]=v;return Array.isArray(h)?h.includes({...o,...a}[_]):{...o,...a}[_]===h})?[...c,f,p]:c},[]);return Pg(t,s,l,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ay=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var iT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rT=I.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:o,iconNode:s,...a},l)=>I.createElement("svg",{ref:l,...iT,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:ay("lucide",r),...a},[...s.map(([c,d])=>I.createElement(c,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=(t,e)=>{const n=I.forwardRef(({className:i,...r},o)=>I.createElement(rT,{ref:o,iconNode:e,className:ay(`lucide-${nT(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oT=yn("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sT=yn("Cookie",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aT=yn("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=yn("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=yn("FileImage",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=yn("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lT=yn("Handshake",[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cT=yn("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=yn("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uT=yn("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=yn("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dT=yn("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=yn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fT=yn("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);function fy(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=fy(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function pT(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=fy(t))&&(i&&(i+=" "),i+=e);return i}const Nh="-",hT=t=>{const e=gT(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:s=>{const a=s.split(Nh);return a[0]===""&&a.length!==1&&a.shift(),py(a,e)||mT(s)},getConflictingClassGroupIds:(s,a)=>{const l=n[s]||[];return a&&i[s]?[...l,...i[s]]:l}}},py=(t,e)=>{var s;if(t.length===0)return e.classGroupId;const n=t[0],i=e.nextPart.get(n),r=i?py(t.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const o=t.join(Nh);return(s=e.validators.find(({validator:a})=>a(o)))==null?void 0:s.classGroupId},Lg=/^\[(.+)\]$/,mT=t=>{if(Lg.test(t)){const e=Lg.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},gT=t=>{const{theme:e,prefix:n}=t,i={nextPart:new Map,validators:[]};return xT(Object.entries(t.classGroups),n).forEach(([o,s])=>{Uf(s,i,o,e)}),i},Uf=(t,e,n,i)=>{t.forEach(r=>{if(typeof r=="string"){const o=r===""?e:Ng(e,r);o.classGroupId=n;return}if(typeof r=="function"){if(vT(r)){Uf(r(i),e,n,i);return}e.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([o,s])=>{Uf(s,Ng(e,o),n,i)})})},Ng=(t,e)=>{let n=t;return e.split(Nh).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},vT=t=>t.isThemeGetter,xT=(t,e)=>e?t.map(([n,i])=>{const r=i.map(o=>typeof o=="string"?e+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([s,a])=>[e+s,a])):o);return[n,r]}):t,_T=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,i=new Map;const r=(o,s)=>{n.set(o,s),e++,e>t&&(e=0,i=n,n=new Map)};return{get(o){let s=n.get(o);if(s!==void 0)return s;if((s=i.get(o))!==void 0)return r(o,s),s},set(o,s){n.has(o)?n.set(o,s):r(o,s)}}},hy="!",yT=t=>{const{separator:e,experimentalParseClassName:n}=t,i=e.length===1,r=e[0],o=e.length,s=a=>{const l=[];let c=0,d=0,f;for(let h=0;h<a.length;h++){let u=a[h];if(c===0){if(u===r&&(i||a.slice(h,h+o)===e)){l.push(a.slice(d,h)),d=h+o;continue}if(u==="/"){f=h;continue}}u==="["?c++:u==="]"&&c--}const p=l.length===0?a:a.substring(d),m=p.startsWith(hy),v=m?p.substring(1):p,_=f&&f>d?f-d:void 0;return{modifiers:l,hasImportantModifier:m,baseClassName:v,maybePostfixModifierPosition:_}};return n?a=>n({className:a,parseClassName:s}):s},ST=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(i=>{i[0]==="["?(e.push(...n.sort(),i),n=[]):n.push(i)}),e.push(...n.sort()),e},ET=t=>({cache:_T(t.cacheSize),parseClassName:yT(t),...hT(t)}),MT=/\s+/,wT=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r}=e,o=[],s=t.trim().split(MT);let a="";for(let l=s.length-1;l>=0;l-=1){const c=s[l],{modifiers:d,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:m}=n(c);let v=!!m,_=i(v?p.substring(0,m):p);if(!_){if(!v){a=c+(a.length>0?" "+a:a);continue}if(_=i(p),!_){a=c+(a.length>0?" "+a:a);continue}v=!1}const h=ST(d).join(":"),u=f?h+hy:h,g=u+_;if(o.includes(g))continue;o.push(g);const x=r(_,v);for(let y=0;y<x.length;++y){const A=x[y];o.push(u+A)}a=c+(a.length>0?" "+a:a)}return a};function TT(){let t=0,e,n,i="";for(;t<arguments.length;)(e=arguments[t++])&&(n=my(e))&&(i&&(i+=" "),i+=n);return i}const my=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=my(t[i]))&&(n&&(n+=" "),n+=e);return n};function bT(t,...e){let n,i,r,o=s;function s(l){const c=e.reduce((d,f)=>f(d),t());return n=ET(c),i=n.cache.get,r=n.cache.set,o=a,a(l)}function a(l){const c=i(l);if(c)return c;const d=wT(l,n);return r(l,d),d}return function(){return o(TT.apply(null,arguments))}}const pt=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},gy=/^\[(?:([a-z-]+):)?(.+)\]$/i,AT=/^\d+\/\d+$/,CT=new Set(["px","full","screen"]),RT=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,PT=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,DT=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,LT=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,NT=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ti=t=>as(t)||CT.has(t)||AT.test(t),er=t=>Bs(t,"length",HT),as=t=>!!t&&!Number.isNaN(Number(t)),nd=t=>Bs(t,"number",as),Js=t=>!!t&&Number.isInteger(Number(t)),IT=t=>t.endsWith("%")&&as(t.slice(0,-1)),ke=t=>gy.test(t),tr=t=>RT.test(t),UT=new Set(["length","size","percentage"]),FT=t=>Bs(t,UT,vy),OT=t=>Bs(t,"position",vy),kT=new Set(["image","url"]),zT=t=>Bs(t,kT,GT),BT=t=>Bs(t,"",VT),ea=()=>!0,Bs=(t,e,n)=>{const i=gy.exec(t);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):n(i[2]):!1},HT=t=>PT.test(t)&&!DT.test(t),vy=()=>!1,VT=t=>LT.test(t),GT=t=>NT.test(t),WT=()=>{const t=pt("colors"),e=pt("spacing"),n=pt("blur"),i=pt("brightness"),r=pt("borderColor"),o=pt("borderRadius"),s=pt("borderSpacing"),a=pt("borderWidth"),l=pt("contrast"),c=pt("grayscale"),d=pt("hueRotate"),f=pt("invert"),p=pt("gap"),m=pt("gradientColorStops"),v=pt("gradientColorStopPositions"),_=pt("inset"),h=pt("margin"),u=pt("opacity"),g=pt("padding"),x=pt("saturate"),y=pt("scale"),A=pt("sepia"),b=pt("skew"),T=pt("space"),C=pt("translate"),M=()=>["auto","contain","none"],S=()=>["auto","hidden","clip","visible","scroll"],P=()=>["auto",ke,e],z=()=>[ke,e],G=()=>["",Ti,er],B=()=>["auto",as,ke],K=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Z=()=>["solid","dashed","dotted","double","none"],ee=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],N=()=>["start","end","center","between","around","evenly","stretch"],q=()=>["","0",ke],te=()=>["auto","avoid","all","avoid-page","page","left","right","column"],oe=()=>[as,ke];return{cacheSize:500,separator:":",theme:{colors:[ea],spacing:[Ti,er],blur:["none","",tr,ke],brightness:oe(),borderColor:[t],borderRadius:["none","","full",tr,ke],borderSpacing:z(),borderWidth:G(),contrast:oe(),grayscale:q(),hueRotate:oe(),invert:q(),gap:z(),gradientColorStops:[t],gradientColorStopPositions:[IT,er],inset:P(),margin:P(),opacity:oe(),padding:z(),saturate:oe(),scale:oe(),sepia:q(),skew:oe(),space:z(),translate:z()},classGroups:{aspect:[{aspect:["auto","square","video",ke]}],container:["container"],columns:[{columns:[tr]}],"break-after":[{"break-after":te()}],"break-before":[{"break-before":te()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...K(),ke]}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:M()}],"overscroll-x":[{"overscroll-x":M()}],"overscroll-y":[{"overscroll-y":M()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[_]}],"inset-x":[{"inset-x":[_]}],"inset-y":[{"inset-y":[_]}],start:[{start:[_]}],end:[{end:[_]}],top:[{top:[_]}],right:[{right:[_]}],bottom:[{bottom:[_]}],left:[{left:[_]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Js,ke]}],basis:[{basis:P()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",ke]}],grow:[{grow:q()}],shrink:[{shrink:q()}],order:[{order:["first","last","none",Js,ke]}],"grid-cols":[{"grid-cols":[ea]}],"col-start-end":[{col:["auto",{span:["full",Js,ke]},ke]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[ea]}],"row-start-end":[{row:["auto",{span:[Js,ke]},ke]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",ke]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",ke]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...N()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...N(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...N(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[g]}],px:[{px:[g]}],py:[{py:[g]}],ps:[{ps:[g]}],pe:[{pe:[g]}],pt:[{pt:[g]}],pr:[{pr:[g]}],pb:[{pb:[g]}],pl:[{pl:[g]}],m:[{m:[h]}],mx:[{mx:[h]}],my:[{my:[h]}],ms:[{ms:[h]}],me:[{me:[h]}],mt:[{mt:[h]}],mr:[{mr:[h]}],mb:[{mb:[h]}],ml:[{ml:[h]}],"space-x":[{"space-x":[T]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[T]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",ke,e]}],"min-w":[{"min-w":[ke,e,"min","max","fit"]}],"max-w":[{"max-w":[ke,e,"none","full","min","max","fit","prose",{screen:[tr]},tr]}],h:[{h:[ke,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[ke,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[ke,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[ke,e,"auto","min","max","fit"]}],"font-size":[{text:["base",tr,er]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",nd]}],"font-family":[{font:[ea]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",ke]}],"line-clamp":[{"line-clamp":["none",as,nd]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ti,ke]}],"list-image":[{"list-image":["none",ke]}],"list-style-type":[{list:["none","disc","decimal",ke]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[u]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[u]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Z(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ti,er]}],"underline-offset":[{"underline-offset":["auto",Ti,ke]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:z()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ke]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ke]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[u]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...K(),OT]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",FT]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},zT]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[u]}],"border-style":[{border:[...Z(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[u]}],"divide-style":[{divide:Z()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...Z()]}],"outline-offset":[{"outline-offset":[Ti,ke]}],"outline-w":[{outline:[Ti,er]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:G()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[u]}],"ring-offset-w":[{"ring-offset":[Ti,er]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",tr,BT]}],"shadow-color":[{shadow:[ea]}],opacity:[{opacity:[u]}],"mix-blend":[{"mix-blend":[...ee(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ee()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",tr,ke]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[f]}],saturate:[{saturate:[x]}],sepia:[{sepia:[A]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[u]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[A]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",ke]}],duration:[{duration:oe()}],ease:[{ease:["linear","in","out","in-out",ke]}],delay:[{delay:oe()}],animate:[{animate:["none","spin","ping","pulse","bounce",ke]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[y]}],"scale-x":[{"scale-x":[y]}],"scale-y":[{"scale-y":[y]}],rotate:[{rotate:[Js,ke]}],"translate-x":[{"translate-x":[C]}],"translate-y":[{"translate-y":[C]}],"skew-x":[{"skew-x":[b]}],"skew-y":[{"skew-y":[b]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",ke]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ke]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":z()}],"scroll-mx":[{"scroll-mx":z()}],"scroll-my":[{"scroll-my":z()}],"scroll-ms":[{"scroll-ms":z()}],"scroll-me":[{"scroll-me":z()}],"scroll-mt":[{"scroll-mt":z()}],"scroll-mr":[{"scroll-mr":z()}],"scroll-mb":[{"scroll-mb":z()}],"scroll-ml":[{"scroll-ml":z()}],"scroll-p":[{"scroll-p":z()}],"scroll-px":[{"scroll-px":z()}],"scroll-py":[{"scroll-py":z()}],"scroll-ps":[{"scroll-ps":z()}],"scroll-pe":[{"scroll-pe":z()}],"scroll-pt":[{"scroll-pt":z()}],"scroll-pr":[{"scroll-pr":z()}],"scroll-pb":[{"scroll-pb":z()}],"scroll-pl":[{"scroll-pl":z()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ke]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Ti,er,nd]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},jT=bT(WT);function Sn(...t){return jT(pT(t))}const XT=eT,xy=I.forwardRef(({className:t,...e},n)=>D.jsx(J0,{ref:n,className:Sn("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));xy.displayName=J0.displayName;const qT=sy("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),_y=I.forwardRef(({className:t,variant:e,...n},i)=>D.jsx(ey,{ref:i,className:Sn(qT({variant:e}),t),...n}));_y.displayName=ey.displayName;const $T=I.forwardRef(({className:t,...e},n)=>D.jsx(iy,{ref:n,className:Sn("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",t),...e}));$T.displayName=iy.displayName;const yy=I.forwardRef(({className:t,...e},n)=>D.jsx(ry,{ref:n,className:Sn("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...e,children:D.jsx(Lh,{className:"h-4 w-4"})}));yy.displayName=ry.displayName;const Sy=I.forwardRef(({className:t,...e},n)=>D.jsx(ty,{ref:n,className:Sn("text-sm font-semibold",t),...e}));Sy.displayName=ty.displayName;const Ey=I.forwardRef(({className:t,...e},n)=>D.jsx(ny,{ref:n,className:Sn("text-sm opacity-90",t),...e}));Ey.displayName=ny.displayName;function YT(){const{toasts:t}=D0();return D.jsxs(XT,{children:[t.map(function({id:e,title:n,description:i,action:r,...o}){return D.jsxs(_y,{...o,children:[D.jsxs("div",{className:"grid gap-1",children:[n&&D.jsx(Sy,{children:n}),i&&D.jsx(Ey,{children:i})]}),r,D.jsx(yy,{})]},e)}),D.jsx(xy,{})]})}const My=I.forwardRef(({className:t,...e},n)=>D.jsx("div",{ref:n,className:Sn("rounded-lg border bg-card text-card-foreground shadow-sm",t),...e}));My.displayName="Card";const KT=I.forwardRef(({className:t,...e},n)=>D.jsx("div",{ref:n,className:Sn("flex flex-col space-y-1.5 p-6",t),...e}));KT.displayName="CardHeader";const QT=I.forwardRef(({className:t,...e},n)=>D.jsx("h3",{ref:n,className:Sn("text-2xl font-semibold leading-none tracking-tight",t),...e}));QT.displayName="CardTitle";const ZT=I.forwardRef(({className:t,...e},n)=>D.jsx("p",{ref:n,className:Sn("text-sm text-muted-foreground",t),...e}));ZT.displayName="CardDescription";const wy=I.forwardRef(({className:t,...e},n)=>D.jsx("div",{ref:n,className:Sn("p-6 pt-0",t),...e}));wy.displayName="CardContent";const JT=I.forwardRef(({className:t,...e},n)=>D.jsx("div",{ref:n,className:Sn("flex items-center p-6 pt-0",t),...e}));JT.displayName="CardFooter";function eb(){return D.jsx("div",{className:"min-h-screen w-full flex items-center justify-center bg-gray-50",children:D.jsx(My,{className:"w-full max-w-md mx-4",children:D.jsxs(wy,{className:"pt-6",children:[D.jsxs("div",{className:"flex mb-4 gap-2",children:[D.jsx(oT,{className:"h-8 w-8 text-red-500"}),D.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"404 Page Not Found"})]}),D.jsx("p",{className:"mt-4 text-sm text-gray-600",children:"Did you forget to add the page to the router?"})]})})})}const tb=sy("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),Cs=I.forwardRef(({className:t,variant:e,size:n,asChild:i=!1,...r},o)=>{const s=i?Ba:"button";return D.jsx(s,{className:Sn(tb({variant:e,size:n,className:t})),ref:o,...r})});Cs.displayName="Button";const nb=()=>{const[t,e]=I.useState(!1),[n]=ww(),i=()=>{e(!t)},r=o=>n===o?"text-primary":"text-white hover:text-primary";return D.jsxs("nav",{className:"fixed top-0 left-0 w-full z-50 glass",children:[D.jsx("div",{className:"container mx-auto px-4 py-4",children:D.jsxs("div",{className:"flex justify-between items-center",children:[D.jsx(bn,{href:"/",className:"flex items-center space-x-2",children:D.jsxs("span",{className:"text-white font-poppins font-bold text-xl",children:[D.jsx("span",{className:"text-primary",children:"PDF"}),"Converter"]})}),D.jsxs("div",{className:"hidden md:flex space-x-8",children:[D.jsx(bn,{href:"/",className:`transition-colors font-medium ${r("/")}`,children:"Home"}),D.jsx(bn,{href:"/about",className:`transition-colors font-medium ${r("/about")}`,children:"About Us"}),D.jsx(bn,{href:"/terms",className:`transition-colors font-medium ${r("/terms")}`,children:"Terms & Conditions"}),D.jsx(bn,{href:"/privacy",className:`transition-colors font-medium ${r("/privacy")}`,children:"Privacy Policy"})]}),D.jsx(Cs,{onClick:i,variant:"ghost",size:"icon",className:"md:hidden text-white","aria-label":"Toggle menu",children:t?D.jsx(Lh,{className:"h-6 w-6"}):D.jsx(cT,{className:"h-6 w-6"})})]})}),t&&D.jsx("div",{className:"md:hidden glass",children:D.jsxs("div",{className:"px-4 py-3 space-y-4",children:[D.jsx(bn,{href:"/",className:`block transition-colors ${r("/")}`,onClick:i,children:"Home"}),D.jsx(bn,{href:"/about",className:`block transition-colors ${r("/about")}`,onClick:i,children:"About Us"}),D.jsx(bn,{href:"/terms",className:`block transition-colors ${r("/terms")}`,onClick:i,children:"Terms & Conditions"}),D.jsx(bn,{href:"/privacy",className:`block transition-colors ${r("/privacy")}`,onClick:i,children:"Privacy Policy"})]})})]})},ib=()=>D.jsx("footer",{className:"py-8 border-t border-white/10",children:D.jsx("div",{className:"container mx-auto px-4",children:D.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center",children:[D.jsx("div",{className:"mb-4 md:mb-0",children:D.jsxs("p",{className:"text-white/60",children:["© ",new Date().getFullYear()," PDFConverter. All rights reserved."]})}),D.jsxs("div",{className:"flex space-x-4",children:[D.jsx(bn,{href:"/",className:"text-white/60 hover:text-primary transition-colors",children:"Home"}),D.jsx(bn,{href:"/about",className:"text-white/60 hover:text-primary transition-colors",children:"About Us"}),D.jsx(bn,{href:"/terms",className:"text-white/60 hover:text-primary transition-colors",children:"Terms"}),D.jsx(bn,{href:"/privacy",className:"text-white/60 hover:text-primary transition-colors",children:"Privacy"})]})]})})});var Ty={exports:{}},rb="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ob=rb,sb=ob;function by(){}function Ay(){}Ay.resetWarningCache=by;var ab=function(){function t(i,r,o,s,a,l){if(l!==sb){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Ay,resetWarningCache:by};return n.PropTypes=n,n};Ty.exports=ab();var lb=Ty.exports;const ut=Rp(lb);function To(t,e,n,i){function r(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(d){try{c(i.next(d))}catch(f){s(f)}}function l(d){try{c(i.throw(d))}catch(f){s(f)}}function c(d){d.done?o(d.value):r(d.value).then(a,l)}c((i=i.apply(t,e||[])).next())})}const cb=new Map([["1km","application/vnd.1000minds.decision-model+xml"],["3dml","text/vnd.in3d.3dml"],["3ds","image/x-3ds"],["3g2","video/3gpp2"],["3gp","video/3gp"],["3gpp","video/3gpp"],["3mf","model/3mf"],["7z","application/x-7z-compressed"],["7zip","application/x-7z-compressed"],["123","application/vnd.lotus-1-2-3"],["aab","application/x-authorware-bin"],["aac","audio/x-acc"],["aam","application/x-authorware-map"],["aas","application/x-authorware-seg"],["abw","application/x-abiword"],["ac","application/vnd.nokia.n-gage.ac+xml"],["ac3","audio/ac3"],["acc","application/vnd.americandynamics.acc"],["ace","application/x-ace-compressed"],["acu","application/vnd.acucobol"],["acutc","application/vnd.acucorp"],["adp","audio/adpcm"],["aep","application/vnd.audiograph"],["afm","application/x-font-type1"],["afp","application/vnd.ibm.modcap"],["ahead","application/vnd.ahead.space"],["ai","application/pdf"],["aif","audio/x-aiff"],["aifc","audio/x-aiff"],["aiff","audio/x-aiff"],["air","application/vnd.adobe.air-application-installer-package+zip"],["ait","application/vnd.dvb.ait"],["ami","application/vnd.amiga.ami"],["amr","audio/amr"],["apk","application/vnd.android.package-archive"],["apng","image/apng"],["appcache","text/cache-manifest"],["application","application/x-ms-application"],["apr","application/vnd.lotus-approach"],["arc","application/x-freearc"],["arj","application/x-arj"],["asc","application/pgp-signature"],["asf","video/x-ms-asf"],["asm","text/x-asm"],["aso","application/vnd.accpac.simply.aso"],["asx","video/x-ms-asf"],["atc","application/vnd.acucorp"],["atom","application/atom+xml"],["atomcat","application/atomcat+xml"],["atomdeleted","application/atomdeleted+xml"],["atomsvc","application/atomsvc+xml"],["atx","application/vnd.antix.game-component"],["au","audio/x-au"],["avi","video/x-msvideo"],["avif","image/avif"],["aw","application/applixware"],["azf","application/vnd.airzip.filesecure.azf"],["azs","application/vnd.airzip.filesecure.azs"],["azv","image/vnd.airzip.accelerator.azv"],["azw","application/vnd.amazon.ebook"],["b16","image/vnd.pco.b16"],["bat","application/x-msdownload"],["bcpio","application/x-bcpio"],["bdf","application/x-font-bdf"],["bdm","application/vnd.syncml.dm+wbxml"],["bdoc","application/x-bdoc"],["bed","application/vnd.realvnc.bed"],["bh2","application/vnd.fujitsu.oasysprs"],["bin","application/octet-stream"],["blb","application/x-blorb"],["blorb","application/x-blorb"],["bmi","application/vnd.bmi"],["bmml","application/vnd.balsamiq.bmml+xml"],["bmp","image/bmp"],["book","application/vnd.framemaker"],["box","application/vnd.previewsystems.box"],["boz","application/x-bzip2"],["bpk","application/octet-stream"],["bpmn","application/octet-stream"],["bsp","model/vnd.valve.source.compiled-map"],["btif","image/prs.btif"],["buffer","application/octet-stream"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["c","text/x-c"],["c4d","application/vnd.clonk.c4group"],["c4f","application/vnd.clonk.c4group"],["c4g","application/vnd.clonk.c4group"],["c4p","application/vnd.clonk.c4group"],["c4u","application/vnd.clonk.c4group"],["c11amc","application/vnd.cluetrust.cartomobile-config"],["c11amz","application/vnd.cluetrust.cartomobile-config-pkg"],["cab","application/vnd.ms-cab-compressed"],["caf","audio/x-caf"],["cap","application/vnd.tcpdump.pcap"],["car","application/vnd.curl.car"],["cat","application/vnd.ms-pki.seccat"],["cb7","application/x-cbr"],["cba","application/x-cbr"],["cbr","application/x-cbr"],["cbt","application/x-cbr"],["cbz","application/x-cbr"],["cc","text/x-c"],["cco","application/x-cocoa"],["cct","application/x-director"],["ccxml","application/ccxml+xml"],["cdbcmsg","application/vnd.contact.cmsg"],["cda","application/x-cdf"],["cdf","application/x-netcdf"],["cdfx","application/cdfx+xml"],["cdkey","application/vnd.mediastation.cdkey"],["cdmia","application/cdmi-capability"],["cdmic","application/cdmi-container"],["cdmid","application/cdmi-domain"],["cdmio","application/cdmi-object"],["cdmiq","application/cdmi-queue"],["cdr","application/cdr"],["cdx","chemical/x-cdx"],["cdxml","application/vnd.chemdraw+xml"],["cdy","application/vnd.cinderella"],["cer","application/pkix-cert"],["cfs","application/x-cfs-compressed"],["cgm","image/cgm"],["chat","application/x-chat"],["chm","application/vnd.ms-htmlhelp"],["chrt","application/vnd.kde.kchart"],["cif","chemical/x-cif"],["cii","application/vnd.anser-web-certificate-issue-initiation"],["cil","application/vnd.ms-artgalry"],["cjs","application/node"],["cla","application/vnd.claymore"],["class","application/octet-stream"],["clkk","application/vnd.crick.clicker.keyboard"],["clkp","application/vnd.crick.clicker.palette"],["clkt","application/vnd.crick.clicker.template"],["clkw","application/vnd.crick.clicker.wordbank"],["clkx","application/vnd.crick.clicker"],["clp","application/x-msclip"],["cmc","application/vnd.cosmocaller"],["cmdf","chemical/x-cmdf"],["cml","chemical/x-cml"],["cmp","application/vnd.yellowriver-custom-menu"],["cmx","image/x-cmx"],["cod","application/vnd.rim.cod"],["coffee","text/coffeescript"],["com","application/x-msdownload"],["conf","text/plain"],["cpio","application/x-cpio"],["cpp","text/x-c"],["cpt","application/mac-compactpro"],["crd","application/x-mscardfile"],["crl","application/pkix-crl"],["crt","application/x-x509-ca-cert"],["crx","application/x-chrome-extension"],["cryptonote","application/vnd.rig.cryptonote"],["csh","application/x-csh"],["csl","application/vnd.citationstyles.style+xml"],["csml","chemical/x-csml"],["csp","application/vnd.commonspace"],["csr","application/octet-stream"],["css","text/css"],["cst","application/x-director"],["csv","text/csv"],["cu","application/cu-seeme"],["curl","text/vnd.curl"],["cww","application/prs.cww"],["cxt","application/x-director"],["cxx","text/x-c"],["dae","model/vnd.collada+xml"],["daf","application/vnd.mobius.daf"],["dart","application/vnd.dart"],["dataless","application/vnd.fdsn.seed"],["davmount","application/davmount+xml"],["dbf","application/vnd.dbf"],["dbk","application/docbook+xml"],["dcr","application/x-director"],["dcurl","text/vnd.curl.dcurl"],["dd2","application/vnd.oma.dd2+xml"],["ddd","application/vnd.fujixerox.ddd"],["ddf","application/vnd.syncml.dmddf+xml"],["dds","image/vnd.ms-dds"],["deb","application/x-debian-package"],["def","text/plain"],["deploy","application/octet-stream"],["der","application/x-x509-ca-cert"],["dfac","application/vnd.dreamfactory"],["dgc","application/x-dgc-compressed"],["dic","text/x-c"],["dir","application/x-director"],["dis","application/vnd.mobius.dis"],["disposition-notification","message/disposition-notification"],["dist","application/octet-stream"],["distz","application/octet-stream"],["djv","image/vnd.djvu"],["djvu","image/vnd.djvu"],["dll","application/octet-stream"],["dmg","application/x-apple-diskimage"],["dmn","application/octet-stream"],["dmp","application/vnd.tcpdump.pcap"],["dms","application/octet-stream"],["dna","application/vnd.dna"],["doc","application/msword"],["docm","application/vnd.ms-word.template.macroEnabled.12"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["dot","application/msword"],["dotm","application/vnd.ms-word.template.macroEnabled.12"],["dotx","application/vnd.openxmlformats-officedocument.wordprocessingml.template"],["dp","application/vnd.osgi.dp"],["dpg","application/vnd.dpgraph"],["dra","audio/vnd.dra"],["drle","image/dicom-rle"],["dsc","text/prs.lines.tag"],["dssc","application/dssc+der"],["dtb","application/x-dtbook+xml"],["dtd","application/xml-dtd"],["dts","audio/vnd.dts"],["dtshd","audio/vnd.dts.hd"],["dump","application/octet-stream"],["dvb","video/vnd.dvb.file"],["dvi","application/x-dvi"],["dwd","application/atsc-dwd+xml"],["dwf","model/vnd.dwf"],["dwg","image/vnd.dwg"],["dxf","image/vnd.dxf"],["dxp","application/vnd.spotfire.dxp"],["dxr","application/x-director"],["ear","application/java-archive"],["ecelp4800","audio/vnd.nuera.ecelp4800"],["ecelp7470","audio/vnd.nuera.ecelp7470"],["ecelp9600","audio/vnd.nuera.ecelp9600"],["ecma","application/ecmascript"],["edm","application/vnd.novadigm.edm"],["edx","application/vnd.novadigm.edx"],["efif","application/vnd.picsel"],["ei6","application/vnd.pg.osasli"],["elc","application/octet-stream"],["emf","image/emf"],["eml","message/rfc822"],["emma","application/emma+xml"],["emotionml","application/emotionml+xml"],["emz","application/x-msmetafile"],["eol","audio/vnd.digital-winds"],["eot","application/vnd.ms-fontobject"],["eps","application/postscript"],["epub","application/epub+zip"],["es","application/ecmascript"],["es3","application/vnd.eszigno3+xml"],["esa","application/vnd.osgi.subsystem"],["esf","application/vnd.epson.esf"],["et3","application/vnd.eszigno3+xml"],["etx","text/x-setext"],["eva","application/x-eva"],["evy","application/x-envoy"],["exe","application/octet-stream"],["exi","application/exi"],["exp","application/express"],["exr","image/aces"],["ext","application/vnd.novadigm.ext"],["ez","application/andrew-inset"],["ez2","application/vnd.ezpix-album"],["ez3","application/vnd.ezpix-package"],["f","text/x-fortran"],["f4v","video/mp4"],["f77","text/x-fortran"],["f90","text/x-fortran"],["fbs","image/vnd.fastbidsheet"],["fcdt","application/vnd.adobe.formscentral.fcdt"],["fcs","application/vnd.isac.fcs"],["fdf","application/vnd.fdf"],["fdt","application/fdt+xml"],["fe_launch","application/vnd.denovo.fcselayout-link"],["fg5","application/vnd.fujitsu.oasysgp"],["fgd","application/x-director"],["fh","image/x-freehand"],["fh4","image/x-freehand"],["fh5","image/x-freehand"],["fh7","image/x-freehand"],["fhc","image/x-freehand"],["fig","application/x-xfig"],["fits","image/fits"],["flac","audio/x-flac"],["fli","video/x-fli"],["flo","application/vnd.micrografx.flo"],["flv","video/x-flv"],["flw","application/vnd.kde.kivio"],["flx","text/vnd.fmi.flexstor"],["fly","text/vnd.fly"],["fm","application/vnd.framemaker"],["fnc","application/vnd.frogans.fnc"],["fo","application/vnd.software602.filler.form+xml"],["for","text/x-fortran"],["fpx","image/vnd.fpx"],["frame","application/vnd.framemaker"],["fsc","application/vnd.fsc.weblaunch"],["fst","image/vnd.fst"],["ftc","application/vnd.fluxtime.clip"],["fti","application/vnd.anser-web-funds-transfer-initiation"],["fvt","video/vnd.fvt"],["fxp","application/vnd.adobe.fxp"],["fxpl","application/vnd.adobe.fxp"],["fzs","application/vnd.fuzzysheet"],["g2w","application/vnd.geoplan"],["g3","image/g3fax"],["g3w","application/vnd.geospace"],["gac","application/vnd.groove-account"],["gam","application/x-tads"],["gbr","application/rpki-ghostbusters"],["gca","application/x-gca-compressed"],["gdl","model/vnd.gdl"],["gdoc","application/vnd.google-apps.document"],["geo","application/vnd.dynageo"],["geojson","application/geo+json"],["gex","application/vnd.geometry-explorer"],["ggb","application/vnd.geogebra.file"],["ggt","application/vnd.geogebra.tool"],["ghf","application/vnd.groove-help"],["gif","image/gif"],["gim","application/vnd.groove-identity-message"],["glb","model/gltf-binary"],["gltf","model/gltf+json"],["gml","application/gml+xml"],["gmx","application/vnd.gmx"],["gnumeric","application/x-gnumeric"],["gpg","application/gpg-keys"],["gph","application/vnd.flographit"],["gpx","application/gpx+xml"],["gqf","application/vnd.grafeq"],["gqs","application/vnd.grafeq"],["gram","application/srgs"],["gramps","application/x-gramps-xml"],["gre","application/vnd.geometry-explorer"],["grv","application/vnd.groove-injector"],["grxml","application/srgs+xml"],["gsf","application/x-font-ghostscript"],["gsheet","application/vnd.google-apps.spreadsheet"],["gslides","application/vnd.google-apps.presentation"],["gtar","application/x-gtar"],["gtm","application/vnd.groove-tool-message"],["gtw","model/vnd.gtw"],["gv","text/vnd.graphviz"],["gxf","application/gxf"],["gxt","application/vnd.geonext"],["gz","application/gzip"],["gzip","application/gzip"],["h","text/x-c"],["h261","video/h261"],["h263","video/h263"],["h264","video/h264"],["hal","application/vnd.hal+xml"],["hbci","application/vnd.hbci"],["hbs","text/x-handlebars-template"],["hdd","application/x-virtualbox-hdd"],["hdf","application/x-hdf"],["heic","image/heic"],["heics","image/heic-sequence"],["heif","image/heif"],["heifs","image/heif-sequence"],["hej2","image/hej2k"],["held","application/atsc-held+xml"],["hh","text/x-c"],["hjson","application/hjson"],["hlp","application/winhlp"],["hpgl","application/vnd.hp-hpgl"],["hpid","application/vnd.hp-hpid"],["hps","application/vnd.hp-hps"],["hqx","application/mac-binhex40"],["hsj2","image/hsj2"],["htc","text/x-component"],["htke","application/vnd.kenameaapp"],["htm","text/html"],["html","text/html"],["hvd","application/vnd.yamaha.hv-dic"],["hvp","application/vnd.yamaha.hv-voice"],["hvs","application/vnd.yamaha.hv-script"],["i2g","application/vnd.intergeo"],["icc","application/vnd.iccprofile"],["ice","x-conference/x-cooltalk"],["icm","application/vnd.iccprofile"],["ico","image/x-icon"],["ics","text/calendar"],["ief","image/ief"],["ifb","text/calendar"],["ifm","application/vnd.shana.informed.formdata"],["iges","model/iges"],["igl","application/vnd.igloader"],["igm","application/vnd.insors.igm"],["igs","model/iges"],["igx","application/vnd.micrografx.igx"],["iif","application/vnd.shana.informed.interchange"],["img","application/octet-stream"],["imp","application/vnd.accpac.simply.imp"],["ims","application/vnd.ms-ims"],["in","text/plain"],["ini","text/plain"],["ink","application/inkml+xml"],["inkml","application/inkml+xml"],["install","application/x-install-instructions"],["iota","application/vnd.astraea-software.iota"],["ipfix","application/ipfix"],["ipk","application/vnd.shana.informed.package"],["irm","application/vnd.ibm.rights-management"],["irp","application/vnd.irepository.package+xml"],["iso","application/x-iso9660-image"],["itp","application/vnd.shana.informed.formtemplate"],["its","application/its+xml"],["ivp","application/vnd.immervision-ivp"],["ivu","application/vnd.immervision-ivu"],["jad","text/vnd.sun.j2me.app-descriptor"],["jade","text/jade"],["jam","application/vnd.jam"],["jar","application/java-archive"],["jardiff","application/x-java-archive-diff"],["java","text/x-java-source"],["jhc","image/jphc"],["jisp","application/vnd.jisp"],["jls","image/jls"],["jlt","application/vnd.hp-jlyt"],["jng","image/x-jng"],["jnlp","application/x-java-jnlp-file"],["joda","application/vnd.joost.joda-archive"],["jp2","image/jp2"],["jpe","image/jpeg"],["jpeg","image/jpeg"],["jpf","image/jpx"],["jpg","image/jpeg"],["jpg2","image/jp2"],["jpgm","video/jpm"],["jpgv","video/jpeg"],["jph","image/jph"],["jpm","video/jpm"],["jpx","image/jpx"],["js","application/javascript"],["json","application/json"],["json5","application/json5"],["jsonld","application/ld+json"],["jsonl","application/jsonl"],["jsonml","application/jsonml+json"],["jsx","text/jsx"],["jxr","image/jxr"],["jxra","image/jxra"],["jxrs","image/jxrs"],["jxs","image/jxs"],["jxsc","image/jxsc"],["jxsi","image/jxsi"],["jxss","image/jxss"],["kar","audio/midi"],["karbon","application/vnd.kde.karbon"],["kdb","application/octet-stream"],["kdbx","application/x-keepass2"],["key","application/x-iwork-keynote-sffkey"],["kfo","application/vnd.kde.kformula"],["kia","application/vnd.kidspiration"],["kml","application/vnd.google-earth.kml+xml"],["kmz","application/vnd.google-earth.kmz"],["kne","application/vnd.kinar"],["knp","application/vnd.kinar"],["kon","application/vnd.kde.kontour"],["kpr","application/vnd.kde.kpresenter"],["kpt","application/vnd.kde.kpresenter"],["kpxx","application/vnd.ds-keypoint"],["ksp","application/vnd.kde.kspread"],["ktr","application/vnd.kahootz"],["ktx","image/ktx"],["ktx2","image/ktx2"],["ktz","application/vnd.kahootz"],["kwd","application/vnd.kde.kword"],["kwt","application/vnd.kde.kword"],["lasxml","application/vnd.las.las+xml"],["latex","application/x-latex"],["lbd","application/vnd.llamagraphics.life-balance.desktop"],["lbe","application/vnd.llamagraphics.life-balance.exchange+xml"],["les","application/vnd.hhe.lesson-player"],["less","text/less"],["lgr","application/lgr+xml"],["lha","application/octet-stream"],["link66","application/vnd.route66.link66+xml"],["list","text/plain"],["list3820","application/vnd.ibm.modcap"],["listafp","application/vnd.ibm.modcap"],["litcoffee","text/coffeescript"],["lnk","application/x-ms-shortcut"],["log","text/plain"],["lostxml","application/lost+xml"],["lrf","application/octet-stream"],["lrm","application/vnd.ms-lrm"],["ltf","application/vnd.frogans.ltf"],["lua","text/x-lua"],["luac","application/x-lua-bytecode"],["lvp","audio/vnd.lucent.voice"],["lwp","application/vnd.lotus-wordpro"],["lzh","application/octet-stream"],["m1v","video/mpeg"],["m2a","audio/mpeg"],["m2v","video/mpeg"],["m3a","audio/mpeg"],["m3u","text/plain"],["m3u8","application/vnd.apple.mpegurl"],["m4a","audio/x-m4a"],["m4p","application/mp4"],["m4s","video/iso.segment"],["m4u","application/vnd.mpegurl"],["m4v","video/x-m4v"],["m13","application/x-msmediaview"],["m14","application/x-msmediaview"],["m21","application/mp21"],["ma","application/mathematica"],["mads","application/mads+xml"],["maei","application/mmt-aei+xml"],["mag","application/vnd.ecowin.chart"],["maker","application/vnd.framemaker"],["man","text/troff"],["manifest","text/cache-manifest"],["map","application/json"],["mar","application/octet-stream"],["markdown","text/markdown"],["mathml","application/mathml+xml"],["mb","application/mathematica"],["mbk","application/vnd.mobius.mbk"],["mbox","application/mbox"],["mc1","application/vnd.medcalcdata"],["mcd","application/vnd.mcd"],["mcurl","text/vnd.curl.mcurl"],["md","text/markdown"],["mdb","application/x-msaccess"],["mdi","image/vnd.ms-modi"],["mdx","text/mdx"],["me","text/troff"],["mesh","model/mesh"],["meta4","application/metalink4+xml"],["metalink","application/metalink+xml"],["mets","application/mets+xml"],["mfm","application/vnd.mfmp"],["mft","application/rpki-manifest"],["mgp","application/vnd.osgeo.mapguide.package"],["mgz","application/vnd.proteus.magazine"],["mid","audio/midi"],["midi","audio/midi"],["mie","application/x-mie"],["mif","application/vnd.mif"],["mime","message/rfc822"],["mj2","video/mj2"],["mjp2","video/mj2"],["mjs","application/javascript"],["mk3d","video/x-matroska"],["mka","audio/x-matroska"],["mkd","text/x-markdown"],["mks","video/x-matroska"],["mkv","video/x-matroska"],["mlp","application/vnd.dolby.mlp"],["mmd","application/vnd.chipnuts.karaoke-mmd"],["mmf","application/vnd.smaf"],["mml","text/mathml"],["mmr","image/vnd.fujixerox.edmics-mmr"],["mng","video/x-mng"],["mny","application/x-msmoney"],["mobi","application/x-mobipocket-ebook"],["mods","application/mods+xml"],["mov","video/quicktime"],["movie","video/x-sgi-movie"],["mp2","audio/mpeg"],["mp2a","audio/mpeg"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mp4a","audio/mp4"],["mp4s","application/mp4"],["mp4v","video/mp4"],["mp21","application/mp21"],["mpc","application/vnd.mophun.certificate"],["mpd","application/dash+xml"],["mpe","video/mpeg"],["mpeg","video/mpeg"],["mpg","video/mpeg"],["mpg4","video/mp4"],["mpga","audio/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["mpm","application/vnd.blueice.multipass"],["mpn","application/vnd.mophun.application"],["mpp","application/vnd.ms-project"],["mpt","application/vnd.ms-project"],["mpy","application/vnd.ibm.minipay"],["mqy","application/vnd.mobius.mqy"],["mrc","application/marc"],["mrcx","application/marcxml+xml"],["ms","text/troff"],["mscml","application/mediaservercontrol+xml"],["mseed","application/vnd.fdsn.mseed"],["mseq","application/vnd.mseq"],["msf","application/vnd.epson.msf"],["msg","application/vnd.ms-outlook"],["msh","model/mesh"],["msi","application/x-msdownload"],["msl","application/vnd.mobius.msl"],["msm","application/octet-stream"],["msp","application/octet-stream"],["msty","application/vnd.muvee.style"],["mtl","model/mtl"],["mts","model/vnd.mts"],["mus","application/vnd.musician"],["musd","application/mmt-usd+xml"],["musicxml","application/vnd.recordare.musicxml+xml"],["mvb","application/x-msmediaview"],["mvt","application/vnd.mapbox-vector-tile"],["mwf","application/vnd.mfer"],["mxf","application/mxf"],["mxl","application/vnd.recordare.musicxml"],["mxmf","audio/mobile-xmf"],["mxml","application/xv+xml"],["mxs","application/vnd.triscape.mxs"],["mxu","video/vnd.mpegurl"],["n-gage","application/vnd.nokia.n-gage.symbian.install"],["n3","text/n3"],["nb","application/mathematica"],["nbp","application/vnd.wolfram.player"],["nc","application/x-netcdf"],["ncx","application/x-dtbncx+xml"],["nfo","text/x-nfo"],["ngdat","application/vnd.nokia.n-gage.data"],["nitf","application/vnd.nitf"],["nlu","application/vnd.neurolanguage.nlu"],["nml","application/vnd.enliven"],["nnd","application/vnd.noblenet-directory"],["nns","application/vnd.noblenet-sealer"],["nnw","application/vnd.noblenet-web"],["npx","image/vnd.net-fpx"],["nq","application/n-quads"],["nsc","application/x-conference"],["nsf","application/vnd.lotus-notes"],["nt","application/n-triples"],["ntf","application/vnd.nitf"],["numbers","application/x-iwork-numbers-sffnumbers"],["nzb","application/x-nzb"],["oa2","application/vnd.fujitsu.oasys2"],["oa3","application/vnd.fujitsu.oasys3"],["oas","application/vnd.fujitsu.oasys"],["obd","application/x-msbinder"],["obgx","application/vnd.openblox.game+xml"],["obj","model/obj"],["oda","application/oda"],["odb","application/vnd.oasis.opendocument.database"],["odc","application/vnd.oasis.opendocument.chart"],["odf","application/vnd.oasis.opendocument.formula"],["odft","application/vnd.oasis.opendocument.formula-template"],["odg","application/vnd.oasis.opendocument.graphics"],["odi","application/vnd.oasis.opendocument.image"],["odm","application/vnd.oasis.opendocument.text-master"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogex","model/vnd.opengex"],["ogg","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["omdoc","application/omdoc+xml"],["onepkg","application/onenote"],["onetmp","application/onenote"],["onetoc","application/onenote"],["onetoc2","application/onenote"],["opf","application/oebps-package+xml"],["opml","text/x-opml"],["oprc","application/vnd.palm"],["opus","audio/ogg"],["org","text/x-org"],["osf","application/vnd.yamaha.openscoreformat"],["osfpvg","application/vnd.yamaha.openscoreformat.osfpvg+xml"],["osm","application/vnd.openstreetmap.data+xml"],["otc","application/vnd.oasis.opendocument.chart-template"],["otf","font/otf"],["otg","application/vnd.oasis.opendocument.graphics-template"],["oth","application/vnd.oasis.opendocument.text-web"],["oti","application/vnd.oasis.opendocument.image-template"],["otp","application/vnd.oasis.opendocument.presentation-template"],["ots","application/vnd.oasis.opendocument.spreadsheet-template"],["ott","application/vnd.oasis.opendocument.text-template"],["ova","application/x-virtualbox-ova"],["ovf","application/x-virtualbox-ovf"],["owl","application/rdf+xml"],["oxps","application/oxps"],["oxt","application/vnd.openofficeorg.extension"],["p","text/x-pascal"],["p7a","application/x-pkcs7-signature"],["p7b","application/x-pkcs7-certificates"],["p7c","application/pkcs7-mime"],["p7m","application/pkcs7-mime"],["p7r","application/x-pkcs7-certreqresp"],["p7s","application/pkcs7-signature"],["p8","application/pkcs8"],["p10","application/x-pkcs10"],["p12","application/x-pkcs12"],["pac","application/x-ns-proxy-autoconfig"],["pages","application/x-iwork-pages-sffpages"],["pas","text/x-pascal"],["paw","application/vnd.pawaafile"],["pbd","application/vnd.powerbuilder6"],["pbm","image/x-portable-bitmap"],["pcap","application/vnd.tcpdump.pcap"],["pcf","application/x-font-pcf"],["pcl","application/vnd.hp-pcl"],["pclxl","application/vnd.hp-pclxl"],["pct","image/x-pict"],["pcurl","application/vnd.curl.pcurl"],["pcx","image/x-pcx"],["pdb","application/x-pilot"],["pde","text/x-processing"],["pdf","application/pdf"],["pem","application/x-x509-user-cert"],["pfa","application/x-font-type1"],["pfb","application/x-font-type1"],["pfm","application/x-font-type1"],["pfr","application/font-tdpfr"],["pfx","application/x-pkcs12"],["pgm","image/x-portable-graymap"],["pgn","application/x-chess-pgn"],["pgp","application/pgp"],["php","application/x-httpd-php"],["php3","application/x-httpd-php"],["php4","application/x-httpd-php"],["phps","application/x-httpd-php-source"],["phtml","application/x-httpd-php"],["pic","image/x-pict"],["pkg","application/octet-stream"],["pki","application/pkixcmp"],["pkipath","application/pkix-pkipath"],["pkpass","application/vnd.apple.pkpass"],["pl","application/x-perl"],["plb","application/vnd.3gpp.pic-bw-large"],["plc","application/vnd.mobius.plc"],["plf","application/vnd.pocketlearn"],["pls","application/pls+xml"],["pm","application/x-perl"],["pml","application/vnd.ctc-posml"],["png","image/png"],["pnm","image/x-portable-anymap"],["portpkg","application/vnd.macports.portpkg"],["pot","application/vnd.ms-powerpoint"],["potm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["potx","application/vnd.openxmlformats-officedocument.presentationml.template"],["ppa","application/vnd.ms-powerpoint"],["ppam","application/vnd.ms-powerpoint.addin.macroEnabled.12"],["ppd","application/vnd.cups-ppd"],["ppm","image/x-portable-pixmap"],["pps","application/vnd.ms-powerpoint"],["ppsm","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],["ppsx","application/vnd.openxmlformats-officedocument.presentationml.slideshow"],["ppt","application/powerpoint"],["pptm","application/vnd.ms-powerpoint.presentation.macroEnabled.12"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["pqa","application/vnd.palm"],["prc","application/x-pilot"],["pre","application/vnd.lotus-freelance"],["prf","application/pics-rules"],["provx","application/provenance+xml"],["ps","application/postscript"],["psb","application/vnd.3gpp.pic-bw-small"],["psd","application/x-photoshop"],["psf","application/x-font-linux-psf"],["pskcxml","application/pskc+xml"],["pti","image/prs.pti"],["ptid","application/vnd.pvi.ptid1"],["pub","application/x-mspublisher"],["pvb","application/vnd.3gpp.pic-bw-var"],["pwn","application/vnd.3m.post-it-notes"],["pya","audio/vnd.ms-playready.media.pya"],["pyv","video/vnd.ms-playready.media.pyv"],["qam","application/vnd.epson.quickanime"],["qbo","application/vnd.intu.qbo"],["qfx","application/vnd.intu.qfx"],["qps","application/vnd.publishare-delta-tree"],["qt","video/quicktime"],["qwd","application/vnd.quark.quarkxpress"],["qwt","application/vnd.quark.quarkxpress"],["qxb","application/vnd.quark.quarkxpress"],["qxd","application/vnd.quark.quarkxpress"],["qxl","application/vnd.quark.quarkxpress"],["qxt","application/vnd.quark.quarkxpress"],["ra","audio/x-realaudio"],["ram","audio/x-pn-realaudio"],["raml","application/raml+yaml"],["rapd","application/route-apd+xml"],["rar","application/x-rar"],["ras","image/x-cmu-raster"],["rcprofile","application/vnd.ipunplugged.rcprofile"],["rdf","application/rdf+xml"],["rdz","application/vnd.data-vision.rdz"],["relo","application/p2p-overlay+xml"],["rep","application/vnd.businessobjects"],["res","application/x-dtbresource+xml"],["rgb","image/x-rgb"],["rif","application/reginfo+xml"],["rip","audio/vnd.rip"],["ris","application/x-research-info-systems"],["rl","application/resource-lists+xml"],["rlc","image/vnd.fujixerox.edmics-rlc"],["rld","application/resource-lists-diff+xml"],["rm","audio/x-pn-realaudio"],["rmi","audio/midi"],["rmp","audio/x-pn-realaudio-plugin"],["rms","application/vnd.jcp.javame.midlet-rms"],["rmvb","application/vnd.rn-realmedia-vbr"],["rnc","application/relax-ng-compact-syntax"],["rng","application/xml"],["roa","application/rpki-roa"],["roff","text/troff"],["rp9","application/vnd.cloanto.rp9"],["rpm","audio/x-pn-realaudio-plugin"],["rpss","application/vnd.nokia.radio-presets"],["rpst","application/vnd.nokia.radio-preset"],["rq","application/sparql-query"],["rs","application/rls-services+xml"],["rsa","application/x-pkcs7"],["rsat","application/atsc-rsat+xml"],["rsd","application/rsd+xml"],["rsheet","application/urc-ressheet+xml"],["rss","application/rss+xml"],["rtf","text/rtf"],["rtx","text/richtext"],["run","application/x-makeself"],["rusd","application/route-usd+xml"],["rv","video/vnd.rn-realvideo"],["s","text/x-asm"],["s3m","audio/s3m"],["saf","application/vnd.yamaha.smaf-audio"],["sass","text/x-sass"],["sbml","application/sbml+xml"],["sc","application/vnd.ibm.secure-container"],["scd","application/x-msschedule"],["scm","application/vnd.lotus-screencam"],["scq","application/scvp-cv-request"],["scs","application/scvp-cv-response"],["scss","text/x-scss"],["scurl","text/vnd.curl.scurl"],["sda","application/vnd.stardivision.draw"],["sdc","application/vnd.stardivision.calc"],["sdd","application/vnd.stardivision.impress"],["sdkd","application/vnd.solent.sdkm+xml"],["sdkm","application/vnd.solent.sdkm+xml"],["sdp","application/sdp"],["sdw","application/vnd.stardivision.writer"],["sea","application/octet-stream"],["see","application/vnd.seemail"],["seed","application/vnd.fdsn.seed"],["sema","application/vnd.sema"],["semd","application/vnd.semd"],["semf","application/vnd.semf"],["senmlx","application/senml+xml"],["sensmlx","application/sensml+xml"],["ser","application/java-serialized-object"],["setpay","application/set-payment-initiation"],["setreg","application/set-registration-initiation"],["sfd-hdstx","application/vnd.hydrostatix.sof-data"],["sfs","application/vnd.spotfire.sfs"],["sfv","text/x-sfv"],["sgi","image/sgi"],["sgl","application/vnd.stardivision.writer-global"],["sgm","text/sgml"],["sgml","text/sgml"],["sh","application/x-sh"],["shar","application/x-shar"],["shex","text/shex"],["shf","application/shf+xml"],["shtml","text/html"],["sid","image/x-mrsid-image"],["sieve","application/sieve"],["sig","application/pgp-signature"],["sil","audio/silk"],["silo","model/mesh"],["sis","application/vnd.symbian.install"],["sisx","application/vnd.symbian.install"],["sit","application/x-stuffit"],["sitx","application/x-stuffitx"],["siv","application/sieve"],["skd","application/vnd.koan"],["skm","application/vnd.koan"],["skp","application/vnd.koan"],["skt","application/vnd.koan"],["sldm","application/vnd.ms-powerpoint.slide.macroenabled.12"],["sldx","application/vnd.openxmlformats-officedocument.presentationml.slide"],["slim","text/slim"],["slm","text/slim"],["sls","application/route-s-tsid+xml"],["slt","application/vnd.epson.salt"],["sm","application/vnd.stepmania.stepchart"],["smf","application/vnd.stardivision.math"],["smi","application/smil"],["smil","application/smil"],["smv","video/x-smv"],["smzip","application/vnd.stepmania.package"],["snd","audio/basic"],["snf","application/x-font-snf"],["so","application/octet-stream"],["spc","application/x-pkcs7-certificates"],["spdx","text/spdx"],["spf","application/vnd.yamaha.smaf-phrase"],["spl","application/x-futuresplash"],["spot","text/vnd.in3d.spot"],["spp","application/scvp-vp-response"],["spq","application/scvp-vp-request"],["spx","audio/ogg"],["sql","application/x-sql"],["src","application/x-wais-source"],["srt","application/x-subrip"],["sru","application/sru+xml"],["srx","application/sparql-results+xml"],["ssdl","application/ssdl+xml"],["sse","application/vnd.kodak-descriptor"],["ssf","application/vnd.epson.ssf"],["ssml","application/ssml+xml"],["sst","application/octet-stream"],["st","application/vnd.sailingtracker.track"],["stc","application/vnd.sun.xml.calc.template"],["std","application/vnd.sun.xml.draw.template"],["stf","application/vnd.wt.stf"],["sti","application/vnd.sun.xml.impress.template"],["stk","application/hyperstudio"],["stl","model/stl"],["stpx","model/step+xml"],["stpxz","model/step-xml+zip"],["stpz","model/step+zip"],["str","application/vnd.pg.format"],["stw","application/vnd.sun.xml.writer.template"],["styl","text/stylus"],["stylus","text/stylus"],["sub","text/vnd.dvb.subtitle"],["sus","application/vnd.sus-calendar"],["susp","application/vnd.sus-calendar"],["sv4cpio","application/x-sv4cpio"],["sv4crc","application/x-sv4crc"],["svc","application/vnd.dvb.service"],["svd","application/vnd.svd"],["svg","image/svg+xml"],["svgz","image/svg+xml"],["swa","application/x-director"],["swf","application/x-shockwave-flash"],["swi","application/vnd.aristanetworks.swi"],["swidtag","application/swid+xml"],["sxc","application/vnd.sun.xml.calc"],["sxd","application/vnd.sun.xml.draw"],["sxg","application/vnd.sun.xml.writer.global"],["sxi","application/vnd.sun.xml.impress"],["sxm","application/vnd.sun.xml.math"],["sxw","application/vnd.sun.xml.writer"],["t","text/troff"],["t3","application/x-t3vm-image"],["t38","image/t38"],["taglet","application/vnd.mynfc"],["tao","application/vnd.tao.intent-module-archive"],["tap","image/vnd.tencent.tap"],["tar","application/x-tar"],["tcap","application/vnd.3gpp2.tcap"],["tcl","application/x-tcl"],["td","application/urc-targetdesc+xml"],["teacher","application/vnd.smart.teacher"],["tei","application/tei+xml"],["teicorpus","application/tei+xml"],["tex","application/x-tex"],["texi","application/x-texinfo"],["texinfo","application/x-texinfo"],["text","text/plain"],["tfi","application/thraud+xml"],["tfm","application/x-tex-tfm"],["tfx","image/tiff-fx"],["tga","image/x-tga"],["tgz","application/x-tar"],["thmx","application/vnd.ms-officetheme"],["tif","image/tiff"],["tiff","image/tiff"],["tk","application/x-tcl"],["tmo","application/vnd.tmobile-livetv"],["toml","application/toml"],["torrent","application/x-bittorrent"],["tpl","application/vnd.groove-tool-template"],["tpt","application/vnd.trid.tpt"],["tr","text/troff"],["tra","application/vnd.trueapp"],["trig","application/trig"],["trm","application/x-msterminal"],["ts","video/mp2t"],["tsd","application/timestamped-data"],["tsv","text/tab-separated-values"],["ttc","font/collection"],["ttf","font/ttf"],["ttl","text/turtle"],["ttml","application/ttml+xml"],["twd","application/vnd.simtech-mindmapper"],["twds","application/vnd.simtech-mindmapper"],["txd","application/vnd.genomatix.tuxedo"],["txf","application/vnd.mobius.txf"],["txt","text/plain"],["u8dsn","message/global-delivery-status"],["u8hdr","message/global-headers"],["u8mdn","message/global-disposition-notification"],["u8msg","message/global"],["u32","application/x-authorware-bin"],["ubj","application/ubjson"],["udeb","application/x-debian-package"],["ufd","application/vnd.ufdl"],["ufdl","application/vnd.ufdl"],["ulx","application/x-glulx"],["umj","application/vnd.umajin"],["unityweb","application/vnd.unity"],["uoml","application/vnd.uoml+xml"],["uri","text/uri-list"],["uris","text/uri-list"],["urls","text/uri-list"],["usdz","model/vnd.usdz+zip"],["ustar","application/x-ustar"],["utz","application/vnd.uiq.theme"],["uu","text/x-uuencode"],["uva","audio/vnd.dece.audio"],["uvd","application/vnd.dece.data"],["uvf","application/vnd.dece.data"],["uvg","image/vnd.dece.graphic"],["uvh","video/vnd.dece.hd"],["uvi","image/vnd.dece.graphic"],["uvm","video/vnd.dece.mobile"],["uvp","video/vnd.dece.pd"],["uvs","video/vnd.dece.sd"],["uvt","application/vnd.dece.ttml+xml"],["uvu","video/vnd.uvvu.mp4"],["uvv","video/vnd.dece.video"],["uvva","audio/vnd.dece.audio"],["uvvd","application/vnd.dece.data"],["uvvf","application/vnd.dece.data"],["uvvg","image/vnd.dece.graphic"],["uvvh","video/vnd.dece.hd"],["uvvi","image/vnd.dece.graphic"],["uvvm","video/vnd.dece.mobile"],["uvvp","video/vnd.dece.pd"],["uvvs","video/vnd.dece.sd"],["uvvt","application/vnd.dece.ttml+xml"],["uvvu","video/vnd.uvvu.mp4"],["uvvv","video/vnd.dece.video"],["uvvx","application/vnd.dece.unspecified"],["uvvz","application/vnd.dece.zip"],["uvx","application/vnd.dece.unspecified"],["uvz","application/vnd.dece.zip"],["vbox","application/x-virtualbox-vbox"],["vbox-extpack","application/x-virtualbox-vbox-extpack"],["vcard","text/vcard"],["vcd","application/x-cdlink"],["vcf","text/x-vcard"],["vcg","application/vnd.groove-vcard"],["vcs","text/x-vcalendar"],["vcx","application/vnd.vcx"],["vdi","application/x-virtualbox-vdi"],["vds","model/vnd.sap.vds"],["vhd","application/x-virtualbox-vhd"],["vis","application/vnd.visionary"],["viv","video/vnd.vivo"],["vlc","application/videolan"],["vmdk","application/x-virtualbox-vmdk"],["vob","video/x-ms-vob"],["vor","application/vnd.stardivision.writer"],["vox","application/x-authorware-bin"],["vrml","model/vrml"],["vsd","application/vnd.visio"],["vsf","application/vnd.vsf"],["vss","application/vnd.visio"],["vst","application/vnd.visio"],["vsw","application/vnd.visio"],["vtf","image/vnd.valve.source.texture"],["vtt","text/vtt"],["vtu","model/vnd.vtu"],["vxml","application/voicexml+xml"],["w3d","application/x-director"],["wad","application/x-doom"],["wadl","application/vnd.sun.wadl+xml"],["war","application/java-archive"],["wasm","application/wasm"],["wav","audio/x-wav"],["wax","audio/x-ms-wax"],["wbmp","image/vnd.wap.wbmp"],["wbs","application/vnd.criticaltools.wbs+xml"],["wbxml","application/wbxml"],["wcm","application/vnd.ms-works"],["wdb","application/vnd.ms-works"],["wdp","image/vnd.ms-photo"],["weba","audio/webm"],["webapp","application/x-web-app-manifest+json"],["webm","video/webm"],["webmanifest","application/manifest+json"],["webp","image/webp"],["wg","application/vnd.pmi.widget"],["wgt","application/widget"],["wks","application/vnd.ms-works"],["wm","video/x-ms-wm"],["wma","audio/x-ms-wma"],["wmd","application/x-ms-wmd"],["wmf","image/wmf"],["wml","text/vnd.wap.wml"],["wmlc","application/wmlc"],["wmls","text/vnd.wap.wmlscript"],["wmlsc","application/vnd.wap.wmlscriptc"],["wmv","video/x-ms-wmv"],["wmx","video/x-ms-wmx"],["wmz","application/x-msmetafile"],["woff","font/woff"],["woff2","font/woff2"],["word","application/msword"],["wpd","application/vnd.wordperfect"],["wpl","application/vnd.ms-wpl"],["wps","application/vnd.ms-works"],["wqd","application/vnd.wqd"],["wri","application/x-mswrite"],["wrl","model/vrml"],["wsc","message/vnd.wfa.wsc"],["wsdl","application/wsdl+xml"],["wspolicy","application/wspolicy+xml"],["wtb","application/vnd.webturbo"],["wvx","video/x-ms-wvx"],["x3d","model/x3d+xml"],["x3db","model/x3d+fastinfoset"],["x3dbz","model/x3d+binary"],["x3dv","model/x3d-vrml"],["x3dvz","model/x3d+vrml"],["x3dz","model/x3d+xml"],["x32","application/x-authorware-bin"],["x_b","model/vnd.parasolid.transmit.binary"],["x_t","model/vnd.parasolid.transmit.text"],["xaml","application/xaml+xml"],["xap","application/x-silverlight-app"],["xar","application/vnd.xara"],["xav","application/xcap-att+xml"],["xbap","application/x-ms-xbap"],["xbd","application/vnd.fujixerox.docuworks.binder"],["xbm","image/x-xbitmap"],["xca","application/xcap-caps+xml"],["xcs","application/calendar+xml"],["xdf","application/xcap-diff+xml"],["xdm","application/vnd.syncml.dm+xml"],["xdp","application/vnd.adobe.xdp+xml"],["xdssc","application/dssc+xml"],["xdw","application/vnd.fujixerox.docuworks"],["xel","application/xcap-el+xml"],["xenc","application/xenc+xml"],["xer","application/patch-ops-error+xml"],["xfdf","application/vnd.adobe.xfdf"],["xfdl","application/vnd.xfdl"],["xht","application/xhtml+xml"],["xhtml","application/xhtml+xml"],["xhvml","application/xv+xml"],["xif","image/vnd.xiff"],["xl","application/excel"],["xla","application/vnd.ms-excel"],["xlam","application/vnd.ms-excel.addin.macroEnabled.12"],["xlc","application/vnd.ms-excel"],["xlf","application/xliff+xml"],["xlm","application/vnd.ms-excel"],["xls","application/vnd.ms-excel"],["xlsb","application/vnd.ms-excel.sheet.binary.macroEnabled.12"],["xlsm","application/vnd.ms-excel.sheet.macroEnabled.12"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xlt","application/vnd.ms-excel"],["xltm","application/vnd.ms-excel.template.macroEnabled.12"],["xltx","application/vnd.openxmlformats-officedocument.spreadsheetml.template"],["xlw","application/vnd.ms-excel"],["xm","audio/xm"],["xml","application/xml"],["xns","application/xcap-ns+xml"],["xo","application/vnd.olpc-sugar"],["xop","application/xop+xml"],["xpi","application/x-xpinstall"],["xpl","application/xproc+xml"],["xpm","image/x-xpixmap"],["xpr","application/vnd.is-xpr"],["xps","application/vnd.ms-xpsdocument"],["xpw","application/vnd.intercon.formnet"],["xpx","application/vnd.intercon.formnet"],["xsd","application/xml"],["xsl","application/xml"],["xslt","application/xslt+xml"],["xsm","application/vnd.syncml+xml"],["xspf","application/xspf+xml"],["xul","application/vnd.mozilla.xul+xml"],["xvm","application/xv+xml"],["xvml","application/xv+xml"],["xwd","image/x-xwindowdump"],["xyz","chemical/x-xyz"],["xz","application/x-xz"],["yaml","text/yaml"],["yang","application/yang"],["yin","application/yin+xml"],["yml","text/yaml"],["ymp","text/x-suse-ymp"],["z","application/x-compress"],["z1","application/x-zmachine"],["z2","application/x-zmachine"],["z3","application/x-zmachine"],["z4","application/x-zmachine"],["z5","application/x-zmachine"],["z6","application/x-zmachine"],["z7","application/x-zmachine"],["z8","application/x-zmachine"],["zaz","application/vnd.zzazz.deck+xml"],["zip","application/zip"],["zir","application/vnd.zul"],["zirz","application/vnd.zul"],["zmm","application/vnd.handheld-entertainment+xml"],["zsh","text/x-scriptzsh"]]);function Rs(t,e,n){const i=ub(t),{webkitRelativePath:r}=t,o=typeof e=="string"?e:typeof r=="string"&&r.length>0?r:`./${t.name}`;return typeof i.path!="string"&&Ig(i,"path",o),Ig(i,"relativePath",o),i}function ub(t){const{name:e}=t;if(e&&e.lastIndexOf(".")!==-1&&!t.type){const i=e.split(".").pop().toLowerCase(),r=cb.get(i);r&&Object.defineProperty(t,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return t}function Ig(t,e,n){Object.defineProperty(t,e,{value:n,writable:!1,configurable:!1,enumerable:!0})}const db=[".DS_Store","Thumbs.db"];function fb(t){return To(this,void 0,void 0,function*(){return jc(t)&&pb(t.dataTransfer)?vb(t.dataTransfer,t.type):hb(t)?mb(t):Array.isArray(t)&&t.every(e=>"getFile"in e&&typeof e.getFile=="function")?gb(t):[]})}function pb(t){return jc(t)}function hb(t){return jc(t)&&jc(t.target)}function jc(t){return typeof t=="object"&&t!==null}function mb(t){return Ff(t.target.files).map(e=>Rs(e))}function gb(t){return To(this,void 0,void 0,function*(){return(yield Promise.all(t.map(n=>n.getFile()))).map(n=>Rs(n))})}function vb(t,e){return To(this,void 0,void 0,function*(){if(t.items){const n=Ff(t.items).filter(r=>r.kind==="file");if(e!=="drop")return n;const i=yield Promise.all(n.map(xb));return Ug(Cy(i))}return Ug(Ff(t.files).map(n=>Rs(n)))})}function Ug(t){return t.filter(e=>db.indexOf(e.name)===-1)}function Ff(t){if(t===null)return[];const e=[];for(let n=0;n<t.length;n++){const i=t[n];e.push(i)}return e}function xb(t){if(typeof t.webkitGetAsEntry!="function")return Fg(t);const e=t.webkitGetAsEntry();return e&&e.isDirectory?Ry(e):Fg(t,e)}function Cy(t){return t.reduce((e,n)=>[...e,...Array.isArray(n)?Cy(n):[n]],[])}function Fg(t,e){return To(this,void 0,void 0,function*(){var n;if(globalThis.isSecureContext&&typeof t.getAsFileSystemHandle=="function"){const o=yield t.getAsFileSystemHandle();if(o===null)throw new Error(`${t} is not a File`);if(o!==void 0){const s=yield o.getFile();return s.handle=o,Rs(s)}}const i=t.getAsFile();if(!i)throw new Error(`${t} is not a File`);return Rs(i,(n=e==null?void 0:e.fullPath)!==null&&n!==void 0?n:void 0)})}function _b(t){return To(this,void 0,void 0,function*(){return t.isDirectory?Ry(t):yb(t)})}function Ry(t){const e=t.createReader();return new Promise((n,i)=>{const r=[];function o(){e.readEntries(s=>To(this,void 0,void 0,function*(){if(s.length){const a=Promise.all(s.map(_b));r.push(a),o()}else try{const a=yield Promise.all(r);n(a)}catch(a){i(a)}}),s=>{i(s)})}o()})}function yb(t){return To(this,void 0,void 0,function*(){return new Promise((e,n)=>{t.file(i=>{const r=Rs(i,t.fullPath);e(r)},i=>{n(i)})})})}var id=function(t,e){if(t&&e){var n=Array.isArray(e)?e:e.split(",");if(n.length===0)return!0;var i=t.name||"",r=(t.type||"").toLowerCase(),o=r.replace(/\/.*$/,"");return n.some(function(s){var a=s.trim().toLowerCase();return a.charAt(0)==="."?i.toLowerCase().endsWith(a):a.endsWith("/*")?o===a.replace(/\/.*$/,""):r===a})}return!0};function Og(t){return Mb(t)||Eb(t)||Dy(t)||Sb()}function Sb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Eb(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Mb(t){if(Array.isArray(t))return Of(t)}function kg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function zg(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?kg(Object(n),!0).forEach(function(i){Py(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):kg(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Py(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ha(t,e){return bb(t)||Tb(t,e)||Dy(t,e)||wb()}function wb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Dy(t,e){if(t){if(typeof t=="string")return Of(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Of(t,e)}}function Of(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Tb(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,o=!1,s,a;try{for(n=n.call(t);!(r=(s=n.next()).done)&&(i.push(s.value),!(e&&i.length===e));r=!0);}catch(l){o=!0,a=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(o)throw a}}return i}}function bb(t){if(Array.isArray(t))return t}var Ab=typeof id=="function"?id:id.default,Cb="file-invalid-type",Rb="file-too-large",Pb="file-too-small",Db="too-many-files",Lb=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=e.split(","),i=n.length>1?"one of ".concat(n.join(", ")):n[0];return{code:Cb,message:"File type must be ".concat(i)}},Bg=function(e){return{code:Rb,message:"File is larger than ".concat(e," ").concat(e===1?"byte":"bytes")}},Hg=function(e){return{code:Pb,message:"File is smaller than ".concat(e," ").concat(e===1?"byte":"bytes")}},Nb={code:Db,message:"Too many files"};function Ly(t,e){var n=t.type==="application/x-moz-file"||Ab(t,e);return[n,n?null:Lb(e)]}function Ny(t,e,n){if(Jr(t.size))if(Jr(e)&&Jr(n)){if(t.size>n)return[!1,Bg(n)];if(t.size<e)return[!1,Hg(e)]}else{if(Jr(e)&&t.size<e)return[!1,Hg(e)];if(Jr(n)&&t.size>n)return[!1,Bg(n)]}return[!0,null]}function Jr(t){return t!=null}function Ib(t){var e=t.files,n=t.accept,i=t.minSize,r=t.maxSize,o=t.multiple,s=t.maxFiles,a=t.validator;return!o&&e.length>1||o&&s>=1&&e.length>s?!1:e.every(function(l){var c=Ly(l,n),d=Ha(c,1),f=d[0],p=Ny(l,i,r),m=Ha(p,1),v=m[0],_=a?a(l):null;return f&&v&&!_})}function Xc(t){return typeof t.isPropagationStopped=="function"?t.isPropagationStopped():typeof t.cancelBubble<"u"?t.cancelBubble:!1}function Al(t){return t.dataTransfer?Array.prototype.some.call(t.dataTransfer.types,function(e){return e==="Files"||e==="application/x-moz-file"}):!!t.target&&!!t.target.files}function Vg(t){t.preventDefault()}function Ub(t){return t.indexOf("MSIE")!==-1||t.indexOf("Trident/")!==-1}function Fb(t){return t.indexOf("Edge/")!==-1}function Ob(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Ub(t)||Fb(t)}function pi(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){for(var r=arguments.length,o=new Array(r>1?r-1:0),s=1;s<r;s++)o[s-1]=arguments[s];return e.some(function(a){return!Xc(i)&&a&&a.apply(void 0,[i].concat(o)),Xc(i)})}}function kb(){return"showOpenFilePicker"in window}function zb(t){if(Jr(t)){var e=Object.entries(t).filter(function(n){var i=Ha(n,2),r=i[0],o=i[1],s=!0;return Iy(r)||(console.warn('Skipped "'.concat(r,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),s=!1),(!Array.isArray(o)||!o.every(Uy))&&(console.warn('Skipped "'.concat(r,'" because an invalid file extension was provided.')),s=!1),s}).reduce(function(n,i){var r=Ha(i,2),o=r[0],s=r[1];return zg(zg({},n),{},Py({},o,s))},{});return[{description:"Files",accept:e}]}return t}function Bb(t){if(Jr(t))return Object.entries(t).reduce(function(e,n){var i=Ha(n,2),r=i[0],o=i[1];return[].concat(Og(e),[r],Og(o))},[]).filter(function(e){return Iy(e)||Uy(e)}).join(",")}function Hb(t){return t instanceof DOMException&&(t.name==="AbortError"||t.code===t.ABORT_ERR)}function Vb(t){return t instanceof DOMException&&(t.name==="SecurityError"||t.code===t.SECURITY_ERR)}function Iy(t){return t==="audio/*"||t==="video/*"||t==="image/*"||t==="text/*"||t==="application/*"||/\w+\/[-+.\w]+/g.test(t)}function Uy(t){return/^.*\.[\w]+$/.test(t)}var Gb=["children"],Wb=["open"],jb=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Xb=["refKey","onChange","onClick"];function qb(t){return Kb(t)||Yb(t)||Fy(t)||$b()}function $b(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yb(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Kb(t){if(Array.isArray(t))return kf(t)}function rd(t,e){return Jb(t)||Zb(t,e)||Fy(t,e)||Qb()}function Qb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fy(t,e){if(t){if(typeof t=="string")return kf(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return kf(t,e)}}function kf(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Zb(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,o=!1,s,a;try{for(n=n.call(t);!(r=(s=n.next()).done)&&(i.push(s.value),!(e&&i.length===e));r=!0);}catch(l){o=!0,a=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(o)throw a}}return i}}function Jb(t){if(Array.isArray(t))return t}function Gg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function xt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Gg(Object(n),!0).forEach(function(i){zf(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Gg(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function zf(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function qc(t,e){if(t==null)return{};var n=eA(t,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function eA(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}var Ih=I.forwardRef(function(t,e){var n=t.children,i=qc(t,Gb),r=ky(i),o=r.open,s=qc(r,Wb);return I.useImperativeHandle(e,function(){return{open:o}},[o]),Ni.createElement(I.Fragment,null,n(xt(xt({},s),{},{open:o})))});Ih.displayName="Dropzone";var Oy={disabled:!1,getFilesFromEvent:fb,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!1,autoFocus:!1};Ih.defaultProps=Oy;Ih.propTypes={children:ut.func,accept:ut.objectOf(ut.arrayOf(ut.string)),multiple:ut.bool,preventDropOnDocument:ut.bool,noClick:ut.bool,noKeyboard:ut.bool,noDrag:ut.bool,noDragEventsBubbling:ut.bool,minSize:ut.number,maxSize:ut.number,maxFiles:ut.number,disabled:ut.bool,getFilesFromEvent:ut.func,onFileDialogCancel:ut.func,onFileDialogOpen:ut.func,useFsAccessApi:ut.bool,autoFocus:ut.bool,onDragEnter:ut.func,onDragLeave:ut.func,onDragOver:ut.func,onDrop:ut.func,onDropAccepted:ut.func,onDropRejected:ut.func,onError:ut.func,validator:ut.func};var Bf={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function ky(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=xt(xt({},Oy),t),n=e.accept,i=e.disabled,r=e.getFilesFromEvent,o=e.maxSize,s=e.minSize,a=e.multiple,l=e.maxFiles,c=e.onDragEnter,d=e.onDragLeave,f=e.onDragOver,p=e.onDrop,m=e.onDropAccepted,v=e.onDropRejected,_=e.onFileDialogCancel,h=e.onFileDialogOpen,u=e.useFsAccessApi,g=e.autoFocus,x=e.preventDropOnDocument,y=e.noClick,A=e.noKeyboard,b=e.noDrag,T=e.noDragEventsBubbling,C=e.onError,M=e.validator,S=I.useMemo(function(){return Bb(n)},[n]),P=I.useMemo(function(){return zb(n)},[n]),z=I.useMemo(function(){return typeof h=="function"?h:Wg},[h]),G=I.useMemo(function(){return typeof _=="function"?_:Wg},[_]),B=I.useRef(null),K=I.useRef(null),Z=I.useReducer(tA,Bf),ee=rd(Z,2),N=ee[0],q=ee[1],te=N.isFocused,oe=N.isFileDialogActive,Se=I.useRef(typeof window<"u"&&window.isSecureContext&&u&&kb()),Be=function(){!Se.current&&oe&&setTimeout(function(){if(K.current){var W=K.current.files;W.length||(q({type:"closeDialog"}),G())}},300)};I.useEffect(function(){return window.addEventListener("focus",Be,!1),function(){window.removeEventListener("focus",Be,!1)}},[K,oe,G,Se]);var Q=I.useRef([]),ae=function(W){B.current&&B.current.contains(W.target)||(W.preventDefault(),Q.current=[])};I.useEffect(function(){return x&&(document.addEventListener("dragover",Vg,!1),document.addEventListener("drop",ae,!1)),function(){x&&(document.removeEventListener("dragover",Vg),document.removeEventListener("drop",ae))}},[B,x]),I.useEffect(function(){return!i&&g&&B.current&&B.current.focus(),function(){}},[B,g,i]);var ue=I.useCallback(function(F){C?C(F):console.error(F)},[C]),ce=I.useCallback(function(F){F.preventDefault(),F.persist(),we(F),Q.current=[].concat(qb(Q.current),[F.target]),Al(F)&&Promise.resolve(r(F)).then(function(W){if(!(Xc(F)&&!T)){var $=W.length,de=$>0&&Ib({files:W,accept:S,minSize:s,maxSize:o,multiple:a,maxFiles:l,validator:M}),le=$>0&&!de;q({isDragAccept:de,isDragReject:le,isDragActive:!0,type:"setDraggedFiles"}),c&&c(F)}}).catch(function(W){return ue(W)})},[r,c,ue,T,S,s,o,a,l,M]),Ae=I.useCallback(function(F){F.preventDefault(),F.persist(),we(F);var W=Al(F);if(W&&F.dataTransfer)try{F.dataTransfer.dropEffect="copy"}catch{}return W&&f&&f(F),!1},[f,T]),Ye=I.useCallback(function(F){F.preventDefault(),F.persist(),we(F);var W=Q.current.filter(function(de){return B.current&&B.current.contains(de)}),$=W.indexOf(F.target);$!==-1&&W.splice($,1),Q.current=W,!(W.length>0)&&(q({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),Al(F)&&d&&d(F))},[B,d,T]),Ce=I.useCallback(function(F,W){var $=[],de=[];F.forEach(function(le){var me=Ly(le,S),He=rd(me,2),se=He[0],xe=He[1],Re=Ny(le,s,o),De=rd(Re,2),_e=De[0],Ge=De[1],Ie=M?M(le):null;if(se&&_e&&!Ie)$.push(le);else{var nt=[xe,Ge];Ie&&(nt=nt.concat(Ie)),de.push({file:le,errors:nt.filter(function(U){return U})})}}),(!a&&$.length>1||a&&l>=1&&$.length>l)&&($.forEach(function(le){de.push({file:le,errors:[Nb]})}),$.splice(0)),q({acceptedFiles:$,fileRejections:de,isDragReject:de.length>0,type:"setFiles"}),p&&p($,de,W),de.length>0&&v&&v(de,W),$.length>0&&m&&m($,W)},[q,a,S,s,o,l,p,m,v,M]),dt=I.useCallback(function(F){F.preventDefault(),F.persist(),we(F),Q.current=[],Al(F)&&Promise.resolve(r(F)).then(function(W){Xc(F)&&!T||Ce(W,F)}).catch(function(W){return ue(W)}),q({type:"reset"})},[r,Ce,ue,T]),et=I.useCallback(function(){if(Se.current){q({type:"openDialog"}),z();var F={multiple:a,types:P};window.showOpenFilePicker(F).then(function(W){return r(W)}).then(function(W){Ce(W,null),q({type:"closeDialog"})}).catch(function(W){Hb(W)?(G(W),q({type:"closeDialog"})):Vb(W)?(Se.current=!1,K.current?(K.current.value=null,K.current.click()):ue(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):ue(W)});return}K.current&&(q({type:"openDialog"}),z(),K.current.value=null,K.current.click())},[q,z,G,u,Ce,ue,P,a]),We=I.useCallback(function(F){!B.current||!B.current.isEqualNode(F.target)||(F.key===" "||F.key==="Enter"||F.keyCode===32||F.keyCode===13)&&(F.preventDefault(),et())},[B,et]),L=I.useCallback(function(){q({type:"focus"})},[]),en=I.useCallback(function(){q({type:"blur"})},[]),je=I.useCallback(function(){y||(Ob()?setTimeout(et,0):et())},[y,et]),Fe=function(W){return i?null:W},Te=function(W){return A?null:Fe(W)},tt=function(W){return b?null:Fe(W)},we=function(W){T&&W.stopPropagation()},R=I.useMemo(function(){return function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},W=F.refKey,$=W===void 0?"ref":W,de=F.role,le=F.onKeyDown,me=F.onFocus,He=F.onBlur,se=F.onClick,xe=F.onDragEnter,Re=F.onDragOver,De=F.onDragLeave,_e=F.onDrop,Ge=qc(F,jb);return xt(xt(zf({onKeyDown:Te(pi(le,We)),onFocus:Te(pi(me,L)),onBlur:Te(pi(He,en)),onClick:Fe(pi(se,je)),onDragEnter:tt(pi(xe,ce)),onDragOver:tt(pi(Re,Ae)),onDragLeave:tt(pi(De,Ye)),onDrop:tt(pi(_e,dt)),role:typeof de=="string"&&de!==""?de:"presentation"},$,B),!i&&!A?{tabIndex:0}:{}),Ge)}},[B,We,L,en,je,ce,Ae,Ye,dt,A,b,i]),E=I.useCallback(function(F){F.stopPropagation()},[]),V=I.useMemo(function(){return function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},W=F.refKey,$=W===void 0?"ref":W,de=F.onChange,le=F.onClick,me=qc(F,Xb),He=zf({accept:S,multiple:a,type:"file",style:{border:0,clip:"rect(0, 0, 0, 0)",clipPath:"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"},onChange:Fe(pi(de,dt)),onClick:Fe(pi(le,E)),tabIndex:-1},$,K);return xt(xt({},He),me)}},[K,n,a,dt,i]);return xt(xt({},N),{},{isFocused:te&&!i,getRootProps:R,getInputProps:V,rootRef:B,inputRef:K,open:Fe(et)})}function tA(t,e){switch(e.type){case"focus":return xt(xt({},t),{},{isFocused:!0});case"blur":return xt(xt({},t),{},{isFocused:!1});case"openDialog":return xt(xt({},Bf),{},{isFileDialogActive:!0});case"closeDialog":return xt(xt({},t),{},{isFileDialogActive:!1});case"setDraggedFiles":return xt(xt({},t),{},{isDragActive:e.isDragActive,isDragAccept:e.isDragAccept,isDragReject:e.isDragReject});case"setFiles":return xt(xt({},t),{},{acceptedFiles:e.acceptedFiles,fileRejections:e.fileRejections,isDragReject:e.isDragReject});case"reset":return xt({},Bf);default:return t}}function Wg(){}const nA=({onFilesSelected:t,disabled:e=!1})=>{const[n,i]=I.useState([]),r=I.useCallback(c=>{const d=c.filter(f=>f.type.startsWith("image/"));if(d.length===0){alert("Please select image files only.");return}i(f=>[...f,...d]),t([...n,...d])},[n,t]),{getRootProps:o,getInputProps:s,isDragActive:a}=ky({onDrop:r,accept:{"image/*":[]},disabled:e}),l=c=>{const d=[...n];d.splice(c,1),i(d),t(d)};return D.jsxs("div",{className:"space-y-4",children:[D.jsxs("div",{...o(),className:Sn("border-2 border-dashed border-primary/50 rounded-lg p-8 text-center transition-all cursor-pointer hover:bg-primary/10",a?"bg-primary/20 transform scale-[1.02]":"",e?"opacity-50 cursor-not-allowed":""),children:[D.jsx("input",{...s()}),D.jsx(Dg,{className:"h-12 w-12 text-primary mx-auto mb-4"}),D.jsx("h3",{className:"font-poppins font-medium text-xl mb-2",children:"Drag & Drop Your Images Here"}),D.jsx("p",{className:"text-gray-300 mb-4",children:"or"}),D.jsxs(Cs,{type:"button",disabled:e,className:"bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-full font-medium transition-all shadow-lg hover:shadow-primary/50",children:[D.jsx(dy,{className:"mr-2 h-4 w-4"})," Upload Images"]})]}),n.length>0&&D.jsxs("div",{children:[D.jsx("h3",{className:"font-poppins font-medium text-xl mb-4",children:"Selected Images"}),D.jsx("div",{className:"space-y-2",children:n.map((c,d)=>D.jsxs("div",{className:"flex justify-between items-center p-3 bg-white/5 rounded animate-[slideIn_0.3s_ease-out_forwards]",children:[D.jsxs("div",{className:"flex items-center",children:[D.jsx(Dg,{className:"text-primary mr-3 h-5 w-5"}),D.jsx("span",{className:"truncate max-w-[280px]",children:c.name})]}),D.jsx(Cs,{type:"button",variant:"ghost",size:"sm",onClick:()=>l(d),disabled:e,className:"text-accent hover:text-accent/80 transition-colors p-1",children:D.jsx(Lh,{className:"h-4 w-4"})})]},`${c.name}-${d}`))})]})]})},iA=({pdfData:t,onDownload:e})=>{const n=I.useRef(null);return I.useEffect(()=>{if(t&&n.current){const i=new Blob([t],{type:"application/pdf"}),r=URL.createObjectURL(i);return n.current.src=r,()=>{URL.revokeObjectURL(r)}}},[t]),t?D.jsxs("div",{className:"flex flex-col gap-4",children:[D.jsx("div",{className:"glass p-4 rounded-lg",children:D.jsx("div",{className:"w-full bg-white rounded-lg overflow-hidden",style:{height:"400px"},children:D.jsx("iframe",{ref:n,title:"PDF Preview",width:"100%",height:"100%",style:{border:"none"}})})}),D.jsxs(Cs,{onClick:e,className:"bg-accent hover:bg-accent/90 text-white py-2 px-6 rounded-full font-medium shadow-lg transition-all flex items-center justify-center gap-2 w-full sm:w-auto mx-auto",children:[D.jsx(ly,{size:20}),"Download PDF"]})]}):null},rA=[{icon:D.jsx(dy,{className:"h-6 w-6 text-primary"}),title:"Step 1",description:'Click on the "Upload Image" button to select your images.'},{icon:D.jsx(cy,{className:"h-6 w-6 text-primary"}),title:"Step 2",description:'Press the "Convert to PDF" button to generate your PDF file.'},{icon:D.jsx(ly,{className:"h-6 w-6 text-primary"}),title:"Step 3",description:'Click "Download PDF" to save the file on your device.'}],oA=()=>{const[t,e]=I.useState([]),[n,i]=I.useState(null),{toast:r}=D0(),o=t1({mutationFn:async c=>{const d=new FormData;c.forEach(m=>{d.append("images",m)});const p=await(await n1("POST","/api/convert")).arrayBuffer();return new Uint8Array(p)},onSuccess:c=>{i(c),r({title:"Success!",description:"Your PDF has been generated successfully.",variant:"default"})},onError:c=>{r({title:"Error",description:c instanceof Error?c.message:"Failed to convert images to PDF",variant:"destructive"})}}),s=c=>{e(c),n&&i(null)},a=()=>{if(t.length===0){r({title:"Error",description:"Please upload at least one image",variant:"destructive"});return}o.mutate(t)},l=()=>{if(!n)return;const c=new Blob([n],{type:"application/pdf"}),d=URL.createObjectURL(c),f=document.createElement("a");f.href=d,f.download="converted.pdf",document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(d)};return D.jsxs("div",{className:"py-12 min-h-screen flex flex-col items-center justify-center",children:[D.jsxs("div",{className:"text-center mb-12 animate-[float_6s_ease-in-out_infinite]",children:[D.jsxs("h1",{className:"font-poppins font-bold text-4xl md:text-6xl mb-4",children:["Convert ",D.jsx("span",{className:"text-primary",children:"Images"})," to ",D.jsx("span",{className:"text-accent",children:"PDF"})]}),D.jsx("p",{className:"text-lg text-gray-300 max-w-2xl mx-auto",children:"A powerful, fast, and secure way to transform your images into professional PDF documents in seconds."})]}),D.jsx("div",{className:"glass p-8 w-full max-w-3xl mx-auto mb-12",children:n?D.jsx(iA,{pdfData:n,onDownload:l}):D.jsxs(D.Fragment,{children:[D.jsx(nA,{onFilesSelected:s,disabled:o.isPending}),D.jsx("div",{className:"flex flex-col mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center",children:D.jsx(Cs,{onClick:a,disabled:t.length===0||o.isPending,className:"bg-primary hover:bg-primary/90 text-white py-3 px-8 rounded-full font-poppins font-medium transition-all shadow-lg hover:shadow-primary/50",children:o.isPending?D.jsxs(D.Fragment,{children:[D.jsx("span",{className:"animate-spin mr-2",children:"⟳"})," Converting..."]}):D.jsxs(D.Fragment,{children:[D.jsx(cy,{className:"mr-2 h-5 w-5"})," Convert to PDF"]})})})]})}),D.jsxs("div",{className:"glass p-8 w-full max-w-3xl mx-auto",children:[D.jsx("h2",{className:"font-poppins font-semibold text-2xl md:text-3xl mb-8 text-center",children:"How to Use"}),D.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:rA.map((c,d)=>D.jsxs("div",{className:"text-center",children:[D.jsx("div",{className:"bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",children:c.icon}),D.jsx("h3",{className:"font-poppins font-medium text-xl mb-2",children:c.title}),D.jsx("p",{className:"text-gray-300",children:c.description})]},d))})]})]})},sA=()=>{const t=[{icon:D.jsx(fT,{className:"h-6 w-6 text-secondary"}),title:"Fast & Efficient",description:"Convert multiple images to PDF in seconds with our optimized processing."},{icon:D.jsx(uy,{className:"h-6 w-6 text-secondary"}),title:"Secure & Private",description:"Your files are processed locally and never stored on our servers."},{icon:D.jsx(dT,{className:"h-6 w-6 text-secondary"}),title:"Easy to Use",description:"Simple interface designed for users of all technical levels."}];return D.jsx("div",{className:"py-12 min-h-screen",children:D.jsxs("div",{className:"glass p-8 w-full max-w-4xl mx-auto",children:[D.jsx("h1",{className:"font-poppins font-bold text-3xl md:text-4xl mb-8 text-center",children:"About Us"}),D.jsxs("div",{className:"space-y-6",children:[D.jsx("p",{className:"text-lg",children:"Welcome to Image to PDF Converter!"}),D.jsx("p",{children:"Our platform offers a fast, secure, and user-friendly solution to convert your images into PDF files with just a few clicks. Whether you need to compile documents, store photos, or create digital portfolios, our tool is here to simplify your tasks."}),D.jsx("p",{children:"Our mission is to provide a seamless, high-quality experience while maintaining your privacy and data security."}),D.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mt-12",children:t.map((e,n)=>D.jsxs("div",{className:"text-center p-6 glass",children:[D.jsx("div",{className:"bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",children:e.icon}),D.jsx("h3",{className:"font-poppins font-semibold text-xl mb-2",children:e.title}),D.jsx("p",{className:"text-gray-300",children:e.description})]},n))})]})]})})},aA=()=>{const t=[{number:1,title:"Agreement to Terms",content:"By using this website, you agree to comply with all applicable laws and regulations."},{number:2,title:"Prohibited Uses",content:"You must not use this service for illegal activities or to convert copyrighted content without permission."},{number:3,title:"Limitation of Liability",content:"We are not liable for any issues that arise from the use of this website."},{number:4,title:"Modifications",content:"We reserve the right to update or change these terms at any time without prior notice."},{number:5,title:"Acceptance",content:"Continued use of the website after changes to the terms will constitute acceptance of the new terms."}];return D.jsx("div",{className:"py-12 min-h-screen",children:D.jsxs("div",{className:"glass p-8 w-full max-w-4xl mx-auto",children:[D.jsx("h1",{className:"font-poppins font-bold text-3xl md:text-4xl mb-8 text-center",children:"Terms & Conditions"}),D.jsxs("div",{className:"space-y-6",children:[D.jsx("p",{className:"text-lg",children:"By using our website, you agree to comply with and be bound by the following terms and conditions of use. Please review these terms carefully."}),D.jsx("div",{className:"space-y-4",children:t.map(e=>D.jsxs("div",{className:"p-4 glass",children:[D.jsxs("h3",{className:"font-poppins font-medium text-xl mb-2 flex items-center",children:[D.jsx("span",{className:"bg-primary/20 w-8 h-8 rounded-full flex items-center justify-center mr-3",children:e.number}),e.title]}),D.jsx("p",{children:e.content})]},e.number))})]})]})})},lA=()=>{const t=[{icon:D.jsx(aT,{className:"h-5 w-5 text-secondary"}),title:"Data Collection",content:"We do not store any images uploaded to our servers. All files are processed temporarily and are deleted automatically after the conversion."},{icon:D.jsx(sT,{className:"h-5 w-5 text-secondary"}),title:"Cookies",content:"We may use cookies to improve your experience, but no personal data is stored."},{icon:D.jsx(lT,{className:"h-5 w-5 text-secondary"}),title:"Third-Party Services",content:"We do not share any data with third parties."},{icon:D.jsx(uy,{className:"h-5 w-5 text-secondary"}),title:"Security",content:"We ensure a secure connection and use HTTPS to protect your data."},{icon:D.jsx(uT,{className:"h-5 w-5 text-secondary"}),title:"Changes to Policy",content:"This Privacy Policy may be updated periodically. Any changes will be posted on this page."}];return D.jsx("div",{className:"py-12 min-h-screen",children:D.jsxs("div",{className:"glass p-8 w-full max-w-4xl mx-auto",children:[D.jsx("h1",{className:"font-poppins font-bold text-3xl md:text-4xl mb-8 text-center",children:"Privacy Policy"}),D.jsxs("div",{className:"space-y-6",children:[D.jsx("p",{className:"text-lg",children:"Protecting your privacy is important to us. This Privacy Policy explains how we handle your data when you use our Image to PDF Converter service."}),D.jsx("div",{className:"space-y-4",children:t.map((e,n)=>D.jsxs("div",{className:"p-4 glass",children:[D.jsxs("h3",{className:"font-poppins font-medium text-xl mb-2 flex items-center",children:[D.jsx("span",{className:"mr-3",children:e.icon}),e.title]}),D.jsx("p",{children:e.content})]},n))})]})]})})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uh="174",cA=0,jg=1,uA=2,zy=1,dA=2,Li=3,Ur=0,vn=1,Oi=2,Dr=0,ls=1,Xg=2,qg=3,$g=4,fA=5,eo=100,pA=101,hA=102,mA=103,gA=104,vA=200,xA=201,_A=202,yA=203,Hf=204,Vf=205,SA=206,EA=207,MA=208,wA=209,TA=210,bA=211,AA=212,CA=213,RA=214,Gf=0,Wf=1,jf=2,Ps=3,Xf=4,qf=5,$f=6,Yf=7,By=0,PA=1,DA=2,Lr=0,LA=1,NA=2,IA=3,UA=4,FA=5,OA=6,kA=7,Hy=300,Ds=301,Ls=302,Kf=303,Qf=304,xu=306,Zf=1e3,oo=1001,Jf=1002,ci=1003,zA=1004,Cl=1005,yi=1006,od=1007,so=1008,Ki=1009,Vy=1010,Gy=1011,Va=1012,Fh=1013,So=1014,Bi=1015,Za=1016,Oh=1017,kh=1018,Ns=1020,Wy=35902,jy=1021,Xy=1022,si=1023,qy=1024,$y=1025,cs=1026,Is=1027,Yy=1028,zh=1029,Ky=1030,Bh=1031,Hh=1033,pc=33776,hc=33777,mc=33778,gc=33779,ep=35840,tp=35841,np=35842,ip=35843,rp=36196,op=37492,sp=37496,ap=37808,lp=37809,cp=37810,up=37811,dp=37812,fp=37813,pp=37814,hp=37815,mp=37816,gp=37817,vp=37818,xp=37819,_p=37820,yp=37821,vc=36492,Sp=36494,Ep=36495,Qy=36283,Mp=36284,wp=36285,Tp=36286,BA=3200,HA=3201,VA=0,GA=1,pr="",kn="srgb",Us="srgb-linear",$c="linear",ct="srgb",Co=7680,Yg=519,WA=512,jA=513,XA=514,Zy=515,qA=516,$A=517,YA=518,KA=519,Kg=35044,Qg="300 es",Hi=2e3,Yc=2001;class Hs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sd=Math.PI/180,bp=180/Math.PI;function Ja(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function $e(t,e,n){return Math.max(e,Math.min(n,t))}function QA(t,e){return(t%e+e)%e}function ad(t,e,n){return(1-n)*t+n*e}function ta(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function un(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,n=0){ot.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,n,i,r,o,s,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c)}set(e,n,i,r,o,s,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=o,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],p=i[2],m=i[5],v=i[8],_=r[0],h=r[3],u=r[6],g=r[1],x=r[4],y=r[7],A=r[2],b=r[5],T=r[8];return o[0]=s*_+a*g+l*A,o[3]=s*h+a*x+l*b,o[6]=s*u+a*y+l*T,o[1]=c*_+d*g+f*A,o[4]=c*h+d*x+f*b,o[7]=c*u+d*y+f*T,o[2]=p*_+m*g+v*A,o[5]=p*h+m*x+v*b,o[8]=p*u+m*y+v*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*s*d-n*a*c-i*o*d+i*a*l+r*o*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*s-a*c,p=a*l-d*o,m=c*o-s*l,v=n*f+i*p+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=f*_,e[1]=(r*c-d*i)*_,e[2]=(a*i-r*s)*_,e[3]=p*_,e[4]=(d*n-r*l)*_,e[5]=(r*o-a*n)*_,e[6]=m*_,e[7]=(i*l-c*n)*_,e[8]=(s*n-i*o)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ld.makeScale(e,n)),this}rotate(e){return this.premultiply(ld.makeRotation(-e)),this}translate(e,n){return this.premultiply(ld.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ld=new ze;function Jy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Kc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ZA(){const t=Kc("canvas");return t.style.display="block",t}const Zg={};function Kr(t){t in Zg||(Zg[t]=!0,console.warn(t))}function JA(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}function eC(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function tC(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Jg=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ev=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nC(){const t={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===ct&&(r.r=Gi(r.r),r.g=Gi(r.g),r.b=Gi(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ct&&(r.r=us(r.r),r.g=us(r.g),r.b=us(r.b))),r},fromWorkingColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},toWorkingColorSpace:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pr?$c:this.spaces[r].transfer},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Us]:{primaries:e,whitePoint:i,transfer:$c,toXYZ:Jg,fromXYZ:ev,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:Jg,fromXYZ:ev,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),t}const Je=nC();function Gi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function us(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ro;class iC{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ro===void 0&&(Ro=Kc("canvas")),Ro.width=e.width,Ro.height=e.height;const i=Ro.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ro}return n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Kc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Gi(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Gi(n[i]/255)*255):n[i]=Gi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rC=0;class Vh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rC++}),this.uuid=Ja(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(cd(r[s].image)):o.push(cd(r[s]))}else o=cd(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function cd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?iC.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oC=0;class xn extends Hs{constructor(e=xn.DEFAULT_IMAGE,n=xn.DEFAULT_MAPPING,i=oo,r=oo,o=yi,s=so,a=si,l=Ki,c=xn.DEFAULT_ANISOTROPY,d=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oC++}),this.uuid=Ja(),this.name="",this.source=new Vh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zf:e.x=e.x-Math.floor(e.x);break;case oo:e.x=e.x<0?0:1;break;case Jf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zf:e.y=e.y-Math.floor(e.y);break;case oo:e.y=e.y<0?0:1;break;case Jf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Hy;xn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,c=l[0],d=l[4],f=l[8],p=l[1],m=l[5],v=l[9],_=l[2],h=l[6],u=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-_)<.01&&Math.abs(v-h)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+_)<.1&&Math.abs(v+h)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,y=(m+1)/2,A=(u+1)/2,b=(d+p)/4,T=(f+_)/4,C=(v+h)/4;return x>y&&x>A?x<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(x),r=b/i,o=T/i):y>A?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=b/r,o=C/r):A<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(A),i=T/o,r=C/o),this.set(i,r,o,n),this}let g=Math.sqrt((h-v)*(h-v)+(f-_)*(f-_)+(p-d)*(p-d));return Math.abs(g)<.001&&(g=1),this.x=(h-v)/g,this.y=(f-_)/g,this.z=(p-d)/g,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this.w=$e(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this.w=$e(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sC extends Hs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Vh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Eo extends sC{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class eS extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ci,this.minFilter=ci,this.wrapR=oo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class aC extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=ci,this.minFilter=ci,this.wrapR=oo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class el{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const p=o[s+0],m=o[s+1],v=o[s+2],_=o[s+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(a===1){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=_;return}if(f!==_||l!==p||c!==m||d!==v){let h=1-a;const u=l*p+c*m+d*v+f*_,g=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const A=Math.sqrt(x),b=Math.atan2(A,u*g);h=Math.sin(h*b)/A,a=Math.sin(a*b)/A}const y=a*g;if(l=l*h+p*y,c=c*h+m*y,d=d*h+v*y,f=f*h+_*y,h===1-a){const A=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=A,c*=A,d*=A,f*=A}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=o[s],p=o[s+1],m=o[s+2],v=o[s+3];return e[n]=a*v+d*f+l*m-c*p,e[n+1]=l*v+d*p+c*f-a*m,e[n+2]=c*v+d*m+a*p-l*f,e[n+3]=d*v-a*f-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(o/2),p=l(i/2),m=l(r/2),v=l(o/2);switch(s){case"XYZ":this._x=p*d*f+c*m*v,this._y=c*m*f-p*d*v,this._z=c*d*v+p*m*f,this._w=c*d*f-p*m*v;break;case"YXZ":this._x=p*d*f+c*m*v,this._y=c*m*f-p*d*v,this._z=c*d*v-p*m*f,this._w=c*d*f+p*m*v;break;case"ZXY":this._x=p*d*f-c*m*v,this._y=c*m*f+p*d*v,this._z=c*d*v+p*m*f,this._w=c*d*f-p*m*v;break;case"ZYX":this._x=p*d*f-c*m*v,this._y=c*m*f+p*d*v,this._z=c*d*v-p*m*f,this._w=c*d*f+p*m*v;break;case"YZX":this._x=p*d*f+c*m*v,this._y=c*m*f+p*d*v,this._z=c*d*v-p*m*f,this._w=c*d*f-p*m*v;break;case"XZY":this._x=p*d*f-c*m*v,this._y=c*m*f-p*d*v,this._z=c*d*v+p*m*f,this._w=c*d*f+p*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],c=n[2],d=n[6],f=n[10],p=i+a+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-l)*m,this._y=(o-c)*m,this._z=(s-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(d-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(o+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(o-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(s-r)/m,this._x=(o+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+s*a+r*c-o*l,this._y=r*d+s*l+o*a-i*c,this._z=o*d+s*c+i*l-r*a,this._w=s*d-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*o+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),f=Math.sin((1-n)*d)/c,p=Math.sin(n*d)/c;return this._w=s*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=o*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(tv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(tv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*i),d=2*(a*n-o*r),f=2*(o*i-s*n);return this.x=n+l*c+s*f-a*d,this.y=i+l*d+a*c-o*f,this.z=r+l*f+o*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=$e(this.x,e.x,n.x),this.y=$e(this.y,e.y,n.y),this.z=$e(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=$e(this.x,e,n),this.y=$e(this.y,e,n),this.z=$e(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ud.copy(this).projectOnVector(e),this.sub(ud)}reflect(e){return this.sub(ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ud=new H,tv=new el;class tl{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Qn):Qn.fromBufferAttribute(o,s),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rl.copy(i.boundingBox)),Rl.applyMatrix4(e.matrixWorld),this.union(Rl)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(na),Pl.subVectors(this.max,na),Po.subVectors(e.a,na),Do.subVectors(e.b,na),Lo.subVectors(e.c,na),nr.subVectors(Do,Po),ir.subVectors(Lo,Do),Vr.subVectors(Po,Lo);let n=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Vr.z,Vr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Vr.z,0,-Vr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Vr.y,Vr.x,0];return!dd(n,Po,Do,Lo,Pl)||(n=[1,0,0,0,1,0,0,0,1],!dd(n,Po,Do,Lo,Pl))?!1:(Dl.crossVectors(nr,ir),n=[Dl.x,Dl.y,Dl.z],dd(n,Po,Do,Lo,Pl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bi=[new H,new H,new H,new H,new H,new H,new H,new H],Qn=new H,Rl=new tl,Po=new H,Do=new H,Lo=new H,nr=new H,ir=new H,Vr=new H,na=new H,Pl=new H,Dl=new H,Gr=new H;function dd(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Gr.fromArray(t,o);const a=r.x*Math.abs(Gr.x)+r.y*Math.abs(Gr.y)+r.z*Math.abs(Gr.z),l=e.dot(Gr),c=n.dot(Gr),d=i.dot(Gr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const lC=new tl,ia=new H,fd=new H;class _u{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):lC.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ia.subVectors(e,this.center);const n=ia.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ia,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ia.copy(e.center).add(fd)),this.expandByPoint(ia.copy(e.center).sub(fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new H,pd=new H,Ll=new H,rr=new H,hd=new H,Nl=new H,md=new H;class tS{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,n),Ai.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){pd.copy(e).add(n).multiplyScalar(.5),Ll.copy(n).sub(e).normalize(),rr.copy(this.origin).sub(pd);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Ll),a=rr.dot(this.direction),l=-rr.dot(Ll),c=rr.lengthSq(),d=Math.abs(1-s*s);let f,p,m,v;if(d>0)if(f=s*l-a,p=s*a-l,v=o*d,f>=0)if(p>=-v)if(p<=v){const _=1/d;f*=_,p*=_,m=f*(f+s*p+2*a)+p*(s*f+p+2*l)+c}else p=o,f=Math.max(0,-(s*p+a)),m=-f*f+p*(p+2*l)+c;else p=-o,f=Math.max(0,-(s*p+a)),m=-f*f+p*(p+2*l)+c;else p<=-v?(f=Math.max(0,-(-s*o+a)),p=f>0?-o:Math.min(Math.max(-o,-l),o),m=-f*f+p*(p+2*l)+c):p<=v?(f=0,p=Math.min(Math.max(-o,-l),o),m=p*(p+2*l)+c):(f=Math.max(0,-(s*o+a)),p=f>0?o:Math.min(Math.max(-o,-l),o),m=-f*f+p*(p+2*l)+c);else p=s>0?-o:o,f=Math.max(0,-(s*p+a)),m=-f*f+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(pd).addScaledVector(Ll,p),m}intersectSphere(e,n){Ai.subVectors(e.center,this.origin);const i=Ai.dot(this.direction),r=Ai.dot(Ai)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),d>=0?(o=(e.min.y-p.y)*d,s=(e.max.y-p.y)*d):(o=(e.max.y-p.y)*d,s=(e.min.y-p.y)*d),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,n,i,r,o){hd.subVectors(n,e),Nl.subVectors(i,e),md.crossVectors(hd,Nl);let s=this.direction.dot(md),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;rr.subVectors(this.origin,e);const l=a*this.direction.dot(Nl.crossVectors(rr,Nl));if(l<0)return null;const c=a*this.direction.dot(hd.cross(rr));if(c<0||l+c>s)return null;const d=-a*rr.dot(md);return d<0?null:this.at(d/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rt{constructor(e,n,i,r,o,s,a,l,c,d,f,p,m,v,_,h){Rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c,d,f,p,m,v,_,h)}set(e,n,i,r,o,s,a,l,c,d,f,p,m,v,_,h){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=o,u[5]=s,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=p,u[3]=m,u[7]=v,u[11]=_,u[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/No.setFromMatrixColumn(e,0).length(),o=1/No.setFromMatrixColumn(e,1).length(),s=1/No.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const p=s*d,m=s*f,v=a*d,_=a*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=m+v*c,n[5]=p-_*c,n[9]=-a*l,n[2]=_-p*c,n[6]=v+m*c,n[10]=s*l}else if(e.order==="YXZ"){const p=l*d,m=l*f,v=c*d,_=c*f;n[0]=p+_*a,n[4]=v*a-m,n[8]=s*c,n[1]=s*f,n[5]=s*d,n[9]=-a,n[2]=m*a-v,n[6]=_+p*a,n[10]=s*l}else if(e.order==="ZXY"){const p=l*d,m=l*f,v=c*d,_=c*f;n[0]=p-_*a,n[4]=-s*f,n[8]=v+m*a,n[1]=m+v*a,n[5]=s*d,n[9]=_-p*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const p=s*d,m=s*f,v=a*d,_=a*f;n[0]=l*d,n[4]=v*c-m,n[8]=p*c+_,n[1]=l*f,n[5]=_*c+p,n[9]=m*c-v,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const p=s*l,m=s*c,v=a*l,_=a*c;n[0]=l*d,n[4]=_-p*f,n[8]=v*f+m,n[1]=f,n[5]=s*d,n[9]=-a*d,n[2]=-c*d,n[6]=m*f+v,n[10]=p-_*f}else if(e.order==="XZY"){const p=s*l,m=s*c,v=a*l,_=a*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=p*f+_,n[5]=s*d,n[9]=m*f-v,n[2]=v*f-m,n[6]=a*d,n[10]=_*f+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cC,e,uC)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),or.crossVectors(i,Mn),or.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),or.crossVectors(i,Mn)),or.normalize(),Il.crossVectors(Mn,or),r[0]=or.x,r[4]=Il.x,r[8]=Mn.x,r[1]=or.y,r[5]=Il.y,r[9]=Mn.y,r[2]=or.z,r[6]=Il.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],p=i[9],m=i[13],v=i[2],_=i[6],h=i[10],u=i[14],g=i[3],x=i[7],y=i[11],A=i[15],b=r[0],T=r[4],C=r[8],M=r[12],S=r[1],P=r[5],z=r[9],G=r[13],B=r[2],K=r[6],Z=r[10],ee=r[14],N=r[3],q=r[7],te=r[11],oe=r[15];return o[0]=s*b+a*S+l*B+c*N,o[4]=s*T+a*P+l*K+c*q,o[8]=s*C+a*z+l*Z+c*te,o[12]=s*M+a*G+l*ee+c*oe,o[1]=d*b+f*S+p*B+m*N,o[5]=d*T+f*P+p*K+m*q,o[9]=d*C+f*z+p*Z+m*te,o[13]=d*M+f*G+p*ee+m*oe,o[2]=v*b+_*S+h*B+u*N,o[6]=v*T+_*P+h*K+u*q,o[10]=v*C+_*z+h*Z+u*te,o[14]=v*M+_*G+h*ee+u*oe,o[3]=g*b+x*S+y*B+A*N,o[7]=g*T+x*P+y*K+A*q,o[11]=g*C+x*z+y*Z+A*te,o[15]=g*M+x*G+y*ee+A*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],p=e[10],m=e[14],v=e[3],_=e[7],h=e[11],u=e[15];return v*(+o*l*f-r*c*f-o*a*p+i*c*p+r*a*m-i*l*m)+_*(+n*l*m-n*c*p+o*s*p-r*s*m+r*c*d-o*l*d)+h*(+n*c*f-n*a*m-o*s*f+i*s*m+o*a*d-i*c*d)+u*(-r*a*d-n*l*f+n*a*p+r*s*f-i*s*p+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],p=e[10],m=e[11],v=e[12],_=e[13],h=e[14],u=e[15],g=f*h*c-_*p*c+_*l*m-a*h*m-f*l*u+a*p*u,x=v*p*c-d*h*c-v*l*m+s*h*m+d*l*u-s*p*u,y=d*_*c-v*f*c+v*a*m-s*_*m-d*a*u+s*f*u,A=v*f*l-d*_*l-v*a*p+s*_*p+d*a*h-s*f*h,b=n*g+i*x+r*y+o*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=g*T,e[1]=(_*p*o-f*h*o-_*r*m+i*h*m+f*r*u-i*p*u)*T,e[2]=(a*h*o-_*l*o+_*r*c-i*h*c-a*r*u+i*l*u)*T,e[3]=(f*l*o-a*p*o-f*r*c+i*p*c+a*r*m-i*l*m)*T,e[4]=x*T,e[5]=(d*h*o-v*p*o+v*r*m-n*h*m-d*r*u+n*p*u)*T,e[6]=(v*l*o-s*h*o-v*r*c+n*h*c+s*r*u-n*l*u)*T,e[7]=(s*p*o-d*l*o+d*r*c-n*p*c-s*r*m+n*l*m)*T,e[8]=y*T,e[9]=(v*f*o-d*_*o-v*i*m+n*_*m+d*i*u-n*f*u)*T,e[10]=(s*_*o-v*a*o+v*i*c-n*_*c-s*i*u+n*a*u)*T,e[11]=(d*a*o-s*f*o-d*i*c+n*f*c+s*i*m-n*a*m)*T,e[12]=A*T,e[13]=(d*_*r-v*f*r+v*i*p-n*_*p-d*i*h+n*f*h)*T,e[14]=(v*a*r-s*_*r-v*i*l+n*_*l+s*i*h-n*a*h)*T,e[15]=(s*f*r-d*a*r+d*i*l-n*f*l-s*i*p+n*a*p)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,c=o*s,d=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*s,0,c*l-r*a,d*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,c=o+o,d=s+s,f=a+a,p=o*c,m=o*d,v=o*f,_=s*d,h=s*f,u=a*f,g=l*c,x=l*d,y=l*f,A=i.x,b=i.y,T=i.z;return r[0]=(1-(_+u))*A,r[1]=(m+y)*A,r[2]=(v-x)*A,r[3]=0,r[4]=(m-y)*b,r[5]=(1-(p+u))*b,r[6]=(h+g)*b,r[7]=0,r[8]=(v+x)*T,r[9]=(h-g)*T,r[10]=(1-(p+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=No.set(r[0],r[1],r[2]).length();const s=No.set(r[4],r[5],r[6]).length(),a=No.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],Zn.copy(this);const c=1/o,d=1/s,f=1/a;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=d,Zn.elements[5]*=d,Zn.elements[6]*=d,Zn.elements[8]*=f,Zn.elements[9]*=f,Zn.elements[10]*=f,n.setFromRotationMatrix(Zn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Hi){const l=this.elements,c=2*o/(n-e),d=2*o/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let m,v;if(a===Hi)m=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===Yc)m=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Hi){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(s-o),p=(n+e)*c,m=(i+r)*d;let v,_;if(a===Hi)v=(s+o)*f,_=-2*f;else if(a===Yc)v=o*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const No=new H,Zn=new Rt,cC=new H(0,0,0),uC=new H(1,1,1),or=new H,Il=new H,Mn=new H,nv=new Rt,iv=new el;class Qi{constructor(e=0,n=0,i=0,r=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],p=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin($e(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-$e(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return nv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return iv.setFromEuler(this),this.setFromQuaternion(iv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class nS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dC=0;const rv=new H,Io=new el,Ci=new Rt,Ul=new H,ra=new H,fC=new H,pC=new el,ov=new H(1,0,0),sv=new H(0,1,0),av=new H(0,0,1),lv={type:"added"},hC={type:"removed"},Uo={type:"childadded",child:null},gd={type:"childremoved",child:null};class _n extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dC++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new H,n=new Qi,i=new el,r=new H(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new ze}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Io.setFromAxisAngle(e,n),this.quaternion.multiply(Io),this}rotateOnWorldAxis(e,n){return Io.setFromAxisAngle(e,n),this.quaternion.premultiply(Io),this}rotateX(e){return this.rotateOnAxis(ov,e)}rotateY(e){return this.rotateOnAxis(sv,e)}rotateZ(e){return this.rotateOnAxis(av,e)}translateOnAxis(e,n){return rv.copy(e).applyQuaternion(this.quaternion),this.position.add(rv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(ov,e)}translateY(e){return this.translateOnAxis(sv,e)}translateZ(e){return this.translateOnAxis(av,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ul.copy(e):Ul.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(ra,Ul,this.up):Ci.lookAt(Ul,ra,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),Io.setFromRotationMatrix(Ci),this.quaternion.premultiply(Io.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lv),Uo.child=e,this.dispatchEvent(Uo),Uo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(hC),gd.child=e,this.dispatchEvent(gd),gd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lv),Uo.child=e,this.dispatchEvent(Uo),Uo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,fC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,pC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),f=s(e.shapes),p=s(e.skeletons),m=s(e.animations),v=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function s(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_n.DEFAULT_UP=new H(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new H,Ri=new H,vd=new H,Pi=new H,Fo=new H,Oo=new H,cv=new H,xd=new H,_d=new H,yd=new H,Sd=new Ct,Ed=new Ct,Md=new Ct;class oi{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Jn.subVectors(e,n),r.cross(Jn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Jn.subVectors(r,n),Ri.subVectors(i,n),vd.subVectors(e,n);const s=Jn.dot(Jn),a=Jn.dot(Ri),l=Jn.dot(vd),c=Ri.dot(Ri),d=Ri.dot(vd),f=s*c-a*a;if(f===0)return o.set(0,0,0),null;const p=1/f,m=(c*l-a*d)*p,v=(s*d-a*l)*p;return o.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Pi.x),l.addScaledVector(s,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(e,n,i,r,o,s){return Sd.setScalar(0),Ed.setScalar(0),Md.setScalar(0),Sd.fromBufferAttribute(e,n),Ed.fromBufferAttribute(e,i),Md.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Sd,o.x),s.addScaledVector(Ed,o.y),s.addScaledVector(Md,o.z),s}static isFrontFacing(e,n,i,r){return Jn.subVectors(i,n),Ri.subVectors(e,n),Jn.cross(Ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Jn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return oi.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Fo.subVectors(r,i),Oo.subVectors(o,i),xd.subVectors(e,i);const l=Fo.dot(xd),c=Oo.dot(xd);if(l<=0&&c<=0)return n.copy(i);_d.subVectors(e,r);const d=Fo.dot(_d),f=Oo.dot(_d);if(d>=0&&f<=d)return n.copy(r);const p=l*f-d*c;if(p<=0&&l>=0&&d<=0)return s=l/(l-d),n.copy(i).addScaledVector(Fo,s);yd.subVectors(e,o);const m=Fo.dot(yd),v=Oo.dot(yd);if(v>=0&&m<=v)return n.copy(o);const _=m*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(Oo,a);const h=d*v-m*f;if(h<=0&&f-d>=0&&m-v>=0)return cv.subVectors(o,r),a=(f-d)/(f-d+(m-v)),n.copy(r).addScaledVector(cv,a);const u=1/(h+_+p);return s=_*u,a=p*u,n.copy(i).addScaledVector(Fo,s).addScaledVector(Oo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const iS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},Fl={h:0,s:0,l:0};function wd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class at{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=QA(e,1),n=$e(n,0,1),i=$e(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=wd(s,o,e+1/3),this.g=wd(s,o,e),this.b=wd(s,o,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=kn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kn){const i=iS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return Je.fromWorkingColorSpace(Yt.copy(this),e),Math.round($e(Yt.r*255,0,255))*65536+Math.round($e(Yt.g*255,0,255))*256+Math.round($e(Yt.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Yt.copy(this),n);const i=Yt.r,r=Yt.g,o=Yt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,c;const d=(a+s)/2;if(a===s)l=0,c=0;else{const f=s-a;switch(c=d<=.5?f/(s+a):f/(2-s-a),s){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=kn){Je.fromWorkingColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,r=Yt.b;return e!==kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+n,sr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(sr),e.getHSL(Fl);const i=ad(sr.h,Fl.h,n),r=ad(sr.s,Fl.s,n),o=ad(sr.l,Fl.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new at;at.NAMES=iS;let mC=0;class nl extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mC++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=ls,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hf,this.blendDst=Vf,this.blendEquation=eo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Co,this.stencilZFail=Co,this.stencilZPass=Co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(i.blending=this.blending),this.side!==Ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hf&&(i.blendSrc=this.blendSrc),this.blendDst!==Vf&&(i.blendDst=this.blendDst),this.blendEquation!==eo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Co&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Co&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Co&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Sa extends nl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=By,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new H,Ol=new ot;let gC=0;class ui{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gC++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Kg,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ol.fromBufferAttribute(this,n),Ol.applyMatrix3(e),this.setXY(n,Ol.x,Ol.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ta(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=un(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ta(n,this.array)),n}setX(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ta(n,this.array)),n}setY(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ta(n,this.array)),n}setZ(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ta(n,this.array)),n}setW(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array),o=un(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kg&&(e.usage=this.usage),e}}class rS extends ui{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class oS extends ui{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Zt extends ui{constructor(e,n,i){super(new Float32Array(e),n,i)}}let vC=0;const Fn=new Rt,Td=new _n,ko=new H,wn=new tl,oa=new tl,Ot=new H;class qn extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vC++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jy(e)?oS:rS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ze().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,n,i){return Fn.makeTranslation(e,n,i),this.applyMatrix4(Fn),this}scale(e,n,i){return Fn.makeScale(e,n,i),this.applyMatrix4(Fn),this}lookAt(e){return Td.lookAt(e),Td.updateMatrix(),this.applyMatrix4(Td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ko).negate(),this.translate(ko.x,ko.y,ko.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Zt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const o=e[r];n.setXYZ(r,o.x,o.y,o.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];wn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _u);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];oa.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(wn.min,oa.min),wn.expandByPoint(Ot),Ot.addVectors(wn.max,oa.max),wn.expandByPoint(Ot)):(wn.expandByPoint(oa.min),wn.expandByPoint(oa.max))}wn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Ot.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Ot));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ot.fromBufferAttribute(a,c),l&&(ko.fromBufferAttribute(e,c),Ot.add(ko)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new H,l[C]=new H;const c=new H,d=new H,f=new H,p=new ot,m=new ot,v=new ot,_=new H,h=new H;function u(C,M,S){c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),p.fromBufferAttribute(o,C),m.fromBufferAttribute(o,M),v.fromBufferAttribute(o,S),d.sub(c),f.sub(c),m.sub(p),v.sub(p);const P=1/(m.x*v.y-v.x*m.y);isFinite(P)&&(_.copy(d).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(P),h.copy(f).multiplyScalar(m.x).addScaledVector(d,-v.x).multiplyScalar(P),a[C].add(_),a[M].add(_),a[S].add(_),l[C].add(h),l[M].add(h),l[S].add(h))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let C=0,M=g.length;C<M;++C){const S=g[C],P=S.start,z=S.count;for(let G=P,B=P+z;G<B;G+=3)u(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const x=new H,y=new H,A=new H,b=new H;function T(C){A.fromBufferAttribute(r,C),b.copy(A);const M=a[C];x.copy(M),x.sub(A.multiplyScalar(A.dot(M))).normalize(),y.crossVectors(b,M);const P=y.dot(l[C])<0?-1:1;s.setXYZW(C,x.x,x.y,x.z,P)}for(let C=0,M=g.length;C<M;++C){const S=g[C],P=S.start,z=S.count;for(let G=P,B=P+z;G<B;G+=3)T(e.getX(G+0)),T(e.getX(G+1)),T(e.getX(G+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new H,o=new H,s=new H,a=new H,l=new H,c=new H,d=new H,f=new H;if(e)for(let p=0,m=e.count;p<m;p+=3){const v=e.getX(p+0),_=e.getX(p+1),h=e.getX(p+2);r.fromBufferAttribute(n,v),o.fromBufferAttribute(n,_),s.fromBufferAttribute(n,h),d.subVectors(s,o),f.subVectors(r,o),d.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,h),a.add(d),l.add(d),c.add(d),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(h,c.x,c.y,c.z)}else for(let p=0,m=n.count;p<m;p+=3)r.fromBufferAttribute(n,p+0),o.fromBufferAttribute(n,p+1),s.fromBufferAttribute(n,p+2),d.subVectors(s,o),f.subVectors(r,o),d.cross(f),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ot.fromBufferAttribute(e,n),Ot.normalize(),e.setXYZ(n,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,p=new c.constructor(l.length*d);let m=0,v=0;for(let _=0,h=l.length;_<h;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*d;for(let u=0;u<d;u++)p[v++]=c[m++]}return new ui(p,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let d=0,f=c.length;d<f;d++){const p=c[d],m=e(p,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,p=c.length;f<p;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const o=e.morphAttributes;for(const c in o){const d=[],f=o[c];for(let p=0,m=f.length;p<m;p++)d.push(f[p].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uv=new Rt,Wr=new tS,kl=new _u,dv=new H,zl=new H,Bl=new H,Hl=new H,bd=new H,Vl=new H,fv=new H,Gl=new H;class Gn extends _n{constructor(e=new qn,n=new Sa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Vl.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const d=a[l],f=o[l];d!==0&&(bd.fromBufferAttribute(f,e),s?Vl.addScaledVector(bd,d):Vl.addScaledVector(bd.sub(n),d))}n.add(Vl)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kl.copy(i.boundingSphere),kl.applyMatrix4(o),Wr.copy(e.ray).recast(e.near),!(kl.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(kl,dv)===null||Wr.origin.distanceToSquared(dv)>(e.far-e.near)**2))&&(uv.copy(o).invert(),Wr.copy(e.ray).applyMatrix4(uv),!(i.boundingBox!==null&&Wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Wr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,d=o.attributes.uv1,f=o.attributes.normal,p=o.groups,m=o.drawRange;if(a!==null)if(Array.isArray(s))for(let v=0,_=p.length;v<_;v++){const h=p[v],u=s[h.materialIndex],g=Math.max(h.start,m.start),x=Math.min(a.count,Math.min(h.start+h.count,m.start+m.count));for(let y=g,A=x;y<A;y+=3){const b=a.getX(y),T=a.getX(y+1),C=a.getX(y+2);r=Wl(this,u,e,i,c,d,f,b,T,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=h.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let h=v,u=_;h<u;h+=3){const g=a.getX(h),x=a.getX(h+1),y=a.getX(h+2);r=Wl(this,s,e,i,c,d,f,g,x,y),r&&(r.faceIndex=Math.floor(h/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let v=0,_=p.length;v<_;v++){const h=p[v],u=s[h.materialIndex],g=Math.max(h.start,m.start),x=Math.min(l.count,Math.min(h.start+h.count,m.start+m.count));for(let y=g,A=x;y<A;y+=3){const b=y,T=y+1,C=y+2;r=Wl(this,u,e,i,c,d,f,b,T,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=h.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let h=v,u=_;h<u;h+=3){const g=h,x=h+1,y=h+2;r=Wl(this,s,e,i,c,d,f,g,x,y),r&&(r.faceIndex=Math.floor(h/3),n.push(r))}}}}function xC(t,e,n,i,r,o,s,a){let l;if(e.side===vn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===Ur,a),l===null)return null;Gl.copy(a),Gl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Gl);return c<n.near||c>n.far?null:{distance:c,point:Gl.clone(),object:t}}function Wl(t,e,n,i,r,o,s,a,l,c){t.getVertexPosition(a,zl),t.getVertexPosition(l,Bl),t.getVertexPosition(c,Hl);const d=xC(t,e,n,i,zl,Bl,Hl,fv);if(d){const f=new H;oi.getBarycoord(fv,zl,Bl,Hl,f),r&&(d.uv=oi.getInterpolatedAttribute(r,a,l,c,f,new ot)),o&&(d.uv1=oi.getInterpolatedAttribute(o,a,l,c,f,new ot)),s&&(d.normal=oi.getInterpolatedAttribute(s,a,l,c,f,new H),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new H,materialIndex:0};oi.getNormal(zl,Bl,Hl,p.normal),d.face=p,d.barycoord=f}return d}class il extends qn{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],d=[],f=[];let p=0,m=0;v("z","y","x",-1,-1,i,n,e,s,o,0),v("z","y","x",1,-1,i,n,-e,s,o,1),v("x","z","y",1,1,e,i,n,r,s,2),v("x","z","y",1,-1,e,i,-n,r,s,3),v("x","y","z",1,-1,e,n,i,r,o,4),v("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(f,2));function v(_,h,u,g,x,y,A,b,T,C,M){const S=y/T,P=A/C,z=y/2,G=A/2,B=b/2,K=T+1,Z=C+1;let ee=0,N=0;const q=new H;for(let te=0;te<Z;te++){const oe=te*P-G;for(let Se=0;Se<K;Se++){const Be=Se*S-z;q[_]=Be*g,q[h]=oe*x,q[u]=B,c.push(q.x,q.y,q.z),q[_]=0,q[h]=0,q[u]=b>0?1:-1,d.push(q.x,q.y,q.z),f.push(Se/T),f.push(1-te/C),ee+=1}}for(let te=0;te<C;te++)for(let oe=0;oe<T;oe++){const Se=p+oe+K*te,Be=p+oe+K*(te+1),Q=p+(oe+1)+K*(te+1),ae=p+(oe+1)+K*te;l.push(Se,Be,ae),l.push(Be,Q,ae),N+=6}a.addGroup(m,N,M),m+=N,p+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=Fs(t[n]);for(const r in i)e[r]=i[r]}return e}function _C(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function sS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const yC={clone:Fs,merge:nn};var SC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,EC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fr extends nl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SC,this.fragmentShader=EC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=_C(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class aS extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ar=new H,pv=new ot,hv=new ot;class Hn extends aS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=bp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bp*2*Math.atan(Math.tan(sd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,n){return this.getViewBounds(e,pv,hv),n.subVectors(hv,pv)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(sd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const zo=-90,Bo=1;class MC extends _n{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Hn(zo,Bo,e,n);r.layers=this.layers,this.add(r);const o=new Hn(zo,Bo,e,n);o.layers=this.layers,this.add(o);const s=new Hn(zo,Bo,e,n);s.layers=this.layers,this.add(s);const a=new Hn(zo,Bo,e,n);a.layers=this.layers,this.add(a);const l=new Hn(zo,Bo,e,n);l.layers=this.layers,this.add(l);const c=new Hn(zo,Bo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const c of n)this.remove(c);if(e===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,p,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class lS extends xn{constructor(e,n,i,r,o,s,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Ds,super(e,n,i,r,o,s,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wC extends Eo{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new lS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new il(5,5,5),o=new Fr({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:Dr});o.uniforms.tEquirect.value=n;const s=new Gn(r,o),a=n.minFilter;return n.minFilter===so&&(n.minFilter=yi),new MC(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}class jl extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TC={type:"move"};class Ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const h=n.getJointPose(_,i),u=this._getHandJoint(c,_);h!==null&&(u.matrix.fromArray(h.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=h.radius),u.visible=h!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=d.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&p>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(TC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new jl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class bC extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Cd=new H,AC=new H,CC=new ze;class Qr{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Cd.subVectors(i,n).cross(AC.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Cd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||CC.getNormalMatrix(e),r=this.coplanarPoint(Cd).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new _u,Xl=new H;class cS{constructor(e=new Qr,n=new Qr,i=new Qr,r=new Qr,o=new Qr,s=new Qr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Hi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],c=r[4],d=r[5],f=r[6],p=r[7],m=r[8],v=r[9],_=r[10],h=r[11],u=r[12],g=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-o,p-c,h-m,y-u).normalize(),i[1].setComponents(l+o,p+c,h+m,y+u).normalize(),i[2].setComponents(l+s,p+d,h+v,y+g).normalize(),i[3].setComponents(l-s,p-d,h-v,y-g).normalize(),i[4].setComponents(l-a,p-f,h-_,y-x).normalize(),n===Hi)i[5].setComponents(l+a,p+f,h+_,y+x).normalize();else if(n===Yc)i[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Xl.x=r.normal.x>0?e.max.x:e.min.x,Xl.y=r.normal.y>0?e.max.y:e.min.y,Xl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uS extends nl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mv=new Rt,Ap=new tS,ql=new _u,$l=new H;class RC extends _n{constructor(e=new qn,n=new uS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ql.copy(i.boundingSphere),ql.applyMatrix4(r),ql.radius+=o,e.ray.intersectsSphere(ql)===!1)return;mv.copy(r).invert(),Ap.copy(e.ray).applyMatrix4(mv);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const p=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let v=p,_=m;v<_;v++){const h=c.getX(v);$l.fromBufferAttribute(f,h),gv($l,h,l,r,e,n,this)}}else{const p=Math.max(0,s.start),m=Math.min(f.count,s.start+s.count);for(let v=p,_=m;v<_;v++)$l.fromBufferAttribute(f,v),gv($l,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function gv(t,e,n,i,r,o,s){const a=Ap.distanceSqToPoint(t);if(a<n){const l=new H;Ap.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class dS extends xn{constructor(e,n,i,r,o,s,a,l,c,d=cs){if(d!==cs&&d!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===cs&&(i=So),i===void 0&&d===Is&&(i=Ns),super(null,r,o,s,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:ci,this.minFilter=l!==void 0?l:ci,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Gh extends qn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const o=[],s=[];a(r),c(i),d(),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(o.slice(),3)),this.setAttribute("uv",new Zt(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const x=new H,y=new H,A=new H;for(let b=0;b<n.length;b+=3)m(n[b+0],x),m(n[b+1],y),m(n[b+2],A),l(x,y,A,g)}function l(g,x,y,A){const b=A+1,T=[];for(let C=0;C<=b;C++){T[C]=[];const M=g.clone().lerp(y,C/b),S=x.clone().lerp(y,C/b),P=b-C;for(let z=0;z<=P;z++)z===0&&C===b?T[C][z]=M:T[C][z]=M.clone().lerp(S,z/P)}for(let C=0;C<b;C++)for(let M=0;M<2*(b-C)-1;M++){const S=Math.floor(M/2);M%2===0?(p(T[C][S+1]),p(T[C+1][S]),p(T[C][S])):(p(T[C][S+1]),p(T[C+1][S+1]),p(T[C+1][S]))}}function c(g){const x=new H;for(let y=0;y<o.length;y+=3)x.x=o[y+0],x.y=o[y+1],x.z=o[y+2],x.normalize().multiplyScalar(g),o[y+0]=x.x,o[y+1]=x.y,o[y+2]=x.z}function d(){const g=new H;for(let x=0;x<o.length;x+=3){g.x=o[x+0],g.y=o[x+1],g.z=o[x+2];const y=h(g)/2/Math.PI+.5,A=u(g)/Math.PI+.5;s.push(y,1-A)}v(),f()}function f(){for(let g=0;g<s.length;g+=6){const x=s[g+0],y=s[g+2],A=s[g+4],b=Math.max(x,y,A),T=Math.min(x,y,A);b>.9&&T<.1&&(x<.2&&(s[g+0]+=1),y<.2&&(s[g+2]+=1),A<.2&&(s[g+4]+=1))}}function p(g){o.push(g.x,g.y,g.z)}function m(g,x){const y=g*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function v(){const g=new H,x=new H,y=new H,A=new H,b=new ot,T=new ot,C=new ot;for(let M=0,S=0;M<o.length;M+=9,S+=6){g.set(o[M+0],o[M+1],o[M+2]),x.set(o[M+3],o[M+4],o[M+5]),y.set(o[M+6],o[M+7],o[M+8]),b.set(s[S+0],s[S+1]),T.set(s[S+2],s[S+3]),C.set(s[S+4],s[S+5]),A.copy(g).add(x).add(y).divideScalar(3);const P=h(A);_(b,S+0,g,P),_(T,S+2,x,P),_(C,S+4,y,P)}}function _(g,x,y,A){A<0&&g.x===1&&(s[x]=g.x-1),y.x===0&&y.z===0&&(s[x]=A/2/Math.PI+.5)}function h(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gh(e.vertices,e.indices,e.radius,e.details)}}class Wh extends Gh{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Wh(e.radius,e.detail)}}class yu extends qn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,p=n/l,m=[],v=[],_=[],h=[];for(let u=0;u<d;u++){const g=u*p-s;for(let x=0;x<c;x++){const y=x*f-o;v.push(y,-g,0),_.push(0,0,1),h.push(x/a),h.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const x=g+c*u,y=g+c*(u+1),A=g+1+c*(u+1),b=g+1+c*u;m.push(x,y,b),m.push(y,A,b)}this.setIndex(m),this.setAttribute("position",new Zt(v,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yu(e.width,e.height,e.widthSegments,e.heightSegments)}}class jh extends qn{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+a,Math.PI);let c=0;const d=[],f=new H,p=new H,m=[],v=[],_=[],h=[];for(let u=0;u<=i;u++){const g=[],x=u/i;let y=0;u===0&&s===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let A=0;A<=n;A++){const b=A/n;f.x=-e*Math.cos(r+b*o)*Math.sin(s+x*a),f.y=e*Math.cos(s+x*a),f.z=e*Math.sin(r+b*o)*Math.sin(s+x*a),v.push(f.x,f.y,f.z),p.copy(f).normalize(),_.push(p.x,p.y,p.z),h.push(b+y,1-x),g.push(c++)}d.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const x=d[u][g+1],y=d[u][g],A=d[u+1][g],b=d[u+1][g+1];(u!==0||s>0)&&m.push(x,y,b),(u!==i-1||l<Math.PI)&&m.push(y,A,b)}this.setIndex(m),this.setAttribute("position",new Zt(v,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xh extends qn{constructor(e=1,n=.4,i=12,r=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:o},i=Math.floor(i),r=Math.floor(r);const s=[],a=[],l=[],c=[],d=new H,f=new H,p=new H;for(let m=0;m<=i;m++)for(let v=0;v<=r;v++){const _=v/r*o,h=m/i*Math.PI*2;f.x=(e+n*Math.cos(h))*Math.cos(_),f.y=(e+n*Math.cos(h))*Math.sin(_),f.z=n*Math.sin(h),a.push(f.x,f.y,f.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),c.push(v/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let v=1;v<=r;v++){const _=(r+1)*m+v-1,h=(r+1)*(m-1)+v-1,u=(r+1)*(m-1)+v,g=(r+1)*m+v;s.push(_,h,g),s.push(h,u,g)}this.setIndex(s),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class PC extends nl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DC extends nl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class LC extends aS{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class NC extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function vv(t,e,n,i){const r=IC(i);switch(n){case jy:return t*e;case qy:return t*e;case $y:return t*e*2;case Yy:return t*e/r.components*r.byteLength;case zh:return t*e/r.components*r.byteLength;case Ky:return t*e*2/r.components*r.byteLength;case Bh:return t*e*2/r.components*r.byteLength;case Xy:return t*e*3/r.components*r.byteLength;case si:return t*e*4/r.components*r.byteLength;case Hh:return t*e*4/r.components*r.byteLength;case pc:case hc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case mc:case gc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case tp:case ip:return Math.max(t,16)*Math.max(e,8)/4;case ep:case np:return Math.max(t,8)*Math.max(e,8)/2;case rp:case op:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ap:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case lp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case cp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case up:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case dp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case fp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case pp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case hp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case mp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case gp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case vp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case xp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case _p:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case yp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case vc:case Sp:case Ep:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Qy:case Mp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case wp:case Tp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function IC(t){switch(t){case Ki:case Vy:return{byteLength:1,components:1};case Va:case Gy:case Za:return{byteLength:2,components:1};case Oh:case kh:return{byteLength:2,components:4};case So:case Fh:case Bi:return{byteLength:4,components:1};case Wy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fS(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function UC(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,f=c.byteLength,p=t.createBuffer();t.bindBuffer(l,p),t.bufferData(l,c,d),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,d);else{f.sort((m,v)=>m.start-v.start);let p=0;for(let m=1;m<f.length;m++){const v=f[p],_=f[m];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++p,f[p]=_)}f.length=p+1;for(let m=0,v=f.length;m<v;m++){const _=f[m];t.bufferSubData(c,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var FC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,GC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$C=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,YC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,KC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,QC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ZC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,oR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,aR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fR="gl_FragColor = linearToOutputTexel( gl_FragColor );",pR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_R=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ER=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,MR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,CR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,RR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,IR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,UR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,FR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,OR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kR=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zR=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BR=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HR=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$R=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QR=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ZR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,tP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,oP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,xP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_P=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,SP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,EP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,MP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,TP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,RP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,PP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,DP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,NP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,IP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,VP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,GP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,WP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$P=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,KP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,e2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,n2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,i2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,s2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,u2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,p2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:FC,alphahash_pars_fragment:OC,alphamap_fragment:kC,alphamap_pars_fragment:zC,alphatest_fragment:BC,alphatest_pars_fragment:HC,aomap_fragment:VC,aomap_pars_fragment:GC,batching_pars_vertex:WC,batching_vertex:jC,begin_vertex:XC,beginnormal_vertex:qC,bsdfs:$C,iridescence_fragment:YC,bumpmap_pars_fragment:KC,clipping_planes_fragment:QC,clipping_planes_pars_fragment:ZC,clipping_planes_pars_vertex:JC,clipping_planes_vertex:eR,color_fragment:tR,color_pars_fragment:nR,color_pars_vertex:iR,color_vertex:rR,common:oR,cube_uv_reflection_fragment:sR,defaultnormal_vertex:aR,displacementmap_pars_vertex:lR,displacementmap_vertex:cR,emissivemap_fragment:uR,emissivemap_pars_fragment:dR,colorspace_fragment:fR,colorspace_pars_fragment:pR,envmap_fragment:hR,envmap_common_pars_fragment:mR,envmap_pars_fragment:gR,envmap_pars_vertex:vR,envmap_physical_pars_fragment:CR,envmap_vertex:xR,fog_vertex:_R,fog_pars_vertex:yR,fog_fragment:SR,fog_pars_fragment:ER,gradientmap_pars_fragment:MR,lightmap_pars_fragment:wR,lights_lambert_fragment:TR,lights_lambert_pars_fragment:bR,lights_pars_begin:AR,lights_toon_fragment:RR,lights_toon_pars_fragment:PR,lights_phong_fragment:DR,lights_phong_pars_fragment:LR,lights_physical_fragment:NR,lights_physical_pars_fragment:IR,lights_fragment_begin:UR,lights_fragment_maps:FR,lights_fragment_end:OR,logdepthbuf_fragment:kR,logdepthbuf_pars_fragment:zR,logdepthbuf_pars_vertex:BR,logdepthbuf_vertex:HR,map_fragment:VR,map_pars_fragment:GR,map_particle_fragment:WR,map_particle_pars_fragment:jR,metalnessmap_fragment:XR,metalnessmap_pars_fragment:qR,morphinstance_vertex:$R,morphcolor_vertex:YR,morphnormal_vertex:KR,morphtarget_pars_vertex:QR,morphtarget_vertex:ZR,normal_fragment_begin:JR,normal_fragment_maps:eP,normal_pars_fragment:tP,normal_pars_vertex:nP,normal_vertex:iP,normalmap_pars_fragment:rP,clearcoat_normal_fragment_begin:oP,clearcoat_normal_fragment_maps:sP,clearcoat_pars_fragment:aP,iridescence_pars_fragment:lP,opaque_fragment:cP,packing:uP,premultiplied_alpha_fragment:dP,project_vertex:fP,dithering_fragment:pP,dithering_pars_fragment:hP,roughnessmap_fragment:mP,roughnessmap_pars_fragment:gP,shadowmap_pars_fragment:vP,shadowmap_pars_vertex:xP,shadowmap_vertex:_P,shadowmask_pars_fragment:yP,skinbase_vertex:SP,skinning_pars_vertex:EP,skinning_vertex:MP,skinnormal_vertex:wP,specularmap_fragment:TP,specularmap_pars_fragment:bP,tonemapping_fragment:AP,tonemapping_pars_fragment:CP,transmission_fragment:RP,transmission_pars_fragment:PP,uv_pars_fragment:DP,uv_pars_vertex:LP,uv_vertex:NP,worldpos_vertex:IP,background_vert:UP,background_frag:FP,backgroundCube_vert:OP,backgroundCube_frag:kP,cube_vert:zP,cube_frag:BP,depth_vert:HP,depth_frag:VP,distanceRGBA_vert:GP,distanceRGBA_frag:WP,equirect_vert:jP,equirect_frag:XP,linedashed_vert:qP,linedashed_frag:$P,meshbasic_vert:YP,meshbasic_frag:KP,meshlambert_vert:QP,meshlambert_frag:ZP,meshmatcap_vert:JP,meshmatcap_frag:e2,meshnormal_vert:t2,meshnormal_frag:n2,meshphong_vert:i2,meshphong_frag:r2,meshphysical_vert:o2,meshphysical_frag:s2,meshtoon_vert:a2,meshtoon_frag:l2,points_vert:c2,points_frag:u2,shadow_vert:d2,shadow_frag:f2,sprite_vert:p2,sprite_frag:h2},fe={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},xi={basic:{uniforms:nn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:nn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new at(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:nn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:nn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:nn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new at(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:nn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:nn([fe.points,fe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:nn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:nn([fe.common,fe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:nn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:nn([fe.sprite,fe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:nn([fe.common,fe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:nn([fe.lights,fe.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};xi.physical={uniforms:nn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Yl={r:0,b:0,g:0},Xr=new Qi,m2=new Rt;function g2(t,e,n,i,r,o,s){const a=new at(0);let l=o===!0?0:1,c,d,f=null,p=0,m=null;function v(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?n:e).get(y)),y}function _(x){let y=!1;const A=v(x);A===null?u(a,l):A&&A.isColor&&(u(A,1),y=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function h(x,y){const A=v(y);A&&(A.isCubeTexture||A.mapping===xu)?(d===void 0&&(d=new Gn(new il(1,1,1),new Fr({name:"BackgroundCubeMaterial",uniforms:Fs(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(b,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Xr.copy(y.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),d.material.uniforms.envMap.value=A,d.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(m2.makeRotationFromEuler(Xr)),d.material.toneMapped=Je.getTransfer(A.colorSpace)!==ct,(f!==A||p!==A.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,f=A,p=A.version,m=t.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Gn(new yu(2,2),new Fr({name:"BackgroundMaterial",uniforms:Fs(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Je.getTransfer(A.colorSpace)!==ct,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||p!==A.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=A,p=A.version,m=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,y){x.getRGB(Yl,sS(t)),i.buffers.color.setClear(Yl.r,Yl.g,Yl.b,y,s)}function g(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(a,l)},render:_,addToRenderList:h,dispose:g}}function v2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=p(null);let o=r,s=!1;function a(S,P,z,G,B){let K=!1;const Z=f(G,z,P);o!==Z&&(o=Z,c(o.object)),K=m(S,G,z,B),K&&v(S,G,z,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(K||s)&&(s=!1,y(S,P,z,G),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function d(S){return t.deleteVertexArray(S)}function f(S,P,z){const G=z.wireframe===!0;let B=i[S.id];B===void 0&&(B={},i[S.id]=B);let K=B[P.id];K===void 0&&(K={},B[P.id]=K);let Z=K[G];return Z===void 0&&(Z=p(l()),K[G]=Z),Z}function p(S){const P=[],z=[],G=[];for(let B=0;B<n;B++)P[B]=0,z[B]=0,G[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:G,object:S,attributes:{},index:null}}function m(S,P,z,G){const B=o.attributes,K=P.attributes;let Z=0;const ee=z.getAttributes();for(const N in ee)if(ee[N].location>=0){const te=B[N];let oe=K[N];if(oe===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),te===void 0||te.attribute!==oe||oe&&te.data!==oe.data)return!0;Z++}return o.attributesNum!==Z||o.index!==G}function v(S,P,z,G){const B={},K=P.attributes;let Z=0;const ee=z.getAttributes();for(const N in ee)if(ee[N].location>=0){let te=K[N];te===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(te=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(te=S.instanceColor));const oe={};oe.attribute=te,te&&te.data&&(oe.data=te.data),B[N]=oe,Z++}o.attributes=B,o.attributesNum=Z,o.index=G}function _(){const S=o.newAttributes;for(let P=0,z=S.length;P<z;P++)S[P]=0}function h(S){u(S,0)}function u(S,P){const z=o.newAttributes,G=o.enabledAttributes,B=o.attributeDivisors;z[S]=1,G[S]===0&&(t.enableVertexAttribArray(S),G[S]=1),B[S]!==P&&(t.vertexAttribDivisor(S,P),B[S]=P)}function g(){const S=o.newAttributes,P=o.enabledAttributes;for(let z=0,G=P.length;z<G;z++)P[z]!==S[z]&&(t.disableVertexAttribArray(z),P[z]=0)}function x(S,P,z,G,B,K,Z){Z===!0?t.vertexAttribIPointer(S,P,z,B,K):t.vertexAttribPointer(S,P,z,G,B,K)}function y(S,P,z,G){_();const B=G.attributes,K=z.getAttributes(),Z=P.defaultAttributeValues;for(const ee in K){const N=K[ee];if(N.location>=0){let q=B[ee];if(q===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),q!==void 0){const te=q.normalized,oe=q.itemSize,Se=e.get(q);if(Se===void 0)continue;const Be=Se.buffer,Q=Se.type,ae=Se.bytesPerElement,ue=Q===t.INT||Q===t.UNSIGNED_INT||q.gpuType===Fh;if(q.isInterleavedBufferAttribute){const ce=q.data,Ae=ce.stride,Ye=q.offset;if(ce.isInstancedInterleavedBuffer){for(let Ce=0;Ce<N.locationSize;Ce++)u(N.location+Ce,ce.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ce=0;Ce<N.locationSize;Ce++)h(N.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let Ce=0;Ce<N.locationSize;Ce++)x(N.location+Ce,oe/N.locationSize,Q,te,Ae*ae,(Ye+oe/N.locationSize*Ce)*ae,ue)}else{if(q.isInstancedBufferAttribute){for(let ce=0;ce<N.locationSize;ce++)u(N.location+ce,q.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ce=0;ce<N.locationSize;ce++)h(N.location+ce);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let ce=0;ce<N.locationSize;ce++)x(N.location+ce,oe/N.locationSize,Q,te,oe*ae,oe/N.locationSize*ce*ae,ue)}}else if(Z!==void 0){const te=Z[ee];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(N.location,te);break;case 3:t.vertexAttrib3fv(N.location,te);break;case 4:t.vertexAttrib4fv(N.location,te);break;default:t.vertexAttrib1fv(N.location,te)}}}}g()}function A(){C();for(const S in i){const P=i[S];for(const z in P){const G=P[z];for(const B in G)d(G[B].object),delete G[B];delete P[z]}delete i[S]}}function b(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const z in P){const G=P[z];for(const B in G)d(G[B].object),delete G[B];delete P[z]}delete i[S.id]}function T(S){for(const P in i){const z=i[P];if(z[S.id]===void 0)continue;const G=z[S.id];for(const B in G)d(G[B].object),delete G[B];delete z[S.id]}}function C(){M(),s=!0,o!==r&&(o=r,c(o.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:h,disableUnusedAttributes:g}}function x2(t,e,n){let i;function r(c){i=c}function o(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function s(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let m=0;for(let v=0;v<f;v++)m+=d[v];n.update(m,i,1)}function l(c,d,f,p){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)s(c[v],d[v],p[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,p,0,f);let v=0;for(let _=0;_<f;_++)v+=d[_]*p[_];n.update(v,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _2(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(T){return!(T!==si&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===Za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ki&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Bi&&!C)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,p=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),h=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=v>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:h,maxAttributes:u,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:A,maxSamples:b}}function y2(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Qr,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||i!==0||r;return r=p,i=f.length,m},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,p){n=d(f,p,0)},this.setState=function(f,p,m){const v=f.clippingPlanes,_=f.clipIntersection,h=f.clipShadows,u=t.get(f);if(!r||v===null||v.length===0||o&&!h)o?d(null):c();else{const g=o?0:i,x=g*4;let y=u.clippingState||null;l.value=y,y=d(v,p,x,m);for(let A=0;A!==x;++A)y[A]=n[A];u.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,p,m,v){const _=f!==null?f.length:0;let h=null;if(_!==0){if(h=l.value,v!==!0||h===null){const u=m+_*4,g=p.matrixWorldInverse;a.getNormalMatrix(g),(h===null||h.length<u)&&(h=new Float32Array(u));for(let x=0,y=m;x!==_;++x,y+=4)s.copy(f[x]).applyMatrix4(g,a),s.normal.toArray(h,y),h[y+3]=s.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,h}}function S2(t){let e=new WeakMap;function n(s,a){return a===Kf?s.mapping=Ds:a===Qf&&(s.mapping=Ls),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Kf||a===Qf)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new wC(l.height);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}const es=4,xv=[.125,.215,.35,.446,.526,.582],to=20,Rd=new LC,_v=new at;let Pd=null,Dd=0,Ld=0,Nd=!1;const Zr=(1+Math.sqrt(5))/2,Ho=1/Zr,yv=[new H(-Zr,Ho,0),new H(Zr,Ho,0),new H(-Ho,0,Zr),new H(Ho,0,Zr),new H(0,Zr,-Ho),new H(0,Zr,Ho),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],E2=new H;class Sv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,o={}){const{size:s=256,position:a=E2}=o;Pd=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pd,Dd,Ld),this._renderer.xr.enabled=Nd,e.scissorTest=!1,Kl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ds||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pd=this._renderer.getRenderTarget(),Dd=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Za,format:si,colorSpace:Us,depthBuffer:!1},r=Ev(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ev(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=M2(o)),this._blurMaterial=w2(o,e,n)}return r}_compileMaterial(e){const n=new Gn(this._lodPlanes[0],e);this._renderer.compile(n,Rd)}_sceneToCubeUV(e,n,i,r,o){const l=new Hn(90,1,n,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,p=f.autoClear,m=f.toneMapping;f.getClearColor(_v),f.toneMapping=Lr,f.autoClear=!1;const v=new Sa({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1}),_=new Gn(new il,v);let h=!1;const u=e.background;u?u.isColor&&(v.color.copy(u),e.background=null,h=!0):(v.color.copy(_v),h=!0);for(let g=0;g<6;g++){const x=g%3;x===0?(l.up.set(0,c[g],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+d[g],o.y,o.z)):x===1?(l.up.set(0,0,c[g]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+d[g],o.z)):(l.up.set(0,c[g],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+d[g]));const y=this._cubeSize;Kl(r,x*y,g>2?y:0,y,y),f.setRenderTarget(r),h&&f.render(_,l),f.render(e,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=m,f.autoClear=p,e.background=u}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ds||e.mapping===Ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mv());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new Gn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Kl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Rd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=yv[(r-o-1)%yv.length];this._blur(e,o-1,o,s,a)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Gn(this._lodPlanes[r],c),p=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*to-1),_=o/v,h=isFinite(o)?1+Math.floor(d*_):to;h>to&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${to}`);const u=[];let g=0;for(let T=0;T<to;++T){const C=T/_,M=Math.exp(-C*C/2);u.push(M),T===0?g+=M:T<h&&(g+=2*M)}for(let T=0;T<u.length;T++)u[T]=u[T]/g;p.envMap.value=e.texture,p.samples.value=h,p.weights.value=u,p.latitudinal.value=s==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:x}=this;p.dTheta.value=v,p.mipInt.value=x-i;const y=this._sizeLods[r],A=3*y*(r>x-es?r-x+es:0),b=4*(this._cubeSize-y);Kl(n,A,b,3*y,2*y),l.setRenderTarget(n),l.render(f,Rd)}}function M2(t){const e=[],n=[],i=[];let r=t;const o=t-es+1+xv.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-es?l=xv[s-t+es-1]:s===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,f=1+c,p=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,v=6,_=3,h=2,u=1,g=new Float32Array(_*v*m),x=new Float32Array(h*v*m),y=new Float32Array(u*v*m);for(let b=0;b<m;b++){const T=b%3*2/3-1,C=b>2?0:-1,M=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];g.set(M,_*v*b),x.set(p,h*v*b);const S=[b,b,b,b,b,b];y.set(S,u*v*b)}const A=new qn;A.setAttribute("position",new ui(g,_)),A.setAttribute("uv",new ui(x,h)),A.setAttribute("faceIndex",new ui(y,u)),e.push(A),r>es&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Ev(t,e,n){const i=new Eo(t,e,n);return i.texture.mapping=xu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Kl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function w2(t,e,n){const i=new Float32Array(to),r=new H(0,1,0);return new Fr({name:"SphericalGaussianBlur",defines:{n:to,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function Mv(){return new Fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function wv(){return new Fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function qh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function T2(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Kf||l===Qf,d=l===Ds||l===Ls;if(c||d){let f=e.get(a);const p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return n===null&&(n=new Sv(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const m=a.image;return c&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new Sv(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",o),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function b2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Kr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function A2(t,e,n,i){const r={},o=new WeakMap;function s(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const v in p.attributes)e.remove(p.attributes[v]);p.removeEventListener("dispose",s),delete r[p.id];const m=o.get(p);m&&(e.remove(m),o.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function a(f,p){return r[p.id]===!0||(p.addEventListener("dispose",s),r[p.id]=!0,n.memory.geometries++),p}function l(f){const p=f.attributes;for(const m in p)e.update(p[m],t.ARRAY_BUFFER)}function c(f){const p=[],m=f.index,v=f.attributes.position;let _=0;if(m!==null){const g=m.array;_=m.version;for(let x=0,y=g.length;x<y;x+=3){const A=g[x+0],b=g[x+1],T=g[x+2];p.push(A,b,b,T,T,A)}}else if(v!==void 0){const g=v.array;_=v.version;for(let x=0,y=g.length/3-1;x<y;x+=3){const A=x+0,b=x+1,T=x+2;p.push(A,b,b,T,T,A)}}else return;const h=new(Jy(p)?oS:rS)(p,1);h.version=_;const u=o.get(f);u&&e.remove(u),o.set(f,h)}function d(f){const p=o.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function C2(t,e,n){let i;function r(p){i=p}let o,s;function a(p){o=p.type,s=p.bytesPerElement}function l(p,m){t.drawElements(i,m,o,p*s),n.update(m,i,1)}function c(p,m,v){v!==0&&(t.drawElementsInstanced(i,m,o,p*s,v),n.update(m,i,v))}function d(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,p,0,v);let h=0;for(let u=0;u<v;u++)h+=m[u];n.update(h,i,1)}function f(p,m,v,_){if(v===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let u=0;u<p.length;u++)c(p[u]/s,m[u],_[u]);else{h.multiDrawElementsInstancedWEBGL(i,m,0,o,p,0,_,0,v);let u=0;for(let g=0;g<v;g++)u+=m[g]*_[g];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function R2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function P2(t,e,n){const i=new WeakMap,r=new Ct;function o(s,a,l){const c=s.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let p=i.get(a);if(p===void 0||p.count!==f){let S=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var m=S;p!==void 0&&p.texture.dispose();const v=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,h=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;v===!0&&(y=1),_===!0&&(y=2),h===!0&&(y=3);let A=a.attributes.position.count*y,b=1;A>e.maxTextureSize&&(b=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const T=new Float32Array(A*b*4*f),C=new eS(T,A,b,f);C.type=Bi,C.needsUpdate=!0;const M=y*4;for(let P=0;P<f;P++){const z=u[P],G=g[P],B=x[P],K=A*b*4*P;for(let Z=0;Z<z.count;Z++){const ee=Z*M;v===!0&&(r.fromBufferAttribute(z,Z),T[K+ee+0]=r.x,T[K+ee+1]=r.y,T[K+ee+2]=r.z,T[K+ee+3]=0),_===!0&&(r.fromBufferAttribute(G,Z),T[K+ee+4]=r.x,T[K+ee+5]=r.y,T[K+ee+6]=r.z,T[K+ee+7]=0),h===!0&&(r.fromBufferAttribute(B,Z),T[K+ee+8]=r.x,T[K+ee+9]=r.y,T[K+ee+10]=r.z,T[K+ee+11]=B.itemSize===4?r.w:1)}}p={count:f,texture:C,size:new ot(A,b)},i.set(a,p),a.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let v=0;for(let h=0;h<c.length;h++)v+=c[h];const _=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:o}}function D2(t,e,n,i){let r=new WeakMap;function o(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:s}}const pS=new xn,Tv=new dS(1,1),hS=new eS,mS=new aC,gS=new lS,bv=[],Av=[],Cv=new Float32Array(16),Rv=new Float32Array(9),Pv=new Float32Array(4);function Vs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=bv[r];if(o===void 0&&(o=new Float32Array(r),bv[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Su(t,e){let n=Av[e];n===void 0&&(n=new Int32Array(e),Av[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function L2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function N2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function I2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function U2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function F2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;Pv.set(i),t.uniformMatrix2fv(this.addr,!1,Pv),Ft(n,i)}}function O2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;Rv.set(i),t.uniformMatrix3fv(this.addr,!1,Rv),Ft(n,i)}}function k2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;Cv.set(i),t.uniformMatrix4fv(this.addr,!1,Cv),Ft(n,i)}}function z2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function B2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function H2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function V2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function G2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function W2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function j2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function X2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function q2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(Tv.compareFunction=Zy,o=Tv):o=pS,n.setTexture2D(e||o,r)}function $2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||mS,r)}function Y2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||gS,r)}function K2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||hS,r)}function Q2(t){switch(t){case 5126:return L2;case 35664:return N2;case 35665:return I2;case 35666:return U2;case 35674:return F2;case 35675:return O2;case 35676:return k2;case 5124:case 35670:return z2;case 35667:case 35671:return B2;case 35668:case 35672:return H2;case 35669:case 35673:return V2;case 5125:return G2;case 36294:return W2;case 36295:return j2;case 36296:return X2;case 35678:case 36198:case 36298:case 36306:case 35682:return q2;case 35679:case 36299:case 36307:return $2;case 35680:case 36300:case 36308:case 36293:return Y2;case 36289:case 36303:case 36311:case 36292:return K2}}function Z2(t,e){t.uniform1fv(this.addr,e)}function J2(t,e){const n=Vs(e,this.size,2);t.uniform2fv(this.addr,n)}function eD(t,e){const n=Vs(e,this.size,3);t.uniform3fv(this.addr,n)}function tD(t,e){const n=Vs(e,this.size,4);t.uniform4fv(this.addr,n)}function nD(t,e){const n=Vs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function iD(t,e){const n=Vs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function rD(t,e){const n=Vs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function oD(t,e){t.uniform1iv(this.addr,e)}function sD(t,e){t.uniform2iv(this.addr,e)}function aD(t,e){t.uniform3iv(this.addr,e)}function lD(t,e){t.uniform4iv(this.addr,e)}function cD(t,e){t.uniform1uiv(this.addr,e)}function uD(t,e){t.uniform2uiv(this.addr,e)}function dD(t,e){t.uniform3uiv(this.addr,e)}function fD(t,e){t.uniform4uiv(this.addr,e)}function pD(t,e,n){const i=this.cache,r=e.length,o=Su(n,r);Ut(i,o)||(t.uniform1iv(this.addr,o),Ft(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||pS,o[s])}function hD(t,e,n){const i=this.cache,r=e.length,o=Su(n,r);Ut(i,o)||(t.uniform1iv(this.addr,o),Ft(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||mS,o[s])}function mD(t,e,n){const i=this.cache,r=e.length,o=Su(n,r);Ut(i,o)||(t.uniform1iv(this.addr,o),Ft(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||gS,o[s])}function gD(t,e,n){const i=this.cache,r=e.length,o=Su(n,r);Ut(i,o)||(t.uniform1iv(this.addr,o),Ft(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||hS,o[s])}function vD(t){switch(t){case 5126:return Z2;case 35664:return J2;case 35665:return eD;case 35666:return tD;case 35674:return nD;case 35675:return iD;case 35676:return rD;case 5124:case 35670:return oD;case 35667:case 35671:return sD;case 35668:case 35672:return aD;case 35669:case 35673:return lD;case 5125:return cD;case 36294:return uD;case 36295:return dD;case 36296:return fD;case 35678:case 36198:case 36298:case 36306:case 35682:return pD;case 35679:case 36299:case 36307:return hD;case 35680:case 36300:case 36308:case 36293:return mD;case 36289:case 36303:case 36311:case 36292:return gD}}class xD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Q2(n.type)}}class _D{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=vD(n.type)}}class yD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Id=/(\w+)(\])?(\[|\.)?/g;function Dv(t,e){t.seq.push(e),t.map[e.id]=e}function SD(t,e,n){const i=t.name,r=i.length;for(Id.lastIndex=0;;){const o=Id.exec(i),s=Id.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Dv(n,c===void 0?new xD(a,t,e):new _D(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new yD(a),Dv(n,f)),n=f}}}class xc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);SD(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Lv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ED=37297;let MD=0;function wD(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}const Nv=new ze;function TD(t){Je._getMatrix(Nv,Je.workingColorSpace,t);const e=`mat3( ${Nv.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case $c:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Iv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+wD(t.getShaderSource(e),s)}else return r}function bD(t,e){const n=TD(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function AD(t,e){let n;switch(e){case LA:n="Linear";break;case NA:n="Reinhard";break;case IA:n="Cineon";break;case UA:n="ACESFilmic";break;case OA:n="AgX";break;case kA:n="Neutral";break;case FA:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ql=new H;function CD(){Je.getLuminanceCoefficients(Ql);const t=Ql.x.toFixed(4),e=Ql.y.toFixed(4),n=Ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RD(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function PD(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function DD(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function ua(t){return t!==""}function Uv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cp(t){return t.replace(LD,ID)}const ND=new Map;function ID(t,e){let n=Ve[e];if(n===void 0){const i=ND.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cp(n)}const UD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ov(t){return t.replace(UD,FD)}function FD(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function kv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function OD(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===zy?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===dA?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function kD(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ds:case Ls:e="ENVMAP_TYPE_CUBE";break;case xu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zD(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ls:e="ENVMAP_MODE_REFRACTION";break}return e}function BD(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case By:e="ENVMAP_BLENDING_MULTIPLY";break;case PA:e="ENVMAP_BLENDING_MIX";break;case DA:e="ENVMAP_BLENDING_ADD";break}return e}function HD(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function VD(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=OD(n),c=kD(n),d=zD(n),f=BD(n),p=HD(n),m=RD(n),v=PD(o),_=r.createProgram();let h,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ua).join(`
`),h.length>0&&(h+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ua).join(`
`),u.length>0&&(u+=`
`)):(h=[kv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),u=[kv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Lr?"#define TONE_MAPPING":"",n.toneMapping!==Lr?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Lr?AD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,bD("linearToOutputTexel",n.outputColorSpace),CD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ua).join(`
`)),s=Cp(s),s=Uv(s,n),s=Fv(s,n),a=Cp(a),a=Uv(a,n),a=Fv(a,n),s=Ov(s),a=Ov(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,h=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,u=["#define varying in",n.glslVersion===Qg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Qg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=g+h+s,y=g+u+a,A=Lv(r,r.VERTEX_SHADER,x),b=Lv(r,r.FRAGMENT_SHADER,y);r.attachShader(_,A),r.attachShader(_,b),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(P){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(_).trim(),G=r.getShaderInfoLog(A).trim(),B=r.getShaderInfoLog(b).trim();let K=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,A,b);else{const ee=Iv(r,A,"vertex"),N=Iv(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+ee+`
`+N)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(G===""||B==="")&&(Z=!1);Z&&(P.diagnostics={runnable:K,programLog:z,vertexShader:{log:G,prefix:h},fragmentShader:{log:B,prefix:u}})}r.deleteShader(A),r.deleteShader(b),C=new xc(r,_),M=DD(r,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,ED)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=MD++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=b,this}let GD=0;class WD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new jD(e),n.set(e,i)),i}}class jD{constructor(e){this.id=GD++,this.code=e,this.usedTimes=0}}function XD(t,e,n,i,r,o,s){const a=new nS,l=new WD,c=new Set,d=[],f=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function h(M,S,P,z,G){const B=z.fog,K=G.geometry,Z=M.isMeshStandardMaterial?z.environment:null,ee=(M.isMeshStandardMaterial?n:e).get(M.envMap||Z),N=ee&&ee.mapping===xu?ee.image.height:null,q=v[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const te=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,oe=te!==void 0?te.length:0;let Se=0;K.morphAttributes.position!==void 0&&(Se=1),K.morphAttributes.normal!==void 0&&(Se=2),K.morphAttributes.color!==void 0&&(Se=3);let Be,Q,ae,ue;if(q){const st=xi[q];Be=st.vertexShader,Q=st.fragmentShader}else Be=M.vertexShader,Q=M.fragmentShader,l.update(M),ae=l.getVertexShaderID(M),ue=l.getFragmentShaderID(M);const ce=t.getRenderTarget(),Ae=t.state.buffers.depth.getReversed(),Ye=G.isInstancedMesh===!0,Ce=G.isBatchedMesh===!0,dt=!!M.map,et=!!M.matcap,We=!!ee,L=!!M.aoMap,en=!!M.lightMap,je=!!M.bumpMap,Fe=!!M.normalMap,Te=!!M.displacementMap,tt=!!M.emissiveMap,we=!!M.metalnessMap,R=!!M.roughnessMap,E=M.anisotropy>0,V=M.clearcoat>0,F=M.dispersion>0,W=M.iridescence>0,$=M.sheen>0,de=M.transmission>0,le=E&&!!M.anisotropyMap,me=V&&!!M.clearcoatMap,He=V&&!!M.clearcoatNormalMap,se=V&&!!M.clearcoatRoughnessMap,xe=W&&!!M.iridescenceMap,Re=W&&!!M.iridescenceThicknessMap,De=$&&!!M.sheenColorMap,_e=$&&!!M.sheenRoughnessMap,Ge=!!M.specularMap,Ie=!!M.specularColorMap,nt=!!M.specularIntensityMap,U=de&&!!M.transmissionMap,pe=de&&!!M.thicknessMap,J=!!M.gradientMap,ne=!!M.alphaMap,ve=M.alphaTest>0,ge=!!M.alphaHash,Oe=!!M.extensions;let Et=Lr;M.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Et=t.toneMapping);const jt={shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:Be,fragmentShader:Q,defines:M.defines,customVertexShaderID:ae,customFragmentShaderID:ue,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ce,batchingColor:Ce&&G._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&G.instanceColor!==null,instancingMorph:Ye&&G.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ce===null?t.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Us,alphaToCoverage:!!M.alphaToCoverage,map:dt,matcap:et,envMap:We,envMapMode:We&&ee.mapping,envMapCubeUVHeight:N,aoMap:L,lightMap:en,bumpMap:je,normalMap:Fe,displacementMap:p&&Te,emissiveMap:tt,normalMapObjectSpace:Fe&&M.normalMapType===GA,normalMapTangentSpace:Fe&&M.normalMapType===VA,metalnessMap:we,roughnessMap:R,anisotropy:E,anisotropyMap:le,clearcoat:V,clearcoatMap:me,clearcoatNormalMap:He,clearcoatRoughnessMap:se,dispersion:F,iridescence:W,iridescenceMap:xe,iridescenceThicknessMap:Re,sheen:$,sheenColorMap:De,sheenRoughnessMap:_e,specularMap:Ge,specularColorMap:Ie,specularIntensityMap:nt,transmission:de,transmissionMap:U,thicknessMap:pe,gradientMap:J,opaque:M.transparent===!1&&M.blending===ls&&M.alphaToCoverage===!1,alphaMap:ne,alphaTest:ve,alphaHash:ge,combine:M.combine,mapUv:dt&&_(M.map.channel),aoMapUv:L&&_(M.aoMap.channel),lightMapUv:en&&_(M.lightMap.channel),bumpMapUv:je&&_(M.bumpMap.channel),normalMapUv:Fe&&_(M.normalMap.channel),displacementMapUv:Te&&_(M.displacementMap.channel),emissiveMapUv:tt&&_(M.emissiveMap.channel),metalnessMapUv:we&&_(M.metalnessMap.channel),roughnessMapUv:R&&_(M.roughnessMap.channel),anisotropyMapUv:le&&_(M.anisotropyMap.channel),clearcoatMapUv:me&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:He&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:De&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(M.sheenRoughnessMap.channel),specularMapUv:Ge&&_(M.specularMap.channel),specularColorMapUv:Ie&&_(M.specularColorMap.channel),specularIntensityMapUv:nt&&_(M.specularIntensityMap.channel),transmissionMapUv:U&&_(M.transmissionMap.channel),thicknessMapUv:pe&&_(M.thicknessMap.channel),alphaMapUv:ne&&_(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Fe||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!K.attributes.uv&&(dt||ne),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ae,skinning:G.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Et,decodeVideoTexture:dt&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:tt&&M.emissiveMap.isVideoTexture===!0&&Je.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Oi,flipSided:M.side===vn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Oe&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&M.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function u(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)S.push(P),S.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(g(S,M),x(S,M),S.push(t.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function g(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const S=v[M.type];let P;if(S){const z=xi[S];P=yC.clone(z.uniforms)}else P=M.uniforms;return P}function A(M,S){let P;for(let z=0,G=d.length;z<G;z++){const B=d[z];if(B.cacheKey===S){P=B,++P.usedTimes;break}}return P===void 0&&(P=new VD(t,S,M,o),d.push(P)),P}function b(M){if(--M.usedTimes===0){const S=d.indexOf(M);d[S]=d[d.length-1],d.pop(),M.destroy()}}function T(M){l.remove(M)}function C(){l.dispose()}return{getParameters:h,getProgramCacheKey:u,getUniforms:y,acquireProgram:A,releaseProgram:b,releaseShaderCache:T,programs:d,dispose:C}}function qD(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function i(s){t.delete(s)}function r(s,a,l){t.get(s)[a]=l}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function $D(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function zv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Bv(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(f,p,m,v,_,h){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:p,material:m,groupOrder:v,renderOrder:f.renderOrder,z:_,group:h},t[e]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=m,u.groupOrder=v,u.renderOrder=f.renderOrder,u.z=_,u.group=h),e++,u}function a(f,p,m,v,_,h){const u=s(f,p,m,v,_,h);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(f,p,m,v,_,h){const u=s(f,p,m,v,_,h);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,p){n.length>1&&n.sort(f||$D),i.length>1&&i.sort(p||zv),r.length>1&&r.sort(p||zv)}function d(){for(let f=e,p=t.length;f<p;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:d,sort:c}}function YD(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Bv,t.set(i,[s])):r>=o.length?(s=new Bv,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function KD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new at};break;case"SpotLight":n={position:new H,direction:new H,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new at,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new at,groundColor:new at};break;case"RectAreaLight":n={color:new at,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function QD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ZD=0;function JD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function eL(t){const e=new KD,n=QD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,o=new Rt,s=new Rt;function a(c){let d=0,f=0,p=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let m=0,v=0,_=0,h=0,u=0,g=0,x=0,y=0,A=0,b=0,T=0;c.sort(JD);for(let M=0,S=c.length;M<S;M++){const P=c[M],z=P.color,G=P.intensity,B=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=z.r*G,f+=z.g*G,p+=z.b*G;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(P.sh.coefficients[Z],G);T++}else if(P.isDirectionalLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ee=P.shadow,N=n.get(P);N.shadowIntensity=ee.intensity,N.shadowBias=ee.bias,N.shadowNormalBias=ee.normalBias,N.shadowRadius=ee.radius,N.shadowMapSize=ee.mapSize,i.directionalShadow[m]=N,i.directionalShadowMap[m]=K,i.directionalShadowMatrix[m]=P.shadow.matrix,g++}i.directional[m]=Z,m++}else if(P.isSpotLight){const Z=e.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(z).multiplyScalar(G),Z.distance=B,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,i.spot[_]=Z;const ee=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,ee.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[_]=ee.matrix,P.castShadow){const N=n.get(P);N.shadowIntensity=ee.intensity,N.shadowBias=ee.bias,N.shadowNormalBias=ee.normalBias,N.shadowRadius=ee.radius,N.shadowMapSize=ee.mapSize,i.spotShadow[_]=N,i.spotShadowMap[_]=K,y++}_++}else if(P.isRectAreaLight){const Z=e.get(P);Z.color.copy(z).multiplyScalar(G),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),i.rectArea[h]=Z,h++}else if(P.isPointLight){const Z=e.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const ee=P.shadow,N=n.get(P);N.shadowIntensity=ee.intensity,N.shadowBias=ee.bias,N.shadowNormalBias=ee.normalBias,N.shadowRadius=ee.radius,N.shadowMapSize=ee.mapSize,N.shadowCameraNear=ee.camera.near,N.shadowCameraFar=ee.camera.far,i.pointShadow[v]=N,i.pointShadowMap[v]=K,i.pointShadowMatrix[v]=P.shadow.matrix,x++}i.point[v]=Z,v++}else if(P.isHemisphereLight){const Z=e.get(P);Z.skyColor.copy(P.color).multiplyScalar(G),Z.groundColor.copy(P.groundColor).multiplyScalar(G),i.hemi[u]=Z,u++}}h>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const C=i.hash;(C.directionalLength!==m||C.pointLength!==v||C.spotLength!==_||C.rectAreaLength!==h||C.hemiLength!==u||C.numDirectionalShadows!==g||C.numPointShadows!==x||C.numSpotShadows!==y||C.numSpotMaps!==A||C.numLightProbes!==T)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=h,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+A-b,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=T,C.directionalLength=m,C.pointLength=v,C.spotLength=_,C.rectAreaLength=h,C.hemiLength=u,C.numDirectionalShadows=g,C.numPointShadows=x,C.numSpotShadows=y,C.numSpotMaps=A,C.numLightProbes=T,i.version=ZD++)}function l(c,d){let f=0,p=0,m=0,v=0,_=0;const h=d.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const x=c[u];if(x.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(h),f++}else if(x.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(h),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(h),m++}else if(x.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(h),s.identity(),o.copy(x.matrixWorld),o.premultiply(h),s.extractRotation(o),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),v++}else if(x.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(h),p++}else if(x.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(h),_++}}}return{setup:a,setupView:l,state:i}}function Hv(t){const e=new eL(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function o(d){n.push(d)}function s(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function tL(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Hv(t),e.set(r,[a])):o>=s.length?(a=new Hv(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const nL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rL(t,e,n){let i=new cS;const r=new ot,o=new ot,s=new Ct,a=new PC({depthPacking:HA}),l=new DC,c={},d=n.maxTextureSize,f={[Ur]:vn,[vn]:Ur,[Oi]:Oi},p=new Fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:nL,fragmentShader:iL}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const v=new qn;v.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Gn(v,p),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zy;let u=this.type;this.render=function(b,T,C){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||b.length===0)return;const M=t.getRenderTarget(),S=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Dr),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const G=u!==Li&&this.type===Li,B=u===Li&&this.type!==Li;for(let K=0,Z=b.length;K<Z;K++){const ee=b[K],N=ee.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const q=N.getFrameExtents();if(r.multiply(q),o.copy(N.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/q.x),r.x=o.x*q.x,N.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/q.y),r.y=o.y*q.y,N.mapSize.y=o.y)),N.map===null||G===!0||B===!0){const oe=this.type!==Li?{minFilter:ci,magFilter:ci}:{};N.map!==null&&N.map.dispose(),N.map=new Eo(r.x,r.y,oe),N.map.texture.name=ee.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const te=N.getViewportCount();for(let oe=0;oe<te;oe++){const Se=N.getViewport(oe);s.set(o.x*Se.x,o.y*Se.y,o.x*Se.z,o.y*Se.w),z.viewport(s),N.updateMatrices(ee,oe),i=N.getFrustum(),y(T,C,N.camera,ee,this.type)}N.isPointLightShadow!==!0&&this.type===Li&&g(N,C),N.needsUpdate=!1}u=this.type,h.needsUpdate=!1,t.setRenderTarget(M,S,P)};function g(b,T){const C=e.update(_);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Eo(r.x,r.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(T,null,C,p,_,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(T,null,C,m,_,null)}function x(b,T,C,M){let S=null;const P=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)S=P;else if(S=C.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=S.uuid,G=T.uuid;let B=c[z];B===void 0&&(B={},c[z]=B);let K=B[G];K===void 0&&(K=S.clone(),B[G]=K,T.addEventListener("dispose",A)),S=K}if(S.visible=T.visible,S.wireframe=T.wireframe,M===Li?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:f[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=t.properties.get(S);z.light=C}return S}function y(b,T,C,M,S){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===Li)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const G=e.update(b),B=b.material;if(Array.isArray(B)){const K=G.groups;for(let Z=0,ee=K.length;Z<ee;Z++){const N=K[Z],q=B[N.materialIndex];if(q&&q.visible){const te=x(b,q,M,S);b.onBeforeShadow(t,b,T,C,G,te,N),t.renderBufferDirect(C,null,G,te,b,N),b.onAfterShadow(t,b,T,C,G,te,N)}}}else if(B.visible){const K=x(b,B,M,S);b.onBeforeShadow(t,b,T,C,G,K,null),t.renderBufferDirect(C,null,G,K,b,null),b.onAfterShadow(t,b,T,C,G,K,null)}}const z=b.children;for(let G=0,B=z.length;G<B;G++)y(z[G],T,C,M,S)}function A(b){b.target.removeEventListener("dispose",A);for(const C in c){const M=c[C],S=b.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const oL={[Gf]:Wf,[jf]:$f,[Xf]:Yf,[Ps]:qf,[Wf]:Gf,[$f]:jf,[Yf]:Xf,[qf]:Ps};function sL(t,e){function n(){let U=!1;const pe=new Ct;let J=null;const ne=new Ct(0,0,0,0);return{setMask:function(ve){J!==ve&&!U&&(t.colorMask(ve,ve,ve,ve),J=ve)},setLocked:function(ve){U=ve},setClear:function(ve,ge,Oe,Et,jt){jt===!0&&(ve*=Et,ge*=Et,Oe*=Et),pe.set(ve,ge,Oe,Et),ne.equals(pe)===!1&&(t.clearColor(ve,ge,Oe,Et),ne.copy(pe))},reset:function(){U=!1,J=null,ne.set(-1,0,0,0)}}}function i(){let U=!1,pe=!1,J=null,ne=null,ve=null;return{setReversed:function(ge){if(pe!==ge){const Oe=e.get("EXT_clip_control");pe?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const Et=ve;ve=null,this.setClear(Et)}pe=ge},getReversed:function(){return pe},setTest:function(ge){ge?ce(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(ge){J!==ge&&!U&&(t.depthMask(ge),J=ge)},setFunc:function(ge){if(pe&&(ge=oL[ge]),ne!==ge){switch(ge){case Gf:t.depthFunc(t.NEVER);break;case Wf:t.depthFunc(t.ALWAYS);break;case jf:t.depthFunc(t.LESS);break;case Ps:t.depthFunc(t.LEQUAL);break;case Xf:t.depthFunc(t.EQUAL);break;case qf:t.depthFunc(t.GEQUAL);break;case $f:t.depthFunc(t.GREATER);break;case Yf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ne=ge}},setLocked:function(ge){U=ge},setClear:function(ge){ve!==ge&&(pe&&(ge=1-ge),t.clearDepth(ge),ve=ge)},reset:function(){U=!1,J=null,ne=null,ve=null,pe=!1}}}function r(){let U=!1,pe=null,J=null,ne=null,ve=null,ge=null,Oe=null,Et=null,jt=null;return{setTest:function(st){U||(st?ce(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(st){pe!==st&&!U&&(t.stencilMask(st),pe=st)},setFunc:function(st,$n,wi){(J!==st||ne!==$n||ve!==wi)&&(t.stencilFunc(st,$n,wi),J=st,ne=$n,ve=wi)},setOp:function(st,$n,wi){(ge!==st||Oe!==$n||Et!==wi)&&(t.stencilOp(st,$n,wi),ge=st,Oe=$n,Et=wi)},setLocked:function(st){U=st},setClear:function(st){jt!==st&&(t.clearStencil(st),jt=st)},reset:function(){U=!1,pe=null,J=null,ne=null,ve=null,ge=null,Oe=null,Et=null,jt=null}}}const o=new n,s=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},f={},p=new WeakMap,m=[],v=null,_=!1,h=null,u=null,g=null,x=null,y=null,A=null,b=null,T=new at(0,0,0),C=0,M=!1,S=null,P=null,z=null,G=null,B=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,ee=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(N)[1]),Z=ee>=1):N.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),Z=ee>=2);let q=null,te={};const oe=t.getParameter(t.SCISSOR_BOX),Se=t.getParameter(t.VIEWPORT),Be=new Ct().fromArray(oe),Q=new Ct().fromArray(Se);function ae(U,pe,J,ne){const ve=new Uint8Array(4),ge=t.createTexture();t.bindTexture(U,ge),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Oe=0;Oe<J;Oe++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(pe+Oe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return ge}const ue={};ue[t.TEXTURE_2D]=ae(t.TEXTURE_2D,t.TEXTURE_2D,1),ue[t.TEXTURE_CUBE_MAP]=ae(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[t.TEXTURE_2D_ARRAY]=ae(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ue[t.TEXTURE_3D]=ae(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ce(t.DEPTH_TEST),s.setFunc(Ps),je(!1),Fe(jg),ce(t.CULL_FACE),L(Dr);function ce(U){d[U]!==!0&&(t.enable(U),d[U]=!0)}function Ae(U){d[U]!==!1&&(t.disable(U),d[U]=!1)}function Ye(U,pe){return f[U]!==pe?(t.bindFramebuffer(U,pe),f[U]=pe,U===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=pe),U===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function Ce(U,pe){let J=m,ne=!1;if(U){J=p.get(pe),J===void 0&&(J=[],p.set(pe,J));const ve=U.textures;if(J.length!==ve.length||J[0]!==t.COLOR_ATTACHMENT0){for(let ge=0,Oe=ve.length;ge<Oe;ge++)J[ge]=t.COLOR_ATTACHMENT0+ge;J.length=ve.length,ne=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,ne=!0);ne&&t.drawBuffers(J)}function dt(U){return v!==U?(t.useProgram(U),v=U,!0):!1}const et={[eo]:t.FUNC_ADD,[pA]:t.FUNC_SUBTRACT,[hA]:t.FUNC_REVERSE_SUBTRACT};et[mA]=t.MIN,et[gA]=t.MAX;const We={[vA]:t.ZERO,[xA]:t.ONE,[_A]:t.SRC_COLOR,[Hf]:t.SRC_ALPHA,[TA]:t.SRC_ALPHA_SATURATE,[MA]:t.DST_COLOR,[SA]:t.DST_ALPHA,[yA]:t.ONE_MINUS_SRC_COLOR,[Vf]:t.ONE_MINUS_SRC_ALPHA,[wA]:t.ONE_MINUS_DST_COLOR,[EA]:t.ONE_MINUS_DST_ALPHA,[bA]:t.CONSTANT_COLOR,[AA]:t.ONE_MINUS_CONSTANT_COLOR,[CA]:t.CONSTANT_ALPHA,[RA]:t.ONE_MINUS_CONSTANT_ALPHA};function L(U,pe,J,ne,ve,ge,Oe,Et,jt,st){if(U===Dr){_===!0&&(Ae(t.BLEND),_=!1);return}if(_===!1&&(ce(t.BLEND),_=!0),U!==fA){if(U!==h||st!==M){if((u!==eo||y!==eo)&&(t.blendEquation(t.FUNC_ADD),u=eo,y=eo),st)switch(U){case ls:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xg:t.blendFunc(t.ONE,t.ONE);break;case qg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case $g:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ls:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case qg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case $g:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}g=null,x=null,A=null,b=null,T.set(0,0,0),C=0,h=U,M=st}return}ve=ve||pe,ge=ge||J,Oe=Oe||ne,(pe!==u||ve!==y)&&(t.blendEquationSeparate(et[pe],et[ve]),u=pe,y=ve),(J!==g||ne!==x||ge!==A||Oe!==b)&&(t.blendFuncSeparate(We[J],We[ne],We[ge],We[Oe]),g=J,x=ne,A=ge,b=Oe),(Et.equals(T)===!1||jt!==C)&&(t.blendColor(Et.r,Et.g,Et.b,jt),T.copy(Et),C=jt),h=U,M=!1}function en(U,pe){U.side===Oi?Ae(t.CULL_FACE):ce(t.CULL_FACE);let J=U.side===vn;pe&&(J=!J),je(J),U.blending===ls&&U.transparent===!1?L(Dr):L(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),o.setMask(U.colorWrite);const ne=U.stencilWrite;a.setTest(ne),ne&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),tt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ce(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function je(U){S!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),S=U)}function Fe(U){U!==cA?(ce(t.CULL_FACE),U!==P&&(U===jg?t.cullFace(t.BACK):U===uA?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),P=U}function Te(U){U!==z&&(Z&&t.lineWidth(U),z=U)}function tt(U,pe,J){U?(ce(t.POLYGON_OFFSET_FILL),(G!==pe||B!==J)&&(t.polygonOffset(pe,J),G=pe,B=J)):Ae(t.POLYGON_OFFSET_FILL)}function we(U){U?ce(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function R(U){U===void 0&&(U=t.TEXTURE0+K-1),q!==U&&(t.activeTexture(U),q=U)}function E(U,pe,J){J===void 0&&(q===null?J=t.TEXTURE0+K-1:J=q);let ne=te[J];ne===void 0&&(ne={type:void 0,texture:void 0},te[J]=ne),(ne.type!==U||ne.texture!==pe)&&(q!==J&&(t.activeTexture(J),q=J),t.bindTexture(U,pe||ue[U]),ne.type=U,ne.texture=pe)}function V(){const U=te[q];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function F(){try{t.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function W(){try{t.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{t.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{t.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{t.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{t.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(){try{t.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{t.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{t.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{t.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(U){Be.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),Be.copy(U))}function _e(U){Q.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Q.copy(U))}function Ge(U,pe){let J=c.get(pe);J===void 0&&(J=new WeakMap,c.set(pe,J));let ne=J.get(U);ne===void 0&&(ne=t.getUniformBlockIndex(pe,U.name),J.set(U,ne))}function Ie(U,pe){const ne=c.get(pe).get(U);l.get(pe)!==ne&&(t.uniformBlockBinding(pe,ne,U.__bindingPointIndex),l.set(pe,ne))}function nt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},q=null,te={},f={},p=new WeakMap,m=[],v=null,_=!1,h=null,u=null,g=null,x=null,y=null,A=null,b=null,T=new at(0,0,0),C=0,M=!1,S=null,P=null,z=null,G=null,B=null,Be.set(0,0,t.canvas.width,t.canvas.height),Q.set(0,0,t.canvas.width,t.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:ce,disable:Ae,bindFramebuffer:Ye,drawBuffers:Ce,useProgram:dt,setBlending:L,setMaterial:en,setFlipSided:je,setCullFace:Fe,setLineWidth:Te,setPolygonOffset:tt,setScissorTest:we,activeTexture:R,bindTexture:E,unbindTexture:V,compressedTexImage2D:F,compressedTexImage3D:W,texImage2D:xe,texImage3D:Re,updateUBOMapping:Ge,uniformBlockBinding:Ie,texStorage2D:He,texStorage3D:se,texSubImage2D:$,texSubImage3D:de,compressedTexSubImage2D:le,compressedTexSubImage3D:me,scissor:De,viewport:_e,reset:nt}}function aL(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,d=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,E){return m?new OffscreenCanvas(R,E):Kc("canvas")}function _(R,E,V){let F=1;const W=we(R);if((W.width>V||W.height>V)&&(F=V/Math.max(W.width,W.height)),F<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(F*W.width),de=Math.floor(F*W.height);f===void 0&&(f=v($,de));const le=E?v($,de):f;return le.width=$,le.height=de,le.getContext("2d").drawImage(R,0,0,$,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+$+"x"+de+")."),le}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),R;return R}function h(R){return R.generateMipmaps}function u(R){t.generateMipmap(R)}function g(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(R,E,V,F,W=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=E;if(E===t.RED&&(V===t.FLOAT&&($=t.R32F),V===t.HALF_FLOAT&&($=t.R16F),V===t.UNSIGNED_BYTE&&($=t.R8)),E===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&($=t.R8UI),V===t.UNSIGNED_SHORT&&($=t.R16UI),V===t.UNSIGNED_INT&&($=t.R32UI),V===t.BYTE&&($=t.R8I),V===t.SHORT&&($=t.R16I),V===t.INT&&($=t.R32I)),E===t.RG&&(V===t.FLOAT&&($=t.RG32F),V===t.HALF_FLOAT&&($=t.RG16F),V===t.UNSIGNED_BYTE&&($=t.RG8)),E===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&($=t.RG8UI),V===t.UNSIGNED_SHORT&&($=t.RG16UI),V===t.UNSIGNED_INT&&($=t.RG32UI),V===t.BYTE&&($=t.RG8I),V===t.SHORT&&($=t.RG16I),V===t.INT&&($=t.RG32I)),E===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&($=t.RGB8UI),V===t.UNSIGNED_SHORT&&($=t.RGB16UI),V===t.UNSIGNED_INT&&($=t.RGB32UI),V===t.BYTE&&($=t.RGB8I),V===t.SHORT&&($=t.RGB16I),V===t.INT&&($=t.RGB32I)),E===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&($=t.RGBA8UI),V===t.UNSIGNED_SHORT&&($=t.RGBA16UI),V===t.UNSIGNED_INT&&($=t.RGBA32UI),V===t.BYTE&&($=t.RGBA8I),V===t.SHORT&&($=t.RGBA16I),V===t.INT&&($=t.RGBA32I)),E===t.RGB&&V===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),E===t.RGBA){const de=W?$c:Je.getTransfer(F);V===t.FLOAT&&($=t.RGBA32F),V===t.HALF_FLOAT&&($=t.RGBA16F),V===t.UNSIGNED_BYTE&&($=de===ct?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(R,E){let V;return R?E===null||E===So||E===Ns?V=t.DEPTH24_STENCIL8:E===Bi?V=t.DEPTH32F_STENCIL8:E===Va&&(V=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===So||E===Ns?V=t.DEPTH_COMPONENT24:E===Bi?V=t.DEPTH_COMPONENT32F:E===Va&&(V=t.DEPTH_COMPONENT16),V}function A(R,E){return h(R)===!0||R.isFramebufferTexture&&R.minFilter!==ci&&R.minFilter!==yi?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function b(R){const E=R.target;E.removeEventListener("dispose",b),C(E),E.isVideoTexture&&d.delete(E)}function T(R){const E=R.target;E.removeEventListener("dispose",T),S(E)}function C(R){const E=i.get(R);if(E.__webglInit===void 0)return;const V=R.source,F=p.get(V);if(F){const W=F[E.__cacheKey];W.usedTimes--,W.usedTimes===0&&M(R),Object.keys(F).length===0&&p.delete(V)}i.remove(R)}function M(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const V=R.source,F=p.get(V);delete F[E.__cacheKey],s.memory.textures--}function S(R){const E=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(E.__webglFramebuffer[F]))for(let W=0;W<E.__webglFramebuffer[F].length;W++)t.deleteFramebuffer(E.__webglFramebuffer[F][W]);else t.deleteFramebuffer(E.__webglFramebuffer[F]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[F])}else{if(Array.isArray(E.__webglFramebuffer))for(let F=0;F<E.__webglFramebuffer.length;F++)t.deleteFramebuffer(E.__webglFramebuffer[F]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let F=0;F<E.__webglColorRenderbuffer.length;F++)E.__webglColorRenderbuffer[F]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[F]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const V=R.textures;for(let F=0,W=V.length;F<W;F++){const $=i.get(V[F]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),s.memory.textures--),i.remove(V[F])}i.remove(R)}let P=0;function z(){P=0}function G(){const R=P;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),P+=1,R}function B(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function K(R,E){const V=i.get(R);if(R.isVideoTexture&&Te(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const F=R.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(V,R,E);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+E)}function Z(R,E){const V=i.get(R);if(R.version>0&&V.__version!==R.version){Q(V,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+E)}function ee(R,E){const V=i.get(R);if(R.version>0&&V.__version!==R.version){Q(V,R,E);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+E)}function N(R,E){const V=i.get(R);if(R.version>0&&V.__version!==R.version){ae(V,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+E)}const q={[Zf]:t.REPEAT,[oo]:t.CLAMP_TO_EDGE,[Jf]:t.MIRRORED_REPEAT},te={[ci]:t.NEAREST,[zA]:t.NEAREST_MIPMAP_NEAREST,[Cl]:t.NEAREST_MIPMAP_LINEAR,[yi]:t.LINEAR,[od]:t.LINEAR_MIPMAP_NEAREST,[so]:t.LINEAR_MIPMAP_LINEAR},oe={[WA]:t.NEVER,[KA]:t.ALWAYS,[jA]:t.LESS,[Zy]:t.LEQUAL,[XA]:t.EQUAL,[YA]:t.GEQUAL,[qA]:t.GREATER,[$A]:t.NOTEQUAL};function Se(R,E){if(E.type===Bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===yi||E.magFilter===od||E.magFilter===Cl||E.magFilter===so||E.minFilter===yi||E.minFilter===od||E.minFilter===Cl||E.minFilter===so)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,q[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,q[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,q[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,te[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,te[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,oe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ci||E.minFilter!==Cl&&E.minFilter!==so||E.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Be(R,E){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",b));const F=E.source;let W=p.get(F);W===void 0&&(W={},p.set(F,W));const $=B(E);if($!==R.__cacheKey){W[$]===void 0&&(W[$]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,V=!0),W[$].usedTimes++;const de=W[R.__cacheKey];de!==void 0&&(W[R.__cacheKey].usedTimes--,de.usedTimes===0&&M(E)),R.__cacheKey=$,R.__webglTexture=W[$].texture}return V}function Q(R,E,V){let F=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(F=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(F=t.TEXTURE_3D);const W=Be(R,E),$=E.source;n.bindTexture(F,R.__webglTexture,t.TEXTURE0+V);const de=i.get($);if($.version!==de.__version||W===!0){n.activeTexture(t.TEXTURE0+V);const le=Je.getPrimaries(Je.workingColorSpace),me=E.colorSpace===pr?null:Je.getPrimaries(E.colorSpace),He=E.colorSpace===pr||le===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let se=_(E.image,!1,r.maxTextureSize);se=tt(E,se);const xe=o.convert(E.format,E.colorSpace),Re=o.convert(E.type);let De=x(E.internalFormat,xe,Re,E.colorSpace,E.isVideoTexture);Se(F,E);let _e;const Ge=E.mipmaps,Ie=E.isVideoTexture!==!0,nt=de.__version===void 0||W===!0,U=$.dataReady,pe=A(E,se);if(E.isDepthTexture)De=y(E.format===Is,E.type),nt&&(Ie?n.texStorage2D(t.TEXTURE_2D,1,De,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,De,se.width,se.height,0,xe,Re,null));else if(E.isDataTexture)if(Ge.length>0){Ie&&nt&&n.texStorage2D(t.TEXTURE_2D,pe,De,Ge[0].width,Ge[0].height);for(let J=0,ne=Ge.length;J<ne;J++)_e=Ge[J],Ie?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,_e.width,_e.height,xe,Re,_e.data):n.texImage2D(t.TEXTURE_2D,J,De,_e.width,_e.height,0,xe,Re,_e.data);E.generateMipmaps=!1}else Ie?(nt&&n.texStorage2D(t.TEXTURE_2D,pe,De,se.width,se.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,xe,Re,se.data)):n.texImage2D(t.TEXTURE_2D,0,De,se.width,se.height,0,xe,Re,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ie&&nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,De,Ge[0].width,Ge[0].height,se.depth);for(let J=0,ne=Ge.length;J<ne;J++)if(_e=Ge[J],E.format!==si)if(xe!==null)if(Ie){if(U)if(E.layerUpdates.size>0){const ve=vv(_e.width,_e.height,E.format,E.type);for(const ge of E.layerUpdates){const Oe=_e.data.subarray(ge*ve/_e.data.BYTES_PER_ELEMENT,(ge+1)*ve/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,ge,_e.width,_e.height,1,xe,Oe)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,_e.width,_e.height,se.depth,xe,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,De,_e.width,_e.height,se.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,_e.width,_e.height,se.depth,xe,Re,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,De,_e.width,_e.height,se.depth,0,xe,Re,_e.data)}else{Ie&&nt&&n.texStorage2D(t.TEXTURE_2D,pe,De,Ge[0].width,Ge[0].height);for(let J=0,ne=Ge.length;J<ne;J++)_e=Ge[J],E.format!==si?xe!==null?Ie?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,_e.width,_e.height,xe,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,J,De,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,_e.width,_e.height,xe,Re,_e.data):n.texImage2D(t.TEXTURE_2D,J,De,_e.width,_e.height,0,xe,Re,_e.data)}else if(E.isDataArrayTexture)if(Ie){if(nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,De,se.width,se.height,se.depth),U)if(E.layerUpdates.size>0){const J=vv(se.width,se.height,E.format,E.type);for(const ne of E.layerUpdates){const ve=se.data.subarray(ne*J/se.data.BYTES_PER_ELEMENT,(ne+1)*J/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ne,se.width,se.height,1,xe,Re,ve)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,xe,Re,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,se.width,se.height,se.depth,0,xe,Re,se.data);else if(E.isData3DTexture)Ie?(nt&&n.texStorage3D(t.TEXTURE_3D,pe,De,se.width,se.height,se.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,xe,Re,se.data)):n.texImage3D(t.TEXTURE_3D,0,De,se.width,se.height,se.depth,0,xe,Re,se.data);else if(E.isFramebufferTexture){if(nt)if(Ie)n.texStorage2D(t.TEXTURE_2D,pe,De,se.width,se.height);else{let J=se.width,ne=se.height;for(let ve=0;ve<pe;ve++)n.texImage2D(t.TEXTURE_2D,ve,De,J,ne,0,xe,Re,null),J>>=1,ne>>=1}}else if(Ge.length>0){if(Ie&&nt){const J=we(Ge[0]);n.texStorage2D(t.TEXTURE_2D,pe,De,J.width,J.height)}for(let J=0,ne=Ge.length;J<ne;J++)_e=Ge[J],Ie?U&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,xe,Re,_e):n.texImage2D(t.TEXTURE_2D,J,De,xe,Re,_e);E.generateMipmaps=!1}else if(Ie){if(nt){const J=we(se);n.texStorage2D(t.TEXTURE_2D,pe,De,J.width,J.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,Re,se)}else n.texImage2D(t.TEXTURE_2D,0,De,xe,Re,se);h(E)&&u(F),de.__version=$.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ae(R,E,V){if(E.image.length!==6)return;const F=Be(R,E),W=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+V);const $=i.get(W);if(W.version!==$.__version||F===!0){n.activeTexture(t.TEXTURE0+V);const de=Je.getPrimaries(Je.workingColorSpace),le=E.colorSpace===pr?null:Je.getPrimaries(E.colorSpace),me=E.colorSpace===pr||de===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const He=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,xe=[];for(let ne=0;ne<6;ne++)!He&&!se?xe[ne]=_(E.image[ne],!0,r.maxCubemapSize):xe[ne]=se?E.image[ne].image:E.image[ne],xe[ne]=tt(E,xe[ne]);const Re=xe[0],De=o.convert(E.format,E.colorSpace),_e=o.convert(E.type),Ge=x(E.internalFormat,De,_e,E.colorSpace),Ie=E.isVideoTexture!==!0,nt=$.__version===void 0||F===!0,U=W.dataReady;let pe=A(E,Re);Se(t.TEXTURE_CUBE_MAP,E);let J;if(He){Ie&&nt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Ge,Re.width,Re.height);for(let ne=0;ne<6;ne++){J=xe[ne].mipmaps;for(let ve=0;ve<J.length;ve++){const ge=J[ve];E.format!==si?De!==null?Ie?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,0,0,ge.width,ge.height,De,ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,Ge,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,0,0,ge.width,ge.height,De,_e,ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve,Ge,ge.width,ge.height,0,De,_e,ge.data)}}}else{if(J=E.mipmaps,Ie&&nt){J.length>0&&pe++;const ne=we(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Ge,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(se){Ie?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,xe[ne].width,xe[ne].height,De,_e,xe[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ge,xe[ne].width,xe[ne].height,0,De,_e,xe[ne].data);for(let ve=0;ve<J.length;ve++){const Oe=J[ve].image[ne].image;Ie?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,0,0,Oe.width,Oe.height,De,_e,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,Ge,Oe.width,Oe.height,0,De,_e,Oe.data)}}else{Ie?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,De,_e,xe[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ge,De,_e,xe[ne]);for(let ve=0;ve<J.length;ve++){const ge=J[ve];Ie?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,0,0,De,_e,ge.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ve+1,Ge,De,_e,ge.image[ne])}}}h(E)&&u(t.TEXTURE_CUBE_MAP),$.__version=W.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function ue(R,E,V,F,W,$){const de=o.convert(V.format,V.colorSpace),le=o.convert(V.type),me=x(V.internalFormat,de,le,V.colorSpace),He=i.get(E),se=i.get(V);if(se.__renderTarget=E,!He.__hasExternalTextures){const xe=Math.max(1,E.width>>$),Re=Math.max(1,E.height>>$);W===t.TEXTURE_3D||W===t.TEXTURE_2D_ARRAY?n.texImage3D(W,$,me,xe,Re,E.depth,0,de,le,null):n.texImage2D(W,$,me,xe,Re,0,de,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Fe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,F,W,se.__webglTexture,0,je(E)):(W===t.TEXTURE_2D||W>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,F,W,se.__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ce(R,E,V){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){const F=E.depthTexture,W=F&&F.isDepthTexture?F.type:null,$=y(E.stencilBuffer,W),de=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=je(E);Fe(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,$,E.width,E.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,$,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,$,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,R)}else{const F=E.textures;for(let W=0;W<F.length;W++){const $=F[W],de=o.convert($.format,$.colorSpace),le=o.convert($.type),me=x($.internalFormat,de,le,$.colorSpace),He=je(E);V&&Fe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,He,me,E.width,E.height):Fe(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,He,me,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,me,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ae(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const F=i.get(E.depthTexture);F.__renderTarget=E,(!F.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K(E.depthTexture,0);const W=F.__webglTexture,$=je(E);if(E.depthTexture.format===cs)Fe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,W,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,W,0);else if(E.depthTexture.format===Is)Fe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,W,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Ye(R){const E=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const F=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),F){const W=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,F.removeEventListener("dispose",W)};F.addEventListener("dispose",W),E.__depthDisposeCallback=W}E.__boundDepthTexture=F}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ae(E.__webglFramebuffer,R)}else if(V){E.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[F]),E.__webglDepthbuffer[F]===void 0)E.__webglDepthbuffer[F]=t.createRenderbuffer(),ce(E.__webglDepthbuffer[F],R,!1);else{const W=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer[F];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,W,t.RENDERBUFFER,$)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),ce(E.__webglDepthbuffer,R,!1);else{const F=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,F,t.RENDERBUFFER,W)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(R,E,V){const F=i.get(R);E!==void 0&&ue(F.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&Ye(R)}function dt(R){const E=R.texture,V=i.get(R),F=i.get(E);R.addEventListener("dispose",T);const W=R.textures,$=R.isWebGLCubeRenderTarget===!0,de=W.length>1;if(de||(F.__webglTexture===void 0&&(F.__webglTexture=t.createTexture()),F.__version=E.version,s.memory.textures++),$){V.__webglFramebuffer=[];for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[le]=[];for(let me=0;me<E.mipmaps.length;me++)V.__webglFramebuffer[le][me]=t.createFramebuffer()}else V.__webglFramebuffer[le]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)V.__webglFramebuffer[le]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(de)for(let le=0,me=W.length;le<me;le++){const He=i.get(W[le]);He.__webglTexture===void 0&&(He.__webglTexture=t.createTexture(),s.memory.textures++)}if(R.samples>0&&Fe(R)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let le=0;le<W.length;le++){const me=W[le];V.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[le]);const He=o.convert(me.format,me.colorSpace),se=o.convert(me.type),xe=x(me.internalFormat,He,se,me.colorSpace,R.isXRRenderTarget===!0),Re=je(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,xe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,V.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),ce(V.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture),Se(t.TEXTURE_CUBE_MAP,E);for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)ue(V.__webglFramebuffer[le][me],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,me);else ue(V.__webglFramebuffer[le],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);h(E)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(de){for(let le=0,me=W.length;le<me;le++){const He=W[le],se=i.get(He);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),Se(t.TEXTURE_2D,He),ue(V.__webglFramebuffer,R,He,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),h(He)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,F.__webglTexture),Se(le,E),E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)ue(V.__webglFramebuffer[me],R,E,t.COLOR_ATTACHMENT0,le,me);else ue(V.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,le,0);h(E)&&u(le),n.unbindTexture()}R.depthBuffer&&Ye(R)}function et(R){const E=R.textures;for(let V=0,F=E.length;V<F;V++){const W=E[V];if(h(W)){const $=g(R),de=i.get(W).__webglTexture;n.bindTexture($,de),u($),n.unbindTexture()}}}const We=[],L=[];function en(R){if(R.samples>0){if(Fe(R)===!1){const E=R.textures,V=R.width,F=R.height;let W=t.COLOR_BUFFER_BIT;const $=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=i.get(R),le=E.length>1;if(le)for(let me=0;me<E.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let me=0;me<E.length;me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(W|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(W|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,de.__webglColorRenderbuffer[me]);const He=i.get(E[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,He,0)}t.blitFramebuffer(0,0,V,F,0,0,V,F,W,t.NEAREST),l===!0&&(We.length=0,L.length=0,We.push(t.COLOR_ATTACHMENT0+me),R.depthBuffer&&R.resolveDepthBuffer===!1&&(We.push($),L.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,L)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,We))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let me=0;me<E.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,de.__webglColorRenderbuffer[me]);const He=i.get(E[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,de.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,He,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function je(R){return Math.min(r.maxSamples,R.samples)}function Fe(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Te(R){const E=s.render.frame;d.get(R)!==E&&(d.set(R,E),R.update())}function tt(R,E){const V=R.colorSpace,F=R.format,W=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Us&&V!==pr&&(Je.getTransfer(V)===ct?(F!==si||W!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function we(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=Z,this.setTexture3D=ee,this.setTextureCube=N,this.rebindTextures=Ce,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Fe}function lL(t,e){function n(i,r=pr){let o;const s=Je.getTransfer(r);if(i===Ki)return t.UNSIGNED_BYTE;if(i===Oh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===kh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Wy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Vy)return t.BYTE;if(i===Gy)return t.SHORT;if(i===Va)return t.UNSIGNED_SHORT;if(i===Fh)return t.INT;if(i===So)return t.UNSIGNED_INT;if(i===Bi)return t.FLOAT;if(i===Za)return t.HALF_FLOAT;if(i===jy)return t.ALPHA;if(i===Xy)return t.RGB;if(i===si)return t.RGBA;if(i===qy)return t.LUMINANCE;if(i===$y)return t.LUMINANCE_ALPHA;if(i===cs)return t.DEPTH_COMPONENT;if(i===Is)return t.DEPTH_STENCIL;if(i===Yy)return t.RED;if(i===zh)return t.RED_INTEGER;if(i===Ky)return t.RG;if(i===Bh)return t.RG_INTEGER;if(i===Hh)return t.RGBA_INTEGER;if(i===pc||i===hc||i===mc||i===gc)if(s===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===pc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===pc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ep||i===tp||i===np||i===ip)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===ep)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===np)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ip)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rp||i===op||i===sp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===rp||i===op)return s===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===sp)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ap||i===lp||i===cp||i===up||i===dp||i===fp||i===pp||i===hp||i===mp||i===gp||i===vp||i===xp||i===_p||i===yp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===ap)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===lp)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cp)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===up)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dp)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fp)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pp)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hp)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===mp)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===gp)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vp)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xp)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_p)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yp)return s===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vc||i===Sp||i===Ep)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===vc)return s===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ep)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qy||i===Mp||i===wp||i===Tp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===vc)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Mp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ns?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const cL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new xn,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Fr({vertexShader:cL,fragmentShader:uL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Gn(new yu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fL extends Hs{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,d=null,f=null,p=null,m=null,v=null;const _=new dL,h=n.getContextAttributes();let u=null,g=null;const x=[],y=[],A=new ot;let b=null;const T=new Hn;T.viewport=new Ct;const C=new Hn;C.viewport=new Ct;const M=[T,C],S=new NC;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ae=x[Q];return ae===void 0&&(ae=new Ad,x[Q]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Q){let ae=x[Q];return ae===void 0&&(ae=new Ad,x[Q]=ae),ae.getGripSpace()},this.getHand=function(Q){let ae=x[Q];return ae===void 0&&(ae=new Ad,x[Q]=ae),ae.getHandSpace()};function G(Q){const ae=y.indexOf(Q.inputSource);if(ae===-1)return;const ue=x[ae];ue!==void 0&&(ue.update(Q.inputSource,Q.frame,c||s),ue.dispatchEvent({type:Q.type,data:Q.inputSource}))}function B(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",K);for(let Q=0;Q<x.length;Q++){const ae=y[Q];ae!==null&&(y[Q]=null,x[Q].disconnect(ae))}P=null,z=null,_.reset(),e.setRenderTarget(u),m=null,p=null,f=null,r=null,g=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",B),r.addEventListener("inputsourceschange",K),h.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,ce=null,Ae=null;h.depth&&(Ae=h.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=h.stencil?Is:cs,ce=h.stencil?Ns:So);const Ye={colorFormat:n.RGBA8,depthFormat:Ae,scaleFactor:o};f=new XRWebGLBinding(r,n),p=f.createProjectionLayer(Ye),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),g=new Eo(p.textureWidth,p.textureHeight,{format:si,type:Ki,depthTexture:new dS(p.textureWidth,p.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ue={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,n,ue),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new Eo(m.framebufferWidth,m.framebufferHeight,{format:si,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(Q){for(let ae=0;ae<Q.removed.length;ae++){const ue=Q.removed[ae],ce=y.indexOf(ue);ce>=0&&(y[ce]=null,x[ce].disconnect(ue))}for(let ae=0;ae<Q.added.length;ae++){const ue=Q.added[ae];let ce=y.indexOf(ue);if(ce===-1){for(let Ye=0;Ye<x.length;Ye++)if(Ye>=y.length){y.push(ue),ce=Ye;break}else if(y[Ye]===null){y[Ye]=ue,ce=Ye;break}if(ce===-1)break}const Ae=x[ce];Ae&&Ae.connect(ue)}}const Z=new H,ee=new H;function N(Q,ae,ue){Z.setFromMatrixPosition(ae.matrixWorld),ee.setFromMatrixPosition(ue.matrixWorld);const ce=Z.distanceTo(ee),Ae=ae.projectionMatrix.elements,Ye=ue.projectionMatrix.elements,Ce=Ae[14]/(Ae[10]-1),dt=Ae[14]/(Ae[10]+1),et=(Ae[9]+1)/Ae[5],We=(Ae[9]-1)/Ae[5],L=(Ae[8]-1)/Ae[0],en=(Ye[8]+1)/Ye[0],je=Ce*L,Fe=Ce*en,Te=ce/(-L+en),tt=Te*-L;if(ae.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(tt),Q.translateZ(Te),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ae[10]===-1)Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const we=Ce+Te,R=dt+Te,E=je-tt,V=Fe+(ce-tt),F=et*dt/R*we,W=We*dt/R*we;Q.projectionMatrix.makePerspective(E,V,F,W,we,R),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function q(Q,ae){ae===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ae.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ae=Q.near,ue=Q.far;_.texture!==null&&(_.depthNear>0&&(ae=_.depthNear),_.depthFar>0&&(ue=_.depthFar)),S.near=C.near=T.near=ae,S.far=C.far=T.far=ue,(P!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,z=S.far),T.layers.mask=Q.layers.mask|2,C.layers.mask=Q.layers.mask|4,S.layers.mask=T.layers.mask|C.layers.mask;const ce=Q.parent,Ae=S.cameras;q(S,ce);for(let Ye=0;Ye<Ae.length;Ye++)q(Ae[Ye],ce);Ae.length===2?N(S,T,C):S.projectionMatrix.copy(T.projectionMatrix),te(Q,S,ce)};function te(Q,ae,ue){ue===null?Q.matrix.copy(ae.matrixWorld):(Q.matrix.copy(ue.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ae.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ae.projectionMatrix),Q.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=bp*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(Q){l=Q,p!==null&&(p.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let oe=null;function Se(Q,ae){if(d=ae.getViewerPose(c||s),v=ae,d!==null){const ue=d.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let ce=!1;ue.length!==S.cameras.length&&(S.cameras.length=0,ce=!0);for(let Ce=0;Ce<ue.length;Ce++){const dt=ue[Ce];let et=null;if(m!==null)et=m.getViewport(dt);else{const L=f.getViewSubImage(p,dt);et=L.viewport,Ce===0&&(e.setRenderTargetTextures(g,L.colorTexture,p.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(g))}let We=M[Ce];We===void 0&&(We=new Hn,We.layers.enable(Ce),We.viewport=new Ct,M[Ce]=We),We.matrix.fromArray(dt.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(dt.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(et.x,et.y,et.width,et.height),Ce===0&&(S.matrix.copy(We.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ce===!0&&S.cameras.push(We)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const Ce=f.getDepthInformation(ue[0]);Ce&&Ce.isValid&&Ce.texture&&_.init(e,Ce,r.renderState)}}for(let ue=0;ue<x.length;ue++){const ce=y[ue],Ae=x[ue];ce!==null&&Ae!==void 0&&Ae.update(ce,ae,c||s)}oe&&oe(Q,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),v=null}const Be=new fS;Be.setAnimationLoop(Se),this.setAnimationLoop=function(Q){oe=Q},this.dispose=function(){}}}const qr=new Qi,pL=new Rt;function hL(t,e){function n(h,u){h.matrixAutoUpdate===!0&&h.updateMatrix(),u.value.copy(h.matrix)}function i(h,u){u.color.getRGB(h.fogColor.value,sS(t)),u.isFog?(h.fogNear.value=u.near,h.fogFar.value=u.far):u.isFogExp2&&(h.fogDensity.value=u.density)}function r(h,u,g,x,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?o(h,u):u.isMeshToonMaterial?(o(h,u),f(h,u)):u.isMeshPhongMaterial?(o(h,u),d(h,u)):u.isMeshStandardMaterial?(o(h,u),p(h,u),u.isMeshPhysicalMaterial&&m(h,u,y)):u.isMeshMatcapMaterial?(o(h,u),v(h,u)):u.isMeshDepthMaterial?o(h,u):u.isMeshDistanceMaterial?(o(h,u),_(h,u)):u.isMeshNormalMaterial?o(h,u):u.isLineBasicMaterial?(s(h,u),u.isLineDashedMaterial&&a(h,u)):u.isPointsMaterial?l(h,u,g,x):u.isSpriteMaterial?c(h,u):u.isShadowMaterial?(h.color.value.copy(u.color),h.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function o(h,u){h.opacity.value=u.opacity,u.color&&h.diffuse.value.copy(u.color),u.emissive&&h.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(h.map.value=u.map,n(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,n(u.alphaMap,h.alphaMapTransform)),u.bumpMap&&(h.bumpMap.value=u.bumpMap,n(u.bumpMap,h.bumpMapTransform),h.bumpScale.value=u.bumpScale,u.side===vn&&(h.bumpScale.value*=-1)),u.normalMap&&(h.normalMap.value=u.normalMap,n(u.normalMap,h.normalMapTransform),h.normalScale.value.copy(u.normalScale),u.side===vn&&h.normalScale.value.negate()),u.displacementMap&&(h.displacementMap.value=u.displacementMap,n(u.displacementMap,h.displacementMapTransform),h.displacementScale.value=u.displacementScale,h.displacementBias.value=u.displacementBias),u.emissiveMap&&(h.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,h.emissiveMapTransform)),u.specularMap&&(h.specularMap.value=u.specularMap,n(u.specularMap,h.specularMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest);const g=e.get(u),x=g.envMap,y=g.envMapRotation;x&&(h.envMap.value=x,qr.copy(y),qr.x*=-1,qr.y*=-1,qr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),h.envMapRotation.value.setFromMatrix4(pL.makeRotationFromEuler(qr)),h.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=u.reflectivity,h.ior.value=u.ior,h.refractionRatio.value=u.refractionRatio),u.lightMap&&(h.lightMap.value=u.lightMap,h.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,h.lightMapTransform)),u.aoMap&&(h.aoMap.value=u.aoMap,h.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,h.aoMapTransform))}function s(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,u.map&&(h.map.value=u.map,n(u.map,h.mapTransform))}function a(h,u){h.dashSize.value=u.dashSize,h.totalSize.value=u.dashSize+u.gapSize,h.scale.value=u.scale}function l(h,u,g,x){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.size.value=u.size*g,h.scale.value=x*.5,u.map&&(h.map.value=u.map,n(u.map,h.uvTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,n(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function c(h,u){h.diffuse.value.copy(u.color),h.opacity.value=u.opacity,h.rotation.value=u.rotation,u.map&&(h.map.value=u.map,n(u.map,h.mapTransform)),u.alphaMap&&(h.alphaMap.value=u.alphaMap,n(u.alphaMap,h.alphaMapTransform)),u.alphaTest>0&&(h.alphaTest.value=u.alphaTest)}function d(h,u){h.specular.value.copy(u.specular),h.shininess.value=Math.max(u.shininess,1e-4)}function f(h,u){u.gradientMap&&(h.gradientMap.value=u.gradientMap)}function p(h,u){h.metalness.value=u.metalness,u.metalnessMap&&(h.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,h.metalnessMapTransform)),h.roughness.value=u.roughness,u.roughnessMap&&(h.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,h.roughnessMapTransform)),u.envMap&&(h.envMapIntensity.value=u.envMapIntensity)}function m(h,u,g){h.ior.value=u.ior,u.sheen>0&&(h.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),h.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(h.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,h.sheenColorMapTransform)),u.sheenRoughnessMap&&(h.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,h.sheenRoughnessMapTransform))),u.clearcoat>0&&(h.clearcoat.value=u.clearcoat,h.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(h.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,h.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(h.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===vn&&h.clearcoatNormalScale.value.negate())),u.dispersion>0&&(h.dispersion.value=u.dispersion),u.iridescence>0&&(h.iridescence.value=u.iridescence,h.iridescenceIOR.value=u.iridescenceIOR,h.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(h.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,h.iridescenceMapTransform)),u.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),u.transmission>0&&(h.transmission.value=u.transmission,h.transmissionSamplerMap.value=g.texture,h.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(h.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,h.transmissionMapTransform)),h.thickness.value=u.thickness,u.thicknessMap&&(h.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=u.attenuationDistance,h.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(h.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(h.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=u.specularIntensity,h.specularColor.value.copy(u.specularColor),u.specularColorMap&&(h.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,h.specularColorMapTransform)),u.specularIntensityMap&&(h.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,h.specularIntensityMapTransform))}function v(h,u){u.matcap&&(h.matcap.value=u.matcap)}function _(h,u){const g=e.get(u).light;h.referencePosition.value.setFromMatrixPosition(g.matrixWorld),h.nearDistance.value=g.shadow.camera.near,h.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function mL(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const y=x.program;i.uniformBlockBinding(g,y)}function c(g,x){let y=r[g.id];y===void 0&&(v(g),y=d(g),r[g.id]=y,g.addEventListener("dispose",h));const A=x.program;i.updateUBOMapping(g,A);const b=e.render.frame;o[g.id]!==b&&(p(g),o[g.id]=b)}function d(g){const x=f();g.__bindingPointIndex=x;const y=t.createBuffer(),A=g.__size,b=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,A,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,y),y}function f(){for(let g=0;g<a;g++)if(s.indexOf(g)===-1)return s.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(g){const x=r[g.id],y=g.uniforms,A=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let b=0,T=y.length;b<T;b++){const C=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,S=C.length;M<S;M++){const P=C[M];if(m(P,b,M,A)===!0){const z=P.__offset,G=Array.isArray(P.value)?P.value:[P.value];let B=0;for(let K=0;K<G.length;K++){const Z=G[K],ee=_(Z);typeof Z=="number"||typeof Z=="boolean"?(P.__data[0]=Z,t.bufferSubData(t.UNIFORM_BUFFER,z+B,P.__data)):Z.isMatrix3?(P.__data[0]=Z.elements[0],P.__data[1]=Z.elements[1],P.__data[2]=Z.elements[2],P.__data[3]=0,P.__data[4]=Z.elements[3],P.__data[5]=Z.elements[4],P.__data[6]=Z.elements[5],P.__data[7]=0,P.__data[8]=Z.elements[6],P.__data[9]=Z.elements[7],P.__data[10]=Z.elements[8],P.__data[11]=0):(Z.toArray(P.__data,B),B+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,x,y,A){const b=g.value,T=x+"_"+y;if(A[T]===void 0)return typeof b=="number"||typeof b=="boolean"?A[T]=b:A[T]=b.clone(),!0;{const C=A[T];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return A[T]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function v(g){const x=g.uniforms;let y=0;const A=16;for(let T=0,C=x.length;T<C;T++){const M=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,P=M.length;S<P;S++){const z=M[S],G=Array.isArray(z.value)?z.value:[z.value];for(let B=0,K=G.length;B<K;B++){const Z=G[B],ee=_(Z),N=y%A,q=N%ee.boundary,te=N+q;y+=q,te!==0&&A-te<ee.storage&&(y+=A-te),z.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=ee.storage}}}const b=y%A;return b>0&&(y+=A-b),g.__size=y,g.__cache={},this}function _(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function h(g){const x=g.target;x.removeEventListener("dispose",h);const y=s.indexOf(x.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete o[x.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);s=[],r={},o={}}return{bind:l,update:c,dispose:u}}class gL{constructor(e={}){const{canvas:n=ZA(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const v=new Uint32Array(4),_=new Int32Array(4);let h=null,u=null;const g=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kn,this.toneMapping=Lr,this.toneMappingExposure=1;const y=this;let A=!1,b=0,T=0,C=null,M=-1,S=null;const P=new Ct,z=new Ct;let G=null;const B=new at(0);let K=0,Z=n.width,ee=n.height,N=1,q=null,te=null;const oe=new Ct(0,0,Z,ee),Se=new Ct(0,0,Z,ee);let Be=!1;const Q=new cS;let ae=!1,ue=!1;this.transmissionResolutionScale=1;const ce=new Rt,Ae=new Rt,Ye=new H,Ce=new Ct,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function We(){return C===null?N:1}let L=i;function en(w,O){return n.getContext(w,O)}try{const w={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Uh}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",ve,!1),n.addEventListener("webglcontextcreationerror",ge,!1),L===null){const O="webgl2";if(L=en(O,w),L===null)throw en(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let je,Fe,Te,tt,we,R,E,V,F,W,$,de,le,me,He,se,xe,Re,De,_e,Ge,Ie,nt,U;function pe(){je=new b2(L),je.init(),Ie=new lL(L,je),Fe=new _2(L,je,e,Ie),Te=new sL(L,je),Fe.reverseDepthBuffer&&p&&Te.buffers.depth.setReversed(!0),tt=new R2(L),we=new qD,R=new aL(L,je,Te,we,Fe,Ie,tt),E=new S2(y),V=new T2(y),F=new UC(L),nt=new v2(L,F),W=new A2(L,F,tt,nt),$=new D2(L,W,F,tt),De=new P2(L,Fe,R),se=new y2(we),de=new XD(y,E,V,je,Fe,nt,se),le=new hL(y,we),me=new YD,He=new tL(je),Re=new g2(y,E,V,Te,$,m,l),xe=new rL(y,$,Fe),U=new mL(L,tt,Fe,Te),_e=new x2(L,je,tt),Ge=new C2(L,je,tt),tt.programs=de.programs,y.capabilities=Fe,y.extensions=je,y.properties=we,y.renderLists=me,y.shadowMap=xe,y.state=Te,y.info=tt}pe();const J=new fL(y,L);this.xr=J,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=je.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=je.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(w){w!==void 0&&(N=w,this.setSize(Z,ee,!1))},this.getSize=function(w){return w.set(Z,ee)},this.setSize=function(w,O,j=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=w,ee=O,n.width=Math.floor(w*N),n.height=Math.floor(O*N),j===!0&&(n.style.width=w+"px",n.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(Z*N,ee*N).floor()},this.setDrawingBufferSize=function(w,O,j){Z=w,ee=O,N=j,n.width=Math.floor(w*j),n.height=Math.floor(O*j),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(oe)},this.setViewport=function(w,O,j,X){w.isVector4?oe.set(w.x,w.y,w.z,w.w):oe.set(w,O,j,X),Te.viewport(P.copy(oe).multiplyScalar(N).round())},this.getScissor=function(w){return w.copy(Se)},this.setScissor=function(w,O,j,X){w.isVector4?Se.set(w.x,w.y,w.z,w.w):Se.set(w,O,j,X),Te.scissor(z.copy(Se).multiplyScalar(N).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(w){Te.setScissorTest(Be=w)},this.setOpaqueSort=function(w){q=w},this.setTransparentSort=function(w){te=w},this.getClearColor=function(w){return w.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,j=!0){let X=0;if(w){let k=!1;if(C!==null){const re=C.texture.format;k=re===Hh||re===Bh||re===zh}if(k){const re=C.texture.type,he=re===Ki||re===So||re===Va||re===Ns||re===Oh||re===kh,Ee=Re.getClearColor(),Me=Re.getClearAlpha(),Le=Ee.r,Ue=Ee.g,be=Ee.b;he?(v[0]=Le,v[1]=Ue,v[2]=be,v[3]=Me,L.clearBufferuiv(L.COLOR,0,v)):(_[0]=Le,_[1]=Ue,_[2]=be,_[3]=Me,L.clearBufferiv(L.COLOR,0,_))}else X|=L.COLOR_BUFFER_BIT}O&&(X|=L.DEPTH_BUFFER_BIT),j&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",ve,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),Re.dispose(),me.dispose(),He.dispose(),we.dispose(),E.dispose(),V.dispose(),$.dispose(),nt.dispose(),U.dispose(),de.dispose(),J.dispose(),J.removeEventListener("sessionstart",Kh),J.removeEventListener("sessionend",Qh),Br.stop()};function ne(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=tt.autoReset,O=xe.enabled,j=xe.autoUpdate,X=xe.needsUpdate,k=xe.type;pe(),tt.autoReset=w,xe.enabled=O,xe.autoUpdate=j,xe.needsUpdate=X,xe.type=k}function ge(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Oe(w){const O=w.target;O.removeEventListener("dispose",Oe),Et(O)}function Et(w){jt(w),we.remove(w)}function jt(w){const O=we.get(w).programs;O!==void 0&&(O.forEach(function(j){de.releaseProgram(j)}),w.isShaderMaterial&&de.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,j,X,k,re){O===null&&(O=dt);const he=k.isMesh&&k.matrixWorld.determinant()<0,Ee=vS(w,O,j,X,k);Te.setMaterial(X,he);let Me=j.index,Le=1;if(X.wireframe===!0){if(Me=W.getWireframeAttribute(j),Me===void 0)return;Le=2}const Ue=j.drawRange,be=j.attributes.position;let Ke=Ue.start*Le,it=(Ue.start+Ue.count)*Le;re!==null&&(Ke=Math.max(Ke,re.start*Le),it=Math.min(it,(re.start+re.count)*Le)),Me!==null?(Ke=Math.max(Ke,0),it=Math.min(it,Me.count)):be!=null&&(Ke=Math.max(Ke,0),it=Math.min(it,be.count));const Pt=it-Ke;if(Pt<0||Pt===1/0)return;nt.setup(k,X,Ee,j,Me);let Mt,Ze=_e;if(Me!==null&&(Mt=F.get(Me),Ze=Ge,Ze.setIndex(Mt)),k.isMesh)X.wireframe===!0?(Te.setLineWidth(X.wireframeLinewidth*We()),Ze.setMode(L.LINES)):Ze.setMode(L.TRIANGLES);else if(k.isLine){let Pe=X.linewidth;Pe===void 0&&(Pe=1),Te.setLineWidth(Pe*We()),k.isLineSegments?Ze.setMode(L.LINES):k.isLineLoop?Ze.setMode(L.LINE_LOOP):Ze.setMode(L.LINE_STRIP)}else k.isPoints?Ze.setMode(L.POINTS):k.isSprite&&Ze.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Kr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ze.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))Ze.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Pe=k._multiDrawStarts,Bt=k._multiDrawCounts,rt=k._multiDrawCount,Yn=Me?F.get(Me).bytesPerElement:1,bo=we.get(X).currentProgram.getUniforms();for(let En=0;En<rt;En++)bo.setValue(L,"_gl_DrawID",En),Ze.render(Pe[En]/Yn,Bt[En])}else if(k.isInstancedMesh)Ze.renderInstances(Ke,Pt,k.count);else if(j.isInstancedBufferGeometry){const Pe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Bt=Math.min(j.instanceCount,Pe);Ze.renderInstances(Ke,Pt,Bt)}else Ze.render(Ke,Pt)};function st(w,O,j){w.transparent===!0&&w.side===Oi&&w.forceSinglePass===!1?(w.side=vn,w.needsUpdate=!0,ol(w,O,j),w.side=Ur,w.needsUpdate=!0,ol(w,O,j),w.side=Oi):ol(w,O,j)}this.compile=function(w,O,j=null){j===null&&(j=w),u=He.get(j),u.init(O),x.push(u),j.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),w!==j&&w.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(u.pushLight(k),k.castShadow&&u.pushShadow(k))}),u.setupLights();const X=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const re=k.material;if(re)if(Array.isArray(re))for(let he=0;he<re.length;he++){const Ee=re[he];st(Ee,j,k),X.add(Ee)}else st(re,j,k),X.add(re)}),u=x.pop(),X},this.compileAsync=function(w,O,j=null){const X=this.compile(w,O,j);return new Promise(k=>{function re(){if(X.forEach(function(he){we.get(he).currentProgram.isReady()&&X.delete(he)}),X.size===0){k(w);return}setTimeout(re,10)}je.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let $n=null;function wi(w){$n&&$n(w)}function Kh(){Br.stop()}function Qh(){Br.start()}const Br=new fS;Br.setAnimationLoop(wi),typeof self<"u"&&Br.setContext(self),this.setAnimationLoop=function(w){$n=w,J.setAnimationLoop(w),w===null?Br.stop():Br.start()},J.addEventListener("sessionstart",Kh),J.addEventListener("sessionend",Qh),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(O),O=J.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,O,C),u=He.get(w,x.length),u.init(O),x.push(u),Ae.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Q.setFromProjectionMatrix(Ae),ue=this.localClippingEnabled,ae=se.init(this.clippingPlanes,ue),h=me.get(w,g.length),h.init(),g.push(h),J.enabled===!0&&J.isPresenting===!0){const re=y.xr.getDepthSensingMesh();re!==null&&Eu(re,O,-1/0,y.sortObjects)}Eu(w,O,0,y.sortObjects),h.finish(),y.sortObjects===!0&&h.sort(q,te),et=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,et&&Re.addToRenderList(h,w),this.info.render.frame++,ae===!0&&se.beginShadows();const j=u.state.shadowsArray;xe.render(j,w,O),ae===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=h.opaque,k=h.transmissive;if(u.setupLights(),O.isArrayCamera){const re=O.cameras;if(k.length>0)for(let he=0,Ee=re.length;he<Ee;he++){const Me=re[he];Jh(X,k,w,Me)}et&&Re.render(w);for(let he=0,Ee=re.length;he<Ee;he++){const Me=re[he];Zh(h,w,Me,Me.viewport)}}else k.length>0&&Jh(X,k,w,O),et&&Re.render(w),Zh(h,w,O);C!==null&&T===0&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(y,w,O),nt.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?(u=x[x.length-1],ae===!0&&se.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?h=g[g.length-1]:h=null};function Eu(w,O,j,X){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){X&&Ce.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ae);const he=$.update(w),Ee=w.material;Ee.visible&&h.push(w,he,Ee,j,Ce.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Q.intersectsObject(w))){const he=$.update(w),Ee=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ce.copy(w.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ce.copy(he.boundingSphere.center)),Ce.applyMatrix4(w.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ee)){const Me=he.groups;for(let Le=0,Ue=Me.length;Le<Ue;Le++){const be=Me[Le],Ke=Ee[be.materialIndex];Ke&&Ke.visible&&h.push(w,he,Ke,j,Ce.z,be)}}else Ee.visible&&h.push(w,he,Ee,j,Ce.z,null)}}const re=w.children;for(let he=0,Ee=re.length;he<Ee;he++)Eu(re[he],O,j,X)}function Zh(w,O,j,X){const k=w.opaque,re=w.transmissive,he=w.transparent;u.setupLightsView(j),ae===!0&&se.setGlobalState(y.clippingPlanes,j),X&&Te.viewport(P.copy(X)),k.length>0&&rl(k,O,j),re.length>0&&rl(re,O,j),he.length>0&&rl(he,O,j),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Jh(w,O,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[X.id]===void 0&&(u.state.transmissionRenderTarget[X.id]=new Eo(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Za:Ki,minFilter:so,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const re=u.state.transmissionRenderTarget[X.id],he=X.viewport||P;re.setSize(he.z*y.transmissionResolutionScale,he.w*y.transmissionResolutionScale);const Ee=y.getRenderTarget();y.setRenderTarget(re),y.getClearColor(B),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),et&&Re.render(j);const Me=y.toneMapping;y.toneMapping=Lr;const Le=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),u.setupLightsView(X),ae===!0&&se.setGlobalState(y.clippingPlanes,X),rl(w,j,X),R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let be=0,Ke=O.length;be<Ke;be++){const it=O[be],Pt=it.object,Mt=it.geometry,Ze=it.material,Pe=it.group;if(Ze.side===Oi&&Pt.layers.test(X.layers)){const Bt=Ze.side;Ze.side=vn,Ze.needsUpdate=!0,em(Pt,j,X,Mt,Ze,Pe),Ze.side=Bt,Ze.needsUpdate=!0,Ue=!0}}Ue===!0&&(R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re))}y.setRenderTarget(Ee),y.setClearColor(B,K),Le!==void 0&&(X.viewport=Le),y.toneMapping=Me}function rl(w,O,j){const X=O.isScene===!0?O.overrideMaterial:null;for(let k=0,re=w.length;k<re;k++){const he=w[k],Ee=he.object,Me=he.geometry,Le=X===null?he.material:X,Ue=he.group;Ee.layers.test(j.layers)&&em(Ee,O,j,Me,Le,Ue)}}function em(w,O,j,X,k,re){w.onBeforeRender(y,O,j,X,k,re),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(y,O,j,X,w,re),k.transparent===!0&&k.side===Oi&&k.forceSinglePass===!1?(k.side=vn,k.needsUpdate=!0,y.renderBufferDirect(j,O,X,k,w,re),k.side=Ur,k.needsUpdate=!0,y.renderBufferDirect(j,O,X,k,w,re),k.side=Oi):y.renderBufferDirect(j,O,X,k,w,re),w.onAfterRender(y,O,j,X,k,re)}function ol(w,O,j){O.isScene!==!0&&(O=dt);const X=we.get(w),k=u.state.lights,re=u.state.shadowsArray,he=k.state.version,Ee=de.getParameters(w,k.state,re,O,j),Me=de.getProgramCacheKey(Ee);let Le=X.programs;X.environment=w.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(w.isMeshStandardMaterial?V:E).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Le===void 0&&(w.addEventListener("dispose",Oe),Le=new Map,X.programs=Le);let Ue=Le.get(Me);if(Ue!==void 0){if(X.currentProgram===Ue&&X.lightsStateVersion===he)return nm(w,Ee),Ue}else Ee.uniforms=de.getUniforms(w),w.onBeforeCompile(Ee,y),Ue=de.acquireProgram(Ee,Me),Le.set(Me,Ue),X.uniforms=Ee.uniforms;const be=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(be.clippingPlanes=se.uniform),nm(w,Ee),X.needsLights=_S(w),X.lightsStateVersion=he,X.needsLights&&(be.ambientLightColor.value=k.state.ambient,be.lightProbe.value=k.state.probe,be.directionalLights.value=k.state.directional,be.directionalLightShadows.value=k.state.directionalShadow,be.spotLights.value=k.state.spot,be.spotLightShadows.value=k.state.spotShadow,be.rectAreaLights.value=k.state.rectArea,be.ltc_1.value=k.state.rectAreaLTC1,be.ltc_2.value=k.state.rectAreaLTC2,be.pointLights.value=k.state.point,be.pointLightShadows.value=k.state.pointShadow,be.hemisphereLights.value=k.state.hemi,be.directionalShadowMap.value=k.state.directionalShadowMap,be.directionalShadowMatrix.value=k.state.directionalShadowMatrix,be.spotShadowMap.value=k.state.spotShadowMap,be.spotLightMatrix.value=k.state.spotLightMatrix,be.spotLightMap.value=k.state.spotLightMap,be.pointShadowMap.value=k.state.pointShadowMap,be.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Ue,X.uniformsList=null,Ue}function tm(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=xc.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function nm(w,O){const j=we.get(w);j.outputColorSpace=O.outputColorSpace,j.batching=O.batching,j.batchingColor=O.batchingColor,j.instancing=O.instancing,j.instancingColor=O.instancingColor,j.instancingMorph=O.instancingMorph,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function vS(w,O,j,X,k){O.isScene!==!0&&(O=dt),R.resetTextureUnits();const re=O.fog,he=X.isMeshStandardMaterial?O.environment:null,Ee=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Us,Me=(X.isMeshStandardMaterial?V:E).get(X.envMap||he),Le=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ue=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),be=!!j.morphAttributes.position,Ke=!!j.morphAttributes.normal,it=!!j.morphAttributes.color;let Pt=Lr;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Pt=y.toneMapping);const Mt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ze=Mt!==void 0?Mt.length:0,Pe=we.get(X),Bt=u.state.lights;if(ae===!0&&(ue===!0||w!==S)){const tn=w===S&&X.id===M;se.setState(X,w,tn)}let rt=!1;X.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Bt.state.version||Pe.outputColorSpace!==Ee||k.isBatchedMesh&&Pe.batching===!1||!k.isBatchedMesh&&Pe.batching===!0||k.isBatchedMesh&&Pe.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Pe.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Pe.instancing===!1||!k.isInstancedMesh&&Pe.instancing===!0||k.isSkinnedMesh&&Pe.skinning===!1||!k.isSkinnedMesh&&Pe.skinning===!0||k.isInstancedMesh&&Pe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Pe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Pe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Pe.instancingMorph===!1&&k.morphTexture!==null||Pe.envMap!==Me||X.fog===!0&&Pe.fog!==re||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==se.numPlanes||Pe.numIntersection!==se.numIntersection)||Pe.vertexAlphas!==Le||Pe.vertexTangents!==Ue||Pe.morphTargets!==be||Pe.morphNormals!==Ke||Pe.morphColors!==it||Pe.toneMapping!==Pt||Pe.morphTargetsCount!==Ze)&&(rt=!0):(rt=!0,Pe.__version=X.version);let Yn=Pe.currentProgram;rt===!0&&(Yn=ol(X,O,k));let bo=!1,En=!1,Gs=!1;const gt=Yn.getUniforms(),In=Pe.uniforms;if(Te.useProgram(Yn.program)&&(bo=!0,En=!0,Gs=!0),X.id!==M&&(M=X.id,En=!0),bo||S!==w){Te.buffers.depth.getReversed()?(ce.copy(w.projectionMatrix),eC(ce),tC(ce),gt.setValue(L,"projectionMatrix",ce)):gt.setValue(L,"projectionMatrix",w.projectionMatrix),gt.setValue(L,"viewMatrix",w.matrixWorldInverse);const cn=gt.map.cameraPosition;cn!==void 0&&cn.setValue(L,Ye.setFromMatrixPosition(w.matrixWorld)),Fe.logarithmicDepthBuffer&&gt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&gt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,En=!0,Gs=!0)}if(k.isSkinnedMesh){gt.setOptional(L,k,"bindMatrix"),gt.setOptional(L,k,"bindMatrixInverse");const tn=k.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),gt.setValue(L,"boneTexture",tn.boneTexture,R))}k.isBatchedMesh&&(gt.setOptional(L,k,"batchingTexture"),gt.setValue(L,"batchingTexture",k._matricesTexture,R),gt.setOptional(L,k,"batchingIdTexture"),gt.setValue(L,"batchingIdTexture",k._indirectTexture,R),gt.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&gt.setValue(L,"batchingColorTexture",k._colorsTexture,R));const Un=j.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&De.update(k,j,Yn),(En||Pe.receiveShadow!==k.receiveShadow)&&(Pe.receiveShadow=k.receiveShadow,gt.setValue(L,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(In.envMap.value=Me,In.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(In.envMapIntensity.value=O.environmentIntensity),En&&(gt.setValue(L,"toneMappingExposure",y.toneMappingExposure),Pe.needsLights&&xS(In,Gs),re&&X.fog===!0&&le.refreshFogUniforms(In,re),le.refreshMaterialUniforms(In,X,N,ee,u.state.transmissionRenderTarget[w.id]),xc.upload(L,tm(Pe),In,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(xc.upload(L,tm(Pe),In,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&gt.setValue(L,"center",k.center),gt.setValue(L,"modelViewMatrix",k.modelViewMatrix),gt.setValue(L,"normalMatrix",k.normalMatrix),gt.setValue(L,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const tn=X.uniformsGroups;for(let cn=0,Mu=tn.length;cn<Mu;cn++){const Hr=tn[cn];U.update(Hr,Yn),U.bind(Hr,Yn)}}return Yn}function xS(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function _S(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,O,j){we.get(w.texture).__webglTexture=O,we.get(w.depthTexture).__webglTexture=j;const X=we.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=j===void 0,X.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){const j=we.get(w);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0};const yS=L.createFramebuffer();this.setRenderTarget=function(w,O=0,j=0){C=w,b=O,T=j;let X=!0,k=null,re=!1,he=!1;if(w){const Me=we.get(w);if(Me.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(L.FRAMEBUFFER,null),X=!1;else if(Me.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Me.__hasExternalTextures)R.rebindTextures(w,we.get(w.texture).__webglTexture,we.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const be=w.depthTexture;if(Me.__boundDepthTexture!==be){if(be!==null&&we.has(be)&&(w.width!==be.image.width||w.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Le=w.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(he=!0);const Ue=we.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ue[O])?k=Ue[O][j]:k=Ue[O],re=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?k=we.get(w).__webglMultisampledFramebuffer:Array.isArray(Ue)?k=Ue[j]:k=Ue,P.copy(w.viewport),z.copy(w.scissor),G=w.scissorTest}else P.copy(oe).multiplyScalar(N).floor(),z.copy(Se).multiplyScalar(N).floor(),G=Be;if(j!==0&&(k=yS),Te.bindFramebuffer(L.FRAMEBUFFER,k)&&X&&Te.drawBuffers(w,k),Te.viewport(P),Te.scissor(z),Te.setScissorTest(G),re){const Me=we.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,j)}else if(he){const Me=we.get(w.texture),Le=O;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.__webglTexture,j,Le)}else if(w!==null&&j!==0){const Me=we.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Me.__webglTexture,j)}M=-1},this.readRenderTargetPixels=function(w,O,j,X,k,re,he){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=we.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&he!==void 0&&(Ee=Ee[he]),Ee){Te.bindFramebuffer(L.FRAMEBUFFER,Ee);try{const Me=w.texture,Le=Me.format,Ue=Me.type;if(!Fe.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Fe.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-X&&j>=0&&j<=w.height-k&&L.readPixels(O,j,X,k,Ie.convert(Le),Ie.convert(Ue),re)}finally{const Me=C!==null?we.get(C).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(w,O,j,X,k,re,he){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=we.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&he!==void 0&&(Ee=Ee[he]),Ee){const Me=w.texture,Le=Me.format,Ue=Me.type;if(!Fe.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Fe.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=w.width-X&&j>=0&&j<=w.height-k){Te.bindFramebuffer(L.FRAMEBUFFER,Ee);const be=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,be),L.bufferData(L.PIXEL_PACK_BUFFER,re.byteLength,L.STREAM_READ),L.readPixels(O,j,X,k,Ie.convert(Le),Ie.convert(Ue),0);const Ke=C!==null?we.get(C).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,Ke);const it=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await JA(L,it,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,be),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,re),L.deleteBuffer(be),L.deleteSync(it),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,O=null,j=0){w.isTexture!==!0&&(Kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,w=arguments[1]);const X=Math.pow(2,-j),k=Math.floor(w.image.width*X),re=Math.floor(w.image.height*X),he=O!==null?O.x:0,Ee=O!==null?O.y:0;R.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,j,0,0,he,Ee,k,re),Te.unbindTexture()};const SS=L.createFramebuffer(),ES=L.createFramebuffer();this.copyTextureToTexture=function(w,O,j=null,X=null,k=0,re=null){w.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1],O=arguments[2],re=arguments[3]||0,j=null),re===null&&(k!==0?(Kr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=k,k=0):re=0);let he,Ee,Me,Le,Ue,be,Ke,it,Pt;const Mt=w.isCompressedTexture?w.mipmaps[re]:w.image;if(j!==null)he=j.max.x-j.min.x,Ee=j.max.y-j.min.y,Me=j.isBox3?j.max.z-j.min.z:1,Le=j.min.x,Ue=j.min.y,be=j.isBox3?j.min.z:0;else{const Un=Math.pow(2,-k);he=Math.floor(Mt.width*Un),Ee=Math.floor(Mt.height*Un),w.isDataArrayTexture?Me=Mt.depth:w.isData3DTexture?Me=Math.floor(Mt.depth*Un):Me=1,Le=0,Ue=0,be=0}X!==null?(Ke=X.x,it=X.y,Pt=X.z):(Ke=0,it=0,Pt=0);const Ze=Ie.convert(O.format),Pe=Ie.convert(O.type);let Bt;O.isData3DTexture?(R.setTexture3D(O,0),Bt=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(R.setTexture2DArray(O,0),Bt=L.TEXTURE_2D_ARRAY):(R.setTexture2D(O,0),Bt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const rt=L.getParameter(L.UNPACK_ROW_LENGTH),Yn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),bo=L.getParameter(L.UNPACK_SKIP_PIXELS),En=L.getParameter(L.UNPACK_SKIP_ROWS),Gs=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Le),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ue),L.pixelStorei(L.UNPACK_SKIP_IMAGES,be);const gt=w.isDataArrayTexture||w.isData3DTexture,In=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const Un=we.get(w),tn=we.get(O),cn=we.get(Un.__renderTarget),Mu=we.get(tn.__renderTarget);Te.bindFramebuffer(L.READ_FRAMEBUFFER,cn.__webglFramebuffer),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,Mu.__webglFramebuffer);for(let Hr=0;Hr<Me;Hr++)gt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.get(w).__webglTexture,k,be+Hr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.get(O).__webglTexture,re,Pt+Hr)),L.blitFramebuffer(Le,Ue,he,Ee,Ke,it,he,Ee,L.DEPTH_BUFFER_BIT,L.NEAREST);Te.bindFramebuffer(L.READ_FRAMEBUFFER,null),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||w.isRenderTargetTexture||we.has(w)){const Un=we.get(w),tn=we.get(O);Te.bindFramebuffer(L.READ_FRAMEBUFFER,SS),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,ES);for(let cn=0;cn<Me;cn++)gt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Un.__webglTexture,k,be+cn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Un.__webglTexture,k),In?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,tn.__webglTexture,re,Pt+cn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,tn.__webglTexture,re),k!==0?L.blitFramebuffer(Le,Ue,he,Ee,Ke,it,he,Ee,L.COLOR_BUFFER_BIT,L.NEAREST):In?L.copyTexSubImage3D(Bt,re,Ke,it,Pt+cn,Le,Ue,he,Ee):L.copyTexSubImage2D(Bt,re,Ke,it,Le,Ue,he,Ee);Te.bindFramebuffer(L.READ_FRAMEBUFFER,null),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else In?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Bt,re,Ke,it,Pt,he,Ee,Me,Ze,Pe,Mt.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Bt,re,Ke,it,Pt,he,Ee,Me,Ze,Mt.data):L.texSubImage3D(Bt,re,Ke,it,Pt,he,Ee,Me,Ze,Pe,Mt):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,re,Ke,it,he,Ee,Ze,Pe,Mt.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,re,Ke,it,Mt.width,Mt.height,Ze,Mt.data):L.texSubImage2D(L.TEXTURE_2D,re,Ke,it,he,Ee,Ze,Pe,Mt);L.pixelStorei(L.UNPACK_ROW_LENGTH,rt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Yn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,bo),L.pixelStorei(L.UNPACK_SKIP_ROWS,En),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Gs),re===0&&O.generateMipmaps&&L.generateMipmap(Bt),Te.unbindTexture()},this.copyTextureToTexture3D=function(w,O,j=null,X=null,k=0){return w.isTexture!==!0&&(Kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,X=arguments[1]||null,w=arguments[2],O=arguments[3],k=arguments[4]||0),Kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,O,j,X,k)},this.initRenderTarget=function(w){we.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),Te.unbindTexture()},this.resetState=function(){b=0,T=0,C=null,Te.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}const vL=()=>{const t=I.useRef(null),e=I.useRef(0),n=I.useRef(0);return I.useEffect(()=>{if(!t.current)return;const i=document.createElement("canvas");t.current.appendChild(i);const r=new gL({canvas:i,antialias:!0,alpha:!0});r.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2));const o=new bC,s=new Hn(75,window.innerWidth/window.innerHeight,.1,1e3);s.position.z=30;const a=new qn,l=500,c=new Float32Array(l*3);for(let C=0;C<l*3;C++)c[C]=(Math.random()-.5)*50;a.setAttribute("position",new ui(c,3));const d=new uS({size:.3,color:7103487,transparent:!0,opacity:.6}),f=new RC(a,d);o.add(f);const p=new jh(2,32,32),m=new Sa({color:5164484,wireframe:!0}),v=new Gn(p,m);v.position.set(-15,10,-10),o.add(v);const _=new Xh(3,.7,16,100),h=new Sa({color:16739179,wireframe:!0}),u=new Gn(_,h);u.position.set(15,-10,-5),o.add(u);const g=new Wh(2.5),x=new Sa({color:7103487,wireframe:!0}),y=new Gn(g,x);y.position.set(10,10,-15),o.add(y);const A=()=>{requestAnimationFrame(A),f.rotation.y+=.001,v.rotation.y+=.005,v.rotation.x+=.003,u.rotation.y+=.003,u.rotation.x+=.005,y.rotation.y+=.004,y.rotation.x+=.002,f.rotation.y=n.current*5e-4,f.rotation.x=e.current*5e-4,r.render(o,s)},b=()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight)},T=C=>{e.current=C.clientX-window.innerWidth/2,n.current=C.clientY-window.innerHeight/2};return window.addEventListener("resize",b),document.addEventListener("mousemove",T),A(),()=>{window.removeEventListener("resize",b),document.removeEventListener("mousemove",T),t.current&&i.parentNode===t.current&&t.current.removeChild(i),o.clear(),r.dispose()}},[]),D.jsx("div",{ref:t,className:"fixed top-0 left-0 w-full h-full z-[-1]","aria-hidden":"true"})};function xL(){return D.jsxs(Aw,{children:[D.jsx(Zs,{path:"/",component:oA}),D.jsx(Zs,{path:"/about",component:sA}),D.jsx(Zs,{path:"/terms",component:aA}),D.jsx(Zs,{path:"/privacy",component:lA}),D.jsx(Zs,{component:eb})]})}function _L(){return D.jsxs(Zw,{client:r1,children:[D.jsxs("div",{className:"min-h-screen font-inter text-white",children:[D.jsx(vL,{}),D.jsx(nb,{}),D.jsx("div",{className:"container mx-auto px-4 pt-24 min-h-screen",children:D.jsx(xL,{})}),D.jsx(ib,{})]}),D.jsx(YT,{})]})}const $h=document.createElement("link");$h.rel="stylesheet";$h.href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap";document.head.appendChild($h);const Yh=document.createElement("link");Yh.rel="stylesheet";Yh.href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap";document.head.appendChild(Yh);c0(document.getElementById("root")).render(D.jsx(_L,{}));
