// el-form 二次封装
<template>
  <el-form
    ref="form"
    :inline="inline"
    :model="form"
    :label-width="labelWidth"
    class="e-form"
    :rules="rules"
    v-bind="$attrs"
  >
    <el-row>
      <el-col
        v-for="(item,index) in formItem"
        :key="index"
        v-bind="item.layout"
      >
        <el-form-item
          :label="item.label"
          v-bind="item.attrs"
          :title="item.label"
          :prop="item.key"
        >
          <el-input
            v-if="item.type === 'input'"
            v-model="form[item.key]"
            :disabled="item.disabled"
            :placeholder="item.placeholder"
            @change="handleChange"
          />
          <a-input-number
            v-if="item.type === 'inputNumber'"
            v-model="form[item.key]"
            :min="item.min"
            :max="item.max"
            :disabled="item.disabled"
            :precision="item.precision"
            @change="handleChange"
          />
          <el-select
            v-if="item.type === 'select'"
            v-model="form[item.key]"
            clearable
            :disabled="item.disabled"
            :placeholder="item.placeholder"
            v-bind="item.attrs"
            filterable
            @change="handleChange"
          >
            <el-option
              v-for="optionItem in item.options"
              :key="optionItem[item.value] || optionItem.value"
              :label="optionItem[item.value] || optionItem.label"
              :value="optionItem[item.value] || optionItem.value"
            />
          </el-select>
          <span
            v-if="item.type === 'span'"
            class="form-sapn"
            :title="form[item.key]"
          >{{ form[item.key] }}</span>
          <el-radio-group
            v-if="item.type === 'radio'"
            v-model="form[item.key]"
          >
            <el-radio
              v-for="(radioItem, index) in item.options"
              :key="index"
              :label="radioItem.value"
            >{{ radioItem.label }}</el-radio>
          </el-radio-group>
          <slot
            :name="item.type"
            :data="form"
            :item="item"
          />
        </el-form-item>
      </el-col>
      <slot
        name="button"
        :data="form"
      />

    </el-row>
  </el-form>
</template>



<script lang='ts' setup>
import { ref, toRef, toRefs, watch } from 'vue'
// import { useI18n } from "vue-i18n";
// const {t} = useI18n()

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

interface Props {
  form: object,
  formItem: Array<FormItem>,
  inline?: boolean,
  labelWidth?: string | Number,
  gutter?: number,
  justify?: string,
  align?: string,
  // tag?: string,
}

const props = withDefaults(defineProps<Props>(), {
  form: () => ({}),
  formItem: () => [],
  inline: false,
  labelWidth: '120px',
})
// const formItem = toRef(props, 'formItem')
// // const formItem = toRef(() => props.formItem) // 3.3版本以上推荐
// console.log(formItem, 'props')
const rules = ref({})
const form = ref(props.form)
watch(() =>props.formItem,(newValue) => {
  newValue.forEach(item => {
    form.value[item.key]  = form.value[item.key] ?? item.defaultValue
    // form[item.key]  = form[item.key] ?? item.defaultValue
    rules.value[item.key] = item.rules || []
  })
  console.log(props,form, 'props.form')
},{immediate:true})

const emit = defineEmits(['change'])
console.log(emit, 'emit')

// 抛出数据
const handleChange = () => {
  emit('change', {})
}

</script>


<script lang='ts'>
export default {
  name: 'EForm',
}
</script>
<style lang='scss' scoped>
.e-form{
  width: 100%;
}
</style>