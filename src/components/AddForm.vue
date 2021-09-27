<template>
  <v-card-actions class="d-flex flex-column align-end">

    <v-card flat
    >
      <v-row>
        <v-col cols="4">
          <!--          <v-combobox-->
          <!--              v-model="category"-->
          <!--              :items="categoryList"-->
          <!--              label="Payment description"-->
          <!--          ></v-combobox>-->
          <v-text-field
              label="Payment description"
              list="category_list"
              v-model="category"
          ></v-text-field>
          <datalist id="category_list">
            <option v-for="(elem, idx) in categoryList" :key="idx" :value="elem.value" :label="elem.value"></option>
          </datalist>
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
    <div style="color: red">{{ error }}</div>

  </v-card-actions>

</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: "AddForm",
  props: ['categoryList'],
  data() {
    return {
      category: null,
      value: null,
      date: null,
      error: ''
    }
  },
  methods: {
    ...mapMutations([
      'setNewCategory',
    ]),
    reset() {
      this.category = null
      this.value = null
      this.date = null
      this.error = ''
    },
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
      if (!(category && +value)) {
        this.error = 'Please, input correct data'
        return
      }
      const data = {
        date: date ? this.formatDate(new Date(date)) : this.currentDate(),
        category,
        value
      }

      this.$emit('addData', data)
      this.setNewCategory(this.category)
      this.reset()

    }
  },
}
</script>

<style lang="scss" scoped>

</style>