<template>
  <div>
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
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <v-btn @click="dialog=true">Edit</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn @click="deleteCost(settings.id)">Delete</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-dialog
        v-model="dialog"
        width="600"
    >
      <v-card>
        <ChangePayment :settings="settings"/>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "EditPayment",
  components: {
    ChangePayment: () => import('./ChangePayment')
  },
  props: {
    settings: {
      type: Object
    }
  },
  data() {
    return {
      dialog: false
    }
  },
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