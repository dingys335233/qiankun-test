import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globalToken: ''
  },
  getters: {
  },
  mutations: {
    setGlobalToken(state, token) {
      state.globalToken = token;
    }
  },
  actions: {
  },
  modules: {
  }
})
