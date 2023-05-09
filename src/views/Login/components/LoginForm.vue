<template>
  <el-form label-position="top" label-width="100px">
    <el-form-item label="Email" style="width: 100%">
      <el-input v-model="email" placeholder="Please input email" />
    </el-form-item>
    <el-form-item label="Password" style="width: 100%">
      <el-input
        v-model="password"
        placeholder="Please input password"
        type="password"
      />
    </el-form-item>
    <div flex justify-between items-center mb-8>
      <el-checkbox label="Remember Me" name="type" />
      <el-link type="primary" :underline="false"> Forgot password </el-link>
    </div>
    <el-form-item w-full class="login-btn">
      <el-button type="primary" font-600 w-full @click="submitHandler">Sign In</el-button>
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
    const errorCode = error.code;
    const errorMessage = error.message;

  }
}
</script>

<style lang="scss">
.login-btn {
  width: 100% !important;
}

.el-form-item {
  .el-input__inner {
    color: #fff !important;

    &::placeholder {
      color: #fff !important;
    }
  }
}
</style>