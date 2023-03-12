<template>
  <el-tooltip effect="dark" :content="getTitle" placement="bottom">
    <el-icon @click="toggle" class="cursor-pointer"><full-screen /></el-icon>
  </el-tooltip>
</template>

<script>
import { FullScreen } from '@element-plus/icons-vue'

import { useFullscreen } from '@vueuse/core'
import { computed, unref } from 'vue'
export default {
  components: {
    FullScreen,
  },
  setup() {
    const { toggle, isFullscreen } = useFullscreen()
    const getTitle = computed(() => {
      return unref(isFullscreen) ? 'Exit Full Screen' : 'Full Screen'
    })
    return {
      getTitle,
      isFullscreen,
      toggle,
    }
  },
}
</script>

<style>
.app-fullscreen {
  cursor: pointer;
}
</style>
