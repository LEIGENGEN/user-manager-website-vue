import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 这是添加的别名
    alias: [{
      find: '@',
      replacement: '/src'
    }]
  }
})
