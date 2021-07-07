import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        url: 'https://raw.githubusercontent.com/AleR111/Vue/hm4/fetch_data/',
        costsList: {},
    },
    mutations: {
        setCostsList(state, payload) {
            // state.costsList = payload
            state.costsList = {...state.costsList, ...payload}
            console.log(state.costsList)
        }
    },
    getters: {
        getCostsListPage: state => (page) => {
            if (state.costsList[page]) return state.costsList[page];
        }
    },
    actions: {
        fetchCostsList({commit}, url) {
            fetch(url)
                .then(resolve => resolve.json())
                .then(data => commit('setCostsList', data))
        }
    }
})