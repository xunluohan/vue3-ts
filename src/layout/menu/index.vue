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
    <template v-for="(item, index) in route" :key="path">
      
      <el-sub-menu v-if="item.children?.length" :index="item.path">
        <template #title>
          <el-icon><location /></el-icon>
          <span>{{ t(`menu.${item.meta.title}`) }}</span>
        </template>
        <MenuItem v-for="(menuItem, index) in item.children" :key="index" :route="menuItem"></MenuItem>
        <div>
        </div>
        <!-- <el-menu-item index="1-1">item one</el-menu-item> -->
      </el-sub-menu>
      <MenuItem v-else-if="item.path !== '/'" :route="item"></MenuItem>
    </template>
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
import { useUserStore } from '@/pinia/user'
import { ref, watch } from 'vue';
import type { RouteRecordRaw } from 'vue-router'
const store = useUserStore()
// console.log(store)
const { t } = useI18n()
const router = useRouter()
const route = ref<RouteRecordRaw[]>([])
watch(() => store.userRouter, newValue => {
  route.value = newValue
})

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<style lang='scss' scoped>

</style>