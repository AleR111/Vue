<template>
  <div class="page-box">
    <button class="btn-page" v-for="elem in amountPages"
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
.page-box {
  width: 350px;
  border: 1px solid rgba(154, 154, 154, 0.66);
  box-sizing: border-box;
  padding: 8px 16px;
}
.btn-page {
  border: none;
  background-color: #fff;
}
.btn-page:hover {
  cursor: pointer;
  color: #3e99a1;
}
</style>