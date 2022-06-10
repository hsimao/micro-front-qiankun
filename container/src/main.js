import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { registerMicroApps, start } from "qiankun";

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
start();

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
