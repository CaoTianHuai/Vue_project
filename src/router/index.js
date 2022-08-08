//配置路由
import Vue from "vue";
import VueRouter from 'vue-router';
//引入路由信息
import routes from './routes'
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
//配置路由
export default new VueRouter({
  routes,
  //滚动行为
  scrollBehavior(to,from,savePosition){
    //返回y=0,表示滚动条在最上方
    return {x:0 , y:0}
  }
})