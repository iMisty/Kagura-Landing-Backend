module.exports = {
	chainWebpack: config => {
		config
			.plugin('webpack-bundle-analyzer')
			.use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
	},
	devServer: {
		proxy: {
			'/weather': {
				target: 'https://www.tianqiapi.com/',
				// 允许跨域
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/weather': ''
				}
			}
		}
	}

}