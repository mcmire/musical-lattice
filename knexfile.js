const APP_NAME = "fakenstocks";
const DATABASE_URL = process.env.DATABASE_URL;
const KNEX_MIGRATION_TABLE_NAME = "knex_migrations";

const localConnection = {
  database: `${APP_NAME}_development`
};

const hostedConfiguration = {
  client: "postgresql",
  connection: DATABASE_URL || localConnection,
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: KNEX_MIGRATION_TABLE_NAME
  },
  seeds: {
    directory: "./seeds/production"
  }
};

module.exports = {
  development: {
    client: "postgresql",
    connection: localConnection,
    migrations: {
      tableName: KNEX_MIGRATION_TABLE_NAME
    },
    seeds: {
      directory: "./seeds/development"
    }
  },
  staging: hostedConfiguration,
  production: hostedConfiguration
};
