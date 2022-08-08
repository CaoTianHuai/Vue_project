import { reqGoodsInfo } from "@/api"
const state = {
  goodInfo:{}
}
const mutations = {
  GETGOODSINFO(state,goodInfo){
    state.goodInfo = goodInfo
  }
}
const actions = {
  async getGoodsInfo({commit},skuId){
    let result = await reqGoodsInfo(skuId)
    if(result.code == 200){
      commit('GETGOODSINFO',result.data)
    }
  }
}
const getters = {
  categoryView(state){
    //state.goodInfo的初始状态为一个空对象,空对象的categoryView属性值为一个空对象
    //当前计算的categoryView属性值至少是一个空对象
    return state.goodInfo.categoryView || {}
  },
  skuInfo(state){
    return state.goodInfo.skuInfo || {}
  },
  //产品售卖属性
  spuSaleAttrList(state){
    return state.goodInfo.spuSaleAttrList || []
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}