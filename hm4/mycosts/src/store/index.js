import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        url: 'https://raw.githubusercontent.com/AleR111/Vue/hm4/fetch_data',
        costsList: {},
        amountPages: {}
    },
    mutations: {
        setCostsList(state, payload) {
            // state.costsList = payload
            state.costsList = {...state.costsList, ...payload}
            console.log(state.costsList)
        },
        setAmountPages(state, payload) {
            state.amountPages = payload
        }
    },
    getters: {
        getCostsListPage: state => (page) => {
            if (state.costsList[page]) return state.costsList[page];
        },
        getAmountPages: state => {
          return state.amountPages.amount
        }
    },
    actions: {
        fetchCostsList({commit, state}, page) {
            if (state.costsList[page]) return
            fetch(`${state.url}/${page}.json`)
                .then(resolve => resolve.json())
                .then(data => commit('setCostsList', data))
        },
        fetchAmountPages({commit}, url) {
            fetch(url)
                .then(resolve => resolve.json())
                .then(data => commit('setAmountPages', data))
        },

    }
})