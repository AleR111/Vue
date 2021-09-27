<template>
  <div>
    <v-menu
        bottom
        left
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="additional-btn"
               v-bind="attrs"
               v-on="on"
               icon
               x-small
               plain
               :ripple="false"
        >&#8942;
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
        <ChangePayment :settings="settings" @closeModal="dialog=false"/>
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

<style scoped lang="scss">
$btnColor: #26A69A;
.additional-btn {
  font-size: 20px;
  font-weight: 700;
}

.additional-btn:hover {
  color: $btnColor;
}
</style>