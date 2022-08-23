
$route:一般用于获取路由信息,[路径 query params等]
$router:一般进行编程式导航进行路由跳转,[push replace]

1.在进行路由跳转时,path能否和params参数结合使用?
答:路由跳转传递参数时,path不能和params参数结合使用
2.如何指定params参数可传可不传?
答:在params占位后加 '?'
path:'/search/:keyword?'

函数的防抖与节流
节流:在规定的间隔时间范围内不会重复触发回调,只有大于这个时间间隔才会触发回调,把频繁触发变为少量触发
防抖:前面的所有触发都被取消,最后一次执行在规定时间之后才会触发,也就是说如果连续快速的触发,只会执行一次

1)对商品的三级分类进行优化
在app根组件中发送请求,根组件的mounted只调用一次,这样接口只调用一次
2)合并params和query参数

组件间通信的方式
1)props:用户父子组件间通信
2)自定义事件:$on $emit 可以实现子给父通信
在main.js中配置
beforeCreate(){
    Vue.prototype.$bus = this
  },
3)全局事件总线:$bus 全能
4)插槽
5)vuex

HTML5新增特性 本地存储和会话存储

git add .时,
warning: in the working copy of 'README.md', LF will be replaced by CRLF the next time Git touches it警告解决方案

#提交时转换为LF，检出时转换为CRLF
$ git config --global core.autocrlf true
#提交时转换为LF，检出时不转换
$ git config --global core.autocrlf input
#提交检出均不转换 ---本次解决方案
$ git config --global core.autocrlf false

#拒绝提交包含混合换行符的文件
git config --global core.safecrlf true   

#允许提交包含混合换行符的文件
git config --global core.safecrlf false   

#提交包含混合换行符的文件时给出警告
git config --global core.safecrlf warn


生成二维码  --qrcode
npm install qrcode --save
