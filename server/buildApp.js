function buildApp(customizeApp) {
  const path = require("path");
  const express = require("express");
  const app = express();

  app.set("views", path.join(__dirname, "../client/views"));
  app.set("view engine", "pug");

  customizeApp(app);

  app.get("*", (req, res) => {
    res.render("index");
  });

  return app;
}

module.exports = buildApp;
