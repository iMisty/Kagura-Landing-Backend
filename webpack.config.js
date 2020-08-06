/*
 * @Author: Miya
 * @Date: 2020-08-07 01:34:54
 * @LastEditors: Miya
 * @LastEditTime: 2020-08-07 02:19:27
 * @Description: file content
 * @FilePath: /Single-Search/webpack.config.js
 */
module.exports = {
  vue: {
    html: {
      test: /\.(html)$/,
      loader: 'vue-html-loader',
      options: {
        attrs: [':data-src']
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'vue-html-loader'
        }
      }
    ]
  }
};
