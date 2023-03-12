<template>
  <Doughnut :chart-data="chartData" :chart-options="options" :width="180" :style="'positon: relative'" />
</template>

<script lang="ts">
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
    chartOptions: {
      type: Object,
      default: () => {}
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
    options() {
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
    // data() {
    //   return {
    //     labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    //     datasets: [
    //       {
    //         backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
    //         data: [40, 20, 80, 10]
    //       }
    //     ]
    //   }
    // }
  },
  data() {
    return {
      // data: {
      //   labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
      //   datasets: [
      //     {
      //       backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      //       data: [40, 20, 80, 10]
      //     }
      //   ]
      // },
      // options: {
      //   responsive: true,
      //   maintainAspectRatio: true,
      //   plugins: {
      //     legend: {
      //       display: false,
      //     },
      //     title: {
      //       display: true,
      //       text: this.chartName,
      //       position: 'bottom',
      //       font: {
      //         weight: 'normal'
      //       }
      //     }
      //   }
      // }
    }
  },
  methods: {
    variantColor(i, transparency = 1) {
      let c = this.variantColors;
      c = c[i] ? c[i] : c[c.length - 1];
      return `rgba(${c[0]},${c[1]},${c[2]}, ${transparency})`;
    },
  }
}
</script>
