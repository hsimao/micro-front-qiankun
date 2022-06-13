import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerMicroApps, start } from "qiankun";

// 由於本身有window.__POWERED_BY_QIANKUN__參數，sub應用無法判斷自己在第幾層
// 設置一個全局參數，讓sub應用檢測到該參數則說明自己作為孫子應用運行
window.__POWERED_BY_QIANKUN_PARENT__ = true;

registerMicroApps([
  {
    name: "vueMemberApp",
    entry:
      process.env.NODE_ENV === "production"
        ? "/child/member/" // github page 用 ./
        : "//localhost:3001/child/member/",
    container: "#container",
    activeRule: "/member"
  },
  {
    name: "reactProductApp",
    entry:
      process.env.NODE_ENV === "production"
        ? "/child/product/"
        : "//localhost:3002/child/product/",
    container: "#container",
    activeRule: "/product"
  },
  {
    name: "vueShopApp",
    entry:
      process.env.NODE_ENV === "production"
        ? "/child/shop/"
        : "//localhost:3003/child/shop/",
    container: "#container",
    activeRule: "/shop"
  }
]);
start({
  prefetch: "all"
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
