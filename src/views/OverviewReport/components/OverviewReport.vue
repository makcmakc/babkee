<template>
  <div class="mt-2">
    <FiltersForm />

    <ReportTable />

    <OverviewReportGraphs />
  </div>
</template>

<script>
import FiltersForm from "./FiltersForm.vue"
import ReportTable from "./ReportTable.vue"
import OverviewReportGraphs from "./OverviewReportGraphs.vue"

export default {
  name: 'OverviewReport',
  components: {
    FiltersForm,
    ReportTable,
    OverviewReportGraphs
  }
}

</script>

<style lang="scss">
@use "../styles/index.scss";
</style>
