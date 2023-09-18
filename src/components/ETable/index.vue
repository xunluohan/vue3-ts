// el-table 二次封装
<template>
  <div ref="tableContainer" class="table-container">
    <el-table
      ref="el-table"
      :data="tableData"
      :header-cell-style="{ background: '#ecf0f7' }"
      :height="tableHeight"
      style="width: 100%"
      class="el-table"
      v-bind="$attrs"
    >
      <el-table-column
        v-for="(item, index) in column"
        :key="index"
        :prop="item.prop || null"
        :type="item.type"
        :fixed="item.fixed"
        :label="item.label ? t(item.label) : null"
        :align="item.align"
        :width="item.width"
        v-bind="item.attrs"
      >
      <template v-if="!item.type" #header="{ $index, row }">
        <slot v-if="item.heanderSlot" :name="item.heanderSlot" :row="row" :index="$index" :key="item.prop" :tableData="tableData"></slot>
        <el-tooltip
          v-else
          class="box-item"
          effect="dark"
          :hide-after="0"
          :enterable="false"
          :content="item.label ? t(item.label) : null"
          placement="top"
          >
          <div style="width: 100%" class="one-line-ellipsis">
            {{ item.label ? t(item.label) : null }}
          </div>
        </el-tooltip>
      </template>
      <template v-if="!item.type" #default="{ $index, row }">
        <slot :name="item.prop" :row="row" :index="$index" :key="item.prop">{{ row[item.prop] }}</slot>
      </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination
      v-show="showPagination"
      :current-page="currentPage"
      :page-size="pageSize"
      :page-sizes="pageSizes"
      :layout="layout"
      :total="total"
      @size-change="(value: number) => $emit('handleSizeChange', value)"
      @current-change="(value: number) => $emit('handleCurrentChange', value)"
    >
      <span>{{ currentPage }}</span>
    </el-pagination>
  </div>
</template>

<script lang='ts' setup>
import type { Column } from '@/components/interface'
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t }  = useI18n()

interface Props {
  tableData: object[],
  column: Column[],
  showPagination?: boolean,
  currentPage?: number,
  pageSize?: number,
  pageSizes?: number[],
  layout?: string,
  total?: number,
  paginationAttr?: {
    [propName: string]: any
  } 
}

const props = withDefaults(defineProps<Props>(), {
  showPagination: true,
  currentPage: 1,
  pageSize: 10,
  pageSizes: () => [10, 20, 30, 40, 50, 100],
  total: 0,
  layout: 'prev, pager, next, jumper, ->, total'
})

const emit = defineEmits(['handleSizeChange', 'handleCurrentChange'])

const tableContainer = ref<object>()
const tableHeight = ref<string | number>()
onMounted(() => {
  // @ts-ignore
  tableHeight.value = tableContainer.value.clientHeight - 32 - 20
})


</script>
<script lang='ts'>
export default {
  name: 'ETable',
}
</script>

<style lang='scss' scoped>
.table-container{
  height: 100%;
  .el-table{
    margin-bottom: 20px;
  }
}
</style>