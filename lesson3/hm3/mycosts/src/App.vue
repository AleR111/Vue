<template>
  <div id="app">
    <header class="header">My personal coasts</header>
    <button class="btn-show" @click="showAddForm = !showAddForm"><span class="text-span">ADD NEW COST</span> <span class="plus">+</span></button>
    <AddForm v-show="showAddForm" @addData="addData"/>
    <CostsList :costsList="costsList"/>
    <Pagination :amountPages="amountPages"/>
  </div>
</template>

<script>

import CostsList from "./components/CostsList";
import AddForm from './components/AddForm';
import Pagination from './components/Pagination'

export default {
  name: 'App',
  components: {
    CostsList,
    AddForm,
    Pagination
  },
  data() {
    return {
      costsList: [],
      showAddForm: false,
      amountRows: 5,
      amountPages: null
    }
  },
  methods: {
    fetchData() {
      return [
        {
          date: "21.06.2021",
          category: "Food",
          value: 580
        },
        {
          date: "22.06.2021",
          category: "Internet",
          value: 400
        },
        {
          date: "25.06.2021",
          category: "Food",
          value: 300
        },
        {
          date: "27.06.2021",
          category: "Food",
          value: 450
        },
      ]
    },
    addData(data) {
      this.costsList = [...this.costsList, data];
      this.setAmountPages()
    },
    setAmountPages() {
      this.amountPages = this.amountPages = Math.ceil(this.costsList.length / this.amountRows)
    }
  },
  created() {
    this.costsList = this.fetchData();
    this.setAmountPages()
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
