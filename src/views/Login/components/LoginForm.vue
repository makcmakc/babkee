<template>
  <h2 class="text-2xl mb-4 font-bold text-white text-center">Sign In</h2>
  <el-form label-position="top" label-width="100px">
    <el-form-item label="Email">
      <el-input v-model="email" placeholder="Please input email" />
    </el-form-item>
    <el-form-item label="Password">
      <el-input
        v-model="password"
        placeholder="Please input password"
        type="password"
      />
    </el-form-item>
    <div class="flex justify-between items-center mb-8">
      <el-checkbox label="Remember Me" name="type" />
      <el-link type="primary" :underline="false"> Forgot password </el-link>
    </div>
    <el-form-item class="w-full">
      <el-button type="primary" class="font-600 w-full" @click="submitHandler">Sign In</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref } from "vue"
import { useAuthStore } from "../store"
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref(null)

const store = useAuthStore()
const router = useRouter()

const submitHandler = async () => {
  try {
    await store.login({
      email: email.value,
      password: password.value
    })
    router.push("/")
  } catch (err) {
    error.value = err.message
    console.log(err)
  }
}
</script>

<style lang="scss">
.el-form-item {
  .el-input__inner {
    color: #fff !important;

    &::placeholder {
      color: #fff !important;
    }
  }
}
</style>