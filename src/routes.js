const { Router } = require('express');

const UsersController = require('./app/controllers/UsersController');
const AuthController = require('./app/controllers/AuthController');
const ContactController = require('./app/controllers/ContactController');

const validationUser = require('./app/middlewares/validations/users');
const authMiddleware = require('./app/middlewares/authMiddleware');

const routes = Router();

routes.get('/', (req, res) => res.json({ ok: true }))

  // Route to about 
  .get('/about', (req, res) => {

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

  // Routes for users
  .post('/users', validationUser.create, UsersController.create)
  .patch('/users', validationUser.update, authMiddleware, UsersController.update)

  .post('/auth', validationUser.auth, AuthController.auth);


// Routes for contacts
routes.get('/contact', ContactController.get);
routes.post('/contact', ContactController.create);

module.exports = routes;
