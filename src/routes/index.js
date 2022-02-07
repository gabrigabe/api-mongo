const { Router } = require('express');
const users = require('./users.routes');

module.exports = (server) => {
  server.use((req, res, next) => {
    users(server, new Router());
    next();
  });
};
