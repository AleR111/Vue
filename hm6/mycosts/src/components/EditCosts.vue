<template>
  <div class="btn-box">
    <button class="button edit-btn" @click="showEditCostData">Edit</button>
    <button class="button delete-btn" @click="deleteCost">Delete</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "EditCosts",

  props: ['costId', 'position'],

  methods: {
    ...mapActions([
      'deleteCostData',
    ]),
    showEditCostData() {
      this.$modal.show({
        componentName: 'EditCostData',
        costId: this.costId,
        positionWindow: this.position
      })
    },
    deleteCost() {
      this.deleteCostData(this.costId)
      console.log(this.costId)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-box {
  width: 120px;
}
.button {
  z-index: 3;
  text-align: left;
  font-size: 16px;
  border: none;
  background-color: #fff;
  margin-top: 4px;
  padding: 8px 10px;
}

.button:hover {
  z-index: 3;
  cursor: pointer;
  text-decoration: underline;
  background-color: rgba(234, 233, 233, 0.73);
}

.edit-btn:before {
  content: url("https://img.icons8.com/ios/14/000000/edit--v1.png");
  margin-right: 8px;
}

.delete-btn:before {
  content: url("https://img.icons8.com/material-outlined/14/000000/trash--v1.png");
  margin-right: 8px;
}
</style>