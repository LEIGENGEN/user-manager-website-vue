<script setup>
import {computed, ref} from 'vue'
import {useRoute} from 'vue-router'
import {useAllDataStore} from '../stores/index.js'

const store = useAllDataStore()
const route = useRoute()
const tags = computed(() => store.state.tags)
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

.el-tag {
  margin-right: 10px;
}
</style>