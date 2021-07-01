<template>
    <div>
        
        <div v-for="(item, idx)  in myCollection" :key="`${idx}_parent`">
            {{ item }} - {{ idx }}
        </div>

        <div class="logs" v-for="(log, id) in logs" :key="id">
            {{ log }}
        </div>

        <input type="number" 
            v-model.number="operand1" 
            placeholder="operand1"
        />
        <input type="number" 
            v-model.number="operand2" 
            placeholder="operand2"
        />
    <div>=  {{ result }}</div>
    <div>=  fib {{ fibResult }}</div>

    <div class="error" 
        :class="{'red': error}" 
        v-if="error">
        Ошибка!! {{ error }}
    </div>

    <div class="error" 
        :class="{'red': error}" 
        v-show="!!error">
        Ошибка!! {{ error }}
    </div>


    <div class="strange-message">
        <template v-if="result < 0"> Получилось отрицательное число </template>
        <template v-else-if="result < 100">Получилось число в первой сотне</template>
        <template v-else>Все остальные числа</template>
    </div>

<!-- 
        {{ text.length + sum}} -->

        <div class="keyboard">
            <!-- <button @click="calculate('+')">+</button>
            <button @click="calculate('-')">-</button>
            <button @click="calculate('*')">*</button>
            <button @click="calculate('/')">=</button>
            <button @click="calculate('/')">/</button> --> 
            <button v-for="operand in operands" 
                    @click="calculate(operand)"
                    :key="operand"
                    v-bind:title="operand"
                    >
                {{ operand }}
            </button>
         </div>
        <!--{{powWithOperand}}
        {{powSum}} -->
    </div>
</template>

<script>
export default {
    name: "Calculator",
    data(){
        return {
            myCollection: [1,2,4,4,5],
            operands: ['+','-','/','*'],
            // text: "Some string",
            text1: "",
            operand1: 0,
            operand2: 0,
            fibResult: 0,
            result: 0,
            error: "",
            logs:{}
        }
    },
    // watch: {
    //     sum: function(newValue) {
    //         this.sendData(newValue)
    //     }
    // },
    methods: {
        calculate(operation = "+"){
            this.error = "";
            switch (operation) {
                case '+':
                    this.add()
                    break;
                case '-':
                    this.substract()
                    break;
                case '*':
                    this.multiply()
                    break;
                case '/':
                    this.divide()
                    break;
            }
            const key = Date.now()
            const value = `${this.operand1}${operation}${this.operand2} = ${this.result}`
            // Vue.set(object, propertyName, value)
            this.$set(this.logs, key, value)
        },
        add() {
            this.result = this.operand1 + this.operand2
            this.fibResult= this.fib1 + this.fib2
        },
        substract(){
            console.log('substract')
             this.result = this.operand1 - this.operand2
        },
        multiply() {
            this.result = this.operand1 * this.operand2
        },
        divide() {
            const { operand1, operand2 } = this
            
            if (operand2 === 0){
                return this.error = "Делить на 0 нельзя"
            }
            
            this.result = operand1 / operand2
        },
        sendData(data){
            console.log("Send Data name", data)
        },
        fib(n) {
            return n<= 1 ? n : this.fib(n-1) + this.fib(n-2);
        }
    },
    computed: {
        fib1() {
            return this.fib(this.operand1)
        },
        fib2() {
            return this.fib(this.operand2)
        },
        // powWithOperand(){
        //     return Math.pow(this.operand1, this.operand2)
        // },
        // powSum(){
        //     return Math.pow(this.result, 4)
        // }
    }
}
</script>
<style scoped>
.red{
    color: red;
}
</style>