<template>
  <el-popover
    placement="bottom"
    trigger="click"
    popper-class="columns-select-popover"
    v-model="popoverVisible"
    @hide="handleCancel"
    class="columns-selector"
  >

  <el-checkbox-group v-model="selectedColumns" class="checkbox-group" @change="handleCheckChange">
    <!-- <template v-for="item in availableColumns">
      <el-checkbox :label="item" :key="item" class="checkbox" :disabled="item === 'adgroup'">{{formatName(item)}}</el-checkbox>
    </template> -->
    <el-checkbox v-model="checked1" label="Option 1" size="large" />
    <el-checkbox v-model="checked2" label="Option 2" size="large" />
  </el-checkbox-group>

  <div class="buttons">
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" class="check-all">Check all</el-checkbox>
    <el-button type="primary" size="normal" @click="handleSubmit">Apply</el-button>
  </div>

    <template #reference>
      <svg id="columns-icon" width="11" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0h3v10H0V0zm4 0h3v10H4V0zm7 0H8v10h3V0z" fill="currentColor" />
      </svg>
      Columns <i class="el-icon-arrow-down el-icon--right" />
    </template>

  </el-popover>
</template>

<script setup>
import { ref } from "vue"

const checked1 = ref(null)
const checked2 = ref(null)
</script>
