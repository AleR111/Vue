<template>
  <div id="app">
    <div :class="[$style.header]">
      <h1>My Personal Cost</h1>
    </div>
    <div class="wrapper">
      <AddPaymentForm @addNewPayment="addNewPaymentData"/>
      <br/>
      <PaymentsDisplay :items="paymentsList"/>
    </div>
  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddPaymentForm from './components/AddPaymentForm.vue'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm
  },
data(){
        return {
            paymentsList: []
        }
    },
    methods: {
        addNewPaymentData(value){
          this.paymentsList= [...this.paymentsList, value]
        },
        fetchData(){
            return [
                {
                    date: "12.03.2020",
                    category: "Food",
                    value: 180
                },
                {
                    date: "12.04.2020",
                    category: "Internet",
                    value: 100
                },
                {
                    date: "28.08.2019",
                    category: "Food",
                    value: 300
                },
                {
                    date: "11.03.2018",
                    category: "Sport",
                    value: 1400
                },
            ]
        }
    },
    created(){
        this.paymentsList = this.fetchData()
    }
}
</script>

<style lang="scss" scoped module>
.header{
  font-size: 20px;
}
</style>
