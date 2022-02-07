const UsersRepository = require('../repositories/UsersRepository');

class UsersServices {
  async createUser(payload) {
    return UsersRepository.create(payload);
  }

  async listAllUsers() {
    return UsersRepository.findAll();
  }

  async findOneUser(id) {
    const user = await UsersRepository.findOne(id);
    if (!user) console.log('Not Found');
    return user;
  }
}

module.exports = new UsersServices();
