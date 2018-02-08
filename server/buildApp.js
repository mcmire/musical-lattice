const fs = require("fs");
const path = require("path");
const express = require("express");
const User = require("./models/User");
const config = require("../config");
let webpackManifest;

function renderIndex(req, res) {
  res.render("index", {
    staticDirectoryName: config.staticDirectoryName,
    jsBundleFileName: webpackManifest["main.js"]
  });
}

function buildApp(customizeApp) {
  const app = express();
  webpackManifest = JSON.parse(
    fs.readFileSync(
      path.join(config.staticDirectoryPath, "manifest.json")
    )
  );

  app.set("views", path.join(__dirname, "../client/views"));
  app.set("view engine", "pug");

  customizeApp(app);

  app.get("/", renderIndex);
  app.get("/members", renderIndex);
  app.get("/users.json", async (req, res) => {
    const users = await User.query().map(user => {
      return { id: user.id, name: user.name };
    });

    res.json({ users });
  });

  return app;
}

module.exports = buildApp;
