<template>
  <v-list>
    <v-list-item>
      <v-menu
          bottom
          left
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              icon
              v-bind="attrs"
              v-on="on"
          >
            Edit
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>qwe</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-list-item>
    <v-list-item>
      <v-btn @click="deleteCost(idPayment)">Delete</v-btn>
    </v-list-item>
  </v-list>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "EditPayment",
  props: ['idPayment'],
  methods: {
    ...mapActions([
      'deleteCostData',
    ]),
    deleteCost(id) {
      this.deleteCostData(id)
      console.log(id)
    }
  }
}
</script>

<style scoped>

</style>