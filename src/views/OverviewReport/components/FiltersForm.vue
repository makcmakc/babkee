<template>
  <el-form class="lg:flex-nowrap flex-wrap flex mb-4 mt-4 p-2 rounded flex gap-2" :inline="false" :label-position="'top'">

    <el-form-item label="Markets">
      <el-select
        v-model="marketIdIn"
        multiple
        clearable
        placeholder="All markets"
        collapse-tags
        size="large">
        <el-option
          v-for="item in filtersAvailable.markets"
          :key="item.id"
          :label="item.name"
          :value="item.name"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="Sources">
      <el-select
        v-model="sourceIdIn"
        multiple
        clearable
        placeholder="All sources"
        collapse-tags
        size="large">
        <el-option
          v-for="item in filtersAvailable.sources"
          :key="item.id"
          :label="item.name"
          :value="item.name"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="Websites">
      <el-select
        v-model="siteIdIn"
        multiple
        clearable
        placeholder="All websites"
        collapse-tags
        size="large">
        <el-option
          v-for="item in filtersAvailable.sites"
          :key="item.id"
          :label="item.name"
          :value="item.name"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="Devices">
      <el-select
        v-model="deviceIdIn"
        multiple
        clearable
        placeholder="All devices"
        collapse-tags
        size="large">
        <el-option
          v-for="item in filtersAvailable.devices"
          :key="item.id"
          :label="item.name"
          :value="item.name"
        />
      </el-select>
    </el-form-item>
    
    <el-form-item label="Teams">
      <el-select
        v-model="teamdIdIn"
        multiple
        clearable
        placeholder="All teams"
        collapse-tags
        size="large">
        <el-option
          v-for="item in filtersAvailable.teams"
          :key="item.id"
          :label="item.name"
          :value="item.name"
        />
      </el-select>
    </el-form-item>  
    
    <el-form-item label="Date">
      <el-date-picker
        v-model="dateRange"
        type="daterange"
        unlink-panels
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
        :shortcuts="shortcuts"
        size="large"
      />
    </el-form-item>       

    <el-form-item class="load-report-btn flex-none mt-6 <xs:mt-2 lg:flex-1 items-end">
      <el-button type="success" class="<xs:w-full" size="large" @click="submitHandler">
        <span class="font-semibold">Load Report </span><el-icon class="ml-2"><Refresh class="text-white" /></el-icon>
      </el-button>
    </el-form-item>
  </el-form>
</template>


<script setup>
import { computed, onMounted, ref } from "vue"
import { Refresh } from '@element-plus/icons-vue'
import { useOverviewReportStore } from '../store/index'

const store = useOverviewReportStore()


const filtersAvailable = computed(() => store.getFiltersAvailable)

const marketIdIn = computed({
  get() {
    return store.filters.marketIdIn
  },
  set(val) {
     store.filters.marketIdIn = val
  }
})

const sourceIdIn = computed({
  get() {
    return store.filters.sourceIdIn
  },
  set(val) {
    store.filters.sourceIdIn = val
  }
})

const teamdIdIn = computed({
  get() {
    return store.filters.teamIdIn
  },
  set(val) {
    store.filters.teamIdIn = val
  }
})

const deviceIdIn = computed({
  get() {
    return store.filters.deviceIdIn
  },
  set(val) {
    store.filters.deviceIdIn = val
  }
})

const siteIdIn = computed({
  get() {
    return store.filters.siteIdIn
  },
  set(val) {
    store.filters.siteIdIn = val
  }
})

const dateRange = computed({
  get() {
    return this.getDateRange;
  },
  set(value) {
    this.setDateRange(value);
  },
})



onMounted(() => {
  store.fetchFiltersAvailable()
})


const value = ref("")

const options = [
  {
    value: "Option1",
    label: "Option1",
  },
  {
    value: "Option2",
    label: "Option2",
  },
  {
    value: "Option3",
    label: "Option3",
  },
  {
    value: "Option4",
    label: "Option4",
  },
  {
    value: "Option5",
    label: "Option5",
  },
]

const submitHandler = () => {
  console.log('Submit Filters Form!')
}
</script>

<style lang="scss" scoped>
@use "../styles/index.scss";
</style>