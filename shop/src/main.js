import "./public-path";
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import routes from "./router";
import store from "./store";

Vue.config.productionTip = false;

let router = null;
let instance = null;

function render(props = {}) {
  const { container, setGlobalState } = props;

  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN_PARENT__
      ? "/child/member/shop/"
      : "/child/shop/",
    mode: "history",
    routes
  });

  if (setGlobalState) {
    store.setGlobalState = setGlobalState;
  }

  instance = new Vue({
    router,
    store,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector("#shop-app") : "#shop-app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] vue shop bootstraped");
}
export async function mount(props) {
  render(props);
}
export async function unmount() {
  console.log("shop unmount");

  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
