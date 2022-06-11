import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    containerState: null
  },
  mutations: {
    setContainerState(state, payload) {
      state.containerState = payload;
    }
  },
  getters: {
    getContainerState(state) {
      return state.containerState;
    }
  }
});
