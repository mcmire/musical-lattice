const path = require("path");

module.exports = {
  entry: "./app/index.js",
  devtool: "cheap-module-eval-source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
};
