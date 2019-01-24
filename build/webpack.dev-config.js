const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base-config');

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    port: 8080,
    host: 'localhost',
    overlay: true,
    compress: false,
    openPage: '#/home',
    open: 'Chrome'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: "eslint-loader"
      }      
    ]
  },  
  plugins: [

  ]
})
