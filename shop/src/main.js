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

  let base = "/child/shop/";

  if (props?.name) {
    if (props.name === "vueShopApp") {
      // NOTE: container 單獨引入的模式
      base = "/shop/";
    } else if (props.name === "vueShopApp-sub") {
      // NOTE: member 巢狀引入的模式
      base = "/member/shop/";
    }
  }

  router = new VueRouter({
    base,
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
