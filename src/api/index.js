//当前模块:API进行统一管理
import request from "./request";

//三级联动的接口
export const reqCategoryList = ()=>request({
  url:'/product/getBaseCategoryList',
  method:'get'
})

