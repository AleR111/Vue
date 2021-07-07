import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        url: 'https://raw.githubusercontent.com/AleR111/Vue/hm4/fetch_data',
        urlCategory: 'https://raw.githubusercontent.com/AleR111/Vue/hm4/fetch_data/categoryList.json',
        urlAmountPages: 'https://raw.githubusercontent.com/AleR111/Vue/hm4/fetch_data/amountPages.json',
        costsList: {},
        categoryList: [],
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
        },
        setNewData(state, payload) {
            console.log(payload)
            console.log(state.costsList)
            payload.id = 1
            state.costsList.page1.unshift(payload)
            // if (state.costsList.page1.length > 2) state.costsList.page2 = state.costsList.page1.pop()
        },
        setCategoryList(state, payload) {
            state.categoryList = payload
        }
    },
    getters: {
        getCostsListPage: state => (page) => {
            if (state.costsList[page]) return state.costsList[page];
        },
        getAmountPages: state => {
            return state.amountPages.amount
        },
        getCategoryList: state => state.categoryList
    },
    actions: {
        fetchCostsList({commit, state}, page) {
            if (state.costsList[page]) return
            fetch(`${state.url}/${page}.json`)
                .then(resolve => resolve.json())
                .then(data => commit('setCostsList', data))
        },
        fetchAmountPages({commit, state}) {
            fetch(state.urlAmountPages)
                .then(resolve => resolve.json())
                .then(data => commit('setAmountPages', data))
        },
        fetchCategoryList({commit, state}) {
            fetch(state.urlCategory)
                .then(resolve => resolve.json())
                .then(data => commit('setCategoryList', data))
        }
    }
})