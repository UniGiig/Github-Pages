import{s as D,f as p,a as C,l as L,g,h as y,r as G,c as E,d as h,m as T,j as $,i as v,u as d,v as w,w as U,x as z,y as R,z as Y,A as J,B as K,C as Q}from"../chunks/scheduler.NgzKocH5.js";import{S as M,i as P,b as O,d as F,m as N,a as H,t as I,e as B}from"../chunks/index.bMXcRwGN.js";import{l as V}from"../chunks/logo.sDofKtZB.js";import{p as W}from"../chunks/stores.xPUYUi1-.js";function q(n){return n?.length!==void 0?n:Array.from(n)}const X=!0,de=Object.freeze(Object.defineProperty({__proto__:null,prerender:X},Symbol.toStringTag,{value:"Module"})),Z=[{name:"Product",href:"#",sublinks:[{name:"Overview",href:"#"},{name:"Pricing",href:"#"},{name:"Marketplace",href:"#"},{name:"Features",href:"#"},{name:"Integrations",href:"#"}]},{name:"Company",href:"#",sublinks:[{name:"About",href:"#"},{name:"Team",href:"#"},{name:"Blog",href:"#"},{name:"Careers",href:"#"}]},{name:"Connect",href:"#",sublinks:[{name:"Contact",href:"#"},{name:"Newsletter",href:"#"},{name:"LinkedIn",href:"#"}]}];function ee(n,e,l){const s=n.slice();return s[0]=e[l],s}function te(n,e,l){const s=n.slice();return s[3]=e[l],s}function ae(n){let e,l=n[3].name+"",s;return{c(){e=p("a"),s=L(l),this.h()},l(i){e=g(i,"A",{href:!0});var r=y(e);s=T(r,l),r.forEach(h),this.h()},h(){$(e,"href",n[3].href)},m(i,r){v(i,e,r),d(e,s)},p:w,d(i){i&&h(e)}}}function le(n){let e,l,s=n[0].name+"",i,r,c,m=q(n[0].sublinks),f=[];for(let a=0;a<m.length;a+=1)f[a]=ae(te(n,m,a));return{c(){e=p("div"),l=p("a"),i=L(s),r=C();for(let a=0;a<f.length;a+=1)f[a].c();c=C(),this.h()},l(a){e=g(a,"DIV",{class:!0});var t=y(e);l=g(t,"A",{href:!0,class:!0});var o=y(l);i=T(o,s),o.forEach(h),r=E(t);for(let k=0;k<f.length;k+=1)f[k].l(t);c=E(t),t.forEach(h),this.h()},h(){$(l,"href",n[0].href),$(l,"class","text-lg font-bold pb-2"),$(e,"class","grid grid-cols-1 gap-3 font-normal text-base")},m(a,t){v(a,e,t),d(e,l),d(l,i),d(e,r);for(let o=0;o<f.length;o+=1)f[o]&&f[o].m(e,null);d(e,c)},p:w,d(a){a&&h(e),U(f,a)}}}function se(n){let e,l,s=`<img class="rounded-full mb-4" src="${V}" alt="Logo"/> <p class="w-2/3">Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod. Lorem ipsum 
            dolor sit amet, consectetur adipiscing elit</p>`,i,r,c,m,f,a,t=new Date().getFullYear()+"",o,k=q(Z),_=[];for(let u=0;u<k.length;u+=1)_[u]=le(ee(n,k,u));return{c(){e=p("section"),l=p("div"),l.innerHTML=s,i=C(),r=p("div");for(let u=0;u<_.length;u+=1)_[u].c();c=C(),m=p("section"),f=p("p"),a=L("© UniGiig Platform. Copyright "),o=L(t),this.h()},l(u){e=g(u,"SECTION",{class:!0});var b=y(e);l=g(b,"DIV",{"data-svelte-h":!0}),G(l)!=="svelte-1qcbn5p"&&(l.innerHTML=s),i=E(b),r=g(b,"DIV",{class:!0});var x=y(r);for(let A=0;A<_.length;A+=1)_[A].l(x);x.forEach(h),b.forEach(h),c=E(u),m=g(u,"SECTION",{});var S=y(m);f=g(S,"P",{class:!0});var j=y(f);a=T(j,"© UniGiig Platform. Copyright "),o=T(j,t),j.forEach(h),S.forEach(h),this.h()},h(){$(r,"class","flex flex-row gap-12 text-base"),$(e,"class","bg-[#404048] p-4 flex flex-row text-white dm_sans"),$(f,"class","m-auto w-fit")},m(u,b){v(u,e,b),d(e,l),d(e,i),d(e,r);for(let x=0;x<_.length;x+=1)_[x]&&_[x].m(r,null);v(u,c,b),v(u,m,b),d(m,f),d(f,a),d(f,o)},p:w,i:w,o:w,d(u){u&&(h(e),h(c),h(m)),U(_,u)}}}class ne extends M{constructor(e){super(),P(this,e,null,se,D,{})}}function re(n){let e,l=`<nav class="flex justify-evenly"><img class="pl-5" src="${V}" alt="UniGiig Logo"/> <ul class="flex gap-3 w-1/2 justify-between items-center grow"><li><a href="/">Home</a></li> <li><a href="/#benefits">Benefits</a></li> <li><a href="/#about">About</a></li> <li><a href="">Features</a></li> <li><a href="/contact">Contact</a></li></ul></nav> <button class="mr-8 h-1/2 bg-white rounded-lg p-3"><a>Download Now</a></button>`;return{c(){e=p("header"),e.innerHTML=l,this.h()},l(s){e=g(s,"HEADER",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-16srfol"&&(e.innerHTML=l),this.h()},h(){$(e,"class","flex flex-row justify-between items-center relative w-full")},m(s,i){v(s,e,i)},p:w,i:w,o:w,d(s){s&&h(e)}}}class oe extends M{constructor(e){super(),P(this,e,null,re,D,{})}}function ie(n){let e,l,s,i,r,c,m;document.title=e=n[0].data.title,s=new oe({});const f=n[2].default,a=z(f,n,n[1],null);return c=new ne({}),{c(){l=C(),O(s.$$.fragment),i=C(),a&&a.c(),r=C(),O(c.$$.fragment)},l(t){R("svelte-7jht9m",document.head).forEach(h),l=E(t),F(s.$$.fragment,t),i=E(t),a&&a.l(t),r=E(t),F(c.$$.fragment,t)},m(t,o){v(t,l,o),N(s,t,o),v(t,i,o),a&&a.m(t,o),v(t,r,o),N(c,t,o),m=!0},p(t,[o]){(!m||o&1)&&e!==(e=t[0].data.title)&&(document.title=e),a&&a.p&&(!m||o&2)&&Y(a,f,t,t[1],m?K(f,t[1],o,null):J(t[1]),null)},i(t){m||(H(s.$$.fragment,t),H(a,t),H(c.$$.fragment,t),m=!0)},o(t){I(s.$$.fragment,t),I(a,t),I(c.$$.fragment,t),m=!1},d(t){t&&(h(l),h(i),h(r)),B(s,t),a&&a.d(t),B(c,t)}}}function ce(n,e,l){let s;Q(n,W,c=>l(0,s=c));let{$$slots:i={},$$scope:r}=e;return n.$$set=c=>{"$$scope"in c&&l(1,r=c.$$scope)},[s,r,i]}class _e extends M{constructor(e){super(),P(this,e,ce,ie,D,{})}}export{_e as component,de as universal};
