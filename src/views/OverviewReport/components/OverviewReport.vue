<template>
  <div class="mt-2">

    <div class="filters-form p-2">
      <FiltersForm />

      <div class="filters-form__bottom">
        <columns-selector />
      </div>
    </div>

    <ReportTable />

    <OverviewReportGraphs />
  </div>
</template>

<script setup>
import FiltersForm from "./FiltersForm.vue"
import ReportTable from "./ReportTable.vue"
import OverviewReportGraphs from "./OverviewReportGraphs.vue"
import ColumnsSelector from "./ColumnsSelector.vue"


</script>

<style lang="scss">
@use "../styles/index.scss";
</style>
