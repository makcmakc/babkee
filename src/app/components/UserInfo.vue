<template>

    <el-popover
      :width="300"
      trigger="click"
      popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
    >
      <template #reference>
        <el-avatar src="https://i.ytimg.com/vi/GP9nfdpJ-As/maxresdefault.jpg" />
      </template>
      <template #default>
        <div
          class="demo-rich-conent"
          style="display: flex; gap: 16px; flex-direction: column"
        >
          <el-avatar
            :size="60"
            src="https://i.ytimg.com/vi/GP9nfdpJ-As/maxresdefault.jpg"
            style="margin-bottom: 8px"
          />
          <div>
            <p
              class="demo-rich-content__name"
              style="margin: 0; font-weight: 500"
            >
              Element Plus
            </p>
            <p
              class="demo-rich-content__mention"
              style="margin: 0; font-size: 14px; color: var(--el-color-info)"
            >
              @element-plus
            </p>
          </div>

          <p class="demo-rich-content__desc" style="margin: 0">
            Element Plus, a Vue 3 based component library for developers,
            designers and product managers
          </p>
        </div>
      </template>
    </el-popover>  
</template>

<script setup>
import { ArrowDown, Avatar, House } from '@element-plus/icons-vue'

const name = 'Max Teleshev'
</script>

<style>

</style>