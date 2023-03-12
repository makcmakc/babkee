<template>
  <div>
    <el-icon @click="searchVisible = true" class="cursor-pointer"><search /></el-icon>

    <el-dialog v-model="searchVisible" width="40%" custom-class="app-search">
      <el-form>
        <el-input
          size="large"
          :prefix-icon="Search"
          v-model="search"
          clearable
          placeholder="Search..."
        ></el-input>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'

export default {
  components: {
    Search,
  },
  setup() {
    const searchVisible = ref(false)
    const search = ref('')

    return {
      searchVisible,
      search,
      Search
    }
  },
}
</script>

<style lang="scss">
.app-search {
  .el-dialog__header {
    display: none;
  }

  .el-dialog__body {
    padding: 0;
  }

  .el-input__inner {
    height: 60px;
    line-height: 60px;
    padding-left: 45px;
    width: 100%;

    &:focus {
      border-color: transparent;
    }
  }
}
</style>
