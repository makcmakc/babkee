<template>
  <!-- <component :is="layout">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </component> -->

    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
</template>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>


<script>
const defaultLayout = "layout-not-connected"
import LayoutDefault from "./LayoutDefault.vue"
import LayoutEmpty from "./LayoutDefault.vue"

export default {
  components: {
    LayoutDefault,
    LayoutEmpty,
  },
  computed: {
    layout() {
      console.log(this.$route.meta.layout)
      return this.$route.meta.layout || LayoutDefault
    },
  },
}
</script>