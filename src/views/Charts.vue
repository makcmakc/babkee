<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core"
import { CanvasRenderer } from "echarts/renderers"
import { LineChart } from "echarts/charts"
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components"
import VChart, { THEME_KEY } from "vue-echarts"
import { ref, defineComponent } from "vue"

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
])

export default defineComponent({
  name: "HelloWorld",
  components: {
    VChart,
  },
  // provide: {
  //   [THEME_KEY]: "dark"
  // },
  setup() {
    const option = ref({
      xAxis: {
        data: ['A', 'B', 'C', 'D', 'E']
      },
      yAxis: {},
      series: [
        {
          data: [10, 22, 28, 23, 19],
          type: 'line',
          smooth: true
        }
      ]
    })

    return { option }
  },
})
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>