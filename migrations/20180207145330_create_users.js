exports.up = knex => {
  return knex.schema.createTable("users", table => {
    table.increments();
    table.string("email").notNullable();
    table.string("encrypted_password").notNullable();
    table.string("name");
    table.timestamps(true, true);
  });
};

exports.down = knex => {
  return knex.schema.dropTable("users");
};
