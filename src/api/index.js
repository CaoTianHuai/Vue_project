//当前模块:API进行统一管理
import request from "./request";
import mockRequest from './mock'
//三级联动的接口
export const reqCategoryList = ()=>request({
  url:'/product/getBaseCategoryList',
  method:'get'
})
 //获取banner(首页轮播图)
 export const reqGetBannerList = ()=>mockRequest.get('/banner')

 //获取floor数据
 export const reqGetFloorList = ()=>mockRequest.get('/floor')

 //搜索模块的接口
 export const reqGetSearchInfo = (params)=>request({
  url:"/list",
  method:'POST',
  data:params
 })
 
 //商品详情的接口
 export const reqGoodsInfo = (skuId)=>request({
  url:`/item/${skuId}`,
  method:'get'
 })

 //将商品加入购物车或修改数量
 export const reqAddOrUpdateShopCart = (skuId,skuNum)=>request({
  url: `/cart/addToCart/${skuId}/${skuNum}`,
  method:'post'
 })

 //获取购物车列表数据接口
 export const reqCartList = ()=>request({
  url:'/cart/cartList',
  method:"get"
 })

 //删除购物车产品的接口
 export const reqDeleteCartById = (skuId)=>request({
  url:`/cart/deleteCart/${skuId}`,
  method:'delete'
 })

 //修改商品选中状态
 export const reqUpdateCheckedByid = (skuId,isChecked)=>request({
  url:`/cart/checkCart/${skuId}/${isChecked}`,
  method:'get'
 })

 //获取验证码
 export const reqGetCode = (phone)=>request({
  url:`/user/passport/sendCode/${phone}`,
  method:'get'
 })

 //用户注册
 export const reqUserRegister = (data) =>request({
  url:'/user/passport/register',
  method:'post',
  data
 })

//用户登录
 export const reqUserLogin = (data)=>request({
  url:'/user/passport/login',
  method:'post',
  data
 })

 //获取用户信息,需要带着token
 export const reqUserInfo = () =>request({
  url:"/user/passport/auth/getUserInfo",
  method:'get'
 })

 //退出登录
 export const reqLogout = () =>request({
  url:'/user/passport/logout',
  method:'get'
 })