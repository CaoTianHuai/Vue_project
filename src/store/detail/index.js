import { reqGoodsInfo , reqAddOrUpdateShopCart} from "@/api"
//封装有课身份模块uuid--->生成一个随机的字符串
import {getUUID} from "@/utils/uuid_token"
const state = {
  goodInfo:{},
  uuid_token:getUUID()
}
const mutations = {
  GETGOODSINFO(state,goodInfo){
    state.goodInfo = goodInfo
  }
}
const actions = {
  //获取产品信息
  async getGoodsInfo({commit},skuId){
    let result = await reqGoodsInfo(skuId)
    if(result.code == 200){
      commit('GETGOODSINFO',result.data)
    }
  },
  //将产品加入到购物车
  async addOrUpdateShopCart({commit},{skuId,skuNum}){
    //加入购物车
    let result = await reqAddOrUpdateShopCart(skuId,skuNum)
    //async函数如果执行,返回的一定是promise[要么成功,要么失败]
    if (result.code == 200) {
      return "OK"
    }else{
      return Promise.reject(new Error('faile'))
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