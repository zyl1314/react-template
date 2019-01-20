const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebapckPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src/index'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    port: 8080,
    host: 'localhost',
    overlay: true,
    compress: false,
    openPage: '/#/home',
    open: 'Chrome'
  },
  resolve: {
    extensions: [".js", ".scss", ".json"],
    alias: {
      '@src': path.resolve(__dirname, '../src'),
      '@component': path.resolve(__dirname, '../src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextWebapckPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        }),
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)/,
        use: {
          loader: 'url-loader',
          options: {
            outputPath: 'images/', // 图片输出的路径
            limit: 1 * 1024
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([path.join(__dirname, 'dist')]),
    new ExtractTextWebapckPlugin("styles.css"),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../template.html'),
      filename: 'index.html',
      hash: true
    })
  ]
}
