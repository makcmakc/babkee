<template>
  <el-popover
    placement="bottom"
    trigger="click"
    popper-class="columns-select-popover"
    v-model="popoverVisible"
    class="columns-selector"
    width="280px"
  >
    <el-checkbox-group
      v-model="selectedColumns"
      class="checkbox-group"
      @change="handleCheckChange"
    >
      <el-checkbox
        v-for="item in availableColumns"
        :key="item"
        size="large"
        :label="item"
        class="checkbox"
        >{{ item }}
      </el-checkbox>
    </el-checkbox-group>

    <div class="columns-selector__footer">
      <el-checkbox
        :indeterminate="isIndeterminate"
        v-model="checkAll"
        @change="handleCheckAllChange"
        class="check-all"
        >Check all</el-checkbox
      >
      <el-button type="primary">Apply</el-button>
    </div>

    <template #reference>
      <el-icon><Setting /></el-icon>
    </template>
  </el-popover>
</template>

<script setup>
import { Setting } from "@element-plus/icons-vue"
import { computed, onMounted, ref } from "vue"
import { useOverviewReportStore } from "../store/index"

let isIndeterminate = ref(true)
let checkAll = ref(null)
let selectedColumns = ref(["CPC", "RPS"])

const popoverVisible = ref(null)

const store = useOverviewReportStore()

const availableColumns = computed(() => {
  return Object.keys(store.getVisibleColumns).filter(item => item !== true)
})

const visibleColumns = computed(() => {
  return Object.keys(store.getVisibleColumns).filter(
    key => store.getVisibleColumns[key] === true
  )
})

const handleCheckAllChange = val => {
  selectedColumns = val ? visibleColumns : ["CPC", "RPS"]
  isIndeterminate = false

  console.log("VAL ", selectedColumns)
}

const handleCheckChange = value => {
  // isIndeterminate = value.length > 0 && value.length < availableColumns.length
  console.log(value)

  checkAll =
    value.length === availableColumns.length
      ? false
      : value.length === 0
      ? true
      : checkAll
}
</script>


<style lang="scss" scoped>
.columns-selector {
  &__footer {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    border-top: 1px solid #dcdfe6;
  }
}

:deep() {
  .checkbox,
  .check-all {
    // display: block;
    // margin-bottom: 0.5em;
    text-transform: capitalize;

    .el-checkbox__label {
      font-size: 14px;
    }
  }
}

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5em;
  padding-top: 0.5em;
  border-top: 1px solid #dcdfe6;
}

.checkbox-group {
  column-count: 2;
}
</style>