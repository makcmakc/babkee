<template>
  <el-popover
    placement="bottom"
    trigger="click"
    popper-class="columns-select-popover"
    v-model="popoverVisible"
    class="columns-selector"
    width="240px"
  >

  <el-checkbox-group >
    <!-- v-model="selectedColumns" class="checkbox-group" @change="handleCheckChange" -->
    <!-- <template v-for="item in availableColumns">
      <el-checkbox :label="item" :key="item" class="checkbox" :disabled="item === 'adgroup'">{{formatName(item)}}</el-checkbox>
    </template> -->
    <el-checkbox v-model="checked1" label="Option 1" size="large" />
    <el-checkbox v-model="checked2" label="Option 2" size="large" />
  </el-checkbox-group>
<!-- :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" -->

  <div class="columns-selector__footer">
    <el-checkbox  class="check-all">Check all</el-checkbox>
    <el-button type="primary">Apply</el-button>
  </div>

    <template #reference>
      <el-icon><Setting /></el-icon>
    </template>

  </el-popover>
</template>

<script setup>
import { Setting } from '@element-plus/icons-vue'
import { ref } from "vue"

const checked1 = ref(null)
const checked2 = ref(null)

const popoverVisible = ref(null)

</script>


<style lang="scss" scoped>
.columns-selector {
  &__footer {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    border-top: 1px solid #ccc;
    margin-top: 20px;
  }
}
</style>