<template>
    <div>
      <h2>Калькулятор</h2>
      <input v-model.number = 'input'  type="number"><br>
      <div class="operators">
        <button @click="setData('+')" class="operator">+</button>
        <button @click="setData('-')" class="operator">-</button>
        <button @click="setData('*')" class="operator">*</button>
        <button @click="setData('/')" class="operator">/</button>
        <button @click="setData('^2')" class="operator">^2</button>
        <button @click="setData('%')" class="operator">%</button>
      </div>
      <button @click="calculate">=</button>
    </div>
</template>

<script>
export default {
  name: "Calc",
  data() {
    return {
      input: null,
      operand1: null,
      operand2: null,
      operator: null,
    }
  },

  methods: {
    setData(operator) {

      this.operand1 = this.input;
      if (operator === '^2') return this.input = Math.pow(this.operand1, 2);
      this.operator = operator;
      this.input = '';

    },
    calculate() {
      this.operand2 = this.input;
      console.log(this.operator, this.operand1, this.operand2);
      switch (this.operator) {
        case '+': this.input = this.operand1 + this.operand2;
        break;
        case '-': this.input = this.operand1 - this.operand2;
          break;
        case '*': this.input = this.operand1 * this.operand2;
          break;
        case '/': this.input = this.operand1 / this.operand2;
          break;
        case '%': this.input = Math.floor(this.operand1 / this.operand2);

      }
    },
  },

};

</script>

<style lang="scss" scoped>
  .operators {
    margin-top: 16px;
    margin-bottom: 16px;
  };

  .operator {
    margin-right: 4px;
  }
</style>