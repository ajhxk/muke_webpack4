const path = require('path');
const mode = {
	dev: 'development',
	prod: 'production'
}

module.exports = {
	mode: mode.dev,
	entry: {
		main: './src/index.js'
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}