
const app = {
  state: {
    token: {
      name: '',
      xxx: 123
    }
  },
  mutations: {
    SET_USER_INFORMATIONS: (state, data) => {
      state.token = data
    }
  },
  actions: {
    setUser ({ commit }, token) {
      commit('SET_USER_INFORMATIONS', token)
    }
  }
}
export default app
