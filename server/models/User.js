const Base = require("./Base");

class User extends Base {
  static get tableName() {
    return "users";
  }
}

module.exports = User;
