/**
 * Created by cuitao-pc on 16/7/18.
 */

import path from "path";
import HtmlWebpackPlugin from 'html-webpack-plugin';
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
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=2&sourceMap!autoprefixer?browsers=last 2 version!less?outputStyle=expanded&sourceMap=true&sourceMapContents=true') },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=2&sourceMap!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap=true&sourceMapContents=true') },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
    ]
  },
  externals: {
    "jquery": "jQuery"
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new ExtractTextPlugin("styles.css")
  ]
};