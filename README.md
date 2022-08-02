
$route:一般用于获取路由信息,[路径 query params等]
$router:一般进行编程式导航进行路由跳转,[push replace]

1.在进行路由跳转时,path能否和params参数结合使用?
答:路由跳转传递参数时,path不能和params参数结合使用
2.如何指定params参数可传可不传?
答:在params占位后加 '?'
path:'/search/:keyword?'