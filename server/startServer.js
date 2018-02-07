const buildApp = require("./buildApp");

function startServer(customizeApp) {
  const app = buildApp(customizeApp);
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
  });
}

module.exports = startServer;
