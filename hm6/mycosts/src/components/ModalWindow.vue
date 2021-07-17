<template>

    <component id="modal-window" class="modal-wrap wrapper" :is="settings.componentName" :costId="settings.costId" :page="settings.page"/>

</template>

<script>

export default {
  name: "ModalWindow",

  components: {
    EditCosts: () => import('./EditCosts'),
    EditCostData: () => import('./EditCostData')
  },
  props: {
    settings: {
      type: Object
    }
  },


  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 350px;
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

</style>