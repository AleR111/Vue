<template>
  <div class="list">
    <table class="table">
      <colgroup>
        <col class="brand"/>
        <col class="price"/>
        <col class="power"/>
      </colgroup>
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Date</th>
        <th scope="col">Category</th>
        <th scope="col">Value</th>
      </tr>
      </thead>
      <tbody>
      <tr class="tr" v-for="(elem, idx) in costsList"
          :key="idx"
      >
        <td class="td">{{ elem.id }}</td>
        <td class="td">{{ elem.date }}</td>
        <td class="td">{{ elem.category }}</td>
        <td class="td">{{ elem.value }}</td>
        <td class="td">
          <button class="additional-btn">&#8942;</button>
        </td>
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
  width: 350px;
  border-spacing: 0;
  border-collapse: collapse;
}

.td, th {
  border-bottom: 1px solid rgba(161, 161, 161, 0.45);
  padding: 10px;
  text-align: left;
}

.tr:nth-of-type(odd) {
  background-color: rgba(231, 193, 193, 0.53);
}

.tr:nth-of-type(even) {
  background-color: rgba(201, 201, 232, 0.43);
}

.additional-btn {
  font-size: 20px;
  font-weight: 700;
  background-color: unset;
  border: none;
}

.additional-btn:hover {
  cursor: pointer;
  color: #3e99a1;
}
</style>