const path = require("path");
const config = require("./config");
const ManifestPlugin = require("webpack-manifest-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.join(__dirname, "app"),
  output: {
    path: config.staticDirectoryPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|(\w+)\.test\.js$/,
        use: "babel-loader"
      },
      {
        test: /\.(eot|ijmap|svg|ttf|woff|woff2)$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    new ManifestPlugin({
      writeToFileEmit: true
    }),
    new HtmlWebpackPlugin({
      template: "index.pug",
      inject: "body",
      filename: "index.html"
    })
  ]
};
