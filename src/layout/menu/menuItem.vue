// 
<template>
  <el-menu-item :index="route.path">
    <template #title>
      <el-icon><Location /></el-icon>
      <span>{{ t(`menu.${route.meta.title}`) }}</span>
    </template>
  </el-menu-item>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
export default defineComponent({
  name: 'MenuItem',
  props: {
    route: {
      type: Object,
      default: () => {}
    }
  },
  setup() {
    const { t } = useI18n()
    return {
      t
    }

  }
})

</script>

<style lang='scss' scoped>

</style>