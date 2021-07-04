const webpack = require('webpack');
const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: {
		app: './src/index.tsx',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.tsx?/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.html$/,
				loader: 'text-loader',
			},
			{
				test: /\.(jpe?g|gif|png|PNG|ico|ogg)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[path][name].[ext]',
						emitFile: false,
					},
				}],
			},
			{
				test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[path][name].[ext]',
						emitFile: false,
					},
				}],
			},
			{
				test: /\.svg/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 10000,
						emitFile: false,
						mimetype: 'image/svg+xml'
					}
				}]
			},
			{ test: /\.ejs$/, use: [{ loader: 'ejs-loader', options: { esModule: false }}] },
		],
	},
	resolve: {
		alias: {},
		extensions: [".ts", ".tsx", ".js", ".jsx"]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
};
