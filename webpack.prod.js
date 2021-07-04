const webpack = require('webpack');
const path = require("path");
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const common = require("./webpack.common.js");

const nameFile = '[sha512:hash:base64:7].[ext]';

module.exports = merge(common, {
	mode: 'production',

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash].js',
		// publicPath: "",
	},

	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: ['style-loader', {
					loader: MiniCssExtractPlugin.loader,
					options: {
						esModule: false
					},
				}, 'css-loader', 'sass-loader']
			},
			{
				test: /\.(jpeg|jpg|gif|png|PNG|ico|ogg)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: nameFile
					}
				}]
			},
			{
				test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: nameFile
					}
				}]
			},
			{
				test: /\.svg/,
				use: [{
					loader: 'url-loader',
					options: {
						mimetype: 'image/svg+xml',
						limit: 10000,
						name: nameFile
					}
				}]
			}
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			headerHasShadow: false,
			template: './src/template.ejs',
			filename: '../build.html',
			minify: false,
		}),
		new MiniCssExtractPlugin({ filename: 'styles.[chunkhash].css' }), //Build ra file bundle css
		new WebpackManifestPlugin({ publicPath: "" }),
		// new WebpackBar({ name: 'Webpack Production Running ', color: '#10519f' }),
	],

	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				test: /\.js(\?.*)?$/i,
				terserOptions: {
					ecma: undefined,
					warnings: false,
					parse: {},
					compress: {},
					mangle: true, // Note `mangle.properties` is `false` by default.
					module: false,
					output: null,
					toplevel: false,
					nameCache: null,
					ie8: false,
					keep_classnames: undefined,
					keep_fnames: true,
					safari10: false,
					output: {
						comments: false,
					},
				},
				extractComments: false
			}),
			new CssMinimizerPlugin({
				minimizerOptions: {
					preset: [
						'default',
						{ discardComments: { removeAll: true } }
					],
				},
			}),//Minify bundle css
		],
		splitChunks: {
			chunks: 'all',
			minSize: 0,
			maxInitialRequests: Infinity,
			cacheGroups: {
				default: false,
				vendors: false,
				styles: false,
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendor",
					//filename: "[name].[chunkhash].js",
					chunks: 'all',
					enforce: true
				},
				styles: {
					name: 'styles',
					test: /\.css$/,
					chunks: 'all',
					enforce: true
				}
			}
		}
	},
	node: false,
	performance: { hints: false },
});
