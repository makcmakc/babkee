<template>
  <div class="my-table">
    <div class="my-table__header">
      <div class="my-table__title" font-semibold pb-1 text-base>Daily Overview</div>

      <div flex items-center justify-end>
        <div style="height: 1.6rem" cursor-pointer @click="updateReport">
          <el-icon><RefreshRight /></el-icon>
        </div>
        <div class="h-5 ml-4">
          <size-selector />
        </div>
        <div style="height: 1.6rem" cursor-pointer ml-4>
          <columns-selector />
        </div>
      </div>
    </div>

    <el-table
      :data="store.report.rows"
      border
      :size="store.tableSize"
      :summary-method="getSummaries"
      show-summary
      :indent="0"
      class="overview-report-table"
      stripe
      v-loading="store.loading"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      @doLayout="updateTableLayout"
    >
      <el-table-column prop="date" sortable label="Date" width="200px" align="left">
        <template #default="scope">
          {{ scope.row.date }}
        </template>
      </el-table-column>

      <el-table-column prop="impressions" sortable label="Impr" />

      <el-table-column prop="bought" sortable label="Bought">
        <template #default="scope">
          <div class="text-red-500 underline decoration-red-500 cursor-pointer" @click="showChildren(scope.row, 'device')">
            {{ scope.row.bought ? numberWithCommas(scope.row.bought) : 'NA' }}
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="adCTR" sortable label="adCTR" />

      <el-table-column prop="cost" sortable label="Cost">
        <template #default="scope">
          <template v-if="scope.row.children">
            <div class="text-blue-500 underline decoration-blue-500 cursor-pointer" @click="showChildren(scope.row, 'source')">
              {{ scope.row.cost ? numberWithCommas(Number.parseFloat(scope.row.amount3).toFixed(2)) : 'NA' }}
            </div>
          </template>
          <template v-else>
            {{ scope.row.cost }}
          </template>
        </template>
      </el-table-column>

      <el-table-column prop="CPC" sortable label="CPC">
        <template #default="scope">
          <div class="text-blue-500">
            {{ scope.row.CPC }}
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="sold" sortable label="Sold" />

      <el-table-column prop="earned" sortable label="Earned">
        <template #default="scope">
          <div class="text-blue-500 underline decoration-blue-500 cursor-pointer" @click="showChildren(scope.row, 'feed')">
            {{ scope.row.earned ? numberWithCommas(Number.parseFloat(scope.row.earned).toFixed(2)) : 'NA' }}
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="opCTR" sortable label="OpCTR" />

      <el-table-column prop="RPC" sortable label="RPC">
        <template #default="scope">
          <div class="text-purple-500">
            {{ scope.row.RPC }}
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="profit" sortable label="Profit">
        <template #default="scope">
          <div 
            @click="showChildren(scope.row, 'market')"
            class="cursor-pointer underline"
              :class="scope.row.profit < 0
              ? 'text-red-500 decoration-red-500'
              : 'text-green-500 decoration-green-500'"
            >
             {{ scope.row.profit ? numberWithCommas(Number.parseFloat(scope.row.profit).toFixed(2)) : 'NA' }}
          </div>
        </template>
      </el-table-column>

      <el-table-column prop="margin" sortable label="Margin">
        <template #default="scope">
          <div
            @click="showChildren(scope.row, 'team')"
            class="cursor-pointer underline"
            :class="scope.row.margin < 0
              ? 'text-red-500 decoration-red-500'
              : 'text-green-500 decoration-green-500'"
            >
            {{ scope.row.margin ? numberWithCommas((Number.parseFloat(scope.row.margin)).toFixed(2)) + '%' : 'NA' }}
          </div>
        </template>
      </el-table-column>
    </el-table>

    <div class="el-table__footer" pt-4 text-right>
      <el-button type="success">Download .xlsx</el-button>
    </div>
  </div>
</template>


<script setup>
import { Compass, RefreshRight, Setting } from '@element-plus/icons-vue'
import { ref, onMounted } from 'vue'

import { useOverviewReportStore } from '../store/index'
import SizeSelector from './SizeSelector.vue'
import ColumnsSelector from './ColumnsSelector.vue'

  const store = useOverviewReportStore()

  onMounted(async () => {
    await store.fetchReport()
  })

  const updateReport = () => store.fetchReport()

  const showChildren = (row, childrenType) => {
    let row_id = row.id
    childrenType = row.childrenType !== childrenType ? childrenType : null


    store.setReportRowChildrenByType({row_id, childrenType})
  }

  const updateTableLayout = () => {
    console.log('UPDATED')
  }

  const numberWithCommas = x => {
    let parts = x.toString().split(".")
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return parts.join(".")
  }

  const tableRowClassName = ({row}) => {
    return 'row-type--' + (row.type ? row.type: 'parent')
  }

  const getSummaries = param => {
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
</script>


<style lang="scss">
.my-table {
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  background: white;
  border-radius: 0.25rem;

  &__header {
    background: #F5F7FA;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
    border-top: 1px;
    border-left: 1px;
    border-right: 1px;
    border-style: solid;
    border-bottom: 0;
    padding: .5rem .75rem .25rem .75rem;
    border-color: #ebeef5;
  }
}
</style>
