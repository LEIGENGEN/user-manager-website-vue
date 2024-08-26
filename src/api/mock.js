import MOCK from 'mockjs'
import homeApi from '../api/mockData/home.js'
// 拦截的路径(正则) 方法 制造的假数据
MOCK.mock(/api\/home\/getTableData/, 'get', homeApi.getTableData)
MOCK.mock(/api\/home\/getCountData/, 'get', homeApi.getCountData)
MOCK.mock(/api\/home\/getChartData/, 'get', homeApi.getChartData)

