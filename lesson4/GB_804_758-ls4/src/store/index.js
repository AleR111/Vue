import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paymentsList: [],
        category: []
    },
    mutations: {
        setPaymentsListData(state, payload) {
            state.paymentsList = payload
        },
        addDataToPaymentList(state, payload) {
            state.paymentsList.push(payload)
        },
        addCategory(state, paylod) {
            state.category = paylod
        }
        // editPaymentList(state, payload){
        //     Vue.set(state.paymentsList, 0, payload)
        // }
    },
    getters:{
        getPaymentList: state => state.paymentsList,
        getFullPaymentValue: state => {
            return state.paymentsList.reduce((res, cur)=> res + cur.value, 0)
        },
        getCategoryFull: state => {
            return state.paymentsList.map(i=> i.category)
        },
        getCategoryList: state => {
            return state.category
        }
    },
    // commit - вызов мутации
    // dispatch - вызов actions
    //
    actions: {
        someAction({commit}, res){
            commit('setPaymentsListData', res)
        },
        fetchCategoryList({commit}){
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve (['Food','Transport', 'Education', 'Internet', 'GB', 'Life', 'Sport'])
                }, 1000)
            })
            .then(res => commit('addCategory', res))
        },
        fetchData({dispatch}){
            return new Promise((resolve)=> { 
                setTimeout(()=>{
                    const items = []
                    for (let i = 1; i< 110; i++) {
                        items.push({
                            date: '01.07.2021',
                            category: "Food",
                            value: i
                        })
                    }
                  resolve(items)
                }, 2000)
            })
            .then (res=> dispatch('someAction', res))
        }
    }
})