<template>
    <el-dialog
    v-model="open" 
    title="New User"
    width="50%"
  >
    <el-form
      label-width="120px"
      label-position="top"
      class="demo-ruleForm"
      :size="formSize"
    >
      <el-form-item label="Name" prop="name">
        <el-input v-model="name"></el-input>
      </el-form-item>

      <el-form-item label="Email" prop="email">
        <el-input v-model="email"></el-input>
      </el-form-item>

      <el-form-item label="Roles" prop="roles">
        <el-checkbox-group v-model="checkboxGroup2">
          <el-checkbox-button v-for="(role, idx) in roles" :key="idx" :label="idx">
            {{ role }}
          </el-checkbox-button>
        </el-checkbox-group>
      </el-form-item>

      <div text-right border-t-1 pt-4 mt-6>
        <el-button type="primary" @click="submitForm(ruleFormRef)"
          >Create</el-button
        >
        <el-button plain @click="resetForm(ruleFormRef)">Reset</el-button>
      </div>
    </el-form>
  </el-dialog>
</template>

<script setup>
import { ref, toRefs } from "vue"
import { useUsersStore } from '../store/index'

const dialogVisible = ref(false)

const store = useUsersStore()
const name = ref()
const email = ref()
const roles = store.roles

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: true
  }
});

const { open } = toRefs(props);




</script>

<style>

</style>