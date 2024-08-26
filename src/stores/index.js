import {defineStore} from 'pinia'
import {ref} from 'vue'

function initState() {

}

export const useAllDataStore = defineStore('allData', () => {
  //  ref == state 属性
  // compute === getters
  // function === actions
  const state = ref(initState())
  return {state}
})