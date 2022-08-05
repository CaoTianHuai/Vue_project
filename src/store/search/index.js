//search模块的仓库
import {reqGetSearchInfo} from '@/api/index'
//state:仓库存储数据的地方
const state = {
  searchList : {}
}

//mutations:修改state的唯一手段
const mutations = {
  GETSEARCHLIST(state,searchList){
    state.searchList = searchList
  }
}

//actions:处理action,可以书写自己的业务逻辑也可以处理异步
const actions = {
  async getSearchList({commit},params={}){
    let result = await reqGetSearchInfo(params)
    if (result.code == 200) {
      commit('GETSEARCHLIST',result.data)
    }
  }
}

//getters:可以理解为计算属性
const getters = {
  //当前形参state,为当前仓库的state,而不是大仓库的state
  goodsList(state){
    return state.searchList.goodsList || []
  },
  trademarkList(state){
    return state.searchList.trademarkList || []
  },
  attrsList(state){
    return state.searchList.attrsList || []
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}