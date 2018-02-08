const path = require("path");
const staticDirectoryName = "assets";
const staticUri = `/${staticDirectoryName}`;

module.exports = {
  staticDirectoryName,
  staticUri,
  staticPublicPath: `${staticUri}/`,
  staticDirectoryPath: path.resolve(__dirname, staticDirectoryName)
};
