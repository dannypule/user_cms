'use strict';

var path = require('path'); // used for path.join etc
var webpack = require('webpack'); // well, it's webpack lol
var HtmlWebpackPlugin = require('html-webpack-plugin'); // ???

module.exports = {
  devtool: 'eval-source-map', // ???
  entry: [
    'webpack-hot-middleware/client?reload=true', // ???
    path.join(__dirname, 'app/main.js') // main.js is the entry file for this app
  ],
  output: {
    path: path.join(__dirname, '/dist/'), // bundled js file is out to dist folder
    filename: '[name].js', // handle name of outputted file
    publicPath: '/' // ???
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html', // html template for this app
      inject: 'body', // ????
      filename: 'index.html' // ????
    }),
    new webpack.optimize.OccurenceOrderPlugin(), // ????
    new webpack.HotModuleReplacementPlugin(), // plugin for hot module reloading
    new webpack.NoErrorsPlugin(), // ????
    new webpack.DefinePlugin({ // ????
      'process.env.NODE_ENV': JSON.stringify('development') // ???? but I assume it defines what env we are in
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/, // test for js and jsx files
      exclude: /node_modules/, // save procesing time by excluding node_modules folder
      loader: 'babel', // loader is called babel
      query: {
        "presets": ["react", "es2015", "stage-0", "react-hmre"] // use these babel presets
      }
    }, {
      test: /\.json?$/, // test for json files
      loader: 'json' // loader is json
    }, {
      test: /\.scss$/, // test for scss files
      loader: 'style!css!sass' // loader are defined here
    }]
  }
};
