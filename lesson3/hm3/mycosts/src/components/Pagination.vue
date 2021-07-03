<template>
  <div>
{{amountPages}}
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    amountPages: {
      type: Number,
      default: () => 1
    }
  }
}
</script>

<style scoped>

</style>