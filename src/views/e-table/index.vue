// 表格
<template>
  <!-- 123 -->
  <e-table
    :tableData="tableData"
    :column="column"
    :total="1000"
    class="table"
    @handleSizeChange="handleSizeChange"
    @handleCurrentChange="handleCurrentChange"
  >
  </e-table>
</template>

<script lang='ts' setup>
import { reactive, ref } from 'vue';
import type { Column } from '@/components/interface'


const tableData = ref([
  {name: '123'},
])
const column = ref<Column[]>([
  {
    type: 'index', width: '100',label: 'e-table.index'
  },
  {
    type: 'selection', width: '100',label: 'e-table.index'
  },
  {
    type: 'expand', width: '100',label: 'e-table.index'
  },
  {
    label: 'e-table.name', prop: 'name',width: '100px', align: 'center'
  }
])

const handleSizeChange = (value: number) => {
  console.log(value)
}
const handleCurrentChange = (value: number) => {
  console.log(value)
}

</script>

<style lang='scss' scoped>
// .table{
//   height: 300px;
// }
</style>