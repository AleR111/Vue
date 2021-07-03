<template>
  <div id="app">
    <button @click="showAddForm = !showAddForm">ADD NEW COST <span>+</span></button>
    <AddForm v-show="showAddForm" @addData="addData"/>
    <CostsList :costsList="costsList"/>
  </div>
</template>

<script>

// import style from './css/style.scss';
import CostsList from "./components/CostsList";
import AddForm from './components/AddForm';

export default {
  name: 'App',
  components: {
    CostsList,
    AddForm
  },
  data() {
    return {
      costsList: [],
      showAddForm: false,
      // qwe: style
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
      this.costsList = [...this.costsList, data]
    }
  },
  created() {
    this.costsList = this.fetchData()
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
