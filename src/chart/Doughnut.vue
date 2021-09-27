<template>
  <RenderChart :chart-data="dataCollection" />
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Doughnut",
  components: {
    RenderChart: () => import('./RenderChart')
  },

  props: ['categoryList'],

  methods: {
    setDataCollection(labels, data) {
      const backColor = labels.map(elem => {
            return this.categoryList.find(el => el.value === elem)?.backColor
          }
      )

      const borderColor = backColor.map(el => `${el?.slice(0, -6)})`)


      return {
        labels: labels,
        datasets: [{
          label: 'Coasts',
          data: data,
          backgroundColor: backColor,
          borderColor: borderColor,
          borderWidth: 1
        }]
      }
    }
  },

  computed: {
    ...mapGetters([
      'getCostsList'
    ]),

    dataCollection() {

      let labels = []
      this.getCostsList.forEach(el => {
        if (!labels.includes(el.category)) labels.push(el.category)
      })

      const data = labels.map(el => {
        return this.getCostsList.reduce((total, e) => {
          if (el === e.category) total += e.value
          return total
        }, 0)
      })

      return this.setDataCollection(labels, data)

    }
  },
}
</script>

<style scoped>

</style>