const path = require("path");
const webpack = require("webpack");
const common = require("./webpack.common.js");
const mergeWebpackConfig = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const config = require("./config");

module.exports = mergeWebpackConfig(common, {
  entry: ["babel-polyfill", "react-hot-loader/patch", "./index.js"],
  devtool: "cheap-module-source-map",
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
            options: {
              sourceMap: true,
              hmr: true
            }
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[path]__[name]__[local]__[hash:base64:6]"
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        exclude: [path.resolve(__dirname, "client")],
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([config.staticDirectoryName]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    hot: true
  }
});
