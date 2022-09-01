const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap:false,
  //关闭eslint校验
  lintOnSave:false,
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/api':{
        target:'http://gmall-h5-api.atguigu.cn'
      }
    },
    //运行项目是自动代开浏览器
    open:true,
    host:'localhost',
    port:8080
  },
})
