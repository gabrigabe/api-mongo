class UsersController {
  teste(req, res) {
    res.send('Hey');
  }
}

module.exports = new UsersController();
