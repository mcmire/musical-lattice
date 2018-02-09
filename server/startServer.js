const buildApp = require("./buildApp");

function determinePort() {
  if (process.env.PORT == null) {
    if (process.env.NODE_ENV === "production") {
      return 80;
    } else {
      return 3000;
    }
  } else {
    return process.env.PORT;
  }
}

function startServer(customizeApp) {
  const app = buildApp(customizeApp);
  const port = determinePort();

  app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
  });
}

module.exports = startServer;
