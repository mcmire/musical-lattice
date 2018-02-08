exports.seed = knex => {
  return knex("users")
    .del()
    .then(() => {
      return knex("users").insert([
        {
          email: "john.smith@gmail.com",
          encrypted_password: "123456",
          name: "John Smith"
        },
        {
          email: "jane.smith@gmail.com",
          encrypted_password: "123456",
          name: "Jane Smith"
        },
        {
          email: "steve.smith@gmail.com",
          encrypted_password: "123456",
          name: "Steve Smith"
        }
      ]);
    });
};
