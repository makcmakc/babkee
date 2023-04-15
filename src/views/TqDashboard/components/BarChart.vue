<template>
  <Bar :chart-data="chartData" :chart-options="chartOptions" :width="'100%'" />
</template>

<script>
import { Chart as ChartJS,   CategoryScale, LinearScale,  BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(BarElement,   CategoryScale, LinearScale, Tooltip, Legend, Title)

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
    Bar
  },
  computed: {
    chartOptions() {
      return {
         responsive: true,
          maintainAspectRatio: false,

        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            // text: this.chartName,
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