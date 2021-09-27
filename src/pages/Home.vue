<template>
  <v-row class="flex-column flex-md-row">
    <v-col cols="12" md="6">
      <header class="text-h5 text-md-3 pb-8">My personal costs</header>
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
      <Pagination :amountPages="amountPages" @showPage="showPage" :page="numberPage"/>
    </v-col>
    <v-col cols="12" md="6">
      <div>
        <Doughnut :categoryList="categoryList"/>
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
      numberPage: 1,
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
      this.numberPage = num
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
  },
  computed: {
    ...mapGetters([
      'getCostsListPage',
      'getAmountPages',
      'getCategoryList'
    ]),
    displayCostsList() {
      return this.getCostsListPage(this.page)
    },
    amountPages() {
      return this.getAmountPages
    },
    categoryList() {
      return this.getCategoryList
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