<template>
  <div class="p-2 mt-2 bg-white rounded">
    <div
      class="el-table__header flex justify-between items-center rounded-t-sm border-l-1 border-r-1 border-t-1 pl-3 pr-3 pt-2 pb-1 rounded-t-md flex justify-between items-center"
    >
      <div class="el-table__title font-semibold pb-2 text-base">Users</div>

      <div class="flex items-center justify-end">
        <div style="height: 1.6rem" class="cursor-pointer">
          <el-icon><RefreshRight /></el-icon>
        </div>
        <div class="h-5 ml-4">
          <el-dropdown trigger="click" @command="handleSize">
            <span class="el-dropdown-link flex items-center">
              <svg
                focusable="false"
                class="cursor-pointer"
                data-icon="column-height"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
                viewBox="64 64 896 896"
              >
                <path
                  d="M840 836H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm0-724H184c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h656c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zM610.8 378c6 0 9.4-7 5.7-11.7L515.7 238.7a7.14 7.14 0 00-11.3 0L403.6 366.3a7.23 7.23 0 005.7 11.7H476v268h-62.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V378h62.8z"
                ></path>
              </svg>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="large">Large</el-dropdown-item>
                <el-dropdown-item command="default">Default</el-dropdown-item>
                <el-dropdown-item command="small">Small</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div style="height: 1.6rem" class="cursor-pointer ml-4">
          <el-icon><Setting /></el-icon>
        </div>
      </div>
    </div>

    <el-table
      :size="tableSize"
      :data="store.users"
      border
      style="width: 100%"
      v-loading="store.loading">
      <el-table-column type="index" />
      <el-table-column label="Email" prop="email" />
      <el-table-column label="Roles" prop="roles" />
      <el-table-column label="Created" prop="created" />
      <el-table-column label="Updated" prop="updated" />
      <el-table-column label="Actions" width="150">
        <template #default="scope">
          <el-button
            size="small"
            type="primary"
            @click="handleEdit(scope.row)"
            >Edit</el-button
          >
          <el-popconfirm
            title="Are you sure to delete this?"
            @confirm="handleDelete(scope.$index, scope.row)"
          >
            <template #reference>
              <el-button size="small" type="danger">Delete</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
  </div>

  <EditUser :isOpen="dialogVisible" />

  <div text-right pr-2 mt-2>
    <el-button type="success" @click="handleOpen()">
      Create User
    </el-button>
  </div>
</template>


<script setup>
import EditUser from './EditUser.vue'
import {
  Refresh,
  Setting,
  RefreshRight,
  ScaleToOriginal,
} from "@element-plus/icons-vue"
import { onMounted, ref } from "vue"
import { useUsersStore } from '../store/index'


let dialogVisible = ref(false)


const store = useUsersStore()

const handleEdit = (e) => {
  // console.log(e)
  dialogVisible = true
}

const handleOpen = (e) => {
  // console.log(e)
  dialogVisible = true
}


onMounted(async () => {
  await store.fetchReport()
})



</script>

<style scoped>
.el-table__header {
  background: #f5f7fa;
}
</style>