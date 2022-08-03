//配置路由
import Vue from "vue";
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter)
//引入路由组件
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
//对push方法和replace方法进行重写,解决传参时,多次点击报错的问题
let orifinPush = VueRouter.prototype.push;
let orifinReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function(location,resolve,reject){
  if(reject && resolve){
    orifinPush.call(this,location,resolve,reject)
  }else{
    orifinPush.call(this,location,()=>{},()=>{})
  }
}
VueRouter.prototype.replace = function(location,resolve,reject){
  if(reject && resolve){
    orifinReplace.call(this,location,resolve,reject)
  }else{
    orifinReplace.call(this,location,()=>{},()=>{})
  }
}
//配置路由
export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      meta: { show: true }
    },
    {
      path: '/login',
      component: Login,
      meta: { show: false }
    },
    {
      path: '/register',
      component: Register,
      meta: { show: false }
    },
    {
      // 当需要传递params参数时,需要提前占位
      path: '/search/:keyword?',
      component: Search,
      name: 'search',
      meta: { show: true },
    },
    //重定向
    {
      path: "*",
      component: Home,
      meta: { show: true }
    }
  ]
})