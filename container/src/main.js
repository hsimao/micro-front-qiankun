import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { registerMicroApps, start } from "qiankun";

// 由於本身有window.__POWERED_BY_QIANKUN__參數，sub應用無法判斷自己在第幾層
// 設置一個全局參數，讓sub應用檢測到該參數則說明自己作為孫子應用運行
window.__POWERED_BY_QIANKUN_PARENT__ = true;

registerMicroApps([
  {
    name: "vueAboutApp",
    entry: "//localhost:3001",
    container: "#container",
    activeRule: "/about"
  },
  {
    name: "reactProductApp",
    entry: "//localhost:3002",
    container: "#container",
    activeRule: "/product"
  }
]);
start({
  sandbox: true,
  prefetch: false
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
