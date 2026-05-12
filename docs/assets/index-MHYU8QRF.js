(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function mc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var qo={exports:{}},ti={},Zo={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yn=Symbol.for("react.element"),hc=Symbol.for("react.portal"),gc=Symbol.for("react.fragment"),vc=Symbol.for("react.strict_mode"),yc=Symbol.for("react.profiler"),xc=Symbol.for("react.provider"),wc=Symbol.for("react.context"),kc=Symbol.for("react.forward_ref"),Sc=Symbol.for("react.suspense"),Ec=Symbol.for("react.memo"),Nc=Symbol.for("react.lazy"),Ba=Symbol.iterator;function _c(e){return e===null||typeof e!="object"?null:(e=Ba&&e[Ba]||e["@@iterator"],typeof e=="function"?e:null)}var Jo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},es=Object.assign,ts={};function sn(e,t,n){this.props=e,this.context=t,this.refs=ts,this.updater=n||Jo}sn.prototype.isReactComponent={};sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ns(){}ns.prototype=sn.prototype;function Wl(e,t,n){this.props=e,this.context=t,this.refs=ts,this.updater=n||Jo}var $l=Wl.prototype=new ns;$l.constructor=Wl;es($l,sn.prototype);$l.isPureReactComponent=!0;var Va=Array.isArray,rs=Object.prototype.hasOwnProperty,Gl={current:null},is={key:!0,ref:!0,__self:!0,__source:!0};function ls(e,t,n){var r,i={},l=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(l=""+t.key),t)rs.call(t,r)&&!is.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var u=Array(o),f=0;f<o;f++)u[f]=arguments[f+2];i.children=u}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:Yn,type:e,key:l,ref:a,props:i,_owner:Gl.current}}function Cc(e,t){return{$$typeof:Yn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ql(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yn}function jc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ha=/\/+/g;function ki(e,t){return typeof e=="object"&&e!==null&&e.key!=null?jc(""+e.key):t.toString(36)}function xr(e,t,n,r,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(l){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Yn:case hc:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+ki(a,0):r,Va(i)?(n="",e!=null&&(n=e.replace(Ha,"$&/")+"/"),xr(i,t,n,"",function(f){return f})):i!=null&&(Ql(i)&&(i=Cc(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Ha,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Va(e))for(var o=0;o<e.length;o++){l=e[o];var u=r+ki(l,o);a+=xr(l,t,n,u,i)}else if(u=_c(e),typeof u=="function")for(e=u.call(e),o=0;!(l=e.next()).done;)l=l.value,u=r+ki(l,o++),a+=xr(l,t,n,u,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function nr(e,t,n){if(e==null)return e;var r=[],i=0;return xr(e,r,"","",function(l){return t.call(n,l,i++)}),r}function Pc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},wr={transition:null},Ac={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:wr,ReactCurrentOwner:Gl};function as(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:nr,forEach:function(e,t,n){nr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return nr(e,function(){t++}),t},toArray:function(e){return nr(e,function(t){return t})||[]},only:function(e){if(!Ql(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=sn;M.Fragment=gc;M.Profiler=yc;M.PureComponent=Wl;M.StrictMode=vc;M.Suspense=Sc;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ac;M.act=as;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=es({},e.props),i=e.key,l=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,a=Gl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(u in t)rs.call(t,u)&&!is.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&o!==void 0?o[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){o=Array(u);for(var f=0;f<u;f++)o[f]=arguments[f+2];r.children=o}return{$$typeof:Yn,type:e.type,key:i,ref:l,props:r,_owner:a}};M.createContext=function(e){return e={$$typeof:wc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:xc,_context:e},e.Consumer=e};M.createElement=ls;M.createFactory=function(e){var t=ls.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:kc,render:e}};M.isValidElement=Ql;M.lazy=function(e){return{$$typeof:Nc,_payload:{_status:-1,_result:e},_init:Pc}};M.memo=function(e,t){return{$$typeof:Ec,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=wr.transition;wr.transition={};try{e()}finally{wr.transition=t}};M.unstable_act=as;M.useCallback=function(e,t){return ue.current.useCallback(e,t)};M.useContext=function(e){return ue.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};M.useEffect=function(e,t){return ue.current.useEffect(e,t)};M.useId=function(){return ue.current.useId()};M.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ue.current.useMemo(e,t)};M.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};M.useRef=function(e){return ue.current.useRef(e)};M.useState=function(e){return ue.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return ue.current.useTransition()};M.version="18.3.1";Zo.exports=M;var _e=Zo.exports;const os=mc(_e);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zc=_e,bc=Symbol.for("react.element"),Mc=Symbol.for("react.fragment"),Tc=Object.prototype.hasOwnProperty,Lc=zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rc={key:!0,ref:!0,__self:!0,__source:!0};function ss(e,t,n){var r,i={},l=null,a=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Tc.call(t,r)&&!Rc.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:bc,type:e,key:l,ref:a,props:i,_owner:Lc.current}}ti.Fragment=Mc;ti.jsx=ss;ti.jsxs=ss;qo.exports=ti;var s=qo.exports,Xi={},us={exports:{}},we={},cs={exports:{}},ds={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,A){var b=j.length;j.push(A);e:for(;0<b;){var $=b-1>>>1,X=j[$];if(0<i(X,A))j[$]=A,j[b]=X,b=$;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var A=j[0],b=j.pop();if(b!==A){j[0]=b;e:for(var $=0,X=j.length,er=X>>>1;$<er;){var yt=2*($+1)-1,wi=j[yt],xt=yt+1,tr=j[xt];if(0>i(wi,b))xt<X&&0>i(tr,wi)?(j[$]=tr,j[xt]=b,$=xt):(j[$]=wi,j[yt]=b,$=yt);else if(xt<X&&0>i(tr,b))j[$]=tr,j[xt]=b,$=xt;else break e}}return A}function i(j,A){var b=j.sortIndex-A.sortIndex;return b!==0?b:j.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var u=[],f=[],g=1,h=null,m=3,x=!1,k=!1,S=!1,z=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(j){for(var A=n(f);A!==null;){if(A.callback===null)r(f);else if(A.startTime<=j)r(f),A.sortIndex=A.expirationTime,t(u,A);else break;A=n(f)}}function v(j){if(S=!1,p(j),!k)if(n(u)!==null)k=!0,yi(N);else{var A=n(f);A!==null&&xi(v,A.startTime-j)}}function N(j,A){k=!1,S&&(S=!1,d(C),C=-1),x=!0;var b=m;try{for(p(A),h=n(u);h!==null&&(!(h.expirationTime>A)||j&&!W());){var $=h.callback;if(typeof $=="function"){h.callback=null,m=h.priorityLevel;var X=$(h.expirationTime<=A);A=e.unstable_now(),typeof X=="function"?h.callback=X:h===n(u)&&r(u),p(A)}else r(u);h=n(u)}if(h!==null)var er=!0;else{var yt=n(f);yt!==null&&xi(v,yt.startTime-A),er=!1}return er}finally{h=null,m=b,x=!1}}var y=!1,E=null,C=-1,T=5,P=-1;function W(){return!(e.unstable_now()-P<T)}function ae(){if(E!==null){var j=e.unstable_now();P=j;var A=!0;try{A=E(!0,j)}finally{A?Ae():(y=!1,E=null)}}else y=!1}var Ae;if(typeof c=="function")Ae=function(){c(ae)};else if(typeof MessageChannel<"u"){var Fa=new MessageChannel,pc=Fa.port2;Fa.port1.onmessage=ae,Ae=function(){pc.postMessage(null)}}else Ae=function(){z(ae,0)};function yi(j){E=j,y||(y=!0,Ae())}function xi(j,A){C=z(function(){j(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){k||x||(k=!0,yi(N))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(j){switch(m){case 1:case 2:case 3:var A=3;break;default:A=m}var b=m;m=A;try{return j()}finally{m=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,A){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var b=m;m=j;try{return A()}finally{m=b}},e.unstable_scheduleCallback=function(j,A,b){var $=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?$+b:$):b=$,j){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=b+X,j={id:g++,callback:A,priorityLevel:j,startTime:b,expirationTime:X,sortIndex:-1},b>$?(j.sortIndex=b,t(f,j),n(u)===null&&j===n(f)&&(S?(d(C),C=-1):S=!0,xi(v,b-$))):(j.sortIndex=X,t(u,j),k||x||(k=!0,yi(N))),j},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(j){var A=m;return function(){var b=m;m=A;try{return j.apply(this,arguments)}finally{m=b}}}})(ds);cs.exports=ds;var Ic=cs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oc=_e,xe=Ic;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fs=new Set,Mn={};function Mt(e,t){Jt(e,t),Jt(e+"Capture",t)}function Jt(e,t){for(Mn[e]=t,e=0;e<t.length;e++)fs.add(t[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qi=Object.prototype.hasOwnProperty,Dc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wa={},$a={};function Uc(e){return qi.call($a,e)?!0:qi.call(Wa,e)?!1:Dc.test(e)?$a[e]=!0:(Wa[e]=!0,!1)}function Fc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bc(e,t,n,r){if(t===null||typeof t>"u"||Fc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,i,l,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=a}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Kl=/[\-:]([a-z])/g;function Yl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Kl,Yl);te[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Kl,Yl);te[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Kl,Yl);te[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xl(e,t,n,r){var i=te.hasOwnProperty(t)?te[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bc(t,n,i,r)&&(n=null),r||i===null?Uc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var qe=Oc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rr=Symbol.for("react.element"),Rt=Symbol.for("react.portal"),It=Symbol.for("react.fragment"),ql=Symbol.for("react.strict_mode"),Zi=Symbol.for("react.profiler"),ps=Symbol.for("react.provider"),ms=Symbol.for("react.context"),Zl=Symbol.for("react.forward_ref"),Ji=Symbol.for("react.suspense"),el=Symbol.for("react.suspense_list"),Jl=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),hs=Symbol.for("react.offscreen"),Ga=Symbol.iterator;function dn(e){return e===null||typeof e!="object"?null:(e=Ga&&e[Ga]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Si;function xn(e){if(Si===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Si=t&&t[1]||""}return`
`+Si+e}var Ei=!1;function Ni(e,t){if(!e||Ei)return"";Ei=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),l=r.stack.split(`
`),a=i.length-1,o=l.length-1;1<=a&&0<=o&&i[a]!==l[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==l[o]){if(a!==1||o!==1)do if(a--,o--,0>o||i[a]!==l[o]){var u=`
`+i[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=o);break}}}finally{Ei=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xn(e):""}function Vc(e){switch(e.tag){case 5:return xn(e.type);case 16:return xn("Lazy");case 13:return xn("Suspense");case 19:return xn("SuspenseList");case 0:case 2:case 15:return e=Ni(e.type,!1),e;case 11:return e=Ni(e.type.render,!1),e;case 1:return e=Ni(e.type,!0),e;default:return""}}function tl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case It:return"Fragment";case Rt:return"Portal";case Zi:return"Profiler";case ql:return"StrictMode";case Ji:return"Suspense";case el:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ms:return(e.displayName||"Context")+".Consumer";case ps:return(e._context.displayName||"Context")+".Provider";case Zl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jl:return t=e.displayName||null,t!==null?t:tl(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return tl(e(t))}catch{}}return null}function Hc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tl(t);case 8:return t===ql?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wc(e){var t=gs(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,l.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ir(e){e._valueTracker||(e._valueTracker=Wc(e))}function vs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=gs(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function br(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function nl(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Qa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ys(e,t){t=t.checked,t!=null&&Xl(e,"checked",t,!1)}function rl(e,t){ys(e,t);var n=pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?il(e,t.type,n):t.hasOwnProperty("defaultValue")&&il(e,t.type,pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ka(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function il(e,t,n){(t!=="number"||br(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wn=Array.isArray;function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ll(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ya(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(wn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pt(n)}}function xs(e,t){var n=pt(t.value),r=pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Xa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ws(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function al(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ws(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var lr,ks=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(lr=lr||document.createElement("div"),lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var En={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$c=["Webkit","ms","Moz","O"];Object.keys(En).forEach(function(e){$c.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),En[t]=En[e]})});function Ss(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||En.hasOwnProperty(e)&&En[e]?(""+t).trim():t+"px"}function Es(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ss(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Gc=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ol(e,t){if(t){if(Gc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function sl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ul=null;function ea(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var cl=null,Kt=null,Yt=null;function qa(e){if(e=Zn(e)){if(typeof cl!="function")throw Error(w(280));var t=e.stateNode;t&&(t=ai(t),cl(e.stateNode,e.type,t))}}function Ns(e){Kt?Yt?Yt.push(e):Yt=[e]:Kt=e}function _s(){if(Kt){var e=Kt,t=Yt;if(Yt=Kt=null,qa(e),t)for(e=0;e<t.length;e++)qa(t[e])}}function Cs(e,t){return e(t)}function js(){}var _i=!1;function Ps(e,t,n){if(_i)return e(t,n);_i=!0;try{return Cs(e,t,n)}finally{_i=!1,(Kt!==null||Yt!==null)&&(js(),_s())}}function Ln(e,t){var n=e.stateNode;if(n===null)return null;var r=ai(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var dl=!1;if(Qe)try{var fn={};Object.defineProperty(fn,"passive",{get:function(){dl=!0}}),window.addEventListener("test",fn,fn),window.removeEventListener("test",fn,fn)}catch{dl=!1}function Qc(e,t,n,r,i,l,a,o,u){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(g){this.onError(g)}}var Nn=!1,Mr=null,Tr=!1,fl=null,Kc={onError:function(e){Nn=!0,Mr=e}};function Yc(e,t,n,r,i,l,a,o,u){Nn=!1,Mr=null,Qc.apply(Kc,arguments)}function Xc(e,t,n,r,i,l,a,o,u){if(Yc.apply(this,arguments),Nn){if(Nn){var f=Mr;Nn=!1,Mr=null}else throw Error(w(198));Tr||(Tr=!0,fl=f)}}function Tt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function As(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Za(e){if(Tt(e)!==e)throw Error(w(188))}function qc(e){var t=e.alternate;if(!t){if(t=Tt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return Za(i),e;if(l===r)return Za(i),t;l=l.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=l;else{for(var a=!1,o=i.child;o;){if(o===n){a=!0,n=i,r=l;break}if(o===r){a=!0,r=i,n=l;break}o=o.sibling}if(!a){for(o=l.child;o;){if(o===n){a=!0,n=l,r=i;break}if(o===r){a=!0,r=l,n=i;break}o=o.sibling}if(!a)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function zs(e){return e=qc(e),e!==null?bs(e):null}function bs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bs(e);if(t!==null)return t;e=e.sibling}return null}var Ms=xe.unstable_scheduleCallback,Ja=xe.unstable_cancelCallback,Zc=xe.unstable_shouldYield,Jc=xe.unstable_requestPaint,G=xe.unstable_now,ed=xe.unstable_getCurrentPriorityLevel,ta=xe.unstable_ImmediatePriority,Ts=xe.unstable_UserBlockingPriority,Lr=xe.unstable_NormalPriority,td=xe.unstable_LowPriority,Ls=xe.unstable_IdlePriority,ni=null,Fe=null;function nd(e){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(ni,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:ld,rd=Math.log,id=Math.LN2;function ld(e){return e>>>=0,e===0?32:31-(rd(e)/id|0)|0}var ar=64,or=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Rr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,l=e.pingedLanes,a=n&268435455;if(a!==0){var o=a&~i;o!==0?r=kn(o):(l&=a,l!==0&&(r=kn(l)))}else a=n&~i,a!==0?r=kn(a):l!==0&&(r=kn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Le(t),i=1<<n,r|=e[n],t&=~i;return r}function ad(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function od(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var a=31-Le(l),o=1<<a,u=i[a];u===-1?(!(o&n)||o&r)&&(i[a]=ad(o,t)):u<=t&&(e.expiredLanes|=o),l&=~o}}function pl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Rs(){var e=ar;return ar<<=1,!(ar&4194240)&&(ar=64),e}function Ci(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Xn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Le(t),e[t]=n}function sd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Le(n),l=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~l}}function na(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Le(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var R=0;function Is(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Os,ra,Ds,Us,Fs,ml=!1,sr=[],lt=null,at=null,ot=null,Rn=new Map,In=new Map,tt=[],ud="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eo(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":Rn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":In.delete(t.pointerId)}}function pn(e,t,n,r,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Zn(t),t!==null&&ra(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function cd(e,t,n,r,i){switch(t){case"focusin":return lt=pn(lt,e,t,n,r,i),!0;case"dragenter":return at=pn(at,e,t,n,r,i),!0;case"mouseover":return ot=pn(ot,e,t,n,r,i),!0;case"pointerover":var l=i.pointerId;return Rn.set(l,pn(Rn.get(l)||null,e,t,n,r,i)),!0;case"gotpointercapture":return l=i.pointerId,In.set(l,pn(In.get(l)||null,e,t,n,r,i)),!0}return!1}function Bs(e){var t=St(e.target);if(t!==null){var n=Tt(t);if(n!==null){if(t=n.tag,t===13){if(t=As(n),t!==null){e.blockedOn=t,Fs(e.priority,function(){Ds(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ul=r,n.target.dispatchEvent(r),ul=null}else return t=Zn(n),t!==null&&ra(t),e.blockedOn=n,!1;t.shift()}return!0}function to(e,t,n){kr(e)&&n.delete(t)}function dd(){ml=!1,lt!==null&&kr(lt)&&(lt=null),at!==null&&kr(at)&&(at=null),ot!==null&&kr(ot)&&(ot=null),Rn.forEach(to),In.forEach(to)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,ml||(ml=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,dd)))}function On(e){function t(i){return mn(i,e)}if(0<sr.length){mn(sr[0],e);for(var n=1;n<sr.length;n++){var r=sr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(lt!==null&&mn(lt,e),at!==null&&mn(at,e),ot!==null&&mn(ot,e),Rn.forEach(t),In.forEach(t),n=0;n<tt.length;n++)r=tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)Bs(n),n.blockedOn===null&&tt.shift()}var Xt=qe.ReactCurrentBatchConfig,Ir=!0;function fd(e,t,n,r){var i=R,l=Xt.transition;Xt.transition=null;try{R=1,ia(e,t,n,r)}finally{R=i,Xt.transition=l}}function pd(e,t,n,r){var i=R,l=Xt.transition;Xt.transition=null;try{R=4,ia(e,t,n,r)}finally{R=i,Xt.transition=l}}function ia(e,t,n,r){if(Ir){var i=hl(e,t,n,r);if(i===null)Ii(e,t,r,Or,n),eo(e,r);else if(cd(i,e,t,n,r))r.stopPropagation();else if(eo(e,r),t&4&&-1<ud.indexOf(e)){for(;i!==null;){var l=Zn(i);if(l!==null&&Os(l),l=hl(e,t,n,r),l===null&&Ii(e,t,r,Or,n),l===i)break;i=l}i!==null&&r.stopPropagation()}else Ii(e,t,r,null,n)}}var Or=null;function hl(e,t,n,r){if(Or=null,e=ea(r),e=St(e),e!==null)if(t=Tt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=As(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Or=e,null}function Vs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ed()){case ta:return 1;case Ts:return 4;case Lr:case td:return 16;case Ls:return 536870912;default:return 16}default:return 16}}var rt=null,la=null,Sr=null;function Hs(){if(Sr)return Sr;var e,t=la,n=t.length,r,i="value"in rt?rt.value:rt.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[l-r];r++);return Sr=i.slice(e,1<r?1-r:void 0)}function Er(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ur(){return!0}function no(){return!1}function ke(e){function t(n,r,i,l,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ur:no,this.isPropagationStopped=no,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ur)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ur)},persist:function(){},isPersistent:ur}),t}var un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},aa=ke(un),qn=V({},un,{view:0,detail:0}),md=ke(qn),ji,Pi,hn,ri=V({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(ji=e.screenX-hn.screenX,Pi=e.screenY-hn.screenY):Pi=ji=0,hn=e),ji)},movementY:function(e){return"movementY"in e?e.movementY:Pi}}),ro=ke(ri),hd=V({},ri,{dataTransfer:0}),gd=ke(hd),vd=V({},qn,{relatedTarget:0}),Ai=ke(vd),yd=V({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),xd=ke(yd),wd=V({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kd=ke(wd),Sd=V({},un,{data:0}),io=ke(Sd),Ed={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_d={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_d[e])?!!t[e]:!1}function oa(){return Cd}var jd=V({},qn,{key:function(e){if(e.key){var t=Ed[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oa,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pd=ke(jd),Ad=V({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lo=ke(Ad),zd=V({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oa}),bd=ke(zd),Md=V({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),Td=ke(Md),Ld=V({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rd=ke(Ld),Id=[9,13,27,32],sa=Qe&&"CompositionEvent"in window,_n=null;Qe&&"documentMode"in document&&(_n=document.documentMode);var Od=Qe&&"TextEvent"in window&&!_n,Ws=Qe&&(!sa||_n&&8<_n&&11>=_n),ao=" ",oo=!1;function $s(e,t){switch(e){case"keyup":return Id.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ot=!1;function Dd(e,t){switch(e){case"compositionend":return Gs(t);case"keypress":return t.which!==32?null:(oo=!0,ao);case"textInput":return e=t.data,e===ao&&oo?null:e;default:return null}}function Ud(e,t){if(Ot)return e==="compositionend"||!sa&&$s(e,t)?(e=Hs(),Sr=la=rt=null,Ot=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ws&&t.locale!=="ko"?null:t.data;default:return null}}var Fd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function so(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fd[e.type]:t==="textarea"}function Qs(e,t,n,r){Ns(r),t=Dr(t,"onChange"),0<t.length&&(n=new aa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Cn=null,Dn=null;function Bd(e){iu(e,0)}function ii(e){var t=Ft(e);if(vs(t))return e}function Vd(e,t){if(e==="change")return t}var Ks=!1;if(Qe){var zi;if(Qe){var bi="oninput"in document;if(!bi){var uo=document.createElement("div");uo.setAttribute("oninput","return;"),bi=typeof uo.oninput=="function"}zi=bi}else zi=!1;Ks=zi&&(!document.documentMode||9<document.documentMode)}function co(){Cn&&(Cn.detachEvent("onpropertychange",Ys),Dn=Cn=null)}function Ys(e){if(e.propertyName==="value"&&ii(Dn)){var t=[];Qs(t,Dn,e,ea(e)),Ps(Bd,t)}}function Hd(e,t,n){e==="focusin"?(co(),Cn=t,Dn=n,Cn.attachEvent("onpropertychange",Ys)):e==="focusout"&&co()}function Wd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ii(Dn)}function $d(e,t){if(e==="click")return ii(t)}function Gd(e,t){if(e==="input"||e==="change")return ii(t)}function Qd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:Qd;function Un(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qi.call(t,i)||!Ie(e[i],t[i]))return!1}return!0}function fo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function po(e,t){var n=fo(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fo(n)}}function Xs(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xs(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qs(){for(var e=window,t=br();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=br(e.document)}return t}function ua(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Kd(e){var t=qs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Xs(n.ownerDocument.documentElement,n)){if(r!==null&&ua(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(r.start,i);r=r.end===void 0?l:Math.min(r.end,i),!e.extend&&l>r&&(i=r,r=l,l=i),i=po(n,l);var a=po(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yd=Qe&&"documentMode"in document&&11>=document.documentMode,Dt=null,gl=null,jn=null,vl=!1;function mo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vl||Dt==null||Dt!==br(r)||(r=Dt,"selectionStart"in r&&ua(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jn&&Un(jn,r)||(jn=r,r=Dr(gl,"onSelect"),0<r.length&&(t=new aa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Dt)))}function cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ut={animationend:cr("Animation","AnimationEnd"),animationiteration:cr("Animation","AnimationIteration"),animationstart:cr("Animation","AnimationStart"),transitionend:cr("Transition","TransitionEnd")},Mi={},Zs={};Qe&&(Zs=document.createElement("div").style,"AnimationEvent"in window||(delete Ut.animationend.animation,delete Ut.animationiteration.animation,delete Ut.animationstart.animation),"TransitionEvent"in window||delete Ut.transitionend.transition);function li(e){if(Mi[e])return Mi[e];if(!Ut[e])return e;var t=Ut[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zs)return Mi[e]=t[n];return e}var Js=li("animationend"),eu=li("animationiteration"),tu=li("animationstart"),nu=li("transitionend"),ru=new Map,ho="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,t){ru.set(e,t),Mt(t,[e])}for(var Ti=0;Ti<ho.length;Ti++){var Li=ho[Ti],Xd=Li.toLowerCase(),qd=Li[0].toUpperCase()+Li.slice(1);ht(Xd,"on"+qd)}ht(Js,"onAnimationEnd");ht(eu,"onAnimationIteration");ht(tu,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(nu,"onTransitionEnd");Jt("onMouseEnter",["mouseout","mouseover"]);Jt("onMouseLeave",["mouseout","mouseover"]);Jt("onPointerEnter",["pointerout","pointerover"]);Jt("onPointerLeave",["pointerout","pointerover"]);Mt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));function go(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Xc(r,t,void 0,e),e.currentTarget=null}function iu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],u=o.instance,f=o.currentTarget;if(o=o.listener,u!==l&&i.isPropagationStopped())break e;go(i,o,f),l=u}else for(a=0;a<r.length;a++){if(o=r[a],u=o.instance,f=o.currentTarget,o=o.listener,u!==l&&i.isPropagationStopped())break e;go(i,o,f),l=u}}}if(Tr)throw e=fl,Tr=!1,fl=null,e}function O(e,t){var n=t[Sl];n===void 0&&(n=t[Sl]=new Set);var r=e+"__bubble";n.has(r)||(lu(t,e,2,!1),n.add(r))}function Ri(e,t,n){var r=0;t&&(r|=4),lu(n,e,r,t)}var dr="_reactListening"+Math.random().toString(36).slice(2);function Fn(e){if(!e[dr]){e[dr]=!0,fs.forEach(function(n){n!=="selectionchange"&&(Zd.has(n)||Ri(n,!1,e),Ri(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[dr]||(t[dr]=!0,Ri("selectionchange",!1,t))}}function lu(e,t,n,r){switch(Vs(t)){case 1:var i=fd;break;case 4:i=pd;break;default:i=ia}n=i.bind(null,t,n,e),i=void 0,!dl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ii(e,t,n,r,i){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;o!==null;){if(a=St(o),a===null)return;if(u=a.tag,u===5||u===6){r=l=a;continue e}o=o.parentNode}}r=r.return}Ps(function(){var f=l,g=ea(n),h=[];e:{var m=ru.get(e);if(m!==void 0){var x=aa,k=e;switch(e){case"keypress":if(Er(n)===0)break e;case"keydown":case"keyup":x=Pd;break;case"focusin":k="focus",x=Ai;break;case"focusout":k="blur",x=Ai;break;case"beforeblur":case"afterblur":x=Ai;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=ro;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=gd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=bd;break;case Js:case eu:case tu:x=xd;break;case nu:x=Td;break;case"scroll":x=md;break;case"wheel":x=Rd;break;case"copy":case"cut":case"paste":x=kd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=lo}var S=(t&4)!==0,z=!S&&e==="scroll",d=S?m!==null?m+"Capture":null:m;S=[];for(var c=f,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,d!==null&&(v=Ln(c,d),v!=null&&S.push(Bn(c,v,p)))),z)break;c=c.return}0<S.length&&(m=new x(m,k,null,n,g),h.push({event:m,listeners:S}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==ul&&(k=n.relatedTarget||n.fromElement)&&(St(k)||k[Ke]))break e;if((x||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,x?(k=n.relatedTarget||n.toElement,x=f,k=k?St(k):null,k!==null&&(z=Tt(k),k!==z||k.tag!==5&&k.tag!==6)&&(k=null)):(x=null,k=f),x!==k)){if(S=ro,v="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=lo,v="onPointerLeave",d="onPointerEnter",c="pointer"),z=x==null?m:Ft(x),p=k==null?m:Ft(k),m=new S(v,c+"leave",x,n,g),m.target=z,m.relatedTarget=p,v=null,St(g)===f&&(S=new S(d,c+"enter",k,n,g),S.target=p,S.relatedTarget=z,v=S),z=v,x&&k)t:{for(S=x,d=k,c=0,p=S;p;p=Lt(p))c++;for(p=0,v=d;v;v=Lt(v))p++;for(;0<c-p;)S=Lt(S),c--;for(;0<p-c;)d=Lt(d),p--;for(;c--;){if(S===d||d!==null&&S===d.alternate)break t;S=Lt(S),d=Lt(d)}S=null}else S=null;x!==null&&vo(h,m,x,S,!1),k!==null&&z!==null&&vo(h,z,k,S,!0)}}e:{if(m=f?Ft(f):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var N=Vd;else if(so(m))if(Ks)N=Gd;else{N=Wd;var y=Hd}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(N=$d);if(N&&(N=N(e,f))){Qs(h,N,n,g);break e}y&&y(e,m,f),e==="focusout"&&(y=m._wrapperState)&&y.controlled&&m.type==="number"&&il(m,"number",m.value)}switch(y=f?Ft(f):window,e){case"focusin":(so(y)||y.contentEditable==="true")&&(Dt=y,gl=f,jn=null);break;case"focusout":jn=gl=Dt=null;break;case"mousedown":vl=!0;break;case"contextmenu":case"mouseup":case"dragend":vl=!1,mo(h,n,g);break;case"selectionchange":if(Yd)break;case"keydown":case"keyup":mo(h,n,g)}var E;if(sa)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Ot?$s(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Ws&&n.locale!=="ko"&&(Ot||C!=="onCompositionStart"?C==="onCompositionEnd"&&Ot&&(E=Hs()):(rt=g,la="value"in rt?rt.value:rt.textContent,Ot=!0)),y=Dr(f,C),0<y.length&&(C=new io(C,e,null,n,g),h.push({event:C,listeners:y}),E?C.data=E:(E=Gs(n),E!==null&&(C.data=E)))),(E=Od?Dd(e,n):Ud(e,n))&&(f=Dr(f,"onBeforeInput"),0<f.length&&(g=new io("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:f}),g.data=E))}iu(h,t)})}function Bn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Dr(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=Ln(e,n),l!=null&&r.unshift(Bn(e,l,i)),l=Ln(e,t),l!=null&&r.push(Bn(e,l,i))),e=e.return}return r}function Lt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vo(e,t,n,r,i){for(var l=t._reactName,a=[];n!==null&&n!==r;){var o=n,u=o.alternate,f=o.stateNode;if(u!==null&&u===r)break;o.tag===5&&f!==null&&(o=f,i?(u=Ln(n,l),u!=null&&a.unshift(Bn(n,u,o))):i||(u=Ln(n,l),u!=null&&a.push(Bn(n,u,o)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Jd=/\r\n?/g,ef=/\u0000|\uFFFD/g;function yo(e){return(typeof e=="string"?e:""+e).replace(Jd,`
`).replace(ef,"")}function fr(e,t,n){if(t=yo(t),yo(e)!==t&&n)throw Error(w(425))}function Ur(){}var yl=null,xl=null;function wl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var kl=typeof setTimeout=="function"?setTimeout:void 0,tf=typeof clearTimeout=="function"?clearTimeout:void 0,xo=typeof Promise=="function"?Promise:void 0,nf=typeof queueMicrotask=="function"?queueMicrotask:typeof xo<"u"?function(e){return xo.resolve(null).then(e).catch(rf)}:kl;function rf(e){setTimeout(function(){throw e})}function Oi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),On(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);On(t)}function st(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+cn,Vn="__reactProps$"+cn,Ke="__reactContainer$"+cn,Sl="__reactEvents$"+cn,lf="__reactListeners$"+cn,af="__reactHandles$"+cn;function St(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wo(e);e!==null;){if(n=e[Ue])return n;e=wo(e)}return t}e=n,n=e.parentNode}return null}function Zn(e){return e=e[Ue]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ft(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function ai(e){return e[Vn]||null}var El=[],Bt=-1;function gt(e){return{current:e}}function D(e){0>Bt||(e.current=El[Bt],El[Bt]=null,Bt--)}function I(e,t){Bt++,El[Bt]=e.current,e.current=t}var mt={},le=gt(mt),pe=gt(!1),jt=mt;function en(e,t){var n=e.type.contextTypes;if(!n)return mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function me(e){return e=e.childContextTypes,e!=null}function Fr(){D(pe),D(le)}function ko(e,t,n){if(le.current!==mt)throw Error(w(168));I(le,t),I(pe,n)}function au(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(w(108,Hc(e)||"Unknown",i));return V({},n,r)}function Br(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mt,jt=le.current,I(le,e),I(pe,pe.current),!0}function So(e,t,n){var r=e.stateNode;if(!r)throw Error(w(169));n?(e=au(e,t,jt),r.__reactInternalMemoizedMergedChildContext=e,D(pe),D(le),I(le,e)):D(pe),I(pe,n)}var He=null,oi=!1,Di=!1;function ou(e){He===null?He=[e]:He.push(e)}function of(e){oi=!0,ou(e)}function vt(){if(!Di&&He!==null){Di=!0;var e=0,t=R;try{var n=He;for(R=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}He=null,oi=!1}catch(i){throw He!==null&&(He=He.slice(e+1)),Ms(ta,vt),i}finally{R=t,Di=!1}}return null}var Vt=[],Ht=0,Vr=null,Hr=0,Se=[],Ee=0,Pt=null,We=1,$e="";function wt(e,t){Vt[Ht++]=Hr,Vt[Ht++]=Vr,Vr=e,Hr=t}function su(e,t,n){Se[Ee++]=We,Se[Ee++]=$e,Se[Ee++]=Pt,Pt=e;var r=We;e=$e;var i=32-Le(r)-1;r&=~(1<<i),n+=1;var l=32-Le(t)+i;if(30<l){var a=i-i%5;l=(r&(1<<a)-1).toString(32),r>>=a,i-=a,We=1<<32-Le(t)+i|n<<i|r,$e=l+e}else We=1<<l|n<<i|r,$e=e}function ca(e){e.return!==null&&(wt(e,1),su(e,1,0))}function da(e){for(;e===Vr;)Vr=Vt[--Ht],Vt[Ht]=null,Hr=Vt[--Ht],Vt[Ht]=null;for(;e===Pt;)Pt=Se[--Ee],Se[Ee]=null,$e=Se[--Ee],Se[Ee]=null,We=Se[--Ee],Se[Ee]=null}var ye=null,ve=null,U=!1,Te=null;function uu(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Eo(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,ve=st(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pt!==null?{id:We,overflow:$e}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,ve=null,!0):!1;default:return!1}}function Nl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _l(e){if(U){var t=ve;if(t){var n=t;if(!Eo(e,t)){if(Nl(e))throw Error(w(418));t=st(n.nextSibling);var r=ye;t&&Eo(e,t)?uu(r,n):(e.flags=e.flags&-4097|2,U=!1,ye=e)}}else{if(Nl(e))throw Error(w(418));e.flags=e.flags&-4097|2,U=!1,ye=e}}}function No(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function pr(e){if(e!==ye)return!1;if(!U)return No(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!wl(e.type,e.memoizedProps)),t&&(t=ve)){if(Nl(e))throw cu(),Error(w(418));for(;t;)uu(e,t),t=st(t.nextSibling)}if(No(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ve=st(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ve=null}}else ve=ye?st(e.stateNode.nextSibling):null;return!0}function cu(){for(var e=ve;e;)e=st(e.nextSibling)}function tn(){ve=ye=null,U=!1}function fa(e){Te===null?Te=[e]:Te.push(e)}var sf=qe.ReactCurrentBatchConfig;function gn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,e));var i=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(a){var o=i.refs;a===null?delete o[l]:o[l]=a},t._stringRef=l,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function mr(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _o(e){var t=e._init;return t(e._payload)}function du(e){function t(d,c){if(e){var p=d.deletions;p===null?(d.deletions=[c],d.flags|=16):p.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function i(d,c){return d=ft(d,c),d.index=0,d.sibling=null,d}function l(d,c,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<c?(d.flags|=2,c):p):(d.flags|=2,c)):(d.flags|=1048576,c)}function a(d){return e&&d.alternate===null&&(d.flags|=2),d}function o(d,c,p,v){return c===null||c.tag!==6?(c=$i(p,d.mode,v),c.return=d,c):(c=i(c,p),c.return=d,c)}function u(d,c,p,v){var N=p.type;return N===It?g(d,c,p.props.children,v,p.key):c!==null&&(c.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Je&&_o(N)===c.type)?(v=i(c,p.props),v.ref=gn(d,c,p),v.return=d,v):(v=zr(p.type,p.key,p.props,null,d.mode,v),v.ref=gn(d,c,p),v.return=d,v)}function f(d,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Gi(p,d.mode,v),c.return=d,c):(c=i(c,p.children||[]),c.return=d,c)}function g(d,c,p,v,N){return c===null||c.tag!==7?(c=Ct(p,d.mode,v,N),c.return=d,c):(c=i(c,p),c.return=d,c)}function h(d,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=$i(""+c,d.mode,p),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case rr:return p=zr(c.type,c.key,c.props,null,d.mode,p),p.ref=gn(d,null,c),p.return=d,p;case Rt:return c=Gi(c,d.mode,p),c.return=d,c;case Je:var v=c._init;return h(d,v(c._payload),p)}if(wn(c)||dn(c))return c=Ct(c,d.mode,p,null),c.return=d,c;mr(d,c)}return null}function m(d,c,p,v){var N=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:o(d,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case rr:return p.key===N?u(d,c,p,v):null;case Rt:return p.key===N?f(d,c,p,v):null;case Je:return N=p._init,m(d,c,N(p._payload),v)}if(wn(p)||dn(p))return N!==null?null:g(d,c,p,v,null);mr(d,p)}return null}function x(d,c,p,v,N){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(p)||null,o(c,d,""+v,N);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case rr:return d=d.get(v.key===null?p:v.key)||null,u(c,d,v,N);case Rt:return d=d.get(v.key===null?p:v.key)||null,f(c,d,v,N);case Je:var y=v._init;return x(d,c,p,y(v._payload),N)}if(wn(v)||dn(v))return d=d.get(p)||null,g(c,d,v,N,null);mr(c,v)}return null}function k(d,c,p,v){for(var N=null,y=null,E=c,C=c=0,T=null;E!==null&&C<p.length;C++){E.index>C?(T=E,E=null):T=E.sibling;var P=m(d,E,p[C],v);if(P===null){E===null&&(E=T);break}e&&E&&P.alternate===null&&t(d,E),c=l(P,c,C),y===null?N=P:y.sibling=P,y=P,E=T}if(C===p.length)return n(d,E),U&&wt(d,C),N;if(E===null){for(;C<p.length;C++)E=h(d,p[C],v),E!==null&&(c=l(E,c,C),y===null?N=E:y.sibling=E,y=E);return U&&wt(d,C),N}for(E=r(d,E);C<p.length;C++)T=x(E,d,C,p[C],v),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?C:T.key),c=l(T,c,C),y===null?N=T:y.sibling=T,y=T);return e&&E.forEach(function(W){return t(d,W)}),U&&wt(d,C),N}function S(d,c,p,v){var N=dn(p);if(typeof N!="function")throw Error(w(150));if(p=N.call(p),p==null)throw Error(w(151));for(var y=N=null,E=c,C=c=0,T=null,P=p.next();E!==null&&!P.done;C++,P=p.next()){E.index>C?(T=E,E=null):T=E.sibling;var W=m(d,E,P.value,v);if(W===null){E===null&&(E=T);break}e&&E&&W.alternate===null&&t(d,E),c=l(W,c,C),y===null?N=W:y.sibling=W,y=W,E=T}if(P.done)return n(d,E),U&&wt(d,C),N;if(E===null){for(;!P.done;C++,P=p.next())P=h(d,P.value,v),P!==null&&(c=l(P,c,C),y===null?N=P:y.sibling=P,y=P);return U&&wt(d,C),N}for(E=r(d,E);!P.done;C++,P=p.next())P=x(E,d,C,P.value,v),P!==null&&(e&&P.alternate!==null&&E.delete(P.key===null?C:P.key),c=l(P,c,C),y===null?N=P:y.sibling=P,y=P);return e&&E.forEach(function(ae){return t(d,ae)}),U&&wt(d,C),N}function z(d,c,p,v){if(typeof p=="object"&&p!==null&&p.type===It&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case rr:e:{for(var N=p.key,y=c;y!==null;){if(y.key===N){if(N=p.type,N===It){if(y.tag===7){n(d,y.sibling),c=i(y,p.props.children),c.return=d,d=c;break e}}else if(y.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Je&&_o(N)===y.type){n(d,y.sibling),c=i(y,p.props),c.ref=gn(d,y,p),c.return=d,d=c;break e}n(d,y);break}else t(d,y);y=y.sibling}p.type===It?(c=Ct(p.props.children,d.mode,v,p.key),c.return=d,d=c):(v=zr(p.type,p.key,p.props,null,d.mode,v),v.ref=gn(d,c,p),v.return=d,d=v)}return a(d);case Rt:e:{for(y=p.key;c!==null;){if(c.key===y)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(d,c.sibling),c=i(c,p.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Gi(p,d.mode,v),c.return=d,d=c}return a(d);case Je:return y=p._init,z(d,c,y(p._payload),v)}if(wn(p))return k(d,c,p,v);if(dn(p))return S(d,c,p,v);mr(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(d,c.sibling),c=i(c,p),c.return=d,d=c):(n(d,c),c=$i(p,d.mode,v),c.return=d,d=c),a(d)):n(d,c)}return z}var nn=du(!0),fu=du(!1),Wr=gt(null),$r=null,Wt=null,pa=null;function ma(){pa=Wt=$r=null}function ha(e){var t=Wr.current;D(Wr),e._currentValue=t}function Cl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function qt(e,t){$r=e,pa=Wt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(fe=!0),e.firstContext=null)}function je(e){var t=e._currentValue;if(pa!==e)if(e={context:e,memoizedValue:t,next:null},Wt===null){if($r===null)throw Error(w(308));Wt=e,$r.dependencies={lanes:0,firstContext:e}}else Wt=Wt.next=e;return t}var Et=null;function ga(e){Et===null?Et=[e]:Et.push(e)}function pu(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ga(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var et=!1;function va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,L&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ye(e,n)}return i=r.interleaved,i===null?(t.next=t,ga(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ye(e,n)}function Nr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,na(e,n)}}function Co(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=a:l=l.next=a,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Gr(e,t,n,r){var i=e.updateQueue;et=!1;var l=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var u=o,f=u.next;u.next=null,a===null?l=f:a.next=f,a=u;var g=e.alternate;g!==null&&(g=g.updateQueue,o=g.lastBaseUpdate,o!==a&&(o===null?g.firstBaseUpdate=f:o.next=f,g.lastBaseUpdate=u))}if(l!==null){var h=i.baseState;a=0,g=f=u=null,o=l;do{var m=o.lane,x=o.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:x,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var k=e,S=o;switch(m=t,x=n,S.tag){case 1:if(k=S.payload,typeof k=="function"){h=k.call(x,h,m);break e}h=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=S.payload,m=typeof k=="function"?k.call(x,h,m):k,m==null)break e;h=V({},h,m);break e;case 2:et=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[o]:m.push(o))}else x={eventTime:x,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},g===null?(f=g=x,u=h):g=g.next=x,a|=m;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;m=o,o=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(g===null&&(u=h),i.baseState=u,i.firstBaseUpdate=f,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);zt|=a,e.lanes=a,e.memoizedState=h}}function jo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var Jn={},Be=gt(Jn),Hn=gt(Jn),Wn=gt(Jn);function Nt(e){if(e===Jn)throw Error(w(174));return e}function ya(e,t){switch(I(Wn,t),I(Hn,e),I(Be,Jn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:al(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=al(t,e)}D(Be),I(Be,t)}function rn(){D(Be),D(Hn),D(Wn)}function hu(e){Nt(Wn.current);var t=Nt(Be.current),n=al(t,e.type);t!==n&&(I(Hn,e),I(Be,n))}function xa(e){Hn.current===e&&(D(Be),D(Hn))}var F=gt(0);function Qr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ui=[];function wa(){for(var e=0;e<Ui.length;e++)Ui[e]._workInProgressVersionPrimary=null;Ui.length=0}var _r=qe.ReactCurrentDispatcher,Fi=qe.ReactCurrentBatchConfig,At=0,B=null,K=null,q=null,Kr=!1,Pn=!1,$n=0,uf=0;function ne(){throw Error(w(321))}function ka(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ie(e[n],t[n]))return!1;return!0}function Sa(e,t,n,r,i,l){if(At=l,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_r.current=e===null||e.memoizedState===null?pf:mf,e=n(r,i),Pn){l=0;do{if(Pn=!1,$n=0,25<=l)throw Error(w(301));l+=1,q=K=null,t.updateQueue=null,_r.current=hf,e=n(r,i)}while(Pn)}if(_r.current=Yr,t=K!==null&&K.next!==null,At=0,q=K=B=null,Kr=!1,t)throw Error(w(300));return e}function Ea(){var e=$n!==0;return $n=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?B.memoizedState=q=e:q=q.next=e,q}function Pe(){if(K===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=q===null?B.memoizedState:q.next;if(t!==null)q=t,K=e;else{if(e===null)throw Error(w(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},q===null?B.memoizedState=q=e:q=q.next=e}return q}function Gn(e,t){return typeof t=="function"?t(e):t}function Bi(e){var t=Pe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=K,i=r.baseQueue,l=n.pending;if(l!==null){if(i!==null){var a=i.next;i.next=l.next,l.next=a}r.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,r=r.baseState;var o=a=null,u=null,f=l;do{var g=f.lane;if((At&g)===g)u!==null&&(u=u.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var h={lane:g,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};u===null?(o=u=h,a=r):u=u.next=h,B.lanes|=g,zt|=g}f=f.next}while(f!==null&&f!==l);u===null?a=r:u.next=o,Ie(r,t.memoizedState)||(fe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do l=i.lane,B.lanes|=l,zt|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Vi(e){var t=Pe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do l=e(l,a.action),a=a.next;while(a!==i);Ie(l,t.memoizedState)||(fe=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function gu(){}function vu(e,t){var n=B,r=Pe(),i=t(),l=!Ie(r.memoizedState,i);if(l&&(r.memoizedState=i,fe=!0),r=r.queue,Na(wu.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,Qn(9,xu.bind(null,n,r,i,t),void 0,null),Z===null)throw Error(w(349));At&30||yu(n,t,i)}return i}function yu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xu(e,t,n,r){t.value=n,t.getSnapshot=r,ku(t)&&Su(e)}function wu(e,t,n){return n(function(){ku(t)&&Su(e)})}function ku(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ie(e,n)}catch{return!0}}function Su(e){var t=Ye(e,1);t!==null&&Re(t,e,1,-1)}function Po(e){var t=De();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:e},t.queue=e,e=e.dispatch=ff.bind(null,B,e),[t.memoizedState,e]}function Qn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Eu(){return Pe().memoizedState}function Cr(e,t,n,r){var i=De();B.flags|=e,i.memoizedState=Qn(1|t,n,void 0,r===void 0?null:r)}function si(e,t,n,r){var i=Pe();r=r===void 0?null:r;var l=void 0;if(K!==null){var a=K.memoizedState;if(l=a.destroy,r!==null&&ka(r,a.deps)){i.memoizedState=Qn(t,n,l,r);return}}B.flags|=e,i.memoizedState=Qn(1|t,n,l,r)}function Ao(e,t){return Cr(8390656,8,e,t)}function Na(e,t){return si(2048,8,e,t)}function Nu(e,t){return si(4,2,e,t)}function _u(e,t){return si(4,4,e,t)}function Cu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ju(e,t,n){return n=n!=null?n.concat([e]):null,si(4,4,Cu.bind(null,t,e),n)}function _a(){}function Pu(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ka(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Au(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ka(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zu(e,t,n){return At&21?(Ie(n,t)||(n=Rs(),B.lanes|=n,zt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=n)}function cf(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var r=Fi.transition;Fi.transition={};try{e(!1),t()}finally{R=n,Fi.transition=r}}function bu(){return Pe().memoizedState}function df(e,t,n){var r=dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mu(e))Tu(t,n);else if(n=pu(e,t,n,r),n!==null){var i=se();Re(n,e,r,i),Lu(n,t,r)}}function ff(e,t,n){var r=dt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mu(e))Tu(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,o=l(a,n);if(i.hasEagerState=!0,i.eagerState=o,Ie(o,a)){var u=t.interleaved;u===null?(i.next=i,ga(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=pu(e,t,i,r),n!==null&&(i=se(),Re(n,e,r,i),Lu(n,t,r))}}function Mu(e){var t=e.alternate;return e===B||t!==null&&t===B}function Tu(e,t){Pn=Kr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,na(e,n)}}var Yr={readContext:je,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},pf={readContext:je,useCallback:function(e,t){return De().memoizedState=[e,t===void 0?null:t],e},useContext:je,useEffect:Ao,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Cr(4194308,4,Cu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cr(4,2,e,t)},useMemo:function(e,t){var n=De();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=De();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=df.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=De();return e={current:e},t.memoizedState=e},useState:Po,useDebugValue:_a,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=Po(!1),t=e[0];return e=cf.bind(null,e[1]),De().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=B,i=De();if(U){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),Z===null)throw Error(w(349));At&30||yu(r,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Ao(wu.bind(null,r,l,e),[e]),r.flags|=2048,Qn(9,xu.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=De(),t=Z.identifierPrefix;if(U){var n=$e,r=We;n=(r&~(1<<32-Le(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$n++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=uf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},mf={readContext:je,useCallback:Pu,useContext:je,useEffect:Na,useImperativeHandle:ju,useInsertionEffect:Nu,useLayoutEffect:_u,useMemo:Au,useReducer:Bi,useRef:Eu,useState:function(){return Bi(Gn)},useDebugValue:_a,useDeferredValue:function(e){var t=Pe();return zu(t,K.memoizedState,e)},useTransition:function(){var e=Bi(Gn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:gu,useSyncExternalStore:vu,useId:bu,unstable_isNewReconciler:!1},hf={readContext:je,useCallback:Pu,useContext:je,useEffect:Na,useImperativeHandle:ju,useInsertionEffect:Nu,useLayoutEffect:_u,useMemo:Au,useReducer:Vi,useRef:Eu,useState:function(){return Vi(Gn)},useDebugValue:_a,useDeferredValue:function(e){var t=Pe();return K===null?t.memoizedState=e:zu(t,K.memoizedState,e)},useTransition:function(){var e=Vi(Gn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:gu,useSyncExternalStore:vu,useId:bu,unstable_isNewReconciler:!1};function be(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function jl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ui={isMounted:function(e){return(e=e._reactInternals)?Tt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=se(),i=dt(e),l=Ge(r,i);l.payload=t,n!=null&&(l.callback=n),t=ut(e,l,i),t!==null&&(Re(t,e,i,r),Nr(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=se(),i=dt(e),l=Ge(r,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ut(e,l,i),t!==null&&(Re(t,e,i,r),Nr(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=se(),r=dt(e),i=Ge(n,r);i.tag=2,t!=null&&(i.callback=t),t=ut(e,i,r),t!==null&&(Re(t,e,r,n),Nr(t,e,r))}};function zo(e,t,n,r,i,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,a):t.prototype&&t.prototype.isPureReactComponent?!Un(n,r)||!Un(i,l):!0}function Ru(e,t,n){var r=!1,i=mt,l=t.contextType;return typeof l=="object"&&l!==null?l=je(l):(i=me(t)?jt:le.current,r=t.contextTypes,l=(r=r!=null)?en(e,i):mt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ui,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function bo(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ui.enqueueReplaceState(t,t.state,null)}function Pl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},va(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=je(l):(l=me(t)?jt:le.current,i.context=en(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(jl(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ui.enqueueReplaceState(i,i.state,null),Gr(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ln(e,t){try{var n="",r=t;do n+=Vc(r),r=r.return;while(r);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function Hi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Al(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gf=typeof WeakMap=="function"?WeakMap:Map;function Iu(e,t,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qr||(qr=!0,Ul=r),Al(e,t)},n}function Ou(e,t,n){n=Ge(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Al(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Al(e,t),typeof r!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Mo(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gf;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=zf.bind(null,e,t,n),t.then(e,e))}function To(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Lo(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ge(-1,1),t.tag=2,ut(n,t,1))),n.lanes|=1),e)}var vf=qe.ReactCurrentOwner,fe=!1;function oe(e,t,n,r){t.child=e===null?fu(t,null,n,r):nn(t,e.child,n,r)}function Ro(e,t,n,r,i){n=n.render;var l=t.ref;return qt(t,i),r=Sa(e,t,n,r,l,i),n=Ea(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xe(e,t,i)):(U&&n&&ca(t),t.flags|=1,oe(e,t,r,i),t.child)}function Io(e,t,n,r,i){if(e===null){var l=n.type;return typeof l=="function"&&!Ta(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Du(e,t,l,r,i)):(e=zr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var a=l.memoizedProps;if(n=n.compare,n=n!==null?n:Un,n(a,r)&&e.ref===t.ref)return Xe(e,t,i)}return t.flags|=1,e=ft(l,r),e.ref=t.ref,e.return=t,t.child=e}function Du(e,t,n,r,i){if(e!==null){var l=e.memoizedProps;if(Un(l,r)&&e.ref===t.ref)if(fe=!1,t.pendingProps=r=l,(e.lanes&i)!==0)e.flags&131072&&(fe=!0);else return t.lanes=e.lanes,Xe(e,t,i)}return zl(e,t,n,r,i)}function Uu(e,t,n){var r=t.pendingProps,i=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Gt,ge),ge|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(Gt,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,I(Gt,ge),ge|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,I(Gt,ge),ge|=r;return oe(e,t,i,n),t.child}function Fu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zl(e,t,n,r,i){var l=me(n)?jt:le.current;return l=en(t,l),qt(t,i),n=Sa(e,t,n,r,l,i),r=Ea(),e!==null&&!fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Xe(e,t,i)):(U&&r&&ca(t),t.flags|=1,oe(e,t,n,i),t.child)}function Oo(e,t,n,r,i){if(me(n)){var l=!0;Br(t)}else l=!1;if(qt(t,i),t.stateNode===null)jr(e,t),Ru(t,n,r),Pl(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,o=t.memoizedProps;a.props=o;var u=a.context,f=n.contextType;typeof f=="object"&&f!==null?f=je(f):(f=me(n)?jt:le.current,f=en(t,f));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||u!==f)&&bo(t,a,r,f),et=!1;var m=t.memoizedState;a.state=m,Gr(t,r,a,i),u=t.memoizedState,o!==r||m!==u||pe.current||et?(typeof g=="function"&&(jl(t,n,g,r),u=t.memoizedState),(o=et||zo(t,n,o,r,m,u,f))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=f,r=o):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,mu(e,t),o=t.memoizedProps,f=t.type===t.elementType?o:be(t.type,o),a.props=f,h=t.pendingProps,m=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=je(u):(u=me(n)?jt:le.current,u=en(t,u));var x=n.getDerivedStateFromProps;(g=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||m!==u)&&bo(t,a,r,u),et=!1,m=t.memoizedState,a.state=m,Gr(t,r,a,i);var k=t.memoizedState;o!==h||m!==k||pe.current||et?(typeof x=="function"&&(jl(t,n,x,r),k=t.memoizedState),(f=et||zo(t,n,f,r,m,k,u)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,k,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,k,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),a.props=r,a.state=k,a.context=u,r=f):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return bl(e,t,n,r,l,i)}function bl(e,t,n,r,i,l){Fu(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&So(t,n,!1),Xe(e,t,l);r=t.stateNode,vf.current=t;var o=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=nn(t,e.child,null,l),t.child=nn(t,null,o,l)):oe(e,t,o,l),t.memoizedState=r.state,i&&So(t,n,!0),t.child}function Bu(e){var t=e.stateNode;t.pendingContext?ko(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ko(e,t.context,!1),ya(e,t.containerInfo)}function Do(e,t,n,r,i){return tn(),fa(i),t.flags|=256,oe(e,t,n,r),t.child}var Ml={dehydrated:null,treeContext:null,retryLane:0};function Tl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Vu(e,t,n){var r=t.pendingProps,i=F.current,l=!1,a=(t.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),I(F,i&1),e===null)return _l(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,l?(r=t.mode,l=t.child,a={mode:"hidden",children:a},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=a):l=fi(a,r,0,null),e=Ct(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Tl(n),t.memoizedState=Ml,e):Ca(t,a));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return yf(e,t,a,r,o,i,n);if(l){l=r.fallback,a=t.mode,i=e.child,o=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ft(i,u),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?l=ft(o,l):(l=Ct(l,a,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,a=e.child.memoizedState,a=a===null?Tl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},l.memoizedState=a,l.childLanes=e.childLanes&~n,t.memoizedState=Ml,r}return l=e.child,e=l.sibling,r=ft(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ca(e,t){return t=fi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hr(e,t,n,r){return r!==null&&fa(r),nn(t,e.child,null,n),e=Ca(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yf(e,t,n,r,i,l,a){if(n)return t.flags&256?(t.flags&=-257,r=Hi(Error(w(422))),hr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,i=t.mode,r=fi({mode:"visible",children:r.children},i,0,null),l=Ct(l,i,a,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&nn(t,e.child,null,a),t.child.memoizedState=Tl(a),t.memoizedState=Ml,l);if(!(t.mode&1))return hr(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,l=Error(w(419)),r=Hi(l,r,void 0),hr(e,t,a,r)}if(o=(a&e.childLanes)!==0,fe||o){if(r=Z,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Ye(e,i),Re(r,e,i,-1))}return Ma(),r=Hi(Error(w(421))),hr(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=bf.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,ve=st(i.nextSibling),ye=t,U=!0,Te=null,e!==null&&(Se[Ee++]=We,Se[Ee++]=$e,Se[Ee++]=Pt,We=e.id,$e=e.overflow,Pt=t),t=Ca(t,r.children),t.flags|=4096,t)}function Uo(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Cl(e.return,t,n)}function Wi(e,t,n,r,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=i)}function Hu(e,t,n){var r=t.pendingProps,i=r.revealOrder,l=r.tail;if(oe(e,t,r.children,n),r=F.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uo(e,n,t);else if(e.tag===19)Uo(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(I(F,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Qr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Wi(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Qr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Wi(t,!0,n,null,l);break;case"together":Wi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function jr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function xf(e,t,n){switch(t.tag){case 3:Bu(t),tn();break;case 5:hu(t);break;case 1:me(t.type)&&Br(t);break;case 4:ya(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;I(Wr,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(I(F,F.current&1),t.flags|=128,null):n&t.child.childLanes?Vu(e,t,n):(I(F,F.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);I(F,F.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Hu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(F,F.current),r)break;return null;case 22:case 23:return t.lanes=0,Uu(e,t,n)}return Xe(e,t,n)}var Wu,Ll,$u,Gu;Wu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ll=function(){};$u=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Nt(Be.current);var l=null;switch(n){case"input":i=nl(e,i),r=nl(e,r),l=[];break;case"select":i=V({},i,{value:void 0}),r=V({},r,{value:void 0}),l=[];break;case"textarea":i=ll(e,i),r=ll(e,r),l=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ur)}ol(n,r);var a;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var o=i[f];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Mn.hasOwnProperty(f)?l||(l=[]):(l=l||[]).push(f,null));for(f in r){var u=r[f];if(o=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&u!==o&&(u!=null||o!=null))if(f==="style")if(o){for(a in o)!o.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&o[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(l||(l=[]),l.push(f,n)),n=u;else f==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,o=o?o.__html:void 0,u!=null&&o!==u&&(l=l||[]).push(f,u)):f==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(f,""+u):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Mn.hasOwnProperty(f)?(u!=null&&f==="onScroll"&&O("scroll",e),l||o===u||(l=[])):(l=l||[]).push(f,u))}n&&(l=l||[]).push("style",n);var f=l;(t.updateQueue=f)&&(t.flags|=4)}};Gu=function(e,t,n,r){n!==r&&(t.flags|=4)};function vn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wf(e,t,n){var r=t.pendingProps;switch(da(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return me(t.type)&&Fr(),re(t),null;case 3:return r=t.stateNode,rn(),D(pe),D(le),wa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(pr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Te!==null&&(Vl(Te),Te=null))),Ll(e,t),re(t),null;case 5:xa(t);var i=Nt(Wn.current);if(n=t.type,e!==null&&t.stateNode!=null)$u(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(w(166));return re(t),null}if(e=Nt(Be.current),pr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Ue]=t,r[Vn]=l,e=(t.mode&1)!==0,n){case"dialog":O("cancel",r),O("close",r);break;case"iframe":case"object":case"embed":O("load",r);break;case"video":case"audio":for(i=0;i<Sn.length;i++)O(Sn[i],r);break;case"source":O("error",r);break;case"img":case"image":case"link":O("error",r),O("load",r);break;case"details":O("toggle",r);break;case"input":Qa(r,l),O("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},O("invalid",r);break;case"textarea":Ya(r,l),O("invalid",r)}ol(n,l),i=null;for(var a in l)if(l.hasOwnProperty(a)){var o=l[a];a==="children"?typeof o=="string"?r.textContent!==o&&(l.suppressHydrationWarning!==!0&&fr(r.textContent,o,e),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&fr(r.textContent,o,e),i=["children",""+o]):Mn.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&O("scroll",r)}switch(n){case"input":ir(r),Ka(r,l,!0);break;case"textarea":ir(r),Xa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Ur)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ws(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ue]=t,e[Vn]=r,Wu(e,t,!1,!1),t.stateNode=e;e:{switch(a=sl(n,r),n){case"dialog":O("cancel",e),O("close",e),i=r;break;case"iframe":case"object":case"embed":O("load",e),i=r;break;case"video":case"audio":for(i=0;i<Sn.length;i++)O(Sn[i],e);i=r;break;case"source":O("error",e),i=r;break;case"img":case"image":case"link":O("error",e),O("load",e),i=r;break;case"details":O("toggle",e),i=r;break;case"input":Qa(e,r),i=nl(e,r),O("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=V({},r,{value:void 0}),O("invalid",e);break;case"textarea":Ya(e,r),i=ll(e,r),O("invalid",e);break;default:i=r}ol(n,i),o=i;for(l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="style"?Es(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ks(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Tn(e,u):typeof u=="number"&&Tn(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Mn.hasOwnProperty(l)?u!=null&&l==="onScroll"&&O("scroll",e):u!=null&&Xl(e,l,u,a))}switch(n){case"input":ir(e),Ka(e,r,!1);break;case"textarea":ir(e),Xa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?Qt(e,!!r.multiple,l,!1):r.defaultValue!=null&&Qt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ur)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return re(t),null;case 6:if(e&&t.stateNode!=null)Gu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(w(166));if(n=Nt(Wn.current),Nt(Be.current),pr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ue]=t,(l=r.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:fr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return re(t),null;case 13:if(D(F),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ve!==null&&t.mode&1&&!(t.flags&128))cu(),tn(),t.flags|=98560,l=!1;else if(l=pr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(w(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(w(317));l[Ue]=t}else tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;re(t),l=!1}else Te!==null&&(Vl(Te),Te=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||F.current&1?Y===0&&(Y=3):Ma())),t.updateQueue!==null&&(t.flags|=4),re(t),null);case 4:return rn(),Ll(e,t),e===null&&Fn(t.stateNode.containerInfo),re(t),null;case 10:return ha(t.type._context),re(t),null;case 17:return me(t.type)&&Fr(),re(t),null;case 19:if(D(F),l=t.memoizedState,l===null)return re(t),null;if(r=(t.flags&128)!==0,a=l.rendering,a===null)if(r)vn(l,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Qr(e),a!==null){for(t.flags|=128,vn(l,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,a=l.alternate,a===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,e=a.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(F,F.current&1|2),t.child}e=e.sibling}l.tail!==null&&G()>an&&(t.flags|=128,r=!0,vn(l,!1),t.lanes=4194304)}else{if(!r)if(e=Qr(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),vn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!a.alternate&&!U)return re(t),null}else 2*G()-l.renderingStartTime>an&&n!==1073741824&&(t.flags|=128,r=!0,vn(l,!1),t.lanes=4194304);l.isBackwards?(a.sibling=t.child,t.child=a):(n=l.last,n!==null?n.sibling=a:t.child=a,l.last=a)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=G(),t.sibling=null,n=F.current,I(F,r?n&1|2:n&1),t):(re(t),null);case 22:case 23:return ba(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ge&1073741824&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function kf(e,t){switch(da(t),t.tag){case 1:return me(t.type)&&Fr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rn(),D(pe),D(le),wa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xa(t),null;case 13:if(D(F),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(F),null;case 4:return rn(),null;case 10:return ha(t.type._context),null;case 22:case 23:return ba(),null;case 24:return null;default:return null}}var gr=!1,ie=!1,Sf=typeof WeakSet=="function"?WeakSet:Set,_=null;function $t(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function Rl(e,t,n){try{n()}catch(r){H(e,t,r)}}var Fo=!1;function Ef(e,t){if(yl=Ir,e=qs(),ua(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var a=0,o=-1,u=-1,f=0,g=0,h=e,m=null;t:for(;;){for(var x;h!==n||i!==0&&h.nodeType!==3||(o=a+i),h!==l||r!==0&&h.nodeType!==3||(u=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(x=h.firstChild)!==null;)m=h,h=x;for(;;){if(h===e)break t;if(m===n&&++f===i&&(o=a),m===l&&++g===r&&(u=a),(x=h.nextSibling)!==null)break;h=m,m=h.parentNode}h=x}n=o===-1||u===-1?null:{start:o,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(xl={focusedElem:e,selectionRange:n},Ir=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var S=k.memoizedProps,z=k.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?S:be(t.type,S),z);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(v){H(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return k=Fo,Fo=!1,k}function An(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Rl(t,n,l)}i=i.next}while(i!==r)}}function ci(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Il(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qu(e){var t=e.alternate;t!==null&&(e.alternate=null,Qu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[Vn],delete t[Sl],delete t[lf],delete t[af])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ku(e){return e.tag===5||e.tag===3||e.tag===4}function Bo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ku(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ol(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ur));else if(r!==4&&(e=e.child,e!==null))for(Ol(e,t,n),e=e.sibling;e!==null;)Ol(e,t,n),e=e.sibling}function Dl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Dl(e,t,n),e=e.sibling;e!==null;)Dl(e,t,n),e=e.sibling}var J=null,Me=!1;function Ze(e,t,n){for(n=n.child;n!==null;)Yu(e,t,n),n=n.sibling}function Yu(e,t,n){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(ni,n)}catch{}switch(n.tag){case 5:ie||$t(n,t);case 6:var r=J,i=Me;J=null,Ze(e,t,n),J=r,Me=i,J!==null&&(Me?(e=J,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):J.removeChild(n.stateNode));break;case 18:J!==null&&(Me?(e=J,n=n.stateNode,e.nodeType===8?Oi(e.parentNode,n):e.nodeType===1&&Oi(e,n),On(e)):Oi(J,n.stateNode));break;case 4:r=J,i=Me,J=n.stateNode.containerInfo,Me=!0,Ze(e,t,n),J=r,Me=i;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var l=i,a=l.destroy;l=l.tag,a!==void 0&&(l&2||l&4)&&Rl(n,t,a),i=i.next}while(i!==r)}Ze(e,t,n);break;case 1:if(!ie&&($t(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){H(n,t,o)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,Ze(e,t,n),ie=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function Vo(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Sf),t.forEach(function(r){var i=Mf.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var l=e,a=t,o=a;e:for(;o!==null;){switch(o.tag){case 5:J=o.stateNode,Me=!1;break e;case 3:J=o.stateNode.containerInfo,Me=!0;break e;case 4:J=o.stateNode.containerInfo,Me=!0;break e}o=o.return}if(J===null)throw Error(w(160));Yu(l,a,i),J=null,Me=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(f){H(i,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xu(t,e),t=t.sibling}function Xu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Oe(e),r&4){try{An(3,e,e.return),ci(3,e)}catch(S){H(e,e.return,S)}try{An(5,e,e.return)}catch(S){H(e,e.return,S)}}break;case 1:ze(t,e),Oe(e),r&512&&n!==null&&$t(n,n.return);break;case 5:if(ze(t,e),Oe(e),r&512&&n!==null&&$t(n,n.return),e.flags&32){var i=e.stateNode;try{Tn(i,"")}catch(S){H(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,a=n!==null?n.memoizedProps:l,o=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&ys(i,l),sl(o,a);var f=sl(o,l);for(a=0;a<u.length;a+=2){var g=u[a],h=u[a+1];g==="style"?Es(i,h):g==="dangerouslySetInnerHTML"?ks(i,h):g==="children"?Tn(i,h):Xl(i,g,h,f)}switch(o){case"input":rl(i,l);break;case"textarea":xs(i,l);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?Qt(i,!!l.multiple,x,!1):m!==!!l.multiple&&(l.defaultValue!=null?Qt(i,!!l.multiple,l.defaultValue,!0):Qt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Vn]=l}catch(S){H(e,e.return,S)}}break;case 6:if(ze(t,e),Oe(e),r&4){if(e.stateNode===null)throw Error(w(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(S){H(e,e.return,S)}}break;case 3:if(ze(t,e),Oe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{On(t.containerInfo)}catch(S){H(e,e.return,S)}break;case 4:ze(t,e),Oe(e);break;case 13:ze(t,e),Oe(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Aa=G())),r&4&&Vo(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(f=ie)||g,ze(t,e),ie=f):ze(t,e),Oe(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!g&&e.mode&1)for(_=e,g=e.child;g!==null;){for(h=_=g;_!==null;){switch(m=_,x=m.child,m.tag){case 0:case 11:case 14:case 15:An(4,m,m.return);break;case 1:$t(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(S){H(r,n,S)}}break;case 5:$t(m,m.return);break;case 22:if(m.memoizedState!==null){Wo(h);continue}}x!==null?(x.return=m,_=x):Wo(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{i=h.stateNode,f?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=h.stateNode,u=h.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,o.style.display=Ss("display",a))}catch(S){H(e,e.return,S)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=f?"":h.memoizedProps}catch(S){H(e,e.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ze(t,e),Oe(e),r&4&&Vo(e);break;case 21:break;default:ze(t,e),Oe(e)}}function Oe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ku(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Tn(i,""),r.flags&=-33);var l=Bo(e);Dl(e,l,i);break;case 3:case 4:var a=r.stateNode.containerInfo,o=Bo(e);Ol(e,o,a);break;default:throw Error(w(161))}}catch(u){H(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nf(e,t,n){_=e,qu(e)}function qu(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,l=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||gr;if(!a){var o=i.alternate,u=o!==null&&o.memoizedState!==null||ie;o=gr;var f=ie;if(gr=a,(ie=u)&&!f)for(_=i;_!==null;)a=_,u=a.child,a.tag===22&&a.memoizedState!==null?$o(i):u!==null?(u.return=a,_=u):$o(i);for(;l!==null;)_=l,qu(l),l=l.sibling;_=i,gr=o,ie=f}Ho(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,_=l):Ho(e)}}function Ho(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||ci(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:be(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&jo(t,l,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}jo(t,a,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var g=f.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&On(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ie||t.flags&512&&Il(t)}catch(m){H(t,t.return,m)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function Wo(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function $o(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ci(4,t)}catch(u){H(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){H(t,i,u)}}var l=t.return;try{Il(t)}catch(u){H(t,l,u)}break;case 5:var a=t.return;try{Il(t)}catch(u){H(t,a,u)}}}catch(u){H(t,t.return,u)}if(t===e){_=null;break}var o=t.sibling;if(o!==null){o.return=t.return,_=o;break}_=t.return}}var _f=Math.ceil,Xr=qe.ReactCurrentDispatcher,ja=qe.ReactCurrentOwner,Ce=qe.ReactCurrentBatchConfig,L=0,Z=null,Q=null,ee=0,ge=0,Gt=gt(0),Y=0,Kn=null,zt=0,di=0,Pa=0,zn=null,de=null,Aa=0,an=1/0,Ve=null,qr=!1,Ul=null,ct=null,vr=!1,it=null,Zr=0,bn=0,Fl=null,Pr=-1,Ar=0;function se(){return L&6?G():Pr!==-1?Pr:Pr=G()}function dt(e){return e.mode&1?L&2&&ee!==0?ee&-ee:sf.transition!==null?(Ar===0&&(Ar=Rs()),Ar):(e=R,e!==0||(e=window.event,e=e===void 0?16:Vs(e.type)),e):1}function Re(e,t,n,r){if(50<bn)throw bn=0,Fl=null,Error(w(185));Xn(e,n,r),(!(L&2)||e!==Z)&&(e===Z&&(!(L&2)&&(di|=n),Y===4&&nt(e,ee)),he(e,r),n===1&&L===0&&!(t.mode&1)&&(an=G()+500,oi&&vt()))}function he(e,t){var n=e.callbackNode;od(e,t);var r=Rr(e,e===Z?ee:0);if(r===0)n!==null&&Ja(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ja(n),t===1)e.tag===0?of(Go.bind(null,e)):ou(Go.bind(null,e)),nf(function(){!(L&6)&&vt()}),n=null;else{switch(Is(r)){case 1:n=ta;break;case 4:n=Ts;break;case 16:n=Lr;break;case 536870912:n=Ls;break;default:n=Lr}n=lc(n,Zu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Zu(e,t){if(Pr=-1,Ar=0,L&6)throw Error(w(327));var n=e.callbackNode;if(Zt()&&e.callbackNode!==n)return null;var r=Rr(e,e===Z?ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Jr(e,r);else{t=r;var i=L;L|=2;var l=ec();(Z!==e||ee!==t)&&(Ve=null,an=G()+500,_t(e,t));do try{Pf();break}catch(o){Ju(e,o)}while(!0);ma(),Xr.current=l,L=i,Q!==null?t=0:(Z=null,ee=0,t=Y)}if(t!==0){if(t===2&&(i=pl(e),i!==0&&(r=i,t=Bl(e,i))),t===1)throw n=Kn,_t(e,0),nt(e,r),he(e,G()),n;if(t===6)nt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Cf(i)&&(t=Jr(e,r),t===2&&(l=pl(e),l!==0&&(r=l,t=Bl(e,l))),t===1))throw n=Kn,_t(e,0),nt(e,r),he(e,G()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(w(345));case 2:kt(e,de,Ve);break;case 3:if(nt(e,r),(r&130023424)===r&&(t=Aa+500-G(),10<t)){if(Rr(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=kl(kt.bind(null,e,de,Ve),t);break}kt(e,de,Ve);break;case 4:if(nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Le(r);l=1<<a,a=t[a],a>i&&(i=a),r&=~l}if(r=i,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_f(r/1960))-r,10<r){e.timeoutHandle=kl(kt.bind(null,e,de,Ve),r);break}kt(e,de,Ve);break;case 5:kt(e,de,Ve);break;default:throw Error(w(329))}}}return he(e,G()),e.callbackNode===n?Zu.bind(null,e):null}function Bl(e,t){var n=zn;return e.current.memoizedState.isDehydrated&&(_t(e,t).flags|=256),e=Jr(e,t),e!==2&&(t=de,de=n,t!==null&&Vl(t)),e}function Vl(e){de===null?de=e:de.push.apply(de,e)}function Cf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],l=i.getSnapshot;i=i.value;try{if(!Ie(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(e,t){for(t&=~Pa,t&=~di,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Le(t),r=1<<n;e[n]=-1,t&=~r}}function Go(e){if(L&6)throw Error(w(327));Zt();var t=Rr(e,0);if(!(t&1))return he(e,G()),null;var n=Jr(e,t);if(e.tag!==0&&n===2){var r=pl(e);r!==0&&(t=r,n=Bl(e,r))}if(n===1)throw n=Kn,_t(e,0),nt(e,t),he(e,G()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kt(e,de,Ve),he(e,G()),null}function za(e,t){var n=L;L|=1;try{return e(t)}finally{L=n,L===0&&(an=G()+500,oi&&vt())}}function bt(e){it!==null&&it.tag===0&&!(L&6)&&Zt();var t=L;L|=1;var n=Ce.transition,r=R;try{if(Ce.transition=null,R=1,e)return e()}finally{R=r,Ce.transition=n,L=t,!(L&6)&&vt()}}function ba(){ge=Gt.current,D(Gt)}function _t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,tf(n)),Q!==null)for(n=Q.return;n!==null;){var r=n;switch(da(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fr();break;case 3:rn(),D(pe),D(le),wa();break;case 5:xa(r);break;case 4:rn();break;case 13:D(F);break;case 19:D(F);break;case 10:ha(r.type._context);break;case 22:case 23:ba()}n=n.return}if(Z=e,Q=e=ft(e.current,null),ee=ge=t,Y=0,Kn=null,Pa=di=zt=0,de=zn=null,Et!==null){for(t=0;t<Et.length;t++)if(n=Et[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,l=n.pending;if(l!==null){var a=l.next;l.next=i,r.next=a}n.pending=r}Et=null}return e}function Ju(e,t){do{var n=Q;try{if(ma(),_r.current=Yr,Kr){for(var r=B.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Kr=!1}if(At=0,q=K=B=null,Pn=!1,$n=0,ja.current=null,n===null||n.return===null){Y=1,Kn=t,Q=null;break}e:{var l=e,a=n.return,o=n,u=t;if(t=ee,o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var f=u,g=o,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=To(a);if(x!==null){x.flags&=-257,Lo(x,a,o,l,t),x.mode&1&&Mo(l,f,t),t=x,u=f;var k=t.updateQueue;if(k===null){var S=new Set;S.add(u),t.updateQueue=S}else k.add(u);break e}else{if(!(t&1)){Mo(l,f,t),Ma();break e}u=Error(w(426))}}else if(U&&o.mode&1){var z=To(a);if(z!==null){!(z.flags&65536)&&(z.flags|=256),Lo(z,a,o,l,t),fa(ln(u,o));break e}}l=u=ln(u,o),Y!==4&&(Y=2),zn===null?zn=[l]:zn.push(l),l=a;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=Iu(l,u,t);Co(l,d);break e;case 1:o=u;var c=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ct===null||!ct.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var v=Ou(l,o,t);Co(l,v);break e}}l=l.return}while(l!==null)}nc(n)}catch(N){t=N,Q===n&&n!==null&&(Q=n=n.return);continue}break}while(!0)}function ec(){var e=Xr.current;return Xr.current=Yr,e===null?Yr:e}function Ma(){(Y===0||Y===3||Y===2)&&(Y=4),Z===null||!(zt&268435455)&&!(di&268435455)||nt(Z,ee)}function Jr(e,t){var n=L;L|=2;var r=ec();(Z!==e||ee!==t)&&(Ve=null,_t(e,t));do try{jf();break}catch(i){Ju(e,i)}while(!0);if(ma(),L=n,Xr.current=r,Q!==null)throw Error(w(261));return Z=null,ee=0,Y}function jf(){for(;Q!==null;)tc(Q)}function Pf(){for(;Q!==null&&!Zc();)tc(Q)}function tc(e){var t=ic(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?nc(e):Q=t,ja.current=null}function nc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=kf(n,t),n!==null){n.flags&=32767,Q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Y=6,Q=null;return}}else if(n=wf(n,t,ge),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);Y===0&&(Y=5)}function kt(e,t,n){var r=R,i=Ce.transition;try{Ce.transition=null,R=1,Af(e,t,n,r)}finally{Ce.transition=i,R=r}return null}function Af(e,t,n,r){do Zt();while(it!==null);if(L&6)throw Error(w(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(sd(e,l),e===Z&&(Q=Z=null,ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vr||(vr=!0,lc(Lr,function(){return Zt(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ce.transition,Ce.transition=null;var a=R;R=1;var o=L;L|=4,ja.current=null,Ef(e,n),Xu(n,e),Kd(xl),Ir=!!yl,xl=yl=null,e.current=n,Nf(n),Jc(),L=o,R=a,Ce.transition=l}else e.current=n;if(vr&&(vr=!1,it=e,Zr=i),l=e.pendingLanes,l===0&&(ct=null),nd(n.stateNode),he(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qr)throw qr=!1,e=Ul,Ul=null,e;return Zr&1&&e.tag!==0&&Zt(),l=e.pendingLanes,l&1?e===Fl?bn++:(bn=0,Fl=e):bn=0,vt(),null}function Zt(){if(it!==null){var e=Is(Zr),t=Ce.transition,n=R;try{if(Ce.transition=null,R=16>e?16:e,it===null)var r=!1;else{if(e=it,it=null,Zr=0,L&6)throw Error(w(331));var i=L;for(L|=4,_=e.current;_!==null;){var l=_,a=l.child;if(_.flags&16){var o=l.deletions;if(o!==null){for(var u=0;u<o.length;u++){var f=o[u];for(_=f;_!==null;){var g=_;switch(g.tag){case 0:case 11:case 15:An(8,g,l)}var h=g.child;if(h!==null)h.return=g,_=h;else for(;_!==null;){g=_;var m=g.sibling,x=g.return;if(Qu(g),g===f){_=null;break}if(m!==null){m.return=x,_=m;break}_=x}}}var k=l.alternate;if(k!==null){var S=k.child;if(S!==null){k.child=null;do{var z=S.sibling;S.sibling=null,S=z}while(S!==null)}}_=l}}if(l.subtreeFlags&2064&&a!==null)a.return=l,_=a;else e:for(;_!==null;){if(l=_,l.flags&2048)switch(l.tag){case 0:case 11:case 15:An(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,_=d;break e}_=l.return}}var c=e.current;for(_=c;_!==null;){a=_;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,_=p;else e:for(a=c;_!==null;){if(o=_,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ci(9,o)}}catch(N){H(o,o.return,N)}if(o===a){_=null;break e}var v=o.sibling;if(v!==null){v.return=o.return,_=v;break e}_=o.return}}if(L=i,vt(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(ni,e)}catch{}r=!0}return r}finally{R=n,Ce.transition=t}}return!1}function Qo(e,t,n){t=ln(n,t),t=Iu(e,t,1),e=ut(e,t,1),t=se(),e!==null&&(Xn(e,1,t),he(e,t))}function H(e,t,n){if(e.tag===3)Qo(e,e,n);else for(;t!==null;){if(t.tag===3){Qo(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ct===null||!ct.has(r))){e=ln(n,e),e=Ou(t,e,1),t=ut(t,e,1),e=se(),t!==null&&(Xn(t,1,e),he(t,e));break}}t=t.return}}function zf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&n,Z===e&&(ee&n)===n&&(Y===4||Y===3&&(ee&130023424)===ee&&500>G()-Aa?_t(e,0):Pa|=n),he(e,t)}function rc(e,t){t===0&&(e.mode&1?(t=or,or<<=1,!(or&130023424)&&(or=4194304)):t=1);var n=se();e=Ye(e,t),e!==null&&(Xn(e,t,n),he(e,n))}function bf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rc(e,n)}function Mf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(t),rc(e,n)}var ic;ic=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||pe.current)fe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return fe=!1,xf(e,t,n);fe=!!(e.flags&131072)}else fe=!1,U&&t.flags&1048576&&su(t,Hr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;jr(e,t),e=t.pendingProps;var i=en(t,le.current);qt(t,n),i=Sa(null,t,r,e,i,n);var l=Ea();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(l=!0,Br(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,va(t),i.updater=ui,t.stateNode=i,i._reactInternals=t,Pl(t,r,e,n),t=bl(null,t,r,!0,l,n)):(t.tag=0,U&&l&&ca(t),oe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(jr(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Lf(r),e=be(r,e),i){case 0:t=zl(null,t,r,e,n);break e;case 1:t=Oo(null,t,r,e,n);break e;case 11:t=Ro(null,t,r,e,n);break e;case 14:t=Io(null,t,r,be(r.type,e),n);break e}throw Error(w(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:be(r,i),zl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:be(r,i),Oo(e,t,r,i,n);case 3:e:{if(Bu(t),e===null)throw Error(w(387));r=t.pendingProps,l=t.memoizedState,i=l.element,mu(e,t),Gr(t,r,null,n);var a=t.memoizedState;if(r=a.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=ln(Error(w(423)),t),t=Do(e,t,r,n,i);break e}else if(r!==i){i=ln(Error(w(424)),t),t=Do(e,t,r,n,i);break e}else for(ve=st(t.stateNode.containerInfo.firstChild),ye=t,U=!0,Te=null,n=fu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tn(),r===i){t=Xe(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return hu(t),e===null&&_l(t),r=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,a=i.children,wl(r,i)?a=null:l!==null&&wl(r,l)&&(t.flags|=32),Fu(e,t),oe(e,t,a,n),t.child;case 6:return e===null&&_l(t),null;case 13:return Vu(e,t,n);case 4:return ya(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=nn(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:be(r,i),Ro(e,t,r,i,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,l=t.memoizedProps,a=i.value,I(Wr,r._currentValue),r._currentValue=a,l!==null)if(Ie(l.value,a)){if(l.children===i.children&&!pe.current){t=Xe(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var o=l.dependencies;if(o!==null){a=l.child;for(var u=o.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=Ge(-1,n&-n),u.tag=2;var f=l.updateQueue;if(f!==null){f=f.shared;var g=f.pending;g===null?u.next=u:(u.next=g.next,g.next=u),f.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),Cl(l.return,n,t),o.lanes|=n;break}u=u.next}}else if(l.tag===10)a=l.type===t.type?null:l.child;else if(l.tag===18){if(a=l.return,a===null)throw Error(w(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Cl(a,n,t),a=l.sibling}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===t){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}oe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,qt(t,n),i=je(i),r=r(i),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,i=be(r,t.pendingProps),i=be(r.type,i),Io(e,t,r,i,n);case 15:return Du(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:be(r,i),jr(e,t),t.tag=1,me(r)?(e=!0,Br(t)):e=!1,qt(t,n),Ru(t,r,i),Pl(t,r,i,n),bl(null,t,r,!0,e,n);case 19:return Hu(e,t,n);case 22:return Uu(e,t,n)}throw Error(w(156,t.tag))};function lc(e,t){return Ms(e,t)}function Tf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Tf(e,t,n,r)}function Ta(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lf(e){if(typeof e=="function")return Ta(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Zl)return 11;if(e===Jl)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function zr(e,t,n,r,i,l){var a=2;if(r=e,typeof e=="function")Ta(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case It:return Ct(n.children,i,l,t);case ql:a=8,i|=8;break;case Zi:return e=Ne(12,n,t,i|2),e.elementType=Zi,e.lanes=l,e;case Ji:return e=Ne(13,n,t,i),e.elementType=Ji,e.lanes=l,e;case el:return e=Ne(19,n,t,i),e.elementType=el,e.lanes=l,e;case hs:return fi(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ps:a=10;break e;case ms:a=9;break e;case Zl:a=11;break e;case Jl:a=14;break e;case Je:a=16,r=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Ne(a,n,t,i),t.elementType=e,t.type=r,t.lanes=l,t}function Ct(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function fi(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=hs,e.lanes=n,e.stateNode={isHidden:!1},e}function $i(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Gi(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rf(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ci(0),this.expirationTimes=Ci(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ci(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function La(e,t,n,r,i,l,a,o,u){return e=new Rf(e,t,n,o,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Ne(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},va(l),e}function If(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ac(e){if(!e)return mt;e=e._reactInternals;e:{if(Tt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(me(n))return au(e,n,t)}return t}function oc(e,t,n,r,i,l,a,o,u){return e=La(n,r,!0,e,i,l,a,o,u),e.context=ac(null),n=e.current,r=se(),i=dt(n),l=Ge(r,i),l.callback=t??null,ut(n,l,i),e.current.lanes=i,Xn(e,i,r),he(e,r),e}function pi(e,t,n,r){var i=t.current,l=se(),a=dt(i);return n=ac(n),t.context===null?t.context=n:t.pendingContext=n,t=Ge(l,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ut(i,t,a),e!==null&&(Re(e,i,a,l),Nr(e,i,a)),a}function ei(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ko(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ra(e,t){Ko(e,t),(e=e.alternate)&&Ko(e,t)}function Of(){return null}var sc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ia(e){this._internalRoot=e}mi.prototype.render=Ia.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));pi(e,t,null,null)};mi.prototype.unmount=Ia.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bt(function(){pi(null,e,null,null)}),t[Ke]=null}};function mi(e){this._internalRoot=e}mi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Us();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tt.length&&t!==0&&t<tt[n].priority;n++);tt.splice(n,0,e),n===0&&Bs(e)}};function Oa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yo(){}function Df(e,t,n,r,i){if(i){if(typeof r=="function"){var l=r;r=function(){var f=ei(a);l.call(f)}}var a=oc(t,r,e,0,null,!1,!1,"",Yo);return e._reactRootContainer=a,e[Ke]=a.current,Fn(e.nodeType===8?e.parentNode:e),bt(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var f=ei(u);o.call(f)}}var u=La(e,0,!1,null,null,!1,!1,"",Yo);return e._reactRootContainer=u,e[Ke]=u.current,Fn(e.nodeType===8?e.parentNode:e),bt(function(){pi(t,u,n,r)}),u}function gi(e,t,n,r,i){var l=n._reactRootContainer;if(l){var a=l;if(typeof i=="function"){var o=i;i=function(){var u=ei(a);o.call(u)}}pi(t,a,e,i)}else a=Df(n,t,e,i,r);return ei(a)}Os=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kn(t.pendingLanes);n!==0&&(na(t,n|1),he(t,G()),!(L&6)&&(an=G()+500,vt()))}break;case 13:bt(function(){var r=Ye(e,1);if(r!==null){var i=se();Re(r,e,1,i)}}),Ra(e,1)}};ra=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=se();Re(t,e,134217728,n)}Ra(e,134217728)}};Ds=function(e){if(e.tag===13){var t=dt(e),n=Ye(e,t);if(n!==null){var r=se();Re(n,e,t,r)}Ra(e,t)}};Us=function(){return R};Fs=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};cl=function(e,t,n){switch(t){case"input":if(rl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ai(r);if(!i)throw Error(w(90));vs(r),rl(r,i)}}}break;case"textarea":xs(e,n);break;case"select":t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}};Cs=za;js=bt;var Uf={usingClientEntryPoint:!1,Events:[Zn,Ft,ai,Ns,_s,za]},yn={findFiberByHostInstance:St,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ff={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zs(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||Of,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yr.isDisabled&&yr.supportsFiber)try{ni=yr.inject(Ff),Fe=yr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uf;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oa(t))throw Error(w(200));return If(e,t,null,n)};we.createRoot=function(e,t){if(!Oa(e))throw Error(w(299));var n=!1,r="",i=sc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=La(e,1,!1,null,null,n,!1,r,i),e[Ke]=t.current,Fn(e.nodeType===8?e.parentNode:e),new Ia(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=zs(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return bt(e)};we.hydrate=function(e,t,n){if(!hi(t))throw Error(w(200));return gi(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!Oa(e))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,l="",a=sc;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=oc(t,null,e,1,n??null,i,!1,l,a),e[Ke]=t.current,Fn(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new mi(t)};we.render=function(e,t,n){if(!hi(t))throw Error(w(200));return gi(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!hi(e))throw Error(w(40));return e._reactRootContainer?(bt(function(){gi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};we.unstable_batchedUpdates=za;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hi(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return gi(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function uc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(uc)}catch(e){console.error(e)}}uc(),us.exports=we;var Bf=us.exports,Xo=Bf;Xi.createRoot=Xo.createRoot,Xi.hydrateRoot=Xo.hydrateRoot;const cc={US:{label:"United States",flag:"🇺🇸"},EU:{label:"European Union",flag:"🇪🇺"},LATAM:{label:"Latin America",flag:"🌎"},SA:{label:"South Africa",flag:"🇿🇦"},IN:{label:"India",flag:"🇮🇳"}},vi={near:{label:"Now → 2027",sub:"Near-term reality",shift:-1},mid:{label:"2030",sub:"Mid-decade outlook",shift:0},long:{label:"2035+",sub:"Full transition",shift:1}},Vf={peak_pressure:{measures:"How much grid stress is driving demand for flexible load. Higher = bigger gap between peak demand and reliable supply, which means flexibility (load shifting, battery dispatch, demand response) is more valuable.",current:"US peak demand is rising for the first time in a decade — data centres, electrification, and onshoring are pushing it up while old coal and gas plants retire. DOE projects ~200 GW of new peak resource needs by 2030.",forecast:"DOE Liftoff: tripling current VPP capacity to 80–160 GW by 2030 could cover 10–20% of peak load and save $10B annually. Brattle finds residential VPPs deliver peaking capacity at 40–60% lower net cost than gas peakers.",sources:[{label:"DOE Liftoff: Virtual Power Plants (2024)",url:"https://liftoff.energy.gov/vpp/"},{label:"Brattle Group: Real Reliability",url:"https://www.brattle.com/insights-events/publications/real-reliability/"},{label:"NERC Long-Term Reliability Assessment",url:"https://www.nerc.com/pa/RAPA/ra/Pages/default.aspx"}]},resilience_demand:{measures:"How much customers and grids are willing to pay for backup capacity and outage hardening. Driven by outage frequency, climate exposure, and insurance dynamics.",current:"US average outage hours have roughly doubled since 2013 due to weather events. South Africa logged 250+ hours of Stage 4–6 load shedding in peak years. California, Texas, and the Northeast are seeing the strongest residential battery attach rates on new solar.",forecast:"BNEF: global energy storage market grows at ~23% CAGR through 2030. Residential battery attach rates on new solar have crossed 25–30% in California post-NEM 3.0 — primarily resilience-driven, not bill-driven.",sources:[{label:"EIA Annual Electric Power Industry Report",url:"https://www.eia.gov/electricity/data/eia861/"},{label:"BNEF Energy Storage Market Outlook",url:"https://about.bnef.com/insights/clean-energy/energy-storage/"},{label:"Wood Mackenzie US Energy Storage Monitor",url:"https://www.woodmac.com/research/products/power-and-renewables/us-energy-storage-monitor/"}]},electrification:{measures:"Speed of the heating/transport electrification transition. Faster electrification = more flexible loads to manage (heat pumps, EVs, hot water) and more revenue surface for orchestration.",current:"IEA: heat pumps outsold gas boilers in the US for the fourth year running in 2025. Germany flipped to heat pumps > gas boilers for the first time in 2025. Globally ~10% of building heating is heat-pump-based today (~100M households).",forecast:"IEA WEO 2025: heat pumps could meet ~40% of space heating demand in the US and Japan by 2035, and double their share in the EU and China. EVs already 7%+ of US new car sales; BNEF projects 30%+ globally by 2030. DOE expects 20–90 GW of EV charging demand capacity additions by 2030.",sources:[{label:"IEA World Energy Outlook 2025",url:"https://www.iea.org/reports/world-energy-outlook-2025"},{label:"IEA Renewables 2025",url:"https://www.iea.org/reports/renewables-2025"},{label:"BNEF Electric Vehicle Outlook",url:"https://about.bnef.com/insights/clean-transport/electric-vehicle-outlook/"}]},capital_depth:{measures:"How readily distributed-asset cash flows can be financed through project finance, ABS, or growth equity. Deeper capital = lower cost of customer acquisition (no upfront capex from customer), longer contract tenors viable.",current:"BNEF says 2025 will be a record-breaking year for energy storage despite tariff disruptions. DOE finalized a $3B partial loan guarantee for the first national-scale VPP project in 2023. Residential solar ABS spreads are 200–300bp over benchmarks. VPP-specific term sheets remain non-standardized.",forecast:"BNEF: global energy storage market grows from current ~$30B to $90B+ by 2030. Renew Home (Google Nest + OhmConnect) targeting 50 GW residential VPP by 2030 — entry of patient capital. ABS for solar+storage and heat pumps emerging but not yet for water heaters or smart panels.",sources:[{label:"BNEF Energy Transition Investment Trends",url:"https://about.bnef.com/insights/finance/energy-transition-investment/"},{label:"DOE Loan Programs Office",url:"https://www.energy.gov/lpo/loan-programs-office"},{label:"Lazard Levelized Cost of Storage (LCOS+)",url:"https://www.lazard.com/research-insights/"}]},customer_trust:{measures:"How easily a vendor can reach and acquire end customers. Captures CAC, brand strength, installer channel quality, and whether customers will hand over control of an in-home asset.",current:"Residential solar CAC has averaged $5k–7k+ since 2020 — the single largest cost component of an installed system. DOE Liftoff cites customer acquisition as the #1 barrier for residential DER deployment. Building-owner trust is the gating factor for multifamily decarb retrofits.",forecast:"Wood Mackenzie expects channel consolidation: utility programs, retail (Costco, Amazon), and embedded OEM partnerships (HVAC contractors, builders) take share from door-to-door. Auto-enrollment with opt-out (DOE-recommended) could collapse CAC for utility-sponsored VPPs.",sources:[{label:"Wood Mackenzie US Residential Solar Markets Report",url:"https://www.woodmac.com/research/products/power-and-renewables/us-solar-market-insight/"},{label:"DOE Liftoff: VPP Customer Enrollment",url:"https://liftoff.energy.gov/vpp/"},{label:"LBNL Tracking the Sun",url:"https://emp.lbl.gov/tracking-the-sun"}]},regulatory:{measures:"How welcoming the rules are to distributed energy resources and aggregators — net metering structure, demand charge design, DR program access, wholesale market participation, and emissions mandates that drive demand.",current:"FERC Order 2222 (2020) requires ISOs to allow DER aggregation in wholesale markets — implementation varies widely (CAISO, ISO-NE further along; MISO, SPP slower). NYC Local Law 97 began imposing building emissions caps in 2024 with stiff penalties. California NEM 3.0 cut residential solar export rates ~75%, killing the pure self-consumption play.",forecast:"NYC LL97 ratchets through 2030 and 2040 — driving multifamily retrofit demand. EU Energy Performance of Buildings Directive (revised 2024) mandates phaseout of new fossil heating by 2040. Rate design risk remains the largest underwriting variable for any 15+ year BTM asset.",sources:[{label:"FERC Order 2222",url:"https://www.ferc.gov/news-events/news/explainer-order-no-2222-fact-sheet"},{label:"NYC Local Law 97",url:"https://www.nyc.gov/site/sustainability/our-programs/local-law-97.page"},{label:"CPUC NEM 3.0 / Net Billing",url:"https://www.cpuc.ca.gov/industries-and-topics/electrical-energy/demand-side-management/net-energy-metering"}]},insurance:{measures:"Whether insurers are paying to harden homes and buildings against climate risk — through premium discounts, direct funding of mitigation equipment, or partnerships with hardware vendors. Creates a new (non-utility, non-customer) buyer of BTM assets.",current:"State Farm and Allstate paused new homeowner policies in California citing wildfire risk. Hippo, Lemonade, and Travelers are piloting leak-sensor subsidies. Munich Re and Swiss Re are funding adaptation pilots. Florida and Louisiana property markets effectively rationed.",forecast:"Swiss Re sustainability research models insured climate losses growing 5–7% per year through 2040. Expect insurer-funded resilience to expand from leak detection into batteries, smart panels, and grid-tied storage — particularly in fire/flood-exposed regions. Triple-net pairing of insurer + utility + vendor remains an open category.",sources:[{label:"Swiss Re Institute — Natural Catastrophes",url:"https://www.swissre.com/institute/research/topics-and-risk-dialogues/climate-and-natural-catastrophe-risk.html"},{label:"Munich Re NatCatSERVICE",url:"https://www.munichre.com/en/solutions/for-industry-clients/natcatservice.html"},{label:"Insurance Information Institute Climate Reports",url:"https://www.iii.org/"}]}},Da={US:{consumer:{comfort:2,capex:2,resilience:3,bills:3,identity:2},building:{comfort:2,capex:3,resilience:3,bills:3,identity:2},utility:{comfort:0,capex:3,resilience:3,bills:3,identity:0}},EU:{consumer:{comfort:3,capex:2,resilience:2,bills:3,identity:3},building:{comfort:3,capex:3,resilience:2,bills:3,identity:3},utility:{comfort:1,capex:3,resilience:2,bills:3,identity:2}},LATAM:{consumer:{comfort:2,capex:2,resilience:3,bills:3,identity:1},building:{comfort:2,capex:2,resilience:3,bills:3,identity:1},utility:{comfort:0,capex:2,resilience:3,bills:2,identity:1}},SA:{consumer:{comfort:2,capex:2,resilience:3,bills:3,identity:1},building:{comfort:2,capex:3,resilience:3,bills:3,identity:1},utility:{comfort:0,capex:3,resilience:3,bills:3,identity:1}},IN:{consumer:{comfort:3,capex:2,resilience:3,bills:3,identity:1},building:{comfort:3,capex:2,resilience:3,bills:3,identity:1},utility:{comfort:0,capex:3,resilience:2,bills:3,identity:1}}},Hf=["resilience","identity"],Qi={comfort:{name:"Comfort / UX",desc:"Better thermal comfort, automation, peace of mind"},capex:{name:"Avoided Capex",desc:"Cheaper than the conventional alternative (geyser, AC, transformer)"},resilience:{name:"Resilience",desc:"Backup during outages, blackouts, load shedding, climate events"},bills:{name:"Bill Reduction",desc:"Lower energy costs via efficiency or arbitrage"},identity:{name:"Identity / Climate",desc:"Decarbonization, signaling, ESG"}},Ki={water_heater:{headline:"Largest leverage in markets with electric resistance heating + peak constraints",geos:{US:"~50M electric water heaters (EIA). <5% in any DR/VPP program today. 2030 flex potential: ~5–10 GW dispatchable if utility programs scale.",EU:"~30M, but Europe is shifting to heat-pump water heaters under EU ecodesign; flex value narrower outside cold-climate hot-water-only use.",LATAM:"~20M+ urban, mostly uncontrolled tank. Niche today outside Brazil and Chile pilots.",SA:"~6M electric geysers — 33% of residential consumption and 35% of evening peak (LBNL 2024 South Africa Water Heating DSM Study). Plentify targeting 1M+ devices by 2030. The canonical case.",IN:"~30M+ urban geysers, growing fast with middle-class formation. Peak-tariff dynamics rising; flex monetization still early."},sources:[{label:"LBNL South Africa Water Heating DSM Study (2024)",url:"https://emp.lbl.gov/publications"},{label:"EIA Residential Energy Consumption Survey",url:"https://www.eia.gov/consumption/residential/"},{label:"DOE Liftoff: VPP — water heater chapter",url:"https://liftoff.energy.gov/vpp/"}]},hybrid_electrification:{headline:"Dense-urban multifamily with steam/gas heating + decarb mandates",geos:{US:"NYC alone: ~1M multifamily units in ~50k buildings; 75% of NYC buildings use steam. LL97 directly covers ~50k properties >25k sq ft. Wider Northeast + Mid-Atlantic adds another ~3–5M units. Kelvin addressable market: tens of billions in retrofits by 2030.",EU:"UK has ~10M radiator-heated homes (mostly gas combi); Germany ~25M, with central boilers. Hybrid retrofits emerging via utility programs and SAP/BREL incentives.",LATAM:"Limited central steam/hydronic stock; AC-led market. Negligible near-term.",SA:"Very limited steam infrastructure; gas heating uncommon outside industrial.",IN:"Limited centralized heating outside cold-climate north (Punjab, J&K, parts of Himachal); negligible near-term opportunity."},sources:[{label:"NYC LL97 Building Emissions Law",url:"https://www.nyc.gov/site/sustainability/our-programs/local-law-97.page"},{label:"NYSERDA Multifamily Retrofit Programs",url:"https://www.nyserda.ny.gov/"},{label:"ACEEE Hybrid Heating Research",url:"https://www.aceee.org/"}]},commercial_heat:{headline:"Propane displacement in restaurant + hospitality outdoor heating",geos:{US:"~700k restaurants (NRA); ~250k+ added outdoor dining post-COVID. Propane patio heater incumbents (~5M units installed); Focal addressable beachhead in coastal-climate hospitality. Energy footprint small per unit but high margin and brand-driven.",EU:"Strong outdoor dining culture (Spain, Italy, France, UK); EU phase-out of patio gas heaters under discussion in several member states. Addressable ~500k+ venues.",LATAM:"Seasonal use in high-altitude and southern-cone markets (Chile, Argentina, southern Brazil); niche but growing with hospitality recovery.",SA:"Climate limits demand; some Cape Town / winter Highveld use. Small niche.",IN:"Hill stations (Shimla, Manali) seasonal; otherwise climate doesn’t require it."},sources:[{label:"National Restaurant Association State of the Industry",url:"https://www.restaurant.org/"},{label:"NYC Open Restaurants Program Data",url:"https://www.nyc.gov/"},{label:"EU Propane Phase-Out Discussions (Eurelectric)",url:"https://www.eurelectric.org/"}]},heat_pump:{headline:"Mainstream in cold-climate developed economies; install capacity is the constraint",geos:{US:"~17M heat-pump-heated homes today (~20% of single-family). IEA WEO 2025: ~40% of US space heating from heat pumps by 2035, implying ~50M+ installed units. US sales fell ~13% in 2025 on refrigerant transition but still outsold gas furnaces for 4th straight year.",EU:"~25M cumulative installed; EU REPowerEU target of 60M by 2030. Germany flipped to HP > gas boilers for first time in 2025. Annual sales ~3M+.",LATAM:"~1M cumulative; mostly reversible AC in Chile, Brazil, Mexico used as HP. Growing but still niche for primary heating.",SA:"~150k installed; growing but small relative to geyser opportunity.",IN:"~30M+ reversible AC units (effectively HP capacity for cooling); heating use minor outside cold-climate north."},sources:[{label:"IEA World Energy Outlook 2025 — Heat Pumps",url:"https://www.iea.org/reports/world-energy-outlook-2025"},{label:"IEA The Future of Heat Pumps",url:"https://www.iea.org/reports/the-future-of-heat-pumps"},{label:"EHPA European Heat Pump Market Report",url:"https://www.ehpa.org/data/market-data/"}]},smart_thermostat:{headline:"Incumbent VPP enrollment — 61% of US VPP deployments include thermostats",geos:{US:"~50M installed of ~85M HVAC-equipped homes; ~10M in active utility DR/VPP programs. Wood Mackenzie projects ~70M installed by 2030.",EU:"~15M; lower HVAC central penetration but smart-home growth strong, especially UK and Germany.",LATAM:"Niche to urban affluent segment; ~1–2M installed.",SA:"~200–500k installed; underdeveloped market.",IN:"Growing rapidly with split-AC adoption; ~3–5M smart-AC controllers installed."},sources:[{label:"Wood Mackenzie US Demand Response & VPP Market",url:"https://www.woodmac.com/research/products/power-and-renewables/"},{label:"DOE VPP Liftoff Report",url:"https://liftoff.energy.gov/vpp/"}]},battery:{headline:"Highest flex per unit; economics dominated by rate design + resilience demand",geos:{US:"~700k residential systems installed (2024); BNEF projects ~1M+ added annually by 2027. Total residential capacity ~7 GW. ~3 GW commercial/industrial BTM.",EU:"~2M residential batteries; Germany ~1.5M alone. Italy, UK accelerating.",LATAM:"Small (~100k residential); load-shedding-driven growth in Argentina, Mexico, parts of Brazil.",SA:"~150k+ residential battery installations during load-shedding peak (2023). Growing despite reduced load-shedding pressure.",IN:"Small (<50k residential); commercial BTM growing for solar self-consumption."},sources:[{label:"BNEF Energy Storage Market Outlook",url:"https://about.bnef.com/insights/clean-energy/energy-storage/"},{label:"Wood Mackenzie US Energy Storage Monitor",url:"https://www.woodmac.com/research/products/power-and-renewables/us-energy-storage-monitor/"},{label:"SolarPower Europe Battery Storage Outlook",url:"https://www.solarpowereurope.org/"}]},leak_thermal:{headline:"Loss-prevention play with insurance-funded growth potential",geos:{US:"~150M home insurance policies; <10M leak sensors installed. Commercial refrigeration ~4M asset-locations addressable (Glacier Grid territory).",EU:"~70M insured properties; growing leak-detection adoption, especially UK and Nordics.",LATAM:"Commercial cold-chain primary opportunity; consumer adoption still light.",SA:"Small but growing; insurance-funded resilience expanding.",IN:"Commercial cold-chain large opportunity (vaccine + food supply chains); consumer adoption nascent."},sources:[{label:"Swiss Re Institute Climate Risk Reports",url:"https://www.swissre.com/institute/"},{label:"Insurance Information Institute",url:"https://www.iii.org/"},{label:"IEA Cold Chain Energy Demand",url:"https://www.iea.org/"}]},aggregation:{headline:"The orchestration layer; capital following deployment",geos:{US:"30–60 GW VPP capacity today (DOE Liftoff). 2030 target: 80–160 GW (10–20% of peak). Renew Home alone targeting 50 GW residential VPP.",EU:"Statkraft VPP 10 GW; Next Kraftwerke 10 GW; significant growth via Germany, UK, France market reforms.",LATAM:"Limited near-term aggregation; some pilots in Brazil and Chile.",SA:"Small but growing; Plentify-led aggregation pilots; no formal wholesale DR market yet.",IN:"Early-stage; ~1 GW DR capacity. Wholesale market reforms expected mid-decade."},sources:[{label:"DOE Liftoff: VPP",url:"https://liftoff.energy.gov/vpp/"},{label:"Wood Mackenzie North America VPP Market Outlook",url:"https://www.woodmac.com/"},{label:"FERC Order 2222 Implementation Tracker",url:"https://www.ferc.gov/"}]},ev:{headline:"Largest single load addition — but mobility-constrained dispatchability",geos:{US:"~4M EVs on road; DOE projects 20–90 GW of EV demand capacity additions by 2030. EV batteries: 300–540 GWh aggregate by 2030. V2G mainstreaming 2026–2028.",EU:"~12M EVs; Europe leads V2G regulatory push (UK G99, ISO 15118-20 deployment). 30–50 GW EV flex by 2030.",LATAM:"~500k EVs; small but growing 50%+ annually in Brazil/Mexico.",SA:"~30k EVs; minor near-term BTM contribution.",IN:"~5M EVs (mostly 2W/3W); different flex shape — small but numerous batteries, swap-based ecosystem."},sources:[{label:"BNEF Electric Vehicle Outlook",url:"https://about.bnef.com/insights/clean-transport/electric-vehicle-outlook/"},{label:"DOE Liftoff: VPP — EV chapter",url:"https://liftoff.energy.gov/vpp/"},{label:"IEA Global EV Outlook",url:"https://www.iea.org/reports/global-ev-outlook-2025"}]},smart_panel:{headline:"The home OS — unlocks heat pump + EV + battery without service upgrade",geos:{US:"~130M residential service panels; smart-panel installed base <1M but growing fast under IRA + electrification mandates. SPAN, Lumin, others scaling.",EU:"Lower addressable (panel-constraint problem less acute; service amperage already higher).",LATAM:"Niche; emerging.",SA:"Limited; service-amperage similar to EU.",IN:"Limited central-panel architecture; smart-meter-led approach more common."},sources:[{label:"RMI Smart Panel Market Brief",url:"https://rmi.org/"},{label:"DOE Building Technologies Office",url:"https://www.energy.gov/eere/buildings/"}]}},Wf=[2020,2025,2030,2035],$f={water_heater:{unit:"% of electric water heaters controlled",US:[1,4,16,40],EU:[3,10,23,40],LATAM:[1,2.5,10,25],SA:[.5,2.5,17,42],IN:[.5,1.7,7,20]},hybrid_electrification:{unit:"% of addressable steam/gas multifamily",US:[0,.2,4,20],EU:[0,.2,1.2,8],LATAM:[0,0,.2,1],SA:[0,0,.2,.5],IN:[0,0,.2,.5]},heat_pump:{unit:"% of homes with heat pump as primary heat",US:[18,21,32,45],EU:[16,23,45,65],LATAM:[.5,1,3,8],SA:[.5,1,3,7],IN:[5,8,17,34]},commercial_heat:{unit:"% of restaurant outdoor heating that is electric",US:[0,.2,3,12],EU:[0,1,10,30],LATAM:[0,.2,1,3],SA:[0,0,.2,.5],IN:[0,0,.2,.5]},smart_thermostat:{unit:"% of HVAC-equipped homes with smart thermostat",US:[35,59,78,90],EU:[8,17,35,60],LATAM:[1,3,8,16],SA:[3,6,18,35],IN:[2,5,15,30]},battery:{unit:"% of single-family homes with stationary battery",US:[.4,.9,5,13],EU:[1,3,11,22],LATAM:[.1,.3,1.2,3],SA:[1,3,8,16],IN:[.01,.1,.5,1.5]},leak_thermal:{unit:"% of insured properties with leak/asset sensors",US:[3,7,20,40],EU:[3,7,18,38],LATAM:[.5,1,4,10],SA:[1,2,8,18],IN:[.3,.5,2,5]},aggregation:{unit:"% of peak addressable via VPP / DER aggregation",US:[3,5,14,24],EU:[5,8,15,24],LATAM:[1,2,5,13],SA:[.5,1,7,18],IN:[.2,.5,5,15]},ev:{unit:"% of light-duty fleet that is electric",US:[1,4,18,38],EU:[5,12,30,50],LATAM:[.1,.5,4,15],SA:[.1,.3,3,12],IN:[.5,2,12,35]},smart_panel:{unit:"% of homes with smart electrical panel",US:[.1,.8,4,12],EU:[.05,.1,.5,1.5],LATAM:[0,.05,.3,1],SA:[0,.05,.3,1],IN:[0,.05,.5,2]}},on=[{id:"water_heater",name:"Smart Electric Water Heater",icon:"♨",capex_score:5,capex_usd:"$50–300 (retrofit)",lifespan:"10–15y",dispatchability:5,flexibility:5,resilience:1,install_friction:1,margin_potential:4,value_stack:["DR/DSM","TOU shift","Avoided geyser replacement","Hot-water-as-service"],portfolio:"Plentify (HotBot, SA leader)",note:"Highest leverage in markets with electric resistance heating + peak constraints. SA is the canonical case — 33% of residential consumption, 35% of peak.",geo_fit:{US:2,EU:1,LATAM:2,SA:3,IN:2},primary_driver:["bills","capex"],secondary_driver:["resilience"]},{id:"hybrid_electrification",name:"Hybrid Electrification (Dual Fuel)",icon:"◑",capex_score:4,capex_usd:"$2k–8k/unit (subscription available)",lifespan:"15–20y",dispatchability:4,flexibility:4,resilience:4,install_friction:2,margin_potential:4,value_stack:["Decarb mandate compliance (LL97)","Gas avoidance during mild weather","DR/DSM","Comfort (AC included)","Avoided full retrofit capex"],portfolio:"Kelvin (NYC multifamily — Cozy + Adaptive Electrification)",note:"Keeps the existing gas boiler/furnace for cold-snap reliability but offloads shoulder seasons and cooling to in-unit heat pumps. Smart controls switch fuel based on temperature, price, and emissions. NYSERDA-verified 25.5% heating savings on Kelvin’s Cozy alone; Kelvin’s Hybrid Electrification platform delivers ~80% of full-electrification decarb at ~10% of the capex. Solves the dense-urban multifamily case where full HP retrofit is impractical (no roof space, panel constraints, tenant disruption).",geo_fit:{US:3,EU:2,LATAM:1,SA:1,IN:1},primary_driver:["capex","comfort"],secondary_driver:["bills","identity","resilience"]},{id:"heat_pump",name:"Heat Pump (Full Electric)",icon:"◐",capex_score:1,capex_usd:"$8k–18k installed",lifespan:"15–20y",dispatchability:3,flexibility:3,resilience:2,install_friction:5,margin_potential:3,value_stack:["DR/DSM","Efficiency","Decarb mandate","Comfort premium"],portfolio:"Gradient (window-unit form factor for dense multifamily)",note:"Heat pumps outsold gas furnaces in the US for the 4th year running in 2025 (IEA). IEA projects ~40% of US space heating demand met by heat pumps by 2035. Install capacity is the bottleneck, not technology — window-unit and retrofit-friendly form factors unlock dense urban + multifamily.",geo_fit:{US:3,EU:3,LATAM:1,SA:1,IN:2},primary_driver:["comfort","identity"],secondary_driver:["bills","capex"]},{id:"commercial_heat",name:"Commercial / Outdoor Electric Heat",icon:"☀",capex_score:4,capex_usd:"$500–2,000/heater",lifespan:"10–15y",dispatchability:2,flexibility:2,resilience:0,install_friction:1,margin_potential:4,value_stack:["Propane displacement","Patio season extension","Avoided fossil logistics","Energy savings (vs propane)","Hospitality comfort / UX","Pairs with battery for flex + demand-charge avoidance"],portfolio:"Focal (plug-in electric heaters for restaurants & outdoor dining)",note:"Not a grid-services play on its own — a commercial-appliance electrification play. Plug-and-play 120V outlets, no gas line/hardwiring/permits, up to 80% energy savings vs propane. Targets the ~700k US restaurant market and outdoor dining boom. The natural pairing is a battery: heaters at scale will hit 120V circuit limits and trigger commercial demand charges, and propane wins on outages today. A battery solves all three — charge off-peak, discharge during peak, ride out outages — and converts the system from a comfort load into a dispatchable flex asset. Solar + storage analogue: the heater is the load, the battery is the orchestration.",geo_fit:{US:3,EU:3,LATAM:2,SA:1,IN:1},primary_driver:["capex","bills"],secondary_driver:["comfort","identity"]},{id:"smart_thermostat",name:"Smart Thermostat / HVAC Controls",icon:"◷",capex_score:5,capex_usd:"$100–400",lifespan:"8–12y",dispatchability:4,flexibility:4,resilience:1,install_friction:1,margin_potential:3,value_stack:["DR/DSM","Efficiency","Comfort"],portfolio:"Flair (vent-level zoning)",note:"Incumbent VPP technology — 61% of deployments still include thermostats. Zoning and per-room control is the next wave.",geo_fit:{US:3,EU:2,LATAM:1,SA:1,IN:2},primary_driver:["comfort","bills"],secondary_driver:["identity"]},{id:"battery",name:"Stationary Battery (Home/SMB)",icon:"▮",capex_score:1,capex_usd:"$10k–25k installed",lifespan:"10–15y",dispatchability:5,flexibility:5,resilience:5,install_friction:4,margin_potential:4,value_stack:["Resilience","TOU arbitrage","DR","Wholesale (where allowed)","Solar self-consumption"],portfolio:"—",note:"Most flexible asset, highest capex. Economics dominated by rate design and stacking rules.",geo_fit:{US:3,EU:2,LATAM:2,SA:3,IN:2},primary_driver:["resilience","bills"],secondary_driver:["identity"]},{id:"leak_thermal",name:"Leak / Cold-Chain / Asset Sensors",icon:"◈",capex_score:4,capex_usd:"$50–500/site",lifespan:"7–10y",dispatchability:0,flexibility:0,resilience:2,install_friction:2,margin_potential:5,value_stack:["Insurance discount","Avoided loss","Compliance","Predictive maintenance"],portfolio:"Glacier Grid (commercial refrigeration)",note:"Not a flexibility play — a loss-prevention play. Insurance + spoilage + downtime drive ROI. Different capital market story.",geo_fit:{US:3,EU:3,LATAM:2,SA:2,IN:2},primary_driver:["capex","resilience"],secondary_driver:[]},{id:"aggregation",name:"Aggregation / VPP Software",icon:"◆",capex_score:5,capex_usd:"Software",lifespan:"Recurring",dispatchability:null,flexibility:5,resilience:2,install_friction:1,margin_potential:5,value_stack:["Capacity","Ancillary services","Wholesale","Distribution deferral"],portfolio:"—",note:"The missing middle. Dispatch rights, customer relationship, and data ownership are the three contested layers. No TS portfolio company in this layer today; the closest adjacency is per-asset orchestration baked into Plentify, Kelvin, and Flair stacks rather than cross-portfolio aggregation.",geo_fit:{US:3,EU:2,LATAM:1,SA:1,IN:1},primary_driver:["bills","capex"],secondary_driver:["resilience","identity"]},{id:"ev",name:"EV / V2G / Managed Charging",icon:"◐",capex_score:3,capex_usd:"$0 (incremental)",lifespan:"10–15y",dispatchability:4,flexibility:4,resilience:3,install_friction:3,margin_potential:3,value_stack:["Managed charging","V2G (emerging)","Capacity","Energy arbitrage"],portfolio:"—",note:"DOE projects 20–90 GW of EV demand capacity additions by 2030. Mobility constraint limits dispatchability vs. stationary.",geo_fit:{US:3,EU:3,LATAM:1,SA:1,IN:2},primary_driver:["bills","identity"],secondary_driver:["resilience"]},{id:"smart_panel",name:"Smart Electrical Panel",icon:"▤",capex_score:3,capex_usd:"$2k–4k",lifespan:"20–30y",dispatchability:2,flexibility:3,resilience:3,install_friction:4,margin_potential:3,value_stack:["Avoided service upgrade","Load orchestration","Resilience","Insurance"],portfolio:"—",note:'The "operating system" of the home. Unlocks heat pump + EV + battery without panel upgrade — solves a real install bottleneck.',geo_fit:{US:3,EU:1,LATAM:1,SA:1,IN:1},primary_driver:["capex","resilience"],secondary_driver:["comfort"]}],Gf=[{id:"free",name:"Free / Subsidized",desc:"Utility or aggregator pays for installation in exchange for dispatch rights.",solar_analog:"Rare for solar — closest is community solar subscriptions.",works_when:"Asset has high grid value, customer has low willingness-to-pay, regulator allows rate-basing.",capital:"Utility ratebase or aggregator project finance.",examples:"SA HotBot pilots, US utility thermostat giveaways, NYCHA Gradient deployments.",requires:{regulatory:3,capital_depth:2,customer_trust:1}},{id:"shared_savings",name:"Shared Savings / Performance",desc:"Customer pays nothing upfront; vendor takes share of savings or DR revenue.",solar_analog:"PPA model (2010–2018 peak).",works_when:"Stackable revenue streams, long contract tenor, creditworthy off-taker.",capital:"Project finance + tax equity (where applicable).",examples:"Gradient Temperature-as-a-Service direction, commercial demand response.",requires:{regulatory:3,capital_depth:4,customer_trust:3}},{id:"lease",name:"Lease / Subscription",desc:"Fixed monthly fee, vendor owns and maintains asset.",solar_analog:"Solar lease (2012–2019 dominant).",works_when:"Customer wants outcome not asset, residual value is predictable.",capital:"Asset-backed securities + warehouse facilities.",examples:"Sunrun for solar+storage, emerging for heat pumps and HVAC.",requires:{regulatory:2,capital_depth:5,customer_trust:4}},{id:"loan",name:"Loan / Financed Purchase",desc:"Customer owns asset, finances over 5–25 years.",solar_analog:"Solar loan (2019 onward — overtook leases).",works_when:"Customer values ownership, tax credits flow to homeowner, equipment lasts.",capital:"Consumer lending markets, ABS securitization.",examples:"Most US residential solar today, heat pump financing via IRA.",requires:{regulatory:2,capital_depth:4,customer_trust:5}},{id:"cash",name:"Cash Purchase",desc:"Customer buys outright.",solar_analog:"Pre-2010 solar; affluent / commercial today.",works_when:"Short payback, premium product, customer trusts brand.",capital:"None required.",examples:"Smart thermostats, smart panels, premium heat pumps in EU.",requires:{regulatory:1,capital_depth:1,customer_trust:5}}],Qf=[{stage:"Venture Equity",cost_pct:"N/A (dilution)",techs:{water_heater:"mature",hybrid_electrification:"mature",heat_pump:"mature",commercial_heat:"mature",smart_thermostat:"mature",battery:"mature",leak_thermal:"mature",aggregation:"mature",ev:"mature",smart_panel:"mature"}},{stage:"Growth / Expansion",cost_pct:"15–25%",techs:{water_heater:"emerging",hybrid_electrification:"emerging",heat_pump:"mature",commercial_heat:"emerging",smart_thermostat:"mature",battery:"mature",leak_thermal:"emerging",aggregation:"mature",ev:"mature",smart_panel:"emerging"}},{stage:"Venture Debt",cost_pct:"12–18%",techs:{water_heater:"emerging",hybrid_electrification:"emerging",heat_pump:"emerging",commercial_heat:"limited",smart_thermostat:"mature",battery:"mature",leak_thermal:"limited",aggregation:"emerging",ev:"mature",smart_panel:"limited"}},{stage:"Project Finance",cost_pct:"8–12%",techs:{water_heater:"limited",hybrid_electrification:"emerging",heat_pump:"emerging",commercial_heat:"none",smart_thermostat:"limited",battery:"mature",leak_thermal:"none",aggregation:"emerging",ev:"emerging",smart_panel:"none"}},{stage:"ABS / Securitization",cost_pct:"5–8%",techs:{water_heater:"none",hybrid_electrification:"limited",heat_pump:"limited",commercial_heat:"none",smart_thermostat:"none",battery:"emerging",leak_thermal:"none",aggregation:"none",ev:"emerging",smart_panel:"none"}},{stage:"Investment Grade",cost_pct:"4–6%",techs:{water_heater:"none",hybrid_electrification:"none",heat_pump:"none",commercial_heat:"none",smart_thermostat:"none",battery:"limited",leak_thermal:"none",aggregation:"none",ev:"limited",smart_panel:"none"}}],Kf=[{id:"gpu",title:"AI / Data Center Capacity Crunch",hook:"AI is the new peaker — and it can’t wait for transmission",body:"IEA Energy and AI: global data center electricity consumption doubles from 415 TWh (2024) to 945 TWh by 2030. US accounts for ~half that growth — 183 TWh now to 426 TWh by 2030, a 133% jump. DOE estimates 50 GW of the 100 GW new peak capacity needed by 2030 is data-center-driven. BNEF puts US data center peak demand at ~106 GW by 2035. Globally ~2,500 GW of projects are stalled in interconnection queues; new transmission takes 7+ years. Brookfield + Bloom committed $5B for 1 GW of behind-the-meter at AI factories; Aligned + PGE deployed 31 MW battery as a grid-upgrade substitute. An advanced server rack will draw the load of 65 households by 2027.",implication:"Two effects on the BTM thesis. (1) Hyperscalers become a new, deep-pocketed off-taker for VPP capacity — Plentify and Kelvin can route flexible capacity to hyperscaler-funded programs alongside utility programs, with better economics than ratebased DR. (2) The locational concentration of AI load (data center clusters in NoVa, Phoenix, central Ohio) is sucking peak capacity out of nearby residential markets — making residential flex worth more in those nodes specifically. Aggregation and battery curves in the timeline reflect this pull.",timeframe:"Already happening. Capacity crunch intensifies through 2028."},{id:"compute_flex",title:"Compute Flexibility (Workload Shifting)",hook:"Software is cheaper than batteries",body:"Emerald AI demonstrated 25% peak reduction at a data center via GPU workload orchestration. Software flexibility deploys in weeks, not years, with no permitting. Two parallel BTM stories: (1) classic distributed flex (your portfolio), (2) hyperscale internal flex.",implication:"Compute flex competes with BTM batteries on the margin for grid services, and creates demand for orchestration platforms — an open category in our portfolio, currently filled by per-asset dispatch software inside Plentify, Kelvin, and Flair rather than a cross-asset aggregator.",timeframe:"Now → 2027 for early adopters; 2030 for mainstream."},{id:"insurance",title:"Insurance-Funded Resilience",hook:"Insurers as capital partners",body:"Climate disasters have made hardening cheaper than payouts. Insurers are starting to fund batteries, leak detection, smart panels, and HVAC monitoring as loss-prevention investments. Fundamentally different capital structure than energy markets.",implication:"Glacier Grid territory. Adds a third revenue axis (energy + grid services + loss prevention) that doesn't depend on rate design or DR programs.",timeframe:"Emerging now in CA, FL, TX, AU. Mainstream by 2030."},{id:"ratebase_fight",title:"The Rate-Basing Fight",hook:"Who owns the asset matters more than what it does",body:'Wood Mackenzie: a majority of VPP aggregators oppose utilities rate-basing DERs (the "Distributed Capacity Procurement" model). The fight is whether ratepayers fund DERs (utility-owned, rate-based) or whether private capital + customers do (third-party-owned).',implication:"Existential for third-party DER aggregators. Determines whether the next decade of DER capital flows through utility ratebase or through private project finance — and which side of that line our hardware portfolio companies (Plentify, Kelvin, Gradient, Flair) end up selling into.",timeframe:"Active regulatory fight 2026–2028."},{id:"data_moat",title:"The Data + AI Layer",hook:"Hardware is a wedge; data is the moat",body:"Across Plentify, Kelvin, Flair, Glacier Grid: the long-term value is in the optimization layer running on top of the hardware — load shapes, occupancy, weather, prices, prediction. This is where defensibility, gross margin, and platform extension live.",implication:'Treat "device intelligence" as a separate axis from physical hardware. Companies that own both the device and the dispatch layer have the strongest position.',timeframe:"Compounds over time. Today is the cheapest the moat will ever be."},{id:"hybrid_equilibrium",title:"Hybrid Heating as Permanent Grid Infrastructure",hook:"Load switching isn’t the bridge — it’s the destination",body:'Two structural forces lock in hybrid heating as the equilibrium, not a transition step. (1) Customer side: gas furnaces last 15–20 years, boilers 15–30. Median US owner-occupied home is 42 years old. Even if heat pumps had 100% of new sales — and they only just edged ahead of gas furnaces — the installed gas base turns over on a multi-decade cycle, and the economic case for forcing premature replacement is weak (capex gap $10–15k per unit; marginal carbon abated drops sharply beyond ~80% electrification). (2) Grid side: ISO-NE’s 2050 Transmission Study models a winter peak of ~51 GW under full electrification and explicitly assumes "the grid is 100% electrified for most of the year, with only the coldest days using some stored fuels for heating." The system planner’s realistic scenario is hybrid. Building a grid to serve full-electric heating on the coldest 50 hours of the year is uneconomic compared to leaving gas in place for those hours.',implication:'Kelvin’s "keep the boiler, electrify what makes sense" isn’t a compromise framing — it’s the operating model the grid is being built around. The durable value moves to the orchestration layer: when to run gas vs. electric per building, per hour, per emissions intensity, per price signal. The dispatch layer is where defensibility lives. Suggests a longer runway than the "replace everything" decarb thesis implies, and reframes hybrid platforms as critical grid infrastructure rather than transitional tech.',timeframe:"Structural through 2050+."},{id:"eu_cooling",title:"EU Summer Cooling Surge",hook:"Buildings designed for cold need to handle 40°C",body:"Europe is warming twice as fast as the global average. The 2025 heatwaves drove daily power demand up 14% in Spain, 9% in France, 6% in Germany; electricity price spreads exceeded €400/MWh; Italy hit outages. France’s evening peak ran +25% vs off-season. EU residential AC penetration is still ~20% (vs ~90% US), and just 19% in Germany, 18–26% in France — but the IEA projects EU AC units more than doubling to 275M by 2050. Europe AC market is on track from $25B (2024) to $43B (2033). Most northern/western EU housing was designed to retain heat, making it ill-suited for hot summers — meaning cooling demand grows on top of unchanged heating loads, not as a substitute.",implication:"Heat pumps win twice: they meet the REPowerEU heating target (60M units by 2030) AND replace the AC purchase, vs. installing both. The timeline reflects EU heat pump going 23%→45%→65% by 2035 — a steeper curve than US because cooling demand is pulling forward what was already a decarb-mandate trajectory. Knock-on effects: smart thermostats become essential for managing dual-peaking grids, batteries pair with PV for solar self-consumption during heatwaves (Ember notes EU solar generated record 45 TWh in June 2025), and Kelvin’s hybrid model has a bigger EU TAM than the heating-only frame suggested.",timeframe:"Inflection now. Compounding through 2035."}],Yf=[{era:"2006–2010",dominant:"Cash",why:"Federal ITC + early adopters; expensive but premium customers."},{era:"2010–2014",dominant:"PPA / Lease",why:"SolarCity et al. unlocked $0-down via tax equity."},{era:"2014–2019",dominant:"Lease (peak)",why:"ABS market opened; lease became default."},{era:"2019–present",dominant:"Loan",why:"IRA + customer preference for ownership shifted ~70% to loan."},{era:"2025+",dominant:"TBD",why:"NEM 3.0 stranding risk + battery attachment changing economics again."}],Yi={US:{regulatory:60,capital_depth:85,customer_trust:65,peak_pressure:60,resilience_demand:60,electrification:55,insurance:55},EU:{regulatory:75,capital_depth:70,customer_trust:70,peak_pressure:50,resilience_demand:40,electrification:75,insurance:50},LATAM:{regulatory:35,capital_depth:35,customer_trust:40,peak_pressure:65,resilience_demand:80,electrification:30,insurance:25},SA:{regulatory:40,capital_depth:30,customer_trust:50,peak_pressure:90,resilience_demand:95,electrification:25,insurance:20},IN:{regulatory:45,capital_depth:50,customer_trust:45,peak_pressure:80,resilience_demand:75,electrification:40,insurance:30}};function Ua(e,t){const n=vi[t].shift,r={...e};return Object.keys(r).forEach(i=>{Hf.includes(i)&&(r[i]=Math.max(0,Math.min(3,r[i]+n)))}),r}function dc(e,t,n,r){const i=e.geo_fit[t],l=Da[t],a=vi[n].shift;let o=0;["consumer","building","utility"].forEach(P=>{const W=Ua(l[P],n);e.primary_driver.forEach(ae=>{o+=W[ae]*2}),e.secondary_driver.forEach(ae=>{o+=W[ae]})}),o=Math.min(100,o/36*100);const u=i===3?1:i===2?.78:.55,f=r.peak_pressure/100,g=r.resilience_demand/100,h=r.capital_depth/100,m=r.regulatory/100,x=r.customer_trust/100,k=r.electrification/100,S=r.insurance/100,z=e.flexibility/5*(f*.6+m*.4),d=e.resilience/5*g,c=e.capex_score/5*(1-h*.4),p=(6-e.install_friction)/5*(x*.4+.3),v=e.margin_potential/5*.4,N=e.id==="heat_pump"||e.id==="ev"?k*.4:0,y=e.id==="leak_thermal"||e.id==="smart_panel"?S*.5:0,E=1+a*.08*((e.flexibility+e.resilience)/10),T=(z*28+d*18+c*16+p*12+v*10+N*12+y*12)*u*(o/100+.3)*E;return{total:Math.max(0,Math.min(100,Math.round(T))),breakdown:{demandPull:Math.round(o),geoFit:i}}}function Xf(e,t){const n=e.requires.regulatory,r=e.requires.capital_depth,i=e.requires.customer_trust,l=t.regulatory/20,a=t.capital_depth/20,o=t.customer_trust/20,u=Math.max(0,n-l),f=Math.max(0,r-a),g=Math.max(0,i-o),h=Math.max(0,Math.min(100,Math.round(100-(u+f+g)*18))),m=u>f&&u>g?"Regulatory openness":f>g?"Capital depth":g>0?"Customer trust":null;return{score:h,bottleneck:m}}function fc(e,t,n,r){const i=(5-e.capex_score)*12,l=(e.install_friction-1)*13,a=Math.max(0,Math.min(100,i+l)),o=Da[t],u=["consumer","building","utility"];let f=0,g=0;for(const d of u){const c=Ua(o[d],n);for(const p of e.primary_driver||[])f+=(c[p]||0)*2,g+=2;for(const p of e.secondary_driver||[])f+=(c[p]||0)*1,g+=1}const h=g>0?f/g*22:0,m=(e.flexibility||0)*(r.peak_pressure/100)*4,x=(e.resilience||0)*(r.resilience_demand/100)*3,k=r.customer_trust/100*5,S={1:.55,2:.85,3:1}[e.geo_fit[t]]||.5,z=Math.max(0,Math.min(100,(h+m+x+k)*S));return{cost:Math.round(a),value:Math.round(z)}}const qf=e=>({0:"cell-0",1:"cell-1",2:"cell-2",3:"cell-3"})[e]||"cell-0",Zf=e=>({0:"—",1:"Emerging",2:"Material",3:"Primary"})[e]||"—",Jf=e=>`maturity-${e}`,ep=e=>({none:"—",limited:"Limited",emerging:"Emerging",mature:"Mature"})[e]||"—";function Hl(e,t){return t>=50&&e<50?{id:"pull",label:"Mainstream Pull",desc:"Cheap + valued. Adopts on its own. Solve channel and supply."}:t>=50&&e>=50?{id:"mandate",label:"Mandate / Premium",desc:"Valued but expensive. Needs mandates, subsidies, or premium segments."}:t<50&&e<50?{id:"addon",label:"Add-on / Impulse",desc:"Cheap but optional. Bundles or attach-on with adjacent purchase."}:{id:"stranded",label:"Stranded (Won’t Move)",desc:"Expensive + unloved. Won’t happen without subsidy reset or value-stack change."}}function tp({geo:e,setGeo:t,horizon:n,setHorizon:r,sliders:i,setSliders:l,resetSliders:a}){const[o,u]=_e.useState(null),f=[{label:"Market conditions",items:[{key:"peak_pressure",name:"Peak / capacity pressure",help:"Higher = more grid stress, higher value for flexibility"},{key:"resilience_demand",name:"Resilience demand",help:"Outage frequency, climate exposure, blackouts"},{key:"electrification",name:"Electrification pace",help:"Heat pump and EV adoption rate"}]},{label:"Capital & trust",items:[{key:"capital_depth",name:"Capital availability",help:"Project finance + ABS market depth"},{key:"customer_trust",name:"Customer trust / acquisition",help:"Cost and ease of reaching end customers"},{key:"regulatory",name:"Regulatory openness",help:"How welcoming the framework is to DERs and aggregators"}]},{label:"Adjacent forces",items:[{key:"insurance",name:"Insurance as buyer",help:"Insurers paying for hardening / loss prevention"}]}];return s.jsxs("div",{className:"topbar",children:[s.jsxs("div",{className:"topbar-row",children:[s.jsxs("div",{className:"topbar-group",children:[s.jsx("span",{className:"topbar-label",children:"Geography"}),s.jsx("div",{className:"seg",children:Object.entries(cc).map(([g,h])=>s.jsxs("button",{className:`seg-btn ${e===g?"seg-btn-active":""}`,onClick:()=>t(g),children:[s.jsx("span",{className:"seg-flag",children:h.flag}),s.jsx("span",{children:g})]},g))})]}),s.jsxs("div",{className:"topbar-group",children:[s.jsx("span",{className:"topbar-label",children:"Horizon"}),s.jsx("div",{className:"seg",children:Object.entries(vi).map(([g,h])=>s.jsx("button",{className:`seg-btn ${n===g?"seg-btn-active":""}`,onClick:()=>r(g),children:h.label},g))})]}),s.jsxs("button",{className:"reset-btn",onClick:a,title:"Reset sliders to geography defaults",children:["↺ Reset to ",e," defaults"]})]}),s.jsx("div",{className:"sliders-section",children:f.map((g,h)=>s.jsxs("div",{className:"slider-group-block",children:[s.jsx("div",{className:"slider-group-label",children:g.label}),s.jsx("div",{className:"slider-group-items",children:g.items.map(m=>{const x=Vf[m.key],k=o===m.key;return s.jsxs("div",{className:`slider-item ${k?"slider-item-open":""}`,children:[s.jsxs("div",{className:"slider-item-head",children:[s.jsx("span",{className:"slider-item-name",children:m.name}),x&&s.jsx("button",{type:"button",className:`slider-info-btn ${k?"slider-info-btn-open":""}`,onClick:()=>u(k?null:m.key),"aria-label":(k?"Hide":"Show")+" details for "+m.name,title:k?"Hide details":"Show description & references",children:k?"×":"ⓘ"}),s.jsx("span",{className:"slider-item-val",children:i[m.key]})]}),s.jsx("input",{type:"range",min:"0",max:"100",value:i[m.key],onChange:S=>l({...i,[m.key]:+S.target.value})}),k&&x&&s.jsxs("div",{className:"slider-details",children:[s.jsxs("div",{className:"slider-details-row",children:[s.jsx("span",{className:"slider-details-label",children:"What it measures"}),s.jsx("span",{className:"slider-details-text",children:x.measures})]}),s.jsxs("div",{className:"slider-details-row",children:[s.jsx("span",{className:"slider-details-label",children:"Current signal"}),s.jsx("span",{className:"slider-details-text",children:x.current})]}),s.jsxs("div",{className:"slider-details-row",children:[s.jsx("span",{className:"slider-details-label",children:"Forecast"}),s.jsx("span",{className:"slider-details-text",children:x.forecast})]}),s.jsxs("div",{className:"slider-details-row",children:[s.jsx("span",{className:"slider-details-label",children:"Sources"}),s.jsx("span",{className:"slider-details-sources",children:x.sources.map((S,z)=>s.jsx("a",{href:S.url,target:"_blank",rel:"noopener noreferrer",className:"slider-source-link",children:S.label},z))})]})]})]},m.key)})})]},h))})]})}function np({geo:e,horizon:t}){const n=["consumer","building","utility"],r=Object.keys(Qi),i=n.reduce((l,a)=>(l[a]=Ua(Da[e][a],t),l),{});return s.jsx("div",{className:"matrix-wrap",children:s.jsxs("table",{className:"matrix",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{}),r.map(l=>s.jsxs("th",{children:[s.jsx("div",{className:"th-label",children:Qi[l].name}),s.jsx("div",{className:"th-sub",children:Qi[l].desc})]},l))]})}),s.jsx("tbody",{children:n.map(l=>s.jsxs("tr",{children:[s.jsxs("td",{className:"row-head",children:[s.jsxs("div",{className:"row-head-label",children:[l==="consumer"&&"End Consumer",l==="building"&&"Building Owner / Operator",l==="utility"&&"Utility / Grid Operator"]}),s.jsxs("div",{className:"row-head-sub",children:[l==="consumer"&&"Homeowner, renter, small biz",l==="building"&&"Multifamily, commercial RE, public housing",l==="utility"&&"Direct procurement or program design"]})]}),r.map(a=>{const o=i[l][a];return s.jsxs("td",{className:`cell ${qf(o)}`,children:[s.jsx("div",{className:"cell-bar",children:[0,1,2].map(u=>s.jsx("span",{className:`bar-pip ${u<o?"bar-pip-on":""}`},u))}),s.jsx("div",{className:"cell-label",children:Zf(o)})]},a)})]},l))})]})})}function rp({geo:e,horizon:t,sliders:n}){var l;const r=_e.useMemo(()=>on.map(a=>({tech:a,...dc(a,e,t,n)})).sort((a,o)=>o.total-a.total),[e,t,n]),i=((l=r[0])==null?void 0:l.total)||100;return s.jsxs("div",{className:"ranking-wrap",children:[s.jsxs("div",{className:"ranking-header",children:[s.jsx("div",{className:"ranking-title",children:"Live ranking"}),s.jsx("div",{className:"ranking-sub",children:"Recomputes from sliders, geography, and horizon"})]}),r.map((a,o)=>{const u=a.total/i*100;return s.jsxs("div",{className:"rank-row",children:[s.jsx("div",{className:"rank-num",children:String(o+1).padStart(2,"0")}),s.jsx("div",{className:"rank-icon",children:a.tech.icon}),s.jsxs("div",{className:"rank-info",children:[s.jsx("div",{className:"rank-name",children:a.tech.name}),s.jsxs("div",{className:"rank-meta",children:[s.jsxs("span",{children:["Geo fit ★",a.breakdown.geoFit,"/3"]}),s.jsx("span",{children:"·"}),s.jsxs("span",{children:["Demand pull ",a.breakdown.demandPull]}),a.tech.portfolio!=="—"&&s.jsxs(s.Fragment,{children:[s.jsx("span",{children:"·"}),s.jsx("span",{className:"rank-portfolio",children:a.tech.portfolio.split(" (")[0]})]})]})]}),s.jsx("div",{className:"rank-bar-wrap",children:s.jsx("div",{className:"rank-bar",style:{width:`${u}%`}})}),s.jsx("div",{className:"rank-score",children:a.total})]},a.tech.id)})]})}function ip({geo:e,horizon:t,sliders:n}){const r=_e.useMemo(()=>on.map(i=>({tech:i,...dc(i,e,t,n)})).sort((i,l)=>l.total-i.total),[e,t,n]);return s.jsx("div",{className:"tech-grid",children:r.map(({tech:i,total:l},a)=>{const o=i.geo_fit[e];return s.jsxs("div",{className:`tech-card fit-${o}`,children:[s.jsx("div",{className:"tech-rank",children:String(a+1).padStart(2,"0")}),s.jsxs("div",{className:"tech-head",children:[s.jsx("div",{className:"tech-icon",children:i.icon}),s.jsx("div",{className:"tech-name",children:i.name}),s.jsx("div",{className:`fit-badge fit-badge-${o}`,children:o===3?"Strong fit":o===2?"Moderate fit":"Weak fit"})]}),s.jsxs("div",{className:"tech-stats",children:[s.jsxs("div",{className:"stat",children:[s.jsx("span",{className:"stat-label",children:"Capex"}),s.jsx("span",{className:"stat-val",children:i.capex_usd})]}),s.jsxs("div",{className:"stat",children:[s.jsx("span",{className:"stat-label",children:"Lifespan"}),s.jsx("span",{className:"stat-val",children:i.lifespan})]}),s.jsxs("div",{className:"stat",children:[s.jsx("span",{className:"stat-label",children:"Score"}),s.jsx("span",{className:"stat-val stat-score",children:l})]})]}),s.jsxs("div",{className:"tech-stack",children:[s.jsx("div",{className:"stack-label",children:"Value Stack"}),s.jsx("div",{className:"stack-pills",children:i.value_stack.map(u=>s.jsx("span",{className:"pill",children:u},u))})]}),Ki[i.id]&&s.jsxs("div",{className:"tech-scale",children:[s.jsxs("div",{className:"scale-head",children:[s.jsxs("span",{className:"scale-label",children:["Market scale · ",e]}),s.jsx("span",{className:"scale-headline",children:Ki[i.id].headline})]}),s.jsx("div",{className:"scale-body",children:Ki[i.id].geos[e]})]}),s.jsx("div",{className:"tech-note",children:i.note}),i.portfolio!=="—"&&s.jsxs("div",{className:"tech-portfolio",title:i.portfolio,children:[s.jsx("span",{className:"portfolio-dot"}),s.jsx("span",{className:"portfolio-text",children:i.portfolio})]})]},i.id)})})}function lp({geo:e,horizon:t,sliders:n}){const r=_e.useMemo(()=>on.map(d=>{const{cost:c,value:p}=fc(d,e,t,n),v=Hl(c,p);return{tech:d,cost:c,value:p,quadrant:v}}),[e,t,n]),i=760,l=480,a=70,o=30,u=50,f=60,g=i-a-o,h=l-u-f,m=d=>a+d/100*g,x=d=>u+(1-d/100)*h,k=d=>d.replace("Smart Electric Water Heater","Water Heater").replace("Hybrid Electrification (Dual Fuel)","Hybrid Elec").replace("Heat Pump (Full Electric)","Heat Pump").replace("Commercial / Outdoor Electric Heat","Commercial Heat").replace("Smart Thermostat / HVAC Controls","Thermostat").replace("Stationary Battery (Home/SMB)","Battery").replace("Leak / Cold-Chain / Asset Sensors","Sensors").replace("Aggregation / VPP Software","Aggregation").replace("EV / V2G / Managed Charging","EV / V2G").replace("Smart Electrical Panel","Smart Panel"),S={pull:"var(--accent)",mandate:"var(--gold)",addon:"var(--ink-3)",stranded:"var(--warm)"},z=(d,c)=>{const v=(d.charCodeAt(0)+d.charCodeAt(d.length-1))%3*6+10,N=c>75?18:-8;return{dx:v,dy:N}};return s.jsxs("div",{className:"adoption-wrap",children:[s.jsxs("div",{className:"adoption-header",children:[s.jsxs("div",{className:"adoption-title",children:["Cost-vs-value position · ",e]}),s.jsx("div",{className:"adoption-sub",children:"Where each technology sits in current conditions"})]}),s.jsxs("svg",{viewBox:`0 0 ${i} ${l}`,className:"adoption-svg",preserveAspectRatio:"xMidYMid meet",children:[s.jsx("rect",{x:a,y:u,width:g,height:h,fill:"var(--paper-2)"}),s.jsx("line",{x1:m(50),y1:u,x2:m(50),y2:u+h,stroke:"var(--rule)",strokeWidth:"1"}),s.jsx("line",{x1:a,y1:x(50),x2:a+g,y2:x(50),stroke:"var(--rule)",strokeWidth:"1"}),s.jsx("text",{x:m(25),y:u+22,className:"quad-label",textAnchor:"middle",children:"MAINSTREAM PULL"}),s.jsx("text",{x:m(25),y:u+38,className:"quad-sub",textAnchor:"middle",children:"cheap + valued · adopts on its own"}),s.jsx("text",{x:m(75),y:u+22,className:"quad-label",textAnchor:"middle",children:"MANDATE / PREMIUM"}),s.jsx("text",{x:m(75),y:u+38,className:"quad-sub",textAnchor:"middle",children:"valued but expensive · needs push"}),s.jsx("text",{x:m(25),y:u+h-28,className:"quad-label",textAnchor:"middle",children:"ADD-ON / IMPULSE"}),s.jsx("text",{x:m(25),y:u+h-12,className:"quad-sub",textAnchor:"middle",children:"cheap but optional · bundles"}),s.jsx("text",{x:m(75),y:u+h-28,className:"quad-label",textAnchor:"middle",children:"STRANDED"}),s.jsx("text",{x:m(75),y:u+h-12,className:"quad-sub",textAnchor:"middle",children:"expensive + unloved · won’t move"}),s.jsx("line",{x1:a,y1:u+h,x2:a+g,y2:u+h,stroke:"var(--ink)",strokeWidth:"1"}),s.jsx("line",{x1:a,y1:u,x2:a,y2:u+h,stroke:"var(--ink)",strokeWidth:"1"}),s.jsx("text",{x:a+g/2,y:l-20,className:"axis-label",textAnchor:"middle",children:"RELATIVE COST · capex + install friction →"}),s.jsx("text",{x:20,y:u+h/2,className:"axis-label",textAnchor:"middle",transform:`rotate(-90 20 ${u+h/2})`,children:"RECEIVED VALUE · demand pull + flex/resilience →"}),r.map(({tech:d,cost:c,value:p,quadrant:v})=>{const N=m(c),y=x(p),{dx:E,dy:C}=z(d.id,p),T=S[v.id];return s.jsxs("g",{children:[s.jsx("circle",{cx:N,cy:y,r:"6",fill:T,stroke:"var(--paper)",strokeWidth:"2"}),s.jsx("text",{x:N+E,y:y+C,className:"point-label",fill:"var(--ink)",children:k(d.name)})]},d.id)})]}),s.jsx("div",{className:"adoption-legend",children:["pull","mandate","addon","stranded"].map(d=>{const c=r.filter(v=>v.quadrant.id===d),p=Hl(d==="pull"||d==="addon"?25:75,d==="pull"||d==="mandate"?75:25);return s.jsxs("div",{className:"legend-block",children:[s.jsxs("div",{className:"legend-head",children:[s.jsx("span",{className:"legend-dot",style:{background:S[d]}}),s.jsx("span",{className:"legend-name",children:p.label})]}),s.jsx("div",{className:"legend-techs",children:c.length?c.map(v=>k(v.tech.name)).join(" · "):"—"}),s.jsx("div",{className:"legend-desc",children:p.desc})]},d)})})]})}function ap({geo:e,horizon:t,sliders:n}){const r=_e.useMemo(()=>on.map(y=>{const E=$f[y.id];if(!E||!E[e])return null;const{cost:C,value:T}=fc(y,e,t,n);return{tech:y,points:E[e],unit:E.unit,quadrant:Hl(C,T).id}}).filter(Boolean),[e,t,n]),i=800,l=460,a=60,o=30,u=30,f=56,g=i-a-o,h=l-u-f,m=Wf,x=m[0],k=m[m.length-1],S=y=>a+(y-x)/(k-x)*g,z=y=>u+(1-Math.min(y,100)/100)*h,d={pull:"var(--accent)",mandate:"var(--gold)",addon:"var(--ink-3)",stranded:"var(--warm)"},c=y=>y.replace("Smart Electric Water Heater","Water Heater").replace("Hybrid Electrification (Dual Fuel)","Hybrid Elec").replace("Heat Pump (Full Electric)","Heat Pump").replace("Commercial / Outdoor Electric Heat","Commercial Heat").replace("Smart Thermostat / HVAC Controls","Thermostat").replace("Stationary Battery (Home/SMB)","Battery").replace("Leak / Cold-Chain / Asset Sensors","Sensors").replace("Aggregation / VPP Software","Aggregation").replace("EV / V2G / Managed Charging","EV / V2G").replace("Smart Electrical Panel","Smart Panel"),p=y=>y.map((E,C)=>`${C===0?"M":"L"} ${S(m[C])} ${z(E)}`).join(" "),v=[...r].sort((y,E)=>E.points[E.points.length-1]-y.points[y.points.length-1]),N=[0,25,50,75,100];return s.jsxs("div",{className:"timeline-wrap",children:[s.jsxs("div",{className:"timeline-header",children:[s.jsxs("div",{className:"timeline-title",children:["Adoption trajectories · ",e]}),s.jsx("div",{className:"timeline-sub",children:"% penetration of addressable base · line color matches Adoption Map quadrant"})]}),s.jsxs("svg",{viewBox:`0 0 ${i} ${l}`,className:"timeline-svg",preserveAspectRatio:"xMidYMid meet",children:[s.jsx("rect",{x:a,y:u,width:g,height:h,fill:"var(--paper-2)"}),N.map(y=>s.jsxs("g",{children:[s.jsx("line",{x1:a,y1:z(y),x2:a+g,y2:z(y),stroke:"var(--rule)",strokeWidth:"1",strokeDasharray:y===0?void 0:"2 3"}),s.jsxs("text",{x:a-10,y:z(y)+4,className:"timeline-axis-tick",textAnchor:"end",children:[y,"%"]})]},y)),s.jsx("line",{x1:a,y1:u+h,x2:a+g,y2:u+h,stroke:"var(--ink)",strokeWidth:"1"}),m.map(y=>s.jsxs("g",{children:[s.jsx("line",{x1:S(y),y1:u+h,x2:S(y),y2:u+h+4,stroke:"var(--ink)",strokeWidth:"1"}),s.jsx("text",{x:S(y),y:u+h+18,className:"timeline-axis-tick",textAnchor:"middle",children:y})]},y)),s.jsx("text",{x:20,y:u+h/2,className:"timeline-axis-label",textAnchor:"middle",transform:`rotate(-90 20 ${u+h/2})`,children:"PENETRATION %"}),r.map(({tech:y,points:E,quadrant:C})=>{const T=y.portfolio&&y.portfolio!=="—",P=d[C];return s.jsxs("g",{children:[s.jsx("path",{d:p(E),fill:"none",stroke:P,strokeWidth:T?2.5:1.5,strokeDasharray:T?void 0:"4 3",opacity:.9}),E.map((W,ae)=>s.jsx("circle",{cx:S(m[ae]),cy:z(W),r:"3",fill:P,stroke:"var(--paper)",strokeWidth:"1.5"},ae))]},y.id)})]}),s.jsx("div",{className:"timeline-legend",children:v.map(({tech:y,points:E,quadrant:C})=>{const T=y.portfolio&&y.portfolio!=="—",P=d[C],W=E[0],ae=E[E.length-1],Ae=W>0?(ae/W-1)*100:null;return s.jsxs("div",{className:"tl-legend-row",children:[s.jsx("span",{className:"tl-legend-swatch",style:{background:P,borderStyle:T?"solid":"dashed",borderColor:P}}),s.jsxs("span",{className:"tl-legend-name",children:[c(y.name),T?" ·":""]}),s.jsxs("span",{className:"tl-legend-end",children:[ae,"%"]}),s.jsx("span",{className:"tl-legend-delta",children:W>0&&Ae!==null?`${Ae>=1e3?">10×":Ae>=100?Math.round(Ae/100)+"×":"+"+Math.round(Ae)+"%"} from ${W}%`:"from —"})]},y.id)})}),s.jsx("div",{className:"timeline-footnote",children:"Trajectories reflect IEA WEO 2025 (heat pumps, EVs), DOE Liftoff (VPP), EHPA / REPowerEU targets, BNEF storage outlook, and the MARKET_SCALE prose above. Embeds two macro forces: AI/datacenter capacity crunch pulls aggregation and battery curves higher in US/EU; EU summer cooling surge accelerates EU heat pump (heating + cooling), thermostat, and battery curves."})]})}function op({sliders:e}){const t=_e.useMemo(()=>Gf.map(n=>({model:n,...Xf(n,e)})).sort((n,r)=>r.score-n.score),[e]);return s.jsxs("div",{children:[s.jsxs("div",{className:"solar-history",children:[s.jsx("div",{className:"solar-history-title",children:"Rooftop Solar Business Model Evolution"}),s.jsx("div",{className:"solar-timeline",children:Yf.map((n,r)=>s.jsxs("div",{className:"solar-era",children:[s.jsx("div",{className:"solar-era-year",children:n.era}),s.jsx("div",{className:"solar-era-model",children:n.dominant}),s.jsx("div",{className:"solar-era-why",children:n.why})]},r))})]}),s.jsx("div",{className:"bm-grid",children:t.map(({model:n,score:r,bottleneck:i})=>s.jsxs("div",{className:"bm-card",children:[s.jsxs("div",{className:"bm-head",children:[s.jsx("div",{className:"bm-name",children:n.name}),s.jsx("div",{className:`bm-score ${r>=75?"score-strong":r>=50?"score-mid":"score-weak"}`,children:r})]}),s.jsx("div",{className:"bm-desc",children:n.desc}),s.jsxs("div",{className:"bm-rows",children:[s.jsxs("div",{className:"bm-row",children:[s.jsx("span",{className:"bm-row-label",children:"Solar Analog"}),s.jsx("span",{className:"bm-row-val",children:n.solar_analog})]}),s.jsxs("div",{className:"bm-row",children:[s.jsx("span",{className:"bm-row-label",children:"Works When"}),s.jsx("span",{className:"bm-row-val",children:n.works_when})]}),s.jsxs("div",{className:"bm-row",children:[s.jsx("span",{className:"bm-row-label",children:"Capital"}),s.jsx("span",{className:"bm-row-val",children:n.capital})]}),s.jsxs("div",{className:"bm-row",children:[s.jsx("span",{className:"bm-row-label",children:"Examples"}),s.jsx("span",{className:"bm-row-val",children:n.examples})]})]}),i&&s.jsxs("div",{className:"bm-bottleneck",children:[s.jsx("span",{className:"bm-bot-label",children:"Bottleneck"}),s.jsx("span",{children:i})]})]},n.id))})]})}function sp(){return s.jsxs("div",{className:"cm-wrap",children:[s.jsxs("div",{className:"cm-legend",children:[s.jsxs("span",{className:"legend-item",children:[s.jsx("span",{className:"dot maturity-mature"})," Mature"]}),s.jsxs("span",{className:"legend-item",children:[s.jsx("span",{className:"dot maturity-emerging"})," Emerging"]}),s.jsxs("span",{className:"legend-item",children:[s.jsx("span",{className:"dot maturity-limited"})," Limited"]}),s.jsxs("span",{className:"legend-item",children:[s.jsx("span",{className:"dot maturity-none"})," Not yet"]})]}),s.jsxs("table",{className:"cm-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Capital Stage"}),s.jsx("th",{children:"Cost"}),on.map(e=>s.jsxs("th",{className:"cm-tech-head",title:e.name,children:[s.jsx("span",{className:"cm-tech-icon",children:e.icon}),s.jsx("span",{className:"cm-tech-short",children:e.name.split(" ").slice(0,2).join(" ")})]},e.id))]})}),s.jsx("tbody",{children:Qf.map(e=>s.jsxs("tr",{children:[s.jsx("td",{className:"cm-stage",children:e.stage}),s.jsx("td",{className:"cm-cost",children:e.cost_pct}),on.map(t=>{const n=e.techs[t.id]||"none";return s.jsx("td",{className:`cm-cell ${Jf(n)}`,children:s.jsx("span",{className:"cm-cell-label",children:ep(n)})},t.id)})]},e.stage))})]}),s.jsx("div",{className:"cm-note",children:"Solar's journey: venture (1990s) → growth (2005) → project finance (2010) → ABS (2013) → IG (2018+). Most BTM tech is one to three stages behind. Batteries are leading; long-tail flex is still funded by venture and growth equity."})]})}function up(){return s.jsx("div",{className:"wild-grid",children:Kf.map(e=>s.jsxs("div",{className:"wild-card",children:[s.jsx("div",{className:"wild-hook",children:e.hook}),s.jsx("div",{className:"wild-title",children:e.title}),s.jsx("div",{className:"wild-body",children:e.body}),s.jsxs("div",{className:"wild-implication",children:[s.jsx("div",{className:"wild-imp-label",children:"Implication"}),s.jsx("div",{children:e.implication})]}),s.jsx("div",{className:"wild-time",children:e.timeframe})]},e.id))})}function cp(){const[e,t]=_e.useState("US"),[n,r]=_e.useState("mid"),[i,l]=_e.useState(Yi.US),a=()=>l(Yi[e]);os.useEffect(()=>{l(Yi[e])},[e]);const o=cc[e].label,u=vi[n].label;return s.jsxs("div",{className:"root",children:[s.jsx("style",{children:dp}),s.jsxs("header",{className:"hdr",children:[s.jsx("div",{className:"hdr-eyebrow",children:"Th·rd Sphere — A research instrument"}),s.jsxs("h1",{className:"hdr-title",children:["Behind ",s.jsx("span",{className:"hdr-italic",children:"the"})," Meter"]}),s.jsx("div",{className:"hdr-sub",children:"A comparison of strategies, customers, technologies, business models, and capital markets for distributed energy resources — across five geographies and three time horizons. Sliders apply your read of conditions; switching geography resets to that region's defaults."})]}),s.jsx(tp,{geo:e,setGeo:t,horizon:n,setHorizon:r,sliders:i,setSliders:l,resetSliders:a}),s.jsxs("div",{className:"context-strip",children:[s.jsxs("div",{className:"context-item",children:[s.jsx("div",{className:"context-label",children:"Viewing"}),s.jsx("div",{className:"context-val",children:o})]}),s.jsxs("div",{className:"context-item",children:[s.jsx("div",{className:"context-label",children:"Horizon"}),s.jsx("div",{className:"context-val",children:u})]}),s.jsxs("div",{className:"context-item",children:[s.jsx("div",{className:"context-label",children:"US VPP capacity, 2025"}),s.jsxs("div",{className:"context-val",children:["37.5 GW ",s.jsx("span",{className:"context-trend",children:"↑13.7% YoY"})]})]}),s.jsxs("div",{className:"context-item",children:[s.jsx("div",{className:"context-label",children:"DOE 2030 target"}),s.jsx("div",{className:"context-val",children:"80–160 GW"})]})]}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-marker",children:"I"}),s.jsx("h2",{className:"section-title",children:"Why people buy"}),s.jsx("p",{className:"section-lede",children:"Customer types and the reasons that move them. Resilience and identity grow over time; comfort, capex, and bills are durable. Switching the horizon dial shifts those growth factors up or down."}),s.jsx(np,{geo:e,horizon:n})]}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-marker",children:"II"}),s.jsx("h2",{className:"section-title",children:"Live technology ranking"}),s.jsx("p",{className:"section-lede",children:"Drag the sliders and watch the order shift. Score combines geographic fit, demand pull from the customer reasons matrix, and technology characteristics weighted by current conditions. This is the most opinionated part of the tool."}),s.jsx(rp,{geo:e,horizon:n,sliders:i})]}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-marker",children:"III"}),s.jsx("h2",{className:"section-title",children:"Technology comparison"}),s.jsx("p",{className:"section-lede",children:"Same eight technology classes, expanded view. Card order matches the ranking. Geographic fit is fixed per region; the score reflects current slider conditions."}),s.jsx(ip,{geo:e,horizon:n,sliders:i})]}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-marker",children:"IV"}),s.jsx("h2",{className:"section-title",children:"Adoption map · cost vs received value"}),s.jsx("p",{className:"section-lede",children:"Adoption ultimately falls along cost vs value. Each technology is placed by relative cost (capex + install friction on the supply side) and received value (customer demand pull from the reasons matrix, weighted by current slider conditions for flexibility, resilience, and trust). The quadrant a technology lands in implies the adoption shape it will take — mainstream pull, mandate/premium push, optional add-on, or stranded without a value-stack reset."}),s.jsx(lp,{geo:e,horizon:n,sliders:i})]}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-marker",children:"V"}),s.jsx("h2",{className:"section-title",children:"Adoption over time"}),s.jsx("p",{className:"section-lede",children:"From snapshot to trajectory. Penetration of addressable base by year, by geography. Line color matches the cost-value quadrant each tech currently occupies; solid lines are portfolio-represented technologies, dashed are adjacent categories. Trajectories embed two macro forces — the AI/datacenter capacity crunch (pulling aggregation and battery curves higher in markets with active wholesale plus hyperscaler co-funding) and the EU summer cooling surge (accelerating EU heat pump, thermostat, and battery curves as buildings designed for cold need to handle 40°C summers)."}),s.jsx(ap,{geo:e,horizon:n,sliders:i})]}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-marker",children:"VI"}),s.jsx("h2",{className:"section-title",children:"Business models"}),s.jsx("p",{className:"section-lede",children:"Solar walked from cash through PPA, lease, and loan over fifteen years. Each shift was gated by a capital market opening and a customer learning curve. The score on each model below reflects how well current slider conditions support it. Bottleneck flag shows what would unlock it."}),s.jsx(op,{sliders:i})]}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-marker",children:"VII"}),s.jsx("h2",{className:"section-title",children:"Capital markets readiness"}),s.jsx("p",{className:"section-lede",children:"Capital flows to assets it can underwrite. Each technology must traverse the stack from venture to investment grade — proving cash flow durability, contract bankability, and residual value at each step. The cost of capital at the bottom is a quarter what it is at the top."}),s.jsx(sp,{})]}),s.jsxs("section",{className:"section",children:[s.jsx("div",{className:"section-marker",children:"VIII"}),s.jsx("h2",{className:"section-title",children:"Wildcards"}),s.jsx("p",{className:"section-lede",children:"Forces that could rewrite the economics of distributed flexibility. The hyperscaler and insurance angles are particularly underappreciated — both bring deep balance sheets and different motivations than the classic utility-DR thesis."}),s.jsx(up,{})]}),s.jsxs("footer",{className:"ftr",children:[s.jsxs("div",{className:"ftr-brand",children:[s.jsx("span",{className:"ftr-wordmark",children:"Th·rd Sphere"}),s.jsx("span",{className:"ftr-tagline",children:"We forge new paths for those reimagining global systems."})]}),s.jsx("div",{className:"ftr-row",children:s.jsx("span",{children:"Sources include Wood Mackenzie 2025 NA VPP Market Report, DOE Liftoff: VPP 2025 Update, Pew Charitable Trusts, Latitude Media, LBNL South Africa Water Heating DSM Study (2024), Plentify research."})}),s.jsx("div",{className:"ftr-row ftr-meta",children:s.jsx("span",{children:"Built as a research instrument. Numbers reflect current public data and informed estimates."})})]})]})}const dp=`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  /* Backgrounds — brand: white default, light gray for panels */
  --paper: #FFFFFF;
  --paper-2: #F1F1F1;
  /* Text — black with weight contrast for hierarchy (no colored text per brand) */
  --ink: #000000;
  --ink-2: #333333;
  --ink-3: #767676;
  /* Grid lines — brand spec for white backgrounds */
  --rule: #efefef;
  --rule-soft: #efefef;
  /* Semantic data colors mapped to brand palette */
  --accent: #0000E9;      /* Blue — primary brand, used for highest intensity / best fit */
  --accent-2: #0000B5;    /* Blue darker — gradient companion */
  --gold: #00A100;        /* Green — brand secondary, used for material/medium intensity */
  --moss: #00A100;
  --teal: #767676;        /* neutral gray — low signal */
  --warm: #D90000;        /* Red — brand secondary, used sparingly for bottleneck flags */
  --cool: #767676;
  /* Typography — Poppins (brand Circular equivalent), keep mono for small labels */
  --serif: 'Poppins', system-ui, sans-serif;
  --sans: 'Poppins', system-ui, sans-serif;
  --mono: 'JetBrains Mono', monospace;
}

* { box-sizing: border-box; }

.root {
  background: var(--paper);
  color: var(--ink);
  font-family: var(--sans);
  font-size: 14px;
  line-height: 1.5;
  min-height: 100vh;
  padding: 32px 40px 80px;
  max-width: 1480px;
  margin: 0 auto;
  position: relative;
}

.root::before {
  content: '';
  position: fixed;
  inset: 0;
  background: none;
  pointer-events: none;
  z-index: 0;
}

.root > * { position: relative; z-index: 1; }

.hdr {
  border-bottom: 2px solid var(--ink);
  padding-bottom: 24px;
  margin-bottom: 24px;
}

.hdr-eyebrow {
  font-family: var(--mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--ink-3);
  margin-bottom: 8px;
}

.hdr-title {
  font-family: var(--serif);
  font-weight: 700;
  font-size: 88px;
  line-height: 0.95;
  letter-spacing: -0.025em;
  margin: 0 0 16px;
  color: var(--ink);
}

.hdr-italic {
  font-weight: 400;
  color: var(--ink);
}

.hdr-sub {
  font-family: var(--serif);
  font-size: 18px;
  line-height: 1.45;
  color: var(--ink-2);
  font-weight: 400;
  max-width: 780px;
}

.topbar {
  background: var(--paper-2);
  border: 1px solid var(--rule);
  padding: 18px 22px;
  margin-bottom: 16px;
}

.topbar-row {
  display: flex;
  gap: 24px;
  align-items: center;
  flex-wrap: wrap;
}

.topbar-group {
  display: flex;
  align-items: center;
  gap: 12px;
}

.topbar-label {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--ink-3);
}

.seg {
  display: flex;
  border: 1px solid var(--ink);
  background: var(--paper);
}

.seg-btn {
  background: transparent;
  border: none;
  border-right: 1px solid var(--rule);
  padding: 7px 14px;
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 500;
  color: var(--ink-2);
  cursor: pointer;
  transition: all 120ms ease;
  display: flex;
  align-items: center;
  gap: 6px;
}

.seg-btn:last-child { border-right: none; }
.seg-btn:hover { background: var(--paper-2); }
.seg-btn-active { background: var(--ink); color: var(--paper); }
.seg-btn-active:hover { background: var(--ink); }
.seg-flag { font-size: 11px; }

.reset-btn {
  margin-left: auto;
  padding: 7px 14px;
  background: transparent;
  border: 1px solid var(--ink-3);
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--ink-2);
  cursor: pointer;
  transition: all 120ms ease;
}

.reset-btn:hover {
  background: var(--ink);
  color: var(--paper);
  border-color: var(--ink);
}

.sliders-section {
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px dashed var(--rule);
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  gap: 32px;
}

.slider-group-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.slider-group-label {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--accent);
  font-weight: 500;
  border-bottom: 1px solid var(--rule);
  padding-bottom: 4px;
}

.slider-group-items {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.slider-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.slider-item-head {
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  gap: 6px;
}

.slider-item-name {
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 500;
  color: var(--ink-2);
}

.slider-item-val {
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 500;
  color: var(--accent);
  margin-left: auto;
  text-align: right;
}

.slider-item input[type='range'] {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 2px;
  background: var(--rule);
  outline: none;
  cursor: pointer;
}

.slider-item input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: var(--ink);
  border: 2px solid var(--paper);
  cursor: pointer;
  box-shadow: 0 0 0 1px var(--ink);
}

.slider-item input[type='range']::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: var(--ink);
  border: 2px solid var(--paper);
  cursor: pointer;
  box-shadow: 0 0 0 1px var(--ink);
}

.slider-info-btn {
  background: transparent;
  border: none;
  padding: 0;
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--mono);
  font-size: 12px;
  color: var(--ink-3);
  cursor: pointer;
  border-radius: 50%;
  transition: color 0.15s, background 0.15s;
}

.slider-info-btn:hover {
  color: var(--ink);
  background: var(--rule);
}

.slider-info-btn-open {
  color: var(--ink);
  background: var(--paper-2);
  font-size: 14px;
  font-weight: 700;
}

.slider-item-open {
  background: var(--paper-2);
  margin: 0 -10px;
  padding: 8px 10px;
  border-left: 2px solid var(--ink);
}

.slider-details {
  margin-top: 10px;
  padding: 10px 0 4px;
  border-top: 1px solid var(--rule);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.slider-details-row {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.slider-details-label {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-3);
  font-weight: 500;
}

.slider-details-text {
  font-family: var(--sans);
  font-size: 12px;
  line-height: 1.5;
  color: var(--ink-2);
}

.slider-details-sources {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.slider-source-link {
  font-family: var(--sans);
  font-size: 11px;
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 2px;
  word-break: break-word;
}

.slider-source-link:hover {
  color: var(--accent-2);
}

.context-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border: 1px solid var(--ink);
  margin-bottom: 48px;
}

.context-item {
  padding: 14px 18px;
  border-right: 1px solid var(--rule);
  background: var(--paper);
}

.context-item:last-child { border-right: none; }

.context-label {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-3);
  margin-bottom: 6px;
}

.context-val {
  font-family: var(--serif);
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.01em;
  color: var(--ink);
}

.context-trend {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--moss);
  font-weight: 500;
  margin-left: 6px;
}

.section {
  margin-bottom: 64px;
  padding-top: 8px;
}

.section-marker {
  font-family: var(--mono);
  font-size: 11px;
  text-transform: uppercase;
  color: var(--ink-3);
  margin-bottom: 8px;
  letter-spacing: 0.16em;
}

.section-title {
  font-family: var(--serif);
  font-weight: 700;
  font-size: 42px;
  letter-spacing: -0.02em;
  margin: 0 0 12px;
  color: var(--ink);
}

.section-lede {
  font-family: var(--serif);
  font-size: 17px;
  line-height: 1.55;
  color: var(--ink-2);
  font-weight: 400;
  max-width: 820px;
  margin: 0 0 28px;
}

.matrix-wrap {
  border: 1px solid var(--ink);
  background: var(--paper);
  overflow-x: auto;
}

.matrix {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

.matrix th {
  text-align: left;
  padding: 14px 16px;
  border-right: 1px solid var(--rule-soft);
  border-bottom: 1px solid var(--ink);
  background: var(--paper-2);
  vertical-align: top;
  width: 18%;
}

.matrix th:first-child {
  width: 22%;
  background: var(--ink);
}

.matrix th .th-label {
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--ink);
}

.matrix th .th-sub {
  font-family: var(--serif);
  font-size: 12px;
  font-style: normal;
  color: var(--ink-3);
  font-weight: 300;
  margin-top: 4px;
  line-height: 1.4;
}

.matrix .row-head {
  background: var(--paper-2);
  border-right: 1px solid var(--ink);
  border-bottom: 1px solid var(--rule-soft);
  padding: 16px;
  vertical-align: top;
}

.matrix .row-head-label {
  font-family: var(--serif);
  font-size: 17px;
  font-weight: 500;
  letter-spacing: -0.01em;
}

.matrix .row-head-sub {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink-3);
  margin-top: 4px;
}

.cell {
  padding: 16px;
  border-right: 1px solid var(--rule-soft);
  border-bottom: 1px solid var(--rule-soft);
  text-align: left;
  vertical-align: middle;
}

.cell-bar {
  display: flex;
  gap: 3px;
  margin-bottom: 6px;
}

.bar-pip {
  width: 16px;
  height: 4px;
  background: var(--rule);
}

.bar-pip-on { background: var(--ink); }
.cell-0 .bar-pip-on { background: var(--rule); }
.cell-1 .bar-pip-on { background: var(--cool); }
.cell-2 .bar-pip-on { background: var(--gold); }
.cell-3 .bar-pip-on { background: var(--accent); }

.cell-label {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--ink-3);
}

.cell-3 .cell-label { color: var(--ink); font-weight: 600; }
.cell-2 .cell-label { color: var(--ink); font-weight: 500; }

.ranking-wrap {
  border: 1px solid var(--ink);
  background: var(--paper);
  padding: 20px 22px;
}

.ranking-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid var(--rule);
  padding-bottom: 12px;
  margin-bottom: 16px;
}

.ranking-title {
  font-family: var(--serif);
  font-style: normal;
  font-size: 16px;
}

.ranking-sub {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-3);
}

.rank-row {
  display: grid;
  grid-template-columns: 32px 28px minmax(220px, 1.5fr) 2.5fr 50px;
  gap: 14px;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px dashed var(--rule-soft);
}

.rank-row:last-child { border-bottom: none; }

.rank-num {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--ink-3);
  letter-spacing: 0.05em;
}

.rank-icon {
  font-family: var(--serif);
  font-size: 22px;
  color: var(--accent);
  text-align: center;
}

.rank-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.rank-name {
  font-family: var(--serif);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.01em;
}

.rank-meta {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink-3);
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.rank-portfolio {
  color: var(--accent);
  font-weight: 500;
}

.rank-bar-wrap {
  height: 8px;
  background: var(--paper-2);
  border: 1px solid var(--rule);
  position: relative;
  overflow: hidden;
}

.rank-bar {
  position: absolute;
  inset: 0 auto 0 0;
  background: linear-gradient(90deg, var(--accent), var(--accent-2));
  transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1);
}

.rank-score {
  font-family: var(--serif);
  font-size: 24px;
  font-weight: 500;
  text-align: right;
  letter-spacing: -0.02em;
  color: var(--accent);
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--ink);
  border: 1px solid var(--ink);
}

@media (min-width: 1100px) {
  .tech-grid { grid-template-columns: repeat(4, 1fr); }
}

.tech-card {
  background: var(--paper);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
}

.tech-card.fit-3 { box-shadow: inset 4px 0 0 var(--accent); }
.tech-card.fit-2 { box-shadow: inset 4px 0 0 var(--gold); }
.tech-card.fit-1 { background: var(--paper-2); opacity: 0.85; }

.tech-rank {
  position: absolute;
  top: 12px;
  right: 14px;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.05em;
  color: var(--ink-3);
}

.tech-head {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  border-bottom: 1px solid var(--rule);
  padding-bottom: 12px;
  padding-right: 24px;
}

.tech-icon {
  font-family: var(--serif);
  font-size: 22px;
  color: var(--accent);
  line-height: 1;
}

.tech-name {
  font-family: var(--serif);
  font-size: 17px;
  font-weight: 500;
  letter-spacing: -0.01em;
  flex: 1;
  line-height: 1.2;
}

.fit-badge {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 3px 7px;
  border: 1px solid currentColor;
  white-space: nowrap;
  align-self: flex-start;
}

.fit-badge-3 { color: var(--accent); }
.fit-badge-2 { color: var(--gold); }
.fit-badge-1 { color: var(--ink-3); }

.tech-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 8px 0;
  border-bottom: 1px dashed var(--rule);
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.stat-label {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink-3);
}

.stat-val {
  font-family: var(--sans);
  font-size: 12px;
  font-weight: 500;
  color: var(--ink);
}

.stat-score {
  font-family: var(--serif);
  font-size: 18px;
  color: var(--accent);
  letter-spacing: -0.01em;
}

.tech-stack {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.stack-label {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--ink-3);
}

.stack-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.pill {
  font-family: var(--sans);
  font-size: 10px;
  padding: 3px 7px;
  background: var(--paper-2);
  border: 1px solid var(--rule);
  color: var(--ink-2);
  font-weight: 500;
}

.tech-note {
  font-family: var(--serif);
  font-size: 13px;
  font-style: normal;
  color: var(--ink-2);
  line-height: 1.45;
  font-weight: 300;
}

.tech-scale {
  background: var(--paper-2);
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.scale-head {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.scale-label {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-3);
  font-weight: 500;
}

.scale-headline {
  font-family: var(--sans);
  font-size: 11px;
  font-weight: 600;
  color: var(--ink);
  line-height: 1.35;
}

.scale-body {
  font-family: var(--sans);
  font-size: 11px;
  line-height: 1.5;
  color: var(--ink-2);
}

.tech-portfolio {
  margin-top: auto;
  padding-top: 10px;
  border-top: 1px dashed var(--rule);
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: help;
}

.portfolio-dot {
  width: 6px;
  height: 6px;
  background: var(--accent);
  border-radius: 50%;
}

.portfolio-text {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--ink-3);
}

.solar-history {
  margin-bottom: 28px;
  padding: 18px 22px;
  background: var(--paper-2);
  border-left: 3px solid var(--accent);
}

.solar-history-title {
  font-family: var(--serif);
  font-style: normal;
  font-size: 16px;
  color: var(--ink);
  margin-bottom: 14px;
  font-weight: 400;
}

.solar-timeline {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.solar-era {
  border-top: 2px solid var(--ink);
  padding-top: 8px;
}

.solar-era-year {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.05em;
  color: var(--ink-3);
  margin-bottom: 4px;
}

.solar-era-model {
  font-family: var(--serif);
  font-weight: 500;
  font-size: 17px;
  margin-bottom: 4px;
  letter-spacing: -0.01em;
}

.solar-era-why {
  font-size: 12px;
  color: var(--ink-2);
  line-height: 1.4;
}

.bm-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1px;
  background: var(--ink);
  border: 1px solid var(--ink);
}

.bm-card {
  background: var(--paper);
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.bm-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid var(--rule);
  padding-bottom: 10px;
  margin-bottom: 12px;
}

.bm-name {
  font-family: var(--serif);
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.01em;
}

.bm-score {
  font-family: var(--serif);
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.02em;
}

.score-strong { color: var(--accent); }
.score-mid { color: var(--gold); }
.score-weak { color: var(--ink-3); }

.bm-desc {
  font-family: var(--serif);
  font-size: 14px;
  font-style: normal;
  color: var(--ink-2);
  line-height: 1.45;
  margin-bottom: 14px;
  font-weight: 300;
}

.bm-rows {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 12px;
}

.bm-row {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 10px;
  align-items: start;
}

.bm-row-label {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--ink-3);
  padding-top: 2px;
}

.bm-row-val {
  font-size: 12px;
  color: var(--ink-2);
  line-height: 1.45;
}

.bm-bottleneck {
  margin-top: auto;
  padding-top: 10px;
  border-top: 1px dashed var(--rule);
  display: flex;
  align-items: center;
  gap: 8px;
}

.bm-bot-label {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--warm);
  font-weight: 500;
}

.bm-bottleneck > span:last-child {
  font-family: var(--sans);
  font-size: 12px;
  color: var(--ink);
  font-weight: 500;
}

.cm-wrap {
  border: 1px solid var(--ink);
  background: var(--paper);
}

.cm-legend {
  display: flex;
  gap: 18px;
  padding: 12px 18px;
  background: var(--paper-2);
  border-bottom: 1px solid var(--ink);
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--ink-2);
}

.dot {
  width: 12px;
  height: 12px;
  display: inline-block;
}

.maturity-mature { background: var(--accent); }
.maturity-emerging { background: var(--gold); }
.maturity-limited { background: var(--cool); }
.maturity-none { background: var(--rule); }

.cm-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
}

.cm-table thead th {
  padding: 12px 8px;
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink-3);
  text-align: left;
  border-bottom: 1px solid var(--ink);
  background: var(--paper-2);
  border-right: 1px solid var(--rule-soft);
  vertical-align: bottom;
}

.cm-tech-head {
  text-align: center !important;
  width: 9%;
}

.cm-tech-icon {
  display: block;
  font-family: var(--serif);
  font-size: 18px;
  color: var(--accent);
  margin-bottom: 4px;
}

.cm-tech-short {
  display: block;
  font-size: 9px;
  line-height: 1.2;
  text-transform: none;
  letter-spacing: 0;
  font-weight: 500;
  color: var(--ink);
}

.cm-stage {
  font-family: var(--serif);
  font-size: 14px;
  font-weight: 500;
  padding: 12px 14px;
  border-right: 1px solid var(--ink);
  border-bottom: 1px solid var(--rule-soft);
  background: var(--paper-2);
  letter-spacing: -0.005em;
}

.cm-cost {
  font-family: var(--mono);
  font-size: 11px;
  padding: 12px 10px;
  color: var(--ink-2);
  border-right: 1px solid var(--rule-soft);
  border-bottom: 1px solid var(--rule-soft);
  background: var(--paper);
  white-space: nowrap;
}

.cm-cell {
  text-align: center;
  padding: 12px 6px;
  border-right: 1px solid var(--rule-soft);
  border-bottom: 1px solid var(--rule-soft);
  position: relative;
}

.cm-cell.maturity-mature { background: rgba(0, 0, 233, 0.18); }
.cm-cell.maturity-emerging { background: rgba(0, 161, 0, 0.16); }
.cm-cell.maturity-limited { background: rgba(118, 118, 118, 0.1); }
.cm-cell.maturity-none { background: var(--paper); }

.cm-cell-label {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
}

.cm-cell.maturity-mature .cm-cell-label { color: var(--ink); }
.cm-cell.maturity-emerging .cm-cell-label { color: var(--ink); }
.cm-cell.maturity-limited .cm-cell-label { color: var(--ink-3); }
.cm-cell.maturity-none .cm-cell-label { color: var(--ink-3); }

.cm-note {
  padding: 14px 22px;
  font-family: var(--serif);
  font-size: 13px;
  font-style: normal;
  color: var(--ink-2);
  background: var(--paper-2);
  border-top: 1px solid var(--ink);
  font-weight: 300;
  line-height: 1.5;
}

.wild-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 18px;
}

.wild-card {
  background: var(--paper);
  border: 1px solid var(--ink);
  padding: 22px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.wild-card::before {
  content: '◆';
  position: absolute;
  top: 14px;
  right: 14px;
  font-size: 14px;
  color: var(--accent);
  opacity: 0.5;
}

.wild-hook {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--accent);
  font-weight: 500;
}

.wild-title {
  font-family: var(--serif);
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.015em;
  line-height: 1.15;
  margin: -6px 0 0;
}

.wild-body {
  font-family: var(--serif);
  font-size: 14px;
  line-height: 1.55;
  color: var(--ink-2);
  font-weight: 300;
}

.wild-implication {
  border-top: 1px solid var(--rule);
  padding-top: 12px;
}

.wild-imp-label {
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-3);
  margin-bottom: 6px;
}

.wild-implication div:last-child {
  font-size: 13px;
  line-height: 1.5;
  color: var(--ink-2);
}

.wild-time {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ink-3);
  border-top: 1px dashed var(--rule);
  padding-top: 10px;
  margin-top: auto;
}

.adoption-wrap {
  border: 1px solid var(--ink);
  background: var(--paper);
  padding: 24px 28px;
}

.adoption-header {
  border-bottom: 1px solid var(--rule);
  padding-bottom: 14px;
  margin-bottom: 18px;
}

.adoption-title {
  font-family: var(--sans);
  font-size: 14px;
  font-weight: 600;
  color: var(--ink);
}

.adoption-sub {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-3);
  margin-top: 4px;
}

.adoption-svg {
  width: 100%;
  height: auto;
  display: block;
}

.adoption-svg .quad-label {
  font-family: var(--mono);
  font-size: 10px;
  font-weight: 600;
  fill: var(--ink-3);
  letter-spacing: 0.14em;
}

.adoption-svg .quad-sub {
  font-family: var(--sans);
  font-size: 9px;
  fill: var(--ink-3);
  font-style: italic;
}

.adoption-svg .axis-label {
  font-family: var(--mono);
  font-size: 10px;
  fill: var(--ink-3);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.adoption-svg .point-label {
  font-family: var(--sans);
  font-size: 11px;
  font-weight: 500;
  fill: var(--ink);
}

.adoption-legend {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  padding-top: 18px;
  border-top: 1px solid var(--rule);
}

.legend-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.legend-head {
  display: flex;
  align-items: center;
  gap: 8px;
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.legend-name {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-weight: 600;
  color: var(--ink);
}

.legend-techs {
  font-family: var(--sans);
  font-size: 12px;
  color: var(--ink);
  font-weight: 500;
}

.legend-desc {
  font-family: var(--sans);
  font-size: 11px;
  color: var(--ink-2);
  line-height: 1.4;
}

@media (max-width: 700px) {
  .adoption-legend { grid-template-columns: 1fr; }
}

.timeline-wrap {
  border: 1px solid var(--ink);
  background: var(--paper);
  padding: 24px 28px;
}

.timeline-header {
  border-bottom: 1px solid var(--rule);
  padding-bottom: 14px;
  margin-bottom: 18px;
}

.timeline-title {
  font-family: var(--sans);
  font-size: 14px;
  font-weight: 600;
  color: var(--ink);
}

.timeline-sub {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-3);
  margin-top: 4px;
}

.timeline-svg {
  width: 100%;
  height: auto;
  display: block;
}

.timeline-svg .timeline-axis-tick {
  font-family: var(--mono);
  font-size: 10px;
  fill: var(--ink-3);
}

.timeline-svg .timeline-axis-label {
  font-family: var(--mono);
  font-size: 10px;
  fill: var(--ink-3);
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.timeline-legend {
  margin-top: 18px;
  padding-top: 14px;
  border-top: 1px solid var(--rule);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px 16px;
}

.tl-legend-row {
  display: grid;
  grid-template-columns: 16px 1fr auto auto;
  align-items: center;
  gap: 8px;
  font-family: var(--sans);
  font-size: 11px;
}

.tl-legend-swatch {
  width: 14px;
  height: 3px;
  border: 1px solid;
  border-style: solid;
}

.tl-legend-name {
  color: var(--ink);
  font-weight: 500;
}

.tl-legend-end {
  font-family: var(--mono);
  font-weight: 600;
  color: var(--ink);
  font-size: 11px;
}

.tl-legend-delta {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--ink-3);
}

.timeline-footnote {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px dashed var(--rule);
  font-family: var(--sans);
  font-size: 11px;
  color: var(--ink-2);
  line-height: 1.5;
}

@media (max-width: 700px) {
  .timeline-legend { grid-template-columns: 1fr; }
  .tl-legend-row { grid-template-columns: 16px 1fr auto; }
  .tl-legend-delta { display: none; }
}

.ftr {
  border-top: 1px solid var(--ink);
  margin-top: 80px;
  padding-top: 20px;
}

.ftr-brand {
  display: flex;
  align-items: baseline;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 16px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--rule);
}

.ftr-wordmark {
  font-family: var(--serif);
  font-weight: 700;
  font-size: 18px;
  letter-spacing: -0.01em;
  color: var(--ink);
}

.ftr-tagline {
  font-family: var(--serif);
  font-size: 13px;
  font-weight: 400;
  color: var(--ink-2);
  line-height: 1.4;
}

.ftr-row {
  font-size: 11px;
  color: var(--ink-3);
  line-height: 1.5;
  margin-bottom: 6px;
}

.ftr-meta {
  font-family: var(--mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

@media (max-width: 1100px) {
  .sliders-section { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 800px) {
  .root { padding: 20px; }
  .hdr-title { font-size: 56px; }
  .context-strip { grid-template-columns: repeat(2, 1fr); }
  .solar-timeline { grid-template-columns: 1fr; }
  .topbar-row { flex-direction: column; align-items: flex-start; gap: 12px; }
  .sliders-section { grid-template-columns: 1fr; }
  .reset-btn { margin-left: 0; }
  .rank-row {
    grid-template-columns: 28px 24px 1fr 50px;
    grid-template-rows: auto auto;
    row-gap: 8px;
  }
  .rank-bar-wrap { grid-column: 1 / -1; }
}
`;Xi.createRoot(document.getElementById("root")).render(s.jsx(os.StrictMode,{children:s.jsx(cp,{})}));
