<template>
  <div class="overview-report-graphs p-2 mt-2">

    <div class="overview-report-graphs-container gap-2">

      <div class="overview-report-graphs-group">
        <div class="overview-report-graphs-group__title"><span>Project</span></div>
        <div class="pr-2 pl-2 pt-6 pb-2 flex w-full">
          <div class="overview-report-graphs-graph">
            <OverviewReportGraphDonut :chartName="'Profit'" :chartData="data" />
          </div>
          <div class="overview-report-graphs-graph">
            <OverviewReportGraphDonut :chartName="'Earned'" :chartData="data" />
          </div>
        </div>
      </div>

      <div class="overview-report-graphs-group">
        <div class="overview-report-graphs-group__title"><span>Project</span></div>
        <div class="pr-2 pl-2 pt-6 pb-2 flex w-full">
          <div class="overview-report-graphs-graph">
            <OverviewReportGraphDonut :chartName="'Profit'" :chartData="data" />
          </div>
          <div class="overview-report-graphs-graph">
            <OverviewReportGraphDonut :chartName="'Earned'" :chartData="data" />
          </div>
        </div>
      </div>
      
      <div class="overview-report-graphs-group">
        <div class="overview-report-graphs-group__title"><span>Project</span></div>
        <div class="pr-2 pl-2 pt-6 pb-2 flex w-full">
          <div class="overview-report-graphs-graph">
            <OverviewReportGraphDonut :chartName="'Profit'" :chartData="data" />
          </div>
          <div class="overview-report-graphs-graph">
            <OverviewReportGraphDonut :chartName="'Earned'" :chartData="data" />
          </div>
        </div>
      </div>
      
      <div class="overview-report-graphs-group">
        <div class="overview-report-graphs-group__title"><span>Project</span></div>
        <div class="pr-2 pl-2 pt-6 pb-2 flex w-full">
          <div class="overview-report-graphs-graph">
            <OverviewReportGraphDonut :chartName="'Profit'" :chartData="data" />
          </div>
          <div class="overview-report-graphs-graph">
            <OverviewReportGraphDonut :chartName="'Earned'" :chartData="data" />
          </div>
        </div>
      </div>      
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from "@/app/store/app.js"
import { useOverviewReportStore } from '../store/index'
import OverviewReportGraphDonut from "./OverviewReportGraphDonut.vue"

const appStore = useAppStore()
const store = useOverviewReportStore()
const rows = store.getRows

const variantColor = (i, transparency = 1) => {
  let c = appStore.variantColors;
  c = c[i] ? c[i] : c[c.length - 1];
  return `rgba(${c[0]},${c[1]},${c[2]}, ${transparency})`;
}

const data = {
  labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
  datasets: [
    {
      // backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      backgroundColor: [1, 2, 3, 4, 5, 6].map((el, i) => variantColor(i, .75)), // demo
      data: [40, 20, 50, 18]
    }
  ]
}
</script>
