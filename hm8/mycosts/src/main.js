import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import modal from './plugins/ModalWindow'
import vuetify from './plugins/vuetify'
// import Chart from 'chart.js/auto';

Vue.config.productionTip = false
Vue.use(modal)

new Vue({
  render: h => h(App),
  store,
  vuetify,
  router,
  // Chart
}).$mount('#app')
