const path = require("path");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackConfig = require("./webpack.config.js");
const webpackCompiler = webpack(webpackConfig);
const express = require("express");
const app = express();

app.set("views", path.join("app/views"));
app.set("view engine", "pug");

app.use(
  webpackDevMiddleware(webpackCompiler, {
    // webpack-dev-middleware options
  })
);

app.get("*", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
