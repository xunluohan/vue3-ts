// el-form 二次封装
<template>
  <el-form
    ref="form"
    :inline="inline"
    :model="formData"
    :label-width="labelWidth"
    class="e-form"
    v-bind="$attrs"
  >
    <el-row>
      <el-col
        v-for="(item, index) in formItem"
        :key="item.key"
        v-bind="item.layout"
      >
        <el-form-item
          :label="t(item.label)"
          v-bind="item.attrs"
          :title="t(item.label)"
          :prop="item.key"
          :rules="item.rules"
        >
          <!-- 文本框 -->
          <el-input
            v-if="item.type === 'input'"
            v-model="formData[item.key]"
            :disabled="item.disabled"
            :placeholder="item.placeholder && t(item.placeholder)"
            @input="handleChange"
          />
          <!-- 数字文本框 -->
          <a-input-number
            v-if="item.type === 'inputNumber'"
            v-model="formData[item.key]"
            :min="item.min"
            :max="item.max"
            :disabled="item.disabled"
            :precision="item.precision"
            :placeholder="item.placeholder && t(item.placeholder)"
            @change="handleChange"
          />
          <!-- 下拉框 -->
          <el-select
            v-if="item.type === 'select'"
            v-model="formData[item.key]"
            clearable
            :disabled="item.disabled"
            :placeholder="item.placeholder && t(item.placeholder)"
            v-bind="item.attrs"
            filterable
            @change="handleChange"
          >
            <el-option
              v-for="optionItem in item.options"
              :key="optionItem.value"
              :label="optionItem.label"
              :value="optionItem.value"
            />
          </el-select>
          <span
            v-if="item.type === 'span'"
            class="form-sapn"
            :title="formData[item.key]"
            >{{ formData[item.key] }}</span
          >
          <!-- 单选框 -->
          <el-radio-group
            v-if="item.type === 'radio'"
            v-model="formData[item.key]"
          >
            <el-radio
              v-for="(radioItem, index) in item.options"
              :key="index"
              :label="radioItem.value"
              >{{ radioItem.label }}</el-radio
            >
          </el-radio-group>
          <!-- 多选框 -->
          <el-checkbox-group
            v-if="item.type === 'radio'"
            v-model="formData[item.key]"
          >
            <el-checkbox
              v-for="(checkboxItem, index) in item.options"
              :label="checkboxItem.label"
            />
          </el-checkbox-group>
          <!-- 日期 -->
          <el-date-picker
            v-if="item.type === 'date'"
            v-model="formData[item.key]"
            :type="item.dateType ?? 'date'"
            :placeholder="item.placeholder && item.placeholder"
            :size="item.size"
            :range-separator="t(item.attrs?.rangeSeparator)"
            :start-placeholder="t(item.attrs?.startPlaceholder)"
            :end-placeholder="t(item.attrs?.endPlaceholder)"
          />
          <slot :name="item.type" :data="formData" :item="item" />
        </el-form-item>
      </el-col>
      <slot name="button" :data="formData" />
    </el-row>
  </el-form>
</template>

<script lang="ts" setup>
import type { FormItem } from "@/components/interface.js";
import { ref, toRef, toRefs, watch } from "vue";
import { useI18n } from "vue-i18n";

defineOptions({
  name: "EForm",
});

const { t } = useI18n();

interface Props {
  form: object;
  formItem: Array<FormItem>;
  inline?: boolean;
  labelWidth?: string | Number;
  gutter?: number;
  justify?: string;
  align?: string;
  // tag?: string,
}

const props = withDefaults(defineProps<Props>(), {
  form: () => ({}),
  formItem: () => [],
  inline: false,
  labelWidth: "120px",
});

const emit = defineEmits(["change"]);

const form = ref();
// const formItem = toRef(props, 'formItem')
// // const formItem = toRef(() => props.formItem) // 3.3版本以上推荐
// console.log(formItem, 'props')
const rules = ref<{
  [propName: string]: any;
}>({});
const formData = ref<{
  [propName: string]: any;
}>({});
watch(
  () => props.form,
  (newValue) => {
    Object.assign(formData.value, newValue);
  },
  { immediate: true }
);
watch(
  () => props.formItem,
  (newValue) => {
    newValue.forEach((item) => {
      formData.value[item.key] = formData.value[item.key] ?? item.defaultValue;
      rules.value[item.key] = item.rules || [];
    });
  },
  { immediate: true }
);
// 抛出数据
const handleChange = () => {
  emit("change", formData.value);
};

// 表单验证
const validate = () => {
  return form.value.validate();
};

// 重置表单
const resetFields = () => {
  form.value.resetFields();
};

defineExpose({
  form,
  validate,
  resetFields,
});
</script>

<style lang="scss" scoped>
.e-form {
  width: 100%;
}
</style>
