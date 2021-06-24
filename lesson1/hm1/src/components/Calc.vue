<template>
    <div>
      <h2>Калькулятор</h2>
      <input v-model.number = 'input'  type="text"><br>
      <div class="operators">
        <button @click="operator = '+'; setOperator1()" class="operator">+</button>
        <button @click="operator = '-'; setOperator1()" class="operator">-</button>
        <button @click="operator = '*'; setOperator1()" class="operator">*</button>
        <button @click="operator = '/'; setOperator1()" class="operator">/</button>
      </div>
      <button @click="calculate">=</button>
    </div>
</template>

<script>
export default {
  name: "calc",
  data() {
    return {
      input: null,
      operand1: null,
      operand2: null,
      operator: null,
    }
  },

  methods: {
    setOperator1() {
      this.operand1 = this.input;
      this.input = ''
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
      }
    }
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