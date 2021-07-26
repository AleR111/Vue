<script>
import { Doughnut, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  name: 'Doughnut',
  extends: Doughnut,
  mixins: [reactiveProp],

  mounted () {
    this.renderChart(this.chartData)
  }

}
</script>