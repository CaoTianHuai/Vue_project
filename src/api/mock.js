//对axios进行二次封装
import axios from "axios";
//引入进度条
import nProgress from "nprogress";
//引入进度条样式
import "nprogress/nprogress.css"
//1.利用axios对象方法create,去创建一个axios实例
//2.request就是axios,只不过稍微进行了配置

const mockRequest = axios.create({
  //配置对象
  //基础路径
  baseURL:"/mock",
  //请求超时的时间
  timeout:5000,
});
//请求拦截器:在发送请求之前,请求拦截器可以检测到,并做出一些处理
mockRequest.interceptors.request.use((config)=>{
  //进度条开始
  nProgress.start();
  //config:配置对象
  return config;
});

// 响应拦截器
mockRequest.interceptors.response.use((res)=>{
  //进度条结束
  nProgress.done();
  //成功的回调函数:服务器相应的数据回来之后,相应拦截器可以检测到,并做出处理
  return res.data
},(error)=>{
  //响应失败的回调函数
  return Promise.reject(new Error('faile'))
})

export default mockRequest;