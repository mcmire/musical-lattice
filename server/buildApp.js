const User = require("./models/User");

function renderIndex(req, res) {
  res.render("index");
}

function buildApp(customizeApp) {
  const path = require("path");
  const express = require("express");
  const app = express();

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
