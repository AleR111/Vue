<template>
  <div>
    <form action="#" class="form">
      <input class="input" type="text" placeholder="Payment description" v-model="category">
      <input class="input" type="number" placeholder="Payment amount" v-model="value">
      <input class="input" type="date" placeholder="Payment date" v-model="date">
      <button class="btn-form" type="button" @click="addPayment"><span class="text-span">ADD</span> <span class="plus">+</span></button>
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

<style lang="scss" scoped>
$widthForm: 300px;

.form {
  width: $widthForm;
  display: grid;
  margin-bottom: 16px;
}
.input {
  font-size: 14px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 4px;
  border: none;
  border-top: 2px solid rgba(192, 192, 192, 0.78);
  border-bottom: 2px solid rgba(192, 192, 192, 0.78);
}
.btn-form {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  width: $widthForm / 2;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.85);
  background-color: #3e99a1;
  border: none;
  padding: 8px 16px;
  margin-top: 8px;
  justify-self: flex-end;
}
.btn-form:hover {
  cursor: pointer;
}
.plus {
  font-size: 20px;
  grid-column: 3;
  justify-self: flex-end;
}
.text-span {
  align-self: center;
  grid-column: 2;
}
</style>