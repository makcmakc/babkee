<template>
  <template v-if="getShow">

  </template>
</template>

<script setup>
import { unref } from "vue";


  const { handleBackLogin, getLoginState } = useLoginState();
  const { getFormRules } = useFormRules();
  const formRef = ref();
  const loading = ref(false);

  const getShow = computed(() => unref(getLoginState) === LoginStateEnum.RESET_PASSWORD);
</script>

<style>

</style>