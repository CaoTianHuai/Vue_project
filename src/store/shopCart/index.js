//search模块的仓库
import { reqCartList, reqDeleteCartById, reqUpdateCheckedByid } from '@/api/index'
//state:仓库存储数据的地方
const state = {
  cartList: []
}

//mutations:修改state的唯一手段
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList
  }
}

//actions:处理action,可以书写自己的业务逻辑也可以处理异步
const actions = {
  async getCartList({ commit }) {
    let result = await reqCartList()
    if (result.code == 200) {
      commit("GETCARTLIST", result.data)
    }
  },
  //删除购物车中某一个商品
  async deleteCart({ commit }, skuId) {
    let result = await reqDeleteCartById(skuId)
    if (result.code == 200) {
      return 'OK'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  async updateCheckedById({ commit }, { skuId, isChecked }) {
    let result = await reqUpdateCheckedByid(skuId, isChecked)
    console.log(result);
    if (result.code == 200) {
      return 'OK'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  //删除全部选中的商品
  deleteAllCheckedCart({ dispatch, getters }) {
    let PromiseAll = []
    getters.cartList.cartInfoList.forEach(item => {
      let promise = item.isChecked == 1 ? dispatch('deleteCart', item.skuId) : ''
      PromiseAll.push(promise)
    })
    //如果promiseAll内的promist全部成功,返回结果即为成功
    //如果有一个失败,返回即为失败
    return Promise.all(PromiseAll)
  },
  //修改全部商品的选中状态
  updateAllCartIsChecked({ dispatch, state }, isChecked) {
    let PromiseAll = []
    state.cartList[0].cartInfoList.forEach((item) => {
      let promise = dispatch("updateCheckedById", {
        skuId: item.skuId,
        isChecked,
      });
      PromiseAll.push(promise)
    });
    return Promise.all(PromiseAll)
  },
}

//getters:可以理解为计算属性
const getters = {
  cartList(state) {
    return state.cartList[0] || {}
  },
}

export default {
  state,
  mutations,
  actions,
  getters
}