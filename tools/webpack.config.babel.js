/**
 * Created by cuitao-pc on 16/7/18.
 */

import path from "path";
// import HtmlWebpackPlugin from 'html-webpack-plugin';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
export default {
  context: path.resolve(__dirname, "../src"),
  entry: {
    main: [
      "./client",
      "bootstrap-sass!../tools/bootstrap.config.prod.js"
    ]
  },
  output: {
    path: path.resolve(__dirname, "../build/assets"),
    filename: "[name].js",
    publicPath: "/assets/"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel", include: path.resolve(__dirname, "../src") },
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') }
    ]
  },
  externals: {
    "jquery": "jQuery"
  },
  plugins: [
    //new HtmlWebpackPlugin()
    new ExtractTextPlugin("styles.css")
  ]
};