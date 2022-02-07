const usersControllers = require('../controllers/users.controllers');

module.exports = (server, routes, prefix = '/api/users') => {
  routes.get('/', usersControllers.teste);
  server.use(prefix, routes);
};
