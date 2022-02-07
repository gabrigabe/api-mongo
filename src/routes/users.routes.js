const usersControllers = require('../app/controllers/users.controller');

module.exports = (server, routes, prefix = '/api/users') => {
  routes.post('/', usersControllers.create);
  routes.get('/', usersControllers.findAll);
  server.use(prefix, routes);
};
