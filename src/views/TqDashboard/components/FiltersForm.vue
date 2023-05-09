<template>
  <el-form class="lg:flex-nowrap flex-wrap flex mb-4 mt-4 p-2 rounded flex gap-2" :inline="false" :label-position="'top'">
    <el-form-item label="Teams">
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

    <el-form-item label="Devices">
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

    <el-form-item label="Markets">
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
    
    <el-form-item label="Date">
      <el-date-picker
        v-model="value2"
        type="daterange"
        unlink-panels
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
        :shortcuts="shortcuts"
        size="large"
      />
    </el-form-item>    

    <el-form-item class="load-report-btn flex-none  <xs:mt-2 lg:flex-1 items-end">
      <el-button type="success" class="<xs:w-full" size="large" @click="submitHandler">
        <span class="font-semibold">Load Report </span><el-icon class="ml-2"><Refresh class="text-white" /></el-icon>
      </el-button>
    </el-form-item>
  </el-form>
</template>


<script setup>
import { ref } from "vue"
import { Refresh } from '@element-plus/icons-vue'


const value = ref("")
const value1 = ref("")



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
// @use "../styles/index.scss";
.el-form-item{
  position: relative;
  flex-grow: 0;
  margin-bottom: 3px;
  display: flex;
  flex-direction: column;
  width: 100%;
  // width: calc(20% - 0.5rem);

  @media(max-width: 1080px){
    flex-grow: 1;
    width: calc(50% - 1rem);
  }

  @media(max-width: 768px){
    width: calc(100% - 1rem);
  }
}// el-form-item

.el-form {
  align-items: flex-end;
}

.el-form-item .el-form-item__label {
  max-width: max-content;
  padding: 0;
  line-height: 1;
}


.load-report-btn {

  .el-form-item__content {
    @media(max-width: 480px) {
      width: 100%;
    }
  }
}

.el-form--inline .el-form-item {
  margin: 0;
}

.el-form--default.el-form--label-top .el-form-item .el-form-item__label {
  margin-bottom: 3px;
}

.el-select {
  width: 100%;
}
</style>