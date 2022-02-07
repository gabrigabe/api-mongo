const usersControllers = require('../app/controllers/users.controller');

module.exports = (server, routes, prefix = '/api/users') => {
  routes.post('/', usersControllers.create);
  server.use(prefix, routes);
};
