<!--<template>-->
<!--  <div id="app" @click="hideModalWindow">-->
<!--    <header class="header">My personal coasts</header>-->
<!--    <button class="btn-show" @click="showAddForm = !showAddForm"><span class="text-span">ADD NEW COST</span> <span-->
<!--        class="plus">+</span></button>-->
<!--    <AddForm v-if="showAddForm" @addData="addData" :categoryList="categoryList"/>-->
<!--    <div class="cost-list">-->
<!--      <a href="#" @click="setPayment('addForm', 'Entertainment', 2000)">Entertainment=2000</a> /-->
<!--      <a href="#" @click="setPayment('addForm', 'Transport', 50)">Transport=50</a> /-->
<!--      <a href="#" @click="setPayment('addForm', 'Food')">Food=200</a>-->
<!--    </div>-->
<!--    <CostsList :costsList="displayCostsList"/>-->
<!--    <Pagination :amountPages="amountPages" @showPage="showPage"/>-->
<!--    <transition name="fade">-->
<!--&lt;!&ndash;      <ModalWindow v-if="showModal" :settings="settings"/>&ndash;&gt;-->
<!--    </transition>-->
<!--  </div>-->
<!--</template>-->

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
      <CostsList :costsList="displayCostsList"/>
      <Pagination :amountPages="amountPages" @showPage="showPage"/>
    </v-col>
    <v-col>

    </v-col>
  </v-row>
</template>

<script>
import CostsList from "../components/CostsList";
import AddForm from '../components/AddForm';
import Pagination from '../components/Pagination'

import {mapMutations, mapGetters, mapActions} from 'vuex'

export default {
  name: "Home",
  components: {
    CostsList,
    AddForm,
    Pagination,
    // ModalWindow: () => import ('./components/ModalWindow'),
  },
  data() {
    return {
      page: 'page1',
      showAddForm: false,
      showModal: false,
      settings: {},
      //
      dialog: false
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
    onShow(param) {
      this.showModal = true
      this.settings = param.settings
      this.settings.page = this.page
    },
    onHide() {
      this.showModal = false
      this.settings = {}
    },
    hideModalWindow(e) {
      if (!e.target.closest('#modal-window') && e.target.classList.value !== 'additional-btn') {
        console.log(1111)
        this.$modal.hide()
      }
    }
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
  },
  mounted() {
    this.$modal.EventBus.$on('show', this.onShow)
    this.$modal.EventBus.$on('hide', this.onHide)
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>