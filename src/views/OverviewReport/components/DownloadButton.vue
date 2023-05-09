<template>
  <div class="download">
    <el-button
      type="success"
      @click="downloadHandler"
    >Download .xlsx
    </el-button>
  </div> 
</template>

<script setup>
import XLSX from 'xlsx'

const loading = false

const downloadHandler = async () => {
  try {
    let response = await this.sendQuery(this.getState);
    const responseData = response.data.data.overviewReport;
    const groupingColumn = responseData.groupingColumn;
    const columns = this.getColumns(groupingColumn);
    const report = this.prepareResponse(responseData, groupingColumn, columns);
    this.generateTable(report, columns);
  } catch (e) {
    throw e;
  } finally {
    loading = false
  }
}

const generateTable = (report, columns) => {
  if (report) {
    const book = XLSX.utils.book_new();
    const page = XLSX.utils.json_to_sheet(report, {skipHeader: true});
    page['!cols'] = this.getColumnsWidths(report, columns);
    XLSX.utils.book_append_sheet(book, page, 'Overview Report');
    XLSX.writeFile(book, this.fileName);
  }
}

</script>

<style>

</style>