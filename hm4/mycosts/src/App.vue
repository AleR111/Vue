<template>
  <div id="app">
    <header class="header">My personal coasts</header>
    <button class="btn-show" @click="showAddForm = !showAddForm"><span class="text-span">ADD NEW COST</span> <span
        class="plus">+</span></button>
    <AddForm v-show="showAddForm" @addData="addData"/>
    <CostsList :costsList="displayCostsList"/>
    <Pagination :amountPages="getAmountPages1" @showPage="showPage"/>
  </div>
</template>

<script>

import CostsList from "./components/CostsList";
import AddForm from './components/AddForm';
import Pagination from './components/Pagination'
import {mapMutations, mapGetters, mapActions} from 'vuex'

export default {
  name: 'App',
  components: {
    CostsList,
    AddForm,
    Pagination
  },
  data() {
    return {
      urlCostsList: 'https://raw.githubusercontent.com/AleR111/Vue/hm4/fetch_data',
      urlAmountPages: 'https://raw.githubusercontent.com/AleR111/Vue/hm4/fetch_data/amountPages.json',
      page: 'page1',
      showAddForm: false,
    }
  },
  methods: {
    ...mapMutations([
      '',
    ]),
    ...mapActions([
      'fetchCostsList',
      'fetchAmountPages'
    ]),
    addData(data) {
      this.costsList = [data, ...this.costsList];
      this.showPage(1)
    },
    showPage(num) {
      this.fetchCostsList(`page${num}`)
      this.page = `page${num}`
    }
  },
  computed: {
    ...mapGetters([
      'getCostsListPage',
      'getAmountPages'
    ]),
    displayCostsList() {
      return this.getCostsListPage(this.page)
    },
    getAmountPages1() {
      console.log(this.getAmountPages)
      return this.getAmountPages
    }
  },
  created() {
    this.fetchCostsList(`page1`)
    this.fetchAmountPages(this.urlAmountPages)
  }
}
</script>

<style lang="scss" scoped>
.header {
  font-size: 32px;
  text-align: left;
  margin-bottom: 24px;
}

#app {
  max-width: 1140px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //margin-top: 60px;
}

.btn-show {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.85);
  background-color: #3e99a1;
  display: flex;
  align-items: center;
  border: none;
  padding: 8px 16px;
  margin-bottom: 16px;
}

.btn-show:hover {
  cursor: pointer;
}

.plus {
  font-size: 20px;
  padding-left: 16px;
}
</style>
