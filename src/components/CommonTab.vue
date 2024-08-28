<script setup>
import {computed, ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import {useAllDataStore} from '../stores/index.js'

const store = useAllDataStore()
const route = useRoute()
const router = useRouter()
const tags = computed(() => store.state.tags)

const handleMenu = (tag) => {
  router.push(tag.name)
  store.selectMenu(tag)
}
const handleClose = (tag, index) => {
//   通过pinia管理的
  store.updateTags(tag)
//  如果点击的关闭的tag（不是对应的当前页面）
  if (tag.name !== route.name) return
  if (index === store.state.tags.length) {
    store.selectMenu(tags.value[index - 1])
    router.push(tags.value[index - 1].name)
  } else {
    store.selectMenu(tags.value[index])
    router.push(tags.value[index].name)
  }
}
</script>

<template>
  <div class="tabs">
    <el-tag v-for="(item,index) in tags" :key="index"
            :closable="item.name!=='home'"
            :effect="route.name===item.name?'dark':'plain'"
            @click="handleMenu(item)"
            @close="handleClose(item,index)"
    >{{ item.label }}
    </el-tag>
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