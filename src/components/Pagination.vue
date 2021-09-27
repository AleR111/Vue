<template>
  <div class="text-center pagination">
    <v-pagination
        v-model="page"
        :length="amountPages"
        @input="setNumberPage"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    amountPages: {
      type: Number,
      default: () => 1
    },
    page: {
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

<style lang="scss" scoped>
$colorTeal: #26A69A;

.pagination {
  border: 1px solid rgba(161, 161, 161, 0.45);
  border-top: none;

  ::v-deep .v-pagination__navigation {
    box-shadow: none !important;

    :hover {
      color: $colorTeal;
    }
  }

  ::v-deep .v-pagination__item {
    box-shadow: none !important;

    &:hover {
      color: $colorTeal;
    }
  }

  ::v-deep .v-pagination__item--active {
    border: 1px solid rgba(161, 161, 161, 0.45) !important;
    color: $colorTeal !important;
    background-color: #fff !important;
  }
}
</style>