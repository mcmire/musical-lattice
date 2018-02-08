const webpack = require("webpack");
const mergeWebpackConfig = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const config = require("./config");
const common = require("./webpack.common.js");

module.exports = mergeWebpackConfig(common, {
  entry: ["babel-polyfill", "./client/index.js"],
  devtool: "source-map",
  output: {
    filename: "[name].[chunkhash].js"
  },
  plugins: [
    new CleanWebpackPlugin([config.staticDirectoryName]),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
});
