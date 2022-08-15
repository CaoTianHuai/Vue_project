//引入路由组件
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail"
import AddCartSuccess from "@/pages/AddCartSuccess"
import ShopCart from "@/pages/ShopCart"
export default [
  {
    path: '/shopCart',
    component: ShopCart,
    name:'shopCart',
    meta: { show: true }
  },
  {
    path: '/addCartSuccess',
    component: AddCartSuccess,
    name:'addCartSuccess',
    meta: { show: true }
  },
  {
    path: '/detail/:skuid',
    component: Detail,
    meta: { show: true }
  },
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
    path: "/",
    redirect: "/home",
    meta: { show: true }
  }
]