const path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index.js'
	},
	module: {
		rules: [{
			test: /\.(jpg|png|gif)$/,
			use: {
				loader: 'url-loader',
				options: {
					name: '[name]_[hash].[ext]',
					outputPath: 'images/',
					limit: 10240
				}
			} 
		},{
			test: /\.less$/,
			use: [
				'style-loader', 
				{
					loader: 'css-loader', 
					options: {
						// 在@import '**.less'文件中 也让它经过postcsss-loader、less-loader处理
						importLoaders: 2,
						modules: true
					}
				},
				'less-loader',
				'postcss-loader'
			]
		}]
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}