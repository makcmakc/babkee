<template>
    <el-popover
    placement="bottom"
    title="Title"
    :width="200"
    trigger="click"
    content="this is content, this is content, this is content"
    popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
  >
    <template #reference>
      <el-icon class="cursor-pointer" size="22px"><Notification /></el-icon>
    </template>
  </el-popover>
</template>

<script setup>
import { Notification } from '@element-plus/icons-vue'


import { ref } from 'vue'

const visible = ref(false)

</script>

<style>

</style>