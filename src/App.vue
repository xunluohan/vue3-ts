// 
<template>
  <!-- <Layout></Layout> -->
  <e-form
    :form="form"
    :formItem="formItem"
    @change="handleChange"
  ></e-form>
  <div>
  </div>
</template>

<script lang='ts' setup>
// import Layout from './layout/index.vue'

import { ref } from "vue";
// import {useI18n} from 'vue-i18n'

// const { t } = useI18n()

// import Layout from './layout/index.vue'
const form = ref({
  firstName: ''
})
const formItem = ref([])
const key = ref('1')
interface FormItem {
  lable?: string,
  key?: string,
  type?: string,
  defaultValue?: any,
  disabled?: boolean,
  options?: Array<any>,
  layout?: {
    span?: number,
    offset?: number,
    push?: number,
    pull?: number,
  },
  placeholder?: string,
  attrs?: {
    [propName: string]: any
  },
  rules?: []
}
formItem.value = [
  { label: 'firstName', key: 'firstName', type: 'input', 
    layout: { span: 12 }
  },
  { label: 'firstName1', key: 'firstName1', type: 'input', 
    layout: { span: 12 }, defaultValue: '122'
  },
]

const handleChange = (formData: object) => {
  Object.assign(form.value, formData)
}

</script>

<style lang='scss' scoped>

</style>