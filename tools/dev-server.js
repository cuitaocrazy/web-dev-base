/**
 * Created by cuitao-pc on 16/7/18.
 */
import WebpackDevServer from "webpack-dev-server";
import  webpack from "webpack";
import wpConfig from "./webpack.config.babel";

const opts = {
  "host": "localhost",
  "port": 8080,
  "publicPath": "/",
  "outputPath": "/",
  "filename": "bundle.js",
  "hot": false,
  "contentBase": "/Users/cuitao-pc/web_storm_test/react-dev-base/build",
  "stats": {
    "cached": false,
    "cachedAssets": false,
    "colors": {"level": 1, "hasBasic": true, "has256": false, "has16m": false}
  }
};
var protocol = "http:";
// var wpConfig = {
//   "module": {"loaders": [{"test": /\.js$/, "loader": "babel"}]},
//   "output": {"path": "/", "filename": "bundle.js"},
//   "entry": {"main": ["/Users/cuitao-pc/web_storm_test/hot_module_replacement_test/hmr_example.js"]},
//   "context": "/Users/cuitao-pc/web_storm_test/hot_module_replacement_test"
// };
new WebpackDevServer(webpack(wpConfig), opts).listen(opts.port, opts.host, function (err) {
  console.log("hello!");
  if (err) throw err;
  if (opts.inline)
    console.log(protocol + "://" + opts.host + ":" + opts.port + "/");
  else
    console.log(protocol + "://" + opts.host + ":" + opts.port + "/webpack-dev-server/");
  console.log("123");
});