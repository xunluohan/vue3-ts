// 
<template>
  <e-form
    :form="form"
    :formItem="formItem"
    @change="handleChange"
  ></e-form>
  <div>
  </div>
</template>

<script lang='ts' setup>
import type { FormItem } from '@/components/interface.js'

import { ref } from "vue";
// import {useI18n} from 'vue-i18n'

// const { t } = useI18n()

// import Layout from './layout/index.vue'
const form = ref({
  firstName: ''
})
const formItem = ref<FormItem[]>([])
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