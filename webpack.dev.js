const webpack = require("webpack");
const common = require("./webpack.common.js");
const mergeWebpackConfig = require("webpack-merge");

module.exports = mergeWebpackConfig(common, {
  entry: [
    "babel-polyfill",
    "react-hot-loader/patch",
    "webpack-hot-middleware/client?reload=true",
    "./client/index.js"
  ],
  devtool: "cheap-module-source-map",
  output: {
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
});
