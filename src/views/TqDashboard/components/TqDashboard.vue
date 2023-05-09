<template>
  <div pa-2>

  <div mt-4 ml-2>
    <h2>TQ Dashboard</h2>
  </div>

  <div class="filters-form">
    <FiltersForm />
  </div>



  <div class="bar-charts">
    <div class="bar-chart"  v-for="market in tq" :key="market.marketId">
      <div class="bar-chart__head">
        <div class="bar-chart__market">{{ store.getMarketNameById(market.marketId) }}</div> 
        <div class="bar-chart__market-revenue">YGR: $471,636.87  </div>
      </div>
      <BarChart :height="200" :chart-data="buildGraph(market)" :chart-options="chartOptions"  /> {{ market}}
      <!-- <BarChart :height="200" :chart-data="market" :chart-options="chartOptions"  />  {{ market.marketId }}--> 
    </div>
  </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue"
import BarChart from "./BarChart.vue"
import FiltersForm from "./FiltersForm.vue"
import { useTQReportStore } from '../store/index'

function selectColor(i, opacity = 0.8) {
  const colors = [ 
    `rgba(200, 200, 200, ${opacity} )`, // grey
    `rgba(255,50,108, ${opacity})`, // red
    `rgba(255, 162, 60, ${opacity})`, // yellow
    `rgba(156, 3, 247, ${opacity})`, // purple
    `rgba(19, 206, 102, ${opacity} )`, // green
    `rgba(64, 158, 255, ${opacity})`, // blue
  ]
  let index = (i < colors.length) ? i : i % colors.length 
  return colors[index]
}

const store = useTQReportStore()

let report = []

// let tq = []

const tq = computed(() => {
  return store.tqReport
})


const buildGraph = market => {
  const labels = store.getLabels 
  // const datasets = market?.datasets?.map((i) => {
  //   console.log(i)
  //   // const label = store.getThresholdNameById(i.tqThresholdId)
  //   // console.log('I - ', i)
  //   const data = labels.map(label => i.data.find(i => i.date === label)?.grossRevenue) 

  //   console.log('asdas',labels)

  //   return {
  //     label,
  //     data,
  //     backgroundColor: selectColor(i.tqThresholdId - 2),
  //   }
  // })
  return {
    labels,
    datasets: [],
  }
}



onMounted(async () => {
  // buildGraph()
  report = store.fetchReport()
  // console.log(tq)
})

const getGrossRevenueReport = [
  {
    marketId: 1,
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'My First Dataset',   
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [selectColor(1), selectColor(2), selectColor(3), selectColor(4), selectColor(5), selectColor(6)],
      borderWidth: 1,
      tqThresholdId: 1,
    }]
  },
  {
    marketId: 2,
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      tqThresholdId: 2,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  },
  {
    marketId: 3,
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'My First Dataset',
      tqThresholdId: 3,
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  },
  {
    marketId: 4,
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  },
  {
    marketId: 5,
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  }        
]
</script>

<style lang="scss" scoped>






.bar-charts{
  display:flex;
  flex-wrap:wrap;
  width: 100%;
  // margin: 0 -6px;
}

.bar-chart{
  min-width: 360px;
  width: calc(33.33% - 12px);
  margin: 6px;
  border: 1px solid #DCDFE6;
  padding: 1em;
  border-radius: 5px;


  &__head{
    display: flex;
    align-items:center;
    justify-content: space-between;
  }

  &__market{
    font-weight: bold;
  }

  &__market-revenue{
    font-size: 12px;
  }

}


</style>