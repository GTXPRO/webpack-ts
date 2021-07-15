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
				type: 'asset/resource'
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				type: 'asset/inline',
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
