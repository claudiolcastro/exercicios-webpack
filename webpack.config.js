const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./ex.5/index.js'],
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    contentBase: __dirname + '/public/'
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ],
  module: {
    loaders: [{
      test: /.js?$/, 
      loader: 'babel-loader',
      exclude: /node_madules/,
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-object-rest-spread']
      }
    }, {
      text: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }]
  }
}
