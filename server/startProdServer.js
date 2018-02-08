const express = require("express");
const startServer = require("./startServer");
const config = require("../config");

startServer(app => {
  app.use(config.staticUri, express.static(config.staticDirectoryPath));
});
