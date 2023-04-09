<template>
  <el-header class="app-header">
    <header-logo />
    
    <div class="flex items-center gap-4">
      <Menu />
      <screen />
      <notifications />
      <user-info />
      <!-- <settings /> -->

    </div>
  </el-header>
</template>

<script setup>
import Menu from "./Menu.vue"
import HeaderLogo from "./HeaderLogo.vue"
import UserInfo from "./UserInfo.vue"
import Notifications from "./Notifications.vue"
import Screen from "./Screen.vue"
import Settings from "./Settings.vue"
</script>

<style scoped lang="scss">
.app-header {
  padding-right: 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0,0,0,.1);

  // height: 59px;


  @media(max-width: 480px) {
    padding-right: 10px;
  }

  &__buttons {
    display: flex;
  }
}

.el-menu--horizontal {
  border-bottom: none;
}

</style>