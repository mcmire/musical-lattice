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
      }
    ]
  },
  plugins: [
    new ManifestPlugin({
      writeToFileEmit: true
    })
  ]
};
