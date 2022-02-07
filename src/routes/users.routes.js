const usersControllers = require('../app/controllers/users.controller');

module.exports = (server, routes, prefix = '/api/users') => {
  routes.post('/', usersControllers.create);
  routes.get('/', usersControllers.findAll);
  routes.get('/:id', usersControllers.findOne);
  server.use(prefix, routes);
};
