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
                  <option v-for="(elem, idx) in categoryList" :key="idx" :value="elem" :label="elem"></option>
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
                   
                   dark
            >
              ADD
              <v-icon small>mdi-plus</v-icon>
            </v-btn>
          </v-card>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {mapActions} from "vuex";
// import AddForm from '../components/AddForm';


export default {
  name: "EditPayment",
  components: {

    // AddForm,

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