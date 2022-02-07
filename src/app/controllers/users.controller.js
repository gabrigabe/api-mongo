const UsersRepository = require('../repositories/UsersRepository');

class UsersController {
  async create(req, res) {
    const teste = await UsersRepository.create(req.body);
    return res.status(201).json(teste);
  }
}

module.exports = new UsersController();
