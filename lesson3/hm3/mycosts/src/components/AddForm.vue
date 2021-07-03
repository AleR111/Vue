<template>
  <div>
    <form action="#">
      <input type="text" placeholder="Payment description" v-model="category">
      <input type="number" placeholder="Payment amount" v-model="value">
      <input type="date" placeholder="Payment date" v-model="date">
      <button @click="addPayment">ADD <span class="plus">+</span></button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddForm",
  data() {
    return {
      category: null,
      value: null,
      date: null
    }
  },
  methods: {
    addPayment() {
      
    }
  }
}
</script>

<style scoped>

</style>