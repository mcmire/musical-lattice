const knexConfig = require("../knexfile.js");
const env = process.env.NODE_ENV || "development";

module.exports = require("knex")(knexConfig[env]);
