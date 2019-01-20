const merge = require('webpack-merge');
const base = require('./webpack.base-config');
const webpack = require('webpack');

module.exports = merge(base, {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'ENV': JSON.stringify('production')
    })
  ]
})
