const name = require('./package');
module.exports = {
  assetsDir: 'static',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    port: 60001
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
