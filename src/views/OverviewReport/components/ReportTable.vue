<template>
  <div class="p-2 bg-white rounded">
    <div class="el-table__header flex justify-between items-center rounded-t-sm border-l-1 border-r-1 border-t-1 pl-3 pr-3 pt-2 pb-1 rounded-t-md">
      <div class="el-table__title font-semibold pb-1 text-base">Daily Overview</div>

      <div class="flex items-center justify-end">
        <div style="height: 1.6rem" class="cursor-pointer">
          <el-icon><RefreshRight /></el-icon>
        </div>
        <div class="h-5 ml-4">
          <el-dropdown trigger="click" @command="handleSize">
            <span class="el-dropdown-link flex items-center">
              <svg
                focusable="false"
                class="cursor-pointer"
                data-icon="column-height"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
                viewBox="64 64 896 896"
              >
                <path
                  d="M840 836H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm0-724H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM610.8 378c6 0 9.4-7 5.7-11.7L515.7 238.7a7.14 7.14 0 00-11.3 0L403.6 366.3a7.23 7.23 0 005.7 11.7H476v268h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V378h62.8z"
                ></path>
              </svg>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="large">Large</el-dropdown-item>
                <el-dropdown-item command="default">Default</el-dropdown-item>
                <el-dropdown-item command="small">Small</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div style="height: 1.6rem" class="cursor-pointer ml-4">
          <el-icon><Setting /></el-icon>
        </div>
      </div>
    </div>

    <el-table
      :data="store.report.rows"
      border
      :size="tabelSize"
      :summary-method="getSummaries"
      show-summary
      :indent="0"
      class="overview-report-table"
      stripe
      v-loading="loading"
      style="width: 100%"
      :row-class-name="tableRowClassName"
    >
      <el-table-column prop="date" sortable label="Date" width="200px" align="left">
        <template #default="scope">
          <div class="flex justify-between items-center">
            <span style="margin-right: 10px">{{ scope.row.date }}</span>
            <el-tooltip placement="right">
              <template #content> multiple lines<br />second line </template>
              <el-icon style="color: #67c23a"><Compass /></el-icon>
            </el-tooltip>
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="amount2" sortable label="Impr" />

      <el-table-column prop="amount3" sortable label="Bought">
        <template #default="scope">
          <div class="text-red-500 underline decoration-red-500 cursor-pointer" @click="showChildren(scope.row, 'device')">
            {{ scope.row.bought !== null ? numberWithCommas(scope.row.bought) : 'NA' }}
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="amount1" sortable label="adCTR" />

      <el-table-column prop="amount2" sortable label="Cost">
        <template #default="scope">
          <template v-if="scope.row.children">
            <div class="text-blue-500 underline decoration-blue-500 cursor-pointer" @click="showChildren(scope.row, 'source')">
              {{ scope.row.amount3 !== null ? numberWithCommas(Number.parseFloat(scope.row.amount3).toFixed(2)) : 'NA' }}
            </div>
          </template>
          <template v-else>
            {{ scope.row.name }}
          </template>
        </template>
      </el-table-column>

      <el-table-column prop="amount3" sortable label="CPC">
        <template #default="scope">
          <div class="text-blue-500">
            {{ scope.row.amount3 }}
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="amount1" sortable label="CPA" />

      <el-table-column prop="amount2" sortable label="Sold" />

      <el-table-column prop="amount3" sortable label="Earned">
        <template #default="scope">
          <div class="text-blue-500 underline decoration-blue-500 cursor-pointer" @click="showChildren(scope.row, 'feed')">
            {{ scope.row.amount3 !== null ? numberWithCommas(Number.parseFloat(scope.row.amount3).toFixed(2)) : 'NA' }}
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="amount1" sortable label="OpCTR" />

      <el-table-column prop="amount2" sortable label="RPC">
        <template #default="scope">
          <div class="text-purple-500 cursor-pointer">
            {{ scope.row.amount3 }}
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="amount3" sortable label="Profit">
        <template #default="scope">
          <div 
            @click="showChildren(scope.row, 'market')"
            class="cursor-pointer underline"
              :class="scope.row.amount3 < 0
              ? 'text-red-500 decoration-red-500'
              : 'text-green-500 decoration-green-500'"
            >
             {{ scope.row.amount3 !== null ? numberWithCommas(Number.parseFloat(scope.row.amount3).toFixed(2)) : 'NA' }}
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="amount3" sortable label="Margin">
        <template #default="scope">
          <div
            @click="showChildren(scope.row, 'team')"
            class="cursor-pointer underline"
            :class="scope.row.amount3 < 0
              ? 'text-red-500 decoration-red-500'
              : 'text-green-500 decoration-green-500'"
            >
            {{ scope.row.amount3 !== null ? numberWithCommas((Number.parseFloat(scope.row.amount3)).toFixed(2)) + '%' : 'NA' }}
          </div>
        </template>
      </el-table-column>
    </el-table>

    <div class="el-table__footer pt-4 text-right">
      <el-button type="success">Download .xlsx</el-button>
    </div>
  </div>
</template>


<script setup>
// import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults'
import { Compass, RefreshRight, Setting } from '@element-plus/icons-vue'
import { ref } from 'vue-demi'

import { useOverviewReportStore } from '../store/index'


const store = useOverviewReportStore()

// console.log(store.loading)


let loading = false
let tabelSize = ref('default')

const handleSize = (command) => (tabelSize.value = command)

const showChildren = (row, childrenType) => {
  let row_id = row.id
  childrenType = row.childrenType !== childrenType ? childrenType : null

  // store.

  store.setReportRowChildrenByType({row_id, childrenType})
}


  store.fetchReport()



  const numberWithCommas = x => {
    let parts = x.toString().split(".")
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return parts.join(".")
  }

  const tableRowClassName = ({row}) => {
    return 'row-type--' + (row.type ? row.type: 'parent')
  }

  const getSummaries = (param) => {
    const { columns, data } = param
    const sums = []
    columns.forEach((column, index) => {
      if (index === 0) {
        sums[index] = 'Total'
        return
      }
      const values = data.map((item) => Number(item[column.property]))
      if (!values.every((value) => Number.isNaN(value))) {
        sums[index] = `$ ${values.reduce((prev, curr) => {
          const value = Number(curr)
          if (!Number.isNaN(value)) {
            return prev + curr
          } else {
            return prev
          }
        }, 0)}`
      } else {
        sums[index] = 'N/A'
      }
    })

    return sums
  }

  console.log('store.report.rows', store.report)
</script>


<style lang="scss">
.el-table__header {
  // padding: 6px; bg-gray-100 bg-opacity-90
  background: #F5F7FA;
}
</style>
