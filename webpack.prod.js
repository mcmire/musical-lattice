const webpack = require("webpack");
const mergeWebpackConfig = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = require("./config");
const common = require("./webpack.common.js");

const ownCssBundle = new ExtractTextPlugin({
  filename: "[name]-[contenthash].css",
  allChunks: true
});
const vendorCssBundle = new ExtractTextPlugin({
  filename: "[name]-[contenthash].css",
  allChunks: true
});

module.exports = mergeWebpackConfig(common, {
  entry: ["babel-polyfill", "./client/index.js"],
  devtool: "source-map",
  output: {
    filename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ownCssBundle.extract({
          use: {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[path]__[name]__[local]__[hash:base64:5]"
            }
          },
          fallback: {
            loader: "style-loader",
            options: {
              sourceMap: true
            }
          }
        })
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: vendorCssBundle.extract({
          use: "css-loader",
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([config.staticDirectoryName]),
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    ownCssBundle,
    vendorCssBundle
  ]
});
