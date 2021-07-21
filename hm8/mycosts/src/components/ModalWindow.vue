<template>
  <div class="box" :style="{ top: topPosition() + 'px' }">
    <component id="modal-window" class="modal-wrap wrapper"
               :is="settings.componentName" :costId="settings.costId" :page="settings.page"
               :position="settings.positionWindow"/>
  </div>
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
  },
  methods: {
    topPosition() {
      return (this.settings.positionWindow + 1) * 47 + 173 // 47px height <tr>, 173px height from top body
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  position: absolute;
  width: 350px;
  top: 220px;
  display: flex;
  justify-content: flex-end;
}

.wrapper {
  width: 350px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px -1px 4px 2px #c0c0c0;
  padding-bottom: 4px;
  background-color: #fff;
  z-index: 2;
}

.wrapper:after {
  content: '';
  position: absolute;
  right: 12px;
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