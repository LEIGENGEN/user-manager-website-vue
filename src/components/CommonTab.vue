<script setup>
import {ref} from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute()
const tags = ref([
  {
    path: '/home',
    name: 'home',
    label: '首页',
    icon: 'home'
  }
])
</script>

<template>
  <div class="tabs">
    <el-tag v-for="(item,index) in tags" :key="index" :closable="item.name!=='home'" :effect="route.name===item.name?'dark':'plain'">{{ item.label }}</el-tag>
  </div>
</template>

<style scoped lang="less">
.tabs {
  margin: 20px 0 0 20px;
}
.el-tag{
  margin-right: 10px;
}
</style>