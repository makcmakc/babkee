<template>
  <div mt-2 flex flex-col>
    <FiltersForm />
    <ReportTable />
    <!-- <OverviewReportGraphs /> -->
  </div>
</template>

<script setup>
import FiltersForm from "./FiltersForm.vue"
import ReportTable from "./ReportTable.vue"
import OverviewReportGraphs from "./OverviewReportGraphs.vue"

</script>

<style lang="scss">
@use "../styles/index.scss";
</style>
