import Vue from "vue";
import Vuex from "vuex";
import { initGlobalState } from "qiankun";

Vue.use(Vuex);

const initState = {
  count: 0,
  name: "mars"
};

const store = new Vuex.Store({
  state: {
    globalState: initState
  },
  mutations: {
    setGlobalState(state, payload) {
      state.globalState = payload;
    }
  },
  getters: {
    getGlobalState(state) {
      return state.globalState;
    }
  }
});

export default store;

export const globalActions = initGlobalState(initState);

globalActions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  // console.log(state, prev);
  store.commit("setGlobalState", state);
}, true);
