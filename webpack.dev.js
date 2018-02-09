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
  module: {
    rules: [
      {
        test: /\.css/,
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
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
});
