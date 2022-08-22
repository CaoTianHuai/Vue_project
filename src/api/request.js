//对axios进行二次封装
import axios from "axios";
//引入进度条
import nProgress from "nprogress";
//引入进度条样式
import "nprogress/nprogress.css"
//在当前模块引入store
import store from "@/store";
//1.利用axios对象方法create,去创建一个axios实例
//2.request就是axios,只不过稍微进行了配置

const request = axios.create({
  //配置对象
  //基础路径
  baseURL:"/api",
  //请求超时的时间
  timeout:5000,
});
//请求拦截器:在发送请求之前,请求拦截器可以检测到,并做出一些处理
request.interceptors.request.use((config)=>{
  if (store.state.detail.uuid_token) {
    config.headers.userTempId = store.state.detail.uuid_token
  }
  //需要携带token带给服务器
  if(store.state.user.token){
    console.log(store.state.user.token);
    config.headers.token = store.state.user.token;
  }
  //进度条开始
  nProgress.start();
  //config:配置对象
  return config;
});

// 响应拦截器
request.interceptors.response.use((res)=>{
  //进度条结束
  nProgress.done();
  //成功的回调函数:服务器相应的数据回来之后,相应拦截器可以检测到,并做出处理
  return res.data
},(error)=>{
  //响应失败的回调函数
  return Promise.reject(new Error('faile'))
})

export default request;