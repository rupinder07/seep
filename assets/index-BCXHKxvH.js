(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ka(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const oe={},Qn=[],bt=()=>{},Ku=()=>!1,Fr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ur=t=>t.startsWith("onUpdate:"),xe=Object.assign,Ra=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},dp=Object.prototype.hasOwnProperty,te=(t,e)=>dp.call(t,e),W=Array.isArray,Xn=t=>Ii(t)==="[object Map]",zu=t=>Ii(t)==="[object Set]",ec=t=>Ii(t)==="[object Date]",G=t=>typeof t=="function",be=t=>typeof t=="string",Et=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",qu=t=>(ie(t)||G(t))&&G(t.then)&&G(t.catch),Yu=Object.prototype.toString,Ii=t=>Yu.call(t),hp=t=>Ii(t).slice(8,-1),Ju=t=>Ii(t)==="[object Object]",Pa=t=>be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,js=ka(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$r=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},fp=/-\w/g,it=$r(t=>t.replace(fp,e=>e.slice(1).toUpperCase())),pp=/\B([A-Z])/g,yn=$r(t=>t.replace(pp,"-$1").toLowerCase()),Qu=$r(t=>t.charAt(0).toUpperCase()+t.slice(1)),vo=$r(t=>t?`on${Qu(t)}`:""),yt=(t,e)=>!Object.is(t,e),Ji=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Xu=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Na=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let tc;const Hr=()=>tc||(tc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ys(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=be(s)?vp(s):ys(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(be(t)||ie(t))return t}const _p=/;(?![^(]*\))/g,gp=/:([^]+)/,mp=/\/\*[^]*?\*\//g;function vp(t){const e={};return t.replace(mp,"").split(_p).forEach(n=>{if(n){const s=n.split(gp);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function he(t){let e="";if(be(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=he(t[n]);s&&(e+=s+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const yp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bp=ka(yp);function Zu(t){return!!t||t===""}function wp(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Aa(t[s],e[s]);return n}function Aa(t,e){if(t===e)return!0;let n=ec(t),s=ec(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Et(t),s=Et(e),n||s)return t===e;if(n=W(t),s=W(e),n||s)return n&&s?wp(t,e):!1;if(n=ie(t),s=ie(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Aa(t[o],e[o]))return!1}}return String(t)===String(e)}const ed=t=>!!(t&&t.__v_isRef===!0),O=t=>be(t)?t:t==null?"":W(t)||ie(t)&&(t.toString===Yu||!G(t.toString))?ed(t)?O(t.value):JSON.stringify(t,td,2):String(t),td=(t,e)=>ed(e)?td(t,e.value):Xn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[yo(s,r)+" =>"]=i,n),{})}:zu(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>yo(n))}:Et(e)?yo(e):ie(e)&&!W(e)&&!Ju(e)?String(e):e,yo=(t,e="")=>{var n;return Et(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pe;class Ip{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Pe,!e&&Pe&&(this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Pe;try{return Pe=this,e()}finally{Pe=n}}}on(){++this._on===1&&(this.prevScope=Pe,Pe=this)}off(){if(this._on>0&&--this._on===0){if(Pe===this)Pe=this.prevScope;else{let e=Pe;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Ep(){return Pe}let ue;const bo=new WeakSet;class nd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Pe&&Pe.active&&Pe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,bo.has(this)&&(bo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||id(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nc(this),rd(this);const e=ue,n=rt;ue=this,rt=!0;try{return this.fn()}finally{od(this),ue=e,rt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Da(e);this.deps=this.depsTail=void 0,nc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?bo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Go(this)&&this.run()}get dirty(){return Go(this)}}let sd=0,Gs,Ks;function id(t,e=!1){if(t.flags|=8,e){t.next=Ks,Ks=t;return}t.next=Gs,Gs=t}function Oa(){sd++}function xa(){if(--sd>0)return;if(Ks){let e=Ks;for(Ks=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Gs;){let e=Gs;for(Gs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function rd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function od(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Da(s),Cp(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Go(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ad(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ad(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ri)||(t.globalVersion=ri,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Go(t))))return;t.flags|=2;const e=t.dep,n=ue,s=rt;ue=t,rt=!0;try{rd(t);const i=t.fn(t._value);(e.version===0||yt(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ue=n,rt=s,od(t),t.flags&=-3}}function Da(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Da(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Cp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let rt=!0;const ld=[];function $t(){ld.push(rt),rt=!1}function Ht(){const t=ld.pop();rt=t===void 0?!0:t}function nc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ue;ue=void 0;try{e()}finally{ue=n}}}let ri=0;class Sp{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ma{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ue||!rt||ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ue)n=this.activeLink=new Sp(ue,this),ue.deps?(n.prevDep=ue.depsTail,ue.depsTail.nextDep=n,ue.depsTail=n):ue.deps=ue.depsTail=n,cd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ue.depsTail,n.nextDep=void 0,ue.depsTail.nextDep=n,ue.depsTail=n,ue.deps===n&&(ue.deps=s)}return n}trigger(e){this.version++,ri++,this.notify(e)}notify(e){Oa();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{xa()}}}function cd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)cd(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ko=new WeakMap,On=Symbol(""),zo=Symbol(""),oi=Symbol("");function Ne(t,e,n){if(rt&&ue){let s=Ko.get(t);s||Ko.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Ma),i.map=s,i.key=n),i.track()}}function Nt(t,e,n,s,i,r){const o=Ko.get(t);if(!o){ri++;return}const a=l=>{l&&l.trigger()};if(Oa(),e==="clear")o.forEach(a);else{const l=W(t),c=l&&Pa(n);if(l&&n==="length"){const u=Number(s);o.forEach((d,f)=>{(f==="length"||f===oi||!Et(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(oi)),e){case"add":l?c&&a(o.get("length")):(a(o.get(On)),Xn(t)&&a(o.get(zo)));break;case"delete":l||(a(o.get(On)),Xn(t)&&a(o.get(zo)));break;case"set":Xn(t)&&a(o.get(On));break}}xa()}function Vn(t){const e=ee(t);return e===t?e:(Ne(e,"iterate",oi),Xe(t)?e:e.map(at))}function Br(t){return Ne(t=ee(t),"iterate",oi),t}function mt(t,e){return Bt(t)?as(xn(t)?at(e):e):at(e)}const Tp={__proto__:null,[Symbol.iterator](){return wo(this,Symbol.iterator,t=>mt(this,t))},concat(...t){return Vn(this).concat(...t.map(e=>W(e)?Vn(e):e))},entries(){return wo(this,"entries",t=>(t[1]=mt(this,t[1]),t))},every(t,e){return kt(this,"every",t,e,void 0,arguments)},filter(t,e){return kt(this,"filter",t,e,n=>n.map(s=>mt(this,s)),arguments)},find(t,e){return kt(this,"find",t,e,n=>mt(this,n),arguments)},findIndex(t,e){return kt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return kt(this,"findLast",t,e,n=>mt(this,n),arguments)},findLastIndex(t,e){return kt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return kt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Io(this,"includes",t)},indexOf(...t){return Io(this,"indexOf",t)},join(t){return Vn(this).join(t)},lastIndexOf(...t){return Io(this,"lastIndexOf",t)},map(t,e){return kt(this,"map",t,e,void 0,arguments)},pop(){return xs(this,"pop")},push(...t){return xs(this,"push",t)},reduce(t,...e){return sc(this,"reduce",t,e)},reduceRight(t,...e){return sc(this,"reduceRight",t,e)},shift(){return xs(this,"shift")},some(t,e){return kt(this,"some",t,e,void 0,arguments)},splice(...t){return xs(this,"splice",t)},toReversed(){return Vn(this).toReversed()},toSorted(t){return Vn(this).toSorted(t)},toSpliced(...t){return Vn(this).toSpliced(...t)},unshift(...t){return xs(this,"unshift",t)},values(){return wo(this,"values",t=>mt(this,t))}};function wo(t,e,n){const s=Br(t),i=s[e]();return s!==t&&!Xe(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.done||(r.value=n(r.value)),r}),i}const kp=Array.prototype;function kt(t,e,n,s,i,r){const o=Br(t),a=o!==t&&!Xe(t),l=o[e];if(l!==kp[e]){const d=l.apply(t,r);return a?at(d):d}let c=n;o!==t&&(a?c=function(d,f){return n.call(this,mt(t,d),f,t)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function sc(t,e,n,s){const i=Br(t),r=i!==t&&!Xe(t);let o=n,a=!1;i!==t&&(r?(a=s.length===0,o=function(c,u,d){return a&&(a=!1,c=mt(t,c)),n.call(this,c,mt(t,u),d,t)}):n.length>3&&(o=function(c,u,d){return n.call(this,c,u,d,t)}));const l=i[e](o,...s);return a?mt(t,l):l}function Io(t,e,n){const s=ee(t);Ne(s,"iterate",oi);const i=s[e](...n);return(i===-1||i===!1)&&Ua(n[0])?(n[0]=ee(n[0]),s[e](...n)):i}function xs(t,e,n=[]){$t(),Oa();const s=ee(t)[e].apply(t,n);return xa(),Ht(),s}const Rp=ka("__proto__,__v_isRef,__isVue"),ud=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Et));function Pp(t){Et(t)||(t=String(t));const e=ee(this);return Ne(e,"has",t),e.hasOwnProperty(t)}class dd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?$p:_d:r?pd:fd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=W(e);if(!i){let l;if(o&&(l=Tp[n]))return l;if(n==="hasOwnProperty")return Pp}const a=Reflect.get(e,n,Oe(e)?e:s);if((Et(n)?ud.has(n):Rp(n))||(i||Ne(e,"get",n),r))return a;if(Oe(a)){const l=o&&Pa(n)?a:a.value;return i&&ie(l)?Yo(l):l}return ie(a)?i?Yo(a):bn(a):a}}class hd extends dd{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];const o=W(e)&&Pa(n);if(!this._isShallow){const c=Bt(r);if(!Xe(s)&&!Bt(s)&&(r=ee(r),s=ee(s)),!o&&Oe(r)&&!Oe(s))return c||(r.value=s),!0}const a=o?Number(n)<e.length:te(e,n),l=Reflect.set(e,n,s,Oe(e)?e:i);return e===ee(i)&&(a?yt(s,r)&&Nt(e,"set",n,s):Nt(e,"add",n,s)),l}deleteProperty(e,n){const s=te(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Nt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Et(n)||!ud.has(n))&&Ne(e,"has",n),s}ownKeys(e){return Ne(e,"iterate",W(e)?"length":On),Reflect.ownKeys(e)}}class Np extends dd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ap=new hd,Op=new Np,xp=new hd(!0);const qo=t=>t,Wi=t=>Reflect.getPrototypeOf(t);function Dp(t,e,n){return function(...s){const i=this.__v_raw,r=ee(i),o=Xn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?qo:e?as:at;return!e&&Ne(r,"iterate",l?zo:On),xe(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function Vi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Mp(t,e){const n={get(i){const r=this.__v_raw,o=ee(r),a=ee(i);t||(yt(i,a)&&Ne(o,"get",i),Ne(o,"get",a));const{has:l}=Wi(o),c=e?qo:t?as:at;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Ne(ee(i),"iterate",On),i.size},has(i){const r=this.__v_raw,o=ee(r),a=ee(i);return t||(yt(i,a)&&Ne(o,"has",i),Ne(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=ee(a),c=e?qo:t?as:at;return!t&&Ne(l,"iterate",On),a.forEach((u,d)=>i.call(r,c(u),c(d),o))}};return xe(n,t?{add:Vi("add"),set:Vi("set"),delete:Vi("delete"),clear:Vi("clear")}:{add(i){const r=ee(this),o=Wi(r),a=ee(i),l=!e&&!Xe(i)&&!Bt(i)?a:i;return o.has.call(r,l)||yt(i,l)&&o.has.call(r,i)||yt(a,l)&&o.has.call(r,a)||(r.add(l),Nt(r,"add",l,l)),this},set(i,r){!e&&!Xe(r)&&!Bt(r)&&(r=ee(r));const o=ee(this),{has:a,get:l}=Wi(o);let c=a.call(o,i);c||(i=ee(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?yt(r,u)&&Nt(o,"set",i,r):Nt(o,"add",i,r),this},delete(i){const r=ee(this),{has:o,get:a}=Wi(r);let l=o.call(r,i);l||(i=ee(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&Nt(r,"delete",i,void 0),c},clear(){const i=ee(this),r=i.size!==0,o=i.clear();return r&&Nt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Dp(i,t,e)}),n}function La(t,e){const n=Mp(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(te(n,i)&&i in s?n:s,i,r)}const Lp={get:La(!1,!1)},Fp={get:La(!1,!0)},Up={get:La(!0,!1)};const fd=new WeakMap,pd=new WeakMap,_d=new WeakMap,$p=new WeakMap;function Hp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bp(t){return t.__v_skip||!Object.isExtensible(t)?0:Hp(hp(t))}function bn(t){return Bt(t)?t:Fa(t,!1,Ap,Lp,fd)}function Wp(t){return Fa(t,!1,xp,Fp,pd)}function Yo(t){return Fa(t,!0,Op,Up,_d)}function Fa(t,e,n,s,i){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=Bp(t);if(r===0)return t;const o=i.get(t);if(o)return o;const a=new Proxy(t,r===2?s:n);return i.set(t,a),a}function xn(t){return Bt(t)?xn(t.__v_raw):!!(t&&t.__v_isReactive)}function Bt(t){return!!(t&&t.__v_isReadonly)}function Xe(t){return!!(t&&t.__v_isShallow)}function Ua(t){return t?!!t.__v_raw:!1}function ee(t){const e=t&&t.__v_raw;return e?ee(e):t}function Vp(t){return!te(t,"__v_skip")&&Object.isExtensible(t)&&Xu(t,"__v_skip",!0),t}const at=t=>ie(t)?bn(t):t,as=t=>ie(t)?Yo(t):t;function Oe(t){return t?t.__v_isRef===!0:!1}function Pn(t){return jp(t,!1)}function jp(t,e){return Oe(t)?t:new Gp(t,e)}class Gp{constructor(e,n){this.dep=new Ma,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ee(e),this._value=n?e:at(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Xe(e)||Bt(e);e=s?e:ee(e),yt(e,n)&&(this._rawValue=e,this._value=s?e:at(e),this.dep.trigger())}}function S(t){return Oe(t)?t.value:t}const Kp={get:(t,e,n)=>e==="__v_raw"?t:S(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Oe(i)&&!Oe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function gd(t){return xn(t)?t:new Proxy(t,Kp)}class zp{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ma(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ri-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ue!==this)return id(this,!0),!0}get value(){const e=this.dep.track();return ad(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function qp(t,e,n=!1){let s,i;return G(t)?s=t:(s=t.get,i=t.set),new zp(s,i,n)}const ji={},ir=new WeakMap;let Tn;function Yp(t,e=!1,n=Tn){if(n){let s=ir.get(n);s||ir.set(n,s=[]),s.push(t)}}function Jp(t,e,n=oe){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=M=>i?M:Xe(M)||i===!1||i===0?At(M,1):At(M);let u,d,f,_,w=!1,v=!1;if(Oe(t)?(d=()=>t.value,w=Xe(t)):xn(t)?(d=()=>c(t),w=!0):W(t)?(v=!0,w=t.some(M=>xn(M)||Xe(M)),d=()=>t.map(M=>{if(Oe(M))return M.value;if(xn(M))return c(M);if(G(M))return l?l(M,2):M()})):G(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){$t();try{f()}finally{Ht()}}const M=Tn;Tn=u;try{return l?l(t,3,[_]):t(_)}finally{Tn=M}}:d=bt,e&&i){const M=d,ye=i===!0?1/0:i;d=()=>At(M(),ye)}const A=Ep(),$=()=>{u.stop(),A&&A.active&&Ra(A.effects,u)};if(r&&e){const M=e;e=(...ye)=>{M(...ye),$()}}let j=v?new Array(t.length).fill(ji):ji;const Q=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const ye=u.run();if(i||w||(v?ye.some((Ye,Ve)=>yt(Ye,j[Ve])):yt(ye,j))){f&&f();const Ye=Tn;Tn=u;try{const Ve=[ye,j===ji?void 0:v&&j[0]===ji?[]:j,_];j=ye,l?l(e,3,Ve):e(...Ve)}finally{Tn=Ye}}}else u.run()};return a&&a(Q),u=new nd(d),u.scheduler=o?()=>o(Q,!1):Q,_=M=>Yp(M,!1,u),f=u.onStop=()=>{const M=ir.get(u);if(M){if(l)l(M,4);else for(const ye of M)ye();ir.delete(u)}},e?s?Q(!0):j=u.run():o?o(Q.bind(null,!0),!0):u.run(),$.pause=u.pause.bind(u),$.resume=u.resume.bind(u),$.stop=$,$}function At(t,e=1/0,n){if(e<=0||!ie(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Oe(t))At(t.value,e,n);else if(W(t))for(let s=0;s<t.length;s++)At(t[s],e,n);else if(zu(t)||Xn(t))t.forEach(s=>{At(s,e,n)});else if(Ju(t)){for(const s in t)At(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&At(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ei(t,e,n,s){try{return s?t(...s):t()}catch(i){Wr(i,e,n)}}function Ct(t,e,n,s){if(G(t)){const i=Ei(t,e,n,s);return i&&qu(i)&&i.catch(r=>{Wr(r,e,n)}),i}if(W(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Ct(t[r],e,n,s));return i}}function Wr(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||oe;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(r){$t(),Ei(r,null,10,[t,l,c]),Ht();return}}Qp(t,n,i,s,o)}function Qp(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Le=[];let gt=-1;const Zn=[];let Xt=null,Kn=0;const md=Promise.resolve();let rr=null;function Xp(t){const e=rr||md;return t?e.then(this?t.bind(this):t):e}function Zp(t){let e=gt+1,n=Le.length;for(;e<n;){const s=e+n>>>1,i=Le[s],r=ai(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function $a(t){if(!(t.flags&1)){const e=ai(t),n=Le[Le.length-1];!n||!(t.flags&2)&&e>=ai(n)?Le.push(t):Le.splice(Zp(e),0,t),t.flags|=1,vd()}}function vd(){rr||(rr=md.then(bd))}function e_(t){W(t)?Zn.push(...t):Xt&&t.id===-1?Xt.splice(Kn+1,0,t):t.flags&1||(Zn.push(t),t.flags|=1),vd()}function ic(t,e,n=gt+1){for(;n<Le.length;n++){const s=Le[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Le.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function yd(t){if(Zn.length){const e=[...new Set(Zn)].sort((n,s)=>ai(n)-ai(s));if(Zn.length=0,Xt){Xt.push(...e);return}for(Xt=e,Kn=0;Kn<Xt.length;Kn++){const n=Xt[Kn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Xt=null,Kn=0}}const ai=t=>t.id==null?t.flags&2?-1:1/0:t.id;function bd(t){try{for(gt=0;gt<Le.length;gt++){const e=Le[gt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ei(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;gt<Le.length;gt++){const e=Le[gt];e&&(e.flags&=-2)}gt=-1,Le.length=0,yd(),rr=null,(Le.length||Zn.length)&&bd()}}let Je=null,wd=null;function or(t){const e=Je;return Je=t,wd=t&&t.type.__scopeId||null,e}function t_(t,e=Je,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&_c(-1);const r=or(e);let o;try{o=t(...i)}finally{or(r),s._d&&_c(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Zt(t,e){if(Je===null)return t;const n=Kr(Je),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=oe]=e[i];r&&(G(r)&&(r={mounted:r,updated:r}),r.deep&&At(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Cn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&($t(),Ct(l,n,8,[t.el,a,t,e]),Ht())}}function n_(t,e){if(Fe){let n=Fe.provides;const s=Fe.parent&&Fe.parent.provides;s===n&&(n=Fe.provides=Object.create(s)),n[t]=e}}function Qi(t,e,n=!1){const s=eg();if(s||es){let i=es?es._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&G(e)?e.call(s&&s.proxy):e}}const s_=Symbol.for("v-scx"),i_=()=>Qi(s_);function zs(t,e,n){return Id(t,e,n)}function Id(t,e,n=oe){const{immediate:s,deep:i,flush:r,once:o}=n,a=xe({},n),l=e&&s||!e&&r!=="post";let c;if(ci){if(r==="sync"){const _=i_();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=bt,_.resume=bt,_.pause=bt,_}}const u=Fe;a.call=(_,w,v)=>Ct(_,u,w,v);let d=!1;r==="post"?a.scheduler=_=>{Be(_,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(_,w)=>{w?_():$a(_)}),a.augmentJob=_=>{e&&(_.flags|=4),d&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const f=Jp(t,e,a);return ci&&(c?c.push(f):l&&f()),f}function r_(t,e,n){const s=this.proxy,i=be(t)?t.includes(".")?Ed(s,t):()=>s[t]:t.bind(s,s);let r;G(e)?r=e:(r=e.handler,n=e);const o=Ci(this),a=Id(i,r.bind(s),n);return o(),a}function Ed(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const o_=Symbol("_vte"),a_=t=>t.__isTeleport,l_=Symbol("_leaveCb");function Ha(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ha(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Cd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function rc(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const ar=new WeakMap;function qs(t,e,n,s,i=!1){if(W(t)){t.forEach((v,A)=>qs(v,e&&(W(e)?e[A]:e),n,s,i));return}if(Ys(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&qs(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Kr(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===oe?a.refs={}:a.refs,d=a.setupState,f=ee(d),_=d===oe?Ku:v=>rc(u,v)?!1:te(f,v),w=(v,A)=>!(A&&rc(u,A));if(c!=null&&c!==l){if(oc(e),be(c))u[c]=null,_(c)&&(d[c]=null);else if(Oe(c)){const v=e;w(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(G(l))Ei(l,a,12,[o,u]);else{const v=be(l),A=Oe(l);if(v||A){const $=()=>{if(t.f){const j=v?_(l)?d[l]:u[l]:w()||!t.k?l.value:u[t.k];if(i)W(j)&&Ra(j,r);else if(W(j))j.includes(r)||j.push(r);else if(v)u[l]=[r],_(l)&&(d[l]=u[l]);else{const Q=[r];w(l,t.k)&&(l.value=Q),t.k&&(u[t.k]=Q)}}else v?(u[l]=o,_(l)&&(d[l]=o)):A&&(w(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const j=()=>{$(),ar.delete(t)};j.id=-1,ar.set(t,j),Be(j,n)}else oc(t),$()}}}function oc(t){const e=ar.get(t);e&&(e.flags|=8,ar.delete(t))}Hr().requestIdleCallback;Hr().cancelIdleCallback;const Ys=t=>!!t.type.__asyncLoader,Sd=t=>t.type.__isKeepAlive;function c_(t,e){Td(t,"a",e)}function u_(t,e){Td(t,"da",e)}function Td(t,e,n=Fe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Vr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Sd(i.parent.vnode)&&d_(s,e,n,i),i=i.parent}}function d_(t,e,n,s){const i=Vr(e,t,s,!0);Wa(()=>{Ra(s[e],i)},n)}function Vr(t,e,n=Fe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{$t();const a=Ci(n),l=Ct(e,n,t,o);return a(),Ht(),l});return s?i.unshift(r):i.push(r),r}}const qt=t=>(e,n=Fe)=>{(!ci||t==="sp")&&Vr(t,(...s)=>e(...s),n)},h_=qt("bm"),Ba=qt("m"),f_=qt("bu"),p_=qt("u"),__=qt("bum"),Wa=qt("um"),g_=qt("sp"),m_=qt("rtg"),v_=qt("rtc");function y_(t,e=Fe){Vr("ec",t,e)}const b_=Symbol.for("v-ndc");function Wt(t,e,n,s){let i;const r=n,o=W(t);if(o||be(t)){const a=o&&xn(t);let l=!1,c=!1;a&&(l=!Xe(t),c=Bt(t),t=Br(t)),i=new Array(t.length);for(let u=0,d=t.length;u<d;u++)i[u]=e(l?c?as(at(t[u])):at(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(ie(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}const Jo=t=>t?zd(t)?Kr(t):Jo(t.parent):null,Js=xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Jo(t.parent),$root:t=>Jo(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Rd(t),$forceUpdate:t=>t.f||(t.f=()=>{$a(t.update)}),$nextTick:t=>t.n||(t.n=Xp.bind(t.proxy)),$watch:t=>r_.bind(t)}),Eo=(t,e)=>t!==oe&&!t.__isScriptSetup&&te(t,e),w_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Eo(s,e))return o[e]=1,s[e];if(i!==oe&&te(i,e))return o[e]=2,i[e];if(te(r,e))return o[e]=3,r[e];if(n!==oe&&te(n,e))return o[e]=4,n[e];Qo&&(o[e]=0)}}const c=Js[e];let u,d;if(c)return e==="$attrs"&&Ne(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==oe&&te(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,te(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Eo(i,e)?(i[e]=n,!0):s!==oe&&te(s,e)?(s[e]=n,!0):te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,props:r,type:o}},a){let l;return!!(n[a]||t!==oe&&a[0]!=="$"&&te(t,a)||Eo(e,a)||te(r,a)||te(s,a)||te(Js,a)||te(i.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ac(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Qo=!0;function I_(t){const e=Rd(t),n=t.proxy,s=t.ctx;Qo=!1,e.beforeCreate&&lc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:_,updated:w,activated:v,deactivated:A,beforeDestroy:$,beforeUnmount:j,destroyed:Q,unmounted:M,render:ye,renderTracked:Ye,renderTriggered:Ve,errorCaptured:ct,serverPrefetch:Jt,expose:Tt,inheritAttrs:Ps,components:Ui,directives:$i,filters:go}=e;if(c&&E_(c,s,null),o)for(const ge in o){const le=o[ge];G(le)&&(s[ge]=le.bind(n))}if(i){const ge=i.call(n,n);ie(ge)&&(t.data=bn(ge))}if(Qo=!0,r)for(const ge in r){const le=r[ge],In=G(le)?le.bind(n,n):G(le.get)?le.get.bind(n,n):bt,Hi=!G(le)&&G(le.set)?le.set.bind(n):bt,En=K({get:In,set:Hi});Object.defineProperty(s,ge,{enumerable:!0,configurable:!0,get:()=>En.value,set:ut=>En.value=ut})}if(a)for(const ge in a)kd(a[ge],s,n,ge);if(l){const ge=G(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(le=>{n_(le,ge[le])})}u&&lc(u,t,"c");function De(ge,le){W(le)?le.forEach(In=>ge(In.bind(n))):le&&ge(le.bind(n))}if(De(h_,d),De(Ba,f),De(f_,_),De(p_,w),De(c_,v),De(u_,A),De(y_,ct),De(v_,Ye),De(m_,Ve),De(__,j),De(Wa,M),De(g_,Jt),W(Tt))if(Tt.length){const ge=t.exposed||(t.exposed={});Tt.forEach(le=>{Object.defineProperty(ge,le,{get:()=>n[le],set:In=>n[le]=In,enumerable:!0})})}else t.exposed||(t.exposed={});ye&&t.render===bt&&(t.render=ye),Ps!=null&&(t.inheritAttrs=Ps),Ui&&(t.components=Ui),$i&&(t.directives=$i),Jt&&Cd(t)}function E_(t,e,n=bt){W(t)&&(t=Xo(t));for(const s in t){const i=t[s];let r;ie(i)?"default"in i?r=Qi(i.from||s,i.default,!0):r=Qi(i.from||s):r=Qi(i),Oe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function lc(t,e,n){Ct(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function kd(t,e,n,s){let i=s.includes(".")?Ed(n,s):()=>n[s];if(be(t)){const r=e[t];G(r)&&zs(i,r)}else if(G(t))zs(i,t.bind(n));else if(ie(t))if(W(t))t.forEach(r=>kd(r,e,n,s));else{const r=G(t.handler)?t.handler.bind(n):e[t.handler];G(r)&&zs(i,r,t)}}function Rd(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>lr(l,c,o,!0)),lr(l,e,o)),ie(e)&&r.set(e,l),l}function lr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&lr(t,r,n,!0),i&&i.forEach(o=>lr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=C_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const C_={data:cc,props:uc,emits:uc,methods:Ws,computed:Ws,beforeCreate:Me,created:Me,beforeMount:Me,mounted:Me,beforeUpdate:Me,updated:Me,beforeDestroy:Me,beforeUnmount:Me,destroyed:Me,unmounted:Me,activated:Me,deactivated:Me,errorCaptured:Me,serverPrefetch:Me,components:Ws,directives:Ws,watch:T_,provide:cc,inject:S_};function cc(t,e){return e?t?function(){return xe(G(t)?t.call(this,this):t,G(e)?e.call(this,this):e)}:e:t}function S_(t,e){return Ws(Xo(t),Xo(e))}function Xo(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Me(t,e){return t?[...new Set([].concat(t,e))]:e}function Ws(t,e){return t?xe(Object.create(null),t,e):e}function uc(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:xe(Object.create(null),ac(t),ac(e??{})):e}function T_(t,e){if(!t)return e;if(!e)return t;const n=xe(Object.create(null),t);for(const s in e)n[s]=Me(t[s],e[s]);return n}function Pd(){return{app:null,config:{isNativeTag:Ku,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let k_=0;function R_(t,e){return function(s,i=null){G(s)||(s=xe({},s)),i!=null&&!ie(i)&&(i=null);const r=Pd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:k_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:og,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&G(u.install)?(o.add(u),u.install(c,...d)):G(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const _=c._ceVNode||pe(s,i);return _.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(_,u,f),l=!0,c._container=u,u.__vue_app__=c,Kr(_.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Ct(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=es;es=c;try{return u()}finally{es=d}}};return c}}let es=null;const P_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${it(e)}Modifiers`]||t[`${yn(e)}Modifiers`];function N_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||oe;let i=n;const r=e.startsWith("update:"),o=r&&P_(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>be(u)?u.trim():u)),o.number&&(i=n.map(Na)));let a,l=s[a=vo(e)]||s[a=vo(it(e))];!l&&r&&(l=s[a=vo(yn(e))]),l&&Ct(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ct(c,t,6,i)}}const A_=new WeakMap;function Nd(t,e,n=!1){const s=n?A_:e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!G(t)){const l=c=>{const u=Nd(c,e,!0);u&&(a=!0,xe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ie(t)&&s.set(t,null),null):(W(r)?r.forEach(l=>o[l]=null):xe(o,r),ie(t)&&s.set(t,o),o)}function jr(t,e){return!t||!Fr(e)?!1:(e=e.slice(2).replace(/Once$/,""),te(t,e[0].toLowerCase()+e.slice(1))||te(t,yn(e))||te(t,e))}function dc(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:_,ctx:w,inheritAttrs:v}=t,A=or(t);let $,j;try{if(n.shapeFlag&4){const M=i||s,ye=M;$=vt(c.call(ye,M,u,d,_,f,w)),j=a}else{const M=e;$=vt(M.length>1?M(d,{attrs:a,slots:o,emit:l}):M(d,null)),j=e.props?a:O_(a)}}catch(M){Qs.length=0,Wr(M,t,1),$=pe(hn)}let Q=$;if(j&&v!==!1){const M=Object.keys(j),{shapeFlag:ye}=Q;M.length&&ye&7&&(r&&M.some(Ur)&&(j=x_(j,r)),Q=cs(Q,j,!1,!0))}return n.dirs&&(Q=cs(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&Ha(Q,n.transition),$=Q,or(A),$}const O_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fr(n))&&((e||(e={}))[n]=t[n]);return e},x_=(t,e)=>{const n={};for(const s in t)(!Ur(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function D_(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?hc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(Ad(o,s,f)&&!jr(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?hc(s,o,c):!0:!!o;return!1}function hc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(Ad(e,t,r)&&!jr(n,r))return!0}return!1}function Ad(t,e,n){const s=t[n],i=e[n];return n==="style"&&ie(s)&&ie(i)?!Aa(s,i):s!==i}function M_({vnode:t,parent:e,suspense:n},s){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.suspense.vnode.el=i.el=s,t=i),i===t)(t=e.vnode).el=s,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=s)}const Od={},xd=()=>Object.create(Od),Dd=t=>Object.getPrototypeOf(t)===Od;function L_(t,e,n,s=!1){const i={},r=xd();t.propsDefaults=Object.create(null),Md(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Wp(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function F_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ee(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(jr(t.emitsOptions,f))continue;const _=e[f];if(l)if(te(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const w=it(f);i[w]=Zo(l,a,w,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{Md(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!te(e,d)&&((u=yn(d))===d||!te(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Zo(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!te(e,d))&&(delete r[d],c=!0)}c&&Nt(t.attrs,"set","")}function Md(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(js(l))continue;const c=e[l];let u;i&&te(i,u=it(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:jr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ee(n),c=a||oe;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Zo(i,l,d,c[d],t,!te(c,d))}}return o}function Zo(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=te(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&G(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Ci(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===yn(n))&&(s=!0))}return s}const U_=new WeakMap;function Ld(t,e,n=!1){const s=n?U_:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!G(t)){const u=d=>{l=!0;const[f,_]=Ld(d,e,!0);xe(o,f),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ie(t)&&s.set(t,Qn),Qn;if(W(r))for(let u=0;u<r.length;u++){const d=it(r[u]);fc(d)&&(o[d]=oe)}else if(r)for(const u in r){const d=it(u);if(fc(d)){const f=r[u],_=o[d]=W(f)||G(f)?{type:f}:xe({},f),w=_.type;let v=!1,A=!0;if(W(w))for(let $=0;$<w.length;++$){const j=w[$],Q=G(j)&&j.name;if(Q==="Boolean"){v=!0;break}else Q==="String"&&(A=!1)}else v=G(w)&&w.name==="Boolean";_[0]=v,_[1]=A,(v||te(_,"default"))&&a.push(d)}}const c=[o,a];return ie(t)&&s.set(t,c),c}function fc(t){return t[0]!=="$"&&!js(t)}const Va=t=>t==="_"||t==="_ctx"||t==="$stable",ja=t=>W(t)?t.map(vt):[vt(t)],$_=(t,e,n)=>{if(e._n)return e;const s=t_((...i)=>ja(e(...i)),n);return s._c=!1,s},Fd=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Va(i))continue;const r=t[i];if(G(r))e[i]=$_(i,r,s);else if(r!=null){const o=ja(r);e[i]=()=>o}}},Ud=(t,e)=>{const n=ja(e);t.slots.default=()=>n},$d=(t,e,n)=>{for(const s in e)(n||!Va(s))&&(t[s]=e[s])},H_=(t,e,n)=>{const s=t.slots=xd();if(t.vnode.shapeFlag&32){const i=e._;i?($d(s,e,n),n&&Xu(s,"_",i,!0)):Fd(e,s)}else e&&Ud(t,e)},B_=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=oe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:$d(i,e,n):(r=!e.$stable,Fd(e,i)),o=e}else e&&(Ud(t,e),o={default:1});if(r)for(const a in i)!Va(a)&&o[a]==null&&delete i[a]},Be=K_;function W_(t){return V_(t)}function V_(t,e){const n=Hr();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:_=bt,insertStaticContent:w}=t,v=(h,p,m,C=null,y=null,I=null,P=void 0,R=null,k=!!p.dynamicChildren)=>{if(h===p)return;h&&!Ds(h,p)&&(C=Bi(h),ut(h,y,I,!0),h=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:E,ref:L,shapeFlag:N}=p;switch(E){case Gr:A(h,p,m,C);break;case hn:$(h,p,m,C);break;case So:h==null&&j(p,m,C,P);break;case fe:Ui(h,p,m,C,y,I,P,R,k);break;default:N&1?ye(h,p,m,C,y,I,P,R,k):N&6?$i(h,p,m,C,y,I,P,R,k):(N&64||N&128)&&E.process(h,p,m,C,y,I,P,R,k,As)}L!=null&&y?qs(L,h&&h.ref,I,p||h,!p):L==null&&h&&h.ref!=null&&qs(h.ref,null,I,h,!0)},A=(h,p,m,C)=>{if(h==null)s(p.el=a(p.children),m,C);else{const y=p.el=h.el;p.children!==h.children&&c(y,p.children)}},$=(h,p,m,C)=>{h==null?s(p.el=l(p.children||""),m,C):p.el=h.el},j=(h,p,m,C)=>{[h.el,h.anchor]=w(h.children,p,m,C,h.el,h.anchor)},Q=({el:h,anchor:p},m,C)=>{let y;for(;h&&h!==p;)y=f(h),s(h,m,C),h=y;s(p,m,C)},M=({el:h,anchor:p})=>{let m;for(;h&&h!==p;)m=f(h),i(h),h=m;i(p)},ye=(h,p,m,C,y,I,P,R,k)=>{if(p.type==="svg"?P="svg":p.type==="math"&&(P="mathml"),h==null)Ye(p,m,C,y,I,P,R,k);else{const E=h.el&&h.el._isVueCE?h.el:null;try{E&&E._beginPatch(),Jt(h,p,y,I,P,R,k)}finally{E&&E._endPatch()}}},Ye=(h,p,m,C,y,I,P,R)=>{let k,E;const{props:L,shapeFlag:N,transition:D,dirs:H}=h;if(k=h.el=o(h.type,I,L&&L.is,L),N&8?u(k,h.children):N&16&&ct(h.children,k,null,C,y,Co(h,I),P,R),H&&Cn(h,null,C,"created"),Ve(k,h,h.scopeId,P,C),L){for(const re in L)re!=="value"&&!js(re)&&r(k,re,null,L[re],I,C);"value"in L&&r(k,"value",null,L.value,I),(E=L.onVnodeBeforeMount)&&pt(E,C,h)}H&&Cn(h,null,C,"beforeMount");const X=j_(y,D);X&&D.beforeEnter(k),s(k,p,m),((E=L&&L.onVnodeMounted)||X||H)&&Be(()=>{try{E&&pt(E,C,h),X&&D.enter(k),H&&Cn(h,null,C,"mounted")}finally{}},y)},Ve=(h,p,m,C,y)=>{if(m&&_(h,m),C)for(let I=0;I<C.length;I++)_(h,C[I]);if(y){let I=y.subTree;if(p===I||Vd(I.type)&&(I.ssContent===p||I.ssFallback===p)){const P=y.vnode;Ve(h,P,P.scopeId,P.slotScopeIds,y.parent)}}},ct=(h,p,m,C,y,I,P,R,k=0)=>{for(let E=k;E<h.length;E++){const L=h[E]=R?Pt(h[E]):vt(h[E]);v(null,L,p,m,C,y,I,P,R)}},Jt=(h,p,m,C,y,I,P)=>{const R=p.el=h.el;let{patchFlag:k,dynamicChildren:E,dirs:L}=p;k|=h.patchFlag&16;const N=h.props||oe,D=p.props||oe;let H;if(m&&Sn(m,!1),(H=D.onVnodeBeforeUpdate)&&pt(H,m,p,h),L&&Cn(p,h,m,"beforeUpdate"),m&&Sn(m,!0),(N.innerHTML&&D.innerHTML==null||N.textContent&&D.textContent==null)&&u(R,""),E?Tt(h.dynamicChildren,E,R,m,C,Co(p,y),I):P||le(h,p,R,null,m,C,Co(p,y),I,!1),k>0){if(k&16)Ps(R,N,D,m,y);else if(k&2&&N.class!==D.class&&r(R,"class",null,D.class,y),k&4&&r(R,"style",N.style,D.style,y),k&8){const X=p.dynamicProps;for(let re=0;re<X.length;re++){const ce=X[re],we=N[ce],ke=D[ce];(ke!==we||ce==="value")&&r(R,ce,we,ke,y,m)}}k&1&&h.children!==p.children&&u(R,p.children)}else!P&&E==null&&Ps(R,N,D,m,y);((H=D.onVnodeUpdated)||L)&&Be(()=>{H&&pt(H,m,p,h),L&&Cn(p,h,m,"updated")},C)},Tt=(h,p,m,C,y,I,P)=>{for(let R=0;R<p.length;R++){const k=h[R],E=p[R],L=k.el&&(k.type===fe||!Ds(k,E)||k.shapeFlag&198)?d(k.el):m;v(k,E,L,null,C,y,I,P,!0)}},Ps=(h,p,m,C,y)=>{if(p!==m){if(p!==oe)for(const I in p)!js(I)&&!(I in m)&&r(h,I,p[I],null,y,C);for(const I in m){if(js(I))continue;const P=m[I],R=p[I];P!==R&&I!=="value"&&r(h,I,R,P,y,C)}"value"in m&&r(h,"value",p.value,m.value,y)}},Ui=(h,p,m,C,y,I,P,R,k)=>{const E=p.el=h?h.el:a(""),L=p.anchor=h?h.anchor:a("");let{patchFlag:N,dynamicChildren:D,slotScopeIds:H}=p;H&&(R=R?R.concat(H):H),h==null?(s(E,m,C),s(L,m,C),ct(p.children||[],m,L,y,I,P,R,k)):N>0&&N&64&&D&&h.dynamicChildren&&h.dynamicChildren.length===D.length?(Tt(h.dynamicChildren,D,m,y,I,P,R),(p.key!=null||y&&p===y.subTree)&&Hd(h,p,!0)):le(h,p,m,L,y,I,P,R,k)},$i=(h,p,m,C,y,I,P,R,k)=>{p.slotScopeIds=R,h==null?p.shapeFlag&512?y.ctx.activate(p,m,C,P,k):go(p,m,C,y,I,P,k):ql(h,p,k)},go=(h,p,m,C,y,I,P)=>{const R=h.component=Z_(h,C,y);if(Sd(h)&&(R.ctx.renderer=As),tg(R,!1,P),R.asyncDep){if(y&&y.registerDep(R,De,P),!h.el){const k=R.subTree=pe(hn);$(null,k,p,m),h.placeholder=k.el}}else De(R,h,p,m,y,I,P)},ql=(h,p,m)=>{const C=p.component=h.component;if(D_(h,p,m))if(C.asyncDep&&!C.asyncResolved){ge(C,p,m);return}else C.next=p,C.update();else p.el=h.el,C.vnode=p},De=(h,p,m,C,y,I,P)=>{const R=()=>{if(h.isMounted){let{next:N,bu:D,u:H,parent:X,vnode:re}=h;{const ht=Bd(h);if(ht){N&&(N.el=re.el,ge(h,N,P)),ht.asyncDep.then(()=>{Be(()=>{h.isUnmounted||E()},y)});return}}let ce=N,we;Sn(h,!1),N?(N.el=re.el,ge(h,N,P)):N=re,D&&Ji(D),(we=N.props&&N.props.onVnodeBeforeUpdate)&&pt(we,X,N,re),Sn(h,!0);const ke=dc(h),dt=h.subTree;h.subTree=ke,v(dt,ke,d(dt.el),Bi(dt),h,y,I),N.el=ke.el,ce===null&&M_(h,ke.el),H&&Be(H,y),(we=N.props&&N.props.onVnodeUpdated)&&Be(()=>pt(we,X,N,re),y)}else{let N;const{el:D,props:H}=p,{bm:X,m:re,parent:ce,root:we,type:ke}=h,dt=Ys(p);Sn(h,!1),X&&Ji(X),!dt&&(N=H&&H.onVnodeBeforeMount)&&pt(N,ce,p),Sn(h,!0);{we.ce&&we.ce._hasShadowRoot()&&we.ce._injectChildStyle(ke,h.parent?h.parent.type:void 0);const ht=h.subTree=dc(h);v(null,ht,m,C,h,y,I),p.el=ht.el}if(re&&Be(re,y),!dt&&(N=H&&H.onVnodeMounted)){const ht=p;Be(()=>pt(N,ce,ht),y)}(p.shapeFlag&256||ce&&Ys(ce.vnode)&&ce.vnode.shapeFlag&256)&&h.a&&Be(h.a,y),h.isMounted=!0,p=m=C=null}};h.scope.on();const k=h.effect=new nd(R);h.scope.off();const E=h.update=k.run.bind(k),L=h.job=k.runIfDirty.bind(k);L.i=h,L.id=h.uid,k.scheduler=()=>$a(L),Sn(h,!0),E()},ge=(h,p,m)=>{p.component=h;const C=h.vnode.props;h.vnode=p,h.next=null,F_(h,p.props,C,m),B_(h,p.children,m),$t(),ic(h),Ht()},le=(h,p,m,C,y,I,P,R,k=!1)=>{const E=h&&h.children,L=h?h.shapeFlag:0,N=p.children,{patchFlag:D,shapeFlag:H}=p;if(D>0){if(D&128){Hi(E,N,m,C,y,I,P,R,k);return}else if(D&256){In(E,N,m,C,y,I,P,R,k);return}}H&8?(L&16&&Ns(E,y,I),N!==E&&u(m,N)):L&16?H&16?Hi(E,N,m,C,y,I,P,R,k):Ns(E,y,I,!0):(L&8&&u(m,""),H&16&&ct(N,m,C,y,I,P,R,k))},In=(h,p,m,C,y,I,P,R,k)=>{h=h||Qn,p=p||Qn;const E=h.length,L=p.length,N=Math.min(E,L);let D;for(D=0;D<N;D++){const H=p[D]=k?Pt(p[D]):vt(p[D]);v(h[D],H,m,null,y,I,P,R,k)}E>L?Ns(h,y,I,!0,!1,N):ct(p,m,C,y,I,P,R,k,N)},Hi=(h,p,m,C,y,I,P,R,k)=>{let E=0;const L=p.length;let N=h.length-1,D=L-1;for(;E<=N&&E<=D;){const H=h[E],X=p[E]=k?Pt(p[E]):vt(p[E]);if(Ds(H,X))v(H,X,m,null,y,I,P,R,k);else break;E++}for(;E<=N&&E<=D;){const H=h[N],X=p[D]=k?Pt(p[D]):vt(p[D]);if(Ds(H,X))v(H,X,m,null,y,I,P,R,k);else break;N--,D--}if(E>N){if(E<=D){const H=D+1,X=H<L?p[H].el:C;for(;E<=D;)v(null,p[E]=k?Pt(p[E]):vt(p[E]),m,X,y,I,P,R,k),E++}}else if(E>D)for(;E<=N;)ut(h[E],y,I,!0),E++;else{const H=E,X=E,re=new Map;for(E=X;E<=D;E++){const je=p[E]=k?Pt(p[E]):vt(p[E]);je.key!=null&&re.set(je.key,E)}let ce,we=0;const ke=D-X+1;let dt=!1,ht=0;const Os=new Array(ke);for(E=0;E<ke;E++)Os[E]=0;for(E=H;E<=N;E++){const je=h[E];if(we>=ke){ut(je,y,I,!0);continue}let ft;if(je.key!=null)ft=re.get(je.key);else for(ce=X;ce<=D;ce++)if(Os[ce-X]===0&&Ds(je,p[ce])){ft=ce;break}ft===void 0?ut(je,y,I,!0):(Os[ft-X]=E+1,ft>=ht?ht=ft:dt=!0,v(je,p[ft],m,null,y,I,P,R,k),we++)}const Ql=dt?G_(Os):Qn;for(ce=Ql.length-1,E=ke-1;E>=0;E--){const je=X+E,ft=p[je],Xl=p[je+1],Zl=je+1<L?Xl.el||Wd(Xl):C;Os[E]===0?v(null,ft,m,Zl,y,I,P,R,k):dt&&(ce<0||E!==Ql[ce]?En(ft,m,Zl,2):ce--)}}},En=(h,p,m,C,y=null)=>{const{el:I,type:P,transition:R,children:k,shapeFlag:E}=h;if(E&6){En(h.component.subTree,p,m,C);return}if(E&128){h.suspense.move(p,m,C);return}if(E&64){P.move(h,p,m,As);return}if(P===fe){s(I,p,m);for(let N=0;N<k.length;N++)En(k[N],p,m,C);s(h.anchor,p,m);return}if(P===So){Q(h,p,m);return}if(C!==2&&E&1&&R)if(C===0)R.beforeEnter(I),s(I,p,m),Be(()=>R.enter(I),y);else{const{leave:N,delayLeave:D,afterLeave:H}=R,X=()=>{h.ctx.isUnmounted?i(I):s(I,p,m)},re=()=>{I._isLeaving&&I[l_](!0),N(I,()=>{X(),H&&H()})};D?D(I,X,re):re()}else s(I,p,m)},ut=(h,p,m,C=!1,y=!1)=>{const{type:I,props:P,ref:R,children:k,dynamicChildren:E,shapeFlag:L,patchFlag:N,dirs:D,cacheIndex:H,memo:X}=h;if(N===-2&&(y=!1),R!=null&&($t(),qs(R,null,m,h,!0),Ht()),H!=null&&(p.renderCache[H]=void 0),L&256){p.ctx.deactivate(h);return}const re=L&1&&D,ce=!Ys(h);let we;if(ce&&(we=P&&P.onVnodeBeforeUnmount)&&pt(we,p,h),L&6)up(h.component,m,C);else{if(L&128){h.suspense.unmount(m,C);return}re&&Cn(h,null,p,"beforeUnmount"),L&64?h.type.remove(h,p,m,As,C):E&&!E.hasOnce&&(I!==fe||N>0&&N&64)?Ns(E,p,m,!1,!0):(I===fe&&N&384||!y&&L&16)&&Ns(k,p,m),C&&Yl(h)}const ke=X!=null&&H==null;(ce&&(we=P&&P.onVnodeUnmounted)||re||ke)&&Be(()=>{we&&pt(we,p,h),re&&Cn(h,null,p,"unmounted"),ke&&(h.el=null)},m)},Yl=h=>{const{type:p,el:m,anchor:C,transition:y}=h;if(p===fe){cp(m,C);return}if(p===So){M(h);return}const I=()=>{i(m),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(h.shapeFlag&1&&y&&!y.persisted){const{leave:P,delayLeave:R}=y,k=()=>P(m,I);R?R(h.el,I,k):k()}else I()},cp=(h,p)=>{let m;for(;h!==p;)m=f(h),i(h),h=m;i(p)},up=(h,p,m)=>{const{bum:C,scope:y,job:I,subTree:P,um:R,m:k,a:E}=h;pc(k),pc(E),C&&Ji(C),y.stop(),I&&(I.flags|=8,ut(P,h,p,m)),R&&Be(R,p),Be(()=>{h.isUnmounted=!0},p)},Ns=(h,p,m,C=!1,y=!1,I=0)=>{for(let P=I;P<h.length;P++)ut(h[P],p,m,C,y)},Bi=h=>{if(h.shapeFlag&6)return Bi(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const p=f(h.anchor||h.el),m=p&&p[o_];return m?f(m):p};let mo=!1;const Jl=(h,p,m)=>{let C;h==null?p._vnode&&(ut(p._vnode,null,null,!0),C=p._vnode.component):v(p._vnode||null,h,p,null,null,null,m),p._vnode=h,mo||(mo=!0,ic(C),yd(),mo=!1)},As={p:v,um:ut,m:En,r:Yl,mt:go,mc:ct,pc:le,pbc:Tt,n:Bi,o:t};return{render:Jl,hydrate:void 0,createApp:R_(Jl)}}function Co({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Sn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function j_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Hd(t,e,n=!1){const s=t.children,i=e.children;if(W(s)&&W(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Pt(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Hd(o,a)),a.type===Gr&&(a.patchFlag===-1&&(a=i[r]=Pt(a)),a.el=o.el),a.type===hn&&!a.el&&(a.el=o.el)}}function G_(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Bd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Bd(e)}function pc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Wd(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Wd(e.subTree):null}const Vd=t=>t.__isSuspense;function K_(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):e_(t)}const fe=Symbol.for("v-fgt"),Gr=Symbol.for("v-txt"),hn=Symbol.for("v-cmt"),So=Symbol.for("v-stc"),Qs=[];let Ge=null;function F(t=!1){Qs.push(Ge=t?null:[])}function z_(){Qs.pop(),Ge=Qs[Qs.length-1]||null}let li=1;function _c(t,e=!1){li+=t,t<0&&Ge&&e&&(Ge.hasOnce=!0)}function jd(t){return t.dynamicChildren=li>0?Ge||Qn:null,z_(),li>0&&Ge&&Ge.push(t),t}function V(t,e,n,s,i,r){return jd(g(t,e,n,s,i,r,!0))}function ls(t,e,n,s,i){return jd(pe(t,e,n,s,i,!0))}function Gd(t){return t?t.__v_isVNode===!0:!1}function Ds(t,e){return t.type===e.type&&t.key===e.key}const Kd=({key:t})=>t??null,Xi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?be(t)||Oe(t)||G(t)?{i:Je,r:t,k:e,f:!!n}:t:null);function g(t,e=null,n=null,s=0,i=null,r=t===fe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Kd(e),ref:e&&Xi(e),scopeId:wd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Je};return a?(Ga(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=be(n)?8:16),li>0&&!o&&Ge&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ge.push(l),l}const pe=q_;function q_(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===b_)&&(t=hn),Gd(t)){const a=cs(t,e,!0);return n&&Ga(a,n),li>0&&!r&&Ge&&(a.shapeFlag&6?Ge[Ge.indexOf(t)]=a:Ge.push(a)),a.patchFlag=-2,a}if(rg(t)&&(t=t.__vccOpts),e){e=Y_(e);let{class:a,style:l}=e;a&&!be(a)&&(e.class=he(a)),ie(l)&&(Ua(l)&&!W(l)&&(l=xe({},l)),e.style=ys(l))}const o=be(t)?1:Vd(t)?128:a_(t)?64:ie(t)?4:G(t)?2:0;return g(t,e,n,s,i,o,r,!0)}function Y_(t){return t?Ua(t)||Dd(t)?xe({},t):t:null}function cs(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?J_(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Kd(c),ref:e&&e.ref?n&&r?W(r)?r.concat(Xi(e)):[r,Xi(e)]:Xi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==fe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cs(t.ssContent),ssFallback:t.ssFallback&&cs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Ha(u,l.clone(u)),u}function nt(t=" ",e=0){return pe(Gr,null,t,e)}function Vt(t="",e=!1){return e?(F(),ls(hn,null,t)):pe(hn,null,t)}function vt(t){return t==null||typeof t=="boolean"?pe(hn):W(t)?pe(fe,null,t.slice()):Gd(t)?Pt(t):pe(Gr,null,String(t))}function Pt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cs(t)}function Ga(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ga(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Dd(e)?e._ctx=Je:i===3&&Je&&(Je.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:Je},n=32):(e=String(e),s&64?(n=16,e=[nt(e)]):n=8);t.children=e,t.shapeFlag|=n}function J_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=he([e.class,s.class]));else if(i==="style")e.style=ys([e.style,s.style]);else if(Fr(i)){const r=e[i],o=s[i];o&&r!==o&&!(W(r)&&r.includes(o))?e[i]=r?[].concat(r,o):o:o==null&&r==null&&!Ur(i)&&(e[i]=o)}else i!==""&&(e[i]=s[i])}return e}function pt(t,e,n,s=null){Ct(t,e,7,[n,s])}const Q_=Pd();let X_=0;function Z_(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Q_,r={uid:X_++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ip(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ld(s,i),emitsOptions:Nd(s,i),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:s.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=N_.bind(null,r),t.ce&&t.ce(r),r}let Fe=null;const eg=()=>Fe||Je;let cr,ea;{const t=Hr(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};cr=e("__VUE_INSTANCE_SETTERS__",n=>Fe=n),ea=e("__VUE_SSR_SETTERS__",n=>ci=n)}const Ci=t=>{const e=Fe;return cr(t),t.scope.on(),()=>{t.scope.off(),cr(e)}},gc=()=>{Fe&&Fe.scope.off(),cr(null)};function zd(t){return t.vnode.shapeFlag&4}let ci=!1;function tg(t,e=!1,n=!1){e&&ea(e);const{props:s,children:i}=t.vnode,r=zd(t);L_(t,s,r,e),H_(t,i,n||e);const o=r?ng(t,e):void 0;return e&&ea(!1),o}function ng(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,w_);const{setup:s}=n;if(s){$t();const i=t.setupContext=s.length>1?ig(t):null,r=Ci(t),o=Ei(s,t,0,[t.props,i]),a=qu(o);if(Ht(),r(),(a||t.sp)&&!Ys(t)&&Cd(t),a){if(o.then(gc,gc),e)return o.then(l=>{mc(t,l)}).catch(l=>{Wr(l,t,0)});t.asyncDep=o}else mc(t,o)}else qd(t)}function mc(t,e,n){G(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=gd(e)),qd(t)}function qd(t,e,n){const s=t.type;t.render||(t.render=s.render||bt);{const i=Ci(t);$t();try{I_(t)}finally{Ht(),i()}}}const sg={get(t,e){return Ne(t,"get",""),t[e]}};function ig(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,sg),slots:t.slots,emit:t.emit,expose:e}}function Kr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(gd(Vp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Js)return Js[n](t)},has(e,n){return n in e||n in Js}})):t.proxy}function rg(t){return G(t)&&"__vccOpts"in t}const K=(t,e)=>qp(t,e,ci),og="3.5.33";/**
* @vue/runtime-dom v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ta;const vc=typeof window<"u"&&window.trustedTypes;if(vc)try{ta=vc.createPolicy("vue",{createHTML:t=>t})}catch{}const Yd=ta?t=>ta.createHTML(t):t=>t,ag="http://www.w3.org/2000/svg",lg="http://www.w3.org/1998/Math/MathML",Rt=typeof document<"u"?document:null,yc=Rt&&Rt.createElement("template"),cg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Rt.createElementNS(ag,t):e==="mathml"?Rt.createElementNS(lg,t):n?Rt.createElement(t,{is:n}):Rt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Rt.createTextNode(t),createComment:t=>Rt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Rt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{yc.innerHTML=Yd(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=yc.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ug=Symbol("_vtc");function dg(t,e,n){const s=t[ug];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ur=Symbol("_vod"),Jd=Symbol("_vsh"),jn={name:"show",beforeMount(t,{value:e},{transition:n}){t[ur]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ms(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Ms(t,!0),s.enter(t)):s.leave(t,()=>{Ms(t,!1)}):Ms(t,e))},beforeUnmount(t,{value:e}){Ms(t,e)}};function Ms(t,e){t.style.display=e?t[ur]:"none",t[Jd]=!e}const hg=Symbol(""),fg=/(?:^|;)\s*display\s*:/;function pg(t,e,n){const s=t.style,i=be(n);let r=!1;if(n&&!i){if(e)if(be(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Vs(s,a,"")}else for(const o in e)n[o]==null&&Vs(s,o,"");for(const o in n){o==="display"&&(r=!0);const a=n[o];a!=null?gg(t,o,!be(e)&&e?e[o]:void 0,a)||Vs(s,o,a):Vs(s,o,"")}}else if(i){if(e!==n){const o=s[hg];o&&(n+=";"+o),s.cssText=n,r=fg.test(n)}}else e&&t.removeAttribute("style");ur in t&&(t[ur]=r?s.display:"",t[Jd]&&(s.display="none"))}const bc=/\s*!important$/;function Vs(t,e,n){if(W(n))n.forEach(s=>Vs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=_g(t,e);bc.test(n)?t.setProperty(yn(s),n.replace(bc,""),"important"):t[s]=n}}const wc=["Webkit","Moz","ms"],To={};function _g(t,e){const n=To[e];if(n)return n;let s=it(e);if(s!=="filter"&&s in t)return To[e]=s;s=Qu(s);for(let i=0;i<wc.length;i++){const r=wc[i]+s;if(r in t)return To[e]=r}return e}function gg(t,e,n,s){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&be(s)&&n===s}const Ic="http://www.w3.org/1999/xlink";function Ec(t,e,n,s,i,r=bp(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ic,e.slice(6,e.length)):t.setAttributeNS(Ic,e,n):n==null||r&&!Zu(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Et(n)?String(n):n)}function Cc(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Yd(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Zu(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function zn(t,e,n,s){t.addEventListener(e,n,s)}function mg(t,e,n,s){t.removeEventListener(e,n,s)}const Sc=Symbol("_vei");function vg(t,e,n,s,i=null){const r=t[Sc]||(t[Sc]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=yg(e);if(s){const c=r[e]=Ig(s,i);zn(t,a,c,l)}else o&&(mg(t,a,o,l),r[e]=void 0)}}const Tc=/(?:Once|Passive|Capture)$/;function yg(t){let e;if(Tc.test(t)){e={};let s;for(;s=t.match(Tc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):yn(t.slice(2)),e]}let ko=0;const bg=Promise.resolve(),wg=()=>ko||(bg.then(()=>ko=0),ko=Date.now());function Ig(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ct(Eg(s,n.value),e,5,[s])};return n.value=t,n.attached=wg(),n}function Eg(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const kc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Cg=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?dg(t,s,o):e==="style"?pg(t,n,s):Fr(e)?Ur(e)||vg(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Sg(t,e,s,o))?(Cc(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ec(t,e,s,o,r,e!=="value")):t._isVueCE&&(Tg(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!be(s)))?Cc(t,it(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Ec(t,e,s,o))};function Sg(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&kc(e)&&G(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return kc(e)&&be(n)?!1:e in t}function Tg(t,e){const n=t._def.props;if(!n)return!1;const s=it(e);return Array.isArray(n)?n.some(i=>it(i)===s):Object.keys(n).some(i=>it(i)===s)}const Rc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>Ji(e,n):e};function kg(t){t.target.composing=!0}function Pc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ro=Symbol("_assign");function Nc(t,e,n){return e&&(t=t.trim()),n&&(t=Na(t)),t}const Ac={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Ro]=Rc(i);const r=s||i.props&&i.props.type==="number";zn(t,e?"change":"input",o=>{o.target.composing||t[Ro](Nc(t.value,n,r))}),(n||r)&&zn(t,"change",()=>{t.value=Nc(t.value,n,r)}),e||(zn(t,"compositionstart",kg),zn(t,"compositionend",Pc),zn(t,"change",Pc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Ro]=Rc(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Na(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l)}},Rg=["ctrl","shift","alt","meta"],Pg={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Rg.some(n=>t[`${n}Key`]&&!e.includes(n))},ui=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=Pg[e[o]];if(a&&a(i,e))return}return t(i,...r)})},Ng={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Oc=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const r=yn(i.key);if(e.some(o=>o===r||Ng[o]===r))return t(i)})},Ag=xe({patchProp:Cg},cg);let xc;function Og(){return xc||(xc=W_(Ag))}const xg=(...t)=>{const e=Og().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Mg(s);if(!i)return;const r=e._component;!G(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Dg(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Dg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Mg(t){return be(t)?document.querySelector(t):t}const Lg=bn({localUid:null,localName:"",currentGameId:null,localSeat:null,screen:"home"});function Yt(){return{session:Lg}}var Dc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw bs(e)},bs=function(t){return new Error("Firebase Database ("+Qd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Fg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ka={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(f=64)),s.push(n[u],n[d],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new Ug;const f=r<<2|a>>4;if(s.push(f),c!==64){const _=a<<4&240|c>>2;if(s.push(_),d!==64){const w=c<<6&192|d;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ug extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zd=function(t){const e=Xd(t);return Ka.encodeByteArray(e,!0)},dr=function(t){return Zd(t).replace(/\./g,"")},hr=function(t){try{return Ka.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t){return eh(void 0,t)}function eh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Hg(n)||(t[n]=eh(t[n],e[n]));return t}function Hg(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=()=>Bg().__FIREBASE_DEFAULTS__,Vg=()=>{if(typeof process>"u"||typeof Dc>"u")return;const t=Dc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hr(t[1]);return e&&JSON.parse(e)},za=()=>{try{return Wg()||Vg()||jg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},th=t=>{var e,n;return(n=(e=za())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Gg=t=>{const e=th(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},nh=()=>{var t;return(t=za())===null||t===void 0?void 0:t.config},sh=t=>{var e;return(e=za())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[dr(JSON.stringify(n)),dr(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function zg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ih(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yg(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Jg(){return Qd.NODE_ADMIN===!0}function Qg(){try{return typeof indexedDB=="object"}catch{return!1}}function Xg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg="FirebaseError";class wn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Zg,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?em(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new wn(i,a,s)}}function em(t,e){return t.replace(tm,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const tm=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t){return JSON.parse(t)}function Ie(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=di(hr(r[0])||""),n=di(hr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},nm=function(t){const e=rh(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},sm=function(t){const e=rh(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Dn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function fr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function _r(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Mc(r)&&Mc(o)){if(!_r(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Mc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function rm(t,e){const n=new om(t,e);return n.subscribe.bind(n)}class om{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");am(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Po),i.error===void 0&&(i.error=Po),i.complete===void 0&&(i.complete=Po);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function am(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Po(){}function us(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(t){return t&&t._delegate?t._delegate:t}class Mn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new et;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dm(e))try{this.getOrInitializeService({instanceIdentifier:kn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kn){return this.instances.has(e)}getOptions(e=kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:um(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=kn){return this.component?this.component.multipleInstances?e:kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function um(t){return t===kn?void 0:t}function dm(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const fm={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},pm=se.INFO,_m={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},gm=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=_m[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ya{constructor(e){this.name=e,this._logLevel=pm,this._logHandler=gm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const mm=(t,e)=>e.some(n=>t instanceof n);let Lc,Fc;function vm(){return Lc||(Lc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ym(){return Fc||(Fc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oh=new WeakMap,na=new WeakMap,ah=new WeakMap,No=new WeakMap,Ja=new WeakMap;function bm(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(on(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&oh.set(n,t)}).catch(()=>{}),Ja.set(e,t),e}function wm(t){if(na.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});na.set(t,e)}let sa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return na.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ah.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return on(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Im(t){sa=t(sa)}function Em(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ao(this),e,...n);return ah.set(s,e.sort?e.sort():[e]),on(s)}:ym().includes(t)?function(...e){return t.apply(Ao(this),e),on(oh.get(this))}:function(...e){return on(t.apply(Ao(this),e))}}function Cm(t){return typeof t=="function"?Em(t):(t instanceof IDBTransaction&&wm(t),mm(t,vm())?new Proxy(t,sa):t)}function on(t){if(t instanceof IDBRequest)return bm(t);if(No.has(t))return No.get(t);const e=Cm(t);return e!==t&&(No.set(t,e),Ja.set(e,t)),e}const Ao=t=>Ja.get(t);function Sm(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=on(o);return s&&o.addEventListener("upgradeneeded",l=>{s(on(o.result),l.oldVersion,l.newVersion,on(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Tm=["get","getKey","getAll","getAllKeys","count"],km=["put","add","delete","clear"],Oo=new Map;function Uc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Oo.get(e))return Oo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=km.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Tm.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Oo.set(e,r),r}Im(t=>({...t,get:(e,n,s)=>Uc(e,n)||t.get(e,n,s),has:(e,n)=>!!Uc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Pm(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Pm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ia="@firebase/app",$c="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new Ya("@firebase/app"),Nm="@firebase/app-compat",Am="@firebase/analytics-compat",Om="@firebase/analytics",xm="@firebase/app-check-compat",Dm="@firebase/app-check",Mm="@firebase/auth",Lm="@firebase/auth-compat",Fm="@firebase/database",Um="@firebase/data-connect",$m="@firebase/database-compat",Hm="@firebase/functions",Bm="@firebase/functions-compat",Wm="@firebase/installations",Vm="@firebase/installations-compat",jm="@firebase/messaging",Gm="@firebase/messaging-compat",Km="@firebase/performance",zm="@firebase/performance-compat",qm="@firebase/remote-config",Ym="@firebase/remote-config-compat",Jm="@firebase/storage",Qm="@firebase/storage-compat",Xm="@firebase/firestore",Zm="@firebase/vertexai-preview",ev="@firebase/firestore-compat",tv="firebase",nv="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra="[DEFAULT]",sv={[ia]:"fire-core",[Nm]:"fire-core-compat",[Om]:"fire-analytics",[Am]:"fire-analytics-compat",[Dm]:"fire-app-check",[xm]:"fire-app-check-compat",[Mm]:"fire-auth",[Lm]:"fire-auth-compat",[Fm]:"fire-rtdb",[Um]:"fire-data-connect",[$m]:"fire-rtdb-compat",[Hm]:"fire-fn",[Bm]:"fire-fn-compat",[Wm]:"fire-iid",[Vm]:"fire-iid-compat",[jm]:"fire-fcm",[Gm]:"fire-fcm-compat",[Km]:"fire-perf",[zm]:"fire-perf-compat",[qm]:"fire-rc",[Ym]:"fire-rc-compat",[Jm]:"fire-gcs",[Qm]:"fire-gcs-compat",[Xm]:"fire-fst",[ev]:"fire-fst-compat",[Zm]:"fire-vertex","fire-js":"fire-js",[tv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Map,iv=new Map,oa=new Map;function Hc(t,e){try{t.container.addComponent(e)}catch(n){jt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ds(t){const e=t.name;if(oa.has(e))return jt.debug(`There were multiple attempts to register component ${e}.`),!1;oa.set(e,t);for(const n of gr.values())Hc(n,t);for(const n of iv.values())Hc(n,t);return!0}function Qa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ot(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},an=new Si("app","Firebase",rv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=nv;function lh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ra,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw an.create("bad-app-name",{appName:String(i)});if(n||(n=nh()),!n)throw an.create("no-options");const r=gr.get(i);if(r){if(_r(n,r.options)&&_r(s,r.config))return r;throw an.create("duplicate-app",{appName:i})}const o=new hm(i);for(const l of oa.values())o.addComponent(l);const a=new ov(n,s,o);return gr.set(i,a),a}function ch(t=ra){const e=gr.get(t);if(!e&&t===ra&&nh())return lh();if(!e)throw an.create("no-app",{appName:t});return e}function ln(t,e,n){var s;let i=(s=sv[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),jt.warn(a.join(" "));return}ds(new Mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="firebase-heartbeat-database",lv=1,hi="firebase-heartbeat-store";let xo=null;function uh(){return xo||(xo=Sm(av,lv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(hi)}catch(n){console.warn(n)}}}}).catch(t=>{throw an.create("idb-open",{originalErrorMessage:t.message})})),xo}async function cv(t){try{const n=(await uh()).transaction(hi),s=await n.objectStore(hi).get(dh(t));return await n.done,s}catch(e){if(e instanceof wn)jt.warn(e.message);else{const n=an.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});jt.warn(n.message)}}}async function Bc(t,e){try{const s=(await uh()).transaction(hi,"readwrite");await s.objectStore(hi).put(e,dh(t)),await s.done}catch(n){if(n instanceof wn)jt.warn(n.message);else{const s=an.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jt.warn(s.message)}}}function dh(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=1024,dv=30*24*60*60*1e3;class hv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Wc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=dv}),this._storage.overwrite(this._heartbeatsCache))}catch(s){jt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wc(),{heartbeatsToSend:s,unsentEntries:i}=fv(this._heartbeatsCache.heartbeats),r=dr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return jt.warn(n),""}}}function Wc(){return new Date().toISOString().substring(0,10)}function fv(t,e=uv){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Vc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Vc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class pv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qg()?Xg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Vc(t){return dr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(t){ds(new Mn("platform-logger",e=>new Rm(e),"PRIVATE")),ds(new Mn("heartbeat",e=>new hv(e),"PRIVATE")),ln(ia,$c,t),ln(ia,$c,"esm2017"),ln("fire-js","")}_v("");var jc={};const Gc="@firebase/database",Kc="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hh="";function gv(t){hh=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ie(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:di(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return lt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new mv(e)}}catch{}return new vv},Nn=fh("localStorage"),yv=fh("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new Ya("@firebase/database"),ph=function(){let t=1;return function(){return t++}}(),_h=function(t){const e=lm(t),n=new im;n.update(e);const s=n.digest();return Ka.encodeByteArray(s)},Ti=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ti.apply(null,s):typeof s=="object"?e+=Ie(s):e+=s,e+=" "}return e};let Xs=null,zc=!0;const bv=function(t,e){T(!0,"Can't turn on custom loggers persistently."),ts.logLevel=se.VERBOSE,Xs=ts.log.bind(ts)},Se=function(...t){if(zc===!0&&(zc=!1,Xs===null&&yv.get("logging_enabled")===!0&&bv()),Xs){const e=Ti.apply(null,t);Xs(e)}},ki=function(t){return function(...e){Se(t,...e)}},aa=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ti(...t);ts.error(e)},Gt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ti(...t)}`;throw ts.error(e),new Error(e)},$e=function(...t){const e="FIREBASE WARNING: "+Ti(...t);ts.warn(e)},wv=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&$e("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qr=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Iv=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},hs="[MIN_NAME]",Ln="[MAX_NAME]",Hn=function(t,e){if(t===e)return 0;if(t===hs||e===Ln)return-1;if(e===hs||t===Ln)return 1;{const n=qc(t),s=qc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Ev=function(t,e){return t===e?0:t<e?-1:1},Ls=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ie(e))},Xa=function(t){if(typeof t!="object"||t===null)return Ie(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ie(e[s]),n+=":",n+=Xa(t[e[s]]);return n+="}",n},gh=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Te(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const mh=function(t){T(!qr(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},Cv=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Sv=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Tv(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const kv=new RegExp("^-?(0*)\\d{1,10}$"),Rv=-2147483648,Pv=2147483647,qc=function(t){if(kv.test(t)){const e=Number(t);if(e>=Rv&&e<=Pv)return e}return null},Es=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw $e("Exception was thrown by user callback.",n),e},Math.floor(0))}},Nv=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Zs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){$e(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',$e(e)}}class Zi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zi.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="5",vh="v",yh="s",bh="r",wh="f",Ih=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Eh="ls",Ch="p",la="ac",Sh="websocket",Th="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Nn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Nn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function xv(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Rh(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===Sh)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Th)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);xv(t)&&(n.ns=t.namespace);const i=[];return Te(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(){this.counters_={}}incrementCounter(e,n=1){lt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return $g(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do={},Mo={};function el(t){const e=t.toString();return Do[e]||(Do[e]=new Dv),Do[e]}function Mv(t,e){const n=t.toString();return Mo[n]||(Mo[n]=e()),Mo[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Es(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="start",Fv="close",Uv="pLPCommand",$v="pRTLPCB",Ph="id",Nh="pw",Ah="ser",Hv="cb",Bv="seg",Wv="ts",Vv="d",jv="dframe",Oh=1870,xh=30,Gv=Oh-xh,Kv=25e3,zv=3e4;class qn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ki(e),this.stats_=el(n),this.urlFn=l=>(this.appCheckToken&&(l[la]=this.appCheckToken),Rh(n,Th,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Lv(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(zv)),Iv(()=>{if(this.isClosed_)return;this.scriptTagHolder=new tl((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Yc)this.id=a,this.password=l;else if(o===Fv)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Yc]="t",s[Ah]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Hv]=this.scriptTagHolder.uniqueCallbackIdentifier),s[vh]=Za,this.transportSessionId&&(s[yh]=this.transportSessionId),this.lastSessionId&&(s[Eh]=this.lastSessionId),this.applicationId&&(s[Ch]=this.applicationId),this.appCheckToken&&(s[la]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ih.test(location.hostname)&&(s[bh]=wh);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){qn.forceAllow_=!0}static forceDisallow(){qn.forceDisallow_=!0}static isAvailable(){return qn.forceAllow_?!0:!qn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Cv()&&!Sv()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Zd(n),i=gh(s,Gv);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[jv]="t",s[Ph]=e,s[Nh]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ie(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class tl{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ph(),window[Uv+this.uniqueCallbackIdentifier]=e,window[$v+this.uniqueCallbackIdentifier]=n,this.myIFrame=tl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Se("frame writing exception"),a.stack&&Se(a.stack),Se(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Se("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ph]=this.myID,e[Nh]=this.myPW,e[Ah]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xh+s.length<=Oh;){const o=this.pendingSegs.shift();s=s+"&"+Bv+i+"="+o.seg+"&"+Wv+i+"="+o.ts+"&"+Vv+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Kv)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv=16384,Yv=45e3;let mr=null;typeof MozWebSocket<"u"?mr=MozWebSocket:typeof WebSocket<"u"&&(mr=WebSocket);class tt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ki(this.connId),this.stats_=el(n),this.connURL=tt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[vh]=Za,typeof location<"u"&&location.hostname&&Ih.test(location.hostname)&&(o[bh]=wh),n&&(o[yh]=n),s&&(o[Eh]=s),i&&(o[la]=i),r&&(o[Ch]=r),Rh(e,Sh,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Nn.set("previous_websocket_failure",!0);try{let s;Jg(),this.mySock=new mr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){tt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&mr!==null&&!tt.forceDisallow_}static previouslyFailed(){return Nn.isInMemoryStorage||Nn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Nn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=di(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=gh(n,qv);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Yv))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}tt.responsesRequiredToBeHealthy=2;tt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[qn,tt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=tt&&tt.isAvailable();let s=n&&!tt.previouslyFailed();if(e.webSocketOnly&&(n||$e("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[tt];else{const i=this.transports_=[];for(const r of fi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);fi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}fi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv=6e4,Qv=5e3,Xv=10*1024,Zv=100*1024,Lo="t",Jc="d",ey="s",Qc="r",ty="e",Xc="o",Zc="a",eu="n",tu="p",ny="h";class sy{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ki("c:"+this.id+":"),this.transportManager_=new fi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Zs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Zv?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Xv?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Lo in e){const n=e[Lo];n===Zc?this.upgradeIfSecondaryHealthy_():n===Qc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Xc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ls("t",e),s=Ls("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Zc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:eu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ls("t",e),s=Ls("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ls(Lo,e);if(Jc in e){const s=e[Jc];if(n===ny){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===eu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ey?this.onConnectionShutdown_(s):n===Qc?this.onReset_(s):n===ty?aa("Server Error: "+s):n===Xc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):aa("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Za!==s&&$e("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Zs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Jv))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Zs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Qv))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Nn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Mh{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!qa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new vr}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu=32,su=768;class ne{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new ne("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function fn(t){return t.pieces_.length-t.pieceNum_}function ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ne(t.pieces_,e)}function nl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function iy(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function pi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Lh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ne(e,0)}function ve(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ne)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ne(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function Ue(t,e){const n=z(t),s=z(e);if(n===null)return e;if(n===s)return Ue(ae(t),ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ry(t,e){const n=pi(t,0),s=pi(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=Hn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function sl(t,e){if(fn(t)!==fn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Qe(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(fn(t)>fn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class oy{constructor(e,n){this.errorPrefix_=n,this.parts_=pi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=zr(this.parts_[s]);Fh(this)}}function ay(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=zr(e),Fh(t)}function ly(t){const e=t.parts_.pop();t.byteLength_-=zr(e),t.parts_.length>0&&(t.byteLength_-=1)}function Fh(t){if(t.byteLength_>su)throw new Error(t.errorPrefix_+"has a key path longer than "+su+" bytes ("+t.byteLength_+").");if(t.parts_.length>nu)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+nu+") or object contains a cycle "+Rn(t))}function Rn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends Mh{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new il}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=1e3,cy=60*5*1e3,iu=30*1e3,uy=1.3,dy=3e4,hy="server_kill",ru=3;class Ft extends Dh{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ft.nextPersistentConnectionId_++,this.log_=ki("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Fs,this.maxReconnectDelay_=cy,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");il.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&vr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ie(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new et,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ft.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&lt(e,"w")){const s=Dn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();$e(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||sm(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=iu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=nm(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ie(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):aa("Unrecognized action received from server: "+Ie(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Fs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Fs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>dy&&(this.reconnectDelay_=Fs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*uy)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ft.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Se("getToken() completed but was canceled"):(Se("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new sy(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{$e(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(hy)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&$e(d),l())}}}interrupt(e){Se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],fr(this.interruptReasons_)&&(this.reconnectDelay_=Fs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Xa(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ne(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Se("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ru&&(this.reconnectDelay_=iu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Se("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ru&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+hh.replace(/\./g,"-")]=1,qa()?e["framework.cordova"]=1:ih()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=vr.getInstance().currentlyOnline();return fr(this.interruptReasons_)&&e}}Ft.nextPersistentConnectionId_=0;Ft.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Y(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Y(hs,e),i=new Y(hs,n);return this.compare(s,i)!==0}minPost(){return Y.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gi;class Uh extends Yr{static get __EMPTY_NODE(){return Gi}static set __EMPTY_NODE(e){Gi=e}compare(e,n){return Hn(e.name,n.name)}isDefinedOn(e){throw bs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Y.MIN}maxPost(){return new Y(Ln,Gi)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,Gi)}toString(){return".key"}}const ns=new Uh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ce{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ce.RED,this.left=i??We.EMPTY_NODE,this.right=r??We.EMPTY_NODE}copy(e,n,s,i,r){return new Ce(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return We.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ce.RED=!0;Ce.BLACK=!1;class fy{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class We{constructor(e,n=We.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new We(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ce.BLACK,null,null))}remove(e){return new We(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ce.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ki(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ki(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ki(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ki(this.root_,null,this.comparator_,!0,e)}}We.EMPTY_NODE=new fy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(t,e){return Hn(t.name,e.name)}function rl(t,e){return Hn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ca;function _y(t){ca=t}const $h=function(t){return typeof t=="number"?"number:"+mh(t):"string:"+t},Hh=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&lt(e,".sv"),"Priority must be a string or number.")}else T(t===ca||t.isEmpty(),"priority of unexpected type.");T(t===ca||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ou;class Ee{constructor(e,n=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Hh(this.priorityNode_)}static set __childrenNodeConstructor(e){ou=e}static get __childrenNodeConstructor(){return ou}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:z(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||fn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+$h(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=mh(this.value_):e+=this.value_,this.lazyHash_=_h(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ee.VALUE_TYPE_ORDER.indexOf(n),r=Ee.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bh,Wh;function gy(t){Bh=t}function my(t){Wh=t}class vy extends Yr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Hn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(Ln,new Ee("[PRIORITY-POST]",Wh))}makePost(e,n){const s=Bh(e);return new Y(n,new Ee("[PRIORITY-POST]",s))}toString(){return".priority"}}const _e=new vy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=Math.log(2);class by{constructor(e){const n=r=>parseInt(Math.log(r)/yy,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const yr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new Ce(f,d.node,Ce.BLACK,null,null);{const _=parseInt(u/2,10)+l,w=i(l,_),v=i(_+1,c);return d=t[_],f=n?n(d):d,new Ce(f,d.node,Ce.BLACK,w,v)}},r=function(l){let c=null,u=null,d=t.length;const f=function(w,v){const A=d-w,$=d;d-=w;const j=i(A+1,$),Q=t[A],M=n?n(Q):Q;_(new Ce(M,Q.node,v,null,j))},_=function(w){c?(c.left=w,c=w):(u=w,c=w)};for(let w=0;w<l.count;++w){const v=l.nextBitIsOne(),A=Math.pow(2,l.count-(w+1));v?f(A,Ce.BLACK):(f(A,Ce.BLACK),f(A,Ce.RED))}return u},o=new by(t.length),a=r(o);return new We(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo;const Gn={};class xt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(Gn&&_e,"ChildrenNode.ts has not been loaded"),Fo=Fo||new xt({".priority":Gn},{".priority":_e}),Fo}get(e){const n=Dn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof We?n:null}hasIndex(e){return lt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==ns,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(Y.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=yr(s,e.getCompare()):a=Gn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new xt(u,c)}addToIndexes(e,n){const s=pr(this.indexes_,(i,r)=>{const o=Dn(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===Gn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Y.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),yr(a,o.getCompare())}else return Gn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Y(e.name,a))),l.insert(e,e.node)}});return new xt(s,this.indexSet_)}removeFromIndexes(e,n){const s=pr(this.indexes_,i=>{if(i===Gn)return i;{const r=n.get(e.name);return r?i.remove(new Y(e.name,r)):i}});return new xt(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Us;class U{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Hh(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Us||(Us=new U(new We(rl),null,xt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Us}updatePriority(e){return this.children_.isEmpty()?this:new U(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Us:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Y(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Us:this.priorityNode_;return new U(i,o,r)}}updateChild(e,n){const s=z(e);if(s===null)return n;{T(z(e)!==".priority"||fn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ae(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(_e,(o,a)=>{n[o]=a.val(e),s++,r&&U.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+$h(this.getPriority().val())+":"),this.forEachChild(_e,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":_h(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Y(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Y(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Y(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Y.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ri?-1:0}withIndex(e){if(e===ns||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new U(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ns||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(_e),i=n.getIterator(_e);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ns?null:this.indexMap_.get(e.toString())}}U.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class wy extends U{constructor(){super(new We(rl),U.EMPTY_NODE,xt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return U.EMPTY_NODE}isEmpty(){return!1}}const Ri=new wy;Object.defineProperties(Y,{MIN:{value:new Y(hs,U.EMPTY_NODE)},MAX:{value:new Y(Ln,Ri)}});Uh.__EMPTY_NODE=U.EMPTY_NODE;Ee.__childrenNodeConstructor=U;_y(Ri);my(Ri);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=!0;function me(t,e=null){if(t===null)return U.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ee(n,me(e))}if(!(t instanceof Array)&&Iy){const n=[];let s=!1;if(Te(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=me(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Y(o,l)))}}),n.length===0)return U.EMPTY_NODE;const r=yr(n,py,o=>o.name,rl);if(s){const o=yr(n,_e.getCompare());return new U(r,me(e),new xt({".priority":o},{".priority":_e}))}else return new U(r,me(e),xt.Default)}else{let n=U.EMPTY_NODE;return Te(t,(s,i)=>{if(lt(t,s)&&s.substring(0,1)!=="."){const r=me(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(me(e))}}gy(me);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey extends Yr{constructor(e){super(),this.indexPath_=e,T(!q(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Hn(e.name,n.name):r}makePost(e,n){const s=me(e),i=U.EMPTY_NODE.updateChild(this.indexPath_,s);return new Y(n,i)}maxPost(){const e=U.EMPTY_NODE.updateChild(this.indexPath_,Ri);return new Y(Ln,e)}toString(){return pi(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy extends Yr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Hn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,n){const s=me(e);return new Y(n,s)}toString(){return".value"}}const Sy=new Cy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(t){return{type:"value",snapshotNode:t}}function fs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function _i(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function gi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Ty(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(_i(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(fs(n,s)):o.trackChildChange(gi(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(_e,(i,r)=>{n.hasChild(i)||s.trackChildChange(_i(i,r))}),n.isLeafNode()||n.forEachChild(_e,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(gi(i,r,o))}else s.trackChildChange(fs(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?U.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.indexedFilter_=new ol(e.getIndex()),this.index_=e.getIndex(),this.startPost_=mi.getStartPost_(e),this.endPost_=mi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new Y(n,s))||(s=U.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=U.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(U.EMPTY_NODE);const r=this;return n.forEachChild(_e,(o,a)=>{r.matches(new Y(o,a))||(i=i.updateImmediateChild(o,U.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new mi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new Y(n,s))||(s=U.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=U.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=U.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(U.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,U.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,_)=>d(_,f)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new Y(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(gi(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(_i(n,d));const v=a.updateImmediateChild(n,U.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(fs(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(_i(c.name,c.node)),r.trackChildChange(fs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,U.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:hs}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ln}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new al;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ry(t){return t.loadsAllData()?new ol(t.getIndex()):t.hasLimit()?new ky(t):new mi(t)}function au(t){const e={};if(t.isDefault())return e;let n;if(t.index_===_e?n="$priority":t.index_===Sy?n="$value":t.index_===ns?n="$key":(T(t.index_ instanceof Ey,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ie(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ie(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ie(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ie(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ie(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function lu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_e&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends Dh{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ki("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=br.getListenId_(e,s),a={};this.listens_[o]=a;const l=au(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),Dn(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=br.getListenId_(e,n);delete this.listens_[s]}get(e){const n=au(e._queryParams),s=e._path.toString(),i=new et;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ws(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=di(a.responseText)}catch{$e("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&$e("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(){this.rootNode_=U.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(){return{value:null,children:new Map}}function Cs(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=z(e);t.children.has(s)||t.children.set(s,wr());const i=t.children.get(s);e=ae(e),Cs(i,e,n)}}function ua(t,e){if(q(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(_e,(s,i)=>{Cs(t,new ne(s),i)}),ua(t,e)}}else if(t.children.size>0){const n=z(e);return e=ae(e),t.children.has(n)&&ua(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function da(t,e,n){t.value!==null?n(e,t.value):Ny(t,(s,i)=>{const r=new ne(e.toString()+"/"+s);da(i,r,n)})}function Ny(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Te(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=10*1e3,Oy=30*1e3,xy=5*60*1e3;class Dy{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ay(e);const s=cu+(Oy-cu)*Math.random();Zs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Te(e,(i,r)=>{r>0&&lt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Zs(this.reportStats_.bind(this),Math.floor(Math.random()*2*xy))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var st;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(st||(st={}));function ll(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function cl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ul(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=st.ACK_USER_WRITE,this.source=ll()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ne(e));return new Ir(Z(),n,this.revert)}}else return T(z(this.path)===e,"operationForChild called for unrelated child."),new Ir(ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n){this.source=e,this.path=n,this.type=st.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new vi(this.source,Z()):new vi(this.source,ae(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=st.OVERWRITE}operationForChild(e){return q(this.path)?new Fn(this.source,Z(),this.snap.getImmediateChild(e)):new Fn(this.source,ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=st.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new ne(e));return n.isEmpty()?null:n.value?new Fn(this.source,Z(),n.value):new ps(this.source,Z(),n)}else return T(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ps(this.source,ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ly(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Ty(o.childName,o.snapshotNode))}),$s(t,i,"child_removed",e,s,n),$s(t,i,"child_added",e,s,n),$s(t,i,"child_moved",r,s,n),$s(t,i,"child_changed",e,s,n),$s(t,i,"value",e,s,n),i}function $s(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Uy(t,a,l)),o.forEach(a=>{const l=Fy(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Fy(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Uy(t,e,n){if(e.childName==null||n.childName==null)throw bs("Should only compare child_ events.");const s=new Y(e.childName,e.snapshotNode),i=new Y(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(t,e){return{eventCache:t,serverCache:e}}function ei(t,e,n,s){return Jr(new pn(e,n,s),t.serverCache)}function jh(t,e,n,s){return Jr(t.eventCache,new pn(e,n,s))}function Er(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Un(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo;const $y=()=>(Uo||(Uo=new We(Ev)),Uo);class de{constructor(e,n=$y()){this.value=e,this.children=n}static fromObject(e){let n=new de(null);return Te(e,(s,i)=>{n=n.set(new ne(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(q(e))return null;{const s=z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ae(e),n);return r!=null?{path:ve(new ne(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=z(e),s=this.children.get(n);return s!==null?s.subtree(ae(e)):new de(null)}}set(e,n){if(q(e))return new de(n,this.children);{const s=z(e),r=(this.children.get(s)||new de(null)).set(ae(e),n),o=this.children.insert(s,r);return new de(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new de(null):new de(null,this.children);{const n=z(e),s=this.children.get(n);if(s){const i=s.remove(ae(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new de(null):new de(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const n=z(e),s=this.children.get(n);return s?s.get(ae(e)):null}}setTree(e,n){if(q(e))return n;{const s=z(e),r=(this.children.get(s)||new de(null)).setTree(ae(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new de(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ve(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(q(e))return null;{const r=z(e),o=this.children.get(r);return o?o.findOnPath_(ae(e),ve(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,s){if(q(e))return this;{this.value&&s(n,this.value);const i=z(e),r=this.children.get(i);return r?r.foreachOnPath_(ae(e),ve(n,i),s):new de(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ve(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.writeTree_=e}static empty(){return new ot(new de(null))}}function ti(t,e,n){if(q(e))return new ot(new de(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ue(i,e);return r=r.updateChild(o,n),new ot(t.writeTree_.set(i,r))}else{const i=new de(n),r=t.writeTree_.setTree(e,i);return new ot(r)}}}function ha(t,e,n){let s=t;return Te(n,(i,r)=>{s=ti(s,ve(e,i),r)}),s}function uu(t,e){if(q(e))return ot.empty();{const n=t.writeTree_.setTree(e,new de(null));return new ot(n)}}function fa(t,e){return Bn(t,e)!=null}function Bn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ue(n.path,e)):null}function du(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_e,(s,i)=>{e.push(new Y(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Y(s,i.value))}),e}function cn(t,e){if(q(e))return t;{const n=Bn(t,e);return n!=null?new ot(new de(n)):new ot(t.writeTree_.subtree(e))}}function pa(t){return t.writeTree_.isEmpty()}function _s(t,e){return Gh(Z(),t.writeTree_,e)}function Gh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Gh(ve(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ve(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(t,e){return Yh(e,t)}function Hy(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ti(t.visibleWrites,e,n)),t.lastWriteId=s}function By(t,e,n,s){T(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=ha(t.visibleWrites,e,n),t.lastWriteId=s}function Wy(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Vy(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&jy(a,s.path)?i=!1:Qe(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Gy(t),!0;if(s.snap)t.visibleWrites=uu(t.visibleWrites,s.path);else{const a=s.children;Te(a,l=>{t.visibleWrites=uu(t.visibleWrites,ve(s.path,l))})}return!0}else return!1}function jy(t,e){if(t.snap)return Qe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Qe(ve(t.path,n),e))return!0;return!1}function Gy(t){t.visibleWrites=Kh(t.allWrites,Ky,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ky(t){return t.visible}function Kh(t,e,n){let s=ot.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Qe(n,o)?(a=Ue(n,o),s=ti(s,a,r.snap)):Qe(o,n)&&(a=Ue(o,n),s=ti(s,Z(),r.snap.getChild(a)));else if(r.children){if(Qe(n,o))a=Ue(n,o),s=ha(s,a,r.children);else if(Qe(o,n))if(a=Ue(o,n),q(a))s=ha(s,Z(),r.children);else{const l=Dn(r.children,z(a));if(l){const c=l.getChild(ae(a));s=ti(s,Z(),c)}}}else throw bs("WriteRecord should have .snap or .children")}}return s}function zh(t,e,n,s,i){if(!s&&!i){const r=Bn(t.visibleWrites,e);if(r!=null)return r;{const o=cn(t.visibleWrites,e);if(pa(o))return n;if(n==null&&!fa(o,Z()))return null;{const a=n||U.EMPTY_NODE;return _s(o,a)}}}else{const r=cn(t.visibleWrites,e);if(!i&&pa(r))return n;if(!i&&n==null&&!fa(r,Z()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Qe(c.path,e)||Qe(e,c.path))},a=Kh(t.allWrites,o,e),l=n||U.EMPTY_NODE;return _s(a,l)}}}function zy(t,e,n){let s=U.EMPTY_NODE;const i=Bn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_e,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=cn(t.visibleWrites,e);return n.forEachChild(_e,(o,a)=>{const l=_s(cn(r,new ne(o)),a);s=s.updateImmediateChild(o,l)}),du(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=cn(t.visibleWrites,e);return du(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function qy(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ve(e,n);if(fa(t.visibleWrites,r))return null;{const o=cn(t.visibleWrites,r);return pa(o)?i.getChild(n):_s(o,i.getChild(n))}}function Yy(t,e,n,s){const i=ve(e,n),r=Bn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=cn(t.visibleWrites,i);return _s(o,s.getNode().getImmediateChild(n))}else return null}function Jy(t,e){return Bn(t.visibleWrites,e)}function Qy(t,e,n,s,i,r,o){let a;const l=cn(t.visibleWrites,e),c=Bn(l,Z());if(c!=null)a=c;else if(n!=null)a=_s(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)d(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function Xy(){return{visibleWrites:ot.empty(),allWrites:[],lastWriteId:-1}}function Cr(t,e,n,s){return zh(t.writeTree,t.treePath,e,n,s)}function dl(t,e){return zy(t.writeTree,t.treePath,e)}function hu(t,e,n,s){return qy(t.writeTree,t.treePath,e,n,s)}function Sr(t,e){return Jy(t.writeTree,ve(t.treePath,e))}function Zy(t,e,n,s,i,r){return Qy(t.writeTree,t.treePath,e,n,s,i,r)}function hl(t,e,n){return Yy(t.writeTree,t.treePath,e,n)}function qh(t,e){return Yh(ve(t.treePath,e),t.writeTree)}function Yh(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,gi(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,_i(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,fs(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,gi(s,e.snapshotNode,i.oldSnap));else throw bs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Jh=new tb;class fl{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new pn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return hl(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Un(this.viewCache_),r=Zy(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(t){return{filter:t}}function sb(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function ib(t,e,n,s,i){const r=new eb;let o,a;if(n.type===st.OVERWRITE){const c=n;c.source.fromUser?o=_a(t,e,c.path,c.snap,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!q(c.path),o=Tr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===st.MERGE){const c=n;c.source.fromUser?o=ob(t,e,c.path,c.children,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ga(t,e,c.path,c.children,s,i,a,r))}else if(n.type===st.ACK_USER_WRITE){const c=n;c.revert?o=cb(t,e,c.path,s,i,r):o=ab(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===st.LISTEN_COMPLETE)o=lb(t,e,n.path,s,r);else throw bs("Unknown operation type: "+n.type);const l=r.getChanges();return rb(e,o,l),{viewCache:o,changes:l}}function rb(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Er(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Vh(Er(e)))}}function Qh(t,e,n,s,i,r){const o=e.eventCache;if(Sr(s,n)!=null)return e;{let a,l;if(q(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Un(e),u=c instanceof U?c:U.EMPTY_NODE,d=dl(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Cr(s,Un(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=z(n);if(c===".priority"){T(fn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=hu(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=ae(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=hu(s,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=hl(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return ei(e,a,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function Tr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(q(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=z(n);if(!l.isCompleteForPath(n)&&fn(n)>1)return e;const w=ae(n),A=l.getNode().getImmediateChild(_).updateChild(w,s);_===".priority"?c=u.updatePriority(l.getNode(),A):c=u.updateChild(l.getNode(),_,A,w,Jh,null)}const d=jh(e,c,l.isFullyInitialized()||q(n),u.filtersNodes()),f=new fl(i,d,r);return Qh(t,d,n,i,f,a)}function _a(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new fl(i,e,r);if(q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=ei(e,c,!0,t.filter.filtersNodes());else{const d=z(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=ei(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=ae(n),_=a.getNode().getImmediateChild(d);let w;if(q(f))w=s;else{const v=u.getCompleteChild(d);v!=null?nl(f)===".priority"&&v.getChild(Lh(f)).isEmpty()?w=v:w=v.updateChild(f,s):w=U.EMPTY_NODE}if(_.equals(w))l=e;else{const v=t.filter.updateChild(a.getNode(),d,w,f,u,o);l=ei(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function fu(t,e){return t.eventCache.isCompleteForChild(e)}function ob(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=ve(n,l);fu(e,z(u))&&(a=_a(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=ve(n,l);fu(e,z(u))||(a=_a(t,a,u,c,i,r,o))}),a}function pu(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ga(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;q(n)?c=s:c=new de(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),w=pu(t,_,f);l=Tr(t,l,new ne(d),w,i,r,o,a)}}),c.children.inorderTraversal((d,f)=>{const _=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!_){const w=e.serverCache.getNode().getImmediateChild(d),v=pu(t,w,f);l=Tr(t,l,new ne(d),v,i,r,o,a)}}),l}function ab(t,e,n,s,i,r,o){if(Sr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Tr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(q(n)){let c=new de(null);return l.getNode().forEachChild(ns,(u,d)=>{c=c.set(new ne(u),d)}),ga(t,e,n,c,i,r,a,o)}else return e}else{let c=new de(null);return s.foreach((u,d)=>{const f=ve(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),ga(t,e,n,c,i,r,a,o)}}function lb(t,e,n,s,i){const r=e.serverCache,o=jh(e,r.getNode(),r.isFullyInitialized()||q(n),r.isFiltered());return Qh(t,o,n,s,Jh,i)}function cb(t,e,n,s,i,r){let o;if(Sr(s,n)!=null)return e;{const a=new fl(s,e,i),l=e.eventCache.getNode();let c;if(q(n)||z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Cr(s,Un(e));else{const d=e.serverCache.getNode();T(d instanceof U,"serverChildren would be complete if leaf node"),u=dl(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=z(n);let d=hl(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,ae(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,U.EMPTY_NODE,ae(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Cr(s,Un(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Sr(s,Z())!=null,ei(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new ol(s.getIndex()),r=Ry(s);this.processor_=nb(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(U.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(U.EMPTY_NODE,a.getNode(),null),u=new pn(l,o.isFullyInitialized(),i.filtersNodes()),d=new pn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Jr(d,u),this.eventGenerator_=new My(this.query_)}get query(){return this.query_}}function db(t){return t.viewCache_.serverCache.getNode()}function hb(t){return Er(t.viewCache_)}function fb(t,e){const n=Un(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function _u(t){return t.eventRegistrations_.length===0}function pb(t,e){t.eventRegistrations_.push(e)}function gu(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function mu(t,e,n,s){e.type===st.MERGE&&e.source.queryId!==null&&(T(Un(t.viewCache_),"We should always have a full cache before handling merges"),T(Er(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=ib(t.processor_,i,e,n,s);return sb(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Xh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function _b(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(_e,(r,o)=>{s.push(fs(r,o))}),n.isFullyInitialized()&&s.push(Vh(n.getNode())),Xh(t,s,n.getNode(),e)}function Xh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Ly(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kr;class Zh{constructor(){this.views=new Map}}function gb(t){T(!kr,"__referenceConstructor has already been defined"),kr=t}function mb(){return T(kr,"Reference.ts has not been loaded"),kr}function vb(t){return t.views.size===0}function pl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),mu(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(mu(o,e,n,s));return r}}function ef(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Cr(n,i?s:null),l=!1;a?l=!0:s instanceof U?(a=dl(n,s),l=!1):(a=U.EMPTY_NODE,l=!1);const c=Jr(new pn(a,l,!1),new pn(s,i,!1));return new ub(e,c)}return o}function yb(t,e,n,s,i,r){const o=ef(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),pb(o,n),_b(o,n)}function bb(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=_n(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(gu(c,n,s)),_u(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(gu(l,n,s)),_u(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!_n(t)&&r.push(new(mb())(e._repo,e._path)),{removed:r,events:o}}function tf(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function un(t,e){let n=null;for(const s of t.views.values())n=n||fb(s,e);return n}function nf(t,e){if(e._queryParams.loadsAllData())return Xr(t);{const s=e._queryIdentifier;return t.views.get(s)}}function sf(t,e){return nf(t,e)!=null}function _n(t){return Xr(t)!=null}function Xr(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rr;function wb(t){T(!Rr,"__referenceConstructor has already been defined"),Rr=t}function Ib(){return T(Rr,"Reference.ts has not been loaded"),Rr}let Eb=1;class vu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new de(null),this.pendingWriteTree_=Xy(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function _l(t,e,n,s,i){return Hy(t.pendingWriteTree_,e,n,s,i),i?Ss(t,new Fn(ll(),e,n)):[]}function Cb(t,e,n,s){By(t.pendingWriteTree_,e,n,s);const i=de.fromObject(n);return Ss(t,new ps(ll(),e,i))}function rn(t,e,n=!1){const s=Wy(t.pendingWriteTree_,e);if(Vy(t.pendingWriteTree_,e)){let r=new de(null);return s.snap!=null?r=r.set(Z(),!0):Te(s.children,o=>{r=r.set(new ne(o),!0)}),Ss(t,new Ir(s.path,r,n))}else return[]}function Pi(t,e,n){return Ss(t,new Fn(cl(),e,n))}function Sb(t,e,n){const s=de.fromObject(n);return Ss(t,new ps(cl(),e,s))}function Tb(t,e){return Ss(t,new vi(cl(),e))}function kb(t,e,n){const s=gl(t,n);if(s){const i=ml(s),r=i.path,o=i.queryId,a=Ue(r,e),l=new vi(ul(o),a);return vl(t,r,l)}else return[]}function Pr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||sf(o,e))){const l=bb(o,e,n,s);vb(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(f,_)=>_n(_));if(u&&!d){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=Nb(f);for(let w=0;w<_.length;++w){const v=_[w],A=v.query,$=lf(t,v);t.listenProvider_.startListening(ni(A),yi(t,A),$.hashFn,$.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(ni(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(eo(f));t.listenProvider_.stopListening(ni(f),_)}))}Ab(t,c)}return a}function rf(t,e,n,s){const i=gl(t,s);if(i!=null){const r=ml(i),o=r.path,a=r.queryId,l=Ue(o,e),c=new Fn(ul(a),l,n);return vl(t,o,c)}else return[]}function Rb(t,e,n,s){const i=gl(t,s);if(i){const r=ml(i),o=r.path,a=r.queryId,l=Ue(o,e),c=de.fromObject(n),u=new ps(ul(a),l,c);return vl(t,o,u)}else return[]}function ma(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const w=Ue(f,i);r=r||un(_,w),o=o||_n(_)});let a=t.syncPointTree_.get(i);a?(o=o||_n(a),r=r||un(a,Z())):(a=new Zh,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=U.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,w)=>{const v=un(w,Z());v&&(r=r.updateImmediateChild(_,v))}));const c=sf(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=eo(e);T(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=Ob();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const u=Qr(t.pendingWriteTree_,i);let d=yb(a,e,n,u,r,l);if(!c&&!o&&!s){const f=nf(a,e);d=d.concat(xb(t,e,f))}return d}function Zr(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ue(o,e),c=un(a,l);if(c)return c});return zh(i,e,r,n,!0)}function Pb(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=Ue(c,n);s=s||un(u,d)});let i=t.syncPointTree_.get(n);i?s=s||un(i,Z()):(i=new Zh,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new pn(s,!0,!1):null,a=Qr(t.pendingWriteTree_,e._path),l=ef(i,e,a,r?o.getNode():U.EMPTY_NODE,r);return hb(l)}function Ss(t,e){return of(e,t.syncPointTree_,null,Qr(t.pendingWriteTree_,Z()))}function of(t,e,n,s){if(q(t.path))return af(t,e,n,s);{const i=e.get(Z());n==null&&i!=null&&(n=un(i,Z()));let r=[];const o=z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=qh(s,o);r=r.concat(of(a,l,c,u))}return i&&(r=r.concat(pl(i,t,s,n))),r}}function af(t,e,n,s){const i=e.get(Z());n==null&&i!=null&&(n=un(i,Z()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=qh(s,o),u=t.operationForChild(o);u&&(r=r.concat(af(u,a,l,c)))}),i&&(r=r.concat(pl(i,t,s,n))),r}function lf(t,e){const n=e.query,s=yi(t,n);return{hashFn:()=>(db(e)||U.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?kb(t,n._path,s):Tb(t,n._path);{const r=Tv(i,n);return Pr(t,n,null,r)}}}}function yi(t,e){const n=eo(e);return t.queryToTagMap.get(n)}function eo(t){return t._path.toString()+"$"+t._queryIdentifier}function gl(t,e){return t.tagToQueryMap.get(e)}function ml(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ne(t.substr(0,e))}}function vl(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=Qr(t.pendingWriteTree_,e);return pl(s,n,i,null)}function Nb(t){return t.fold((e,n,s)=>{if(n&&_n(n))return[Xr(n)];{let i=[];return n&&(i=tf(n)),Te(s,(r,o)=>{i=i.concat(o)}),i}})}function ni(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Ib())(t._repo,t._path):t}function Ab(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=eo(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Ob(){return Eb++}function xb(t,e,n){const s=e._path,i=yi(t,e),r=lf(t,n),o=t.listenProvider_.startListening(ni(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)T(!_n(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!q(c)&&u&&_n(u))return[Xr(u).query];{let f=[];return u&&(f=f.concat(tf(u).map(_=>_.query))),Te(d,(_,w)=>{f=f.concat(w)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(ni(u),yi(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new yl(n)}node(){return this.node_}}class bl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ve(this.path_,e);return new bl(this.syncTree_,n)}node(){return Zr(this.syncTree_,this.path_)}}const Db=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},yu=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Mb(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Lb(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Mb=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},Lb=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},cf=function(t,e,n,s){return Il(e,new bl(n,t),s)},wl=function(t,e,n){return Il(t,new yl(e),n)};function Il(t,e,n){const s=t.getPriority().val(),i=yu(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=yu(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ee(a,me(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ee(i))),o.forEachChild(_e,(a,l)=>{const c=Il(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function to(t,e){let n=e instanceof ne?e:new ne(e),s=t,i=z(n);for(;i!==null;){const r=Dn(s.node.children,i)||{children:{},childCount:0};s=new El(i,s,r),n=ae(n),i=z(n)}return s}function Wn(t){return t.node.value}function Cl(t,e){t.node.value=e,va(t)}function uf(t){return t.node.childCount>0}function Fb(t){return Wn(t)===void 0&&!uf(t)}function no(t,e){Te(t.node.children,(n,s)=>{e(new El(n,t,s))})}function df(t,e,n,s){n&&e(t),no(t,i=>{df(i,e,!0)})}function Ub(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ni(t){return new ne(t.parent===null?t.name:Ni(t.parent)+"/"+t.name)}function va(t){t.parent!==null&&$b(t.parent,t.name,t)}function $b(t,e,n){const s=Fb(n),i=lt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,va(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,va(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb=/[\[\].#$\/\u0000-\u001F\u007F]/,Bb=/[\[\].#$\u0000-\u001F\u007F]/,$o=10*1024*1024,Sl=function(t){return typeof t=="string"&&t.length!==0&&!Hb.test(t)},hf=function(t){return typeof t=="string"&&t.length!==0&&!Bb.test(t)},Wb=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),hf(t)},Tl=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!qr(t)||t&&typeof t=="object"&&lt(t,".sv")},ya=function(t,e,n,s){Ai(us(t,"value"),e,n)},Ai=function(t,e,n){const s=n instanceof ne?new oy(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Rn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Rn(s)+" with contents = "+e.toString());if(qr(e))throw new Error(t+"contains "+e.toString()+" "+Rn(s));if(typeof e=="string"&&e.length>$o/3&&zr(e)>$o)throw new Error(t+"contains a string greater than "+$o+" utf8 bytes "+Rn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Te(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Sl(o)))throw new Error(t+" contains an invalid key ("+o+") "+Rn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ay(s,o),Ai(t,a,s),ly(s)}),i&&r)throw new Error(t+' contains ".value" child '+Rn(s)+" in addition to actual children.")}},Vb=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=pi(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Sl(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(ry);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&Qe(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},ff=function(t,e,n,s){const i=us(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Te(e,(o,a)=>{const l=new ne(o);if(Ai(i,a,ve(n,l)),nl(l)===".priority"&&!Tl(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),Vb(i,r)},jb=function(t,e,n){if(qr(e))throw new Error(us(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Tl(e))throw new Error(us(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},pf=function(t,e,n,s){if(!hf(n))throw new Error(us(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Gb=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),pf(t,e,n)},Yn=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Kb=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Sl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Wb(n))throw new Error(us(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function so(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!sl(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function _f(t,e,n){so(t,n),gf(t,s=>sl(s,e))}function Ke(t,e,n){so(t,n),gf(t,s=>Qe(s,e)||Qe(e,s))}function gf(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(qb(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function qb(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Xs&&Se("event: "+n.toString()),Es(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb="repo_interrupt",Jb=25;class Qb{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wr(),this.transactionQueueTree_=new El,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Xb(t,e,n){if(t.stats_=el(t.repoInfo_),t.forceRestClient_||Nv())t.server_=new br(t.repoInfo_,(s,i,r,o)=>{bu(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>wu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ie(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Ft(t.repoInfo_,e,(s,i,r,o)=>{bu(t,s,i,r,o)},s=>{wu(t,s)},s=>{ew(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Mv(t.repoInfo_,()=>new Dy(t.stats_,t.server_)),t.infoData_=new Py,t.infoSyncTree_=new vu({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Pi(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),kl(t,"connected",!1),t.serverSyncTree_=new vu({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Ke(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Zb(t){const n=t.infoData_.getNode(new ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Oi(t){return Db({timestamp:Zb(t)})}function bu(t,e,n,s,i){t.dataUpdateCount++;const r=new ne(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=pr(n,c=>me(c));o=Rb(t.serverSyncTree_,r,l,i)}else{const l=me(n);o=rf(t.serverSyncTree_,r,l,i)}else if(s){const l=pr(n,c=>me(c));o=Sb(t.serverSyncTree_,r,l)}else{const l=me(n);o=Pi(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=gs(t,r)),Ke(t.eventQueue_,a,o)}function wu(t,e){kl(t,"connected",e),e===!1&&iw(t)}function ew(t,e){Te(e,(n,s)=>{kl(t,n,s)})}function kl(t,e,n){const s=new ne("/.info/"+e),i=me(n);t.infoData_.updateSnapshot(s,i);const r=Pi(t.infoSyncTree_,s,i);Ke(t.eventQueue_,s,r)}function io(t){return t.nextWriteId_++}function tw(t,e,n){const s=Pb(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=me(i).withIndex(e._queryParams.getIndex());ma(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Pi(t.serverSyncTree_,e._path,r);else{const a=yi(t.serverSyncTree_,e);o=rf(t.serverSyncTree_,e._path,r,a)}return Ke(t.eventQueue_,e._path,o),Pr(t.serverSyncTree_,e,n,null,!0),r},i=>(Ts(t,"get for query "+Ie(e)+" failed: "+i),Promise.reject(new Error(i))))}function nw(t,e,n,s,i){Ts(t,"set",{path:e.toString(),value:n,priority:s});const r=Oi(t),o=me(n,s),a=Zr(t.serverSyncTree_,e),l=wl(o,a,r),c=io(t),u=_l(t.serverSyncTree_,e,l,c,!0);so(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const w=f==="ok";w||$e("set at "+e+" failed: "+f);const v=rn(t.serverSyncTree_,c,!w);Ke(t.eventQueue_,e,v),gn(t,i,f,_)});const d=Pl(t,e);gs(t,d),Ke(t.eventQueue_,d,[])}function sw(t,e,n,s){Ts(t,"update",{path:e.toString(),value:n});let i=!0;const r=Oi(t),o={};if(Te(n,(a,l)=>{i=!1,o[a]=cf(ve(e,a),me(l),t.serverSyncTree_,r)}),i)Se("update() called with empty data.  Don't do anything."),gn(t,s,"ok",void 0);else{const a=io(t),l=Cb(t.serverSyncTree_,e,o,a);so(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||$e("update at "+e+" failed: "+c);const f=rn(t.serverSyncTree_,a,!d),_=f.length>0?gs(t,e):e;Ke(t.eventQueue_,_,f),gn(t,s,c,u)}),Te(n,c=>{const u=Pl(t,ve(e,c));gs(t,u)}),Ke(t.eventQueue_,e,[])}}function iw(t){Ts(t,"onDisconnectEvents");const e=Oi(t),n=wr();da(t.onDisconnect_,Z(),(i,r)=>{const o=cf(i,r,t.serverSyncTree_,e);Cs(n,i,o)});let s=[];da(n,Z(),(i,r)=>{s=s.concat(Pi(t.serverSyncTree_,i,r));const o=Pl(t,i);gs(t,o)}),t.onDisconnect_=wr(),Ke(t.eventQueue_,Z(),s)}function rw(t,e,n){t.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&ua(t.onDisconnect_,e),gn(t,n,s,i)})}function Iu(t,e,n,s){const i=me(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&Cs(t.onDisconnect_,e,i),gn(t,s,r,o)})}function ow(t,e,n,s,i){const r=me(n,s);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&Cs(t.onDisconnect_,e,r),gn(t,i,o,a)})}function aw(t,e,n,s){if(fr(n)){Se("onDisconnect().update() called with empty data.  Don't do anything."),gn(t,s,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,r)=>{i==="ok"&&Te(n,(o,a)=>{const l=me(a);Cs(t.onDisconnect_,ve(e,o),l)}),gn(t,s,i,r)})}function lw(t,e,n){let s;z(e._path)===".info"?s=ma(t.infoSyncTree_,e,n):s=ma(t.serverSyncTree_,e,n),_f(t.eventQueue_,e._path,s)}function mf(t,e,n){let s;z(e._path)===".info"?s=Pr(t.infoSyncTree_,e,n):s=Pr(t.serverSyncTree_,e,n),_f(t.eventQueue_,e._path,s)}function cw(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Yb)}function Ts(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Se(n,...e)}function gn(t,e,n,s){e&&Es(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function uw(t,e,n,s,i,r){Ts(t,"transaction on "+e);const o={path:e,update:n,onComplete:s,status:null,order:ph(),applyLocally:r,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Rl(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Ai("transaction failed: Data returned ",l,o.path),o.status=0;const c=to(t.transactionQueueTree_,e),u=Wn(c)||[];u.push(o),Cl(c,u);let d;typeof l=="object"&&l!==null&&lt(l,".priority")?(d=Dn(l,".priority"),T(Tl(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=(Zr(t.serverSyncTree_,e)||U.EMPTY_NODE).getPriority().val();const f=Oi(t),_=me(l,d),w=wl(_,a,f);o.currentOutputSnapshotRaw=_,o.currentOutputSnapshotResolved=w,o.currentWriteId=io(t);const v=_l(t.serverSyncTree_,e,w,o.currentWriteId,o.applyLocally);Ke(t.eventQueue_,e,v),ro(t,t.transactionQueueTree_)}}function Rl(t,e,n){return Zr(t.serverSyncTree_,e,n)||U.EMPTY_NODE}function ro(t,e=t.transactionQueueTree_){if(e||oo(t,e),Wn(e)){const n=yf(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&dw(t,Ni(e),n)}else uf(e)&&no(e,n=>{ro(t,n)})}function dw(t,e,n){const s=n.map(c=>c.currentWriteId),i=Rl(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Ue(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ts(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(rn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();oo(t,to(t.transactionQueueTree_,e)),ro(t,t.transactionQueueTree_),Ke(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)Es(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{$e("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}gs(t,e)}},o)}function gs(t,e){const n=vf(t,e),s=Ni(n),i=yf(t,n);return hw(t,i,s),s}function hw(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ue(n,l.path);let u=!1,d;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(rn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Jb)u=!0,d="maxretry",i=i.concat(rn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Rl(t,l.path,o);l.currentInputSnapshot=f;const _=e[a].update(f.val());if(_!==void 0){Ai("transaction failed: Data returned ",_,l.path);let w=me(_);typeof _=="object"&&_!=null&&lt(_,".priority")||(w=w.updatePriority(f.getPriority()));const A=l.currentWriteId,$=Oi(t),j=wl(w,f,$);l.currentOutputSnapshotRaw=w,l.currentOutputSnapshotResolved=j,l.currentWriteId=io(t),o.splice(o.indexOf(A),1),i=i.concat(_l(t.serverSyncTree_,l.path,j,l.currentWriteId,l.applyLocally)),i=i.concat(rn(t.serverSyncTree_,A,!0))}else u=!0,d="nodata",i=i.concat(rn(t.serverSyncTree_,l.currentWriteId,!0))}Ke(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}oo(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Es(s[a]);ro(t,t.transactionQueueTree_)}function vf(t,e){let n,s=t.transactionQueueTree_;for(n=z(e);n!==null&&Wn(s)===void 0;)s=to(s,n),e=ae(e),n=z(e);return s}function yf(t,e){const n=[];return bf(t,e,n),n.sort((s,i)=>s.order-i.order),n}function bf(t,e,n){const s=Wn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);no(e,i=>{bf(t,i,n)})}function oo(t,e){const n=Wn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Cl(e,n.length>0?n:void 0)}no(e,s=>{oo(t,s)})}function Pl(t,e){const n=Ni(vf(t,e)),s=to(t.transactionQueueTree_,e);return Ub(s,i=>{Ho(t,i)}),Ho(t,s),df(s,i=>{Ho(t,i)}),n}function Ho(t,e){const n=Wn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(rn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Cl(e,void 0):n.length=r+1,Ke(t.eventQueue_,Ni(e),i);for(let o=0;o<s.length;o++)Es(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function pw(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):$e(`Invalid query segment '${n}' in query '${t}'`)}return e}const Eu=function(t,e){const n=_w(t),s=n.namespace;n.domain==="firebase.com"&&Gt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Gt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||wv();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new kh(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ne(n.pathString)}},_w=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=fw(t.substring(u,d)));const f=pw(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const w=e.indexOf(".");s=e.substring(0,w).toLowerCase(),n=e.substring(w+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ie(this.snapshot.exportVal())}}class mw{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new et;return rw(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Yn("OnDisconnect.remove",this._path);const e=new et;return Iu(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Yn("OnDisconnect.set",this._path),ya("OnDisconnect.set",e,this._path);const n=new et;return Iu(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Yn("OnDisconnect.setWithPriority",this._path),ya("OnDisconnect.setWithPriority",e,this._path),jb("OnDisconnect.setWithPriority",n);const s=new et;return ow(this._repo,this._path,e,n,s.wrapCallback(()=>{})),s.promise}update(e){Yn("OnDisconnect.update",this._path),ff("OnDisconnect.update",e,this._path);const n=new et;return aw(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return q(this._path)?null:nl(this._path)}get ref(){return new St(this._repo,this._path)}get _queryIdentifier(){const e=lu(this._queryParams),n=Xa(e);return n==="{}"?"default":n}get _queryObject(){return lu(this._queryParams)}isEqual(e){if(e=Re(e),!(e instanceof Nl))return!1;const n=this._repo===e._repo,s=sl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+iy(this._path)}}class St extends Nl{constructor(e,n){super(e,n,new al,!1)}get parent(){const e=Lh(this._path);return e===null?null:new St(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ms{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ne(e),s=ba(this.ref,e);return new ms(this._node.getChild(n),s,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ms(i,ba(this.ref,s),_e)))}hasChild(e){const n=new ne(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ze(t,e){return t=Re(t),t._checkNotDeleted("ref"),e!==void 0?ba(t._root,e):t._root}function ba(t,e){return t=Re(t),z(t._path)===null?Gb("child","path",e):pf("child","path",e),new St(t._repo,ve(t._path,e))}function If(t){return t=Re(t),new vw(t._repo,t._path)}function xi(t,e){t=Re(t),Yn("set",t._path),ya("set",e,t._path);const n=new et;return nw(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function yw(t,e){ff("update",e,t._path);const n=new et;return sw(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function ao(t){t=Re(t);const e=new wf(()=>{}),n=new lo(e);return tw(t._repo,t,n).then(s=>new ms(s,new St(t._repo,t._path),t._queryParams.getIndex()))}class lo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new gw("value",this,new ms(e.snapshotNode,new St(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new mw(this,e,n):null}matches(e){return e instanceof lo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function bw(t,e,n,s,i){const r=new wf(n,void 0),o=new lo(r);return lw(t._repo,t,o),()=>mf(t._repo,t,o)}function Al(t,e,n,s){return bw(t,"value",e)}function wa(t,e,n){mf(t._repo,t,null)}gb(St);wb(St);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="FIREBASE_DATABASE_EMULATOR_HOST",Ia={};let Iw=!1;function Ew(t,e,n,s){t.repoInfo_=new kh(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Cw(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Gt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Se("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Eu(r,i),a=o.repoInfo,l;typeof process<"u"&&jc&&(l=jc[ww]),l?(r=`http://${l}?ns=${a.namespace}`,o=Eu(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new Ov(t.name,t.options,e);Kb("Invalid Firebase Database URL",o),q(o.path)||Gt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Tw(a,t,c,new Av(t.name,n));return new kw(u,t)}function Sw(t,e){const n=Ia[e];(!n||n[t.key]!==t)&&Gt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),cw(t),delete n[t.key]}function Tw(t,e,n,s){let i=Ia[e.name];i||(i={},Ia[e.name]=i);let r=i[t.toURLString()];return r&&Gt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Qb(t,Iw,n,s),i[t.toURLString()]=r,r}class kw{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Xb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new St(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Sw(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Gt("Cannot call "+e+" on a deleted database.")}}function Rw(t=ch(),e){const n=Qa(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Gg("database");s&&Pw(n,...s)}return n}function Pw(t,e,n,s={}){t=Re(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Gt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Gt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Zi(Zi.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Kg(s.mockUserToken,t.app.options.projectId);r=new Zi(o)}Ew(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(t){gv(Is),ds(new Mn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Cw(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),ln(Gc,Kc,t),ln(Gc,Kc,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function Ow(t,e,n){var s;if(t=Re(t),Yn("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(s=void 0)!==null&&s!==void 0?s:!0,r=new et,o=(l,c,u)=>{let d=null;l?r.reject(l):(d=new ms(u,new St(t._repo,t._path),_e),r.resolve(new Aw(c,d)))},a=Al(t,()=>{});return uw(t._repo,t._path,e,o,a,i),r.promise}Ft.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ft.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Nw();function Ol(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Ef(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xw=Ef,Cf=new Si("auth","Firebase",Ef());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new Ya("@firebase/auth");function Dw(t,...e){Nr.logLevel<=se.WARN&&Nr.warn(`Auth (${Is}): ${t}`,...e)}function er(t,...e){Nr.logLevel<=se.ERROR&&Nr.error(`Auth (${Is}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(t,...e){throw xl(t,...e)}function wt(t,...e){return xl(t,...e)}function Sf(t,e,n){const s=Object.assign(Object.assign({},xw()),{[e]:n});return new Si("auth","Firebase",s).create(e,{appName:t.name})}function dn(t){return Sf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Cf.create(t,...e)}function B(t,e,...n){if(!t)throw xl(e,...n)}function Dt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw er(e),new Error(e)}function zt(t,e){t||Dt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Mw(){return Cu()==="http:"||Cu()==="https:"}function Cu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mw()||qg()||"connection"in navigator)?navigator.onLine:!0}function Fw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n){this.shortDelay=e,this.longDelay=n,zt(n>e,"Short delay should be less than long delay!"),this.isMobile=qa()||ih()}get(){return Lw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(t,e){zt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=new Di(3e4,6e4);function co(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ks(t,e,n,s,i={}){return kf(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=ws(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},r);return zg()||(c.referrerPolicy="no-referrer"),Tf.fetch()(Pf(t,t.config.apiHost,n,a),c)})}async function kf(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Uw),e);try{const i=new Hw(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw zi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw zi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw zi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw zi(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Sf(t,u,c);Kt(t,u)}}catch(i){if(i instanceof wn)throw i;Kt(t,"network-request-failed",{message:String(i)})}}async function Rf(t,e,n,s,i={}){const r=await ks(t,e,n,s,i);return"mfaPendingCredential"in r&&Kt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Pf(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Dl(t.config,i):`${t.config.apiScheme}://${i}`}class Hw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(wt(this.auth,"network-request-failed")),$w.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=wt(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(t,e){return ks(t,"POST","/v1/accounts:delete",e)}async function Nf(t,e){return ks(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ww(t,e=!1){const n=Re(t),s=await n.getIdToken(e),i=Ml(s);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:si(Bo(i.auth_time)),issuedAtTime:si(Bo(i.iat)),expirationTime:si(Bo(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Bo(t){return Number(t)*1e3}function Ml(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return er("JWT malformed, contained fewer than 3 sections"),null;try{const i=hr(n);return i?JSON.parse(i):(er("Failed to decode base64 JWT payload"),null)}catch(i){return er("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Su(t){const e=Ml(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof wn&&Vw(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Vw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=si(this.lastLoginAt),this.creationTime=si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(t){var e;const n=t.auth,s=await t.getIdToken(),i=await bi(t,Nf(n,{idToken:s}));B(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Af(r.providerUserInfo):[],a=Kw(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ca(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Gw(t){const e=Re(t);await Ar(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kw(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Af(t){return t.map(e=>{var{providerId:n}=e,s=Ol(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zw(t,e){const n=await kf(t,{},async()=>{const s=ws({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Pf(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Tf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qw(t,e){return ks(t,"POST","/v2/accounts:revokeToken",co(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Su(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){B(e.length!==0,"internal-error");const n=Su(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await zw(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ss;return s&&(B(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(B(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(B(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ss,this.toJSON())}_performRefresh(){return Dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mt{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Ol(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ca(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await bi(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ww(this,e)}reload(){return Gw(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ar(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(dn(this.auth));const e=await this.getIdToken();return await bi(this,Bw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,$=(c=n.createdAt)!==null&&c!==void 0?c:void 0,j=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:Q,emailVerified:M,isAnonymous:ye,providerData:Ye,stsTokenManager:Ve}=n;B(Q&&Ve,e,"internal-error");const ct=ss.fromJSON(this.name,Ve);B(typeof Q=="string",e,"internal-error"),Qt(d,e.name),Qt(f,e.name),B(typeof M=="boolean",e,"internal-error"),B(typeof ye=="boolean",e,"internal-error"),Qt(_,e.name),Qt(w,e.name),Qt(v,e.name),Qt(A,e.name),Qt($,e.name),Qt(j,e.name);const Jt=new Mt({uid:Q,auth:e,email:f,emailVerified:M,displayName:d,isAnonymous:ye,photoURL:w,phoneNumber:_,tenantId:v,stsTokenManager:ct,createdAt:$,lastLoginAt:j});return Ye&&Array.isArray(Ye)&&(Jt.providerData=Ye.map(Tt=>Object.assign({},Tt))),A&&(Jt._redirectEventId=A),Jt}static async _fromIdTokenResponse(e,n,s=!1){const i=new ss;i.updateFromServerResponse(n);const r=new Mt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ar(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];B(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Af(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new ss;a.updateFromIdToken(s);const l=new Mt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Ca(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tu=new Map;function Lt(t){zt(t instanceof Function,"Expected a class definition");let e=Tu.get(t);return e?(zt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tu.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Of.type="NONE";const ku=Of;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e,n){return`firebase:${t}:${e}:${n}`}class is{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=tr(this.userKey,i.apiKey,r),this.fullPersistenceKey=tr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new is(Lt(ku),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Lt(ku);const o=tr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Mt._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new is(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new is(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Uf(e))return"Blackberry";if($f(e))return"Webos";if(Df(e))return"Safari";if((e.includes("chrome/")||Mf(e))&&!e.includes("edge/"))return"Chrome";if(Ff(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function xf(t=He()){return/firefox\//i.test(t)}function Df(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mf(t=He()){return/crios\//i.test(t)}function Lf(t=He()){return/iemobile/i.test(t)}function Ff(t=He()){return/android/i.test(t)}function Uf(t=He()){return/blackberry/i.test(t)}function $f(t=He()){return/webos/i.test(t)}function Ll(t=He()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Yw(t=He()){var e;return Ll(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Jw(){return Yg()&&document.documentMode===10}function Hf(t=He()){return Ll(t)||Ff(t)||$f(t)||Uf(t)||/windows phone/i.test(t)||Lf(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(t,e=[]){let n;switch(t){case"Browser":n=Ru(He());break;case"Worker":n=`${Ru(He())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Is}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xw(t,e={}){return ks(t,"GET","/v2/passwordPolicy",co(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw=6;class eI{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Zw,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pu(this),this.idTokenSubscription=new Pu(this),this.beforeStateQueue=new Qw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Lt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await is.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Nf(this,{idToken:e}),s=await Mt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ot(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ar(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(dn(this));const n=e?Re(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Xw(this),n=new eI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Si("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await qw(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Lt(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await is.create(this,[Lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Dw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function uo(t){return Re(t)}class Pu{constructor(e){this.auth=e,this.observer=null,this.addObserver=rm(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nI(t){Fl=t}function sI(t){return Fl.loadJS(t)}function iI(){return Fl.gapiScript}function rI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(t,e){const n=Qa(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(_r(r,e??{}))return i;Kt(i,"already-initialized")}return n.initialize({options:e})}function aI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function lI(t,e,n){const s=uo(t);B(s._canInitEmulator,s,"emulator-config-failed"),B(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Wf(e),{host:o,port:a}=cI(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),uI()}function Wf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function cI(t){const e=Wf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Nu(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Nu(o)}}}function Nu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function uI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dt("not implemented")}_getIdTokenResponse(e){return Dt("not implemented")}_linkToIdToken(e,n){return Dt("not implemented")}_getReauthenticationResolver(e){return Dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(t,e){return Rf(t,"POST","/v1/accounts:signInWithIdp",co(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="http://localhost";class $n extends Vf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Ol(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new $n(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return rs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,rs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,rs(e,n)}buildRequest(){const e={requestUri:dI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ws(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends jf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Mi{constructor(){super("facebook.com")}static credential(e){return $n._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return en.credential(e.oauthAccessToken)}catch{return null}}}en.FACEBOOK_SIGN_IN_METHOD="facebook.com";en.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $n._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return tn.credential(n,s)}catch{return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Mi{constructor(){super("github.com")}static credential(e){return $n._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.GITHUB_SIGN_IN_METHOD="github.com";nn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Mi{constructor(){super("twitter.com")}static credential(e,n){return $n._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return sn.credential(n,s)}catch{return null}}}sn.TWITTER_SIGN_IN_METHOD="twitter.com";sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hI(t,e){return Rf(t,"POST","/v1/accounts:signUp",co(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Mt._fromIdTokenResponse(e,s,i),o=Au(s);return new mn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Au(s);return new mn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Au(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fI(t){var e;if(Ot(t.app))return Promise.reject(dn(t));const n=uo(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new mn({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await hI(n,{returnSecureToken:!0}),i=await mn._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends wn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Or.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Or(e,n,s,i)}}function Gf(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Or._fromErrorAndOperation(t,r,e,s):r})}async function pI(t,e,n=!1){const s=await bi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _I(t,e,n=!1){const{auth:s}=t;if(Ot(s.app))return Promise.reject(dn(s));const i="reauthenticate";try{const r=await bi(t,Gf(s,i,e,t),n);B(r.idToken,s,"internal-error");const o=Ml(r.idToken);B(o,s,"internal-error");const{sub:a}=o;return B(t.uid===a,s,"user-mismatch"),mn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Kt(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gI(t,e,n=!1){if(Ot(t.app))return Promise.reject(dn(t));const s="signIn",i=await Gf(t,s,e),r=await mn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(t,e){return Re(t).setPersistence(e)}function vI(t,e,n,s){return Re(t).onIdTokenChanged(e,n,s)}function yI(t,e,n){return Re(t).beforeAuthStateChanged(e,n)}function bI(t,e,n,s){return Re(t).onAuthStateChanged(e,n,s)}function wI(t){return Re(t).signOut()}const xr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xr,"1"),this.storage.removeItem(xr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=1e3,EI=10;class zf extends Kf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Jw()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,EI):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},II)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zf.type="LOCAL";const CI=zf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf extends Kf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qf.type="SESSION";const Ul=qf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new ho(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await SI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ho.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=$l("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return window}function kI(t){It().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(){return typeof It().WorkerGlobalScope<"u"&&typeof It().importScripts=="function"}async function RI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function NI(){return Yf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf="firebaseLocalStorageDb",AI=1,Dr="firebaseLocalStorage",Qf="fbase_key";class Li{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fo(t,e){return t.transaction([Dr],e?"readwrite":"readonly").objectStore(Dr)}function OI(){const t=indexedDB.deleteDatabase(Jf);return new Li(t).toPromise()}function Sa(){const t=indexedDB.open(Jf,AI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Dr,{keyPath:Qf})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Dr)?e(s):(s.close(),await OI(),e(await Sa()))})})}async function Ou(t,e,n){const s=fo(t,!0).put({[Qf]:e,value:n});return new Li(s).toPromise()}async function xI(t,e){const n=fo(t,!1).get(e),s=await new Li(n).toPromise();return s===void 0?null:s.value}function xu(t,e){const n=fo(t,!0).delete(e);return new Li(n).toPromise()}const DI=800,MI=3;class Xf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sa(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>MI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ho._getInstance(NI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await RI(),!this.activeServiceWorker)return;this.sender=new TI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sa();return await Ou(e,xr,"1"),await xu(e,xr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ou(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>xI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=fo(i,!1).getAll();return new Li(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),DI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xf.type="LOCAL";const LI=Xf;new Di(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(t,e){return e?Lt(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl extends Vf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return rs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return rs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UI(t){return gI(t.auth,new Hl(t),t.bypassAuthState)}function $I(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),_I(n,new Hl(t),t.bypassAuthState)}async function HI(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),pI(n,new Hl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UI;case"linkViaPopup":case"linkViaRedirect":return HI;case"reauthViaPopup":case"reauthViaRedirect":return $I;default:Kt(this.auth,"internal-error")}}resolve(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=new Di(2e3,1e4);class Jn extends Zf{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Jn.currentPopupAction&&Jn.currentPopupAction.cancel(),Jn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){zt(this.filter.length===1,"Popup operations only handle one event");const e=$l();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,BI.get())};e()}}Jn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI="pendingRedirect",nr=new Map;class VI extends Zf{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=nr.get(this.auth._key());if(!e){try{const s=await jI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}nr.set(this.auth._key(),e)}return this.bypassAuthState||nr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jI(t,e){const n=zI(e),s=KI(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function GI(t,e){nr.set(t._key(),e)}function KI(t){return Lt(t._redirectPersistence)}function zI(t){return tr(WI,t.config.apiKey,t.name)}async function qI(t,e,n=!1){if(Ot(t.app))return Promise.reject(dn(t));const s=uo(t),i=FI(s,e),o=await new VI(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=10*60*1e3;class JI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ep(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(wt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Du(e))}saveEventToCache(e){this.cachedEventUids.add(Du(e)),this.lastProcessedEventTime=Date.now()}}function Du(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ep({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ep(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI(t,e={}){return ks(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,eE=/^https?/;async function tE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await XI(t);for(const n of e)try{if(nE(n))return}catch{}Kt(t,"unauthorized-domain")}function nE(t){const e=Ea(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!eE.test(n))return!1;if(ZI.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=new Di(3e4,6e4);function Mu(){const t=It().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function iE(t){return new Promise((e,n)=>{var s,i,r;function o(){Mu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mu(),n(wt(t,"network-request-failed"))},timeout:sE.get()})}if(!((i=(s=It().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=It().gapi)===null||r===void 0)&&r.load)o();else{const a=rI("iframefcb");return It()[a]=()=>{gapi.load?o():n(wt(t,"network-request-failed"))},sI(`${iI()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw sr=null,e})}let sr=null;function rE(t){return sr=sr||iE(t),sr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE=new Di(5e3,15e3),aE="__/auth/iframe",lE="emulator/auth/iframe",cE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dE(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dl(e,lE):`https://${t.config.authDomain}/${aE}`,s={apiKey:e.apiKey,appName:t.name,v:Is},i=uE.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${ws(s).slice(1)}`}async function hE(t){const e=await rE(t),n=It().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:dE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cE,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=wt(t,"network-request-failed"),a=It().setTimeout(()=>{r(o)},oE.get());function l(){It().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pE=500,_E=600,gE="_blank",mE="http://localhost";class Lu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vE(t,e,n,s=pE,i=_E){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},fE),{width:s.toString(),height:i.toString(),top:r,left:o}),c=He().toLowerCase();n&&(a=Mf(c)?gE:n),xf(c)&&(e=e||mE,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[_,w])=>`${f}${_}=${w},`,"");if(Yw(c)&&a!=="_self")return yE(e||"",a),new Lu(null);const d=window.open(e||"",a,u);B(d,t,"popup-blocked");try{d.focus()}catch{}return new Lu(d)}function yE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE="__/auth/handler",wE="emulator/auth/handler",IE=encodeURIComponent("fac");async function Fu(t,e,n,s,i,r){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Is,eventId:i};if(e instanceof jf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fr(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Mi){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${IE}=${encodeURIComponent(l)}`:"";return`${EE(t)}?${ws(a).slice(1)}${c}`}function EE({config:t}){return t.emulator?Dl(t,wE):`https://${t.authDomain}/${bE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo="webStorageSupport";class CE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ul,this._completeRedirectFn=qI,this._overrideRedirectResult=GI}async _openPopup(e,n,s,i){var r;zt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Fu(e,n,s,Ea(),i);return vE(e,o,$l())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Fu(e,n,s,Ea(),i);return kI(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(zt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await hE(e),s=new JI(e);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wo,{type:Wo},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Wo];o!==void 0&&n(!!o),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hf()||Df()||Ll()}}const SE=CE;var Uu="@firebase/auth",$u="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function RE(t){ds(new Mn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bf(t)},c=new tI(s,i,r,l);return aI(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ds(new Mn("auth-internal",e=>{const n=uo(e.getProvider("auth").getImmediate());return(s=>new TE(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(Uu,$u,kE(t)),ln(Uu,$u,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=5*60,NE=sh("authIdTokenMaxAge")||PE;let Hu=null;const AE=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>NE)return;const i=n==null?void 0:n.token;Hu!==i&&(Hu=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function OE(t=ch()){const e=Qa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=oI(t,{popupRedirectResolver:SE,persistence:[LI,CI,Ul]}),s=sh("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=AE(r.toString());yI(n,o,()=>o(n.currentUser)),vI(n,a=>o(a))}}const i=th("auth");return i&&lI(n,`http://${i}`),n}function xE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}nI({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=wt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",xE().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});RE("Browser");var DE="firebase",ME="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ln(DE,ME,"app");const LE={apiKey:"AIzaSyDzJsJYfTcWaeC5f43EXG-brzAaY7_BBk8",authDomain:"seep-7fe1d.firebaseapp.com",databaseURL:"https://seep-7fe1d-default-rtdb.firebaseio.com",projectId:"seep-7fe1d",storageBucket:"seep-7fe1d.firebasestorage.app",messagingSenderId:"681624379623",appId:"1:681624379623:web:d9e10ac7318f96e98d0242"},tp=lh(LE),qe=Rw(tp),po=OE(tp);mI(po,Ul);const FE=["S","H","D","C"],UE={S:"♠",H:"♥",D:"♦",C:"♣"},Bu={S:0,H:1,D:2,C:3},$E={1:"A",11:"J",12:"Q",13:"K"},Mr=100,J=t=>$E[t]||String(t),np=t=>UE[t],sp=t=>t==="H"||t==="D";function Lr(t){return t.suit==="S"?t.rank:t.suit==="D"&&t.rank===10?6:t.rank===1?1:0}function os(t){return t.type==="house"?t.value:t.card.rank}function Bl(t){return t.cards.reduce((e,n)=>e+n.rank,0)>=2*t.value}function Wl(t){return t.type==="house"?t.cards:[t.card]}function HE(t,e){const n=new Set([0]);for(const s of t){for(const i of[...n])n.add(i+s);if(n.has(e))return!0}return n.has(e)}function BE(t,e){function n(s,i,r){return i===0?r:s>=t.length||i<0?null:n(s+1,i-t[s],[...r,s])??n(s+1,i,r)}return n(0,e,[])}function Vl(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function jl(){const t=[];for(const e of FE)for(let n=1;n<=13;n++)t.push({suit:e,rank:n});return t}function vs(t){t.sort((e,n)=>e.rank-n.rank||Bu[e.suit]-Bu[n.suit])}function Gl(){return{deck:Vl(jl()),hands:[[],[],[],[]],floor:[],captured:[[],[]],scores:[0,0],seepBonus:[0,0],currentPlayer:0,bidder:0,bidValue:null,phase:"bid",roundNum:1,isFirstTurn:!0,handsDealt:!1,lastCaptureTeam:null,playerNames:null}}function Ta(t,e){let n=!0;for(;n;){n=!1;const s=t.map((r,o)=>({it:r,i:o})).filter(r=>r.it.type==="card");if(!s.length)break;const i=BE(s.map(r=>r.it.card.rank),e.value);if(i!==null){const r=i.map(o=>s[o].i);e.cards.push(...r.map(o=>t[o].card)),r.sort((o,a)=>a-o).forEach(o=>t.splice(o,1)),n=!0}}}function WE(t,e){if(e.selHandIdx===null)return null;const n=t.currentPlayer,s=t.hands[n],i=s[e.selHandIdx],r=e.selFloorIdxs.map(o=>t.floor[o]);return{floor:t.floor,floorVals:t.floor.map(os),hand:s,handCard:i,handIdx:e.selHandIdx,selItems:r,selSum:r.reduce((o,a)=>o+os(a),0),selLoose:r.filter(o=>o.type==="card").map(o=>o.card),selHouses:r.filter(o=>o.type==="house"),remainder:s.filter((o,a)=>a!==e.selHandIdx),team:n%2,player:n,isFirstTurn:t.isFirstTurn,bidder:t.bidder,bidValue:t.bidValue,selFloorIdxs:e.selFloorIdxs}}function VE(t){if(t.floor.length===0)return{valid:!1,reason:"Floor is empty"};const e=t.handCard.rank,n=t.floor.filter(i=>i.type==="house"),s=t.floor.filter(i=>i.type==="card");for(const i of n)if(i.value!==e)return{valid:!1,reason:`House of ${J(i.value)} cannot be swept by ${J(e)}`};if(s.length>0){const i=s.reduce((r,o)=>r+o.card.rank,0);if(i!==e)return{valid:!1,reason:`Loose cards sum to ${i}, not ${e} — cannot seep`}}return{valid:!0,reason:"Seep! Sweep the entire floor",meta:{}}}function jE(t){return t.selItems.length===0?{valid:!1,reason:"No floor items selected"}:t.isFirstTurn&&t.player===t.bidder&&t.handCard.rank!==t.bidValue?{valid:!1,reason:`First turn: can only pick with the bid card (${J(t.bidValue)})`}:t.handCard.rank!==t.selSum?{valid:!1,reason:`Selected sum ${t.selSum} ≠ ${J(t.handCard.rank)}`}:{valid:!0,reason:`Pick ${t.selItems.length} floor item(s)`,meta:{}}}function GE(t,e){return t.remainder.some(n=>n.rank===e)||t.floor.some(n=>n.type==="house"&&n.team===t.team&&n.value===e)}function KE(t){const e=t.selLoose.reduce((o,a)=>o+a.rank,0),n=t.selHouses.reduce((o,a)=>o+a.value,0);if(t.selHouses.length>0){const o=t.handCard.rank+e+n;if(o>13)return{valid:!1,reason:`Sum ${o} exceeds King (13)`};const a=t.floor.find(c=>c.type==="house"&&c.value===o&&!t.selHouses.includes(c));return a?(t.team===a.team?t.player===a.owner:a.sharedBy===void 0||t.player===a.sharedBy)&&t.handCard.rank===a.value&&!t.remainder.some(c=>c.rank===a.value)?{valid:!1,reason:`Must keep a ${J(a.value)} in hand to capture this house`}:{valid:!0,reason:`Merge into house of ${J(o)}`,meta:{houseVal:o,merge:!0}}:{valid:!1,reason:`No house of ${J(o)} on the floor to merge into`}}if(t.selLoose.length===0)return{valid:!1,reason:"Select floor card(s) to combine with your hand card"};const s=t.handCard.rank===e,i=s?t.handCard.rank:t.handCard.rank+e;if(i<9)return{valid:!1,reason:`House value ${i} is below 9`};if(!s&&i>13)return{valid:!1,reason:`Sum ${i} exceeds King (13)`};if(t.isFirstTurn&&t.player===t.bidder&&t.handCard.rank===t.bidValue&&!t.remainder.some(o=>o.rank===t.bidValue))return{valid:!1,reason:`First turn: need a second ${J(t.bidValue)} to build with it`};const r=t.floor.find(o=>o.type==="house"&&o.value===i);return r?r.shared?{valid:!1,reason:`House of ${J(i)} is already shared and locked`}:{valid:!0,reason:`Contribute to house of ${J(i)} (will become shared)`,meta:{houseVal:i}}:t.floor.filter(o=>o.type==="house").length>=2?{valid:!1,reason:"Maximum of 2 houses are already on the floor"}:GE(t,i)?{valid:!0,reason:`Build house of ${J(i)}`,meta:{houseVal:i}}:{valid:!1,reason:`You need a key card (${J(i)}) in hand to pick up this house later`}}function zE(t){if(t.selHouses.length!==1)return{valid:!1,reason:"Select exactly one house to upgrade"};const e=t.selHouses[0];if(e.shared)return{valid:!1,reason:"Cannot upgrade a shared house"};if(e.pucca)return{valid:!1,reason:"Cannot upgrade a Pucca house"};if(Bl(e))return{valid:!1,reason:"House is already doubled — only cementing applies"};if(e.owner===t.player)return{valid:!1,reason:"You built this house — another player must modify it first"};const n=e.value+t.handCard.rank+t.selLoose.reduce((s,i)=>s+i.rank,0);return n<=e.value?{valid:!1,reason:"New value must exceed current"}:n>13?{valid:!1,reason:`New value ${n} exceeds King (13)`}:t.remainder.some(s=>s.rank===n)?{valid:!0,reason:`Upgrade house to ${J(n)}`,meta:{houseVal:n}}:{valid:!1,reason:`Need key card (${J(n)}) to claim the upgraded house`}}function qE(t){if(t.selHouses.length!==1)return{valid:!1,reason:"Select a house to reinforce"};const e=t.selHouses[0],n=t.handCard.rank+t.selLoose.reduce((r,o)=>r+o.rank,0);if(n!==e.value)return{valid:!1,reason:`Cards must total ${J(e.value)} to reinforce — yours total ${n}`};let s;return t.team===e.team?s=t.player===e.owner:s=e.sharedBy===void 0||t.player===e.sharedBy,s&&t.handCard.rank===e.value&&!t.remainder.some(r=>r.rank===e.value)?{valid:!1,reason:`Must keep a ${J(e.value)} in hand to capture this house`}:{valid:!0,reason:!e.shared&&e.team!==t.team?`Share house of ${J(e.value)}`:`Reinforce house of ${J(e.value)}`,meta:{houseVal:e.value}}}function YE(t){return t.isFirstTurn&&t.player===t.bidder&&t.handCard.rank!==t.bidValue?{valid:!1,reason:`First turn: can only throw the bid card (${J(t.bidValue)})`}:HE(t.floor.map(os),t.handCard.rank)?{valid:!1,reason:`${J(t.handCard.rank)} can capture a floor item — must capture first`}:{valid:!0,reason:"Throw card to floor",meta:{}}}function JE(t){const e=VE(t);if(e.valid){const n={valid:!1,reason:"Seep is mandatory"};return{seep:e,pick:n,build:n,break:n,add:n,throw:n}}return{seep:{valid:!1},pick:jE(t),build:KE(t),break:zE(t),add:qE(t),throw:YE(t)}}function QE(t,e){if(t.seep.valid)return`⚡ Seep — sweep entire floor (${e.floor.length} items)!`;if(t.pick.valid)return`Pick: take ${e.selItems.length} floor item(s)`;if(t.build.valid){const i=t.build.meta.houseVal;return t.build.meta.merge?`Merge selected house(s) into House of ${J(i)} (${i})`:`Build House of ${J(i)} (${i})`}if(t.break.valid)return`Upgrade House → ${J(t.break.meta.houseVal)}`;if(t.add.valid)return`Reinforce house of ${J(t.add.meta.houseVal)} → Pucca ★`;const n=e.handCard,s=[];if(e.floor.forEach((i,r)=>{os(i)===n.rank&&!e.selFloorIdxs.includes(r)&&s.push(`Click ${J(os(i))} on the floor to Pick it up`)}),!s.length){const i=e.floor.map((r,o)=>({v:os(r),i:o})).filter(r=>r.v<n.rank);for(let r=0;r<i.length&&!s.length;r++)for(let o=r+1;o<i.length;o++)if(i[r].v+i[o].v===n.rank){s.push(`Select ${J(i[r].v)} + ${J(i[o].v)} on floor to Pick`);break}}return t.throw.valid?s.length?s[0]:"Select floor cards to act, or Throw":s.length?s[0]:`${J(n.rank)} must capture — select matching floor cards`}function ip(t,e){const n=WE(t,e);if(!n)return{pick:!1,seep:!1,build:!1,buildVal:null,buildMerge:!1,add:!1,throw:!1,msg:"Select a card from your hand."};const s=JE(n),i=s.build.valid||s.break.valid,r=i?s.build.valid?s.build.meta:s.break.meta:null;return{pick:s.pick.valid,seep:s.seep.valid,build:i,buildVal:r?r.houseVal:null,buildMerge:!!(r&&r.merge),add:s.add.valid,throw:s.throw.valid,msg:QE(s,n)}}const Vo=bn(Gl()),_t=bn({selHandIdx:null,selFloorIdxs:[]}),qi=bn({visible:!1,message:"",onDone:null}),Hs=bn({visible:!1,house:null});function Ze(){const t=K(()=>ip(Vo,_t));function e(l){var c;return((c=Vo.playerNames)==null?void 0:c[l])||`Player ${l+1}`}function n(l){_t.selHandIdx=_t.selHandIdx===l?null:l,_t.selFloorIdxs=[]}function s(l){const c=_t.selFloorIdxs.indexOf(l);c===-1?_t.selFloorIdxs.push(l):_t.selFloorIdxs.splice(c,1)}function i(){_t.selHandIdx=null,_t.selFloorIdxs=[]}function r(l,c,u){qi.message=`+${c} points for Team ${l+1}!`,qi.visible=!0,qi.onDone=u}function o(l){Hs.house=l,Hs.visible=!0}function a(){Hs.visible=!1,Hs.house=null}return{gameState:Vo,ui:_t,actions:t,seepOverlay:qi,housePeek:Hs,playerName:e,selectHandCard:n,toggleFloor:s,clearSel:i,showSeepOverlay:r,openHousePeek:o,closeHousePeek:a}}const{gameState:b,ui:Ae,clearSel:Fi,showSeepOverlay:XE}=Ze(),{session:Ut}=Yt();let Rs=()=>Promise.resolve();function ZE(t){Rs=t}function eC(){Object.assign(b,Gl()),b.hands[b.bidder]=b.deck.splice(0,4),vs(b.hands[b.bidder]),b.phase="bid"}function jo(){b.deck=Vl(jl()),b.hands[b.bidder]=b.deck.splice(0,4),vs(b.hands[b.bidder]),Ut.currentGameId&&Rs()}function tC(){b.hands[b.bidder].push(...b.deck.splice(0,8)),vs(b.hands[b.bidder]);for(let t=0;t<4;t++)t!==b.bidder&&(b.hands[t]=b.deck.splice(0,12),vs(b.hands[t]));b.handsDealt=!0}function nC(t){b.bidValue=t,b.floor=b.deck.splice(0,4).map(e=>({type:"card",card:e})),b.phase="play",Ut.currentGameId&&Rs()}function Bs(t){if(Ut.localSeat!==null&&Ut.localSeat!==b.currentPlayer)return;const e=ip(b,Ae);if(!(t==="pick"&&!e.pick)&&!(t==="seep"&&!e.seep)&&!(t==="build"&&!e.build)&&!(t==="add"&&!e.add)&&!(t==="throw"&&!e.throw))switch(t){case"pick":Wu(!1);break;case"seep":Ae.selFloorIdxs=b.floor.map((n,s)=>s),Wu(!0);break;case"build":sC(e.buildVal);break;case"add":iC();break;case"throw":rC();break}}function Wu(t){const e=b.currentPlayer,n=e%2,s=b.hands[e][Ae.selHandIdx],i=[...Ae.selFloorIdxs.map(a=>b.floor[a]).flatMap(Wl),s];b.hands[e].splice(Ae.selHandIdx,1),[...Ae.selFloorIdxs].sort((a,l)=>l-a).forEach(a=>b.floor.splice(a,1)),b.captured[n].push(...i),b.lastCaptureTeam=n;const r=b.isFirstTurn;if(b.isFirstTurn=!1,Fi(),(t||b.floor.length===0)&&!rp()){const a=r?25:50;b.seepBonus[n]+=a,XE(n,a,wi);return}wi()}function sC(t){const e=b.currentPlayer,n=e%2,s=b.hands[e][Ae.selHandIdx],r=[...Ae.selFloorIdxs.map(a=>b.floor[a]).flatMap(Wl),s];b.hands[e].splice(Ae.selHandIdx,1),[...Ae.selFloorIdxs].sort((a,l)=>l-a).forEach(a=>b.floor.splice(a,1));const o=b.floor.find(a=>a.type==="house"&&a.value===t);if(o)o.cards.push(...r),o.team!==n&&(o.shared||(o.shared=!0,o.sharedBy=e),o.pucca=!0),Ta(b.floor,o);else{const a={type:"house",cards:r,value:t,pucca:!1,owner:e,team:n,shared:!1,sharedBy:void 0};b.floor.push(a),Ta(b.floor,a)}b.isFirstTurn=!1,Fi(),wi()}function iC(){const t=b.currentPlayer,e=b.hands[t][Ae.selHandIdx],n=Ae.selFloorIdxs.find(o=>b.floor[o].type==="house"),s=b.floor[n],i=Ae.selFloorIdxs.filter(o=>b.floor[o].type==="card");s.cards.push(e,...i.map(o=>b.floor[o].card));const r=t%2;s.team!==r&&(s.shared||(s.shared=!0,s.sharedBy=t)),s.pucca=!0,b.hands[t].splice(Ae.selHandIdx,1),i.sort((o,a)=>a-o).forEach(o=>b.floor.splice(o,1)),Ta(b.floor,s),b.isFirstTurn=!1,Fi(),wi()}function rC(){const t=b.currentPlayer,e=b.hands[t][Ae.selHandIdx];b.floor.push({type:"card",card:e}),b.hands[t].splice(Ae.selHandIdx,1),b.isFirstTurn=!1,Fi(),wi()}function rp(){return b.hands.every(t=>t.length===0)}function wi(){if(b.handsDealt||tC(),rp()){oC();return}b.currentPlayer=(b.currentPlayer+1)%4;let t=0;for(;b.hands[b.currentPlayer].length===0&&t++<4;)b.currentPlayer=(b.currentPlayer+1)%4;Ut.currentGameId&&Rs()}function oC(){b.floor.length>0&&b.lastCaptureTeam!==null&&(b.captured[b.lastCaptureTeam].push(...b.floor.flatMap(Wl)),b.floor=[]);const t=b.captured[0].reduce((n,s)=>n+Lr(s),0)+b.seepBonus[0],e=b.captured[1].reduce((n,s)=>n+Lr(s),0)+b.seepBonus[1];b.scores[0]+=t,b.scores[1]+=e,b.phase=b.scores[0]>=Mr||b.scores[1]>=Mr?"gameover":"roundend",b._roundS0=t,b._roundS1=e,Ut.currentGameId&&Rs()}function aC(){Ut.currentGameId&&Ut.localSeat!==b.bidder||(b.roundNum++,Object.assign(b,{deck:Vl(jl()),hands:[[],[],[],[]],floor:[],captured:[[],[]],seepBonus:[0,0],bidder:(b.bidder+1)%4,bidValue:null,phase:"bid",isFirstTurn:!0,handsDealt:!1,lastCaptureTeam:null}),Fi(),b.hands[b.bidder]=b.deck.splice(0,4),vs(b.hands[b.bidder]),Ut.currentGameId&&Rs())}const{session:x}=Yt(),{gameState:Kl,ui:Vu}=Ze();let An=null,ii=null;const op=Pn(null);function ap(){An&&(wa(An),An=null),ii&&(wa(ii),ii=null)}async function lC(){if(!x.currentGameId)return;const t=JSON.parse(JSON.stringify(Kl));t.selHandIdx=null,t.selFloorIdxs=[],await xi(ze(qe,`games/${x.currentGameId}/gameStateJson`),JSON.stringify(t))}ZE(lC);async function cC(){const t=Math.floor(1e5+Math.random()*9e5).toString();x.localSeat=0,x.currentGameId=t,sessionStorage.setItem("seep_seat","0"),sessionStorage.setItem("seep_gameId",t);const e={0:x.localUid,1:null,2:null,3:null};await xi(ze(qe,`games/${t}`),{status:"lobby",hostUid:x.localUid,createdAt:Date.now(),seatMap:e,names:{[x.localUid]:x.localName},gameStateJson:null}),zl(t),x.screen="room"}async function uC(t){const e=await ao(ze(qe,`games/${t}`));if(!e.exists())return{error:"Room not found. Check the code and try again."};const n=e.val();if(n.status!=="lobby")return{error:"This game has already started."};if(n.seatMap){const s=Object.values(n.seatMap).indexOf(x.localUid);s!==-1&&(x.localSeat=s,sessionStorage.setItem("seep_seat",String(s)))}return x.currentGameId=t,sessionStorage.setItem("seep_gameId",t),await xi(ze(qe,`games/${t}/names/${x.localUid}`),x.localName),zl(t),x.screen="room",{}}function zl(t){ap(),An=ze(qe,`games/${t}`),Al(An,e=>{if(!e.exists())return;const n=e.val();if(n.status==="bid"||n.status==="playing"){if(wa(An),An=null,x.localSeat===null&&n.seatMap){const s=Object.values(n.seatMap).indexOf(x.localUid);s!==-1&&(x.localSeat=s,sessionStorage.setItem("seep_seat",String(s)))}lp(t);return}op.value=n})}async function dC(t){const e=ze(qe,`games/${x.currentGameId}/seatMap/${t}`),{committed:n}=await Ow(e,s=>{if(s===null)return x.localUid});n?(x.localSeat=t,sessionStorage.setItem("seep_seat",String(t)),await xi(ze(qe,`games/${x.currentGameId}/names/${x.localUid}`),x.localName),If(e).set(null)):alert("That seat was just taken. Please choose another.")}async function ju(){const e=(await ao(ze(qe,`games/${x.currentGameId}`))).val(),n=Object.values(e.seatMap||{}).filter(Boolean).length;if(!e||n<4){alert("All 4 seats must be filled");return}const s=Gl();s.hands[s.bidder]=s.deck.splice(0,4),vs(s.hands[s.bidder]),s.playerNames=[0,1,2,3].map(i=>{const r=e.seatMap[i];return r&&e.names&&e.names[r]||`Player ${i+1}`}),Object.assign(Kl,s),await yw(ze(qe,`games/${x.currentGameId}`),{status:"bid",gameStateJson:JSON.stringify(s)})}async function hC(){await navigator.clipboard.writeText(x.currentGameId)}async function lp(t){if(x.localSeat===null){const e=sessionStorage.getItem("seep_seat");if(e!==null)x.localSeat=parseInt(e,10);else{const n=await ao(ze(qe,`games/${t}/seatMap`));if(n.exists()){const s=n.val(),i=Object.values(s).indexOf(x.localUid);i!==-1&&(x.localSeat=i,sessionStorage.setItem("seep_seat",String(i)))}}}ii=ze(qe,`games/${t}/gameStateJson`),Al(ii,e=>{if(!e.exists())return;const n=JSON.parse(e.val());Object.assign(Kl,n),Vu.selHandIdx=null,Vu.selFloorIdxs=[],x.screen="game"})}function fC(){bI(po,async t=>{if(!t||(x.localUid=t.uid,x.localName=sessionStorage.getItem("seep_name")||"",!x.localName))return;const e=sessionStorage.getItem("seep_gameId");if(!e)return;x.currentGameId=e;const n=await ao(ze(qe,`games/${e}`));if(!n.exists()){x.currentGameId=null;return}const s=n.val();if(s.seatMap){const i=Object.values(s.seatMap).indexOf(x.localUid);i!==-1&&(x.localSeat=i,sessionStorage.setItem("seep_seat",String(i)))}s.status==="lobby"?(zl(e),x.screen="room"):lp(e)})}async function Gu(t){if(x.localUid)return!0;const e=t.trim();if(!e)return!1;const n=await fI(po);return x.localUid=n.user.uid,x.localName=e,sessionStorage.setItem("seep_name",e),!0}async function pC(){await vn(),await wI(po),x.localUid=null,x.localName="",x.currentGameId=null,x.localSeat=null,sessionStorage.removeItem("seep_gameId"),sessionStorage.removeItem("seep_seat"),sessionStorage.removeItem("seep_name"),x.screen="home"}async function vn(){if(!x.currentGameId){x.screen="home";return}if(x.localSeat!==null){const t=ze(qe,`games/${x.currentGameId}/seatMap/${x.localSeat}`);If(t).cancel(),await xi(t,null)}ap(),sessionStorage.removeItem("seep_gameId"),sessionStorage.removeItem("seep_seat"),x.currentGameId=null,x.localSeat=null,x.screen="home"}const _C={class:"menu-account"},gC={id:"menu-account-name"},mC={id:"menu-account-detail"},vC={__name:"GlobalMenu",setup(t){const{session:e}=Yt(),n=Pn(!1),s=["Player 1 (T1)","Player 2 (T2)","Player 3 (T1)","Player 4 (T2)"],i=K(()=>{let a="";return e.currentGameId&&(a+=`Room: ${e.currentGameId}`),e.localSeat!==null&&(a+=`  ·  ${s[e.localSeat]}`),a});async function r(){n.value=!1,await pC()}function o(){n.value=!1}return Ba(()=>document.addEventListener("click",o)),Wa(()=>document.removeEventListener("click",o)),(a,l)=>(F(),V("div",{id:"global-menu-wrap",class:he({visible:S(e).screen!=="home"})},[g("button",{id:"global-menu-btn",onClick:l[0]||(l[0]=ui(c=>n.value=!n.value,["stop"]))},"☰"),g("div",{id:"global-menu-dropdown",class:he({open:n.value}),onClick:l[1]||(l[1]=ui(()=>{},["stop"]))},[g("div",_C,[g("div",gC,O(S(e).localName||"—"),1),g("div",mC,O(i.value),1)]),g("button",{class:"menu-item",onClick:r},"Sign Out")],2)],2))}},yC={id:"seep-msg"},bC={__name:"SeepOverlay",setup(t){const{seepOverlay:e}=Ze();return zs(()=>e.visible,n=>{n&&setTimeout(()=>{e.visible=!1,e.onDone&&(e.onDone(),e.onDone=null)},1800)}),(n,s)=>(F(),V("div",{id:"seep-overlay",class:he({show:S(e).visible})},[g("div",yC,O(S(e).message),1)],2))}},wC={class:"c-tl"},IC={class:"rank"},EC={class:"suit"},CC={class:"c-br"},_o={__name:"CardEl",props:{card:{type:Object,required:!0},clickable:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},faceDown:{type:Boolean,default:!1}},emits:["click"],setup(t){const e=t,n=K(()=>J(e.card.rank)),s=K(()=>np(e.card.suit)),i=K(()=>sp(e.card.suit));return(r,o)=>(F(),V("div",{class:he(["card",{red:i.value,selected:t.selected,"face-down":t.faceDown}]),style:ys(t.clickable?{}:{cursor:"default"}),onClick:o[0]||(o[0]=a=>t.clickable?r.$emit("click"):null)},[t.faceDown?Vt("",!0):(F(),V(fe,{key:0},[g("div",wC,[nt(O(n.value),1),o[1]||(o[1]=g("br",null,null,-1)),nt(O(s.value),1)]),g("div",IC,O(n.value),1),g("div",EC,O(s.value),1),g("div",CC,[nt(O(n.value),1),o[2]||(o[2]=g("br",null,null,-1)),nt(O(s.value),1)])],64))],6))}},SC={class:"peek-inner"},TC={class:"peek-header"},kC={id:"peek-title"},RC={id:"peek-owners",class:"peek-owners"},PC={id:"peek-cards",class:"peek-cards"},NC={__name:"HousePeekModal",setup(t){const{housePeek:e,closeHousePeek:n,playerName:s}=Ze(),i=K(()=>e.house),r=K(()=>{if(!i.value)return"";const o=i.value,a=o.shared?" ⚑ Shared":o.pucca?" ★ Pucca":Bl(o)?" ◆ Doubled":" (building)";return`House of ${J(o.value)}${a} — ${o.cards.length} cards`});return(o,a)=>{var l;return F(),V("div",{id:"house-peek",class:he({show:S(e).visible}),onClick:a[1]||(a[1]=ui((...c)=>S(n)&&S(n)(...c),["self"]))},[g("div",SC,[g("div",TC,[g("span",kC,O(r.value),1),g("button",{class:"peek-close",onClick:a[0]||(a[0]=(...c)=>S(n)&&S(n)(...c))},"✕")]),g("div",RC,[i.value?(F(),V(fe,{key:0},[g("span",{class:he(["peek-owner",`t${i.value.team}`])}," Built by "+O(S(s)(i.value.owner))+" (Team "+O(i.value.team+1)+") ",3),i.value.shared&&i.value.sharedBy!==void 0?(F(),V(fe,{key:0},[a[2]||(a[2]=g("span",{class:"peek-owner-sep"}," · ",-1)),g("span",{class:he(["peek-owner",`t${i.value.team===0?1:0}`])}," Shared by "+O(S(s)(i.value.sharedBy))+" (Team "+O(i.value.team===0?2:1)+") ",3)],64)):Vt("",!0)],64)):Vt("",!0)]),g("div",PC,[(F(!0),V(fe,null,Wt(((l=i.value)==null?void 0:l.cards)??[],(c,u)=>(F(),ls(_o,{key:u,card:c,clickable:!1},null,8,["card"]))),128))])])],2)}}},AC={id:"home-screen",class:"screen"},OC={class:"home-card"},xC={key:0,class:"home-welcome"},DC={class:"home-actions"},MC={key:2,class:"home-join-expand"},LC={class:"home-error"},FC={__name:"HomeScreen",setup(t){const{session:e}=Yt(),n=Pn(""),s=Pn(""),i=Pn(!1),r=Pn("");async function o(){r.value="";const l=e.localName||n.value.trim();if(!l){r.value="Please enter your name first.";return}try{await Gu(l),await cC()}catch(c){r.value="Sign-in failed: "+c.message}}async function a(){r.value="";const l=e.localName||n.value.trim();if(!l){r.value="Please enter your name first.";return}const c=s.value.trim();if(c.length!==6){r.value="Enter a valid 6-digit room code.";return}try{await Gu(l);const u=await uC(c);u!=null&&u.error&&(r.value=u.error)}catch(u){r.value="Join failed: "+u.message}}return(l,c)=>(F(),V("div",AC,[c[3]||(c[3]=g("div",{class:"home-logo"},"♠ SEEP ♠",-1)),c[4]||(c[4]=g("p",{class:"home-sub"},"Classic 4-player card game from Punjab",-1)),g("div",OC,[S(e).localName&&S(e).localUid?(F(),V("div",xC," Welcome back, "+O(S(e).localName)+"! ",1)):Zt((F(),V("input",{key:1,"onUpdate:modelValue":c[0]||(c[0]=u=>n.value=u),class:"home-input",type:"text",placeholder:"Enter your name to play",maxlength:"20",autocomplete:"off",onKeydown:Oc(o,["enter"])},null,544)),[[Ac,n.value]]),g("div",DC,[g("button",{class:"btn btn-primary",onClick:o},"Start Game"),g("button",{class:"btn",style:{background:"#1e5c32",color:"#fff",border:"1px solid #3a8a4e"},onClick:c[1]||(c[1]=u=>i.value=!i.value)}," Join Room ")]),i.value?(F(),V("div",MC,[Zt(g("input",{"onUpdate:modelValue":c[2]||(c[2]=u=>s.value=u),type:"text",placeholder:"6-digit code",maxlength:"6",autocomplete:"off",onKeydown:Oc(a,["enter"])},null,544),[[Ac,s.value]]),g("button",{class:"btn btn-primary",onClick:a},"Join →")])):Vt("",!0),g("div",LC,O(r.value),1)])]))}},UC={id:"room-screen",class:"screen"},$C={class:"room-code-box"},HC={class:"seat-grid"},BC={class:"seat-name"},WC={class:"seat-label"},VC={class:"seat-label"},jC=["onClick"],GC={class:"seat-label"},KC={style:{display:"flex",gap:"12px","flex-wrap":"wrap","justify-content":"center"}},zC={__name:"RoomScreen",setup(t){const{session:e}=Yt(),n=Pn(""),s=["Player 1 (T1)","Player 2 (T2)","Player 3 (T1)","Player 4 (T2)"],i=op,r=K(()=>{var v;return((v=i.value)==null?void 0:v.seatMap)||{}}),o=K(()=>{var v;return((v=i.value)==null?void 0:v.names)||{}}),a=K(()=>{var v;return((v=i.value)==null?void 0:v.hostUid)===e.localUid}),l=K(()=>Object.values(r.value).filter(v=>v!==null).length),c=K(()=>l.value===4),u=K(()=>Object.values(r.value).includes(e.localUid));function d(v){return r.value[v]||null}function f(v){const A=d(v);return A?o.value[A]||"Player":""}const _=K(()=>a.value?c.value?"All seats filled! Start the game.":`Waiting for players… (${l.value}/4)`:"Waiting for host to start…");async function w(){await hC(),n.value="Copied!",setTimeout(()=>{n.value=""},1200)}return(v,A)=>(F(),V("div",UC,[A[6]||(A[6]=g("h2",null,"Game Room",-1)),g("div",$C,[A[2]||(A[2]=g("div",{class:"label"},"Share this code",-1)),g("div",{class:"room-code",title:"Click to copy",onClick:w},O(n.value||S(e).currentGameId||"------"),1)]),g("div",HC,[A[4]||(A[4]=g("div",{class:"seat-header t1"},"Team 1 (Blue)",-1)),A[5]||(A[5]=g("div",{class:"seat-header t2"},"Team 2 (Red)",-1)),(F(),V(fe,null,Wt([0,1,2,3],$=>g("div",{key:$,class:he(["seat-slot",{taken:!!d($),mine:d($)===S(e).localUid}])},[d($)?(F(),V(fe,{key:0},[g("div",BC,O(f($)),1),g("div",WC,O(s[$]),1)],64)):u.value?(F(),V(fe,{key:2},[g("div",GC,O(s[$]),1),A[3]||(A[3]=g("div",{style:{color:"#555","font-size":".85rem"}},"Empty",-1))],64)):(F(),V(fe,{key:1},[g("div",VC,O(s[$]),1),g("button",{onClick:j=>S(dC)($)},"Take seat",8,jC)],64))],2)),64))]),g("div",null,O(_.value),1),g("div",KC,[a.value&&c.value?(F(),V("button",{key:0,class:"btn btn-primary",style:{padding:"12px 36px","font-size":"1rem"},onClick:A[0]||(A[0]=(...$)=>S(ju)&&S(ju)(...$))},"Start Game ▶")):Vt("",!0),g("button",{class:"btn btn-danger",style:{padding:"12px 28px","font-size":"1rem"},onClick:A[1]||(A[1]=(...$)=>S(vn)&&S(vn)(...$))}," Leave Room ")])]))}},qC={id:"bid-screen",class:"screen"},YC={class:"bid-hand"},JC={key:0,style:{color:"#ffa040","font-size":".8rem"}},QC={class:"bid-btns"},XC=["onClick"],ZC={__name:"BidScreen",setup(t){const{gameState:e,playerName:n}=Ze(),{session:s}=Yt(),i=K(()=>s.localSeat===null||s.localSeat===e.bidder),r=K(()=>i.value?e.hands[e.bidder]??[]:[]),o=K(()=>r.value.length?Math.max(...r.value.map(_=>_.rank)):0),a=K(()=>o.value>=9),l=K(()=>r.value.some(_=>_.rank===9&&_.suit==="S")),c=K(()=>!a.value||o.value===9&&!l.value),u=K(()=>a.value?[...new Set(r.value.filter(_=>_.rank>=9).map(_=>_.rank))].sort((_,w)=>_-w):[]),d=K(()=>i.value?a.value?`${n(e.bidder)} – choose your bid (≥ 9). You need a matching key card in your hand.`:"No card ≥ 9 — redealing…":`Waiting for ${n(e.bidder)} to bid…`),f=K(()=>i.value&&c.value&&a.value?"You may pass (highest card is a non-♠ 9).":"");return zs(a,_=>{!_&&i.value&&setTimeout(jo,1200)},{immediate:!0}),(_,w)=>(F(),V("div",qC,[w[2]||(w[2]=g("h2",null,"♠ Bid Phase",-1)),g("p",null,O(d.value),1),g("div",YC,[(F(!0),V(fe,null,Wt(r.value,(v,A)=>(F(),ls(_o,{key:A,card:v,clickable:!1},null,8,["card"]))),128))]),f.value?(F(),V("p",JC,O(f.value),1)):Vt("",!0),g("div",QC,[(F(!0),V(fe,null,Wt(u.value,v=>(F(),V("button",{key:v,class:"bid-btn",onClick:A=>S(nC)(v)},"Bid "+O(S(J)(v))+" ("+O(v)+")",9,XC))),128)),c.value?(F(),V("button",{key:0,class:"bid-btn pass",onClick:w[0]||(w[0]=(...v)=>S(jo)&&S(jo)(...v))},"Pass (Redeal)")):Vt("",!0)]),g("button",{class:"btn btn-danger",style:{"margin-top":"8px",padding:"8px 24px","font-size":".9rem"},onClick:w[1]||(w[1]=(...v)=>S(vn)&&S(vn)(...v))}," Exit Game ")]))}},eS={key:0,class:"hidden-pile"},tS={class:"pile-stack"},nS={class:"pile-label"},Yi={__name:"PlayerHand",props:{count:{type:Number,required:!0}},setup(t){const e=t,n=K(()=>Math.min(3,e.count));return(s,i)=>t.count>0?(F(),V("div",eS,[g("div",tS,[(F(!0),V(fe,null,Wt(n.value,r=>(F(),V("div",{key:r,class:"card face-down",style:ys(`position:absolute;top:${(r-1)*4}px;left:${(r-1)*4}px;width:54px;height:76px;`)},null,4))),128))]),g("div",nS,O(t.count)+" cards",1)])):Vt("",!0)}},sS={class:"h-val"},iS={class:"h-count"},rS=["title"],oS={class:"pmc-rank"},aS={class:"pmc-suit"},lS={__name:"FloorHouse",props:{house:{type:Object,required:!0},selected:{type:Boolean,default:!1}},emits:["click","peek"],setup(t){const e=t,n=K(()=>Bl(e.house)),s=K(()=>J(e.house.value)),i=c=>sp(c.suit),r=K(()=>e.house.shared?"shared":e.house.pucca?"pucca":"doubled"),o=K(()=>e.house.shared?"shared":`t${e.house.team}`),a=K(()=>e.house.shared?"T1+T2":`T${e.house.team+1} P${e.house.owner+1}`),l=K(()=>e.house.cards.slice(-3).reverse());return(c,u)=>n.value?(F(),V("div",{key:0,class:he(["house",[r.value,{selected:t.selected}]]),onClick:u[1]||(u[1]=d=>c.$emit("click"))},[g("div",sS,O(s.value),1),g("div",{class:he(["h-badge",o.value])},O(a.value),3),g("div",iS,O(t.house.cards.length)+"c",1),g("button",{class:"house-peek-btn",title:"Peek cards",onClick:u[0]||(u[0]=ui(d=>c.$emit("peek",t.house),["stop"]))},"👁")],2)):(F(),V("div",{key:1,class:he(["house-pile",{selected:t.selected}]),title:`Building house of ${s.value} — not yet doubled`,onClick:u[3]||(u[3]=d=>c.$emit("click"))},[(F(!0),V(fe,null,Wt(l.value,(d,f)=>(F(),V("div",{key:f,class:he(["pile-mini-card",{red:i(d)}]),style:ys(`top:${f*18}px;left:${f*4}px;z-index:${10-f};`)},[g("span",oS,O(S(J)(d.rank)),1),g("span",aS,O(S(np)(d.suit)),1)],6))),128)),g("div",{class:he(["h-pile-badge",`t${t.house.team}`])},O(s.value)+" ▸ T"+O(t.house.team+1),3),g("button",{class:"house-peek-btn",title:"Peek all cards",onClick:u[2]||(u[2]=ui(d=>c.$emit("peek",t.house),["stop"]))},"👁")],10,rS))}},cS={class:"floor-cards",id:"floor-area"},uS={key:0,class:"floor-empty"},dS={__name:"FloorArea",setup(t){const{gameState:e,ui:n,toggleFloor:s,openHousePeek:i}=Ze();return(r,o)=>(F(),V("div",cS,[S(e).floor.length?Vt("",!0):(F(),V("span",uS,"Empty floor")),(F(!0),V(fe,null,Wt(S(e).floor,(a,l)=>(F(),V(fe,{key:l},[a.type==="house"?(F(),ls(lS,{key:0,house:a,selected:S(n).selFloorIdxs.includes(l),onClick:c=>S(s)(l),onPeek:S(i)},null,8,["house","selected","onClick","onPeek"])):(F(),ls(_o,{key:1,card:a.card,clickable:!0,selected:S(n).selFloorIdxs.includes(l),class:"floor-card",onClick:c=>S(s)(l)},null,8,["card","selected","onClick"]))],64))),128))]))}},hS={class:"active-hand-zone",id:"active-hand-zone"},fS={__name:"ActiveHand",setup(t){const{gameState:e,ui:n,selectHandCard:s}=Ze(),{session:i}=Yt(),r=K(()=>i.localSeat!==null?i.localSeat:e.currentPlayer),o=K(()=>i.localSeat===null||i.localSeat===e.currentPlayer),a=K(()=>e.hands[r.value]??[]);return(l,c)=>(F(),V("div",hS,[(F(!0),V(fe,null,Wt(a.value,(u,d)=>(F(),ls(_o,{key:d,card:u,clickable:o.value,selected:S(n).selHandIdx===d,onClick:f=>o.value?S(s)(d):null},null,8,["card","clickable","selected","onClick"]))),128))]))}},pS={class:"g-actions"},_S={class:"turn-label"},gS={class:"bid-disp"},mS={class:"action-btns"},vS=["disabled"],yS=["disabled"],bS=["disabled"],wS=["disabled"],IS=["disabled"],ES={class:"status-msg"},CS={__name:"ActionsPanel",setup(t){const{gameState:e,actions:n}=Ze(),s=K(()=>{const o=e.currentPlayer;return`Player ${o+1}'s Turn (Team ${o%2+1})`}),i=K(()=>e.bidValue?`Bid: ${J(e.bidValue)} (${e.bidValue})`:""),r=K(()=>n.value.build?n.value.buildMerge?`Merge → ${J(n.value.buildVal)}`:`Build House (${J(n.value.buildVal)})`:"Build House");return(o,a)=>(F(),V("div",pS,[g("div",_S,O(s.value),1),g("div",gS,O(i.value),1),g("div",mS,[g("button",{class:"btn btn-pick",disabled:!S(n).pick,onClick:a[0]||(a[0]=l=>S(Bs)("pick"))},"Pick",8,vS),g("button",{class:"btn btn-seep",disabled:!S(n).seep,onClick:a[1]||(a[1]=l=>S(Bs)("seep"))},"Seep",8,yS),g("button",{class:"btn btn-build",disabled:!S(n).build,onClick:a[2]||(a[2]=l=>S(Bs)("build"))},O(r.value),9,bS),g("button",{class:"btn btn-add",disabled:!S(n).add,onClick:a[3]||(a[3]=l=>S(Bs)("add"))},"Add to House",8,wS),g("button",{class:"btn btn-throw",disabled:!S(n).throw,onClick:a[4]||(a[4]=l=>S(Bs)("throw"))},"Throw",8,IS)]),g("div",ES,O(S(n).msg),1)]))}},SS={id:"game-screen",class:"screen"},TS={class:"g-header"},kS={class:"g-scores"},RS={class:"g-round"},PS={class:"g-table"},NS={class:"cards-row"},AS={class:"cards-row"},OS={class:"floor-zone"},xS={class:"cap-row"},DS={class:"cards-row"},MS={class:"cards-row"},LS={__name:"GameScreen",setup(t){const{gameState:e,playerName:n}=Ze();function s(i){return(e.captured[i]??[]).reduce((r,o)=>r+Lr(o),0)+(e.seepBonus[i]??0)}return(i,r)=>{var o,a,l,c;return F(),V("div",SS,[g("div",TS,[r[2]||(r[2]=g("h1",null,"♠ SEEP",-1)),g("div",kS,[g("div",{class:he(["g-score",{winning:S(e).scores[0]>S(e).scores[1]}])},[r[0]||(r[0]=nt(" Team 1: ",-1)),g("strong",null,O(S(e).scores[0]),1)],2),g("div",{class:he(["g-score",{winning:S(e).scores[1]>S(e).scores[0]}])},[r[1]||(r[1]=nt(" Team 2: ",-1)),g("strong",null,O(S(e).scores[1]),1)],2)]),g("div",RS,"Round "+O(S(e).roundNum),1)]),g("div",PS,[g("div",{class:he(["player-zone top",{active:S(e).currentPlayer===2}])},[g("div",NS,[pe(Yi,{count:((o=S(e).hands[2])==null?void 0:o.length)??0},null,8,["count"])]),g("div",{class:he(["p-label t0",{"active-lbl":S(e).currentPlayer===2}])},O(S(n)(2))+" · Team 1 ",3)],2),g("div",{class:he(["player-zone left",{active:S(e).currentPlayer===1}])},[g("div",AS,[pe(Yi,{count:((a=S(e).hands[1])==null?void 0:a.length)??0},null,8,["count"])]),g("div",{class:he(["p-label t1",{"active-lbl":S(e).currentPlayer===1}])},O(S(n)(1))+"·T2 ",3)],2),g("div",OS,[r[5]||(r[5]=g("div",{class:"floor-label"},"TABLE",-1)),pe(dS),g("div",xS,[g("div",null,[r[3]||(r[3]=nt("T1 pts: ",-1)),g("span",null,O(s(0)),1)]),g("div",null,[r[4]||(r[4]=nt("T2 pts: ",-1)),g("span",null,O(s(1)),1)])])]),g("div",{class:he(["player-zone right",{active:S(e).currentPlayer===3}])},[g("div",{class:he(["p-label t1",{"active-lbl":S(e).currentPlayer===3}])},O(S(n)(3))+"·T2 ",3),g("div",DS,[pe(Yi,{count:((l=S(e).hands[3])==null?void 0:l.length)??0},null,8,["count"])])],2),g("div",{class:he(["player-zone bottom",{active:S(e).currentPlayer===0}])},[g("div",{class:he(["p-label t0",{"active-lbl":S(e).currentPlayer===0}])},O(S(n)(0))+" · Team 1 ",3),g("div",MS,[pe(Yi,{count:((c=S(e).hands[0])==null?void 0:c.length)??0},null,8,["count"])])],2)]),pe(fS),pe(CS)])}}},FS={id:"roundend-screen",class:"screen"},US={class:"score-table"},$S={class:"score-total"},HS={class:"cum-box"},BS={class:"cum-vals"},WS={style:{display:"flex",gap:"12px","flex-wrap":"wrap","justify-content":"center"}},VS={__name:"RoundEndScreen",setup(t){const{gameState:e}=Ze(),n=K(()=>e.scores[0]>=Mr||e.scores[1]>=Mr);function s(o,a){return(e.captured[o]??[]).filter(a).reduce((l,c)=>l+Lr(c),0)}const i=K(()=>[["Spades (face value)",s(0,o=>o.suit==="S"),s(1,o=>o.suit==="S")],["10♦",s(0,o=>o.suit==="D"&&o.rank===10),s(1,o=>o.suit==="D"&&o.rank===10)],["Other Aces",s(0,o=>o.rank===1&&o.suit!=="S"),s(1,o=>o.rank===1&&o.suit!=="S")],["Seep Bonus",e.seepBonus[0]??0,e.seepBonus[1]??0]]);function r(){n.value?e.phase="gameover":aC()}return(o,a)=>(F(),V("div",FS,[g("h2",null,"Round "+O(S(e).roundNum)+" Complete",1),g("table",US,[a[2]||(a[2]=g("thead",null,[g("tr",null,[g("th",null,"Category"),g("th",null,"Team 1"),g("th",null,"Team 2")])],-1)),g("tbody",null,[(F(!0),V(fe,null,Wt(i.value,l=>(F(),V("tr",{key:l[0]},[g("td",null,O(l[0]),1),g("td",null,O(l[1]),1),g("td",null,O(l[2]),1)]))),128)),g("tr",$S,[a[1]||(a[1]=g("td",null,"Round Total",-1)),g("td",null,O(S(e)._roundS0??0),1),g("td",null,O(S(e)._roundS1??0),1)])])]),g("div",HS,[a[5]||(a[5]=g("h3",null,"Cumulative Score",-1)),g("div",BS,[g("div",null,[a[3]||(a[3]=nt("Team 1: ",-1)),g("strong",null,O(S(e).scores[0]),1)]),g("div",null,[a[4]||(a[4]=nt("Team 2: ",-1)),g("strong",null,O(S(e).scores[1]),1)])])]),g("div",WS,[g("button",{class:"btn btn-primary",style:{"font-size":"1rem",padding:"10px 28px"},onClick:r},O(n.value?"See Results":"Next Round ▶"),1),g("button",{class:"btn btn-danger",style:{padding:"10px 24px","font-size":"1rem"},onClick:a[0]||(a[0]=(...l)=>S(vn)&&S(vn)(...l))}," Exit Game ")])]))}},jS={id:"gameover-screen",class:"screen"},GS={__name:"GameOverScreen",setup(t){const{gameState:e}=Ze(),{session:n}=Yt(),s=K(()=>{const r=e.scores[0],o=e.scores[1];return`🏆 ${r>o?"Team 1 (P1 & P3)":o>r?"Team 2 (P2 & P4)":"Both Teams (Tie!)"} Wins!`});async function i(){n.currentGameId?await vn():eC()}return(r,o)=>(F(),V("div",jS,[g("h1",null,O(s.value),1),g("p",null,"Team 1: "+O(S(e).scores[0])+" pts | Team 2: "+O(S(e).scores[1])+" pts",1),g("button",{class:"btn btn-primary",style:{"font-size":"1rem",padding:"10px 28px"},onClick:i},O(S(n).currentGameId?"Back to Home":"New Game"),1)]))}},KS={__name:"App",setup(t){const{session:e}=Yt(),{gameState:n}=Ze();return Ba(()=>{fC()}),(s,i)=>(F(),V(fe,null,[pe(vC),Zt(pe(FC,null,null,512),[[jn,S(e).screen==="home"]]),Zt(pe(zC,null,null,512),[[jn,S(e).screen==="room"]]),Zt(pe(ZC,null,null,512),[[jn,S(e).screen==="game"&&S(n).phase==="bid"]]),Zt(pe(LS,null,null,512),[[jn,S(e).screen==="game"&&S(n).phase==="play"]]),Zt(pe(VS,null,null,512),[[jn,S(e).screen==="game"&&S(n).phase==="roundend"]]),Zt(pe(GS,null,null,512),[[jn,S(e).screen==="game"&&S(n).phase==="gameover"]]),pe(bC),pe(NC)],64))}};xg(KS).mount("#app");
