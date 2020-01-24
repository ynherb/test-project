import Vue from 'vue'
import Vuex from 'vuex'
import user from './user.js'
import news from './news.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    news
  }
})
