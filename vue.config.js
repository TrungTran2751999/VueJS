const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer:{
    proxy: "http://localhost:1412",
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': null,
      'X-Requested-With': null,
      'Content-Type': 'text/html'
      }
  }
}
