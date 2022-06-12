(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["shop-app"]=t():e["shop-app"]=t()})(window,(function(){return function(e){function t(t){for(var r,a,i=t[0],c=t[1],s=t[2],p=0,f=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},u=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a00aebaf"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=a(e);var s=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",s.name="ChunkLoadError",s.type=r,s.request=u,n[1](s)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="child/shop/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp_shop"]=window["webpackJsonp_shop"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var l=s;return u.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return E})),n.d(t,"mount",(function(){return N})),n.d(t,"unmount",(function(){return A}));var r=n("c7eb"),o=n("1da1"),u=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("83f4"),n("2b0e")),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"shop-app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},i=[],c=(n("034f"),n("2877")),s={},p=Object(c["a"])(s,a,i,!1,null,null,null),l=p.exports,f=n("8c4f"),d=(n("d3b7"),n("3ca3"),n("ddb0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._v("Shop Page")])}),h=[],b={name:"Home"},v=b,m=Object(c["a"])(v,d,h,!1,null,null,null),_=m.exports;u["a"].use(f["a"]);var w=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],y=w,j=n("2f62");u["a"].use(j["a"]);var O=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}});u["a"].config.productionTip=!1;var g=null,P=null;function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.container,n=e.setGlobalState;g=new f["a"]({base:window.__POWERED_BY_QIANKUN_PARENT__?"/child/member/shop/":"/child/shop/",mode:"history",routes:y}),n&&(O.setGlobalState=n),P=new u["a"]({router:g,store:O,render:function(e){return e(l)}}).$mount(t?t.querySelector("#shop-app"):"#shop-app")}function E(){return k.apply(this,arguments)}function k(){return k=Object(o["a"])(Object(r["a"])().mark((function e(){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("[vue] vue shop bootstraped");case 1:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}function N(e){return S.apply(this,arguments)}function S(){return S=Object(o["a"])(Object(r["a"])().mark((function e(t){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:x(t);case 1:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}function A(){return T.apply(this,arguments)}function T(){return T=Object(o["a"])(Object(r["a"])().mark((function e(){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("shop unmount"),P.$destroy(),P.$el.innerHTML="",P=null,g=null;case 5:case"end":return e.stop()}}),e)}))),T.apply(this,arguments)}window.__POWERED_BY_QIANKUN__||x()},"83f4":function(e,t,n){window.__POWERED_BY_QIANKUN__&&(n.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)},"85ec":function(e,t,n){}})}));
//# sourceMappingURL=app.3dee3b0e.js.map