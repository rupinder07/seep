(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Va(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const le={},rs=[],Et=()=>{},ad=()=>!1,Jr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Qr=t=>t.startsWith("onUpdate:"),Fe=Object.assign,Wa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Lp=Object.prototype.hasOwnProperty,te=(t,e)=>Lp.call(t,e),j=Array.isArray,os=t=>Pi(t)==="[object Map]",ld=t=>Pi(t)==="[object Set]",_c=t=>Pi(t)==="[object Date]",K=t=>typeof t=="function",we=t=>typeof t=="string",kt=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",cd=t=>(oe(t)||K(t))&&K(t.then)&&K(t.catch),ud=Object.prototype.toString,Pi=t=>ud.call(t),Fp=t=>Pi(t).slice(8,-1),dd=t=>Pi(t)==="[object Object]",ja=t=>we(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Xs=Va(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Up=/-\w/g,at=Xr(t=>t.replace(Up,e=>e.slice(1).toUpperCase())),$p=/\B([A-Z])/g,En=Xr(t=>t.replace($p,"-$1").toLowerCase()),hd=Xr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Oo=Xr(t=>t?`on${hd(t)}`:""),Ct=(t,e)=>!Object.is(t,e),or=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},fd=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Ga=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let mc;const Zr=()=>mc||(mc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ni(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=we(s)?Wp(s):Ni(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(we(t)||oe(t))return t}const Hp=/;(?![^(]*\))/g,Bp=/:([^]+)/,Vp=/\/\*[^]*?\*\//g;function Wp(t){const e={};return t.replace(Vp,"").split(Hp).forEach(n=>{if(n){const s=n.split(Bp);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function re(t){let e="";if(we(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const s=re(t[n]);s&&(e+=s+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const jp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gp=Va(jp);function pd(t){return!!t||t===""}function Kp(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ka(t[s],e[s]);return n}function Ka(t,e){if(t===e)return!0;let n=_c(t),s=_c(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=kt(t),s=kt(e),n||s)return t===e;if(n=j(t),s=j(e),n||s)return n&&s?Kp(t,e):!1;if(n=oe(t),s=oe(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ka(t[o],e[o]))return!1}}return String(t)===String(e)}const _d=t=>!!(t&&t.__v_isRef===!0),x=t=>we(t)?t:t==null?"":j(t)||oe(t)&&(t.toString===ud||!K(t.toString))?_d(t)?x(t.value):JSON.stringify(t,md,2):String(t),md=(t,e)=>_d(e)?md(t,e.value):os(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[xo(s,r)+" =>"]=i,n),{})}:ld(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>xo(n))}:kt(e)?xo(e):oe(e)&&!j(e)&&!dd(e)?String(e):e,xo=(t,e="")=>{var n;return kt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xe;class zp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=xe,!e&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=xe;try{return xe=this,e()}finally{xe=n}}}on(){++this._on===1&&(this.prevScope=xe,xe=this)}off(){if(this._on>0&&--this._on===0){if(xe===this)xe=this.prevScope;else{let e=xe;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function qp(){return xe}let he;const Do=new WeakSet;class gd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xe&&xe.active&&xe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Do.has(this)&&(Do.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||yd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gc(this),bd(this);const e=he,n=lt;he=this,lt=!0;try{return this.fn()}finally{wd(this),he=e,lt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ya(e);this.deps=this.depsTail=void 0,gc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Do.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){aa(this)&&this.run()}get dirty(){return aa(this)}}let vd=0,Zs,ei;function yd(t,e=!1){if(t.flags|=8,e){t.next=ei,ei=t;return}t.next=Zs,Zs=t}function za(){vd++}function qa(){if(--vd>0)return;if(ei){let e=ei;for(ei=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Zs;){let e=Zs;for(Zs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function bd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function wd(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Ya(s),Yp(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function aa(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Id(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Id(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===hi)||(t.globalVersion=hi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!aa(t))))return;t.flags|=2;const e=t.dep,n=he,s=lt;he=t,lt=!0;try{bd(t);const i=t.fn(t._value);(e.version===0||Ct(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{he=n,lt=s,wd(t),t.flags&=-3}}function Ya(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Ya(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Yp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let lt=!0;const Cd=[];function jt(){Cd.push(lt),lt=!1}function Gt(){const t=Cd.pop();lt=t===void 0?!0:t}function gc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=he;he=void 0;try{e()}finally{he=n}}}let hi=0;class Jp{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ja{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!he||!lt||he===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==he)n=this.activeLink=new Jp(he,this),he.deps?(n.prevDep=he.depsTail,he.depsTail.nextDep=n,he.depsTail=n):he.deps=he.depsTail=n,Ed(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=he.depsTail,n.nextDep=void 0,he.depsTail.nextDep=n,he.depsTail=n,he.deps===n&&(he.deps=s)}return n}trigger(e){this.version++,hi++,this.notify(e)}notify(e){za();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{qa()}}}function Ed(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Ed(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const la=new WeakMap,$n=Symbol(""),ca=Symbol(""),fi=Symbol("");function De(t,e,n){if(lt&&he){let s=la.get(t);s||la.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new Ja),i.map=s,i.key=n),i.track()}}function Dt(t,e,n,s,i,r){const o=la.get(t);if(!o){hi++;return}const a=l=>{l&&l.trigger()};if(za(),e==="clear")o.forEach(a);else{const l=j(t),c=l&&ja(n);if(l&&n==="length"){const u=Number(s);o.forEach((d,h)=>{(h==="length"||h===fi||!kt(h)&&h>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(fi)),e){case"add":l?c&&a(o.get("length")):(a(o.get($n)),os(t)&&a(o.get(ca)));break;case"delete":l||(a(o.get($n)),os(t)&&a(o.get(ca)));break;case"set":os(t)&&a(o.get($n));break}}qa()}function Xn(t){const e=ee(t);return e===t?e:(De(e,"iterate",fi),st(t)?e:e.map(ut))}function eo(t){return De(t=ee(t),"iterate",fi),t}function wt(t,e){return Kt(t)?ms(Hn(t)?ut(e):e):ut(e)}const Qp={__proto__:null,[Symbol.iterator](){return Mo(this,Symbol.iterator,t=>wt(this,t))},concat(...t){return Xn(this).concat(...t.map(e=>j(e)?Xn(e):e))},entries(){return Mo(this,"entries",t=>(t[1]=wt(this,t[1]),t))},every(t,e){return Nt(this,"every",t,e,void 0,arguments)},filter(t,e){return Nt(this,"filter",t,e,n=>n.map(s=>wt(this,s)),arguments)},find(t,e){return Nt(this,"find",t,e,n=>wt(this,n),arguments)},findIndex(t,e){return Nt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Nt(this,"findLast",t,e,n=>wt(this,n),arguments)},findLastIndex(t,e){return Nt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Nt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Lo(this,"includes",t)},indexOf(...t){return Lo(this,"indexOf",t)},join(t){return Xn(this).join(t)},lastIndexOf(...t){return Lo(this,"lastIndexOf",t)},map(t,e){return Nt(this,"map",t,e,void 0,arguments)},pop(){return Bs(this,"pop")},push(...t){return Bs(this,"push",t)},reduce(t,...e){return vc(this,"reduce",t,e)},reduceRight(t,...e){return vc(this,"reduceRight",t,e)},shift(){return Bs(this,"shift")},some(t,e){return Nt(this,"some",t,e,void 0,arguments)},splice(...t){return Bs(this,"splice",t)},toReversed(){return Xn(this).toReversed()},toSorted(t){return Xn(this).toSorted(t)},toSpliced(...t){return Xn(this).toSpliced(...t)},unshift(...t){return Bs(this,"unshift",t)},values(){return Mo(this,"values",t=>wt(this,t))}};function Mo(t,e,n){const s=eo(t),i=s[e]();return s!==t&&!st(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.done||(r.value=n(r.value)),r}),i}const Xp=Array.prototype;function Nt(t,e,n,s,i,r){const o=eo(t),a=o!==t&&!st(t),l=o[e];if(l!==Xp[e]){const d=l.apply(t,r);return a?ut(d):d}let c=n;o!==t&&(a?c=function(d,h){return n.call(this,wt(t,d),h,t)}:n.length>2&&(c=function(d,h){return n.call(this,d,h,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function vc(t,e,n,s){const i=eo(t),r=i!==t&&!st(t);let o=n,a=!1;i!==t&&(r?(a=s.length===0,o=function(c,u,d){return a&&(a=!1,c=wt(t,c)),n.call(this,c,wt(t,u),d,t)}):n.length>3&&(o=function(c,u,d){return n.call(this,c,u,d,t)}));const l=i[e](o,...s);return a?wt(t,l):l}function Lo(t,e,n){const s=ee(t);De(s,"iterate",fi);const i=s[e](...n);return(i===-1||i===!1)&&Za(n[0])?(n[0]=ee(n[0]),s[e](...n)):i}function Bs(t,e,n=[]){jt(),za();const s=ee(t)[e].apply(t,n);return qa(),Gt(),s}const Zp=Va("__proto__,__v_isRef,__isVue"),Sd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(kt));function e_(t){kt(t)||(t=String(t));const e=ee(this);return De(e,"has",t),e.hasOwnProperty(t)}class Td{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?u_:Nd:r?Pd:Rd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=j(e);if(!i){let l;if(o&&(l=Qp[n]))return l;if(n==="hasOwnProperty")return e_}const a=Reflect.get(e,n,Le(e)?e:s);if((kt(n)?Sd.has(n):Zp(n))||(i||De(e,"get",n),r))return a;if(Le(a)){const l=o&&ja(n)?a:a.value;return i&&oe(l)?da(l):l}return oe(a)?i?da(a):Xt(a):a}}class kd extends Td{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];const o=j(e)&&ja(n);if(!this._isShallow){const c=Kt(r);if(!st(s)&&!Kt(s)&&(r=ee(r),s=ee(s)),!o&&Le(r)&&!Le(s))return c||(r.value=s),!0}const a=o?Number(n)<e.length:te(e,n),l=Reflect.set(e,n,s,Le(e)?e:i);return e===ee(i)&&(a?Ct(s,r)&&Dt(e,"set",n,s):Dt(e,"add",n,s)),l}deleteProperty(e,n){const s=te(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Dt(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!kt(n)||!Sd.has(n))&&De(e,"has",n),s}ownKeys(e){return De(e,"iterate",j(e)?"length":$n),Reflect.ownKeys(e)}}class t_ extends Td{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const n_=new kd,s_=new t_,i_=new kd(!0);const ua=t=>t,Xi=t=>Reflect.getPrototypeOf(t);function r_(t,e,n){return function(...s){const i=this.__v_raw,r=ee(i),o=os(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?ua:e?ms:ut;return!e&&De(r,"iterate",l?ca:$n),Fe(Object.create(c),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}}})}}function Zi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function o_(t,e){const n={get(i){const r=this.__v_raw,o=ee(r),a=ee(i);t||(Ct(i,a)&&De(o,"get",i),De(o,"get",a));const{has:l}=Xi(o),c=e?ua:t?ms:ut;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&De(ee(i),"iterate",$n),i.size},has(i){const r=this.__v_raw,o=ee(r),a=ee(i);return t||(Ct(i,a)&&De(o,"has",i),De(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=ee(a),c=e?ua:t?ms:ut;return!t&&De(l,"iterate",$n),a.forEach((u,d)=>i.call(r,c(u),c(d),o))}};return Fe(n,t?{add:Zi("add"),set:Zi("set"),delete:Zi("delete"),clear:Zi("clear")}:{add(i){const r=ee(this),o=Xi(r),a=ee(i),l=!e&&!st(i)&&!Kt(i)?a:i;return o.has.call(r,l)||Ct(i,l)&&o.has.call(r,i)||Ct(a,l)&&o.has.call(r,a)||(r.add(l),Dt(r,"add",l,l)),this},set(i,r){!e&&!st(r)&&!Kt(r)&&(r=ee(r));const o=ee(this),{has:a,get:l}=Xi(o);let c=a.call(o,i);c||(i=ee(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?Ct(r,u)&&Dt(o,"set",i,r):Dt(o,"add",i,r),this},delete(i){const r=ee(this),{has:o,get:a}=Xi(r);let l=o.call(r,i);l||(i=ee(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&Dt(r,"delete",i,void 0),c},clear(){const i=ee(this),r=i.size!==0,o=i.clear();return r&&Dt(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=r_(i,t,e)}),n}function Qa(t,e){const n=o_(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(te(n,i)&&i in s?n:s,i,r)}const a_={get:Qa(!1,!1)},l_={get:Qa(!1,!0)},c_={get:Qa(!0,!1)};const Rd=new WeakMap,Pd=new WeakMap,Nd=new WeakMap,u_=new WeakMap;function d_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function h_(t){return t.__v_skip||!Object.isExtensible(t)?0:d_(Fp(t))}function Xt(t){return Kt(t)?t:Xa(t,!1,n_,a_,Rd)}function f_(t){return Xa(t,!1,i_,l_,Pd)}function da(t){return Xa(t,!0,s_,c_,Nd)}function Xa(t,e,n,s,i){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=h_(t);if(r===0)return t;const o=i.get(t);if(o)return o;const a=new Proxy(t,r===2?s:n);return i.set(t,a),a}function Hn(t){return Kt(t)?Hn(t.__v_raw):!!(t&&t.__v_isReactive)}function Kt(t){return!!(t&&t.__v_isReadonly)}function st(t){return!!(t&&t.__v_isShallow)}function Za(t){return t?!!t.__v_raw:!1}function ee(t){const e=t&&t.__v_raw;return e?ee(e):t}function p_(t){return!te(t,"__v_skip")&&Object.isExtensible(t)&&fd(t,"__v_skip",!0),t}const ut=t=>oe(t)?Xt(t):t,ms=t=>oe(t)?da(t):t;function Le(t){return t?t.__v_isRef===!0:!1}function Ce(t){return __(t,!1)}function __(t,e){return Le(t)?t:new m_(t,e)}class m_{constructor(e,n){this.dep=new Ja,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ee(e),this._value=n?e:ut(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||st(e)||Kt(e);e=s?e:ee(e),Ct(e,n)&&(this._rawValue=e,this._value=s?e:ut(e),this.dep.trigger())}}function b(t){return Le(t)?t.value:t}const g_={get:(t,e,n)=>e==="__v_raw"?t:b(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Le(i)&&!Le(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Ad(t){return Hn(t)?t:new Proxy(t,g_)}class v_{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ja(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=hi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&he!==this)return yd(this,!0),!0}get value(){const e=this.dep.track();return Id(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function y_(t,e,n=!1){let s,i;return K(t)?s=t:(s=t.get,i=t.set),new v_(s,i,n)}const er={},mr=new WeakMap;let An;function b_(t,e=!1,n=An){if(n){let s=mr.get(n);s||mr.set(n,s=[]),s.push(t)}}function w_(t,e,n=le){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=$=>i?$:st($)||i===!1||i===0?Mt($,1):Mt($);let u,d,h,m,v=!1,S=!1;if(Le(t)?(d=()=>t.value,v=st(t)):Hn(t)?(d=()=>c(t),v=!0):j(t)?(S=!0,v=t.some($=>Hn($)||st($)),d=()=>t.map($=>{if(Le($))return $.value;if(Hn($))return c($);if(K($))return l?l($,2):$()})):K(t)?e?d=l?()=>l(t,2):t:d=()=>{if(h){jt();try{h()}finally{Gt()}}const $=An;An=u;try{return l?l(t,3,[m]):t(m)}finally{An=$}}:d=Et,e&&i){const $=d,ye=i===!0?1/0:i;d=()=>Mt($(),ye)}const N=qp(),F=()=>{u.stop(),N&&N.active&&Wa(N.effects,u)};if(r&&e){const $=e;e=(...ye)=>{$(...ye),F()}}let L=S?new Array(t.length).fill(er):er;const J=$=>{if(!(!(u.flags&1)||!u.dirty&&!$))if(e){const ye=u.run();if(i||v||(S?ye.some((et,ze)=>Ct(et,L[ze])):Ct(ye,L))){h&&h();const et=An;An=u;try{const ze=[ye,L===er?void 0:S&&L[0]===er?[]:L,m];L=ye,l?l(e,3,ze):e(...ze)}finally{An=et}}}else u.run()};return a&&a(J),u=new gd(d),u.scheduler=o?()=>o(J,!1):J,m=$=>b_($,!1,u),h=u.onStop=()=>{const $=mr.get(u);if($){if(l)l($,4);else for(const ye of $)ye();mr.delete(u)}},e?s?J(!0):L=u.run():o?o(J.bind(null,!0),!0):u.run(),F.pause=u.pause.bind(u),F.resume=u.resume.bind(u),F.stop=F,F}function Mt(t,e=1/0,n){if(e<=0||!oe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Le(t))Mt(t.value,e,n);else if(j(t))for(let s=0;s<t.length;s++)Mt(t[s],e,n);else if(ld(t)||os(t))t.forEach(s=>{Mt(s,e,n)});else if(dd(t)){for(const s in t)Mt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Mt(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ai(t,e,n,s){try{return s?t(...s):t()}catch(i){to(i,e,n)}}function Rt(t,e,n,s){if(K(t)){const i=Ai(t,e,n,s);return i&&cd(i)&&i.catch(r=>{to(r,e,n)}),i}if(j(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Rt(t[r],e,n,s));return i}}function to(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||le;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(r){jt(),Ai(r,null,10,[t,l,c]),Gt();return}}I_(t,n,i,s,o)}function I_(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const He=[];let bt=-1;const as=[];let nn=null,ts=0;const Od=Promise.resolve();let gr=null;function xd(t){const e=gr||Od;return t?e.then(this?t.bind(this):t):e}function C_(t){let e=bt+1,n=He.length;for(;e<n;){const s=e+n>>>1,i=He[s],r=pi(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function el(t){if(!(t.flags&1)){const e=pi(t),n=He[He.length-1];!n||!(t.flags&2)&&e>=pi(n)?He.push(t):He.splice(C_(e),0,t),t.flags|=1,Dd()}}function Dd(){gr||(gr=Od.then(Ld))}function E_(t){j(t)?as.push(...t):nn&&t.id===-1?nn.splice(ts+1,0,t):t.flags&1||(as.push(t),t.flags|=1),Dd()}function yc(t,e,n=bt+1){for(;n<He.length;n++){const s=He[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;He.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Md(t){if(as.length){const e=[...new Set(as)].sort((n,s)=>pi(n)-pi(s));if(as.length=0,nn){nn.push(...e);return}for(nn=e,ts=0;ts<nn.length;ts++){const n=nn[ts];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}nn=null,ts=0}}const pi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ld(t){try{for(bt=0;bt<He.length;bt++){const e=He[bt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ai(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;bt<He.length;bt++){const e=He[bt];e&&(e.flags&=-2)}bt=-1,He.length=0,Md(),gr=null,(He.length||as.length)&&Ld()}}let tt=null,Fd=null;function vr(t){const e=tt;return tt=t,Fd=t&&t.type.__scopeId||null,e}function S_(t,e=tt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&Nc(-1);const r=vr(e);let o;try{o=t(...i)}finally{vr(r),s._d&&Nc(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ot(t,e){if(tt===null)return t;const n=oo(tt),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=le]=e[i];r&&(K(r)&&(r={mounted:r,updated:r}),r.deep&&Mt(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Pn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(jt(),Rt(l,n,8,[t.el,a,t,e]),Gt())}}function T_(t,e){if(Be){let n=Be.provides;const s=Be.parent&&Be.parent.provides;s===n&&(n=Be.provides=Object.create(s)),n[t]=e}}function ar(t,e,n=!1){const s=Em();if(s||ls){let i=ls?ls._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&K(e)?e.call(s&&s.proxy):e}}const k_=Symbol.for("v-scx"),R_=()=>ar(k_);function Vt(t,e,n){return Ud(t,e,n)}function Ud(t,e,n=le){const{immediate:s,deep:i,flush:r,once:o}=n,a=Fe({},n),l=e&&s||!e&&r!=="post";let c;if(mi){if(r==="sync"){const m=R_();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Et,m.resume=Et,m.pause=Et,m}}const u=Be;a.call=(m,v,S)=>Rt(m,u,v,S);let d=!1;r==="post"?a.scheduler=m=>{Ge(m,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(m,v)=>{v?m():el(m)}),a.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const h=w_(t,e,a);return mi&&(c?c.push(h):l&&h()),h}function P_(t,e,n){const s=this.proxy,i=we(t)?t.includes(".")?$d(s,t):()=>s[t]:t.bind(s,s);let r;K(e)?r=e:(r=e.handler,n=e);const o=Oi(this),a=Ud(i,r.bind(s),n);return o(),a}function $d(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const N_=Symbol("_vte"),A_=t=>t.__isTeleport,O_=Symbol("_leaveCb");function tl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,tl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Hd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function bc(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const yr=new WeakMap;function ti(t,e,n,s,i=!1){if(j(t)){t.forEach((S,N)=>ti(S,e&&(j(e)?e[N]:e),n,s,i));return}if(ni(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&ti(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?oo(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===le?a.refs={}:a.refs,d=a.setupState,h=ee(d),m=d===le?ad:S=>bc(u,S)?!1:te(h,S),v=(S,N)=>!(N&&bc(u,N));if(c!=null&&c!==l){if(wc(e),we(c))u[c]=null,m(c)&&(d[c]=null);else if(Le(c)){const S=e;v(c,S.k)&&(c.value=null),S.k&&(u[S.k]=null)}}if(K(l))Ai(l,a,12,[o,u]);else{const S=we(l),N=Le(l);if(S||N){const F=()=>{if(t.f){const L=S?m(l)?d[l]:u[l]:v()||!t.k?l.value:u[t.k];if(i)j(L)&&Wa(L,r);else if(j(L))L.includes(r)||L.push(r);else if(S)u[l]=[r],m(l)&&(d[l]=u[l]);else{const J=[r];v(l,t.k)&&(l.value=J),t.k&&(u[t.k]=J)}}else S?(u[l]=o,m(l)&&(d[l]=o)):N&&(v(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const L=()=>{F(),yr.delete(t)};L.id=-1,yr.set(t,L),Ge(L,n)}else wc(t),F()}}}function wc(t){const e=yr.get(t);e&&(e.flags|=8,yr.delete(t))}Zr().requestIdleCallback;Zr().cancelIdleCallback;const ni=t=>!!t.type.__asyncLoader,Bd=t=>t.type.__isKeepAlive;function x_(t,e){Vd(t,"a",e)}function D_(t,e){Vd(t,"da",e)}function Vd(t,e,n=Be){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(no(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Bd(i.parent.vnode)&&M_(s,e,n,i),i=i.parent}}function M_(t,e,n,s){const i=no(e,t,s,!0);so(()=>{Wa(s[e],i)},n)}function no(t,e,n=Be,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{jt();const a=Oi(n),l=Rt(e,n,t,o);return a(),Gt(),l});return s?i.unshift(r):i.push(r),r}}const Zt=t=>(e,n=Be)=>{(!mi||t==="sp")&&no(t,(...s)=>e(...s),n)},L_=Zt("bm"),nl=Zt("m"),F_=Zt("bu"),U_=Zt("u"),$_=Zt("bum"),so=Zt("um"),H_=Zt("sp"),B_=Zt("rtg"),V_=Zt("rtc");function W_(t,e=Be){no("ec",t,e)}const j_=Symbol.for("v-ndc");function zt(t,e,n,s){let i;const r=n,o=j(t);if(o||we(t)){const a=o&&Hn(t);let l=!1,c=!1;a&&(l=!st(t),c=Kt(t),t=eo(t)),i=new Array(t.length);for(let u=0,d=t.length;u<d;u++)i[u]=e(l?c?ms(ut(t[u])):ut(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(oe(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}const ha=t=>t?ch(t)?oo(t):ha(t.parent):null,si=Fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ha(t.parent),$root:t=>ha(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>jd(t),$forceUpdate:t=>t.f||(t.f=()=>{el(t.update)}),$nextTick:t=>t.n||(t.n=xd.bind(t.proxy)),$watch:t=>P_.bind(t)}),Fo=(t,e)=>t!==le&&!t.__isScriptSetup&&te(t,e),G_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Fo(s,e))return o[e]=1,s[e];if(i!==le&&te(i,e))return o[e]=2,i[e];if(te(r,e))return o[e]=3,r[e];if(n!==le&&te(n,e))return o[e]=4,n[e];fa&&(o[e]=0)}}const c=si[e];let u,d;if(c)return e==="$attrs"&&De(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==le&&te(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,te(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Fo(i,e)?(i[e]=n,!0):s!==le&&te(s,e)?(s[e]=n,!0):te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,props:r,type:o}},a){let l;return!!(n[a]||t!==le&&a[0]!=="$"&&te(t,a)||Fo(e,a)||te(r,a)||te(s,a)||te(si,a)||te(i.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ic(t){return j(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let fa=!0;function K_(t){const e=jd(t),n=t.proxy,s=t.ctx;fa=!1,e.beforeCreate&&Cc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:v,activated:S,deactivated:N,beforeDestroy:F,beforeUnmount:L,destroyed:J,unmounted:$,render:ye,renderTracked:et,renderTriggered:ze,errorCaptured:ft,serverPrefetch:en,expose:Pt,inheritAttrs:Fs,components:qi,directives:Yi,filters:No}=e;if(c&&z_(c,s,null),o)for(const me in o){const ue=o[me];K(ue)&&(s[me]=ue.bind(n))}if(i){const me=i.call(n,n);oe(me)&&(t.data=Xt(me))}if(fa=!0,r)for(const me in r){const ue=r[me],kn=K(ue)?ue.bind(n,n):K(ue.get)?ue.get.bind(n,n):Et,Ji=!K(ue)&&K(ue.set)?ue.set.bind(n):Et,Rn=G({get:kn,set:Ji});Object.defineProperty(s,me,{enumerable:!0,configurable:!0,get:()=>Rn.value,set:pt=>Rn.value=pt})}if(a)for(const me in a)Wd(a[me],s,n,me);if(l){const me=K(l)?l.call(n):l;Reflect.ownKeys(me).forEach(ue=>{T_(ue,me[ue])})}u&&Cc(u,t,"c");function Ue(me,ue){j(ue)?ue.forEach(kn=>me(kn.bind(n))):ue&&me(ue.bind(n))}if(Ue(L_,d),Ue(nl,h),Ue(F_,m),Ue(U_,v),Ue(x_,S),Ue(D_,N),Ue(W_,ft),Ue(V_,et),Ue(B_,ze),Ue($_,L),Ue(so,$),Ue(H_,en),j(Pt))if(Pt.length){const me=t.exposed||(t.exposed={});Pt.forEach(ue=>{Object.defineProperty(me,ue,{get:()=>n[ue],set:kn=>n[ue]=kn,enumerable:!0})})}else t.exposed||(t.exposed={});ye&&t.render===Et&&(t.render=ye),Fs!=null&&(t.inheritAttrs=Fs),qi&&(t.components=qi),Yi&&(t.directives=Yi),en&&Hd(t)}function z_(t,e,n=Et){j(t)&&(t=pa(t));for(const s in t){const i=t[s];let r;oe(i)?"default"in i?r=ar(i.from||s,i.default,!0):r=ar(i.from||s):r=ar(i),Le(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Cc(t,e,n){Rt(j(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Wd(t,e,n,s){let i=s.includes(".")?$d(n,s):()=>n[s];if(we(t)){const r=e[t];K(r)&&Vt(i,r)}else if(K(t))Vt(i,t.bind(n));else if(oe(t))if(j(t))t.forEach(r=>Wd(r,e,n,s));else{const r=K(t.handler)?t.handler.bind(n):e[t.handler];K(r)&&Vt(i,r,t)}}function jd(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>br(l,c,o,!0)),br(l,e,o)),oe(e)&&r.set(e,l),l}function br(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&br(t,r,n,!0),i&&i.forEach(o=>br(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=q_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const q_={data:Ec,props:Sc,emits:Sc,methods:Js,computed:Js,beforeCreate:$e,created:$e,beforeMount:$e,mounted:$e,beforeUpdate:$e,updated:$e,beforeDestroy:$e,beforeUnmount:$e,destroyed:$e,unmounted:$e,activated:$e,deactivated:$e,errorCaptured:$e,serverPrefetch:$e,components:Js,directives:Js,watch:J_,provide:Ec,inject:Y_};function Ec(t,e){return e?t?function(){return Fe(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function Y_(t,e){return Js(pa(t),pa(e))}function pa(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function $e(t,e){return t?[...new Set([].concat(t,e))]:e}function Js(t,e){return t?Fe(Object.create(null),t,e):e}function Sc(t,e){return t?j(t)&&j(e)?[...new Set([...t,...e])]:Fe(Object.create(null),Ic(t),Ic(e??{})):e}function J_(t,e){if(!t)return e;if(!e)return t;const n=Fe(Object.create(null),t);for(const s in e)n[s]=$e(t[s],e[s]);return n}function Gd(){return{app:null,config:{isNativeTag:ad,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Q_=0;function X_(t,e){return function(s,i=null){K(s)||(s=Fe({},s)),i!=null&&!oe(i)&&(i=null);const r=Gd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Q_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Nm,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&K(u.install)?(o.add(u),u.install(c,...d)):K(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,h){if(!l){const m=c._ceVNode||se(s,i);return m.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),t(m,u,h),l=!0,c._container=u,u.__vue_app__=c,oo(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Rt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=ls;ls=c;try{return u()}finally{ls=d}}};return c}}let ls=null;const Z_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${at(e)}Modifiers`]||t[`${En(e)}Modifiers`];function em(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||le;let i=n;const r=e.startsWith("update:"),o=r&&Z_(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>we(u)?u.trim():u)),o.number&&(i=n.map(Ga)));let a,l=s[a=Oo(e)]||s[a=Oo(at(e))];!l&&r&&(l=s[a=Oo(En(e))]),l&&Rt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Rt(c,t,6,i)}}const tm=new WeakMap;function Kd(t,e,n=!1){const s=n?tm:e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!K(t)){const l=c=>{const u=Kd(c,e,!0);u&&(a=!0,Fe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(oe(t)&&s.set(t,null),null):(j(r)?r.forEach(l=>o[l]=null):Fe(o,r),oe(t)&&s.set(t,o),o)}function io(t,e){return!t||!Jr(e)?!1:(e=e.slice(2).replace(/Once$/,""),te(t,e[0].toLowerCase()+e.slice(1))||te(t,En(e))||te(t,e))}function Tc(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:h,setupState:m,ctx:v,inheritAttrs:S}=t,N=vr(t);let F,L;try{if(n.shapeFlag&4){const $=i||s,ye=$;F=It(c.call(ye,$,u,d,m,h,v)),L=a}else{const $=e;F=It($.length>1?$(d,{attrs:a,slots:o,emit:l}):$(d,null)),L=e.props?a:nm(a)}}catch($){ii.length=0,to($,t,1),F=se(gn)}let J=F;if(L&&S!==!1){const $=Object.keys(L),{shapeFlag:ye}=J;$.length&&ye&7&&(r&&$.some(Qr)&&(L=sm(L,r)),J=vs(J,L,!1,!0))}return n.dirs&&(J=vs(J,null,!1,!0),J.dirs=J.dirs?J.dirs.concat(n.dirs):n.dirs),n.transition&&tl(J,n.transition),F=J,vr(N),F}const nm=t=>{let e;for(const n in t)(n==="class"||n==="style"||Jr(n))&&((e||(e={}))[n]=t[n]);return e},sm=(t,e)=>{const n={};for(const s in t)(!Qr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function im(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?kc(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(zd(o,s,h)&&!io(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?kc(s,o,c):!0:!!o;return!1}function kc(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(zd(e,t,r)&&!io(n,r))return!0}return!1}function zd(t,e,n){const s=t[n],i=e[n];return n==="style"&&oe(s)&&oe(i)?!Ka(s,i):s!==i}function rm({vnode:t,parent:e,suspense:n},s){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.suspense.vnode.el=i.el=s,t=i),i===t)(t=e.vnode).el=s,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=s)}const qd={},Yd=()=>Object.create(qd),Jd=t=>Object.getPrototypeOf(t)===qd;function om(t,e,n,s=!1){const i={},r=Yd();t.propsDefaults=Object.create(null),Qd(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:f_(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function am(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ee(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(io(t.emitsOptions,h))continue;const m=e[h];if(l)if(te(r,h))m!==r[h]&&(r[h]=m,c=!0);else{const v=at(h);i[v]=_a(l,a,v,m,t,!1)}else m!==r[h]&&(r[h]=m,c=!0)}}}else{Qd(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!te(e,d)&&((u=En(d))===d||!te(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=_a(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!te(e,d))&&(delete r[d],c=!0)}c&&Dt(t.attrs,"set","")}function Qd(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Xs(l))continue;const c=e[l];let u;i&&te(i,u=at(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:io(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ee(n),c=a||le;for(let u=0;u<r.length;u++){const d=r[u];n[d]=_a(i,l,d,c[d],t,!te(c,d))}}return o}function _a(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=te(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&K(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Oi(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===En(n))&&(s=!0))}return s}const lm=new WeakMap;function Xd(t,e,n=!1){const s=n?lm:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!K(t)){const u=d=>{l=!0;const[h,m]=Xd(d,e,!0);Fe(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return oe(t)&&s.set(t,rs),rs;if(j(r))for(let u=0;u<r.length;u++){const d=at(r[u]);Rc(d)&&(o[d]=le)}else if(r)for(const u in r){const d=at(u);if(Rc(d)){const h=r[u],m=o[d]=j(h)||K(h)?{type:h}:Fe({},h),v=m.type;let S=!1,N=!0;if(j(v))for(let F=0;F<v.length;++F){const L=v[F],J=K(L)&&L.name;if(J==="Boolean"){S=!0;break}else J==="String"&&(N=!1)}else S=K(v)&&v.name==="Boolean";m[0]=S,m[1]=N,(S||te(m,"default"))&&a.push(d)}}const c=[o,a];return oe(t)&&s.set(t,c),c}function Rc(t){return t[0]!=="$"&&!Xs(t)}const sl=t=>t==="_"||t==="_ctx"||t==="$stable",il=t=>j(t)?t.map(It):[It(t)],cm=(t,e,n)=>{if(e._n)return e;const s=S_((...i)=>il(e(...i)),n);return s._c=!1,s},Zd=(t,e,n)=>{const s=t._ctx;for(const i in t){if(sl(i))continue;const r=t[i];if(K(r))e[i]=cm(i,r,s);else if(r!=null){const o=il(r);e[i]=()=>o}}},eh=(t,e)=>{const n=il(e);t.slots.default=()=>n},th=(t,e,n)=>{for(const s in e)(n||!sl(s))&&(t[s]=e[s])},um=(t,e,n)=>{const s=t.slots=Yd();if(t.vnode.shapeFlag&32){const i=e._;i?(th(s,e,n),n&&fd(s,"_",i,!0)):Zd(e,s)}else e&&eh(t,e)},dm=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=le;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:th(i,e,n):(r=!e.$stable,Zd(e,i)),o=e}else e&&(eh(t,e),o={default:1});if(r)for(const a in i)!sl(a)&&o[a]==null&&delete i[a]},Ge=mm;function hm(t){return fm(t)}function fm(t,e){const n=Zr();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=Et,insertStaticContent:v}=t,S=(f,p,g,E=null,w=null,I=null,P=void 0,R=null,k=!!p.dynamicChildren)=>{if(f===p)return;f&&!Vs(f,p)&&(E=Qi(f),pt(f,w,I,!0),f=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:C,ref:H,shapeFlag:O}=p;switch(C){case ro:N(f,p,g,E);break;case gn:F(f,p,g,E);break;case $o:f==null&&L(p,g,E,P);break;case pe:qi(f,p,g,E,w,I,P,R,k);break;default:O&1?ye(f,p,g,E,w,I,P,R,k):O&6?Yi(f,p,g,E,w,I,P,R,k):(O&64||O&128)&&C.process(f,p,g,E,w,I,P,R,k,$s)}H!=null&&w?ti(H,f&&f.ref,I,p||f,!p):H==null&&f&&f.ref!=null&&ti(f.ref,null,I,f,!0)},N=(f,p,g,E)=>{if(f==null)s(p.el=a(p.children),g,E);else{const w=p.el=f.el;p.children!==f.children&&c(w,p.children)}},F=(f,p,g,E)=>{f==null?s(p.el=l(p.children||""),g,E):p.el=f.el},L=(f,p,g,E)=>{[f.el,f.anchor]=v(f.children,p,g,E,f.el,f.anchor)},J=({el:f,anchor:p},g,E)=>{let w;for(;f&&f!==p;)w=h(f),s(f,g,E),f=w;s(p,g,E)},$=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=h(f),i(f),f=g;i(p)},ye=(f,p,g,E,w,I,P,R,k)=>{if(p.type==="svg"?P="svg":p.type==="math"&&(P="mathml"),f==null)et(p,g,E,w,I,P,R,k);else{const C=f.el&&f.el._isVueCE?f.el:null;try{C&&C._beginPatch(),en(f,p,w,I,P,R,k)}finally{C&&C._endPatch()}}},et=(f,p,g,E,w,I,P,R)=>{let k,C;const{props:H,shapeFlag:O,transition:U,dirs:V}=f;if(k=f.el=o(f.type,I,H&&H.is,H),O&8?u(k,f.children):O&16&&ft(f.children,k,null,E,w,Uo(f,I),P,R),V&&Pn(f,null,E,"created"),ze(k,f,f.scopeId,P,E),H){for(const ae in H)ae!=="value"&&!Xs(ae)&&r(k,ae,null,H[ae],I,E);"value"in H&&r(k,"value",null,H.value,I),(C=H.onVnodeBeforeMount)&&vt(C,E,f)}V&&Pn(f,null,E,"beforeMount");const X=pm(w,U);X&&U.beforeEnter(k),s(k,p,g),((C=H&&H.onVnodeMounted)||X||V)&&Ge(()=>{try{C&&vt(C,E,f),X&&U.enter(k),V&&Pn(f,null,E,"mounted")}finally{}},w)},ze=(f,p,g,E,w)=>{if(g&&m(f,g),E)for(let I=0;I<E.length;I++)m(f,E[I]);if(w){let I=w.subTree;if(p===I||rh(I.type)&&(I.ssContent===p||I.ssFallback===p)){const P=w.vnode;ze(f,P,P.scopeId,P.slotScopeIds,w.parent)}}},ft=(f,p,g,E,w,I,P,R,k=0)=>{for(let C=k;C<f.length;C++){const H=f[C]=R?xt(f[C]):It(f[C]);S(null,H,p,g,E,w,I,P,R)}},en=(f,p,g,E,w,I,P)=>{const R=p.el=f.el;let{patchFlag:k,dynamicChildren:C,dirs:H}=p;k|=f.patchFlag&16;const O=f.props||le,U=p.props||le;let V;if(g&&Nn(g,!1),(V=U.onVnodeBeforeUpdate)&&vt(V,g,p,f),H&&Pn(p,f,g,"beforeUpdate"),g&&Nn(g,!0),(O.innerHTML&&U.innerHTML==null||O.textContent&&U.textContent==null)&&u(R,""),C?Pt(f.dynamicChildren,C,R,g,E,Uo(p,w),I):P||ue(f,p,R,null,g,E,Uo(p,w),I,!1),k>0){if(k&16)Fs(R,O,U,g,w);else if(k&2&&O.class!==U.class&&r(R,"class",null,U.class,w),k&4&&r(R,"style",O.style,U.style,w),k&8){const X=p.dynamicProps;for(let ae=0;ae<X.length;ae++){const de=X[ae],Ie=O[de],Oe=U[de];(Oe!==Ie||de==="value")&&r(R,de,Ie,Oe,w,g)}}k&1&&f.children!==p.children&&u(R,p.children)}else!P&&C==null&&Fs(R,O,U,g,w);((V=U.onVnodeUpdated)||H)&&Ge(()=>{V&&vt(V,g,p,f),H&&Pn(p,f,g,"updated")},E)},Pt=(f,p,g,E,w,I,P)=>{for(let R=0;R<p.length;R++){const k=f[R],C=p[R],H=k.el&&(k.type===pe||!Vs(k,C)||k.shapeFlag&198)?d(k.el):g;S(k,C,H,null,E,w,I,P,!0)}},Fs=(f,p,g,E,w)=>{if(p!==g){if(p!==le)for(const I in p)!Xs(I)&&!(I in g)&&r(f,I,p[I],null,w,E);for(const I in g){if(Xs(I))continue;const P=g[I],R=p[I];P!==R&&I!=="value"&&r(f,I,R,P,w,E)}"value"in g&&r(f,"value",p.value,g.value,w)}},qi=(f,p,g,E,w,I,P,R,k)=>{const C=p.el=f?f.el:a(""),H=p.anchor=f?f.anchor:a("");let{patchFlag:O,dynamicChildren:U,slotScopeIds:V}=p;V&&(R=R?R.concat(V):V),f==null?(s(C,g,E),s(H,g,E),ft(p.children||[],g,H,w,I,P,R,k)):O>0&&O&64&&U&&f.dynamicChildren&&f.dynamicChildren.length===U.length?(Pt(f.dynamicChildren,U,g,w,I,P,R),(p.key!=null||w&&p===w.subTree)&&nh(f,p,!0)):ue(f,p,g,H,w,I,P,R,k)},Yi=(f,p,g,E,w,I,P,R,k)=>{p.slotScopeIds=R,f==null?p.shapeFlag&512?w.ctx.activate(p,g,E,P,k):No(p,g,E,w,I,P,k):cc(f,p,k)},No=(f,p,g,E,w,I,P)=>{const R=f.component=Cm(f,E,w);if(Bd(f)&&(R.ctx.renderer=$s),Sm(R,!1,P),R.asyncDep){if(w&&w.registerDep(R,Ue,P),!f.el){const k=R.subTree=se(gn);F(null,k,p,g),f.placeholder=k.el}}else Ue(R,f,p,g,w,I,P)},cc=(f,p,g)=>{const E=p.component=f.component;if(im(f,p,g))if(E.asyncDep&&!E.asyncResolved){me(E,p,g);return}else E.next=p,E.update();else p.el=f.el,E.vnode=p},Ue=(f,p,g,E,w,I,P)=>{const R=()=>{if(f.isMounted){let{next:O,bu:U,u:V,parent:X,vnode:ae}=f;{const mt=sh(f);if(mt){O&&(O.el=ae.el,me(f,O,P)),mt.asyncDep.then(()=>{Ge(()=>{f.isUnmounted||C()},w)});return}}let de=O,Ie;Nn(f,!1),O?(O.el=ae.el,me(f,O,P)):O=ae,U&&or(U),(Ie=O.props&&O.props.onVnodeBeforeUpdate)&&vt(Ie,X,O,ae),Nn(f,!0);const Oe=Tc(f),_t=f.subTree;f.subTree=Oe,S(_t,Oe,d(_t.el),Qi(_t),f,w,I),O.el=Oe.el,de===null&&rm(f,Oe.el),V&&Ge(V,w),(Ie=O.props&&O.props.onVnodeUpdated)&&Ge(()=>vt(Ie,X,O,ae),w)}else{let O;const{el:U,props:V}=p,{bm:X,m:ae,parent:de,root:Ie,type:Oe}=f,_t=ni(p);Nn(f,!1),X&&or(X),!_t&&(O=V&&V.onVnodeBeforeMount)&&vt(O,de,p),Nn(f,!0);{Ie.ce&&Ie.ce._hasShadowRoot()&&Ie.ce._injectChildStyle(Oe,f.parent?f.parent.type:void 0);const mt=f.subTree=Tc(f);S(null,mt,g,E,f,w,I),p.el=mt.el}if(ae&&Ge(ae,w),!_t&&(O=V&&V.onVnodeMounted)){const mt=p;Ge(()=>vt(O,de,mt),w)}(p.shapeFlag&256||de&&ni(de.vnode)&&de.vnode.shapeFlag&256)&&f.a&&Ge(f.a,w),f.isMounted=!0,p=g=E=null}};f.scope.on();const k=f.effect=new gd(R);f.scope.off();const C=f.update=k.run.bind(k),H=f.job=k.runIfDirty.bind(k);H.i=f,H.id=f.uid,k.scheduler=()=>el(H),Nn(f,!0),C()},me=(f,p,g)=>{p.component=f;const E=f.vnode.props;f.vnode=p,f.next=null,am(f,p.props,E,g),dm(f,p.children,g),jt(),yc(f),Gt()},ue=(f,p,g,E,w,I,P,R,k=!1)=>{const C=f&&f.children,H=f?f.shapeFlag:0,O=p.children,{patchFlag:U,shapeFlag:V}=p;if(U>0){if(U&128){Ji(C,O,g,E,w,I,P,R,k);return}else if(U&256){kn(C,O,g,E,w,I,P,R,k);return}}V&8?(H&16&&Us(C,w,I),O!==C&&u(g,O)):H&16?V&16?Ji(C,O,g,E,w,I,P,R,k):Us(C,w,I,!0):(H&8&&u(g,""),V&16&&ft(O,g,E,w,I,P,R,k))},kn=(f,p,g,E,w,I,P,R,k)=>{f=f||rs,p=p||rs;const C=f.length,H=p.length,O=Math.min(C,H);let U;for(U=0;U<O;U++){const V=p[U]=k?xt(p[U]):It(p[U]);S(f[U],V,g,null,w,I,P,R,k)}C>H?Us(f,w,I,!0,!1,O):ft(p,g,E,w,I,P,R,k,O)},Ji=(f,p,g,E,w,I,P,R,k)=>{let C=0;const H=p.length;let O=f.length-1,U=H-1;for(;C<=O&&C<=U;){const V=f[C],X=p[C]=k?xt(p[C]):It(p[C]);if(Vs(V,X))S(V,X,g,null,w,I,P,R,k);else break;C++}for(;C<=O&&C<=U;){const V=f[O],X=p[U]=k?xt(p[U]):It(p[U]);if(Vs(V,X))S(V,X,g,null,w,I,P,R,k);else break;O--,U--}if(C>O){if(C<=U){const V=U+1,X=V<H?p[V].el:E;for(;C<=U;)S(null,p[C]=k?xt(p[C]):It(p[C]),g,X,w,I,P,R,k),C++}}else if(C>U)for(;C<=O;)pt(f[C],w,I,!0),C++;else{const V=C,X=C,ae=new Map;for(C=X;C<=U;C++){const qe=p[C]=k?xt(p[C]):It(p[C]);qe.key!=null&&ae.set(qe.key,C)}let de,Ie=0;const Oe=U-X+1;let _t=!1,mt=0;const Hs=new Array(Oe);for(C=0;C<Oe;C++)Hs[C]=0;for(C=V;C<=O;C++){const qe=f[C];if(Ie>=Oe){pt(qe,w,I,!0);continue}let gt;if(qe.key!=null)gt=ae.get(qe.key);else for(de=X;de<=U;de++)if(Hs[de-X]===0&&Vs(qe,p[de])){gt=de;break}gt===void 0?pt(qe,w,I,!0):(Hs[gt-X]=C+1,gt>=mt?mt=gt:_t=!0,S(qe,p[gt],g,null,w,I,P,R,k),Ie++)}const hc=_t?_m(Hs):rs;for(de=hc.length-1,C=Oe-1;C>=0;C--){const qe=X+C,gt=p[qe],fc=p[qe+1],pc=qe+1<H?fc.el||ih(fc):E;Hs[C]===0?S(null,gt,g,pc,w,I,P,R,k):_t&&(de<0||C!==hc[de]?Rn(gt,g,pc,2):de--)}}},Rn=(f,p,g,E,w=null)=>{const{el:I,type:P,transition:R,children:k,shapeFlag:C}=f;if(C&6){Rn(f.component.subTree,p,g,E);return}if(C&128){f.suspense.move(p,g,E);return}if(C&64){P.move(f,p,g,$s);return}if(P===pe){s(I,p,g);for(let O=0;O<k.length;O++)Rn(k[O],p,g,E);s(f.anchor,p,g);return}if(P===$o){J(f,p,g);return}if(E!==2&&C&1&&R)if(E===0)R.beforeEnter(I),s(I,p,g),Ge(()=>R.enter(I),w);else{const{leave:O,delayLeave:U,afterLeave:V}=R,X=()=>{f.ctx.isUnmounted?i(I):s(I,p,g)},ae=()=>{I._isLeaving&&I[O_](!0),O(I,()=>{X(),V&&V()})};U?U(I,X,ae):ae()}else s(I,p,g)},pt=(f,p,g,E=!1,w=!1)=>{const{type:I,props:P,ref:R,children:k,dynamicChildren:C,shapeFlag:H,patchFlag:O,dirs:U,cacheIndex:V,memo:X}=f;if(O===-2&&(w=!1),R!=null&&(jt(),ti(R,null,g,f,!0),Gt()),V!=null&&(p.renderCache[V]=void 0),H&256){p.ctx.deactivate(f);return}const ae=H&1&&U,de=!ni(f);let Ie;if(de&&(Ie=P&&P.onVnodeBeforeUnmount)&&vt(Ie,p,f),H&6)Mp(f.component,g,E);else{if(H&128){f.suspense.unmount(g,E);return}ae&&Pn(f,null,p,"beforeUnmount"),H&64?f.type.remove(f,p,g,$s,E):C&&!C.hasOnce&&(I!==pe||O>0&&O&64)?Us(C,p,g,!1,!0):(I===pe&&O&384||!w&&H&16)&&Us(k,p,g),E&&uc(f)}const Oe=X!=null&&V==null;(de&&(Ie=P&&P.onVnodeUnmounted)||ae||Oe)&&Ge(()=>{Ie&&vt(Ie,p,f),ae&&Pn(f,null,p,"unmounted"),Oe&&(f.el=null)},g)},uc=f=>{const{type:p,el:g,anchor:E,transition:w}=f;if(p===pe){Dp(g,E);return}if(p===$o){$(f);return}const I=()=>{i(g),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:P,delayLeave:R}=w,k=()=>P(g,I);R?R(f.el,I,k):k()}else I()},Dp=(f,p)=>{let g;for(;f!==p;)g=h(f),i(f),f=g;i(p)},Mp=(f,p,g)=>{const{bum:E,scope:w,job:I,subTree:P,um:R,m:k,a:C}=f;Pc(k),Pc(C),E&&or(E),w.stop(),I&&(I.flags|=8,pt(P,f,p,g)),R&&Ge(R,p),Ge(()=>{f.isUnmounted=!0},p)},Us=(f,p,g,E=!1,w=!1,I=0)=>{for(let P=I;P<f.length;P++)pt(f[P],p,g,E,w)},Qi=f=>{if(f.shapeFlag&6)return Qi(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=h(f.anchor||f.el),g=p&&p[N_];return g?h(g):p};let Ao=!1;const dc=(f,p,g)=>{let E;f==null?p._vnode&&(pt(p._vnode,null,null,!0),E=p._vnode.component):S(p._vnode||null,f,p,null,null,null,g),p._vnode=f,Ao||(Ao=!0,yc(E),Md(),Ao=!1)},$s={p:S,um:pt,m:Rn,r:uc,mt:No,mc:ft,pc:ue,pbc:Pt,n:Qi,o:t};return{render:dc,hydrate:void 0,createApp:X_(dc)}}function Uo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Nn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function pm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function nh(t,e,n=!1){const s=t.children,i=e.children;if(j(s)&&j(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=xt(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&nh(o,a)),a.type===ro&&(a.patchFlag===-1&&(a=i[r]=xt(a)),a.el=o.el),a.type===gn&&!a.el&&(a.el=o.el)}}function _m(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function sh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:sh(e)}function Pc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function ih(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?ih(e.subTree):null}const rh=t=>t.__isSuspense;function mm(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):E_(t)}const pe=Symbol.for("v-fgt"),ro=Symbol.for("v-txt"),gn=Symbol.for("v-cmt"),$o=Symbol.for("v-stc"),ii=[];let Ye=null;function D(t=!1){ii.push(Ye=t?null:[])}function gm(){ii.pop(),Ye=ii[ii.length-1]||null}let _i=1;function Nc(t,e=!1){_i+=t,t<0&&Ye&&e&&(Ye.hasOnce=!0)}function oh(t){return t.dynamicChildren=_i>0?Ye||rs:null,gm(),_i>0&&Ye&&Ye.push(t),t}function M(t,e,n,s,i,r){return oh(_(t,e,n,s,i,r,!0))}function gs(t,e,n,s,i){return oh(se(t,e,n,s,i,!0))}function ah(t){return t?t.__v_isVNode===!0:!1}function Vs(t,e){return t.type===e.type&&t.key===e.key}const lh=({key:t})=>t??null,lr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?we(t)||Le(t)||K(t)?{i:tt,r:t,k:e,f:!!n}:t:null);function _(t,e=null,n=null,s=0,i=null,r=t===pe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&lh(e),ref:e&&lr(e),scopeId:Fd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:tt};return a?(rl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=we(n)?8:16),_i>0&&!o&&Ye&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ye.push(l),l}const se=vm;function vm(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===j_)&&(t=gn),ah(t)){const a=vs(t,e,!0);return n&&rl(a,n),_i>0&&!r&&Ye&&(a.shapeFlag&6?Ye[Ye.indexOf(t)]=a:Ye.push(a)),a.patchFlag=-2,a}if(Pm(t)&&(t=t.__vccOpts),e){e=ym(e);let{class:a,style:l}=e;a&&!we(a)&&(e.class=re(a)),oe(l)&&(Za(l)&&!j(l)&&(l=Fe({},l)),e.style=Ni(l))}const o=we(t)?1:rh(t)?128:A_(t)?64:oe(t)?4:K(t)?2:0;return _(t,e,n,s,i,o,r,!0)}function ym(t){return t?Za(t)||Jd(t)?Fe({},t):t:null}function vs(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?bm(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&lh(c),ref:e&&e.ref?n&&r?j(r)?r.concat(lr(e)):[r,lr(e)]:lr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==pe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vs(t.ssContent),ssFallback:t.ssFallback&&vs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&tl(u,l.clone(u)),u}function ys(t=" ",e=0){return se(ro,null,t,e)}function be(t="",e=!1){return e?(D(),gs(gn,null,t)):se(gn,null,t)}function It(t){return t==null||typeof t=="boolean"?se(gn):j(t)?se(pe,null,t.slice()):ah(t)?xt(t):se(ro,null,String(t))}function xt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vs(t)}function rl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),rl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Jd(e)?e._ctx=tt:i===3&&tt&&(tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:tt},n=32):(e=String(e),s&64?(n=16,e=[ys(e)]):n=8);t.children=e,t.shapeFlag|=n}function bm(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=re([e.class,s.class]));else if(i==="style")e.style=Ni([e.style,s.style]);else if(Jr(i)){const r=e[i],o=s[i];o&&r!==o&&!(j(r)&&r.includes(o))?e[i]=r?[].concat(r,o):o:o==null&&r==null&&!Qr(i)&&(e[i]=o)}else i!==""&&(e[i]=s[i])}return e}function vt(t,e,n,s=null){Rt(t,e,7,[n,s])}const wm=Gd();let Im=0;function Cm(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||wm,r={uid:Im++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xd(s,i),emitsOptions:Kd(s,i),emit:null,emitted:null,propsDefaults:le,inheritAttrs:s.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=em.bind(null,r),t.ce&&t.ce(r),r}let Be=null;const Em=()=>Be||tt;let wr,ma;{const t=Zr(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};wr=e("__VUE_INSTANCE_SETTERS__",n=>Be=n),ma=e("__VUE_SSR_SETTERS__",n=>mi=n)}const Oi=t=>{const e=Be;return wr(t),t.scope.on(),()=>{t.scope.off(),wr(e)}},Ac=()=>{Be&&Be.scope.off(),wr(null)};function ch(t){return t.vnode.shapeFlag&4}let mi=!1;function Sm(t,e=!1,n=!1){e&&ma(e);const{props:s,children:i}=t.vnode,r=ch(t);om(t,s,r,e),um(t,i,n||e);const o=r?Tm(t,e):void 0;return e&&ma(!1),o}function Tm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,G_);const{setup:s}=n;if(s){jt();const i=t.setupContext=s.length>1?Rm(t):null,r=Oi(t),o=Ai(s,t,0,[t.props,i]),a=cd(o);if(Gt(),r(),(a||t.sp)&&!ni(t)&&Hd(t),a){if(o.then(Ac,Ac),e)return o.then(l=>{Oc(t,l)}).catch(l=>{to(l,t,0)});t.asyncDep=o}else Oc(t,o)}else uh(t)}function Oc(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=Ad(e)),uh(t)}function uh(t,e,n){const s=t.type;t.render||(t.render=s.render||Et);{const i=Oi(t);jt();try{K_(t)}finally{Gt(),i()}}}const km={get(t,e){return De(t,"get",""),t[e]}};function Rm(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,km),slots:t.slots,emit:t.emit,expose:e}}function oo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ad(p_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in si)return si[n](t)},has(e,n){return n in e||n in si}})):t.proxy}function Pm(t){return K(t)&&"__vccOpts"in t}const G=(t,e)=>y_(t,e,mi),Nm="3.5.33";/**
* @vue/runtime-dom v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ga;const xc=typeof window<"u"&&window.trustedTypes;if(xc)try{ga=xc.createPolicy("vue",{createHTML:t=>t})}catch{}const dh=ga?t=>ga.createHTML(t):t=>t,Am="http://www.w3.org/2000/svg",Om="http://www.w3.org/1998/Math/MathML",At=typeof document<"u"?document:null,Dc=At&&At.createElement("template"),xm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?At.createElementNS(Am,t):e==="mathml"?At.createElementNS(Om,t):n?At.createElement(t,{is:n}):At.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>At.createTextNode(t),createComment:t=>At.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>At.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Dc.innerHTML=dh(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=Dc.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Dm=Symbol("_vtc");function Mm(t,e,n){const s=t[Dm];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ir=Symbol("_vod"),hh=Symbol("_vsh"),Zn={name:"show",beforeMount(t,{value:e},{transition:n}){t[Ir]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ws(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Ws(t,!0),s.enter(t)):s.leave(t,()=>{Ws(t,!1)}):Ws(t,e))},beforeUnmount(t,{value:e}){Ws(t,e)}};function Ws(t,e){t.style.display=e?t[Ir]:"none",t[hh]=!e}const Lm=Symbol(""),Fm=/(?:^|;)\s*display\s*:/;function Um(t,e,n){const s=t.style,i=we(n);let r=!1;if(n&&!i){if(e)if(we(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Qs(s,a,"")}else for(const o in e)n[o]==null&&Qs(s,o,"");for(const o in n){o==="display"&&(r=!0);const a=n[o];a!=null?Hm(t,o,!we(e)&&e?e[o]:void 0,a)||Qs(s,o,a):Qs(s,o,"")}}else if(i){if(e!==n){const o=s[Lm];o&&(n+=";"+o),s.cssText=n,r=Fm.test(n)}}else e&&t.removeAttribute("style");Ir in t&&(t[Ir]=r?s.display:"",t[hh]&&(s.display="none"))}const Mc=/\s*!important$/;function Qs(t,e,n){if(j(n))n.forEach(s=>Qs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=$m(t,e);Mc.test(n)?t.setProperty(En(s),n.replace(Mc,""),"important"):t[s]=n}}const Lc=["Webkit","Moz","ms"],Ho={};function $m(t,e){const n=Ho[e];if(n)return n;let s=at(e);if(s!=="filter"&&s in t)return Ho[e]=s;s=hd(s);for(let i=0;i<Lc.length;i++){const r=Lc[i]+s;if(r in t)return Ho[e]=r}return e}function Hm(t,e,n,s){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&we(s)&&n===s}const Fc="http://www.w3.org/1999/xlink";function Uc(t,e,n,s,i,r=Gp(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Fc,e.slice(6,e.length)):t.setAttributeNS(Fc,e,n):n==null||r&&!pd(n)?t.removeAttribute(e):t.setAttribute(e,r?"":kt(n)?String(n):n)}function $c(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?dh(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=pd(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function ns(t,e,n,s){t.addEventListener(e,n,s)}function Bm(t,e,n,s){t.removeEventListener(e,n,s)}const Hc=Symbol("_vei");function Vm(t,e,n,s,i=null){const r=t[Hc]||(t[Hc]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Wm(e);if(s){const c=r[e]=Km(s,i);ns(t,a,c,l)}else o&&(Bm(t,a,o,l),r[e]=void 0)}}const Bc=/(?:Once|Passive|Capture)$/;function Wm(t){let e;if(Bc.test(t)){e={};let s;for(;s=t.match(Bc);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):En(t.slice(2)),e]}let Bo=0;const jm=Promise.resolve(),Gm=()=>Bo||(jm.then(()=>Bo=0),Bo=Date.now());function Km(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Rt(zm(s,n.value),e,5,[s])};return n.value=t,n.attached=Gm(),n}function zm(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Vc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,qm=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Mm(t,s,o):e==="style"?Um(t,n,s):Jr(e)?Qr(e)||Vm(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ym(t,e,s,o))?($c(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Uc(t,e,s,o,r,e!=="value")):t._isVueCE&&(Jm(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!we(s)))?$c(t,at(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Uc(t,e,s,o))};function Ym(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Vc(e)&&K(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Vc(e)&&we(n)?!1:e in t}function Jm(t,e){const n=t._def.props;if(!n)return!1;const s=at(e);return Array.isArray(n)?n.some(i=>at(i)===s):Object.keys(n).some(i=>at(i)===s)}const Wc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return j(e)?n=>or(e,n):e};function Qm(t){t.target.composing=!0}function jc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Vo=Symbol("_assign");function Gc(t,e,n){return e&&(t=t.trim()),n&&(t=Ga(t)),t}const va={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Vo]=Wc(i);const r=s||i.props&&i.props.type==="number";ns(t,e?"change":"input",o=>{o.target.composing||t[Vo](Gc(t.value,n,r))}),(n||r)&&ns(t,"change",()=>{t.value=Gc(t.value,n,r)}),e||(ns(t,"compositionstart",Qm),ns(t,"compositionend",jc),ns(t,"change",jc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[Vo]=Wc(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Ga(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l)}},Xm=["ctrl","shift","alt","meta"],Zm={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Xm.some(n=>t[`${n}Key`]&&!e.includes(n))},gi=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const a=Zm[e[o]];if(a&&a(i,e))return}return t(i,...r)})},eg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ya=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const r=En(i.key);if(e.some(o=>o===r||eg[o]===r))return t(i)})},tg=Fe({patchProp:qm},xm);let Kc;function ng(){return Kc||(Kc=hm(tg))}const sg=(...t)=>{const e=ng().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=rg(s);if(!i)return;const r=e._component;!K(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,ig(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function ig(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function rg(t){return we(t)?document.querySelector(t):t}var zc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw Ps(e)},Ps=function(t){return new Error("Firebase Database ("+fh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},og=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ol={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(h=64)),s.push(n[u],n[d],n[h],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ph(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):og(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new ag;const h=r<<2|a>>4;if(s.push(h),c!==64){const m=a<<4&240|c>>2;if(s.push(m),d!==64){const v=c<<6&192|d;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ag extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _h=function(t){const e=ph(t);return ol.encodeByteArray(e,!0)},Cr=function(t){return _h(t).replace(/\./g,"")},Er=function(t){try{return ol.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t){return mh(void 0,t)}function mh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!cg(n)||(t[n]=mh(t[n],e[n]));return t}function cg(t){return t!=="__proto__"}/**
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
 */function ug(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const dg=()=>ug().__FIREBASE_DEFAULTS__,hg=()=>{if(typeof process>"u"||typeof zc>"u")return;const t=zc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Er(t[1]);return e&&JSON.parse(e)},al=()=>{try{return dg()||hg()||fg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gh=t=>{var e,n;return(n=(e=al())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},pg=t=>{const e=gh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},vh=()=>{var t;return(t=al())===null||t===void 0?void 0:t.config},yh=t=>{var e;return(e=al())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function _g(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Cr(JSON.stringify(n)),Cr(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ll(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function mg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vg(){const t=je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yg(){return fh.NODE_ADMIN===!0}function bg(){try{return typeof indexedDB=="object"}catch{return!1}}function wg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="FirebaseError";class Sn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Ig,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xi.prototype.create)}}class xi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Cg(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Sn(i,a,s)}}function Cg(t,e){return t.replace(Eg,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Eg=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t){return JSON.parse(t)}function Te(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=vi(Er(r[0])||""),n=vi(Er(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Sg=function(t){const e=wh(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Tg=function(t){const e=wh(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Bn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Sr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Tr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function kr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(qc(r)&&qc(o)){if(!kr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function qc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class kg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Rg(t,e){const n=new Pg(t,e);return n.subscribe.bind(n)}class Pg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Ng(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Wo),i.error===void 0&&(i.error=Wo),i.complete===void 0&&(i.complete=Wo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ng(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wo(){}function bs(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,T(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ao=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ke(t){return t&&t._delegate?t._delegate:t}class Vn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const On="[DEFAULT]";/**
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
 */class Og{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new it;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dg(e))try{this.getOrInitializeService({instanceIdentifier:On})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=On){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=On){return this.instances.has(e)}getOptions(e=On){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:xg(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=On){return this.component?this.component.multipleInstances?e:On:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xg(t){return t===On?void 0:t}function Dg(t){return t.instantiationMode==="EAGER"}/**
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
 */class Mg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Og(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const Lg={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},Fg=ie.INFO,Ug={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},$g=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Ug[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cl{constructor(e){this.name=e,this._logLevel=Fg,this._logHandler=$g,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const Hg=(t,e)=>e.some(n=>t instanceof n);let Yc,Jc;function Bg(){return Yc||(Yc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vg(){return Jc||(Jc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ih=new WeakMap,ba=new WeakMap,Ch=new WeakMap,jo=new WeakMap,ul=new WeakMap;function Wg(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(dn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ih.set(n,t)}).catch(()=>{}),ul.set(e,t),e}function jg(t){if(ba.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ba.set(t,e)}let wa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ba.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ch.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gg(t){wa=t(wa)}function Kg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Go(this),e,...n);return Ch.set(s,e.sort?e.sort():[e]),dn(s)}:Vg().includes(t)?function(...e){return t.apply(Go(this),e),dn(Ih.get(this))}:function(...e){return dn(t.apply(Go(this),e))}}function zg(t){return typeof t=="function"?Kg(t):(t instanceof IDBTransaction&&jg(t),Hg(t,Bg())?new Proxy(t,wa):t)}function dn(t){if(t instanceof IDBRequest)return Wg(t);if(jo.has(t))return jo.get(t);const e=zg(t);return e!==t&&(jo.set(t,e),ul.set(e,t)),e}const Go=t=>ul.get(t);function qg(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=dn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(dn(o.result),l.oldVersion,l.newVersion,dn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Yg=["get","getKey","getAll","getAllKeys","count"],Jg=["put","add","delete","clear"],Ko=new Map;function Qc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ko.get(e))return Ko.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Jg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Yg.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Ko.set(e,r),r}Gg(t=>({...t,get:(e,n,s)=>Qc(e,n)||t.get(e,n,s),has:(e,n)=>!!Qc(e,n)||t.has(e,n)}));/**
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
 */class Qg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Xg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Xg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ia="@firebase/app",Xc="0.10.13";/**
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
 */const qt=new cl("@firebase/app"),Zg="@firebase/app-compat",ev="@firebase/analytics-compat",tv="@firebase/analytics",nv="@firebase/app-check-compat",sv="@firebase/app-check",iv="@firebase/auth",rv="@firebase/auth-compat",ov="@firebase/database",av="@firebase/data-connect",lv="@firebase/database-compat",cv="@firebase/functions",uv="@firebase/functions-compat",dv="@firebase/installations",hv="@firebase/installations-compat",fv="@firebase/messaging",pv="@firebase/messaging-compat",_v="@firebase/performance",mv="@firebase/performance-compat",gv="@firebase/remote-config",vv="@firebase/remote-config-compat",yv="@firebase/storage",bv="@firebase/storage-compat",wv="@firebase/firestore",Iv="@firebase/vertexai-preview",Cv="@firebase/firestore-compat",Ev="firebase",Sv="10.14.1";/**
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
 */const Ca="[DEFAULT]",Tv={[Ia]:"fire-core",[Zg]:"fire-core-compat",[tv]:"fire-analytics",[ev]:"fire-analytics-compat",[sv]:"fire-app-check",[nv]:"fire-app-check-compat",[iv]:"fire-auth",[rv]:"fire-auth-compat",[ov]:"fire-rtdb",[av]:"fire-data-connect",[lv]:"fire-rtdb-compat",[cv]:"fire-fn",[uv]:"fire-fn-compat",[dv]:"fire-iid",[hv]:"fire-iid-compat",[fv]:"fire-fcm",[pv]:"fire-fcm-compat",[_v]:"fire-perf",[mv]:"fire-perf-compat",[gv]:"fire-rc",[vv]:"fire-rc-compat",[yv]:"fire-gcs",[bv]:"fire-gcs-compat",[wv]:"fire-fst",[Cv]:"fire-fst-compat",[Iv]:"fire-vertex","fire-js":"fire-js",[Ev]:"fire-js-all"};/**
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
 */const Rr=new Map,kv=new Map,Ea=new Map;function Zc(t,e){try{t.container.addComponent(e)}catch(n){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ws(t){const e=t.name;if(Ea.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;Ea.set(e,t);for(const n of Rr.values())Zc(n,t);for(const n of kv.values())Zc(n,t);return!0}function dl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Lt(t){return t.settings!==void 0}/**
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
 */const Rv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hn=new xi("app","Firebase",Rv);/**
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
 */class Pv{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Vn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hn.create("app-deleted",{appName:this._name})}}/**
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
 */const As=Sv;function Eh(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ca,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw hn.create("bad-app-name",{appName:String(i)});if(n||(n=vh()),!n)throw hn.create("no-options");const r=Rr.get(i);if(r){if(kr(n,r.options)&&kr(s,r.config))return r;throw hn.create("duplicate-app",{appName:i})}const o=new Mg(i);for(const l of Ea.values())o.addComponent(l);const a=new Pv(n,s,o);return Rr.set(i,a),a}function Sh(t=Ca){const e=Rr.get(t);if(!e&&t===Ca&&vh())return Eh();if(!e)throw hn.create("no-app",{appName:t});return e}function fn(t,e,n){var s;let i=(s=Tv[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(a.join(" "));return}ws(new Vn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Nv="firebase-heartbeat-database",Av=1,yi="firebase-heartbeat-store";let zo=null;function Th(){return zo||(zo=qg(Nv,Av,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(yi)}catch(n){console.warn(n)}}}}).catch(t=>{throw hn.create("idb-open",{originalErrorMessage:t.message})})),zo}async function Ov(t){try{const n=(await Th()).transaction(yi),s=await n.objectStore(yi).get(kh(t));return await n.done,s}catch(e){if(e instanceof Sn)qt.warn(e.message);else{const n=hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qt.warn(n.message)}}}async function eu(t,e){try{const s=(await Th()).transaction(yi,"readwrite");await s.objectStore(yi).put(e,kh(t)),await s.done}catch(n){if(n instanceof Sn)qt.warn(n.message);else{const s=hn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qt.warn(s.message)}}}function kh(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xv=1024,Dv=30*24*60*60*1e3;class Mv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=tu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Dv}),this._storage.overwrite(this._heartbeatsCache))}catch(s){qt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tu(),{heartbeatsToSend:s,unsentEntries:i}=Lv(this._heartbeatsCache.heartbeats),r=Cr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return qt.warn(n),""}}}function tu(){return new Date().toISOString().substring(0,10)}function Lv(t,e=xv){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),nu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),nu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Fv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bg()?wg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ov(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return eu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return eu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function nu(t){return Cr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Uv(t){ws(new Vn("platform-logger",e=>new Qg(e),"PRIVATE")),ws(new Vn("heartbeat",e=>new Mv(e),"PRIVATE")),fn(Ia,Xc,t),fn(Ia,Xc,"esm2017"),fn("fire-js","")}Uv("");var su={};const iu="@firebase/database",ru="1.0.8";/**
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
 */let Rh="";function $v(t){Rh=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Te(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:vi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return dt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Hv(e)}}catch{}return new Bv},Dn=Ph("localStorage"),Vv=Ph("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=new cl("@firebase/database"),Nh=function(){let t=1;return function(){return t++}}(),Ah=function(t){const e=Ag(t),n=new kg;n.update(e);const s=n.digest();return ol.encodeByteArray(s)},Di=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Di.apply(null,s):typeof s=="object"?e+=Te(s):e+=s,e+=" "}return e};let ri=null,ou=!0;const Wv=function(t,e){T(!0,"Can't turn on custom loggers persistently."),cs.logLevel=ie.VERBOSE,ri=cs.log.bind(cs)},Ne=function(...t){if(ou===!0&&(ou=!1,ri===null&&Vv.get("logging_enabled")===!0&&Wv()),ri){const e=Di.apply(null,t);ri(e)}},Mi=function(t){return function(...e){Ne(t,...e)}},Sa=function(...t){const e="FIREBASE INTERNAL ERROR: "+Di(...t);cs.error(e)},Yt=function(...t){const e=`FIREBASE FATAL ERROR: ${Di(...t)}`;throw cs.error(e),new Error(e)},We=function(...t){const e="FIREBASE WARNING: "+Di(...t);cs.warn(e)},jv=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&We("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},lo=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Gv=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Is="[MIN_NAME]",Wn="[MAX_NAME]",qn=function(t,e){if(t===e)return 0;if(t===Is||e===Wn)return-1;if(e===Is||t===Wn)return 1;{const n=au(t),s=au(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Kv=function(t,e){return t===e?0:t<e?-1:1},js=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Te(e))},hl=function(t){if(typeof t!="object"||t===null)return Te(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Te(e[s]),n+=":",n+=hl(t[e[s]]);return n+="}",n},Oh=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ae(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const xh=function(t){T(!lo(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},zv=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},qv=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Yv(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Jv=new RegExp("^-?(0*)\\d{1,10}$"),Qv=-2147483648,Xv=2147483647,au=function(t){if(Jv.test(t)){const e=Number(t);if(e>=Qv&&e<=Xv)return e}return null},Os=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw We("Exception was thrown by user callback.",n),e},Math.floor(0))}},Zv=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},oi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class ey{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){We(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',We(e)}}class cr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}cr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl="5",Dh="v",Mh="s",Lh="r",Fh="f",Uh=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,$h="ls",Hh="p",Ta="ac",Bh="websocket",Vh="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Dn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Dn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function ny(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function jh(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let s;if(e===Bh)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Vh)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);ny(t)&&(n.ns=t.namespace);const i=[];return Ae(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(){this.counters_={}}incrementCounter(e,n=1){dt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return lg(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo={},Yo={};function pl(t){const e=t.toString();return qo[e]||(qo[e]=new sy),qo[e]}function iy(t,e){const n=t.toString();return Yo[n]||(Yo[n]=e()),Yo[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Os(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu="start",oy="close",ay="pLPCommand",ly="pRTLPCB",Gh="id",Kh="pw",zh="ser",cy="cb",uy="seg",dy="ts",hy="d",fy="dframe",qh=1870,Yh=30,py=qh-Yh,_y=25e3,my=3e4;class ss{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Mi(e),this.stats_=pl(n),this.urlFn=l=>(this.appCheckToken&&(l[Ta]=this.appCheckToken),jh(n,Vh,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ry(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(my)),Gv(()=>{if(this.isClosed_)return;this.scriptTagHolder=new _l((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===lu)this.id=a,this.password=l;else if(o===oy)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[lu]="t",s[zh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[cy]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Dh]=fl,this.transportSessionId&&(s[Mh]=this.transportSessionId),this.lastSessionId&&(s[$h]=this.lastSessionId),this.applicationId&&(s[Hh]=this.applicationId),this.appCheckToken&&(s[Ta]=this.appCheckToken),typeof location<"u"&&location.hostname&&Uh.test(location.hostname)&&(s[Lh]=Fh);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ss.forceAllow_=!0}static forceDisallow(){ss.forceDisallow_=!0}static isAvailable(){return ss.forceAllow_?!0:!ss.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!zv()&&!qv()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=_h(n),i=Oh(s,py);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[fy]="t",s[Gh]=e,s[Kh]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Te(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class _l{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Nh(),window[ay+this.uniqueCallbackIdentifier]=e,window[ly+this.uniqueCallbackIdentifier]=n,this.myIFrame=_l.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ne("frame writing exception"),a.stack&&Ne(a.stack),Ne(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ne("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Gh]=this.myID,e[Kh]=this.myPW,e[zh]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Yh+s.length<=qh;){const o=this.pendingSegs.shift();s=s+"&"+uy+i+"="+o.seg+"&"+dy+i+"="+o.ts+"&"+hy+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(_y)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=16384,vy=45e3;let Pr=null;typeof MozWebSocket<"u"?Pr=MozWebSocket:typeof WebSocket<"u"&&(Pr=WebSocket);class rt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Mi(this.connId),this.stats_=pl(n),this.connURL=rt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Dh]=fl,typeof location<"u"&&location.hostname&&Uh.test(location.hostname)&&(o[Lh]=Fh),n&&(o[Mh]=n),s&&(o[$h]=s),i&&(o[Ta]=i),r&&(o[Hh]=r),jh(e,Bh,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Dn.set("previous_websocket_failure",!0);try{let s;yg(),this.mySock=new Pr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){rt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Pr!==null&&!rt.forceDisallow_}static previouslyFailed(){return Dn.isInMemoryStorage||Dn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Dn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=vi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Te(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Oh(n,gy);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(vy))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}rt.responsesRequiredToBeHealthy=2;rt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ss,rt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=rt&&rt.isAvailable();let s=n&&!rt.previouslyFailed();if(e.webSocketOnly&&(n||We("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[rt];else{const i=this.transports_=[];for(const r of bi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);bi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}bi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=6e4,by=5e3,wy=10*1024,Iy=100*1024,Jo="t",cu="d",Cy="s",uu="r",Ey="e",du="o",hu="a",fu="n",pu="p",Sy="h";class Ty{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Mi("c:"+this.id+":"),this.transportManager_=new bi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=oi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Iy?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>wy?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Jo in e){const n=e[Jo];n===hu?this.upgradeIfSecondaryHealthy_():n===uu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===du&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=js("t",e),s=js("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:pu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:hu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:fu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=js("t",e),s=js("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=js(Jo,e);if(cu in e){const s=e[cu];if(n===Sy){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===fu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Cy?this.onConnectionShutdown_(s):n===uu?this.onReset_(s):n===Ey?Sa("Server Error: "+s):n===du?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Sa("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),fl!==s&&We("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),oi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(yy))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):oi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(by))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:pu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Dn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends Qh{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ll()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Nr}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=32,mu=768;class ne{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Z(){return new ne("")}function z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function vn(t){return t.pieces_.length-t.pieceNum_}function ce(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ne(t.pieces_,e)}function ml(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ky(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function wi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Xh(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ne(e,0)}function ve(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ne)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ne(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function Ve(t,e){const n=z(t),s=z(e);if(n===null)return e;if(n===s)return Ve(ce(t),ce(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ry(t,e){const n=wi(t,0),s=wi(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=qn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function gl(t,e){if(vn(t)!==vn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function nt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(vn(t)>vn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Py{constructor(e,n){this.errorPrefix_=n,this.parts_=wi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=ao(this.parts_[s]);Zh(this)}}function Ny(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ao(e),Zh(t)}function Ay(t){const e=t.parts_.pop();t.byteLength_-=ao(e),t.parts_.length>0&&(t.byteLength_-=1)}function Zh(t){if(t.byteLength_>mu)throw new Error(t.errorPrefix_+"has a key path longer than "+mu+" bytes ("+t.byteLength_+").");if(t.parts_.length>_u)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_u+") or object contains a cycle "+xn(t))}function xn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl extends Qh{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new vl}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=1e3,Oy=60*5*1e3,gu=30*1e3,xy=1.3,Dy=3e4,My="server_kill",vu=3;class Wt extends Jh{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Wt.nextPersistentConnectionId_++,this.log_=Mi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Gs,this.maxReconnectDelay_=Oy,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Nr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Te(r)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new it,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Wt.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&dt(e,"w")){const s=Bn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();We(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Tg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=gu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Sg(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Te(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Sa("Unrecognized action received from server: "+Te(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Gs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Gs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Dy&&(this.reconnectDelay_=Gs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*xy)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Wt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ne("getToken() completed but was canceled"):(Ne("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new Ty(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,m=>{We(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(My)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&We(d),l())}}}interrupt(e){Ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Sr(this.interruptReasons_)&&(this.reconnectDelay_=Gs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>hl(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ne(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ne("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=vu&&(this.reconnectDelay_=gu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ne("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=vu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Rh.replace(/\./g,"-")]=1,ll()?e["framework.cordova"]=1:bh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Nr.getInstance().currentlyOnline();return Sr(this.interruptReasons_)&&e}}Wt.nextPersistentConnectionId_=0;Wt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class co{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Y(Is,e),i=new Y(Is,n);return this.compare(s,i)!==0}minPost(){return Y.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tr;class ef extends co{static get __EMPTY_NODE(){return tr}static set __EMPTY_NODE(e){tr=e}compare(e,n){return qn(e.name,n.name)}isDefinedOn(e){throw Ps("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Y.MIN}maxPost(){return new Y(Wn,tr)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new Y(e,tr)}toString(){return".key"}}const us=new ef;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Pe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Pe.RED,this.left=i??Ke.EMPTY_NODE,this.right=r??Ke.EMPTY_NODE}copy(e,n,s,i,r){return new Pe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Pe.RED=!0;Pe.BLACK=!1;class Ly{copy(e,n,s,i,r){return this}insert(e,n,s){return new Pe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ke{constructor(e,n=Ke.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ke(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Pe.BLACK,null,null))}remove(e){return new Ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Pe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new nr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new nr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new nr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new nr(this.root_,null,this.comparator_,!0,e)}}Ke.EMPTY_NODE=new Ly;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(t,e){return qn(t.name,e.name)}function yl(t,e){return qn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ka;function Uy(t){ka=t}const tf=function(t){return typeof t=="number"?"number:"+xh(t):"string:"+t},nf=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&dt(e,".sv"),"Priority must be a string or number.")}else T(t===ka||t.isEmpty(),"priority of unexpected type.");T(t===ka||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yu;class Re{constructor(e,n=Re.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),nf(this.priorityNode_)}static set __childrenNodeConstructor(e){yu=e}static get __childrenNodeConstructor(){return yu}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Re(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Re.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:z(e)===".priority"?this.priorityNode_:Re.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Re.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(T(s!==".priority"||vn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Re.__childrenNodeConstructor.EMPTY_NODE.updateChild(ce(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+tf(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=xh(this.value_):e+=this.value_,this.lazyHash_=Ah(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Re.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Re.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Re.VALUE_TYPE_ORDER.indexOf(n),r=Re.VALUE_TYPE_ORDER.indexOf(s);return T(i>=0,"Unknown leaf type: "+n),T(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Re.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sf,rf;function $y(t){sf=t}function Hy(t){rf=t}class By extends co{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?qn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Y.MIN}maxPost(){return new Y(Wn,new Re("[PRIORITY-POST]",rf))}makePost(e,n){const s=sf(e);return new Y(n,new Re("[PRIORITY-POST]",s))}toString(){return".priority"}}const _e=new By;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy=Math.log(2);class Wy{constructor(e){const n=r=>parseInt(Math.log(r)/Vy,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ar=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new Pe(h,d.node,Pe.BLACK,null,null);{const m=parseInt(u/2,10)+l,v=i(l,m),S=i(m+1,c);return d=t[m],h=n?n(d):d,new Pe(h,d.node,Pe.BLACK,v,S)}},r=function(l){let c=null,u=null,d=t.length;const h=function(v,S){const N=d-v,F=d;d-=v;const L=i(N+1,F),J=t[N],$=n?n(J):J;m(new Pe($,J.node,S,null,L))},m=function(v){c?(c.left=v,c=v):(u=v,c=v)};for(let v=0;v<l.count;++v){const S=l.nextBitIsOne(),N=Math.pow(2,l.count-(v+1));S?h(N,Pe.BLACK):(h(N,Pe.BLACK),h(N,Pe.RED))}return u},o=new Wy(t.length),a=r(o);return new Ke(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qo;const es={};class Ft{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(es&&_e,"ChildrenNode.ts has not been loaded"),Qo=Qo||new Ft({".priority":es},{".priority":_e}),Qo}get(e){const n=Bn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ke?n:null}hasIndex(e){return dt(this.indexSet_,e.toString())}addIndex(e,n){T(e!==us,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(Y.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ar(s,e.getCompare()):a=es;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Ft(u,c)}addToIndexes(e,n){const s=Tr(this.indexes_,(i,r)=>{const o=Bn(this.indexSet_,r);if(T(o,"Missing index implementation for "+r),i===es)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Y.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ar(a,o.getCompare())}else return es;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Y(e.name,a))),l.insert(e,e.node)}});return new Ft(s,this.indexSet_)}removeFromIndexes(e,n){const s=Tr(this.indexes_,i=>{if(i===es)return i;{const r=n.get(e.name);return r?i.remove(new Y(e.name,r)):i}});return new Ft(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ks;class B{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&nf(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ks||(Ks=new B(new Ke(yl),null,Ft.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ks}updatePriority(e){return this.children_.isEmpty()?this:new B(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ks:n}}getChild(e){const n=z(e);return n===null?this:this.getImmediateChild(n).getChild(ce(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Y(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ks:this.priorityNode_;return new B(i,o,r)}}updateChild(e,n){const s=z(e);if(s===null)return n;{T(z(e)!==".priority"||vn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ce(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(_e,(o,a)=>{n[o]=a.val(e),s++,r&&B.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+tf(this.getPriority().val())+":"),this.forEachChild(_e,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Ah(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Y(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Y(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Y(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Y.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Y.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Li?-1:0}withIndex(e){if(e===us||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new B(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===us||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(_e),i=n.getIterator(_e);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===us?null:this.indexMap_.get(e.toString())}}B.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class jy extends B{constructor(){super(new Ke(yl),B.EMPTY_NODE,Ft.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return B.EMPTY_NODE}isEmpty(){return!1}}const Li=new jy;Object.defineProperties(Y,{MIN:{value:new Y(Is,B.EMPTY_NODE)},MAX:{value:new Y(Wn,Li)}});ef.__EMPTY_NODE=B.EMPTY_NODE;Re.__childrenNodeConstructor=B;Uy(Li);Hy(Li);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy=!0;function ge(t,e=null){if(t===null)return B.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Re(n,ge(e))}if(!(t instanceof Array)&&Gy){const n=[];let s=!1;if(Ae(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ge(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Y(o,l)))}}),n.length===0)return B.EMPTY_NODE;const r=Ar(n,Fy,o=>o.name,yl);if(s){const o=Ar(n,_e.getCompare());return new B(r,ge(e),new Ft({".priority":o},{".priority":_e}))}else return new B(r,ge(e),Ft.Default)}else{let n=B.EMPTY_NODE;return Ae(t,(s,i)=>{if(dt(t,s)&&s.substring(0,1)!=="."){const r=ge(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ge(e))}}$y(ge);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky extends co{constructor(e){super(),this.indexPath_=e,T(!q(e)&&z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?qn(e.name,n.name):r}makePost(e,n){const s=ge(e),i=B.EMPTY_NODE.updateChild(this.indexPath_,s);return new Y(n,i)}maxPost(){const e=B.EMPTY_NODE.updateChild(this.indexPath_,Li);return new Y(Wn,e)}toString(){return wi(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy extends co{compare(e,n){const s=e.node.compareTo(n.node);return s===0?qn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Y.MIN}maxPost(){return Y.MAX}makePost(e,n){const s=ge(e);return new Y(n,s)}toString(){return".value"}}const qy=new zy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(t){return{type:"value",snapshotNode:t}}function Cs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ii(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ci(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Yy(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ii(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Cs(n,s)):o.trackChildChange(Ci(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(_e,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ii(i,r))}),n.isLeafNode()||n.forEachChild(_e,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Ci(i,r,o))}else s.trackChildChange(Cs(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?B.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.indexedFilter_=new bl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ei.getStartPost_(e),this.endPost_=Ei.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new Y(n,s))||(s=B.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=B.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(B.EMPTY_NODE);const r=this;return n.forEachChild(_e,(o,a)=>{r.matches(new Y(o,a))||(i=i.updateImmediateChild(o,B.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Ei(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new Y(n,s))||(s=B.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=B.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=B.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(B.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,B.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,m)=>d(m,h)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new Y(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,l);if(u&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(Ci(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ii(n,d));const S=a.updateImmediateChild(n,B.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Cs(h.name,h.node)),S.updateImmediateChild(h.name,h.node)):S}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Ii(c.name,c.node)),r.trackChildChange(Cs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,B.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Is}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Wn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new wl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Qy(t){return t.loadsAllData()?new bl(t.getIndex()):t.hasLimit()?new Jy(t):new Ei(t)}function Xy(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function bu(t){const e={};if(t.isDefault())return e;let n;if(t.index_===_e?n="$priority":t.index_===qy?n="$value":t.index_===us?n="$key":(T(t.index_ instanceof Ky,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Te(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Te(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Te(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Te(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Te(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function wu(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_e&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends Jh{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Mi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Or.getListenId_(e,s),a={};this.listens_[o]=a;const l=bu(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),Bn(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const s=Or.getListenId_(e,n);delete this.listens_[s]}get(e){const n=bu(e._queryParams),s=e._path.toString(),i=new it;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ns(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=vi(a.responseText)}catch{We("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&We("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zy{constructor(){this.rootNode_=B.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(){return{value:null,children:new Map}}function xs(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=z(e);t.children.has(s)||t.children.set(s,xr());const i=t.children.get(s);e=ce(e),xs(i,e,n)}}function Ra(t,e){if(q(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(_e,(s,i)=>{xs(t,new ne(s),i)}),Ra(t,e)}}else if(t.children.size>0){const n=z(e);return e=ce(e),t.children.has(n)&&Ra(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Pa(t,e,n){t.value!==null?n(e,t.value):eb(t,(s,i)=>{const r=new ne(e.toString()+"/"+s);Pa(i,r,n)})}function eb(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ae(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=10*1e3,nb=30*1e3,sb=5*60*1e3;class ib{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new tb(e);const s=Iu+(nb-Iu)*Math.random();oi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ae(e,(i,r)=>{r>0&&dt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),oi(this.reportStats_.bind(this),Math.floor(Math.random()*2*sb))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ot||(ot={}));function Il(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Cl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function El(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=ot.ACK_USER_WRITE,this.source=Il()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ne(e));return new Dr(Z(),n,this.revert)}}else return T(z(this.path)===e,"operationForChild called for unrelated child."),new Dr(ce(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n){this.source=e,this.path=n,this.type=ot.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new Si(this.source,Z()):new Si(this.source,ce(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=ot.OVERWRITE}operationForChild(e){return q(this.path)?new jn(this.source,Z(),this.snap.getImmediateChild(e)):new jn(this.source,ce(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=ot.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new ne(e));return n.isEmpty()?null:n.value?new jn(this.source,Z(),n.value):new Es(this.source,Z(),n)}else return T(z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Es(this.source,ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class rb{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ob(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Yy(o.childName,o.snapshotNode))}),zs(t,i,"child_removed",e,s,n),zs(t,i,"child_added",e,s,n),zs(t,i,"child_moved",r,s,n),zs(t,i,"child_changed",e,s,n),zs(t,i,"value",e,s,n),i}function zs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>lb(t,a,l)),o.forEach(a=>{const l=ab(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function ab(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function lb(t,e,n){if(e.childName==null||n.childName==null)throw Ps("Should only compare child_ events.");const s=new Y(e.childName,e.snapshotNode),i=new Y(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t,e){return{eventCache:t,serverCache:e}}function ai(t,e,n,s){return uo(new yn(e,n,s),t.serverCache)}function af(t,e,n,s){return uo(t.eventCache,new yn(e,n,s))}function Mr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Gn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xo;const cb=()=>(Xo||(Xo=new Ke(Kv)),Xo);class fe{constructor(e,n=cb()){this.value=e,this.children=n}static fromObject(e){let n=new fe(null);return Ae(e,(s,i)=>{n=n.set(new ne(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Z(),value:this.value};if(q(e))return null;{const s=z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ce(e),n);return r!=null?{path:ve(new ne(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=z(e),s=this.children.get(n);return s!==null?s.subtree(ce(e)):new fe(null)}}set(e,n){if(q(e))return new fe(n,this.children);{const s=z(e),r=(this.children.get(s)||new fe(null)).set(ce(e),n),o=this.children.insert(s,r);return new fe(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new fe(null):new fe(null,this.children);{const n=z(e),s=this.children.get(n);if(s){const i=s.remove(ce(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new fe(null):new fe(this.value,r)}else return this}}get(e){if(q(e))return this.value;{const n=z(e),s=this.children.get(n);return s?s.get(ce(e)):null}}setTree(e,n){if(q(e))return n;{const s=z(e),r=(this.children.get(s)||new fe(null)).setTree(ce(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new fe(this.value,o)}}fold(e){return this.fold_(Z(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ve(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Z(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(q(e))return null;{const r=z(e),o=this.children.get(r);return o?o.findOnPath_(ce(e),ve(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Z(),n)}foreachOnPath_(e,n,s){if(q(e))return this;{this.value&&s(n,this.value);const i=z(e),r=this.children.get(i);return r?r.foreachOnPath_(ce(e),ve(n,i),s):new fe(null)}}foreach(e){this.foreach_(Z(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ve(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.writeTree_=e}static empty(){return new ct(new fe(null))}}function li(t,e,n){if(q(e))return new ct(new fe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ve(i,e);return r=r.updateChild(o,n),new ct(t.writeTree_.set(i,r))}else{const i=new fe(n),r=t.writeTree_.setTree(e,i);return new ct(r)}}}function Na(t,e,n){let s=t;return Ae(n,(i,r)=>{s=li(s,ve(e,i),r)}),s}function Cu(t,e){if(q(e))return ct.empty();{const n=t.writeTree_.setTree(e,new fe(null));return new ct(n)}}function Aa(t,e){return Yn(t,e)!=null}function Yn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ve(n.path,e)):null}function Eu(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_e,(s,i)=>{e.push(new Y(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Y(s,i.value))}),e}function pn(t,e){if(q(e))return t;{const n=Yn(t,e);return n!=null?new ct(new fe(n)):new ct(t.writeTree_.subtree(e))}}function Oa(t){return t.writeTree_.isEmpty()}function Ss(t,e){return lf(Z(),t.writeTree_,e)}function lf(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(T(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=lf(ve(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ve(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t,e){return hf(e,t)}function ub(t,e,n,s,i){T(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=li(t.visibleWrites,e,n)),t.lastWriteId=s}function db(t,e,n,s){T(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Na(t.visibleWrites,e,n),t.lastWriteId=s}function hb(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function fb(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&pb(a,s.path)?i=!1:nt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return _b(t),!0;if(s.snap)t.visibleWrites=Cu(t.visibleWrites,s.path);else{const a=s.children;Ae(a,l=>{t.visibleWrites=Cu(t.visibleWrites,ve(s.path,l))})}return!0}else return!1}function pb(t,e){if(t.snap)return nt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&nt(ve(t.path,n),e))return!0;return!1}function _b(t){t.visibleWrites=cf(t.allWrites,mb,Z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function mb(t){return t.visible}function cf(t,e,n){let s=ct.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)nt(n,o)?(a=Ve(n,o),s=li(s,a,r.snap)):nt(o,n)&&(a=Ve(o,n),s=li(s,Z(),r.snap.getChild(a)));else if(r.children){if(nt(n,o))a=Ve(n,o),s=Na(s,a,r.children);else if(nt(o,n))if(a=Ve(o,n),q(a))s=Na(s,Z(),r.children);else{const l=Bn(r.children,z(a));if(l){const c=l.getChild(ce(a));s=li(s,Z(),c)}}}else throw Ps("WriteRecord should have .snap or .children")}}return s}function uf(t,e,n,s,i){if(!s&&!i){const r=Yn(t.visibleWrites,e);if(r!=null)return r;{const o=pn(t.visibleWrites,e);if(Oa(o))return n;if(n==null&&!Aa(o,Z()))return null;{const a=n||B.EMPTY_NODE;return Ss(o,a)}}}else{const r=pn(t.visibleWrites,e);if(!i&&Oa(r))return n;if(!i&&n==null&&!Aa(r,Z()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(nt(c.path,e)||nt(e,c.path))},a=cf(t.allWrites,o,e),l=n||B.EMPTY_NODE;return Ss(a,l)}}}function gb(t,e,n){let s=B.EMPTY_NODE;const i=Yn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_e,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=pn(t.visibleWrites,e);return n.forEachChild(_e,(o,a)=>{const l=Ss(pn(r,new ne(o)),a);s=s.updateImmediateChild(o,l)}),Eu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=pn(t.visibleWrites,e);return Eu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function vb(t,e,n,s,i){T(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ve(e,n);if(Aa(t.visibleWrites,r))return null;{const o=pn(t.visibleWrites,r);return Oa(o)?i.getChild(n):Ss(o,i.getChild(n))}}function yb(t,e,n,s){const i=ve(e,n),r=Yn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=pn(t.visibleWrites,i);return Ss(o,s.getNode().getImmediateChild(n))}else return null}function bb(t,e){return Yn(t.visibleWrites,e)}function wb(t,e,n,s,i,r,o){let a;const l=pn(t.visibleWrites,e),c=Yn(l,Z());if(c!=null)a=c;else if(n!=null)a=Ss(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=h.getNext();for(;m&&u.length<i;)d(m,s)!==0&&u.push(m),m=h.getNext();return u}else return[]}function Ib(){return{visibleWrites:ct.empty(),allWrites:[],lastWriteId:-1}}function Lr(t,e,n,s){return uf(t.writeTree,t.treePath,e,n,s)}function Sl(t,e){return gb(t.writeTree,t.treePath,e)}function Su(t,e,n,s){return vb(t.writeTree,t.treePath,e,n,s)}function Fr(t,e){return bb(t.writeTree,ve(t.treePath,e))}function Cb(t,e,n,s,i,r){return wb(t.writeTree,t.treePath,e,n,s,i,r)}function Tl(t,e,n){return yb(t.writeTree,t.treePath,e,n)}function df(t,e){return hf(ve(t.treePath,e),t.writeTree)}function hf(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Ci(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ii(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Cs(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Ci(s,e.snapshotNode,i.oldSnap));else throw Ps("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const ff=new Sb;class kl{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new yn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Tl(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gn(this.viewCache_),r=Cb(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(t){return{filter:t}}function kb(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Rb(t,e,n,s,i){const r=new Eb;let o,a;if(n.type===ot.OVERWRITE){const c=n;c.source.fromUser?o=xa(t,e,c.path,c.snap,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!q(c.path),o=Ur(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===ot.MERGE){const c=n;c.source.fromUser?o=Nb(t,e,c.path,c.children,s,i,r):(T(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Da(t,e,c.path,c.children,s,i,a,r))}else if(n.type===ot.ACK_USER_WRITE){const c=n;c.revert?o=xb(t,e,c.path,s,i,r):o=Ab(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===ot.LISTEN_COMPLETE)o=Ob(t,e,n.path,s,r);else throw Ps("Unknown operation type: "+n.type);const l=r.getChanges();return Pb(e,o,l),{viewCache:o,changes:l}}function Pb(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Mr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(of(Mr(e)))}}function pf(t,e,n,s,i,r){const o=e.eventCache;if(Fr(s,n)!=null)return e;{let a,l;if(q(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Gn(e),u=c instanceof B?c:B.EMPTY_NODE,d=Sl(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Lr(s,Gn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=z(n);if(c===".priority"){T(vn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Su(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=ce(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Su(s,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Tl(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return ai(e,a,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function Ur(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(q(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),m,null)}else{const m=z(n);if(!l.isCompleteForPath(n)&&vn(n)>1)return e;const v=ce(n),N=l.getNode().getImmediateChild(m).updateChild(v,s);m===".priority"?c=u.updatePriority(l.getNode(),N):c=u.updateChild(l.getNode(),m,N,v,ff,null)}const d=af(e,c,l.isFullyInitialized()||q(n),u.filtersNodes()),h=new kl(i,d,r);return pf(t,d,n,i,h,a)}function xa(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new kl(i,e,r);if(q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=ai(e,c,!0,t.filter.filtersNodes());else{const d=z(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=ai(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=ce(n),m=a.getNode().getImmediateChild(d);let v;if(q(h))v=s;else{const S=u.getCompleteChild(d);S!=null?ml(h)===".priority"&&S.getChild(Xh(h)).isEmpty()?v=S:v=S.updateChild(h,s):v=B.EMPTY_NODE}if(m.equals(v))l=e;else{const S=t.filter.updateChild(a.getNode(),d,v,h,u,o);l=ai(e,S,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Tu(t,e){return t.eventCache.isCompleteForChild(e)}function Nb(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=ve(n,l);Tu(e,z(u))&&(a=xa(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=ve(n,l);Tu(e,z(u))||(a=xa(t,a,u,c,i,r,o))}),a}function ku(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Da(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;q(n)?c=s:c=new fe(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),v=ku(t,m,h);l=Ur(t,l,new ne(d),v,i,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const m=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!m){const v=e.serverCache.getNode().getImmediateChild(d),S=ku(t,v,h);l=Ur(t,l,new ne(d),S,i,r,o,a)}}),l}function Ab(t,e,n,s,i,r,o){if(Fr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ur(t,e,n,l.getNode().getChild(n),i,r,a,o);if(q(n)){let c=new fe(null);return l.getNode().forEachChild(us,(u,d)=>{c=c.set(new ne(u),d)}),Da(t,e,n,c,i,r,a,o)}else return e}else{let c=new fe(null);return s.foreach((u,d)=>{const h=ve(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Da(t,e,n,c,i,r,a,o)}}function Ob(t,e,n,s,i){const r=e.serverCache,o=af(e,r.getNode(),r.isFullyInitialized()||q(n),r.isFiltered());return pf(t,o,n,s,ff,i)}function xb(t,e,n,s,i,r){let o;if(Fr(s,n)!=null)return e;{const a=new kl(s,e,i),l=e.eventCache.getNode();let c;if(q(n)||z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Lr(s,Gn(e));else{const d=e.serverCache.getNode();T(d instanceof B,"serverChildren would be complete if leaf node"),u=Sl(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=z(n);let d=Tl(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,ce(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,B.EMPTY_NODE,ce(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Lr(s,Gn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Fr(s,Z())!=null,ai(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new bl(s.getIndex()),r=Qy(s);this.processor_=Tb(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(B.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(B.EMPTY_NODE,a.getNode(),null),u=new yn(l,o.isFullyInitialized(),i.filtersNodes()),d=new yn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=uo(d,u),this.eventGenerator_=new rb(this.query_)}get query(){return this.query_}}function Mb(t){return t.viewCache_.serverCache.getNode()}function Lb(t){return Mr(t.viewCache_)}function Fb(t,e){const n=Gn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(z(e)).isEmpty())?n.getChild(e):null}function Ru(t){return t.eventRegistrations_.length===0}function Ub(t,e){t.eventRegistrations_.push(e)}function Pu(t,e,n){const s=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Nu(t,e,n,s){e.type===ot.MERGE&&e.source.queryId!==null&&(T(Gn(t.viewCache_),"We should always have a full cache before handling merges"),T(Mr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Rb(t.processor_,i,e,n,s);return kb(t.processor_,r.viewCache),T(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,_f(t,r.changes,r.viewCache.eventCache.getNode(),null)}function $b(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(_e,(r,o)=>{s.push(Cs(r,o))}),n.isFullyInitialized()&&s.push(of(n.getNode())),_f(t,s,n.getNode(),e)}function _f(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return ob(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $r;class mf{constructor(){this.views=new Map}}function Hb(t){T(!$r,"__referenceConstructor has already been defined"),$r=t}function Bb(){return T($r,"Reference.ts has not been loaded"),$r}function Vb(t){return t.views.size===0}function Rl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return T(r!=null,"SyncTree gave us an op for an invalid query."),Nu(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Nu(o,e,n,s));return r}}function gf(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Lr(n,i?s:null),l=!1;a?l=!0:s instanceof B?(a=Sl(n,s),l=!1):(a=B.EMPTY_NODE,l=!1);const c=uo(new yn(a,l,!1),new yn(s,i,!1));return new Db(e,c)}return o}function Wb(t,e,n,s,i,r){const o=gf(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Ub(o,n),$b(o,n)}function jb(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=bn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Pu(c,n,s)),Ru(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Pu(l,n,s)),Ru(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!bn(t)&&r.push(new(Bb())(e._repo,e._path)),{removed:r,events:o}}function vf(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function _n(t,e){let n=null;for(const s of t.views.values())n=n||Fb(s,e);return n}function yf(t,e){if(e._queryParams.loadsAllData())return fo(t);{const s=e._queryIdentifier;return t.views.get(s)}}function bf(t,e){return yf(t,e)!=null}function bn(t){return fo(t)!=null}function fo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr;function Gb(t){T(!Hr,"__referenceConstructor has already been defined"),Hr=t}function Kb(){return T(Hr,"Reference.ts has not been loaded"),Hr}let zb=1;class Au{constructor(e){this.listenProvider_=e,this.syncPointTree_=new fe(null),this.pendingWriteTree_=Ib(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Pl(t,e,n,s,i){return ub(t.pendingWriteTree_,e,n,s,i),i?Ds(t,new jn(Il(),e,n)):[]}function qb(t,e,n,s){db(t.pendingWriteTree_,e,n,s);const i=fe.fromObject(n);return Ds(t,new Es(Il(),e,i))}function un(t,e,n=!1){const s=hb(t.pendingWriteTree_,e);if(fb(t.pendingWriteTree_,e)){let r=new fe(null);return s.snap!=null?r=r.set(Z(),!0):Ae(s.children,o=>{r=r.set(new ne(o),!0)}),Ds(t,new Dr(s.path,r,n))}else return[]}function Fi(t,e,n){return Ds(t,new jn(Cl(),e,n))}function Yb(t,e,n){const s=fe.fromObject(n);return Ds(t,new Es(Cl(),e,s))}function Jb(t,e){return Ds(t,new Si(Cl(),e))}function Qb(t,e,n){const s=Nl(t,n);if(s){const i=Al(s),r=i.path,o=i.queryId,a=Ve(r,e),l=new Si(El(o),a);return Ol(t,r,l)}else return[]}function Br(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||bf(o,e))){const l=jb(o,e,n,s);Vb(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(h,m)=>bn(m));if(u&&!d){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const m=ew(h);for(let v=0;v<m.length;++v){const S=m[v],N=S.query,F=Ef(t,S);t.listenProvider_.startListening(ci(N),Ti(t,N),F.hashFn,F.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(ci(e),null):c.forEach(h=>{const m=t.queryToTagMap.get(_o(h));t.listenProvider_.stopListening(ci(h),m)}))}tw(t,c)}return a}function wf(t,e,n,s){const i=Nl(t,s);if(i!=null){const r=Al(i),o=r.path,a=r.queryId,l=Ve(o,e),c=new jn(El(a),l,n);return Ol(t,o,c)}else return[]}function Xb(t,e,n,s){const i=Nl(t,s);if(i){const r=Al(i),o=r.path,a=r.queryId,l=Ve(o,e),c=fe.fromObject(n),u=new Es(El(a),l,c);return Ol(t,o,u)}else return[]}function Ma(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,m)=>{const v=Ve(h,i);r=r||_n(m,v),o=o||bn(m)});let a=t.syncPointTree_.get(i);a?(o=o||bn(a),r=r||_n(a,Z())):(a=new mf,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=B.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,v)=>{const S=_n(v,Z());S&&(r=r.updateImmediateChild(m,S))}));const c=bf(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=_o(e);T(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=nw();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const u=ho(t.pendingWriteTree_,i);let d=Wb(a,e,n,u,r,l);if(!c&&!o&&!s){const h=yf(a,e);d=d.concat(sw(t,e,h))}return d}function po(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ve(o,e),c=_n(a,l);if(c)return c});return uf(i,e,r,n,!0)}function Zb(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=Ve(c,n);s=s||_n(u,d)});let i=t.syncPointTree_.get(n);i?s=s||_n(i,Z()):(i=new mf,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new yn(s,!0,!1):null,a=ho(t.pendingWriteTree_,e._path),l=gf(i,e,a,r?o.getNode():B.EMPTY_NODE,r);return Lb(l)}function Ds(t,e){return If(e,t.syncPointTree_,null,ho(t.pendingWriteTree_,Z()))}function If(t,e,n,s){if(q(t.path))return Cf(t,e,n,s);{const i=e.get(Z());n==null&&i!=null&&(n=_n(i,Z()));let r=[];const o=z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=df(s,o);r=r.concat(If(a,l,c,u))}return i&&(r=r.concat(Rl(i,t,s,n))),r}}function Cf(t,e,n,s){const i=e.get(Z());n==null&&i!=null&&(n=_n(i,Z()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=df(s,o),u=t.operationForChild(o);u&&(r=r.concat(Cf(u,a,l,c)))}),i&&(r=r.concat(Rl(i,t,s,n))),r}function Ef(t,e){const n=e.query,s=Ti(t,n);return{hashFn:()=>(Mb(e)||B.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Qb(t,n._path,s):Jb(t,n._path);{const r=Yv(i,n);return Br(t,n,null,r)}}}}function Ti(t,e){const n=_o(e);return t.queryToTagMap.get(n)}function _o(t){return t._path.toString()+"$"+t._queryIdentifier}function Nl(t,e){return t.tagToQueryMap.get(e)}function Al(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ne(t.substr(0,e))}}function Ol(t,e,n){const s=t.syncPointTree_.get(e);T(s,"Missing sync point for query tag that we're tracking");const i=ho(t.pendingWriteTree_,e);return Rl(s,n,i,null)}function ew(t){return t.fold((e,n,s)=>{if(n&&bn(n))return[fo(n)];{let i=[];return n&&(i=vf(n)),Ae(s,(r,o)=>{i=i.concat(o)}),i}})}function ci(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Kb())(t._repo,t._path):t}function tw(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=_o(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function nw(){return zb++}function sw(t,e,n){const s=e._path,i=Ti(t,e),r=Ef(t,n),o=t.listenProvider_.startListening(ci(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)T(!bn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!q(c)&&u&&bn(u))return[fo(u).query];{let h=[];return u&&(h=h.concat(vf(u).map(m=>m.query))),Ae(d,(m,v)=>{h=h.concat(v)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(ci(u),Ti(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new xl(n)}node(){return this.node_}}class Dl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ve(this.path_,e);return new Dl(this.syncTree_,n)}node(){return po(this.syncTree_,this.path_)}}const iw=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ou=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return rw(t[".sv"],e,n);if(typeof t[".sv"]=="object")return ow(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},rw=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},ow=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&T(!1,"Unexpected increment value: "+s);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Sf=function(t,e,n,s){return Ll(e,new Dl(n,t),s)},Ml=function(t,e,n){return Ll(t,new xl(e),n)};function Ll(t,e,n){const s=t.getPriority().val(),i=Ou(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Ou(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Re(a,ge(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Re(i))),o.forEachChild(_e,(a,l)=>{const c=Ll(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function mo(t,e){let n=e instanceof ne?e:new ne(e),s=t,i=z(n);for(;i!==null;){const r=Bn(s.node.children,i)||{children:{},childCount:0};s=new Fl(i,s,r),n=ce(n),i=z(n)}return s}function Jn(t){return t.node.value}function Ul(t,e){t.node.value=e,La(t)}function Tf(t){return t.node.childCount>0}function aw(t){return Jn(t)===void 0&&!Tf(t)}function go(t,e){Ae(t.node.children,(n,s)=>{e(new Fl(n,t,s))})}function kf(t,e,n,s){n&&e(t),go(t,i=>{kf(i,e,!0)})}function lw(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ui(t){return new ne(t.parent===null?t.name:Ui(t.parent)+"/"+t.name)}function La(t){t.parent!==null&&cw(t.parent,t.name,t)}function cw(t,e,n){const s=aw(n),i=dt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,La(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,La(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=/[\[\].#$\/\u0000-\u001F\u007F]/,dw=/[\[\].#$\u0000-\u001F\u007F]/,Zo=10*1024*1024,$l=function(t){return typeof t=="string"&&t.length!==0&&!uw.test(t)},Rf=function(t){return typeof t=="string"&&t.length!==0&&!dw.test(t)},hw=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Rf(t)},Hl=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!lo(t)||t&&typeof t=="object"&&dt(t,".sv")},Vr=function(t,e,n,s){s&&e===void 0||$i(bs(t,"value"),e,n)},$i=function(t,e,n){const s=n instanceof ne?new Py(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+xn(s));if(typeof e=="function")throw new Error(t+"contains a function "+xn(s)+" with contents = "+e.toString());if(lo(e))throw new Error(t+"contains "+e.toString()+" "+xn(s));if(typeof e=="string"&&e.length>Zo/3&&ao(e)>Zo)throw new Error(t+"contains a string greater than "+Zo+" utf8 bytes "+xn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ae(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!$l(o)))throw new Error(t+" contains an invalid key ("+o+") "+xn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ny(s,o),$i(t,a,s),Ay(s)}),i&&r)throw new Error(t+' contains ".value" child '+xn(s)+" in addition to actual children.")}},fw=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=wi(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!$l(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Ry);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&nt(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Pf=function(t,e,n,s){const i=bs(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Ae(e,(o,a)=>{const l=new ne(o);if($i(i,a,ve(n,l)),ml(l)===".priority"&&!Hl(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),fw(i,r)},pw=function(t,e,n){if(lo(e))throw new Error(bs(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Hl(e))throw new Error(bs(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Nf=function(t,e,n,s){if(!Rf(n))throw new Error(bs(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},_w=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Nf(t,e,n)},Mn=function(t,e){if(z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},mw=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!$l(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!hw(n))throw new Error(bs(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function vo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!gl(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Af(t,e,n){vo(t,n),Of(t,s=>gl(s,e))}function Qe(t,e,n){vo(t,n),Of(t,s=>nt(s,e)||nt(e,s))}function Of(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(vw(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function vw(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ri&&Ne("event: "+n.toString()),Os(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="repo_interrupt",bw=25;class ww{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new gw,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=xr(),this.transactionQueueTree_=new Fl,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Iw(t,e,n){if(t.stats_=pl(t.repoInfo_),t.forceRestClient_||Zv())t.server_=new Or(t.repoInfo_,(s,i,r,o)=>{xu(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Du(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Te(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new Wt(t.repoInfo_,e,(s,i,r,o)=>{xu(t,s,i,r,o)},s=>{Du(t,s)},s=>{Cw(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=iy(t.repoInfo_,()=>new ib(t.stats_,t.server_)),t.infoData_=new Zy,t.infoSyncTree_=new Au({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Fi(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Bl(t,"connected",!1),t.serverSyncTree_=new Au({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Qe(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function xf(t){const n=t.infoData_.getNode(new ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Hi(t){return iw({timestamp:xf(t)})}function xu(t,e,n,s,i){t.dataUpdateCount++;const r=new ne(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Tr(n,c=>ge(c));o=Xb(t.serverSyncTree_,r,l,i)}else{const l=ge(n);o=wf(t.serverSyncTree_,r,l,i)}else if(s){const l=Tr(n,c=>ge(c));o=Yb(t.serverSyncTree_,r,l)}else{const l=ge(n);o=Fi(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ts(t,r)),Qe(t.eventQueue_,a,o)}function Du(t,e){Bl(t,"connected",e),e===!1&&kw(t)}function Cw(t,e){Ae(e,(n,s)=>{Bl(t,n,s)})}function Bl(t,e,n){const s=new ne("/.info/"+e),i=ge(n);t.infoData_.updateSnapshot(s,i);const r=Fi(t.infoSyncTree_,s,i);Qe(t.eventQueue_,s,r)}function yo(t){return t.nextWriteId_++}function Ew(t,e,n){const s=Zb(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=ge(i).withIndex(e._queryParams.getIndex());Ma(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Fi(t.serverSyncTree_,e._path,r);else{const a=Ti(t.serverSyncTree_,e);o=wf(t.serverSyncTree_,e._path,r,a)}return Qe(t.eventQueue_,e._path,o),Br(t.serverSyncTree_,e,n,null,!0),r},i=>(Ms(t,"get for query "+Te(e)+" failed: "+i),Promise.reject(new Error(i))))}function Sw(t,e,n,s,i){Ms(t,"set",{path:e.toString(),value:n,priority:s});const r=Hi(t),o=ge(n,s),a=po(t.serverSyncTree_,e),l=Ml(o,a,r),c=yo(t),u=Pl(t.serverSyncTree_,e,l,c,!0);vo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const v=h==="ok";v||We("set at "+e+" failed: "+h);const S=un(t.serverSyncTree_,c,!v);Qe(t.eventQueue_,e,S),wn(t,i,h,m)});const d=Wl(t,e);Ts(t,d),Qe(t.eventQueue_,d,[])}function Tw(t,e,n,s){Ms(t,"update",{path:e.toString(),value:n});let i=!0;const r=Hi(t),o={};if(Ae(n,(a,l)=>{i=!1,o[a]=Sf(ve(e,a),ge(l),t.serverSyncTree_,r)}),i)Ne("update() called with empty data.  Don't do anything."),wn(t,s,"ok",void 0);else{const a=yo(t),l=qb(t.serverSyncTree_,e,o,a);vo(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||We("update at "+e+" failed: "+c);const h=un(t.serverSyncTree_,a,!d),m=h.length>0?Ts(t,e):e;Qe(t.eventQueue_,m,h),wn(t,s,c,u)}),Ae(n,c=>{const u=Wl(t,ve(e,c));Ts(t,u)}),Qe(t.eventQueue_,e,[])}}function kw(t){Ms(t,"onDisconnectEvents");const e=Hi(t),n=xr();Pa(t.onDisconnect_,Z(),(i,r)=>{const o=Sf(i,r,t.serverSyncTree_,e);xs(n,i,o)});let s=[];Pa(n,Z(),(i,r)=>{s=s.concat(Fi(t.serverSyncTree_,i,r));const o=Wl(t,i);Ts(t,o)}),t.onDisconnect_=xr(),Qe(t.eventQueue_,Z(),s)}function Rw(t,e,n){t.server_.onDisconnectCancel(e.toString(),(s,i)=>{s==="ok"&&Ra(t.onDisconnect_,e),wn(t,n,s,i)})}function Mu(t,e,n,s){const i=ge(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(r,o)=>{r==="ok"&&xs(t.onDisconnect_,e,i),wn(t,s,r,o)})}function Pw(t,e,n,s,i){const r=ge(n,s);t.server_.onDisconnectPut(e.toString(),r.val(!0),(o,a)=>{o==="ok"&&xs(t.onDisconnect_,e,r),wn(t,i,o,a)})}function Nw(t,e,n,s){if(Sr(n)){Ne("onDisconnect().update() called with empty data.  Don't do anything."),wn(t,s,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,r)=>{i==="ok"&&Ae(n,(o,a)=>{const l=ge(a);xs(t.onDisconnect_,ve(e,o),l)}),wn(t,s,i,r)})}function Aw(t,e,n){let s;z(e._path)===".info"?s=Ma(t.infoSyncTree_,e,n):s=Ma(t.serverSyncTree_,e,n),Af(t.eventQueue_,e._path,s)}function Df(t,e,n){let s;z(e._path)===".info"?s=Br(t.infoSyncTree_,e,n):s=Br(t.serverSyncTree_,e,n),Af(t.eventQueue_,e._path,s)}function Ow(t){t.persistentConnection_&&t.persistentConnection_.interrupt(yw)}function Ms(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ne(n,...e)}function wn(t,e,n,s){e&&Os(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function xw(t,e,n,s,i,r){Ms(t,"transaction on "+e);const o={path:e,update:n,onComplete:s,status:null,order:Nh(),applyLocally:r,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Vl(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{$i("transaction failed: Data returned ",l,o.path),o.status=0;const c=mo(t.transactionQueueTree_,e),u=Jn(c)||[];u.push(o),Ul(c,u);let d;typeof l=="object"&&l!==null&&dt(l,".priority")?(d=Bn(l,".priority"),T(Hl(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=(po(t.serverSyncTree_,e)||B.EMPTY_NODE).getPriority().val();const h=Hi(t),m=ge(l,d),v=Ml(m,a,h);o.currentOutputSnapshotRaw=m,o.currentOutputSnapshotResolved=v,o.currentWriteId=yo(t);const S=Pl(t.serverSyncTree_,e,v,o.currentWriteId,o.applyLocally);Qe(t.eventQueue_,e,S),bo(t,t.transactionQueueTree_)}}function Vl(t,e,n){return po(t.serverSyncTree_,e,n)||B.EMPTY_NODE}function bo(t,e=t.transactionQueueTree_){if(e||wo(t,e),Jn(e)){const n=Lf(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Dw(t,Ui(e),n)}else Tf(e)&&go(e,n=>{bo(t,n)})}function Dw(t,e,n){const s=n.map(c=>c.currentWriteId),i=Vl(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];T(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Ve(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ms(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(un(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();wo(t,mo(t.transactionQueueTree_,e)),bo(t,t.transactionQueueTree_),Qe(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)Os(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{We("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Ts(t,e)}},o)}function Ts(t,e){const n=Mf(t,e),s=Ui(n),i=Lf(t,n);return Mw(t,i,s),s}function Mw(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ve(n,l.path);let u=!1,d;if(T(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(un(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=bw)u=!0,d="maxretry",i=i.concat(un(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Vl(t,l.path,o);l.currentInputSnapshot=h;const m=e[a].update(h.val());if(m!==void 0){$i("transaction failed: Data returned ",m,l.path);let v=ge(m);typeof m=="object"&&m!=null&&dt(m,".priority")||(v=v.updatePriority(h.getPriority()));const N=l.currentWriteId,F=Hi(t),L=Ml(v,h,F);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=L,l.currentWriteId=yo(t),o.splice(o.indexOf(N),1),i=i.concat(Pl(t.serverSyncTree_,l.path,L,l.currentWriteId,l.applyLocally)),i=i.concat(un(t.serverSyncTree_,N,!0))}else u=!0,d="nodata",i=i.concat(un(t.serverSyncTree_,l.currentWriteId,!0))}Qe(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}wo(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Os(s[a]);bo(t,t.transactionQueueTree_)}function Mf(t,e){let n,s=t.transactionQueueTree_;for(n=z(e);n!==null&&Jn(s)===void 0;)s=mo(s,n),e=ce(e),n=z(e);return s}function Lf(t,e){const n=[];return Ff(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Ff(t,e,n){const s=Jn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);go(e,i=>{Ff(t,i,n)})}function wo(t,e){const n=Jn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Ul(e,n.length>0?n:void 0)}go(e,s=>{wo(t,s)})}function Wl(t,e){const n=Ui(Mf(t,e)),s=mo(t.transactionQueueTree_,e);return lw(s,i=>{ea(t,i)}),ea(t,s),kf(s,i=>{ea(t,i)}),n}function ea(t,e){const n=Jn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(un(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ul(e,void 0):n.length=r+1,Qe(t.eventQueue_,Ui(e),i);for(let o=0;o<s.length;o++)Os(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Fw(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):We(`Invalid query segment '${n}' in query '${t}'`)}return e}const Lu=function(t,e){const n=Uw(t),s=n.namespace;n.domain==="firebase.com"&&Yt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Yt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||jv();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Wh(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ne(n.pathString)}},Uw=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=Lw(t.substring(u,d)));const h=Fw(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const v=e.indexOf(".");s=e.substring(0,v).toLowerCase(),n=e.substring(v+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",$w=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Fu.charAt(n%64),n=Math.floor(n/64);T(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Fu.charAt(e[i]);return T(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Te(this.snapshot.exportVal())}}class $f{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Hw{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new it;return Rw(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Mn("OnDisconnect.remove",this._path);const e=new it;return Mu(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Mn("OnDisconnect.set",this._path),Vr("OnDisconnect.set",e,this._path,!1);const n=new it;return Mu(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Mn("OnDisconnect.setWithPriority",this._path),Vr("OnDisconnect.setWithPriority",e,this._path,!1),pw("OnDisconnect.setWithPriority",n);const s=new it;return Pw(this._repo,this._path,e,n,s.wrapCallback(()=>{})),s.promise}update(e){Mn("OnDisconnect.update",this._path),Pf("OnDisconnect.update",e,this._path);const n=new it;return Nw(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class Io{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return q(this._path)?null:ml(this._path)}get ref(){return new ht(this._repo,this._path)}get _queryIdentifier(){const e=wu(this._queryParams),n=hl(e);return n==="{}"?"default":n}get _queryObject(){return wu(this._queryParams)}isEqual(e){if(e=ke(e),!(e instanceof Io))return!1;const n=this._repo===e._repo,s=gl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ky(this._path)}}class ht extends Io{constructor(e,n){super(e,n,new wl,!1)}get parent(){const e=Xh(this._path);return e===null?null:new ht(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Kn{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ne(e),s=ks(this.ref,e);return new Kn(this._node.getChild(n),s,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Kn(i,ks(this.ref,s),_e)))}hasChild(e){const n=new ne(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ee(t,e){return t=ke(t),t._checkNotDeleted("ref"),e!==void 0?ks(t._root,e):t._root}function ks(t,e){return t=ke(t),z(t._path)===null?_w("child","path",e):Nf("child","path",e),new ht(t._repo,ve(t._path,e))}function Bf(t){return t=ke(t),new Hw(t._repo,t._path)}function Bw(t,e){t=ke(t),Mn("push",t._path),Vr("push",e,t._path,!0);const n=xf(t._repo),s=$w(n),i=ks(t,s),r=ks(t,s);let o;return e!=null?o=In(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function In(t,e){t=ke(t),Mn("set",t._path),Vr("set",e,t._path,!1);const n=new it;return Sw(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Vw(t,e){Pf("update",e,t._path);const n=new it;return Tw(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Bi(t){t=ke(t);const e=new Hf(()=>{}),n=new Co(e);return Ew(t._repo,t,n).then(s=>new Kn(s,new ht(t._repo,t._path),t._queryParams.getIndex()))}class Co{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Uf("value",this,new Kn(e.snapshotNode,new ht(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new $f(this,e,n):null}matches(e){return e instanceof Co?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class jl{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new $f(this,e,n):null}createEvent(e,n){T(e.childName!=null,"Child events should have a childName.");const s=ks(new ht(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Uf(e.type,this,new Kn(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof jl?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Vf(t,e,n,s,i){const r=new Hf(n,void 0),o=e==="value"?new Co(r):new jl(e,r);return Aw(t._repo,t,o),()=>Df(t._repo,t,o)}function Vi(t,e,n,s){return Vf(t,"value",e)}function Ww(t,e,n,s){return Vf(t,"child_added",e)}function Ut(t,e,n){Df(t._repo,t,null)}class jw{}class Gw extends jw{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Io(e._repo,e._path,Xy(e._queryParams,this._limit),e._orderByCalled)}}function Kw(t){if(Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new Gw(t)}function zw(t,...e){let n=ke(t);for(const s of e)n=s._apply(n);return n}Hb(ht);Gb(ht);/**
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
 */const qw="FIREBASE_DATABASE_EMULATOR_HOST",Fa={};let Yw=!1;function Jw(t,e,n,s){t.repoInfo_=new Wh(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function Qw(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Yt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ne("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Lu(r,i),a=o.repoInfo,l;typeof process<"u"&&su&&(l=su[qw]),l?(r=`http://${l}?ns=${a.namespace}`,o=Lu(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new ty(t.name,t.options,e);mw("Invalid Firebase Database URL",o),q(o.path)||Yt("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Zw(a,t,c,new ey(t.name,n));return new eI(u,t)}function Xw(t,e){const n=Fa[e];(!n||n[t.key]!==t)&&Yt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Ow(t),delete n[t.key]}function Zw(t,e,n,s){let i=Fa[e.name];i||(i={},Fa[e.name]=i);let r=i[t.toURLString()];return r&&Yt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ww(t,Yw,n,s),i[t.toURLString()]=r,r}class eI{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Iw(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ht(this._repo,Z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Xw(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Yt("Cannot call "+e+" on a deleted database.")}}function tI(t=Sh(),e){const n=dl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=pg("database");s&&nI(n,...s)}return n}function nI(t,e,n,s={}){t=ke(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Yt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Yt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new cr(cr.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:_g(s.mockUserToken,t.app.options.projectId);r=new cr(o)}Jw(i,e,n,r)}/**
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
 */function sI(t){$v(As),ws(new Vn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Qw(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),fn(iu,ru,t),fn(iu,ru,"esm2017")}/**
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
 */class iI{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function rI(t,e,n){var s;if(t=ke(t),Mn("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(s=void 0)!==null&&s!==void 0?s:!0,r=new it,o=(l,c,u)=>{let d=null;l?r.reject(l):(d=new Kn(u,new ht(t._repo,t._path),_e),r.resolve(new iI(c,d)))},a=Vi(t,()=>{});return xw(t._repo,t._path,e,o,a,i),r.promise}Wt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Wt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};sI();function Gl(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Wf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oI=Wf,jf=new xi("auth","Firebase",Wf());/**
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
 */const Wr=new cl("@firebase/auth");function aI(t,...e){Wr.logLevel<=ie.WARN&&Wr.warn(`Auth (${As}): ${t}`,...e)}function ur(t,...e){Wr.logLevel<=ie.ERROR&&Wr.error(`Auth (${As}): ${t}`,...e)}/**
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
 */function Jt(t,...e){throw Kl(t,...e)}function St(t,...e){return Kl(t,...e)}function Gf(t,e,n){const s=Object.assign(Object.assign({},oI()),{[e]:n});return new xi("auth","Firebase",s).create(e,{appName:t.name})}function mn(t){return Gf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kl(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return jf.create(t,...e)}function W(t,e,...n){if(!t)throw Kl(e,...n)}function $t(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ur(e),new Error(e)}function Qt(t,e){t||$t(e)}/**
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
 */function Ua(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lI(){return Uu()==="http:"||Uu()==="https:"}function Uu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function cI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lI()||gg()||"connection"in navigator)?navigator.onLine:!0}function uI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Wi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qt(n>e,"Short delay should be less than long delay!"),this.isMobile=ll()||bh()}get(){return cI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zl(t,e){Qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Kf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const hI=new Wi(3e4,6e4);function Eo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ls(t,e,n,s,i={}){return zf(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Ns(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},r);return mg()||(c.referrerPolicy="no-referrer"),Kf.fetch()(Yf(t,t.config.apiHost,n,a),c)})}async function zf(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},dI),e);try{const i=new fI(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw sr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw sr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw sr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw sr(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Gf(t,u,c);Jt(t,u)}}catch(i){if(i instanceof Sn)throw i;Jt(t,"network-request-failed",{message:String(i)})}}async function qf(t,e,n,s,i={}){const r=await Ls(t,e,n,s,i);return"mfaPendingCredential"in r&&Jt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Yf(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?zl(t.config,i):`${t.config.apiScheme}://${i}`}class fI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(St(this.auth,"network-request-failed")),hI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function sr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=St(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function pI(t,e){return Ls(t,"POST","/v1/accounts:delete",e)}async function Jf(t,e){return Ls(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ui(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _I(t,e=!1){const n=ke(t),s=await n.getIdToken(e),i=ql(s);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:ui(ta(i.auth_time)),issuedAtTime:ui(ta(i.iat)),expirationTime:ui(ta(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ta(t){return Number(t)*1e3}function ql(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ur("JWT malformed, contained fewer than 3 sections"),null;try{const i=Er(n);return i?JSON.parse(i):(ur("Failed to decode base64 JWT payload"),null)}catch(i){return ur("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $u(t){const e=ql(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ki(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Sn&&mI(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function mI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class gI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $a{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ui(this.lastLoginAt),this.creationTime=ui(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await ki(t,Jf(n,{idToken:s}));W(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Qf(r.providerUserInfo):[],a=yI(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new $a(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function vI(t){const e=ke(t);await jr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yI(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Qf(t){return t.map(e=>{var{providerId:n}=e,s=Gl(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function bI(t,e){const n=await zf(t,{},async()=>{const s=Ns({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Yf(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Kf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function wI(t,e){return Ls(t,"POST","/v2/accounts:revokeToken",Eo(t,e))}/**
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
 */class ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$u(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=$u(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await bI(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ds;return s&&(W(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(W(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ds,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
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
 */function tn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ht{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Gl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new $a(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await ki(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _I(this,e)}reload(){return vI(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ht(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await jr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Lt(this.auth.app))return Promise.reject(mn(this.auth));const e=await this.getIdToken();return await ki(this,pI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,F=(c=n.createdAt)!==null&&c!==void 0?c:void 0,L=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:J,emailVerified:$,isAnonymous:ye,providerData:et,stsTokenManager:ze}=n;W(J&&ze,e,"internal-error");const ft=ds.fromJSON(this.name,ze);W(typeof J=="string",e,"internal-error"),tn(d,e.name),tn(h,e.name),W(typeof $=="boolean",e,"internal-error"),W(typeof ye=="boolean",e,"internal-error"),tn(m,e.name),tn(v,e.name),tn(S,e.name),tn(N,e.name),tn(F,e.name),tn(L,e.name);const en=new Ht({uid:J,auth:e,email:h,emailVerified:$,displayName:d,isAnonymous:ye,photoURL:v,phoneNumber:m,tenantId:S,stsTokenManager:ft,createdAt:F,lastLoginAt:L});return et&&Array.isArray(et)&&(en.providerData=et.map(Pt=>Object.assign({},Pt))),N&&(en._redirectEventId=N),en}static async _fromIdTokenResponse(e,n,s=!1){const i=new ds;i.updateFromServerResponse(n);const r=new Ht({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await jr(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];W(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Qf(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new ds;a.updateFromIdToken(s);const l=new Ht({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new $a(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const Hu=new Map;function Bt(t){Qt(t instanceof Function,"Expected a class definition");let e=Hu.get(t);return e?(Qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hu.set(t,e),e)}/**
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
 */class Xf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Xf.type="NONE";const Bu=Xf;/**
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
 */function dr(t,e,n){return`firebase:${t}:${e}:${n}`}class hs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=dr(this.userKey,i.apiKey,r),this.fullPersistenceKey=dr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ht._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new hs(Bt(Bu),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Bt(Bu);const o=dr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Ht._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new hs(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new hs(r,e,s))}}/**
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
 */function Vu(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(np(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ip(e))return"Blackberry";if(rp(e))return"Webos";if(ep(e))return"Safari";if((e.includes("chrome/")||tp(e))&&!e.includes("edge/"))return"Chrome";if(sp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Zf(t=je()){return/firefox\//i.test(t)}function ep(t=je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tp(t=je()){return/crios\//i.test(t)}function np(t=je()){return/iemobile/i.test(t)}function sp(t=je()){return/android/i.test(t)}function ip(t=je()){return/blackberry/i.test(t)}function rp(t=je()){return/webos/i.test(t)}function Yl(t=je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function II(t=je()){var e;return Yl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function CI(){return vg()&&document.documentMode===10}function op(t=je()){return Yl(t)||sp(t)||rp(t)||ip(t)||/windows phone/i.test(t)||np(t)}/**
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
 */function ap(t,e=[]){let n;switch(t){case"Browser":n=Vu(je());break;case"Worker":n=`${Vu(je())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${As}/${s}`}/**
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
 */class EI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function SI(t,e={}){return Ls(t,"GET","/v2/passwordPolicy",Eo(t,e))}/**
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
 */const TI=6;class kI{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:TI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class RI{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wu(this),this.idTokenSubscription=new Wu(this),this.beforeStateQueue=new EI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Bt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await hs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Jf(this,{idToken:e}),s=await Ht._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Lt(this.app))return Promise.reject(mn(this));const n=e?ke(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Lt(this.app)?Promise.reject(mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Lt(this.app)?Promise.reject(mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SI(this),n=new kI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await wI(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Bt(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await hs.create(this,[Bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ap(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&aI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function So(t){return ke(t)}class Wu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Rg(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Jl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function PI(t){Jl=t}function NI(t){return Jl.loadJS(t)}function AI(){return Jl.gapiScript}function OI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function xI(t,e){const n=dl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(kr(r,e??{}))return i;Jt(i,"already-initialized")}return n.initialize({options:e})}function DI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Bt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function MI(t,e,n){const s=So(t);W(s._canInitEmulator,s,"emulator-config-failed"),W(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=lp(e),{host:o,port:a}=LI(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),FI()}function lp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function LI(t){const e=lp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:ju(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:ju(o)}}}function ju(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function FI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class cp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $t("not implemented")}_getIdTokenResponse(e){return $t("not implemented")}_linkToIdToken(e,n){return $t("not implemented")}_getReauthenticationResolver(e){return $t("not implemented")}}/**
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
 */async function fs(t,e){return qf(t,"POST","/v1/accounts:signInWithIdp",Eo(t,e))}/**
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
 */const UI="http://localhost";class zn extends cp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Gl(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new zn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,fs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fs(e,n)}buildRequest(){const e={requestUri:UI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ns(n)}return e}}/**
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
 */class up{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ji extends up{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class sn extends ji{constructor(){super("facebook.com")}static credential(e){return zn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";sn.PROVIDER_ID="facebook.com";/**
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
 */class rn extends ji{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return rn.credential(n,s)}catch{return null}}}rn.GOOGLE_SIGN_IN_METHOD="google.com";rn.PROVIDER_ID="google.com";/**
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
 */class on extends ji{constructor(){super("github.com")}static credential(e){return zn._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.GITHUB_SIGN_IN_METHOD="github.com";on.PROVIDER_ID="github.com";/**
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
 */class an extends ji{constructor(){super("twitter.com")}static credential(e,n){return zn._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return an.credential(n,s)}catch{return null}}}an.TWITTER_SIGN_IN_METHOD="twitter.com";an.PROVIDER_ID="twitter.com";/**
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
 */async function $I(t,e){return qf(t,"POST","/v1/accounts:signUp",Eo(t,e))}/**
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
 */class Cn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Ht._fromIdTokenResponse(e,s,i),o=Gu(s);return new Cn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Gu(s);return new Cn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Gu(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function HI(t){var e;if(Lt(t.app))return Promise.reject(mn(t));const n=So(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Cn({user:n.currentUser,providerId:null,operationType:"signIn"});const s=await $I(n,{returnSecureToken:!0}),i=await Cn._fromIdTokenResponse(n,"signIn",s,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class Gr extends Sn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Gr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Gr(e,n,s,i)}}function dp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Gr._fromErrorAndOperation(t,r,e,s):r})}async function BI(t,e,n=!1){const s=await ki(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Cn._forOperation(t,"link",s)}/**
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
 */async function VI(t,e,n=!1){const{auth:s}=t;if(Lt(s.app))return Promise.reject(mn(s));const i="reauthenticate";try{const r=await ki(t,dp(s,i,e,t),n);W(r.idToken,s,"internal-error");const o=ql(r.idToken);W(o,s,"internal-error");const{sub:a}=o;return W(t.uid===a,s,"user-mismatch"),Cn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Jt(s,"user-mismatch"),r}}/**
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
 */async function WI(t,e,n=!1){if(Lt(t.app))return Promise.reject(mn(t));const s="signIn",i=await dp(t,s,e),r=await Cn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}/**
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
 */function jI(t,e){return ke(t).setPersistence(e)}function GI(t,e,n,s){return ke(t).onIdTokenChanged(e,n,s)}function KI(t,e,n){return ke(t).beforeAuthStateChanged(e,n)}function zI(t,e,n,s){return ke(t).onAuthStateChanged(e,n,s)}function qI(t){return ke(t).signOut()}const Kr="__sak";/**
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
 */class hp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Kr,"1"),this.storage.removeItem(Kr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const YI=1e3,JI=10;class fp extends hp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=op(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);CI()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,JI):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},YI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fp.type="LOCAL";const QI=fp;/**
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
 */class pp extends hp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pp.type="SESSION";const Ql=pp;/**
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
 */function XI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class To{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new To(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await XI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}To.receivers=[];/**
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
 */function Xl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ZI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Xl("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Tt(){return window}function eC(t){Tt().location.href=t}/**
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
 */function _p(){return typeof Tt().WorkerGlobalScope<"u"&&typeof Tt().importScripts=="function"}async function tC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sC(){return _p()?self:null}/**
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
 */const mp="firebaseLocalStorageDb",iC=1,zr="firebaseLocalStorage",gp="fbase_key";class Gi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ko(t,e){return t.transaction([zr],e?"readwrite":"readonly").objectStore(zr)}function rC(){const t=indexedDB.deleteDatabase(mp);return new Gi(t).toPromise()}function Ha(){const t=indexedDB.open(mp,iC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(zr,{keyPath:gp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(zr)?e(s):(s.close(),await rC(),e(await Ha()))})})}async function Ku(t,e,n){const s=ko(t,!0).put({[gp]:e,value:n});return new Gi(s).toPromise()}async function oC(t,e){const n=ko(t,!1).get(e),s=await new Gi(n).toPromise();return s===void 0?null:s.value}function zu(t,e){const n=ko(t,!0).delete(e);return new Gi(n).toPromise()}const aC=800,lC=3;class vp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ha(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>lC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _p()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=To._getInstance(sC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tC(),!this.activeServiceWorker)return;this.sender=new ZI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ha();return await Ku(e,Kr,"1"),await zu(e,Kr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ku(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>oC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zu(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=ko(i,!1).getAll();return new Gi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vp.type="LOCAL";const cC=vp;new Wi(3e4,6e4);/**
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
 */function uC(t,e){return e?Bt(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Zl extends cp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dC(t){return WI(t.auth,new Zl(t),t.bypassAuthState)}function hC(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),VI(n,new Zl(t),t.bypassAuthState)}async function fC(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),BI(n,new Zl(t),t.bypassAuthState)}/**
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
 */class yp{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dC;case"linkViaPopup":case"linkViaRedirect":return fC;case"reauthViaPopup":case"reauthViaRedirect":return hC;default:Jt(this.auth,"internal-error")}}resolve(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const pC=new Wi(2e3,1e4);class is extends yp{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,is.currentPopupAction&&is.currentPopupAction.cancel(),is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const e=Xl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(St(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(St(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(St(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pC.get())};e()}}is.currentPopupAction=null;/**
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
 */const _C="pendingRedirect",hr=new Map;class mC extends yp{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=hr.get(this.auth._key());if(!e){try{const s=await gC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}hr.set(this.auth._key(),e)}return this.bypassAuthState||hr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gC(t,e){const n=bC(e),s=yC(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function vC(t,e){hr.set(t._key(),e)}function yC(t){return Bt(t._redirectPersistence)}function bC(t){return dr(_C,t.config.apiKey,t.name)}async function wC(t,e,n=!1){if(Lt(t.app))return Promise.reject(mn(t));const s=So(t),i=uC(s,e),o=await new mC(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const IC=10*60*1e3;class CC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!bp(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(St(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IC&&this.cachedEventUids.clear(),this.cachedEventUids.has(qu(e))}saveEventToCache(e){this.cachedEventUids.add(qu(e)),this.lastProcessedEventTime=Date.now()}}function qu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function bp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function EC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bp(t);default:return!1}}/**
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
 */async function SC(t,e={}){return Ls(t,"GET","/v1/projects",e)}/**
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
 */const TC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kC=/^https?/;async function RC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await SC(t);for(const n of e)try{if(PC(n))return}catch{}Jt(t,"unauthorized-domain")}function PC(t){const e=Ua(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!kC.test(n))return!1;if(TC.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const NC=new Wi(3e4,6e4);function Yu(){const t=Tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AC(t){return new Promise((e,n)=>{var s,i,r;function o(){Yu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yu(),n(St(t,"network-request-failed"))},timeout:NC.get()})}if(!((i=(s=Tt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Tt().gapi)===null||r===void 0)&&r.load)o();else{const a=OI("iframefcb");return Tt()[a]=()=>{gapi.load?o():n(St(t,"network-request-failed"))},NI(`${AI()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw fr=null,e})}let fr=null;function OC(t){return fr=fr||AC(t),fr}/**
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
 */const xC=new Wi(5e3,15e3),DC="__/auth/iframe",MC="emulator/auth/iframe",LC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UC(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zl(e,MC):`https://${t.config.authDomain}/${DC}`,s={apiKey:e.apiKey,appName:t.name,v:As},i=FC.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Ns(s).slice(1)}`}async function $C(t){const e=await OC(t),n=Tt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:UC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LC,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=St(t,"network-request-failed"),a=Tt().setTimeout(()=>{r(o)},xC.get());function l(){Tt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const HC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BC=500,VC=600,WC="_blank",jC="http://localhost";class Ju{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GC(t,e,n,s=BC,i=VC){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},HC),{width:s.toString(),height:i.toString(),top:r,left:o}),c=je().toLowerCase();n&&(a=tp(c)?WC:n),Zf(c)&&(e=e||jC,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[m,v])=>`${h}${m}=${v},`,"");if(II(c)&&a!=="_self")return KC(e||"",a),new Ju(null);const d=window.open(e||"",a,u);W(d,t,"popup-blocked");try{d.focus()}catch{}return new Ju(d)}function KC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const zC="__/auth/handler",qC="emulator/auth/handler",YC=encodeURIComponent("fac");async function Qu(t,e,n,s,i,r){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:As,eventId:i};if(e instanceof up){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Sr(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof ji){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${YC}=${encodeURIComponent(l)}`:"";return`${JC(t)}?${Ns(a).slice(1)}${c}`}function JC({config:t}){return t.emulator?zl(t,qC):`https://${t.authDomain}/${zC}`}/**
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
 */const na="webStorageSupport";class QC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ql,this._completeRedirectFn=wC,this._overrideRedirectResult=vC}async _openPopup(e,n,s,i){var r;Qt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Qu(e,n,s,Ua(),i);return GC(e,o,Xl())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Qu(e,n,s,Ua(),i);return eC(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Qt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await $C(e),s=new CC(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(na,{type:na},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[na];o!==void 0&&n(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=RC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return op()||ep()||Yl()}}const XC=QC;var Xu="@firebase/auth",Zu="1.7.9";/**
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
 */class ZC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function eE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tE(t){ws(new Vn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;W(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ap(t)},c=new RI(s,i,r,l);return DI(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ws(new Vn("auth-internal",e=>{const n=So(e.getProvider("auth").getImmediate());return(s=>new ZC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(Xu,Zu,eE(t)),fn(Xu,Zu,"esm2017")}/**
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
 */const nE=5*60,sE=yh("authIdTokenMaxAge")||nE;let ed=null;const iE=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>sE)return;const i=n==null?void 0:n.token;ed!==i&&(ed=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rE(t=Sh()){const e=dl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xI(t,{popupRedirectResolver:XC,persistence:[cC,QI,Ql]}),s=yh("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=iE(r.toString());KI(n,o,()=>o(n.currentUser)),GI(n,a=>o(a))}}const i=gh("auth");return i&&MI(n,`http://${i}`),n}function oE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}PI({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=St("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",oE().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tE("Browser");var aE="firebase",lE="10.14.1";/**
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
 */fn(aE,lE,"app");const cE={apiKey:"AIzaSyDzJsJYfTcWaeC5f43EXG-brzAaY7_BBk8",authDomain:"seep-7fe1d.firebaseapp.com",databaseURL:"https://seep-7fe1d-default-rtdb.firebaseio.com",projectId:"seep-7fe1d",storageBucket:"seep-7fe1d.firebasestorage.app",messagingSenderId:"681624379623",appId:"1:681624379623:web:d9e10ac7318f96e98d0242"},wp=Eh(cE),Se=tI(wp),Ro=rE(wp);jI(Ro,Ql);const uE=["S","H","D","C"],dE={S:"♠",H:"♥",D:"♦",C:"♣"},td={S:0,H:1,D:2,C:3},hE={1:"A",11:"J",12:"Q",13:"K"},qr=100,Q=t=>hE[t]||String(t),Ip=t=>dE[t],Cp=t=>t==="H"||t==="D";function Yr(t){return t.suit==="S"?t.rank:t.suit==="D"&&t.rank===10?6:t.rank===1?1:0}function ps(t){return t.type==="house"?t.value:t.card.rank}function ec(t){return t.cards.reduce((e,n)=>e+n.rank,0)>=2*t.value}function tc(t){return t.type==="house"?t.cards:[t.card]}function fE(t,e){const n=new Set([0]);for(const s of t){for(const i of[...n])n.add(i+s);if(n.has(e))return!0}return n.has(e)}function pE(t,e){function n(s,i,r){return i===0?r:s>=t.length||i<0?null:n(s+1,i-t[s],[...r,s])??n(s+1,i,r)}return n(0,e,[])}function nc(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}function sc(){const t=[];for(const e of uE)for(let n=1;n<=13;n++)t.push({suit:e,rank:n});return t}function Rs(t){t.sort((e,n)=>e.rank-n.rank||td[e.suit]-td[n.suit])}function ic(){return{deck:nc(sc()),hands:[[],[],[],[]],floor:[],captured:[[],[]],scores:[0,0],seepBonus:[0,0],currentPlayer:0,bidder:0,bidValue:null,phase:"bid",roundNum:1,isFirstTurn:!0,handsDealt:!1,lastCaptureTeam:null,playerNames:null,finalEligible:null,finalHouseVal:null,finalAnnouncement:null}}function Ba(t,e){let n=!0;for(;n;){n=!1;const s=t.map((r,o)=>({it:r,i:o})).filter(r=>r.it.type==="card");if(!s.length)break;const i=pE(s.map(r=>r.it.card.rank),e.value);if(i!==null){const r=i.map(o=>s[o].i);e.cards.push(...r.map(o=>t[o].card)),r.sort((o,a)=>a-o).forEach(o=>t.splice(o,1)),n=!0}}}const _E=Xt({localUid:null,localName:"",currentGameId:null,localSeat:null,hostUid:null,screen:"home"});function Xe(){return{session:_E}}function mE(t,e){if(e.selHandIdx===null)return null;const n=t.currentPlayer,s=t.hands[n],i=s[e.selHandIdx],r=e.selFloorIdxs.map(o=>t.floor[o]);return{floor:t.floor,floorVals:t.floor.map(ps),hand:s,handCard:i,handIdx:e.selHandIdx,selItems:r,selSum:r.reduce((o,a)=>o+ps(a),0),selLoose:r.filter(o=>o.type==="card").map(o=>o.card),selHouses:r.filter(o=>o.type==="house"),remainder:s.filter((o,a)=>a!==e.selHandIdx),team:n%2,player:n,isFirstTurn:t.isFirstTurn,bidder:t.bidder,bidValue:t.bidValue,selFloorIdxs:e.selFloorIdxs}}function gE(t){if(t.floor.length===0)return{valid:!1,reason:"Floor is empty"};const e=t.handCard.rank,n=t.floor.filter(i=>i.type==="house"),s=t.floor.filter(i=>i.type==="card");for(const i of n)if(i.value!==e)return{valid:!1,reason:`House of ${Q(i.value)} cannot be swept by ${Q(e)}`};if(s.length>0){const i=s.reduce((r,o)=>r+o.card.rank,0);if(i!==e)return{valid:!1,reason:`Loose cards sum to ${i}, not ${e} — cannot seep`}}return{valid:!0,reason:"Seep! Sweep the entire floor",meta:{}}}function vE(t){return t.selItems.length===0?{valid:!1,reason:"No floor items selected"}:t.isFirstTurn&&t.player===t.bidder&&t.handCard.rank!==t.bidValue?{valid:!1,reason:`First turn: can only pick with the bid card (${Q(t.bidValue)})`}:t.handCard.rank!==t.selSum?{valid:!1,reason:`Selected sum ${t.selSum} ≠ ${Q(t.handCard.rank)}`}:{valid:!0,reason:`Pick ${t.selItems.length} floor item(s)`,meta:{}}}function yE(t,e){return t.remainder.some(n=>n.rank===e)||t.floor.some(n=>n.type==="house"&&n.team===t.team&&n.value===e)}function bE(t){const e=t.selLoose.reduce((o,a)=>o+a.rank,0),n=t.selHouses.reduce((o,a)=>o+a.value,0);if(t.selHouses.length>0){const o=t.handCard.rank+e+n;if(o>13)return{valid:!1,reason:`Sum ${o} exceeds King (13)`};const a=t.floor.find(c=>c.type==="house"&&c.value===o&&!t.selHouses.includes(c));return a?(t.team===a.team?t.player===a.owner:a.sharedBy===void 0||t.player===a.sharedBy)&&t.handCard.rank===a.value&&!t.remainder.some(c=>c.rank===a.value)?{valid:!1,reason:`Must keep a ${Q(a.value)} in hand to capture this house`}:{valid:!0,reason:`Merge into house of ${Q(o)}`,meta:{houseVal:o,merge:!0}}:{valid:!1,reason:`No house of ${Q(o)} on the floor to merge into`}}if(t.selLoose.length===0)return{valid:!1,reason:"Select floor card(s) to combine with your hand card"};const s=t.handCard.rank===e,i=s?t.handCard.rank:t.handCard.rank+e;if(i<9)return{valid:!1,reason:`House value ${i} is below 9`};if(!s&&i>13)return{valid:!1,reason:`Sum ${i} exceeds King (13)`};if(t.isFirstTurn&&t.player===t.bidder&&t.handCard.rank===t.bidValue&&!t.remainder.some(o=>o.rank===t.bidValue))return{valid:!1,reason:`First turn: need a second ${Q(t.bidValue)} to build with it`};const r=t.floor.find(o=>o.type==="house"&&o.value===i);return r?r.shared?{valid:!1,reason:`House of ${Q(i)} is already shared and locked`}:{valid:!0,reason:`Contribute to house of ${Q(i)} (will become shared)`,meta:{houseVal:i}}:t.floor.filter(o=>o.type==="house").length>=2?{valid:!1,reason:"Maximum of 2 houses are already on the floor"}:yE(t,i)?{valid:!0,reason:`Build house of ${Q(i)}`,meta:{houseVal:i}}:{valid:!1,reason:`You need a key card (${Q(i)}) in hand to pick up this house later`}}function wE(t){if(t.selHouses.length!==1)return{valid:!1,reason:"Select exactly one house to upgrade"};const e=t.selHouses[0];if(e.shared)return{valid:!1,reason:"Cannot upgrade a shared house"};if(e.pucca)return{valid:!1,reason:"Cannot upgrade a Pucca house"};if(ec(e))return{valid:!1,reason:"House is already doubled — only cementing applies"};if(e.owner===t.player)return{valid:!1,reason:"You built this house — another player must modify it first"};const n=e.value+t.handCard.rank+t.selLoose.reduce((s,i)=>s+i.rank,0);return n<=e.value?{valid:!1,reason:"New value must exceed current"}:n>13?{valid:!1,reason:`New value ${n} exceeds King (13)`}:t.remainder.some(s=>s.rank===n)?{valid:!0,reason:`Upgrade house to ${Q(n)}`,meta:{houseVal:n}}:{valid:!1,reason:`Need key card (${Q(n)}) to claim the upgraded house`}}function IE(t){if(t.selHouses.length!==1)return{valid:!1,reason:"Select a house to reinforce"};const e=t.selHouses[0],n=t.handCard.rank+t.selLoose.reduce((r,o)=>r+o.rank,0);if(n!==e.value)return{valid:!1,reason:`Cards must total ${Q(e.value)} to reinforce — yours total ${n}`};let s;return t.team===e.team?s=t.player===e.owner:s=e.sharedBy===void 0||t.player===e.sharedBy,s&&t.handCard.rank===e.value&&!t.remainder.some(r=>r.rank===e.value)?{valid:!1,reason:`Must keep a ${Q(e.value)} in hand to capture this house`}:{valid:!0,reason:!e.shared&&e.team!==t.team?`Share house of ${Q(e.value)}`:`Reinforce house of ${Q(e.value)}`,meta:{houseVal:e.value}}}function CE(t){return t.isFirstTurn&&t.player===t.bidder&&t.handCard.rank!==t.bidValue?{valid:!1,reason:`First turn: can only throw the bid card (${Q(t.bidValue)})`}:fE(t.floor.map(ps),t.handCard.rank)?{valid:!1,reason:`${Q(t.handCard.rank)} can capture a floor item — must capture first`}:{valid:!0,reason:"Throw card to floor",meta:{}}}function EE(t){const e=gE(t);if(e.valid){const n={valid:!1,reason:"Seep is mandatory"};return{seep:e,pick:n,build:n,break:n,add:n,throw:n}}return{seep:{valid:!1},pick:vE(t),build:bE(t),break:wE(t),add:IE(t),throw:CE(t)}}function SE(t,e){if(t.seep.valid)return`⚡ Seep — sweep entire floor (${e.floor.length} items)!`;if(t.pick.valid)return`Pick: take ${e.selItems.length} floor item(s)`;if(t.build.valid){const i=t.build.meta.houseVal;return t.build.meta.merge?`Merge selected house(s) into House of ${Q(i)} (${i})`:`Build House of ${Q(i)} (${i})`}if(t.break.valid)return`Upgrade House → ${Q(t.break.meta.houseVal)}`;if(t.add.valid)return`Reinforce house of ${Q(t.add.meta.houseVal)} → Pucca ★`;const n=e.handCard,s=[];if(e.floor.forEach((i,r)=>{ps(i)===n.rank&&!e.selFloorIdxs.includes(r)&&s.push(`Click ${Q(ps(i))} on the floor to Pick it up`)}),!s.length){const i=e.floor.map((r,o)=>({v:ps(r),i:o})).filter(r=>r.v<n.rank);for(let r=0;r<i.length&&!s.length;r++)for(let o=r+1;o<i.length;o++)if(i[r].v+i[o].v===n.rank){s.push(`Select ${Q(i[r].v)} + ${Q(i[o].v)} on floor to Pick`);break}}return t.throw.valid?s.length?s[0]:"Select floor cards to act, or Throw":s.length?s[0]:`${Q(n.rank)} must capture — select matching floor cards`}function Ep(t,e){const n=mE(t,e);if(!n)return{pick:!1,seep:!1,build:!1,buildVal:null,buildMerge:!1,add:!1,throw:!1,msg:"Select a card from your hand."};const s=EE(n),i=s.build.valid||s.break.valid,r=i?s.build.valid?s.build.meta:s.break.meta:null;return{pick:s.pick.valid,seep:s.seep.valid,build:i,buildVal:r?r.houseVal:null,buildMerge:!!(r&&r.merge),add:s.add.valid,throw:s.throw.valid,msg:SE(s,n)}}const sa=Xt(ic()),yt=Xt({selHandIdx:null,selFloorIdxs:[]}),ir=Xt({visible:!1,message:"",onDone:null}),qs=Xt({visible:!1,house:null}),ia=Xt({visible:!1,message:""});function Ze(){const t=G(()=>Ep(sa,yt));function e(c){var u;return((u=sa.playerNames)==null?void 0:u[c])||`Player ${c+1}`}function n(c){yt.selHandIdx=yt.selHandIdx===c?null:c,yt.selFloorIdxs=[]}function s(c){const u=yt.selFloorIdxs.indexOf(c);u===-1?yt.selFloorIdxs.push(c):yt.selFloorIdxs.splice(u,1)}function i(){yt.selHandIdx=null,yt.selFloorIdxs=[]}function r(c){ia.message=`House ${c} Final!!`,ia.visible=!0}function o(c,u,d){ir.message=`+${u} points for Team ${c+1}!`,ir.visible=!0,ir.onDone=d}function a(c){qs.house=c,qs.visible=!0}function l(){qs.visible=!1,qs.house=null}return{gameState:sa,ui:yt,actions:t,seepOverlay:ir,housePeek:qs,finalBanner:ia,playerName:e,selectHandCard:n,toggleFloor:s,clearSel:i,showSeepOverlay:o,showFinalBanner:r,openHousePeek:a,closeHousePeek:l}}const{gameState:y,ui:Me,clearSel:Ki,showSeepOverlay:TE}=Ze(),{session:Je}=Xe();let Tn=()=>Promise.resolve();function kE(t){Tn=t}function RE(){Object.assign(y,ic()),y.hands[y.bidder]=y.deck.splice(0,4),Rs(y.hands[y.bidder]),y.phase="bid"}function ra(){y.deck=nc(sc()),y.hands[y.bidder]=y.deck.splice(0,4),Rs(y.hands[y.bidder]),Je.currentGameId&&Tn()}function PE(){y.hands[y.bidder].push(...y.deck.splice(0,8)),Rs(y.hands[y.bidder]);for(let t=0;t<4;t++)t!==y.bidder&&(y.hands[t]=y.deck.splice(0,12),Rs(y.hands[t]));y.handsDealt=!0}function NE(t){y.bidValue=t,y.floor=y.deck.splice(0,4).map(e=>({type:"card",card:e})),y.phase="play",Je.currentGameId&&Tn()}function Ys(t){if(Je.localSeat!==null&&Je.localSeat!==y.currentPlayer)return;const e=Ep(y,Me);if(!(t==="pick"&&!e.pick)&&!(t==="seep"&&!e.seep)&&!(t==="build"&&!e.build)&&!(t==="add"&&!e.add)&&!(t==="throw"&&!e.throw))switch(t){case"pick":nd(!1);break;case"seep":Me.selFloorIdxs=y.floor.map((n,s)=>s),nd(!0);break;case"build":AE(e.buildVal);break;case"add":OE();break;case"throw":xE();break}}function nd(t){const e=y.currentPlayer,n=e%2,s=y.hands[e][Me.selHandIdx],i=[...Me.selFloorIdxs.map(a=>y.floor[a]).flatMap(tc),s];y.hands[e].splice(Me.selHandIdx,1),[...Me.selFloorIdxs].sort((a,l)=>l-a).forEach(a=>y.floor.splice(a,1)),y.captured[n].push(...i),y.lastCaptureTeam=n;const r=y.isFirstTurn;if(y.isFirstTurn=!1,Ki(),(t||y.floor.length===0)&&!Sp()){const a=r?25:50;y.seepBonus[n]+=a,TE(n,a,Ri);return}Ri()}function AE(t){const e=y.currentPlayer,n=e%2,s=y.hands[e][Me.selHandIdx],r=[...Me.selFloorIdxs.map(a=>y.floor[a]).flatMap(tc),s];y.hands[e].splice(Me.selHandIdx,1),[...Me.selFloorIdxs].sort((a,l)=>l-a).forEach(a=>y.floor.splice(a,1));const o=y.floor.find(a=>a.type==="house"&&a.value===t);if(o)o.cards.push(...r),o.team!==n&&(o.shared||(o.shared=!0,o.sharedBy=e),o.pucca=!0),Ba(y.floor,o);else{const a={type:"house",cards:r,value:t,pucca:!1,owner:e,team:n,shared:!1,sharedBy:void 0};y.floor.push(a),Ba(y.floor,a)}y.finalEligible=e,y.finalHouseVal=t,y.isFirstTurn=!1,Ki(),Ri()}function OE(){const t=y.currentPlayer,e=y.hands[t][Me.selHandIdx],n=Me.selFloorIdxs.find(o=>y.floor[o].type==="house"),s=y.floor[n],i=Me.selFloorIdxs.filter(o=>y.floor[o].type==="card");s.cards.push(e,...i.map(o=>y.floor[o].card));const r=t%2;s.team!==r&&(s.shared||(s.shared=!0,s.sharedBy=t)),s.pucca=!0,y.hands[t].splice(Me.selHandIdx,1),i.sort((o,a)=>a-o).forEach(o=>y.floor.splice(o,1)),Ba(y.floor,s),y.finalEligible=t,y.finalHouseVal=s.value,y.isFirstTurn=!1,Ki(),Ri()}function xE(){const t=y.currentPlayer,e=y.hands[t][Me.selHandIdx];y.floor.push({type:"card",card:e}),y.hands[t].splice(Me.selHandIdx,1),y.isFirstTurn=!1,Ki(),Ri()}function Sp(){return y.hands.every(t=>t.length===0)}function DE(){y.finalEligible=null,y.finalHouseVal=null,Je.currentGameId&&Tn()}function ME(){Je.localSeat!==null&&Je.localSeat!==y.finalEligible||(y.finalAnnouncement={seat:y.finalEligible,houseVal:y.finalHouseVal},y.finalEligible=null,y.finalHouseVal=null,Je.currentGameId&&Tn())}function Ri(){if(y.finalAnnouncement=null,y.handsDealt||PE(),Sp()){LE();return}y.currentPlayer=(y.currentPlayer+1)%4;let t=0;for(;y.hands[y.currentPlayer].length===0&&t++<4;)y.currentPlayer=(y.currentPlayer+1)%4;Je.currentGameId&&Tn()}function LE(){y.floor.length>0&&y.lastCaptureTeam!==null&&(y.captured[y.lastCaptureTeam].push(...y.floor.flatMap(tc)),y.floor=[]);const t=y.captured[0].reduce((n,s)=>n+Yr(s),0)+y.seepBonus[0],e=y.captured[1].reduce((n,s)=>n+Yr(s),0)+y.seepBonus[1];y.scores[0]+=t,y.scores[1]+=e,y.phase=y.scores[0]>=qr||y.scores[1]>=qr?"gameover":"roundend",y._roundS0=t,y._roundS1=e,Je.currentGameId&&Tn()}function FE(){Je.currentGameId&&Je.localSeat!==y.bidder||(y.roundNum++,Object.assign(y,{deck:nc(sc()),hands:[[],[],[],[]],floor:[],captured:[[],[]],seepBonus:[0,0],bidder:(y.bidder+1)%4,bidValue:null,phase:"bid",isFirstTurn:!0,handsDealt:!1,lastCaptureTeam:null,finalEligible:null,finalHouseVal:null,finalAnnouncement:null}),Ki(),y.hands[y.bidder]=y.deck.splice(0,4),Rs(y.hands[y.bidder]),Je.currentGameId&&Tn())}const{session:oa}=Xe(),_s=Ce([]),Ln=Ce(0);let Fn=null;function Tp(t){Fn&&(Ut(Fn),Fn=null),_s.value=[],Ln.value=0;const e=zw(Ee(Se,`games/${t}/chat`),Kw(50));Fn=e,Ww(e,n=>{_s.value.push(n.val()),Ln.value++})}function UE(){Fn&&(Ut(Fn),Fn=null),_s.value=[],Ln.value=0}async function $E(t){const e=t.trim();!e||!oa.currentGameId||await Bw(Ee(Se,`games/${oa.currentGameId}/chat`),{name:oa.localName||"Player",text:e,ts:Date.now()})}const{session:A}=Xe(),{gameState:rc,ui:sd}=Ze();let Un=null,di=null,ln=null;const kp=Ce(null),Rp=Ce({});let cn=null;function Pp(t){cn&&(Ut(cn),cn=null),cn=Ee(Se,`games/${t}/seatMap`),Vi(cn,e=>{Rp.value=e.val()||{}})}function Np(t){ln&&(Ut(ln),ln=null),ln=Ee(Se,`games/${t}/hostUid`),Vi(ln,e=>{A.hostUid=e.val()||null})}function Ap(){Un&&(Ut(Un),Un=null),di&&(Ut(di),di=null),cn&&(Ut(cn),cn=null),ln&&(Ut(ln),ln=null)}async function HE(){if(!A.currentGameId)return;const t=JSON.parse(JSON.stringify(rc));t.selHandIdx=null,t.selFloorIdxs=[],await In(Ee(Se,`games/${A.currentGameId}/gameStateJson`),JSON.stringify(t))}kE(HE);async function BE(){const t=Math.floor(1e5+Math.random()*9e5).toString();A.localSeat=0,A.currentGameId=t,sessionStorage.setItem("seep_seat","0"),sessionStorage.setItem("seep_gameId",t);const e={0:A.localUid,1:null,2:null,3:null};await In(Ee(Se,`games/${t}`),{status:"lobby",hostUid:A.localUid,createdAt:Date.now(),seatMap:e,names:{[A.localUid]:A.localName},gameStateJson:null}),oc(t),A.screen="room"}async function pr(t){A.currentGameId&&A.localUid===A.hostUid&&await In(Ee(Se,`games/${A.currentGameId}/seatMap/${t}`),null)}async function VE(t){const e=await Bi(Ee(Se,`games/${t}`));if(!e.exists())return{error:"Room not found. Check the code and try again."};const n=e.val();if(n.status==="gameover")return{error:"This game has already ended."};if(n.seatMap){const s=Object.values(n.seatMap).indexOf(A.localUid);s!==-1&&(A.localSeat=s,sessionStorage.setItem("seep_seat",String(s)))}return A.currentGameId=t,sessionStorage.setItem("seep_gameId",t),await In(Ee(Se,`games/${t}/names/${A.localUid}`),A.localName),oc(t),A.screen="room",{}}function oc(t){Ap(),Tp(t),Pp(t),Np(t),Un=Ee(Se,`games/${t}`),Vi(Un,e=>{if(!e.exists())return;const n=e.val();if(A.hostUid=n.hostUid||null,n.status==="bid"||n.status==="playing"){if(Ut(Un),Un=null,A.localSeat===null&&n.seatMap){const s=Object.values(n.seatMap).indexOf(A.localUid);s!==-1&&(A.localSeat=s,sessionStorage.setItem("seep_seat",String(s)))}Op(t);return}kp.value=n})}async function WE(t){const e=Ee(Se,`games/${A.currentGameId}/seatMap/${t}`),{committed:n}=await rI(e,s=>{if(s===null)return A.localUid});n?(A.localSeat=t,sessionStorage.setItem("seep_seat",String(t)),await In(Ee(Se,`games/${A.currentGameId}/names/${A.localUid}`),A.localName),Bf(e).set(null)):alert("That seat was just taken. Please choose another.")}async function id(){const e=(await Bi(Ee(Se,`games/${A.currentGameId}`))).val(),n=Object.values(e.seatMap||{}).filter(Boolean).length;if(!e||n<4){alert("All 4 seats must be filled");return}const s=ic();s.hands[s.bidder]=s.deck.splice(0,4),Rs(s.hands[s.bidder]),s.playerNames=[0,1,2,3].map(i=>{const r=e.seatMap[i];return r&&e.names&&e.names[r]||`Player ${i+1}`}),Object.assign(rc,s),await Vw(Ee(Se,`games/${A.currentGameId}`),{status:"bid",gameStateJson:JSON.stringify(s)})}async function ac(){await navigator.clipboard.writeText(A.currentGameId)}async function Op(t){if(Tp(t),Pp(t),Np(t),A.localSeat===null){const e=sessionStorage.getItem("seep_seat");if(e!==null)A.localSeat=parseInt(e,10);else{const n=await Bi(Ee(Se,`games/${t}`));if(n.exists()){const s=n.val();A.hostUid=s.hostUid||null;const i=s.seatMap||{},r=Object.values(i).indexOf(A.localUid);r!==-1&&(A.localSeat=r,sessionStorage.setItem("seep_seat",String(r)))}}}di=Ee(Se,`games/${t}/gameStateJson`),Vi(di,e=>{if(!e.exists())return;const n=JSON.parse(e.val());Object.assign(rc,n),sd.selHandIdx=null,sd.selFloorIdxs=[],A.screen="game"})}function jE(){zI(Ro,async t=>{if(!t||(A.localUid=t.uid,A.localName=sessionStorage.getItem("seep_name")||"",!A.localName))return;const e=sessionStorage.getItem("seep_gameId");if(!e)return;A.currentGameId=e;const n=await Bi(Ee(Se,`games/${e}`));if(!n.exists()){A.currentGameId=null;return}const s=n.val();if(s.seatMap){const i=Object.values(s.seatMap).indexOf(A.localUid);i!==-1&&(A.localSeat=i,sessionStorage.setItem("seep_seat",String(i)))}s.status==="lobby"?(oc(e),A.screen="room"):Op(e)})}async function rd(t){if(A.localUid)return!0;const e=t.trim();if(!e)return!1;const n=await HI(Ro);return A.localUid=n.user.uid,A.localName=e,sessionStorage.setItem("seep_name",e),!0}async function GE(){await Qn(),await qI(Ro),A.localUid=null,A.localName="",A.currentGameId=null,A.localSeat=null,A.hostUid=null,sessionStorage.removeItem("seep_gameId"),sessionStorage.removeItem("seep_seat"),sessionStorage.removeItem("seep_name"),A.screen="home"}async function Qn(){if(UE(),!A.currentGameId){A.screen="home";return}if(A.localUid&&A.localUid===A.hostUid){const e=(await Bi(Ee(Se,`games/${A.currentGameId}/seatMap`))).val()||{},n=Object.values(e).find(s=>s&&s!==A.localUid);n&&await In(Ee(Se,`games/${A.currentGameId}/hostUid`),n)}if(A.localSeat!==null){const t=Ee(Se,`games/${A.currentGameId}/seatMap/${A.localSeat}`);Bf(t).cancel(),await In(t,null)}Ap(),sessionStorage.removeItem("seep_gameId"),sessionStorage.removeItem("seep_seat"),A.currentGameId=null,A.localSeat=null,A.hostUid=null,A.screen="home"}const lc=Ce(!1),xp=Ce("");let _r=null;function zi(t="Are you sure?"){return xp.value=t,lc.value=!0,new Promise(e=>{_r=e})}function od(t){lc.value=!1,_r&&(_r(t),_r=null)}const KE={class:"menu-account"},zE={id:"menu-account-name"},qE={id:"menu-account-detail"},YE={key:0,class:"menu-section"},JE={__name:"GlobalMenu",setup(t){const{session:e}=Xe(),n=Ce(!1),s=Ce(""),i=G(()=>e.hostUid&&e.hostUid===e.localUid),r=["Player 1 (T1)","Player 2 (T2)","Player 3 (T1)","Player 4 (T2)"],o=G(()=>{let d="";return e.currentGameId&&(d+=`Room: ${e.currentGameId}`),e.localSeat!==null&&(d+=`  ·  ${r[e.localSeat]}`),d});async function a(){await ac(),s.value="Copied!",setTimeout(()=>{s.value=""},1200)}async function l(){n.value=!1,await zi("Are you sure you want to leave the room?")&&await Qn()}async function c(){n.value=!1,await GE()}function u(){n.value=!1}return nl(()=>document.addEventListener("click",u)),so(()=>document.removeEventListener("click",u)),(d,h)=>(D(),M("div",{id:"global-menu-wrap",class:re({visible:b(e).screen!=="home"})},[_("button",{id:"global-menu-btn",onClick:h[0]||(h[0]=gi(m=>n.value=!n.value,["stop"]))},"☰"),_("div",{id:"global-menu-dropdown",class:re({open:n.value}),onClick:h[1]||(h[1]=gi(()=>{},["stop"]))},[_("div",KE,[_("div",zE,x(b(e).localName||"—"),1),_("div",qE,x(o.value),1)]),i.value&&b(e).currentGameId?(D(),M("div",YE,[h[2]||(h[2]=_("div",{class:"menu-section-title"},"Room Code",-1)),_("div",{class:"menu-room-code",onClick:a},x(s.value||b(e).currentGameId),1)])):be("",!0),b(e).currentGameId?(D(),M("button",{key:1,class:"menu-item menu-exit",onClick:l},"🚪 Leave Room")):be("",!0),_("button",{class:"menu-item",onClick:c},"Sign Out")],2)],2))}},QE={id:"seep-msg"},XE={__name:"SeepOverlay",setup(t){const{seepOverlay:e}=Ze();return Vt(()=>e.visible,n=>{n&&setTimeout(()=>{e.visible=!1,e.onDone&&(e.onDone(),e.onDone=null)},1800)}),(n,s)=>(D(),M("div",{id:"seep-overlay",class:re({show:b(e).visible})},[_("div",QE,x(b(e).message),1)],2))}},ZE={id:"final-msg"},eS={__name:"FinalBanner",setup(t){const{gameState:e,playerName:n}=Ze(),s=Ce(!1),i=Ce("");let r=null;return Vt(()=>e.finalAnnouncement,o=>{o&&(r&&clearTimeout(r),i.value=`House ${Q(o.houseVal)} Final by ${n(o.seat)}!`,s.value=!0,r=setTimeout(()=>{s.value=!1},1800))}),(o,a)=>(D(),M("div",{id:"final-banner",class:re({show:s.value})},[_("div",ZE,x(i.value),1)],2))}},tS={class:"c-tl"},nS={class:"c-rank"},sS={class:"c-suit"},iS={class:"c-center"},rS={class:"c-br"},oS={class:"c-rank"},aS={class:"c-suit"},Po={__name:"CardEl",props:{card:{type:Object,required:!0},clickable:{type:Boolean,default:!1},selected:{type:Boolean,default:!1},faceDown:{type:Boolean,default:!1}},emits:["click"],setup(t){const e=t,n=G(()=>Q(e.card.rank)),s=G(()=>Ip(e.card.suit)),i=G(()=>Cp(e.card.suit));return(r,o)=>(D(),M("div",{class:re(["card",[i.value?"red":"black",{selected:t.selected,"face-down":t.faceDown}]]),style:Ni(t.clickable?{}:{cursor:"default"}),onClick:o[0]||(o[0]=a=>t.clickable?r.$emit("click"):null)},[t.faceDown?be("",!0):(D(),M(pe,{key:0},[_("div",tS,[_("div",nS,x(n.value),1),_("div",sS,x(s.value),1)]),_("div",iS,x(s.value),1),_("div",rS,[_("div",oS,x(n.value),1),_("div",aS,x(s.value),1)])],64))],6))}},lS={class:"peek-inner"},cS={class:"peek-header"},uS={id:"peek-title"},dS={id:"peek-owners",class:"peek-owners"},hS={id:"peek-cards",class:"peek-cards"},fS={__name:"HousePeekModal",setup(t){const{housePeek:e,closeHousePeek:n,playerName:s}=Ze(),i=G(()=>e.house),r=G(()=>{if(!i.value)return"";const o=i.value,a=o.shared?" ⚑ Shared":o.pucca?" ★ Pucca":ec(o)?" ◆ Doubled":" (building)";return`House of ${Q(o.value)}${a} — ${o.cards.length} cards`});return(o,a)=>{var l;return D(),M("div",{id:"house-peek",class:re({show:b(e).visible}),onClick:a[1]||(a[1]=gi((...c)=>b(n)&&b(n)(...c),["self"]))},[_("div",lS,[_("div",cS,[_("span",uS,x(r.value),1),_("button",{class:"peek-close",onClick:a[0]||(a[0]=(...c)=>b(n)&&b(n)(...c))},"✕")]),_("div",dS,[i.value?(D(),M(pe,{key:0},[_("span",{class:re(["peek-owner",`t${i.value.team}`])}," Built by "+x(b(s)(i.value.owner))+" (Team "+x(i.value.team+1)+") ",3),i.value.shared&&i.value.sharedBy!==void 0?(D(),M(pe,{key:0},[a[2]||(a[2]=_("span",{class:"peek-owner-sep"}," · ",-1)),_("span",{class:re(["peek-owner",`t${i.value.team===0?1:0}`])}," Shared by "+x(b(s)(i.value.sharedBy))+" (Team "+x(i.value.team===0?2:1)+") ",3)],64)):be("",!0)],64)):be("",!0)]),_("div",hS,[(D(!0),M(pe,null,zt(((l=i.value)==null?void 0:l.cards)??[],(c,u)=>(D(),gs(Po,{key:u,card:c,clickable:!1},null,8,["card"]))),128))])])],2)}}},pS={key:0,class:"chat-wrap"},_S={key:0,class:"chat-badge"},mS={key:0,class:"chat-panel"},gS={class:"chat-header"},vS={key:0,class:"chat-empty"},yS={class:"chat-name"},bS={class:"chat-text"},wS={class:"chat-input-row"},IS={__name:"ChatPanel",setup(t){const{session:e}=Xe(),n=Ce(!1),s=Ce(""),i=Ce(null);Vt(n,l=>{l&&(Ln.value=0,a())}),Vt(_s,()=>{n.value&&(Ln.value=0,a())},{deep:!0});function r(){n.value=!n.value}async function o(){s.value.trim()&&(await $E(s.value),s.value="")}async function a(){await xd(),i.value&&(i.value.scrollTop=i.value.scrollHeight)}return(l,c)=>b(e).currentGameId?(D(),M("div",pS,[_("button",{class:"chat-toggle",onClick:r},[c[2]||(c[2]=ys(" 💬 ",-1)),!n.value&&b(Ln)>0?(D(),M("span",_S,x(b(Ln)),1)):be("",!0)]),n.value?(D(),M("div",mS,[_("div",gS,[c[3]||(c[3]=_("span",null,"Room Chat",-1)),_("button",{class:"chat-close",onClick:c[0]||(c[0]=u=>n.value=!1)},"✕")]),_("div",{class:"chat-messages",ref_key:"msgList",ref:i},[b(_s).length===0?(D(),M("div",vS,"No messages yet…")):be("",!0),(D(!0),M(pe,null,zt(b(_s),(u,d)=>(D(),M("div",{key:d,class:re(["chat-msg",{mine:u.name===b(e).localName}])},[_("span",yS,x(u.name),1),_("span",bS,x(u.text),1)],2))),128))],512),_("div",wS,[Ot(_("input",{"onUpdate:modelValue":c[1]||(c[1]=u=>s.value=u),class:"chat-input",placeholder:"Type a message…",maxlength:"200",onKeydown:ya(o,["enter"])},null,544),[[va,s.value]]),_("button",{class:"chat-send",onClick:o},"Send")])])):be("",!0)])):be("",!0)}},CS={key:0,class:"confirm-overlay"},ES={class:"confirm-box"},SS={class:"confirm-msg"},TS={class:"confirm-btns"},kS={__name:"ConfirmModal",setup(t){return(e,n)=>b(lc)?(D(),M("div",CS,[_("div",ES,[_("p",SS,x(b(xp)),1),_("div",TS,[_("button",{class:"btn btn-exit",onClick:n[0]||(n[0]=s=>b(od)(!0))},"🚪 Yes, Exit"),_("button",{class:"btn btn-secondary",onClick:n[1]||(n[1]=s=>b(od)(!1))},"Stay")])])])):be("",!0)}},RS={id:"home-screen",class:"screen"},PS={class:"home-card"},NS={key:0,class:"home-welcome"},AS={class:"home-actions"},OS={key:2,class:"home-join-expand"},xS={class:"home-error"},DS={__name:"HomeScreen",setup(t){const{session:e}=Xe(),n=Ce(""),s=Ce(""),i=Ce(!1),r=Ce("");async function o(){r.value="";const l=e.localName||n.value.trim();if(!l){r.value="Please enter your name first.";return}try{await rd(l),await BE()}catch(c){r.value="Sign-in failed: "+c.message}}async function a(){r.value="";const l=e.localName||n.value.trim();if(!l){r.value="Please enter your name first.";return}const c=s.value.trim();if(c.length!==6){r.value="Enter a valid 6-digit room code.";return}try{await rd(l);const u=await VE(c);u!=null&&u.error&&(r.value=u.error)}catch(u){r.value="Join failed: "+u.message}}return(l,c)=>(D(),M("div",RS,[c[3]||(c[3]=_("div",{class:"home-logo"},"♠ SEEP ♠",-1)),_("div",PS,[b(e).localName&&b(e).localUid?(D(),M("div",NS," Welcome back, "+x(b(e).localName)+"! ",1)):Ot((D(),M("input",{key:1,"onUpdate:modelValue":c[0]||(c[0]=u=>n.value=u),class:"home-input",type:"text",placeholder:"Enter your name to play",maxlength:"20",autocomplete:"off",onKeydown:ya(o,["enter"])},null,544)),[[va,n.value]]),_("div",AS,[_("button",{class:"btn btn-primary",onClick:o},"Start Game"),_("button",{class:"btn",style:{background:"#1e5c32",color:"#fff",border:"1px solid #3a8a4e"},onClick:c[1]||(c[1]=u=>i.value=!i.value)}," Join Room ")]),i.value?(D(),M("div",OS,[Ot(_("input",{"onUpdate:modelValue":c[2]||(c[2]=u=>s.value=u),type:"text",placeholder:"6-digit code",maxlength:"6",autocomplete:"off",onKeydown:ya(a,["enter"])},null,544),[[va,s.value]]),_("button",{class:"btn btn-primary",onClick:a},"Join →")])):be("",!0),_("div",xS,x(r.value),1)])]))}},MS={id:"room-screen",class:"screen"},LS={class:"room-code-box"},FS={class:"seat-grid"},US={class:"seat-name"},$S={class:"seat-label"},HS=["onClick"],BS={class:"seat-label"},VS=["onClick"],WS={class:"seat-label"},jS={style:{display:"flex",gap:"12px","flex-wrap":"wrap","justify-content":"center"}},GS={__name:"RoomScreen",setup(t){async function e(){await zi("Are you sure you want to leave the room?")&&Qn()}const{session:n}=Xe(),s=Ce(""),i=["Player 1 (T1)","Player 2 (T2)","Player 3 (T1)","Player 4 (T2)"],r=kp,o=G(()=>{var N;return((N=r.value)==null?void 0:N.seatMap)||{}}),a=G(()=>{var N;return((N=r.value)==null?void 0:N.names)||{}}),l=G(()=>{var N;return((N=r.value)==null?void 0:N.hostUid)===n.localUid||n.hostUid===n.localUid}),c=G(()=>Object.values(o.value).filter(N=>N!==null).length),u=G(()=>c.value===4),d=G(()=>Object.values(o.value).includes(n.localUid));function h(N){return o.value[N]||null}function m(N){const F=h(N);return F?a.value[F]||"Player":""}const v=G(()=>l.value?u.value?"All seats filled! Start the game.":`Waiting for players… (${c.value}/4)`:"Waiting for host to start…");async function S(){await ac(),s.value="Copied!",setTimeout(()=>{s.value=""},1200)}return(N,F)=>(D(),M("div",MS,[F[5]||(F[5]=_("h2",null,"Game Room",-1)),_("div",LS,[F[1]||(F[1]=_("div",{class:"label"},"Share this code",-1)),_("div",{class:"room-code",title:"Click to copy",onClick:S},x(s.value||b(n).currentGameId||"------"),1)]),_("div",FS,[F[3]||(F[3]=_("div",{class:"seat-header t1"},"Team 1 (Blue)",-1)),F[4]||(F[4]=_("div",{class:"seat-header t2"},"Team 2 (Red)",-1)),(D(),M(pe,null,zt([0,1,2,3],L=>_("div",{key:L,class:re(["seat-slot",{taken:!!h(L),mine:h(L)===b(n).localUid}])},[h(L)?(D(),M(pe,{key:0},[_("div",US,x(m(L)),1),_("div",$S,x(i[L]),1),l.value&&h(L)!==b(n).localUid?(D(),M("button",{key:0,class:"seat-kick-btn",title:"Remove player",onClick:J=>b(pr)(L)},"✕ Remove",8,HS)):be("",!0)],64)):d.value?(D(),M(pe,{key:2},[_("div",WS,x(i[L]),1),F[2]||(F[2]=_("div",{style:{color:"#555","font-size":".85rem"}},"Empty",-1))],64)):(D(),M(pe,{key:1},[_("div",BS,x(i[L]),1),_("button",{onClick:J=>b(WE)(L)},"Take seat",8,VS)],64))],2)),64))]),_("div",null,x(v.value),1),_("div",jS,[l.value&&u.value?(D(),M("button",{key:0,class:"btn btn-primary",style:{padding:"12px 36px","font-size":"1rem"},onClick:F[0]||(F[0]=(...L)=>b(id)&&b(id)(...L))},"Start Game ▶")):be("",!0),_("button",{class:"btn btn-exit",style:{padding:"12px 28px","font-size":"1rem"},onClick:e}," 🚪 Leave Room ")])]))}},KS={id:"bid-screen",class:"screen"},zS={class:"bid-hand"},qS={key:0,style:{color:"#ffa040","font-size":".8rem"}},YS={key:1,class:"bid-btns"},JS=["onClick"],QS={__name:"BidScreen",setup(t){async function e(){await zi("Are you sure you want to exit the game?")&&Qn()}const{gameState:n,playerName:s}=Ze(),{session:i}=Xe(),r=G(()=>i.localSeat===null||i.localSeat===n.bidder),o=G(()=>r.value?n.hands[n.bidder]??[]:[]),a=G(()=>o.value.length?Math.max(...o.value.map(v=>v.rank)):0),l=G(()=>a.value>=9),c=G(()=>o.value.some(v=>v.rank===9&&v.suit==="S")),u=G(()=>!l.value||a.value===9&&!c.value),d=G(()=>l.value?[...new Set(o.value.filter(v=>v.rank>=9).map(v=>v.rank))].sort((v,S)=>v-S):[]),h=G(()=>r.value?l.value?`${s(n.bidder)} – choose your bid (≥ 9). You need a matching key card in your hand.`:"No card ≥ 9 — redealing…":`Waiting for ${s(n.bidder)} to bid…`),m=G(()=>r.value&&u.value&&l.value?"You may pass (highest card is a non-♠ 9).":"");return Vt(l,v=>{!v&&r.value&&n.phase==="bid"&&setTimeout(ra,1200)},{immediate:!0}),(v,S)=>(D(),M("div",KS,[S[1]||(S[1]=_("h2",null,"♠ Bid Phase",-1)),_("p",null,x(h.value),1),_("div",zS,[(D(!0),M(pe,null,zt(o.value,(N,F)=>(D(),gs(Po,{key:F,card:N,clickable:!1},null,8,["card"]))),128))]),m.value?(D(),M("p",qS,x(m.value),1)):be("",!0),r.value?(D(),M("div",YS,[(D(!0),M(pe,null,zt(d.value,N=>(D(),M("button",{key:N,class:"bid-btn",onClick:F=>b(NE)(N)},"Bid "+x(b(Q)(N))+" ("+x(N)+")",9,JS))),128)),u.value?(D(),M("button",{key:0,class:"bid-btn pass",onClick:S[0]||(S[0]=(...N)=>b(ra)&&b(ra)(...N))},"Pass (Redeal)")):be("",!0)])):be("",!0),_("button",{class:"btn btn-exit",style:{"margin-top":"8px",padding:"8px 24px","font-size":".9rem"},onClick:e}," 🚪 Exit Game ")]))}},XS={key:0,class:"card-count-badge"},rr={__name:"PlayerHand",props:{count:{type:Number,required:!0}},setup(t){return(e,n)=>t.count>0?(D(),M("div",XS,x(t.count),1)):be("",!0)}},ZS={class:"h-val"},eT={class:"h-count"},tT=["title"],nT={class:"pmc-rank"},sT={class:"pmc-suit"},iT={__name:"FloorHouse",props:{house:{type:Object,required:!0},selected:{type:Boolean,default:!1}},emits:["click","peek"],setup(t){const e=t,n=G(()=>ec(e.house)),s=G(()=>Q(e.house.value)),i=c=>Cp(c.suit),r=G(()=>e.house.shared?"shared":e.house.pucca?"pucca":"doubled"),o=G(()=>e.house.shared?"shared":`t${e.house.team}`),a=G(()=>e.house.shared?"T1+T2":`T${e.house.team+1} P${e.house.owner+1}`),l=G(()=>e.house.cards.slice(-3).reverse());return(c,u)=>n.value?(D(),M("div",{key:0,class:re(["house",[r.value,{selected:t.selected}]]),onClick:u[1]||(u[1]=d=>c.$emit("click"))},[_("div",ZS,x(s.value),1),_("div",{class:re(["h-badge",o.value])},x(a.value),3),_("div",eT,x(t.house.cards.length)+"c",1),_("button",{class:"house-peek-btn",title:"Peek cards",onClick:u[0]||(u[0]=gi(d=>c.$emit("peek",t.house),["stop"]))},"👁")],2)):(D(),M("div",{key:1,class:re(["house-pile",{selected:t.selected}]),title:`Building house of ${s.value} — not yet doubled`,onClick:u[3]||(u[3]=d=>c.$emit("click"))},[(D(!0),M(pe,null,zt(l.value,(d,h)=>(D(),M("div",{key:h,class:re(["pile-mini-card",{red:i(d)}]),style:Ni(`top:${h*18}px;left:${h*4}px;z-index:${10-h};`)},[_("span",nT,x(b(Q)(d.rank)),1),_("span",sT,x(b(Ip)(d.suit)),1)],6))),128)),_("div",{class:re(["h-pile-badge",`t${t.house.team}`])},x(s.value)+" ▸ T"+x(t.house.team+1),3),_("button",{class:"house-peek-btn",title:"Peek all cards",onClick:u[2]||(u[2]=gi(d=>c.$emit("peek",t.house),["stop"]))},"👁")],10,tT))}},rT={class:"floor-cards",id:"floor-area"},oT={key:0,class:"floor-empty"},aT={__name:"FloorArea",setup(t){const{gameState:e,ui:n,toggleFloor:s,openHousePeek:i}=Ze();return(r,o)=>(D(),M("div",rT,[b(e).floor.length?be("",!0):(D(),M("span",oT,"Empty floor")),(D(!0),M(pe,null,zt(b(e).floor,(a,l)=>(D(),M(pe,{key:l},[a.type==="house"?(D(),gs(iT,{key:0,house:a,selected:b(n).selFloorIdxs.includes(l),onClick:c=>b(s)(l),onPeek:b(i)},null,8,["house","selected","onClick","onPeek"])):(D(),gs(Po,{key:1,card:a.card,clickable:!0,selected:b(n).selFloorIdxs.includes(l),class:"floor-card",onClick:c=>b(s)(l)},null,8,["card","selected","onClick"]))],64))),128))]))}},lT={class:"active-hand-zone",id:"active-hand-zone"},cT={__name:"ActiveHand",setup(t){const{gameState:e,ui:n,selectHandCard:s}=Ze(),{session:i}=Xe(),r=G(()=>i.localSeat!==null?i.localSeat:e.currentPlayer),o=G(()=>i.localSeat===null||i.localSeat===e.currentPlayer),a=G(()=>e.hands[r.value]??[]);return(l,c)=>(D(),M("div",lT,[(D(!0),M(pe,null,zt(a.value,(u,d)=>(D(),gs(Po,{key:d,card:u,clickable:o.value,selected:b(n).selHandIdx===d,onClick:h=>o.value?b(s)(d):null},null,8,["card","clickable","selected","onClick"]))),128))]))}},uT={class:"g-actions"},dT={class:"turn-label"},hT={class:"bid-disp"},fT={class:"action-btns"},pT=["disabled"],_T=["disabled"],mT=["disabled"],gT=["disabled"],vT=["disabled"],yT={class:"status-msg"},bT={__name:"ActionsPanel",setup(t){const{gameState:e,actions:n}=Ze(),{session:s}=Xe(),i=G(()=>{const m=e.currentPlayer;return`Player ${m+1}'s Turn (Team ${m%2+1})`}),r=G(()=>e.bidValue?`Bid: ${Q(e.bidValue)} (${e.bidValue})`:""),o=G(()=>n.value.build||n.value.add),a=G(()=>e.finalEligible===null?!1:s.localSeat!==null?e.finalEligible===s.localSeat:!0);function l(){n.value.add?Ys("add"):n.value.build&&Ys("build")}const c=Ce(null);let u=null;function d(){u&&(clearInterval(u),u=null),c.value=null}Vt(()=>e.finalEligible,m=>{d(),!(m===null||!(s.localSeat===null||s.localSeat===m))&&(c.value=5,u=setInterval(()=>{c.value--,c.value<=0&&(d(),DE())},1e3))});function h(){d(),ME()}return so(d),(m,v)=>(D(),M("div",uT,[_("div",dT,x(i.value),1),_("div",hT,x(r.value),1),_("div",fT,[_("button",{class:"btn btn-throw",disabled:!b(n).throw,onClick:v[0]||(v[0]=S=>b(Ys)("throw"))},"Throw",8,pT),_("button",{class:"btn btn-pick",disabled:!b(n).pick,onClick:v[1]||(v[1]=S=>b(Ys)("pick"))},"Pick",8,_T),_("button",{class:"btn btn-house",disabled:!o.value,onClick:l},"House",8,mT),_("button",{class:"btn btn-seep btn-special",disabled:!b(n).seep,onClick:v[2]||(v[2]=S=>b(Ys)("seep"))},"Seep",8,gT),_("button",{class:"btn btn-final btn-special",disabled:!a.value,onClick:h}," Final"+x(c.value!==null?` (${c.value})`:""),9,vT)]),_("div",yT,x(b(n).msg),1)]))}},wT={id:"game-screen",class:"screen"},IT={class:"g-header"},CT={class:"g-scores"},ET={class:"g-score-val"},ST={class:"g-score-val"},TT={class:"g-header-right"},kT={class:"g-table"},RT={class:"cards-row"},PT={class:"cards-row"},NT={class:"floor-zone"},AT={class:"cap-row"},OT={class:"cards-row"},xT={class:"cards-row"},DT={__name:"GameScreen",setup(t){const{gameState:e,playerName:n}=Ze(),{session:s}=Xe(),i=G(()=>s.hostUid&&s.hostUid===s.localUid),r=Ce("");async function o(){await ac(),r.value="Copied!",setTimeout(()=>{r.value=""},1200)}const a=u=>!!Rp.value[u];async function l(){await zi("Are you sure you want to exit the game?")&&Qn()}function c(u){return(e.captured[u]??[]).reduce((d,h)=>d+Yr(h),0)+(e.seepBonus[u]??0)}return(u,d)=>{var h,m,v,S;return D(),M("div",wT,[_("div",IT,[d[6]||(d[6]=_("h1",null,"♠ SEEP",-1)),_("div",CT,[_("div",{class:re(["g-score",{winning:b(e).scores[0]>b(e).scores[1]}])},[d[3]||(d[3]=_("div",{class:"g-score-label"},"Team 1",-1)),_("div",ET,x(b(e).scores[0]),1)],2),d[5]||(d[5]=_("div",{class:"g-score-sep"},"vs",-1)),_("div",{class:re(["g-score",{winning:b(e).scores[1]>b(e).scores[0]}])},[d[4]||(d[4]=_("div",{class:"g-score-label"},"Team 2",-1)),_("div",ST,x(b(e).scores[1]),1)],2)]),_("div",TT,[b(s).currentGameId?(D(),M("div",{key:0,class:"g-room-code",title:"Click to copy",onClick:o},x(r.value||b(s).currentGameId),1)):be("",!0),_("button",{class:"btn-exit-sm",onClick:l,title:"Leave game"},"🚪")])]),_("div",kT,[_("div",{class:re(["player-zone top",{active:b(e).currentPlayer===2}])},[_("div",RT,[se(rr,{count:((h=b(e).hands[2])==null?void 0:h.length)??0},null,8,["count"])]),_("div",{class:re(["p-label t0",{"active-lbl":b(e).currentPlayer===2}])},x(b(n)(2))+" · Team 1 ",3),i.value&&a(2)&&b(s).localSeat!==2?(D(),M("button",{key:0,class:"kick-btn",onClick:d[0]||(d[0]=N=>b(pr)(2)),title:"Remove player"},"✕")):be("",!0)],2),_("div",{class:re(["player-zone left",{active:b(e).currentPlayer===1}])},[_("div",PT,[se(rr,{count:((m=b(e).hands[1])==null?void 0:m.length)??0},null,8,["count"])]),_("div",{class:re(["p-label t1",{"active-lbl":b(e).currentPlayer===1}])},x(b(n)(1))+"·T2 ",3),i.value&&a(1)&&b(s).localSeat!==1?(D(),M("button",{key:0,class:"kick-btn",onClick:d[1]||(d[1]=N=>b(pr)(1)),title:"Remove player"},"✕")):be("",!0)],2),_("div",NT,[d[9]||(d[9]=_("div",{class:"floor-label"},"TABLE",-1)),se(aT),_("div",AT,[_("div",null,[d[7]||(d[7]=ys("T1 pts: ",-1)),_("span",null,x(c(0)),1)]),_("div",null,[d[8]||(d[8]=ys("T2 pts: ",-1)),_("span",null,x(c(1)),1)])])]),_("div",{class:re(["player-zone right",{active:b(e).currentPlayer===3}])},[_("div",{class:re(["p-label t1",{"active-lbl":b(e).currentPlayer===3}])},x(b(n)(3))+"·T2 ",3),_("div",OT,[se(rr,{count:((v=b(e).hands[3])==null?void 0:v.length)??0},null,8,["count"])]),i.value&&a(3)&&b(s).localSeat!==3?(D(),M("button",{key:0,class:"kick-btn",onClick:d[2]||(d[2]=N=>b(pr)(3)),title:"Remove player"},"✕")):be("",!0)],2),_("div",{class:re(["player-zone bottom",{active:b(e).currentPlayer===0}])},[_("div",{class:re(["p-label t0",{"active-lbl":b(e).currentPlayer===0}])},x(b(n)(0))+" · Team 1 ",3),_("div",xT,[se(rr,{count:((S=b(e).hands[0])==null?void 0:S.length)??0},null,8,["count"])])],2)]),se(cT),se(bT)])}}},MT={id:"roundend-screen",class:"screen"},LT={class:"score-table"},FT={class:"score-total"},UT={class:"cum-box"},$T={class:"cum-vals"},HT={style:{display:"flex",gap:"12px","flex-wrap":"wrap","justify-content":"center"}},BT={__name:"RoundEndScreen",setup(t){async function e(){await zi("Are you sure you want to exit the game?")&&Qn()}const{gameState:n}=Ze(),s=G(()=>n.scores[0]>=qr||n.scores[1]>=qr);function i(a,l){return(n.captured[a]??[]).filter(l).reduce((c,u)=>c+Yr(u),0)}const r=G(()=>[["Spades (face value)",i(0,a=>a.suit==="S"),i(1,a=>a.suit==="S")],["10♦",i(0,a=>a.suit==="D"&&a.rank===10),i(1,a=>a.suit==="D"&&a.rank===10)],["Other Aces",i(0,a=>a.rank===1&&a.suit!=="S"),i(1,a=>a.rank===1&&a.suit!=="S")],["Seep Bonus",n.seepBonus[0]??0,n.seepBonus[1]??0]]);function o(){s.value?n.phase="gameover":FE()}return(a,l)=>(D(),M("div",MT,[_("h2",null,"Round "+x(b(n).roundNum)+" Complete",1),_("table",LT,[l[1]||(l[1]=_("thead",null,[_("tr",null,[_("th",null,"Category"),_("th",null,"Team 1"),_("th",null,"Team 2")])],-1)),_("tbody",null,[(D(!0),M(pe,null,zt(r.value,c=>(D(),M("tr",{key:c[0]},[_("td",null,x(c[0]),1),_("td",null,x(c[1]),1),_("td",null,x(c[2]),1)]))),128)),_("tr",FT,[l[0]||(l[0]=_("td",null,"Round Total",-1)),_("td",null,x(b(n)._roundS0??0),1),_("td",null,x(b(n)._roundS1??0),1)])])]),_("div",UT,[l[4]||(l[4]=_("h3",null,"Cumulative Score",-1)),_("div",$T,[_("div",null,[l[2]||(l[2]=ys("Team 1: ",-1)),_("strong",null,x(b(n).scores[0]),1)]),_("div",null,[l[3]||(l[3]=ys("Team 2: ",-1)),_("strong",null,x(b(n).scores[1]),1)])])]),_("div",HT,[_("button",{class:"btn btn-primary",style:{"font-size":"1rem",padding:"10px 28px"},onClick:o},x(s.value?"See Results":"Next Round ▶"),1),_("button",{class:"btn btn-exit",style:{padding:"10px 24px","font-size":"1rem"},onClick:e}," 🚪 Exit Game ")])]))}},VT={id:"gameover-screen",class:"screen"},WT={__name:"GameOverScreen",setup(t){const{gameState:e}=Ze(),{session:n}=Xe(),s=G(()=>{const r=e.scores[0],o=e.scores[1];return`🏆 ${r>o?"Team 1 (P1 & P3)":o>r?"Team 2 (P2 & P4)":"Both Teams (Tie!)"} Wins!`});async function i(){n.currentGameId?await Qn():RE()}return(r,o)=>(D(),M("div",VT,[_("h1",null,x(s.value),1),_("p",null,"Team 1: "+x(b(e).scores[0])+" pts | Team 2: "+x(b(e).scores[1])+" pts",1),_("button",{class:"btn btn-primary",style:{"font-size":"1rem",padding:"10px 28px"},onClick:i},x(b(n).currentGameId?"Back to Home":"New Game"),1)]))}},jT={__name:"App",setup(t){const{session:e}=Xe(),{gameState:n}=Ze();return nl(()=>{jE()}),(s,i)=>(D(),M(pe,null,[se(JE),Ot(se(DS,null,null,512),[[Zn,b(e).screen==="home"]]),Ot(se(GS,null,null,512),[[Zn,b(e).screen==="room"]]),Ot(se(QS,null,null,512),[[Zn,b(e).screen==="game"&&b(n).phase==="bid"]]),Ot(se(DT,null,null,512),[[Zn,b(e).screen==="game"&&b(n).phase==="play"]]),Ot(se(BT,null,null,512),[[Zn,b(e).screen==="game"&&b(n).phase==="roundend"]]),Ot(se(WT,null,null,512),[[Zn,b(e).screen==="game"&&b(n).phase==="gameover"]]),se(XE),se(eS),se(fS),se(IS),se(kS)],64))}};sg(jT).mount("#app");
