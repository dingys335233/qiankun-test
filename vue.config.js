const { defineConfig } = require('@vue/cli-service');
const resolve = dir => require('path').join(__dirname, dir);
let baseUrl = process.env.VUE_APP_BASEURL;
module.exports = defineConfig({
  publicPath: './', // 静态资源地址
  outputDir: 'dist', // 生产环境构建文件的目录
  assetsDir: 'static', // 构建后生成的静态文件的地址
  transpileDependencies: true, // node_modules里的依赖是不会被默认编译的，会导致es6的语法报错
  productionSourceMap: false, // 生产环境不需要source map，设置为false加速生产环境的构建

  devServer: {
    // publicPath: baseUrl,
    proxy: {
      '/api': {
        target: 'http://localhost:5213',
        changeOrigin:true,
        secure: false,
        ws: true
      }
    },
    host: 'localhost',
    port: '5210',
    open: true,
    https: false
  }, // 代理服务器，前后端不在一个主机上，需要在开发环境下降API请求代理到服务器。

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 生产环境配置
    } else {
      // 开发环境配置
    }
  }, // webpack简单配置

  chainWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config.devtool('cheap-source-map');
    }
    // 设置alias
    config.resolve.alias.set('@', resolve('src'));
  } // webpack的高级配置；vue-cli内部的webpack配置是通过webpack chain维护的。
  // 它允许我们更细粒度的控制其内部配置。可以添加loader之类的。

  /**
   * 这里多次提到了source map.
   * 多种打包工具中都集成了source map这项技术。由于js脚本变得越来越复杂，大部分
   * 源码都是需要转换才能投入生产环境。为了打包后，能够刚好的定位到报错位置，使代码
   * 的debug变得更容易，这就是source map的作用。
   *
   * UglifyJS 是命令行工具，用于压缩js代码
   * 压缩代码的同时会生成source map。
   *
   * 而这里的config里面的devtool里可选择的source map也有很多种：
   * source-map: 外部，可以查看错误代码准确信息和错误位置。
   * inline-source-map：内联，只生成一个内联，可以查看错误代码准确信息和位置。
   * hidden-source-map: 外部，可以查看错误代码位置，没有错误信息
   * eval-source-map: 内联，每一个文件都生成对应的source-map,可以查看准确的位置和错误信息
   * nosources-source-map: 外部，可以查看错误原因，但没有错误代码
   * cheap-source-map: 外部，可以查看错误信息和位置，但是只精确到行，忽略列。
   * cheap-module-source-map: 外部，可以查看错误信息和位置，module会加入loader的source-map
   *
   * 内联和外部的区别，外部会生成.map文件，内联没有，所以内联的构建速度更快，
   * 内联会使代码体积变大，所以生产环境不适用内联
   * */
})
