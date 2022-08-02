import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router'
import TypeNav from '@/pages/Home/TypeNav'
Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注册路由信息
  router
}).$mount('#app')
