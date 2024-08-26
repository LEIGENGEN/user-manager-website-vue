import MOCK from 'mockjs'
import homeApi from '../api/mockData/home.js'
// 拦截的路径(正则) 方法 制造的假数据
MOCK.mock(/api\/home\/getTableData/, 'get', homeApi.getTableData)
