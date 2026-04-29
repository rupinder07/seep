(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Oa(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ae={},es=[],Ct=()=>{},Ju=()=>!1,Hr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Br=t=>t.startsWith("onUpdate:"),De=Object.assign,xa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gp=Object.prototype.hasOwnProperty,te=(t,e)=>gp.call(t,e),W=Array.isArray,ts=t=>Si(t)==="[object Map]",Qu=t=>Si(t)==="[object Set]",ic=t=>Si(t)==="[object Date]",K=t=>typeof t=="function",be=t=>typeof t=="string",kt=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",Xu=t=>(ie(t)||K(t))&&K(t.then)&&K(t.catch),Zu=Object.prototype.toString,Si=t=>Zu.call(t),vp=t=>Si(t).slice(8,-1),ed=t=>Si(t)==="[object Object]",Da=t=>be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,zs=Oa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},yp=/-\w/g,at=Vr(t=>t.replace(yp,e=>e.slice(1).toUpperCase())),bp=/\B([A-Z])/g,In=Vr(t=>t.replace(bp,"-$1").toLowerCase()),td=Vr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Eo=Vr(t=>t?`on${td(t)}`:""),Et=(t,e)=>!Object.is(t,e),Xi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},nd=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Ma=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let rc;const Wr=()=>rc||(rc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Is(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=be(s)?Cp(s):Is(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(be(t)||ie(t))return t}const wp=/;(?![^(]*\))/g,Ip=/:([^]+)/,Ep=/\/\*[^]*?\*\//g;function Cp(t){const e={};return t.replace(Ep,"").split(wp).forEach(n=>{if(n){const s=n.split(Ip);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function oe(t){let e="";if(be(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=oe(t[n]);s&&(e+=s+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Sp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tp=Oa(Sp);function sd(t){return!!t||t===""}function kp(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=La(t[s],e[s]);return n}function La(t,e){if(t===e)return!0;let n=ic(t),s=ic(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=kt(t),s=kt(e),n||s)return t===e;if(n=W(t),s=W(e),n||s)return n&&s?kp(t,e):!1;if(n=ie(t),s=ie(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!La(t[o],e[o]))return!1}}return String(t)===String(e)}const id=t=>!!(t&&t.__v_isRef===!0),A=t=>be(t)?t:t==null?"":W(t)||ie(t)&&(t.toString===Zu||!K(t.toString))?id(t)?A(t.value):JSON.stringify(t,rd,2):String(t),rd=(t,e)=>id(e)?rd(t,e.value):ts(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Co(s,r)+" =>"]=i,n),{})}:Qu(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Co(n))}:kt(e)?Co(e):ie(e)&&!W(e)&&!ed(e)?String(e):e,Co=(t,e="")=>{var n;return kt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ne;class Rp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ne,!e&&Ne&&(this.index=(Ne.scopes||(Ne.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ne;try{return Ne=this,e()}finally{Ne=n}}}on(){++this._on===1&&(this.prevScope=Ne,Ne=this)}off(){if(this._on>0&&--this._on===0){if(Ne===this)Ne=this.prevScope;else{let e=Ne;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Pp(){return Ne}let de;const So=new WeakSet;class od{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ne&&Ne.active&&Ne.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,So.has(this)&&(So.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ld(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,oc(this),cd(this);const e=de,n=lt;de=this,lt=!0;try{return this.fn()}finally{ud(this),de=e,lt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)$a(e);this.deps=this.depsTail=void 0,oc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?So.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Qo(this)&&this.run()}get dirty(){return Qo(this)}}let ad=0,qs,Ys;function ld(t,e=!1){if(t.flags|=8,e){t.next=Ys,Ys=t;return}t.next=qs,qs=t}function Fa(){ad++}function Ua(){if(--ad>0)return;if(Ys){let e=Ys;for(Ys=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;qs;){let e=qs;for(qs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function cd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ud(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),$a(s),Np(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Qo(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(dd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function dd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===li)||(t.globalVersion=li,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Qo(t))))return;t.flags|=2;const e=t.dep,n=de,s=lt;de=t,lt=!0;try{cd(t);const i=t.fn(t._value);(e.version===0||Et(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{de=n,lt=s,ud(t),t.flags&=-3}}function $a(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)$a(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Np(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let lt=!0;const hd=[];function Vt(){hd.push(lt),lt=!1}function Wt(){const t=hd.pop();lt=t===void 0?!0:t}function oc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=de;de=void 0;try{e()}finally{de=n}}}let li=0;class Ap{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ha{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!de||!lt||de===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==de)n=this.activeLink=new Ap(de,this),de.deps?(n.prevDep=de.depsTail,de.depsTail.nextDep=n,de.depsTail=n):de.deps=de.depsTail=n,fd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=de.depsTail,n.nextDep=void 0,de.depsTail.nextDep=n,de.depsTail=n,de.deps===n&&(de.deps=s)}return n}trigger(e){this.version++,li++,this.notify(e)}notify(e){Fa();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ua()}}}function fd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)fd(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Xo=new WeakMap,Dn=Symbol(""),Zo=Symbol(""),ci=Symbol("");function Ae(t,e,n){if(lt&&de){let s=Xo.get(t);s||Xo.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Ha),i.map=s,i.key=n),i.track()}}function Dt(t,e,n,s,i,r){const o=Xo.get(t);if(!o){li++;return}const a=l=>{l&&l.trigger()};if(Fa(),e==="clear")o.forEach(a);else{const l=W(t),c=l&&Da(n);if(l&&n==="length"){const u=Number(s);o.forEach((d,f)=>{(f==="length"||f===ci||!kt(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(ci)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Dn)),ts(t)&&a(o.get(Zo)));break;case"delete":l||(a(o.get(Dn)),ts(t)&&a(o.get(Zo)));break;case"set":ts(t)&&a(o.get(Dn));break}}Ua()}function Kn(t){const e=ee(t);return e===t?e:(Ae(e,"iterate",ci),nt(t)?e:e.map(ut))}function jr(t){return Ae(t=ee(t),"iterate",ci),t}function wt(t,e){return jt(t)?us(Mn(t)?ut(e):e):ut(e)}const Op={__proto__:null,[Symbol.iterator](){return To(this,Symbol.iterator,t=>wt(this,t))},concat(...t){return Kn(this).concat(...t.map(e=>W(e)?Kn(e):e))},entries(){return To(this,"entries",t=>(t[1]=wt(this,t[1]),t))},every(t,e){return At(this,"every",t,e,void 0,arguments)},filter(t,e){return At(this,"filter",t,e,n=>n.map(s=>wt(this,s)),arguments)},find(t,e){return At(this,"find",t,e,n=>wt(this,n),arguments)},findIndex(t,e){return At(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return At(this,"findLast",t,e,n=>wt(this,n),arguments)},findLastIndex(t,e){return At(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return At(this,"forEach",t,e,void 0,arguments)},includes(...t){return ko(this,"includes",t)},indexOf(...t){return ko(this,"indexOf",t)},join(t){return Kn(this).join(t)},lastIndexOf(...t){return ko(this,"lastIndexOf",t)},map(t,e){return At(this,"map",t,e,void 0,arguments)},pop(){return Ls(this,"pop")},push(...t){return Ls(this,"push",t)},reduce(t,...e){return ac(this,"reduce",t,e)},reduceRight(t,...e){return ac(this,"reduceRight",t,e)},shift(){return Ls(this,"shift")},some(t,e){return At(this,"some",t,e,void 0,arguments)},splice(...t){return Ls(this,"splice",t)},toReversed(){return Kn(this).toReversed()},toSorted(t){return Kn(this).toSorted(t)},toSpliced(...t){return Kn(this).toSpliced(...t)},unshift(...t){return Ls(this,"unshift",t)},values(){return To(this,"values",t=>wt(this,t))}};function To(t,e,n){const s=jr(t),i=s[e]();return s!==t&&!nt(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.done||(r.value=n(r.value)),r}),i}const xp=Array.prototype;function At(t,e,n,s,i,r){const o=jr(t),a=o!==t&&!nt(t),l=o[e];if(l!==xp[e]){const d=l.apply(t,r);return a?ut(d):d}let c=n;o!==t&&(a?c=function(d,f){return n.call(this,wt(t,d),f,t)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function ac(t,e,n,s){const i=jr(t),r=i!==t&&!nt(t);let o=n,a=!1;i!==t&&(r?(a=s.length===0,o=function(c,u,d){return a&&(a=!1,c=wt(t,c)),n.call(this,c,wt(t,u),d,t)}):n.length>3&&(o=function(c,u,d){return n.call(this,c,u,d,t)}));const l=i[e](o,...s);return a?wt(t,l):l}function ko(t,e,n){const s=ee(t);Ae(s,"iterate",ci);const i=s[e](...n);return(i===-1||i===!1)&&Wa(n[0])?(n[0]=ee(n[0]),s[e](...n)):i}function Ls(t,e,n=[]){Vt(),Fa();const s=ee(t)[e].apply(t,n);return Ua(),Wt(),s}const Dp=Oa("__proto__,__v_isRef,__isVue"),pd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(kt));function Mp(t){kt(t)||(t=String(t));const e=ee(this);return Ae(e,"has",t),e.hasOwnProperty(t)}class _d{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Gp:yd:r?vd:gd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=W(e);if(!i){let l;if(o&&(l=Op[n]))return l;if(n==="hasOwnProperty")return Mp}const a=Reflect.get(e,n,xe(e)?e:s);if((kt(n)?pd.has(n):Dp(n))||(i||Ae(e,"get",n),r))return a;if(xe(a)){const l=o&&Da(n)?a:a.value;return i&&ie(l)?ta(l):l}return ie(a)?i?ta(a):Qt(a):a}}class md extends _d{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];const o=W(e)&&Da(n);if(!this._isShallow){const c=jt(r);if(!nt(s)&&!jt(s)&&(r=ee(r),s=ee(s)),!o&&xe(r)&&!xe(s))return c||(r.value=s),!0}const a=o?Number(n)<e.length:te(e,n),l=Reflect.set(e,n,s,xe(e)?e:i);return e===ee(i)&&(a?Et(s,r)&&Dt(e,"set",n,s):Dt(e,"add",n,s)),l}deleteProperty(e,n){const s=te(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Dt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!kt(n)||!pd.has(n))&&Ae(e,"has",n),s}ownKeys(e){return Ae(e,"iterate",W(e)?"length":Dn),Reflect.ownKeys(e)}}class Lp extends _d{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Fp=new md,Up=new Lp,$p=new md(!0);const ea=t=>t,ji=t=>Reflect.getPrototypeOf(t);function Hp(t,e,n){return function(...s){const i=this.__v_raw,r=ee(i),o=ts(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?ea:e?us:ut;return!e&&Ae(r,"iterate",l?Zo:Dn),De(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function Gi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Bp(t,e){const n={get(i){const r=this.__v_raw,o=ee(r),a=ee(i);t||(Et(i,a)&&Ae(o,"get",i),Ae(o,"get",a));const{has:l}=ji(o),c=e?ea:t?us:ut;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Ae(ee(i),"iterate",Dn),i.size},has(i){const r=this.__v_raw,o=ee(r),a=ee(i);return t||(Et(i,a)&&Ae(o,"has",i),Ae(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=ee(a),c=e?ea:t?us:ut;return!t&&Ae(l,"iterate",Dn),a.forEach((u,d)=>i.call(r,c(u),c(d),o))}};return De(n,t?{add:Gi("add"),set:Gi("set"),delete:Gi("delete"),clear:Gi("clear")}:{add(i){const r=ee(this),o=ji(r),a=ee(i),l=!e&&!nt(i)&&!jt(i)?a:i;return o.has.call(r,l)||Et(i,l)&&o.has.call(r,i)||Et(a,l)&&o.has.call(r,a)||(r.add(l),Dt(r,"add",l,l)),this},set(i,r){!e&&!nt(r)&&!jt(r)&&(r=ee(r));const o=ee(this),{has:a,get:l}=ji(o);let c=a.call(o,i);c||(i=ee(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?Et(r,u)&&Dt(o,"set",i,r):Dt(o,"add",i,r),this},delete(i){const r=ee(this),{has:o,get:a}=ji(r);let l=o.call(r,i);l||(i=ee(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&Dt(r,"delete",i,void 0),c},clear(){const i=ee(this),r=i.size!==0,o=i.clear();return r&&Dt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Hp(i,t,e)}),n}function Ba(t,e){const n=Bp(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(te(n,i)&&i in s?n:s,i,r)}const Vp={get:Ba(!1,!1)},Wp={get:Ba(!1,!0)},jp={get:Ba(!0,!1)};const gd=new WeakMap,vd=new WeakMap,yd=new WeakMap,Gp=new WeakMap;function Kp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zp(t){return t.__v_skip||!Object.isExtensible(t)?0:Kp(vp(t))}function Qt(t){return jt(t)?t:Va(t,!1,Fp,Vp,gd)}function qp(t){return Va(t,!1,$p,Wp,vd)}function ta(t){return Va(t,!0,Up,jp,yd)}function Va(t,e,n,s,i){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=zp(t);if(r===0)return t;const o=i.get(t);if(o)return o;const a=new Proxy(t,r===2?s:n);return i.set(t,a),a}function Mn(t){return jt(t)?Mn(t.__v_raw):!!(t&&t.__v_isReactive)}function jt(t){return!!(t&&t.__v_isReadonly)}function nt(t){return!!(t&&t.__v_isShallow)}function Wa(t){return t?!!t.__v_raw:!1}function ee(t){const e=t&&t.__v_raw;return e?ee(e):t}function Yp(t){return!te(t,"__v_skip")&&Object.isExtensible(t)&&nd(t,"__v_skip",!0),t}const ut=t=>ie(t)?Qt(t):t,us=t=>ie(t)?ta(t):t;function xe(t){return t?t.__v_isRef===!0:!1}function qe(t){return Jp(t,!1)}function Jp(t,e){return xe(t)?t:new Qp(t,e)}class Qp{constructor(e,n){this.dep=new Ha,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ee(e),this._value=n?e:ut(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||nt(e)||jt(e);e=s?e:ee(e),Et(e,n)&&(this._rawValue=e,this._value=s?e:ut(e),this.dep.trigger())}}function w(t){return xe(t)?t.value:t}const Xp={get:(t,e,n)=>e==="__v_raw"?t:w(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return xe(i)&&!xe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function bd(t){return Mn(t)?t:new Proxy(t,Xp)}class Zp{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ha(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=li-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&de!==this)return ld(this,!0),!0}get value(){const e=this.dep.track();return dd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function e_(t,e,n=!1){let s,i;return K(t)?s=t:(s=t.get,i=t.set),new Zp(s,i,n)}const Ki={},ar=new WeakMap;let Pn;function t_(t,e=!1,n=Pn){if(n){let s=ar.get(n);s||ar.set(n,s=[]),s.push(t)}}function n_(t,e,n=ae){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=U=>i?U:nt(U)||i===!1||i===0?Mt(U,1):Mt(U);let u,d,f,_,y=!1,b=!1;if(xe(t)?(d=()=>t.value,y=nt(t)):Mn(t)?(d=()=>c(t),y=!0):W(t)?(b=!0,y=t.some(U=>Mn(U)||nt(U)),d=()=>t.map(U=>{if(xe(U))return U.value;if(Mn(U))return c(U);if(K(U))return l?l(U,2):U()})):K(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){Vt();try{f()}finally{Wt()}}const U=Pn;Pn=u;try{return l?l(t,3,[_]):t(_)}finally{Pn=U}}:d=Ct,e&&i){const U=d,ye=i===!0?1/0:i;d=()=>Mt(U(),ye)}const O=Pp(),F=()=>{u.stop(),O&&O.active&&xa(O.effects,u)};if(r&&e){const U=e;e=(...ye)=>{U(...ye),F()}}let G=b?new Array(t.length).fill(Ki):Ki;const Q=U=>{if(!(!(u.flags&1)||!u.dirty&&!U))if(e){const ye=u.run();if(i||y||(b?ye.some((Ze,Ke)=>Et(Ze,G[Ke])):Et(ye,G))){f&&f();const Ze=Pn;Pn=u;try{const Ke=[ye,G===Ki?void 0:b&&G[0]===Ki?[]:G,_];G=ye,l?l(e,3,Ke):e(...Ke)}finally{Pn=Ze}}}else u.run()};return a&&a(Q),u=new od(d),u.scheduler=o?()=>o(Q,!1):Q,_=U=>t_(U,!1,u),f=u.onStop=()=>{const U=ar.get(u);if(U){if(l)l(U,4);else for(const ye of U)ye();ar.delete(u)}},e?s?Q(!0):G=u.run():o?o(Q.bind(null,!0),!0):u.run(),F.pause=u.pause.bind(u),F.resume=u.resume.bind(u),F.stop=F,F}function Mt(t,e=1/0,n){if(e<=0||!ie(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,xe(t))Mt(t.value,e,n);else if(W(t))for(let s=0;s<t.length;s++)Mt(t[s],e,n);else if(Qu(t)||ts(t))t.forEach(s=>{Mt(s,e,n)});else if(ed(t)){for(const s in t)Mt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Mt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ti(t,e,n,s){try{return s?t(...s):t()}catch(i){Gr(i,e,n)}}function Rt(t,e,n,s){if(K(t)){const i=Ti(t,e,n,s);return i&&Xu(i)&&i.catch(r=>{Gr(r,e,n)}),i}if(W(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Rt(t[r],e,n,s));return i}}function Gr(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ae;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(r){Vt(),Ti(r,null,10,[t,l,c]),Wt();return}}s_(t,n,i,s,o)}function s_(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Fe=[];let bt=-1;const ns=[];let tn=null,Yn=0;const wd=Promise.resolve();let lr=null;function i_(t){const e=lr||wd;return t?e.then(this?t.bind(this):t):e}function r_(t){let e=bt+1,n=Fe.length;for(;e<n;){const s=e+n>>>1,i=Fe[s],r=ui(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function ja(t){if(!(t.flags&1)){const e=ui(t),n=Fe[Fe.length-1];!n||!(t.flags&2)&&e>=ui(n)?Fe.push(t):Fe.splice(r_(e),0,t),t.flags|=1,Id()}}function Id(){lr||(lr=wd.then(Cd))}function o_(t){W(t)?ns.push(...t):tn&&t.id===-1?tn.splice(Yn+1,0,t):t.flags&1||(ns.push(t),t.flags|=1),Id()}function lc(t,e,n=bt+1){for(;n<Fe.length;n++){const s=Fe[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Fe.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ed(t){if(ns.length){const e=[...new Set(ns)].sort((n,s)=>ui(n)-ui(s));if(ns.length=0,tn){tn.push(...e);return}for(tn=e,Yn=0;Yn<tn.length;Yn++){const n=tn[Yn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}tn=null,Yn=0}}const ui=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Cd(t){try{for(bt=0;bt<Fe.length;bt++){const e=Fe[bt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ti(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;bt<Fe.length;bt++){const e=Fe[bt];e&&(e.flags&=-2)}bt=-1,Fe.length=0,Ed(),lr=null,(Fe.length||ns.length)&&Cd()}}let et=null,Sd=null;function cr(t){const e=et;return et=t,Sd=t&&t.type.__scopeId||null,e}function a_(t,e=et,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&yc(-1);const r=cr(e);let o;try{o=t(...i)}finally{cr(r),s._d&&yc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function nn(t,e){if(et===null)return t;const n=Jr(et),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=ae]=e[i];r&&(K(r)&&(r={mounted:r,updated:r}),r.deep&&Mt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function kn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Vt(),Rt(l,n,8,[t.el,a,t,e]),Wt())}}function l_(t,e){if(Ue){let n=Ue.provides;const s=Ue.parent&&Ue.parent.provides;s===n&&(n=Ue.provides=Object.create(s)),n[t]=e}}function Zi(t,e,n=!1){const s=om();if(s||ss){let i=ss?ss._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&K(e)?e.call(s&&s.proxy):e}}const c_=Symbol.for("v-scx"),u_=()=>Zi(c_);function Ln(t,e,n){return Td(t,e,n)}function Td(t,e,n=ae){const{immediate:s,deep:i,flush:r,once:o}=n,a=De({},n),l=e&&s||!e&&r!=="post";let c;if(hi){if(r==="sync"){const _=u_();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=Ct,_.resume=Ct,_.pause=Ct,_}}const u=Ue;a.call=(_,y,b)=>Rt(_,u,y,b);let d=!1;r==="post"?a.scheduler=_=>{je(_,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(_,y)=>{y?_():ja(_)}),a.augmentJob=_=>{e&&(_.flags|=4),d&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const f=n_(t,e,a);return hi&&(c?c.push(f):l&&f()),f}function d_(t,e,n){const s=this.proxy,i=be(t)?t.includes(".")?kd(s,t):()=>s[t]:t.bind(s,s);let r;K(e)?r=e:(r=e.handler,n=e);const o=ki(this),a=Td(i,r.bind(s),n);return o(),a}function kd(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const h_=Symbol("_vte"),f_=t=>t.__isTeleport,p_=Symbol("_leaveCb");function Ga(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ga(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Rd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function cc(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const ur=new WeakMap;function Js(t,e,n,s,i=!1){if(W(t)){t.forEach((b,O)=>Js(b,e&&(W(e)?e[O]:e),n,s,i));return}if(Qs(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Js(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Jr(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ae?a.refs={}:a.refs,d=a.setupState,f=ee(d),_=d===ae?Ju:b=>cc(u,b)?!1:te(f,b),y=(b,O)=>!(O&&cc(u,O));if(c!=null&&c!==l){if(uc(e),be(c))u[c]=null,_(c)&&(d[c]=null);else if(xe(c)){const b=e;y(c,b.k)&&(c.value=null),b.k&&(u[b.k]=null)}}if(K(l))Ti(l,a,12,[o,u]);else{const b=be(l),O=xe(l);if(b||O){const F=()=>{if(t.f){const G=b?_(l)?d[l]:u[l]:y()||!t.k?l.value:u[t.k];if(i)W(G)&&xa(G,r);else if(W(G))G.includes(r)||G.push(r);else if(b)u[l]=[r],_(l)&&(d[l]=u[l]);else{const Q=[r];y(l,t.k)&&(l.value=Q),t.k&&(u[t.k]=Q)}}else b?(u[l]=o,_(l)&&(d[l]=o)):O&&(y(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const G=()=>{F(),ur.delete(t)};G.id=-1,ur.set(t,G),je(G,n)}else uc(t),F()}}}function uc(t){const e=ur.get(t);e&&(e.flags|=8,ur.delete(t))}Wr().requestIdleCallback;Wr().cancelIdleCallback;const Qs=t=>!!t.type.__asyncLoader,Pd=t=>t.type.__isKeepAlive;function __(t,e){Nd(t,"a",e)}function m_(t,e){Nd(t,"da",e)}function Nd(t,e,n=Ue){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Kr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Pd(i.parent.vnode)&&g_(s,e,n,i),i=i.parent}}function g_(t,e,n,s){const i=Kr(e,t,s,!0);zr(()=>{xa(s[e],i)},n)}function Kr(t,e,n=Ue,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Vt();const a=ki(n),l=Rt(e,n,t,o);return a(),Wt(),l});return s?i.unshift(r):i.push(r),r}}const Xt=t=>(e,n=Ue)=>{(!hi||t==="sp")&&Kr(t,(...s)=>e(...s),n)},v_=Xt("bm"),Ka=Xt("m"),y_=Xt("bu"),b_=Xt("u"),w_=Xt("bum"),zr=Xt("um"),I_=Xt("sp"),E_=Xt("rtg"),C_=Xt("rtc");function S_(t,e=Ue){Kr("ec",t,e)}const T_=Symbol.for("v-ndc");function Gt(t,e,n,s){let i;const r=n,o=W(t);if(o||be(t)){const a=o&&Mn(t);let l=!1,c=!1;a&&(l=!nt(t),c=jt(t),t=jr(t)),i=new Array(t.length);for(let u=0,d=t.length;u<d;u++)i[u]=e(l?c?us(ut(t[u])):ut(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(ie(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}const na=t=>t?Qd(t)?Jr(t):na(t.parent):null,Xs=De(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>na(t.parent),$root:t=>na(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Od(t),$forceUpdate:t=>t.f||(t.f=()=>{ja(t.update)}),$nextTick:t=>t.n||(t.n=i_.bind(t.proxy)),$watch:t=>d_.bind(t)}),Ro=(t,e)=>t!==ae&&!t.__isScriptSetup&&te(t,e),k_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Ro(s,e))return o[e]=1,s[e];if(i!==ae&&te(i,e))return o[e]=2,i[e];if(te(r,e))return o[e]=3,r[e];if(n!==ae&&te(n,e))return o[e]=4,n[e];sa&&(o[e]=0)}}const c=Xs[e];let u,d;if(c)return e==="$attrs"&&Ae(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==ae&&te(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,te(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Ro(i,e)?(i[e]=n,!0):s!==ae&&te(s,e)?(s[e]=n,!0):te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,props:r,type:o}},a){let l;return!!(n[a]||t!==ae&&a[0]!=="$"&&te(t,a)||Ro(e,a)||te(r,a)||te(s,a)||te(Xs,a)||te(i.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function dc(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let sa=!0;function R_(t){const e=Od(t),n=t.proxy,s=t.ctx;sa=!1,e.beforeCreate&&hc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:_,updated:y,activated:b,deactivated:O,beforeDestroy:F,beforeUnmount:G,destroyed:Q,unmounted:U,render:ye,renderTracked:Ze,renderTriggered:Ke,errorCaptured:ft,serverPrefetch:Zt,expose:Nt,inheritAttrs:Os,components:Hi,directives:Bi,filters:wo}=e;if(c&&P_(c,s,null),o)for(const me in o){const ce=o[me];K(ce)&&(s[me]=ce.bind(n))}if(i){const me=i.call(n,n);ie(me)&&(t.data=Qt(me))}if(sa=!0,r)for(const me in r){const ce=r[me],Sn=K(ce)?ce.bind(n,n):K(ce.get)?ce.get.bind(n,n):Ct,Vi=!K(ce)&&K(ce.set)?ce.set.bind(n):Ct,Tn=j({get:Sn,set:Vi});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>Tn.value,set:pt=>Tn.value=pt})}if(a)for(const me in a)Ad(a[me],s,n,me);if(l){const me=K(l)?l.call(n):l;Reflect.ownKeys(me).forEach(ce=>{l_(ce,me[ce])})}u&&hc(u,t,"c");function Me(me,ce){W(ce)?ce.forEach(Sn=>me(Sn.bind(n))):ce&&me(ce.bind(n))}if(Me(v_,d),Me(Ka,f),Me(y_,_),Me(b_,y),Me(__,b),Me(m_,O),Me(S_,ft),Me(C_,Ze),Me(E_,Ke),Me(w_,G),Me(zr,U),Me(I_,Zt),W(Nt))if(Nt.length){const me=t.exposed||(t.exposed={});Nt.forEach(ce=>{Object.defineProperty(me,ce,{get:()=>n[ce],set:Sn=>n[ce]=Sn,enumerable:!0})})}else t.exposed||(t.exposed={});ye&&t.render===Ct&&(t.render=ye),Os!=null&&(t.inheritAttrs=Os),Hi&&(t.components=Hi),Bi&&(t.directives=Bi),Zt&&Rd(t)}function P_(t,e,n=Ct){W(t)&&(t=ia(t));for(const s in t){const i=t[s];let r;ie(i)?"default"in i?r=Zi(i.from||s,i.default,!0):r=Zi(i.from||s):r=Zi(i),xe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function hc(t,e,n){Rt(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ad(t,e,n,s){let i=s.includes(".")?kd(n,s):()=>n[s];if(be(t)){const r=e[t];K(r)&&Ln(i,r)}else if(K(t))Ln(i,t.bind(n));else if(ie(t))if(W(t))t.forEach(r=>Ad(r,e,n,s));else{const r=K(t.handler)?t.handler.bind(n):e[t.handler];K(r)&&Ln(i,r,t)}}function Od(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>dr(l,c,o,!0)),dr(l,e,o)),ie(e)&&r.set(e,l),l}function dr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&dr(t,r,n,!0),i&&i.forEach(o=>dr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=N_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const N_={data:fc,props:pc,emits:pc,methods:Gs,computed:Gs,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:Gs,directives:Gs,watch:O_,provide:fc,inject:A_};function fc(t,e){return e?t?function(){return De(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function A_(t,e){return Gs(ia(t),ia(e))}function ia(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Le(t,e){return t?[...new Set([].concat(t,e))]:e}function Gs(t,e){return t?De(Object.create(null),t,e):e}function pc(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:De(Object.create(null),dc(t),dc(e??{})):e}function O_(t,e){if(!t)return e;if(!e)return t;const n=De(Object.create(null),t);for(const s in e)n[s]=Le(t[s],e[s]);return n}function xd(){return{app:null,config:{isNativeTag:Ju,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let x_=0;function D_(t,e){return function(s,i=null){K(s)||(s=De({},s)),i!=null&&!ie(i)&&(i=null);const r=xd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:x_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:hm,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&K(u.install)?(o.add(u),u.install(c,...d)):K(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const _=c._ceVNode||fe(s,i);return _.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(_,u,f),l=!0,c._container=u,u.__vue_app__=c,Jr(_.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Rt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=ss;ss=c;try{return u()}finally{ss=d}}};return c}}let ss=null;const M_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${at(e)}Modifiers`]||t[`${In(e)}Modifiers`];function L_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ae;let i=n;const r=e.startsWith("update:"),o=r&&M_(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>be(u)?u.trim():u)),o.number&&(i=n.map(Ma)));let a,l=s[a=Eo(e)]||s[a=Eo(at(e))];!l&&r&&(l=s[a=Eo(In(e))]),l&&Rt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Rt(c,t,6,i)}}const F_=new WeakMap;function Dd(t,e,n=!1){const s=n?F_:e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!K(t)){const l=c=>{const u=Dd(c,e,!0);u&&(a=!0,De(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ie(t)&&s.set(t,null),null):(W(r)?r.forEach(l=>o[l]=null):De(o,r),ie(t)&&s.set(t,o),o)}function qr(t,e){return!t||!Hr(e)?!1:(e=e.slice(2).replace(/Once$/,""),te(t,e[0].toLowerCase()+e.slice(1))||te(t,In(e))||te(t,e))}function _c(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:_,ctx:y,inheritAttrs:b}=t,O=cr(t);let F,G;try{if(n.shapeFlag&4){const U=i||s,ye=U;F=It(c.call(ye,U,u,d,_,f,y)),G=a}else{const U=e;F=It(U.length>1?U(d,{attrs:a,slots:o,emit:l}):U(d,null)),G=e.props?a:U_(a)}}catch(U){Zs.length=0,Gr(U,t,1),F=fe(mn)}let Q=F;if(G&&b!==!1){const U=Object.keys(G),{shapeFlag:ye}=Q;U.length&&ye&7&&(r&&U.some(Br)&&(G=$_(G,r)),Q=hs(Q,G,!1,!0))}return n.dirs&&(Q=hs(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&Ga(Q,n.transition),F=Q,cr(O),F}const U_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Hr(n))&&((e||(e={}))[n]=t[n]);return e},$_=(t,e)=>{const n={};for(const s in t)(!Br(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function H_(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?mc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(Md(o,s,f)&&!qr(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?mc(s,o,c):!0:!!o;return!1}function mc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(Md(e,t,r)&&!qr(n,r))return!0}return!1}function Md(t,e,n){const s=t[n],i=e[n];return n==="style"&&ie(s)&&ie(i)?!La(s,i):s!==i}function B_({vnode:t,parent:e,suspense:n},s){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.suspense.vnode.el=i.el=s,t=i),i===t)(t=e.vnode).el=s,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=s)}const Ld={},Fd=()=>Object.create(Ld),Ud=t=>Object.getPrototypeOf(t)===Ld;function V_(t,e,n,s=!1){const i={},r=Fd();t.propsDefaults=Object.create(null),$d(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:qp(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function W_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ee(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(qr(t.emitsOptions,f))continue;const _=e[f];if(l)if(te(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const y=at(f);i[y]=ra(l,a,y,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{$d(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!te(e,d)&&((u=In(d))===d||!te(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=ra(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!te(e,d))&&(delete r[d],c=!0)}c&&Dt(t.attrs,"set","")}function $d(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(zs(l))continue;const c=e[l];let u;i&&te(i,u=at(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:qr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ee(n),c=a||ae;for(let u=0;u<r.length;u++){const d=r[u];n[d]=ra(i,l,d,c[d],t,!te(c,d))}}return o}function ra(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=te(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&K(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=ki(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===In(n))&&(s=!0))}return s}const j_=new WeakMap;function Hd(t,e,n=!1){const s=n?j_:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!K(t)){const u=d=>{l=!0;const[f,_]=Hd(d,e,!0);De(o,f),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ie(t)&&s.set(t,es),es;if(W(r))for(let u=0;u<r.length;u++){const d=at(r[u]);gc(d)&&(o[d]=ae)}else if(r)for(const u in r){const d=at(u);if(gc(d)){const f=r[u],_=o[d]=W(f)||K(f)?{type:f}:De({},f),y=_.type;let b=!1,O=!0;if(W(y))for(let F=0;F<y.length;++F){const G=y[F],Q=K(G)&&G.name;if(Q==="Boolean"){b=!0;break}else Q==="String"&&(O=!1)}else b=K(y)&&y.name==="Boolean";_[0]=b,_[1]=O,(b||te(_,"default"))&&a.push(d)}}const c=[o,a];return ie(t)&&s.set(t,c),c}function gc(t){return t[0]!=="$"&&!zs(t)}const za=t=>t==="_"||t==="_ctx"||t==="$stable",qa=t=>W(t)?t.map(It):[It(t)],G_=(t,e,n)=>{if(e._n)return e;const s=a_((...i)=>qa(e(...i)),n);return s._c=!1,s},Bd=(t,e,n)=>{const s=t._ctx;for(const i in t){if(za(i))continue;const r=t[i];if(K(r))e[i]=G_(i,r,s);else if(r!=null){const o=qa(r);e[i]=()=>o}}},Vd=(t,e)=>{const n=qa(e);t.slots.default=()=>n},Wd=(t,e,n)=>{for(const s in e)(n||!za(s))&&(t[s]=e[s])},K_=(t,e,n)=>{const s=t.slots=Fd();if(t.vnode.shapeFlag&32){const i=e._;i?(Wd(s,e,n),n&&nd(s,"_",i,!0)):Bd(e,s)}else e&&Vd(t,e)},z_=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ae;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Wd(i,e,n):(r=!e.$stable,Bd(e,i)),o=e}else e&&(Vd(t,e),o={default:1});if(r)for(const a in i)!za(a)&&o[a]==null&&delete i[a]},je=X_;function q_(t){return Y_(t)}function Y_(t,e){const n=Wr();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:_=Ct,insertStaticContent:y}=t,b=(h,p,g,S=null,I=null,E=null,P=void 0,R=null,k=!!p.dynamicChildren)=>{if(h===p)return;h&&!Fs(h,p)&&(S=Wi(h),pt(h,I,E,!0),h=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:C,ref:$,shapeFlag:N}=p;switch(C){case Yr:O(h,p,g,S);break;case mn:F(h,p,g,S);break;case No:h==null&&G(p,g,S,P);break;case pe:Hi(h,p,g,S,I,E,P,R,k);break;default:N&1?ye(h,p,g,S,I,E,P,R,k):N&6?Bi(h,p,g,S,I,E,P,R,k):(N&64||N&128)&&C.process(h,p,g,S,I,E,P,R,k,Ds)}$!=null&&I?Js($,h&&h.ref,E,p||h,!p):$==null&&h&&h.ref!=null&&Js(h.ref,null,E,h,!0)},O=(h,p,g,S)=>{if(h==null)s(p.el=a(p.children),g,S);else{const I=p.el=h.el;p.children!==h.children&&c(I,p.children)}},F=(h,p,g,S)=>{h==null?s(p.el=l(p.children||""),g,S):p.el=h.el},G=(h,p,g,S)=>{[h.el,h.anchor]=y(h.children,p,g,S,h.el,h.anchor)},Q=({el:h,anchor:p},g,S)=>{let I;for(;h&&h!==p;)I=f(h),s(h,g,S),h=I;s(p,g,S)},U=({el:h,anchor:p})=>{let g;for(;h&&h!==p;)g=f(h),i(h),h=g;i(p)},ye=(h,p,g,S,I,E,P,R,k)=>{if(p.type==="svg"?P="svg":p.type==="math"&&(P="mathml"),h==null)Ze(p,g,S,I,E,P,R,k);else{const C=h.el&&h.el._isVueCE?h.el:null;try{C&&C._beginPatch(),Zt(h,p,I,E,P,R,k)}finally{C&&C._endPatch()}}},Ze=(h,p,g,S,I,E,P,R)=>{let k,C;const{props:$,shapeFlag:N,transition:M,dirs:B}=h;if(k=h.el=o(h.type,E,$&&$.is,$),N&8?u(k,h.children):N&16&&ft(h.children,k,null,S,I,Po(h,E),P,R),B&&kn(h,null,S,"created"),Ke(k,h,h.scopeId,P,S),$){for(const re in $)re!=="value"&&!zs(re)&&r(k,re,null,$[re],E,S);"value"in $&&r(k,"value",null,$.value,E),(C=$.onVnodeBeforeMount)&&vt(C,S,h)}B&&kn(h,null,S,"beforeMount");const X=J_(I,M);X&&M.beforeEnter(k),s(k,p,g),((C=$&&$.onVnodeMounted)||X||B)&&je(()=>{try{C&&vt(C,S,h),X&&M.enter(k),B&&kn(h,null,S,"mounted")}finally{}},I)},Ke=(h,p,g,S,I)=>{if(g&&_(h,g),S)for(let E=0;E<S.length;E++)_(h,S[E]);if(I){let E=I.subTree;if(p===E||zd(E.type)&&(E.ssContent===p||E.ssFallback===p)){const P=I.vnode;Ke(h,P,P.scopeId,P.slotScopeIds,I.parent)}}},ft=(h,p,g,S,I,E,P,R,k=0)=>{for(let C=k;C<h.length;C++){const $=h[C]=R?xt(h[C]):It(h[C]);b(null,$,p,g,S,I,E,P,R)}},Zt=(h,p,g,S,I,E,P)=>{const R=p.el=h.el;let{patchFlag:k,dynamicChildren:C,dirs:$}=p;k|=h.patchFlag&16;const N=h.props||ae,M=p.props||ae;let B;if(g&&Rn(g,!1),(B=M.onVnodeBeforeUpdate)&&vt(B,g,p,h),$&&kn(p,h,g,"beforeUpdate"),g&&Rn(g,!0),(N.innerHTML&&M.innerHTML==null||N.textContent&&M.textContent==null)&&u(R,""),C?Nt(h.dynamicChildren,C,R,g,S,Po(p,I),E):P||ce(h,p,R,null,g,S,Po(p,I),E,!1),k>0){if(k&16)Os(R,N,M,g,I);else if(k&2&&N.class!==M.class&&r(R,"class",null,M.class,I),k&4&&r(R,"style",N.style,M.style,I),k&8){const X=p.dynamicProps;for(let re=0;re<X.length;re++){const ue=X[re],we=N[ue],ke=M[ue];(ke!==we||ue==="value")&&r(R,ue,we,ke,I,g)}}k&1&&h.children!==p.children&&u(R,p.children)}else!P&&C==null&&Os(R,N,M,g,I);((B=M.onVnodeUpdated)||$)&&je(()=>{B&&vt(B,g,p,h),$&&kn(p,h,g,"updated")},S)},Nt=(h,p,g,S,I,E,P)=>{for(let R=0;R<p.length;R++){const k=h[R],C=p[R],$=k.el&&(k.type===pe||!Fs(k,C)||k.shapeFlag&198)?d(k.el):g;b(k,C,$,null,S,I,E,P,!0)}},Os=(h,p,g,S,I)=>{if(p!==g){if(p!==ae)for(const E in p)!zs(E)&&!(E in g)&&r(h,E,p[E],null,I,S);for(const E in g){if(zs(E))continue;const P=g[E],R=p[E];P!==R&&E!=="value"&&r(h,E,R,P,I,S)}"value"in g&&r(h,"value",p.value,g.value,I)}},Hi=(h,p,g,S,I,E,P,R,k)=>{const C=p.el=h?h.el:a(""),$=p.anchor=h?h.anchor:a("");let{patchFlag:N,dynamicChildren:M,slotScopeIds:B}=p;B&&(R=R?R.concat(B):B),h==null?(s(C,g,S),s($,g,S),ft(p.children||[],g,$,I,E,P,R,k)):N>0&&N&64&&M&&h.dynamicChildren&&h.dynamicChildren.length===M.length?(Nt(h.dynamicChildren,M,g,I,E,P,R),(p.key!=null||I&&p===I.subTree)&&jd(h,p,!0)):ce(h,p,g,$,I,E,P,R,k)},Bi=(h,p,g,S,I,E,P,R,k)=>{p.slotScopeIds=R,h==null?p.shapeFlag&512?I.ctx.activate(p,g,S,P,k):wo(p,g,S,I,E,P,k):Xl(h,p,k)},wo=(h,p,g,S,I,E,P)=>{const R=h.component=rm(h,S,I);if(Pd(h)&&(R.ctx.renderer=Ds),am(R,!1,P),R.asyncDep){if(I&&I.registerDep(R,Me,P),!h.el){const k=R.subTree=fe(mn);F(null,k,p,g),h.placeholder=k.el}}else Me(R,h,p,g,I,E,P)},Xl=(h,p,g)=>{const S=p.component=h.component;if(H_(h,p,g))if(S.asyncDep&&!S.asyncResolved){me(S,p,g);return}else S.next=p,S.update();else p.el=h.el,S.vnode=p},Me=(h,p,g,S,I,E,P)=>{const R=()=>{if(h.isMounted){let{next:N,bu:M,u:B,parent:X,vnode:re}=h;{const mt=Gd(h);if(mt){N&&(N.el=re.el,me(h,N,P)),mt.asyncDep.then(()=>{je(()=>{h.isUnmounted||C()},I)});return}}let ue=N,we;Rn(h,!1),N?(N.el=re.el,me(h,N,P)):N=re,M&&Xi(M),(we=N.props&&N.props.onVnodeBeforeUpdate)&&vt(we,X,N,re),Rn(h,!0);const ke=_c(h),_t=h.subTree;h.subTree=ke,b(_t,ke,d(_t.el),Wi(_t),h,I,E),N.el=ke.el,ue===null&&B_(h,ke.el),B&&je(B,I),(we=N.props&&N.props.onVnodeUpdated)&&je(()=>vt(we,X,N,re),I)}else{let N;const{el:M,props:B}=p,{bm:X,m:re,parent:ue,root:we,type:ke}=h,_t=Qs(p);Rn(h,!1),X&&Xi(X),!_t&&(N=B&&B.onVnodeBeforeMount)&&vt(N,ue,p),Rn(h,!0);{we.ce&&we.ce._hasShadowRoot()&&we.ce._injectChildStyle(ke,h.parent?h.parent.type:void 0);const mt=h.subTree=_c(h);b(null,mt,g,S,h,I,E),p.el=mt.el}if(re&&je(re,I),!_t&&(N=B&&B.onVnodeMounted)){const mt=p;je(()=>vt(N,ue,mt),I)}(p.shapeFlag&256||ue&&Qs(ue.vnode)&&ue.vnode.shapeFlag&256)&&h.a&&je(h.a,I),h.isMounted=!0,p=g=S=null}};h.scope.on();const k=h.effect=new od(R);h.scope.off();const C=h.update=k.run.bind(k),$=h.job=k.runIfDirty.bind(k);$.i=h,$.id=h.uid,k.scheduler=()=>ja($),Rn(h,!0),C()},me=(h,p,g)=>{p.component=h;const S=h.vnode.props;h.vnode=p,h.next=null,W_(h,p.props,S,g),z_(h,p.children,g),Vt(),lc(h),Wt()},ce=(h,p,g,S,I,E,P,R,k=!1)=>{const C=h&&h.children,$=h?h.shapeFlag:0,N=p.children,{patchFlag:M,shapeFlag:B}=p;if(M>0){if(M&128){Vi(C,N,g,S,I,E,P,R,k);return}else if(M&256){Sn(C,N,g,S,I,E,P,R,k);return}}B&8?($&16&&xs(C,I,E),N!==C&&u(g,N)):$&16?B&16?Vi(C,N,g,S,I,E,P,R,k):xs(C,I,E,!0):($&8&&u(g,""),B&16&&ft(N,g,S,I,E,P,R,k))},Sn=(h,p,g,S,I,E,P,R,k)=>{h=h||es,p=p||es;const C=h.length,$=p.length,N=Math.min(C,$);let M;for(M=0;M<N;M++){const B=p[M]=k?xt(p[M]):It(p[M]);b(h[M],B,g,null,I,E,P,R,k)}C>$?xs(h,I,E,!0,!1,N):ft(p,g,S,I,E,P,R,k,N)},Vi=(h,p,g,S,I,E,P,R,k)=>{let C=0;const $=p.length;let N=h.length-1,M=$-1;for(;C<=N&&C<=M;){const B=h[C],X=p[C]=k?xt(p[C]):It(p[C]);if(Fs(B,X))b(B,X,g,null,I,E,P,R,k);else break;C++}for(;C<=N&&C<=M;){const B=h[N],X=p[M]=k?xt(p[M]):It(p[M]);if(Fs(B,X))b(B,X,g,null,I,E,P,R,k);else break;N--,M--}if(C>N){if(C<=M){const B=M+1,X=B<$?p[B].el:S;for(;C<=M;)b(null,p[C]=k?xt(p[C]):It(p[C]),g,X,I,E,P,R,k),C++}}else if(C>M)for(;C<=N;)pt(h[C],I,E,!0),C++;else{const B=C,X=C,re=new Map;for(C=X;C<=M;C++){const ze=p[C]=k?xt(p[C]):It(p[C]);ze.key!=null&&re.set(ze.key,C)}let ue,we=0;const ke=M-X+1;let _t=!1,mt=0;const Ms=new Array(ke);for(C=0;C<ke;C++)Ms[C]=0;for(C=B;C<=N;C++){const ze=h[C];if(we>=ke){pt(ze,I,E,!0);continue}let gt;if(ze.key!=null)gt=re.get(ze.key);else for(ue=X;ue<=M;ue++)if(Ms[ue-X]===0&&Fs(ze,p[ue])){gt=ue;break}gt===void 0?pt(ze,I,E,!0):(Ms[gt-X]=C+1,gt>=mt?mt=gt:_t=!0,b(ze,p[gt],g,null,I,E,P,R,k),we++)}const tc=_t?Q_(Ms):es;for(ue=tc.length-1,C=ke-1;C>=0;C--){const ze=X+C,gt=p[ze],nc=p[ze+1],sc=ze+1<$?nc.el||Kd(nc):S;Ms[C]===0?b(null,gt,g,sc,I,E,P,R,k):_t&&(ue<0||C!==tc[ue]?Tn(gt,g,sc,2):ue--)}}},Tn=(h,p,g,S,I=null)=>{const{el:E,type:P,transition:R,children:k,shapeFlag:C}=h;if(C&6){Tn(h.component.subTree,p,g,S);return}if(C&128){h.suspense.move(p,g,S);return}if(C&64){P.move(h,p,g,Ds);return}if(P===pe){s(E,p,g);for(let N=0;N<k.length;N++)Tn(k[N],p,g,S);s(h.anchor,p,g);return}if(P===No){Q(h,p,g);return}if(S!==2&&C&1&&R)if(S===0)R.beforeEnter(E),s(E,p,g),je(()=>R.enter(E),I);else{const{leave:N,delayLeave:M,afterLeave:B}=R,X=()=>{h.ctx.isUnmounted?i(E):s(E,p,g)},re=()=>{E._isLeaving&&E[p_](!0),N(E,()=>{X(),B&&B()})};M?M(E,X,re):re()}else s(E,p,g)},pt=(h,p,g,S=!1,I=!1)=>{const{type:E,props:P,ref:R,children:k,dynamicChildren:C,shapeFlag:$,patchFlag:N,dirs:M,cacheIndex:B,memo:X}=h;if(N===-2&&(I=!1),R!=null&&(Vt(),Js(R,null,g,h,!0),Wt()),B!=null&&(p.renderCache[B]=void 0),$&256){p.ctx.deactivate(h);return}const re=$&1&&M,ue=!Qs(h);let we;if(ue&&(we=P&&P.onVnodeBeforeUnmount)&&vt(we,p,h),$&6)mp(h.component,g,S);else{if($&128){h.suspense.unmount(g,S);return}re&&kn(h,null,p,"beforeUnmount"),$&64?h.type.remove(h,p,g,Ds,S):C&&!C.hasOnce&&(E!==pe||N>0&&N&64)?xs(C,p,g,!1,!0):(E===pe&&N&384||!I&&$&16)&&xs(k,p,g),S&&Zl(h)}const ke=X!=null&&B==null;(ue&&(we=P&&P.onVnodeUnmounted)||re||ke)&&je(()=>{we&&vt(we,p,h),re&&kn(h,null,p,"unmounted"),ke&&(h.el=null)},g)},Zl=h=>{const{type:p,el:g,anchor:S,transition:I}=h;if(p===pe){_p(g,S);return}if(p===No){U(h);return}const E=()=>{i(g),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(h.shapeFlag&1&&I&&!I.persisted){const{leave:P,delayLeave:R}=I,k=()=>P(g,E);R?R(h.el,E,k):k()}else E()},_p=(h,p)=>{let g;for(;h!==p;)g=f(h),i(h),h=g;i(p)},mp=(h,p,g)=>{const{bum:S,scope:I,job:E,subTree:P,um:R,m:k,a:C}=h;vc(k),vc(C),S&&Xi(S),I.stop(),E&&(E.flags|=8,pt(P,h,p,g)),R&&je(R,p),je(()=>{h.isUnmounted=!0},p)},xs=(h,p,g,S=!1,I=!1,E=0)=>{for(let P=E;P<h.length;P++)pt(h[P],p,g,S,I)},Wi=h=>{if(h.shapeFlag&6)return Wi(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const p=f(h.anchor||h.el),g=p&&p[h_];return g?f(g):p};let Io=!1;const ec=(h,p,g)=>{let S;h==null?p._vnode&&(pt(p._vnode,null,null,!0),S=p._vnode.component):b(p._vnode||null,h,p,null,null,null,g),p._vnode=h,Io||(Io=!0,lc(S),Ed(),Io=!1)},Ds={p:b,um:pt,m:Tn,r:Zl,mt:wo,mc:ft,pc:ce,pbc:Nt,n:Wi,o:t};return{render:ec,hydrate:void 0,createApp:D_(ec)}}function Po({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Rn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function J_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function jd(t,e,n=!1){const s=t.children,i=e.children;if(W(s)&&W(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=xt(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&jd(o,a)),a.type===Yr&&(a.patchFlag===-1&&(a=i[r]=xt(a)),a.el=o.el),a.type===mn&&!a.el&&(a.el=o.el)}}function Q_(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Gd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Gd(e)}function vc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Kd(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Kd(e.subTree):null}const zd=t=>t.__isSuspense;function X_(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):o_(t)}const pe=Symbol.for("v-fgt"),Yr=Symbol.for("v-txt"),mn=Symbol.for("v-cmt"),No=Symbol.for("v-stc"),Zs=[];let Ye=null;function D(t=!1){Zs.push(Ye=t?null:[])}function Z_(){Zs.pop(),Ye=Zs[Zs.length-1]||null}let di=1;function yc(t,e=!1){di+=t,t<0&&Ye&&e&&(Ye.hasOnce=!0)}function qd(t){return t.dynamicChildren=di>0?Ye||es:null,Z_(),di>0&&Ye&&Ye.push(t),t}function L(t,e,n,s,i,r){return qd(m(t,e,n,s,i,r,!0))}function ds(t,e,n,s,i){return qd(fe(t,e,n,s,i,!0))}function Yd(t){return t?t.__v_isVNode===!0:!1}function Fs(t,e){return t.type===e.type&&t.key===e.key}const Jd=({key:t})=>t??null,er=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?be(t)||xe(t)||K(t)?{i:et,r:t,k:e,f:!!n}:t:null);function m(t,e=null,n=null,s=0,i=null,r=t===pe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Jd(e),ref:e&&er(e),scopeId:Sd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:et};return a?(Ya(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=be(n)?8:16),di>0&&!o&&Ye&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ye.push(l),l}const fe=em;function em(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===T_)&&(t=mn),Yd(t)){const a=hs(t,e,!0);return n&&Ya(a,n),di>0&&!r&&Ye&&(a.shapeFlag&6?Ye[Ye.indexOf(t)]=a:Ye.push(a)),a.patchFlag=-2,a}if(dm(t)&&(t=t.__vccOpts),e){e=tm(e);let{class:a,style:l}=e;a&&!be(a)&&(e.class=oe(a)),ie(l)&&(Wa(l)&&!W(l)&&(l=De({},l)),e.style=Is(l))}const o=be(t)?1:zd(t)?128:f_(t)?64:ie(t)?4:K(t)?2:0;return m(t,e,n,s,i,o,r,!0)}function tm(t){return t?Wa(t)||Ud(t)?De({},t):t:null}function hs(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?nm(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Jd(c),ref:e&&e.ref?n&&r?W(r)?r.concat(er(e)):[r,er(e)]:er(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==pe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hs(t.ssContent),ssFallback:t.ssFallback&&hs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Ga(u,l.clone(u)),u}function rt(t=" ",e=0){return fe(Yr,null,t,e)}function Re(t="",e=!1){return e?(D(),ds(mn,null,t)):fe(mn,null,t)}function It(t){return t==null||typeof t=="boolean"?fe(mn):W(t)?fe(pe,null,t.slice()):Yd(t)?xt(t):fe(Yr,null,String(t))}function xt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hs(t)}function Ya(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ya(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Ud(e)?e._ctx=et:i===3&&et&&(et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:et},n=32):(e=String(e),s&64?(n=16,e=[rt(e)]):n=8);t.children=e,t.shapeFlag|=n}function nm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=oe([e.class,s.class]));else if(i==="style")e.style=Is([e.style,s.style]);else if(Hr(i)){const r=e[i],o=s[i];o&&r!==o&&!(W(r)&&r.includes(o))?e[i]=r?[].concat(r,o):o:o==null&&r==null&&!Br(i)&&(e[i]=o)}else i!==""&&(e[i]=s[i])}return e}function vt(t,e,n,s=null){Rt(t,e,7,[n,s])}const sm=xd();let im=0;function rm(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||sm,r={uid:im++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Rp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hd(s,i),emitsOptions:Dd(s,i),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:s.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=L_.bind(null,r),t.ce&&t.ce(r),r}let Ue=null;const om=()=>Ue||et;let hr,oa;{const t=Wr(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};hr=e("__VUE_INSTANCE_SETTERS__",n=>Ue=n),oa=e("__VUE_SSR_SETTERS__",n=>hi=n)}const ki=t=>{const e=Ue;return hr(t),t.scope.on(),()=>{t.scope.off(),hr(e)}},bc=()=>{Ue&&Ue.scope.off(),hr(null)};function Qd(t){return t.vnode.shapeFlag&4}let hi=!1;function am(t,e=!1,n=!1){e&&oa(e);const{props:s,children:i}=t.vnode,r=Qd(t);V_(t,s,r,e),K_(t,i,n||e);const o=r?lm(t,e):void 0;return e&&oa(!1),o}function lm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,k_);const{setup:s}=n;if(s){Vt();const i=t.setupContext=s.length>1?um(t):null,r=ki(t),o=Ti(s,t,0,[t.props,i]),a=Xu(o);if(Wt(),r(),(a||t.sp)&&!Qs(t)&&Rd(t),a){if(o.then(bc,bc),e)return o.then(l=>{wc(t,l)}).catch(l=>{Gr(l,t,0)});t.asyncDep=o}else wc(t,o)}else Xd(t)}function wc(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=bd(e)),Xd(t)}function Xd(t,e,n){const s=t.type;t.render||(t.render=s.render||Ct);{const i=ki(t);Vt();try{R_(t)}finally{Wt(),i()}}}const cm={get(t,e){return Ae(t,"get",""),t[e]}};function um(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,cm),slots:t.slots,emit:t.emit,expose:e}}function Jr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(bd(Yp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Xs)return Xs[n](t)},has(e,n){return n in e||n in Xs}})):t.proxy}function dm(t){return K(t)&&"__vccOpts"in t}const j=(t,e)=>e_(t,e,hi),hm="3.5.33";/**
* @vue/runtime-dom v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let aa;const Ic=typeof window<"u"&&window.trustedTypes;if(Ic)try{aa=Ic.createPolicy("vue",{createHTML:t=>t})}catch{}const Zd=aa?t=>aa.createHTML(t):t=>t,fm="http://www.w3.org/2000/svg",pm="http://www.w3.org/1998/Math/MathML",Ot=typeof document<"u"?document:null,Ec=Ot&&Ot.createElement("template"),_m={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Ot.createElementNS(fm,t):e==="mathml"?Ot.createElementNS(pm,t):n?Ot.createElement(t,{is:n}):Ot.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Ot.createTextNode(t),createComment:t=>Ot.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ot.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Ec.innerHTML=Zd(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Ec.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},mm=Symbol("_vtc");function gm(t,e,n){const s=t[mm];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const fr=Symbol("_vod"),eh=Symbol("_vsh"),zn={name:"show",beforeMount(t,{value:e},{transition:n}){t[fr]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Us(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Us(t,!0),s.enter(t)):s.leave(t,()=>{Us(t,!1)}):Us(t,e))},beforeUnmount(t,{value:e}){Us(t,e)}};function Us(t,e){t.style.display=e?t[fr]:"none",t[eh]=!e}const vm=Symbol(""),ym=/(?:^|;)\s*display\s*:/;function bm(t,e,n){const s=t.style,i=be(n);let r=!1;if(n&&!i){if(e)if(be(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ks(s,a,"")}else for(const o in e)n[o]==null&&Ks(s,o,"");for(const o in n){o==="display"&&(r=!0);const a=n[o];a!=null?Im(t,o,!be(e)&&e?e[o]:void 0,a)||Ks(s,o,a):Ks(s,o,"")}}else if(i){if(e!==n){const o=s[vm];o&&(n+=";"+o),s.cssText=n,r=ym.test(n)}}else e&&t.removeAttribute("style");fr in t&&(t[fr]=r?s.display:"",t[eh]&&(s.display="none"))}const Cc=/\s*!important$/;function Ks(t,e,n){if(W(n))n.forEach(s=>Ks(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=wm(t,e);Cc.test(n)?t.setProperty(In(s),n.replace(Cc,""),"important"):t[s]=n}}const Sc=["Webkit","Moz","ms"],Ao={};function wm(t,e){const n=Ao[e];if(n)return n;let s=at(e);if(s!=="filter"&&s in t)return Ao[e]=s;s=td(s);for(let i=0;i<Sc.length;i++){const r=Sc[i]+s;if(r in t)return Ao[e]=r}return e}function Im(t,e,n,s){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&be(s)&&n===s}const Tc="http://www.w3.org/1999/xlink";function kc(t,e,n,s,i,r=Tp(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Tc,e.slice(6,e.length)):t.setAttributeNS(Tc,e,n):n==null||r&&!sd(n)?t.removeAttribute(e):t.setAttribute(e,r?"":kt(n)?String(n):n)}function Rc(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Zd(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=sd(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function Jn(t,e,n,s){t.addEventListener(e,n,s)}function Em(t,e,n,s){t.removeEventListener(e,n,s)}const Pc=Symbol("_vei");function Cm(t,e,n,s,i=null){const r=t[Pc]||(t[Pc]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Sm(e);if(s){const c=r[e]=Rm(s,i);Jn(t,a,c,l)}else o&&(Em(t,a,o,l),r[e]=void 0)}}const Nc=/(?:Once|Passive|Capture)$/;function Sm(t){let e;if(Nc.test(t)){e={};let s;for(;s=t.match(Nc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):In(t.slice(2)),e]}let Oo=0;const Tm=Promise.resolve(),km=()=>Oo||(Tm.then(()=>Oo=0),Oo=Date.now());function Rm(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Rt(Pm(s,n.value),e,5,[s])};return n.value=t,n.attached=km(),n}function Pm(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Ac=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Nm=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?gm(t,s,o):e==="style"?bm(t,n,s):Hr(e)?Br(e)||Cm(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Am(t,e,s,o))?(Rc(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&kc(t,e,s,o,r,e!=="value")):t._isVueCE&&(Om(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!be(s)))?Rc(t,at(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),kc(t,e,s,o))};function Am(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ac(e)&&K(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Ac(e)&&be(n)?!1:e in t}function Om(t,e){const n=t._def.props;if(!n)return!1;const s=at(e);return Array.isArray(n)?n.some(i=>at(i)===s):Object.keys(n).some(i=>at(i)===s)}const Oc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>Xi(e,n):e};function xm(t){t.target.composing=!0}function xc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const xo=Symbol("_assign");function Dc(t,e,n){return e&&(t=t.trim()),n&&(t=Ma(t)),t}const Mc={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[xo]=Oc(i);const r=s||i.props&&i.props.type==="number";Jn(t,e?"change":"input",o=>{o.target.composing||t[xo](Dc(t.value,n,r))}),(n||r)&&Jn(t,"change",()=>{t.value=Dc(t.value,n,r)}),e||(Jn(t,"compositionstart",xm),Jn(t,"compositionend",xc),Jn(t,"change",xc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[xo]=Oc(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Ma(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l)}},Dm=["ctrl","shift","alt","meta"],Mm={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Dm.some(n=>t[`${n}Key`]&&!e.includes(n))},fi=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=Mm[e[o]];if(a&&a(i,e))return}return t(i,...r)})},Lm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Lc=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const r=In(i.key);if(e.some(o=>o===r||Lm[o]===r))return t(i)})},Fm=De({patchProp:Nm},_m);let Fc;function Um(){return Fc||(Fc=q_(Fm))}const $m=(...t)=>{const e=Um().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Bm(s);if(!i)return;const r=e._component;!K(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Hm(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Hm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Bm(t){return be(t)?document.querySelector(t):t}var Uc={};/**
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
 */const th={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const T=function(t,e){if(!t)throw Es(e)},Es=function(t){return new Error("Firebase Database ("+th.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const nh=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Vm=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ja={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(f=64)),s.push(n[u],n[d],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(nh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Vm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new Wm;const f=r<<2|a>>4;if(s.push(f),c!==64){const _=a<<4&240|c>>2;if(s.push(_),d!==64){const y=c<<6&192|d;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Wm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sh=function(t){const e=nh(t);return Ja.encodeByteArray(e,!0)},pr=function(t){return sh(t).replace(/\./g,"")},_r=function(t){try{return Ja.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jm(t){return ih(void 0,t)}function ih(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Gm(n)||(t[n]=ih(t[n],e[n]));return t}function Gm(t){return t!=="__proto__"}/**
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
 */function Km(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zm=()=>Km().__FIREBASE_DEFAULTS__,qm=()=>{if(typeof process>"u"||typeof Uc>"u")return;const t=Uc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ym=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_r(t[1]);return e&&JSON.parse(e)},Qa=()=>{try{return zm()||qm()||Ym()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rh=t=>{var e,n;return(n=(e=Qa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Jm=t=>{const e=rh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},oh=()=>{var t;return(t=Qa())===null||t===void 0?void 0:t.config},ah=t=>{var e;return(e=Qa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class st{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Qm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[pr(JSON.stringify(n)),pr(JSON.stringify(o)),""].join(".")}/**
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
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function Xm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Zm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eg(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tg(){return th.NODE_ADMIN===!0}function ng(){try{return typeof indexedDB=="object"}catch{return!1}}function sg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const ig="FirebaseError";class En extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ig,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ri.prototype.create)}}class Ri{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?rg(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new En(i,a,s)}}function rg(t,e){return t.replace(og,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const og=/\{\$([^}]+)}/g;/**
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
 */function pi(t){return JSON.parse(t)}function Ie(t){return JSON.stringify(t)}/**
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
 */const ch=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=pi(_r(r[0])||""),n=pi(_r(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},ag=function(t){const e=ch(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},lg=function(t){const e=ch(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function dt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Fn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function mr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function vr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if($c(r)&&$c(o)){if(!vr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function $c(t){return t!==null&&typeof t=="object"}/**
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
 */function Cs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class cg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function ug(t,e){const n=new dg(t,e);return n.subscribe.bind(n)}class dg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");hg(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Do),i.error===void 0&&(i.error=Do),i.complete===void 0&&(i.complete=Do);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function hg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Do(){}function fs(t,e){return`${t} failed: ${e} argument `}/**
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
 */const fg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Qr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Pe(t){return t&&t._delegate?t._delegate:t}class Un{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Nn="[DEFAULT]";/**
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
 */class pg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new st;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mg(e))try{this.getOrInitializeService({instanceIdentifier:Nn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nn){return this.instances.has(e)}getOptions(e=Nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_g(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Nn){return this.component?this.component.multipleInstances?e:Nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _g(t){return t===Nn?void 0:t}function mg(t){return t.instantiationMode==="EAGER"}/**
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
 */class gg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const vg={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},yg=se.INFO,bg={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},wg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=bg[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Za{constructor(e){this.name=e,this._logLevel=yg,this._logHandler=wg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Ig=(t,e)=>e.some(n=>t instanceof n);let Hc,Bc;function Eg(){return Hc||(Hc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cg(){return Bc||(Bc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uh=new WeakMap,la=new WeakMap,dh=new WeakMap,Mo=new WeakMap,el=new WeakMap;function Sg(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(un(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&uh.set(n,t)}).catch(()=>{}),el.set(e,t),e}function Tg(t){if(la.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});la.set(t,e)}let ca={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return la.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kg(t){ca=t(ca)}function Rg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Lo(this),e,...n);return dh.set(s,e.sort?e.sort():[e]),un(s)}:Cg().includes(t)?function(...e){return t.apply(Lo(this),e),un(uh.get(this))}:function(...e){return un(t.apply(Lo(this),e))}}function Pg(t){return typeof t=="function"?Rg(t):(t instanceof IDBTransaction&&Tg(t),Ig(t,Eg())?new Proxy(t,ca):t)}function un(t){if(t instanceof IDBRequest)return Sg(t);if(Mo.has(t))return Mo.get(t);const e=Pg(t);return e!==t&&(Mo.set(t,e),el.set(e,t)),e}const Lo=t=>el.get(t);function Ng(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=un(o);return s&&o.addEventListener("upgradeneeded",l=>{s(un(o.result),l.oldVersion,l.newVersion,un(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Ag=["get","getKey","getAll","getAllKeys","count"],Og=["put","add","delete","clear"],Fo=new Map;function Vc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fo.get(e))return Fo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Og.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ag.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Fo.set(e,r),r}kg(t=>({...t,get:(e,n,s)=>Vc(e,n)||t.get(e,n,s),has:(e,n)=>!!Vc(e,n)||t.has(e,n)}));/**
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
 */class xg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Dg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Dg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ua="@firebase/app",Wc="0.10.13";/**
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
 */const Kt=new Za("@firebase/app"),Mg="@firebase/app-compat",Lg="@firebase/analytics-compat",Fg="@firebase/analytics",Ug="@firebase/app-check-compat",$g="@firebase/app-check",Hg="@firebase/auth",Bg="@firebase/auth-compat",Vg="@firebase/database",Wg="@firebase/data-connect",jg="@firebase/database-compat",Gg="@firebase/functions",Kg="@firebase/functions-compat",zg="@firebase/installations",qg="@firebase/installations-compat",Yg="@firebase/messaging",Jg="@firebase/messaging-compat",Qg="@firebase/performance",Xg="@firebase/performance-compat",Zg="@firebase/remote-config",ev="@firebase/remote-config-compat",tv="@firebase/storage",nv="@firebase/storage-compat",sv="@firebase/firestore",iv="@firebase/vertexai-preview",rv="@firebase/firestore-compat",ov="firebase",av="10.14.1";/**
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
 */const da="[DEFAULT]",lv={[ua]:"fire-core",[Mg]:"fire-core-compat",[Fg]:"fire-analytics",[Lg]:"fire-analytics-compat",[$g]:"fire-app-check",[Ug]:"fire-app-check-compat",[Hg]:"fire-auth",[Bg]:"fire-auth-compat",[Vg]:"fire-rtdb",[Wg]:"fire-data-connect",[jg]:"fire-rtdb-compat",[Gg]:"fire-fn",[Kg]:"fire-fn-compat",[zg]:"fire-iid",[qg]:"fire-iid-compat",[Yg]:"fire-fcm",[Jg]:"fire-fcm-compat",[Qg]:"fire-perf",[Xg]:"fire-perf-compat",[Zg]:"fire-rc",[ev]:"fire-rc-compat",[tv]:"fire-gcs",[nv]:"fire-gcs-compat",[sv]:"fire-fst",[rv]:"fire-fst-compat",[iv]:"fire-vertex","fire-js":"fire-js",[ov]:"fire-js-all"};/**
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
 */const yr=new Map,cv=new Map,ha=new Map;function jc(t,e){try{t.container.addComponent(e)}catch(n){Kt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ps(t){const e=t.name;if(ha.has(e))return Kt.debug(`There were multiple attempts to register component ${e}.`),!1;ha.set(e,t);for(const n of yr.values())jc(n,t);for(const n of cv.values())jc(n,t);return!0}function tl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Lt(t){return t.settings!==void 0}/**
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
 */const uv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dn=new Ri("app","Firebase",uv);/**
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
 */class dv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ss=av;function hh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:da,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw dn.create("bad-app-name",{appName:String(i)});if(n||(n=oh()),!n)throw dn.create("no-options");const r=yr.get(i);if(r){if(vr(n,r.options)&&vr(s,r.config))return r;throw dn.create("duplicate-app",{appName:i})}const o=new gg(i);for(const l of ha.values())o.addComponent(l);const a=new dv(n,s,o);return yr.set(i,a),a}function fh(t=da){const e=yr.get(t);if(!e&&t===da&&oh())return hh();if(!e)throw dn.create("no-app",{appName:t});return e}function hn(t,e,n){var s;let i=(s=lv[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kt.warn(a.join(" "));return}ps(new Un(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const hv="firebase-heartbeat-database",fv=1,_i="firebase-heartbeat-store";let Uo=null;function ph(){return Uo||(Uo=Ng(hv,fv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_i)}catch(n){console.warn(n)}}}}).catch(t=>{throw dn.create("idb-open",{originalErrorMessage:t.message})})),Uo}async function pv(t){try{const n=(await ph()).transaction(_i),s=await n.objectStore(_i).get(_h(t));return await n.done,s}catch(e){if(e instanceof En)Kt.warn(e.message);else{const n=dn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kt.warn(n.message)}}}async function Gc(t,e){try{const s=(await ph()).transaction(_i,"readwrite");await s.objectStore(_i).put(e,_h(t)),await s.done}catch(n){if(n instanceof En)Kt.warn(n.message);else{const s=dn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kt.warn(s.message)}}}function _h(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _v=1024,mv=30*24*60*60*1e3;class gv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Kc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=mv}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Kt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Kc(),{heartbeatsToSend:s,unsentEntries:i}=vv(this._heartbeatsCache.heartbeats),r=pr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Kt.warn(n),""}}}function Kc(){return new Date().toISOString().substring(0,10)}function vv(t,e=_v){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),zc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),zc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class yv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ng()?sg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await pv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zc(t){return pr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function bv(t){ps(new Un("platform-logger",e=>new xg(e),"PRIVATE")),ps(new Un("heartbeat",e=>new gv(e),"PRIVATE")),hn(ua,Wc,t),hn(ua,Wc,"esm2017"),hn("fire-js","")}bv("");var qc={};const Yc="@firebase/database",Jc="1.0.8";/**
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
 */let mh="";function wv(t){mh=t}/**
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
 */class Iv{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ie(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:pi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Ev{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return dt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const gh=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Iv(e)}}catch{}return new Ev},On=gh("localStorage"),Cv=gh("sessionStorage");/**
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
 */const is=new Za("@firebase/database"),vh=function(){let t=1;return function(){return t++}}(),yh=function(t){const e=fg(t),n=new cg;n.update(e);const s=n.digest();return Ja.encodeByteArray(s)},Pi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Pi.apply(null,s):typeof s=="object"?e+=Ie(s):e+=s,e+=" "}return e};let ei=null,Qc=!0;const Sv=function(t,e){T(!0,"Can't turn on custom loggers persistently."),is.logLevel=se.VERBOSE,ei=is.log.bind(is)},Se=function(...t){if(Qc===!0&&(Qc=!1,ei===null&&Cv.get("logging_enabled")===!0&&Sv()),ei){const e=Pi.apply(null,t);ei(e)}},Ni=function(t){return function(...e){Se(t,...e)}},fa=function(...t){const e="FIREBASE INTERNAL ERROR: "+Pi(...t);is.error(e)},zt=function(...t){const e=`FIREBASE FATAL ERROR: ${Pi(...t)}`;throw is.error(e),new Error(e)},He=function(...t){const e="FIREBASE WARNING: "+Pi(...t);is.warn(e)},Tv=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&He("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Xr=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},kv=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},_s="[MIN_NAME]",$n="[MAX_NAME]",Wn=function(t,e){if(t===e)return 0;if(t===_s||e===$n)return-1;if(e===_s||t===$n)return 1;{const n=Xc(t),s=Xc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Rv=function(t,e){return t===e?0:t<e?-1:1},$s=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ie(e))},nl=function(t){if(typeof t!="object"||t===null)return Ie(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ie(e[s]),n+=":",n+=nl(t[e[s]]);return n+="}",n},bh=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Te(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const wh=function(t){T(!Xr(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},Pv=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Nv=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Av(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Ov=new RegExp("^-?(0*)\\d{1,10}$"),xv=-2147483648,Dv=2147483647,Xc=function(t){if(Ov.test(t)){const e=Number(t);if(e>=xv&&e<=Dv)return e}return null},Ts=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw He("Exception was thrown by user callback.",n),e},Math.floor(0))}},Mv=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ti=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Lv{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){He(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Fv{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',He(e)}}class tr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}tr.OWNER="owner";/**
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
 */const sl="5",Ih="v",Eh="s",Ch="r",Sh="f",Th=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,kh="ls",Rh="p",pa="ac",Ph="websocket",Nh="long_polling";/**
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
 */class Ah{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=On.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&On.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Uv(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Oh(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===Ph)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Nh)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Uv(t)&&(n.ns=t.namespace);const i=[];return Te(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class $v{constructor(){this.counters_={}}incrementCounter(e,n=1){dt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return jm(this.counters_)}}/**
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
 */const $o={},Ho={};function il(t){const e=t.toString();return $o[e]||($o[e]=new $v),$o[e]}function Hv(t,e){const n=t.toString();return Ho[n]||(Ho[n]=e()),Ho[n]}/**
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
 */class Bv{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ts(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Zc="start",Vv="close",Wv="pLPCommand",jv="pRTLPCB",xh="id",Dh="pw",Mh="ser",Gv="cb",Kv="seg",zv="ts",qv="d",Yv="dframe",Lh=1870,Fh=30,Jv=Lh-Fh,Qv=25e3,Xv=3e4;class Qn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ni(e),this.stats_=il(n),this.urlFn=l=>(this.appCheckToken&&(l[pa]=this.appCheckToken),Oh(n,Nh,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Bv(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Xv)),kv(()=>{if(this.isClosed_)return;this.scriptTagHolder=new rl((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Zc)this.id=a,this.password=l;else if(o===Vv)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Zc]="t",s[Mh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Gv]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ih]=sl,this.transportSessionId&&(s[Eh]=this.transportSessionId),this.lastSessionId&&(s[kh]=this.lastSessionId),this.applicationId&&(s[Rh]=this.applicationId),this.appCheckToken&&(s[pa]=this.appCheckToken),typeof location<"u"&&location.hostname&&Th.test(location.hostname)&&(s[Ch]=Sh);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Qn.forceAllow_=!0}static forceDisallow(){Qn.forceDisallow_=!0}static isAvailable(){return Qn.forceAllow_?!0:!Qn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Pv()&&!Nv()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=sh(n),i=bh(s,Jv);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Yv]="t",s[xh]=e,s[Dh]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ie(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class rl{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=vh(),window[Wv+this.uniqueCallbackIdentifier]=e,window[jv+this.uniqueCallbackIdentifier]=n,this.myIFrame=rl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Se("frame writing exception"),a.stack&&Se(a.stack),Se(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Se("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[xh]=this.myID,e[Dh]=this.myPW,e[Mh]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Fh+s.length<=Lh;){const o=this.pendingSegs.shift();s=s+"&"+Kv+i+"="+o.seg+"&"+zv+i+"="+o.ts+"&"+qv+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Qv)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Zv=16384,ey=45e3;let br=null;typeof MozWebSocket<"u"?br=MozWebSocket:typeof WebSocket<"u"&&(br=WebSocket);class it{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ni(this.connId),this.stats_=il(n),this.connURL=it.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Ih]=sl,typeof location<"u"&&location.hostname&&Th.test(location.hostname)&&(o[Ch]=Sh),n&&(o[Eh]=n),s&&(o[kh]=s),i&&(o[pa]=i),r&&(o[Rh]=r),Oh(e,Ph,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,On.set("previous_websocket_failure",!0);try{let s;tg(),this.mySock=new br(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){it.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&br!==null&&!it.forceDisallow_}static previouslyFailed(){return On.isInMemoryStorage||On.get("previous_websocket_failure")===!0}markConnectionHealthy(){On.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=pi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=bh(n,Zv);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ey))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}it.responsesRequiredToBeHealthy=2;it.healthyTimeout=3e4;/**
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
 */class mi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Qn,it]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=it&&it.isAvailable();let s=n&&!it.previouslyFailed();if(e.webSocketOnly&&(n||He("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[it];else{const i=this.transports_=[];for(const r of mi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);mi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}mi.globalTransportInitialized_=!1;/**
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
 */const ty=6e4,ny=5e3,sy=10*1024,iy=100*1024,Bo="t",eu="d",ry="s",tu="r",oy="e",nu="o",su="a",iu="n",ru="p",ay="h";class ly{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ni("c:"+this.id+":"),this.transportManager_=new mi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ti(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>iy?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>sy?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Bo in e){const n=e[Bo];n===su?this.upgradeIfSecondaryHealthy_():n===tu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===nu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=$s("t",e),s=$s("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ru,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:su,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:iu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=$s("t",e),s=$s("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=$s(Bo,e);if(eu in e){const s=e[eu];if(n===ay){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===iu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ry?this.onConnectionShutdown_(s):n===tu?this.onReset_(s):n===oy?fa("Server Error: "+s):n===nu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):fa("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),sl!==s&&He("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ti(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ty))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ti(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ny))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ru,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(On.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Uh{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class $h{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class wr extends $h{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Xa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new wr}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ou=32,au=768;class ne{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new ne("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function gn(t){return t.pieces_.length-t.pieceNum_}function le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ne(t.pieces_,e)}function ol(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function cy(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function gi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Hh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ne(e,0)}function ve(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ne)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ne(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function $e(t,e){const n=z(t),s=z(e);if(n===null)return e;if(n===s)return $e(le(t),le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function uy(t,e){const n=gi(t,0),s=gi(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=Wn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function al(t,e){if(gn(t)!==gn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function tt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(gn(t)>gn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class dy{constructor(e,n){this.errorPrefix_=n,this.parts_=gi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Qr(this.parts_[s]);Bh(this)}}function hy(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Qr(e),Bh(t)}function fy(t){const e=t.parts_.pop();t.byteLength_-=Qr(e),t.parts_.length>0&&(t.byteLength_-=1)}function Bh(t){if(t.byteLength_>au)throw new Error(t.errorPrefix_+"has a key path longer than "+au+" bytes ("+t.byteLength_+").");if(t.parts_.length>ou)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ou+") or object contains a cycle "+An(t))}function An(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ll extends $h{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new ll}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Hs=1e3,py=60*5*1e3,lu=30*1e3,_y=1.3,my=3e4,gy="server_kill",cu=3;class Bt extends Uh{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Bt.nextPersistentConnectionId_++,this.log_=Ni("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Hs,this.maxReconnectDelay_=py,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ll.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&wr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ie(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new st,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Bt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&dt(e,"w")){const s=Fn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();He(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||lg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=lu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ag(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ie(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):fa("Unrecognized action received from server: "+Ie(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Hs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Hs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>my&&(this.reconnectDelay_=Hs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_y)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Bt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Se("getToken() completed but was canceled"):(Se("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new ly(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{He(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(gy)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&He(d),l())}}}interrupt(e){Se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],mr(this.interruptReasons_)&&(this.reconnectDelay_=Hs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>nl(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ne(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Se("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=cu&&(this.reconnectDelay_=lu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Se("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=cu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+mh.replace(/\./g,"-")]=1,Xa()?e["framework.cordova"]=1:lh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=wr.getInstance().currentlyOnline();return mr(this.interruptReasons_)&&e}}Bt.nextPersistentConnectionId_=0;Bt.nextConnectionId_=0;/**
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
 */class Zr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Y(_s,e),i=new Y(_s,n);return this.compare(s,i)!==0}minPost(){return Y.MIN}}/**
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
 */let zi;class Vh extends Zr{static get __EMPTY_NODE(){return zi}static set __EMPTY_NODE(e){zi=e}compare(e,n){return Wn(e.name,n.name)}isDefinedOn(e){throw Es("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Y.MIN}maxPost(){return new Y($n,zi)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,zi)}toString(){return".key"}}const rs=new Vh;/**
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
 */class qi{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ce{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ce.RED,this.left=i??Ge.EMPTY_NODE,this.right=r??Ge.EMPTY_NODE}copy(e,n,s,i,r){return new Ce(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ge.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ge.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ce.RED=!0;Ce.BLACK=!1;class vy{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ge{constructor(e,n=Ge.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ge(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ce.BLACK,null,null))}remove(e){return new Ge(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ce.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new qi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new qi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new qi(this.root_,null,this.comparator_,!0,e)}}Ge.EMPTY_NODE=new vy;/**
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
 */function yy(t,e){return Wn(t.name,e.name)}function cl(t,e){return Wn(t,e)}/**
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
 */let _a;function by(t){_a=t}const Wh=function(t){return typeof t=="number"?"number:"+wh(t):"string:"+t},jh=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&dt(e,".sv"),"Priority must be a string or number.")}else T(t===_a||t.isEmpty(),"priority of unexpected type.");T(t===_a||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let uu;class Ee{constructor(e,n=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),jh(this.priorityNode_)}static set __childrenNodeConstructor(e){uu=e}static get __childrenNodeConstructor(){return uu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:z(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||gn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Wh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=wh(this.value_):e+=this.value_,this.lazyHash_=yh(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ee.VALUE_TYPE_ORDER.indexOf(n),r=Ee.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Gh,Kh;function wy(t){Gh=t}function Iy(t){Kh=t}class Ey extends Zr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Wn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y($n,new Ee("[PRIORITY-POST]",Kh))}makePost(e,n){const s=Gh(e);return new Y(n,new Ee("[PRIORITY-POST]",s))}toString(){return".priority"}}const _e=new Ey;/**
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
 */const Cy=Math.log(2);class Sy{constructor(e){const n=r=>parseInt(Math.log(r)/Cy,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ir=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new Ce(f,d.node,Ce.BLACK,null,null);{const _=parseInt(u/2,10)+l,y=i(l,_),b=i(_+1,c);return d=t[_],f=n?n(d):d,new Ce(f,d.node,Ce.BLACK,y,b)}},r=function(l){let c=null,u=null,d=t.length;const f=function(y,b){const O=d-y,F=d;d-=y;const G=i(O+1,F),Q=t[O],U=n?n(Q):Q;_(new Ce(U,Q.node,b,null,G))},_=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<l.count;++y){const b=l.nextBitIsOne(),O=Math.pow(2,l.count-(y+1));b?f(O,Ce.BLACK):(f(O,Ce.BLACK),f(O,Ce.RED))}return u},o=new Sy(t.length),a=r(o);return new Ge(s||e,a)};/**
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
 */let Vo;const qn={};class Ft{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(qn&&_e,"ChildrenNode.ts has not been loaded"),Vo=Vo||new Ft({".priority":qn},{".priority":_e}),Vo}get(e){const n=Fn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ge?n:null}hasIndex(e){return dt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==rs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(Y.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ir(s,e.getCompare()):a=qn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Ft(u,c)}addToIndexes(e,n){const s=gr(this.indexes_,(i,r)=>{const o=Fn(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===qn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Y.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ir(a,o.getCompare())}else return qn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Y(e.name,a))),l.insert(e,e.node)}});return new Ft(s,this.indexSet_)}removeFromIndexes(e,n){const s=gr(this.indexes_,i=>{if(i===qn)return i;{const r=n.get(e.name);return r?i.remove(new Y(e.name,r)):i}});return new Ft(s,this.indexSet_)}}/**
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
 */let Bs;class H{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&jh(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Bs||(Bs=new H(new Ge(cl),null,Ft.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bs}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Bs:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Y(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Bs:this.priorityNode_;return new H(i,o,r)}}updateChild(e,n){const s=z(e);if(s===null)return n;{T(z(e)!==".priority"||gn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(le(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(_e,(o,a)=>{n[o]=a.val(e),s++,r&&H.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Wh(this.getPriority().val())+":"),this.forEachChild(_e,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":yh(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Y(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Y(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Y(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Y.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ai?-1:0}withIndex(e){if(e===rs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===rs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(_e),i=n.getIterator(_e);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===rs?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ty extends H{constructor(){super(new Ge(cl),H.EMPTY_NODE,Ft.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const Ai=new Ty;Object.defineProperties(Y,{MIN:{value:new Y(_s,H.EMPTY_NODE)},MAX:{value:new Y($n,Ai)}});Vh.__EMPTY_NODE=H.EMPTY_NODE;Ee.__childrenNodeConstructor=H;by(Ai);Iy(Ai);/**
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
 */const ky=!0;function ge(t,e=null){if(t===null)return H.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ee(n,ge(e))}if(!(t instanceof Array)&&ky){const n=[];let s=!1;if(Te(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ge(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Y(o,l)))}}),n.length===0)return H.EMPTY_NODE;const r=Ir(n,yy,o=>o.name,cl);if(s){const o=Ir(n,_e.getCompare());return new H(r,ge(e),new Ft({".priority":o},{".priority":_e}))}else return new H(r,ge(e),Ft.Default)}else{let n=H.EMPTY_NODE;return Te(t,(s,i)=>{if(dt(t,s)&&s.substring(0,1)!=="."){const r=ge(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ge(e))}}wy(ge);/**
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
 */class Ry extends Zr{constructor(e){super(),this.indexPath_=e,T(!q(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Wn(e.name,n.name):r}makePost(e,n){const s=ge(e),i=H.EMPTY_NODE.updateChild(this.indexPath_,s);return new Y(n,i)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,Ai);return new Y($n,e)}toString(){return gi(this.indexPath_,0).join("/")}}/**
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
 */class Py extends Zr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Wn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,n){const s=ge(e);return new Y(n,s)}toString(){return".value"}}const Ny=new Py;/**
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
 */function zh(t){return{type:"value",snapshotNode:t}}function ms(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function vi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function yi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Ay(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class ul{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(vi(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ms(n,s)):o.trackChildChange(yi(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(_e,(i,r)=>{n.hasChild(i)||s.trackChildChange(vi(i,r))}),n.isLeafNode()||n.forEachChild(_e,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(yi(i,r,o))}else s.trackChildChange(ms(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?H.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class bi{constructor(e){this.indexedFilter_=new ul(e.getIndex()),this.index_=e.getIndex(),this.startPost_=bi.getStartPost_(e),this.endPost_=bi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new Y(n,s))||(s=H.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=H.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(H.EMPTY_NODE);const r=this;return n.forEachChild(_e,(o,a)=>{r.matches(new Y(o,a))||(i=i.updateImmediateChild(o,H.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Oy{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new bi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new Y(n,s))||(s=H.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=H.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=H.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(H.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,H.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,_)=>d(_,f)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new Y(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(yi(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(vi(n,d));const b=a.updateImmediateChild(n,H.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(ms(f.name,f.node)),b.updateImmediateChild(f.name,f.node)):b}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(vi(c.name,c.node)),r.trackChildChange(ms(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,H.EMPTY_NODE)):e}}/**
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
 */class dl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_s}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:$n}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new dl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xy(t){return t.loadsAllData()?new ul(t.getIndex()):t.hasLimit()?new Oy(t):new bi(t)}function du(t){const e={};if(t.isDefault())return e;let n;if(t.index_===_e?n="$priority":t.index_===Ny?n="$value":t.index_===rs?n="$key":(T(t.index_ instanceof Ry,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ie(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ie(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ie(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ie(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ie(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function hu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_e&&(e.i=t.index_.toString()),e}/**
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
 */class Er extends Uh{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ni("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Er.getListenId_(e,s),a={};this.listens_[o]=a;const l=du(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),Fn(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=Er.getListenId_(e,n);delete this.listens_[s]}get(e){const n=du(e._queryParams),s=e._path.toString(),i=new st;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Cs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=pi(a.responseText)}catch{He("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&He("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Dy{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Cr(){return{value:null,children:new Map}}function ks(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=z(e);t.children.has(s)||t.children.set(s,Cr());const i=t.children.get(s);e=le(e),ks(i,e,n)}}function ma(t,e){if(q(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(_e,(s,i)=>{ks(t,new ne(s),i)}),ma(t,e)}}else if(t.children.size>0){const n=z(e);return e=le(e),t.children.has(n)&&ma(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function ga(t,e,n){t.value!==null?n(e,t.value):My(t,(s,i)=>{const r=new ne(e.toString()+"/"+s);ga(i,r,n)})}function My(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Ly{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Te(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const fu=10*1e3,Fy=30*1e3,Uy=5*60*1e3;class $y{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ly(e);const s=fu+(Fy-fu)*Math.random();ti(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Te(e,(i,r)=>{r>0&&dt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ti(this.reportStats_.bind(this),Math.floor(Math.random()*2*Uy))}}/**
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
 */var ot;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ot||(ot={}));function hl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function fl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function pl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Sr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ot.ACK_USER_WRITE,this.source=hl()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ne(e));return new Sr(Z(),n,this.revert)}}else return T(z(this.path)===e,"operationForChild called for unrelated child."),new Sr(le(this.path),this.affectedTree,this.revert)}}/**
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
 */class wi{constructor(e,n){this.source=e,this.path=n,this.type=ot.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new wi(this.source,Z()):new wi(this.source,le(this.path))}}/**
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
 */class Hn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ot.OVERWRITE}operationForChild(e){return q(this.path)?new Hn(this.source,Z(),this.snap.getImmediateChild(e)):new Hn(this.source,le(this.path),this.snap)}}/**
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
 */class gs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ot.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new ne(e));return n.isEmpty()?null:n.value?new Hn(this.source,Z(),n.value):new gs(this.source,Z(),n)}else return T(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gs(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class vn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Hy{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function By(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Ay(o.childName,o.snapshotNode))}),Vs(t,i,"child_removed",e,s,n),Vs(t,i,"child_added",e,s,n),Vs(t,i,"child_moved",r,s,n),Vs(t,i,"child_changed",e,s,n),Vs(t,i,"value",e,s,n),i}function Vs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Wy(t,a,l)),o.forEach(a=>{const l=Vy(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Vy(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Wy(t,e,n){if(e.childName==null||n.childName==null)throw Es("Should only compare child_ events.");const s=new Y(e.childName,e.snapshotNode),i=new Y(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function eo(t,e){return{eventCache:t,serverCache:e}}function ni(t,e,n,s){return eo(new vn(e,n,s),t.serverCache)}function qh(t,e,n,s){return eo(t.eventCache,new vn(e,n,s))}function Tr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Bn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Wo;const jy=()=>(Wo||(Wo=new Ge(Rv)),Wo);class he{constructor(e,n=jy()){this.value=e,this.children=n}static fromObject(e){let n=new he(null);return Te(e,(s,i)=>{n=n.set(new ne(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(q(e))return null;{const s=z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(le(e),n);return r!=null?{path:ve(new ne(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=z(e),s=this.children.get(n);return s!==null?s.subtree(le(e)):new he(null)}}set(e,n){if(q(e))return new he(n,this.children);{const s=z(e),r=(this.children.get(s)||new he(null)).set(le(e),n),o=this.children.insert(s,r);return new he(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new he(null):new he(null,this.children);{const n=z(e),s=this.children.get(n);if(s){const i=s.remove(le(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new he(null):new he(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const n=z(e),s=this.children.get(n);return s?s.get(le(e)):null}}setTree(e,n){if(q(e))return n;{const s=z(e),r=(this.children.get(s)||new he(null)).setTree(le(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new he(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ve(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(q(e))return null;{const r=z(e),o=this.children.get(r);return o?o.findOnPath_(le(e),ve(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,s){if(q(e))return this;{this.value&&s(n,this.value);const i=z(e),r=this.children.get(i);return r?r.foreachOnPath_(le(e),ve(n,i),s):new he(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ve(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class ct{constructor(e){this.writeTree_=e}static empty(){return new ct(new he(null))}}function si(t,e,n){if(q(e))return new ct(new he(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=$e(i,e);return r=r.updateChild(o,n),new ct(t.writeTree_.set(i,r))}else{const i=new he(n),r=t.writeTree_.setTree(e,i);return new ct(r)}}}function va(t,e,n){let s=t;return Te(n,(i,r)=>{s=si(s,ve(e,i),r)}),s}function pu(t,e){if(q(e))return ct.empty();{const n=t.writeTree_.setTree(e,new he(null));return new ct(n)}}function ya(t,e){return jn(t,e)!=null}function jn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild($e(n.path,e)):null}function _u(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_e,(s,i)=>{e.push(new Y(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Y(s,i.value))}),e}function fn(t,e){if(q(e))return t;{const n=jn(t,e);return n!=null?new ct(new he(n)):new ct(t.writeTree_.subtree(e))}}function ba(t){return t.writeTree_.isEmpty()}function vs(t,e){return Yh(Z(),t.writeTree_,e)}function Yh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Yh(ve(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ve(t,".priority"),s)),n}}/**
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
 */function to(t,e){return Zh(e,t)}function Gy(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=si(t.visibleWrites,e,n)),t.lastWriteId=s}function Ky(t,e,n,s){T(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=va(t.visibleWrites,e,n),t.lastWriteId=s}function zy(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function qy(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Yy(a,s.path)?i=!1:tt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Jy(t),!0;if(s.snap)t.visibleWrites=pu(t.visibleWrites,s.path);else{const a=s.children;Te(a,l=>{t.visibleWrites=pu(t.visibleWrites,ve(s.path,l))})}return!0}else return!1}function Yy(t,e){if(t.snap)return tt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&tt(ve(t.path,n),e))return!0;return!1}function Jy(t){t.visibleWrites=Jh(t.allWrites,Qy,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Qy(t){return t.visible}function Jh(t,e,n){let s=ct.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)tt(n,o)?(a=$e(n,o),s=si(s,a,r.snap)):tt(o,n)&&(a=$e(o,n),s=si(s,Z(),r.snap.getChild(a)));else if(r.children){if(tt(n,o))a=$e(n,o),s=va(s,a,r.children);else if(tt(o,n))if(a=$e(o,n),q(a))s=va(s,Z(),r.children);else{const l=Fn(r.children,z(a));if(l){const c=l.getChild(le(a));s=si(s,Z(),c)}}}else throw Es("WriteRecord should have .snap or .children")}}return s}function Qh(t,e,n,s,i){if(!s&&!i){const r=jn(t.visibleWrites,e);if(r!=null)return r;{const o=fn(t.visibleWrites,e);if(ba(o))return n;if(n==null&&!ya(o,Z()))return null;{const a=n||H.EMPTY_NODE;return vs(o,a)}}}else{const r=fn(t.visibleWrites,e);if(!i&&ba(r))return n;if(!i&&n==null&&!ya(r,Z()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(tt(c.path,e)||tt(e,c.path))},a=Jh(t.allWrites,o,e),l=n||H.EMPTY_NODE;return vs(a,l)}}}function Xy(t,e,n){let s=H.EMPTY_NODE;const i=jn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_e,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=fn(t.visibleWrites,e);return n.forEachChild(_e,(o,a)=>{const l=vs(fn(r,new ne(o)),a);s=s.updateImmediateChild(o,l)}),_u(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=fn(t.visibleWrites,e);return _u(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Zy(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ve(e,n);if(ya(t.visibleWrites,r))return null;{const o=fn(t.visibleWrites,r);return ba(o)?i.getChild(n):vs(o,i.getChild(n))}}function eb(t,e,n,s){const i=ve(e,n),r=jn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=fn(t.visibleWrites,i);return vs(o,s.getNode().getImmediateChild(n))}else return null}function tb(t,e){return jn(t.visibleWrites,e)}function nb(t,e,n,s,i,r,o){let a;const l=fn(t.visibleWrites,e),c=jn(l,Z());if(c!=null)a=c;else if(n!=null)a=vs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)d(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function sb(){return{visibleWrites:ct.empty(),allWrites:[],lastWriteId:-1}}function kr(t,e,n,s){return Qh(t.writeTree,t.treePath,e,n,s)}function _l(t,e){return Xy(t.writeTree,t.treePath,e)}function mu(t,e,n,s){return Zy(t.writeTree,t.treePath,e,n,s)}function Rr(t,e){return tb(t.writeTree,ve(t.treePath,e))}function ib(t,e,n,s,i,r){return nb(t.writeTree,t.treePath,e,n,s,i,r)}function ml(t,e,n){return eb(t.writeTree,t.treePath,e,n)}function Xh(t,e){return Zh(ve(t.treePath,e),t.writeTree)}function Zh(t,e){return{treePath:t,writeTree:e}}/**
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
 */class rb{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,yi(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,vi(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,ms(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,yi(s,e.snapshotNode,i.oldSnap));else throw Es("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class ob{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const ef=new ob;class gl{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new vn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ml(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Bn(this.viewCache_),r=ib(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function ab(t){return{filter:t}}function lb(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function cb(t,e,n,s,i){const r=new rb;let o,a;if(n.type===ot.OVERWRITE){const c=n;c.source.fromUser?o=wa(t,e,c.path,c.snap,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!q(c.path),o=Pr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===ot.MERGE){const c=n;c.source.fromUser?o=db(t,e,c.path,c.children,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ia(t,e,c.path,c.children,s,i,a,r))}else if(n.type===ot.ACK_USER_WRITE){const c=n;c.revert?o=pb(t,e,c.path,s,i,r):o=hb(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===ot.LISTEN_COMPLETE)o=fb(t,e,n.path,s,r);else throw Es("Unknown operation type: "+n.type);const l=r.getChanges();return ub(e,o,l),{viewCache:o,changes:l}}function ub(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Tr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(zh(Tr(e)))}}function tf(t,e,n,s,i,r){const o=e.eventCache;if(Rr(s,n)!=null)return e;{let a,l;if(q(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Bn(e),u=c instanceof H?c:H.EMPTY_NODE,d=_l(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=kr(s,Bn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=z(n);if(c===".priority"){T(gn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=mu(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=le(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=mu(s,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=ml(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return ni(e,a,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function Pr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(q(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=z(n);if(!l.isCompleteForPath(n)&&gn(n)>1)return e;const y=le(n),O=l.getNode().getImmediateChild(_).updateChild(y,s);_===".priority"?c=u.updatePriority(l.getNode(),O):c=u.updateChild(l.getNode(),_,O,y,ef,null)}const d=qh(e,c,l.isFullyInitialized()||q(n),u.filtersNodes()),f=new gl(i,d,r);return tf(t,d,n,i,f,a)}function wa(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new gl(i,e,r);if(q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=ni(e,c,!0,t.filter.filtersNodes());else{const d=z(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=ni(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=le(n),_=a.getNode().getImmediateChild(d);let y;if(q(f))y=s;else{const b=u.getCompleteChild(d);b!=null?ol(f)===".priority"&&b.getChild(Hh(f)).isEmpty()?y=b:y=b.updateChild(f,s):y=H.EMPTY_NODE}if(_.equals(y))l=e;else{const b=t.filter.updateChild(a.getNode(),d,y,f,u,o);l=ni(e,b,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function gu(t,e){return t.eventCache.isCompleteForChild(e)}function db(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=ve(n,l);gu(e,z(u))&&(a=wa(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=ve(n,l);gu(e,z(u))||(a=wa(t,a,u,c,i,r,o))}),a}function vu(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ia(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;q(n)?c=s:c=new he(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),y=vu(t,_,f);l=Pr(t,l,new ne(d),y,i,r,o,a)}}),c.children.inorderTraversal((d,f)=>{const _=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!_){const y=e.serverCache.getNode().getImmediateChild(d),b=vu(t,y,f);l=Pr(t,l,new ne(d),b,i,r,o,a)}}),l}function hb(t,e,n,s,i,r,o){if(Rr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Pr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(q(n)){let c=new he(null);return l.getNode().forEachChild(rs,(u,d)=>{c=c.set(new ne(u),d)}),Ia(t,e,n,c,i,r,a,o)}else return e}else{let c=new he(null);return s.foreach((u,d)=>{const f=ve(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Ia(t,e,n,c,i,r,a,o)}}function fb(t,e,n,s,i){const r=e.serverCache,o=qh(e,r.getNode(),r.isFullyInitialized()||q(n),r.isFiltered());return tf(t,o,n,s,ef,i)}function pb(t,e,n,s,i,r){let o;if(Rr(s,n)!=null)return e;{const a=new gl(s,e,i),l=e.eventCache.getNode();let c;if(q(n)||z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=kr(s,Bn(e));else{const d=e.serverCache.getNode();T(d instanceof H,"serverChildren would be complete if leaf node"),u=_l(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=z(n);let d=ml(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,le(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,H.EMPTY_NODE,le(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=kr(s,Bn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Rr(s,Z())!=null,ni(e,c,o,t.filter.filtersNodes())}}/**
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
 */class _b{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new ul(s.getIndex()),r=xy(s);this.processor_=ab(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(H.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(H.EMPTY_NODE,a.getNode(),null),u=new vn(l,o.isFullyInitialized(),i.filtersNodes()),d=new vn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=eo(d,u),this.eventGenerator_=new Hy(this.query_)}get query(){return this.query_}}function mb(t){return t.viewCache_.serverCache.getNode()}function gb(t){return Tr(t.viewCache_)}function vb(t,e){const n=Bn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function yu(t){return t.eventRegistrations_.length===0}function yb(t,e){t.eventRegistrations_.push(e)}function bu(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function wu(t,e,n,s){e.type===ot.MERGE&&e.source.queryId!==null&&(T(Bn(t.viewCache_),"We should always have a full cache before handling merges"),T(Tr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=cb(t.processor_,i,e,n,s);return lb(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,nf(t,r.changes,r.viewCache.eventCache.getNode(),null)}function bb(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(_e,(r,o)=>{s.push(ms(r,o))}),n.isFullyInitialized()&&s.push(zh(n.getNode())),nf(t,s,n.getNode(),e)}function nf(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return By(t.eventGenerator_,e,n,i)}/**
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
 */let Nr;class sf{constructor(){this.views=new Map}}function wb(t){T(!Nr,"__referenceConstructor has already been defined"),Nr=t}function Ib(){return T(Nr,"Reference.ts has not been loaded"),Nr}function Eb(t){return t.views.size===0}function vl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),wu(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(wu(o,e,n,s));return r}}function rf(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=kr(n,i?s:null),l=!1;a?l=!0:s instanceof H?(a=_l(n,s),l=!1):(a=H.EMPTY_NODE,l=!1);const c=eo(new vn(a,l,!1),new vn(s,i,!1));return new _b(e,c)}return o}function Cb(t,e,n,s,i,r){const o=rf(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),yb(o,n),bb(o,n)}function Sb(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=yn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(bu(c,n,s)),yu(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(bu(l,n,s)),yu(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!yn(t)&&r.push(new(Ib())(e._repo,e._path)),{removed:r,events:o}}function of(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function pn(t,e){let n=null;for(const s of t.views.values())n=n||vb(s,e);return n}function af(t,e){if(e._queryParams.loadsAllData())return no(t);{const s=e._queryIdentifier;return t.views.get(s)}}function lf(t,e){return af(t,e)!=null}function yn(t){return no(t)!=null}function no(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ar;function Tb(t){T(!Ar,"__referenceConstructor has already been defined"),Ar=t}function kb(){return T(Ar,"Reference.ts has not been loaded"),Ar}let Rb=1;class Iu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new he(null),this.pendingWriteTree_=sb(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function yl(t,e,n,s,i){return Gy(t.pendingWriteTree_,e,n,s,i),i?Rs(t,new Hn(hl(),e,n)):[]}function Pb(t,e,n,s){Ky(t.pendingWriteTree_,e,n,s);const i=he.fromObject(n);return Rs(t,new gs(hl(),e,i))}function cn(t,e,n=!1){const s=zy(t.pendingWriteTree_,e);if(qy(t.pendingWriteTree_,e)){let r=new he(null);return s.snap!=null?r=r.set(Z(),!0):Te(s.children,o=>{r=r.set(new ne(o),!0)}),Rs(t,new Sr(s.path,r,n))}else return[]}function Oi(t,e,n){return Rs(t,new Hn(fl(),e,n))}function Nb(t,e,n){const s=he.fromObject(n);return Rs(t,new gs(fl(),e,s))}function Ab(t,e){return Rs(t,new wi(fl(),e))}function Ob(t,e,n){const s=bl(t,n);if(s){const i=wl(s),r=i.path,o=i.queryId,a=$e(r,e),l=new wi(pl(o),a);return Il(t,r,l)}else return[]}function Or(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||lf(o,e))){const l=Sb(o,e,n,s);Eb(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(f,_)=>yn(_));if(u&&!d){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=Mb(f);for(let y=0;y<_.length;++y){const b=_[y],O=b.query,F=hf(t,b);t.listenProvider_.startListening(ii(O),Ii(t,O),F.hashFn,F.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(ii(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(io(f));t.listenProvider_.stopListening(ii(f),_)}))}Lb(t,c)}return a}function cf(t,e,n,s){const i=bl(t,s);if(i!=null){const r=wl(i),o=r.path,a=r.queryId,l=$e(o,e),c=new Hn(pl(a),l,n);return Il(t,o,c)}else return[]}function xb(t,e,n,s){const i=bl(t,s);if(i){const r=wl(i),o=r.path,a=r.queryId,l=$e(o,e),c=he.fromObject(n),u=new gs(pl(a),l,c);return Il(t,o,u)}else return[]}function Ea(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const y=$e(f,i);r=r||pn(_,y),o=o||yn(_)});let a=t.syncPointTree_.get(i);a?(o=o||yn(a),r=r||pn(a,Z())):(a=new sf,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=H.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,y)=>{const b=pn(y,Z());b&&(r=r.updateImmediateChild(_,b))}));const c=lf(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=io(e);T(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=Fb();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const u=to(t.pendingWriteTree_,i);let d=Cb(a,e,n,u,r,l);if(!c&&!o&&!s){const f=af(a,e);d=d.concat(Ub(t,e,f))}return d}function so(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=$e(o,e),c=pn(a,l);if(c)return c});return Qh(i,e,r,n,!0)}function Db(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=$e(c,n);s=s||pn(u,d)});let i=t.syncPointTree_.get(n);i?s=s||pn(i,Z()):(i=new sf,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new vn(s,!0,!1):null,a=to(t.pendingWriteTree_,e._path),l=rf(i,e,a,r?o.getNode():H.EMPTY_NODE,r);return gb(l)}function Rs(t,e){return uf(e,t.syncPointTree_,null,to(t.pendingWriteTree_,Z()))}function uf(t,e,n,s){if(q(t.path))return df(t,e,n,s);{const i=e.get(Z());n==null&&i!=null&&(n=pn(i,Z()));let r=[];const o=z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Xh(s,o);r=r.concat(uf(a,l,c,u))}return i&&(r=r.concat(vl(i,t,s,n))),r}}function df(t,e,n,s){const i=e.get(Z());n==null&&i!=null&&(n=pn(i,Z()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Xh(s,o),u=t.operationForChild(o);u&&(r=r.concat(df(u,a,l,c)))}),i&&(r=r.concat(vl(i,t,s,n))),r}function hf(t,e){const n=e.query,s=Ii(t,n);return{hashFn:()=>(mb(e)||H.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Ob(t,n._path,s):Ab(t,n._path);{const r=Av(i,n);return Or(t,n,null,r)}}}}function Ii(t,e){const n=io(e);return t.queryToTagMap.get(n)}function io(t){return t._path.toString()+"$"+t._queryIdentifier}function bl(t,e){return t.tagToQueryMap.get(e)}function wl(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ne(t.substr(0,e))}}function Il(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=to(t.pendingWriteTree_,e);return vl(s,n,i,null)}function Mb(t){return t.fold((e,n,s)=>{if(n&&yn(n))return[no(n)];{let i=[];return n&&(i=of(n)),Te(s,(r,o)=>{i=i.concat(o)}),i}})}function ii(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(kb())(t._repo,t._path):t}function Lb(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=io(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Fb(){return Rb++}function Ub(t,e,n){const s=e._path,i=Ii(t,e),r=hf(t,n),o=t.listenProvider_.startListening(ii(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)T(!yn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!q(c)&&u&&yn(u))return[no(u).query];{let f=[];return u&&(f=f.concat(of(u).map(_=>_.query))),Te(d,(_,y)=>{f=f.concat(y)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(ii(u),Ii(t,u))}}return o}/**
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
 */class El{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new El(n)}node(){return this.node_}}class Cl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ve(this.path_,e);return new Cl(this.syncTree_,n)}node(){return so(this.syncTree_,this.path_)}}const $b=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Eu=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Hb(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Bb(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Hb=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},Bb=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},ff=function(t,e,n,s){return Tl(e,new Cl(n,t),s)},Sl=function(t,e,n){return Tl(t,new El(e),n)};function Tl(t,e,n){const s=t.getPriority().val(),i=Eu(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Eu(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ee(a,ge(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ee(i))),o.forEachChild(_e,(a,l)=>{const c=Tl(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class kl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function ro(t,e){let n=e instanceof ne?e:new ne(e),s=t,i=z(n);for(;i!==null;){const r=Fn(s.node.children,i)||{children:{},childCount:0};s=new kl(i,s,r),n=le(n),i=z(n)}return s}function Gn(t){return t.node.value}function Rl(t,e){t.node.value=e,Ca(t)}function pf(t){return t.node.childCount>0}function Vb(t){return Gn(t)===void 0&&!pf(t)}function oo(t,e){Te(t.node.children,(n,s)=>{e(new kl(n,t,s))})}function _f(t,e,n,s){n&&e(t),oo(t,i=>{_f(i,e,!0)})}function Wb(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function xi(t){return new ne(t.parent===null?t.name:xi(t.parent)+"/"+t.name)}function Ca(t){t.parent!==null&&jb(t.parent,t.name,t)}function jb(t,e,n){const s=Vb(n),i=dt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Ca(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ca(t))}/**
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
 */const Gb=/[\[\].#$\/\u0000-\u001F\u007F]/,Kb=/[\[\].#$\u0000-\u001F\u007F]/,jo=10*1024*1024,Pl=function(t){return typeof t=="string"&&t.length!==0&&!Gb.test(t)},mf=function(t){return typeof t=="string"&&t.length!==0&&!Kb.test(t)},zb=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),mf(t)},Nl=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Xr(t)||t&&typeof t=="object"&&dt(t,".sv")},Sa=function(t,e,n,s){Di(fs(t,"value"),e,n)},Di=function(t,e,n){const s=n instanceof ne?new dy(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+An(s));if(typeof e=="function")throw new Error(t+"contains a function "+An(s)+" with contents = "+e.toString());if(Xr(e))throw new Error(t+"contains "+e.toString()+" "+An(s));if(typeof e=="string"&&e.length>jo/3&&Qr(e)>jo)throw new Error(t+"contains a string greater than "+jo+" utf8 bytes "+An(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Te(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Pl(o)))throw new Error(t+" contains an invalid key ("+o+") "+An(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hy(s,o),Di(t,a,s),fy(s)}),i&&r)throw new Error(t+' contains ".value" child '+An(s)+" in addition to actual children.")}},qb=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=gi(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Pl(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(uy);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&tt(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},gf=function(t,e,n,s){const i=fs(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Te(e,(o,a)=>{const l=new ne(o);if(Di(i,a,ve(n,l)),ol(l)===".priority"&&!Nl(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),qb(i,r)},Yb=function(t,e,n){if(Xr(e))throw new Error(fs(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Nl(e))throw new Error(fs(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},vf=function(t,e,n,s){if(!mf(n))throw new Error(fs(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Jb=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),vf(t,e,n)},Xn=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Qb=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Pl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!zb(n))throw new Error(fs(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Xb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ao(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!al(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function yf(t,e,n){ao(t,n),bf(t,s=>al(s,e))}function Qe(t,e,n){ao(t,n),bf(t,s=>tt(s,e)||tt(e,s))}function bf(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Zb(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Zb(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ei&&Se("event: "+n.toString()),Ts(s)}}}/**
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
 */const ew="repo_interrupt",tw=25;class nw{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Xb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Cr(),this.transactionQueueTree_=new kl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sw(t,e,n){if(t.stats_=il(t.repoInfo_),t.forceRestClient_||Mv())t.server_=new Er(t.repoInfo_,(s,i,r,o)=>{Cu(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Su(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ie(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Bt(t.repoInfo_,e,(s,i,r,o)=>{Cu(t,s,i,r,o)},s=>{Su(t,s)},s=>{rw(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Hv(t.repoInfo_,()=>new $y(t.stats_,t.server_)),t.infoData_=new Dy,t.infoSyncTree_=new Iu({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Oi(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Al(t,"connected",!1),t.serverSyncTree_=new Iu({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Qe(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function iw(t){const n=t.infoData_.getNode(new ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Mi(t){return $b({timestamp:iw(t)})}function Cu(t,e,n,s,i){t.dataUpdateCount++;const r=new ne(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=gr(n,c=>ge(c));o=xb(t.serverSyncTree_,r,l,i)}else{const l=ge(n);o=cf(t.serverSyncTree_,r,l,i)}else if(s){const l=gr(n,c=>ge(c));o=Nb(t.serverSyncTree_,r,l)}else{const l=ge(n);o=Oi(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=ys(t,r)),Qe(t.eventQueue_,a,o)}function Su(t,e){Al(t,"connected",e),e===!1&&cw(t)}function rw(t,e){Te(e,(n,s)=>{Al(t,n,s)})}function Al(t,e,n){const s=new ne("/.info/"+e),i=ge(n);t.infoData_.updateSnapshot(s,i);const r=Oi(t.infoSyncTree_,s,i);Qe(t.eventQueue_,s,r)}function lo(t){return t.nextWriteId_++}function ow(t,e,n){const s=Db(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=ge(i).withIndex(e._queryParams.getIndex());Ea(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Oi(t.serverSyncTree_,e._path,r);else{const a=Ii(t.serverSyncTree_,e);o=cf(t.serverSyncTree_,e._path,r,a)}return Qe(t.eventQueue_,e._path,o),Or(t.serverSyncTree_,e,n,null,!0),r},i=>(Ps(t,"get for query "+Ie(e)+" failed: "+i),Promise.reject(new Error(i))))}function aw(t,e,n,s,i){Ps(t,"set",{path:e.toString(),value:n,priority:s});const r=Mi(t),o=ge(n,s),a=so(t.serverSyncTree_,e),l=Sl(o,a,r),c=lo(t),u=yl(t.serverSyncTree_,e,l,c,!0);ao(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const y=f==="ok";y||He("set at "+e+" failed: "+f);const b=cn(t.serverSyncTree_,c,!y);Qe(t.eventQueue_,e,b),bn(t,i,f,_)});const d=xl(t,e);ys(t,d),Qe(t.eventQueue_,d,[])}function lw(t,e,n,s){Ps(t,"update",{path:e.toString(),value:n});let i=!0;const r=Mi(t),o={};if(Te(n,(a,l)=>{i=!1,o[a]=ff(ve(e,a),ge(l),t.serverSyncTree_,r)}),i)Se("update() called with empty data.  Don't do anything."),bn(t,s,"ok",void 0);else{const a=lo(t),l=Pb(t.serverSyncTree_,e,o,a);ao(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||He("update at "+e+" failed: "+c);const f=cn(t.serverSyncTree_,a,!d),_=f.length>0?ys(t,e):e;Qe(t.eventQueue_,_,f),bn(t,s,c,u)}),Te(n,c=>{const u=xl(t,ve(e,c));ys(t,u)}),Qe(t.eventQueue_,e,[])}}function cw(t){Ps(t,"onDisconnectEvents");const e=Mi(t),n=Cr();ga(t.onDisconnect_,Z(),(i,r)=>{const o=ff(i,r,t.serverSyncTree_,e);ks(n,i,o)});let s=[];ga(n,Z(),(i,r)=>{s=s.concat(Oi(t.serverSyncTree_,i,r));const o=xl(t,i);ys(t,o)}),t.onDisconnect_=Cr(),Qe(t.eventQueue_,Z(),s)}function uw(t,e,n){t.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&ma(t.onDisconnect_,e),bn(t,n,s,i)})}function Tu(t,e,n,s){const i=ge(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&ks(t.onDisconnect_,e,i),bn(t,s,r,o)})}function dw(t,e,n,s,i){const r=ge(n,s);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&ks(t.onDisconnect_,e,r),bn(t,i,o,a)})}function hw(t,e,n,s){if(mr(n)){Se("onDisconnect().update() called with empty data.  Don't do anything."),bn(t,s,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,r)=>{i==="ok"&&Te(n,(o,a)=>{const l=ge(a);ks(t.onDisconnect_,ve(e,o),l)}),bn(t,s,i,r)})}function fw(t,e,n){let s;z(e._path)===".info"?s=Ea(t.infoSyncTree_,e,n):s=Ea(t.serverSyncTree_,e,n),yf(t.eventQueue_,e._path,s)}function wf(t,e,n){let s;z(e._path)===".info"?s=Or(t.infoSyncTree_,e,n):s=Or(t.serverSyncTree_,e,n),yf(t.eventQueue_,e._path,s)}function pw(t){t.persistentConnection_&&t.persistentConnection_.interrupt(ew)}function Ps(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Se(n,...e)}function bn(t,e,n,s){e&&Ts(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function _w(t,e,n,s,i,r){Ps(t,"transaction on "+e);const o={path:e,update:n,onComplete:s,status:null,order:vh(),applyLocally:r,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Ol(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Di("transaction failed: Data returned ",l,o.path),o.status=0;const c=ro(t.transactionQueueTree_,e),u=Gn(c)||[];u.push(o),Rl(c,u);let d;typeof l=="object"&&l!==null&&dt(l,".priority")?(d=Fn(l,".priority"),T(Nl(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=(so(t.serverSyncTree_,e)||H.EMPTY_NODE).getPriority().val();const f=Mi(t),_=ge(l,d),y=Sl(_,a,f);o.currentOutputSnapshotRaw=_,o.currentOutputSnapshotResolved=y,o.currentWriteId=lo(t);const b=yl(t.serverSyncTree_,e,y,o.currentWriteId,o.applyLocally);Qe(t.eventQueue_,e,b),co(t,t.transactionQueueTree_)}}function Ol(t,e,n){return so(t.serverSyncTree_,e,n)||H.EMPTY_NODE}function co(t,e=t.transactionQueueTree_){if(e||uo(t,e),Gn(e)){const n=Ef(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&mw(t,xi(e),n)}else pf(e)&&oo(e,n=>{co(t,n)})}function mw(t,e,n){const s=n.map(c=>c.currentWriteId),i=Ol(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=$e(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ps(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(cn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();uo(t,ro(t.transactionQueueTree_,e)),co(t,t.transactionQueueTree_),Qe(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)Ts(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{He("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}ys(t,e)}},o)}function ys(t,e){const n=If(t,e),s=xi(n),i=Ef(t,n);return gw(t,i,s),s}function gw(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=$e(n,l.path);let u=!1,d;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(cn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=tw)u=!0,d="maxretry",i=i.concat(cn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Ol(t,l.path,o);l.currentInputSnapshot=f;const _=e[a].update(f.val());if(_!==void 0){Di("transaction failed: Data returned ",_,l.path);let y=ge(_);typeof _=="object"&&_!=null&&dt(_,".priority")||(y=y.updatePriority(f.getPriority()));const O=l.currentWriteId,F=Mi(t),G=Sl(y,f,F);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=G,l.currentWriteId=lo(t),o.splice(o.indexOf(O),1),i=i.concat(yl(t.serverSyncTree_,l.path,G,l.currentWriteId,l.applyLocally)),i=i.concat(cn(t.serverSyncTree_,O,!0))}else u=!0,d="nodata",i=i.concat(cn(t.serverSyncTree_,l.currentWriteId,!0))}Qe(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}uo(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ts(s[a]);co(t,t.transactionQueueTree_)}function If(t,e){let n,s=t.transactionQueueTree_;for(n=z(e);n!==null&&Gn(s)===void 0;)s=ro(s,n),e=le(e),n=z(e);return s}function Ef(t,e){const n=[];return Cf(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Cf(t,e,n){const s=Gn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);oo(e,i=>{Cf(t,i,n)})}function uo(t,e){const n=Gn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Rl(e,n.length>0?n:void 0)}oo(e,s=>{uo(t,s)})}function xl(t,e){const n=xi(If(t,e)),s=ro(t.transactionQueueTree_,e);return Wb(s,i=>{Go(t,i)}),Go(t,s),_f(s,i=>{Go(t,i)}),n}function Go(t,e){const n=Gn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(cn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Rl(e,void 0):n.length=r+1,Qe(t.eventQueue_,xi(e),i);for(let o=0;o<s.length;o++)Ts(s[o])}}/**
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
 */function vw(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function yw(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):He(`Invalid query segment '${n}' in query '${t}'`)}return e}const ku=function(t,e){const n=bw(t),s=n.namespace;n.domain==="firebase.com"&&zt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&zt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Tv();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ah(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ne(n.pathString)}},bw=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=vw(t.substring(u,d)));const f=yw(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const y=e.indexOf(".");s=e.substring(0,y).toLowerCase(),n=e.substring(y+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class ww{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ie(this.snapshot.exportVal())}}class Iw{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Sf{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ew{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new st;return uw(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Xn("OnDisconnect.remove",this._path);const e=new st;return Tu(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Xn("OnDisconnect.set",this._path),Sa("OnDisconnect.set",e,this._path);const n=new st;return Tu(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Xn("OnDisconnect.setWithPriority",this._path),Sa("OnDisconnect.setWithPriority",e,this._path),Yb("OnDisconnect.setWithPriority",n);const s=new st;return dw(this._repo,this._path,e,n,s.wrapCallback(()=>{})),s.promise}update(e){Xn("OnDisconnect.update",this._path),gf("OnDisconnect.update",e,this._path);const n=new st;return hw(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class Dl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return q(this._path)?null:ol(this._path)}get ref(){return new Pt(this._repo,this._path)}get _queryIdentifier(){const e=hu(this._queryParams),n=nl(e);return n==="{}"?"default":n}get _queryObject(){return hu(this._queryParams)}isEqual(e){if(e=Pe(e),!(e instanceof Dl))return!1;const n=this._repo===e._repo,s=al(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+cy(this._path)}}class Pt extends Dl{constructor(e,n){super(e,n,new dl,!1)}get parent(){const e=Hh(this._path);return e===null?null:new Pt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class bs{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ne(e),s=Ta(this.ref,e);return new bs(this._node.getChild(n),s,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new bs(i,Ta(this.ref,s),_e)))}hasChild(e){const n=new ne(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ve(t,e){return t=Pe(t),t._checkNotDeleted("ref"),e!==void 0?Ta(t._root,e):t._root}function Ta(t,e){return t=Pe(t),z(t._path)===null?Jb("child","path",e):vf("child","path",e),new Pt(t._repo,ve(t._path,e))}function Tf(t){return t=Pe(t),new Ew(t._repo,t._path)}function Ns(t,e){t=Pe(t),Xn("set",t._path),Sa("set",e,t._path);const n=new st;return aw(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Cw(t,e){gf("update",e,t._path);const n=new st;return lw(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function ho(t){t=Pe(t);const e=new Sf(()=>{}),n=new fo(e);return ow(t._repo,t,n).then(s=>new bs(s,new Pt(t._repo,t._path),t._queryParams.getIndex()))}class fo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new ww("value",this,new bs(e.snapshotNode,new Pt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Iw(this,e,n):null}matches(e){return e instanceof fo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Sw(t,e,n,s,i){const r=new Sf(n,void 0),o=new fo(r);return fw(t._repo,t,o),()=>wf(t._repo,t,o)}function po(t,e,n,s){return Sw(t,"value",e)}function ri(t,e,n){wf(t._repo,t,null)}wb(Pt);Tb(Pt);/**
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
 */const Tw="FIREBASE_DATABASE_EMULATOR_HOST",ka={};let kw=!1;function Rw(t,e,n,s){t.repoInfo_=new Ah(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Pw(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||zt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Se("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ku(r,i),a=o.repoInfo,l;typeof process<"u"&&qc&&(l=qc[Tw]),l?(r=`http://${l}?ns=${a.namespace}`,o=ku(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new Fv(t.name,t.options,e);Qb("Invalid Firebase Database URL",o),q(o.path)||zt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Aw(a,t,c,new Lv(t.name,n));return new Ow(u,t)}function Nw(t,e){const n=ka[e];(!n||n[t.key]!==t)&&zt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),pw(t),delete n[t.key]}function Aw(t,e,n,s){let i=ka[e.name];i||(i={},ka[e.name]=i);let r=i[t.toURLString()];return r&&zt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new nw(t,kw,n,s),i[t.toURLString()]=r,r}class Ow{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sw(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Pt(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Nw(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&zt("Cannot call "+e+" on a deleted database.")}}function xw(t=fh(),e){const n=tl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Jm("database");s&&Dw(n,...s)}return n}function Dw(t,e,n,s={}){t=Pe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&zt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&zt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new tr(tr.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Qm(s.mockUserToken,t.app.options.projectId);r=new tr(o)}Rw(i,e,n,r)}/**
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
 */function Mw(t){wv(Ss),ps(new Un("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Pw(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),hn(Yc,Jc,t),hn(Yc,Jc,"esm2017")}/**
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
 */class Lw{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function Fw(t,e,n){var s;if(t=Pe(t),Xn("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(s=void 0)!==null&&s!==void 0?s:!0,r=new st,o=(l,c,u)=>{let d=null;l?r.reject(l):(d=new bs(u,new Pt(t._repo,t._path),_e),r.resolve(new Lw(c,d)))},a=po(t,()=>{});return _w(t._repo,t._path,e,o,a,i),r.promise}Bt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Bt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Mw();function Ml(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function kf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Uw=kf,Rf=new Ri("auth","Firebase",kf());/**
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
 */const xr=new Za("@firebase/auth");function $w(t,...e){xr.logLevel<=se.WARN&&xr.warn(`Auth (${Ss}): ${t}`,...e)}function nr(t,...e){xr.logLevel<=se.ERROR&&xr.error(`Auth (${Ss}): ${t}`,...e)}/**
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
 */function qt(t,...e){throw Ll(t,...e)}function St(t,...e){return Ll(t,...e)}function Pf(t,e,n){const s=Object.assign(Object.assign({},Uw()),{[e]:n});return new Ri("auth","Firebase",s).create(e,{appName:t.name})}function _n(t){return Pf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ll(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Rf.create(t,...e)}function V(t,e,...n){if(!t)throw Ll(e,...n)}function Ut(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nr(e),new Error(e)}function Yt(t,e){t||Ut(e)}/**
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
 */function Ra(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Hw(){return Ru()==="http:"||Ru()==="https:"}function Ru(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Bw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hw()||Zm()||"connection"in navigator)?navigator.onLine:!0}function Vw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Li{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yt(n>e,"Short delay should be less than long delay!"),this.isMobile=Xa()||lh()}get(){return Bw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fl(t,e){Yt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Nf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ww={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const jw=new Li(3e4,6e4);function _o(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function As(t,e,n,s,i={}){return Af(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Cs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},r);return Xm()||(c.referrerPolicy="no-referrer"),Nf.fetch()(xf(t,t.config.apiHost,n,a),c)})}async function Af(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Ww),e);try{const i=new Gw(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Yi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Yi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Yi(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Pf(t,u,c);qt(t,u)}}catch(i){if(i instanceof En)throw i;qt(t,"network-request-failed",{message:String(i)})}}async function Of(t,e,n,s,i={}){const r=await As(t,e,n,s,i);return"mfaPendingCredential"in r&&qt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function xf(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Fl(t.config,i):`${t.config.apiScheme}://${i}`}class Gw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(St(this.auth,"network-request-failed")),jw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=St(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function Kw(t,e){return As(t,"POST","/v1/accounts:delete",e)}async function Df(t,e){return As(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function oi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zw(t,e=!1){const n=Pe(t),s=await n.getIdToken(e),i=Ul(s);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:oi(Ko(i.auth_time)),issuedAtTime:oi(Ko(i.iat)),expirationTime:oi(Ko(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ko(t){return Number(t)*1e3}function Ul(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return nr("JWT malformed, contained fewer than 3 sections"),null;try{const i=_r(n);return i?JSON.parse(i):(nr("Failed to decode base64 JWT payload"),null)}catch(i){return nr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Pu(t){const e=Ul(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ei(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof En&&qw(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function qw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Yw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Pa{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=oi(this.lastLoginAt),this.creationTime=oi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Dr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Ei(t,Df(n,{idToken:s}));V(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Mf(r.providerUserInfo):[],a=Qw(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Pa(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Jw(t){const e=Pe(t);await Dr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qw(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Mf(t){return t.map(e=>{var{providerId:n}=e,s=Ml(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Xw(t,e){const n=await Af(t,{},async()=>{const s=Cs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=xf(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Nf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Zw(t,e){return As(t,"POST","/v2/accounts:revokeToken",_o(t,e))}/**
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
 */class os{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){V(e.length!==0,"internal-error");const n=Pu(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Xw(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new os;return s&&(V(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(V(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(V(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new os,this.toJSON())}_performRefresh(){return Ut("not implemented")}}/**
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
 */function en(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $t{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Ml(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Yw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Pa(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ei(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zw(this,e)}reload(){return Jw(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Dr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Lt(this.auth.app))return Promise.reject(_n(this.auth));const e=await this.getIdToken();return await Ei(this,Kw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,F=(c=n.createdAt)!==null&&c!==void 0?c:void 0,G=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:Q,emailVerified:U,isAnonymous:ye,providerData:Ze,stsTokenManager:Ke}=n;V(Q&&Ke,e,"internal-error");const ft=os.fromJSON(this.name,Ke);V(typeof Q=="string",e,"internal-error"),en(d,e.name),en(f,e.name),V(typeof U=="boolean",e,"internal-error"),V(typeof ye=="boolean",e,"internal-error"),en(_,e.name),en(y,e.name),en(b,e.name),en(O,e.name),en(F,e.name),en(G,e.name);const Zt=new $t({uid:Q,auth:e,email:f,emailVerified:U,displayName:d,isAnonymous:ye,photoURL:y,phoneNumber:_,tenantId:b,stsTokenManager:ft,createdAt:F,lastLoginAt:G});return Ze&&Array.isArray(Ze)&&(Zt.providerData=Ze.map(Nt=>Object.assign({},Nt))),O&&(Zt._redirectEventId=O),Zt}static async _fromIdTokenResponse(e,n,s=!1){const i=new os;i.updateFromServerResponse(n);const r=new $t({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Dr(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];V(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Mf(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new os;a.updateFromIdToken(s);const l=new $t({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Pa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const Nu=new Map;function Ht(t){Yt(t instanceof Function,"Expected a class definition");let e=Nu.get(t);return e?(Yt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Nu.set(t,e),e)}/**
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
 */class Lf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Lf.type="NONE";const Au=Lf;/**
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
 */function sr(t,e,n){return`firebase:${t}:${e}:${n}`}class as{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=sr(this.userKey,i.apiKey,r),this.fullPersistenceKey=sr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$t._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new as(Ht(Au),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Ht(Au);const o=sr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=$t._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new as(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new as(r,e,s))}}/**
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
 */function Ou(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ff(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vf(e))return"Blackberry";if(Wf(e))return"Webos";if(Uf(e))return"Safari";if((e.includes("chrome/")||$f(e))&&!e.includes("edge/"))return"Chrome";if(Bf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ff(t=Be()){return/firefox\//i.test(t)}function Uf(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $f(t=Be()){return/crios\//i.test(t)}function Hf(t=Be()){return/iemobile/i.test(t)}function Bf(t=Be()){return/android/i.test(t)}function Vf(t=Be()){return/blackberry/i.test(t)}function Wf(t=Be()){return/webos/i.test(t)}function $l(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eI(t=Be()){var e;return $l(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tI(){return eg()&&document.documentMode===10}function jf(t=Be()){return $l(t)||Bf(t)||Wf(t)||Vf(t)||/windows phone/i.test(t)||Hf(t)}/**
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
 */function Gf(t,e=[]){let n;switch(t){case"Browser":n=Ou(Be());break;case"Worker":n=`${Ou(Be())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ss}/${s}`}/**
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
 */class nI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function sI(t,e={}){return As(t,"GET","/v2/passwordPolicy",_o(t,e))}/**
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
 */const iI=6;class rI{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:iI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class oI{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xu(this),this.idTokenSubscription=new xu(this),this.beforeStateQueue=new nI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await as.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Df(this,{idToken:e}),s=await $t._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Dr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Vw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Lt(this.app))return Promise.reject(_n(this));const n=e?Pe(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Lt(this.app)?Promise.reject(_n(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Lt(this.app)?Promise.reject(_n(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sI(this),n=new rI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ri("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Zw(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ht(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await as.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$w(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function mo(t){return Pe(t)}class xu{constructor(e){this.auth=e,this.observer=null,this.addObserver=ug(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Hl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aI(t){Hl=t}function lI(t){return Hl.loadJS(t)}function cI(){return Hl.gapiScript}function uI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function dI(t,e){const n=tl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(vr(r,e??{}))return i;qt(i,"already-initialized")}return n.initialize({options:e})}function hI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function fI(t,e,n){const s=mo(t);V(s._canInitEmulator,s,"emulator-config-failed"),V(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Kf(e),{host:o,port:a}=pI(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),_I()}function Kf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pI(t){const e=Kf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Du(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Du(o)}}}function Du(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _I(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class zf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ut("not implemented")}_getIdTokenResponse(e){return Ut("not implemented")}_linkToIdToken(e,n){return Ut("not implemented")}_getReauthenticationResolver(e){return Ut("not implemented")}}/**
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
 */async function ls(t,e){return Of(t,"POST","/v1/accounts:signInWithIdp",_o(t,e))}/**
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
 */const mI="http://localhost";class Vn extends zf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Ml(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Vn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ls(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ls(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ls(e,n)}buildRequest(){const e={requestUri:mI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Cs(n)}return e}}/**
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
 */class qf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fi extends qf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class sn extends Fi{constructor(){super("facebook.com")}static credential(e){return Vn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";sn.PROVIDER_ID="facebook.com";/**
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
 */class rn extends Fi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return rn.credential(n,s)}catch{return null}}}rn.GOOGLE_SIGN_IN_METHOD="google.com";rn.PROVIDER_ID="google.com";/**
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
 */class on extends Fi{constructor(){super("github.com")}static credential(e){return Vn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.GITHUB_SIGN_IN_METHOD="github.com";on.PROVIDER_ID="github.com";/**
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
 */class an extends Fi{constructor(){super("twitter.com")}static credential(e,n){return Vn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return an.credential(n,s)}catch{return null}}}an.TWITTER_SIGN_IN_METHOD="twitter.com";an.PROVIDER_ID="twitter.com";/**
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
 */async function gI(t,e){return Of(t,"POST","/v1/accounts:signUp",_o(t,e))}/**
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
 */class wn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await $t._fromIdTokenResponse(e,s,i),o=Mu(s);return new wn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Mu(s);return new wn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Mu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function vI(t){var e;if(Lt(t.app))return Promise.reject(_n(t));const n=mo(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new wn({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await gI(n,{returnSecureToken:!0}),i=await wn._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Mr extends En{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Mr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Mr(e,n,s,i)}}function Yf(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Mr._fromErrorAndOperation(t,r,e,s):r})}async function yI(t,e,n=!1){const s=await Ei(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return wn._forOperation(t,"link",s)}/**
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
 */async function bI(t,e,n=!1){const{auth:s}=t;if(Lt(s.app))return Promise.reject(_n(s));const i="reauthenticate";try{const r=await Ei(t,Yf(s,i,e,t),n);V(r.idToken,s,"internal-error");const o=Ul(r.idToken);V(o,s,"internal-error");const{sub:a}=o;return V(t.uid===a,s,"user-mismatch"),wn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&qt(s,"user-mismatch"),r}}/**
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
 */async function wI(t,e,n=!1){if(Lt(t.app))return Promise.reject(_n(t));const s="signIn",i=await Yf(t,s,e),r=await wn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}/**
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
 */function II(t,e){return Pe(t).setPersistence(e)}function EI(t,e,n,s){return Pe(t).onIdTokenChanged(e,n,s)}function CI(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}function SI(t,e,n,s){return Pe(t).onAuthStateChanged(e,n,s)}function TI(t){return Pe(t).signOut()}const Lr="__sak";/**
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
 */class Jf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Lr,"1"),this.storage.removeItem(Lr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const kI=1e3,RI=10;class Qf extends Jf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);tI()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,RI):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},kI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qf.type="LOCAL";const PI=Qf;/**
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
 */class Xf extends Jf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xf.type="SESSION";const Bl=Xf;/**
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
 */function NI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class go{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new go(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await NI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}go.receivers=[];/**
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
 */function Vl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class AI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Vl("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Tt(){return window}function OI(t){Tt().location.href=t}/**
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
 */function Zf(){return typeof Tt().WorkerGlobalScope<"u"&&typeof Tt().importScripts=="function"}async function xI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function MI(){return Zf()?self:null}/**
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
 */const ep="firebaseLocalStorageDb",LI=1,Fr="firebaseLocalStorage",tp="fbase_key";class Ui{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vo(t,e){return t.transaction([Fr],e?"readwrite":"readonly").objectStore(Fr)}function FI(){const t=indexedDB.deleteDatabase(ep);return new Ui(t).toPromise()}function Na(){const t=indexedDB.open(ep,LI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Fr,{keyPath:tp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Fr)?e(s):(s.close(),await FI(),e(await Na()))})})}async function Lu(t,e,n){const s=vo(t,!0).put({[tp]:e,value:n});return new Ui(s).toPromise()}async function UI(t,e){const n=vo(t,!1).get(e),s=await new Ui(n).toPromise();return s===void 0?null:s.value}function Fu(t,e){const n=vo(t,!0).delete(e);return new Ui(n).toPromise()}const $I=800,HI=3;class np{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Na(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>HI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=go._getInstance(MI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await xI(),!this.activeServiceWorker)return;this.sender=new AI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Na();return await Lu(e,Lr,"1"),await Fu(e,Lr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Lu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>UI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=vo(i,!1).getAll();return new Ui(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$I)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}np.type="LOCAL";const BI=np;new Li(3e4,6e4);/**
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
 */function VI(t,e){return e?Ht(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Wl extends zf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function WI(t){return wI(t.auth,new Wl(t),t.bypassAuthState)}function jI(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),bI(n,new Wl(t),t.bypassAuthState)}async function GI(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),yI(n,new Wl(t),t.bypassAuthState)}/**
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
 */class sp{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WI;case"linkViaPopup":case"linkViaRedirect":return GI;case"reauthViaPopup":case"reauthViaRedirect":return jI;default:qt(this.auth,"internal-error")}}resolve(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const KI=new Li(2e3,1e4);class Zn extends sp{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Zn.currentPopupAction&&Zn.currentPopupAction.cancel(),Zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){Yt(this.filter.length===1,"Popup operations only handle one event");const e=Vl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,KI.get())};e()}}Zn.currentPopupAction=null;/**
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
 */const zI="pendingRedirect",ir=new Map;class qI extends sp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ir.get(this.auth._key());if(!e){try{const s=await YI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ir.set(this.auth._key(),e)}return this.bypassAuthState||ir.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YI(t,e){const n=XI(e),s=QI(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function JI(t,e){ir.set(t._key(),e)}function QI(t){return Ht(t._redirectPersistence)}function XI(t){return sr(zI,t.config.apiKey,t.name)}async function ZI(t,e,n=!1){if(Lt(t.app))return Promise.reject(_n(t));const s=mo(t),i=VI(s,e),o=await new qI(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const eE=10*60*1e3;class tE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ip(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(St(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uu(e))}saveEventToCache(e){this.cachedEventUids.add(Uu(e)),this.lastProcessedEventTime=Date.now()}}function Uu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ip({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ip(t);default:return!1}}/**
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
 */async function sE(t,e={}){return As(t,"GET","/v1/projects",e)}/**
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
 */const iE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rE=/^https?/;async function oE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sE(t);for(const n of e)try{if(aE(n))return}catch{}qt(t,"unauthorized-domain")}function aE(t){const e=Ra(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!rE.test(n))return!1;if(iE.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const lE=new Li(3e4,6e4);function $u(){const t=Tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cE(t){return new Promise((e,n)=>{var s,i,r;function o(){$u(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$u(),n(St(t,"network-request-failed"))},timeout:lE.get()})}if(!((i=(s=Tt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Tt().gapi)===null||r===void 0)&&r.load)o();else{const a=uI("iframefcb");return Tt()[a]=()=>{gapi.load?o():n(St(t,"network-request-failed"))},lI(`${cI()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw rr=null,e})}let rr=null;function uE(t){return rr=rr||cE(t),rr}/**
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
 */const dE=new Li(5e3,15e3),hE="__/auth/iframe",fE="emulator/auth/iframe",pE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_E=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mE(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fl(e,fE):`https://${t.config.authDomain}/${hE}`,s={apiKey:e.apiKey,appName:t.name,v:Ss},i=_E.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Cs(s).slice(1)}`}async function gE(t){const e=await uE(t),n=Tt().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:mE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pE,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=St(t,"network-request-failed"),a=Tt().setTimeout(()=>{r(o)},dE.get());function l(){Tt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const vE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yE=500,bE=600,wE="_blank",IE="http://localhost";class Hu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function EE(t,e,n,s=yE,i=bE){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},vE),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Be().toLowerCase();n&&(a=$f(c)?wE:n),Ff(c)&&(e=e||IE,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[_,y])=>`${f}${_}=${y},`,"");if(eI(c)&&a!=="_self")return CE(e||"",a),new Hu(null);const d=window.open(e||"",a,u);V(d,t,"popup-blocked");try{d.focus()}catch{}return new Hu(d)}function CE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const SE="__/auth/handler",TE="emulator/auth/handler",kE=encodeURIComponent("fac");async function Bu(t,e,n,s,i,r){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ss,eventId:i};if(e instanceof qf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",mr(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Fi){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${kE}=${encodeURIComponent(l)}`:"";return`${RE(t)}?${Cs(a).slice(1)}${c}`}function RE({config:t}){return t.emulator?Fl(t,TE):`https://${t.authDomain}/${SE}`}/**
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
 */const zo="webStorageSupport";class PE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bl,this._completeRedirectFn=ZI,this._overrideRedirectResult=JI}async _openPopup(e,n,s,i){var r;Yt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Bu(e,n,s,Ra(),i);return EE(e,o,Vl())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Bu(e,n,s,Ra(),i);return OI(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Yt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await gE(e),s=new tE(e);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zo,{type:zo},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[zo];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jf()||Uf()||$l()}}const NE=PE;var Vu="@firebase/auth",Wu="1.7.9";/**
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
 */class AE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function OE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xE(t){ps(new Un("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gf(t)},c=new oI(s,i,r,l);return hI(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ps(new Un("auth-internal",e=>{const n=mo(e.getProvider("auth").getImmediate());return(s=>new AE(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(Vu,Wu,OE(t)),hn(Vu,Wu,"esm2017")}/**
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
 */const DE=5*60,ME=ah("authIdTokenMaxAge")||DE;let ju=null;const LE=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>ME)return;const i=n==null?void 0:n.token;ju!==i&&(ju=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function FE(t=fh()){const e=tl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dI(t,{popupRedirectResolver:NE,persistence:[BI,PI,Bl]}),s=ah("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=LE(r.toString());CI(n,o,()=>o(n.currentUser)),EI(n,a=>o(a))}}const i=rh("auth");return i&&fI(n,`http://${i}`),n}function UE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}aI({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=St("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",UE().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xE("Browser");var $E="firebase",HE="10.14.1";/**
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
 */hn($E,HE,"app");const BE={apiKey:"AIzaSyDzJsJYfTcWaeC5f43EXG-brzAaY7_BBk8",authDomain:"seep-7fe1d.firebaseapp.com",databaseURL:"https://seep-7fe1d-default-rtdb.firebaseio.com",projectId:"seep-7fe1d",storageBucket:"seep-7fe1d.firebasestorage.app",messagingSenderId:"681624379623",appId:"1:681624379623:web:d9e10ac7318f96e98d0242"},rp=hh(BE),We=xw(rp),yo=FE(rp);II(yo,Bl);const VE=["S","H","D","C"],WE={S:"♠",H:"♥",D:"♦",C:"♣"},Gu={S:0,H:1,D:2,C:3},jE={1:"A",11:"J",12:"Q",13:"K"},Ur=100,J=t=>jE[t]||String(t),op=t=>WE[t],ap=t=>t==="H"||t==="D";function $r(t){return t.suit==="S"?t.rank:t.suit==="D"&&t.rank===10?6:t.rank===1?1:0}function cs(t){return t.type==="house"?t.value:t.card.rank}function jl(t){return t.cards.reduce((e,n)=>e+n.rank,0)>=2*t.value}function Gl(t){return t.type==="house"?t.cards:[t.card]}function GE(t,e){const n=new Set([0]);for(const s of t){for(const i of[...n])n.add(i+s);if(n.has(e))return!0}return n.has(e)}function KE(t,e){function n(s,i,r){return i===0?r:s>=t.length||i<0?null:n(s+1,i-t[s],[...r,s])??n(s+1,i,r)}return n(0,e,[])}function Kl(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function zl(){const t=[];for(const e of VE)for(let n=1;n<=13;n++)t.push({suit:e,rank:n});return t}function ws(t){t.sort((e,n)=>e.rank-n.rank||Gu[e.suit]-Gu[n.suit])}function ql(){return{deck:Kl(zl()),hands:[[],[],[],[]],floor:[],captured:[[],[]],scores:[0,0],seepBonus:[0,0],currentPlayer:0,bidder:0,bidValue:null,phase:"bid",roundNum:1,isFirstTurn:!0,handsDealt:!1,lastCaptureTeam:null,playerNames:null,finalEligible:null,finalHouseVal:null,finalAnnouncement:null}}function Aa(t,e){let n=!0;for(;n;){n=!1;const s=t.map((r,o)=>({it:r,i:o})).filter(r=>r.it.type==="card");if(!s.length)break;const i=KE(s.map(r=>r.it.card.rank),e.value);if(i!==null){const r=i.map(o=>s[o].i);e.cards.push(...r.map(o=>t[o].card)),r.sort((o,a)=>a-o).forEach(o=>t.splice(o,1)),n=!0}}}const zE=Qt({localUid:null,localName:"",currentGameId:null,localSeat:null,hostUid:null,screen:"home"});function ht(){return{session:zE}}function qE(t,e){if(e.selHandIdx===null)return null;const n=t.currentPlayer,s=t.hands[n],i=s[e.selHandIdx],r=e.selFloorIdxs.map(o=>t.floor[o]);return{floor:t.floor,floorVals:t.floor.map(cs),hand:s,handCard:i,handIdx:e.selHandIdx,selItems:r,selSum:r.reduce((o,a)=>o+cs(a),0),selLoose:r.filter(o=>o.type==="card").map(o=>o.card),selHouses:r.filter(o=>o.type==="house"),remainder:s.filter((o,a)=>a!==e.selHandIdx),team:n%2,player:n,isFirstTurn:t.isFirstTurn,bidder:t.bidder,bidValue:t.bidValue,selFloorIdxs:e.selFloorIdxs}}function YE(t){if(t.floor.length===0)return{valid:!1,reason:"Floor is empty"};const e=t.handCard.rank,n=t.floor.filter(i=>i.type==="house"),s=t.floor.filter(i=>i.type==="card");for(const i of n)if(i.value!==e)return{valid:!1,reason:`House of ${J(i.value)} cannot be swept by ${J(e)}`};if(s.length>0){const i=s.reduce((r,o)=>r+o.card.rank,0);if(i!==e)return{valid:!1,reason:`Loose cards sum to ${i}, not ${e} — cannot seep`}}return{valid:!0,reason:"Seep! Sweep the entire floor",meta:{}}}function JE(t){return t.selItems.length===0?{valid:!1,reason:"No floor items selected"}:t.isFirstTurn&&t.player===t.bidder&&t.handCard.rank!==t.bidValue?{valid:!1,reason:`First turn: can only pick with the bid card (${J(t.bidValue)})`}:t.handCard.rank!==t.selSum?{valid:!1,reason:`Selected sum ${t.selSum} ≠ ${J(t.handCard.rank)}`}:{valid:!0,reason:`Pick ${t.selItems.length} floor item(s)`,meta:{}}}function QE(t,e){return t.remainder.some(n=>n.rank===e)||t.floor.some(n=>n.type==="house"&&n.team===t.team&&n.value===e)}function XE(t){const e=t.selLoose.reduce((o,a)=>o+a.rank,0),n=t.selHouses.reduce((o,a)=>o+a.value,0);if(t.selHouses.length>0){const o=t.handCard.rank+e+n;if(o>13)return{valid:!1,reason:`Sum ${o} exceeds King (13)`};const a=t.floor.find(c=>c.type==="house"&&c.value===o&&!t.selHouses.includes(c));return a?(t.team===a.team?t.player===a.owner:a.sharedBy===void 0||t.player===a.sharedBy)&&t.handCard.rank===a.value&&!t.remainder.some(c=>c.rank===a.value)?{valid:!1,reason:`Must keep a ${J(a.value)} in hand to capture this house`}:{valid:!0,reason:`Merge into house of ${J(o)}`,meta:{houseVal:o,merge:!0}}:{valid:!1,reason:`No house of ${J(o)} on the floor to merge into`}}if(t.selLoose.length===0)return{valid:!1,reason:"Select floor card(s) to combine with your hand card"};const s=t.handCard.rank===e,i=s?t.handCard.rank:t.handCard.rank+e;if(i<9)return{valid:!1,reason:`House value ${i} is below 9`};if(!s&&i>13)return{valid:!1,reason:`Sum ${i} exceeds King (13)`};if(t.isFirstTurn&&t.player===t.bidder&&t.handCard.rank===t.bidValue&&!t.remainder.some(o=>o.rank===t.bidValue))return{valid:!1,reason:`First turn: need a second ${J(t.bidValue)} to build with it`};const r=t.floor.find(o=>o.type==="house"&&o.value===i);return r?r.shared?{valid:!1,reason:`House of ${J(i)} is already shared and locked`}:{valid:!0,reason:`Contribute to house of ${J(i)} (will become shared)`,meta:{houseVal:i}}:t.floor.filter(o=>o.type==="house").length>=2?{valid:!1,reason:"Maximum of 2 houses are already on the floor"}:QE(t,i)?{valid:!0,reason:`Build house of ${J(i)}`,meta:{houseVal:i}}:{valid:!1,reason:`You need a key card (${J(i)}) in hand to pick up this house later`}}function ZE(t){if(t.selHouses.length!==1)return{valid:!1,reason:"Select exactly one house to upgrade"};const e=t.selHouses[0];if(e.shared)return{valid:!1,reason:"Cannot upgrade a shared house"};if(e.pucca)return{valid:!1,reason:"Cannot upgrade a Pucca house"};if(jl(e))return{valid:!1,reason:"House is already doubled — only cementing applies"};if(e.owner===t.player)return{valid:!1,reason:"You built this house — another player must modify it first"};const n=e.value+t.handCard.rank+t.selLoose.reduce((s,i)=>s+i.rank,0);return n<=e.value?{valid:!1,reason:"New value must exceed current"}:n>13?{valid:!1,reason:`New value ${n} exceeds King (13)`}:t.remainder.some(s=>s.rank===n)?{valid:!0,reason:`Upgrade house to ${J(n)}`,meta:{houseVal:n}}:{valid:!1,reason:`Need key card (${J(n)}) to claim the upgraded house`}}function eC(t){if(t.selHouses.length!==1)return{valid:!1,reason:"Select a house to reinforce"};const e=t.selHouses[0],n=t.handCard.rank+t.selLoose.reduce((r,o)=>r+o.rank,0);if(n!==e.value)return{valid:!1,reason:`Cards must total ${J(e.value)} to reinforce — yours total ${n}`};let s;return t.team===e.team?s=t.player===e.owner:s=e.sharedBy===void 0||t.player===e.sharedBy,s&&t.handCard.rank===e.value&&!t.remainder.some(r=>r.rank===e.value)?{valid:!1,reason:`Must keep a ${J(e.value)} in hand to capture this house`}:{valid:!0,reason:!e.shared&&e.team!==t.team?`Share house of ${J(e.value)}`:`Reinforce house of ${J(e.value)}`,meta:{houseVal:e.value}}}function tC(t){return t.isFirstTurn&&t.player===t.bidder&&t.handCard.rank!==t.bidValue?{valid:!1,reason:`First turn: can only throw the bid card (${J(t.bidValue)})`}:GE(t.floor.map(cs),t.handCard.rank)?{valid:!1,reason:`${J(t.handCard.rank)} can capture a floor item — must capture first`}:{valid:!0,reason:"Throw card to floor",meta:{}}}function nC(t){const e=YE(t);if(e.valid){const n={valid:!1,reason:"Seep is mandatory"};return{seep:e,pick:n,build:n,break:n,add:n,throw:n}}return{seep:{valid:!1},pick:JE(t),build:XE(t),break:ZE(t),add:eC(t),throw:tC(t)}}function sC(t,e){if(t.seep.valid)return`⚡ Seep — sweep entire floor (${e.floor.length} items)!`;if(t.pick.valid)return`Pick: take ${e.selItems.length} floor item(s)`;if(t.build.valid){const i=t.build.meta.houseVal;return t.build.meta.merge?`Merge selected house(s) into House of ${J(i)} (${i})`:`Build House of ${J(i)} (${i})`}if(t.break.valid)return`Upgrade House → ${J(t.break.meta.houseVal)}`;if(t.add.valid)return`Reinforce house of ${J(t.add.meta.houseVal)} → Pucca ★`;const n=e.handCard,s=[];if(e.floor.forEach((i,r)=>{cs(i)===n.rank&&!e.selFloorIdxs.includes(r)&&s.push(`Click ${J(cs(i))} on the floor to Pick it up`)}),!s.length){const i=e.floor.map((r,o)=>({v:cs(r),i:o})).filter(r=>r.v<n.rank);for(let r=0;r<i.length&&!s.length;r++)for(let o=r+1;o<i.length;o++)if(i[r].v+i[o].v===n.rank){s.push(`Select ${J(i[r].v)} + ${J(i[o].v)} on floor to Pick`);break}}return t.throw.valid?s.length?s[0]:"Select floor cards to act, or Throw":s.length?s[0]:`${J(n.rank)} must capture — select matching floor cards`}function lp(t,e){const n=qE(t,e);if(!n)return{pick:!1,seep:!1,build:!1,buildVal:null,buildMerge:!1,add:!1,throw:!1,msg:"Select a card from your hand."};const s=nC(n),i=s.build.valid||s.break.valid,r=i?s.build.valid?s.build.meta:s.break.meta:null;return{pick:s.pick.valid,seep:s.seep.valid,build:i,buildVal:r?r.houseVal:null,buildMerge:!!(r&&r.merge),add:s.add.valid,throw:s.throw.valid,msg:sC(s,n)}}const qo=Qt(ql()),yt=Qt({selHandIdx:null,selFloorIdxs:[]}),Ji=Qt({visible:!1,message:"",onDone:null}),Ws=Qt({visible:!1,house:null}),Yo=Qt({visible:!1,message:""});function Xe(){const t=j(()=>lp(qo,yt));function e(c){var u;return((u=qo.playerNames)==null?void 0:u[c])||`Player ${c+1}`}function n(c){yt.selHandIdx=yt.selHandIdx===c?null:c,yt.selFloorIdxs=[]}function s(c){const u=yt.selFloorIdxs.indexOf(c);u===-1?yt.selFloorIdxs.push(c):yt.selFloorIdxs.splice(u,1)}function i(){yt.selHandIdx=null,yt.selFloorIdxs=[]}function r(c){Yo.message=`House ${c} Final!!`,Yo.visible=!0}function o(c,u,d){Ji.message=`+${u} points for Team ${c+1}!`,Ji.visible=!0,Ji.onDone=d}function a(c){Ws.house=c,Ws.visible=!0}function l(){Ws.visible=!1,Ws.house=null}return{gameState:qo,ui:yt,actions:t,seepOverlay:Ji,housePeek:Ws,finalBanner:Yo,playerName:e,selectHandCard:n,toggleFloor:s,clearSel:i,showSeepOverlay:o,showFinalBanner:r,openHousePeek:a,closeHousePeek:l}}const{gameState:v,ui:Oe,clearSel:$i,showSeepOverlay:iC}=Xe(),{session:Je}=ht();let Cn=()=>Promise.resolve();function rC(t){Cn=t}function oC(){Object.assign(v,ql()),v.hands[v.bidder]=v.deck.splice(0,4),ws(v.hands[v.bidder]),v.phase="bid"}function Jo(){v.deck=Kl(zl()),v.hands[v.bidder]=v.deck.splice(0,4),ws(v.hands[v.bidder]),Je.currentGameId&&Cn()}function aC(){v.hands[v.bidder].push(...v.deck.splice(0,8)),ws(v.hands[v.bidder]);for(let t=0;t<4;t++)t!==v.bidder&&(v.hands[t]=v.deck.splice(0,12),ws(v.hands[t]));v.handsDealt=!0}function lC(t){v.bidValue=t,v.floor=v.deck.splice(0,4).map(e=>({type:"card",card:e})),v.phase="play",Je.currentGameId&&Cn()}function js(t){if(Je.localSeat!==null&&Je.localSeat!==v.currentPlayer)return;const e=lp(v,Oe);if(!(t==="pick"&&!e.pick)&&!(t==="seep"&&!e.seep)&&!(t==="build"&&!e.build)&&!(t==="add"&&!e.add)&&!(t==="throw"&&!e.throw))switch(t){case"pick":Ku(!1);break;case"seep":Oe.selFloorIdxs=v.floor.map((n,s)=>s),Ku(!0);break;case"build":cC(e.buildVal);break;case"add":uC();break;case"throw":dC();break}}function Ku(t){const e=v.currentPlayer,n=e%2,s=v.hands[e][Oe.selHandIdx],i=[...Oe.selFloorIdxs.map(a=>v.floor[a]).flatMap(Gl),s];v.hands[e].splice(Oe.selHandIdx,1),[...Oe.selFloorIdxs].sort((a,l)=>l-a).forEach(a=>v.floor.splice(a,1)),v.captured[n].push(...i),v.lastCaptureTeam=n;const r=v.isFirstTurn;if(v.isFirstTurn=!1,$i(),(t||v.floor.length===0)&&!cp()){const a=r?25:50;v.seepBonus[n]+=a,iC(n,a,Ci);return}Ci()}function cC(t){const e=v.currentPlayer,n=e%2,s=v.hands[e][Oe.selHandIdx],r=[...Oe.selFloorIdxs.map(a=>v.floor[a]).flatMap(Gl),s];v.hands[e].splice(Oe.selHandIdx,1),[...Oe.selFloorIdxs].sort((a,l)=>l-a).forEach(a=>v.floor.splice(a,1));const o=v.floor.find(a=>a.type==="house"&&a.value===t);if(o)o.cards.push(...r),o.team!==n&&(o.shared||(o.shared=!0,o.sharedBy=e),o.pucca=!0),Aa(v.floor,o);else{const a={type:"house",cards:r,value:t,pucca:!1,owner:e,team:n,shared:!1,sharedBy:void 0};v.floor.push(a),Aa(v.floor,a)}v.finalEligible=e,v.finalHouseVal=t,v.isFirstTurn=!1,$i(),Ci()}function uC(){const t=v.currentPlayer,e=v.hands[t][Oe.selHandIdx],n=Oe.selFloorIdxs.find(o=>v.floor[o].type==="house"),s=v.floor[n],i=Oe.selFloorIdxs.filter(o=>v.floor[o].type==="card");s.cards.push(e,...i.map(o=>v.floor[o].card));const r=t%2;s.team!==r&&(s.shared||(s.shared=!0,s.sharedBy=t)),s.pucca=!0,v.hands[t].splice(Oe.selHandIdx,1),i.sort((o,a)=>a-o).forEach(o=>v.floor.splice(o,1)),Aa(v.floor,s),v.finalEligible=t,v.finalHouseVal=s.value,v.isFirstTurn=!1,$i(),Ci()}function dC(){const t=v.currentPlayer,e=v.hands[t][Oe.selHandIdx];v.floor.push({type:"card",card:e}),v.hands[t].splice(Oe.selHandIdx,1),v.isFirstTurn=!1,$i(),Ci()}function cp(){return v.hands.every(t=>t.length===0)}function hC(){v.finalEligible=null,v.finalHouseVal=null,Je.currentGameId&&Cn()}function fC(){Je.localSeat!==null&&Je.localSeat!==v.finalEligible||(v.finalAnnouncement={seat:v.finalEligible,houseVal:v.finalHouseVal},v.finalEligible=null,v.finalHouseVal=null,Je.currentGameId&&Cn())}function Ci(){if(v.finalAnnouncement=null,v.handsDealt||aC(),cp()){pC();return}v.currentPlayer=(v.currentPlayer+1)%4;let t=0;for(;v.hands[v.currentPlayer].length===0&&t++<4;)v.currentPlayer=(v.currentPlayer+1)%4;Je.currentGameId&&Cn()}function pC(){v.floor.length>0&&v.lastCaptureTeam!==null&&(v.captured[v.lastCaptureTeam].push(...v.floor.flatMap(Gl)),v.floor=[]);const t=v.captured[0].reduce((n,s)=>n+$r(s),0)+v.seepBonus[0],e=v.captured[1].reduce((n,s)=>n+$r(s),0)+v.seepBonus[1];v.scores[0]+=t,v.scores[1]+=e,v.phase=v.scores[0]>=Ur||v.scores[1]>=Ur?"gameover":"roundend",v._roundS0=t,v._roundS1=e,Je.currentGameId&&Cn()}function _C(){Je.currentGameId&&Je.localSeat!==v.bidder||(v.roundNum++,Object.assign(v,{deck:Kl(zl()),hands:[[],[],[],[]],floor:[],captured:[[],[]],seepBonus:[0,0],bidder:(v.bidder+1)%4,bidValue:null,phase:"bid",isFirstTurn:!0,handsDealt:!1,lastCaptureTeam:null,finalEligible:null,finalHouseVal:null,finalAnnouncement:null}),$i(),v.hands[v.bidder]=v.deck.splice(0,4),ws(v.hands[v.bidder]),Je.currentGameId&&Cn())}const{session:x}=ht(),{gameState:Yl,ui:zu}=Xe();let xn=null,ai=null;const up=qe(null),dp=qe({});let ln=null;function hp(t){ln&&(ri(ln),ln=null),ln=Ve(We,`games/${t}/seatMap`),po(ln,e=>{dp.value=e.val()||{}})}function fp(){xn&&(ri(xn),xn=null),ai&&(ri(ai),ai=null),ln&&(ri(ln),ln=null)}async function mC(){if(!x.currentGameId)return;const t=JSON.parse(JSON.stringify(Yl));t.selHandIdx=null,t.selFloorIdxs=[],await Ns(Ve(We,`games/${x.currentGameId}/gameStateJson`),JSON.stringify(t))}rC(mC);async function gC(){const t=Math.floor(1e5+Math.random()*9e5).toString();x.localSeat=0,x.currentGameId=t,sessionStorage.setItem("seep_seat","0"),sessionStorage.setItem("seep_gameId",t);const e={0:x.localUid,1:null,2:null,3:null};await Ns(Ve(We,`games/${t}`),{status:"lobby",hostUid:x.localUid,createdAt:Date.now(),seatMap:e,names:{[x.localUid]:x.localName},gameStateJson:null}),Jl(t),x.screen="room"}async function or(t){x.currentGameId&&x.localUid===x.hostUid&&await Ns(Ve(We,`games/${x.currentGameId}/seatMap/${t}`),null)}async function vC(t){const e=await ho(Ve(We,`games/${t}`));if(!e.exists())return{error:"Room not found. Check the code and try again."};const n=e.val();if(n.status==="gameover")return{error:"This game has already ended."};if(n.seatMap){const s=Object.values(n.seatMap).indexOf(x.localUid);s!==-1&&(x.localSeat=s,sessionStorage.setItem("seep_seat",String(s)))}return x.currentGameId=t,sessionStorage.setItem("seep_gameId",t),await Ns(Ve(We,`games/${t}/names/${x.localUid}`),x.localName),Jl(t),x.screen="room",{}}function Jl(t){fp(),hp(t),xn=Ve(We,`games/${t}`),po(xn,e=>{if(!e.exists())return;const n=e.val();if(x.hostUid=n.hostUid||null,n.status==="bid"||n.status==="playing"){if(ri(xn),xn=null,x.localSeat===null&&n.seatMap){const s=Object.values(n.seatMap).indexOf(x.localUid);s!==-1&&(x.localSeat=s,sessionStorage.setItem("seep_seat",String(s)))}pp(t);return}up.value=n})}async function yC(t){const e=Ve(We,`games/${x.currentGameId}/seatMap/${t}`),{committed:n}=await Fw(e,s=>{if(s===null)return x.localUid});n?(x.localSeat=t,sessionStorage.setItem("seep_seat",String(t)),await Ns(Ve(We,`games/${x.currentGameId}/names/${x.localUid}`),x.localName),Tf(e).set(null)):alert("That seat was just taken. Please choose another.")}async function qu(){const e=(await ho(Ve(We,`games/${x.currentGameId}`))).val(),n=Object.values(e.seatMap||{}).filter(Boolean).length;if(!e||n<4){alert("All 4 seats must be filled");return}const s=ql();s.hands[s.bidder]=s.deck.splice(0,4),ws(s.hands[s.bidder]),s.playerNames=[0,1,2,3].map(i=>{const r=e.seatMap[i];return r&&e.names&&e.names[r]||`Player ${i+1}`}),Object.assign(Yl,s),await Cw(Ve(We,`games/${x.currentGameId}`),{status:"bid",gameStateJson:JSON.stringify(s)})}async function Ql(){await navigator.clipboard.writeText(x.currentGameId)}async function pp(t){if(hp(t),x.localSeat===null){const e=sessionStorage.getItem("seep_seat");if(e!==null)x.localSeat=parseInt(e,10);else{const n=await ho(Ve(We,`games/${t}`));if(n.exists()){const s=n.val();x.hostUid=s.hostUid||null;const i=s.seatMap||{},r=Object.values(i).indexOf(x.localUid);r!==-1&&(x.localSeat=r,sessionStorage.setItem("seep_seat",String(r)))}}}ai=Ve(We,`games/${t}/gameStateJson`),po(ai,e=>{if(!e.exists())return;const n=JSON.parse(e.val());Object.assign(Yl,n),zu.selHandIdx=null,zu.selFloorIdxs=[],x.screen="game"})}function bC(){SI(yo,async t=>{if(!t||(x.localUid=t.uid,x.localName=sessionStorage.getItem("seep_name")||"",!x.localName))return;const e=sessionStorage.getItem("seep_gameId");if(!e)return;x.currentGameId=e;const n=await ho(Ve(We,`games/${e}`));if(!n.exists()){x.currentGameId=null;return}const s=n.val();if(s.seatMap){const i=Object.values(s.seatMap).indexOf(x.localUid);i!==-1&&(x.localSeat=i,sessionStorage.setItem("seep_seat",String(i)))}s.status==="lobby"?(Jl(e),x.screen="room"):pp(e)})}async function Yu(t){if(x.localUid)return!0;const e=t.trim();if(!e)return!1;const n=await vI(yo);return x.localUid=n.user.uid,x.localName=e,sessionStorage.setItem("seep_name",e),!0}async function wC(){await Jt(),await TI(yo),x.localUid=null,x.localName="",x.currentGameId=null,x.localSeat=null,x.hostUid=null,sessionStorage.removeItem("seep_gameId"),sessionStorage.removeItem("seep_seat"),sessionStorage.removeItem("seep_name"),x.screen="home"}async function Jt(){if(!x.currentGameId){x.screen="home";return}if(x.localSeat!==null){const t=Ve(We,`games/${x.currentGameId}/seatMap/${x.localSeat}`);Tf(t).cancel(),await Ns(t,null)}fp(),sessionStorage.removeItem("seep_gameId"),sessionStorage.removeItem("seep_seat"),x.currentGameId=null,x.localSeat=null,x.screen="home"}const IC={class:"menu-account"},EC={id:"menu-account-name"},CC={id:"menu-account-detail"},SC={key:0,class:"menu-section"},TC={__name:"GlobalMenu",setup(t){const{session:e}=ht(),n=qe(!1),s=qe(""),i=j(()=>e.hostUid&&e.hostUid===e.localUid),r=["Player 1 (T1)","Player 2 (T2)","Player 3 (T1)","Player 4 (T2)"],o=j(()=>{let d="";return e.currentGameId&&(d+=`Room: ${e.currentGameId}`),e.localSeat!==null&&(d+=`  ·  ${r[e.localSeat]}`),d});async function a(){await Ql(),s.value="Copied!",setTimeout(()=>{s.value=""},1200)}async function l(){n.value=!1,await Jt()}async function c(){n.value=!1,await wC()}function u(){n.value=!1}return Ka(()=>document.addEventListener("click",u)),zr(()=>document.removeEventListener("click",u)),(d,f)=>(D(),L("div",{id:"global-menu-wrap",class:oe({visible:w(e).screen!=="home"})},[m("button",{id:"global-menu-btn",onClick:f[0]||(f[0]=fi(_=>n.value=!n.value,["stop"]))},"☰"),m("div",{id:"global-menu-dropdown",class:oe({open:n.value}),onClick:f[1]||(f[1]=fi(()=>{},["stop"]))},[m("div",IC,[m("div",EC,A(w(e).localName||"—"),1),m("div",CC,A(o.value),1)]),i.value&&w(e).currentGameId?(D(),L("div",SC,[f[2]||(f[2]=m("div",{class:"menu-section-title"},"Room Code",-1)),m("div",{class:"menu-room-code",onClick:a},A(s.value||w(e).currentGameId),1)])):Re("",!0),w(e).currentGameId?(D(),L("button",{key:1,class:"menu-item danger",onClick:l},"Leave Room")):Re("",!0),m("button",{class:"menu-item",onClick:c},"Sign Out")],2)],2))}},kC={id:"seep-msg"},RC={__name:"SeepOverlay",setup(t){const{seepOverlay:e}=Xe();return Ln(()=>e.visible,n=>{n&&setTimeout(()=>{e.visible=!1,e.onDone&&(e.onDone(),e.onDone=null)},1800)}),(n,s)=>(D(),L("div",{id:"seep-overlay",class:oe({show:w(e).visible})},[m("div",kC,A(w(e).message),1)],2))}},PC={id:"final-msg"},NC={__name:"FinalBanner",setup(t){const{gameState:e,playerName:n}=Xe(),s=qe(!1),i=qe("");let r=null;return Ln(()=>e.finalAnnouncement,o=>{o&&(r&&clearTimeout(r),i.value=`House ${J(o.houseVal)} Final by ${n(o.seat)}!`,s.value=!0,r=setTimeout(()=>{s.value=!1},1800))}),(o,a)=>(D(),L("div",{id:"final-banner",class:oe({show:s.value})},[m("div",PC,A(i.value),1)],2))}},AC={class:"c-tl"},OC={class:"rank"},xC={class:"suit"},DC={class:"c-br"},bo={__name:"CardEl",props:{card:{type:Object,required:!0},clickable:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},faceDown:{type:Boolean,default:!1}},emits:["click"],setup(t){const e=t,n=j(()=>J(e.card.rank)),s=j(()=>op(e.card.suit)),i=j(()=>ap(e.card.suit));return(r,o)=>(D(),L("div",{class:oe(["card",{red:i.value,selected:t.selected,"face-down":t.faceDown}]),style:Is(t.clickable?{}:{cursor:"default"}),onClick:o[0]||(o[0]=a=>t.clickable?r.$emit("click"):null)},[t.faceDown?Re("",!0):(D(),L(pe,{key:0},[m("div",AC,[rt(A(n.value),1),o[1]||(o[1]=m("br",null,null,-1)),rt(A(s.value),1)]),m("div",OC,A(n.value),1),m("div",xC,A(s.value),1),m("div",DC,[rt(A(n.value),1),o[2]||(o[2]=m("br",null,null,-1)),rt(A(s.value),1)])],64))],6))}},MC={class:"peek-inner"},LC={class:"peek-header"},FC={id:"peek-title"},UC={id:"peek-owners",class:"peek-owners"},$C={id:"peek-cards",class:"peek-cards"},HC={__name:"HousePeekModal",setup(t){const{housePeek:e,closeHousePeek:n,playerName:s}=Xe(),i=j(()=>e.house),r=j(()=>{if(!i.value)return"";const o=i.value,a=o.shared?" ⚑ Shared":o.pucca?" ★ Pucca":jl(o)?" ◆ Doubled":" (building)";return`House of ${J(o.value)}${a} — ${o.cards.length} cards`});return(o,a)=>{var l;return D(),L("div",{id:"house-peek",class:oe({show:w(e).visible}),onClick:a[1]||(a[1]=fi((...c)=>w(n)&&w(n)(...c),["self"]))},[m("div",MC,[m("div",LC,[m("span",FC,A(r.value),1),m("button",{class:"peek-close",onClick:a[0]||(a[0]=(...c)=>w(n)&&w(n)(...c))},"✕")]),m("div",UC,[i.value?(D(),L(pe,{key:0},[m("span",{class:oe(["peek-owner",`t${i.value.team}`])}," Built by "+A(w(s)(i.value.owner))+" (Team "+A(i.value.team+1)+") ",3),i.value.shared&&i.value.sharedBy!==void 0?(D(),L(pe,{key:0},[a[2]||(a[2]=m("span",{class:"peek-owner-sep"}," · ",-1)),m("span",{class:oe(["peek-owner",`t${i.value.team===0?1:0}`])}," Shared by "+A(w(s)(i.value.sharedBy))+" (Team "+A(i.value.team===0?2:1)+") ",3)],64)):Re("",!0)],64)):Re("",!0)]),m("div",$C,[(D(!0),L(pe,null,Gt(((l=i.value)==null?void 0:l.cards)??[],(c,u)=>(D(),ds(bo,{key:u,card:c,clickable:!1},null,8,["card"]))),128))])])],2)}}},BC={id:"home-screen",class:"screen"},VC={class:"home-card"},WC={key:0,class:"home-welcome"},jC={class:"home-actions"},GC={key:2,class:"home-join-expand"},KC={class:"home-error"},zC={__name:"HomeScreen",setup(t){const{session:e}=ht(),n=qe(""),s=qe(""),i=qe(!1),r=qe("");async function o(){r.value="";const l=e.localName||n.value.trim();if(!l){r.value="Please enter your name first.";return}try{await Yu(l),await gC()}catch(c){r.value="Sign-in failed: "+c.message}}async function a(){r.value="";const l=e.localName||n.value.trim();if(!l){r.value="Please enter your name first.";return}const c=s.value.trim();if(c.length!==6){r.value="Enter a valid 6-digit room code.";return}try{await Yu(l);const u=await vC(c);u!=null&&u.error&&(r.value=u.error)}catch(u){r.value="Join failed: "+u.message}}return(l,c)=>(D(),L("div",BC,[c[3]||(c[3]=m("div",{class:"home-logo"},"♠ SEEP ♠",-1)),m("div",VC,[w(e).localName&&w(e).localUid?(D(),L("div",WC," Welcome back, "+A(w(e).localName)+"! ",1)):nn((D(),L("input",{key:1,"onUpdate:modelValue":c[0]||(c[0]=u=>n.value=u),class:"home-input",type:"text",placeholder:"Enter your name to play",maxlength:"20",autocomplete:"off",onKeydown:Lc(o,["enter"])},null,544)),[[Mc,n.value]]),m("div",jC,[m("button",{class:"btn btn-primary",onClick:o},"Start Game"),m("button",{class:"btn",style:{background:"#1e5c32",color:"#fff",border:"1px solid #3a8a4e"},onClick:c[1]||(c[1]=u=>i.value=!i.value)}," Join Room ")]),i.value?(D(),L("div",GC,[nn(m("input",{"onUpdate:modelValue":c[2]||(c[2]=u=>s.value=u),type:"text",placeholder:"6-digit code",maxlength:"6",autocomplete:"off",onKeydown:Lc(a,["enter"])},null,544),[[Mc,s.value]]),m("button",{class:"btn btn-primary",onClick:a},"Join →")])):Re("",!0),m("div",KC,A(r.value),1)])]))}},qC={id:"room-screen",class:"screen"},YC={class:"room-code-box"},JC={class:"seat-grid"},QC={class:"seat-name"},XC={class:"seat-label"},ZC=["onClick"],eS={class:"seat-label"},tS=["onClick"],nS={class:"seat-label"},sS={style:{display:"flex",gap:"12px","flex-wrap":"wrap","justify-content":"center"}},iS={__name:"RoomScreen",setup(t){const{session:e}=ht(),n=qe(""),s=["Player 1 (T1)","Player 2 (T2)","Player 3 (T1)","Player 4 (T2)"],i=up,r=j(()=>{var b;return((b=i.value)==null?void 0:b.seatMap)||{}}),o=j(()=>{var b;return((b=i.value)==null?void 0:b.names)||{}}),a=j(()=>{var b;return((b=i.value)==null?void 0:b.hostUid)===e.localUid||e.hostUid===e.localUid}),l=j(()=>Object.values(r.value).filter(b=>b!==null).length),c=j(()=>l.value===4),u=j(()=>Object.values(r.value).includes(e.localUid));function d(b){return r.value[b]||null}function f(b){const O=d(b);return O?o.value[O]||"Player":""}const _=j(()=>a.value?c.value?"All seats filled! Start the game.":`Waiting for players… (${l.value}/4)`:"Waiting for host to start…");async function y(){await Ql(),n.value="Copied!",setTimeout(()=>{n.value=""},1200)}return(b,O)=>(D(),L("div",qC,[O[6]||(O[6]=m("h2",null,"Game Room",-1)),m("div",YC,[O[2]||(O[2]=m("div",{class:"label"},"Share this code",-1)),m("div",{class:"room-code",title:"Click to copy",onClick:y},A(n.value||w(e).currentGameId||"------"),1)]),m("div",JC,[O[4]||(O[4]=m("div",{class:"seat-header t1"},"Team 1 (Blue)",-1)),O[5]||(O[5]=m("div",{class:"seat-header t2"},"Team 2 (Red)",-1)),(D(),L(pe,null,Gt([0,1,2,3],F=>m("div",{key:F,class:oe(["seat-slot",{taken:!!d(F),mine:d(F)===w(e).localUid}])},[d(F)?(D(),L(pe,{key:0},[m("div",QC,A(f(F)),1),m("div",XC,A(s[F]),1),a.value&&d(F)!==w(e).localUid?(D(),L("button",{key:0,class:"seat-kick-btn",title:"Remove player",onClick:G=>w(or)(F)},"✕ Remove",8,ZC)):Re("",!0)],64)):u.value?(D(),L(pe,{key:2},[m("div",nS,A(s[F]),1),O[3]||(O[3]=m("div",{style:{color:"#555","font-size":".85rem"}},"Empty",-1))],64)):(D(),L(pe,{key:1},[m("div",eS,A(s[F]),1),m("button",{onClick:G=>w(yC)(F)},"Take seat",8,tS)],64))],2)),64))]),m("div",null,A(_.value),1),m("div",sS,[a.value&&c.value?(D(),L("button",{key:0,class:"btn btn-primary",style:{padding:"12px 36px","font-size":"1rem"},onClick:O[0]||(O[0]=(...F)=>w(qu)&&w(qu)(...F))},"Start Game ▶")):Re("",!0),m("button",{class:"btn btn-danger",style:{padding:"12px 28px","font-size":"1rem"},onClick:O[1]||(O[1]=(...F)=>w(Jt)&&w(Jt)(...F))}," Leave Room ")])]))}},rS={id:"bid-screen",class:"screen"},oS={class:"bid-hand"},aS={key:0,style:{color:"#ffa040","font-size":".8rem"}},lS={key:1,class:"bid-btns"},cS=["onClick"],uS={__name:"BidScreen",setup(t){const{gameState:e,playerName:n}=Xe(),{session:s}=ht(),i=j(()=>s.localSeat===null||s.localSeat===e.bidder),r=j(()=>i.value?e.hands[e.bidder]??[]:[]),o=j(()=>r.value.length?Math.max(...r.value.map(_=>_.rank)):0),a=j(()=>o.value>=9),l=j(()=>r.value.some(_=>_.rank===9&&_.suit==="S")),c=j(()=>!a.value||o.value===9&&!l.value),u=j(()=>a.value?[...new Set(r.value.filter(_=>_.rank>=9).map(_=>_.rank))].sort((_,y)=>_-y):[]),d=j(()=>i.value?a.value?`${n(e.bidder)} – choose your bid (≥ 9). You need a matching key card in your hand.`:"No card ≥ 9 — redealing…":`Waiting for ${n(e.bidder)} to bid…`),f=j(()=>i.value&&c.value&&a.value?"You may pass (highest card is a non-♠ 9).":"");return Ln(a,_=>{!_&&i.value&&e.phase==="bid"&&setTimeout(Jo,1200)},{immediate:!0}),(_,y)=>(D(),L("div",rS,[y[2]||(y[2]=m("h2",null,"♠ Bid Phase",-1)),m("p",null,A(d.value),1),m("div",oS,[(D(!0),L(pe,null,Gt(r.value,(b,O)=>(D(),ds(bo,{key:O,card:b,clickable:!1},null,8,["card"]))),128))]),f.value?(D(),L("p",aS,A(f.value),1)):Re("",!0),i.value?(D(),L("div",lS,[(D(!0),L(pe,null,Gt(u.value,b=>(D(),L("button",{key:b,class:"bid-btn",onClick:O=>w(lC)(b)},"Bid "+A(w(J)(b))+" ("+A(b)+")",9,cS))),128)),c.value?(D(),L("button",{key:0,class:"bid-btn pass",onClick:y[0]||(y[0]=(...b)=>w(Jo)&&w(Jo)(...b))},"Pass (Redeal)")):Re("",!0)])):Re("",!0),m("button",{class:"btn btn-danger",style:{"margin-top":"8px",padding:"8px 24px","font-size":".9rem"},onClick:y[1]||(y[1]=(...b)=>w(Jt)&&w(Jt)(...b))}," Exit Game ")]))}},dS={key:0,class:"hidden-pile"},hS={class:"pile-stack"},fS={class:"pile-label"},Qi={__name:"PlayerHand",props:{count:{type:Number,required:!0}},setup(t){const e=t,n=j(()=>Math.min(3,e.count));return(s,i)=>t.count>0?(D(),L("div",dS,[m("div",hS,[(D(!0),L(pe,null,Gt(n.value,r=>(D(),L("div",{key:r,class:"card face-down",style:Is(`position:absolute;top:${(r-1)*4}px;left:${(r-1)*4}px;width:54px;height:76px;`)},null,4))),128))]),m("div",fS,A(t.count)+" cards",1)])):Re("",!0)}},pS={class:"h-val"},_S={class:"h-count"},mS=["title"],gS={class:"pmc-rank"},vS={class:"pmc-suit"},yS={__name:"FloorHouse",props:{house:{type:Object,required:!0},selected:{type:Boolean,default:!1}},emits:["click","peek"],setup(t){const e=t,n=j(()=>jl(e.house)),s=j(()=>J(e.house.value)),i=c=>ap(c.suit),r=j(()=>e.house.shared?"shared":e.house.pucca?"pucca":"doubled"),o=j(()=>e.house.shared?"shared":`t${e.house.team}`),a=j(()=>e.house.shared?"T1+T2":`T${e.house.team+1} P${e.house.owner+1}`),l=j(()=>e.house.cards.slice(-3).reverse());return(c,u)=>n.value?(D(),L("div",{key:0,class:oe(["house",[r.value,{selected:t.selected}]]),onClick:u[1]||(u[1]=d=>c.$emit("click"))},[m("div",pS,A(s.value),1),m("div",{class:oe(["h-badge",o.value])},A(a.value),3),m("div",_S,A(t.house.cards.length)+"c",1),m("button",{class:"house-peek-btn",title:"Peek cards",onClick:u[0]||(u[0]=fi(d=>c.$emit("peek",t.house),["stop"]))},"👁")],2)):(D(),L("div",{key:1,class:oe(["house-pile",{selected:t.selected}]),title:`Building house of ${s.value} — not yet doubled`,onClick:u[3]||(u[3]=d=>c.$emit("click"))},[(D(!0),L(pe,null,Gt(l.value,(d,f)=>(D(),L("div",{key:f,class:oe(["pile-mini-card",{red:i(d)}]),style:Is(`top:${f*18}px;left:${f*4}px;z-index:${10-f};`)},[m("span",gS,A(w(J)(d.rank)),1),m("span",vS,A(w(op)(d.suit)),1)],6))),128)),m("div",{class:oe(["h-pile-badge",`t${t.house.team}`])},A(s.value)+" ▸ T"+A(t.house.team+1),3),m("button",{class:"house-peek-btn",title:"Peek all cards",onClick:u[2]||(u[2]=fi(d=>c.$emit("peek",t.house),["stop"]))},"👁")],10,mS))}},bS={class:"floor-cards",id:"floor-area"},wS={key:0,class:"floor-empty"},IS={__name:"FloorArea",setup(t){const{gameState:e,ui:n,toggleFloor:s,openHousePeek:i}=Xe();return(r,o)=>(D(),L("div",bS,[w(e).floor.length?Re("",!0):(D(),L("span",wS,"Empty floor")),(D(!0),L(pe,null,Gt(w(e).floor,(a,l)=>(D(),L(pe,{key:l},[a.type==="house"?(D(),ds(yS,{key:0,house:a,selected:w(n).selFloorIdxs.includes(l),onClick:c=>w(s)(l),onPeek:w(i)},null,8,["house","selected","onClick","onPeek"])):(D(),ds(bo,{key:1,card:a.card,clickable:!0,selected:w(n).selFloorIdxs.includes(l),class:"floor-card",onClick:c=>w(s)(l)},null,8,["card","selected","onClick"]))],64))),128))]))}},ES={class:"active-hand-zone",id:"active-hand-zone"},CS={__name:"ActiveHand",setup(t){const{gameState:e,ui:n,selectHandCard:s}=Xe(),{session:i}=ht(),r=j(()=>i.localSeat!==null?i.localSeat:e.currentPlayer),o=j(()=>i.localSeat===null||i.localSeat===e.currentPlayer),a=j(()=>e.hands[r.value]??[]);return(l,c)=>(D(),L("div",ES,[(D(!0),L(pe,null,Gt(a.value,(u,d)=>(D(),ds(bo,{key:d,card:u,clickable:o.value,selected:w(n).selHandIdx===d,onClick:f=>o.value?w(s)(d):null},null,8,["card","clickable","selected","onClick"]))),128))]))}},SS={class:"g-actions"},TS={class:"turn-label"},kS={class:"bid-disp"},RS={class:"action-btns"},PS=["disabled"],NS=["disabled"],AS=["disabled"],OS=["disabled"],xS=["disabled"],DS={class:"status-msg"},MS={__name:"ActionsPanel",setup(t){const{gameState:e,actions:n}=Xe(),{session:s}=ht(),i=j(()=>{const _=e.currentPlayer;return`Player ${_+1}'s Turn (Team ${_%2+1})`}),r=j(()=>e.bidValue?`Bid: ${J(e.bidValue)} (${e.bidValue})`:""),o=j(()=>n.value.build||n.value.add),a=j(()=>e.finalEligible===null?!1:s.localSeat!==null?e.finalEligible===s.localSeat:!0);function l(){n.value.add?js("add"):n.value.build&&js("build")}const c=qe(null);let u=null;function d(){u&&(clearInterval(u),u=null),c.value=null}Ln(()=>e.finalEligible,_=>{d(),!(_===null||!(s.localSeat===null||s.localSeat===_))&&(c.value=5,u=setInterval(()=>{c.value--,c.value<=0&&(d(),hC())},1e3))});function f(){d(),fC()}return zr(d),(_,y)=>(D(),L("div",SS,[m("div",TS,A(i.value),1),m("div",kS,A(r.value),1),m("div",RS,[m("button",{class:"btn btn-throw",disabled:!w(n).throw,onClick:y[0]||(y[0]=b=>w(js)("throw"))},"Throw",8,PS),m("button",{class:"btn btn-pick",disabled:!w(n).pick,onClick:y[1]||(y[1]=b=>w(js)("pick"))},"Pick",8,NS),m("button",{class:"btn btn-house",disabled:!o.value,onClick:l},"House",8,AS),m("button",{class:"btn btn-seep btn-special",disabled:!w(n).seep,onClick:y[2]||(y[2]=b=>w(js)("seep"))},"Seep",8,OS),m("button",{class:"btn btn-final btn-special",disabled:!a.value,onClick:f}," Final"+A(c.value!==null?` (${c.value})`:""),9,xS)]),m("div",DS,A(w(n).msg),1)]))}},LS={id:"game-screen",class:"screen"},FS={class:"g-header"},US={class:"g-scores"},$S={class:"g-round"},HS={class:"g-table"},BS={class:"cards-row"},VS={class:"cards-row"},WS={class:"floor-zone"},jS={class:"cap-row"},GS={class:"cards-row"},KS={class:"cards-row"},zS={__name:"GameScreen",setup(t){const{gameState:e,playerName:n}=Xe(),{session:s}=ht(),i=j(()=>s.hostUid&&s.hostUid===s.localUid),r=qe("");async function o(){await Ql(),r.value="Copied!",setTimeout(()=>{r.value=""},1200)}const a=c=>!!dp.value[c];function l(c){return(e.captured[c]??[]).reduce((u,d)=>u+$r(d),0)+(e.seepBonus[c]??0)}return(c,u)=>{var d,f,_,y;return D(),L("div",LS,[m("div",FS,[u[5]||(u[5]=m("h1",null,"♠ SEEP",-1)),m("div",US,[m("div",{class:oe(["g-score",{winning:w(e).scores[0]>w(e).scores[1]}])},[u[3]||(u[3]=rt(" Team 1: ",-1)),m("strong",null,A(w(e).scores[0]),1)],2),m("div",{class:oe(["g-score",{winning:w(e).scores[1]>w(e).scores[0]}])},[u[4]||(u[4]=rt(" Team 2: ",-1)),m("strong",null,A(w(e).scores[1]),1)],2)]),m("div",$S,"Round "+A(w(e).roundNum),1),w(s).currentGameId?(D(),L("div",{key:0,class:"g-room-code",title:"Click to copy",onClick:o},A(r.value||w(s).currentGameId),1)):Re("",!0)]),m("div",HS,[m("div",{class:oe(["player-zone top",{active:w(e).currentPlayer===2}])},[m("div",BS,[fe(Qi,{count:((d=w(e).hands[2])==null?void 0:d.length)??0},null,8,["count"])]),m("div",{class:oe(["p-label t0",{"active-lbl":w(e).currentPlayer===2}])},A(w(n)(2))+" · Team 1 ",3),i.value&&a(2)&&w(s).localSeat!==2?(D(),L("button",{key:0,class:"kick-btn",onClick:u[0]||(u[0]=b=>w(or)(2)),title:"Remove player"},"✕")):Re("",!0)],2),m("div",{class:oe(["player-zone left",{active:w(e).currentPlayer===1}])},[m("div",VS,[fe(Qi,{count:((f=w(e).hands[1])==null?void 0:f.length)??0},null,8,["count"])]),m("div",{class:oe(["p-label t1",{"active-lbl":w(e).currentPlayer===1}])},A(w(n)(1))+"·T2 ",3),i.value&&a(1)&&w(s).localSeat!==1?(D(),L("button",{key:0,class:"kick-btn",onClick:u[1]||(u[1]=b=>w(or)(1)),title:"Remove player"},"✕")):Re("",!0)],2),m("div",WS,[u[8]||(u[8]=m("div",{class:"floor-label"},"TABLE",-1)),fe(IS),m("div",jS,[m("div",null,[u[6]||(u[6]=rt("T1 pts: ",-1)),m("span",null,A(l(0)),1)]),m("div",null,[u[7]||(u[7]=rt("T2 pts: ",-1)),m("span",null,A(l(1)),1)])])]),m("div",{class:oe(["player-zone right",{active:w(e).currentPlayer===3}])},[m("div",{class:oe(["p-label t1",{"active-lbl":w(e).currentPlayer===3}])},A(w(n)(3))+"·T2 ",3),m("div",GS,[fe(Qi,{count:((_=w(e).hands[3])==null?void 0:_.length)??0},null,8,["count"])]),i.value&&a(3)&&w(s).localSeat!==3?(D(),L("button",{key:0,class:"kick-btn",onClick:u[2]||(u[2]=b=>w(or)(3)),title:"Remove player"},"✕")):Re("",!0)],2),m("div",{class:oe(["player-zone bottom",{active:w(e).currentPlayer===0}])},[m("div",{class:oe(["p-label t0",{"active-lbl":w(e).currentPlayer===0}])},A(w(n)(0))+" · Team 1 ",3),m("div",KS,[fe(Qi,{count:((y=w(e).hands[0])==null?void 0:y.length)??0},null,8,["count"])])],2)]),fe(CS),fe(MS)])}}},qS={id:"roundend-screen",class:"screen"},YS={class:"score-table"},JS={class:"score-total"},QS={class:"cum-box"},XS={class:"cum-vals"},ZS={style:{display:"flex",gap:"12px","flex-wrap":"wrap","justify-content":"center"}},eT={__name:"RoundEndScreen",setup(t){const{gameState:e}=Xe(),n=j(()=>e.scores[0]>=Ur||e.scores[1]>=Ur);function s(o,a){return(e.captured[o]??[]).filter(a).reduce((l,c)=>l+$r(c),0)}const i=j(()=>[["Spades (face value)",s(0,o=>o.suit==="S"),s(1,o=>o.suit==="S")],["10♦",s(0,o=>o.suit==="D"&&o.rank===10),s(1,o=>o.suit==="D"&&o.rank===10)],["Other Aces",s(0,o=>o.rank===1&&o.suit!=="S"),s(1,o=>o.rank===1&&o.suit!=="S")],["Seep Bonus",e.seepBonus[0]??0,e.seepBonus[1]??0]]);function r(){n.value?e.phase="gameover":_C()}return(o,a)=>(D(),L("div",qS,[m("h2",null,"Round "+A(w(e).roundNum)+" Complete",1),m("table",YS,[a[2]||(a[2]=m("thead",null,[m("tr",null,[m("th",null,"Category"),m("th",null,"Team 1"),m("th",null,"Team 2")])],-1)),m("tbody",null,[(D(!0),L(pe,null,Gt(i.value,l=>(D(),L("tr",{key:l[0]},[m("td",null,A(l[0]),1),m("td",null,A(l[1]),1),m("td",null,A(l[2]),1)]))),128)),m("tr",JS,[a[1]||(a[1]=m("td",null,"Round Total",-1)),m("td",null,A(w(e)._roundS0??0),1),m("td",null,A(w(e)._roundS1??0),1)])])]),m("div",QS,[a[5]||(a[5]=m("h3",null,"Cumulative Score",-1)),m("div",XS,[m("div",null,[a[3]||(a[3]=rt("Team 1: ",-1)),m("strong",null,A(w(e).scores[0]),1)]),m("div",null,[a[4]||(a[4]=rt("Team 2: ",-1)),m("strong",null,A(w(e).scores[1]),1)])])]),m("div",ZS,[m("button",{class:"btn btn-primary",style:{"font-size":"1rem",padding:"10px 28px"},onClick:r},A(n.value?"See Results":"Next Round ▶"),1),m("button",{class:"btn btn-danger",style:{padding:"10px 24px","font-size":"1rem"},onClick:a[0]||(a[0]=(...l)=>w(Jt)&&w(Jt)(...l))}," Exit Game ")])]))}},tT={id:"gameover-screen",class:"screen"},nT={__name:"GameOverScreen",setup(t){const{gameState:e}=Xe(),{session:n}=ht(),s=j(()=>{const r=e.scores[0],o=e.scores[1];return`🏆 ${r>o?"Team 1 (P1 & P3)":o>r?"Team 2 (P2 & P4)":"Both Teams (Tie!)"} Wins!`});async function i(){n.currentGameId?await Jt():oC()}return(r,o)=>(D(),L("div",tT,[m("h1",null,A(s.value),1),m("p",null,"Team 1: "+A(w(e).scores[0])+" pts | Team 2: "+A(w(e).scores[1])+" pts",1),m("button",{class:"btn btn-primary",style:{"font-size":"1rem",padding:"10px 28px"},onClick:i},A(w(n).currentGameId?"Back to Home":"New Game"),1)]))}},sT={__name:"App",setup(t){const{session:e}=ht(),{gameState:n}=Xe();return Ka(()=>{bC()}),(s,i)=>(D(),L(pe,null,[fe(TC),nn(fe(zC,null,null,512),[[zn,w(e).screen==="home"]]),nn(fe(iS,null,null,512),[[zn,w(e).screen==="room"]]),nn(fe(uS,null,null,512),[[zn,w(e).screen==="game"&&w(n).phase==="bid"]]),nn(fe(zS,null,null,512),[[zn,w(e).screen==="game"&&w(n).phase==="play"]]),nn(fe(eT,null,null,512),[[zn,w(e).screen==="game"&&w(n).phase==="roundend"]]),nn(fe(nT,null,null,512),[[zn,w(e).screen==="game"&&w(n).phase==="gameover"]]),fe(RC),fe(NC),fe(HC)],64))}};$m(sT).mount("#app");
