<template>
  <el-form class="lg:flex-nowrap flex-wrap flex mb-0 p-2 bg-white rounded flex gap-2" :inline="false" :label-position="'top'">

    <el-form-item label="Partner" :size="'large'">
      <el-select
        v-model="value"
        multiple
        clearable
        placeholder="All partners"
        collapse-tags
        size="large">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="Source">
      <el-select
        v-model="value"
        multiple
        clearable
        placeholder="All sources"
        collapse-tags
        size="large">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="Websites">
      <el-select
        v-model="value"
        multiple
        clearable
        placeholder="All websites"
        collapse-tags
        size="large">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="Device">
      <el-select
        v-model="value"
        multiple
        clearable
        placeholder="All devices"
        collapse-tags
        size="large">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="Market">
      <el-select
        v-model="value"
        multiple
        clearable
        placeholder="All markets"
        collapse-tags
        size="large">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="Buyer">
      <el-select
        v-model="value"
        multiple
        clearable
        placeholder="All buyers"
        collapse-tags
        size="large">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    
    <el-form-item label="User Teams">
      <el-select
        v-model="value"
        multiple
        clearable
        placeholder="All teams"
        collapse-tags
        size="large">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>    

    <el-form-item label="&nbsp;" class="load-report-btn flex-none lg:flex-1 items-end lg:mt-0 -mt-4">
      <el-button type="success" size="large" @click="submitHandler">
        <span class="font-semibold">Load Report </span><el-icon class="ml-2"><Refresh class="text-white" /></el-icon>
      </el-button>
    </el-form-item>
  </el-form>
</template>


<script setup>
import { ref } from "vue"
import { Refresh } from '@element-plus/icons-vue'


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