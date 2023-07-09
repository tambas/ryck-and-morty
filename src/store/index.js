import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    active: 4,
    lang: "fr",
  },
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem('store')) {
        this.replaceState(
            Object.assign(state, JSON.parse(localStorage.getItem('store')))
        );
      }
    },
    changeActive(state, id) {
      state.active = id
    },
    changeLang(state, lang) {
      state.lang = lang
    }
  },
  actions: {},
  modules: {}
})
