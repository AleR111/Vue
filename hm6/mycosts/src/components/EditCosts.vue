<template>
  <div class="wrapper">
    <button class="button edit-btn">Edit</button>
    <button class="button delete-btn" @click="deleteCost">Delete</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: "EditCosts",

  props: ['costId'],

  methods: {
    ...mapMutations([
      'deleteCostData',
    ]),
    deleteCost() {
      this.deleteCostData()
      console.log(this.costId)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 120px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px -1px 4px 2px #c0c0c0;
  padding-bottom: 4px;
  color: #fff;
  position: relative;
  z-index: 2;
}

.wrapper:after {
  content: '';
  position: absolute;
  right: 8px;
  top: -20px;
  border: 10px solid transparent;
  border-bottom: 10px solid #fff;
}

//.wrapper::after, .block::before {
//  content: '';
//  position: absolute;
//  background: #fff;
//  right: 8px;
//  top: -5px;
//  width: 10px;
//  height: 10px;
//  box-shadow: 0 0 4px 2px #c0c0c0; /* Добавляем тень для уголка */
//  z-index: -1; /* Прячем за основным блоком */
//  transform: rotate(45deg); /* Поворачиваем на 45º */
//  -webkit-transform: rotate(45deg);
//}
//
//.wrapper::before {
//  z-index: 1; /* Накладываем поверх, чтобы скрыть следы тени */
//  box-shadow: none; /* Прячем тень */
//}

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