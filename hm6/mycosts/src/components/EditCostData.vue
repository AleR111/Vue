<template>
<div>
    <form action="#" class="form">
      <input class="input" type="text">
      <input class="input" type="number">
      <input class="input" type="date">
      <button class="btn-form" type="button"><span class="text-span">Edit</span></button>
    </form>
</div>
</template>

<script>
export default {
  name: "EditCostData"
}
</script>

<style scoped lang="scss">
.form {
  display: flex;
  width: 350px;
  border-spacing: 0;
  border-collapse: collapse;
}
.input {
  width: 100%;
  flex-grow: 1;
}
.btn-form {
  border: none;
  background-color: rgba(212, 0, 25, 0.49);
  margin-left: 4px;
}

.btn-form:hover {
  cursor: pointer;
  background-color: rgba(212, 0, 25, 0.66);
}
</style>