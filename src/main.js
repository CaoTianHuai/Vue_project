import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router'
//全局三级联动组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)
//引入全局轮播图组件
import Carousel from '@/components/Carousel'
Vue.component(Carousel.name,Carousel)
//引入vuex仓库
import store from '@/store/index'
//引入MockServer.js---mock数据
import '@/mock/mockServe'
//引入swiper的样式
import "swiper/css/swiper.css"

//引入Element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注册路由信息
  router,
  store,
}).$mount('#app')
