import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        url: 'https://raw.githubusercontent.com/AleR111/Vue/hm4/fetch_data',
        urlCategory: 'https://raw.githubusercontent.com/AleR111/Vue/hm4/fetch_data/categoryList.json',
        urlAmountPages: 'https://raw.githubusercontent.com/AleR111/Vue/hm4/fetch_data/amountPages.json',
        costsList: {},
        costsListTemporary: [],
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
            state.costsList.page1.unshift(payload)
        },
        updateOrderCostList(state) {// изменяет порядок покупок ставя последнюю покупку на первую позицию списка
            for (const el in state.costsList) {
                state.costsListTemporary.push(...state.costsList[el])
            }
            state.costsList = {}

            state.costsListTemporary.forEach((elem, idx) => {
                const obj = {
                    id: idx + 1,
                    category: elem.category,
                    date: elem.date,
                    value: elem.value,
                }

                const pageNum = Math.ceil((idx + 1) / 3)

                if (!state.costsList[`page${pageNum}`]) {
                    state.costsList[`page${pageNum}`] = [obj]
                } else state.costsList[`page${pageNum}`].push(obj)
            })

            if (!state.amountPagesNew) state.amountPagesNew = state.amountPages.amount
            state.amountPages.amount = state.amountPagesNew + Math.ceil((state.costsListTemporary.length) / 3) - 1

            state.costsListTemporary = []
        },
        setCategoryList(state, payload) {
            state.categoryList = payload
        },
        setNewCategory(state, payload) {
            if (!state.categoryList.find(elem => elem === payload)) state.categoryList.unshift(payload)
        },
        deleteCostData(store, payload) {
            for (const el in store.costsList) {
                const index = store.costsList[el].findIndex(elem => elem.id === payload)
                if (index !== -1) store.costsList[el].splice(index, 1)
            }
        },
        updateCostData(state, payload) {
            let cost = state.costsList[payload.page].find(elem => elem.id === payload.id)
            cost.value = payload.value
            cost.category = payload.category
            cost.date = payload.date
        }
    },
    getters: {
        getCostsListPage: state => (page) => {
            if (state.costsList[page]) return state.costsList[page];
        },
        getAmountPages: state => {
            return state.amountPages.amount
        },
        getCategoryList: state => state.categoryList,
        getCostDataId: state => (page, id) => state.costsList[page].find(elem => elem.id === id),
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
        },
        addDataServer({commit}, costData) { //имитация работы с сервером
            new Promise(resolve => {
                setTimeout(() => resolve(1), 100)
            })
                .then(data => {
                if (data === 1) commit('setNewData', costData)
            })
                .then(() => commit('updateOrderCostList'))

        },
        deleteCostData({commit}, data) {
            commit('deleteCostData', data);
            commit('updateOrderCostList');
        }
    }
})
