<template>
  <div>
    <form action="#" class="form" @submit.prevent="saveChanges">
      <input class="input" type="text" name="date" :value="setData.date">
      <input class="input" type="text" name="category" :value="setData.category">
      <input class="input" type="number" name="value" :value="setData.value">
      <button class="btn-form" type="submit" ><span class="text-span">Edit</span></button>
    </form>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "EditCostData",

  props: ['costId', 'page'],

  data() {
    return {
      date: null,
      category: null,
      value: null
    }
  },

  methods: {
    saveChanges(event) {
      let {date, category, value} = event.target.elements;

      this.date = date.value;
      this.category = category.value;
      this.value = value.value;

      console.log(this.value)
    },
  },

  computed: {
    ...mapGetters([
      'getCostDataId'
    ]),

    setData() {
      return this.getCostDataId(this.page, this.costId)
    }
  },

  mounted() {
    console.log(this.page)
  }

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