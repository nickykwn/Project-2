const express = require('express');
const { logIn } = require('../lib/auth');

// Router
const authRouter = express.Router();

// authRouter.get('/user/profile', logIn, (req, res) => {
//   res.render('/users/profile');
// });
/**
  * Log In and if successful assign res.uder._id to the session
  * It uses the logIn middleware from the auth library to parse the form inputs
  * and save the user to the database
  */
  authRouter.post('/', logIn, (req, res) => {
    res.redirect('/users/profile');
  });

  authRouter.delete('/', (req, res) => {
    req.session.userId = null;
    res.redirect('/');
  });

  module.exports = authRouter;
