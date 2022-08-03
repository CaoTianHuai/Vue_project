//home模块的仓库
import { reqCategoryList } from "@/api"

//state:仓库存储数据的地方
const state = {
  categoryList:[]
}

//mutations:修改state的唯一手段
const mutations = {
  CATEGORYLIST(state,categoryList){
    state.categoryList = categoryList
  }
}

//actions:处理action,可以书写自己的业务逻辑也可以处理异步
const actions = {
   async categoryList({commit}){
    let result = await reqCategoryList(); 
    if (result.code === 200) {
      commit('CATEGORYLIST',result.data)
    }
   }
}

//getters:可以理解为计算属性
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}