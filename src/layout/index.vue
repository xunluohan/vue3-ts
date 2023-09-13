// 
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <EHeader></EHeader>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts' setup>
import EHeader from './header.vue'

</script>

<style lang='scss' scoped>

</style>