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
		assetModuleFilename: 'images/[hash][ext][query]'
		// publicPath: "",
	},

	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [{
					loader: MiniCssExtractPlugin.loader,
					options: {
						esModule: false
					},
				}, 'css-loader', 'sass-loader']
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
