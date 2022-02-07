const UsersRepository = require('../repositories/UsersRepository');

class UsersServices {
  async createUser(payload) {
    return UsersRepository.create(payload);
  }

  async listAllUsers() {
    return UsersRepository.findAll();
  }
}

module.exports = new UsersServices();
