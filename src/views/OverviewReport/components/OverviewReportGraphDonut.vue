<template>
  <Doughnut :chart-data="chartData" :chart-options="chartOptions" class="doughnut-chart" />
</template>

<script>
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend, Title)

export default {
  name: 'App',
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartName: {
      type: String,
      default: '',
      requred: false
    }
  },
  components: {
    Doughnut
  },
  computed: {
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: this.chartName,
            position: 'bottom',
            font: {
              weight: 'normal'
            }
          }
        }
      }
    },
  },
}
</script>

<style scoped lang="scss">
.doughnut-chart {
  width: 210px;
  position: relative;

  @media(max-width: 1536px) {
    width: 180px;
  }
}
</style>