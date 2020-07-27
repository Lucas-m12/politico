const { Router } = require('express');

const UsersController = require('./app/controllers/UsersController');
const AuthController = require('./app/controllers/AuthController');
const ProposalController = require('./app/controllers/ProposalController');

const validationUser = require('./app/middlewares/validations/users');
const validationProposal = require('./app/middlewares/validations/proposal');
const adminMiddleware = require('./app/middlewares/adminMiddleware');
const authMiddleware = require('./app/middlewares/authMiddleware');

const routes = Router();

routes.get('/', (req, res) => res.json({ ok: true }))

  // Routes for users
  .post('/users', validationUser.create, UsersController.create)
  .patch('/users', authMiddleware, validationUser.update, UsersController.update)

  // Routes for authenticate
  .post('/auth', validationUser.auth, AuthController.auth)

  // Routes for proposal
  .post('/proposal', authMiddleware, adminMiddleware, validationProposal, ProposalController.create);

module.exports = routes;
