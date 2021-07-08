import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        url: 'https://raw.githubusercontent.com/AleR111/Vue/hm4/fetch_data',
        urlCategory: 'https://raw.githubusercontent.com/AleR111/Vue/hm4/fetch_data/categoryList.json',
        urlAmountPages: 'https://raw.githubusercontent.com/AleR111/Vue/hm4/fetch_data/amountPages.json',
        costsList: {},
        costsList2: [],
        categoryList: [],
        amountPages: {},
        amountPagesNew: null,
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

            payload.id = 1
            state.costsList.page1.unshift(payload)

            for(const el in state.costsList) {
                state.costsList2.push(...state.costsList[el])
            }
            state.costsList = {}

            state.costsList2.forEach((elem, idx) => {
                const obj = {}
                obj.id = idx + 1
                obj.category = elem.category
                obj.date = elem.date
                obj.value = elem.value

                const pageNum = Math.ceil((idx + 1) / 3)

                if (!state.costsList[`page${pageNum}`]) {
                    state.costsList[`page${pageNum}`] = [obj]
                } else state.costsList[`page${pageNum}`].push(obj)
            })
            console.log(Math.ceil((state.costsList2.length) / 3))
            if (!state.amountPagesNew) state.amountPagesNew = state.amountPages.amount
            state.amountPages.amount = state.amountPagesNew + Math.ceil((state.costsList2.length) / 3) - 1
            console.log(state.amountPages)
            state.costsList2 = []
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