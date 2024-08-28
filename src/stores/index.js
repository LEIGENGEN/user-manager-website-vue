import {defineStore} from 'pinia'
import {ref} from 'vue'

function initState() {
  return {
    isCollapsed: true,
    tags: [{
      path: '/home',
      name: 'home',
      label: '首页',
      icon: 'home'
    }],
    currentMenu: null
  }
}

export const useAllDataStore = defineStore('allData', () => {
  //  ref == state 属性
  // compute === getters
  // function === actions
  const state = ref(initState())

  function selectMenu(val) {
    if (val.name === 'home') {
      state.value.currentMenu = null
    } else {
      let index = state.value.tags.findIndex(item => item.name === val.name)
      index === -1 ? state.value.tags.push(val) : ''
    }

  }

  return {state, selectMenu}
})