const Users = require('../schemas/users.schema');
const Repository = require('./Repository');

class UsersRepository extends Repository {
  constructor() {
    super(Users);
  }
}

module.exports = new UsersRepository();
