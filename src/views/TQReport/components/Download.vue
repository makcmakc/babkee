<template>
  <div class="download">

    <el-button
      class="download__btn"
      size="mini"
      type="primary"
      element-loading-spinner="el-icon-loading"
      v-loading="loading"
      @click="handleClick"
    >
      Download .xlsx
    </el-button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>