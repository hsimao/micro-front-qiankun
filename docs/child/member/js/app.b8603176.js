(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["member-app"]=t():e["member-app"]=t()})(window,(function(){return function(e){function t(t){for(var r,o,i=t[0],c=t[1],p=t[2],l=0,s=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&s.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(s.length)s.shift()();return u.push.apply(u,p||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function i(e){return c.p+"js/"+({"product~shop":"product~shop",product:"product",shop:"shop",profile:"profile"}[e]||e)+"."+{"product~shop":"9f4bfe39",product:"42a762ac",shop:"7b13b06a",profile:"dd641421"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={product:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({"product~shop":"product~shop",product:"product",shop:"shop",profile:"profile"}[e]||e)+"."+{"product~shop":"31d6cfe0",product:"56d6e4fb",shop:"31d6cfe0",profile:"31d6cfe0"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var p=u[i],l=p.getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(l===r||l===a))return t()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){p=s[i],l=p.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],d.parentNode.removeChild(d),n(u)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var p,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var s=new Error;p=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var d=setTimeout((function(){p({type:"timeout",target:l})}),12e4);l.onerror=l.onload=p,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="child/member/",c.oe=function(e){throw console.error(e),e};var p=window["webpackJsonp_member"]=window["webpackJsonp_member"]||[],l=p.push.bind(p);p.push=t,p=p.slice();for(var s=0;s<p.length;s++)t(p[s]);var d=l;return u.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("56d7")},"3c94":function(e,t,n){"use strict";n("f0bd")},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return x})),n.d(t,"mount",(function(){return k})),n.d(t,"unmount",(function(){return T}));var r=n("c7eb"),o=n("1da1"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("83f4"),n("2b0e")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"member-app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/profile"}},[e._v("Profile")]),e._v(" | "),n("router-link",{attrs:{to:"/product"}},[e._v("About nested product")]),e._v(" | "),n("router-link",{attrs:{to:"/shop"}},[e._v("About nested Shop")])],1),n("router-view")],1)},i=[],c={name:"MemberApp"},p=c,l=(n("3c94"),n("2877")),s=Object(l["a"])(p,u,i,!1,null,"54b9da94",null),d=s.exports,f=n("8c4f"),m=(n("d3b7"),n("3ca3"),n("ddb0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"aboutpage home"},[n("h1",{staticClass:"title"},[e._v("Sub App Vue Member")]),n("p",[e._v("containerState")]),n("pre",[e._v(e._s(e.getContainerState))]),n("button",{on:{click:e.handleAdd}},[e._v("count++")]),n("label",{attrs:{for:""}},[e._v(" name: "),e.getContainerState?n("input",{attrs:{type:"text"},domProps:{value:e.getContainerState.name},on:{input:e.handleChangeGlobalStateName}}):e._e()])])}),h=[],b=n("5530"),v=n("2f62"),_={name:"Home",computed:Object(b["a"])({},Object(v["b"])(["getContainerState"])),methods:{handleAdd:function(){var e,t=null===(e=this.getContainerState)||void 0===e?void 0:e.count;this.$store.setGlobalState({count:t+1})},handleChangeGlobalStateName:function(e){this.$store.setGlobalState({name:e.target.value})}}},g=_,y=Object(l["a"])(g,m,h,!1,null,null,null),w=y.exports;a["a"].use(f["a"]);var S=[{path:"/",name:"Home",component:w},{path:"/profile",name:"Profile",component:function(){return n.e("profile").then(n.bind(null,"c66d"))}},{path:"/product",name:"Product",component:function(){return Promise.all([n.e("product~shop"),n.e("product")]).then(n.bind(null,"d2f1"))}},{path:"/shop",name:"Shop",component:function(){return Promise.all([n.e("product~shop"),n.e("shop")]).then(n.bind(null,"0fa5"))}}],O=S;a["a"].use(v["a"]);var j=new v["a"].Store({state:{containerState:{}},mutations:{setContainerState:function(e,t){console.log("setContainerState",t),e.containerState=t}},getters:{getContainerState:function(e){return e.containerState}}});a["a"].config.productionTip=!1;var C=null,P=null;function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.container,n=e.setGlobalState;C=new f["a"]({base:window.__POWERED_BY_QIANKUN__?"/member/":"/child/member/",mode:"history",routes:O}),n&&(j.setGlobalState=n),P=new a["a"]({router:C,store:j,render:function(e){return e(d)}}).$mount(t?t.querySelector("#member-app"):"#member-app")}function x(){return A.apply(this,arguments)}function A(){return A=Object(o["a"])(Object(r["a"])().mark((function e(){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("[vue] vue member app bootstraped");case 1:case"end":return e.stop()}}),e)}))),A.apply(this,arguments)}function k(e){return N.apply(this,arguments)}function N(){return N=Object(o["a"])(Object(r["a"])().mark((function e(t){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("[vue] vue member app mount"),t.onGlobalStateChange((function(e,t){j.commit("setContainerState",e)}),!0),E(t);case 3:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}function T(){return B.apply(this,arguments)}function B(){return B=Object(o["a"])(Object(r["a"])().mark((function e(){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:P.$destroy(),P.$el.innerHTML="",P=null,C=null;case 4:case"end":return e.stop()}}),e)}))),B.apply(this,arguments)}window.__POWERED_BY_QIANKUN__||E()},"83f4":function(e,t,n){window.__POWERED_BY_QIANKUN__&&(n.p=window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__)},f0bd:function(e,t,n){}})}));
//# sourceMappingURL=app.b8603176.js.map