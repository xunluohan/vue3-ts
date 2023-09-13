// 头部信息
<template>
  <div class="header-container">
    <div>
      <img src="" alt="">
      <h1>{{ t('header.title') }}</h1>
    </div>
    <el-button type="primary" @click="changeLang"></el-button>
  </div>
</template>

<script lang='ts' setup>
import { useI18n } from "vue-i18n";
const {t, locale} = useI18n()
const changeLang = () => {
  // store.dispatch('language', props)
  // locale.value = locale.value === 'zh-cn' ? 'en-US' : 'zh-cn';
  // document.title = '' 可根据需求改变浏览器页签语言
  // ElMessage.success( t('changeLanguage') )
  // if (props === 'en') {
  //   window.document.title = 'Overseas Onboarding'
  // } else {
  //   window.document.title = '海外入职管理'
  // }
}

</script>

<style lang='scss' scoped>
.header-container{
  width: 100%;
  background: skyblue;
}
</style>