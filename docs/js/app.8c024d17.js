(function(e){function t(t){for(var n,l,u=t[0],c=t[1],i=t[2],s=0,p=[];s<u.length;s++)l=u[s],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);v&&v(t);while(p.length)p.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,l=1;l<r.length;l++){var c=r[l];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},a=[];function l(e){return u.p+"js/"+({contact:"contact"}[e]||e)+"."+{contact:"d4899b7a"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=l(e);var i=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,r[1](i)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var v=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("div",{staticClass:"nav__item"},[r("p",[e._v("主應用")]),e._v(" ： "),r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/contact"}},[e._v("Contact")])],1),r("div",{staticClass:"nav__item"},[r("p",[e._v("Member 子應用")]),e._v(" ： "),r("router-link",{attrs:{to:"/member"}},[e._v("Member")]),e._v(" | "),r("router-link",{attrs:{to:"/member/profile"}},[e._v("Profile")]),e._v(" | "),r("router-link",{attrs:{to:"/member/product"}},[e._v("嵌套子應用 Product")]),e._v(" | "),r("router-link",{attrs:{to:"/member/shop/"}},[e._v("嵌套子應用 Shop")])],1),r("div",{staticClass:"nav__item"},[r("router-link",{attrs:{to:"/product"}},[e._v("子應用 Product")]),e._v(" | "),r("router-link",{attrs:{to:"/shop"}},[e._v("子應用 Shop")]),e._v(" | ")],1)]),r("p",[e._v("globalState from container")]),r("pre",[e._v(e._s(e.getGlobalState))]),r("button",{on:{click:e.handleAdd}},[e._v("count++")]),r("br"),r("label",{attrs:{for:""}},[e._v(" name: "),r("input",{attrs:{type:"text"},domProps:{value:e.getGlobalState.name},on:{input:e.handleChangeName}})]),r("div",{attrs:{id:"container"}}),r("keep-alive",[r("router-view")],1)],1)},a=[],l=r("5530"),u=r("2f62"),c=r("e223");n["a"].use(u["a"]);var i={count:0,name:"mars"},s=new u["a"].Store({state:{globalState:i},mutations:{setGlobalState:function(e,t){e.globalState=t}},getters:{getGlobalState:function(e){return e.globalState}}}),v=s,p=Object(c["b"])(i);p.onGlobalStateChange((function(e,t){s.commit("setGlobalState",e)}),!0);var f={name:"App",props:{msg:String},computed:Object(l["a"])({},Object(u["b"])(["getGlobalState"])),methods:{handleAdd:function(){var e=this.getGlobalState.count;p.setGlobalState({count:e+1})},handleChangeName:function(e){p.setGlobalState({name:e.target.value})}}},h=f,m=(r("c928"),r("2877")),_=Object(m["a"])(h,o,a,!1,null,"11186951",null),d=_.exports,b=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",[e._v("Root App Home")])])}],k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},y=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],w={name:"HelloWorld",props:{msg:String}},S=w,O=(r("8f11"),Object(m["a"])(S,k,y,!1,null,"ebbc34ee",null)),P=O.exports,C={name:"Home",components:{HelloWorld:P}},E=C,x=Object(m["a"])(E,g,j,!1,null,null,null),A=x.exports;n["a"].use(b["a"]);var G=[{path:"/",name:"Home",component:A},{path:"/contact",name:"Contact",component:function(){return r.e("contact").then(r.bind(null,"b8fa"))}}],$=new b["a"]({mode:"history",base:"/",routes:G}),M=$,T=r("34ac9");window.__POWERED_BY_QIANKUN_PARENT__=!0,Object(T["b"])([{name:"vueMemberApp",entry:"/child/member/",container:"#container",activeRule:"/member"},{name:"reactProductApp",entry:"/child/product/",container:"#container",activeRule:"/product"},{name:"vueShopApp",entry:"/child/shop/",container:"#container",activeRule:"/shop"}]),Object(T["c"])({prefetch:"all"}),n["a"].config.productionTip=!1,new n["a"]({router:M,store:v,render:function(e){return e(d)}}).$mount("#app")},8305:function(e,t,r){},"8f11":function(e,t,r){"use strict";r("df05")},c928:function(e,t,r){"use strict";r("8305")},df05:function(e,t,r){}});
//# sourceMappingURL=app.8c024d17.js.map