<template>
  <v-card-actions class="d-flex flex-column align-end">

    <v-card flat
    >
      <v-row>
        <v-col cols="4">
          <v-text-field
              label="Payment description"
              list="category_list"
              :value="settings.category"
              @input="setCategory"
          ></v-text-field>
          <datalist id="category_list">
            <option v-for="(elem, idx) in categoryList" :key="idx" :value="elem" :label="elem"></option>
          </datalist>
        </v-col>
        <v-col cols="4">
          <v-text-field
              label="Payment amount"
              :value="settings.value"
              @input="setValue"
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
              label="Payment date"
              :value="settings.date"
              @input="setDate"
              type="text"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card>

    <v-card flat
    >
      <v-btn color="teal lighten-1"
             dark
             @click="saveChanges"
      >
        Save
      </v-btn>
    </v-card>

  </v-card-actions>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "ChangePayment",
  props: {
    settings: {
      type: Object
    }
  },
  date() {
    return {
      category: null,
      value: null,
      date: null
    }
  },
  methods: {
    ...mapMutations([
      'updateCostData'
    ]),
    setCategory(data) {
      this.category = data
    },
    setValue(data) {
      this.value = +data
    },
    setDate(data) {
      this.date = data
    },
    saveChanges() {
      const data = {
        page: this.settings.page,
        id: this.settings.id,
        date: this.date || this.settings.date,
        category: this.category || this.settings.category,
        value: this.value || this.settings.value
      }
      console.log( data)
      this.updateCostData(data)
      this.$emit('closeModal')
    }
  },
  computed: {
    ...mapGetters([
      'getCategoryList'
    ]),

    categoryList() {
      return this.getCategoryList
    },
  },
}
</script>

<style scoped>

</style>