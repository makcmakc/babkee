<template>
  <main class="relative w-full px-0" style="height: 100vh">
    <div class="flex items-center absolute right-4 top-4"></div>

      <div class=" relative h-full mx-auto">
      <div class="flex h-full mx-auto">

        <div class="hidden __left min-h-full xl:flex xl:flex-col xl:w-6/12">
          <!-- <AppLogo class="-enter-x" /> -->
              
          <div class="my-auto flex flex-col items-center">
            <div>
              <img
                src="@/assets/svgs/login-box-bg.svg"
                class="w-2/2 -mt-16 -enter-x"
              />
              <div class="font-medium text-white -enter-x">
                <span class="inline-block mt-4 text-3xl"
                  >Welcome to the system</span
                >
              </div>
              <div
                class="mt-3 font-normal text-white dark:text-gray-500 -enter-x"
              >
                Backstage management system
              </div>
            </div>
          </div>
        </div>

        <div class="flex __right h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12">
          <div
            class="
              relative
              px-5
              py-8
              mx-auto
              my-auto
              rounded-md
              shadow-md
              border
              border-gray-600
              sm:px-8
              xl:p-8
              xl:shadow-none
              sm:w-3/4
              lg:w-2/4
              xl:max-w-xl
              xl:w-2/4
              w-full
              enter-x
            "
            >
            <h2 text-2xl mb-4 font-bold text-white text-center>Sign In</h2>

            <login-form />

            <login-with />
          </div>
        </div>
        
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import LoginForm from "./LoginForm.vue";
import LoginWith from "./LoginWith.vue";

const username = ref()
const password = ref()

</script>

<style lang="scss">
.__left {
  // background-image: url("@/assets/svgs/login-bg.svg");
  // background-position: center;
  // background-repeat: no-repeat;
  background-color: #353e54;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    // background-image: url("@/assets/svgs/login-bg.svg");
    background-position: center;
    background-repeat: no-repeat;
    content: "";
  }
}

.__right {
  background-color: #293146;
}

main {
  height: calc(100vh - 60px);
}

.el-form-item__label {
  color: #fff;
}

.el-checkbox__label {
  color: #fff;
}

.el-input__wrapper {
  background: transparent !important;
}
</style>