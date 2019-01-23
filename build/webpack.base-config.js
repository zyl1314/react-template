const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, '../src/index'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].js'
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss", ".json"],
    alias: {
      '@src': path.resolve(__dirname, '../src'),
      '@component': path.resolve(__dirname, '../src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 
          { 
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }, 
          'sass-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1 * 1024
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[name].[contenthash].css"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../template.html'),
      filename: 'index.html',
      hash: true
    })
  ]
}
