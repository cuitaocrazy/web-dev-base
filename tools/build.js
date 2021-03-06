/**
 * Created by cuitao-pc on 16/7/20.
 */

import webpack from 'webpack';
import wpConfig from './webpack.config.babel';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';

const plugins = [
  new ExtractTextPlugin("styles.css"),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
];

wpConfig.plugins = wpConfig.plugins ? plugins.concat(wpConfig.plugins) : plugins;

const devClient = ["bootstrap-sass!" + path.resolve(__dirname, "./bootstrap.config.prod.js")];

if (typeof wpConfig.entry === "object" && !Array.isArray(wpConfig.entry)) {
  Object.keys(wpConfig.entry).forEach(function (key) {
    wpConfig.entry[key] = devClient.concat(wpConfig.entry[key]);
  });
} else {
  wpConfig.entry = devClient.concat(wpConfig.entry);
}

webpack(wpConfig).run((err, stats) => {
  if(err) throw err;
  console.log(stats.toString({
    "cached": false,
    "cachedAssets": false,
    "colors": {"level": 1, "hasBasic": true, "has256": false, "has16m": false}
  }));
});