<template>
  <div class="payment-form">
      <input placeholder="Amout" type="number" v-model.number="value" />
      <input placeholder="Category" type="text" v-model.trim="category" />
      <input placeholder="Date" type="text" v-model.trim="date" />
      <button @click="onClick"> Save </button>
  </div>
</template>

<script>
export default {
    name: "AddPaymentForm",
    data(){
        return {
            value: 0,
            category: '',
            date: ''
        }
    },
    methods:{
        getCurrentDate(){
            const today= new Date()
            const d = today.getDate()
            const m = today.getMonth() + 1
            const y = today.getFullYear()
            return `${d}.${m}.${y}`
        },
        onClick(){
            const {value, category} = this
            const data = {
                date: this.date || this.getCurrentDate(), 
                category,
                value
            }
            console.log(data)
            this.$emit('addNewPayment', data)
        }
    }
}
</script>

<style>

</style>