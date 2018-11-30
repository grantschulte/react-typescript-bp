const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const common = require('./webpack.common.js')

const path = require('path')
const { DIRS } = require('./appconfig')

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  output: {
    path: DIRS.build,
    filename: 'js/[name].js'
  },

  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {
            loader: 'typings-for-css-modules-loader',
            options: {
              camelCase: true,
              localIdentName: '[name]__[local]___[hash:base64:6]',
              modules: true,
              namedExport: true
            }
          }
        })
      },

      {
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(DIRS.root, 'index.html'),
      title: 'React + TS - Dev',
      environment: process.env.NODE_ENV
    }),

    new ExtractTextPlugin({
      filename: 'styles/[name].css',
      allChunks: true
    })
  ]
})
