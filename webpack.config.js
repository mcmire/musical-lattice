const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [
    // Activate HMR for React:
    "react-hot-loader/patch",
    // Bundle the client for webpack-hot-middleware:
    "webpack-hot-middleware/client?reload=true",
    // Our actual entrypoint:
    "./client/index.js"
  ],
  devtool: "cheap-module-source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    // This is necessary for HMR to know where to load the hot update chunks:
    publicPath: "/assets/"
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    // Enable HMR globally:
    new webpack.HotModuleReplacementPlugin(),
    // Print more readable module names in the browser console on HMR updates:
    new webpack.NamedModulesPlugin(),
    // Do not emit compiled assets that include errors:
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
