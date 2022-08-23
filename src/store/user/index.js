import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogout } from '@/api'
import { setToken, getToken ,removeToken } from '@/utils/token'
const state = {
  code: '',
  token: localStorage.getItem('TOKEN'),
  userInfo: {}
}
const mutations = {
  GETCODE(state, code) {
    state.code = code
  },
  USERLOGIN(state, token) {
    state.token = token
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo
  },
  CLEAR(state) {
    state.token = ''
    state.userInfo = {}
    removeToken()
  }
}
const actions = {
  //获取验证码
  async getCode({ commit }, phone) {
    let result = await reqGetCode(phone)
    if (result.code == 200) {
      commit('GETCODE', result.data)
    }
  },
  //注册
  async userRegister({ commit }, data) {
    let result = await reqUserRegister(data)
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new error('faile'))
    }
  },
  //登录
  async userLogin({ commit }, data) {
    let result = await reqUserLogin(data)
    // console.log(result);
    if (result.code == 200) {
      commit('USERLOGIN', result.data.token)
      //持久化存储token
      setToken(result.data.token)
      return 'ok'
    } else {
      return Promise.reject(new error('faile'))
    }
  },
  //获取用户信息
  async getUserInfo({ commit }) {
    let result = await reqUserInfo();
    if (result.code == 200) {
      commit('GETUSERINFO', result.data)
      return 'OK'
    }else{
      return Promise.reject(new error('faile'))
    }
  },
  async getLogout({ commit }) {
    let result = await reqLogout()
    if (result.code == 200) {
      commit('CLEAR')
      return 'OK'
    } else {
      return Promise.reject(new error('faile'))
    }
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}