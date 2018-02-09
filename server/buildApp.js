const fs = require("fs");
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const User = require("./models/User");
const config = require("../config");

let webpackManifest;
function readWebpackManifest() {
  if (!webpackManifest) {
    webpackManifest = JSON.parse(
      fs.readFileSync(path.join(config.staticDirectoryPath, "manifest.json"))
    );
  }

  return webpackManifest;
}

function renderIndex(req, res) {
  const webpackManifest = readWebpackManifest();

  res.render("index", {
    staticDirectoryName: config.staticDirectoryName,
    jsBundleFileName: webpackManifest["main.js"],
    cssBundleFileName: webpackManifest["main.css"]
  });
}

function buildApp(customizeApp) {
  const app = express();

  app.set("views", path.join(__dirname, "../client/views"));
  app.set("view engine", "pug");

  customizeApp(app);

  app.use(morgan("tiny"));
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
