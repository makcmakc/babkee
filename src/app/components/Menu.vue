<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu"
    :mode="menuMode"
    :ellipsis="false"
  >

    <el-menu-item index="1">
      <router-link to="/">Overview</router-link>
    </el-menu-item>
    <!-- <el-menu-item index="3">
      <router-link to="/adgroup">AdGroup Report</router-link>
    </el-menu-item> -->
    <el-menu-item index="6">
      <router-link to="/users">Users</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/login">Login</router-link>
    </el-menu-item>
    <!-- <el-sub-menu index="2">
      <template #title>Reports</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="4">
      <template #title>Tools</template>
      <el-menu-item index="4-1">item one</el-menu-item>
      <el-menu-item index="4-2">item two</el-menu-item>
      <el-menu-item index="4-3">item three</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="5">
      <template #title>Management</template>
      <el-menu-item index="5-1">item one</el-menu-item>
      <el-menu-item index="5-2">item two</el-menu-item>
      <el-menu-item index="5-3">item three</el-menu-item>
    </el-sub-menu> -->
  </el-menu>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}

const isMobile = false


const menuMode = computed(() => (isMobile) ? 'vertical' : 'horizontal')

</script>

<style lang="scss" scoped>
.el-menu {

  @media(max-width: 480px) {
    display: none;
  }  
}


.el-menu .el-menu-item {
  padding-bottom: 1px;
}
</style>
