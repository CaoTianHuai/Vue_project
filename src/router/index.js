//配置路由
import Vue from "vue";
import VueRouter from 'vue-router';
//引入路由信息
import routes from './routes'
//引入store
import store from '@/store'
//使用插件
Vue.use(VueRouter)
//引入路由组件
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail"
//对push方法和replace方法进行重写,解决传参时,多次点击报错的问题
let orifinPush = VueRouter.prototype.push;
let orifinReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, resolve, reject) {
  if (reject && resolve) {
    orifinPush.call(this, location, resolve, reject)
  } else {
    orifinPush.call(this, location, () => { }, () => { })
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (reject && resolve) {
    orifinReplace.call(this, location, resolve, reject)
  } else {
    orifinReplace.call(this, location, () => { }, () => { })
  }
}
let router = new VueRouter({
  routes,
  //滚动行为
  scrollBehavior(to, from, savePosition) {
    //返回y=0,表示滚动条在最上方
    return { x: 0, y: 0 }
  }
})
//全局守卫:前置守卫(在路由跳转之间进行判断)
router.beforeEach(async (to, from, next) => {
  //to:可以获取到你要跳转的那个路由的信息
  //from:可以获取到你从哪个路由而来
  //next:放行函数
  let token = store.state.user.token
  let name = store.state.user.userInfo.name
  if (token) {
    if (to.path == '/login') {
      next('/home')
    } else {
      if (name) {
        next()
      } else {
        //没有用户信息,派发action让仓库存储用户信息再跳转
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch (error) {
          //token失效,获取不到用户信息,重新登录
          //清除token
          await store.dispatch('getLogout')
          next('/login')
        }
      }
    }
  } else {
    //未登录:不能去交易相关/不能去支付相关/个人中心相关页面
    let toPath = to.path
    if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
      next('/login?redirect='+toPath)
    } else {
      next()
    }
  }
})
//配置路由
export default router;