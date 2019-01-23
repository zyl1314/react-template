const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base-config');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(base, {
  mode: 'production',
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks:'async',
      minSize:30000,
      minChunks:1,
      maxAsyncRequests:5,
      maxInitialRequests:3,
      name:false,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin('dist', {
      root: path.resolve(__dirname, '..')
    }),
    new BundleAnalyzerPlugin()
  ]
})
