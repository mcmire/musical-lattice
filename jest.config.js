module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/client/tests/mocks/fileMock.js",
    "\\.css$": "identity-obj-proxy"
  },
  testPathIgnorePatterns: ["/node_modules/"],
  setupTestFrameworkScriptFile: "<rootDir>/client/tests/setup.js"
};
