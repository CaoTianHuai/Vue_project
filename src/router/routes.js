//引入路由组件
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import Detail from "@/pages/Detail"
import AddCartSuccess from "@/pages/AddCartSuccess"
import ShopCart from "@/pages/ShopCart"
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'
export default [
  {
    path: '/center',
    component: Center,
    meta: { show: true },
    children: [
      {
        path: 'myOrder',
        component: MyOrder
      }, 
      {
        path: 'groupOrder',
        component: GroupOrder
      },
      {
        path: 'groupOrder',
        redirect: '/center/myOrder'
      },
    ]
  },
  {
    path: '/paySuccess',
    component: PaySuccess,
    meta: { show: true }
  },
  {
    path: '/pay',
    component: Pay,
    name: 'Pay',
    meta: { show: true }
  },
  {
    path: '/trade',
    component: Trade,
    name: 'trade',
    meta: { show: true }
  },
  {
    path: '/shopCart',
    component: ShopCart,
    name: 'shopCart',
    meta: { show: true }
  },
  {
    path: '/addCartSuccess',
    component: AddCartSuccess,
    name: 'addCartSuccess',
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