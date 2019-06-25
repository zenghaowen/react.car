// 仓库的主文件
// 1.引入redux
import {createStore} from 'redux'
// 引入reducer
import reducer from './reducer'
// 2.创建store实例对象
const store=createStore(reducer)
// 3.暴露出去store
export default store
