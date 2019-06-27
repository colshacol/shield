import webpack from 'webpack'
import path from 'path'
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

console.log('dev server');

export default {
	devtool: 'eval',
	entry: [
		'@babel/polyfill',
		'react-hot-loader/patch',
		'./source/index.js'
	],
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'app.js'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: [
					{
						loader: 'babel-loader',
						options: {}
					}
				]
			},
			{
				test: /\.css$/,
				exclude: /(node_modules)/,
				use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]-[local]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
			},
			{
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
		]
	},

	devServer: {
		contentBase: path.join(__dirname, "public"),
		compress: true,
		port: 9000,
		hotOnly: true,
		hot: true
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin({}),
		new ExtractTextPlugin('index.css'),
		new UglifyJsPlugin()
	]
}