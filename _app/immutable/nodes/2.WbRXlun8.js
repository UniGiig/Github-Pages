import{s as Le,u as Je,i as T,n as ge,f as g,w as wn,T as _n,U as Ke,V as Nt,e as b,c as x,b as $,W as Vt,X as In,Y as Sn,Z as kn,_ as Cn,$ as qt,a0 as $n,a as I,t as $e,g as S,d as Ee,m,h as u,j as Oe,l as U,a1 as Ye}from"../chunks/scheduler.n9wBYjjq.js";import{S as Te,i as Me,b as P,d as O,m as D,a as A,t as H,e as F}from"../chunks/index.skrDH1Uv.js";import{l as En}from"../chunks/logo.sDofKtZB.js";function sn(e,t){const n={},i={},s={$$scope:1};let r=e.length;for(;r--;){const o=e[r],l=t[r];if(l){for(const c in o)c in l||(i[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);e[r]=l}else for(const c in o)s[c]=1}for(const o in i)o in n||(n[o]=void 0);return n}const Ln=!1,Tn=async()=>({title:"Home"}),si=Object.freeze(Object.defineProperty({__proto__:null,load:Tn,ssr:Ln},Symbol.toStringTag,{value:"Module"})),Pe=/^[a-z0-9]+(-[a-z0-9]+)*$/,Xe=(e,t,n,i="")=>{const s=e.split(":");if(e.slice(0,1)==="@"){if(s.length<2||s.length>3)return null;i=s.shift().slice(1)}if(s.length>3||!s.length)return null;if(s.length>1){const l=s.pop(),c=s.pop(),a={provider:s.length>0?s[0]:i,prefix:c,name:l};return t&&!Qe(a)?null:a}const r=s[0],o=r.split("-");if(o.length>1){const l={provider:i,prefix:o.shift(),name:o.join("-")};return t&&!Qe(l)?null:l}if(n&&i===""){const l={provider:i,prefix:"",name:r};return t&&!Qe(l,n)?null:l}return null},Qe=(e,t)=>e?!!((e.provider===""||e.provider.match(Pe))&&(t&&e.prefix===""||e.prefix.match(Pe))&&e.name.match(Pe)):!1,rn=Object.freeze({left:0,top:0,width:16,height:16}),Ze=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),et=Object.freeze({...rn,...Ze}),yt=Object.freeze({...et,body:"",hidden:!1});function Mn(e,t){const n={};!e.hFlip!=!t.hFlip&&(n.hFlip=!0),!e.vFlip!=!t.vFlip&&(n.vFlip=!0);const i=((e.rotate||0)+(t.rotate||0))%4;return i&&(n.rotate=i),n}function Ut(e,t){const n=Mn(e,t);for(const i in yt)i in Ze?i in e&&!(i in n)&&(n[i]=Ze[i]):i in t?n[i]=t[i]:i in e&&(n[i]=e[i]);return n}function jn(e,t){const n=e.icons,i=e.aliases||Object.create(null),s=Object.create(null);function r(o){if(n[o])return s[o]=[];if(!(o in s)){s[o]=null;const l=i[o]&&i[o].parent,c=l&&r(l);c&&(s[o]=[l].concat(c))}return s[o]}return(t||Object.keys(n).concat(Object.keys(i))).forEach(r),s}function Pn(e,t,n){const i=e.icons,s=e.aliases||Object.create(null);let r={};function o(l){r=Ut(i[l]||s[l],r)}return o(t),n.forEach(o),Ut(e,r)}function on(e,t){const n=[];if(typeof e!="object"||typeof e.icons!="object")return n;e.not_found instanceof Array&&e.not_found.forEach(s=>{t(s,null),n.push(s)});const i=jn(e);for(const s in i){const r=i[s];r&&(t(s,Pn(e,s,r)),n.push(s))}return n}const On={provider:"",aliases:{},not_found:{},...rn};function gt(e,t){for(const n in t)if(n in e&&typeof e[n]!=typeof t[n])return!1;return!0}function ln(e){if(typeof e!="object"||e===null)return null;const t=e;if(typeof t.prefix!="string"||!e.icons||typeof e.icons!="object"||!gt(e,On))return null;const n=t.icons;for(const s in n){const r=n[s];if(!s.match(Pe)||typeof r.body!="string"||!gt(r,yt))return null}const i=t.aliases||Object.create(null);for(const s in i){const r=i[s],o=r.parent;if(!s.match(Pe)||typeof o!="string"||!n[o]&&!i[o]||!gt(r,yt))return null}return t}const zt=Object.create(null);function Dn(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:new Set}}function ve(e,t){const n=zt[e]||(zt[e]=Object.create(null));return n[t]||(n[t]=Dn(e,t))}function $t(e,t){return ln(t)?on(t,(n,i)=>{i?e.icons[n]=i:e.missing.add(n)}):[]}function An(e,t,n){try{if(typeof n.body=="string")return e.icons[t]={...n},!0}catch{}return!1}let De=!1;function cn(e){return typeof e=="boolean"&&(De=e),De}function Hn(e){const t=typeof e=="string"?Xe(e,!0,De):e;if(t){const n=ve(t.provider,t.prefix),i=t.name;return n.icons[i]||(n.missing.has(i)?null:void 0)}}function Fn(e,t){const n=Xe(e,!0,De);if(!n)return!1;const i=ve(n.provider,n.prefix);return An(i,n.name,t)}function Nn(e,t){if(typeof e!="object")return!1;if(typeof t!="string"&&(t=e.provider||""),De&&!t&&!e.prefix){let s=!1;return ln(e)&&(e.prefix="",on(e,(r,o)=>{o&&Fn(r,o)&&(s=!0)})),s}const n=e.prefix;if(!Qe({provider:t,prefix:n,name:"a"}))return!1;const i=ve(t,n);return!!$t(i,e)}const an=Object.freeze({width:null,height:null}),un=Object.freeze({...an,...Ze}),Vn=/(-?[0-9.]*[0-9]+[0-9.]*)/g,qn=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Rt(e,t,n){if(t===1)return e;if(n=n||100,typeof e=="number")return Math.ceil(e*t*n)/n;if(typeof e!="string")return e;const i=e.split(Vn);if(i===null||!i.length)return e;const s=[];let r=i.shift(),o=qn.test(r);for(;;){if(o){const l=parseFloat(r);isNaN(l)?s.push(r):s.push(Math.ceil(l*t*n)/n)}else s.push(r);if(r=i.shift(),r===void 0)return s.join("");o=!o}}function Un(e,t="defs"){let n="";const i=e.indexOf("<"+t);for(;i>=0;){const s=e.indexOf(">",i),r=e.indexOf("</"+t);if(s===-1||r===-1)break;const o=e.indexOf(">",r);if(o===-1)break;n+=e.slice(s+1,r).trim(),e=e.slice(0,i).trim()+e.slice(o+1)}return{defs:n,content:e}}function zn(e,t){return e?"<defs>"+e+"</defs>"+t:t}function Rn(e,t,n){const i=Un(e);return zn(i.defs,t+i.content+n)}const Bn=e=>e==="unset"||e==="undefined"||e==="none";function Gn(e,t){const n={...et,...e},i={...un,...t},s={left:n.left,top:n.top,width:n.width,height:n.height};let r=n.body;[n,i].forEach(E=>{const v=[],y=E.hFlip,_=E.vFlip;let M=E.rotate;y?_?M+=2:(v.push("translate("+(s.width+s.left).toString()+" "+(0-s.top).toString()+")"),v.push("scale(-1 1)"),s.top=s.left=0):_&&(v.push("translate("+(0-s.left).toString()+" "+(s.height+s.top).toString()+")"),v.push("scale(1 -1)"),s.top=s.left=0);let L;switch(M<0&&(M-=Math.floor(M/4)*4),M=M%4,M){case 1:L=s.height/2+s.top,v.unshift("rotate(90 "+L.toString()+" "+L.toString()+")");break;case 2:v.unshift("rotate(180 "+(s.width/2+s.left).toString()+" "+(s.height/2+s.top).toString()+")");break;case 3:L=s.width/2+s.left,v.unshift("rotate(-90 "+L.toString()+" "+L.toString()+")");break}M%2===1&&(s.left!==s.top&&(L=s.left,s.left=s.top,s.top=L),s.width!==s.height&&(L=s.width,s.width=s.height,s.height=L)),v.length&&(r=Rn(r,'<g transform="'+v.join(" ")+'">',"</g>"))});const o=i.width,l=i.height,c=s.width,a=s.height;let f,p;o===null?(p=l===null?"1em":l==="auto"?a:l,f=Rt(p,c/a)):(f=o==="auto"?c:o,p=l===null?Rt(f,a/c):l==="auto"?a:l);const d={},w=(E,v)=>{Bn(v)||(d[E]=v.toString())};w("width",f),w("height",p);const C=[s.left,s.top,c,a];return d.viewBox=C.join(" "),{attributes:d,viewBox:C,body:r}}const Qn=/\sid="(\S+)"/g,Wn="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Jn=0;function Kn(e,t=Wn){const n=[];let i;for(;i=Qn.exec(e);)n.push(i[1]);if(!n.length)return e;const s="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(r=>{const o=typeof t=="function"?t(r):t+(Jn++).toString(),l=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+l+')([")]|\\.[a-z])',"g"),"$1"+o+s+"$3")}),e=e.replace(new RegExp(s,"g"),""),e}const wt=Object.create(null);function Yn(e,t){wt[e]=t}function _t(e){return wt[e]||wt[""]}function Et(e){let t;if(typeof e.resources=="string")t=[e.resources];else if(t=e.resources,!(t instanceof Array)||!t.length)return null;return{resources:t,path:e.path||"/",maxURL:e.maxURL||500,rotate:e.rotate||750,timeout:e.timeout||5e3,random:e.random===!0,index:e.index||0,dataAfterTimeout:e.dataAfterTimeout!==!1}}const Lt=Object.create(null),je=["https://api.simplesvg.com","https://api.unisvg.com"],We=[];for(;je.length>0;)je.length===1||Math.random()>.5?We.push(je.shift()):We.push(je.pop());Lt[""]=Et({resources:["https://api.iconify.design"].concat(We)});function Zn(e,t){const n=Et(t);return n===null?!1:(Lt[e]=n,!0)}function Tt(e){return Lt[e]}const Xn=()=>{let e;try{if(e=fetch,typeof e=="function")return e}catch{}};let Bt=Xn();function es(e,t){const n=Tt(e);if(!n)return 0;let i;if(!n.maxURL)i=0;else{let s=0;n.resources.forEach(o=>{s=Math.max(s,o.length)});const r=t+".json?icons=";i=n.maxURL-s-n.path.length-r.length}return i}function ts(e){return e===404}const ns=(e,t,n)=>{const i=[],s=es(e,t),r="icons";let o={type:r,provider:e,prefix:t,icons:[]},l=0;return n.forEach((c,a)=>{l+=c.length+1,l>=s&&a>0&&(i.push(o),o={type:r,provider:e,prefix:t,icons:[]},l=c.length),o.icons.push(c)}),i.push(o),i};function ss(e){if(typeof e=="string"){const t=Tt(e);if(t)return t.path}return"/"}const is=(e,t,n)=>{if(!Bt){n("abort",424);return}let i=ss(t.provider);switch(t.type){case"icons":{const r=t.prefix,l=t.icons.join(","),c=new URLSearchParams({icons:l});i+=r+".json?"+c.toString();break}case"custom":{const r=t.uri;i+=r.slice(0,1)==="/"?r.slice(1):r;break}default:n("abort",400);return}let s=503;Bt(e+i).then(r=>{const o=r.status;if(o!==200){setTimeout(()=>{n(ts(o)?"abort":"next",o)});return}return s=501,r.json()}).then(r=>{if(typeof r!="object"||r===null){setTimeout(()=>{r===404?n("abort",r):n("next",s)});return}setTimeout(()=>{n("success",r)})}).catch(()=>{n("next",s)})},rs={prepare:ns,send:is};function os(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort((s,r)=>s.provider!==r.provider?s.provider.localeCompare(r.provider):s.prefix!==r.prefix?s.prefix.localeCompare(r.prefix):s.name.localeCompare(r.name));let i={provider:"",prefix:"",name:""};return e.forEach(s=>{if(i.name===s.name&&i.prefix===s.prefix&&i.provider===s.provider)return;i=s;const r=s.provider,o=s.prefix,l=s.name,c=n[r]||(n[r]=Object.create(null)),a=c[o]||(c[o]=ve(r,o));let f;l in a.icons?f=t.loaded:o===""||a.missing.has(l)?f=t.missing:f=t.pending;const p={provider:r,prefix:o,name:l};f.push(p)}),t}function fn(e,t){e.forEach(n=>{const i=n.loaderCallbacks;i&&(n.loaderCallbacks=i.filter(s=>s.id!==t))})}function ls(e){e.pendingCallbacksFlag||(e.pendingCallbacksFlag=!0,setTimeout(()=>{e.pendingCallbacksFlag=!1;const t=e.loaderCallbacks?e.loaderCallbacks.slice(0):[];if(!t.length)return;let n=!1;const i=e.provider,s=e.prefix;t.forEach(r=>{const o=r.icons,l=o.pending.length;o.pending=o.pending.filter(c=>{if(c.prefix!==s)return!0;const a=c.name;if(e.icons[a])o.loaded.push({provider:i,prefix:s,name:a});else if(e.missing.has(a))o.missing.push({provider:i,prefix:s,name:a});else return n=!0,!0;return!1}),o.pending.length!==l&&(n||fn([e],r.id),r.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),r.abort))})}))}let cs=0;function as(e,t,n){const i=cs++,s=fn.bind(null,n,i);if(!t.pending.length)return s;const r={id:i,icons:t,callback:e,abort:s};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(r)}),s}function us(e,t=!0,n=!1){const i=[];return e.forEach(s=>{const r=typeof s=="string"?Xe(s,t,n):s;r&&i.push(r)}),i}var fs={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function ds(e,t,n,i){const s=e.resources.length,r=e.random?Math.floor(Math.random()*s):e.index;let o;if(e.random){let k=e.resources.slice(0);for(o=[];k.length>1;){const N=Math.floor(Math.random()*k.length);o.push(k[N]),k=k.slice(0,N).concat(k.slice(N+1))}o=o.concat(k)}else o=e.resources.slice(r).concat(e.resources.slice(0,r));const l=Date.now();let c="pending",a=0,f,p=null,d=[],w=[];typeof i=="function"&&w.push(i);function C(){p&&(clearTimeout(p),p=null)}function E(){c==="pending"&&(c="aborted"),C(),d.forEach(k=>{k.status==="pending"&&(k.status="aborted")}),d=[]}function v(k,N){N&&(w=[]),typeof k=="function"&&w.push(k)}function y(){return{startTime:l,payload:t,status:c,queriesSent:a,queriesPending:d.length,subscribe:v,abort:E}}function _(){c="failed",w.forEach(k=>{k(void 0,f)})}function M(){d.forEach(k=>{k.status==="pending"&&(k.status="aborted")}),d=[]}function L(k,N,K){const V=N!=="success";switch(d=d.filter(q=>q!==k),c){case"pending":break;case"failed":if(V||!e.dataAfterTimeout)return;break;default:return}if(N==="abort"){f=K,_();return}if(V){f=K,d.length||(o.length?ee():_());return}if(C(),M(),!e.random){const q=e.resources.indexOf(k.resource);q!==-1&&q!==e.index&&(e.index=q)}c="completed",w.forEach(q=>{q(K)})}function ee(){if(c!=="pending")return;C();const k=o.shift();if(k===void 0){if(d.length){p=setTimeout(()=>{C(),c==="pending"&&(M(),_())},e.timeout);return}_();return}const N={status:"pending",resource:k,callback:(K,V)=>{L(N,K,V)}};d.push(N),a++,p=setTimeout(ee,e.rotate),n(k,t,N.callback)}return setTimeout(ee),y}function dn(e){const t={...fs,...e};let n=[];function i(){n=n.filter(l=>l().status==="pending")}function s(l,c,a){const f=ds(t,l,c,(p,d)=>{i(),a&&a(p,d)});return n.push(f),f}function r(l){return n.find(c=>l(c))||null}return{query:s,find:r,setIndex:l=>{t.index=l},getIndex:()=>t.index,cleanup:i}}function Gt(){}const vt=Object.create(null);function ps(e){if(!vt[e]){const t=Tt(e);if(!t)return;const n=dn(t),i={config:t,redundancy:n};vt[e]=i}return vt[e]}function ms(e,t,n){let i,s;if(typeof e=="string"){const r=_t(e);if(!r)return n(void 0,424),Gt;s=r.send;const o=ps(e);o&&(i=o.redundancy)}else{const r=Et(e);if(r){i=dn(r);const o=e.resources?e.resources[0]:"",l=_t(o);l&&(s=l.send)}}return!i||!s?(n(void 0,424),Gt):i.query(t,s,n)().abort}const Qt="iconify2",Ae="iconify",pn=Ae+"-count",Wt=Ae+"-version",mn=36e5,hs=168,gs=50;function It(e,t){try{return e.getItem(t)}catch{}}function Mt(e,t,n){try{return e.setItem(t,n),!0}catch{}}function Jt(e,t){try{e.removeItem(t)}catch{}}function St(e,t){return Mt(e,pn,t.toString())}function kt(e){return parseInt(It(e,pn))||0}const tt={local:!0,session:!0},hn={local:new Set,session:new Set};let jt=!1;function vs(e){jt=e}let Ge=typeof window>"u"?{}:window;function gn(e){const t=e+"Storage";try{if(Ge&&Ge[t]&&typeof Ge[t].length=="number")return Ge[t]}catch{}tt[e]=!1}function vn(e,t){const n=gn(e);if(!n)return;const i=It(n,Wt);if(i!==Qt){if(i){const l=kt(n);for(let c=0;c<l;c++)Jt(n,Ae+c.toString())}Mt(n,Wt,Qt),St(n,0);return}const s=Math.floor(Date.now()/mn)-hs,r=l=>{const c=Ae+l.toString(),a=It(n,c);if(typeof a=="string"){try{const f=JSON.parse(a);if(typeof f=="object"&&typeof f.cached=="number"&&f.cached>s&&typeof f.provider=="string"&&typeof f.data=="object"&&typeof f.data.prefix=="string"&&t(f,l))return!0}catch{}Jt(n,c)}};let o=kt(n);for(let l=o-1;l>=0;l--)r(l)||(l===o-1?(o--,St(n,o)):hn[e].add(l))}function bn(){if(!jt){vs(!0);for(const e in tt)vn(e,t=>{const n=t.data,i=t.provider,s=n.prefix,r=ve(i,s);if(!$t(r,n).length)return!1;const o=n.lastModified||-1;return r.lastModifiedCached=r.lastModifiedCached?Math.min(r.lastModifiedCached,o):o,!0})}}function bs(e,t){const n=e.lastModifiedCached;if(n&&n>=t)return n===t;if(e.lastModifiedCached=t,n)for(const i in tt)vn(i,s=>{const r=s.data;return s.provider!==e.provider||r.prefix!==e.prefix||r.lastModified===t});return!0}function xs(e,t){jt||bn();function n(i){let s;if(!tt[i]||!(s=gn(i)))return;const r=hn[i];let o;if(r.size)r.delete(o=Array.from(r).shift());else if(o=kt(s),o>=gs||!St(s,o+1))return;const l={cached:Math.floor(Date.now()/mn),provider:e.provider,data:t};return Mt(s,Ae+o.toString(),JSON.stringify(l))}t.lastModified&&!bs(e,t.lastModified)||Object.keys(t.icons).length&&(t.not_found&&(t=Object.assign({},t),delete t.not_found),n("local")||n("session"))}function Kt(){}function ys(e){e.iconsLoaderFlag||(e.iconsLoaderFlag=!0,setTimeout(()=>{e.iconsLoaderFlag=!1,ls(e)}))}function ws(e,t){e.iconsToLoad?e.iconsToLoad=e.iconsToLoad.concat(t).sort():e.iconsToLoad=t,e.iconsQueueFlag||(e.iconsQueueFlag=!0,setTimeout(()=>{e.iconsQueueFlag=!1;const{provider:n,prefix:i}=e,s=e.iconsToLoad;delete e.iconsToLoad;let r;if(!s||!(r=_t(n)))return;r.prepare(n,i,s).forEach(l=>{ms(n,l,c=>{if(typeof c!="object")l.icons.forEach(a=>{e.missing.add(a)});else try{const a=$t(e,c);if(!a.length)return;const f=e.pendingIcons;f&&a.forEach(p=>{f.delete(p)}),xs(e,c)}catch(a){console.error(a)}ys(e)})})}))}const _s=(e,t)=>{const n=us(e,!0,cn()),i=os(n);if(!i.pending.length){let c=!0;return t&&setTimeout(()=>{c&&t(i.loaded,i.missing,i.pending,Kt)}),()=>{c=!1}}const s=Object.create(null),r=[];let o,l;return i.pending.forEach(c=>{const{provider:a,prefix:f}=c;if(f===l&&a===o)return;o=a,l=f,r.push(ve(a,f));const p=s[a]||(s[a]=Object.create(null));p[f]||(p[f]=[])}),i.pending.forEach(c=>{const{provider:a,prefix:f,name:p}=c,d=ve(a,f),w=d.pendingIcons||(d.pendingIcons=new Set);w.has(p)||(w.add(p),s[a][f].push(p))}),r.forEach(c=>{const{provider:a,prefix:f}=c;s[a][f].length&&ws(c,s[a][f])}),t?as(t,i,r):Kt};function Is(e,t){const n={...e};for(const i in t){const s=t[i],r=typeof s;i in an?(s===null||s&&(r==="string"||r==="number"))&&(n[i]=s):r===typeof n[i]&&(n[i]=i==="rotate"?s%4:s)}return n}const Ss=/[\s,]+/;function ks(e,t){t.split(Ss).forEach(n=>{switch(n.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0;break}})}function Cs(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function i(s){for(;s<0;)s+=4;return s%4}if(n===""){const s=parseInt(e);return isNaN(s)?0:i(s)}else if(n!==e){let s=0;switch(n){case"%":s=25;break;case"deg":s=90}if(s){let r=parseFloat(e.slice(0,e.length-n.length));return isNaN(r)?0:(r=r/s,r%1===0?i(r):0)}}return t}function $s(e,t){let n=e.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in t)n+=" "+i+'="'+t[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+e+"</svg>"}function Es(e){return e.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Ls(e){return"data:image/svg+xml,"+Es(e)}function Ts(e){return'url("'+Ls(e)+'")'}const Yt={...un,inline:!1},Ms={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},js={display:"inline-block"},Ct={"background-color":"currentColor"},xn={"background-color":"transparent"},Zt={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},Xt={"-webkit-mask":Ct,mask:Ct,background:xn};for(const e in Xt){const t=Xt[e];for(const n in Zt)t[e+"-"+n]=Zt[n]}function Ps(e){return e+(e.match(/^[-0-9.]+$/)?"px":"")}function Os(e,t){const n=Is(Yt,t),i=t.mode||"svg",s=i==="svg"?{...Ms}:{};e.body.indexOf("xlink:")===-1&&delete s["xmlns:xlink"];let r=typeof t.style=="string"?t.style:"";for(let y in t){const _=t[y];if(_!==void 0)switch(y){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":n[y]=_===!0||_==="true"||_===1;break;case"flip":typeof _=="string"&&ks(n,_);break;case"color":r=r+(r.length>0&&r.trim().slice(-1)!==";"?";":"")+"color: "+_+"; ";break;case"rotate":typeof _=="string"?n[y]=Cs(_):typeof _=="number"&&(n[y]=_);break;case"ariaHidden":case"aria-hidden":_!==!0&&_!=="true"&&delete s["aria-hidden"];break;default:if(y.slice(0,3)==="on:")break;Yt[y]===void 0&&(s[y]=_)}}const o=Gn(e,n),l=o.attributes;if(n.inline&&(r="vertical-align: -0.125em; "+r),i==="svg"){Object.assign(s,l),r!==""&&(s.style=r);let y=0,_=t.id;return typeof _=="string"&&(_=_.replace(/-/g,"_")),{svg:!0,attributes:s,body:Kn(o.body,_?()=>_+"ID"+y++:"iconifySvelte")}}const{body:c,width:a,height:f}=e,p=i==="mask"||(i==="bg"?!1:c.indexOf("currentColor")!==-1),d=$s(c,{...l,width:a+"",height:f+""}),C={"--svg":Ts(d)},E=y=>{const _=l[y];_&&(C[y]=Ps(_))};E("width"),E("height"),Object.assign(C,js,p?Ct:xn);let v="";for(const y in C)v+=y+": "+C[y]+";";return s.style=v+r,{svg:!1,attributes:s}}cn(!0);Yn("",rs);if(typeof document<"u"&&typeof window<"u"){bn();const e=window;if(e.IconifyPreload!==void 0){const t=e.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof t=="object"&&t!==null&&(t instanceof Array?t:[t]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!Nn(i))&&console.error(n)}catch{console.error(n)}})}if(e.IconifyProviders!==void 0){const t=e.IconifyProviders;if(typeof t=="object"&&t!==null)for(let n in t){const i="IconifyProviders["+n+"] is invalid.";try{const s=t[n];if(typeof s!="object"||!s||s.resources===void 0)continue;Zn(n,s)||console.error(i)}catch{console.error(i)}}}}function Ds(e,t,n,i,s){function r(){t.loading&&(t.loading.abort(),t.loading=null)}if(typeof e=="object"&&e!==null&&typeof e.body=="string")return t.name="",r(),{data:{...et,...e}};let o;if(typeof e!="string"||(o=Xe(e,!1,!0))===null)return r(),null;const l=Hn(o);if(!l)return n&&(!t.loading||t.loading.name!==e)&&(r(),t.name="",t.loading={name:e,abort:_s([o],i)}),null;r(),t.name!==e&&(t.name=e,s&&!t.destroyed&&s(e));const c=["iconify"];return o.prefix!==""&&c.push("iconify--"+o.prefix),o.provider!==""&&c.push("iconify--"+o.provider),{data:l,classes:c}}function As(e,t){return e?Os({...et,...e},t):null}function en(e){let t;function n(r,o){return r[0].svg?Fs:Hs}let i=n(e),s=i(e);return{c(){s.c(),t=Je()},l(r){s.l(r),t=Je()},m(r,o){s.m(r,o),T(r,t,o)},p(r,o){i===(i=n(r))&&s?s.p(r,o):(s.d(1),s=i(r),s&&(s.c(),s.m(t.parentNode,t)))},d(r){r&&g(t),s.d(r)}}}function Hs(e){let t,n=[e[0].attributes],i={};for(let s=0;s<n.length;s+=1)i=Ke(i,n[s]);return{c(){t=b("span"),this.h()},l(s){t=x(s,"SPAN",{}),$(t).forEach(g),this.h()},h(){Vt(t,i)},m(s,r){T(s,t,r)},p(s,r){Vt(t,i=sn(n,[r&1&&s[0].attributes]))},d(s){s&&g(t)}}}function Fs(e){let t,n,i=e[0].body+"",s=[e[0].attributes],r={};for(let o=0;o<s.length;o+=1)r=Ke(r,s[o]);return{c(){t=In("svg"),n=new Sn(!0),this.h()},l(o){t=kn(o,"svg",{});var l=$(t);n=Cn(l,!0),l.forEach(g),this.h()},h(){n.a=null,qt(t,r)},m(o,l){T(o,t,l),n.m(i,t)},p(o,l){l&1&&i!==(i=o[0].body+"")&&n.p(i),qt(t,r=sn(s,[l&1&&o[0].attributes]))},d(o){o&&g(t)}}}function Ns(e){let t,n=e[0]&&en(e);return{c(){n&&n.c(),t=Je()},l(i){n&&n.l(i),t=Je()},m(i,s){n&&n.m(i,s),T(i,t,s)},p(i,[s]){i[0]?n?n.p(i,s):(n=en(i),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:ge,o:ge,d(i){i&&g(t),n&&n.d(i)}}}function Vs(e,t,n){const i={name:"",loading:null,destroyed:!1};let s=!1,r=0,o;const l=a=>{typeof t.onLoad=="function"&&t.onLoad(a),$n()("load",{icon:a})};function c(){n(3,r++,r)}return wn(()=>{n(2,s=!0)}),_n(()=>{n(1,i.destroyed=!0,i),i.loading&&(i.loading.abort(),n(1,i.loading=null,i))}),e.$$set=a=>{n(6,t=Ke(Ke({},t),Nt(a)))},e.$$.update=()=>{{const a=Ds(t.icon,i,s,c,l);n(0,o=a?As(a.data,t):null),o&&a.classes&&n(0,o.attributes.class=(typeof t.class=="string"?t.class+" ":"")+a.classes.join(" "),o)}},t=Nt(t),[o,i,s,r]}class yn extends Te{constructor(t){super(),Me(this,t,Vs,Ns,Le,{})}}function qs(e){let t,n,i,s,r,o,l,c,a,f;return i=new yn({props:{icon:e[2],class:"size-10 m-3 text-white"}}),{c(){t=b("div"),n=b("div"),P(i.$$.fragment),s=I(),r=b("h1"),o=$e(e[0]),l=I(),c=b("p"),a=$e(e[1]),this.h()},l(p){t=x(p,"DIV",{class:!0});var d=$(t);n=x(d,"DIV",{class:!0});var w=$(n);O(i.$$.fragment,w),w.forEach(g),s=S(d),r=x(d,"H1",{class:!0});var C=$(r);o=Ee(C,e[0]),C.forEach(g),l=S(d),c=x(d,"P",{class:!0});var E=$(c);a=Ee(E,e[1]),E.forEach(g),d.forEach(g),this.h()},h(){m(n,"class","rounded-lg relative gradient w-min my-4"),m(r,"class","pb-2"),m(c,"class","secondary-txt w-4/5"),m(t,"class","flex flex-col items-center px-1 shadow-[2px_2px_37px_0px_rgba(0,0,0,0.14)] py-4 rounded-lg mx-4 w-3/12 text-center")},m(p,d){T(p,t,d),u(t,n),D(i,n,null),u(t,s),u(t,r),u(r,o),u(t,l),u(t,c),u(c,a),f=!0},p(p,[d]){const w={};d&4&&(w.icon=p[2]),i.$set(w),(!f||d&1)&&Oe(o,p[0]),(!f||d&2)&&Oe(a,p[1])},i(p){f||(A(i.$$.fragment,p),f=!0)},o(p){H(i.$$.fragment,p),f=!1},d(p){p&&g(t),F(i)}}}function Us(e,t,n){let{title:i}=t,{text:s}=t,{icon:r}=t;return e.$$set=o=>{"title"in o&&n(0,i=o.title),"text"in o&&n(1,s=o.text),"icon"in o&&n(2,r=o.icon)},[i,s,r]}class bt extends Te{constructor(t){super(),Me(this,t,Us,qs,Le,{title:0,text:1,icon:2})}}function zs(e){let t,n,i,s,r,o,l,c,a,f,p;return i=new yn({props:{icon:e[2],class:"size-10 text-white"}}),{c(){t=b("div"),n=b("div"),P(i.$$.fragment),r=I(),o=b("h1"),l=$e(e[0]),c=I(),a=b("p"),f=$e(e[1]),this.h()},l(d){t=x(d,"DIV",{class:!0});var w=$(t);n=x(w,"DIV",{class:!0});var C=$(n);O(i.$$.fragment,C),C.forEach(g),r=S(w),o=x(w,"H1",{class:!0});var E=$(o);l=Ee(E,e[0]),E.forEach(g),c=S(w),a=x(w,"P",{class:!0});var v=$(a);f=Ee(v,e[1]),v.forEach(g),w.forEach(g),this.h()},h(){m(n,"class",s="rounded-lg relative w-min my-4 p-3 "+(e[3]?"bg-[#000000C2]":"gradient")),m(o,"class","pb-2 text-2xl poppins font-bold"),m(a,"class","secondary-txt"),m(t,"class","x-1 py-4 rounded-lg mx-4 ")},m(d,w){T(d,t,w),u(t,n),D(i,n,null),u(t,r),u(t,o),u(o,l),u(t,c),u(t,a),u(a,f),p=!0},p(d,[w]){const C={};w&4&&(C.icon=d[2]),i.$set(C),(!p||w&8&&s!==(s="rounded-lg relative w-min my-4 p-3 "+(d[3]?"bg-[#000000C2]":"gradient")))&&m(n,"class",s),(!p||w&1)&&Oe(l,d[0]),(!p||w&2)&&Oe(f,d[1])},i(d){p||(A(i.$$.fragment,d),p=!0)},o(d){H(i.$$.fragment,d),p=!1},d(d){d&&g(t),F(i)}}}function Rs(e,t,n){let{title:i}=t,{text:s}=t,{icon:r}=t,{black:o=!1}=t;return e.$$set=l=>{"title"in l&&n(0,i=l.title),"text"in l&&n(1,s=l.text),"icon"in l&&n(2,r=l.icon),"black"in l&&n(3,o=l.black)},[i,s,r,o]}class Ce extends Te{constructor(t){super(),Me(this,t,Rs,zs,Le,{title:0,text:1,icon:2,black:3})}}function Bs(e){let t,n,i,s,r,o,l,c,a,f,p,d,w="USA",C,E;return{c(){t=b("div"),n=b("div"),i=b("img"),r=I(),o=b("h4"),l=$e(e[1]),c=I(),a=b("p"),f=$e(e[2]),p=I(),d=b("p"),d.textContent=w,C=I(),E=b("hr"),this.h()},l(v){t=x(v,"DIV",{class:!0});var y=$(t);n=x(y,"DIV",{class:!0});var _=$(n);i=x(_,"IMG",{class:!0,src:!0,alt:!0}),r=S(_),o=x(_,"H4",{class:!0});var M=$(o);l=Ee(M,e[1]),M.forEach(g),_.forEach(g),c=S(y),a=x(y,"P",{class:!0});var L=$(a);f=Ee(L,e[2]),L.forEach(g),p=S(y),d=x(y,"P",{class:!0,"data-svelte-h":!0}),U(d)!=="svelte-l1b3c"&&(d.textContent=w),C=S(y),E=x(y,"HR",{class:!0}),y.forEach(g),this.h()},h(){m(i,"class","rounded-full ring-2 ring-black/27"),Ye(i.src,s=e[0])||m(i,"src",s),m(i,"alt",""),m(o,"class","uppercase poppins font-semibold text-lg pl-2"),m(n,"class","flex flex-row items-center relative"),m(a,"class","secondary-txt"),m(d,"class","uppercase poppins text-sm font-semibold mt-20"),m(E,"class","w-1/4 bg-primary"),m(t,"class","p-4 bg-white rounded-3xl mx-4 text-black w-1/4")},m(v,y){T(v,t,y),u(t,n),u(n,i),u(n,r),u(n,o),u(o,l),u(t,c),u(t,a),u(a,f),u(t,p),u(t,d),u(t,C),u(t,E)},p(v,[y]){y&1&&!Ye(i.src,s=v[0])&&m(i,"src",s),y&2&&Oe(l,v[1])},i:ge,o:ge,d(v){v&&g(t)}}}function Gs(e,t,n){let{img:i=En}=t,{name:s="John Doe"}=t,{description:r="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis, cursus aliquet dignissim enim. Lobortis ultrices purus, aliquam fames enim, proin integer leo. Vitae elit massa sed."}=t;const o=r;return e.$$set=l=>{"img"in l&&n(0,i=l.img),"name"in l&&n(1,s=l.name),"description"in l&&n(3,r=l.description)},[i,s,o,r]}class xt extends Te{constructor(t){super(),Me(this,t,Gs,Bs,Le,{img:0,name:1,description:3})}}const Qs=""+new URL("../assets/AppStore_black.AlcitE-D.svg",import.meta.url).href,Ws=""+new URL("../assets/PlayStore_black.QF4hZgxa.png",import.meta.url).href;function Js(e){let t,n,i=`<img src="${Qs}" alt="" class="w-full h-auto"/>`,s,r,o=`<img src="${Ws}" alt=""/>`,l;return{c(){t=b("div"),n=b("a"),n.innerHTML=i,s=I(),r=b("a"),r.innerHTML=o,this.h()},l(c){t=x(c,"DIV",{class:!0});var a=$(t);n=x(a,"A",{href:!0,class:!0,"data-svelte-h":!0}),U(n)!=="svelte-447onq"&&(n.innerHTML=i),s=S(a),r=x(a,"A",{href:!0,class:!0,"data-svelte-h":!0}),U(r)!=="svelte-10hoyia"&&(r.innerHTML=o),a.forEach(g),this.h()},h(){m(n,"href",""),m(n,"class","grow basis-1 h-fit my-auto"),m(r,"href",""),m(r,"class","grow basis-8 h-full"),m(t,"class",l=`flex w-${e[0]}`)},m(c,a){T(c,t,a),u(t,n),u(t,s),u(t,r)},p(c,[a]){a&1&&l!==(l=`flex w-${c[0]}`)&&m(t,"class",l)},i:ge,o:ge,d(c){c&&g(t)}}}function Ks(e,t,n){let{size:i=72}=t;return e.$$set=s=>{"size"in s&&n(0,i=s.size)},[i]}class tn extends Te{constructor(t){super(),Me(this,t,Ks,Js,Le,{size:0})}}const nn=""+new URL("../assets/Mockup.9NG7DIW9.png",import.meta.url).href,Ys=""+new URL("../assets/Mockup2.tI8BIhq_.png",import.meta.url).href,Zs=""+new URL("../assets/Mockup3.JyFBbJym.png",import.meta.url).href;function Xs(e){let t,n,i,s=`New App to Connect <br/> 
            You with <span class="text-red-600">Paid Gigs.</span>`,r,o,l="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",c,a,f,p,d,w,C,E,v,y,_="App Benefits",M,L,ee,k,N="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab",K,V,q,nt,te,st,ne,He,Y,Pt=`<div><img src="${Ys}" alt=""/></div> <div class="flex flex-col justify-center"><div class="w-min mb-5"><h2 class="whitespace-nowrap heading">About <span class="text-secondary">UniGiig</span></h2> <hr class="bg-primary w-2/3"/></div> <p class="secondary-txt">Unigiig is a platform for students to find and share notes, past papers, and other resources.</p> <p class="secondary-txt">It is currently in development.</p> <button class="mt-5 p-3 bg-black text-white rounded-lg w-fit">Learn More</button></div> <div class="absolute top-0 left-0 w-1/3 h-full gradient -z-10"></div>`,Fe,z,se,Ot='<h1 class="mb-2 heading">How UniGiig Helping Students</h1> <hr class="bg-primary w-5/6 mx-auto mb-4"/> <p class="absolute left-0 right-0 secondary-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',it,R,B,ie,rt,re,ot,oe,lt,be,Dt=`<img src="${Zs}" alt=""/>`,ct,G,le,at,ce,ut,ae,Ne,Q,ue,At='<h1 class="poppins text-3xl font-semibold">What Students Saying About Us</h1> <hr class="bg-white w-1/3 mx-auto"/>',ft,W,fe,dt,de,pt,pe,Ve,J,xe,Ht,mt,Z,me,Ft="The Most Complete Work Solution in your Hand",ht,he,qe;return a=new tn({}),q=new bt({props:{icon:"mdi:star-outline",title:"Trusted",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab"}}),te=new bt({props:{icon:"mdi:star-outline",title:"User Friendly",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab"}}),ne=new bt({props:{icon:"mdi:star-outline",title:"Anywhere, Anytime",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab"}}),ie=new Ce({props:{title:"Lorem Ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.",icon:"ph:chat-light"}}),re=new Ce({props:{title:"Lorem Ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.",icon:"ph:chat-light",black:!0}}),oe=new Ce({props:{title:"Lorem Ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.",icon:"ph:chat-light"}}),le=new Ce({props:{title:"Lorem Ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.",icon:"ph:chat-light"}}),ce=new Ce({props:{title:"Lorem Ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.",icon:"ph:chat-light",black:!0}}),ae=new Ce({props:{title:"Lorem Ipsum",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.",icon:"ph:chat-light"}}),fe=new xt({}),de=new xt({}),pe=new xt({}),he=new tn({props:{size:72}}),{c(){t=b("section"),n=b("div"),i=b("h1"),i.innerHTML=s,r=I(),o=b("p"),o.textContent=l,c=I(),P(a.$$.fragment),f=I(),p=b("img"),w=I(),C=b("div"),E=I(),v=b("section"),y=b("h1"),y.textContent=_,M=I(),L=b("hr"),ee=I(),k=b("p"),k.textContent=N,K=I(),V=b("div"),P(q.$$.fragment),nt=I(),P(te.$$.fragment),st=I(),P(ne.$$.fragment),He=I(),Y=b("section"),Y.innerHTML=Pt,Fe=I(),z=b("section"),se=b("div"),se.innerHTML=Ot,it=I(),R=b("div"),B=b("div"),P(ie.$$.fragment),rt=I(),P(re.$$.fragment),ot=I(),P(oe.$$.fragment),lt=I(),be=b("div"),be.innerHTML=Dt,ct=I(),G=b("div"),P(le.$$.fragment),at=I(),P(ce.$$.fragment),ut=I(),P(ae.$$.fragment),Ne=I(),Q=b("section"),ue=b("div"),ue.innerHTML=At,ft=I(),W=b("div"),P(fe.$$.fragment),dt=I(),P(de.$$.fragment),pt=I(),P(pe.$$.fragment),Ve=I(),J=b("section"),xe=b("img"),mt=I(),Z=b("div"),me=b("h1"),me.textContent=Ft,ht=I(),P(he.$$.fragment),this.h()},l(h){t=x(h,"SECTION",{class:!0});var j=$(t);n=x(j,"DIV",{class:!0});var ye=$(n);i=x(ye,"H1",{class:!0,"data-svelte-h":!0}),U(i)!=="svelte-12dd2v3"&&(i.innerHTML=s),r=S(ye),o=x(ye,"P",{class:!0,"data-svelte-h":!0}),U(o)!=="svelte-1lfld00"&&(o.textContent=l),c=S(ye),O(a.$$.fragment,ye),ye.forEach(g),f=S(j),p=x(j,"IMG",{src:!0,alt:!0}),w=S(j),C=x(j,"DIV",{class:!0}),$(C).forEach(g),j.forEach(g),E=S(h),v=x(h,"SECTION",{id:!0,class:!0});var X=$(v);y=x(X,"H1",{class:!0,"data-svelte-h":!0}),U(y)!=="svelte-175b7eh"&&(y.textContent=_),M=S(X),L=x(X,"HR",{class:!0}),ee=S(X),k=x(X,"P",{class:!0,"data-svelte-h":!0}),U(k)!=="svelte-177x73t"&&(k.textContent=N),K=S(X),V=x(X,"DIV",{class:!0});var we=$(V);O(q.$$.fragment,we),nt=S(we),O(te.$$.fragment,we),st=S(we),O(ne.$$.fragment,we),we.forEach(g),X.forEach(g),He=S(h),Y=x(h,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),U(Y)!=="svelte-foqi8o"&&(Y.innerHTML=Pt),Fe=S(h),z=x(h,"SECTION",{id:!0,class:!0});var Ue=$(z);se=x(Ue,"DIV",{class:!0,"data-svelte-h":!0}),U(se)!=="svelte-1lo5k03"&&(se.innerHTML=Ot),it=S(Ue),R=x(Ue,"DIV",{class:!0});var _e=$(R);B=x(_e,"DIV",{class:!0});var Ie=$(B);O(ie.$$.fragment,Ie),rt=S(Ie),O(re.$$.fragment,Ie),ot=S(Ie),O(oe.$$.fragment,Ie),Ie.forEach(g),lt=S(_e),be=x(_e,"DIV",{"data-svelte-h":!0}),U(be)!=="svelte-h98ghd"&&(be.innerHTML=Dt),ct=S(_e),G=x(_e,"DIV",{class:!0});var Se=$(G);O(le.$$.fragment,Se),at=S(Se),O(ce.$$.fragment,Se),ut=S(Se),O(ae.$$.fragment,Se),Se.forEach(g),_e.forEach(g),Ue.forEach(g),Ne=S(h),Q=x(h,"SECTION",{id:!0,class:!0});var ze=$(Q);ue=x(ze,"DIV",{class:!0,"data-svelte-h":!0}),U(ue)!=="svelte-ul4fc"&&(ue.innerHTML=At),ft=S(ze),W=x(ze,"DIV",{class:!0});var ke=$(W);O(fe.$$.fragment,ke),dt=S(ke),O(de.$$.fragment,ke),pt=S(ke),O(pe.$$.fragment,ke),ke.forEach(g),ze.forEach(g),Ve=S(h),J=x(h,"SECTION",{id:!0,class:!0});var Re=$(J);xe=x(Re,"IMG",{src:!0,alt:!0}),mt=S(Re),Z=x(Re,"DIV",{class:!0});var Be=$(Z);me=x(Be,"H1",{class:!0,"data-svelte-h":!0}),U(me)!=="svelte-ytne21"&&(me.textContent=Ft),ht=S(Be),O(he.$$.fragment,Be),Be.forEach(g),Re.forEach(g),this.h()},h(){m(i,"class","poppins font-semibold leading-10"),m(o,"class","secondary-txt leading-8"),m(n,"class","flex flex-col justify-center w-2/6"),Ye(p.src,d=nn)||m(p,"src",d),m(p,"alt",""),m(C,"class","absolute -z-10 w-1/3 h-full right-0 top-0 gradient"),m(t,"class","flex flex-row justify-evenly"),m(y,"class","poppins text-5xl font-semibold mb-2"),m(L,"class","w-1/12 bg-primary mb-2"),m(k,"class","secondary-txt mb-8"),m(V,"class","flex flex-row justify-around"),m(v,"id","benefits"),m(v,"class","flex flex-col items-center pt-10 pb-20"),m(Y,"id","about"),m(Y,"class","flex flex-row justify-evenly relative"),m(se,"class","inline-block text-center w-fit relative pb-12"),m(B,"class","w-1/6"),m(G,"class","w-1/6"),m(R,"class","flex flex-row justify-evenly"),m(z,"id","students"),m(z,"class","flex flex-col items-center"),m(ue,"class","w-fit mb-6"),m(W,"class","flex flex-row justify-center"),m(Q,"id","testimonials"),m(Q,"class","bg-[#000000D9] text-white pt-8 pb-5 flex flex-col items-center "),Ye(xe.src,Ht=nn)||m(xe,"src",Ht),m(xe,"alt",""),m(me,"class","heading"),m(Z,"class","my-auto"),m(J,"id","final-call"),m(J,"class","flex flex-row")},m(h,j){T(h,t,j),u(t,n),u(n,i),u(n,r),u(n,o),u(n,c),D(a,n,null),u(t,f),u(t,p),u(t,w),u(t,C),T(h,E,j),T(h,v,j),u(v,y),u(v,M),u(v,L),u(v,ee),u(v,k),u(v,K),u(v,V),D(q,V,null),u(V,nt),D(te,V,null),u(V,st),D(ne,V,null),T(h,He,j),T(h,Y,j),T(h,Fe,j),T(h,z,j),u(z,se),u(z,it),u(z,R),u(R,B),D(ie,B,null),u(B,rt),D(re,B,null),u(B,ot),D(oe,B,null),u(R,lt),u(R,be),u(R,ct),u(R,G),D(le,G,null),u(G,at),D(ce,G,null),u(G,ut),D(ae,G,null),T(h,Ne,j),T(h,Q,j),u(Q,ue),u(Q,ft),u(Q,W),D(fe,W,null),u(W,dt),D(de,W,null),u(W,pt),D(pe,W,null),T(h,Ve,j),T(h,J,j),u(J,xe),u(J,mt),u(J,Z),u(Z,me),u(Z,ht),D(he,Z,null),qe=!0},p:ge,i(h){qe||(A(a.$$.fragment,h),A(q.$$.fragment,h),A(te.$$.fragment,h),A(ne.$$.fragment,h),A(ie.$$.fragment,h),A(re.$$.fragment,h),A(oe.$$.fragment,h),A(le.$$.fragment,h),A(ce.$$.fragment,h),A(ae.$$.fragment,h),A(fe.$$.fragment,h),A(de.$$.fragment,h),A(pe.$$.fragment,h),A(he.$$.fragment,h),qe=!0)},o(h){H(a.$$.fragment,h),H(q.$$.fragment,h),H(te.$$.fragment,h),H(ne.$$.fragment,h),H(ie.$$.fragment,h),H(re.$$.fragment,h),H(oe.$$.fragment,h),H(le.$$.fragment,h),H(ce.$$.fragment,h),H(ae.$$.fragment,h),H(fe.$$.fragment,h),H(de.$$.fragment,h),H(pe.$$.fragment,h),H(he.$$.fragment,h),qe=!1},d(h){h&&(g(t),g(E),g(v),g(He),g(Y),g(Fe),g(z),g(Ne),g(Q),g(Ve),g(J)),F(a),F(q),F(te),F(ne),F(ie),F(re),F(oe),F(le),F(ce),F(ae),F(fe),F(de),F(pe),F(he)}}}class ii extends Te{constructor(t){super(),Me(this,t,null,Xs,Le,{})}}export{ii as component,si as universal};
