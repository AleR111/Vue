<template>
  <div class="modal-wrap">
    <component :is="settings.componentName" :costId="settings.costId"/>
  </div>
</template>

<script>
import EditCosts from "./EditCosts";

export default {
  name: "ModalWindow",

  components: {
    EditCosts
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

<style scoped>

</style>