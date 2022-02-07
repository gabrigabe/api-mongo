const usersControllers = require('../app/controllers/users.controller');

module.exports = (server, routes, prefix = '/api/users') => {
  routes.get('/', usersControllers.teste);
  server.use(prefix, routes);
};
