const { Router } = require('express');

const UsersController = require('./app/controllers/UsersController');

const validationUser = require('./app/middlewares/validations/users');

const routes = Router();

routes.get('/', (req, res) => res.json({ ok: true }))

  // Routes for users
  .post('/users', validationUser, UsersController.create);

module.exports = routes;
