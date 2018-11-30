const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { DIRS } = require('./appconfig')

module.exports = {
  name: 'web-client',

  entry: {
    app: [
      `${DIRS.src}/client/Index.tsx`
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },

      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['build']),

    new webpack.DefinePlugin({
      'ENV': JSON.stringify(process.env.NODE_ENV)
    }),

    new CopyWebpackPlugin([
      {
        from: `${DIRS.src}/client/vendor/jwplayer`,
        to: `${DIRS.build}/jwplayer`,
        flatten: true
      },
    ])
  ],

  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  }
}
