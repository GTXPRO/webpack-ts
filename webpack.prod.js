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
		filename: '[name].[contenthash:7].js',
		assetModuleFilename: 'images/[hash:7][ext][query]'
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
		new MiniCssExtractPlugin({ filename: 'styles.[contenthash:7].css' }), //Build ra file bundle css
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
					parse: {
						// We want terser to parse ecma 8 code. However, we don't want it
						// to apply any minification steps that turns valid ecma 5 code
						// into invalid ecma 5 code. This is why the 'compress' and 'output'
						// sections only apply transformations that are ecma 5 safe
						// https://github.com/facebook/create-react-app/pull/4234
						ecma: 8,
					},
					compress: {
						ecma: 5,
						warnings: false,
						// Disabled because of an issue with Uglify breaking seemingly valid code:
						// https://github.com/facebook/create-react-app/issues/2376
						// Pending further investigation:
						// https://github.com/mishoo/UglifyJS2/issues/2011
						comparisons: false,
						// Disabled because of an issue with Terser breaking valid code:
						// https://github.com/facebook/create-react-app/issues/5250
						// Pending further investigation:
						// https://github.com/terser-js/terser/issues/120
						inline: 2,
					},
					mangle: {
						safari10: true,
					},
					keep_classnames: true,
					keep_fnames: true,
					output: {
						ecma: 5,
						comments: false,
						// Turned on because emoji and regex is not minified properly using default
						// https://github.com/facebook/create-react-app/issues/2488
						ascii_only: true,
					},

					ecma: undefined,
					warnings: false,
					module: false,
					toplevel: false,
					nameCache: null,
					ie8: false,
					safari10: false,
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
