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
        test: /\.(eot|ijmap|ttf|woff|woff2)$/,
        use: "file-loader"
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true
            }
          }
        ]
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
      filename: "index.html",
      chunks: ["lattice"]
    }),
    new HtmlWebpackPlugin({
      template: "eleven-limit.pug",
      inject: "body",
      filename: "eleven-limit.html",
      chunks: ["eleven-limit"]
    })
  ]
};
