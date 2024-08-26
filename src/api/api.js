/*整个项目api统一管理*/
import request from './request.js'

//请求首页左侧表格的数据
export default {
  getTableData() {
    return request({
      url: '/api/home/getTableData',
      method: 'get',
      mock: false
    })
  }
}