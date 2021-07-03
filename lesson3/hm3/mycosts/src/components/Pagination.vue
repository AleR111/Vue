<template>
  <div>
    <button v-for="elem in amountPages"
            :key="elem"
            @click="setNumberPage(elem)"
    >
      {{ elem }}
    </button>
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
  },
  methods: {
    setNumberPage(num) {
      this.$emit('showPage', num)
    }
  }
}
</script>

<style scoped>

</style>