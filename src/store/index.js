
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: '',
    userInfo: {
      name: '系统管理员'
    },
    platName: ''
  },
  getters: {
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    setUserName(state, userName) {
      state.userName = userName;
    },
    setPlatName(state, platName) {
      state.platName = platName;
    }
  },
  actions: {
  },
  modules: {
  }
})
