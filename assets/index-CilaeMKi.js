(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ra(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ae={},Xn=[],wt=()=>{},zu=()=>!1,Fr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ur=t=>t.startsWith("onUpdate:"),xe=Object.assign,Pa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hp=Object.prototype.hasOwnProperty,te=(t,e)=>hp.call(t,e),V=Array.isArray,Zn=t=>Ii(t)==="[object Map]",qu=t=>Ii(t)==="[object Set]",tc=t=>Ii(t)==="[object Date]",K=t=>typeof t=="function",be=t=>typeof t=="string",Ct=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",Yu=t=>(ie(t)||K(t))&&K(t.then)&&K(t.catch),Ju=Object.prototype.toString,Ii=t=>Ju.call(t),fp=t=>Ii(t).slice(8,-1),Qu=t=>Ii(t)==="[object Object]",Na=t=>be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gs=Ra(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$r=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},pp=/-\w/g,rt=$r(t=>t.replace(pp,e=>e.slice(1).toUpperCase())),_p=/\B([A-Z])/g,bn=$r(t=>t.replace(_p,"-$1").toLowerCase()),Xu=$r(t=>t.charAt(0).toUpperCase()+t.slice(1)),vo=$r(t=>t?`on${Xu(t)}`:""),bt=(t,e)=>!Object.is(t,e),Ji=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Zu=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Aa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nc;const Hr=()=>nc||(nc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ws(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=be(s)?yp(s):ws(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(be(t)||ie(t))return t}const gp=/;(?![^(]*\))/g,mp=/:([^]+)/,vp=/\/\*[^]*?\*\//g;function yp(t){const e={};return t.replace(vp,"").split(gp).forEach(n=>{if(n){const s=n.split(mp);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function oe(t){let e="";if(be(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const s=oe(t[n]);s&&(e+=s+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const bp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wp=Ra(bp);function ed(t){return!!t||t===""}function Ip(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Oa(t[s],e[s]);return n}function Oa(t,e){if(t===e)return!0;let n=tc(t),s=tc(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Ct(t),s=Ct(e),n||s)return t===e;if(n=V(t),s=V(e),n||s)return n&&s?Ip(t,e):!1;if(n=ie(t),s=ie(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Oa(t[o],e[o]))return!1}}return String(t)===String(e)}const td=t=>!!(t&&t.__v_isRef===!0),O=t=>be(t)?t:t==null?"":V(t)||ie(t)&&(t.toString===Ju||!K(t.toString))?td(t)?O(t.value):JSON.stringify(t,nd,2):String(t),nd=(t,e)=>td(e)?nd(t,e.value):Zn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[yo(s,r)+" =>"]=i,n),{})}:qu(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>yo(n))}:Ct(e)?yo(e):ie(e)&&!V(e)&&!Qu(e)?String(e):e,yo=(t,e="")=>{var n;return Ct(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pe;class Ep{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Pe,!e&&Pe&&(this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Pe;try{return Pe=this,e()}finally{Pe=n}}}on(){++this._on===1&&(this.prevScope=Pe,Pe=this)}off(){if(this._on>0&&--this._on===0){if(Pe===this)Pe=this.prevScope;else{let e=Pe;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Cp(){return Pe}let de;const bo=new WeakSet;class sd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Pe&&Pe.active&&Pe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,bo.has(this)&&(bo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||rd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,sc(this),od(this);const e=de,n=ot;de=this,ot=!0;try{return this.fn()}finally{ad(this),de=e,ot=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ma(e);this.deps=this.depsTail=void 0,sc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?bo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ko(this)&&this.run()}get dirty(){return Ko(this)}}let id=0,Ks,zs;function rd(t,e=!1){if(t.flags|=8,e){t.next=zs,zs=t;return}t.next=Ks,Ks=t}function xa(){id++}function Da(){if(--id>0)return;if(zs){let e=zs;for(zs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ks;){let e=Ks;for(Ks=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function od(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ad(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Ma(s),Sp(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Ko(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ld(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ld(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ri)||(t.globalVersion=ri,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ko(t))))return;t.flags|=2;const e=t.dep,n=de,s=ot;de=t,ot=!0;try{od(t);const i=t.fn(t._value);(e.version===0||bt(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{de=n,ot=s,ad(t),t.flags&=-3}}function Ma(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Ma(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Sp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ot=!0;const cd=[];function Ht(){cd.push(ot),ot=!1}function Bt(){const t=cd.pop();ot=t===void 0?!0:t}function sc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=de;de=void 0;try{e()}finally{de=n}}}let ri=0;class Tp{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class La{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!de||!ot||de===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==de)n=this.activeLink=new Tp(de,this),de.deps?(n.prevDep=de.depsTail,de.depsTail.nextDep=n,de.depsTail=n):de.deps=de.depsTail=n,ud(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=de.depsTail,n.nextDep=void 0,de.depsTail.nextDep=n,de.depsTail=n,de.deps===n&&(de.deps=s)}return n}trigger(e){this.version++,ri++,this.notify(e)}notify(e){xa();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Da()}}}function ud(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)ud(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const zo=new WeakMap,On=Symbol(""),qo=Symbol(""),oi=Symbol("");function Ne(t,e,n){if(ot&&de){let s=zo.get(t);s||zo.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new La),i.map=s,i.key=n),i.track()}}function Ot(t,e,n,s,i,r){const o=zo.get(t);if(!o){ri++;return}const a=l=>{l&&l.trigger()};if(xa(),e==="clear")o.forEach(a);else{const l=V(t),c=l&&Na(n);if(l&&n==="length"){const u=Number(s);o.forEach((d,f)=>{(f==="length"||f===oi||!Ct(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(oi)),e){case"add":l?c&&a(o.get("length")):(a(o.get(On)),Zn(t)&&a(o.get(qo)));break;case"delete":l||(a(o.get(On)),Zn(t)&&a(o.get(qo)));break;case"set":Zn(t)&&a(o.get(On));break}}Da()}function jn(t){const e=ee(t);return e===t?e:(Ne(e,"iterate",oi),et(t)?e:e.map(lt))}function Br(t){return Ne(t=ee(t),"iterate",oi),t}function vt(t,e){return Wt(t)?cs(xn(t)?lt(e):e):lt(e)}const kp={__proto__:null,[Symbol.iterator](){return wo(this,Symbol.iterator,t=>vt(this,t))},concat(...t){return jn(this).concat(...t.map(e=>V(e)?jn(e):e))},entries(){return wo(this,"entries",t=>(t[1]=vt(this,t[1]),t))},every(t,e){return Pt(this,"every",t,e,void 0,arguments)},filter(t,e){return Pt(this,"filter",t,e,n=>n.map(s=>vt(this,s)),arguments)},find(t,e){return Pt(this,"find",t,e,n=>vt(this,n),arguments)},findIndex(t,e){return Pt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Pt(this,"findLast",t,e,n=>vt(this,n),arguments)},findLastIndex(t,e){return Pt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Pt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Io(this,"includes",t)},indexOf(...t){return Io(this,"indexOf",t)},join(t){return jn(this).join(t)},lastIndexOf(...t){return Io(this,"lastIndexOf",t)},map(t,e){return Pt(this,"map",t,e,void 0,arguments)},pop(){return Ds(this,"pop")},push(...t){return Ds(this,"push",t)},reduce(t,...e){return ic(this,"reduce",t,e)},reduceRight(t,...e){return ic(this,"reduceRight",t,e)},shift(){return Ds(this,"shift")},some(t,e){return Pt(this,"some",t,e,void 0,arguments)},splice(...t){return Ds(this,"splice",t)},toReversed(){return jn(this).toReversed()},toSorted(t){return jn(this).toSorted(t)},toSpliced(...t){return jn(this).toSpliced(...t)},unshift(...t){return Ds(this,"unshift",t)},values(){return wo(this,"values",t=>vt(this,t))}};function wo(t,e,n){const s=Br(t),i=s[e]();return s!==t&&!et(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.done||(r.value=n(r.value)),r}),i}const Rp=Array.prototype;function Pt(t,e,n,s,i,r){const o=Br(t),a=o!==t&&!et(t),l=o[e];if(l!==Rp[e]){const d=l.apply(t,r);return a?lt(d):d}let c=n;o!==t&&(a?c=function(d,f){return n.call(this,vt(t,d),f,t)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function ic(t,e,n,s){const i=Br(t),r=i!==t&&!et(t);let o=n,a=!1;i!==t&&(r?(a=s.length===0,o=function(c,u,d){return a&&(a=!1,c=vt(t,c)),n.call(this,c,vt(t,u),d,t)}):n.length>3&&(o=function(c,u,d){return n.call(this,c,u,d,t)}));const l=i[e](o,...s);return a?vt(t,l):l}function Io(t,e,n){const s=ee(t);Ne(s,"iterate",oi);const i=s[e](...n);return(i===-1||i===!1)&&$a(n[0])?(n[0]=ee(n[0]),s[e](...n)):i}function Ds(t,e,n=[]){Ht(),xa();const s=ee(t)[e].apply(t,n);return Da(),Bt(),s}const Pp=Ra("__proto__,__v_isRef,__isVue"),dd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ct));function Np(t){Ct(t)||(t=String(t));const e=ee(this);return Ne(e,"has",t),e.hasOwnProperty(t)}class hd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Hp:gd:r?_d:pd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=V(e);if(!i){let l;if(o&&(l=kp[n]))return l;if(n==="hasOwnProperty")return Np}const a=Reflect.get(e,n,Oe(e)?e:s);if((Ct(n)?dd.has(n):Pp(n))||(i||Ne(e,"get",n),r))return a;if(Oe(a)){const l=o&&Na(n)?a:a.value;return i&&ie(l)?Jo(l):l}return ie(a)?i?Jo(a):Yt(a):a}}class fd extends hd{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];const o=V(e)&&Na(n);if(!this._isShallow){const c=Wt(r);if(!et(s)&&!Wt(s)&&(r=ee(r),s=ee(s)),!o&&Oe(r)&&!Oe(s))return c||(r.value=s),!0}const a=o?Number(n)<e.length:te(e,n),l=Reflect.set(e,n,s,Oe(e)?e:i);return e===ee(i)&&(a?bt(s,r)&&Ot(e,"set",n,s):Ot(e,"add",n,s)),l}deleteProperty(e,n){const s=te(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Ot(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Ct(n)||!dd.has(n))&&Ne(e,"has",n),s}ownKeys(e){return Ne(e,"iterate",V(e)?"length":On),Reflect.ownKeys(e)}}class Ap extends hd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Op=new fd,xp=new Ap,Dp=new fd(!0);const Yo=t=>t,Wi=t=>Reflect.getPrototypeOf(t);function Mp(t,e,n){return function(...s){const i=this.__v_raw,r=ee(i),o=Zn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Yo:e?cs:lt;return!e&&Ne(r,"iterate",l?qo:On),xe(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function Vi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Lp(t,e){const n={get(i){const r=this.__v_raw,o=ee(r),a=ee(i);t||(bt(i,a)&&Ne(o,"get",i),Ne(o,"get",a));const{has:l}=Wi(o),c=e?Yo:t?cs:lt;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Ne(ee(i),"iterate",On),i.size},has(i){const r=this.__v_raw,o=ee(r),a=ee(i);return t||(bt(i,a)&&Ne(o,"has",i),Ne(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=ee(a),c=e?Yo:t?cs:lt;return!t&&Ne(l,"iterate",On),a.forEach((u,d)=>i.call(r,c(u),c(d),o))}};return xe(n,t?{add:Vi("add"),set:Vi("set"),delete:Vi("delete"),clear:Vi("clear")}:{add(i){const r=ee(this),o=Wi(r),a=ee(i),l=!e&&!et(i)&&!Wt(i)?a:i;return o.has.call(r,l)||bt(i,l)&&o.has.call(r,i)||bt(a,l)&&o.has.call(r,a)||(r.add(l),Ot(r,"add",l,l)),this},set(i,r){!e&&!et(r)&&!Wt(r)&&(r=ee(r));const o=ee(this),{has:a,get:l}=Wi(o);let c=a.call(o,i);c||(i=ee(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?bt(r,u)&&Ot(o,"set",i,r):Ot(o,"add",i,r),this},delete(i){const r=ee(this),{has:o,get:a}=Wi(r);let l=o.call(r,i);l||(i=ee(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&Ot(r,"delete",i,void 0),c},clear(){const i=ee(this),r=i.size!==0,o=i.clear();return r&&Ot(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Mp(i,t,e)}),n}function Fa(t,e){const n=Lp(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(te(n,i)&&i in s?n:s,i,r)}const Fp={get:Fa(!1,!1)},Up={get:Fa(!1,!0)},$p={get:Fa(!0,!1)};const pd=new WeakMap,_d=new WeakMap,gd=new WeakMap,Hp=new WeakMap;function Bp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wp(t){return t.__v_skip||!Object.isExtensible(t)?0:Bp(fp(t))}function Yt(t){return Wt(t)?t:Ua(t,!1,Op,Fp,pd)}function Vp(t){return Ua(t,!1,Dp,Up,_d)}function Jo(t){return Ua(t,!0,xp,$p,gd)}function Ua(t,e,n,s,i){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=Wp(t);if(r===0)return t;const o=i.get(t);if(o)return o;const a=new Proxy(t,r===2?s:n);return i.set(t,a),a}function xn(t){return Wt(t)?xn(t.__v_raw):!!(t&&t.__v_isReactive)}function Wt(t){return!!(t&&t.__v_isReadonly)}function et(t){return!!(t&&t.__v_isShallow)}function $a(t){return t?!!t.__v_raw:!1}function ee(t){const e=t&&t.__v_raw;return e?ee(e):t}function jp(t){return!te(t,"__v_skip")&&Object.isExtensible(t)&&Zu(t,"__v_skip",!0),t}const lt=t=>ie(t)?Yt(t):t,cs=t=>ie(t)?Jo(t):t;function Oe(t){return t?t.__v_isRef===!0:!1}function Pn(t){return Gp(t,!1)}function Gp(t,e){return Oe(t)?t:new Kp(t,e)}class Kp{constructor(e,n){this.dep=new La,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ee(e),this._value=n?e:lt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||et(e)||Wt(e);e=s?e:ee(e),bt(e,n)&&(this._rawValue=e,this._value=s?e:lt(e),this.dep.trigger())}}function S(t){return Oe(t)?t.value:t}const zp={get:(t,e,n)=>e==="__v_raw"?t:S(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Oe(i)&&!Oe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function md(t){return xn(t)?t:new Proxy(t,zp)}class qp{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new La(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ri-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&de!==this)return rd(this,!0),!0}get value(){const e=this.dep.track();return ld(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Yp(t,e,n=!1){let s,i;return K(t)?s=t:(s=t.get,i=t.set),new qp(s,i,n)}const ji={},ir=new WeakMap;let Tn;function Jp(t,e=!1,n=Tn){if(n){let s=ir.get(n);s||ir.set(n,s=[]),s.push(t)}}function Qp(t,e,n=ae){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=L=>i?L:et(L)||i===!1||i===0?xt(L,1):xt(L);let u,d,f,_,w=!1,y=!1;if(Oe(t)?(d=()=>t.value,w=et(t)):xn(t)?(d=()=>c(t),w=!0):V(t)?(y=!0,w=t.some(L=>xn(L)||et(L)),d=()=>t.map(L=>{if(Oe(L))return L.value;if(xn(L))return c(L);if(K(L))return l?l(L,2):L()})):K(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){Ht();try{f()}finally{Bt()}}const L=Tn;Tn=u;try{return l?l(t,3,[_]):t(_)}finally{Tn=L}}:d=wt,e&&i){const L=d,ye=i===!0?1/0:i;d=()=>xt(L(),ye)}const A=Cp(),$=()=>{u.stop(),A&&A.active&&Pa(A.effects,u)};if(r&&e){const L=e;e=(...ye)=>{L(...ye),$()}}let j=y?new Array(t.length).fill(ji):ji;const Q=L=>{if(!(!(u.flags&1)||!u.dirty&&!L))if(e){const ye=u.run();if(i||w||(y?ye.some((Qe,je)=>bt(Qe,j[je])):bt(ye,j))){f&&f();const Qe=Tn;Tn=u;try{const je=[ye,j===ji?void 0:y&&j[0]===ji?[]:j,_];j=ye,l?l(e,3,je):e(...je)}finally{Tn=Qe}}}else u.run()};return a&&a(Q),u=new sd(d),u.scheduler=o?()=>o(Q,!1):Q,_=L=>Jp(L,!1,u),f=u.onStop=()=>{const L=ir.get(u);if(L){if(l)l(L,4);else for(const ye of L)ye();ir.delete(u)}},e?s?Q(!0):j=u.run():o?o(Q.bind(null,!0),!0):u.run(),$.pause=u.pause.bind(u),$.resume=u.resume.bind(u),$.stop=$,$}function xt(t,e=1/0,n){if(e<=0||!ie(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Oe(t))xt(t.value,e,n);else if(V(t))for(let s=0;s<t.length;s++)xt(t[s],e,n);else if(qu(t)||Zn(t))t.forEach(s=>{xt(s,e,n)});else if(Qu(t)){for(const s in t)xt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&xt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ei(t,e,n,s){try{return s?t(...s):t()}catch(i){Wr(i,e,n)}}function St(t,e,n,s){if(K(t)){const i=Ei(t,e,n,s);return i&&Yu(i)&&i.catch(r=>{Wr(r,e,n)}),i}if(V(t)){const i=[];for(let r=0;r<t.length;r++)i.push(St(t[r],e,n,s));return i}}function Wr(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ae;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(r){Ht(),Ei(r,null,10,[t,l,c]),Bt();return}}Xp(t,n,i,s,o)}function Xp(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Le=[];let mt=-1;const es=[];let Zt=null,zn=0;const vd=Promise.resolve();let rr=null;function Zp(t){const e=rr||vd;return t?e.then(this?t.bind(this):t):e}function e_(t){let e=mt+1,n=Le.length;for(;e<n;){const s=e+n>>>1,i=Le[s],r=ai(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Ha(t){if(!(t.flags&1)){const e=ai(t),n=Le[Le.length-1];!n||!(t.flags&2)&&e>=ai(n)?Le.push(t):Le.splice(e_(e),0,t),t.flags|=1,yd()}}function yd(){rr||(rr=vd.then(wd))}function t_(t){V(t)?es.push(...t):Zt&&t.id===-1?Zt.splice(zn+1,0,t):t.flags&1||(es.push(t),t.flags|=1),yd()}function rc(t,e,n=mt+1){for(;n<Le.length;n++){const s=Le[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Le.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function bd(t){if(es.length){const e=[...new Set(es)].sort((n,s)=>ai(n)-ai(s));if(es.length=0,Zt){Zt.push(...e);return}for(Zt=e,zn=0;zn<Zt.length;zn++){const n=Zt[zn];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Zt=null,zn=0}}const ai=t=>t.id==null?t.flags&2?-1:1/0:t.id;function wd(t){try{for(mt=0;mt<Le.length;mt++){const e=Le[mt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ei(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;mt<Le.length;mt++){const e=Le[mt];e&&(e.flags&=-2)}mt=-1,Le.length=0,bd(),rr=null,(Le.length||es.length)&&wd()}}let Xe=null,Id=null;function or(t){const e=Xe;return Xe=t,Id=t&&t.type.__scopeId||null,e}function n_(t,e=Xe,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&gc(-1);const r=or(e);let o;try{o=t(...i)}finally{or(r),s._d&&gc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function en(t,e){if(Xe===null)return t;const n=Kr(Xe),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=ae]=e[i];r&&(K(r)&&(r={mounted:r,updated:r}),r.deep&&xt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Cn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Ht(),St(l,n,8,[t.el,a,t,e]),Bt())}}function s_(t,e){if(Fe){let n=Fe.provides;const s=Fe.parent&&Fe.parent.provides;s===n&&(n=Fe.provides=Object.create(s)),n[t]=e}}function Qi(t,e,n=!1){const s=tg();if(s||ns){let i=ns?ns._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&K(e)?e.call(s&&s.proxy):e}}const i_=Symbol.for("v-scx"),r_=()=>Qi(i_);function ts(t,e,n){return Ed(t,e,n)}function Ed(t,e,n=ae){const{immediate:s,deep:i,flush:r,once:o}=n,a=xe({},n),l=e&&s||!e&&r!=="post";let c;if(ci){if(r==="sync"){const _=r_();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=wt,_.resume=wt,_.pause=wt,_}}const u=Fe;a.call=(_,w,y)=>St(_,u,w,y);let d=!1;r==="post"?a.scheduler=_=>{Be(_,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(_,w)=>{w?_():Ha(_)}),a.augmentJob=_=>{e&&(_.flags|=4),d&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const f=Qp(t,e,a);return ci&&(c?c.push(f):l&&f()),f}function o_(t,e,n){const s=this.proxy,i=be(t)?t.includes(".")?Cd(s,t):()=>s[t]:t.bind(s,s);let r;K(e)?r=e:(r=e.handler,n=e);const o=Ci(this),a=Ed(i,r.bind(s),n);return o(),a}function Cd(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const a_=Symbol("_vte"),l_=t=>t.__isTeleport,c_=Symbol("_leaveCb");function Ba(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ba(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Sd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function oc(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const ar=new WeakMap;function qs(t,e,n,s,i=!1){if(V(t)){t.forEach((y,A)=>qs(y,e&&(V(e)?e[A]:e),n,s,i));return}if(Ys(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&qs(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Kr(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ae?a.refs={}:a.refs,d=a.setupState,f=ee(d),_=d===ae?zu:y=>oc(u,y)?!1:te(f,y),w=(y,A)=>!(A&&oc(u,A));if(c!=null&&c!==l){if(ac(e),be(c))u[c]=null,_(c)&&(d[c]=null);else if(Oe(c)){const y=e;w(c,y.k)&&(c.value=null),y.k&&(u[y.k]=null)}}if(K(l))Ei(l,a,12,[o,u]);else{const y=be(l),A=Oe(l);if(y||A){const $=()=>{if(t.f){const j=y?_(l)?d[l]:u[l]:w()||!t.k?l.value:u[t.k];if(i)V(j)&&Pa(j,r);else if(V(j))j.includes(r)||j.push(r);else if(y)u[l]=[r],_(l)&&(d[l]=u[l]);else{const Q=[r];w(l,t.k)&&(l.value=Q),t.k&&(u[t.k]=Q)}}else y?(u[l]=o,_(l)&&(d[l]=o)):A&&(w(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const j=()=>{$(),ar.delete(t)};j.id=-1,ar.set(t,j),Be(j,n)}else ac(t),$()}}}function ac(t){const e=ar.get(t);e&&(e.flags|=8,ar.delete(t))}Hr().requestIdleCallback;Hr().cancelIdleCallback;const Ys=t=>!!t.type.__asyncLoader,Td=t=>t.type.__isKeepAlive;function u_(t,e){kd(t,"a",e)}function d_(t,e){kd(t,"da",e)}function kd(t,e,n=Fe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Vr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Td(i.parent.vnode)&&h_(s,e,n,i),i=i.parent}}function h_(t,e,n,s){const i=Vr(e,t,s,!0);Va(()=>{Pa(s[e],i)},n)}function Vr(t,e,n=Fe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Ht();const a=Ci(n),l=St(e,n,t,o);return a(),Bt(),l});return s?i.unshift(r):i.push(r),r}}const Jt=t=>(e,n=Fe)=>{(!ci||t==="sp")&&Vr(t,(...s)=>e(...s),n)},f_=Jt("bm"),Wa=Jt("m"),p_=Jt("bu"),__=Jt("u"),g_=Jt("bum"),Va=Jt("um"),m_=Jt("sp"),v_=Jt("rtg"),y_=Jt("rtc");function b_(t,e=Fe){Vr("ec",t,e)}const w_=Symbol.for("v-ndc");function Vt(t,e,n,s){let i;const r=n,o=V(t);if(o||be(t)){const a=o&&xn(t);let l=!1,c=!1;a&&(l=!et(t),c=Wt(t),t=Br(t)),i=new Array(t.length);for(let u=0,d=t.length;u<d;u++)i[u]=e(l?c?cs(lt(t[u])):lt(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(ie(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}const Qo=t=>t?qd(t)?Kr(t):Qo(t.parent):null,Js=xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qo(t.parent),$root:t=>Qo(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Pd(t),$forceUpdate:t=>t.f||(t.f=()=>{Ha(t.update)}),$nextTick:t=>t.n||(t.n=Zp.bind(t.proxy)),$watch:t=>o_.bind(t)}),Eo=(t,e)=>t!==ae&&!t.__isScriptSetup&&te(t,e),I_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Eo(s,e))return o[e]=1,s[e];if(i!==ae&&te(i,e))return o[e]=2,i[e];if(te(r,e))return o[e]=3,r[e];if(n!==ae&&te(n,e))return o[e]=4,n[e];Xo&&(o[e]=0)}}const c=Js[e];let u,d;if(c)return e==="$attrs"&&Ne(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==ae&&te(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,te(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Eo(i,e)?(i[e]=n,!0):s!==ae&&te(s,e)?(s[e]=n,!0):te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,props:r,type:o}},a){let l;return!!(n[a]||t!==ae&&a[0]!=="$"&&te(t,a)||Eo(e,a)||te(r,a)||te(s,a)||te(Js,a)||te(i.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function lc(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xo=!0;function E_(t){const e=Pd(t),n=t.proxy,s=t.ctx;Xo=!1,e.beforeCreate&&cc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:_,updated:w,activated:y,deactivated:A,beforeDestroy:$,beforeUnmount:j,destroyed:Q,unmounted:L,render:ye,renderTracked:Qe,renderTriggered:je,errorCaptured:ut,serverPrefetch:Qt,expose:Rt,inheritAttrs:Ns,components:Ui,directives:$i,filters:go}=e;if(c&&C_(c,s,null),o)for(const ge in o){const ce=o[ge];K(ce)&&(s[ge]=ce.bind(n))}if(i){const ge=i.call(n,n);ie(ge)&&(t.data=Yt(ge))}if(Xo=!0,r)for(const ge in r){const ce=r[ge],In=K(ce)?ce.bind(n,n):K(ce.get)?ce.get.bind(n,n):wt,Hi=!K(ce)&&K(ce.set)?ce.set.bind(n):wt,En=G({get:In,set:Hi});Object.defineProperty(s,ge,{enumerable:!0,configurable:!0,get:()=>En.value,set:dt=>En.value=dt})}if(a)for(const ge in a)Rd(a[ge],s,n,ge);if(l){const ge=K(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(ce=>{s_(ce,ge[ce])})}u&&cc(u,t,"c");function De(ge,ce){V(ce)?ce.forEach(In=>ge(In.bind(n))):ce&&ge(ce.bind(n))}if(De(f_,d),De(Wa,f),De(p_,_),De(__,w),De(u_,y),De(d_,A),De(b_,ut),De(y_,Qe),De(v_,je),De(g_,j),De(Va,L),De(m_,Qt),V(Rt))if(Rt.length){const ge=t.exposed||(t.exposed={});Rt.forEach(ce=>{Object.defineProperty(ge,ce,{get:()=>n[ce],set:In=>n[ce]=In,enumerable:!0})})}else t.exposed||(t.exposed={});ye&&t.render===wt&&(t.render=ye),Ns!=null&&(t.inheritAttrs=Ns),Ui&&(t.components=Ui),$i&&(t.directives=$i),Qt&&Sd(t)}function C_(t,e,n=wt){V(t)&&(t=Zo(t));for(const s in t){const i=t[s];let r;ie(i)?"default"in i?r=Qi(i.from||s,i.default,!0):r=Qi(i.from||s):r=Qi(i),Oe(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function cc(t,e,n){St(V(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rd(t,e,n,s){let i=s.includes(".")?Cd(n,s):()=>n[s];if(be(t)){const r=e[t];K(r)&&ts(i,r)}else if(K(t))ts(i,t.bind(n));else if(ie(t))if(V(t))t.forEach(r=>Rd(r,e,n,s));else{const r=K(t.handler)?t.handler.bind(n):e[t.handler];K(r)&&ts(i,r,t)}}function Pd(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>lr(l,c,o,!0)),lr(l,e,o)),ie(e)&&r.set(e,l),l}function lr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&lr(t,r,n,!0),i&&i.forEach(o=>lr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=S_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const S_={data:uc,props:dc,emits:dc,methods:Vs,computed:Vs,beforeCreate:Me,created:Me,beforeMount:Me,mounted:Me,beforeUpdate:Me,updated:Me,beforeDestroy:Me,beforeUnmount:Me,destroyed:Me,unmounted:Me,activated:Me,deactivated:Me,errorCaptured:Me,serverPrefetch:Me,components:Vs,directives:Vs,watch:k_,provide:uc,inject:T_};function uc(t,e){return e?t?function(){return xe(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function T_(t,e){return Vs(Zo(t),Zo(e))}function Zo(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Me(t,e){return t?[...new Set([].concat(t,e))]:e}function Vs(t,e){return t?xe(Object.create(null),t,e):e}function dc(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:xe(Object.create(null),lc(t),lc(e??{})):e}function k_(t,e){if(!t)return e;if(!e)return t;const n=xe(Object.create(null),t);for(const s in e)n[s]=Me(t[s],e[s]);return n}function Nd(){return{app:null,config:{isNativeTag:zu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let R_=0;function P_(t,e){return function(s,i=null){K(s)||(s=xe({},s)),i!=null&&!ie(i)&&(i=null);const r=Nd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:R_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:ag,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&K(u.install)?(o.add(u),u.install(c,...d)):K(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const _=c._ceVNode||fe(s,i);return _.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(_,u,f),l=!0,c._container=u,u.__vue_app__=c,Kr(_.component)}},onUnmount(u){a.push(u)},unmount(){l&&(St(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=ns;ns=c;try{return u()}finally{ns=d}}};return c}}let ns=null;const N_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${rt(e)}Modifiers`]||t[`${bn(e)}Modifiers`];function A_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ae;let i=n;const r=e.startsWith("update:"),o=r&&N_(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>be(u)?u.trim():u)),o.number&&(i=n.map(Aa)));let a,l=s[a=vo(e)]||s[a=vo(rt(e))];!l&&r&&(l=s[a=vo(bn(e))]),l&&St(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,St(c,t,6,i)}}const O_=new WeakMap;function Ad(t,e,n=!1){const s=n?O_:e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!K(t)){const l=c=>{const u=Ad(c,e,!0);u&&(a=!0,xe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ie(t)&&s.set(t,null),null):(V(r)?r.forEach(l=>o[l]=null):xe(o,r),ie(t)&&s.set(t,o),o)}function jr(t,e){return!t||!Fr(e)?!1:(e=e.slice(2).replace(/Once$/,""),te(t,e[0].toLowerCase()+e.slice(1))||te(t,bn(e))||te(t,e))}function hc(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:_,ctx:w,inheritAttrs:y}=t,A=or(t);let $,j;try{if(n.shapeFlag&4){const L=i||s,ye=L;$=yt(c.call(ye,L,u,d,_,f,w)),j=a}else{const L=e;$=yt(L.length>1?L(d,{attrs:a,slots:o,emit:l}):L(d,null)),j=e.props?a:x_(a)}}catch(L){Qs.length=0,Wr(L,t,1),$=fe(fn)}let Q=$;if(j&&y!==!1){const L=Object.keys(j),{shapeFlag:ye}=Q;L.length&&ye&7&&(r&&L.some(Ur)&&(j=D_(j,r)),Q=ds(Q,j,!1,!0))}return n.dirs&&(Q=ds(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&Ba(Q,n.transition),$=Q,or(A),$}const x_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Fr(n))&&((e||(e={}))[n]=t[n]);return e},D_=(t,e)=>{const n={};for(const s in t)(!Ur(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function M_(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?fc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(Od(o,s,f)&&!jr(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?fc(s,o,c):!0:!!o;return!1}function fc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(Od(e,t,r)&&!jr(n,r))return!0}return!1}function Od(t,e,n){const s=t[n],i=e[n];return n==="style"&&ie(s)&&ie(i)?!Oa(s,i):s!==i}function L_({vnode:t,parent:e,suspense:n},s){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.suspense.vnode.el=i.el=s,t=i),i===t)(t=e.vnode).el=s,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=s)}const xd={},Dd=()=>Object.create(xd),Md=t=>Object.getPrototypeOf(t)===xd;function F_(t,e,n,s=!1){const i={},r=Dd();t.propsDefaults=Object.create(null),Ld(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Vp(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function U_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ee(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(jr(t.emitsOptions,f))continue;const _=e[f];if(l)if(te(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const w=rt(f);i[w]=ea(l,a,w,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{Ld(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!te(e,d)&&((u=bn(d))===d||!te(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=ea(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!te(e,d))&&(delete r[d],c=!0)}c&&Ot(t.attrs,"set","")}function Ld(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Gs(l))continue;const c=e[l];let u;i&&te(i,u=rt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:jr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ee(n),c=a||ae;for(let u=0;u<r.length;u++){const d=r[u];n[d]=ea(i,l,d,c[d],t,!te(c,d))}}return o}function ea(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=te(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&K(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Ci(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===bn(n))&&(s=!0))}return s}const $_=new WeakMap;function Fd(t,e,n=!1){const s=n?$_:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!K(t)){const u=d=>{l=!0;const[f,_]=Fd(d,e,!0);xe(o,f),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ie(t)&&s.set(t,Xn),Xn;if(V(r))for(let u=0;u<r.length;u++){const d=rt(r[u]);pc(d)&&(o[d]=ae)}else if(r)for(const u in r){const d=rt(u);if(pc(d)){const f=r[u],_=o[d]=V(f)||K(f)?{type:f}:xe({},f),w=_.type;let y=!1,A=!0;if(V(w))for(let $=0;$<w.length;++$){const j=w[$],Q=K(j)&&j.name;if(Q==="Boolean"){y=!0;break}else Q==="String"&&(A=!1)}else y=K(w)&&w.name==="Boolean";_[0]=y,_[1]=A,(y||te(_,"default"))&&a.push(d)}}const c=[o,a];return ie(t)&&s.set(t,c),c}function pc(t){return t[0]!=="$"&&!Gs(t)}const ja=t=>t==="_"||t==="_ctx"||t==="$stable",Ga=t=>V(t)?t.map(yt):[yt(t)],H_=(t,e,n)=>{if(e._n)return e;const s=n_((...i)=>Ga(e(...i)),n);return s._c=!1,s},Ud=(t,e,n)=>{const s=t._ctx;for(const i in t){if(ja(i))continue;const r=t[i];if(K(r))e[i]=H_(i,r,s);else if(r!=null){const o=Ga(r);e[i]=()=>o}}},$d=(t,e)=>{const n=Ga(e);t.slots.default=()=>n},Hd=(t,e,n)=>{for(const s in e)(n||!ja(s))&&(t[s]=e[s])},B_=(t,e,n)=>{const s=t.slots=Dd();if(t.vnode.shapeFlag&32){const i=e._;i?(Hd(s,e,n),n&&Zu(s,"_",i,!0)):Ud(e,s)}else e&&$d(t,e)},W_=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ae;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Hd(i,e,n):(r=!e.$stable,Ud(e,i)),o=e}else e&&($d(t,e),o={default:1});if(r)for(const a in i)!ja(a)&&o[a]==null&&delete i[a]},Be=z_;function V_(t){return j_(t)}function j_(t,e){const n=Hr();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:_=wt,insertStaticContent:w}=t,y=(h,p,m,C=null,b=null,I=null,P=void 0,R=null,k=!!p.dynamicChildren)=>{if(h===p)return;h&&!Ms(h,p)&&(C=Bi(h),dt(h,b,I,!0),h=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:E,ref:F,shapeFlag:N}=p;switch(E){case Gr:A(h,p,m,C);break;case fn:$(h,p,m,C);break;case So:h==null&&j(p,m,C,P);break;case pe:Ui(h,p,m,C,b,I,P,R,k);break;default:N&1?ye(h,p,m,C,b,I,P,R,k):N&6?$i(h,p,m,C,b,I,P,R,k):(N&64||N&128)&&E.process(h,p,m,C,b,I,P,R,k,Os)}F!=null&&b?qs(F,h&&h.ref,I,p||h,!p):F==null&&h&&h.ref!=null&&qs(h.ref,null,I,h,!0)},A=(h,p,m,C)=>{if(h==null)s(p.el=a(p.children),m,C);else{const b=p.el=h.el;p.children!==h.children&&c(b,p.children)}},$=(h,p,m,C)=>{h==null?s(p.el=l(p.children||""),m,C):p.el=h.el},j=(h,p,m,C)=>{[h.el,h.anchor]=w(h.children,p,m,C,h.el,h.anchor)},Q=({el:h,anchor:p},m,C)=>{let b;for(;h&&h!==p;)b=f(h),s(h,m,C),h=b;s(p,m,C)},L=({el:h,anchor:p})=>{let m;for(;h&&h!==p;)m=f(h),i(h),h=m;i(p)},ye=(h,p,m,C,b,I,P,R,k)=>{if(p.type==="svg"?P="svg":p.type==="math"&&(P="mathml"),h==null)Qe(p,m,C,b,I,P,R,k);else{const E=h.el&&h.el._isVueCE?h.el:null;try{E&&E._beginPatch(),Qt(h,p,b,I,P,R,k)}finally{E&&E._endPatch()}}},Qe=(h,p,m,C,b,I,P,R)=>{let k,E;const{props:F,shapeFlag:N,transition:D,dirs:H}=h;if(k=h.el=o(h.type,I,F&&F.is,F),N&8?u(k,h.children):N&16&&ut(h.children,k,null,C,b,Co(h,I),P,R),H&&Cn(h,null,C,"created"),je(k,h,h.scopeId,P,C),F){for(const re in F)re!=="value"&&!Gs(re)&&r(k,re,null,F[re],I,C);"value"in F&&r(k,"value",null,F.value,I),(E=F.onVnodeBeforeMount)&&_t(E,C,h)}H&&Cn(h,null,C,"beforeMount");const X=G_(b,D);X&&D.beforeEnter(k),s(k,p,m),((E=F&&F.onVnodeMounted)||X||H)&&Be(()=>{try{E&&_t(E,C,h),X&&D.enter(k),H&&Cn(h,null,C,"mounted")}finally{}},b)},je=(h,p,m,C,b)=>{if(m&&_(h,m),C)for(let I=0;I<C.length;I++)_(h,C[I]);if(b){let I=b.subTree;if(p===I||jd(I.type)&&(I.ssContent===p||I.ssFallback===p)){const P=b.vnode;je(h,P,P.scopeId,P.slotScopeIds,b.parent)}}},ut=(h,p,m,C,b,I,P,R,k=0)=>{for(let E=k;E<h.length;E++){const F=h[E]=R?At(h[E]):yt(h[E]);y(null,F,p,m,C,b,I,P,R)}},Qt=(h,p,m,C,b,I,P)=>{const R=p.el=h.el;let{patchFlag:k,dynamicChildren:E,dirs:F}=p;k|=h.patchFlag&16;const N=h.props||ae,D=p.props||ae;let H;if(m&&Sn(m,!1),(H=D.onVnodeBeforeUpdate)&&_t(H,m,p,h),F&&Cn(p,h,m,"beforeUpdate"),m&&Sn(m,!0),(N.innerHTML&&D.innerHTML==null||N.textContent&&D.textContent==null)&&u(R,""),E?Rt(h.dynamicChildren,E,R,m,C,Co(p,b),I):P||ce(h,p,R,null,m,C,Co(p,b),I,!1),k>0){if(k&16)Ns(R,N,D,m,b);else if(k&2&&N.class!==D.class&&r(R,"class",null,D.class,b),k&4&&r(R,"style",N.style,D.style,b),k&8){const X=p.dynamicProps;for(let re=0;re<X.length;re++){const ue=X[re],we=N[ue],ke=D[ue];(ke!==we||ue==="value")&&r(R,ue,we,ke,b,m)}}k&1&&h.children!==p.children&&u(R,p.children)}else!P&&E==null&&Ns(R,N,D,m,b);((H=D.onVnodeUpdated)||F)&&Be(()=>{H&&_t(H,m,p,h),F&&Cn(p,h,m,"updated")},C)},Rt=(h,p,m,C,b,I,P)=>{for(let R=0;R<p.length;R++){const k=h[R],E=p[R],F=k.el&&(k.type===pe||!Ms(k,E)||k.shapeFlag&198)?d(k.el):m;y(k,E,F,null,C,b,I,P,!0)}},Ns=(h,p,m,C,b)=>{if(p!==m){if(p!==ae)for(const I in p)!Gs(I)&&!(I in m)&&r(h,I,p[I],null,b,C);for(const I in m){if(Gs(I))continue;const P=m[I],R=p[I];P!==R&&I!=="value"&&r(h,I,R,P,b,C)}"value"in m&&r(h,"value",p.value,m.value,b)}},Ui=(h,p,m,C,b,I,P,R,k)=>{const E=p.el=h?h.el:a(""),F=p.anchor=h?h.anchor:a("");let{patchFlag:N,dynamicChildren:D,slotScopeIds:H}=p;H&&(R=R?R.concat(H):H),h==null?(s(E,m,C),s(F,m,C),ut(p.children||[],m,F,b,I,P,R,k)):N>0&&N&64&&D&&h.dynamicChildren&&h.dynamicChildren.length===D.length?(Rt(h.dynamicChildren,D,m,b,I,P,R),(p.key!=null||b&&p===b.subTree)&&Bd(h,p,!0)):ce(h,p,m,F,b,I,P,R,k)},$i=(h,p,m,C,b,I,P,R,k)=>{p.slotScopeIds=R,h==null?p.shapeFlag&512?b.ctx.activate(p,m,C,P,k):go(p,m,C,b,I,P,k):Yl(h,p,k)},go=(h,p,m,C,b,I,P)=>{const R=h.component=eg(h,C,b);if(Td(h)&&(R.ctx.renderer=Os),ng(R,!1,P),R.asyncDep){if(b&&b.registerDep(R,De,P),!h.el){const k=R.subTree=fe(fn);$(null,k,p,m),h.placeholder=k.el}}else De(R,h,p,m,b,I,P)},Yl=(h,p,m)=>{const C=p.component=h.component;if(M_(h,p,m))if(C.asyncDep&&!C.asyncResolved){ge(C,p,m);return}else C.next=p,C.update();else p.el=h.el,C.vnode=p},De=(h,p,m,C,b,I,P)=>{const R=()=>{if(h.isMounted){let{next:N,bu:D,u:H,parent:X,vnode:re}=h;{const ft=Wd(h);if(ft){N&&(N.el=re.el,ge(h,N,P)),ft.asyncDep.then(()=>{Be(()=>{h.isUnmounted||E()},b)});return}}let ue=N,we;Sn(h,!1),N?(N.el=re.el,ge(h,N,P)):N=re,D&&Ji(D),(we=N.props&&N.props.onVnodeBeforeUpdate)&&_t(we,X,N,re),Sn(h,!0);const ke=hc(h),ht=h.subTree;h.subTree=ke,y(ht,ke,d(ht.el),Bi(ht),h,b,I),N.el=ke.el,ue===null&&L_(h,ke.el),H&&Be(H,b),(we=N.props&&N.props.onVnodeUpdated)&&Be(()=>_t(we,X,N,re),b)}else{let N;const{el:D,props:H}=p,{bm:X,m:re,parent:ue,root:we,type:ke}=h,ht=Ys(p);Sn(h,!1),X&&Ji(X),!ht&&(N=H&&H.onVnodeBeforeMount)&&_t(N,ue,p),Sn(h,!0);{we.ce&&we.ce._hasShadowRoot()&&we.ce._injectChildStyle(ke,h.parent?h.parent.type:void 0);const ft=h.subTree=hc(h);y(null,ft,m,C,h,b,I),p.el=ft.el}if(re&&Be(re,b),!ht&&(N=H&&H.onVnodeMounted)){const ft=p;Be(()=>_t(N,ue,ft),b)}(p.shapeFlag&256||ue&&Ys(ue.vnode)&&ue.vnode.shapeFlag&256)&&h.a&&Be(h.a,b),h.isMounted=!0,p=m=C=null}};h.scope.on();const k=h.effect=new sd(R);h.scope.off();const E=h.update=k.run.bind(k),F=h.job=k.runIfDirty.bind(k);F.i=h,F.id=h.uid,k.scheduler=()=>Ha(F),Sn(h,!0),E()},ge=(h,p,m)=>{p.component=h;const C=h.vnode.props;h.vnode=p,h.next=null,U_(h,p.props,C,m),W_(h,p.children,m),Ht(),rc(h),Bt()},ce=(h,p,m,C,b,I,P,R,k=!1)=>{const E=h&&h.children,F=h?h.shapeFlag:0,N=p.children,{patchFlag:D,shapeFlag:H}=p;if(D>0){if(D&128){Hi(E,N,m,C,b,I,P,R,k);return}else if(D&256){In(E,N,m,C,b,I,P,R,k);return}}H&8?(F&16&&As(E,b,I),N!==E&&u(m,N)):F&16?H&16?Hi(E,N,m,C,b,I,P,R,k):As(E,b,I,!0):(F&8&&u(m,""),H&16&&ut(N,m,C,b,I,P,R,k))},In=(h,p,m,C,b,I,P,R,k)=>{h=h||Xn,p=p||Xn;const E=h.length,F=p.length,N=Math.min(E,F);let D;for(D=0;D<N;D++){const H=p[D]=k?At(p[D]):yt(p[D]);y(h[D],H,m,null,b,I,P,R,k)}E>F?As(h,b,I,!0,!1,N):ut(p,m,C,b,I,P,R,k,N)},Hi=(h,p,m,C,b,I,P,R,k)=>{let E=0;const F=p.length;let N=h.length-1,D=F-1;for(;E<=N&&E<=D;){const H=h[E],X=p[E]=k?At(p[E]):yt(p[E]);if(Ms(H,X))y(H,X,m,null,b,I,P,R,k);else break;E++}for(;E<=N&&E<=D;){const H=h[N],X=p[D]=k?At(p[D]):yt(p[D]);if(Ms(H,X))y(H,X,m,null,b,I,P,R,k);else break;N--,D--}if(E>N){if(E<=D){const H=D+1,X=H<F?p[H].el:C;for(;E<=D;)y(null,p[E]=k?At(p[E]):yt(p[E]),m,X,b,I,P,R,k),E++}}else if(E>D)for(;E<=N;)dt(h[E],b,I,!0),E++;else{const H=E,X=E,re=new Map;for(E=X;E<=D;E++){const Ge=p[E]=k?At(p[E]):yt(p[E]);Ge.key!=null&&re.set(Ge.key,E)}let ue,we=0;const ke=D-X+1;let ht=!1,ft=0;const xs=new Array(ke);for(E=0;E<ke;E++)xs[E]=0;for(E=H;E<=N;E++){const Ge=h[E];if(we>=ke){dt(Ge,b,I,!0);continue}let pt;if(Ge.key!=null)pt=re.get(Ge.key);else for(ue=X;ue<=D;ue++)if(xs[ue-X]===0&&Ms(Ge,p[ue])){pt=ue;break}pt===void 0?dt(Ge,b,I,!0):(xs[pt-X]=E+1,pt>=ft?ft=pt:ht=!0,y(Ge,p[pt],m,null,b,I,P,R,k),we++)}const Xl=ht?K_(xs):Xn;for(ue=Xl.length-1,E=ke-1;E>=0;E--){const Ge=X+E,pt=p[Ge],Zl=p[Ge+1],ec=Ge+1<F?Zl.el||Vd(Zl):C;xs[E]===0?y(null,pt,m,ec,b,I,P,R,k):ht&&(ue<0||E!==Xl[ue]?En(pt,m,ec,2):ue--)}}},En=(h,p,m,C,b=null)=>{const{el:I,type:P,transition:R,children:k,shapeFlag:E}=h;if(E&6){En(h.component.subTree,p,m,C);return}if(E&128){h.suspense.move(p,m,C);return}if(E&64){P.move(h,p,m,Os);return}if(P===pe){s(I,p,m);for(let N=0;N<k.length;N++)En(k[N],p,m,C);s(h.anchor,p,m);return}if(P===So){Q(h,p,m);return}if(C!==2&&E&1&&R)if(C===0)R.beforeEnter(I),s(I,p,m),Be(()=>R.enter(I),b);else{const{leave:N,delayLeave:D,afterLeave:H}=R,X=()=>{h.ctx.isUnmounted?i(I):s(I,p,m)},re=()=>{I._isLeaving&&I[c_](!0),N(I,()=>{X(),H&&H()})};D?D(I,X,re):re()}else s(I,p,m)},dt=(h,p,m,C=!1,b=!1)=>{const{type:I,props:P,ref:R,children:k,dynamicChildren:E,shapeFlag:F,patchFlag:N,dirs:D,cacheIndex:H,memo:X}=h;if(N===-2&&(b=!1),R!=null&&(Ht(),qs(R,null,m,h,!0),Bt()),H!=null&&(p.renderCache[H]=void 0),F&256){p.ctx.deactivate(h);return}const re=F&1&&D,ue=!Ys(h);let we;if(ue&&(we=P&&P.onVnodeBeforeUnmount)&&_t(we,p,h),F&6)dp(h.component,m,C);else{if(F&128){h.suspense.unmount(m,C);return}re&&Cn(h,null,p,"beforeUnmount"),F&64?h.type.remove(h,p,m,Os,C):E&&!E.hasOnce&&(I!==pe||N>0&&N&64)?As(E,p,m,!1,!0):(I===pe&&N&384||!b&&F&16)&&As(k,p,m),C&&Jl(h)}const ke=X!=null&&H==null;(ue&&(we=P&&P.onVnodeUnmounted)||re||ke)&&Be(()=>{we&&_t(we,p,h),re&&Cn(h,null,p,"unmounted"),ke&&(h.el=null)},m)},Jl=h=>{const{type:p,el:m,anchor:C,transition:b}=h;if(p===pe){up(m,C);return}if(p===So){L(h);return}const I=()=>{i(m),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(h.shapeFlag&1&&b&&!b.persisted){const{leave:P,delayLeave:R}=b,k=()=>P(m,I);R?R(h.el,I,k):k()}else I()},up=(h,p)=>{let m;for(;h!==p;)m=f(h),i(h),h=m;i(p)},dp=(h,p,m)=>{const{bum:C,scope:b,job:I,subTree:P,um:R,m:k,a:E}=h;_c(k),_c(E),C&&Ji(C),b.stop(),I&&(I.flags|=8,dt(P,h,p,m)),R&&Be(R,p),Be(()=>{h.isUnmounted=!0},p)},As=(h,p,m,C=!1,b=!1,I=0)=>{for(let P=I;P<h.length;P++)dt(h[P],p,m,C,b)},Bi=h=>{if(h.shapeFlag&6)return Bi(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const p=f(h.anchor||h.el),m=p&&p[a_];return m?f(m):p};let mo=!1;const Ql=(h,p,m)=>{let C;h==null?p._vnode&&(dt(p._vnode,null,null,!0),C=p._vnode.component):y(p._vnode||null,h,p,null,null,null,m),p._vnode=h,mo||(mo=!0,rc(C),bd(),mo=!1)},Os={p:y,um:dt,m:En,r:Jl,mt:go,mc:ut,pc:ce,pbc:Rt,n:Bi,o:t};return{render:Ql,hydrate:void 0,createApp:P_(Ql)}}function Co({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Sn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function G_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Bd(t,e,n=!1){const s=t.children,i=e.children;if(V(s)&&V(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=At(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Bd(o,a)),a.type===Gr&&(a.patchFlag===-1&&(a=i[r]=At(a)),a.el=o.el),a.type===fn&&!a.el&&(a.el=o.el)}}function K_(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Wd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wd(e)}function _c(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Vd(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Vd(e.subTree):null}const jd=t=>t.__isSuspense;function z_(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):t_(t)}const pe=Symbol.for("v-fgt"),Gr=Symbol.for("v-txt"),fn=Symbol.for("v-cmt"),So=Symbol.for("v-stc"),Qs=[];let Ke=null;function M(t=!1){Qs.push(Ke=t?null:[])}function q_(){Qs.pop(),Ke=Qs[Qs.length-1]||null}let li=1;function gc(t,e=!1){li+=t,t<0&&Ke&&e&&(Ke.hasOnce=!0)}function Gd(t){return t.dynamicChildren=li>0?Ke||Xn:null,q_(),li>0&&Ke&&Ke.push(t),t}function W(t,e,n,s,i,r){return Gd(g(t,e,n,s,i,r,!0))}function us(t,e,n,s,i){return Gd(fe(t,e,n,s,i,!0))}function Kd(t){return t?t.__v_isVNode===!0:!1}function Ms(t,e){return t.type===e.type&&t.key===e.key}const zd=({key:t})=>t??null,Xi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?be(t)||Oe(t)||K(t)?{i:Xe,r:t,k:e,f:!!n}:t:null);function g(t,e=null,n=null,s=0,i=null,r=t===pe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zd(e),ref:e&&Xi(e),scopeId:Id,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Xe};return a?(Ka(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=be(n)?8:16),li>0&&!o&&Ke&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ke.push(l),l}const fe=Y_;function Y_(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===w_)&&(t=fn),Kd(t)){const a=ds(t,e,!0);return n&&Ka(a,n),li>0&&!r&&Ke&&(a.shapeFlag&6?Ke[Ke.indexOf(t)]=a:Ke.push(a)),a.patchFlag=-2,a}if(og(t)&&(t=t.__vccOpts),e){e=J_(e);let{class:a,style:l}=e;a&&!be(a)&&(e.class=oe(a)),ie(l)&&($a(l)&&!V(l)&&(l=xe({},l)),e.style=ws(l))}const o=be(t)?1:jd(t)?128:l_(t)?64:ie(t)?4:K(t)?2:0;return g(t,e,n,s,i,o,r,!0)}function J_(t){return t?$a(t)||Md(t)?xe({},t):t:null}function ds(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?Q_(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&zd(c),ref:e&&e.ref?n&&r?V(r)?r.concat(Xi(e)):[r,Xi(e)]:Xi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==pe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ds(t.ssContent),ssFallback:t.ssFallback&&ds(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Ba(u,l.clone(u)),u}function st(t=" ",e=0){return fe(Gr,null,t,e)}function jt(t="",e=!1){return e?(M(),us(fn,null,t)):fe(fn,null,t)}function yt(t){return t==null||typeof t=="boolean"?fe(fn):V(t)?fe(pe,null,t.slice()):Kd(t)?At(t):fe(Gr,null,String(t))}function At(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ds(t)}function Ka(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ka(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Md(e)?e._ctx=Xe:i===3&&Xe&&(Xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:Xe},n=32):(e=String(e),s&64?(n=16,e=[st(e)]):n=8);t.children=e,t.shapeFlag|=n}function Q_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=oe([e.class,s.class]));else if(i==="style")e.style=ws([e.style,s.style]);else if(Fr(i)){const r=e[i],o=s[i];o&&r!==o&&!(V(r)&&r.includes(o))?e[i]=r?[].concat(r,o):o:o==null&&r==null&&!Ur(i)&&(e[i]=o)}else i!==""&&(e[i]=s[i])}return e}function _t(t,e,n,s=null){St(t,e,7,[n,s])}const X_=Nd();let Z_=0;function eg(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||X_,r={uid:Z_++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ep(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fd(s,i),emitsOptions:Ad(s,i),emit:null,emitted:null,propsDefaults:ae,inheritAttrs:s.inheritAttrs,ctx:ae,data:ae,props:ae,attrs:ae,slots:ae,refs:ae,setupState:ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=A_.bind(null,r),t.ce&&t.ce(r),r}let Fe=null;const tg=()=>Fe||Xe;let cr,ta;{const t=Hr(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};cr=e("__VUE_INSTANCE_SETTERS__",n=>Fe=n),ta=e("__VUE_SSR_SETTERS__",n=>ci=n)}const Ci=t=>{const e=Fe;return cr(t),t.scope.on(),()=>{t.scope.off(),cr(e)}},mc=()=>{Fe&&Fe.scope.off(),cr(null)};function qd(t){return t.vnode.shapeFlag&4}let ci=!1;function ng(t,e=!1,n=!1){e&&ta(e);const{props:s,children:i}=t.vnode,r=qd(t);F_(t,s,r,e),B_(t,i,n||e);const o=r?sg(t,e):void 0;return e&&ta(!1),o}function sg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,I_);const{setup:s}=n;if(s){Ht();const i=t.setupContext=s.length>1?rg(t):null,r=Ci(t),o=Ei(s,t,0,[t.props,i]),a=Yu(o);if(Bt(),r(),(a||t.sp)&&!Ys(t)&&Sd(t),a){if(o.then(mc,mc),e)return o.then(l=>{vc(t,l)}).catch(l=>{Wr(l,t,0)});t.asyncDep=o}else vc(t,o)}else Yd(t)}function vc(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=md(e)),Yd(t)}function Yd(t,e,n){const s=t.type;t.render||(t.render=s.render||wt);{const i=Ci(t);Ht();try{E_(t)}finally{Bt(),i()}}}const ig={get(t,e){return Ne(t,"get",""),t[e]}};function rg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ig),slots:t.slots,emit:t.emit,expose:e}}function Kr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(md(jp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Js)return Js[n](t)},has(e,n){return n in e||n in Js}})):t.proxy}function og(t){return K(t)&&"__vccOpts"in t}const G=(t,e)=>Yp(t,e,ci),ag="3.5.33";/**
* @vue/runtime-dom v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let na;const yc=typeof window<"u"&&window.trustedTypes;if(yc)try{na=yc.createPolicy("vue",{createHTML:t=>t})}catch{}const Jd=na?t=>na.createHTML(t):t=>t,lg="http://www.w3.org/2000/svg",cg="http://www.w3.org/1998/Math/MathML",Nt=typeof document<"u"?document:null,bc=Nt&&Nt.createElement("template"),ug={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Nt.createElementNS(lg,t):e==="mathml"?Nt.createElementNS(cg,t):n?Nt.createElement(t,{is:n}):Nt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Nt.createTextNode(t),createComment:t=>Nt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Nt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{bc.innerHTML=Jd(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=bc.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},dg=Symbol("_vtc");function hg(t,e,n){const s=t[dg];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ur=Symbol("_vod"),Qd=Symbol("_vsh"),Gn={name:"show",beforeMount(t,{value:e},{transition:n}){t[ur]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ls(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Ls(t,!0),s.enter(t)):s.leave(t,()=>{Ls(t,!1)}):Ls(t,e))},beforeUnmount(t,{value:e}){Ls(t,e)}};function Ls(t,e){t.style.display=e?t[ur]:"none",t[Qd]=!e}const fg=Symbol(""),pg=/(?:^|;)\s*display\s*:/;function _g(t,e,n){const s=t.style,i=be(n);let r=!1;if(n&&!i){if(e)if(be(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&js(s,a,"")}else for(const o in e)n[o]==null&&js(s,o,"");for(const o in n){o==="display"&&(r=!0);const a=n[o];a!=null?mg(t,o,!be(e)&&e?e[o]:void 0,a)||js(s,o,a):js(s,o,"")}}else if(i){if(e!==n){const o=s[fg];o&&(n+=";"+o),s.cssText=n,r=pg.test(n)}}else e&&t.removeAttribute("style");ur in t&&(t[ur]=r?s.display:"",t[Qd]&&(s.display="none"))}const wc=/\s*!important$/;function js(t,e,n){if(V(n))n.forEach(s=>js(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=gg(t,e);wc.test(n)?t.setProperty(bn(s),n.replace(wc,""),"important"):t[s]=n}}const Ic=["Webkit","Moz","ms"],To={};function gg(t,e){const n=To[e];if(n)return n;let s=rt(e);if(s!=="filter"&&s in t)return To[e]=s;s=Xu(s);for(let i=0;i<Ic.length;i++){const r=Ic[i]+s;if(r in t)return To[e]=r}return e}function mg(t,e,n,s){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&be(s)&&n===s}const Ec="http://www.w3.org/1999/xlink";function Cc(t,e,n,s,i,r=wp(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ec,e.slice(6,e.length)):t.setAttributeNS(Ec,e,n):n==null||r&&!ed(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Ct(n)?String(n):n)}function Sc(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Jd(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=ed(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function qn(t,e,n,s){t.addEventListener(e,n,s)}function vg(t,e,n,s){t.removeEventListener(e,n,s)}const Tc=Symbol("_vei");function yg(t,e,n,s,i=null){const r=t[Tc]||(t[Tc]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=bg(e);if(s){const c=r[e]=Eg(s,i);qn(t,a,c,l)}else o&&(vg(t,a,o,l),r[e]=void 0)}}const kc=/(?:Once|Passive|Capture)$/;function bg(t){let e;if(kc.test(t)){e={};let s;for(;s=t.match(kc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):bn(t.slice(2)),e]}let ko=0;const wg=Promise.resolve(),Ig=()=>ko||(wg.then(()=>ko=0),ko=Date.now());function Eg(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;St(Cg(s,n.value),e,5,[s])};return n.value=t,n.attached=Ig(),n}function Cg(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Rc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Sg=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?hg(t,s,o):e==="style"?_g(t,n,s):Fr(e)?Ur(e)||yg(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Tg(t,e,s,o))?(Sc(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Cc(t,e,s,o,r,e!=="value")):t._isVueCE&&(kg(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!be(s)))?Sc(t,rt(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Cc(t,e,s,o))};function Tg(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Rc(e)&&K(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Rc(e)&&be(n)?!1:e in t}function kg(t,e){const n=t._def.props;if(!n)return!1;const s=rt(e);return Array.isArray(n)?n.some(i=>rt(i)===s):Object.keys(n).some(i=>rt(i)===s)}const Pc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return V(e)?n=>Ji(e,n):e};function Rg(t){t.target.composing=!0}function Nc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ro=Symbol("_assign");function Ac(t,e,n){return e&&(t=t.trim()),n&&(t=Aa(t)),t}const Oc={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Ro]=Pc(i);const r=s||i.props&&i.props.type==="number";qn(t,e?"change":"input",o=>{o.target.composing||t[Ro](Ac(t.value,n,r))}),(n||r)&&qn(t,"change",()=>{t.value=Ac(t.value,n,r)}),e||(qn(t,"compositionstart",Rg),qn(t,"compositionend",Nc),qn(t,"change",Nc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Ro]=Pc(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Aa(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l)}},Pg=["ctrl","shift","alt","meta"],Ng={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Pg.some(n=>t[`${n}Key`]&&!e.includes(n))},ui=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=Ng[e[o]];if(a&&a(i,e))return}return t(i,...r)})},Ag={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},xc=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const r=bn(i.key);if(e.some(o=>o===r||Ag[o]===r))return t(i)})},Og=xe({patchProp:Sg},ug);let Dc;function xg(){return Dc||(Dc=V_(Og))}const Dg=(...t)=>{const e=xg().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Lg(s);if(!i)return;const r=e._component;!K(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Mg(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Mg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Lg(t){return be(t)?document.querySelector(t):t}const Fg=Yt({localUid:null,localName:"",currentGameId:null,localSeat:null,screen:"home"});function Tt(){return{session:Fg}}var Mc={};/**
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
 */const Xd={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const T=function(t,e){if(!t)throw Is(e)},Is=function(t){return new Error("Firebase Database ("+Xd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Zd=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ug=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},za={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(f=64)),s.push(n[u],n[d],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Zd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ug(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new $g;const f=r<<2|a>>4;if(s.push(f),c!==64){const _=a<<4&240|c>>2;if(s.push(_),d!==64){const w=c<<6&192|d;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $g extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eh=function(t){const e=Zd(t);return za.encodeByteArray(e,!0)},dr=function(t){return eh(t).replace(/\./g,"")},hr=function(t){try{return za.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Hg(t){return th(void 0,t)}function th(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Bg(n)||(t[n]=th(t[n],e[n]));return t}function Bg(t){return t!=="__proto__"}/**
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
 */function Wg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vg=()=>Wg().__FIREBASE_DEFAULTS__,jg=()=>{if(typeof process>"u"||typeof Mc>"u")return;const t=Mc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Gg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hr(t[1]);return e&&JSON.parse(e)},qa=()=>{try{return Vg()||jg()||Gg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nh=t=>{var e,n;return(n=(e=qa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Kg=t=>{const e=nh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},sh=()=>{var t;return(t=qa())===null||t===void 0?void 0:t.config},ih=t=>{var e;return(e=qa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class tt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function zg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[dr(JSON.stringify(n)),dr(JSON.stringify(o)),""].join(".")}/**
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
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ya(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function qg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Yg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jg(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Qg(){return Xd.NODE_ADMIN===!0}function Xg(){try{return typeof indexedDB=="object"}catch{return!1}}function Zg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const em="FirebaseError";class wn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=em,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?tm(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new wn(i,a,s)}}function tm(t,e){return t.replace(nm,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const nm=/\{\$([^}]+)}/g;/**
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
 */const oh=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=di(hr(r[0])||""),n=di(hr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},sm=function(t){const e=oh(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},im=function(t){const e=oh(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ct(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Dn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function fr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function _r(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Lc(r)&&Lc(o)){if(!_r(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Lc(t){return t!==null&&typeof t=="object"}/**
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
 */function Es(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class rm{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function om(t,e){const n=new am(t,e);return n.subscribe.bind(n)}class am{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");lm(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Po),i.error===void 0&&(i.error=Po),i.complete===void 0&&(i.complete=Po);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lm(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Po(){}function hs(t,e){return`${t} failed: ${e} argument `}/**
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
 */const cm=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},zr=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */class um{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new tt;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hm(e))try{this.getOrInitializeService({instanceIdentifier:kn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=kn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kn){return this.instances.has(e)}getOptions(e=kn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:dm(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=kn){return this.component?this.component.multipleInstances?e:kn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dm(t){return t===kn?void 0:t}function hm(t){return t.instantiationMode==="EAGER"}/**
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
 */class fm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new um(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const pm={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},_m=se.INFO,gm={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},mm=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=gm[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ja{constructor(e){this.name=e,this._logLevel=_m,this._logHandler=mm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const vm=(t,e)=>e.some(n=>t instanceof n);let Fc,Uc;function ym(){return Fc||(Fc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bm(){return Uc||(Uc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ah=new WeakMap,sa=new WeakMap,lh=new WeakMap,No=new WeakMap,Qa=new WeakMap;function wm(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(an(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ah.set(n,t)}).catch(()=>{}),Qa.set(e,t),e}function Im(t){if(sa.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});sa.set(t,e)}let ia={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return an(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Em(t){ia=t(ia)}function Cm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ao(this),e,...n);return lh.set(s,e.sort?e.sort():[e]),an(s)}:bm().includes(t)?function(...e){return t.apply(Ao(this),e),an(ah.get(this))}:function(...e){return an(t.apply(Ao(this),e))}}function Sm(t){return typeof t=="function"?Cm(t):(t instanceof IDBTransaction&&Im(t),vm(t,ym())?new Proxy(t,ia):t)}function an(t){if(t instanceof IDBRequest)return wm(t);if(No.has(t))return No.get(t);const e=Sm(t);return e!==t&&(No.set(t,e),Qa.set(e,t)),e}const Ao=t=>Qa.get(t);function Tm(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=an(o);return s&&o.addEventListener("upgradeneeded",l=>{s(an(o.result),l.oldVersion,l.newVersion,an(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const km=["get","getKey","getAll","getAllKeys","count"],Rm=["put","add","delete","clear"],Oo=new Map;function $c(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Oo.get(e))return Oo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Rm.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||km.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Oo.set(e,r),r}Em(t=>({...t,get:(e,n,s)=>$c(e,n)||t.get(e,n,s),has:(e,n)=>!!$c(e,n)||t.has(e,n)}));/**
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
 */class Pm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Nm(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Nm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ra="@firebase/app",Hc="0.10.13";/**
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
 */const Gt=new Ja("@firebase/app"),Am="@firebase/app-compat",Om="@firebase/analytics-compat",xm="@firebase/analytics",Dm="@firebase/app-check-compat",Mm="@firebase/app-check",Lm="@firebase/auth",Fm="@firebase/auth-compat",Um="@firebase/database",$m="@firebase/data-connect",Hm="@firebase/database-compat",Bm="@firebase/functions",Wm="@firebase/functions-compat",Vm="@firebase/installations",jm="@firebase/installations-compat",Gm="@firebase/messaging",Km="@firebase/messaging-compat",zm="@firebase/performance",qm="@firebase/performance-compat",Ym="@firebase/remote-config",Jm="@firebase/remote-config-compat",Qm="@firebase/storage",Xm="@firebase/storage-compat",Zm="@firebase/firestore",ev="@firebase/vertexai-preview",tv="@firebase/firestore-compat",nv="firebase",sv="10.14.1";/**
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
 */const oa="[DEFAULT]",iv={[ra]:"fire-core",[Am]:"fire-core-compat",[xm]:"fire-analytics",[Om]:"fire-analytics-compat",[Mm]:"fire-app-check",[Dm]:"fire-app-check-compat",[Lm]:"fire-auth",[Fm]:"fire-auth-compat",[Um]:"fire-rtdb",[$m]:"fire-data-connect",[Hm]:"fire-rtdb-compat",[Bm]:"fire-fn",[Wm]:"fire-fn-compat",[Vm]:"fire-iid",[jm]:"fire-iid-compat",[Gm]:"fire-fcm",[Km]:"fire-fcm-compat",[zm]:"fire-perf",[qm]:"fire-perf-compat",[Ym]:"fire-rc",[Jm]:"fire-rc-compat",[Qm]:"fire-gcs",[Xm]:"fire-gcs-compat",[Zm]:"fire-fst",[tv]:"fire-fst-compat",[ev]:"fire-vertex","fire-js":"fire-js",[nv]:"fire-js-all"};/**
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
 */const gr=new Map,rv=new Map,aa=new Map;function Bc(t,e){try{t.container.addComponent(e)}catch(n){Gt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fs(t){const e=t.name;if(aa.has(e))return Gt.debug(`There were multiple attempts to register component ${e}.`),!1;aa.set(e,t);for(const n of gr.values())Bc(n,t);for(const n of rv.values())Bc(n,t);return!0}function Xa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dt(t){return t.settings!==void 0}/**
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
 */const ov={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ln=new Si("app","Firebase",ov);/**
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
 */class av{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ln.create("app-deleted",{appName:this._name})}}/**
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
 */const Cs=sv;function ch(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:oa,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ln.create("bad-app-name",{appName:String(i)});if(n||(n=sh()),!n)throw ln.create("no-options");const r=gr.get(i);if(r){if(_r(n,r.options)&&_r(s,r.config))return r;throw ln.create("duplicate-app",{appName:i})}const o=new fm(i);for(const l of aa.values())o.addComponent(l);const a=new av(n,s,o);return gr.set(i,a),a}function uh(t=oa){const e=gr.get(t);if(!e&&t===oa&&sh())return ch();if(!e)throw ln.create("no-app",{appName:t});return e}function cn(t,e,n){var s;let i=(s=iv[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gt.warn(a.join(" "));return}fs(new Mn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const lv="firebase-heartbeat-database",cv=1,hi="firebase-heartbeat-store";let xo=null;function dh(){return xo||(xo=Tm(lv,cv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(hi)}catch(n){console.warn(n)}}}}).catch(t=>{throw ln.create("idb-open",{originalErrorMessage:t.message})})),xo}async function uv(t){try{const n=(await dh()).transaction(hi),s=await n.objectStore(hi).get(hh(t));return await n.done,s}catch(e){if(e instanceof wn)Gt.warn(e.message);else{const n=ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gt.warn(n.message)}}}async function Wc(t,e){try{const s=(await dh()).transaction(hi,"readwrite");await s.objectStore(hi).put(e,hh(t)),await s.done}catch(n){if(n instanceof wn)Gt.warn(n.message);else{const s=ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gt.warn(s.message)}}}function hh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dv=1024,hv=30*24*60*60*1e3;class fv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _v(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Vc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=hv}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Gt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vc(),{heartbeatsToSend:s,unsentEntries:i}=pv(this._heartbeatsCache.heartbeats),r=dr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Gt.warn(n),""}}}function Vc(){return new Date().toISOString().substring(0,10)}function pv(t,e=dv){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),jc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),jc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class _v{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xg()?Zg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jc(t){return dr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function gv(t){fs(new Mn("platform-logger",e=>new Pm(e),"PRIVATE")),fs(new Mn("heartbeat",e=>new fv(e),"PRIVATE")),cn(ra,Hc,t),cn(ra,Hc,"esm2017"),cn("fire-js","")}gv("");var Gc={};const Kc="@firebase/database",zc="1.0.8";/**
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
 */let fh="";function mv(t){fh=t}/**
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
 */class vv{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ie(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:di(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class yv{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ct(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ph=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new vv(e)}}catch{}return new yv},Nn=ph("localStorage"),bv=ph("sessionStorage");/**
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
 */const ss=new Ja("@firebase/database"),_h=function(){let t=1;return function(){return t++}}(),gh=function(t){const e=cm(t),n=new rm;n.update(e);const s=n.digest();return za.encodeByteArray(s)},Ti=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ti.apply(null,s):typeof s=="object"?e+=Ie(s):e+=s,e+=" "}return e};let Xs=null,qc=!0;const wv=function(t,e){T(!0,"Can't turn on custom loggers persistently."),ss.logLevel=se.VERBOSE,Xs=ss.log.bind(ss)},Se=function(...t){if(qc===!0&&(qc=!1,Xs===null&&bv.get("logging_enabled")===!0&&wv()),Xs){const e=Ti.apply(null,t);Xs(e)}},ki=function(t){return function(...e){Se(t,...e)}},la=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ti(...t);ss.error(e)},Kt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ti(...t)}`;throw ss.error(e),new Error(e)},$e=function(...t){const e="FIREBASE WARNING: "+Ti(...t);ss.warn(e)},Iv=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&$e("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qr=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Ev=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ps="[MIN_NAME]",Ln="[MAX_NAME]",Hn=function(t,e){if(t===e)return 0;if(t===ps||e===Ln)return-1;if(e===ps||t===Ln)return 1;{const n=Yc(t),s=Yc(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Cv=function(t,e){return t===e?0:t<e?-1:1},Fs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ie(e))},Za=function(t){if(typeof t!="object"||t===null)return Ie(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ie(e[s]),n+=":",n+=Za(t[e[s]]);return n+="}",n},mh=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Te(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const vh=function(t){T(!qr(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},Sv=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Tv=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function kv(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Rv=new RegExp("^-?(0*)\\d{1,10}$"),Pv=-2147483648,Nv=2147483647,Yc=function(t){if(Rv.test(t)){const e=Number(t);if(e>=Pv&&e<=Nv)return e}return null},Ss=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw $e("Exception was thrown by user callback.",n),e},Math.floor(0))}},Av=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Zs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Ov{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){$e(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class xv{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Se("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',$e(e)}}class Zi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zi.OWNER="owner";/**
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
 */const el="5",yh="v",bh="s",wh="r",Ih="f",Eh=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ch="ls",Sh="p",ca="ac",Th="websocket",kh="long_polling";/**
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
 */class Rh{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Nn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Nn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Dv(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ph(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===Th)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===kh)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Dv(t)&&(n.ns=t.namespace);const i=[];return Te(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Mv{constructor(){this.counters_={}}incrementCounter(e,n=1){ct(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Hg(this.counters_)}}/**
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
 */const Do={},Mo={};function tl(t){const e=t.toString();return Do[e]||(Do[e]=new Mv),Do[e]}function Lv(t,e){const n=t.toString();return Mo[n]||(Mo[n]=e()),Mo[n]}/**
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
 */class Fv{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ss(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Jc="start",Uv="close",$v="pLPCommand",Hv="pRTLPCB",Nh="id",Ah="pw",Oh="ser",Bv="cb",Wv="seg",Vv="ts",jv="d",Gv="dframe",xh=1870,Dh=30,Kv=xh-Dh,zv=25e3,qv=3e4;class Yn{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ki(e),this.stats_=tl(n),this.urlFn=l=>(this.appCheckToken&&(l[ca]=this.appCheckToken),Ph(n,kh,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Fv(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(qv)),Ev(()=>{if(this.isClosed_)return;this.scriptTagHolder=new nl((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Jc)this.id=a,this.password=l;else if(o===Uv)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Jc]="t",s[Oh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Bv]=this.scriptTagHolder.uniqueCallbackIdentifier),s[yh]=el,this.transportSessionId&&(s[bh]=this.transportSessionId),this.lastSessionId&&(s[Ch]=this.lastSessionId),this.applicationId&&(s[Sh]=this.applicationId),this.appCheckToken&&(s[ca]=this.appCheckToken),typeof location<"u"&&location.hostname&&Eh.test(location.hostname)&&(s[wh]=Ih);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Yn.forceAllow_=!0}static forceDisallow(){Yn.forceDisallow_=!0}static isAvailable(){return Yn.forceAllow_?!0:!Yn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Sv()&&!Tv()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=eh(n),i=mh(s,Kv);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Gv]="t",s[Nh]=e,s[Ah]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ie(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class nl{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=_h(),window[$v+this.uniqueCallbackIdentifier]=e,window[Hv+this.uniqueCallbackIdentifier]=n,this.myIFrame=nl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Se("frame writing exception"),a.stack&&Se(a.stack),Se(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Se("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Nh]=this.myID,e[Ah]=this.myPW,e[Oh]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Dh+s.length<=xh;){const o=this.pendingSegs.shift();s=s+"&"+Wv+i+"="+o.seg+"&"+Vv+i+"="+o.ts+"&"+jv+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(zv)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Se("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Yv=16384,Jv=45e3;let mr=null;typeof MozWebSocket<"u"?mr=MozWebSocket:typeof WebSocket<"u"&&(mr=WebSocket);class nt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ki(this.connId),this.stats_=tl(n),this.connURL=nt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[yh]=el,typeof location<"u"&&location.hostname&&Eh.test(location.hostname)&&(o[wh]=Ih),n&&(o[bh]=n),s&&(o[Ch]=s),i&&(o[ca]=i),r&&(o[Sh]=r),Ph(e,Th,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Nn.set("previous_websocket_failure",!0);try{let s;Qg(),this.mySock=new mr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){nt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&mr!==null&&!nt.forceDisallow_}static previouslyFailed(){return Nn.isInMemoryStorage||Nn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Nn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=di(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ie(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=mh(n,Yv);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Jv))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}nt.responsesRequiredToBeHealthy=2;nt.healthyTimeout=3e4;/**
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
 */class fi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Yn,nt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=nt&&nt.isAvailable();let s=n&&!nt.previouslyFailed();if(e.webSocketOnly&&(n||$e("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[nt];else{const i=this.transports_=[];for(const r of fi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);fi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}fi.globalTransportInitialized_=!1;/**
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
 */const Qv=6e4,Xv=5e3,Zv=10*1024,ey=100*1024,Lo="t",Qc="d",ty="s",Xc="r",ny="e",Zc="o",eu="a",tu="n",nu="p",sy="h";class iy{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ki("c:"+this.id+":"),this.transportManager_=new fi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Zs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ey?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Zv?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Lo in e){const n=e[Lo];n===eu?this.upgradeIfSecondaryHealthy_():n===Xc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Zc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Fs("t",e),s=Fs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:nu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:eu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:tu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Fs("t",e),s=Fs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Fs(Lo,e);if(Qc in e){const s=e[Qc];if(n===sy){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===tu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ty?this.onConnectionShutdown_(s):n===Xc?this.onReset_(s):n===ny?la("Server Error: "+s):n===Zc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):la("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),el!==s&&$e("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Zs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Qv))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Zs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Xv))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:nu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Nn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Mh{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Lh{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class vr extends Lh{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ya()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new vr}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const su=32,iu=768;class ne{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new ne("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function pn(t){return t.pieces_.length-t.pieceNum_}function le(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ne(t.pieces_,e)}function sl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ry(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function pi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Fh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ne(e,0)}function ve(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ne)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ne(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function Ue(t,e){const n=z(t),s=z(e);if(n===null)return e;if(n===s)return Ue(le(t),le(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function oy(t,e){const n=pi(t,0),s=pi(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=Hn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function il(t,e){if(pn(t)!==pn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ze(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(pn(t)>pn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class ay{constructor(e,n){this.errorPrefix_=n,this.parts_=pi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=zr(this.parts_[s]);Uh(this)}}function ly(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=zr(e),Uh(t)}function cy(t){const e=t.parts_.pop();t.byteLength_-=zr(e),t.parts_.length>0&&(t.byteLength_-=1)}function Uh(t){if(t.byteLength_>iu)throw new Error(t.errorPrefix_+"has a key path longer than "+iu+" bytes ("+t.byteLength_+").");if(t.parts_.length>su)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+su+") or object contains a cycle "+Rn(t))}function Rn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class rl extends Lh{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new rl}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Us=1e3,uy=60*5*1e3,ru=30*1e3,dy=1.3,hy=3e4,fy="server_kill",ou=3;class $t extends Mh{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=$t.nextPersistentConnectionId_++,this.log_=ki("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Us,this.maxReconnectDelay_=uy,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");rl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&vr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ie(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new tt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;$t.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ct(e,"w")){const s=Dn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();$e(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||im(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ru)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=sm(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ie(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):la("Unrecognized action received from server: "+Ie(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Us,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Us,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hy&&(this.reconnectDelay_=Us),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*dy)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+$t.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Se("getToken() completed but was canceled"):(Se("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new iy(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{$e(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(fy)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&$e(d),l())}}}interrupt(e){Se("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Se("Resuming connection for reason: "+e),delete this.interruptReasons_[e],fr(this.interruptReasons_)&&(this.reconnectDelay_=Us,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Za(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ne(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Se("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ou&&(this.reconnectDelay_=ru,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Se("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ou&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+fh.replace(/\./g,"-")]=1,Ya()?e["framework.cordova"]=1:rh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=vr.getInstance().currentlyOnline();return fr(this.interruptReasons_)&&e}}$t.nextPersistentConnectionId_=0;$t.nextConnectionId_=0;/**
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
 */class Yr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Y(ps,e),i=new Y(ps,n);return this.compare(s,i)!==0}minPost(){return Y.MIN}}/**
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
 */let Gi;class $h extends Yr{static get __EMPTY_NODE(){return Gi}static set __EMPTY_NODE(e){Gi=e}compare(e,n){return Hn(e.name,n.name)}isDefinedOn(e){throw Is("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Y.MIN}maxPost(){return new Y(Ln,Gi)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,Gi)}toString(){return".key"}}const is=new $h;/**
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
 */class Ki{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ce{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ce.RED,this.left=i??Ve.EMPTY_NODE,this.right=r??Ve.EMPTY_NODE}copy(e,n,s,i,r){return new Ce(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ve.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ve.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ce.RED=!0;Ce.BLACK=!1;class py{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ve{constructor(e,n=Ve.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ve(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ce.BLACK,null,null))}remove(e){return new Ve(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ce.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ki(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ki(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ki(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ki(this.root_,null,this.comparator_,!0,e)}}Ve.EMPTY_NODE=new py;/**
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
 */function _y(t,e){return Hn(t.name,e.name)}function ol(t,e){return Hn(t,e)}/**
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
 */let ua;function gy(t){ua=t}const Hh=function(t){return typeof t=="number"?"number:"+vh(t):"string:"+t},Bh=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ct(e,".sv"),"Priority must be a string or number.")}else T(t===ua||t.isEmpty(),"priority of unexpected type.");T(t===ua||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let au;class Ee{constructor(e,n=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Bh(this.priorityNode_)}static set __childrenNodeConstructor(e){au=e}static get __childrenNodeConstructor(){return au}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:z(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||pn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(le(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Hh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=vh(this.value_):e+=this.value_,this.lazyHash_=gh(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ee.VALUE_TYPE_ORDER.indexOf(n),r=Ee.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Wh,Vh;function my(t){Wh=t}function vy(t){Vh=t}class yy extends Yr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Hn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(Ln,new Ee("[PRIORITY-POST]",Vh))}makePost(e,n){const s=Wh(e);return new Y(n,new Ee("[PRIORITY-POST]",s))}toString(){return".priority"}}const _e=new yy;/**
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
 */const by=Math.log(2);class wy{constructor(e){const n=r=>parseInt(Math.log(r)/by,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const yr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new Ce(f,d.node,Ce.BLACK,null,null);{const _=parseInt(u/2,10)+l,w=i(l,_),y=i(_+1,c);return d=t[_],f=n?n(d):d,new Ce(f,d.node,Ce.BLACK,w,y)}},r=function(l){let c=null,u=null,d=t.length;const f=function(w,y){const A=d-w,$=d;d-=w;const j=i(A+1,$),Q=t[A],L=n?n(Q):Q;_(new Ce(L,Q.node,y,null,j))},_=function(w){c?(c.left=w,c=w):(u=w,c=w)};for(let w=0;w<l.count;++w){const y=l.nextBitIsOne(),A=Math.pow(2,l.count-(w+1));y?f(A,Ce.BLACK):(f(A,Ce.BLACK),f(A,Ce.RED))}return u},o=new wy(t.length),a=r(o);return new Ve(s||e,a)};/**
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
 */let Fo;const Kn={};class Mt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(Kn&&_e,"ChildrenNode.ts has not been loaded"),Fo=Fo||new Mt({".priority":Kn},{".priority":_e}),Fo}get(e){const n=Dn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ve?n:null}hasIndex(e){return ct(this.indexSet_,e.toString())}addIndex(e,n){T(e!==is,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(Y.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=yr(s,e.getCompare()):a=Kn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Mt(u,c)}addToIndexes(e,n){const s=pr(this.indexes_,(i,r)=>{const o=Dn(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===Kn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Y.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),yr(a,o.getCompare())}else return Kn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Y(e.name,a))),l.insert(e,e.node)}});return new Mt(s,this.indexSet_)}removeFromIndexes(e,n){const s=pr(this.indexes_,i=>{if(i===Kn)return i;{const r=n.get(e.name);return r?i.remove(new Y(e.name,r)):i}});return new Mt(s,this.indexSet_)}}/**
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
 */let $s;class U{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Bh(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $s||($s=new U(new Ve(ol),null,Mt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$s}updatePriority(e){return this.children_.isEmpty()?this:new U(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?$s:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(le(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Y(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?$s:this.priorityNode_;return new U(i,o,r)}}updateChild(e,n){const s=z(e);if(s===null)return n;{T(z(e)!==".priority"||pn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(le(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(_e,(o,a)=>{n[o]=a.val(e),s++,r&&U.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Hh(this.getPriority().val())+":"),this.forEachChild(_e,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":gh(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Y(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Y(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Y(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Y.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ri?-1:0}withIndex(e){if(e===is||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new U(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===is||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(_e),i=n.getIterator(_e);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===is?null:this.indexMap_.get(e.toString())}}U.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Iy extends U{constructor(){super(new Ve(ol),U.EMPTY_NODE,Mt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return U.EMPTY_NODE}isEmpty(){return!1}}const Ri=new Iy;Object.defineProperties(Y,{MIN:{value:new Y(ps,U.EMPTY_NODE)},MAX:{value:new Y(Ln,Ri)}});$h.__EMPTY_NODE=U.EMPTY_NODE;Ee.__childrenNodeConstructor=U;gy(Ri);vy(Ri);/**
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
 */const Ey=!0;function me(t,e=null){if(t===null)return U.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ee(n,me(e))}if(!(t instanceof Array)&&Ey){const n=[];let s=!1;if(Te(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=me(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Y(o,l)))}}),n.length===0)return U.EMPTY_NODE;const r=yr(n,_y,o=>o.name,ol);if(s){const o=yr(n,_e.getCompare());return new U(r,me(e),new Mt({".priority":o},{".priority":_e}))}else return new U(r,me(e),Mt.Default)}else{let n=U.EMPTY_NODE;return Te(t,(s,i)=>{if(ct(t,s)&&s.substring(0,1)!=="."){const r=me(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(me(e))}}my(me);/**
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
 */class Cy extends Yr{constructor(e){super(),this.indexPath_=e,T(!q(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Hn(e.name,n.name):r}makePost(e,n){const s=me(e),i=U.EMPTY_NODE.updateChild(this.indexPath_,s);return new Y(n,i)}maxPost(){const e=U.EMPTY_NODE.updateChild(this.indexPath_,Ri);return new Y(Ln,e)}toString(){return pi(this.indexPath_,0).join("/")}}/**
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
 */class Sy extends Yr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Hn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,n){const s=me(e);return new Y(n,s)}toString(){return".value"}}const Ty=new Sy;/**
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
 */function jh(t){return{type:"value",snapshotNode:t}}function _s(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function _i(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function gi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ky(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class al{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(_i(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(_s(n,s)):o.trackChildChange(gi(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(_e,(i,r)=>{n.hasChild(i)||s.trackChildChange(_i(i,r))}),n.isLeafNode()||n.forEachChild(_e,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(gi(i,r,o))}else s.trackChildChange(_s(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?U.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class mi{constructor(e){this.indexedFilter_=new al(e.getIndex()),this.index_=e.getIndex(),this.startPost_=mi.getStartPost_(e),this.endPost_=mi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new Y(n,s))||(s=U.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=U.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(U.EMPTY_NODE);const r=this;return n.forEachChild(_e,(o,a)=>{r.matches(new Y(o,a))||(i=i.updateImmediateChild(o,U.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Ry{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new mi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new Y(n,s))||(s=U.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=U.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=U.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(U.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,U.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,_)=>d(_,f)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new Y(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(gi(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(_i(n,d));const y=a.updateImmediateChild(n,U.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(_s(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(_i(c.name,c.node)),r.trackChildChange(_s(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,U.EMPTY_NODE)):e}}/**
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
 */class ll{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ps}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ln}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new ll;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Py(t){return t.loadsAllData()?new al(t.getIndex()):t.hasLimit()?new Ry(t):new mi(t)}function lu(t){const e={};if(t.isDefault())return e;let n;if(t.index_===_e?n="$priority":t.index_===Ty?n="$value":t.index_===is?n="$key":(T(t.index_ instanceof Cy,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ie(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ie(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ie(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ie(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ie(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function cu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_e&&(e.i=t.index_.toString()),e}/**
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
 */class br extends Mh{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ki("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=br.getListenId_(e,s),a={};this.listens_[o]=a;const l=lu(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),Dn(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=br.getListenId_(e,n);delete this.listens_[s]}get(e){const n=lu(e._queryParams),s=e._path.toString(),i=new tt;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Es(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=di(a.responseText)}catch{$e("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&$e("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Ny{constructor(){this.rootNode_=U.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function wr(){return{value:null,children:new Map}}function Ts(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=z(e);t.children.has(s)||t.children.set(s,wr());const i=t.children.get(s);e=le(e),Ts(i,e,n)}}function da(t,e){if(q(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(_e,(s,i)=>{Ts(t,new ne(s),i)}),da(t,e)}}else if(t.children.size>0){const n=z(e);return e=le(e),t.children.has(n)&&da(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function ha(t,e,n){t.value!==null?n(e,t.value):Ay(t,(s,i)=>{const r=new ne(e.toString()+"/"+s);ha(i,r,n)})}function Ay(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Oy{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Te(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const uu=10*1e3,xy=30*1e3,Dy=5*60*1e3;class My{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Oy(e);const s=uu+(xy-uu)*Math.random();Zs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Te(e,(i,r)=>{r>0&&ct(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Zs(this.reportStats_.bind(this),Math.floor(Math.random()*2*Dy))}}/**
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
 */var it;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(it||(it={}));function cl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ul(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function dl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ir{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=it.ACK_USER_WRITE,this.source=cl()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ne(e));return new Ir(Z(),n,this.revert)}}else return T(z(this.path)===e,"operationForChild called for unrelated child."),new Ir(le(this.path),this.affectedTree,this.revert)}}/**
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
 */class vi{constructor(e,n){this.source=e,this.path=n,this.type=it.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new vi(this.source,Z()):new vi(this.source,le(this.path))}}/**
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
 */class Fn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=it.OVERWRITE}operationForChild(e){return q(this.path)?new Fn(this.source,Z(),this.snap.getImmediateChild(e)):new Fn(this.source,le(this.path),this.snap)}}/**
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
 */class gs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=it.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new ne(e));return n.isEmpty()?null:n.value?new Fn(this.source,Z(),n.value):new gs(this.source,Z(),n)}else return T(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new gs(this.source,le(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class _n{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Ly{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Fy(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(ky(o.childName,o.snapshotNode))}),Hs(t,i,"child_removed",e,s,n),Hs(t,i,"child_added",e,s,n),Hs(t,i,"child_moved",r,s,n),Hs(t,i,"child_changed",e,s,n),Hs(t,i,"value",e,s,n),i}function Hs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>$y(t,a,l)),o.forEach(a=>{const l=Uy(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Uy(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function $y(t,e,n){if(e.childName==null||n.childName==null)throw Is("Should only compare child_ events.");const s=new Y(e.childName,e.snapshotNode),i=new Y(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Jr(t,e){return{eventCache:t,serverCache:e}}function ei(t,e,n,s){return Jr(new _n(e,n,s),t.serverCache)}function Gh(t,e,n,s){return Jr(t.eventCache,new _n(e,n,s))}function Er(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Un(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Uo;const Hy=()=>(Uo||(Uo=new Ve(Cv)),Uo);class he{constructor(e,n=Hy()){this.value=e,this.children=n}static fromObject(e){let n=new he(null);return Te(e,(s,i)=>{n=n.set(new ne(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(q(e))return null;{const s=z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(le(e),n);return r!=null?{path:ve(new ne(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=z(e),s=this.children.get(n);return s!==null?s.subtree(le(e)):new he(null)}}set(e,n){if(q(e))return new he(n,this.children);{const s=z(e),r=(this.children.get(s)||new he(null)).set(le(e),n),o=this.children.insert(s,r);return new he(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new he(null):new he(null,this.children);{const n=z(e),s=this.children.get(n);if(s){const i=s.remove(le(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new he(null):new he(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const n=z(e),s=this.children.get(n);return s?s.get(le(e)):null}}setTree(e,n){if(q(e))return n;{const s=z(e),r=(this.children.get(s)||new he(null)).setTree(le(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new he(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ve(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(q(e))return null;{const r=z(e),o=this.children.get(r);return o?o.findOnPath_(le(e),ve(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,s){if(q(e))return this;{this.value&&s(n,this.value);const i=z(e),r=this.children.get(i);return r?r.foreachOnPath_(le(e),ve(n,i),s):new he(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ve(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class at{constructor(e){this.writeTree_=e}static empty(){return new at(new he(null))}}function ti(t,e,n){if(q(e))return new at(new he(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ue(i,e);return r=r.updateChild(o,n),new at(t.writeTree_.set(i,r))}else{const i=new he(n),r=t.writeTree_.setTree(e,i);return new at(r)}}}function fa(t,e,n){let s=t;return Te(n,(i,r)=>{s=ti(s,ve(e,i),r)}),s}function du(t,e){if(q(e))return at.empty();{const n=t.writeTree_.setTree(e,new he(null));return new at(n)}}function pa(t,e){return Bn(t,e)!=null}function Bn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ue(n.path,e)):null}function hu(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_e,(s,i)=>{e.push(new Y(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Y(s,i.value))}),e}function un(t,e){if(q(e))return t;{const n=Bn(t,e);return n!=null?new at(new he(n)):new at(t.writeTree_.subtree(e))}}function _a(t){return t.writeTree_.isEmpty()}function ms(t,e){return Kh(Z(),t.writeTree_,e)}function Kh(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Kh(ve(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ve(t,".priority"),s)),n}}/**
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
 */function Qr(t,e){return Jh(e,t)}function By(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ti(t.visibleWrites,e,n)),t.lastWriteId=s}function Wy(t,e,n,s){T(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=fa(t.visibleWrites,e,n),t.lastWriteId=s}function Vy(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function jy(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Gy(a,s.path)?i=!1:Ze(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Ky(t),!0;if(s.snap)t.visibleWrites=du(t.visibleWrites,s.path);else{const a=s.children;Te(a,l=>{t.visibleWrites=du(t.visibleWrites,ve(s.path,l))})}return!0}else return!1}function Gy(t,e){if(t.snap)return Ze(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ze(ve(t.path,n),e))return!0;return!1}function Ky(t){t.visibleWrites=zh(t.allWrites,zy,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function zy(t){return t.visible}function zh(t,e,n){let s=at.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Ze(n,o)?(a=Ue(n,o),s=ti(s,a,r.snap)):Ze(o,n)&&(a=Ue(o,n),s=ti(s,Z(),r.snap.getChild(a)));else if(r.children){if(Ze(n,o))a=Ue(n,o),s=fa(s,a,r.children);else if(Ze(o,n))if(a=Ue(o,n),q(a))s=fa(s,Z(),r.children);else{const l=Dn(r.children,z(a));if(l){const c=l.getChild(le(a));s=ti(s,Z(),c)}}}else throw Is("WriteRecord should have .snap or .children")}}return s}function qh(t,e,n,s,i){if(!s&&!i){const r=Bn(t.visibleWrites,e);if(r!=null)return r;{const o=un(t.visibleWrites,e);if(_a(o))return n;if(n==null&&!pa(o,Z()))return null;{const a=n||U.EMPTY_NODE;return ms(o,a)}}}else{const r=un(t.visibleWrites,e);if(!i&&_a(r))return n;if(!i&&n==null&&!pa(r,Z()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Ze(c.path,e)||Ze(e,c.path))},a=zh(t.allWrites,o,e),l=n||U.EMPTY_NODE;return ms(a,l)}}}function qy(t,e,n){let s=U.EMPTY_NODE;const i=Bn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_e,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=un(t.visibleWrites,e);return n.forEachChild(_e,(o,a)=>{const l=ms(un(r,new ne(o)),a);s=s.updateImmediateChild(o,l)}),hu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=un(t.visibleWrites,e);return hu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Yy(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ve(e,n);if(pa(t.visibleWrites,r))return null;{const o=un(t.visibleWrites,r);return _a(o)?i.getChild(n):ms(o,i.getChild(n))}}function Jy(t,e,n,s){const i=ve(e,n),r=Bn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=un(t.visibleWrites,i);return ms(o,s.getNode().getImmediateChild(n))}else return null}function Qy(t,e){return Bn(t.visibleWrites,e)}function Xy(t,e,n,s,i,r,o){let a;const l=un(t.visibleWrites,e),c=Bn(l,Z());if(c!=null)a=c;else if(n!=null)a=ms(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)d(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function Zy(){return{visibleWrites:at.empty(),allWrites:[],lastWriteId:-1}}function Cr(t,e,n,s){return qh(t.writeTree,t.treePath,e,n,s)}function hl(t,e){return qy(t.writeTree,t.treePath,e)}function fu(t,e,n,s){return Yy(t.writeTree,t.treePath,e,n,s)}function Sr(t,e){return Qy(t.writeTree,ve(t.treePath,e))}function eb(t,e,n,s,i,r){return Xy(t.writeTree,t.treePath,e,n,s,i,r)}function fl(t,e,n){return Jy(t.writeTree,t.treePath,e,n)}function Yh(t,e){return Jh(ve(t.treePath,e),t.writeTree)}function Jh(t,e){return{treePath:t,writeTree:e}}/**
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
 */class tb{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,gi(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,_i(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,_s(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,gi(s,e.snapshotNode,i.oldSnap));else throw Is("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class nb{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Qh=new nb;class pl{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new _n(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return fl(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Un(this.viewCache_),r=eb(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function sb(t){return{filter:t}}function ib(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function rb(t,e,n,s,i){const r=new tb;let o,a;if(n.type===it.OVERWRITE){const c=n;c.source.fromUser?o=ga(t,e,c.path,c.snap,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!q(c.path),o=Tr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===it.MERGE){const c=n;c.source.fromUser?o=ab(t,e,c.path,c.children,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ma(t,e,c.path,c.children,s,i,a,r))}else if(n.type===it.ACK_USER_WRITE){const c=n;c.revert?o=ub(t,e,c.path,s,i,r):o=lb(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===it.LISTEN_COMPLETE)o=cb(t,e,n.path,s,r);else throw Is("Unknown operation type: "+n.type);const l=r.getChanges();return ob(e,o,l),{viewCache:o,changes:l}}function ob(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Er(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(jh(Er(e)))}}function Xh(t,e,n,s,i,r){const o=e.eventCache;if(Sr(s,n)!=null)return e;{let a,l;if(q(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Un(e),u=c instanceof U?c:U.EMPTY_NODE,d=hl(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Cr(s,Un(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=z(n);if(c===".priority"){T(pn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=fu(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=le(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=fu(s,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=fl(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return ei(e,a,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function Tr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(q(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=z(n);if(!l.isCompleteForPath(n)&&pn(n)>1)return e;const w=le(n),A=l.getNode().getImmediateChild(_).updateChild(w,s);_===".priority"?c=u.updatePriority(l.getNode(),A):c=u.updateChild(l.getNode(),_,A,w,Qh,null)}const d=Gh(e,c,l.isFullyInitialized()||q(n),u.filtersNodes()),f=new pl(i,d,r);return Xh(t,d,n,i,f,a)}function ga(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new pl(i,e,r);if(q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=ei(e,c,!0,t.filter.filtersNodes());else{const d=z(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=ei(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=le(n),_=a.getNode().getImmediateChild(d);let w;if(q(f))w=s;else{const y=u.getCompleteChild(d);y!=null?sl(f)===".priority"&&y.getChild(Fh(f)).isEmpty()?w=y:w=y.updateChild(f,s):w=U.EMPTY_NODE}if(_.equals(w))l=e;else{const y=t.filter.updateChild(a.getNode(),d,w,f,u,o);l=ei(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function pu(t,e){return t.eventCache.isCompleteForChild(e)}function ab(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=ve(n,l);pu(e,z(u))&&(a=ga(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=ve(n,l);pu(e,z(u))||(a=ga(t,a,u,c,i,r,o))}),a}function _u(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function ma(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;q(n)?c=s:c=new he(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),w=_u(t,_,f);l=Tr(t,l,new ne(d),w,i,r,o,a)}}),c.children.inorderTraversal((d,f)=>{const _=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!_){const w=e.serverCache.getNode().getImmediateChild(d),y=_u(t,w,f);l=Tr(t,l,new ne(d),y,i,r,o,a)}}),l}function lb(t,e,n,s,i,r,o){if(Sr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Tr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(q(n)){let c=new he(null);return l.getNode().forEachChild(is,(u,d)=>{c=c.set(new ne(u),d)}),ma(t,e,n,c,i,r,a,o)}else return e}else{let c=new he(null);return s.foreach((u,d)=>{const f=ve(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),ma(t,e,n,c,i,r,a,o)}}function cb(t,e,n,s,i){const r=e.serverCache,o=Gh(e,r.getNode(),r.isFullyInitialized()||q(n),r.isFiltered());return Xh(t,o,n,s,Qh,i)}function ub(t,e,n,s,i,r){let o;if(Sr(s,n)!=null)return e;{const a=new pl(s,e,i),l=e.eventCache.getNode();let c;if(q(n)||z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Cr(s,Un(e));else{const d=e.serverCache.getNode();T(d instanceof U,"serverChildren would be complete if leaf node"),u=hl(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=z(n);let d=fl(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,le(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,U.EMPTY_NODE,le(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Cr(s,Un(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Sr(s,Z())!=null,ei(e,c,o,t.filter.filtersNodes())}}/**
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
 */class db{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new al(s.getIndex()),r=Py(s);this.processor_=sb(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(U.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(U.EMPTY_NODE,a.getNode(),null),u=new _n(l,o.isFullyInitialized(),i.filtersNodes()),d=new _n(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Jr(d,u),this.eventGenerator_=new Ly(this.query_)}get query(){return this.query_}}function hb(t){return t.viewCache_.serverCache.getNode()}function fb(t){return Er(t.viewCache_)}function pb(t,e){const n=Un(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function gu(t){return t.eventRegistrations_.length===0}function _b(t,e){t.eventRegistrations_.push(e)}function mu(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function vu(t,e,n,s){e.type===it.MERGE&&e.source.queryId!==null&&(T(Un(t.viewCache_),"We should always have a full cache before handling merges"),T(Er(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=rb(t.processor_,i,e,n,s);return ib(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Zh(t,r.changes,r.viewCache.eventCache.getNode(),null)}function gb(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(_e,(r,o)=>{s.push(_s(r,o))}),n.isFullyInitialized()&&s.push(jh(n.getNode())),Zh(t,s,n.getNode(),e)}function Zh(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Fy(t.eventGenerator_,e,n,i)}/**
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
 */let kr;class ef{constructor(){this.views=new Map}}function mb(t){T(!kr,"__referenceConstructor has already been defined"),kr=t}function vb(){return T(kr,"Reference.ts has not been loaded"),kr}function yb(t){return t.views.size===0}function _l(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),vu(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(vu(o,e,n,s));return r}}function tf(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Cr(n,i?s:null),l=!1;a?l=!0:s instanceof U?(a=hl(n,s),l=!1):(a=U.EMPTY_NODE,l=!1);const c=Jr(new _n(a,l,!1),new _n(s,i,!1));return new db(e,c)}return o}function bb(t,e,n,s,i,r){const o=tf(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),_b(o,n),gb(o,n)}function wb(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=gn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(mu(c,n,s)),gu(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(mu(l,n,s)),gu(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!gn(t)&&r.push(new(vb())(e._repo,e._path)),{removed:r,events:o}}function nf(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function dn(t,e){let n=null;for(const s of t.views.values())n=n||pb(s,e);return n}function sf(t,e){if(e._queryParams.loadsAllData())return Xr(t);{const s=e._queryIdentifier;return t.views.get(s)}}function rf(t,e){return sf(t,e)!=null}function gn(t){return Xr(t)!=null}function Xr(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Rr;function Ib(t){T(!Rr,"__referenceConstructor has already been defined"),Rr=t}function Eb(){return T(Rr,"Reference.ts has not been loaded"),Rr}let Cb=1;class yu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new he(null),this.pendingWriteTree_=Zy(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gl(t,e,n,s,i){return By(t.pendingWriteTree_,e,n,s,i),i?ks(t,new Fn(cl(),e,n)):[]}function Sb(t,e,n,s){Wy(t.pendingWriteTree_,e,n,s);const i=he.fromObject(n);return ks(t,new gs(cl(),e,i))}function on(t,e,n=!1){const s=Vy(t.pendingWriteTree_,e);if(jy(t.pendingWriteTree_,e)){let r=new he(null);return s.snap!=null?r=r.set(Z(),!0):Te(s.children,o=>{r=r.set(new ne(o),!0)}),ks(t,new Ir(s.path,r,n))}else return[]}function Pi(t,e,n){return ks(t,new Fn(ul(),e,n))}function Tb(t,e,n){const s=he.fromObject(n);return ks(t,new gs(ul(),e,s))}function kb(t,e){return ks(t,new vi(ul(),e))}function Rb(t,e,n){const s=ml(t,n);if(s){const i=vl(s),r=i.path,o=i.queryId,a=Ue(r,e),l=new vi(dl(o),a);return yl(t,r,l)}else return[]}function Pr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||rf(o,e))){const l=wb(o,e,n,s);yb(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(f,_)=>gn(_));if(u&&!d){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=Ab(f);for(let w=0;w<_.length;++w){const y=_[w],A=y.query,$=cf(t,y);t.listenProvider_.startListening(ni(A),yi(t,A),$.hashFn,$.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(ni(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(eo(f));t.listenProvider_.stopListening(ni(f),_)}))}Ob(t,c)}return a}function of(t,e,n,s){const i=ml(t,s);if(i!=null){const r=vl(i),o=r.path,a=r.queryId,l=Ue(o,e),c=new Fn(dl(a),l,n);return yl(t,o,c)}else return[]}function Pb(t,e,n,s){const i=ml(t,s);if(i){const r=vl(i),o=r.path,a=r.queryId,l=Ue(o,e),c=he.fromObject(n),u=new gs(dl(a),l,c);return yl(t,o,u)}else return[]}function va(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const w=Ue(f,i);r=r||dn(_,w),o=o||gn(_)});let a=t.syncPointTree_.get(i);a?(o=o||gn(a),r=r||dn(a,Z())):(a=new ef,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=U.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,w)=>{const y=dn(w,Z());y&&(r=r.updateImmediateChild(_,y))}));const c=rf(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=eo(e);T(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=xb();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const u=Qr(t.pendingWriteTree_,i);let d=bb(a,e,n,u,r,l);if(!c&&!o&&!s){const f=sf(a,e);d=d.concat(Db(t,e,f))}return d}function Zr(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ue(o,e),c=dn(a,l);if(c)return c});return qh(i,e,r,n,!0)}function Nb(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=Ue(c,n);s=s||dn(u,d)});let i=t.syncPointTree_.get(n);i?s=s||dn(i,Z()):(i=new ef,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new _n(s,!0,!1):null,a=Qr(t.pendingWriteTree_,e._path),l=tf(i,e,a,r?o.getNode():U.EMPTY_NODE,r);return fb(l)}function ks(t,e){return af(e,t.syncPointTree_,null,Qr(t.pendingWriteTree_,Z()))}function af(t,e,n,s){if(q(t.path))return lf(t,e,n,s);{const i=e.get(Z());n==null&&i!=null&&(n=dn(i,Z()));let r=[];const o=z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Yh(s,o);r=r.concat(af(a,l,c,u))}return i&&(r=r.concat(_l(i,t,s,n))),r}}function lf(t,e,n,s){const i=e.get(Z());n==null&&i!=null&&(n=dn(i,Z()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Yh(s,o),u=t.operationForChild(o);u&&(r=r.concat(lf(u,a,l,c)))}),i&&(r=r.concat(_l(i,t,s,n))),r}function cf(t,e){const n=e.query,s=yi(t,n);return{hashFn:()=>(hb(e)||U.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Rb(t,n._path,s):kb(t,n._path);{const r=kv(i,n);return Pr(t,n,null,r)}}}}function yi(t,e){const n=eo(e);return t.queryToTagMap.get(n)}function eo(t){return t._path.toString()+"$"+t._queryIdentifier}function ml(t,e){return t.tagToQueryMap.get(e)}function vl(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ne(t.substr(0,e))}}function yl(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=Qr(t.pendingWriteTree_,e);return _l(s,n,i,null)}function Ab(t){return t.fold((e,n,s)=>{if(n&&gn(n))return[Xr(n)];{let i=[];return n&&(i=nf(n)),Te(s,(r,o)=>{i=i.concat(o)}),i}})}function ni(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Eb())(t._repo,t._path):t}function Ob(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=eo(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function xb(){return Cb++}function Db(t,e,n){const s=e._path,i=yi(t,e),r=cf(t,n),o=t.listenProvider_.startListening(ni(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)T(!gn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!q(c)&&u&&gn(u))return[Xr(u).query];{let f=[];return u&&(f=f.concat(nf(u).map(_=>_.query))),Te(d,(_,w)=>{f=f.concat(w)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(ni(u),yi(t,u))}}return o}/**
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
 */class bl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new bl(n)}node(){return this.node_}}class wl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ve(this.path_,e);return new wl(this.syncTree_,n)}node(){return Zr(this.syncTree_,this.path_)}}const Mb=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},bu=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Lb(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Fb(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Lb=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},Fb=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},uf=function(t,e,n,s){return El(e,new wl(n,t),s)},Il=function(t,e,n){return El(t,new bl(e),n)};function El(t,e,n){const s=t.getPriority().val(),i=bu(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=bu(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ee(a,me(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ee(i))),o.forEachChild(_e,(a,l)=>{const c=El(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Cl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function to(t,e){let n=e instanceof ne?e:new ne(e),s=t,i=z(n);for(;i!==null;){const r=Dn(s.node.children,i)||{children:{},childCount:0};s=new Cl(i,s,r),n=le(n),i=z(n)}return s}function Wn(t){return t.node.value}function Sl(t,e){t.node.value=e,ya(t)}function df(t){return t.node.childCount>0}function Ub(t){return Wn(t)===void 0&&!df(t)}function no(t,e){Te(t.node.children,(n,s)=>{e(new Cl(n,t,s))})}function hf(t,e,n,s){n&&e(t),no(t,i=>{hf(i,e,!0)})}function $b(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ni(t){return new ne(t.parent===null?t.name:Ni(t.parent)+"/"+t.name)}function ya(t){t.parent!==null&&Hb(t.parent,t.name,t)}function Hb(t,e,n){const s=Ub(n),i=ct(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,ya(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ya(t))}/**
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
 */const Bb=/[\[\].#$\/\u0000-\u001F\u007F]/,Wb=/[\[\].#$\u0000-\u001F\u007F]/,$o=10*1024*1024,Tl=function(t){return typeof t=="string"&&t.length!==0&&!Bb.test(t)},ff=function(t){return typeof t=="string"&&t.length!==0&&!Wb.test(t)},Vb=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ff(t)},kl=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!qr(t)||t&&typeof t=="object"&&ct(t,".sv")},ba=function(t,e,n,s){Ai(hs(t,"value"),e,n)},Ai=function(t,e,n){const s=n instanceof ne?new ay(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Rn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Rn(s)+" with contents = "+e.toString());if(qr(e))throw new Error(t+"contains "+e.toString()+" "+Rn(s));if(typeof e=="string"&&e.length>$o/3&&zr(e)>$o)throw new Error(t+"contains a string greater than "+$o+" utf8 bytes "+Rn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Te(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Tl(o)))throw new Error(t+" contains an invalid key ("+o+") "+Rn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ly(s,o),Ai(t,a,s),cy(s)}),i&&r)throw new Error(t+' contains ".value" child '+Rn(s)+" in addition to actual children.")}},jb=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=pi(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Tl(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(oy);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&Ze(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},pf=function(t,e,n,s){const i=hs(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Te(e,(o,a)=>{const l=new ne(o);if(Ai(i,a,ve(n,l)),sl(l)===".priority"&&!kl(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),jb(i,r)},Gb=function(t,e,n){if(qr(e))throw new Error(hs(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!kl(e))throw new Error(hs(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},_f=function(t,e,n,s){if(!ff(n))throw new Error(hs(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Kb=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),_f(t,e,n)},Jn=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},zb=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Tl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Vb(n))throw new Error(hs(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class qb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function so(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!il(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function gf(t,e,n){so(t,n),mf(t,s=>il(s,e))}function ze(t,e,n){so(t,n),mf(t,s=>Ze(s,e)||Ze(e,s))}function mf(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Yb(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Yb(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Xs&&Se("event: "+n.toString()),Ss(s)}}}/**
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
 */const Jb="repo_interrupt",Qb=25;class Xb{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new qb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wr(),this.transactionQueueTree_=new Cl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Zb(t,e,n){if(t.stats_=tl(t.repoInfo_),t.forceRestClient_||Av())t.server_=new br(t.repoInfo_,(s,i,r,o)=>{wu(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Iu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ie(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new $t(t.repoInfo_,e,(s,i,r,o)=>{wu(t,s,i,r,o)},s=>{Iu(t,s)},s=>{tw(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Lv(t.repoInfo_,()=>new My(t.stats_,t.server_)),t.infoData_=new Ny,t.infoSyncTree_=new yu({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Pi(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Rl(t,"connected",!1),t.serverSyncTree_=new yu({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);ze(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function ew(t){const n=t.infoData_.getNode(new ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Oi(t){return Mb({timestamp:ew(t)})}function wu(t,e,n,s,i){t.dataUpdateCount++;const r=new ne(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=pr(n,c=>me(c));o=Pb(t.serverSyncTree_,r,l,i)}else{const l=me(n);o=of(t.serverSyncTree_,r,l,i)}else if(s){const l=pr(n,c=>me(c));o=Tb(t.serverSyncTree_,r,l)}else{const l=me(n);o=Pi(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=vs(t,r)),ze(t.eventQueue_,a,o)}function Iu(t,e){Rl(t,"connected",e),e===!1&&rw(t)}function tw(t,e){Te(e,(n,s)=>{Rl(t,n,s)})}function Rl(t,e,n){const s=new ne("/.info/"+e),i=me(n);t.infoData_.updateSnapshot(s,i);const r=Pi(t.infoSyncTree_,s,i);ze(t.eventQueue_,s,r)}function io(t){return t.nextWriteId_++}function nw(t,e,n){const s=Nb(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=me(i).withIndex(e._queryParams.getIndex());va(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Pi(t.serverSyncTree_,e._path,r);else{const a=yi(t.serverSyncTree_,e);o=of(t.serverSyncTree_,e._path,r,a)}return ze(t.eventQueue_,e._path,o),Pr(t.serverSyncTree_,e,n,null,!0),r},i=>(Rs(t,"get for query "+Ie(e)+" failed: "+i),Promise.reject(new Error(i))))}function sw(t,e,n,s,i){Rs(t,"set",{path:e.toString(),value:n,priority:s});const r=Oi(t),o=me(n,s),a=Zr(t.serverSyncTree_,e),l=Il(o,a,r),c=io(t),u=gl(t.serverSyncTree_,e,l,c,!0);so(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const w=f==="ok";w||$e("set at "+e+" failed: "+f);const y=on(t.serverSyncTree_,c,!w);ze(t.eventQueue_,e,y),mn(t,i,f,_)});const d=Nl(t,e);vs(t,d),ze(t.eventQueue_,d,[])}function iw(t,e,n,s){Rs(t,"update",{path:e.toString(),value:n});let i=!0;const r=Oi(t),o={};if(Te(n,(a,l)=>{i=!1,o[a]=uf(ve(e,a),me(l),t.serverSyncTree_,r)}),i)Se("update() called with empty data.  Don't do anything."),mn(t,s,"ok",void 0);else{const a=io(t),l=Sb(t.serverSyncTree_,e,o,a);so(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||$e("update at "+e+" failed: "+c);const f=on(t.serverSyncTree_,a,!d),_=f.length>0?vs(t,e):e;ze(t.eventQueue_,_,f),mn(t,s,c,u)}),Te(n,c=>{const u=Nl(t,ve(e,c));vs(t,u)}),ze(t.eventQueue_,e,[])}}function rw(t){Rs(t,"onDisconnectEvents");const e=Oi(t),n=wr();ha(t.onDisconnect_,Z(),(i,r)=>{const o=uf(i,r,t.serverSyncTree_,e);Ts(n,i,o)});let s=[];ha(n,Z(),(i,r)=>{s=s.concat(Pi(t.serverSyncTree_,i,r));const o=Nl(t,i);vs(t,o)}),t.onDisconnect_=wr(),ze(t.eventQueue_,Z(),s)}function ow(t,e,n){t.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&da(t.onDisconnect_,e),mn(t,n,s,i)})}function Eu(t,e,n,s){const i=me(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&Ts(t.onDisconnect_,e,i),mn(t,s,r,o)})}function aw(t,e,n,s,i){const r=me(n,s);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&Ts(t.onDisconnect_,e,r),mn(t,i,o,a)})}function lw(t,e,n,s){if(fr(n)){Se("onDisconnect().update() called with empty data.  Don't do anything."),mn(t,s,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,r)=>{i==="ok"&&Te(n,(o,a)=>{const l=me(a);Ts(t.onDisconnect_,ve(e,o),l)}),mn(t,s,i,r)})}function cw(t,e,n){let s;z(e._path)===".info"?s=va(t.infoSyncTree_,e,n):s=va(t.serverSyncTree_,e,n),gf(t.eventQueue_,e._path,s)}function vf(t,e,n){let s;z(e._path)===".info"?s=Pr(t.infoSyncTree_,e,n):s=Pr(t.serverSyncTree_,e,n),gf(t.eventQueue_,e._path,s)}function uw(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Jb)}function Rs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Se(n,...e)}function mn(t,e,n,s){e&&Ss(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function dw(t,e,n,s,i,r){Rs(t,"transaction on "+e);const o={path:e,update:n,onComplete:s,status:null,order:_h(),applyLocally:r,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Pl(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Ai("transaction failed: Data returned ",l,o.path),o.status=0;const c=to(t.transactionQueueTree_,e),u=Wn(c)||[];u.push(o),Sl(c,u);let d;typeof l=="object"&&l!==null&&ct(l,".priority")?(d=Dn(l,".priority"),T(kl(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=(Zr(t.serverSyncTree_,e)||U.EMPTY_NODE).getPriority().val();const f=Oi(t),_=me(l,d),w=Il(_,a,f);o.currentOutputSnapshotRaw=_,o.currentOutputSnapshotResolved=w,o.currentWriteId=io(t);const y=gl(t.serverSyncTree_,e,w,o.currentWriteId,o.applyLocally);ze(t.eventQueue_,e,y),ro(t,t.transactionQueueTree_)}}function Pl(t,e,n){return Zr(t.serverSyncTree_,e,n)||U.EMPTY_NODE}function ro(t,e=t.transactionQueueTree_){if(e||oo(t,e),Wn(e)){const n=bf(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&hw(t,Ni(e),n)}else df(e)&&no(e,n=>{ro(t,n)})}function hw(t,e,n){const s=n.map(c=>c.currentWriteId),i=Pl(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Ue(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Rs(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(on(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();oo(t,to(t.transactionQueueTree_,e)),ro(t,t.transactionQueueTree_),ze(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)Ss(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{$e("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}vs(t,e)}},o)}function vs(t,e){const n=yf(t,e),s=Ni(n),i=bf(t,n);return fw(t,i,s),s}function fw(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ue(n,l.path);let u=!1,d;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(on(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Qb)u=!0,d="maxretry",i=i.concat(on(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Pl(t,l.path,o);l.currentInputSnapshot=f;const _=e[a].update(f.val());if(_!==void 0){Ai("transaction failed: Data returned ",_,l.path);let w=me(_);typeof _=="object"&&_!=null&&ct(_,".priority")||(w=w.updatePriority(f.getPriority()));const A=l.currentWriteId,$=Oi(t),j=Il(w,f,$);l.currentOutputSnapshotRaw=w,l.currentOutputSnapshotResolved=j,l.currentWriteId=io(t),o.splice(o.indexOf(A),1),i=i.concat(gl(t.serverSyncTree_,l.path,j,l.currentWriteId,l.applyLocally)),i=i.concat(on(t.serverSyncTree_,A,!0))}else u=!0,d="nodata",i=i.concat(on(t.serverSyncTree_,l.currentWriteId,!0))}ze(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}oo(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ss(s[a]);ro(t,t.transactionQueueTree_)}function yf(t,e){let n,s=t.transactionQueueTree_;for(n=z(e);n!==null&&Wn(s)===void 0;)s=to(s,n),e=le(e),n=z(e);return s}function bf(t,e){const n=[];return wf(t,e,n),n.sort((s,i)=>s.order-i.order),n}function wf(t,e,n){const s=Wn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);no(e,i=>{wf(t,i,n)})}function oo(t,e){const n=Wn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Sl(e,n.length>0?n:void 0)}no(e,s=>{oo(t,s)})}function Nl(t,e){const n=Ni(yf(t,e)),s=to(t.transactionQueueTree_,e);return $b(s,i=>{Ho(t,i)}),Ho(t,s),hf(s,i=>{Ho(t,i)}),n}function Ho(t,e){const n=Wn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(on(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Sl(e,void 0):n.length=r+1,ze(t.eventQueue_,Ni(e),i);for(let o=0;o<s.length;o++)Ss(s[o])}}/**
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
 */function pw(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function _w(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):$e(`Invalid query segment '${n}' in query '${t}'`)}return e}const Cu=function(t,e){const n=gw(t),s=n.namespace;n.domain==="firebase.com"&&Kt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Kt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Iv();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Rh(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ne(n.pathString)}},gw=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=pw(t.substring(u,d)));const f=_w(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const w=e.indexOf(".");s=e.substring(0,w).toLowerCase(),n=e.substring(w+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class mw{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ie(this.snapshot.exportVal())}}class vw{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class If{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class yw{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new tt;return ow(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Jn("OnDisconnect.remove",this._path);const e=new tt;return Eu(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Jn("OnDisconnect.set",this._path),ba("OnDisconnect.set",e,this._path);const n=new tt;return Eu(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Jn("OnDisconnect.setWithPriority",this._path),ba("OnDisconnect.setWithPriority",e,this._path),Gb("OnDisconnect.setWithPriority",n);const s=new tt;return aw(this._repo,this._path,e,n,s.wrapCallback(()=>{})),s.promise}update(e){Jn("OnDisconnect.update",this._path),pf("OnDisconnect.update",e,this._path);const n=new tt;return lw(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class Al{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return q(this._path)?null:sl(this._path)}get ref(){return new kt(this._repo,this._path)}get _queryIdentifier(){const e=cu(this._queryParams),n=Za(e);return n==="{}"?"default":n}get _queryObject(){return cu(this._queryParams)}isEqual(e){if(e=Re(e),!(e instanceof Al))return!1;const n=this._repo===e._repo,s=il(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ry(this._path)}}class kt extends Al{constructor(e,n){super(e,n,new ll,!1)}get parent(){const e=Fh(this._path);return e===null?null:new kt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ys{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ne(e),s=wa(this.ref,e);return new ys(this._node.getChild(n),s,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new ys(i,wa(this.ref,s),_e)))}hasChild(e){const n=new ne(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function qe(t,e){return t=Re(t),t._checkNotDeleted("ref"),e!==void 0?wa(t._root,e):t._root}function wa(t,e){return t=Re(t),z(t._path)===null?Kb("child","path",e):_f("child","path",e),new kt(t._repo,ve(t._path,e))}function Ef(t){return t=Re(t),new yw(t._repo,t._path)}function xi(t,e){t=Re(t),Jn("set",t._path),ba("set",e,t._path);const n=new tt;return sw(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function bw(t,e){pf("update",e,t._path);const n=new tt;return iw(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function ao(t){t=Re(t);const e=new If(()=>{}),n=new lo(e);return nw(t._repo,t,n).then(s=>new ys(s,new kt(t._repo,t._path),t._queryParams.getIndex()))}class lo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new mw("value",this,new ys(e.snapshotNode,new kt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new vw(this,e,n):null}matches(e){return e instanceof lo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function ww(t,e,n,s,i){const r=new If(n,void 0),o=new lo(r);return cw(t._repo,t,o),()=>vf(t._repo,t,o)}function Ol(t,e,n,s){return ww(t,"value",e)}function Ia(t,e,n){vf(t._repo,t,null)}mb(kt);Ib(kt);/**
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
 */const Iw="FIREBASE_DATABASE_EMULATOR_HOST",Ea={};let Ew=!1;function Cw(t,e,n,s){t.repoInfo_=new Rh(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Sw(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Kt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Se("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Cu(r,i),a=o.repoInfo,l;typeof process<"u"&&Gc&&(l=Gc[Iw]),l?(r=`http://${l}?ns=${a.namespace}`,o=Cu(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new xv(t.name,t.options,e);zb("Invalid Firebase Database URL",o),q(o.path)||Kt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=kw(a,t,c,new Ov(t.name,n));return new Rw(u,t)}function Tw(t,e){const n=Ea[e];(!n||n[t.key]!==t)&&Kt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),uw(t),delete n[t.key]}function kw(t,e,n,s){let i=Ea[e.name];i||(i={},Ea[e.name]=i);let r=i[t.toURLString()];return r&&Kt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Xb(t,Ew,n,s),i[t.toURLString()]=r,r}class Rw{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Zb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new kt(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Tw(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Kt("Cannot call "+e+" on a deleted database.")}}function Pw(t=uh(),e){const n=Xa(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Kg("database");s&&Nw(n,...s)}return n}function Nw(t,e,n,s={}){t=Re(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Kt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Kt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Zi(Zi.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:zg(s.mockUserToken,t.app.options.projectId);r=new Zi(o)}Cw(i,e,n,r)}/**
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
 */function Aw(t){mv(Cs),fs(new Mn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Sw(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),cn(Kc,zc,t),cn(Kc,zc,"esm2017")}/**
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
 */class Ow{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function xw(t,e,n){var s;if(t=Re(t),Jn("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(s=void 0)!==null&&s!==void 0?s:!0,r=new tt,o=(l,c,u)=>{let d=null;l?r.reject(l):(d=new ys(u,new kt(t._repo,t._path),_e),r.resolve(new Ow(c,d)))},a=Ol(t,()=>{});return dw(t._repo,t._path,e,o,a,i),r.promise}$t.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};$t.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Aw();function xl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Cf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dw=Cf,Sf=new Si("auth","Firebase",Cf());/**
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
 */const Nr=new Ja("@firebase/auth");function Mw(t,...e){Nr.logLevel<=se.WARN&&Nr.warn(`Auth (${Cs}): ${t}`,...e)}function er(t,...e){Nr.logLevel<=se.ERROR&&Nr.error(`Auth (${Cs}): ${t}`,...e)}/**
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
 */function zt(t,...e){throw Dl(t,...e)}function It(t,...e){return Dl(t,...e)}function Tf(t,e,n){const s=Object.assign(Object.assign({},Dw()),{[e]:n});return new Si("auth","Firebase",s).create(e,{appName:t.name})}function hn(t){return Tf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Dl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Sf.create(t,...e)}function B(t,e,...n){if(!t)throw Dl(e,...n)}function Lt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw er(e),new Error(e)}function qt(t,e){t||Lt(e)}/**
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
 */function Ca(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Lw(){return Su()==="http:"||Su()==="https:"}function Su(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Fw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lw()||Yg()||"connection"in navigator)?navigator.onLine:!0}function Uw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Di{constructor(e,n){this.shortDelay=e,this.longDelay=n,qt(n>e,"Short delay should be less than long delay!"),this.isMobile=Ya()||rh()}get(){return Fw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ml(t,e){qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class kf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $w={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Hw=new Di(3e4,6e4);function co(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ps(t,e,n,s,i={}){return Rf(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Es(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},r);return qg()||(c.referrerPolicy="no-referrer"),kf.fetch()(Nf(t,t.config.apiHost,n,a),c)})}async function Rf(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},$w),e);try{const i=new Bw(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw zi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw zi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw zi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw zi(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Tf(t,u,c);zt(t,u)}}catch(i){if(i instanceof wn)throw i;zt(t,"network-request-failed",{message:String(i)})}}async function Pf(t,e,n,s,i={}){const r=await Ps(t,e,n,s,i);return"mfaPendingCredential"in r&&zt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Nf(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Ml(t.config,i):`${t.config.apiScheme}://${i}`}class Bw{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(It(this.auth,"network-request-failed")),Hw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=It(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function Ww(t,e){return Ps(t,"POST","/v1/accounts:delete",e)}async function Af(t,e){return Ps(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function si(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vw(t,e=!1){const n=Re(t),s=await n.getIdToken(e),i=Ll(s);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:si(Bo(i.auth_time)),issuedAtTime:si(Bo(i.iat)),expirationTime:si(Bo(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Bo(t){return Number(t)*1e3}function Ll(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return er("JWT malformed, contained fewer than 3 sections"),null;try{const i=hr(n);return i?JSON.parse(i):(er("Failed to decode base64 JWT payload"),null)}catch(i){return er("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Tu(t){const e=Ll(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function bi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof wn&&jw(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function jw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Gw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Sa{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=si(this.lastLoginAt),this.creationTime=si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ar(t){var e;const n=t.auth,s=await t.getIdToken(),i=await bi(t,Af(n,{idToken:s}));B(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Of(r.providerUserInfo):[],a=zw(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Sa(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Kw(t){const e=Re(t);await Ar(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zw(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Of(t){return t.map(e=>{var{providerId:n}=e,s=xl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function qw(t,e){const n=await Rf(t,{},async()=>{const s=Es({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Nf(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",kf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Yw(t,e){return Ps(t,"POST","/v2/accounts:revokeToken",co(t,e))}/**
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
 */class rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Tu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){B(e.length!==0,"internal-error");const n=Tu(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await qw(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new rs;return s&&(B(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(B(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(B(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rs,this.toJSON())}_performRefresh(){return Lt("not implemented")}}/**
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
 */function Xt(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ft{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=xl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Sa(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await bi(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Vw(this,e)}reload(){return Kw(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ar(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dt(this.auth.app))return Promise.reject(hn(this.auth));const e=await this.getIdToken();return await bi(this,Ww(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,$=(c=n.createdAt)!==null&&c!==void 0?c:void 0,j=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:Q,emailVerified:L,isAnonymous:ye,providerData:Qe,stsTokenManager:je}=n;B(Q&&je,e,"internal-error");const ut=rs.fromJSON(this.name,je);B(typeof Q=="string",e,"internal-error"),Xt(d,e.name),Xt(f,e.name),B(typeof L=="boolean",e,"internal-error"),B(typeof ye=="boolean",e,"internal-error"),Xt(_,e.name),Xt(w,e.name),Xt(y,e.name),Xt(A,e.name),Xt($,e.name),Xt(j,e.name);const Qt=new Ft({uid:Q,auth:e,email:f,emailVerified:L,displayName:d,isAnonymous:ye,photoURL:w,phoneNumber:_,tenantId:y,stsTokenManager:ut,createdAt:$,lastLoginAt:j});return Qe&&Array.isArray(Qe)&&(Qt.providerData=Qe.map(Rt=>Object.assign({},Rt))),A&&(Qt._redirectEventId=A),Qt}static async _fromIdTokenResponse(e,n,s=!1){const i=new rs;i.updateFromServerResponse(n);const r=new Ft({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ar(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];B(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Of(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new rs;a.updateFromIdToken(s);const l=new Ft({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Sa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const ku=new Map;function Ut(t){qt(t instanceof Function,"Expected a class definition");let e=ku.get(t);return e?(qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ku.set(t,e),e)}/**
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
 */class xf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xf.type="NONE";const Ru=xf;/**
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
 */function tr(t,e,n){return`firebase:${t}:${e}:${n}`}class os{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=tr(this.userKey,i.apiKey,r),this.fullPersistenceKey=tr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ft._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new os(Ut(Ru),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Ut(Ru);const o=tr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Ft._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new os(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new os(r,e,s))}}/**
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
 */function Pu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ff(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Df(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($f(e))return"Blackberry";if(Hf(e))return"Webos";if(Mf(e))return"Safari";if((e.includes("chrome/")||Lf(e))&&!e.includes("edge/"))return"Chrome";if(Uf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Df(t=He()){return/firefox\//i.test(t)}function Mf(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lf(t=He()){return/crios\//i.test(t)}function Ff(t=He()){return/iemobile/i.test(t)}function Uf(t=He()){return/android/i.test(t)}function $f(t=He()){return/blackberry/i.test(t)}function Hf(t=He()){return/webos/i.test(t)}function Fl(t=He()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Jw(t=He()){var e;return Fl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Qw(){return Jg()&&document.documentMode===10}function Bf(t=He()){return Fl(t)||Uf(t)||Hf(t)||$f(t)||/windows phone/i.test(t)||Ff(t)}/**
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
 */function Wf(t,e=[]){let n;switch(t){case"Browser":n=Pu(He());break;case"Worker":n=`${Pu(He())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cs}/${s}`}/**
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
 */class Xw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Zw(t,e={}){return Ps(t,"GET","/v2/passwordPolicy",co(t,e))}/**
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
 */const eI=6;class tI{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:eI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class nI{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nu(this),this.idTokenSubscription=new Nu(this),this.beforeStateQueue=new Xw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ut(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Af(this,{idToken:e}),s=await Ft._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Dt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ar(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Uw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dt(this.app))return Promise.reject(hn(this));const n=e?Re(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dt(this.app)?Promise.reject(hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dt(this.app)?Promise.reject(hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ut(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Zw(this),n=new tI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Si("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Yw(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ut(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[Ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Mw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function uo(t){return Re(t)}class Nu{constructor(e){this.auth=e,this.observer=null,this.addObserver=om(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ul={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sI(t){Ul=t}function iI(t){return Ul.loadJS(t)}function rI(){return Ul.gapiScript}function oI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function aI(t,e){const n=Xa(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(_r(r,e??{}))return i;zt(i,"already-initialized")}return n.initialize({options:e})}function lI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function cI(t,e,n){const s=uo(t);B(s._canInitEmulator,s,"emulator-config-failed"),B(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Vf(e),{host:o,port:a}=uI(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),dI()}function Vf(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uI(t){const e=Vf(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Au(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Au(o)}}}function Au(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class jf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Lt("not implemented")}_getIdTokenResponse(e){return Lt("not implemented")}_linkToIdToken(e,n){return Lt("not implemented")}_getReauthenticationResolver(e){return Lt("not implemented")}}/**
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
 */async function as(t,e){return Pf(t,"POST","/v1/accounts:signInWithIdp",co(t,e))}/**
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
 */const hI="http://localhost";class $n extends jf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new $n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=xl(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new $n(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return as(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,as(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,as(e,n)}buildRequest(){const e={requestUri:hI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Es(n)}return e}}/**
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
 */class Gf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mi extends Gf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class tn extends Mi{constructor(){super("facebook.com")}static credential(e){return $n._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";tn.PROVIDER_ID="facebook.com";/**
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
 */class nn extends Mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return $n._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return nn.credential(n,s)}catch{return null}}}nn.GOOGLE_SIGN_IN_METHOD="google.com";nn.PROVIDER_ID="google.com";/**
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
 */class sn extends Mi{constructor(){super("github.com")}static credential(e){return $n._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.GITHUB_SIGN_IN_METHOD="github.com";sn.PROVIDER_ID="github.com";/**
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
 */class rn extends Mi{constructor(){super("twitter.com")}static credential(e,n){return $n._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return rn.credential(n,s)}catch{return null}}}rn.TWITTER_SIGN_IN_METHOD="twitter.com";rn.PROVIDER_ID="twitter.com";/**
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
 */async function fI(t,e){return Pf(t,"POST","/v1/accounts:signUp",co(t,e))}/**
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
 */class vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Ft._fromIdTokenResponse(e,s,i),o=Ou(s);return new vn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Ou(s);return new vn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Ou(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function pI(t){var e;if(Dt(t.app))return Promise.reject(hn(t));const n=uo(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new vn({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await fI(n,{returnSecureToken:!0}),i=await vn._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Or extends wn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Or.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Or(e,n,s,i)}}function Kf(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Or._fromErrorAndOperation(t,r,e,s):r})}async function _I(t,e,n=!1){const s=await bi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vn._forOperation(t,"link",s)}/**
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
 */async function gI(t,e,n=!1){const{auth:s}=t;if(Dt(s.app))return Promise.reject(hn(s));const i="reauthenticate";try{const r=await bi(t,Kf(s,i,e,t),n);B(r.idToken,s,"internal-error");const o=Ll(r.idToken);B(o,s,"internal-error");const{sub:a}=o;return B(t.uid===a,s,"user-mismatch"),vn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&zt(s,"user-mismatch"),r}}/**
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
 */async function mI(t,e,n=!1){if(Dt(t.app))return Promise.reject(hn(t));const s="signIn",i=await Kf(t,s,e),r=await vn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}/**
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
 */function vI(t,e){return Re(t).setPersistence(e)}function yI(t,e,n,s){return Re(t).onIdTokenChanged(e,n,s)}function bI(t,e,n){return Re(t).beforeAuthStateChanged(e,n)}function wI(t,e,n,s){return Re(t).onAuthStateChanged(e,n,s)}function II(t){return Re(t).signOut()}const xr="__sak";/**
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
 */class zf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(xr,"1"),this.storage.removeItem(xr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const EI=1e3,CI=10;class qf extends zf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Qw()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,CI):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},EI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qf.type="LOCAL";const SI=qf;/**
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
 */class Yf extends zf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Yf.type="SESSION";const $l=Yf;/**
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
 */function TI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ho{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new ho(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await TI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ho.receivers=[];/**
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
 */function Hl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class kI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Hl("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Et(){return window}function RI(t){Et().location.href=t}/**
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
 */function Jf(){return typeof Et().WorkerGlobalScope<"u"&&typeof Et().importScripts=="function"}async function PI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function AI(){return Jf()?self:null}/**
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
 */const Qf="firebaseLocalStorageDb",OI=1,Dr="firebaseLocalStorage",Xf="fbase_key";class Li{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fo(t,e){return t.transaction([Dr],e?"readwrite":"readonly").objectStore(Dr)}function xI(){const t=indexedDB.deleteDatabase(Qf);return new Li(t).toPromise()}function Ta(){const t=indexedDB.open(Qf,OI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Dr,{keyPath:Xf})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Dr)?e(s):(s.close(),await xI(),e(await Ta()))})})}async function xu(t,e,n){const s=fo(t,!0).put({[Xf]:e,value:n});return new Li(s).toPromise()}async function DI(t,e){const n=fo(t,!1).get(e),s=await new Li(n).toPromise();return s===void 0?null:s.value}function Du(t,e){const n=fo(t,!0).delete(e);return new Li(n).toPromise()}const MI=800,LI=3;class Zf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ta(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>LI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ho._getInstance(AI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await PI(),!this.activeServiceWorker)return;this.sender=new kI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ta();return await xu(e,xr,"1"),await Du(e,xr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>xu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>DI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Du(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=fo(i,!1).getAll();return new Li(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zf.type="LOCAL";const FI=Zf;new Di(3e4,6e4);/**
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
 */function UI(t,e){return e?Ut(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Bl extends jf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,n){return as(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $I(t){return mI(t.auth,new Bl(t),t.bypassAuthState)}function HI(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),gI(n,new Bl(t),t.bypassAuthState)}async function BI(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),_I(n,new Bl(t),t.bypassAuthState)}/**
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
 */class ep{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $I;case"linkViaPopup":case"linkViaRedirect":return BI;case"reauthViaPopup":case"reauthViaRedirect":return HI;default:zt(this.auth,"internal-error")}}resolve(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const WI=new Di(2e3,1e4);class Qn extends ep{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Qn.currentPopupAction&&Qn.currentPopupAction.cancel(),Qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){qt(this.filter.length===1,"Popup operations only handle one event");const e=Hl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,WI.get())};e()}}Qn.currentPopupAction=null;/**
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
 */const VI="pendingRedirect",nr=new Map;class jI extends ep{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=nr.get(this.auth._key());if(!e){try{const s=await GI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}nr.set(this.auth._key(),e)}return this.bypassAuthState||nr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GI(t,e){const n=qI(e),s=zI(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function KI(t,e){nr.set(t._key(),e)}function zI(t){return Ut(t._redirectPersistence)}function qI(t){return tr(VI,t.config.apiKey,t.name)}async function YI(t,e,n=!1){if(Dt(t.app))return Promise.reject(hn(t));const s=uo(t),i=UI(s,e),o=await new jI(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const JI=10*60*1e3;class QI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!tp(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(It(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mu(e))}saveEventToCache(e){this.cachedEventUids.add(Mu(e)),this.lastProcessedEventTime=Date.now()}}function Mu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tp(t);default:return!1}}/**
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
 */async function ZI(t,e={}){return Ps(t,"GET","/v1/projects",e)}/**
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
 */const eE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tE=/^https?/;async function nE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ZI(t);for(const n of e)try{if(sE(n))return}catch{}zt(t,"unauthorized-domain")}function sE(t){const e=Ca(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!tE.test(n))return!1;if(eE.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const iE=new Di(3e4,6e4);function Lu(){const t=Et().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rE(t){return new Promise((e,n)=>{var s,i,r;function o(){Lu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lu(),n(It(t,"network-request-failed"))},timeout:iE.get()})}if(!((i=(s=Et().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Et().gapi)===null||r===void 0)&&r.load)o();else{const a=oI("iframefcb");return Et()[a]=()=>{gapi.load?o():n(It(t,"network-request-failed"))},iI(`${rI()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw sr=null,e})}let sr=null;function oE(t){return sr=sr||rE(t),sr}/**
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
 */const aE=new Di(5e3,15e3),lE="__/auth/iframe",cE="emulator/auth/iframe",uE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hE(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ml(e,cE):`https://${t.config.authDomain}/${lE}`,s={apiKey:e.apiKey,appName:t.name,v:Cs},i=dE.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Es(s).slice(1)}`}async function fE(t){const e=await oE(t),n=Et().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:hE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uE,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=It(t,"network-request-failed"),a=Et().setTimeout(()=>{r(o)},aE.get());function l(){Et().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const pE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_E=500,gE=600,mE="_blank",vE="http://localhost";class Fu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yE(t,e,n,s=_E,i=gE){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},pE),{width:s.toString(),height:i.toString(),top:r,left:o}),c=He().toLowerCase();n&&(a=Lf(c)?mE:n),Df(c)&&(e=e||vE,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[_,w])=>`${f}${_}=${w},`,"");if(Jw(c)&&a!=="_self")return bE(e||"",a),new Fu(null);const d=window.open(e||"",a,u);B(d,t,"popup-blocked");try{d.focus()}catch{}return new Fu(d)}function bE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const wE="__/auth/handler",IE="emulator/auth/handler",EE=encodeURIComponent("fac");async function Uu(t,e,n,s,i,r){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Cs,eventId:i};if(e instanceof Gf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",fr(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Mi){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${EE}=${encodeURIComponent(l)}`:"";return`${CE(t)}?${Es(a).slice(1)}${c}`}function CE({config:t}){return t.emulator?Ml(t,IE):`https://${t.authDomain}/${wE}`}/**
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
 */const Wo="webStorageSupport";class SE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$l,this._completeRedirectFn=YI,this._overrideRedirectResult=KI}async _openPopup(e,n,s,i){var r;qt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Uu(e,n,s,Ca(),i);return yE(e,o,Hl())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Uu(e,n,s,Ca(),i);return RI(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(qt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await fE(e),s=new QI(e);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wo,{type:Wo},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Wo];o!==void 0&&n(!!o),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bf()||Mf()||Fl()}}const TE=SE;var $u="@firebase/auth",Hu="1.7.9";/**
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
 */class kE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function RE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function PE(t){fs(new Mn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wf(t)},c=new nI(s,i,r,l);return lI(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),fs(new Mn("auth-internal",e=>{const n=uo(e.getProvider("auth").getImmediate());return(s=>new kE(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn($u,Hu,RE(t)),cn($u,Hu,"esm2017")}/**
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
 */const NE=5*60,AE=ih("authIdTokenMaxAge")||NE;let Bu=null;const OE=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>AE)return;const i=n==null?void 0:n.token;Bu!==i&&(Bu=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xE(t=uh()){const e=Xa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=aI(t,{popupRedirectResolver:TE,persistence:[FI,SI,$l]}),s=ih("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=OE(r.toString());bI(n,o,()=>o(n.currentUser)),yI(n,a=>o(a))}}const i=nh("auth");return i&&cI(n,`http://${i}`),n}function DE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}sI({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=It("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",DE().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});PE("Browser");var ME="firebase",LE="10.14.1";/**
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
 */cn(ME,LE,"app");const FE={apiKey:"AIzaSyDzJsJYfTcWaeC5f43EXG-brzAaY7_BBk8",authDomain:"seep-7fe1d.firebaseapp.com",databaseURL:"https://seep-7fe1d-default-rtdb.firebaseio.com",projectId:"seep-7fe1d",storageBucket:"seep-7fe1d.firebasestorage.app",messagingSenderId:"681624379623",appId:"1:681624379623:web:d9e10ac7318f96e98d0242"},np=ch(FE),Ye=Pw(np),po=xE(np);vI(po,$l);const UE=["S","H","D","C"],$E={S:"♠",H:"♥",D:"♦",C:"♣"},Wu={S:0,H:1,D:2,C:3},HE={1:"A",11:"J",12:"Q",13:"K"},Mr=100,J=t=>HE[t]||String(t),sp=t=>$E[t],ip=t=>t==="H"||t==="D";function Lr(t){return t.suit==="S"?t.rank:t.suit==="D"&&t.rank===10?6:t.rank===1?1:0}function ls(t){return t.type==="house"?t.value:t.card.rank}function Wl(t){return t.cards.reduce((e,n)=>e+n.rank,0)>=2*t.value}function Vl(t){return t.type==="house"?t.cards:[t.card]}function BE(t,e){const n=new Set([0]);for(const s of t){for(const i of[...n])n.add(i+s);if(n.has(e))return!0}return n.has(e)}function WE(t,e){function n(s,i,r){return i===0?r:s>=t.length||i<0?null:n(s+1,i-t[s],[...r,s])??n(s+1,i,r)}return n(0,e,[])}function jl(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function Gl(){const t=[];for(const e of UE)for(let n=1;n<=13;n++)t.push({suit:e,rank:n});return t}function bs(t){t.sort((e,n)=>e.rank-n.rank||Wu[e.suit]-Wu[n.suit])}function Kl(){return{deck:jl(Gl()),hands:[[],[],[],[]],floor:[],captured:[[],[]],scores:[0,0],seepBonus:[0,0],currentPlayer:0,bidder:0,bidValue:null,phase:"bid",roundNum:1,isFirstTurn:!0,handsDealt:!1,lastCaptureTeam:null,playerNames:null,finalEligible:null,finalHouseVal:null}}function ka(t,e){let n=!0;for(;n;){n=!1;const s=t.map((r,o)=>({it:r,i:o})).filter(r=>r.it.type==="card");if(!s.length)break;const i=WE(s.map(r=>r.it.card.rank),e.value);if(i!==null){const r=i.map(o=>s[o].i);e.cards.push(...r.map(o=>t[o].card)),r.sort((o,a)=>a-o).forEach(o=>t.splice(o,1)),n=!0}}}function VE(t,e){if(e.selHandIdx===null)return null;const n=t.currentPlayer,s=t.hands[n],i=s[e.selHandIdx],r=e.selFloorIdxs.map(o=>t.floor[o]);return{floor:t.floor,floorVals:t.floor.map(ls),hand:s,handCard:i,handIdx:e.selHandIdx,selItems:r,selSum:r.reduce((o,a)=>o+ls(a),0),selLoose:r.filter(o=>o.type==="card").map(o=>o.card),selHouses:r.filter(o=>o.type==="house"),remainder:s.filter((o,a)=>a!==e.selHandIdx),team:n%2,player:n,isFirstTurn:t.isFirstTurn,bidder:t.bidder,bidValue:t.bidValue,selFloorIdxs:e.selFloorIdxs}}function jE(t){if(t.floor.length===0)return{valid:!1,reason:"Floor is empty"};const e=t.handCard.rank,n=t.floor.filter(i=>i.type==="house"),s=t.floor.filter(i=>i.type==="card");for(const i of n)if(i.value!==e)return{valid:!1,reason:`House of ${J(i.value)} cannot be swept by ${J(e)}`};if(s.length>0){const i=s.reduce((r,o)=>r+o.card.rank,0);if(i!==e)return{valid:!1,reason:`Loose cards sum to ${i}, not ${e} — cannot seep`}}return{valid:!0,reason:"Seep! Sweep the entire floor",meta:{}}}function GE(t){return t.selItems.length===0?{valid:!1,reason:"No floor items selected"}:t.isFirstTurn&&t.player===t.bidder&&t.handCard.rank!==t.bidValue?{valid:!1,reason:`First turn: can only pick with the bid card (${J(t.bidValue)})`}:t.handCard.rank!==t.selSum?{valid:!1,reason:`Selected sum ${t.selSum} ≠ ${J(t.handCard.rank)}`}:{valid:!0,reason:`Pick ${t.selItems.length} floor item(s)`,meta:{}}}function KE(t,e){return t.remainder.some(n=>n.rank===e)||t.floor.some(n=>n.type==="house"&&n.team===t.team&&n.value===e)}function zE(t){const e=t.selLoose.reduce((o,a)=>o+a.rank,0),n=t.selHouses.reduce((o,a)=>o+a.value,0);if(t.selHouses.length>0){const o=t.handCard.rank+e+n;if(o>13)return{valid:!1,reason:`Sum ${o} exceeds King (13)`};const a=t.floor.find(c=>c.type==="house"&&c.value===o&&!t.selHouses.includes(c));return a?(t.team===a.team?t.player===a.owner:a.sharedBy===void 0||t.player===a.sharedBy)&&t.handCard.rank===a.value&&!t.remainder.some(c=>c.rank===a.value)?{valid:!1,reason:`Must keep a ${J(a.value)} in hand to capture this house`}:{valid:!0,reason:`Merge into house of ${J(o)}`,meta:{houseVal:o,merge:!0}}:{valid:!1,reason:`No house of ${J(o)} on the floor to merge into`}}if(t.selLoose.length===0)return{valid:!1,reason:"Select floor card(s) to combine with your hand card"};const s=t.handCard.rank===e,i=s?t.handCard.rank:t.handCard.rank+e;if(i<9)return{valid:!1,reason:`House value ${i} is below 9`};if(!s&&i>13)return{valid:!1,reason:`Sum ${i} exceeds King (13)`};if(t.isFirstTurn&&t.player===t.bidder&&t.handCard.rank===t.bidValue&&!t.remainder.some(o=>o.rank===t.bidValue))return{valid:!1,reason:`First turn: need a second ${J(t.bidValue)} to build with it`};const r=t.floor.find(o=>o.type==="house"&&o.value===i);return r?r.shared?{valid:!1,reason:`House of ${J(i)} is already shared and locked`}:{valid:!0,reason:`Contribute to house of ${J(i)} (will become shared)`,meta:{houseVal:i}}:t.floor.filter(o=>o.type==="house").length>=2?{valid:!1,reason:"Maximum of 2 houses are already on the floor"}:KE(t,i)?{valid:!0,reason:`Build house of ${J(i)}`,meta:{houseVal:i}}:{valid:!1,reason:`You need a key card (${J(i)}) in hand to pick up this house later`}}function qE(t){if(t.selHouses.length!==1)return{valid:!1,reason:"Select exactly one house to upgrade"};const e=t.selHouses[0];if(e.shared)return{valid:!1,reason:"Cannot upgrade a shared house"};if(e.pucca)return{valid:!1,reason:"Cannot upgrade a Pucca house"};if(Wl(e))return{valid:!1,reason:"House is already doubled — only cementing applies"};if(e.owner===t.player)return{valid:!1,reason:"You built this house — another player must modify it first"};const n=e.value+t.handCard.rank+t.selLoose.reduce((s,i)=>s+i.rank,0);return n<=e.value?{valid:!1,reason:"New value must exceed current"}:n>13?{valid:!1,reason:`New value ${n} exceeds King (13)`}:t.remainder.some(s=>s.rank===n)?{valid:!0,reason:`Upgrade house to ${J(n)}`,meta:{houseVal:n}}:{valid:!1,reason:`Need key card (${J(n)}) to claim the upgraded house`}}function YE(t){if(t.selHouses.length!==1)return{valid:!1,reason:"Select a house to reinforce"};const e=t.selHouses[0],n=t.handCard.rank+t.selLoose.reduce((r,o)=>r+o.rank,0);if(n!==e.value)return{valid:!1,reason:`Cards must total ${J(e.value)} to reinforce — yours total ${n}`};let s;return t.team===e.team?s=t.player===e.owner:s=e.sharedBy===void 0||t.player===e.sharedBy,s&&t.handCard.rank===e.value&&!t.remainder.some(r=>r.rank===e.value)?{valid:!1,reason:`Must keep a ${J(e.value)} in hand to capture this house`}:{valid:!0,reason:!e.shared&&e.team!==t.team?`Share house of ${J(e.value)}`:`Reinforce house of ${J(e.value)}`,meta:{houseVal:e.value}}}function JE(t){return t.isFirstTurn&&t.player===t.bidder&&t.handCard.rank!==t.bidValue?{valid:!1,reason:`First turn: can only throw the bid card (${J(t.bidValue)})`}:BE(t.floor.map(ls),t.handCard.rank)?{valid:!1,reason:`${J(t.handCard.rank)} can capture a floor item — must capture first`}:{valid:!0,reason:"Throw card to floor",meta:{}}}function QE(t){const e=jE(t);if(e.valid){const n={valid:!1,reason:"Seep is mandatory"};return{seep:e,pick:n,build:n,break:n,add:n,throw:n}}return{seep:{valid:!1},pick:GE(t),build:zE(t),break:qE(t),add:YE(t),throw:JE(t)}}function XE(t,e){if(t.seep.valid)return`⚡ Seep — sweep entire floor (${e.floor.length} items)!`;if(t.pick.valid)return`Pick: take ${e.selItems.length} floor item(s)`;if(t.build.valid){const i=t.build.meta.houseVal;return t.build.meta.merge?`Merge selected house(s) into House of ${J(i)} (${i})`:`Build House of ${J(i)} (${i})`}if(t.break.valid)return`Upgrade House → ${J(t.break.meta.houseVal)}`;if(t.add.valid)return`Reinforce house of ${J(t.add.meta.houseVal)} → Pucca ★`;const n=e.handCard,s=[];if(e.floor.forEach((i,r)=>{ls(i)===n.rank&&!e.selFloorIdxs.includes(r)&&s.push(`Click ${J(ls(i))} on the floor to Pick it up`)}),!s.length){const i=e.floor.map((r,o)=>({v:ls(r),i:o})).filter(r=>r.v<n.rank);for(let r=0;r<i.length&&!s.length;r++)for(let o=r+1;o<i.length;o++)if(i[r].v+i[o].v===n.rank){s.push(`Select ${J(i[r].v)} + ${J(i[o].v)} on floor to Pick`);break}}return t.throw.valid?s.length?s[0]:"Select floor cards to act, or Throw":s.length?s[0]:`${J(n.rank)} must capture — select matching floor cards`}function rp(t,e){const n=VE(t,e);if(!n)return{pick:!1,seep:!1,build:!1,buildVal:null,buildMerge:!1,add:!1,throw:!1,msg:"Select a card from your hand."};const s=QE(n),i=s.build.valid||s.break.valid,r=i?s.build.valid?s.build.meta:s.break.meta:null;return{pick:s.pick.valid,seep:s.seep.valid,build:i,buildVal:r?r.houseVal:null,buildMerge:!!(r&&r.merge),add:s.add.valid,throw:s.throw.valid,msg:XE(s,n)}}const Vo=Yt(Kl()),gt=Yt({selHandIdx:null,selFloorIdxs:[]}),qi=Yt({visible:!1,message:"",onDone:null}),Bs=Yt({visible:!1,house:null}),jo=Yt({visible:!1,message:""});function Je(){const t=G(()=>rp(Vo,gt));function e(c){var u;return((u=Vo.playerNames)==null?void 0:u[c])||`Player ${c+1}`}function n(c){gt.selHandIdx=gt.selHandIdx===c?null:c,gt.selFloorIdxs=[]}function s(c){const u=gt.selFloorIdxs.indexOf(c);u===-1?gt.selFloorIdxs.push(c):gt.selFloorIdxs.splice(u,1)}function i(){gt.selHandIdx=null,gt.selFloorIdxs=[]}function r(c){jo.message=`House ${c} Final!!`,jo.visible=!0}function o(c,u,d){qi.message=`+${u} points for Team ${c+1}!`,qi.visible=!0,qi.onDone=d}function a(c){Bs.house=c,Bs.visible=!0}function l(){Bs.visible=!1,Bs.house=null}return{gameState:Vo,ui:gt,actions:t,seepOverlay:qi,housePeek:Bs,finalBanner:jo,playerName:e,selectHandCard:n,toggleFloor:s,clearSel:i,showSeepOverlay:o,showFinalBanner:r,openHousePeek:a,closeHousePeek:l}}const{gameState:v,ui:Ae,clearSel:Fi,showSeepOverlay:ZE,showFinalBanner:eC}=Je(),{session:We}=Tt();let Vn=()=>Promise.resolve();function tC(t){Vn=t}function nC(){Object.assign(v,Kl()),v.hands[v.bidder]=v.deck.splice(0,4),bs(v.hands[v.bidder]),v.phase="bid"}function Go(){v.deck=jl(Gl()),v.hands[v.bidder]=v.deck.splice(0,4),bs(v.hands[v.bidder]),We.currentGameId&&Vn()}function sC(){v.hands[v.bidder].push(...v.deck.splice(0,8)),bs(v.hands[v.bidder]);for(let t=0;t<4;t++)t!==v.bidder&&(v.hands[t]=v.deck.splice(0,12),bs(v.hands[t]));v.handsDealt=!0}function iC(t){v.bidValue=t,v.floor=v.deck.splice(0,4).map(e=>({type:"card",card:e})),v.phase="play",We.currentGameId&&Vn()}function Ws(t){if(We.localSeat!==null&&We.localSeat!==v.currentPlayer)return;const e=rp(v,Ae);if(!(t==="pick"&&!e.pick)&&!(t==="seep"&&!e.seep)&&!(t==="build"&&!e.build)&&!(t==="add"&&!e.add)&&!(t==="throw"&&!e.throw))switch(t){case"pick":Vu(!1);break;case"seep":Ae.selFloorIdxs=v.floor.map((n,s)=>s),Vu(!0);break;case"build":rC(e.buildVal);break;case"add":oC();break;case"throw":aC();break}}function Vu(t){const e=v.currentPlayer,n=e%2,s=v.hands[e][Ae.selHandIdx],i=[...Ae.selFloorIdxs.map(a=>v.floor[a]).flatMap(Vl),s];v.hands[e].splice(Ae.selHandIdx,1),[...Ae.selFloorIdxs].sort((a,l)=>l-a).forEach(a=>v.floor.splice(a,1)),v.captured[n].push(...i),v.lastCaptureTeam=n;const r=v.isFirstTurn;if(v.isFirstTurn=!1,Fi(),(t||v.floor.length===0)&&!op()){const a=r?25:50;v.seepBonus[n]+=a,ZE(n,a,wi);return}wi()}function rC(t){const e=v.currentPlayer,n=e%2,s=v.hands[e][Ae.selHandIdx],r=[...Ae.selFloorIdxs.map(a=>v.floor[a]).flatMap(Vl),s];v.hands[e].splice(Ae.selHandIdx,1),[...Ae.selFloorIdxs].sort((a,l)=>l-a).forEach(a=>v.floor.splice(a,1));const o=v.floor.find(a=>a.type==="house"&&a.value===t);if(o)o.cards.push(...r),o.team!==n&&(o.shared||(o.shared=!0,o.sharedBy=e),o.pucca=!0),ka(v.floor,o);else{const a={type:"house",cards:r,value:t,pucca:!1,owner:e,team:n,shared:!1,sharedBy:void 0};v.floor.push(a),ka(v.floor,a)}v.finalEligible=e,v.finalHouseVal=t,v.isFirstTurn=!1,Fi(),wi()}function oC(){const t=v.currentPlayer,e=v.hands[t][Ae.selHandIdx],n=Ae.selFloorIdxs.find(o=>v.floor[o].type==="house"),s=v.floor[n],i=Ae.selFloorIdxs.filter(o=>v.floor[o].type==="card");s.cards.push(e,...i.map(o=>v.floor[o].card));const r=t%2;s.team!==r&&(s.shared||(s.shared=!0,s.sharedBy=t)),s.pucca=!0,v.hands[t].splice(Ae.selHandIdx,1),i.sort((o,a)=>a-o).forEach(o=>v.floor.splice(o,1)),ka(v.floor,s),v.finalEligible=t,v.finalHouseVal=s.value,v.isFirstTurn=!1,Fi(),wi()}function aC(){const t=v.currentPlayer,e=v.hands[t][Ae.selHandIdx];v.floor.push({type:"card",card:e}),v.hands[t].splice(Ae.selHandIdx,1),v.isFirstTurn=!1,Fi(),wi()}function op(){return v.hands.every(t=>t.length===0)}function lC(){if(We.localSeat!==null&&We.localSeat!==v.finalEligible||We.localSeat!==null&&We.localSeat!==v.currentPlayer)return;const t=v.finalHouseVal;v.finalEligible=null,v.finalHouseVal=null,eC(t),We.currentGameId&&Vn()}function wi(){if(v.finalEligible!==null&&v.currentPlayer!==v.finalEligible&&(v.finalEligible=null,v.finalHouseVal=null),v.handsDealt||sC(),op()){cC();return}v.currentPlayer=(v.currentPlayer+1)%4;let t=0;for(;v.hands[v.currentPlayer].length===0&&t++<4;)v.currentPlayer=(v.currentPlayer+1)%4;We.currentGameId&&Vn()}function cC(){v.floor.length>0&&v.lastCaptureTeam!==null&&(v.captured[v.lastCaptureTeam].push(...v.floor.flatMap(Vl)),v.floor=[]);const t=v.captured[0].reduce((n,s)=>n+Lr(s),0)+v.seepBonus[0],e=v.captured[1].reduce((n,s)=>n+Lr(s),0)+v.seepBonus[1];v.scores[0]+=t,v.scores[1]+=e,v.phase=v.scores[0]>=Mr||v.scores[1]>=Mr?"gameover":"roundend",v._roundS0=t,v._roundS1=e,We.currentGameId&&Vn()}function uC(){We.currentGameId&&We.localSeat!==v.bidder||(v.roundNum++,Object.assign(v,{deck:jl(Gl()),hands:[[],[],[],[]],floor:[],captured:[[],[]],seepBonus:[0,0],bidder:(v.bidder+1)%4,bidValue:null,phase:"bid",isFirstTurn:!0,handsDealt:!1,lastCaptureTeam:null}),Fi(),v.hands[v.bidder]=v.deck.splice(0,4),bs(v.hands[v.bidder]),We.currentGameId&&Vn())}const{session:x}=Tt(),{gameState:zl,ui:ju}=Je();let An=null,ii=null;const ap=Pn(null);function lp(){An&&(Ia(An),An=null),ii&&(Ia(ii),ii=null)}async function dC(){if(!x.currentGameId)return;const t=JSON.parse(JSON.stringify(zl));t.selHandIdx=null,t.selFloorIdxs=[],await xi(qe(Ye,`games/${x.currentGameId}/gameStateJson`),JSON.stringify(t))}tC(dC);async function hC(){const t=Math.floor(1e5+Math.random()*9e5).toString();x.localSeat=0,x.currentGameId=t,sessionStorage.setItem("seep_seat","0"),sessionStorage.setItem("seep_gameId",t);const e={0:x.localUid,1:null,2:null,3:null};await xi(qe(Ye,`games/${t}`),{status:"lobby",hostUid:x.localUid,createdAt:Date.now(),seatMap:e,names:{[x.localUid]:x.localName},gameStateJson:null}),ql(t),x.screen="room"}async function fC(t){const e=await ao(qe(Ye,`games/${t}`));if(!e.exists())return{error:"Room not found. Check the code and try again."};const n=e.val();if(n.status!=="lobby")return{error:"This game has already started."};if(n.seatMap){const s=Object.values(n.seatMap).indexOf(x.localUid);s!==-1&&(x.localSeat=s,sessionStorage.setItem("seep_seat",String(s)))}return x.currentGameId=t,sessionStorage.setItem("seep_gameId",t),await xi(qe(Ye,`games/${t}/names/${x.localUid}`),x.localName),ql(t),x.screen="room",{}}function ql(t){lp(),An=qe(Ye,`games/${t}`),Ol(An,e=>{if(!e.exists())return;const n=e.val();if(n.status==="bid"||n.status==="playing"){if(Ia(An),An=null,x.localSeat===null&&n.seatMap){const s=Object.values(n.seatMap).indexOf(x.localUid);s!==-1&&(x.localSeat=s,sessionStorage.setItem("seep_seat",String(s)))}cp(t);return}ap.value=n})}async function pC(t){const e=qe(Ye,`games/${x.currentGameId}/seatMap/${t}`),{committed:n}=await xw(e,s=>{if(s===null)return x.localUid});n?(x.localSeat=t,sessionStorage.setItem("seep_seat",String(t)),await xi(qe(Ye,`games/${x.currentGameId}/names/${x.localUid}`),x.localName),Ef(e).set(null)):alert("That seat was just taken. Please choose another.")}async function Gu(){const e=(await ao(qe(Ye,`games/${x.currentGameId}`))).val(),n=Object.values(e.seatMap||{}).filter(Boolean).length;if(!e||n<4){alert("All 4 seats must be filled");return}const s=Kl();s.hands[s.bidder]=s.deck.splice(0,4),bs(s.hands[s.bidder]),s.playerNames=[0,1,2,3].map(i=>{const r=e.seatMap[i];return r&&e.names&&e.names[r]||`Player ${i+1}`}),Object.assign(zl,s),await bw(qe(Ye,`games/${x.currentGameId}`),{status:"bid",gameStateJson:JSON.stringify(s)})}async function _C(){await navigator.clipboard.writeText(x.currentGameId)}async function cp(t){if(x.localSeat===null){const e=sessionStorage.getItem("seep_seat");if(e!==null)x.localSeat=parseInt(e,10);else{const n=await ao(qe(Ye,`games/${t}/seatMap`));if(n.exists()){const s=n.val(),i=Object.values(s).indexOf(x.localUid);i!==-1&&(x.localSeat=i,sessionStorage.setItem("seep_seat",String(i)))}}}ii=qe(Ye,`games/${t}/gameStateJson`),Ol(ii,e=>{if(!e.exists())return;const n=JSON.parse(e.val());Object.assign(zl,n),ju.selHandIdx=null,ju.selFloorIdxs=[],x.screen="game"})}function gC(){wI(po,async t=>{if(!t||(x.localUid=t.uid,x.localName=sessionStorage.getItem("seep_name")||"",!x.localName))return;const e=sessionStorage.getItem("seep_gameId");if(!e)return;x.currentGameId=e;const n=await ao(qe(Ye,`games/${e}`));if(!n.exists()){x.currentGameId=null;return}const s=n.val();if(s.seatMap){const i=Object.values(s.seatMap).indexOf(x.localUid);i!==-1&&(x.localSeat=i,sessionStorage.setItem("seep_seat",String(i)))}s.status==="lobby"?(ql(e),x.screen="room"):cp(e)})}async function Ku(t){if(x.localUid)return!0;const e=t.trim();if(!e)return!1;const n=await pI(po);return x.localUid=n.user.uid,x.localName=e,sessionStorage.setItem("seep_name",e),!0}async function mC(){await yn(),await II(po),x.localUid=null,x.localName="",x.currentGameId=null,x.localSeat=null,sessionStorage.removeItem("seep_gameId"),sessionStorage.removeItem("seep_seat"),sessionStorage.removeItem("seep_name"),x.screen="home"}async function yn(){if(!x.currentGameId){x.screen="home";return}if(x.localSeat!==null){const t=qe(Ye,`games/${x.currentGameId}/seatMap/${x.localSeat}`);Ef(t).cancel(),await xi(t,null)}lp(),sessionStorage.removeItem("seep_gameId"),sessionStorage.removeItem("seep_seat"),x.currentGameId=null,x.localSeat=null,x.screen="home"}const vC={class:"menu-account"},yC={id:"menu-account-name"},bC={id:"menu-account-detail"},wC={__name:"GlobalMenu",setup(t){const{session:e}=Tt(),n=Pn(!1),s=["Player 1 (T1)","Player 2 (T2)","Player 3 (T1)","Player 4 (T2)"],i=G(()=>{let a="";return e.currentGameId&&(a+=`Room: ${e.currentGameId}`),e.localSeat!==null&&(a+=`  ·  ${s[e.localSeat]}`),a});async function r(){n.value=!1,await mC()}function o(){n.value=!1}return Wa(()=>document.addEventListener("click",o)),Va(()=>document.removeEventListener("click",o)),(a,l)=>(M(),W("div",{id:"global-menu-wrap",class:oe({visible:S(e).screen!=="home"})},[g("button",{id:"global-menu-btn",onClick:l[0]||(l[0]=ui(c=>n.value=!n.value,["stop"]))},"☰"),g("div",{id:"global-menu-dropdown",class:oe({open:n.value}),onClick:l[1]||(l[1]=ui(()=>{},["stop"]))},[g("div",vC,[g("div",yC,O(S(e).localName||"—"),1),g("div",bC,O(i.value),1)]),g("button",{class:"menu-item",onClick:r},"Sign Out")],2)],2))}},IC={id:"seep-msg"},EC={__name:"SeepOverlay",setup(t){const{seepOverlay:e}=Je();return ts(()=>e.visible,n=>{n&&setTimeout(()=>{e.visible=!1,e.onDone&&(e.onDone(),e.onDone=null)},1800)}),(n,s)=>(M(),W("div",{id:"seep-overlay",class:oe({show:S(e).visible})},[g("div",IC,O(S(e).message),1)],2))}},CC={id:"final-msg"},SC={__name:"FinalBanner",setup(t){const{finalBanner:e}=Je();return ts(()=>e.visible,n=>{n&&setTimeout(()=>{e.visible=!1},1800)}),(n,s)=>(M(),W("div",{id:"final-banner",class:oe({show:S(e).visible})},[g("div",CC,O(S(e).message),1)],2))}},TC={class:"c-tl"},kC={class:"rank"},RC={class:"suit"},PC={class:"c-br"},_o={__name:"CardEl",props:{card:{type:Object,required:!0},clickable:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},faceDown:{type:Boolean,default:!1}},emits:["click"],setup(t){const e=t,n=G(()=>J(e.card.rank)),s=G(()=>sp(e.card.suit)),i=G(()=>ip(e.card.suit));return(r,o)=>(M(),W("div",{class:oe(["card",{red:i.value,selected:t.selected,"face-down":t.faceDown}]),style:ws(t.clickable?{}:{cursor:"default"}),onClick:o[0]||(o[0]=a=>t.clickable?r.$emit("click"):null)},[t.faceDown?jt("",!0):(M(),W(pe,{key:0},[g("div",TC,[st(O(n.value),1),o[1]||(o[1]=g("br",null,null,-1)),st(O(s.value),1)]),g("div",kC,O(n.value),1),g("div",RC,O(s.value),1),g("div",PC,[st(O(n.value),1),o[2]||(o[2]=g("br",null,null,-1)),st(O(s.value),1)])],64))],6))}},NC={class:"peek-inner"},AC={class:"peek-header"},OC={id:"peek-title"},xC={id:"peek-owners",class:"peek-owners"},DC={id:"peek-cards",class:"peek-cards"},MC={__name:"HousePeekModal",setup(t){const{housePeek:e,closeHousePeek:n,playerName:s}=Je(),i=G(()=>e.house),r=G(()=>{if(!i.value)return"";const o=i.value,a=o.shared?" ⚑ Shared":o.pucca?" ★ Pucca":Wl(o)?" ◆ Doubled":" (building)";return`House of ${J(o.value)}${a} — ${o.cards.length} cards`});return(o,a)=>{var l;return M(),W("div",{id:"house-peek",class:oe({show:S(e).visible}),onClick:a[1]||(a[1]=ui((...c)=>S(n)&&S(n)(...c),["self"]))},[g("div",NC,[g("div",AC,[g("span",OC,O(r.value),1),g("button",{class:"peek-close",onClick:a[0]||(a[0]=(...c)=>S(n)&&S(n)(...c))},"✕")]),g("div",xC,[i.value?(M(),W(pe,{key:0},[g("span",{class:oe(["peek-owner",`t${i.value.team}`])}," Built by "+O(S(s)(i.value.owner))+" (Team "+O(i.value.team+1)+") ",3),i.value.shared&&i.value.sharedBy!==void 0?(M(),W(pe,{key:0},[a[2]||(a[2]=g("span",{class:"peek-owner-sep"}," · ",-1)),g("span",{class:oe(["peek-owner",`t${i.value.team===0?1:0}`])}," Shared by "+O(S(s)(i.value.sharedBy))+" (Team "+O(i.value.team===0?2:1)+") ",3)],64)):jt("",!0)],64)):jt("",!0)]),g("div",DC,[(M(!0),W(pe,null,Vt(((l=i.value)==null?void 0:l.cards)??[],(c,u)=>(M(),us(_o,{key:u,card:c,clickable:!1},null,8,["card"]))),128))])])],2)}}},LC={id:"home-screen",class:"screen"},FC={class:"home-card"},UC={key:0,class:"home-welcome"},$C={class:"home-actions"},HC={key:2,class:"home-join-expand"},BC={class:"home-error"},WC={__name:"HomeScreen",setup(t){const{session:e}=Tt(),n=Pn(""),s=Pn(""),i=Pn(!1),r=Pn("");async function o(){r.value="";const l=e.localName||n.value.trim();if(!l){r.value="Please enter your name first.";return}try{await Ku(l),await hC()}catch(c){r.value="Sign-in failed: "+c.message}}async function a(){r.value="";const l=e.localName||n.value.trim();if(!l){r.value="Please enter your name first.";return}const c=s.value.trim();if(c.length!==6){r.value="Enter a valid 6-digit room code.";return}try{await Ku(l);const u=await fC(c);u!=null&&u.error&&(r.value=u.error)}catch(u){r.value="Join failed: "+u.message}}return(l,c)=>(M(),W("div",LC,[c[3]||(c[3]=g("div",{class:"home-logo"},"♠ SEEP ♠",-1)),c[4]||(c[4]=g("p",{class:"home-sub"},"Classic 4-player card game from Punjab",-1)),g("div",FC,[S(e).localName&&S(e).localUid?(M(),W("div",UC," Welcome back, "+O(S(e).localName)+"! ",1)):en((M(),W("input",{key:1,"onUpdate:modelValue":c[0]||(c[0]=u=>n.value=u),class:"home-input",type:"text",placeholder:"Enter your name to play",maxlength:"20",autocomplete:"off",onKeydown:xc(o,["enter"])},null,544)),[[Oc,n.value]]),g("div",$C,[g("button",{class:"btn btn-primary",onClick:o},"Start Game"),g("button",{class:"btn",style:{background:"#1e5c32",color:"#fff",border:"1px solid #3a8a4e"},onClick:c[1]||(c[1]=u=>i.value=!i.value)}," Join Room ")]),i.value?(M(),W("div",HC,[en(g("input",{"onUpdate:modelValue":c[2]||(c[2]=u=>s.value=u),type:"text",placeholder:"6-digit code",maxlength:"6",autocomplete:"off",onKeydown:xc(a,["enter"])},null,544),[[Oc,s.value]]),g("button",{class:"btn btn-primary",onClick:a},"Join →")])):jt("",!0),g("div",BC,O(r.value),1)])]))}},VC={id:"room-screen",class:"screen"},jC={class:"room-code-box"},GC={class:"seat-grid"},KC={class:"seat-name"},zC={class:"seat-label"},qC={class:"seat-label"},YC=["onClick"],JC={class:"seat-label"},QC={style:{display:"flex",gap:"12px","flex-wrap":"wrap","justify-content":"center"}},XC={__name:"RoomScreen",setup(t){const{session:e}=Tt(),n=Pn(""),s=["Player 1 (T1)","Player 2 (T2)","Player 3 (T1)","Player 4 (T2)"],i=ap,r=G(()=>{var y;return((y=i.value)==null?void 0:y.seatMap)||{}}),o=G(()=>{var y;return((y=i.value)==null?void 0:y.names)||{}}),a=G(()=>{var y;return((y=i.value)==null?void 0:y.hostUid)===e.localUid}),l=G(()=>Object.values(r.value).filter(y=>y!==null).length),c=G(()=>l.value===4),u=G(()=>Object.values(r.value).includes(e.localUid));function d(y){return r.value[y]||null}function f(y){const A=d(y);return A?o.value[A]||"Player":""}const _=G(()=>a.value?c.value?"All seats filled! Start the game.":`Waiting for players… (${l.value}/4)`:"Waiting for host to start…");async function w(){await _C(),n.value="Copied!",setTimeout(()=>{n.value=""},1200)}return(y,A)=>(M(),W("div",VC,[A[6]||(A[6]=g("h2",null,"Game Room",-1)),g("div",jC,[A[2]||(A[2]=g("div",{class:"label"},"Share this code",-1)),g("div",{class:"room-code",title:"Click to copy",onClick:w},O(n.value||S(e).currentGameId||"------"),1)]),g("div",GC,[A[4]||(A[4]=g("div",{class:"seat-header t1"},"Team 1 (Blue)",-1)),A[5]||(A[5]=g("div",{class:"seat-header t2"},"Team 2 (Red)",-1)),(M(),W(pe,null,Vt([0,1,2,3],$=>g("div",{key:$,class:oe(["seat-slot",{taken:!!d($),mine:d($)===S(e).localUid}])},[d($)?(M(),W(pe,{key:0},[g("div",KC,O(f($)),1),g("div",zC,O(s[$]),1)],64)):u.value?(M(),W(pe,{key:2},[g("div",JC,O(s[$]),1),A[3]||(A[3]=g("div",{style:{color:"#555","font-size":".85rem"}},"Empty",-1))],64)):(M(),W(pe,{key:1},[g("div",qC,O(s[$]),1),g("button",{onClick:j=>S(pC)($)},"Take seat",8,YC)],64))],2)),64))]),g("div",null,O(_.value),1),g("div",QC,[a.value&&c.value?(M(),W("button",{key:0,class:"btn btn-primary",style:{padding:"12px 36px","font-size":"1rem"},onClick:A[0]||(A[0]=(...$)=>S(Gu)&&S(Gu)(...$))},"Start Game ▶")):jt("",!0),g("button",{class:"btn btn-danger",style:{padding:"12px 28px","font-size":"1rem"},onClick:A[1]||(A[1]=(...$)=>S(yn)&&S(yn)(...$))}," Leave Room ")])]))}},ZC={id:"bid-screen",class:"screen"},eS={class:"bid-hand"},tS={key:0,style:{color:"#ffa040","font-size":".8rem"}},nS={class:"bid-btns"},sS=["onClick"],iS={__name:"BidScreen",setup(t){const{gameState:e,playerName:n}=Je(),{session:s}=Tt(),i=G(()=>s.localSeat===null||s.localSeat===e.bidder),r=G(()=>i.value?e.hands[e.bidder]??[]:[]),o=G(()=>r.value.length?Math.max(...r.value.map(_=>_.rank)):0),a=G(()=>o.value>=9),l=G(()=>r.value.some(_=>_.rank===9&&_.suit==="S")),c=G(()=>!a.value||o.value===9&&!l.value),u=G(()=>a.value?[...new Set(r.value.filter(_=>_.rank>=9).map(_=>_.rank))].sort((_,w)=>_-w):[]),d=G(()=>i.value?a.value?`${n(e.bidder)} – choose your bid (≥ 9). You need a matching key card in your hand.`:"No card ≥ 9 — redealing…":`Waiting for ${n(e.bidder)} to bid…`),f=G(()=>i.value&&c.value&&a.value?"You may pass (highest card is a non-♠ 9).":"");return ts(a,_=>{!_&&i.value&&setTimeout(Go,1200)},{immediate:!0}),(_,w)=>(M(),W("div",ZC,[w[2]||(w[2]=g("h2",null,"♠ Bid Phase",-1)),g("p",null,O(d.value),1),g("div",eS,[(M(!0),W(pe,null,Vt(r.value,(y,A)=>(M(),us(_o,{key:A,card:y,clickable:!1},null,8,["card"]))),128))]),f.value?(M(),W("p",tS,O(f.value),1)):jt("",!0),g("div",nS,[(M(!0),W(pe,null,Vt(u.value,y=>(M(),W("button",{key:y,class:"bid-btn",onClick:A=>S(iC)(y)},"Bid "+O(S(J)(y))+" ("+O(y)+")",9,sS))),128)),c.value?(M(),W("button",{key:0,class:"bid-btn pass",onClick:w[0]||(w[0]=(...y)=>S(Go)&&S(Go)(...y))},"Pass (Redeal)")):jt("",!0)]),g("button",{class:"btn btn-danger",style:{"margin-top":"8px",padding:"8px 24px","font-size":".9rem"},onClick:w[1]||(w[1]=(...y)=>S(yn)&&S(yn)(...y))}," Exit Game ")]))}},rS={key:0,class:"hidden-pile"},oS={class:"pile-stack"},aS={class:"pile-label"},Yi={__name:"PlayerHand",props:{count:{type:Number,required:!0}},setup(t){const e=t,n=G(()=>Math.min(3,e.count));return(s,i)=>t.count>0?(M(),W("div",rS,[g("div",oS,[(M(!0),W(pe,null,Vt(n.value,r=>(M(),W("div",{key:r,class:"card face-down",style:ws(`position:absolute;top:${(r-1)*4}px;left:${(r-1)*4}px;width:54px;height:76px;`)},null,4))),128))]),g("div",aS,O(t.count)+" cards",1)])):jt("",!0)}},lS={class:"h-val"},cS={class:"h-count"},uS=["title"],dS={class:"pmc-rank"},hS={class:"pmc-suit"},fS={__name:"FloorHouse",props:{house:{type:Object,required:!0},selected:{type:Boolean,default:!1}},emits:["click","peek"],setup(t){const e=t,n=G(()=>Wl(e.house)),s=G(()=>J(e.house.value)),i=c=>ip(c.suit),r=G(()=>e.house.shared?"shared":e.house.pucca?"pucca":"doubled"),o=G(()=>e.house.shared?"shared":`t${e.house.team}`),a=G(()=>e.house.shared?"T1+T2":`T${e.house.team+1} P${e.house.owner+1}`),l=G(()=>e.house.cards.slice(-3).reverse());return(c,u)=>n.value?(M(),W("div",{key:0,class:oe(["house",[r.value,{selected:t.selected}]]),onClick:u[1]||(u[1]=d=>c.$emit("click"))},[g("div",lS,O(s.value),1),g("div",{class:oe(["h-badge",o.value])},O(a.value),3),g("div",cS,O(t.house.cards.length)+"c",1),g("button",{class:"house-peek-btn",title:"Peek cards",onClick:u[0]||(u[0]=ui(d=>c.$emit("peek",t.house),["stop"]))},"👁")],2)):(M(),W("div",{key:1,class:oe(["house-pile",{selected:t.selected}]),title:`Building house of ${s.value} — not yet doubled`,onClick:u[3]||(u[3]=d=>c.$emit("click"))},[(M(!0),W(pe,null,Vt(l.value,(d,f)=>(M(),W("div",{key:f,class:oe(["pile-mini-card",{red:i(d)}]),style:ws(`top:${f*18}px;left:${f*4}px;z-index:${10-f};`)},[g("span",dS,O(S(J)(d.rank)),1),g("span",hS,O(S(sp)(d.suit)),1)],6))),128)),g("div",{class:oe(["h-pile-badge",`t${t.house.team}`])},O(s.value)+" ▸ T"+O(t.house.team+1),3),g("button",{class:"house-peek-btn",title:"Peek all cards",onClick:u[2]||(u[2]=ui(d=>c.$emit("peek",t.house),["stop"]))},"👁")],10,uS))}},pS={class:"floor-cards",id:"floor-area"},_S={key:0,class:"floor-empty"},gS={__name:"FloorArea",setup(t){const{gameState:e,ui:n,toggleFloor:s,openHousePeek:i}=Je();return(r,o)=>(M(),W("div",pS,[S(e).floor.length?jt("",!0):(M(),W("span",_S,"Empty floor")),(M(!0),W(pe,null,Vt(S(e).floor,(a,l)=>(M(),W(pe,{key:l},[a.type==="house"?(M(),us(fS,{key:0,house:a,selected:S(n).selFloorIdxs.includes(l),onClick:c=>S(s)(l),onPeek:S(i)},null,8,["house","selected","onClick","onPeek"])):(M(),us(_o,{key:1,card:a.card,clickable:!0,selected:S(n).selFloorIdxs.includes(l),class:"floor-card",onClick:c=>S(s)(l)},null,8,["card","selected","onClick"]))],64))),128))]))}},mS={class:"active-hand-zone",id:"active-hand-zone"},vS={__name:"ActiveHand",setup(t){const{gameState:e,ui:n,selectHandCard:s}=Je(),{session:i}=Tt(),r=G(()=>i.localSeat!==null?i.localSeat:e.currentPlayer),o=G(()=>i.localSeat===null||i.localSeat===e.currentPlayer),a=G(()=>e.hands[r.value]??[]);return(l,c)=>(M(),W("div",mS,[(M(!0),W(pe,null,Vt(a.value,(u,d)=>(M(),us(_o,{key:d,card:u,clickable:o.value,selected:S(n).selHandIdx===d,onClick:f=>o.value?S(s)(d):null},null,8,["card","clickable","selected","onClick"]))),128))]))}},yS={class:"g-actions"},bS={class:"turn-label"},wS={class:"bid-disp"},IS={class:"action-btns"},ES=["disabled"],CS=["disabled"],SS=["disabled"],TS=["disabled"],kS=["disabled"],RS={class:"status-msg"},PS={__name:"ActionsPanel",setup(t){const{gameState:e,actions:n}=Je(),{session:s}=Tt(),i=G(()=>{const c=e.currentPlayer;return`Player ${c+1}'s Turn (Team ${c%2+1})`}),r=G(()=>e.bidValue?`Bid: ${J(e.bidValue)} (${e.bidValue})`:""),o=G(()=>n.value.build||n.value.add),a=G(()=>e.finalEligible!==null&&e.finalEligible===s.localSeat&&e.currentPlayer===s.localSeat);function l(){n.value.add?Ws("add"):n.value.build&&Ws("build")}return(c,u)=>(M(),W("div",yS,[g("div",bS,O(i.value),1),g("div",wS,O(r.value),1),g("div",IS,[g("button",{class:"btn btn-throw",disabled:!S(n).throw,onClick:u[0]||(u[0]=d=>S(Ws)("throw"))},"Throw",8,ES),g("button",{class:"btn btn-pick",disabled:!S(n).pick,onClick:u[1]||(u[1]=d=>S(Ws)("pick"))},"Pick",8,CS),g("button",{class:"btn btn-house",disabled:!o.value,onClick:l},"House",8,SS),g("button",{class:"btn btn-seep btn-special",disabled:!S(n).seep,onClick:u[2]||(u[2]=d=>S(Ws)("seep"))},"Seep",8,TS),g("button",{class:"btn btn-final btn-special",disabled:!a.value,onClick:u[3]||(u[3]=d=>S(lC)())},"Final",8,kS)]),g("div",RS,O(S(n).msg),1)]))}},NS={id:"game-screen",class:"screen"},AS={class:"g-header"},OS={class:"g-scores"},xS={class:"g-round"},DS={class:"g-table"},MS={class:"cards-row"},LS={class:"cards-row"},FS={class:"floor-zone"},US={class:"cap-row"},$S={class:"cards-row"},HS={class:"cards-row"},BS={__name:"GameScreen",setup(t){const{gameState:e,playerName:n}=Je();function s(i){return(e.captured[i]??[]).reduce((r,o)=>r+Lr(o),0)+(e.seepBonus[i]??0)}return(i,r)=>{var o,a,l,c;return M(),W("div",NS,[g("div",AS,[r[2]||(r[2]=g("h1",null,"♠ SEEP",-1)),g("div",OS,[g("div",{class:oe(["g-score",{winning:S(e).scores[0]>S(e).scores[1]}])},[r[0]||(r[0]=st(" Team 1: ",-1)),g("strong",null,O(S(e).scores[0]),1)],2),g("div",{class:oe(["g-score",{winning:S(e).scores[1]>S(e).scores[0]}])},[r[1]||(r[1]=st(" Team 2: ",-1)),g("strong",null,O(S(e).scores[1]),1)],2)]),g("div",xS,"Round "+O(S(e).roundNum),1)]),g("div",DS,[g("div",{class:oe(["player-zone top",{active:S(e).currentPlayer===2}])},[g("div",MS,[fe(Yi,{count:((o=S(e).hands[2])==null?void 0:o.length)??0},null,8,["count"])]),g("div",{class:oe(["p-label t0",{"active-lbl":S(e).currentPlayer===2}])},O(S(n)(2))+" · Team 1 ",3)],2),g("div",{class:oe(["player-zone left",{active:S(e).currentPlayer===1}])},[g("div",LS,[fe(Yi,{count:((a=S(e).hands[1])==null?void 0:a.length)??0},null,8,["count"])]),g("div",{class:oe(["p-label t1",{"active-lbl":S(e).currentPlayer===1}])},O(S(n)(1))+"·T2 ",3)],2),g("div",FS,[r[5]||(r[5]=g("div",{class:"floor-label"},"TABLE",-1)),fe(gS),g("div",US,[g("div",null,[r[3]||(r[3]=st("T1 pts: ",-1)),g("span",null,O(s(0)),1)]),g("div",null,[r[4]||(r[4]=st("T2 pts: ",-1)),g("span",null,O(s(1)),1)])])]),g("div",{class:oe(["player-zone right",{active:S(e).currentPlayer===3}])},[g("div",{class:oe(["p-label t1",{"active-lbl":S(e).currentPlayer===3}])},O(S(n)(3))+"·T2 ",3),g("div",$S,[fe(Yi,{count:((l=S(e).hands[3])==null?void 0:l.length)??0},null,8,["count"])])],2),g("div",{class:oe(["player-zone bottom",{active:S(e).currentPlayer===0}])},[g("div",{class:oe(["p-label t0",{"active-lbl":S(e).currentPlayer===0}])},O(S(n)(0))+" · Team 1 ",3),g("div",HS,[fe(Yi,{count:((c=S(e).hands[0])==null?void 0:c.length)??0},null,8,["count"])])],2)]),fe(vS),fe(PS)])}}},WS={id:"roundend-screen",class:"screen"},VS={class:"score-table"},jS={class:"score-total"},GS={class:"cum-box"},KS={class:"cum-vals"},zS={style:{display:"flex",gap:"12px","flex-wrap":"wrap","justify-content":"center"}},qS={__name:"RoundEndScreen",setup(t){const{gameState:e}=Je(),n=G(()=>e.scores[0]>=Mr||e.scores[1]>=Mr);function s(o,a){return(e.captured[o]??[]).filter(a).reduce((l,c)=>l+Lr(c),0)}const i=G(()=>[["Spades (face value)",s(0,o=>o.suit==="S"),s(1,o=>o.suit==="S")],["10♦",s(0,o=>o.suit==="D"&&o.rank===10),s(1,o=>o.suit==="D"&&o.rank===10)],["Other Aces",s(0,o=>o.rank===1&&o.suit!=="S"),s(1,o=>o.rank===1&&o.suit!=="S")],["Seep Bonus",e.seepBonus[0]??0,e.seepBonus[1]??0]]);function r(){n.value?e.phase="gameover":uC()}return(o,a)=>(M(),W("div",WS,[g("h2",null,"Round "+O(S(e).roundNum)+" Complete",1),g("table",VS,[a[2]||(a[2]=g("thead",null,[g("tr",null,[g("th",null,"Category"),g("th",null,"Team 1"),g("th",null,"Team 2")])],-1)),g("tbody",null,[(M(!0),W(pe,null,Vt(i.value,l=>(M(),W("tr",{key:l[0]},[g("td",null,O(l[0]),1),g("td",null,O(l[1]),1),g("td",null,O(l[2]),1)]))),128)),g("tr",jS,[a[1]||(a[1]=g("td",null,"Round Total",-1)),g("td",null,O(S(e)._roundS0??0),1),g("td",null,O(S(e)._roundS1??0),1)])])]),g("div",GS,[a[5]||(a[5]=g("h3",null,"Cumulative Score",-1)),g("div",KS,[g("div",null,[a[3]||(a[3]=st("Team 1: ",-1)),g("strong",null,O(S(e).scores[0]),1)]),g("div",null,[a[4]||(a[4]=st("Team 2: ",-1)),g("strong",null,O(S(e).scores[1]),1)])])]),g("div",zS,[g("button",{class:"btn btn-primary",style:{"font-size":"1rem",padding:"10px 28px"},onClick:r},O(n.value?"See Results":"Next Round ▶"),1),g("button",{class:"btn btn-danger",style:{padding:"10px 24px","font-size":"1rem"},onClick:a[0]||(a[0]=(...l)=>S(yn)&&S(yn)(...l))}," Exit Game ")])]))}},YS={id:"gameover-screen",class:"screen"},JS={__name:"GameOverScreen",setup(t){const{gameState:e}=Je(),{session:n}=Tt(),s=G(()=>{const r=e.scores[0],o=e.scores[1];return`🏆 ${r>o?"Team 1 (P1 & P3)":o>r?"Team 2 (P2 & P4)":"Both Teams (Tie!)"} Wins!`});async function i(){n.currentGameId?await yn():nC()}return(r,o)=>(M(),W("div",YS,[g("h1",null,O(s.value),1),g("p",null,"Team 1: "+O(S(e).scores[0])+" pts | Team 2: "+O(S(e).scores[1])+" pts",1),g("button",{class:"btn btn-primary",style:{"font-size":"1rem",padding:"10px 28px"},onClick:i},O(S(n).currentGameId?"Back to Home":"New Game"),1)]))}},QS={__name:"App",setup(t){const{session:e}=Tt(),{gameState:n}=Je();return Wa(()=>{gC()}),(s,i)=>(M(),W(pe,null,[fe(wC),en(fe(WC,null,null,512),[[Gn,S(e).screen==="home"]]),en(fe(XC,null,null,512),[[Gn,S(e).screen==="room"]]),en(fe(iS,null,null,512),[[Gn,S(e).screen==="game"&&S(n).phase==="bid"]]),en(fe(BS,null,null,512),[[Gn,S(e).screen==="game"&&S(n).phase==="play"]]),en(fe(qS,null,null,512),[[Gn,S(e).screen==="game"&&S(n).phase==="roundend"]]),en(fe(JS,null,null,512),[[Gn,S(e).screen==="game"&&S(n).phase==="gameover"]]),fe(EC),fe(SC),fe(MC)],64))}};Dg(QS).mount("#app");
