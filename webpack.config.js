const webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	WebpackNotifierPlugin = require('webpack-notifier'),
	path = require('path');

module.exports = {
	context: path.resolve(__dirname, 'app'),
	entry: {
		main: './index.js'
	},
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'app.js'
	},
	devtool: '#eval-source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader?url=false"
			},
			{
				test: /\.less$/,
				loader: "style-loader!css-loader?url=false!less-loader?sourceMap"
			},
			{
				test: /\.html$/,
				loader: "html-loader"
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=80192&name=[name].[ext]'
			}
		]
	},
	resolve: {
		alias: {
			Components: path.resolve(__dirname, './app/modules/components/'),
			Pages: path.resolve(__dirname, './app/modules/views/'),
			Services: path.resolve(__dirname, './app/modules/services/'),
			EventHub: path.resolve(__dirname, './app/modules/eventHub/eventHub'),
		}
	},
	plugins: [
		new WebpackNotifierPlugin({alwaysNotify: true}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html'
		})
	]
};