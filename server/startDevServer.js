const startServer = require("./startServer");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackConfig = require("../webpack.config.js");

startServer(app => {
  const webpackCompiler = webpack(webpackConfig);

  app.use(
    webpackDevMiddleware(webpackCompiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    })
  );

  app.use(webpackHotMiddleware(webpackCompiler));
});
