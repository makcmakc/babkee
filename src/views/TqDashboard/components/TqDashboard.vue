<template>
  <div class="bar-charts">
    <div class="bar-chart"  v-for="market in getGrossRevenueReport" :key="market.marketId">
      <div class="bar-chart__head">
        <div class="bar-chart__market"> US</div>
        <div class="bar-chart__market-revenue">YGR: $471,636.87  </div>
      </div>
      <BarChart :height="200" :chart-data="market" :chart-options="chartOptions"  />
    </div>
  </div>
</template>

<script setup>
import BarChart from "./BarChart.vue"


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


const getGrossRevenueReport = [
  {
    marketId: 1,
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [selectColor(1), selectColor(2), selectColor(3), selectColor(4), selectColor(5), selectColor(6)],
      borderWidth: 1
    }]
  },
  {
    marketId: 2,
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
    marketId: 3,
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
//::v-deep { }

.bar-charts{
  display:flex;
  flex-wrap:wrap;
  width: 100%;
  margin: 0 -6px;
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