const state = {
  userName: '',
  token:'ceshi'
}
const mutations = {
  SET_USER_NAME(state, name) {
    state.userName = name
  },
  SET_TOKEN(state, token) {
    state.token = token
  }
}
const actions = {
  setUserName({commit}, name) {
    commit('SET_USER_NAME', name)
  },
  setToken({commit}, token) {
    commit('SET_TOKEN', token)
  },
  logOut({commit}) {
    console.log("登出操作")
  }
}
export default {
  state,
  mutations,
  actions
}
