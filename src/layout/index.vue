// 
<template>
  <div class="common-layout">
    <el-container class="container">
      <el-header>
        <EHeader></EHeader>
      </el-header>
      <el-container>
        <el-aside width="200px"><Menu /></el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang='ts' setup>
import EHeader from '@/layout/header.vue'
import Menu from '@/layout/menu/index.vue'

</script>

<style lang='scss' scoped>
.common-layout{
  height: 100%;
  .container{
    height: 100%;
  }
}
</style>