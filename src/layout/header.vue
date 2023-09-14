// 头部信息
<template>
  <div class="header-container">
    <div style="height: 100%;">
      <img src="" alt="">
      <span>{{ t('header.title') }}</span>
    </div>
    <el-button type="primary" @click="changeLang">123</el-button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { useI18n } from "vue-i18n";
export default defineComponent({
  name: 'header',
  setup() {

    const {t, locale} = useI18n()
    const changeLang = () => {
      // store.dispatch('language', props)
      locale.value = locale.value === 'zh-CN' ? 'en-US' : 'zh-CN';
      console.log(locale.value)
    }
    return {
      t, 
      changeLang
    }
  }
})

</script>

<style lang='scss' scoped>
.header-container{
  width: 100%;
  background: skyblue;
  display: flex;
  overflow: hidden;
}
</style>