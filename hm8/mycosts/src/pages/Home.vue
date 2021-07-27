<template>
  <v-row>
    <v-col cols="6">
      <header class="text-h5 text-md-3 pb-8">My personal coasts</header>
      <v-dialog
          v-model="dialog"
          width="600"
      >
        <template v-slot:activator="{ on }">
          <v-btn
              class="rounded-sm mb-5"
              color="teal lighten-1"
              dark
              v-on="on"
          >
            ADD NEW COST
          </v-btn>
        </template>

        <v-card>
          <AddForm @addData="addData" :categoryList="categoryList"/>
        </v-card>
      </v-dialog>
      <CostsList :page="page" :costsList="displayCostsList"/>
      <Pagination :amountPages="amountPages" @showPage="showPage"/>
    </v-col>
    <v-col cols="6">
      <div>
        <Doughnut :chart-data="dataCollection"/>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import CostsList from "../components/CostsList";
import AddForm from '../components/AddForm';
import Pagination from '../components/Pagination'

import {mapMutations, mapGetters, mapActions} from 'vuex'

import Doughnut from '../chart/Doughnut'

export default {
  name: "Home",
  components: {
    Doughnut,
    CostsList,
    AddForm,
    Pagination
  },
  data() {
    return {
      page: 'page1',
      showAddForm: false,
      settings: {},
      dialog: false,
    }
  },
  methods: {
    ...mapMutations([
      'setNewData',
    ]),
    ...mapActions([
      'fetchCostsList',
      'fetchAmountPages',
      'fetchCategoryList',
      'addDataServer'
    ]),
    addData(data) {
      this.addDataServer(data)
      this.showPage(1)
      this.dialog = false
    },
    showPage(num) {
      this.fetchCostsList(`page${num}`)
      this.page = `page${num}`
    },
    setPayment(page, category, value) {
      this.$router.push({
        name: page,
        params: {
          category: category,
          value: value
        }
      })
      this.showAddForm = true
    },
    setDataCollection(labels, data) {
      return {
        labels: labels,
        datasets: [{
          label: 'Coasts',
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(29,27,26,0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgb(12,8,3)'
          ],
          borderWidth: 1
        }]
      }
    }
  },
  computed: {
    ...mapGetters([
      'getCostsListPage',
      'getAmountPages',
      'getCategoryList',
      'getCostsList'
    ]),
    displayCostsList() {
      return this.getCostsListPage(this.page)
    },
    amountPages() {
      return this.getAmountPages
    },
    categoryList() {
      return this.getCategoryList
    },
    dataCollection() {

      let labels = []
      this.getCostsList.forEach(el => {
        if (!labels.includes(el.category)) labels.push(el.category)
      })

      const data = labels.map(el => {
        return this.getCostsList.reduce((total, e) => {
          if (el === e.category) total += e.value
          return total
        }, 0)
      })

      return this.setDataCollection(labels, data)

    }
  },
  created() {
    this.fetchCostsList(`page1`)
    this.fetchAmountPages()
    this.fetchCategoryList()
  }
}
</script>

<style lang="scss" scoped>

</style>