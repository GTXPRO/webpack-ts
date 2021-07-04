const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: 'development',
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								// localIdentName: '[sha1:hash:hex:4]',
								localIdentName: '[path][name]__[local]--[hash:base64:5]'
							},
							importLoaders: 1
						}
					},
					'sass-loader'
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
	],
	optimization: {
		minimizer: [],
		splitChunks: {
			cacheGroups: {
				default: false,
				vendors: false,
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					// filename: '[name].bundle.js',
					chunks: 'all',
					// enforce: true,
				},
			},
		},
	},
	devServer: {
		historyApiFallback: true,
		contentBase: '/',
		open: true,
		compress: true,
		hot: true,
		port: 3000,
		inline: true,
		// host: 'example.com',
		// https: {
		// 	key: fs.readFileSync('key file'),
		// 	cert: fs.readFileSync('crt file')
		// },
	},
});
