const { Router } = require('express');

const UsersController = require('./app/controllers/UsersController');
const AuthController = require('./app/controllers/AuthController');
const ProposalController = require('./app/controllers/ProposalController');
const ContactController = require('./app/controllers/ContactController');
const BillsController = require('./app/controllers/BillsController');

const validationUser = require('./app/middlewares/validations/users');
const validationContact = require('./app/middlewares/validations/contact');
const validationProposal = require('./app/middlewares/validations/proposal');
const validationBill = require('./app/middlewares/validations/bill');

const adminMiddleware = require('./app/middlewares/adminMiddleware');
const authMiddleware = require('./app/middlewares/authMiddleware');

const multerMiddleware = require('./app/middlewares/multerMiddleware');

const routes = Router();

routes.get('/', (req, res) => res.json({ ok: true }))

  // Routes for users
  .post('/users', validationUser.create, UsersController.create)
  .patch('/users', authMiddleware, validationUser.update, UsersController.update)

  // Routes for authenticate
  .post('/auth', validationUser.auth, AuthController.auth)

  // Routes for proposal
  .post('/proposal', authMiddleware, adminMiddleware, validationProposal, ProposalController.create)
  .get('/proposal', authMiddleware, ProposalController.index)
  .get('/proposal/:id', authMiddleware, ProposalController.show)
  .put('/proposal/:id', authMiddleware, adminMiddleware, ProposalController.update)
  // Routes for contacts
  .get('/contacts', authMiddleware, adminMiddleware, ContactController.index)
  .post('/contacts', authMiddleware, validationContact, ContactController.create)

  // Routes for bills
  .post('/bills', authMiddleware, adminMiddleware, multerMiddleware.config, validationBill, BillsController.create)
  .get('/bills', authMiddleware, BillsController.index)
  .delete('/bills/:id', authMiddleware, adminMiddleware, BillsController.deleteBill);

module.exports = routes;
