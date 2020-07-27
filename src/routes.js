const { Router } = require('express');

const UsersController = require('./app/controllers/UsersController');
const AuthController = require('./app/controllers/AuthController');
const ContactController = require('./app/controllers/ContactController');
const BillsController = require('./app/controllers/BillsController');

const validationUser = require('./app/middlewares/validations/users');
const authMiddleware = require('./app/middlewares/authMiddleware');

const multerMiddleware = require('./app/middlewares/multerMiddleware');

const routes = Router();

routes.get('/', (req, res) => res.json({ ok: true }))

  // Routes for users
  .post('/users', validationUser.create, UsersController.create)
  .patch('/users', validationUser.update, authMiddleware, UsersController.update)

  .post('/auth', validationUser.auth, AuthController.auth);

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

// Routes for contacts
routes.get('/contact', ContactController.get);
routes.post('/contact', ContactController.create);

// Routes for bills 
routes.post('/bills', multerMiddleware.config, BillsController.create);

module.exports = routes;
