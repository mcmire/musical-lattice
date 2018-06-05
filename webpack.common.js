const path = require("path");
const config = require("./config");
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
      },
      {
        test: /\.pug$/,
        use: "pug-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js", ".svg", ".css"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "lattice.pug",
      inject: "body",
      filename: "index.html"
    })
  ]
};
