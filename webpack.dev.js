const path = require("path");
const webpack = require("webpack");
const common = require("./webpack.common.js");
const mergeWebpackConfig = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const config = require("./config");

const COMMON_ENTRIES = ["babel-polyfill", "react-hot-loader/patch"];

module.exports = mergeWebpackConfig(common, {
  entry: {
    "lattice": [...COMMON_ENTRIES, "./lattice.js"],
    "eleven-limit": [...COMMON_ENTRIES, "./eleven-limit.js"]
  },
  devtool: "cheap-module-source-map",
  output: {
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "app/components"),
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
        exclude: [
          path.resolve(__dirname, "app/components"),
          path.resolve(__dirname, "node_modules")
        ],
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "node_modules"),
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
