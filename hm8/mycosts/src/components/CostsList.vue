<template>
  <v-container>
    <v-row class="font-weight-black">
      <v-col cols="1">#</v-col>
      <v-col cols="3">Date</v-col>
      <v-col cols="5">Category</v-col>
      <v-col cols="2">Value</v-col>
      <v-col cols="1"></v-col>
    </v-row>
    <v-row class="row" v-for="(elem, idx) in costsList"
           :key="idx">
      <v-col cols="1">{{ elem.id }}</v-col>
      <v-col cols="3">{{ elem.date }}</v-col>
      <v-col cols="5">{{ elem.category }}</v-col>
      <v-col cols="2">{{ elem.value }}</v-col>
      <v-col cols="1">

        <EditPayment :settings="{
                      id: elem.id,
                      page,
                      date: elem.date,
                      category: elem.category,
                      value: elem.value
                      }"
        />

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CostsList",
  components: {
    EditPayment: () => import("./EditPayment")
  },
  props: {
    page: {
      type: String
    },
    costsList: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    showAdditionalSettings(id, position) {
      this.$modal.show({
        componentName: 'EditCosts',
        costId: id,
        positionWindow: position
      })
    }
  }
}
</script>

<style scoped lang="scss">
$btnColor: #26A69A;

.row {
  border-bottom: 1px solid rgba(161, 161, 161, 0.45);
}

.additional-btn {
  font-size: 20px;
  font-weight: 700;
}

.additional-btn:hover {
  color: $btnColor;
}
</style>