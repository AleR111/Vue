<template>
  <!--  <div>-->
  <!--    <form action="#" class="form">-->
  <!--      <input class="input" type="text" placeholder="Payment description" list="category_list" v-model="category">-->
  <!--      <datalist id="category_list">-->
  <!--        <option v-for="(elem, idx) in categoryList" :key="idx" :value="elem" :label="elem"></option>-->
  <!--      </datalist>-->
  <!--      <input class="input" type="number" placeholder="Payment amount" v-model="value">-->
  <!--      <input class="input" type="date" placeholder="Payment date" v-model="date">-->
  <!--      <button class="btn-form" type="button" @click="addPayment"><span class="text-span">ADD</span> <span class="plus">+</span></button>-->
  <!--    </form>-->
  <!--  </div>-->

  <v-card-actions class="d-flex flex-column align-end">

    <v-card class="mb-2" flat
    >
      <v-row>
        <v-col cols="4">
          <v-combobox
              v-model="category"
              :items="categoryList"
              label="Payment description"
          ></v-combobox>
        </v-col>
        <v-col cols="4">
          <v-text-field
              label="Payment amount"
              v-model.number="value"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
              label="Payment date"
              value=""
              type="date"
              v-model="date"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card>

    <v-card flat
    >
      <v-btn color="teal lighten-1"
             @click="addPayment"
             dark
      >
        ADD
        <v-icon small>mdi-plus</v-icon>
      </v-btn>
    </v-card>

  </v-card-actions>

</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: "AddForm",
  props: ['categoryList'],
  data() {
    return {
      category: this.$route.params.category,
      value: this.$route.params.value,
      date: null
    }
  },
  methods: {
    ...mapMutations([
      'setNewCategory',
    ]),
    formatDate(date) {
      let day = date.getDate();
      if (day < 10) day = "0" + day
      let month = date.getMonth() + 1;
      if (month < 10) month = "0" + month
      const year = date.getFullYear();

      return `${day}.${month}.${year}`
    },
    currentDate() {
      const date = new Date();
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
      this.addNewCategory()
    },
    addNewCategory() {
      this.setNewCategory(this.category)
    }
  }
}
</script>

<style lang="scss" scoped>
$widthForm: 300px;

.form {

  display: grid;
  margin-bottom: 16px;
  background-color: #fff;
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