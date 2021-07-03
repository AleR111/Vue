<template>
  <div>
    <form action="#">
      <input type="text" placeholder="Payment description" v-model="category">
      <input type="number" placeholder="Payment amount" v-model="value">
      <input type="date" placeholder="Payment date" v-model="date">
      <button type="button" @click="addPayment">ADD <span class="plus">+</span></button>
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
    formatDate(date) {
      let day = date.getDate();
      if(day < 10) day = "0" + day
      let month = date.getMonth() + 1;
      if(month < 10) month = "0" + month
      const year = date.getFullYear();

      return `${day}.${month}.${year}`
    },
    currentDate(){
      const date =  new Date();
      return this.formatDate(date)
    },
    addPayment() {
      const {category, value, date} = this;
      const data = {
        date: date ? this.formatDate(new Date(date)) : this.currentDate(),
        category,
        value
      }
      console.log(data);
      this.$emit('addData', data)
    }
  }
}
</script>

<style scoped>

</style>