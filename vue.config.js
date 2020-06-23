/*
 * @Author: Miya
 * @Date: 2020-06-18 18:17:09
 * @LastEditTime: 2020-06-23 15:29:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Single-Search/vue.config.js
 */
module.exports = {
  // 打包输出目录
  publicPath: './',
  // 构建输出目录
  outputDir: 'dist',
  // 静态资源目录
  assetsDir: 'static',
  // CSS配置
  // 查阅： https://cli.vuejs.org/zh/guide/css.html#%E5%BC%95%E7%94%A8%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90
  css: {
    // 提取至单独的CSS文件
    extract: true
  },
  // 代理服务器配置
  devServer: {
    proxy: {
      '/googleapi': {
        // site: http://suggestqueries.google.com/complete/search?output=toolbar&hl=zh&q=前端
        target: 'http://suggestqueries.google.com/complete/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/googleapi': '/',
        },
      },
      '/baiduapi': {
        // site: http://suggestion.baidu.com/su?wd=前端
        target: 'http://suggestion.baidu.com/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/baiduapi': '/',
        },
      },
      '/bingapi': {
        // site: https://api.bing.com/qsonhs.aspx?type=cb&q=前端
        target: 'https://api.bing.com/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/bingapi': '/',
        },
      },
    }
  }
}