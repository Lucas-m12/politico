const { Router } = require('express');

const UsersController = require('./app/controllers/UsersController');

const validationUser = require('./app/middlewares/validations/users');
const authMiddleware = require('./app/middlewares/authMiddleware');

const routes = Router();

routes.get('/', (req, res) => res.json({ ok: true }))

  // Routes for users
  .post('/users', validationUser.create, UsersController.create)
  .patch('/users', validationUser.update, authMiddleware, UsersController.update);

module.exports = routes;
