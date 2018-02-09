const config = require("./config");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = {
  output: {
    path: config.staticDirectoryPath,
    publicPath: config.staticPublicPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
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
    })
  ]
};
