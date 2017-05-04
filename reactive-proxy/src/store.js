import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {fetch} from './actions'

const store = new Vuex.Store({
  state: {
  },
  actions: {fetch},
  mutations: {
    create (state, name) {
      if (!state[name]) {
        Vue.set(state, name, {})
      }
    },
    set (state, {name, property, value}) {
      Vue.set(state[name], property, value)
    }
  }
})

export default store
