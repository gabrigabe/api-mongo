const UsersServices = require('../services/users.services');

class UsersController {
  async create(req, res) {
    const teste = await UsersServices.createUser(req.body);
    return res.status(201).json(teste);
  }

  async findAll(req, res) {
    const allUsers = await UsersServices.listAllUsers();
    return res.status(200).json(allUsers);
  }
}

module.exports = new UsersController();
