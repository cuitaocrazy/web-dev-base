/**
 * Created by cuitao-pc on 16/7/18.
 */

import path from "path";

export default {
  context: path.resolve(__dirname, "../src"),
  entry: "./client",
  output: {
    path: path.resolve(__dirname, "../build/assets"),
    filename: "[name].js",
    publicPath: "/assets/"
  },
  module: {
    loaders: [
      {test: /\.js$/, loader: "babel"}
    ]
  }
};