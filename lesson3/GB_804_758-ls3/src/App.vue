<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <div v-html="dataHtml" />

    <div :class="{ red: isRed }">
      Error!!!
    </div> -->

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" :date="computedDate"/> -->
    <Calculator />

    <hr />

    <counter v-if="showCounterValue" @click="showCounter" ref="counter"/>
    <button @click="showCounter">Change</button>
    <!-- // вызов по поднятию клавиши(любой)
    <input @keyup="onEnter">
    
    <button @click="onCkick">Click me </button> / {{ count }}
    <button @click="count = 1 + 2">Sum</button>
    <button @click="onCkick2(1, 4)">Click me2</button>
    
    {{ message }} -->
  </div>
</template>

<script>
import Calculator from './components/Calculator.vue'
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: {
    Calculator,
    Counter
  },
  data(){
    return {
      showCounterValue: true,
      // count: 0, 
      // currentDate: null,
      // message: "Hello Vue",
      // dataHtml: "<div class='data'>12312</div>",
      // isRed: false
    }
  },
  methods: {
    showCounter(){
      this.$refs.counter.onClick()
      console.log(this.$refs.counter.counter)
    },
    onCkick(){
      this.count +=1
    },
    onCkick2(param, param2){
      this.count = param + param2
    },
    onEnter(){
      console.log('KeyUp')
    }
  },
  computed: {
    computedDate(){
      return this.currentDate || "Текущая дата"
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.red{
  color: red;
}
.data{
  font-size: 20px;
}
</style>
<style>
.data{
  font-size: 20px;
}
</style>
