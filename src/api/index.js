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