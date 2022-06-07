const name = require('./package');
module.exports = {
  assetsDir: 'static',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5213',
        changeOrigin:true,
        secure: false,
        ws: true
      }
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    port: 60003
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${name}` // webpack4版本以上
      // jsonpFunction: `webpackJsonp_${name}`
    }
  }
};
