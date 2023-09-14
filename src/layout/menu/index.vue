// 
<template>
  <el-menu
    router
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu :index="item.path" v-for="(item, index) in route" :key="path">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ t(item.meta.title) }}</span>
      </template>
      <div v-if="item.children.length">
        <MenuItem></MenuItem>
      </div>
      <!-- <el-menu-item index="1-1">item one</el-menu-item> -->
    </el-sub-menu>
  </el-menu>
</template>

<script lang='ts' setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n'
import MenuItem from './menuItem.vue'
// import { useUserStore } from '@/pinia/user'
// const store = useUserStore()
// console.log(store)
const { t } = useI18n()
const router = useRouter()
const route = router.getRoutes()

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<style lang='scss' scoped>

</style>