import {createApp} from 'vue'
import App from './App.vue'
import '@/assets/less/index.less'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {createPinia} from 'pinia'
import '../src/api/mock.js'
import api from './api/api.js'
import {useAllDataStore} from '../src/stores'

const pinia = createPinia()
const app = createApp(App)
app.config.globalProperties.$api = api
app.use(ElementPlus)
app.use(pinia)
// 这个一定要放在pinia之后，因为还没注入
const store = useAllDataStore()
// 一定要在use(router)前面
store.addMenu(router,"refresh")
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
