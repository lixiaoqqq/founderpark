const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://183.6.120.210:16488',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    // 此处开启 https
    https: true
  },
  
})

