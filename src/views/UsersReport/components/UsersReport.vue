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

    <el-table :size="tableSize" :data="tableData" border style="width: 100%">
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
            @click="handleEdit(scope.$index, scope.row)"
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

  <div class="m-4">
    <h1>Bitcoin Price Index</h1>

    <section v-if="errored">
      <p>
        We're sorry, we're not able to retrieve this information at the moment,
        please try back later
      </p>
    </section>

    <section v-else>
      <div v-if="loading">Loading...</div>

      <div v-else>
        <div v-for="currency in info" :key="currency" class="currency">
          {{ currency.description }}:
          <span class="lighten">
            {{ currency.rate_float }} {{ currencydecimal }}
          </span>
        </div>

        {{ fire }}
      </div>
    </section>
  </div>

  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm mr-4 mt-5 w-1/3"
    :size="formSize"
    status-icon
  >
    <el-form-item label="First name" prop="name">
      <el-input v-model="firstName" />
    </el-form-item>
    <el-form-item label="Last Name" prop="name">
      <el-input v-model="lastName" />
    </el-form-item>

    <el-form-item>
      <el-button @click="submitHandler">Submit</el-button>
    </el-form-item>
  </el-form>

  <el-dialog
    v-model="dialogVisible"
    title="New User"
    width="50%"
    :before-close="handleClose"
  >
    <el-form
      label-width="120px"
      label-position="top"
      class="demo-ruleForm"
      :size="formSize"
    >
      <el-form-item label="Name" prop="name">
        <el-input></el-input>
      </el-form-item>

      <el-form-item label="Surname" prop="name">
        <el-input></el-input>
      </el-form-item>

      <el-form-item label="Editor" prop="name">
        <el-input></el-input>
      </el-form-item>

      <el-form-item label="Email" prop="name">
        <el-input></el-input>
      </el-form-item>

      <el-form-item label="Password" prop="name">
        <el-input></el-input>
      </el-form-item>

      <el-form-item label="Role" prop="resource">
        <el-radio-group v-model="radio1" size="default">
          <el-radio-button label="Admin"></el-radio-button>
          <el-radio-button label="User"></el-radio-button>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="Description" prop="desc">
        <el-input type="textarea"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >Create</el-button
        >
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>


<script setup>
import {
  Refresh,
  Setting,
  RefreshRight,
  ScaleToOriginal,
} from "@element-plus/icons-vue"
import { ref } from "vue"
import axios from "axios"

const handleEdit = (index, row) => {
  console.log(index, row)
}
const handleDelete = (index, row) => {
  console.log(index, row)
}

const handleClose = (index, row) => {
  console.log(index, row)
}

const firstName = ref()
const lastName = ref()

let info = ref(null)

const submitHandler = () => {
  axios
    .get("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((response) => (info = response.data.bpi))
}

const dialogVisible = ref(false)

let tableSize = ref("")

const handleSize = (command) => {
  tableSize = command
  console.log(tableSize)
}

const tableData = [
  {
    email: "admin@site.com",
    roles: ["ROLE_ADMIN", "ROLE_USER"],
    name: "",
    surname: "",
    image:
      "https://www.talonx.com/wp-content/uploads/2014/06/Photography-Web-Design.jpg",
    description: "",
    editor: "draft",
    created: "2016-05-01",
    updated: "2016-05-01",
  },
  {
    email: "editor@site.com",
    roles: ["ROLE_USER"],
    name: "",
    surname: "",
    image:
      "https://www.talonx.com/wp-content/uploads/2014/06/Photography-Web-Design.jpg",
    description: "",
    editor: "draft",
    created: "2016-05-01",
    updated: "2016-05-01",
  },
]
</script>

<style scoped>
.el-table__header {
  background: #f5f7fa;
}
</style>