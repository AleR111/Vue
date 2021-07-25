<script>
import { Doughnut, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
export default {
  name: 'Doughnut',
  extends: Doughnut,
  mixins: [reactiveProp],
  // props: {
  //   costsList: {
  //     type: Array,
  //   }
  // },
  // data() {
  //   return {
  //     chartData: {
  //       labels: this.getData().labels,
  //       datasets: [{
  //         label: 'Coasts',
  //         data: this.getData().data,
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //           'rgba(153, 102, 255, 0.2)',
  //           'rgba(255, 159, 64, 0.2)',
  //           'rgba(29,27,26,0.2)'
  //         ],
  //         borderColor: [
  //           'rgba(255, 99, 132, 1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //           'rgba(255, 159, 64, 1)',
  //           'rgb(12,8,3)'
  //         ],
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true
  //         }
  //       }
  //     }
  //   }
  // },

  methods: {
    getData() {
      let labels = []
      this.costsList.forEach(el => {
        if (!labels.includes(el.category)) labels.push(el.category)
      })

      const data = labels.map(el => {
        return this.costsList.reduce((total, e) => {
          if (el === e.category) total += e.value
          return total
        }, 0)
      })

      return {labels, data}
    }
  },

  mounted () {
    this.renderChart(this.chartData)
  }

}
</script>