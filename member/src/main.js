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
    base: window.__POWERED_BY_QIANKUN__ ? "/member/" : "/",
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
  }).$mount(container ? container.querySelector("#member-app") : "#member-app");
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] vue member app bootstraped");
}
export async function mount(props) {
  console.log("[vue] vue member app mount");
  props.onGlobalStateChange((state, prev) => {
    store.commit("setContainerState", state);
  }, true);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
