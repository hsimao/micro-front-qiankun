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
    entry: "//localhost:3001",
    container: "#container",
    activeRule: "/member"
  },
  {
    name: "reactProductApp",
    entry: "//localhost:3002",
    container: "#container",
    activeRule: "/product"
  },
  {
    name: "vueShopApp",
    entry: "//localhost:3003",
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
