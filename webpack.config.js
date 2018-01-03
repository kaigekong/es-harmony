const path = require('path');
const webpack = require('webpack');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            plugins: ['syntax-dynamic-import', 'transform-async-to-generator', 'transform-regenerator', 'transform-runtime'],
            presets: ['babel-preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new cleanWebpackPlugin(),
    new htmlWebpackPlugin({
      inject: true,
      title: 'ES Harmony',
      template: './public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};