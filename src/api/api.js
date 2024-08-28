/*整个项目api统一管理*/
import request from './request.js'

//请求首页左侧表格的数据
export default {
  getTableData() {
    return request({
      url: '/home/getTableData',
      method: 'get',
      mock: false
    })
  },
  getCountData() {
    return request({
      url: '/home/getCountData',
      method: 'get'
    })
  },
  getChartData() {
    return request({
      url: '/home/getChartData',
      method: 'get'
    })
  },
  getUserData(data) {
    return request({
      url: '/home/getUserData',
      method: 'get',
      data
    })
  },
  deleteUser(data) {
    return request({
      url: '/user/deleteUser',
      method: 'get',
      data
    })
  },
  addUser(data) {
    return request({
      url: '/user/addUser',
      method: 'post',
      data
    })
  },
  editUser(data) {
    return request({
      url: '/user/editUser',
      method: 'post',
      data
    })
  }
}