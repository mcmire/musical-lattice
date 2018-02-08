const knex = require("../knex");
const { Model } = require("objection");

Model.knex(knex);

module.exports = Model;
