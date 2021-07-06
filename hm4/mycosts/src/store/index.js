import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        costsList: [],
    },
    mutations: {
        setCostsList(state, payload) {
            state.costsList = payload
        }
    },
    actions: {
      getCostsList({commit}, url) {
          fetch(url)
              .then(resolve => resolve.json())
              .then(data => commit('setCostsList', data))
        }
    }
})