import * as fb from 'firebase'

export default {
  namespaced: true,
  state: {
    userUid: false
  },
  getters: {
    userUid (state) { return state.userUid }
  },
  mutations: {
    userAuth (state, uid) { state.userUid = uid }
  },
  actions: {
    async FETCH_LOGIN_USER ({ commit }, { email, pass }) {
      try {
        await fb.auth().signInWithEmailAndPassword(email, pass)
      } catch (error) {
        throw error
      }
    },
    async FETCH_SIGN_OUT ({ commit }) {
      try {
        await fb.auth().signOut()
        commit('userAuth', false)
      } catch (error) {
        throw error
      }
    }
  }
}
