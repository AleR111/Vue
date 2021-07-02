<template>
  <div class="list">
    <table class="table">
      <colgroup>
        <col class="brand"/>
        <col class="price"/>
        <col class="power"/>
      </colgroup>
      <thead>
      <tr class="tr">
        <th scope="col">Brand</th>
        <th scope="col">Price</th>
        <th scope="col">Power Source</th>
      </tr>
      </thead>
      <tbody>
        <tr class="tr" v-for="(elem, idx) in costsList"
          :key="idx"
        >
          <td class="td">{{ elem.date }}</td>
          <td class="td">{{ elem.category }}</td>
          <td class="td">{{ elem.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "CostsList",
  props: {
    costsList: {
      type: Array,
      default: () => [],
    }
  },
}
</script>

<style scoped>
.table {
  border-spacing: 0;
  border-collapse: collapse;
}
.td, th {
  border-bottom: 1px solid black;
}
</style>