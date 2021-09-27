import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const amountCostsOnPage = 10

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

                const pageNum = Math.ceil((idx + 1) / amountCostsOnPage)

                if (!state.costsList[`page${pageNum}`]) {
                    state.costsList[`page${pageNum}`] = [obj]
                } else state.costsList[`page${pageNum}`].push(obj)
            })

            if (!state.amountPagesNew) state.amountPagesNew = state.amountPages.amount
            state.amountPages.amount = state.amountPagesNew + Math.ceil((state.costsListTemporary.length) / amountCostsOnPage) - 1

            state.costsListTemporary = []
        },
        setCategoryList(state, payload) {
            state.categoryList = payload
        },
        setNewCategory(state, payload) {
            if (!state.categoryList.find(elem => elem.value === payload)) {
                const randomColor = () => Math.floor(Math.random() * 256)
                const newCategory = {
                    value: payload,
                    backColor: `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 0.2)`
                }
                state.categoryList.unshift(newCategory)
                console.log(state.categoryList)
            }
        },
        deleteCostData(store, payload) {
            for (const el in store.costsList) {
                const index = store.costsList[el].findIndex(elem => elem.id === payload)
                if (index !== -1) store.costsList[el].splice(index, 1)
            }
        },
        updateCostData(state, payload) {
            state.costsList = {
                ...state.costsList, [payload.page]: state.costsList[payload.page].map(el => {
                    if (el.id !== payload.id) return el
                    return {
                        id: el.id,
                        value: payload.value,
                        category: payload.category,
                        date: payload.date
                    }
                })
            }
            console.log(state)
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
        getCostsList: state => {
            let data = []
            for (const el in state.costsList) {
                data.push(...state.costsList[el])

            }

            return data
        }
    },
    actions: {
        fetchCostsList({commit, state}, page) {
            if (state.costsList[page]) return
            fetch(`${state.url}/${page}.json`)
                .then(resolve => resolve.json())
                .then(data => commit('setCostsList', data))
        },
        fetchAmountPages({commit, state}) {
            if (state.amountPages.amount) return
            fetch(state.urlAmountPages)
                .then(resolve => resolve.json())
                .then(data => commit('setAmountPages', data))
        },
        fetchCategoryList({commit, state}) {
            if (state.categoryList.length) return
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
