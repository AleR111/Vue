import Vue from 'vue'
import Router from 'vue-router'

import AddForm from '../components/AddForm'

Vue.use(Router)

export default new Router({
    mode: "history",

    routes: [
        {
            path: '/addForm/:category',
            name: 'addForm',
            component: AddForm
        },
        {
            path: '/addForm/:category/:value',
            name: 'addForm',
            component: AddForm
        }
    ]
})
