/**
 * Created by cuitao-pc on 16/7/18.
 */

var path = require("path");

module.exports = {
  context: path.resolve(__dirname, "../src"),
  entry: "./client",
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "bundle.js"
  }
};