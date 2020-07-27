const { Router } = require('express');

const UsersController = require('./app/controllers/UsersController');
const AuthController = require('./app/controllers/AuthController');
const ProposalController = require('./app/controllers/ProposalController');
const ContactController = require('./app/controllers/ContactController');
const BillsController = require('./app/controllers/BillsController');

const validationUser = require('./app/middlewares/validations/users');
const validationProposal = require('./app/middlewares/validations/proposal');
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

<<<<<<< HEAD
// Route to about 
routes.get('/about', (req, res) => {

  const about = {
    image: "image.jpg",
    name: "Marcelo do Mauro",
    politicalParty: "Sem partido",
    links: [
      { name: "Facebook", url: "https://www.facebook.com/" },
      { name: "Instagram", url: "https://www.instagram.com/" },
      { name: "Twitter", url: "https://www.twitter.com/" },
    ],
    description: "Marcelo do Mauro, nascido em..."
  }

  res.json(about)
})
=======
  // Routes for proposal
  .post('/proposal', authMiddleware, adminMiddleware, validationProposal, ProposalController.create)
>>>>>>> 1ec1d8e8115f75050a2a8ecc201943ff6e084dc8

  // Routes for contacts
  .get('/contacts', authMiddleware, adminMiddleware, ContactController.index)
  .post('/contacts', authMiddleware, ContactController.create);

// Routes for bills 
routes.post('/bills', multerMiddleware.config, BillsController.create);

module.exports = routes;
