/**
 * Created by cuitao-pc on 16/7/18.
 */

import WebpackDevServer from "webpack-dev-server";
import  webpack from "webpack";
import wpConfig from "./webpack.config.babel";
import HotModuleReplacementPlugin from 'webpack/lib/HotModuleReplacementPlugin';

const opts = {
  "host": "localhost",
  "port": 8080,
  "publicPath": wpConfig.output.publicPath ? wpConfig.output.publicPath: "/",
  "contentBase": wpConfig.output.path ? wpConfig.output.path : "/",
  "hot": true,
  "inline": true,
  "stats": {
    "cached": false,
    "cachedAssets": false,
    "colors": {"level": 1, "hasBasic": true, "has256": false, "has16m": false}
  }
};

var devClient = ["webpack-dev-server/client?http://" + opts.host + ":" + opts.port];
devClient.push("webpack/hot/dev-server");
wpConfig.entry = devClient.concat(wpConfig.entry);

wpConfig.plugins = wpConfig.plugins ? [].concat(wpConfig.plugins) : [new HotModuleReplacementPlugin()];

new WebpackDevServer(webpack(wpConfig), opts).listen(opts.port, opts.host, function (err) {
  console.log("hello!");
  if (err) throw err;
  console.log("http://" + opts.host + ":" + opts.port + "/");
});