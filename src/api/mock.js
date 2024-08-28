import MOCK from 'mockjs'
import homeApi from '../api/mockData/home.js'
import userApi from '../api/mockData/user.js'
// 拦截的路径(正则) 方法 制造的假数据
MOCK.mock(/api\/home\/getTableData/, 'get', homeApi.getTableData)
MOCK.mock(/api\/home\/getCountData/, 'get', homeApi.getCountData)
MOCK.mock(/api\/home\/getChartData/, 'get', homeApi.getChartData)
MOCK.mock(/api\/home\/getUserData/, 'get', userApi.getUserList)
MOCK.mock(/api\/user\/deleteUser/, 'get', userApi.deleteUser)

