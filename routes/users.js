const express = require('express');
const { createUser } = require('../models/users.js');
const { authenticate } = require('../lib/auth');

const usersRouter = express.Router();

/**
 * Creates a new user by handling the POST request from a form with action `/users`
 * It uses the createUser middleware from the user model
 */

/**
 * Takes the user to its profile by handling any GET request to `/users/profile`
 * It redirects to /login when attempted to be reached by a non logged in user
 * It is "protect" by the authenticate middleware from the auth library
 */
 usersRouter.get('/profile', authenticate, (req, res) => {
  res.render('/users/profile', { user: res.user });
 });

usersRouter.post('/', createUser, (req, res) => {
  res.redirect('/');
});

 module.exports = usersRouter;
