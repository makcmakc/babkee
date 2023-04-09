<template>
  <el-icon @click="drawer = true" class="cursor-pointer">
    <setting />
  </el-icon>

  <el-drawer v-model="drawer" size="365px" title="Configuration">
    <el-divider>
      <h6 class="configuration__title">Theme mode</h6>
    </el-divider>

    <div class="configuration__options flex mt-8">
      <!-- <el-switch
        v-model="value2"
        class="mt-2"
        style="--el-switch-on-color: #303133; --el-switch-off-color: #303133"
        inline-prompt
        :active-icon="Sunny"
        :inactive-icon="Moon"
      /> -->

      <el-radio-group v-model="theme">

        <!-- <el-tooltip content="Light Theme" placement="top"> -->
          <el-radio :label="1">
            <div class="theme-settings-block">
              <span
                role="img"
                aria-label="check"
                style="display: block"
                class="theme-settings-block-check"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="check"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                  style="--darkreader-inline-fill: currentColor"
                  data-darkreader-inline-fill
                >
                  <path
                    d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                  />
                </svg>
              </span>
            </div>
          </el-radio>
        <!-- </el-tooltip> -->

        <!-- <el-tooltip content="Dark Menu Theme" placement="top"> -->
          <el-radio :label="2">
            <div class="theme-settings-block theme-settings-block--dark-aside">
              <span
                role="img"
                aria-label="check"
                style="display: block"
                class="anticon anticon-check ant-pro-setting-drawer-block-checkbox-selectIcon"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="check"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                  style="--darkreader-inline-fill: currentColor"
                  data-darkreader-inline-fill
                >
                  <path
                    d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                  />
                </svg>
              </span>
            </div>
          </el-radio>
        <!-- </el-tooltip> -->

        <!-- <el-tooltip content="Dark Theme" placement="top"> -->
          <el-radio :label="3">
            <div class="theme-settings-block theme-settings-block--dark">
              <span
                role="img"
                aria-label="check"
                style="display: none"
                class="anticon anticon-check ant-pro-setting-drawer-block-checkbox-selectIcon"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="check"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                  style="--darkreader-inline-fill: currentColor"
                  data-darkreader-inline-fill
                >
                  <path
                    d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                  />
                </svg>
              </span>
            </div>
          </el-radio>
        <!-- </el-tooltip> -->

      </el-radio-group>
    </div>

    <el-divider>
      <h6 class="configuration__title">Navigation mode</h6>
    </el-divider>

    <div class="configuration__options flex mt-8">
      <el-radio-group v-model="navigation">
        <!-- <el-tooltip content="Side Menu Layout" placement="top"> -->
          <el-radio :label="1">
            <div class="navigation-settings-block navigation-settings-block--aside">
              <span
                role="img"
                aria-label="check"
                style="display: block"
                class="navigation-settings-block-check"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="check"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                  style="--darkreader-inline-fill: currentColor"
                  data-darkreader-inline-fill
                >
                  <path
                    d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                  />
                </svg>
              </span>
            </div>
          </el-radio>
        <!-- </el-tooltip> -->
      
      <!-- <el-tooltip content="Top Menu Layout" placement="top"> -->
        <el-radio :label="2">
          <div class="navigation-settings-block navigation-settings-block--top">
            <span
              role="img"
              aria-label="check"
              style="display: block"
              class="anticon anticon-check ant-pro-setting-drawer-block-checkbox-selectIcon"
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="check"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
                style="--darkreader-inline-fill: currentColor"
                data-darkreader-inline-fill
              >
                <path
                  d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                />
              </svg>
            </span>
          </div>
        </el-radio>
      <!-- </el-tooltip> -->

      <!-- <el-tooltip content="Mix Menu Layout" placement="top"> -->
        <el-radio :label="3">
          <div class="navigation-settings-block navigation-settings-block--mix">
            <span
              role="img"
              aria-label="check"
              style="display: none"
              class="anticon anticon-check ant-pro-setting-drawer-block-checkbox-selectIcon"
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="check"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
                style="--darkreader-inline-fill: currentColor"
                data-darkreader-inline-fill
              >
                <path
                  d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
                />
              </svg>
            </span>
          </div>
        </el-radio>
      <!-- </el-tooltip> -->
      </el-radio-group>
    </div>

    <el-divider>
      <h6 class="configuration__title">Interface function</h6>
    </el-divider>

    <div class="configuration__options mt-8">
      <ul class="configuration__list">
        <li class="flex justify-between">
          <span class="text-base">Logo</span>
          <el-switch v-model="value1" />
        </li>
        <li class="flex justify-between">
          <span class="text-base">Collapse menu</span>
          <el-switch v-model="value1" />
        </li>
        <li class="flex justify-between">
          <span class="text-base">Gray mode</span>
          <el-switch v-model="value1" />
        </li>
        <li class="flex justify-between">
          <span class="text-base">Content area width</span>
          <el-select v-model="value" class="m-2" placeholder="Select" size="small">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </li>
      </ul>
    </div>

    <el-divider>
      <h6 class="configuration__title">Animation</h6>
    </el-divider>

    <template #footer>
      <div class="flex flex-col">
        <el-button class="w-full m-0" type="warning">Reset</el-button>
        <el-button class="w-full m-0" type="primary">Clear cache and to the Login page</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { Setting, Moon, Sunny } from '@element-plus/icons-vue'

const drawer = ref(false)
const value1 = ref(false)
const theme = ref(false)
const navigation = ref(false)
const value2 = ref(true)


</script>

<style lang="scss" scoped>
.el-button + .el-button {
  margin: 10px 0 0 0 !important;
}

.theme-settings-block,
.navigation-settings-block {
  position: relative;
  width: 44px;
  height: 36px;
  margin-right: 16px;
  overflow: hidden;
  background-color: #f0f2f5;
  border-radius: 4px;
  box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.18);
  cursor: pointer;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 25%;
    background-color: #fff;
    content: "";
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 33%;
    height: 100%;
    background-color: #fff;
    content: "";
  }
}

.theme-settings-block--dark-aside {
  &::before {
    z-index: 1;
    background-color: #001529;
    content: "";
  }
}

.navigation-settings-block--aside {
    &::before {
    z-index: 1;
    background-color: #001529;
    content: "";
  }
}
.navigation-settings-block--top {
  &::before {
    background-color: #f0f2f5;
    content: "";
  }

  &::after {
    background: #001529;
  }
}
.navigation-settings-block--mix {
  &::before {
    background-color: #fff;
    content: "";
  }

  &::after {
    background: #001529;
  }
}
.theme-settings-block--dark {
  background-color: rgba(0, 21, 41, 0.85);

  &::before {
    background-color: rgba(0, 21, 41, 0.65);
    content: "";
  }

  &::after {
    background-color: rgba(0, 21, 41, 0.85);
  }
}
</style>
