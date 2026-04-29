(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $a(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const le={},rs=[],St=()=>{},nd=()=>!1,Gr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Kr=t=>t.startsWith("onUpdate:"),Fe=Object.assign,Ha=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Pp=Object.prototype.hasOwnProperty,te=(t,e)=>Pp.call(t,e),W=Array.isArray,os=t=>Pi(t)==="[object Map]",sd=t=>Pi(t)==="[object Set]",dc=t=>Pi(t)==="[object Date]",K=t=>typeof t=="function",be=t=>typeof t=="string",Rt=t=>typeof t=="symbol",re=t=>t!==null&&typeof t=="object",id=t=>(re(t)||K(t))&&K(t.then)&&K(t.catch),rd=Object.prototype.toString,Pi=t=>rd.call(t),Np=t=>Pi(t).slice(8,-1),od=t=>Pi(t)==="[object Object]",Ba=t=>be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xs=$a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ap=/-\w/g,lt=zr(t=>t.replace(Ap,e=>e.slice(1).toUpperCase())),Op=/\B([A-Z])/g,Cn=zr(t=>t.replace(Op,"-$1").toLowerCase()),ad=zr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Po=zr(t=>t?`on${ad(t)}`:""),Et=(t,e)=>!Object.is(t,e),nr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ld=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Va=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let hc;const qr=()=>hc||(hc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Rs(t){if(W(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=be(s)?Lp(s):Rs(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(be(t)||re(t))return t}const xp=/;(?![^(]*\))/g,Dp=/:([^]+)/,Mp=/\/\*[^]*?\*\//g;function Lp(t){const e={};return t.replace(Mp,"").split(xp).forEach(n=>{if(n){const s=n.split(Dp);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ie(t){let e="";if(be(t))e=t;else if(W(t))for(let n=0;n<t.length;n++){const s=ie(t[n]);s&&(e+=s+" ")}else if(re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Fp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Up=$a(Fp);function cd(t){return!!t||t===""}function $p(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Wa(t[s],e[s]);return n}function Wa(t,e){if(t===e)return!0;let n=dc(t),s=dc(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Rt(t),s=Rt(e),n||s)return t===e;if(n=W(t),s=W(e),n||s)return n&&s?$p(t,e):!1;if(n=re(t),s=re(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Wa(t[o],e[o]))return!1}}return String(t)===String(e)}const ud=t=>!!(t&&t.__v_isRef===!0),A=t=>be(t)?t:t==null?"":W(t)||re(t)&&(t.toString===rd||!K(t.toString))?ud(t)?A(t.value):JSON.stringify(t,dd,2):String(t),dd=(t,e)=>ud(e)?dd(t,e.value):os(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[No(s,r)+" =>"]=i,n),{})}:sd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>No(n))}:Rt(e)?No(e):re(e)&&!W(e)&&!od(e)?String(e):e,No=(t,e="")=>{var n;return Rt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xe;class Hp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=xe,!e&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=xe;try{return xe=this,e()}finally{xe=n}}}on(){++this._on===1&&(this.prevScope=xe,xe=this)}off(){if(this._on>0&&--this._on===0){if(xe===this)xe=this.prevScope;else{let e=xe;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Bp(){return xe}let fe;const Ao=new WeakSet;class hd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xe&&xe.active&&xe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ao.has(this)&&(Ao.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||pd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,fc(this),_d(this);const e=fe,n=ct;fe=this,ct=!0;try{return this.fn()}finally{md(this),fe=e,ct=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ka(e);this.deps=this.depsTail=void 0,fc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ao.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ia(this)&&this.run()}get dirty(){return ia(this)}}let fd=0,Zs,ei;function pd(t,e=!1){if(t.flags|=8,e){t.next=ei,ei=t;return}t.next=Zs,Zs=t}function ja(){fd++}function Ga(){if(--fd>0)return;if(ei){let e=ei;for(ei=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Zs;){let e=Zs;for(Zs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function _d(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function md(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Ka(s),Vp(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function ia(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(gd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function gd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===hi)||(t.globalVersion=hi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ia(t))))return;t.flags|=2;const e=t.dep,n=fe,s=ct;fe=t,ct=!0;try{_d(t);const i=t.fn(t._value);(e.version===0||Et(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{fe=n,ct=s,md(t),t.flags&=-3}}function Ka(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Ka(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Vp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let ct=!0;const vd=[];function Gt(){vd.push(ct),ct=!1}function Kt(){const t=vd.pop();ct=t===void 0?!0:t}function fc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=fe;fe=void 0;try{e()}finally{fe=n}}}let hi=0;class Wp{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class za{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!fe||!ct||fe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==fe)n=this.activeLink=new Wp(fe,this),fe.deps?(n.prevDep=fe.depsTail,fe.depsTail.nextDep=n,fe.depsTail=n):fe.deps=fe.depsTail=n,yd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=fe.depsTail,n.nextDep=void 0,fe.depsTail.nextDep=n,fe.depsTail=n,fe.deps===n&&(fe.deps=s)}return n}trigger(e){this.version++,hi++,this.notify(e)}notify(e){ja();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ga()}}}function yd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)yd(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ra=new WeakMap,Un=Symbol(""),oa=Symbol(""),fi=Symbol("");function De(t,e,n){if(ct&&fe){let s=ra.get(t);s||ra.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new za),i.map=s,i.key=n),i.track()}}function Lt(t,e,n,s,i,r){const o=ra.get(t);if(!o){hi++;return}const a=l=>{l&&l.trigger()};if(ja(),e==="clear")o.forEach(a);else{const l=W(t),c=l&&Ba(n);if(l&&n==="length"){const u=Number(s);o.forEach((d,f)=>{(f==="length"||f===fi||!Rt(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(fi)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Un)),os(t)&&a(o.get(oa)));break;case"delete":l||(a(o.get(Un)),os(t)&&a(o.get(oa)));break;case"set":os(t)&&a(o.get(Un));break}}Ga()}function Xn(t){const e=ee(t);return e===t?e:(De(e,"iterate",fi),it(t)?e:e.map(dt))}function Yr(t){return De(t=ee(t),"iterate",fi),t}function It(t,e){return zt(t)?ms($n(t)?dt(e):e):dt(e)}const jp={__proto__:null,[Symbol.iterator](){return Oo(this,Symbol.iterator,t=>It(this,t))},concat(...t){return Xn(this).concat(...t.map(e=>W(e)?Xn(e):e))},entries(){return Oo(this,"entries",t=>(t[1]=It(this,t[1]),t))},every(t,e){return Ot(this,"every",t,e,void 0,arguments)},filter(t,e){return Ot(this,"filter",t,e,n=>n.map(s=>It(this,s)),arguments)},find(t,e){return Ot(this,"find",t,e,n=>It(this,n),arguments)},findIndex(t,e){return Ot(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ot(this,"findLast",t,e,n=>It(this,n),arguments)},findLastIndex(t,e){return Ot(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ot(this,"forEach",t,e,void 0,arguments)},includes(...t){return xo(this,"includes",t)},indexOf(...t){return xo(this,"indexOf",t)},join(t){return Xn(this).join(t)},lastIndexOf(...t){return xo(this,"lastIndexOf",t)},map(t,e){return Ot(this,"map",t,e,void 0,arguments)},pop(){return Bs(this,"pop")},push(...t){return Bs(this,"push",t)},reduce(t,...e){return pc(this,"reduce",t,e)},reduceRight(t,...e){return pc(this,"reduceRight",t,e)},shift(){return Bs(this,"shift")},some(t,e){return Ot(this,"some",t,e,void 0,arguments)},splice(...t){return Bs(this,"splice",t)},toReversed(){return Xn(this).toReversed()},toSorted(t){return Xn(this).toSorted(t)},toSpliced(...t){return Xn(this).toSpliced(...t)},unshift(...t){return Bs(this,"unshift",t)},values(){return Oo(this,"values",t=>It(this,t))}};function Oo(t,e,n){const s=Yr(t),i=s[e]();return s!==t&&!it(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.done||(r.value=n(r.value)),r}),i}const Gp=Array.prototype;function Ot(t,e,n,s,i,r){const o=Yr(t),a=o!==t&&!it(t),l=o[e];if(l!==Gp[e]){const d=l.apply(t,r);return a?dt(d):d}let c=n;o!==t&&(a?c=function(d,f){return n.call(this,It(t,d),f,t)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function pc(t,e,n,s){const i=Yr(t),r=i!==t&&!it(t);let o=n,a=!1;i!==t&&(r?(a=s.length===0,o=function(c,u,d){return a&&(a=!1,c=It(t,c)),n.call(this,c,It(t,u),d,t)}):n.length>3&&(o=function(c,u,d){return n.call(this,c,u,d,t)}));const l=i[e](o,...s);return a?It(t,l):l}function xo(t,e,n){const s=ee(t);De(s,"iterate",fi);const i=s[e](...n);return(i===-1||i===!1)&&Ja(n[0])?(n[0]=ee(n[0]),s[e](...n)):i}function Bs(t,e,n=[]){Gt(),ja();const s=ee(t)[e].apply(t,n);return Ga(),Kt(),s}const Kp=$a("__proto__,__v_isRef,__isVue"),bd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Rt));function zp(t){Rt(t)||(t=String(t));const e=ee(this);return De(e,"has",t),e.hasOwnProperty(t)}class wd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?s_:Sd:r?Ed:Cd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=W(e);if(!i){let l;if(o&&(l=jp[n]))return l;if(n==="hasOwnProperty")return zp}const a=Reflect.get(e,n,Le(e)?e:s);if((Rt(n)?bd.has(n):Kp(n))||(i||De(e,"get",n),r))return a;if(Le(a)){const l=o&&Ba(n)?a:a.value;return i&&re(l)?la(l):l}return re(a)?i?la(a):Zt(a):a}}class Id extends wd{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];const o=W(e)&&Ba(n);if(!this._isShallow){const c=zt(r);if(!it(s)&&!zt(s)&&(r=ee(r),s=ee(s)),!o&&Le(r)&&!Le(s))return c||(r.value=s),!0}const a=o?Number(n)<e.length:te(e,n),l=Reflect.set(e,n,s,Le(e)?e:i);return e===ee(i)&&(a?Et(s,r)&&Lt(e,"set",n,s):Lt(e,"add",n,s)),l}deleteProperty(e,n){const s=te(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Lt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Rt(n)||!bd.has(n))&&De(e,"has",n),s}ownKeys(e){return De(e,"iterate",W(e)?"length":Un),Reflect.ownKeys(e)}}class qp extends wd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Yp=new Id,Jp=new qp,Qp=new Id(!0);const aa=t=>t,qi=t=>Reflect.getPrototypeOf(t);function Xp(t,e,n){return function(...s){const i=this.__v_raw,r=ee(i),o=os(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?aa:e?ms:dt;return!e&&De(r,"iterate",l?oa:Un),Fe(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function Yi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Zp(t,e){const n={get(i){const r=this.__v_raw,o=ee(r),a=ee(i);t||(Et(i,a)&&De(o,"get",i),De(o,"get",a));const{has:l}=qi(o),c=e?aa:t?ms:dt;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&De(ee(i),"iterate",Un),i.size},has(i){const r=this.__v_raw,o=ee(r),a=ee(i);return t||(Et(i,a)&&De(o,"has",i),De(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=ee(a),c=e?aa:t?ms:dt;return!t&&De(l,"iterate",Un),a.forEach((u,d)=>i.call(r,c(u),c(d),o))}};return Fe(n,t?{add:Yi("add"),set:Yi("set"),delete:Yi("delete"),clear:Yi("clear")}:{add(i){const r=ee(this),o=qi(r),a=ee(i),l=!e&&!it(i)&&!zt(i)?a:i;return o.has.call(r,l)||Et(i,l)&&o.has.call(r,i)||Et(a,l)&&o.has.call(r,a)||(r.add(l),Lt(r,"add",l,l)),this},set(i,r){!e&&!it(r)&&!zt(r)&&(r=ee(r));const o=ee(this),{has:a,get:l}=qi(o);let c=a.call(o,i);c||(i=ee(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?Et(r,u)&&Lt(o,"set",i,r):Lt(o,"add",i,r),this},delete(i){const r=ee(this),{has:o,get:a}=qi(r);let l=o.call(r,i);l||(i=ee(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&Lt(r,"delete",i,void 0),c},clear(){const i=ee(this),r=i.size!==0,o=i.clear();return r&&Lt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Xp(i,t,e)}),n}function qa(t,e){const n=Zp(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(te(n,i)&&i in s?n:s,i,r)}const e_={get:qa(!1,!1)},t_={get:qa(!1,!0)},n_={get:qa(!0,!1)};const Cd=new WeakMap,Ed=new WeakMap,Sd=new WeakMap,s_=new WeakMap;function i_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function r_(t){return t.__v_skip||!Object.isExtensible(t)?0:i_(Np(t))}function Zt(t){return zt(t)?t:Ya(t,!1,Yp,e_,Cd)}function o_(t){return Ya(t,!1,Qp,t_,Ed)}function la(t){return Ya(t,!0,Jp,n_,Sd)}function Ya(t,e,n,s,i){if(!re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=r_(t);if(r===0)return t;const o=i.get(t);if(o)return o;const a=new Proxy(t,r===2?s:n);return i.set(t,a),a}function $n(t){return zt(t)?$n(t.__v_raw):!!(t&&t.__v_isReactive)}function zt(t){return!!(t&&t.__v_isReadonly)}function it(t){return!!(t&&t.__v_isShallow)}function Ja(t){return t?!!t.__v_raw:!1}function ee(t){const e=t&&t.__v_raw;return e?ee(e):t}function a_(t){return!te(t,"__v_skip")&&Object.isExtensible(t)&&ld(t,"__v_skip",!0),t}const dt=t=>re(t)?Zt(t):t,ms=t=>re(t)?la(t):t;function Le(t){return t?t.__v_isRef===!0:!1}function Re(t){return l_(t,!1)}function l_(t,e){return Le(t)?t:new c_(t,e)}class c_{constructor(e,n){this.dep=new za,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ee(e),this._value=n?e:dt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||it(e)||zt(e);e=s?e:ee(e),Et(e,n)&&(this._rawValue=e,this._value=s?e:dt(e),this.dep.trigger())}}function w(t){return Le(t)?t.value:t}const u_={get:(t,e,n)=>e==="__v_raw"?t:w(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Le(i)&&!Le(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Td(t){return $n(t)?t:new Proxy(t,u_)}class d_{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new za(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=hi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&fe!==this)return pd(this,!0),!0}get value(){const e=this.dep.track();return gd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function h_(t,e,n=!1){let s,i;return K(t)?s=t:(s=t.get,i=t.set),new d_(s,i,n)}const Ji={},dr=new WeakMap;let Nn;function f_(t,e=!1,n=Nn){if(n){let s=dr.get(n);s||dr.set(n,s=[]),s.push(t)}}function p_(t,e,n=le){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=U=>i?U:it(U)||i===!1||i===0?Ft(U,1):Ft(U);let u,d,f,_,y=!1,b=!1;if(Le(t)?(d=()=>t.value,y=it(t)):$n(t)?(d=()=>c(t),y=!0):W(t)?(b=!0,y=t.some(U=>$n(U)||it(U)),d=()=>t.map(U=>{if(Le(U))return U.value;if($n(U))return c(U);if(K(U))return l?l(U,2):U()})):K(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){Gt();try{f()}finally{Kt()}}const U=Nn;Nn=u;try{return l?l(t,3,[_]):t(_)}finally{Nn=U}}:d=St,e&&i){const U=d,ye=i===!0?1/0:i;d=()=>Ft(U(),ye)}const x=Bp(),F=()=>{u.stop(),x&&x.active&&Ha(x.effects,u)};if(r&&e){const U=e;e=(...ye)=>{U(...ye),F()}}let G=b?new Array(t.length).fill(Ji):Ji;const Q=U=>{if(!(!(u.flags&1)||!u.dirty&&!U))if(e){const ye=u.run();if(i||y||(b?ye.some((et,ze)=>Et(et,G[ze])):Et(ye,G))){f&&f();const et=Nn;Nn=u;try{const ze=[ye,G===Ji?void 0:b&&G[0]===Ji?[]:G,_];G=ye,l?l(e,3,ze):e(...ze)}finally{Nn=et}}}else u.run()};return a&&a(Q),u=new hd(d),u.scheduler=o?()=>o(Q,!1):Q,_=U=>f_(U,!1,u),f=u.onStop=()=>{const U=dr.get(u);if(U){if(l)l(U,4);else for(const ye of U)ye();dr.delete(u)}},e?s?Q(!0):G=u.run():o?o(Q.bind(null,!0),!0):u.run(),F.pause=u.pause.bind(u),F.resume=u.resume.bind(u),F.stop=F,F}function Ft(t,e=1/0,n){if(e<=0||!re(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Le(t))Ft(t.value,e,n);else if(W(t))for(let s=0;s<t.length;s++)Ft(t[s],e,n);else if(sd(t)||os(t))t.forEach(s=>{Ft(s,e,n)});else if(od(t)){for(const s in t)Ft(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Ft(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ni(t,e,n,s){try{return s?t(...s):t()}catch(i){Jr(i,e,n)}}function Pt(t,e,n,s){if(K(t)){const i=Ni(t,e,n,s);return i&&id(i)&&i.catch(r=>{Jr(r,e,n)}),i}if(W(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Pt(t[r],e,n,s));return i}}function Jr(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||le;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(r){Gt(),Ni(r,null,10,[t,l,c]),Kt();return}}__(t,n,i,s,o)}function __(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const He=[];let wt=-1;const as=[];let sn=null,ts=0;const kd=Promise.resolve();let hr=null;function Rd(t){const e=hr||kd;return t?e.then(this?t.bind(this):t):e}function m_(t){let e=wt+1,n=He.length;for(;e<n;){const s=e+n>>>1,i=He[s],r=pi(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Qa(t){if(!(t.flags&1)){const e=pi(t),n=He[He.length-1];!n||!(t.flags&2)&&e>=pi(n)?He.push(t):He.splice(m_(e),0,t),t.flags|=1,Pd()}}function Pd(){hr||(hr=kd.then(Ad))}function g_(t){W(t)?as.push(...t):sn&&t.id===-1?sn.splice(ts+1,0,t):t.flags&1||(as.push(t),t.flags|=1),Pd()}function _c(t,e,n=wt+1){for(;n<He.length;n++){const s=He[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;He.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Nd(t){if(as.length){const e=[...new Set(as)].sort((n,s)=>pi(n)-pi(s));if(as.length=0,sn){sn.push(...e);return}for(sn=e,ts=0;ts<sn.length;ts++){const n=sn[ts];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}sn=null,ts=0}}const pi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ad(t){try{for(wt=0;wt<He.length;wt++){const e=He[wt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ni(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;wt<He.length;wt++){const e=He[wt];e&&(e.flags&=-2)}wt=-1,He.length=0,Nd(),hr=null,(He.length||as.length)&&Ad()}}let tt=null,Od=null;function fr(t){const e=tt;return tt=t,Od=t&&t.type.__scopeId||null,e}function v_(t,e=tt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Tc(-1);const r=fr(e);let o;try{o=t(...i)}finally{fr(r),s._d&&Tc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Dt(t,e){if(tt===null)return t;const n=to(tt),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=le]=e[i];r&&(K(r)&&(r={mounted:r,updated:r}),r.deep&&Ft(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Rn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Gt(),Pt(l,n,8,[t.el,a,t,e]),Kt())}}function y_(t,e){if(Be){let n=Be.provides;const s=Be.parent&&Be.parent.provides;s===n&&(n=Be.provides=Object.create(s)),n[t]=e}}function sr(t,e,n=!1){const s=gm();if(s||ls){let i=ls?ls._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&K(e)?e.call(s&&s.proxy):e}}const b_=Symbol.for("v-scx"),w_=()=>sr(b_);function Wt(t,e,n){return xd(t,e,n)}function xd(t,e,n=le){const{immediate:s,deep:i,flush:r,once:o}=n,a=Fe({},n),l=e&&s||!e&&r!=="post";let c;if(mi){if(r==="sync"){const _=w_();c=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=St,_.resume=St,_.pause=St,_}}const u=Be;a.call=(_,y,b)=>Pt(_,u,y,b);let d=!1;r==="post"?a.scheduler=_=>{Ge(_,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(_,y)=>{y?_():Qa(_)}),a.augmentJob=_=>{e&&(_.flags|=4),d&&(_.flags|=2,u&&(_.id=u.uid,_.i=u))};const f=p_(t,e,a);return mi&&(c?c.push(f):l&&f()),f}function I_(t,e,n){const s=this.proxy,i=be(t)?t.includes(".")?Dd(s,t):()=>s[t]:t.bind(s,s);let r;K(e)?r=e:(r=e.handler,n=e);const o=Ai(this),a=xd(i,r.bind(s),n);return o(),a}function Dd(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const C_=Symbol("_vte"),E_=t=>t.__isTeleport,S_=Symbol("_leaveCb");function Xa(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Xa(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Md(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function mc(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const pr=new WeakMap;function ti(t,e,n,s,i=!1){if(W(t)){t.forEach((b,x)=>ti(b,e&&(W(e)?e[x]:e),n,s,i));return}if(ni(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&ti(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?to(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===le?a.refs={}:a.refs,d=a.setupState,f=ee(d),_=d===le?nd:b=>mc(u,b)?!1:te(f,b),y=(b,x)=>!(x&&mc(u,x));if(c!=null&&c!==l){if(gc(e),be(c))u[c]=null,_(c)&&(d[c]=null);else if(Le(c)){const b=e;y(c,b.k)&&(c.value=null),b.k&&(u[b.k]=null)}}if(K(l))Ni(l,a,12,[o,u]);else{const b=be(l),x=Le(l);if(b||x){const F=()=>{if(t.f){const G=b?_(l)?d[l]:u[l]:y()||!t.k?l.value:u[t.k];if(i)W(G)&&Ha(G,r);else if(W(G))G.includes(r)||G.push(r);else if(b)u[l]=[r],_(l)&&(d[l]=u[l]);else{const Q=[r];y(l,t.k)&&(l.value=Q),t.k&&(u[t.k]=Q)}}else b?(u[l]=o,_(l)&&(d[l]=o)):x&&(y(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const G=()=>{F(),pr.delete(t)};G.id=-1,pr.set(t,G),Ge(G,n)}else gc(t),F()}}}function gc(t){const e=pr.get(t);e&&(e.flags|=8,pr.delete(t))}qr().requestIdleCallback;qr().cancelIdleCallback;const ni=t=>!!t.type.__asyncLoader,Ld=t=>t.type.__isKeepAlive;function T_(t,e){Fd(t,"a",e)}function k_(t,e){Fd(t,"da",e)}function Fd(t,e,n=Be){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Qr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Ld(i.parent.vnode)&&R_(s,e,n,i),i=i.parent}}function R_(t,e,n,s){const i=Qr(e,t,s,!0);Xr(()=>{Ha(s[e],i)},n)}function Qr(t,e,n=Be,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Gt();const a=Ai(n),l=Pt(e,n,t,o);return a(),Kt(),l});return s?i.unshift(r):i.push(r),r}}const en=t=>(e,n=Be)=>{(!mi||t==="sp")&&Qr(t,(...s)=>e(...s),n)},P_=en("bm"),Za=en("m"),N_=en("bu"),A_=en("u"),O_=en("bum"),Xr=en("um"),x_=en("sp"),D_=en("rtg"),M_=en("rtc");function L_(t,e=Be){Qr("ec",t,e)}const F_=Symbol.for("v-ndc");function Nt(t,e,n,s){let i;const r=n,o=W(t);if(o||be(t)){const a=o&&$n(t);let l=!1,c=!1;a&&(l=!it(t),c=zt(t),t=Yr(t)),i=new Array(t.length);for(let u=0,d=t.length;u<d;u++)i[u]=e(l?c?ms(dt(t[u])):dt(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(re(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}const ca=t=>t?ih(t)?to(t):ca(t.parent):null,si=Fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ca(t.parent),$root:t=>ca(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>$d(t),$forceUpdate:t=>t.f||(t.f=()=>{Qa(t.update)}),$nextTick:t=>t.n||(t.n=Rd.bind(t.proxy)),$watch:t=>I_.bind(t)}),Do=(t,e)=>t!==le&&!t.__isScriptSetup&&te(t,e),U_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Do(s,e))return o[e]=1,s[e];if(i!==le&&te(i,e))return o[e]=2,i[e];if(te(r,e))return o[e]=3,r[e];if(n!==le&&te(n,e))return o[e]=4,n[e];ua&&(o[e]=0)}}const c=si[e];let u,d;if(c)return e==="$attrs"&&De(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==le&&te(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,te(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Do(i,e)?(i[e]=n,!0):s!==le&&te(s,e)?(s[e]=n,!0):te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,props:r,type:o}},a){let l;return!!(n[a]||t!==le&&a[0]!=="$"&&te(t,a)||Do(e,a)||te(r,a)||te(s,a)||te(si,a)||te(i.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function vc(t){return W(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ua=!0;function $_(t){const e=$d(t),n=t.proxy,s=t.ctx;ua=!1,e.beforeCreate&&yc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:_,updated:y,activated:b,deactivated:x,beforeDestroy:F,beforeUnmount:G,destroyed:Q,unmounted:U,render:ye,renderTracked:et,renderTriggered:ze,errorCaptured:pt,serverPrefetch:tn,expose:At,inheritAttrs:Fs,components:ji,directives:Gi,filters:ko}=e;if(c&&H_(c,s,null),o)for(const me in o){const de=o[me];K(de)&&(s[me]=de.bind(n))}if(i){const me=i.call(n,n);re(me)&&(t.data=Zt(me))}if(ua=!0,r)for(const me in r){const de=r[me],Tn=K(de)?de.bind(n,n):K(de.get)?de.get.bind(n,n):St,Ki=!K(de)&&K(de.set)?de.set.bind(n):St,kn=j({get:Tn,set:Ki});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>kn.value,set:_t=>kn.value=_t})}if(a)for(const me in a)Ud(a[me],s,n,me);if(l){const me=K(l)?l.call(n):l;Reflect.ownKeys(me).forEach(de=>{y_(de,me[de])})}u&&yc(u,t,"c");function Ue(me,de){W(de)?de.forEach(Tn=>me(Tn.bind(n))):de&&me(de.bind(n))}if(Ue(P_,d),Ue(Za,f),Ue(N_,_),Ue(A_,y),Ue(T_,b),Ue(k_,x),Ue(L_,pt),Ue(M_,et),Ue(D_,ze),Ue(O_,G),Ue(Xr,U),Ue(x_,tn),W(At))if(At.length){const me=t.exposed||(t.exposed={});At.forEach(de=>{Object.defineProperty(me,de,{get:()=>n[de],set:Tn=>n[de]=Tn,enumerable:!0})})}else t.exposed||(t.exposed={});ye&&t.render===St&&(t.render=ye),Fs!=null&&(t.inheritAttrs=Fs),ji&&(t.components=ji),Gi&&(t.directives=Gi),tn&&Md(t)}function H_(t,e,n=St){W(t)&&(t=da(t));for(const s in t){const i=t[s];let r;re(i)?"default"in i?r=sr(i.from||s,i.default,!0):r=sr(i.from||s):r=sr(i),Le(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function yc(t,e,n){Pt(W(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ud(t,e,n,s){let i=s.includes(".")?Dd(n,s):()=>n[s];if(be(t)){const r=e[t];K(r)&&Wt(i,r)}else if(K(t))Wt(i,t.bind(n));else if(re(t))if(W(t))t.forEach(r=>Ud(r,e,n,s));else{const r=K(t.handler)?t.handler.bind(n):e[t.handler];K(r)&&Wt(i,r,t)}}function $d(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>_r(l,c,o,!0)),_r(l,e,o)),re(e)&&r.set(e,l),l}function _r(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&_r(t,r,n,!0),i&&i.forEach(o=>_r(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=B_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const B_={data:bc,props:wc,emits:wc,methods:Js,computed:Js,beforeCreate:$e,created:$e,beforeMount:$e,mounted:$e,beforeUpdate:$e,updated:$e,beforeDestroy:$e,beforeUnmount:$e,destroyed:$e,unmounted:$e,activated:$e,deactivated:$e,errorCaptured:$e,serverPrefetch:$e,components:Js,directives:Js,watch:W_,provide:bc,inject:V_};function bc(t,e){return e?t?function(){return Fe(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function V_(t,e){return Js(da(t),da(e))}function da(t){if(W(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function $e(t,e){return t?[...new Set([].concat(t,e))]:e}function Js(t,e){return t?Fe(Object.create(null),t,e):e}function wc(t,e){return t?W(t)&&W(e)?[...new Set([...t,...e])]:Fe(Object.create(null),vc(t),vc(e??{})):e}function W_(t,e){if(!t)return e;if(!e)return t;const n=Fe(Object.create(null),t);for(const s in e)n[s]=$e(t[s],e[s]);return n}function Hd(){return{app:null,config:{isNativeTag:nd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let j_=0;function G_(t,e){return function(s,i=null){K(s)||(s=Fe({},s)),i!=null&&!re(i)&&(i=null);const r=Hd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:j_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Cm,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&K(u.install)?(o.add(u),u.install(c,...d)):K(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const _=c._ceVNode||ae(s,i);return _.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),t(_,u,f),l=!0,c._container=u,u.__vue_app__=c,to(_.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Pt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=ls;ls=c;try{return u()}finally{ls=d}}};return c}}let ls=null;const K_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${lt(e)}Modifiers`]||t[`${Cn(e)}Modifiers`];function z_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||le;let i=n;const r=e.startsWith("update:"),o=r&&K_(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>be(u)?u.trim():u)),o.number&&(i=n.map(Va)));let a,l=s[a=Po(e)]||s[a=Po(lt(e))];!l&&r&&(l=s[a=Po(Cn(e))]),l&&Pt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pt(c,t,6,i)}}const q_=new WeakMap;function Bd(t,e,n=!1){const s=n?q_:e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!K(t)){const l=c=>{const u=Bd(c,e,!0);u&&(a=!0,Fe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(re(t)&&s.set(t,null),null):(W(r)?r.forEach(l=>o[l]=null):Fe(o,r),re(t)&&s.set(t,o),o)}function Zr(t,e){return!t||!Gr(e)?!1:(e=e.slice(2).replace(/Once$/,""),te(t,e[0].toLowerCase()+e.slice(1))||te(t,Cn(e))||te(t,e))}function Ic(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:_,ctx:y,inheritAttrs:b}=t,x=fr(t);let F,G;try{if(n.shapeFlag&4){const U=i||s,ye=U;F=Ct(c.call(ye,U,u,d,_,f,y)),G=a}else{const U=e;F=Ct(U.length>1?U(d,{attrs:a,slots:o,emit:l}):U(d,null)),G=e.props?a:Y_(a)}}catch(U){ii.length=0,Jr(U,t,1),F=ae(gn)}let Q=F;if(G&&b!==!1){const U=Object.keys(G),{shapeFlag:ye}=Q;U.length&&ye&7&&(r&&U.some(Kr)&&(G=J_(G,r)),Q=vs(Q,G,!1,!0))}return n.dirs&&(Q=vs(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(n.dirs):n.dirs),n.transition&&Xa(Q,n.transition),F=Q,fr(x),F}const Y_=t=>{let e;for(const n in t)(n==="class"||n==="style"||Gr(n))&&((e||(e={}))[n]=t[n]);return e},J_=(t,e)=>{const n={};for(const s in t)(!Kr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Q_(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Cc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(Vd(o,s,f)&&!Zr(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Cc(s,o,c):!0:!!o;return!1}function Cc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(Vd(e,t,r)&&!Zr(n,r))return!0}return!1}function Vd(t,e,n){const s=t[n],i=e[n];return n==="style"&&re(s)&&re(i)?!Wa(s,i):s!==i}function X_({vnode:t,parent:e,suspense:n},s){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.suspense.vnode.el=i.el=s,t=i),i===t)(t=e.vnode).el=s,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=s)}const Wd={},jd=()=>Object.create(Wd),Gd=t=>Object.getPrototypeOf(t)===Wd;function Z_(t,e,n,s=!1){const i={},r=jd();t.propsDefaults=Object.create(null),Kd(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:o_(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function em(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ee(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Zr(t.emitsOptions,f))continue;const _=e[f];if(l)if(te(r,f))_!==r[f]&&(r[f]=_,c=!0);else{const y=lt(f);i[y]=ha(l,a,y,_,t,!1)}else _!==r[f]&&(r[f]=_,c=!0)}}}else{Kd(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!te(e,d)&&((u=Cn(d))===d||!te(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=ha(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!te(e,d))&&(delete r[d],c=!0)}c&&Lt(t.attrs,"set","")}function Kd(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Xs(l))continue;const c=e[l];let u;i&&te(i,u=lt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Zr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ee(n),c=a||le;for(let u=0;u<r.length;u++){const d=r[u];n[d]=ha(i,l,d,c[d],t,!te(c,d))}}return o}function ha(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=te(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&K(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Ai(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Cn(n))&&(s=!0))}return s}const tm=new WeakMap;function zd(t,e,n=!1){const s=n?tm:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!K(t)){const u=d=>{l=!0;const[f,_]=zd(d,e,!0);Fe(o,f),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return re(t)&&s.set(t,rs),rs;if(W(r))for(let u=0;u<r.length;u++){const d=lt(r[u]);Ec(d)&&(o[d]=le)}else if(r)for(const u in r){const d=lt(u);if(Ec(d)){const f=r[u],_=o[d]=W(f)||K(f)?{type:f}:Fe({},f),y=_.type;let b=!1,x=!0;if(W(y))for(let F=0;F<y.length;++F){const G=y[F],Q=K(G)&&G.name;if(Q==="Boolean"){b=!0;break}else Q==="String"&&(x=!1)}else b=K(y)&&y.name==="Boolean";_[0]=b,_[1]=x,(b||te(_,"default"))&&a.push(d)}}const c=[o,a];return re(t)&&s.set(t,c),c}function Ec(t){return t[0]!=="$"&&!Xs(t)}const el=t=>t==="_"||t==="_ctx"||t==="$stable",tl=t=>W(t)?t.map(Ct):[Ct(t)],nm=(t,e,n)=>{if(e._n)return e;const s=v_((...i)=>tl(e(...i)),n);return s._c=!1,s},qd=(t,e,n)=>{const s=t._ctx;for(const i in t){if(el(i))continue;const r=t[i];if(K(r))e[i]=nm(i,r,s);else if(r!=null){const o=tl(r);e[i]=()=>o}}},Yd=(t,e)=>{const n=tl(e);t.slots.default=()=>n},Jd=(t,e,n)=>{for(const s in e)(n||!el(s))&&(t[s]=e[s])},sm=(t,e,n)=>{const s=t.slots=jd();if(t.vnode.shapeFlag&32){const i=e._;i?(Jd(s,e,n),n&&ld(s,"_",i,!0)):qd(e,s)}else e&&Yd(t,e)},im=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=le;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Jd(i,e,n):(r=!e.$stable,qd(e,i)),o=e}else e&&(Yd(t,e),o={default:1});if(r)for(const a in i)!el(a)&&o[a]==null&&delete i[a]},Ge=cm;function rm(t){return om(t)}function om(t,e){const n=qr();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:_=St,insertStaticContent:y}=t,b=(h,p,g,S=null,I=null,C=null,P=void 0,R=null,k=!!p.dynamicChildren)=>{if(h===p)return;h&&!Vs(h,p)&&(S=zi(h),_t(h,I,C,!0),h=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:E,ref:$,shapeFlag:N}=p;switch(E){case eo:x(h,p,g,S);break;case gn:F(h,p,g,S);break;case Lo:h==null&&G(p,g,S,P);break;case ue:ji(h,p,g,S,I,C,P,R,k);break;default:N&1?ye(h,p,g,S,I,C,P,R,k):N&6?Gi(h,p,g,S,I,C,P,R,k):(N&64||N&128)&&E.process(h,p,g,S,I,C,P,R,k,$s)}$!=null&&I?ti($,h&&h.ref,C,p||h,!p):$==null&&h&&h.ref!=null&&ti(h.ref,null,C,h,!0)},x=(h,p,g,S)=>{if(h==null)s(p.el=a(p.children),g,S);else{const I=p.el=h.el;p.children!==h.children&&c(I,p.children)}},F=(h,p,g,S)=>{h==null?s(p.el=l(p.children||""),g,S):p.el=h.el},G=(h,p,g,S)=>{[h.el,h.anchor]=y(h.children,p,g,S,h.el,h.anchor)},Q=({el:h,anchor:p},g,S)=>{let I;for(;h&&h!==p;)I=f(h),s(h,g,S),h=I;s(p,g,S)},U=({el:h,anchor:p})=>{let g;for(;h&&h!==p;)g=f(h),i(h),h=g;i(p)},ye=(h,p,g,S,I,C,P,R,k)=>{if(p.type==="svg"?P="svg":p.type==="math"&&(P="mathml"),h==null)et(p,g,S,I,C,P,R,k);else{const E=h.el&&h.el._isVueCE?h.el:null;try{E&&E._beginPatch(),tn(h,p,I,C,P,R,k)}finally{E&&E._endPatch()}}},et=(h,p,g,S,I,C,P,R)=>{let k,E;const{props:$,shapeFlag:N,transition:L,dirs:B}=h;if(k=h.el=o(h.type,C,$&&$.is,$),N&8?u(k,h.children):N&16&&pt(h.children,k,null,S,I,Mo(h,C),P,R),B&&Rn(h,null,S,"created"),ze(k,h,h.scopeId,P,S),$){for(const oe in $)oe!=="value"&&!Xs(oe)&&r(k,oe,null,$[oe],C,S);"value"in $&&r(k,"value",null,$.value,C),(E=$.onVnodeBeforeMount)&&yt(E,S,h)}B&&Rn(h,null,S,"beforeMount");const X=am(I,L);X&&L.beforeEnter(k),s(k,p,g),((E=$&&$.onVnodeMounted)||X||B)&&Ge(()=>{try{E&&yt(E,S,h),X&&L.enter(k),B&&Rn(h,null,S,"mounted")}finally{}},I)},ze=(h,p,g,S,I)=>{if(g&&_(h,g),S)for(let C=0;C<S.length;C++)_(h,S[C]);if(I){let C=I.subTree;if(p===C||eh(C.type)&&(C.ssContent===p||C.ssFallback===p)){const P=I.vnode;ze(h,P,P.scopeId,P.slotScopeIds,I.parent)}}},pt=(h,p,g,S,I,C,P,R,k=0)=>{for(let E=k;E<h.length;E++){const $=h[E]=R?Mt(h[E]):Ct(h[E]);b(null,$,p,g,S,I,C,P,R)}},tn=(h,p,g,S,I,C,P)=>{const R=p.el=h.el;let{patchFlag:k,dynamicChildren:E,dirs:$}=p;k|=h.patchFlag&16;const N=h.props||le,L=p.props||le;let B;if(g&&Pn(g,!1),(B=L.onVnodeBeforeUpdate)&&yt(B,g,p,h),$&&Rn(p,h,g,"beforeUpdate"),g&&Pn(g,!0),(N.innerHTML&&L.innerHTML==null||N.textContent&&L.textContent==null)&&u(R,""),E?At(h.dynamicChildren,E,R,g,S,Mo(p,I),C):P||de(h,p,R,null,g,S,Mo(p,I),C,!1),k>0){if(k&16)Fs(R,N,L,g,I);else if(k&2&&N.class!==L.class&&r(R,"class",null,L.class,I),k&4&&r(R,"style",N.style,L.style,I),k&8){const X=p.dynamicProps;for(let oe=0;oe<X.length;oe++){const he=X[oe],Ie=N[he],Ne=L[he];(Ne!==Ie||he==="value")&&r(R,he,Ie,Ne,I,g)}}k&1&&h.children!==p.children&&u(R,p.children)}else!P&&E==null&&Fs(R,N,L,g,I);((B=L.onVnodeUpdated)||$)&&Ge(()=>{B&&yt(B,g,p,h),$&&Rn(p,h,g,"updated")},S)},At=(h,p,g,S,I,C,P)=>{for(let R=0;R<p.length;R++){const k=h[R],E=p[R],$=k.el&&(k.type===ue||!Vs(k,E)||k.shapeFlag&198)?d(k.el):g;b(k,E,$,null,S,I,C,P,!0)}},Fs=(h,p,g,S,I)=>{if(p!==g){if(p!==le)for(const C in p)!Xs(C)&&!(C in g)&&r(h,C,p[C],null,I,S);for(const C in g){if(Xs(C))continue;const P=g[C],R=p[C];P!==R&&C!=="value"&&r(h,C,R,P,I,S)}"value"in g&&r(h,"value",p.value,g.value,I)}},ji=(h,p,g,S,I,C,P,R,k)=>{const E=p.el=h?h.el:a(""),$=p.anchor=h?h.anchor:a("");let{patchFlag:N,dynamicChildren:L,slotScopeIds:B}=p;B&&(R=R?R.concat(B):B),h==null?(s(E,g,S),s($,g,S),pt(p.children||[],g,$,I,C,P,R,k)):N>0&&N&64&&L&&h.dynamicChildren&&h.dynamicChildren.length===L.length?(At(h.dynamicChildren,L,g,I,C,P,R),(p.key!=null||I&&p===I.subTree)&&Qd(h,p,!0)):de(h,p,g,$,I,C,P,R,k)},Gi=(h,p,g,S,I,C,P,R,k)=>{p.slotScopeIds=R,h==null?p.shapeFlag&512?I.ctx.activate(p,g,S,P,k):ko(p,g,S,I,C,P,k):rc(h,p,k)},ko=(h,p,g,S,I,C,P)=>{const R=h.component=mm(h,S,I);if(Ld(h)&&(R.ctx.renderer=$s),vm(R,!1,P),R.asyncDep){if(I&&I.registerDep(R,Ue,P),!h.el){const k=R.subTree=ae(gn);F(null,k,p,g),h.placeholder=k.el}}else Ue(R,h,p,g,I,C,P)},rc=(h,p,g)=>{const S=p.component=h.component;if(Q_(h,p,g))if(S.asyncDep&&!S.asyncResolved){me(S,p,g);return}else S.next=p,S.update();else p.el=h.el,S.vnode=p},Ue=(h,p,g,S,I,C,P)=>{const R=()=>{if(h.isMounted){let{next:N,bu:L,u:B,parent:X,vnode:oe}=h;{const gt=Xd(h);if(gt){N&&(N.el=oe.el,me(h,N,P)),gt.asyncDep.then(()=>{Ge(()=>{h.isUnmounted||E()},I)});return}}let he=N,Ie;Pn(h,!1),N?(N.el=oe.el,me(h,N,P)):N=oe,L&&nr(L),(Ie=N.props&&N.props.onVnodeBeforeUpdate)&&yt(Ie,X,N,oe),Pn(h,!0);const Ne=Ic(h),mt=h.subTree;h.subTree=Ne,b(mt,Ne,d(mt.el),zi(mt),h,I,C),N.el=Ne.el,he===null&&X_(h,Ne.el),B&&Ge(B,I),(Ie=N.props&&N.props.onVnodeUpdated)&&Ge(()=>yt(Ie,X,N,oe),I)}else{let N;const{el:L,props:B}=p,{bm:X,m:oe,parent:he,root:Ie,type:Ne}=h,mt=ni(p);Pn(h,!1),X&&nr(X),!mt&&(N=B&&B.onVnodeBeforeMount)&&yt(N,he,p),Pn(h,!0);{Ie.ce&&Ie.ce._hasShadowRoot()&&Ie.ce._injectChildStyle(Ne,h.parent?h.parent.type:void 0);const gt=h.subTree=Ic(h);b(null,gt,g,S,h,I,C),p.el=gt.el}if(oe&&Ge(oe,I),!mt&&(N=B&&B.onVnodeMounted)){const gt=p;Ge(()=>yt(N,he,gt),I)}(p.shapeFlag&256||he&&ni(he.vnode)&&he.vnode.shapeFlag&256)&&h.a&&Ge(h.a,I),h.isMounted=!0,p=g=S=null}};h.scope.on();const k=h.effect=new hd(R);h.scope.off();const E=h.update=k.run.bind(k),$=h.job=k.runIfDirty.bind(k);$.i=h,$.id=h.uid,k.scheduler=()=>Qa($),Pn(h,!0),E()},me=(h,p,g)=>{p.component=h;const S=h.vnode.props;h.vnode=p,h.next=null,em(h,p.props,S,g),im(h,p.children,g),Gt(),_c(h),Kt()},de=(h,p,g,S,I,C,P,R,k=!1)=>{const E=h&&h.children,$=h?h.shapeFlag:0,N=p.children,{patchFlag:L,shapeFlag:B}=p;if(L>0){if(L&128){Ki(E,N,g,S,I,C,P,R,k);return}else if(L&256){Tn(E,N,g,S,I,C,P,R,k);return}}B&8?($&16&&Us(E,I,C),N!==E&&u(g,N)):$&16?B&16?Ki(E,N,g,S,I,C,P,R,k):Us(E,I,C,!0):($&8&&u(g,""),B&16&&pt(N,g,S,I,C,P,R,k))},Tn=(h,p,g,S,I,C,P,R,k)=>{h=h||rs,p=p||rs;const E=h.length,$=p.length,N=Math.min(E,$);let L;for(L=0;L<N;L++){const B=p[L]=k?Mt(p[L]):Ct(p[L]);b(h[L],B,g,null,I,C,P,R,k)}E>$?Us(h,I,C,!0,!1,N):pt(p,g,S,I,C,P,R,k,N)},Ki=(h,p,g,S,I,C,P,R,k)=>{let E=0;const $=p.length;let N=h.length-1,L=$-1;for(;E<=N&&E<=L;){const B=h[E],X=p[E]=k?Mt(p[E]):Ct(p[E]);if(Vs(B,X))b(B,X,g,null,I,C,P,R,k);else break;E++}for(;E<=N&&E<=L;){const B=h[N],X=p[L]=k?Mt(p[L]):Ct(p[L]);if(Vs(B,X))b(B,X,g,null,I,C,P,R,k);else break;N--,L--}if(E>N){if(E<=L){const B=L+1,X=B<$?p[B].el:S;for(;E<=L;)b(null,p[E]=k?Mt(p[E]):Ct(p[E]),g,X,I,C,P,R,k),E++}}else if(E>L)for(;E<=N;)_t(h[E],I,C,!0),E++;else{const B=E,X=E,oe=new Map;for(E=X;E<=L;E++){const qe=p[E]=k?Mt(p[E]):Ct(p[E]);qe.key!=null&&oe.set(qe.key,E)}let he,Ie=0;const Ne=L-X+1;let mt=!1,gt=0;const Hs=new Array(Ne);for(E=0;E<Ne;E++)Hs[E]=0;for(E=B;E<=N;E++){const qe=h[E];if(Ie>=Ne){_t(qe,I,C,!0);continue}let vt;if(qe.key!=null)vt=oe.get(qe.key);else for(he=X;he<=L;he++)if(Hs[he-X]===0&&Vs(qe,p[he])){vt=he;break}vt===void 0?_t(qe,I,C,!0):(Hs[vt-X]=E+1,vt>=gt?gt=vt:mt=!0,b(qe,p[vt],g,null,I,C,P,R,k),Ie++)}const lc=mt?lm(Hs):rs;for(he=lc.length-1,E=Ne-1;E>=0;E--){const qe=X+E,vt=p[qe],cc=p[qe+1],uc=qe+1<$?cc.el||Zd(cc):S;Hs[E]===0?b(null,vt,g,uc,I,C,P,R,k):mt&&(he<0||E!==lc[he]?kn(vt,g,uc,2):he--)}}},kn=(h,p,g,S,I=null)=>{const{el:C,type:P,transition:R,children:k,shapeFlag:E}=h;if(E&6){kn(h.component.subTree,p,g,S);return}if(E&128){h.suspense.move(p,g,S);return}if(E&64){P.move(h,p,g,$s);return}if(P===ue){s(C,p,g);for(let N=0;N<k.length;N++)kn(k[N],p,g,S);s(h.anchor,p,g);return}if(P===Lo){Q(h,p,g);return}if(S!==2&&E&1&&R)if(S===0)R.beforeEnter(C),s(C,p,g),Ge(()=>R.enter(C),I);else{const{leave:N,delayLeave:L,afterLeave:B}=R,X=()=>{h.ctx.isUnmounted?i(C):s(C,p,g)},oe=()=>{C._isLeaving&&C[S_](!0),N(C,()=>{X(),B&&B()})};L?L(C,X,oe):oe()}else s(C,p,g)},_t=(h,p,g,S=!1,I=!1)=>{const{type:C,props:P,ref:R,children:k,dynamicChildren:E,shapeFlag:$,patchFlag:N,dirs:L,cacheIndex:B,memo:X}=h;if(N===-2&&(I=!1),R!=null&&(Gt(),ti(R,null,g,h,!0),Kt()),B!=null&&(p.renderCache[B]=void 0),$&256){p.ctx.deactivate(h);return}const oe=$&1&&L,he=!ni(h);let Ie;if(he&&(Ie=P&&P.onVnodeBeforeUnmount)&&yt(Ie,p,h),$&6)Rp(h.component,g,S);else{if($&128){h.suspense.unmount(g,S);return}oe&&Rn(h,null,p,"beforeUnmount"),$&64?h.type.remove(h,p,g,$s,S):E&&!E.hasOnce&&(C!==ue||N>0&&N&64)?Us(E,p,g,!1,!0):(C===ue&&N&384||!I&&$&16)&&Us(k,p,g),S&&oc(h)}const Ne=X!=null&&B==null;(he&&(Ie=P&&P.onVnodeUnmounted)||oe||Ne)&&Ge(()=>{Ie&&yt(Ie,p,h),oe&&Rn(h,null,p,"unmounted"),Ne&&(h.el=null)},g)},oc=h=>{const{type:p,el:g,anchor:S,transition:I}=h;if(p===ue){kp(g,S);return}if(p===Lo){U(h);return}const C=()=>{i(g),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(h.shapeFlag&1&&I&&!I.persisted){const{leave:P,delayLeave:R}=I,k=()=>P(g,C);R?R(h.el,C,k):k()}else C()},kp=(h,p)=>{let g;for(;h!==p;)g=f(h),i(h),h=g;i(p)},Rp=(h,p,g)=>{const{bum:S,scope:I,job:C,subTree:P,um:R,m:k,a:E}=h;Sc(k),Sc(E),S&&nr(S),I.stop(),C&&(C.flags|=8,_t(P,h,p,g)),R&&Ge(R,p),Ge(()=>{h.isUnmounted=!0},p)},Us=(h,p,g,S=!1,I=!1,C=0)=>{for(let P=C;P<h.length;P++)_t(h[P],p,g,S,I)},zi=h=>{if(h.shapeFlag&6)return zi(h.component.subTree);if(h.shapeFlag&128)return h.suspense.next();const p=f(h.anchor||h.el),g=p&&p[C_];return g?f(g):p};let Ro=!1;const ac=(h,p,g)=>{let S;h==null?p._vnode&&(_t(p._vnode,null,null,!0),S=p._vnode.component):b(p._vnode||null,h,p,null,null,null,g),p._vnode=h,Ro||(Ro=!0,_c(S),Nd(),Ro=!1)},$s={p:b,um:_t,m:kn,r:oc,mt:ko,mc:pt,pc:de,pbc:At,n:zi,o:t};return{render:ac,hydrate:void 0,createApp:G_(ac)}}function Mo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Pn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function am(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Qd(t,e,n=!1){const s=t.children,i=e.children;if(W(s)&&W(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Mt(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Qd(o,a)),a.type===eo&&(a.patchFlag===-1&&(a=i[r]=Mt(a)),a.el=o.el),a.type===gn&&!a.el&&(a.el=o.el)}}function lm(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Xd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Xd(e)}function Sc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Zd(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Zd(e.subTree):null}const eh=t=>t.__isSuspense;function cm(t,e){e&&e.pendingBranch?W(t)?e.effects.push(...t):e.effects.push(t):g_(t)}const ue=Symbol.for("v-fgt"),eo=Symbol.for("v-txt"),gn=Symbol.for("v-cmt"),Lo=Symbol.for("v-stc"),ii=[];let Ye=null;function O(t=!1){ii.push(Ye=t?null:[])}function um(){ii.pop(),Ye=ii[ii.length-1]||null}let _i=1;function Tc(t,e=!1){_i+=t,t<0&&Ye&&e&&(Ye.hasOnce=!0)}function th(t){return t.dynamicChildren=_i>0?Ye||rs:null,um(),_i>0&&Ye&&Ye.push(t),t}function M(t,e,n,s,i,r){return th(m(t,e,n,s,i,r,!0))}function gs(t,e,n,s,i){return th(ae(t,e,n,s,i,!0))}function nh(t){return t?t.__v_isVNode===!0:!1}function Vs(t,e){return t.type===e.type&&t.key===e.key}const sh=({key:t})=>t??null,ir=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?be(t)||Le(t)||K(t)?{i:tt,r:t,k:e,f:!!n}:t:null);function m(t,e=null,n=null,s=0,i=null,r=t===ue?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&sh(e),ref:e&&ir(e),scopeId:Od,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:tt};return a?(nl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=be(n)?8:16),_i>0&&!o&&Ye&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ye.push(l),l}const ae=dm;function dm(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===F_)&&(t=gn),nh(t)){const a=vs(t,e,!0);return n&&nl(a,n),_i>0&&!r&&Ye&&(a.shapeFlag&6?Ye[Ye.indexOf(t)]=a:Ye.push(a)),a.patchFlag=-2,a}if(Im(t)&&(t=t.__vccOpts),e){e=hm(e);let{class:a,style:l}=e;a&&!be(a)&&(e.class=ie(a)),re(l)&&(Ja(l)&&!W(l)&&(l=Fe({},l)),e.style=Rs(l))}const o=be(t)?1:eh(t)?128:E_(t)?64:re(t)?4:K(t)?2:0;return m(t,e,n,s,i,o,r,!0)}function hm(t){return t?Ja(t)||Gd(t)?Fe({},t):t:null}function vs(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?fm(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&sh(c),ref:e&&e.ref?n&&r?W(r)?r.concat(ir(e)):[r,ir(e)]:ir(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ue?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vs(t.ssContent),ssFallback:t.ssFallback&&vs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Xa(u,l.clone(u)),u}function nt(t=" ",e=0){return ae(eo,null,t,e)}function we(t="",e=!1){return e?(O(),gs(gn,null,t)):ae(gn,null,t)}function Ct(t){return t==null||typeof t=="boolean"?ae(gn):W(t)?ae(ue,null,t.slice()):nh(t)?Mt(t):ae(eo,null,String(t))}function Mt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vs(t)}function nl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(W(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),nl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Gd(e)?e._ctx=tt:i===3&&tt&&(tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:tt},n=32):(e=String(e),s&64?(n=16,e=[nt(e)]):n=8);t.children=e,t.shapeFlag|=n}function fm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ie([e.class,s.class]));else if(i==="style")e.style=Rs([e.style,s.style]);else if(Gr(i)){const r=e[i],o=s[i];o&&r!==o&&!(W(r)&&r.includes(o))?e[i]=r?[].concat(r,o):o:o==null&&r==null&&!Kr(i)&&(e[i]=o)}else i!==""&&(e[i]=s[i])}return e}function yt(t,e,n,s=null){Pt(t,e,7,[n,s])}const pm=Hd();let _m=0;function mm(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||pm,r={uid:_m++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Hp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zd(s,i),emitsOptions:Bd(s,i),emit:null,emitted:null,propsDefaults:le,inheritAttrs:s.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=z_.bind(null,r),t.ce&&t.ce(r),r}let Be=null;const gm=()=>Be||tt;let mr,fa;{const t=qr(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};mr=e("__VUE_INSTANCE_SETTERS__",n=>Be=n),fa=e("__VUE_SSR_SETTERS__",n=>mi=n)}const Ai=t=>{const e=Be;return mr(t),t.scope.on(),()=>{t.scope.off(),mr(e)}},kc=()=>{Be&&Be.scope.off(),mr(null)};function ih(t){return t.vnode.shapeFlag&4}let mi=!1;function vm(t,e=!1,n=!1){e&&fa(e);const{props:s,children:i}=t.vnode,r=ih(t);Z_(t,s,r,e),sm(t,i,n||e);const o=r?ym(t,e):void 0;return e&&fa(!1),o}function ym(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,U_);const{setup:s}=n;if(s){Gt();const i=t.setupContext=s.length>1?wm(t):null,r=Ai(t),o=Ni(s,t,0,[t.props,i]),a=id(o);if(Kt(),r(),(a||t.sp)&&!ni(t)&&Md(t),a){if(o.then(kc,kc),e)return o.then(l=>{Rc(t,l)}).catch(l=>{Jr(l,t,0)});t.asyncDep=o}else Rc(t,o)}else rh(t)}function Rc(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:re(e)&&(t.setupState=Td(e)),rh(t)}function rh(t,e,n){const s=t.type;t.render||(t.render=s.render||St);{const i=Ai(t);Gt();try{$_(t)}finally{Kt(),i()}}}const bm={get(t,e){return De(t,"get",""),t[e]}};function wm(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,bm),slots:t.slots,emit:t.emit,expose:e}}function to(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Td(a_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in si)return si[n](t)},has(e,n){return n in e||n in si}})):t.proxy}function Im(t){return K(t)&&"__vccOpts"in t}const j=(t,e)=>h_(t,e,mi),Cm="3.5.33";/**
* @vue/runtime-dom v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pa;const Pc=typeof window<"u"&&window.trustedTypes;if(Pc)try{pa=Pc.createPolicy("vue",{createHTML:t=>t})}catch{}const oh=pa?t=>pa.createHTML(t):t=>t,Em="http://www.w3.org/2000/svg",Sm="http://www.w3.org/1998/Math/MathML",xt=typeof document<"u"?document:null,Nc=xt&&xt.createElement("template"),Tm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?xt.createElementNS(Em,t):e==="mathml"?xt.createElementNS(Sm,t):n?xt.createElement(t,{is:n}):xt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>xt.createTextNode(t),createComment:t=>xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Nc.innerHTML=oh(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Nc.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},km=Symbol("_vtc");function Rm(t,e,n){const s=t[km];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const gr=Symbol("_vod"),ah=Symbol("_vsh"),Zn={name:"show",beforeMount(t,{value:e},{transition:n}){t[gr]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ws(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Ws(t,!0),s.enter(t)):s.leave(t,()=>{Ws(t,!1)}):Ws(t,e))},beforeUnmount(t,{value:e}){Ws(t,e)}};function Ws(t,e){t.style.display=e?t[gr]:"none",t[ah]=!e}const Pm=Symbol(""),Nm=/(?:^|;)\s*display\s*:/;function Am(t,e,n){const s=t.style,i=be(n);let r=!1;if(n&&!i){if(e)if(be(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Qs(s,a,"")}else for(const o in e)n[o]==null&&Qs(s,o,"");for(const o in n){o==="display"&&(r=!0);const a=n[o];a!=null?xm(t,o,!be(e)&&e?e[o]:void 0,a)||Qs(s,o,a):Qs(s,o,"")}}else if(i){if(e!==n){const o=s[Pm];o&&(n+=";"+o),s.cssText=n,r=Nm.test(n)}}else e&&t.removeAttribute("style");gr in t&&(t[gr]=r?s.display:"",t[ah]&&(s.display="none"))}const Ac=/\s*!important$/;function Qs(t,e,n){if(W(n))n.forEach(s=>Qs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Om(t,e);Ac.test(n)?t.setProperty(Cn(s),n.replace(Ac,""),"important"):t[s]=n}}const Oc=["Webkit","Moz","ms"],Fo={};function Om(t,e){const n=Fo[e];if(n)return n;let s=lt(e);if(s!=="filter"&&s in t)return Fo[e]=s;s=ad(s);for(let i=0;i<Oc.length;i++){const r=Oc[i]+s;if(r in t)return Fo[e]=r}return e}function xm(t,e,n,s){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&be(s)&&n===s}const xc="http://www.w3.org/1999/xlink";function Dc(t,e,n,s,i,r=Up(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(xc,e.slice(6,e.length)):t.setAttributeNS(xc,e,n):n==null||r&&!cd(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Rt(n)?String(n):n)}function Mc(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?oh(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=cd(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function ns(t,e,n,s){t.addEventListener(e,n,s)}function Dm(t,e,n,s){t.removeEventListener(e,n,s)}const Lc=Symbol("_vei");function Mm(t,e,n,s,i=null){const r=t[Lc]||(t[Lc]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Lm(e);if(s){const c=r[e]=$m(s,i);ns(t,a,c,l)}else o&&(Dm(t,a,o,l),r[e]=void 0)}}const Fc=/(?:Once|Passive|Capture)$/;function Lm(t){let e;if(Fc.test(t)){e={};let s;for(;s=t.match(Fc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Cn(t.slice(2)),e]}let Uo=0;const Fm=Promise.resolve(),Um=()=>Uo||(Fm.then(()=>Uo=0),Uo=Date.now());function $m(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Pt(Hm(s,n.value),e,5,[s])};return n.value=t,n.attached=Um(),n}function Hm(t,e){if(W(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Uc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Bm=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Rm(t,s,o):e==="style"?Am(t,n,s):Gr(e)?Kr(e)||Mm(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Vm(t,e,s,o))?(Mc(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Dc(t,e,s,o,r,e!=="value")):t._isVueCE&&(Wm(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!be(s)))?Mc(t,lt(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Dc(t,e,s,o))};function Vm(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Uc(e)&&K(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Uc(e)&&be(n)?!1:e in t}function Wm(t,e){const n=t._def.props;if(!n)return!1;const s=lt(e);return Array.isArray(n)?n.some(i=>lt(i)===s):Object.keys(n).some(i=>lt(i)===s)}const $c=t=>{const e=t.props["onUpdate:modelValue"]||!1;return W(e)?n=>nr(e,n):e};function jm(t){t.target.composing=!0}function Hc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const $o=Symbol("_assign");function Bc(t,e,n){return e&&(t=t.trim()),n&&(t=Va(t)),t}const _a={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[$o]=$c(i);const r=s||i.props&&i.props.type==="number";ns(t,e?"change":"input",o=>{o.target.composing||t[$o](Bc(t.value,n,r))}),(n||r)&&ns(t,"change",()=>{t.value=Bc(t.value,n,r)}),e||(ns(t,"compositionstart",jm),ns(t,"compositionend",Hc),ns(t,"change",Hc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[$o]=$c(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Va(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l)}},Gm=["ctrl","shift","alt","meta"],Km={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Gm.some(n=>t[`${n}Key`]&&!e.includes(n))},gi=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=Km[e[o]];if(a&&a(i,e))return}return t(i,...r)})},zm={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ma=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const r=Cn(i.key);if(e.some(o=>o===r||zm[o]===r))return t(i)})},qm=Fe({patchProp:Bm},Tm);let Vc;function Ym(){return Vc||(Vc=rm(qm))}const Jm=(...t)=>{const e=Ym().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Xm(s);if(!i)return;const r=e._component;!K(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Qm(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Qm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Xm(t){return be(t)?document.querySelector(t):t}var Wc={};/**
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
 */const lh={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const T=function(t,e){if(!t)throw Ps(e)},Ps=function(t){return new Error("Firebase Database ("+lh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const ch=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Zm=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},sl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(f=64)),s.push(n[u],n[d],n[f],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ch(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new eg;const f=r<<2|a>>4;if(s.push(f),c!==64){const _=a<<4&240|c>>2;if(s.push(_),d!==64){const y=c<<6&192|d;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uh=function(t){const e=ch(t);return sl.encodeByteArray(e,!0)},vr=function(t){return uh(t).replace(/\./g,"")},yr=function(t){try{return sl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function tg(t){return dh(void 0,t)}function dh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ng(n)||(t[n]=dh(t[n],e[n]));return t}function ng(t){return t!=="__proto__"}/**
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
 */function sg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ig=()=>sg().__FIREBASE_DEFAULTS__,rg=()=>{if(typeof process>"u"||typeof Wc>"u")return;const t=Wc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},og=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yr(t[1]);return e&&JSON.parse(e)},il=()=>{try{return ig()||rg()||og()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hh=t=>{var e,n;return(n=(e=il())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ag=t=>{const e=hh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},fh=()=>{var t;return(t=il())===null||t===void 0?void 0:t.config},ph=t=>{var e;return(e=il())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class rt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function lg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[vr(JSON.stringify(n)),vr(JSON.stringify(o)),""].join(".")}/**
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
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function cg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ug(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _h(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dg(){const t=je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hg(){return lh.NODE_ADMIN===!0}function fg(){try{return typeof indexedDB=="object"}catch{return!1}}function pg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const _g="FirebaseError";class En extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=_g,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oi.prototype.create)}}class Oi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?mg(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new En(i,a,s)}}function mg(t,e){return t.replace(gg,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const gg=/\{\$([^}]+)}/g;/**
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
 */function vi(t){return JSON.parse(t)}function Ce(t){return JSON.stringify(t)}/**
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
 */const mh=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=vi(yr(r[0])||""),n=vi(yr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},vg=function(t){const e=mh(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},yg=function(t){const e=mh(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ht(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Bn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function br(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Ir(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(jc(r)&&jc(o)){if(!Ir(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function jc(t){return t!==null&&typeof t=="object"}/**
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
 */function Ns(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class bg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function wg(t,e){const n=new Ig(t,e);return n.subscribe.bind(n)}class Ig{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Cg(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ho),i.error===void 0&&(i.error=Ho),i.complete===void 0&&(i.complete=Ho);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ho(){}function ys(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Eg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},no=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ee(t){return t&&t._delegate?t._delegate:t}class Vn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const An="[DEFAULT]";/**
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
 */class Sg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new rt;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kg(e))try{this.getOrInitializeService({instanceIdentifier:An})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=An){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=An){return this.instances.has(e)}getOptions(e=An){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Tg(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=An){return this.component?this.component.multipleInstances?e:An:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tg(t){return t===An?void 0:t}function kg(t){return t.instantiationMode==="EAGER"}/**
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
 */class Rg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Sg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const Pg={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Ng=se.INFO,Ag={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Og=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Ag[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ol{constructor(e){this.name=e,this._logLevel=Ng,this._logHandler=Og,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const xg=(t,e)=>e.some(n=>t instanceof n);let Gc,Kc;function Dg(){return Gc||(Gc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mg(){return Kc||(Kc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gh=new WeakMap,ga=new WeakMap,vh=new WeakMap,Bo=new WeakMap,al=new WeakMap;function Lg(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(dn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gh.set(n,t)}).catch(()=>{}),al.set(e,t),e}function Fg(t){if(ga.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ga.set(t,e)}let va={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ga.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vh.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ug(t){va=t(va)}function $g(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Vo(this),e,...n);return vh.set(s,e.sort?e.sort():[e]),dn(s)}:Mg().includes(t)?function(...e){return t.apply(Vo(this),e),dn(gh.get(this))}:function(...e){return dn(t.apply(Vo(this),e))}}function Hg(t){return typeof t=="function"?$g(t):(t instanceof IDBTransaction&&Fg(t),xg(t,Dg())?new Proxy(t,va):t)}function dn(t){if(t instanceof IDBRequest)return Lg(t);if(Bo.has(t))return Bo.get(t);const e=Hg(t);return e!==t&&(Bo.set(t,e),al.set(e,t)),e}const Vo=t=>al.get(t);function Bg(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=dn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(dn(o.result),l.oldVersion,l.newVersion,dn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Vg=["get","getKey","getAll","getAllKeys","count"],Wg=["put","add","delete","clear"],Wo=new Map;function zc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wo.get(e))return Wo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Wg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Vg.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Wo.set(e,r),r}Ug(t=>({...t,get:(e,n,s)=>zc(e,n)||t.get(e,n,s),has:(e,n)=>!!zc(e,n)||t.has(e,n)}));/**
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
 */class jg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Gg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ya="@firebase/app",qc="0.10.13";/**
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
 */const qt=new ol("@firebase/app"),Kg="@firebase/app-compat",zg="@firebase/analytics-compat",qg="@firebase/analytics",Yg="@firebase/app-check-compat",Jg="@firebase/app-check",Qg="@firebase/auth",Xg="@firebase/auth-compat",Zg="@firebase/database",ev="@firebase/data-connect",tv="@firebase/database-compat",nv="@firebase/functions",sv="@firebase/functions-compat",iv="@firebase/installations",rv="@firebase/installations-compat",ov="@firebase/messaging",av="@firebase/messaging-compat",lv="@firebase/performance",cv="@firebase/performance-compat",uv="@firebase/remote-config",dv="@firebase/remote-config-compat",hv="@firebase/storage",fv="@firebase/storage-compat",pv="@firebase/firestore",_v="@firebase/vertexai-preview",mv="@firebase/firestore-compat",gv="firebase",vv="10.14.1";/**
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
 */const ba="[DEFAULT]",yv={[ya]:"fire-core",[Kg]:"fire-core-compat",[qg]:"fire-analytics",[zg]:"fire-analytics-compat",[Jg]:"fire-app-check",[Yg]:"fire-app-check-compat",[Qg]:"fire-auth",[Xg]:"fire-auth-compat",[Zg]:"fire-rtdb",[ev]:"fire-data-connect",[tv]:"fire-rtdb-compat",[nv]:"fire-fn",[sv]:"fire-fn-compat",[iv]:"fire-iid",[rv]:"fire-iid-compat",[ov]:"fire-fcm",[av]:"fire-fcm-compat",[lv]:"fire-perf",[cv]:"fire-perf-compat",[uv]:"fire-rc",[dv]:"fire-rc-compat",[hv]:"fire-gcs",[fv]:"fire-gcs-compat",[pv]:"fire-fst",[mv]:"fire-fst-compat",[_v]:"fire-vertex","fire-js":"fire-js",[gv]:"fire-js-all"};/**
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
 */const Cr=new Map,bv=new Map,wa=new Map;function Yc(t,e){try{t.container.addComponent(e)}catch(n){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function bs(t){const e=t.name;if(wa.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;wa.set(e,t);for(const n of Cr.values())Yc(n,t);for(const n of bv.values())Yc(n,t);return!0}function ll(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ut(t){return t.settings!==void 0}/**
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
 */const wv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hn=new Oi("app","Firebase",wv);/**
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
 */class Iv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hn.create("app-deleted",{appName:this._name})}}/**
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
 */const As=vv;function yh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:ba,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw hn.create("bad-app-name",{appName:String(i)});if(n||(n=fh()),!n)throw hn.create("no-options");const r=Cr.get(i);if(r){if(Ir(n,r.options)&&Ir(s,r.config))return r;throw hn.create("duplicate-app",{appName:i})}const o=new Rg(i);for(const l of wa.values())o.addComponent(l);const a=new Iv(n,s,o);return Cr.set(i,a),a}function bh(t=ba){const e=Cr.get(t);if(!e&&t===ba&&fh())return yh();if(!e)throw hn.create("no-app",{appName:t});return e}function fn(t,e,n){var s;let i=(s=yv[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(a.join(" "));return}bs(new Vn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Cv="firebase-heartbeat-database",Ev=1,yi="firebase-heartbeat-store";let jo=null;function wh(){return jo||(jo=Bg(Cv,Ev,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(yi)}catch(n){console.warn(n)}}}}).catch(t=>{throw hn.create("idb-open",{originalErrorMessage:t.message})})),jo}async function Sv(t){try{const n=(await wh()).transaction(yi),s=await n.objectStore(yi).get(Ih(t));return await n.done,s}catch(e){if(e instanceof En)qt.warn(e.message);else{const n=hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qt.warn(n.message)}}}async function Jc(t,e){try{const s=(await wh()).transaction(yi,"readwrite");await s.objectStore(yi).put(e,Ih(t)),await s.done}catch(n){if(n instanceof En)qt.warn(n.message);else{const s=hn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qt.warn(s.message)}}}function Ih(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Tv=1024,kv=30*24*60*60*1e3;class Rv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Qc();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=kv}),this._storage.overwrite(this._heartbeatsCache))}catch(s){qt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qc(),{heartbeatsToSend:s,unsentEntries:i}=Pv(this._heartbeatsCache.heartbeats),r=vr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return qt.warn(n),""}}}function Qc(){return new Date().toISOString().substring(0,10)}function Pv(t,e=Tv){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Xc(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xc(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Nv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fg()?pg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Sv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jc(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xc(t){return vr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Av(t){bs(new Vn("platform-logger",e=>new jg(e),"PRIVATE")),bs(new Vn("heartbeat",e=>new Rv(e),"PRIVATE")),fn(ya,qc,t),fn(ya,qc,"esm2017"),fn("fire-js","")}Av("");var Zc={};const eu="@firebase/database",tu="1.0.8";/**
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
 */let Ch="";function Ov(t){Ch=t}/**
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
 */class xv{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ce(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:vi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Dv{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ht(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Eh=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new xv(e)}}catch{}return new Dv},xn=Eh("localStorage"),Mv=Eh("sessionStorage");/**
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
 */const cs=new ol("@firebase/database"),Sh=function(){let t=1;return function(){return t++}}(),Th=function(t){const e=Eg(t),n=new bg;n.update(e);const s=n.digest();return sl.encodeByteArray(s)},xi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=xi.apply(null,s):typeof s=="object"?e+=Ce(s):e+=s,e+=" "}return e};let ri=null,nu=!0;const Lv=function(t,e){T(!0,"Can't turn on custom loggers persistently."),cs.logLevel=se.VERBOSE,ri=cs.log.bind(cs)},ke=function(...t){if(nu===!0&&(nu=!1,ri===null&&Mv.get("logging_enabled")===!0&&Lv()),ri){const e=xi.apply(null,t);ri(e)}},Di=function(t){return function(...e){ke(t,...e)}},Ia=function(...t){const e="FIREBASE INTERNAL ERROR: "+xi(...t);cs.error(e)},Yt=function(...t){const e=`FIREBASE FATAL ERROR: ${xi(...t)}`;throw cs.error(e),new Error(e)},We=function(...t){const e="FIREBASE WARNING: "+xi(...t);cs.warn(e)},Fv=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&We("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},so=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Uv=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ws="[MIN_NAME]",Wn="[MAX_NAME]",qn=function(t,e){if(t===e)return 0;if(t===ws||e===Wn)return-1;if(e===ws||t===Wn)return 1;{const n=su(t),s=su(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},$v=function(t,e){return t===e?0:t<e?-1:1},js=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ce(e))},cl=function(t){if(typeof t!="object"||t===null)return Ce(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ce(e[s]),n+=":",n+=cl(t[e[s]]);return n+="}",n},kh=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Pe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Rh=function(t){T(!so(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},Hv=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Bv=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Vv(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Wv=new RegExp("^-?(0*)\\d{1,10}$"),jv=-2147483648,Gv=2147483647,su=function(t){if(Wv.test(t)){const e=Number(t);if(e>=jv&&e<=Gv)return e}return null},Os=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw We("Exception was thrown by user callback.",n),e},Math.floor(0))}},Kv=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},oi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class zv{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){We(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class qv{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',We(e)}}class rr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}rr.OWNER="owner";/**
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
 */const ul="5",Ph="v",Nh="s",Ah="r",Oh="f",xh=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Dh="ls",Mh="p",Ca="ac",Lh="websocket",Fh="long_polling";/**
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
 */class Uh{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=xn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&xn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Yv(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function $h(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===Lh)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Fh)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Yv(t)&&(n.ns=t.namespace);const i=[];return Pe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Jv{constructor(){this.counters_={}}incrementCounter(e,n=1){ht(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return tg(this.counters_)}}/**
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
 */const Go={},Ko={};function dl(t){const e=t.toString();return Go[e]||(Go[e]=new Jv),Go[e]}function Qv(t,e){const n=t.toString();return Ko[n]||(Ko[n]=e()),Ko[n]}/**
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
 */class Xv{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Os(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const iu="start",Zv="close",ey="pLPCommand",ty="pRTLPCB",Hh="id",Bh="pw",Vh="ser",ny="cb",sy="seg",iy="ts",ry="d",oy="dframe",Wh=1870,jh=30,ay=Wh-jh,ly=25e3,cy=3e4;class ss{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Di(e),this.stats_=dl(n),this.urlFn=l=>(this.appCheckToken&&(l[Ca]=this.appCheckToken),$h(n,Fh,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Xv(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(cy)),Uv(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hl((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===iu)this.id=a,this.password=l;else if(o===Zv)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[iu]="t",s[Vh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[ny]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ph]=ul,this.transportSessionId&&(s[Nh]=this.transportSessionId),this.lastSessionId&&(s[Dh]=this.lastSessionId),this.applicationId&&(s[Mh]=this.applicationId),this.appCheckToken&&(s[Ca]=this.appCheckToken),typeof location<"u"&&location.hostname&&xh.test(location.hostname)&&(s[Ah]=Oh);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ss.forceAllow_=!0}static forceDisallow(){ss.forceDisallow_=!0}static isAvailable(){return ss.forceAllow_?!0:!ss.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Hv()&&!Bv()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=uh(n),i=kh(s,ay);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[oy]="t",s[Hh]=e,s[Bh]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ce(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class hl{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Sh(),window[ey+this.uniqueCallbackIdentifier]=e,window[ty+this.uniqueCallbackIdentifier]=n,this.myIFrame=hl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ke("frame writing exception"),a.stack&&ke(a.stack),ke(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ke("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Hh]=this.myID,e[Bh]=this.myPW,e[Vh]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+jh+s.length<=Wh;){const o=this.pendingSegs.shift();s=s+"&"+sy+i+"="+o.seg+"&"+iy+i+"="+o.ts+"&"+ry+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(ly)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const uy=16384,dy=45e3;let Er=null;typeof MozWebSocket<"u"?Er=MozWebSocket:typeof WebSocket<"u"&&(Er=WebSocket);class ot{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Di(this.connId),this.stats_=dl(n),this.connURL=ot.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Ph]=ul,typeof location<"u"&&location.hostname&&xh.test(location.hostname)&&(o[Ah]=Oh),n&&(o[Nh]=n),s&&(o[Dh]=s),i&&(o[Ca]=i),r&&(o[Mh]=r),$h(e,Lh,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,xn.set("previous_websocket_failure",!0);try{let s;hg(),this.mySock=new Er(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ot.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Er!==null&&!ot.forceDisallow_}static previouslyFailed(){return xn.isInMemoryStorage||xn.get("previous_websocket_failure")===!0}markConnectionHealthy(){xn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=vi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ce(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=kh(n,uy);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(dy))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ot.responsesRequiredToBeHealthy=2;ot.healthyTimeout=3e4;/**
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
 */class bi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ss,ot]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ot&&ot.isAvailable();let s=n&&!ot.previouslyFailed();if(e.webSocketOnly&&(n||We("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ot];else{const i=this.transports_=[];for(const r of bi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);bi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}bi.globalTransportInitialized_=!1;/**
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
 */const hy=6e4,fy=5e3,py=10*1024,_y=100*1024,zo="t",ru="d",my="s",ou="r",gy="e",au="o",lu="a",cu="n",uu="p",vy="h";class yy{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Di("c:"+this.id+":"),this.transportManager_=new bi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=oi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>_y?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>py?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(zo in e){const n=e[zo];n===lu?this.upgradeIfSecondaryHealthy_():n===ou?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===au&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=js("t",e),s=js("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:uu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:lu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:cu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=js("t",e),s=js("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=js(zo,e);if(ru in e){const s=e[ru];if(n===vy){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===cu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===my?this.onConnectionShutdown_(s):n===ou?this.onReset_(s):n===gy?Ia("Server Error: "+s):n===au?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ia("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ul!==s&&We("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),oi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(hy))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):oi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(fy))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:uu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(xn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Gh{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Kh{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Sr extends Kh{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!rl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Sr}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const du=32,hu=768;class ne{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new ne("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function vn(t){return t.pieces_.length-t.pieceNum_}function ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ne(t.pieces_,e)}function fl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function by(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function wi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function zh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ne(e,0)}function ve(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ne)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ne(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function Ve(t,e){const n=z(t),s=z(e);if(n===null)return e;if(n===s)return Ve(ce(t),ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function wy(t,e){const n=wi(t,0),s=wi(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=qn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function pl(t,e){if(vn(t)!==vn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function st(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(vn(t)>vn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Iy{constructor(e,n){this.errorPrefix_=n,this.parts_=wi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=no(this.parts_[s]);qh(this)}}function Cy(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=no(e),qh(t)}function Ey(t){const e=t.parts_.pop();t.byteLength_-=no(e),t.parts_.length>0&&(t.byteLength_-=1)}function qh(t){if(t.byteLength_>hu)throw new Error(t.errorPrefix_+"has a key path longer than "+hu+" bytes ("+t.byteLength_+").");if(t.parts_.length>du)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+du+") or object contains a cycle "+On(t))}function On(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class _l extends Kh{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new _l}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Gs=1e3,Sy=60*5*1e3,fu=30*1e3,Ty=1.3,ky=3e4,Ry="server_kill",pu=3;class jt extends Gh{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=jt.nextPersistentConnectionId_++,this.log_=Di("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Gs,this.maxReconnectDelay_=Sy,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");_l.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Sr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ce(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new rt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;jt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ht(e,"w")){const s=Bn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();We(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||yg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=fu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=vg(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ce(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ia("Unrecognized action received from server: "+Ce(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Gs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Gs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ky&&(this.reconnectDelay_=Gs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ty)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+jt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?ke("getToken() completed but was canceled"):(ke("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new yy(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{We(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ry)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&We(d),l())}}}interrupt(e){ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],br(this.interruptReasons_)&&(this.reconnectDelay_=Gs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>cl(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ne(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){ke("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=pu&&(this.reconnectDelay_=fu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ke("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=pu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ch.replace(/\./g,"-")]=1,rl()?e["framework.cordova"]=1:_h()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Sr.getInstance().currentlyOnline();return br(this.interruptReasons_)&&e}}jt.nextPersistentConnectionId_=0;jt.nextConnectionId_=0;/**
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
 */class io{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Y(ws,e),i=new Y(ws,n);return this.compare(s,i)!==0}minPost(){return Y.MIN}}/**
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
 */let Qi;class Yh extends io{static get __EMPTY_NODE(){return Qi}static set __EMPTY_NODE(e){Qi=e}compare(e,n){return qn(e.name,n.name)}isDefinedOn(e){throw Ps("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Y.MIN}maxPost(){return new Y(Wn,Qi)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,Qi)}toString(){return".key"}}const us=new Yh;/**
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
 */class Xi{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Te{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Te.RED,this.left=i??Ke.EMPTY_NODE,this.right=r??Ke.EMPTY_NODE}copy(e,n,s,i,r){return new Te(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Te.RED=!0;Te.BLACK=!1;class Py{copy(e,n,s,i,r){return this}insert(e,n,s){return new Te(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ke{constructor(e,n=Ke.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ke(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Te.BLACK,null,null))}remove(e){return new Ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Te.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Xi(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Xi(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Xi(this.root_,null,this.comparator_,!0,e)}}Ke.EMPTY_NODE=new Py;/**
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
 */function Ny(t,e){return qn(t.name,e.name)}function ml(t,e){return qn(t,e)}/**
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
 */let Ea;function Ay(t){Ea=t}const Jh=function(t){return typeof t=="number"?"number:"+Rh(t):"string:"+t},Qh=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ht(e,".sv"),"Priority must be a string or number.")}else T(t===Ea||t.isEmpty(),"priority of unexpected type.");T(t===Ea||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let _u;class Se{constructor(e,n=Se.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Qh(this.priorityNode_)}static set __childrenNodeConstructor(e){_u=e}static get __childrenNodeConstructor(){return _u}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Se(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Se.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:z(e)===".priority"?this.priorityNode_:Se.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Se.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||vn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Se.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jh(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Rh(this.value_):e+=this.value_,this.lazyHash_=Th(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Se.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Se.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Se.VALUE_TYPE_ORDER.indexOf(n),r=Se.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Se.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Xh,Zh;function Oy(t){Xh=t}function xy(t){Zh=t}class Dy extends io{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?qn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(Wn,new Se("[PRIORITY-POST]",Zh))}makePost(e,n){const s=Xh(e);return new Y(n,new Se("[PRIORITY-POST]",s))}toString(){return".priority"}}const _e=new Dy;/**
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
 */const My=Math.log(2);class Ly{constructor(e){const n=r=>parseInt(Math.log(r)/My,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Tr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new Te(f,d.node,Te.BLACK,null,null);{const _=parseInt(u/2,10)+l,y=i(l,_),b=i(_+1,c);return d=t[_],f=n?n(d):d,new Te(f,d.node,Te.BLACK,y,b)}},r=function(l){let c=null,u=null,d=t.length;const f=function(y,b){const x=d-y,F=d;d-=y;const G=i(x+1,F),Q=t[x],U=n?n(Q):Q;_(new Te(U,Q.node,b,null,G))},_=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<l.count;++y){const b=l.nextBitIsOne(),x=Math.pow(2,l.count-(y+1));b?f(x,Te.BLACK):(f(x,Te.BLACK),f(x,Te.RED))}return u},o=new Ly(t.length),a=r(o);return new Ke(s||e,a)};/**
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
 */let qo;const es={};class $t{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(es&&_e,"ChildrenNode.ts has not been loaded"),qo=qo||new $t({".priority":es},{".priority":_e}),qo}get(e){const n=Bn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ke?n:null}hasIndex(e){return ht(this.indexSet_,e.toString())}addIndex(e,n){T(e!==us,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(Y.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Tr(s,e.getCompare()):a=es;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new $t(u,c)}addToIndexes(e,n){const s=wr(this.indexes_,(i,r)=>{const o=Bn(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===es)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Y.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Tr(a,o.getCompare())}else return es;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Y(e.name,a))),l.insert(e,e.node)}});return new $t(s,this.indexSet_)}removeFromIndexes(e,n){const s=wr(this.indexes_,i=>{if(i===es)return i;{const r=n.get(e.name);return r?i.remove(new Y(e.name,r)):i}});return new $t(s,this.indexSet_)}}/**
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
 */let Ks;class H{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Qh(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ks||(Ks=new H(new Ke(ml),null,$t.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ks}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ks:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Y(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ks:this.priorityNode_;return new H(i,o,r)}}updateChild(e,n){const s=z(e);if(s===null)return n;{T(z(e)!==".priority"||vn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ce(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(_e,(o,a)=>{n[o]=a.val(e),s++,r&&H.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jh(this.getPriority().val())+":"),this.forEachChild(_e,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Th(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Y(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Y(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Y(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Y.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Mi?-1:0}withIndex(e){if(e===us||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===us||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(_e),i=n.getIterator(_e);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===us?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Fy extends H{constructor(){super(new Ke(ml),H.EMPTY_NODE,$t.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const Mi=new Fy;Object.defineProperties(Y,{MIN:{value:new Y(ws,H.EMPTY_NODE)},MAX:{value:new Y(Wn,Mi)}});Yh.__EMPTY_NODE=H.EMPTY_NODE;Se.__childrenNodeConstructor=H;Ay(Mi);xy(Mi);/**
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
 */const Uy=!0;function ge(t,e=null){if(t===null)return H.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Se(n,ge(e))}if(!(t instanceof Array)&&Uy){const n=[];let s=!1;if(Pe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ge(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Y(o,l)))}}),n.length===0)return H.EMPTY_NODE;const r=Tr(n,Ny,o=>o.name,ml);if(s){const o=Tr(n,_e.getCompare());return new H(r,ge(e),new $t({".priority":o},{".priority":_e}))}else return new H(r,ge(e),$t.Default)}else{let n=H.EMPTY_NODE;return Pe(t,(s,i)=>{if(ht(t,s)&&s.substring(0,1)!=="."){const r=ge(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ge(e))}}Oy(ge);/**
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
 */class $y extends io{constructor(e){super(),this.indexPath_=e,T(!q(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?qn(e.name,n.name):r}makePost(e,n){const s=ge(e),i=H.EMPTY_NODE.updateChild(this.indexPath_,s);return new Y(n,i)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,Mi);return new Y(Wn,e)}toString(){return wi(this.indexPath_,0).join("/")}}/**
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
 */class Hy extends io{compare(e,n){const s=e.node.compareTo(n.node);return s===0?qn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,n){const s=ge(e);return new Y(n,s)}toString(){return".value"}}const By=new Hy;/**
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
 */function ef(t){return{type:"value",snapshotNode:t}}function Is(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ii(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ci(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Vy(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class gl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ii(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Is(n,s)):o.trackChildChange(Ci(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(_e,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ii(i,r))}),n.isLeafNode()||n.forEachChild(_e,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ci(i,r,o))}else s.trackChildChange(Is(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?H.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ei{constructor(e){this.indexedFilter_=new gl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ei.getStartPost_(e),this.endPost_=Ei.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new Y(n,s))||(s=H.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=H.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(H.EMPTY_NODE);const r=this;return n.forEachChild(_e,(o,a)=>{r.matches(new Y(o,a))||(i=i.updateImmediateChild(o,H.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Wy{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ei(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new Y(n,s))||(s=H.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=H.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=H.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(H.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,H.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,_)=>d(_,f)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new Y(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Ci(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ii(n,d));const b=a.updateImmediateChild(n,H.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Is(f.name,f.node)),b.updateImmediateChild(f.name,f.node)):b}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Ii(c.name,c.node)),r.trackChildChange(Is(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,H.EMPTY_NODE)):e}}/**
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
 */class vl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ws}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Wn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new vl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function jy(t){return t.loadsAllData()?new gl(t.getIndex()):t.hasLimit()?new Wy(t):new Ei(t)}function Gy(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function mu(t){const e={};if(t.isDefault())return e;let n;if(t.index_===_e?n="$priority":t.index_===By?n="$value":t.index_===us?n="$key":(T(t.index_ instanceof $y,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ce(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ce(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ce(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ce(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ce(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function gu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_e&&(e.i=t.index_.toString()),e}/**
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
 */class kr extends Gh{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Di("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=kr.getListenId_(e,s),a={};this.listens_[o]=a;const l=mu(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),Bn(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=kr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=mu(e._queryParams),s=e._path.toString(),i=new rt;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ns(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=vi(a.responseText)}catch{We("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&We("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Ky{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Rr(){return{value:null,children:new Map}}function xs(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=z(e);t.children.has(s)||t.children.set(s,Rr());const i=t.children.get(s);e=ce(e),xs(i,e,n)}}function Sa(t,e){if(q(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(_e,(s,i)=>{xs(t,new ne(s),i)}),Sa(t,e)}}else if(t.children.size>0){const n=z(e);return e=ce(e),t.children.has(n)&&Sa(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Ta(t,e,n){t.value!==null?n(e,t.value):zy(t,(s,i)=>{const r=new ne(e.toString()+"/"+s);Ta(i,r,n)})}function zy(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class qy{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Pe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const vu=10*1e3,Yy=30*1e3,Jy=5*60*1e3;class Qy{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new qy(e);const s=vu+(Yy-vu)*Math.random();oi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Pe(e,(i,r)=>{r>0&&ht(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),oi(this.reportStats_.bind(this),Math.floor(Math.random()*2*Jy))}}/**
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
 */var at;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(at||(at={}));function yl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function bl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Pr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=at.ACK_USER_WRITE,this.source=yl()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ne(e));return new Pr(Z(),n,this.revert)}}else return T(z(this.path)===e,"operationForChild called for unrelated child."),new Pr(ce(this.path),this.affectedTree,this.revert)}}/**
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
 */class Si{constructor(e,n){this.source=e,this.path=n,this.type=at.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new Si(this.source,Z()):new Si(this.source,ce(this.path))}}/**
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
 */class jn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=at.OVERWRITE}operationForChild(e){return q(this.path)?new jn(this.source,Z(),this.snap.getImmediateChild(e)):new jn(this.source,ce(this.path),this.snap)}}/**
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
 */class Cs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=at.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new ne(e));return n.isEmpty()?null:n.value?new jn(this.source,Z(),n.value):new Cs(this.source,Z(),n)}else return T(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Cs(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class yn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Xy{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Zy(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Vy(o.childName,o.snapshotNode))}),zs(t,i,"child_removed",e,s,n),zs(t,i,"child_added",e,s,n),zs(t,i,"child_moved",r,s,n),zs(t,i,"child_changed",e,s,n),zs(t,i,"value",e,s,n),i}function zs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>tb(t,a,l)),o.forEach(a=>{const l=eb(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function eb(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function tb(t,e,n){if(e.childName==null||n.childName==null)throw Ps("Should only compare child_ events.");const s=new Y(e.childName,e.snapshotNode),i=new Y(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function ro(t,e){return{eventCache:t,serverCache:e}}function ai(t,e,n,s){return ro(new yn(e,n,s),t.serverCache)}function tf(t,e,n,s){return ro(t.eventCache,new yn(e,n,s))}function Nr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Gn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Yo;const nb=()=>(Yo||(Yo=new Ke($v)),Yo);class pe{constructor(e,n=nb()){this.value=e,this.children=n}static fromObject(e){let n=new pe(null);return Pe(e,(s,i)=>{n=n.set(new ne(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(q(e))return null;{const s=z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ce(e),n);return r!=null?{path:ve(new ne(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=z(e),s=this.children.get(n);return s!==null?s.subtree(ce(e)):new pe(null)}}set(e,n){if(q(e))return new pe(n,this.children);{const s=z(e),r=(this.children.get(s)||new pe(null)).set(ce(e),n),o=this.children.insert(s,r);return new pe(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new pe(null):new pe(null,this.children);{const n=z(e),s=this.children.get(n);if(s){const i=s.remove(ce(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new pe(null):new pe(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const n=z(e),s=this.children.get(n);return s?s.get(ce(e)):null}}setTree(e,n){if(q(e))return n;{const s=z(e),r=(this.children.get(s)||new pe(null)).setTree(ce(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new pe(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ve(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(q(e))return null;{const r=z(e),o=this.children.get(r);return o?o.findOnPath_(ce(e),ve(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,s){if(q(e))return this;{this.value&&s(n,this.value);const i=z(e),r=this.children.get(i);return r?r.foreachOnPath_(ce(e),ve(n,i),s):new pe(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ve(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class ut{constructor(e){this.writeTree_=e}static empty(){return new ut(new pe(null))}}function li(t,e,n){if(q(e))return new ut(new pe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ve(i,e);return r=r.updateChild(o,n),new ut(t.writeTree_.set(i,r))}else{const i=new pe(n),r=t.writeTree_.setTree(e,i);return new ut(r)}}}function ka(t,e,n){let s=t;return Pe(n,(i,r)=>{s=li(s,ve(e,i),r)}),s}function yu(t,e){if(q(e))return ut.empty();{const n=t.writeTree_.setTree(e,new pe(null));return new ut(n)}}function Ra(t,e){return Yn(t,e)!=null}function Yn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ve(n.path,e)):null}function bu(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_e,(s,i)=>{e.push(new Y(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Y(s,i.value))}),e}function pn(t,e){if(q(e))return t;{const n=Yn(t,e);return n!=null?new ut(new pe(n)):new ut(t.writeTree_.subtree(e))}}function Pa(t){return t.writeTree_.isEmpty()}function Es(t,e){return nf(Z(),t.writeTree_,e)}function nf(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=nf(ve(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ve(t,".priority"),s)),n}}/**
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
 */function oo(t,e){return af(e,t)}function sb(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=li(t.visibleWrites,e,n)),t.lastWriteId=s}function ib(t,e,n,s){T(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=ka(t.visibleWrites,e,n),t.lastWriteId=s}function rb(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function ob(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&ab(a,s.path)?i=!1:st(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return lb(t),!0;if(s.snap)t.visibleWrites=yu(t.visibleWrites,s.path);else{const a=s.children;Pe(a,l=>{t.visibleWrites=yu(t.visibleWrites,ve(s.path,l))})}return!0}else return!1}function ab(t,e){if(t.snap)return st(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&st(ve(t.path,n),e))return!0;return!1}function lb(t){t.visibleWrites=sf(t.allWrites,cb,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function cb(t){return t.visible}function sf(t,e,n){let s=ut.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)st(n,o)?(a=Ve(n,o),s=li(s,a,r.snap)):st(o,n)&&(a=Ve(o,n),s=li(s,Z(),r.snap.getChild(a)));else if(r.children){if(st(n,o))a=Ve(n,o),s=ka(s,a,r.children);else if(st(o,n))if(a=Ve(o,n),q(a))s=ka(s,Z(),r.children);else{const l=Bn(r.children,z(a));if(l){const c=l.getChild(ce(a));s=li(s,Z(),c)}}}else throw Ps("WriteRecord should have .snap or .children")}}return s}function rf(t,e,n,s,i){if(!s&&!i){const r=Yn(t.visibleWrites,e);if(r!=null)return r;{const o=pn(t.visibleWrites,e);if(Pa(o))return n;if(n==null&&!Ra(o,Z()))return null;{const a=n||H.EMPTY_NODE;return Es(o,a)}}}else{const r=pn(t.visibleWrites,e);if(!i&&Pa(r))return n;if(!i&&n==null&&!Ra(r,Z()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(st(c.path,e)||st(e,c.path))},a=sf(t.allWrites,o,e),l=n||H.EMPTY_NODE;return Es(a,l)}}}function ub(t,e,n){let s=H.EMPTY_NODE;const i=Yn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_e,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=pn(t.visibleWrites,e);return n.forEachChild(_e,(o,a)=>{const l=Es(pn(r,new ne(o)),a);s=s.updateImmediateChild(o,l)}),bu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=pn(t.visibleWrites,e);return bu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function db(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ve(e,n);if(Ra(t.visibleWrites,r))return null;{const o=pn(t.visibleWrites,r);return Pa(o)?i.getChild(n):Es(o,i.getChild(n))}}function hb(t,e,n,s){const i=ve(e,n),r=Yn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=pn(t.visibleWrites,i);return Es(o,s.getNode().getImmediateChild(n))}else return null}function fb(t,e){return Yn(t.visibleWrites,e)}function pb(t,e,n,s,i,r,o){let a;const l=pn(t.visibleWrites,e),c=Yn(l,Z());if(c!=null)a=c;else if(n!=null)a=Es(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=f.getNext();for(;_&&u.length<i;)d(_,s)!==0&&u.push(_),_=f.getNext();return u}else return[]}function _b(){return{visibleWrites:ut.empty(),allWrites:[],lastWriteId:-1}}function Ar(t,e,n,s){return rf(t.writeTree,t.treePath,e,n,s)}function Il(t,e){return ub(t.writeTree,t.treePath,e)}function wu(t,e,n,s){return db(t.writeTree,t.treePath,e,n,s)}function Or(t,e){return fb(t.writeTree,ve(t.treePath,e))}function mb(t,e,n,s,i,r){return pb(t.writeTree,t.treePath,e,n,s,i,r)}function Cl(t,e,n){return hb(t.writeTree,t.treePath,e,n)}function of(t,e){return af(ve(t.treePath,e),t.writeTree)}function af(t,e){return{treePath:t,writeTree:e}}/**
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
 */class gb{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Ci(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ii(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Is(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ci(s,e.snapshotNode,i.oldSnap));else throw Ps("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class vb{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const lf=new vb;class El{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new yn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Cl(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gn(this.viewCache_),r=mb(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function yb(t){return{filter:t}}function bb(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function wb(t,e,n,s,i){const r=new gb;let o,a;if(n.type===at.OVERWRITE){const c=n;c.source.fromUser?o=Na(t,e,c.path,c.snap,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!q(c.path),o=xr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===at.MERGE){const c=n;c.source.fromUser?o=Cb(t,e,c.path,c.children,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Aa(t,e,c.path,c.children,s,i,a,r))}else if(n.type===at.ACK_USER_WRITE){const c=n;c.revert?o=Tb(t,e,c.path,s,i,r):o=Eb(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===at.LISTEN_COMPLETE)o=Sb(t,e,n.path,s,r);else throw Ps("Unknown operation type: "+n.type);const l=r.getChanges();return Ib(e,o,l),{viewCache:o,changes:l}}function Ib(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Nr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(ef(Nr(e)))}}function cf(t,e,n,s,i,r){const o=e.eventCache;if(Or(s,n)!=null)return e;{let a,l;if(q(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Gn(e),u=c instanceof H?c:H.EMPTY_NODE,d=Il(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Ar(s,Gn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=z(n);if(c===".priority"){T(vn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=wu(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=ce(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=wu(s,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=Cl(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return ai(e,a,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function xr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(q(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=z(n);if(!l.isCompleteForPath(n)&&vn(n)>1)return e;const y=ce(n),x=l.getNode().getImmediateChild(_).updateChild(y,s);_===".priority"?c=u.updatePriority(l.getNode(),x):c=u.updateChild(l.getNode(),_,x,y,lf,null)}const d=tf(e,c,l.isFullyInitialized()||q(n),u.filtersNodes()),f=new El(i,d,r);return cf(t,d,n,i,f,a)}function Na(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new El(i,e,r);if(q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=ai(e,c,!0,t.filter.filtersNodes());else{const d=z(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=ai(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=ce(n),_=a.getNode().getImmediateChild(d);let y;if(q(f))y=s;else{const b=u.getCompleteChild(d);b!=null?fl(f)===".priority"&&b.getChild(zh(f)).isEmpty()?y=b:y=b.updateChild(f,s):y=H.EMPTY_NODE}if(_.equals(y))l=e;else{const b=t.filter.updateChild(a.getNode(),d,y,f,u,o);l=ai(e,b,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Iu(t,e){return t.eventCache.isCompleteForChild(e)}function Cb(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=ve(n,l);Iu(e,z(u))&&(a=Na(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=ve(n,l);Iu(e,z(u))||(a=Na(t,a,u,c,i,r,o))}),a}function Cu(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Aa(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;q(n)?c=s:c=new pe(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),y=Cu(t,_,f);l=xr(t,l,new ne(d),y,i,r,o,a)}}),c.children.inorderTraversal((d,f)=>{const _=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!_){const y=e.serverCache.getNode().getImmediateChild(d),b=Cu(t,y,f);l=xr(t,l,new ne(d),b,i,r,o,a)}}),l}function Eb(t,e,n,s,i,r,o){if(Or(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return xr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(q(n)){let c=new pe(null);return l.getNode().forEachChild(us,(u,d)=>{c=c.set(new ne(u),d)}),Aa(t,e,n,c,i,r,a,o)}else return e}else{let c=new pe(null);return s.foreach((u,d)=>{const f=ve(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Aa(t,e,n,c,i,r,a,o)}}function Sb(t,e,n,s,i){const r=e.serverCache,o=tf(e,r.getNode(),r.isFullyInitialized()||q(n),r.isFiltered());return cf(t,o,n,s,lf,i)}function Tb(t,e,n,s,i,r){let o;if(Or(s,n)!=null)return e;{const a=new El(s,e,i),l=e.eventCache.getNode();let c;if(q(n)||z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Ar(s,Gn(e));else{const d=e.serverCache.getNode();T(d instanceof H,"serverChildren would be complete if leaf node"),u=Il(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=z(n);let d=Cl(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,ce(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,H.EMPTY_NODE,ce(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ar(s,Gn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Or(s,Z())!=null,ai(e,c,o,t.filter.filtersNodes())}}/**
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
 */class kb{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new gl(s.getIndex()),r=jy(s);this.processor_=yb(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(H.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(H.EMPTY_NODE,a.getNode(),null),u=new yn(l,o.isFullyInitialized(),i.filtersNodes()),d=new yn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ro(d,u),this.eventGenerator_=new Xy(this.query_)}get query(){return this.query_}}function Rb(t){return t.viewCache_.serverCache.getNode()}function Pb(t){return Nr(t.viewCache_)}function Nb(t,e){const n=Gn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function Eu(t){return t.eventRegistrations_.length===0}function Ab(t,e){t.eventRegistrations_.push(e)}function Su(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Tu(t,e,n,s){e.type===at.MERGE&&e.source.queryId!==null&&(T(Gn(t.viewCache_),"We should always have a full cache before handling merges"),T(Nr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=wb(t.processor_,i,e,n,s);return bb(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,uf(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Ob(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(_e,(r,o)=>{s.push(Is(r,o))}),n.isFullyInitialized()&&s.push(ef(n.getNode())),uf(t,s,n.getNode(),e)}function uf(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Zy(t.eventGenerator_,e,n,i)}/**
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
 */let Dr;class df{constructor(){this.views=new Map}}function xb(t){T(!Dr,"__referenceConstructor has already been defined"),Dr=t}function Db(){return T(Dr,"Reference.ts has not been loaded"),Dr}function Mb(t){return t.views.size===0}function Sl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),Tu(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Tu(o,e,n,s));return r}}function hf(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Ar(n,i?s:null),l=!1;a?l=!0:s instanceof H?(a=Il(n,s),l=!1):(a=H.EMPTY_NODE,l=!1);const c=ro(new yn(a,l,!1),new yn(s,i,!1));return new kb(e,c)}return o}function Lb(t,e,n,s,i,r){const o=hf(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Ab(o,n),Ob(o,n)}function Fb(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=bn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Su(c,n,s)),Eu(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Su(l,n,s)),Eu(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!bn(t)&&r.push(new(Db())(e._repo,e._path)),{removed:r,events:o}}function ff(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function _n(t,e){let n=null;for(const s of t.views.values())n=n||Nb(s,e);return n}function pf(t,e){if(e._queryParams.loadsAllData())return ao(t);{const s=e._queryIdentifier;return t.views.get(s)}}function _f(t,e){return pf(t,e)!=null}function bn(t){return ao(t)!=null}function ao(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Mr;function Ub(t){T(!Mr,"__referenceConstructor has already been defined"),Mr=t}function $b(){return T(Mr,"Reference.ts has not been loaded"),Mr}let Hb=1;class ku{constructor(e){this.listenProvider_=e,this.syncPointTree_=new pe(null),this.pendingWriteTree_=_b(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Tl(t,e,n,s,i){return sb(t.pendingWriteTree_,e,n,s,i),i?Ds(t,new jn(yl(),e,n)):[]}function Bb(t,e,n,s){ib(t.pendingWriteTree_,e,n,s);const i=pe.fromObject(n);return Ds(t,new Cs(yl(),e,i))}function un(t,e,n=!1){const s=rb(t.pendingWriteTree_,e);if(ob(t.pendingWriteTree_,e)){let r=new pe(null);return s.snap!=null?r=r.set(Z(),!0):Pe(s.children,o=>{r=r.set(new ne(o),!0)}),Ds(t,new Pr(s.path,r,n))}else return[]}function Li(t,e,n){return Ds(t,new jn(bl(),e,n))}function Vb(t,e,n){const s=pe.fromObject(n);return Ds(t,new Cs(bl(),e,s))}function Wb(t,e){return Ds(t,new Si(bl(),e))}function jb(t,e,n){const s=kl(t,n);if(s){const i=Rl(s),r=i.path,o=i.queryId,a=Ve(r,e),l=new Si(wl(o),a);return Pl(t,r,l)}else return[]}function Lr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||_f(o,e))){const l=Fb(o,e,n,s);Mb(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(f,_)=>bn(_));if(u&&!d){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const _=zb(f);for(let y=0;y<_.length;++y){const b=_[y],x=b.query,F=yf(t,b);t.listenProvider_.startListening(ci(x),Ti(t,x),F.hashFn,F.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(ci(e),null):c.forEach(f=>{const _=t.queryToTagMap.get(co(f));t.listenProvider_.stopListening(ci(f),_)}))}qb(t,c)}return a}function mf(t,e,n,s){const i=kl(t,s);if(i!=null){const r=Rl(i),o=r.path,a=r.queryId,l=Ve(o,e),c=new jn(wl(a),l,n);return Pl(t,o,c)}else return[]}function Gb(t,e,n,s){const i=kl(t,s);if(i){const r=Rl(i),o=r.path,a=r.queryId,l=Ve(o,e),c=pe.fromObject(n),u=new Cs(wl(a),l,c);return Pl(t,o,u)}else return[]}function Oa(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const y=Ve(f,i);r=r||_n(_,y),o=o||bn(_)});let a=t.syncPointTree_.get(i);a?(o=o||bn(a),r=r||_n(a,Z())):(a=new df,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=H.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,y)=>{const b=_n(y,Z());b&&(r=r.updateImmediateChild(_,b))}));const c=_f(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=co(e);T(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=Yb();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const u=oo(t.pendingWriteTree_,i);let d=Lb(a,e,n,u,r,l);if(!c&&!o&&!s){const f=pf(a,e);d=d.concat(Jb(t,e,f))}return d}function lo(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ve(o,e),c=_n(a,l);if(c)return c});return rf(i,e,r,n,!0)}function Kb(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=Ve(c,n);s=s||_n(u,d)});let i=t.syncPointTree_.get(n);i?s=s||_n(i,Z()):(i=new df,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new yn(s,!0,!1):null,a=oo(t.pendingWriteTree_,e._path),l=hf(i,e,a,r?o.getNode():H.EMPTY_NODE,r);return Pb(l)}function Ds(t,e){return gf(e,t.syncPointTree_,null,oo(t.pendingWriteTree_,Z()))}function gf(t,e,n,s){if(q(t.path))return vf(t,e,n,s);{const i=e.get(Z());n==null&&i!=null&&(n=_n(i,Z()));let r=[];const o=z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=of(s,o);r=r.concat(gf(a,l,c,u))}return i&&(r=r.concat(Sl(i,t,s,n))),r}}function vf(t,e,n,s){const i=e.get(Z());n==null&&i!=null&&(n=_n(i,Z()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=of(s,o),u=t.operationForChild(o);u&&(r=r.concat(vf(u,a,l,c)))}),i&&(r=r.concat(Sl(i,t,s,n))),r}function yf(t,e){const n=e.query,s=Ti(t,n);return{hashFn:()=>(Rb(e)||H.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?jb(t,n._path,s):Wb(t,n._path);{const r=Vv(i,n);return Lr(t,n,null,r)}}}}function Ti(t,e){const n=co(e);return t.queryToTagMap.get(n)}function co(t){return t._path.toString()+"$"+t._queryIdentifier}function kl(t,e){return t.tagToQueryMap.get(e)}function Rl(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ne(t.substr(0,e))}}function Pl(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=oo(t.pendingWriteTree_,e);return Sl(s,n,i,null)}function zb(t){return t.fold((e,n,s)=>{if(n&&bn(n))return[ao(n)];{let i=[];return n&&(i=ff(n)),Pe(s,(r,o)=>{i=i.concat(o)}),i}})}function ci(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new($b())(t._repo,t._path):t}function qb(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=co(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Yb(){return Hb++}function Jb(t,e,n){const s=e._path,i=Ti(t,e),r=yf(t,n),o=t.listenProvider_.startListening(ci(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)T(!bn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!q(c)&&u&&bn(u))return[ao(u).query];{let f=[];return u&&(f=f.concat(ff(u).map(_=>_.query))),Pe(d,(_,y)=>{f=f.concat(y)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(ci(u),Ti(t,u))}}return o}/**
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
 */class Nl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Nl(n)}node(){return this.node_}}class Al{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ve(this.path_,e);return new Al(this.syncTree_,n)}node(){return lo(this.syncTree_,this.path_)}}const Qb=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ru=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Xb(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Zb(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Xb=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},Zb=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},bf=function(t,e,n,s){return xl(e,new Al(n,t),s)},Ol=function(t,e,n){return xl(t,new Nl(e),n)};function xl(t,e,n){const s=t.getPriority().val(),i=Ru(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Ru(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Se(a,ge(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Se(i))),o.forEachChild(_e,(a,l)=>{const c=xl(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Dl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function uo(t,e){let n=e instanceof ne?e:new ne(e),s=t,i=z(n);for(;i!==null;){const r=Bn(s.node.children,i)||{children:{},childCount:0};s=new Dl(i,s,r),n=ce(n),i=z(n)}return s}function Jn(t){return t.node.value}function Ml(t,e){t.node.value=e,xa(t)}function wf(t){return t.node.childCount>0}function ew(t){return Jn(t)===void 0&&!wf(t)}function ho(t,e){Pe(t.node.children,(n,s)=>{e(new Dl(n,t,s))})}function If(t,e,n,s){n&&e(t),ho(t,i=>{If(i,e,!0)})}function tw(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Fi(t){return new ne(t.parent===null?t.name:Fi(t.parent)+"/"+t.name)}function xa(t){t.parent!==null&&nw(t.parent,t.name,t)}function nw(t,e,n){const s=ew(n),i=ht(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,xa(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,xa(t))}/**
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
 */const sw=/[\[\].#$\/\u0000-\u001F\u007F]/,iw=/[\[\].#$\u0000-\u001F\u007F]/,Jo=10*1024*1024,Ll=function(t){return typeof t=="string"&&t.length!==0&&!sw.test(t)},Cf=function(t){return typeof t=="string"&&t.length!==0&&!iw.test(t)},rw=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Cf(t)},Fl=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!so(t)||t&&typeof t=="object"&&ht(t,".sv")},Fr=function(t,e,n,s){s&&e===void 0||Ui(ys(t,"value"),e,n)},Ui=function(t,e,n){const s=n instanceof ne?new Iy(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+On(s));if(typeof e=="function")throw new Error(t+"contains a function "+On(s)+" with contents = "+e.toString());if(so(e))throw new Error(t+"contains "+e.toString()+" "+On(s));if(typeof e=="string"&&e.length>Jo/3&&no(e)>Jo)throw new Error(t+"contains a string greater than "+Jo+" utf8 bytes "+On(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Pe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ll(o)))throw new Error(t+" contains an invalid key ("+o+") "+On(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Cy(s,o),Ui(t,a,s),Ey(s)}),i&&r)throw new Error(t+' contains ".value" child '+On(s)+" in addition to actual children.")}},ow=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=wi(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Ll(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(wy);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&st(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Ef=function(t,e,n,s){const i=ys(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Pe(e,(o,a)=>{const l=new ne(o);if(Ui(i,a,ve(n,l)),fl(l)===".priority"&&!Fl(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),ow(i,r)},aw=function(t,e,n){if(so(e))throw new Error(ys(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Fl(e))throw new Error(ys(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Sf=function(t,e,n,s){if(!Cf(n))throw new Error(ys(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},lw=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Sf(t,e,n)},Dn=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},cw=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ll(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!rw(n))throw new Error(ys(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class uw{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function fo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!pl(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Tf(t,e,n){fo(t,n),kf(t,s=>pl(s,e))}function Qe(t,e,n){fo(t,n),kf(t,s=>st(s,e)||st(e,s))}function kf(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(dw(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function dw(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ri&&ke("event: "+n.toString()),Os(s)}}}/**
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
 */const hw="repo_interrupt",fw=25;class pw{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new uw,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Rr(),this.transactionQueueTree_=new Dl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function _w(t,e,n){if(t.stats_=dl(t.repoInfo_),t.forceRestClient_||Kv())t.server_=new kr(t.repoInfo_,(s,i,r,o)=>{Pu(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Nu(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ce(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new jt(t.repoInfo_,e,(s,i,r,o)=>{Pu(t,s,i,r,o)},s=>{Nu(t,s)},s=>{mw(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Qv(t.repoInfo_,()=>new Qy(t.stats_,t.server_)),t.infoData_=new Ky,t.infoSyncTree_=new ku({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Li(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ul(t,"connected",!1),t.serverSyncTree_=new ku({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Qe(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Rf(t){const n=t.infoData_.getNode(new ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function $i(t){return Qb({timestamp:Rf(t)})}function Pu(t,e,n,s,i){t.dataUpdateCount++;const r=new ne(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=wr(n,c=>ge(c));o=Gb(t.serverSyncTree_,r,l,i)}else{const l=ge(n);o=mf(t.serverSyncTree_,r,l,i)}else if(s){const l=wr(n,c=>ge(c));o=Vb(t.serverSyncTree_,r,l)}else{const l=ge(n);o=Li(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ss(t,r)),Qe(t.eventQueue_,a,o)}function Nu(t,e){Ul(t,"connected",e),e===!1&&bw(t)}function mw(t,e){Pe(e,(n,s)=>{Ul(t,n,s)})}function Ul(t,e,n){const s=new ne("/.info/"+e),i=ge(n);t.infoData_.updateSnapshot(s,i);const r=Li(t.infoSyncTree_,s,i);Qe(t.eventQueue_,s,r)}function po(t){return t.nextWriteId_++}function gw(t,e,n){const s=Kb(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=ge(i).withIndex(e._queryParams.getIndex());Oa(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Li(t.serverSyncTree_,e._path,r);else{const a=Ti(t.serverSyncTree_,e);o=mf(t.serverSyncTree_,e._path,r,a)}return Qe(t.eventQueue_,e._path,o),Lr(t.serverSyncTree_,e,n,null,!0),r},i=>(Ms(t,"get for query "+Ce(e)+" failed: "+i),Promise.reject(new Error(i))))}function vw(t,e,n,s,i){Ms(t,"set",{path:e.toString(),value:n,priority:s});const r=$i(t),o=ge(n,s),a=lo(t.serverSyncTree_,e),l=Ol(o,a,r),c=po(t),u=Tl(t.serverSyncTree_,e,l,c,!0);fo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const y=f==="ok";y||We("set at "+e+" failed: "+f);const b=un(t.serverSyncTree_,c,!y);Qe(t.eventQueue_,e,b),wn(t,i,f,_)});const d=Hl(t,e);Ss(t,d),Qe(t.eventQueue_,d,[])}function yw(t,e,n,s){Ms(t,"update",{path:e.toString(),value:n});let i=!0;const r=$i(t),o={};if(Pe(n,(a,l)=>{i=!1,o[a]=bf(ve(e,a),ge(l),t.serverSyncTree_,r)}),i)ke("update() called with empty data.  Don't do anything."),wn(t,s,"ok",void 0);else{const a=po(t),l=Bb(t.serverSyncTree_,e,o,a);fo(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||We("update at "+e+" failed: "+c);const f=un(t.serverSyncTree_,a,!d),_=f.length>0?Ss(t,e):e;Qe(t.eventQueue_,_,f),wn(t,s,c,u)}),Pe(n,c=>{const u=Hl(t,ve(e,c));Ss(t,u)}),Qe(t.eventQueue_,e,[])}}function bw(t){Ms(t,"onDisconnectEvents");const e=$i(t),n=Rr();Ta(t.onDisconnect_,Z(),(i,r)=>{const o=bf(i,r,t.serverSyncTree_,e);xs(n,i,o)});let s=[];Ta(n,Z(),(i,r)=>{s=s.concat(Li(t.serverSyncTree_,i,r));const o=Hl(t,i);Ss(t,o)}),t.onDisconnect_=Rr(),Qe(t.eventQueue_,Z(),s)}function ww(t,e,n){t.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&Sa(t.onDisconnect_,e),wn(t,n,s,i)})}function Au(t,e,n,s){const i=ge(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&xs(t.onDisconnect_,e,i),wn(t,s,r,o)})}function Iw(t,e,n,s,i){const r=ge(n,s);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&xs(t.onDisconnect_,e,r),wn(t,i,o,a)})}function Cw(t,e,n,s){if(br(n)){ke("onDisconnect().update() called with empty data.  Don't do anything."),wn(t,s,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,r)=>{i==="ok"&&Pe(n,(o,a)=>{const l=ge(a);xs(t.onDisconnect_,ve(e,o),l)}),wn(t,s,i,r)})}function Ew(t,e,n){let s;z(e._path)===".info"?s=Oa(t.infoSyncTree_,e,n):s=Oa(t.serverSyncTree_,e,n),Tf(t.eventQueue_,e._path,s)}function Pf(t,e,n){let s;z(e._path)===".info"?s=Lr(t.infoSyncTree_,e,n):s=Lr(t.serverSyncTree_,e,n),Tf(t.eventQueue_,e._path,s)}function Sw(t){t.persistentConnection_&&t.persistentConnection_.interrupt(hw)}function Ms(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ke(n,...e)}function wn(t,e,n,s){e&&Os(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Tw(t,e,n,s,i,r){Ms(t,"transaction on "+e);const o={path:e,update:n,onComplete:s,status:null,order:Sh(),applyLocally:r,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=$l(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Ui("transaction failed: Data returned ",l,o.path),o.status=0;const c=uo(t.transactionQueueTree_,e),u=Jn(c)||[];u.push(o),Ml(c,u);let d;typeof l=="object"&&l!==null&&ht(l,".priority")?(d=Bn(l,".priority"),T(Fl(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=(lo(t.serverSyncTree_,e)||H.EMPTY_NODE).getPriority().val();const f=$i(t),_=ge(l,d),y=Ol(_,a,f);o.currentOutputSnapshotRaw=_,o.currentOutputSnapshotResolved=y,o.currentWriteId=po(t);const b=Tl(t.serverSyncTree_,e,y,o.currentWriteId,o.applyLocally);Qe(t.eventQueue_,e,b),_o(t,t.transactionQueueTree_)}}function $l(t,e,n){return lo(t.serverSyncTree_,e,n)||H.EMPTY_NODE}function _o(t,e=t.transactionQueueTree_){if(e||mo(t,e),Jn(e)){const n=Af(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&kw(t,Fi(e),n)}else wf(e)&&ho(e,n=>{_o(t,n)})}function kw(t,e,n){const s=n.map(c=>c.currentWriteId),i=$l(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Ve(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ms(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(un(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();mo(t,uo(t.transactionQueueTree_,e)),_o(t,t.transactionQueueTree_),Qe(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)Os(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{We("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Ss(t,e)}},o)}function Ss(t,e){const n=Nf(t,e),s=Fi(n),i=Af(t,n);return Rw(t,i,s),s}function Rw(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ve(n,l.path);let u=!1,d;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(un(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=fw)u=!0,d="maxretry",i=i.concat(un(t.serverSyncTree_,l.currentWriteId,!0));else{const f=$l(t,l.path,o);l.currentInputSnapshot=f;const _=e[a].update(f.val());if(_!==void 0){Ui("transaction failed: Data returned ",_,l.path);let y=ge(_);typeof _=="object"&&_!=null&&ht(_,".priority")||(y=y.updatePriority(f.getPriority()));const x=l.currentWriteId,F=$i(t),G=Ol(y,f,F);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=G,l.currentWriteId=po(t),o.splice(o.indexOf(x),1),i=i.concat(Tl(t.serverSyncTree_,l.path,G,l.currentWriteId,l.applyLocally)),i=i.concat(un(t.serverSyncTree_,x,!0))}else u=!0,d="nodata",i=i.concat(un(t.serverSyncTree_,l.currentWriteId,!0))}Qe(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}mo(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Os(s[a]);_o(t,t.transactionQueueTree_)}function Nf(t,e){let n,s=t.transactionQueueTree_;for(n=z(e);n!==null&&Jn(s)===void 0;)s=uo(s,n),e=ce(e),n=z(e);return s}function Af(t,e){const n=[];return Of(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Of(t,e,n){const s=Jn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);ho(e,i=>{Of(t,i,n)})}function mo(t,e){const n=Jn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Ml(e,n.length>0?n:void 0)}ho(e,s=>{mo(t,s)})}function Hl(t,e){const n=Fi(Nf(t,e)),s=uo(t.transactionQueueTree_,e);return tw(s,i=>{Qo(t,i)}),Qo(t,s),If(s,i=>{Qo(t,i)}),n}function Qo(t,e){const n=Jn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(un(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ml(e,void 0):n.length=r+1,Qe(t.eventQueue_,Fi(e),i);for(let o=0;o<s.length;o++)Os(s[o])}}/**
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
 */function Pw(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Nw(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):We(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ou=function(t,e){const n=Aw(t),s=n.namespace;n.domain==="firebase.com"&&Yt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Yt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Fv();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Uh(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ne(n.pathString)}},Aw=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=Pw(t.substring(u,d)));const f=Nw(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const y=e.indexOf(".");s=e.substring(0,y).toLowerCase(),n=e.substring(y+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const xu="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ow=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=xu.charAt(n%64),n=Math.floor(n/64);T(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=xu.charAt(e[i]);return T(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class xf{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ce(this.snapshot.exportVal())}}class Df{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Mf{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class xw{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new rt;return ww(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Dn("OnDisconnect.remove",this._path);const e=new rt;return Au(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Dn("OnDisconnect.set",this._path),Fr("OnDisconnect.set",e,this._path,!1);const n=new rt;return Au(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Dn("OnDisconnect.setWithPriority",this._path),Fr("OnDisconnect.setWithPriority",e,this._path,!1),aw("OnDisconnect.setWithPriority",n);const s=new rt;return Iw(this._repo,this._path,e,n,s.wrapCallback(()=>{})),s.promise}update(e){Dn("OnDisconnect.update",this._path),Ef("OnDisconnect.update",e,this._path);const n=new rt;return Cw(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class go{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return q(this._path)?null:fl(this._path)}get ref(){return new ft(this._repo,this._path)}get _queryIdentifier(){const e=gu(this._queryParams),n=cl(e);return n==="{}"?"default":n}get _queryObject(){return gu(this._queryParams)}isEqual(e){if(e=Ee(e),!(e instanceof go))return!1;const n=this._repo===e._repo,s=pl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+by(this._path)}}class ft extends go{constructor(e,n){super(e,n,new vl,!1)}get parent(){const e=zh(this._path);return e===null?null:new ft(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Kn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ne(e),s=Ts(this.ref,e);return new Kn(this._node.getChild(n),s,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Kn(i,Ts(this.ref,s),_e)))}hasChild(e){const n=new ne(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ae(t,e){return t=Ee(t),t._checkNotDeleted("ref"),e!==void 0?Ts(t._root,e):t._root}function Ts(t,e){return t=Ee(t),z(t._path)===null?lw("child","path",e):Sf("child","path",e),new ft(t._repo,ve(t._path,e))}function Lf(t){return t=Ee(t),new xw(t._repo,t._path)}function Dw(t,e){t=Ee(t),Dn("push",t._path),Fr("push",e,t._path,!0);const n=Rf(t._repo),s=Ow(n),i=Ts(t,s),r=Ts(t,s);let o;return e!=null?o=Qn(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Qn(t,e){t=Ee(t),Dn("set",t._path),Fr("set",e,t._path,!1);const n=new rt;return vw(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Mw(t,e){Ef("update",e,t._path);const n=new rt;return yw(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function vo(t){t=Ee(t);const e=new Mf(()=>{}),n=new yo(e);return gw(t._repo,t,n).then(s=>new Kn(s,new ft(t._repo,t._path),t._queryParams.getIndex()))}class yo{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new xf("value",this,new Kn(e.snapshotNode,new ft(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Df(this,e,n):null}matches(e){return e instanceof yo?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Bl{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Df(this,e,n):null}createEvent(e,n){T(e.childName!=null,"Child events should have a childName.");const s=Ts(new ft(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new xf(e.type,this,new Kn(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Bl?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Ff(t,e,n,s,i){const r=new Mf(n,void 0),o=e==="value"?new yo(r):new Bl(e,r);return Ew(t._repo,t,o),()=>Pf(t._repo,t,o)}function bo(t,e,n,s){return Ff(t,"value",e)}function Lw(t,e,n,s){return Ff(t,"child_added",e)}function Hn(t,e,n){Pf(t._repo,t,null)}class Fw{}class Uw extends Fw{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new go(e._repo,e._path,Gy(e._queryParams,this._limit),e._orderByCalled)}}function $w(t){if(Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Uw(t)}function Hw(t,...e){let n=Ee(t);for(const s of e)n=s._apply(n);return n}xb(ft);Ub(ft);/**
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
 */const Bw="FIREBASE_DATABASE_EMULATOR_HOST",Da={};let Vw=!1;function Ww(t,e,n,s){t.repoInfo_=new Uh(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function jw(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Yt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ke("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ou(r,i),a=o.repoInfo,l;typeof process<"u"&&Zc&&(l=Zc[Bw]),l?(r=`http://${l}?ns=${a.namespace}`,o=Ou(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new qv(t.name,t.options,e);cw("Invalid Firebase Database URL",o),q(o.path)||Yt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Kw(a,t,c,new zv(t.name,n));return new zw(u,t)}function Gw(t,e){const n=Da[e];(!n||n[t.key]!==t)&&Yt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Sw(t),delete n[t.key]}function Kw(t,e,n,s){let i=Da[e.name];i||(i={},Da[e.name]=i);let r=i[t.toURLString()];return r&&Yt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new pw(t,Vw,n,s),i[t.toURLString()]=r,r}class zw{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(_w(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ft(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Gw(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Yt("Cannot call "+e+" on a deleted database.")}}function qw(t=bh(),e){const n=ll(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=ag("database");s&&Yw(n,...s)}return n}function Yw(t,e,n,s={}){t=Ee(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Yt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Yt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new rr(rr.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:lg(s.mockUserToken,t.app.options.projectId);r=new rr(o)}Ww(i,e,n,r)}/**
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
 */function Jw(t){Ov(As),bs(new Vn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return jw(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),fn(eu,tu,t),fn(eu,tu,"esm2017")}/**
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
 */class Qw{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function Xw(t,e,n){var s;if(t=Ee(t),Dn("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(s=void 0)!==null&&s!==void 0?s:!0,r=new rt,o=(l,c,u)=>{let d=null;l?r.reject(l):(d=new Kn(u,new ft(t._repo,t._path),_e),r.resolve(new Qw(c,d)))},a=bo(t,()=>{});return Tw(t._repo,t._path,e,o,a,i),r.promise}jt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};jt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};Jw();function Vl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Uf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zw=Uf,$f=new Oi("auth","Firebase",Uf());/**
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
 */const Ur=new ol("@firebase/auth");function eI(t,...e){Ur.logLevel<=se.WARN&&Ur.warn(`Auth (${As}): ${t}`,...e)}function or(t,...e){Ur.logLevel<=se.ERROR&&Ur.error(`Auth (${As}): ${t}`,...e)}/**
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
 */function Jt(t,...e){throw Wl(t,...e)}function Tt(t,...e){return Wl(t,...e)}function Hf(t,e,n){const s=Object.assign(Object.assign({},Zw()),{[e]:n});return new Oi("auth","Firebase",s).create(e,{appName:t.name})}function mn(t){return Hf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return $f.create(t,...e)}function V(t,e,...n){if(!t)throw Wl(e,...n)}function Ht(t){const e="INTERNAL ASSERTION FAILED: "+t;throw or(e),new Error(e)}function Qt(t,e){t||Ht(e)}/**
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
 */function Ma(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function tI(){return Du()==="http:"||Du()==="https:"}function Du(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function nI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tI()||ug()||"connection"in navigator)?navigator.onLine:!0}function sI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Hi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qt(n>e,"Short delay should be less than long delay!"),this.isMobile=rl()||_h()}get(){return nI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jl(t,e){Qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Bf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const iI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const rI=new Hi(3e4,6e4);function wo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ls(t,e,n,s,i={}){return Vf(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ns(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},r);return cg()||(c.referrerPolicy="no-referrer"),Bf.fetch()(jf(t,t.config.apiHost,n,a),c)})}async function Vf(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},iI),e);try{const i=new oI(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Zi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Zi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Zi(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Hf(t,u,c);Jt(t,u)}}catch(i){if(i instanceof En)throw i;Jt(t,"network-request-failed",{message:String(i)})}}async function Wf(t,e,n,s,i={}){const r=await Ls(t,e,n,s,i);return"mfaPendingCredential"in r&&Jt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function jf(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?jl(t.config,i):`${t.config.apiScheme}://${i}`}class oI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Tt(this.auth,"network-request-failed")),rI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Tt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function aI(t,e){return Ls(t,"POST","/v1/accounts:delete",e)}async function Gf(t,e){return Ls(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ui(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lI(t,e=!1){const n=Ee(t),s=await n.getIdToken(e),i=Gl(s);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:ui(Xo(i.auth_time)),issuedAtTime:ui(Xo(i.iat)),expirationTime:ui(Xo(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Xo(t){return Number(t)*1e3}function Gl(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return or("JWT malformed, contained fewer than 3 sections"),null;try{const i=yr(n);return i?JSON.parse(i):(or("Failed to decode base64 JWT payload"),null)}catch(i){return or("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Mu(t){const e=Gl(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ki(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof En&&cI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function cI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class uI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class La{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ui(this.lastLoginAt),this.creationTime=ui(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $r(t){var e;const n=t.auth,s=await t.getIdToken(),i=await ki(t,Gf(n,{idToken:s}));V(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Kf(r.providerUserInfo):[],a=hI(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new La(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function dI(t){const e=Ee(t);await $r(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hI(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Kf(t){return t.map(e=>{var{providerId:n}=e,s=Vl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function fI(t,e){const n=await Vf(t,{},async()=>{const s=Ns({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=jf(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Bf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pI(t,e){return Ls(t,"POST","/v2/accounts:revokeToken",wo(t,e))}/**
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
 */class ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){V(e.length!==0,"internal-error");const n=Mu(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(V(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await fI(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ds;return s&&(V(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(V(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(V(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ds,this.toJSON())}_performRefresh(){return Ht("not implemented")}}/**
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
 */function nn(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bt{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Vl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new La(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ki(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lI(this,e)}reload(){return dI(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await $r(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ut(this.auth.app))return Promise.reject(mn(this.auth));const e=await this.getIdToken();return await ki(this,aI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,F=(c=n.createdAt)!==null&&c!==void 0?c:void 0,G=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:Q,emailVerified:U,isAnonymous:ye,providerData:et,stsTokenManager:ze}=n;V(Q&&ze,e,"internal-error");const pt=ds.fromJSON(this.name,ze);V(typeof Q=="string",e,"internal-error"),nn(d,e.name),nn(f,e.name),V(typeof U=="boolean",e,"internal-error"),V(typeof ye=="boolean",e,"internal-error"),nn(_,e.name),nn(y,e.name),nn(b,e.name),nn(x,e.name),nn(F,e.name),nn(G,e.name);const tn=new Bt({uid:Q,auth:e,email:f,emailVerified:U,displayName:d,isAnonymous:ye,photoURL:y,phoneNumber:_,tenantId:b,stsTokenManager:pt,createdAt:F,lastLoginAt:G});return et&&Array.isArray(et)&&(tn.providerData=et.map(At=>Object.assign({},At))),x&&(tn._redirectEventId=x),tn}static async _fromIdTokenResponse(e,n,s=!1){const i=new ds;i.updateFromServerResponse(n);const r=new Bt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await $r(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];V(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Kf(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new ds;a.updateFromIdToken(s);const l=new Bt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new La(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const Lu=new Map;function Vt(t){Qt(t instanceof Function,"Expected a class definition");let e=Lu.get(t);return e?(Qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lu.set(t,e),e)}/**
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
 */class zf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zf.type="NONE";const Fu=zf;/**
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
 */function ar(t,e,n){return`firebase:${t}:${e}:${n}`}class hs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ar(this.userKey,i.apiKey,r),this.fullPersistenceKey=ar("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new hs(Vt(Fu),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Vt(Fu);const o=ar(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Bt._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new hs(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new hs(r,e,s))}}/**
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
 */function Uu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zf(e))return"Blackberry";if(ep(e))return"Webos";if(Yf(e))return"Safari";if((e.includes("chrome/")||Jf(e))&&!e.includes("edge/"))return"Chrome";if(Xf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function qf(t=je()){return/firefox\//i.test(t)}function Yf(t=je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jf(t=je()){return/crios\//i.test(t)}function Qf(t=je()){return/iemobile/i.test(t)}function Xf(t=je()){return/android/i.test(t)}function Zf(t=je()){return/blackberry/i.test(t)}function ep(t=je()){return/webos/i.test(t)}function Kl(t=je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _I(t=je()){var e;return Kl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mI(){return dg()&&document.documentMode===10}function tp(t=je()){return Kl(t)||Xf(t)||ep(t)||Zf(t)||/windows phone/i.test(t)||Qf(t)}/**
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
 */function np(t,e=[]){let n;switch(t){case"Browser":n=Uu(je());break;case"Worker":n=`${Uu(je())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${As}/${s}`}/**
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
 */class gI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function vI(t,e={}){return Ls(t,"GET","/v2/passwordPolicy",wo(t,e))}/**
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
 */const yI=6;class bI{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:yI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class wI{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $u(this),this.idTokenSubscription=new $u(this),this.beforeStateQueue=new gI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$f,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await hs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Gf(this,{idToken:e}),s=await Bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ut(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $r(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ut(this.app))return Promise.reject(mn(this));const n=e?Ee(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ut(this.app)?Promise.reject(mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ut(this.app)?Promise.reject(mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vI(this),n=new bI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Oi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await pI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vt(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await hs.create(this,[Vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=np(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&eI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Io(t){return Ee(t)}class $u{constructor(e){this.auth=e,this.observer=null,this.addObserver=wg(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let zl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function II(t){zl=t}function CI(t){return zl.loadJS(t)}function EI(){return zl.gapiScript}function SI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function TI(t,e){const n=ll(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Ir(r,e??{}))return i;Jt(i,"already-initialized")}return n.initialize({options:e})}function kI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Vt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function RI(t,e,n){const s=Io(t);V(s._canInitEmulator,s,"emulator-config-failed"),V(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=sp(e),{host:o,port:a}=PI(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),NI()}function sp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function PI(t){const e=sp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Hu(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Hu(o)}}}function Hu(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ip{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ht("not implemented")}_getIdTokenResponse(e){return Ht("not implemented")}_linkToIdToken(e,n){return Ht("not implemented")}_getReauthenticationResolver(e){return Ht("not implemented")}}/**
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
 */async function fs(t,e){return Wf(t,"POST","/v1/accounts:signInWithIdp",wo(t,e))}/**
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
 */const AI="http://localhost";class zn extends ip{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Vl(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new zn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,fs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fs(e,n)}buildRequest(){const e={requestUri:AI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ns(n)}return e}}/**
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
 */class rp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bi extends rp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class rn extends Bi{constructor(){super("facebook.com")}static credential(e){return zn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";rn.PROVIDER_ID="facebook.com";/**
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
 */class on extends Bi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return on.credential(n,s)}catch{return null}}}on.GOOGLE_SIGN_IN_METHOD="google.com";on.PROVIDER_ID="google.com";/**
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
 */class an extends Bi{constructor(){super("github.com")}static credential(e){return zn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return an.credential(e.oauthAccessToken)}catch{return null}}}an.GITHUB_SIGN_IN_METHOD="github.com";an.PROVIDER_ID="github.com";/**
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
 */class ln extends Bi{constructor(){super("twitter.com")}static credential(e,n){return zn._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ln.credential(n,s)}catch{return null}}}ln.TWITTER_SIGN_IN_METHOD="twitter.com";ln.PROVIDER_ID="twitter.com";/**
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
 */async function OI(t,e){return Wf(t,"POST","/v1/accounts:signUp",wo(t,e))}/**
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
 */class In{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Bt._fromIdTokenResponse(e,s,i),o=Bu(s);return new In({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Bu(s);return new In({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Bu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function xI(t){var e;if(Ut(t.app))return Promise.reject(mn(t));const n=Io(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new In({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await OI(n,{returnSecureToken:!0}),i=await In._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Hr extends En{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Hr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Hr(e,n,s,i)}}function op(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Hr._fromErrorAndOperation(t,r,e,s):r})}async function DI(t,e,n=!1){const s=await ki(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return In._forOperation(t,"link",s)}/**
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
 */async function MI(t,e,n=!1){const{auth:s}=t;if(Ut(s.app))return Promise.reject(mn(s));const i="reauthenticate";try{const r=await ki(t,op(s,i,e,t),n);V(r.idToken,s,"internal-error");const o=Gl(r.idToken);V(o,s,"internal-error");const{sub:a}=o;return V(t.uid===a,s,"user-mismatch"),In._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Jt(s,"user-mismatch"),r}}/**
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
 */async function LI(t,e,n=!1){if(Ut(t.app))return Promise.reject(mn(t));const s="signIn",i=await op(t,s,e),r=await In._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}/**
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
 */function FI(t,e){return Ee(t).setPersistence(e)}function UI(t,e,n,s){return Ee(t).onIdTokenChanged(e,n,s)}function $I(t,e,n){return Ee(t).beforeAuthStateChanged(e,n)}function HI(t,e,n,s){return Ee(t).onAuthStateChanged(e,n,s)}function BI(t){return Ee(t).signOut()}const Br="__sak";/**
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
 */class ap{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Br,"1"),this.storage.removeItem(Br),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const VI=1e3,WI=10;class lp extends ap{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=tp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);mI()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,WI):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},VI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lp.type="LOCAL";const jI=lp;/**
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
 */class cp extends ap{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cp.type="SESSION";const ql=cp;/**
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
 */function GI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Co{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Co(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await GI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Co.receivers=[];/**
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
 */function Yl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class KI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Yl("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function kt(){return window}function zI(t){kt().location.href=t}/**
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
 */function up(){return typeof kt().WorkerGlobalScope<"u"&&typeof kt().importScripts=="function"}async function qI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function YI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function JI(){return up()?self:null}/**
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
 */const dp="firebaseLocalStorageDb",QI=1,Vr="firebaseLocalStorage",hp="fbase_key";class Vi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Eo(t,e){return t.transaction([Vr],e?"readwrite":"readonly").objectStore(Vr)}function XI(){const t=indexedDB.deleteDatabase(dp);return new Vi(t).toPromise()}function Fa(){const t=indexedDB.open(dp,QI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Vr,{keyPath:hp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Vr)?e(s):(s.close(),await XI(),e(await Fa()))})})}async function Vu(t,e,n){const s=Eo(t,!0).put({[hp]:e,value:n});return new Vi(s).toPromise()}async function ZI(t,e){const n=Eo(t,!1).get(e),s=await new Vi(n).toPromise();return s===void 0?null:s.value}function Wu(t,e){const n=Eo(t,!0).delete(e);return new Vi(n).toPromise()}const eC=800,tC=3;class fp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fa(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>tC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return up()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Co._getInstance(JI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qI(),!this.activeServiceWorker)return;this.sender=new KI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||YI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fa();return await Vu(e,Br,"1"),await Wu(e,Br),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Vu(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>ZI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Wu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Eo(i,!1).getAll();return new Vi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),eC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}fp.type="LOCAL";const nC=fp;new Hi(3e4,6e4);/**
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
 */function sC(t,e){return e?Vt(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Jl extends ip{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function iC(t){return LI(t.auth,new Jl(t),t.bypassAuthState)}function rC(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),MI(n,new Jl(t),t.bypassAuthState)}async function oC(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),DI(n,new Jl(t),t.bypassAuthState)}/**
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
 */class pp{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iC;case"linkViaPopup":case"linkViaRedirect":return oC;case"reauthViaPopup":case"reauthViaRedirect":return rC;default:Jt(this.auth,"internal-error")}}resolve(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const aC=new Hi(2e3,1e4);class is extends pp{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,is.currentPopupAction&&is.currentPopupAction.cancel(),is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const e=Yl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aC.get())};e()}}is.currentPopupAction=null;/**
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
 */const lC="pendingRedirect",lr=new Map;class cC extends pp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=lr.get(this.auth._key());if(!e){try{const s=await uC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}lr.set(this.auth._key(),e)}return this.bypassAuthState||lr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uC(t,e){const n=fC(e),s=hC(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function dC(t,e){lr.set(t._key(),e)}function hC(t){return Vt(t._redirectPersistence)}function fC(t){return ar(lC,t.config.apiKey,t.name)}async function pC(t,e,n=!1){if(Ut(t.app))return Promise.reject(mn(t));const s=Io(t),i=sC(s,e),o=await new cC(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const _C=10*60*1e3;class mC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!_p(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Tt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_C&&this.cachedEventUids.clear(),this.cachedEventUids.has(ju(e))}saveEventToCache(e){this.cachedEventUids.add(ju(e)),this.lastProcessedEventTime=Date.now()}}function ju(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _p({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _p(t);default:return!1}}/**
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
 */async function vC(t,e={}){return Ls(t,"GET","/v1/projects",e)}/**
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
 */const yC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bC=/^https?/;async function wC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vC(t);for(const n of e)try{if(IC(n))return}catch{}Jt(t,"unauthorized-domain")}function IC(t){const e=Ma(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!bC.test(n))return!1;if(yC.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const CC=new Hi(3e4,6e4);function Gu(){const t=kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function EC(t){return new Promise((e,n)=>{var s,i,r;function o(){Gu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gu(),n(Tt(t,"network-request-failed"))},timeout:CC.get()})}if(!((i=(s=kt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=kt().gapi)===null||r===void 0)&&r.load)o();else{const a=SI("iframefcb");return kt()[a]=()=>{gapi.load?o():n(Tt(t,"network-request-failed"))},CI(`${EI()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw cr=null,e})}let cr=null;function SC(t){return cr=cr||EC(t),cr}/**
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
 */const TC=new Hi(5e3,15e3),kC="__/auth/iframe",RC="emulator/auth/iframe",PC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},NC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AC(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jl(e,RC):`https://${t.config.authDomain}/${kC}`,s={apiKey:e.apiKey,appName:t.name,v:As},i=NC.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Ns(s).slice(1)}`}async function OC(t){const e=await SC(t),n=kt().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:AC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:PC,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Tt(t,"network-request-failed"),a=kt().setTimeout(()=>{r(o)},TC.get());function l(){kt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const xC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DC=500,MC=600,LC="_blank",FC="http://localhost";class Ku{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UC(t,e,n,s=DC,i=MC){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},xC),{width:s.toString(),height:i.toString(),top:r,left:o}),c=je().toLowerCase();n&&(a=Jf(c)?LC:n),qf(c)&&(e=e||FC,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[_,y])=>`${f}${_}=${y},`,"");if(_I(c)&&a!=="_self")return $C(e||"",a),new Ku(null);const d=window.open(e||"",a,u);V(d,t,"popup-blocked");try{d.focus()}catch{}return new Ku(d)}function $C(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const HC="__/auth/handler",BC="emulator/auth/handler",VC=encodeURIComponent("fac");async function zu(t,e,n,s,i,r){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:As,eventId:i};if(e instanceof rp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",br(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Bi){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${VC}=${encodeURIComponent(l)}`:"";return`${WC(t)}?${Ns(a).slice(1)}${c}`}function WC({config:t}){return t.emulator?jl(t,BC):`https://${t.authDomain}/${HC}`}/**
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
 */const Zo="webStorageSupport";class jC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ql,this._completeRedirectFn=pC,this._overrideRedirectResult=dC}async _openPopup(e,n,s,i){var r;Qt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await zu(e,n,s,Ma(),i);return UC(e,o,Yl())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await zu(e,n,s,Ma(),i);return zI(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Qt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await OC(e),s=new mC(e);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zo,{type:Zo},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Zo];o!==void 0&&n(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tp()||Yf()||Kl()}}const GC=jC;var qu="@firebase/auth",Yu="1.7.9";/**
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
 */class KC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function zC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qC(t){bs(new Vn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;V(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:np(t)},c=new wI(s,i,r,l);return kI(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),bs(new Vn("auth-internal",e=>{const n=Io(e.getProvider("auth").getImmediate());return(s=>new KC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(qu,Yu,zC(t)),fn(qu,Yu,"esm2017")}/**
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
 */const YC=5*60,JC=ph("authIdTokenMaxAge")||YC;let Ju=null;const QC=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>JC)return;const i=n==null?void 0:n.token;Ju!==i&&(Ju=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function XC(t=bh()){const e=ll(t,"auth");if(e.isInitialized())return e.getImmediate();const n=TI(t,{popupRedirectResolver:GC,persistence:[nC,jI,ql]}),s=ph("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=QC(r.toString());$I(n,o,()=>o(n.currentUser)),UI(n,a=>o(a))}}const i=hh("auth");return i&&RI(n,`http://${i}`),n}function ZC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}II({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Tt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",ZC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qC("Browser");var eE="firebase",tE="10.14.1";/**
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
 */fn(eE,tE,"app");const nE={apiKey:"AIzaSyDzJsJYfTcWaeC5f43EXG-brzAaY7_BBk8",authDomain:"seep-7fe1d.firebaseapp.com",databaseURL:"https://seep-7fe1d-default-rtdb.firebaseio.com",projectId:"seep-7fe1d",storageBucket:"seep-7fe1d.firebasestorage.app",messagingSenderId:"681624379623",appId:"1:681624379623:web:d9e10ac7318f96e98d0242"},mp=yh(nE),Oe=qw(mp),So=XC(mp);FI(So,ql);const sE=["S","H","D","C"],iE={S:"♠",H:"♥",D:"♦",C:"♣"},Qu={S:0,H:1,D:2,C:3},rE={1:"A",11:"J",12:"Q",13:"K"},Wr=100,J=t=>rE[t]||String(t),gp=t=>iE[t],vp=t=>t==="H"||t==="D";function jr(t){return t.suit==="S"?t.rank:t.suit==="D"&&t.rank===10?6:t.rank===1?1:0}function ps(t){return t.type==="house"?t.value:t.card.rank}function Ql(t){return t.cards.reduce((e,n)=>e+n.rank,0)>=2*t.value}function Xl(t){return t.type==="house"?t.cards:[t.card]}function oE(t,e){const n=new Set([0]);for(const s of t){for(const i of[...n])n.add(i+s);if(n.has(e))return!0}return n.has(e)}function aE(t,e){function n(s,i,r){return i===0?r:s>=t.length||i<0?null:n(s+1,i-t[s],[...r,s])??n(s+1,i,r)}return n(0,e,[])}function Zl(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function ec(){const t=[];for(const e of sE)for(let n=1;n<=13;n++)t.push({suit:e,rank:n});return t}function ks(t){t.sort((e,n)=>e.rank-n.rank||Qu[e.suit]-Qu[n.suit])}function tc(){return{deck:Zl(ec()),hands:[[],[],[],[]],floor:[],captured:[[],[]],scores:[0,0],seepBonus:[0,0],currentPlayer:0,bidder:0,bidValue:null,phase:"bid",roundNum:1,isFirstTurn:!0,handsDealt:!1,lastCaptureTeam:null,playerNames:null,finalEligible:null,finalHouseVal:null,finalAnnouncement:null}}function Ua(t,e){let n=!0;for(;n;){n=!1;const s=t.map((r,o)=>({it:r,i:o})).filter(r=>r.it.type==="card");if(!s.length)break;const i=aE(s.map(r=>r.it.card.rank),e.value);if(i!==null){const r=i.map(o=>s[o].i);e.cards.push(...r.map(o=>t[o].card)),r.sort((o,a)=>a-o).forEach(o=>t.splice(o,1)),n=!0}}}const lE=Zt({localUid:null,localName:"",currentGameId:null,localSeat:null,hostUid:null,screen:"home"});function Xe(){return{session:lE}}function cE(t,e){if(e.selHandIdx===null)return null;const n=t.currentPlayer,s=t.hands[n],i=s[e.selHandIdx],r=e.selFloorIdxs.map(o=>t.floor[o]);return{floor:t.floor,floorVals:t.floor.map(ps),hand:s,handCard:i,handIdx:e.selHandIdx,selItems:r,selSum:r.reduce((o,a)=>o+ps(a),0),selLoose:r.filter(o=>o.type==="card").map(o=>o.card),selHouses:r.filter(o=>o.type==="house"),remainder:s.filter((o,a)=>a!==e.selHandIdx),team:n%2,player:n,isFirstTurn:t.isFirstTurn,bidder:t.bidder,bidValue:t.bidValue,selFloorIdxs:e.selFloorIdxs}}function uE(t){if(t.floor.length===0)return{valid:!1,reason:"Floor is empty"};const e=t.handCard.rank,n=t.floor.filter(i=>i.type==="house"),s=t.floor.filter(i=>i.type==="card");for(const i of n)if(i.value!==e)return{valid:!1,reason:`House of ${J(i.value)} cannot be swept by ${J(e)}`};if(s.length>0){const i=s.reduce((r,o)=>r+o.card.rank,0);if(i!==e)return{valid:!1,reason:`Loose cards sum to ${i}, not ${e} — cannot seep`}}return{valid:!0,reason:"Seep! Sweep the entire floor",meta:{}}}function dE(t){return t.selItems.length===0?{valid:!1,reason:"No floor items selected"}:t.isFirstTurn&&t.player===t.bidder&&t.handCard.rank!==t.bidValue?{valid:!1,reason:`First turn: can only pick with the bid card (${J(t.bidValue)})`}:t.handCard.rank!==t.selSum?{valid:!1,reason:`Selected sum ${t.selSum} ≠ ${J(t.handCard.rank)}`}:{valid:!0,reason:`Pick ${t.selItems.length} floor item(s)`,meta:{}}}function hE(t,e){return t.remainder.some(n=>n.rank===e)||t.floor.some(n=>n.type==="house"&&n.team===t.team&&n.value===e)}function fE(t){const e=t.selLoose.reduce((o,a)=>o+a.rank,0),n=t.selHouses.reduce((o,a)=>o+a.value,0);if(t.selHouses.length>0){const o=t.handCard.rank+e+n;if(o>13)return{valid:!1,reason:`Sum ${o} exceeds King (13)`};const a=t.floor.find(c=>c.type==="house"&&c.value===o&&!t.selHouses.includes(c));return a?(t.team===a.team?t.player===a.owner:a.sharedBy===void 0||t.player===a.sharedBy)&&t.handCard.rank===a.value&&!t.remainder.some(c=>c.rank===a.value)?{valid:!1,reason:`Must keep a ${J(a.value)} in hand to capture this house`}:{valid:!0,reason:`Merge into house of ${J(o)}`,meta:{houseVal:o,merge:!0}}:{valid:!1,reason:`No house of ${J(o)} on the floor to merge into`}}if(t.selLoose.length===0)return{valid:!1,reason:"Select floor card(s) to combine with your hand card"};const s=t.handCard.rank===e,i=s?t.handCard.rank:t.handCard.rank+e;if(i<9)return{valid:!1,reason:`House value ${i} is below 9`};if(!s&&i>13)return{valid:!1,reason:`Sum ${i} exceeds King (13)`};if(t.isFirstTurn&&t.player===t.bidder&&t.handCard.rank===t.bidValue&&!t.remainder.some(o=>o.rank===t.bidValue))return{valid:!1,reason:`First turn: need a second ${J(t.bidValue)} to build with it`};const r=t.floor.find(o=>o.type==="house"&&o.value===i);return r?r.shared?{valid:!1,reason:`House of ${J(i)} is already shared and locked`}:{valid:!0,reason:`Contribute to house of ${J(i)} (will become shared)`,meta:{houseVal:i}}:t.floor.filter(o=>o.type==="house").length>=2?{valid:!1,reason:"Maximum of 2 houses are already on the floor"}:hE(t,i)?{valid:!0,reason:`Build house of ${J(i)}`,meta:{houseVal:i}}:{valid:!1,reason:`You need a key card (${J(i)}) in hand to pick up this house later`}}function pE(t){if(t.selHouses.length!==1)return{valid:!1,reason:"Select exactly one house to upgrade"};const e=t.selHouses[0];if(e.shared)return{valid:!1,reason:"Cannot upgrade a shared house"};if(e.pucca)return{valid:!1,reason:"Cannot upgrade a Pucca house"};if(Ql(e))return{valid:!1,reason:"House is already doubled — only cementing applies"};if(e.owner===t.player)return{valid:!1,reason:"You built this house — another player must modify it first"};const n=e.value+t.handCard.rank+t.selLoose.reduce((s,i)=>s+i.rank,0);return n<=e.value?{valid:!1,reason:"New value must exceed current"}:n>13?{valid:!1,reason:`New value ${n} exceeds King (13)`}:t.remainder.some(s=>s.rank===n)?{valid:!0,reason:`Upgrade house to ${J(n)}`,meta:{houseVal:n}}:{valid:!1,reason:`Need key card (${J(n)}) to claim the upgraded house`}}function _E(t){if(t.selHouses.length!==1)return{valid:!1,reason:"Select a house to reinforce"};const e=t.selHouses[0],n=t.handCard.rank+t.selLoose.reduce((r,o)=>r+o.rank,0);if(n!==e.value)return{valid:!1,reason:`Cards must total ${J(e.value)} to reinforce — yours total ${n}`};let s;return t.team===e.team?s=t.player===e.owner:s=e.sharedBy===void 0||t.player===e.sharedBy,s&&t.handCard.rank===e.value&&!t.remainder.some(r=>r.rank===e.value)?{valid:!1,reason:`Must keep a ${J(e.value)} in hand to capture this house`}:{valid:!0,reason:!e.shared&&e.team!==t.team?`Share house of ${J(e.value)}`:`Reinforce house of ${J(e.value)}`,meta:{houseVal:e.value}}}function mE(t){return t.isFirstTurn&&t.player===t.bidder&&t.handCard.rank!==t.bidValue?{valid:!1,reason:`First turn: can only throw the bid card (${J(t.bidValue)})`}:oE(t.floor.map(ps),t.handCard.rank)?{valid:!1,reason:`${J(t.handCard.rank)} can capture a floor item — must capture first`}:{valid:!0,reason:"Throw card to floor",meta:{}}}function gE(t){const e=uE(t);if(e.valid){const n={valid:!1,reason:"Seep is mandatory"};return{seep:e,pick:n,build:n,break:n,add:n,throw:n}}return{seep:{valid:!1},pick:dE(t),build:fE(t),break:pE(t),add:_E(t),throw:mE(t)}}function vE(t,e){if(t.seep.valid)return`⚡ Seep — sweep entire floor (${e.floor.length} items)!`;if(t.pick.valid)return`Pick: take ${e.selItems.length} floor item(s)`;if(t.build.valid){const i=t.build.meta.houseVal;return t.build.meta.merge?`Merge selected house(s) into House of ${J(i)} (${i})`:`Build House of ${J(i)} (${i})`}if(t.break.valid)return`Upgrade House → ${J(t.break.meta.houseVal)}`;if(t.add.valid)return`Reinforce house of ${J(t.add.meta.houseVal)} → Pucca ★`;const n=e.handCard,s=[];if(e.floor.forEach((i,r)=>{ps(i)===n.rank&&!e.selFloorIdxs.includes(r)&&s.push(`Click ${J(ps(i))} on the floor to Pick it up`)}),!s.length){const i=e.floor.map((r,o)=>({v:ps(r),i:o})).filter(r=>r.v<n.rank);for(let r=0;r<i.length&&!s.length;r++)for(let o=r+1;o<i.length;o++)if(i[r].v+i[o].v===n.rank){s.push(`Select ${J(i[r].v)} + ${J(i[o].v)} on floor to Pick`);break}}return t.throw.valid?s.length?s[0]:"Select floor cards to act, or Throw":s.length?s[0]:`${J(n.rank)} must capture — select matching floor cards`}function yp(t,e){const n=cE(t,e);if(!n)return{pick:!1,seep:!1,build:!1,buildVal:null,buildMerge:!1,add:!1,throw:!1,msg:"Select a card from your hand."};const s=gE(n),i=s.build.valid||s.break.valid,r=i?s.build.valid?s.build.meta:s.break.meta:null;return{pick:s.pick.valid,seep:s.seep.valid,build:i,buildVal:r?r.houseVal:null,buildMerge:!!(r&&r.merge),add:s.add.valid,throw:s.throw.valid,msg:vE(s,n)}}const ea=Zt(tc()),bt=Zt({selHandIdx:null,selFloorIdxs:[]}),er=Zt({visible:!1,message:"",onDone:null}),qs=Zt({visible:!1,house:null}),ta=Zt({visible:!1,message:""});function Ze(){const t=j(()=>yp(ea,bt));function e(c){var u;return((u=ea.playerNames)==null?void 0:u[c])||`Player ${c+1}`}function n(c){bt.selHandIdx=bt.selHandIdx===c?null:c,bt.selFloorIdxs=[]}function s(c){const u=bt.selFloorIdxs.indexOf(c);u===-1?bt.selFloorIdxs.push(c):bt.selFloorIdxs.splice(u,1)}function i(){bt.selHandIdx=null,bt.selFloorIdxs=[]}function r(c){ta.message=`House ${c} Final!!`,ta.visible=!0}function o(c,u,d){er.message=`+${u} points for Team ${c+1}!`,er.visible=!0,er.onDone=d}function a(c){qs.house=c,qs.visible=!0}function l(){qs.visible=!1,qs.house=null}return{gameState:ea,ui:bt,actions:t,seepOverlay:er,housePeek:qs,finalBanner:ta,playerName:e,selectHandCard:n,toggleFloor:s,clearSel:i,showSeepOverlay:o,showFinalBanner:r,openHousePeek:a,closeHousePeek:l}}const{gameState:v,ui:Me,clearSel:Wi,showSeepOverlay:yE}=Ze(),{session:Je}=Xe();let Sn=()=>Promise.resolve();function bE(t){Sn=t}function wE(){Object.assign(v,tc()),v.hands[v.bidder]=v.deck.splice(0,4),ks(v.hands[v.bidder]),v.phase="bid"}function na(){v.deck=Zl(ec()),v.hands[v.bidder]=v.deck.splice(0,4),ks(v.hands[v.bidder]),Je.currentGameId&&Sn()}function IE(){v.hands[v.bidder].push(...v.deck.splice(0,8)),ks(v.hands[v.bidder]);for(let t=0;t<4;t++)t!==v.bidder&&(v.hands[t]=v.deck.splice(0,12),ks(v.hands[t]));v.handsDealt=!0}function CE(t){v.bidValue=t,v.floor=v.deck.splice(0,4).map(e=>({type:"card",card:e})),v.phase="play",Je.currentGameId&&Sn()}function Ys(t){if(Je.localSeat!==null&&Je.localSeat!==v.currentPlayer)return;const e=yp(v,Me);if(!(t==="pick"&&!e.pick)&&!(t==="seep"&&!e.seep)&&!(t==="build"&&!e.build)&&!(t==="add"&&!e.add)&&!(t==="throw"&&!e.throw))switch(t){case"pick":Xu(!1);break;case"seep":Me.selFloorIdxs=v.floor.map((n,s)=>s),Xu(!0);break;case"build":EE(e.buildVal);break;case"add":SE();break;case"throw":TE();break}}function Xu(t){const e=v.currentPlayer,n=e%2,s=v.hands[e][Me.selHandIdx],i=[...Me.selFloorIdxs.map(a=>v.floor[a]).flatMap(Xl),s];v.hands[e].splice(Me.selHandIdx,1),[...Me.selFloorIdxs].sort((a,l)=>l-a).forEach(a=>v.floor.splice(a,1)),v.captured[n].push(...i),v.lastCaptureTeam=n;const r=v.isFirstTurn;if(v.isFirstTurn=!1,Wi(),(t||v.floor.length===0)&&!bp()){const a=r?25:50;v.seepBonus[n]+=a,yE(n,a,Ri);return}Ri()}function EE(t){const e=v.currentPlayer,n=e%2,s=v.hands[e][Me.selHandIdx],r=[...Me.selFloorIdxs.map(a=>v.floor[a]).flatMap(Xl),s];v.hands[e].splice(Me.selHandIdx,1),[...Me.selFloorIdxs].sort((a,l)=>l-a).forEach(a=>v.floor.splice(a,1));const o=v.floor.find(a=>a.type==="house"&&a.value===t);if(o)o.cards.push(...r),o.team!==n&&(o.shared||(o.shared=!0,o.sharedBy=e),o.pucca=!0),Ua(v.floor,o);else{const a={type:"house",cards:r,value:t,pucca:!1,owner:e,team:n,shared:!1,sharedBy:void 0};v.floor.push(a),Ua(v.floor,a)}v.finalEligible=e,v.finalHouseVal=t,v.isFirstTurn=!1,Wi(),Ri()}function SE(){const t=v.currentPlayer,e=v.hands[t][Me.selHandIdx],n=Me.selFloorIdxs.find(o=>v.floor[o].type==="house"),s=v.floor[n],i=Me.selFloorIdxs.filter(o=>v.floor[o].type==="card");s.cards.push(e,...i.map(o=>v.floor[o].card));const r=t%2;s.team!==r&&(s.shared||(s.shared=!0,s.sharedBy=t)),s.pucca=!0,v.hands[t].splice(Me.selHandIdx,1),i.sort((o,a)=>a-o).forEach(o=>v.floor.splice(o,1)),Ua(v.floor,s),v.finalEligible=t,v.finalHouseVal=s.value,v.isFirstTurn=!1,Wi(),Ri()}function TE(){const t=v.currentPlayer,e=v.hands[t][Me.selHandIdx];v.floor.push({type:"card",card:e}),v.hands[t].splice(Me.selHandIdx,1),v.isFirstTurn=!1,Wi(),Ri()}function bp(){return v.hands.every(t=>t.length===0)}function kE(){v.finalEligible=null,v.finalHouseVal=null,Je.currentGameId&&Sn()}function RE(){Je.localSeat!==null&&Je.localSeat!==v.finalEligible||(v.finalAnnouncement={seat:v.finalEligible,houseVal:v.finalHouseVal},v.finalEligible=null,v.finalHouseVal=null,Je.currentGameId&&Sn())}function Ri(){if(v.finalAnnouncement=null,v.handsDealt||IE(),bp()){PE();return}v.currentPlayer=(v.currentPlayer+1)%4;let t=0;for(;v.hands[v.currentPlayer].length===0&&t++<4;)v.currentPlayer=(v.currentPlayer+1)%4;Je.currentGameId&&Sn()}function PE(){v.floor.length>0&&v.lastCaptureTeam!==null&&(v.captured[v.lastCaptureTeam].push(...v.floor.flatMap(Xl)),v.floor=[]);const t=v.captured[0].reduce((n,s)=>n+jr(s),0)+v.seepBonus[0],e=v.captured[1].reduce((n,s)=>n+jr(s),0)+v.seepBonus[1];v.scores[0]+=t,v.scores[1]+=e,v.phase=v.scores[0]>=Wr||v.scores[1]>=Wr?"gameover":"roundend",v._roundS0=t,v._roundS1=e,Je.currentGameId&&Sn()}function NE(){Je.currentGameId&&Je.localSeat!==v.bidder||(v.roundNum++,Object.assign(v,{deck:Zl(ec()),hands:[[],[],[],[]],floor:[],captured:[[],[]],seepBonus:[0,0],bidder:(v.bidder+1)%4,bidValue:null,phase:"bid",isFirstTurn:!0,handsDealt:!1,lastCaptureTeam:null,finalEligible:null,finalHouseVal:null,finalAnnouncement:null}),Wi(),v.hands[v.bidder]=v.deck.splice(0,4),ks(v.hands[v.bidder]),Je.currentGameId&&Sn())}const{session:sa}=Xe(),_s=Re([]),Mn=Re(0);let Ln=null;function wp(t){Ln&&(Hn(Ln),Ln=null),_s.value=[],Mn.value=0;const e=Hw(Ae(Oe,`games/${t}/chat`),$w(50));Ln=e,Lw(e,n=>{_s.value.push(n.val()),Mn.value++})}function AE(){Ln&&(Hn(Ln),Ln=null),_s.value=[],Mn.value=0}async function OE(t){const e=t.trim();!e||!sa.currentGameId||await Dw(Ae(Oe,`games/${sa.currentGameId}/chat`),{name:sa.localName||"Player",text:e,ts:Date.now()})}const{session:D}=Xe(),{gameState:nc,ui:Zu}=Ze();let Fn=null,di=null;const Ip=Re(null),Cp=Re({});let cn=null;function Ep(t){cn&&(Hn(cn),cn=null),cn=Ae(Oe,`games/${t}/seatMap`),bo(cn,e=>{Cp.value=e.val()||{}})}function Sp(){Fn&&(Hn(Fn),Fn=null),di&&(Hn(di),di=null),cn&&(Hn(cn),cn=null)}async function xE(){if(!D.currentGameId)return;const t=JSON.parse(JSON.stringify(nc));t.selHandIdx=null,t.selFloorIdxs=[],await Qn(Ae(Oe,`games/${D.currentGameId}/gameStateJson`),JSON.stringify(t))}bE(xE);async function DE(){const t=Math.floor(1e5+Math.random()*9e5).toString();D.localSeat=0,D.currentGameId=t,sessionStorage.setItem("seep_seat","0"),sessionStorage.setItem("seep_gameId",t);const e={0:D.localUid,1:null,2:null,3:null};await Qn(Ae(Oe,`games/${t}`),{status:"lobby",hostUid:D.localUid,createdAt:Date.now(),seatMap:e,names:{[D.localUid]:D.localName},gameStateJson:null}),sc(t),D.screen="room"}async function ur(t){D.currentGameId&&D.localUid===D.hostUid&&await Qn(Ae(Oe,`games/${D.currentGameId}/seatMap/${t}`),null)}async function ME(t){const e=await vo(Ae(Oe,`games/${t}`));if(!e.exists())return{error:"Room not found. Check the code and try again."};const n=e.val();if(n.status==="gameover")return{error:"This game has already ended."};if(n.seatMap){const s=Object.values(n.seatMap).indexOf(D.localUid);s!==-1&&(D.localSeat=s,sessionStorage.setItem("seep_seat",String(s)))}return D.currentGameId=t,sessionStorage.setItem("seep_gameId",t),await Qn(Ae(Oe,`games/${t}/names/${D.localUid}`),D.localName),sc(t),D.screen="room",{}}function sc(t){Sp(),wp(t),Ep(t),Fn=Ae(Oe,`games/${t}`),bo(Fn,e=>{if(!e.exists())return;const n=e.val();if(D.hostUid=n.hostUid||null,n.status==="bid"||n.status==="playing"){if(Hn(Fn),Fn=null,D.localSeat===null&&n.seatMap){const s=Object.values(n.seatMap).indexOf(D.localUid);s!==-1&&(D.localSeat=s,sessionStorage.setItem("seep_seat",String(s)))}Tp(t);return}Ip.value=n})}async function LE(t){const e=Ae(Oe,`games/${D.currentGameId}/seatMap/${t}`),{committed:n}=await Xw(e,s=>{if(s===null)return D.localUid});n?(D.localSeat=t,sessionStorage.setItem("seep_seat",String(t)),await Qn(Ae(Oe,`games/${D.currentGameId}/names/${D.localUid}`),D.localName),Lf(e).set(null)):alert("That seat was just taken. Please choose another.")}async function ed(){const e=(await vo(Ae(Oe,`games/${D.currentGameId}`))).val(),n=Object.values(e.seatMap||{}).filter(Boolean).length;if(!e||n<4){alert("All 4 seats must be filled");return}const s=tc();s.hands[s.bidder]=s.deck.splice(0,4),ks(s.hands[s.bidder]),s.playerNames=[0,1,2,3].map(i=>{const r=e.seatMap[i];return r&&e.names&&e.names[r]||`Player ${i+1}`}),Object.assign(nc,s),await Mw(Ae(Oe,`games/${D.currentGameId}`),{status:"bid",gameStateJson:JSON.stringify(s)})}async function ic(){await navigator.clipboard.writeText(D.currentGameId)}async function Tp(t){if(wp(t),Ep(t),D.localSeat===null){const e=sessionStorage.getItem("seep_seat");if(e!==null)D.localSeat=parseInt(e,10);else{const n=await vo(Ae(Oe,`games/${t}`));if(n.exists()){const s=n.val();D.hostUid=s.hostUid||null;const i=s.seatMap||{},r=Object.values(i).indexOf(D.localUid);r!==-1&&(D.localSeat=r,sessionStorage.setItem("seep_seat",String(r)))}}}di=Ae(Oe,`games/${t}/gameStateJson`),bo(di,e=>{if(!e.exists())return;const n=JSON.parse(e.val());Object.assign(nc,n),Zu.selHandIdx=null,Zu.selFloorIdxs=[],D.screen="game"})}function FE(){HI(So,async t=>{if(!t||(D.localUid=t.uid,D.localName=sessionStorage.getItem("seep_name")||"",!D.localName))return;const e=sessionStorage.getItem("seep_gameId");if(!e)return;D.currentGameId=e;const n=await vo(Ae(Oe,`games/${e}`));if(!n.exists()){D.currentGameId=null;return}const s=n.val();if(s.seatMap){const i=Object.values(s.seatMap).indexOf(D.localUid);i!==-1&&(D.localSeat=i,sessionStorage.setItem("seep_seat",String(i)))}s.status==="lobby"?(sc(e),D.screen="room"):Tp(e)})}async function td(t){if(D.localUid)return!0;const e=t.trim();if(!e)return!1;const n=await xI(So);return D.localUid=n.user.uid,D.localName=e,sessionStorage.setItem("seep_name",e),!0}async function UE(){await Xt(),await BI(So),D.localUid=null,D.localName="",D.currentGameId=null,D.localSeat=null,D.hostUid=null,sessionStorage.removeItem("seep_gameId"),sessionStorage.removeItem("seep_seat"),sessionStorage.removeItem("seep_name"),D.screen="home"}async function Xt(){if(AE(),!D.currentGameId){D.screen="home";return}if(D.localSeat!==null){const t=Ae(Oe,`games/${D.currentGameId}/seatMap/${D.localSeat}`);Lf(t).cancel(),await Qn(t,null)}Sp(),sessionStorage.removeItem("seep_gameId"),sessionStorage.removeItem("seep_seat"),D.currentGameId=null,D.localSeat=null,D.screen="home"}const $E={class:"menu-account"},HE={id:"menu-account-name"},BE={id:"menu-account-detail"},VE={key:0,class:"menu-section"},WE={__name:"GlobalMenu",setup(t){const{session:e}=Xe(),n=Re(!1),s=Re(""),i=j(()=>e.hostUid&&e.hostUid===e.localUid),r=["Player 1 (T1)","Player 2 (T2)","Player 3 (T1)","Player 4 (T2)"],o=j(()=>{let d="";return e.currentGameId&&(d+=`Room: ${e.currentGameId}`),e.localSeat!==null&&(d+=`  ·  ${r[e.localSeat]}`),d});async function a(){await ic(),s.value="Copied!",setTimeout(()=>{s.value=""},1200)}async function l(){n.value=!1,await Xt()}async function c(){n.value=!1,await UE()}function u(){n.value=!1}return Za(()=>document.addEventListener("click",u)),Xr(()=>document.removeEventListener("click",u)),(d,f)=>(O(),M("div",{id:"global-menu-wrap",class:ie({visible:w(e).screen!=="home"})},[m("button",{id:"global-menu-btn",onClick:f[0]||(f[0]=gi(_=>n.value=!n.value,["stop"]))},"☰"),m("div",{id:"global-menu-dropdown",class:ie({open:n.value}),onClick:f[1]||(f[1]=gi(()=>{},["stop"]))},[m("div",$E,[m("div",HE,A(w(e).localName||"—"),1),m("div",BE,A(o.value),1)]),i.value&&w(e).currentGameId?(O(),M("div",VE,[f[2]||(f[2]=m("div",{class:"menu-section-title"},"Room Code",-1)),m("div",{class:"menu-room-code",onClick:a},A(s.value||w(e).currentGameId),1)])):we("",!0),w(e).currentGameId?(O(),M("button",{key:1,class:"menu-item danger",onClick:l},"Leave Room")):we("",!0),m("button",{class:"menu-item",onClick:c},"Sign Out")],2)],2))}},jE={id:"seep-msg"},GE={__name:"SeepOverlay",setup(t){const{seepOverlay:e}=Ze();return Wt(()=>e.visible,n=>{n&&setTimeout(()=>{e.visible=!1,e.onDone&&(e.onDone(),e.onDone=null)},1800)}),(n,s)=>(O(),M("div",{id:"seep-overlay",class:ie({show:w(e).visible})},[m("div",jE,A(w(e).message),1)],2))}},KE={id:"final-msg"},zE={__name:"FinalBanner",setup(t){const{gameState:e,playerName:n}=Ze(),s=Re(!1),i=Re("");let r=null;return Wt(()=>e.finalAnnouncement,o=>{o&&(r&&clearTimeout(r),i.value=`House ${J(o.houseVal)} Final by ${n(o.seat)}!`,s.value=!0,r=setTimeout(()=>{s.value=!1},1800))}),(o,a)=>(O(),M("div",{id:"final-banner",class:ie({show:s.value})},[m("div",KE,A(i.value),1)],2))}},qE={class:"c-tl"},YE={class:"rank"},JE={class:"suit"},QE={class:"c-br"},To={__name:"CardEl",props:{card:{type:Object,required:!0},clickable:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},faceDown:{type:Boolean,default:!1}},emits:["click"],setup(t){const e=t,n=j(()=>J(e.card.rank)),s=j(()=>gp(e.card.suit)),i=j(()=>vp(e.card.suit));return(r,o)=>(O(),M("div",{class:ie(["card",{red:i.value,selected:t.selected,"face-down":t.faceDown}]),style:Rs(t.clickable?{}:{cursor:"default"}),onClick:o[0]||(o[0]=a=>t.clickable?r.$emit("click"):null)},[t.faceDown?we("",!0):(O(),M(ue,{key:0},[m("div",qE,[nt(A(n.value),1),o[1]||(o[1]=m("br",null,null,-1)),nt(A(s.value),1)]),m("div",YE,A(n.value),1),m("div",JE,A(s.value),1),m("div",QE,[nt(A(n.value),1),o[2]||(o[2]=m("br",null,null,-1)),nt(A(s.value),1)])],64))],6))}},XE={class:"peek-inner"},ZE={class:"peek-header"},eS={id:"peek-title"},tS={id:"peek-owners",class:"peek-owners"},nS={id:"peek-cards",class:"peek-cards"},sS={__name:"HousePeekModal",setup(t){const{housePeek:e,closeHousePeek:n,playerName:s}=Ze(),i=j(()=>e.house),r=j(()=>{if(!i.value)return"";const o=i.value,a=o.shared?" ⚑ Shared":o.pucca?" ★ Pucca":Ql(o)?" ◆ Doubled":" (building)";return`House of ${J(o.value)}${a} — ${o.cards.length} cards`});return(o,a)=>{var l;return O(),M("div",{id:"house-peek",class:ie({show:w(e).visible}),onClick:a[1]||(a[1]=gi((...c)=>w(n)&&w(n)(...c),["self"]))},[m("div",XE,[m("div",ZE,[m("span",eS,A(r.value),1),m("button",{class:"peek-close",onClick:a[0]||(a[0]=(...c)=>w(n)&&w(n)(...c))},"✕")]),m("div",tS,[i.value?(O(),M(ue,{key:0},[m("span",{class:ie(["peek-owner",`t${i.value.team}`])}," Built by "+A(w(s)(i.value.owner))+" (Team "+A(i.value.team+1)+") ",3),i.value.shared&&i.value.sharedBy!==void 0?(O(),M(ue,{key:0},[a[2]||(a[2]=m("span",{class:"peek-owner-sep"}," · ",-1)),m("span",{class:ie(["peek-owner",`t${i.value.team===0?1:0}`])}," Shared by "+A(w(s)(i.value.sharedBy))+" (Team "+A(i.value.team===0?2:1)+") ",3)],64)):we("",!0)],64)):we("",!0)]),m("div",nS,[(O(!0),M(ue,null,Nt(((l=i.value)==null?void 0:l.cards)??[],(c,u)=>(O(),gs(To,{key:u,card:c,clickable:!1},null,8,["card"]))),128))])])],2)}}},iS={key:0,class:"chat-wrap"},rS={key:0,class:"chat-badge"},oS={key:0,class:"chat-panel"},aS={class:"chat-header"},lS={key:0,class:"chat-empty"},cS={class:"chat-name"},uS={class:"chat-text"},dS={class:"chat-input-row"},hS={__name:"ChatPanel",setup(t){const{session:e}=Xe(),n=Re(!1),s=Re(""),i=Re(null);Wt(n,l=>{l&&(Mn.value=0,a())}),Wt(_s,()=>{n.value&&(Mn.value=0,a())},{deep:!0});function r(){n.value=!n.value}async function o(){s.value.trim()&&(await OE(s.value),s.value="")}async function a(){await Rd(),i.value&&(i.value.scrollTop=i.value.scrollHeight)}return(l,c)=>w(e).currentGameId?(O(),M("div",iS,[m("button",{class:"chat-toggle",onClick:r},[c[2]||(c[2]=nt(" 💬 ",-1)),!n.value&&w(Mn)>0?(O(),M("span",rS,A(w(Mn)),1)):we("",!0)]),n.value?(O(),M("div",oS,[m("div",aS,[c[3]||(c[3]=m("span",null,"Room Chat",-1)),m("button",{class:"chat-close",onClick:c[0]||(c[0]=u=>n.value=!1)},"✕")]),m("div",{class:"chat-messages",ref_key:"msgList",ref:i},[w(_s).length===0?(O(),M("div",lS,"No messages yet…")):we("",!0),(O(!0),M(ue,null,Nt(w(_s),(u,d)=>(O(),M("div",{key:d,class:ie(["chat-msg",{mine:u.name===w(e).localName}])},[m("span",cS,A(u.name),1),m("span",uS,A(u.text),1)],2))),128))],512),m("div",dS,[Dt(m("input",{"onUpdate:modelValue":c[1]||(c[1]=u=>s.value=u),class:"chat-input",placeholder:"Type a message…",maxlength:"200",onKeydown:ma(o,["enter"])},null,544),[[_a,s.value]]),m("button",{class:"chat-send",onClick:o},"Send")])])):we("",!0)])):we("",!0)}},fS={id:"home-screen",class:"screen"},pS={class:"home-card"},_S={key:0,class:"home-welcome"},mS={class:"home-actions"},gS={key:2,class:"home-join-expand"},vS={class:"home-error"},yS={__name:"HomeScreen",setup(t){const{session:e}=Xe(),n=Re(""),s=Re(""),i=Re(!1),r=Re("");async function o(){r.value="";const l=e.localName||n.value.trim();if(!l){r.value="Please enter your name first.";return}try{await td(l),await DE()}catch(c){r.value="Sign-in failed: "+c.message}}async function a(){r.value="";const l=e.localName||n.value.trim();if(!l){r.value="Please enter your name first.";return}const c=s.value.trim();if(c.length!==6){r.value="Enter a valid 6-digit room code.";return}try{await td(l);const u=await ME(c);u!=null&&u.error&&(r.value=u.error)}catch(u){r.value="Join failed: "+u.message}}return(l,c)=>(O(),M("div",fS,[c[3]||(c[3]=m("div",{class:"home-logo"},"♠ SEEP ♠",-1)),m("div",pS,[w(e).localName&&w(e).localUid?(O(),M("div",_S," Welcome back, "+A(w(e).localName)+"! ",1)):Dt((O(),M("input",{key:1,"onUpdate:modelValue":c[0]||(c[0]=u=>n.value=u),class:"home-input",type:"text",placeholder:"Enter your name to play",maxlength:"20",autocomplete:"off",onKeydown:ma(o,["enter"])},null,544)),[[_a,n.value]]),m("div",mS,[m("button",{class:"btn btn-primary",onClick:o},"Start Game"),m("button",{class:"btn",style:{background:"#1e5c32",color:"#fff",border:"1px solid #3a8a4e"},onClick:c[1]||(c[1]=u=>i.value=!i.value)}," Join Room ")]),i.value?(O(),M("div",gS,[Dt(m("input",{"onUpdate:modelValue":c[2]||(c[2]=u=>s.value=u),type:"text",placeholder:"6-digit code",maxlength:"6",autocomplete:"off",onKeydown:ma(a,["enter"])},null,544),[[_a,s.value]]),m("button",{class:"btn btn-primary",onClick:a},"Join →")])):we("",!0),m("div",vS,A(r.value),1)])]))}},bS={id:"room-screen",class:"screen"},wS={class:"room-code-box"},IS={class:"seat-grid"},CS={class:"seat-name"},ES={class:"seat-label"},SS=["onClick"],TS={class:"seat-label"},kS=["onClick"],RS={class:"seat-label"},PS={style:{display:"flex",gap:"12px","flex-wrap":"wrap","justify-content":"center"}},NS={__name:"RoomScreen",setup(t){const{session:e}=Xe(),n=Re(""),s=["Player 1 (T1)","Player 2 (T2)","Player 3 (T1)","Player 4 (T2)"],i=Ip,r=j(()=>{var b;return((b=i.value)==null?void 0:b.seatMap)||{}}),o=j(()=>{var b;return((b=i.value)==null?void 0:b.names)||{}}),a=j(()=>{var b;return((b=i.value)==null?void 0:b.hostUid)===e.localUid||e.hostUid===e.localUid}),l=j(()=>Object.values(r.value).filter(b=>b!==null).length),c=j(()=>l.value===4),u=j(()=>Object.values(r.value).includes(e.localUid));function d(b){return r.value[b]||null}function f(b){const x=d(b);return x?o.value[x]||"Player":""}const _=j(()=>a.value?c.value?"All seats filled! Start the game.":`Waiting for players… (${l.value}/4)`:"Waiting for host to start…");async function y(){await ic(),n.value="Copied!",setTimeout(()=>{n.value=""},1200)}return(b,x)=>(O(),M("div",bS,[x[6]||(x[6]=m("h2",null,"Game Room",-1)),m("div",wS,[x[2]||(x[2]=m("div",{class:"label"},"Share this code",-1)),m("div",{class:"room-code",title:"Click to copy",onClick:y},A(n.value||w(e).currentGameId||"------"),1)]),m("div",IS,[x[4]||(x[4]=m("div",{class:"seat-header t1"},"Team 1 (Blue)",-1)),x[5]||(x[5]=m("div",{class:"seat-header t2"},"Team 2 (Red)",-1)),(O(),M(ue,null,Nt([0,1,2,3],F=>m("div",{key:F,class:ie(["seat-slot",{taken:!!d(F),mine:d(F)===w(e).localUid}])},[d(F)?(O(),M(ue,{key:0},[m("div",CS,A(f(F)),1),m("div",ES,A(s[F]),1),a.value&&d(F)!==w(e).localUid?(O(),M("button",{key:0,class:"seat-kick-btn",title:"Remove player",onClick:G=>w(ur)(F)},"✕ Remove",8,SS)):we("",!0)],64)):u.value?(O(),M(ue,{key:2},[m("div",RS,A(s[F]),1),x[3]||(x[3]=m("div",{style:{color:"#555","font-size":".85rem"}},"Empty",-1))],64)):(O(),M(ue,{key:1},[m("div",TS,A(s[F]),1),m("button",{onClick:G=>w(LE)(F)},"Take seat",8,kS)],64))],2)),64))]),m("div",null,A(_.value),1),m("div",PS,[a.value&&c.value?(O(),M("button",{key:0,class:"btn btn-primary",style:{padding:"12px 36px","font-size":"1rem"},onClick:x[0]||(x[0]=(...F)=>w(ed)&&w(ed)(...F))},"Start Game ▶")):we("",!0),m("button",{class:"btn btn-danger",style:{padding:"12px 28px","font-size":"1rem"},onClick:x[1]||(x[1]=(...F)=>w(Xt)&&w(Xt)(...F))}," Leave Room ")])]))}},AS={id:"bid-screen",class:"screen"},OS={class:"bid-hand"},xS={key:0,style:{color:"#ffa040","font-size":".8rem"}},DS={key:1,class:"bid-btns"},MS=["onClick"],LS={__name:"BidScreen",setup(t){const{gameState:e,playerName:n}=Ze(),{session:s}=Xe(),i=j(()=>s.localSeat===null||s.localSeat===e.bidder),r=j(()=>i.value?e.hands[e.bidder]??[]:[]),o=j(()=>r.value.length?Math.max(...r.value.map(_=>_.rank)):0),a=j(()=>o.value>=9),l=j(()=>r.value.some(_=>_.rank===9&&_.suit==="S")),c=j(()=>!a.value||o.value===9&&!l.value),u=j(()=>a.value?[...new Set(r.value.filter(_=>_.rank>=9).map(_=>_.rank))].sort((_,y)=>_-y):[]),d=j(()=>i.value?a.value?`${n(e.bidder)} – choose your bid (≥ 9). You need a matching key card in your hand.`:"No card ≥ 9 — redealing…":`Waiting for ${n(e.bidder)} to bid…`),f=j(()=>i.value&&c.value&&a.value?"You may pass (highest card is a non-♠ 9).":"");return Wt(a,_=>{!_&&i.value&&e.phase==="bid"&&setTimeout(na,1200)},{immediate:!0}),(_,y)=>(O(),M("div",AS,[y[2]||(y[2]=m("h2",null,"♠ Bid Phase",-1)),m("p",null,A(d.value),1),m("div",OS,[(O(!0),M(ue,null,Nt(r.value,(b,x)=>(O(),gs(To,{key:x,card:b,clickable:!1},null,8,["card"]))),128))]),f.value?(O(),M("p",xS,A(f.value),1)):we("",!0),i.value?(O(),M("div",DS,[(O(!0),M(ue,null,Nt(u.value,b=>(O(),M("button",{key:b,class:"bid-btn",onClick:x=>w(CE)(b)},"Bid "+A(w(J)(b))+" ("+A(b)+")",9,MS))),128)),c.value?(O(),M("button",{key:0,class:"bid-btn pass",onClick:y[0]||(y[0]=(...b)=>w(na)&&w(na)(...b))},"Pass (Redeal)")):we("",!0)])):we("",!0),m("button",{class:"btn btn-danger",style:{"margin-top":"8px",padding:"8px 24px","font-size":".9rem"},onClick:y[1]||(y[1]=(...b)=>w(Xt)&&w(Xt)(...b))}," Exit Game ")]))}},FS={key:0,class:"hidden-pile"},US={class:"pile-stack"},$S={class:"pile-label"},tr={__name:"PlayerHand",props:{count:{type:Number,required:!0}},setup(t){const e=t,n=j(()=>Math.min(3,e.count));return(s,i)=>t.count>0?(O(),M("div",FS,[m("div",US,[(O(!0),M(ue,null,Nt(n.value,r=>(O(),M("div",{key:r,class:"card face-down",style:Rs(`position:absolute;top:${(r-1)*4}px;left:${(r-1)*4}px;width:54px;height:76px;`)},null,4))),128))]),m("div",$S,A(t.count)+" cards",1)])):we("",!0)}},HS={class:"h-val"},BS={class:"h-count"},VS=["title"],WS={class:"pmc-rank"},jS={class:"pmc-suit"},GS={__name:"FloorHouse",props:{house:{type:Object,required:!0},selected:{type:Boolean,default:!1}},emits:["click","peek"],setup(t){const e=t,n=j(()=>Ql(e.house)),s=j(()=>J(e.house.value)),i=c=>vp(c.suit),r=j(()=>e.house.shared?"shared":e.house.pucca?"pucca":"doubled"),o=j(()=>e.house.shared?"shared":`t${e.house.team}`),a=j(()=>e.house.shared?"T1+T2":`T${e.house.team+1} P${e.house.owner+1}`),l=j(()=>e.house.cards.slice(-3).reverse());return(c,u)=>n.value?(O(),M("div",{key:0,class:ie(["house",[r.value,{selected:t.selected}]]),onClick:u[1]||(u[1]=d=>c.$emit("click"))},[m("div",HS,A(s.value),1),m("div",{class:ie(["h-badge",o.value])},A(a.value),3),m("div",BS,A(t.house.cards.length)+"c",1),m("button",{class:"house-peek-btn",title:"Peek cards",onClick:u[0]||(u[0]=gi(d=>c.$emit("peek",t.house),["stop"]))},"👁")],2)):(O(),M("div",{key:1,class:ie(["house-pile",{selected:t.selected}]),title:`Building house of ${s.value} — not yet doubled`,onClick:u[3]||(u[3]=d=>c.$emit("click"))},[(O(!0),M(ue,null,Nt(l.value,(d,f)=>(O(),M("div",{key:f,class:ie(["pile-mini-card",{red:i(d)}]),style:Rs(`top:${f*18}px;left:${f*4}px;z-index:${10-f};`)},[m("span",WS,A(w(J)(d.rank)),1),m("span",jS,A(w(gp)(d.suit)),1)],6))),128)),m("div",{class:ie(["h-pile-badge",`t${t.house.team}`])},A(s.value)+" ▸ T"+A(t.house.team+1),3),m("button",{class:"house-peek-btn",title:"Peek all cards",onClick:u[2]||(u[2]=gi(d=>c.$emit("peek",t.house),["stop"]))},"👁")],10,VS))}},KS={class:"floor-cards",id:"floor-area"},zS={key:0,class:"floor-empty"},qS={__name:"FloorArea",setup(t){const{gameState:e,ui:n,toggleFloor:s,openHousePeek:i}=Ze();return(r,o)=>(O(),M("div",KS,[w(e).floor.length?we("",!0):(O(),M("span",zS,"Empty floor")),(O(!0),M(ue,null,Nt(w(e).floor,(a,l)=>(O(),M(ue,{key:l},[a.type==="house"?(O(),gs(GS,{key:0,house:a,selected:w(n).selFloorIdxs.includes(l),onClick:c=>w(s)(l),onPeek:w(i)},null,8,["house","selected","onClick","onPeek"])):(O(),gs(To,{key:1,card:a.card,clickable:!0,selected:w(n).selFloorIdxs.includes(l),class:"floor-card",onClick:c=>w(s)(l)},null,8,["card","selected","onClick"]))],64))),128))]))}},YS={class:"active-hand-zone",id:"active-hand-zone"},JS={__name:"ActiveHand",setup(t){const{gameState:e,ui:n,selectHandCard:s}=Ze(),{session:i}=Xe(),r=j(()=>i.localSeat!==null?i.localSeat:e.currentPlayer),o=j(()=>i.localSeat===null||i.localSeat===e.currentPlayer),a=j(()=>e.hands[r.value]??[]);return(l,c)=>(O(),M("div",YS,[(O(!0),M(ue,null,Nt(a.value,(u,d)=>(O(),gs(To,{key:d,card:u,clickable:o.value,selected:w(n).selHandIdx===d,onClick:f=>o.value?w(s)(d):null},null,8,["card","clickable","selected","onClick"]))),128))]))}},QS={class:"g-actions"},XS={class:"turn-label"},ZS={class:"bid-disp"},eT={class:"action-btns"},tT=["disabled"],nT=["disabled"],sT=["disabled"],iT=["disabled"],rT=["disabled"],oT={class:"status-msg"},aT={__name:"ActionsPanel",setup(t){const{gameState:e,actions:n}=Ze(),{session:s}=Xe(),i=j(()=>{const _=e.currentPlayer;return`Player ${_+1}'s Turn (Team ${_%2+1})`}),r=j(()=>e.bidValue?`Bid: ${J(e.bidValue)} (${e.bidValue})`:""),o=j(()=>n.value.build||n.value.add),a=j(()=>e.finalEligible===null?!1:s.localSeat!==null?e.finalEligible===s.localSeat:!0);function l(){n.value.add?Ys("add"):n.value.build&&Ys("build")}const c=Re(null);let u=null;function d(){u&&(clearInterval(u),u=null),c.value=null}Wt(()=>e.finalEligible,_=>{d(),!(_===null||!(s.localSeat===null||s.localSeat===_))&&(c.value=5,u=setInterval(()=>{c.value--,c.value<=0&&(d(),kE())},1e3))});function f(){d(),RE()}return Xr(d),(_,y)=>(O(),M("div",QS,[m("div",XS,A(i.value),1),m("div",ZS,A(r.value),1),m("div",eT,[m("button",{class:"btn btn-throw",disabled:!w(n).throw,onClick:y[0]||(y[0]=b=>w(Ys)("throw"))},"Throw",8,tT),m("button",{class:"btn btn-pick",disabled:!w(n).pick,onClick:y[1]||(y[1]=b=>w(Ys)("pick"))},"Pick",8,nT),m("button",{class:"btn btn-house",disabled:!o.value,onClick:l},"House",8,sT),m("button",{class:"btn btn-seep btn-special",disabled:!w(n).seep,onClick:y[2]||(y[2]=b=>w(Ys)("seep"))},"Seep",8,iT),m("button",{class:"btn btn-final btn-special",disabled:!a.value,onClick:f}," Final"+A(c.value!==null?` (${c.value})`:""),9,rT)]),m("div",oT,A(w(n).msg),1)]))}},lT={id:"game-screen",class:"screen"},cT={class:"g-header"},uT={class:"g-scores"},dT={class:"g-round"},hT={class:"g-table"},fT={class:"cards-row"},pT={class:"cards-row"},_T={class:"floor-zone"},mT={class:"cap-row"},gT={class:"cards-row"},vT={class:"cards-row"},yT={__name:"GameScreen",setup(t){const{gameState:e,playerName:n}=Ze(),{session:s}=Xe(),i=j(()=>s.hostUid&&s.hostUid===s.localUid),r=Re("");async function o(){await ic(),r.value="Copied!",setTimeout(()=>{r.value=""},1200)}const a=c=>!!Cp.value[c];function l(c){return(e.captured[c]??[]).reduce((u,d)=>u+jr(d),0)+(e.seepBonus[c]??0)}return(c,u)=>{var d,f,_,y;return O(),M("div",lT,[m("div",cT,[u[5]||(u[5]=m("h1",null,"♠ SEEP",-1)),m("div",uT,[m("div",{class:ie(["g-score",{winning:w(e).scores[0]>w(e).scores[1]}])},[u[3]||(u[3]=nt(" Team 1: ",-1)),m("strong",null,A(w(e).scores[0]),1)],2),m("div",{class:ie(["g-score",{winning:w(e).scores[1]>w(e).scores[0]}])},[u[4]||(u[4]=nt(" Team 2: ",-1)),m("strong",null,A(w(e).scores[1]),1)],2)]),m("div",dT,"Round "+A(w(e).roundNum),1),w(s).currentGameId?(O(),M("div",{key:0,class:"g-room-code",title:"Click to copy",onClick:o},A(r.value||w(s).currentGameId),1)):we("",!0)]),m("div",hT,[m("div",{class:ie(["player-zone top",{active:w(e).currentPlayer===2}])},[m("div",fT,[ae(tr,{count:((d=w(e).hands[2])==null?void 0:d.length)??0},null,8,["count"])]),m("div",{class:ie(["p-label t0",{"active-lbl":w(e).currentPlayer===2}])},A(w(n)(2))+" · Team 1 ",3),i.value&&a(2)&&w(s).localSeat!==2?(O(),M("button",{key:0,class:"kick-btn",onClick:u[0]||(u[0]=b=>w(ur)(2)),title:"Remove player"},"✕")):we("",!0)],2),m("div",{class:ie(["player-zone left",{active:w(e).currentPlayer===1}])},[m("div",pT,[ae(tr,{count:((f=w(e).hands[1])==null?void 0:f.length)??0},null,8,["count"])]),m("div",{class:ie(["p-label t1",{"active-lbl":w(e).currentPlayer===1}])},A(w(n)(1))+"·T2 ",3),i.value&&a(1)&&w(s).localSeat!==1?(O(),M("button",{key:0,class:"kick-btn",onClick:u[1]||(u[1]=b=>w(ur)(1)),title:"Remove player"},"✕")):we("",!0)],2),m("div",_T,[u[8]||(u[8]=m("div",{class:"floor-label"},"TABLE",-1)),ae(qS),m("div",mT,[m("div",null,[u[6]||(u[6]=nt("T1 pts: ",-1)),m("span",null,A(l(0)),1)]),m("div",null,[u[7]||(u[7]=nt("T2 pts: ",-1)),m("span",null,A(l(1)),1)])])]),m("div",{class:ie(["player-zone right",{active:w(e).currentPlayer===3}])},[m("div",{class:ie(["p-label t1",{"active-lbl":w(e).currentPlayer===3}])},A(w(n)(3))+"·T2 ",3),m("div",gT,[ae(tr,{count:((_=w(e).hands[3])==null?void 0:_.length)??0},null,8,["count"])]),i.value&&a(3)&&w(s).localSeat!==3?(O(),M("button",{key:0,class:"kick-btn",onClick:u[2]||(u[2]=b=>w(ur)(3)),title:"Remove player"},"✕")):we("",!0)],2),m("div",{class:ie(["player-zone bottom",{active:w(e).currentPlayer===0}])},[m("div",{class:ie(["p-label t0",{"active-lbl":w(e).currentPlayer===0}])},A(w(n)(0))+" · Team 1 ",3),m("div",vT,[ae(tr,{count:((y=w(e).hands[0])==null?void 0:y.length)??0},null,8,["count"])])],2)]),ae(JS),ae(aT)])}}},bT={id:"roundend-screen",class:"screen"},wT={class:"score-table"},IT={class:"score-total"},CT={class:"cum-box"},ET={class:"cum-vals"},ST={style:{display:"flex",gap:"12px","flex-wrap":"wrap","justify-content":"center"}},TT={__name:"RoundEndScreen",setup(t){const{gameState:e}=Ze(),n=j(()=>e.scores[0]>=Wr||e.scores[1]>=Wr);function s(o,a){return(e.captured[o]??[]).filter(a).reduce((l,c)=>l+jr(c),0)}const i=j(()=>[["Spades (face value)",s(0,o=>o.suit==="S"),s(1,o=>o.suit==="S")],["10♦",s(0,o=>o.suit==="D"&&o.rank===10),s(1,o=>o.suit==="D"&&o.rank===10)],["Other Aces",s(0,o=>o.rank===1&&o.suit!=="S"),s(1,o=>o.rank===1&&o.suit!=="S")],["Seep Bonus",e.seepBonus[0]??0,e.seepBonus[1]??0]]);function r(){n.value?e.phase="gameover":NE()}return(o,a)=>(O(),M("div",bT,[m("h2",null,"Round "+A(w(e).roundNum)+" Complete",1),m("table",wT,[a[2]||(a[2]=m("thead",null,[m("tr",null,[m("th",null,"Category"),m("th",null,"Team 1"),m("th",null,"Team 2")])],-1)),m("tbody",null,[(O(!0),M(ue,null,Nt(i.value,l=>(O(),M("tr",{key:l[0]},[m("td",null,A(l[0]),1),m("td",null,A(l[1]),1),m("td",null,A(l[2]),1)]))),128)),m("tr",IT,[a[1]||(a[1]=m("td",null,"Round Total",-1)),m("td",null,A(w(e)._roundS0??0),1),m("td",null,A(w(e)._roundS1??0),1)])])]),m("div",CT,[a[5]||(a[5]=m("h3",null,"Cumulative Score",-1)),m("div",ET,[m("div",null,[a[3]||(a[3]=nt("Team 1: ",-1)),m("strong",null,A(w(e).scores[0]),1)]),m("div",null,[a[4]||(a[4]=nt("Team 2: ",-1)),m("strong",null,A(w(e).scores[1]),1)])])]),m("div",ST,[m("button",{class:"btn btn-primary",style:{"font-size":"1rem",padding:"10px 28px"},onClick:r},A(n.value?"See Results":"Next Round ▶"),1),m("button",{class:"btn btn-danger",style:{padding:"10px 24px","font-size":"1rem"},onClick:a[0]||(a[0]=(...l)=>w(Xt)&&w(Xt)(...l))}," Exit Game ")])]))}},kT={id:"gameover-screen",class:"screen"},RT={__name:"GameOverScreen",setup(t){const{gameState:e}=Ze(),{session:n}=Xe(),s=j(()=>{const r=e.scores[0],o=e.scores[1];return`🏆 ${r>o?"Team 1 (P1 & P3)":o>r?"Team 2 (P2 & P4)":"Both Teams (Tie!)"} Wins!`});async function i(){n.currentGameId?await Xt():wE()}return(r,o)=>(O(),M("div",kT,[m("h1",null,A(s.value),1),m("p",null,"Team 1: "+A(w(e).scores[0])+" pts | Team 2: "+A(w(e).scores[1])+" pts",1),m("button",{class:"btn btn-primary",style:{"font-size":"1rem",padding:"10px 28px"},onClick:i},A(w(n).currentGameId?"Back to Home":"New Game"),1)]))}},PT={__name:"App",setup(t){const{session:e}=Xe(),{gameState:n}=Ze();return Za(()=>{FE()}),(s,i)=>(O(),M(ue,null,[ae(WE),Dt(ae(yS,null,null,512),[[Zn,w(e).screen==="home"]]),Dt(ae(NS,null,null,512),[[Zn,w(e).screen==="room"]]),Dt(ae(LS,null,null,512),[[Zn,w(e).screen==="game"&&w(n).phase==="bid"]]),Dt(ae(yT,null,null,512),[[Zn,w(e).screen==="game"&&w(n).phase==="play"]]),Dt(ae(TT,null,null,512),[[Zn,w(e).screen==="game"&&w(n).phase==="roundend"]]),Dt(ae(RT,null,null,512),[[Zn,w(e).screen==="game"&&w(n).phase==="gameover"]]),ae(GE),ae(zE),ae(sS),ae(hS)],64))}};Jm(PT).mount("#app");
