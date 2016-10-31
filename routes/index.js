const express = require('express');

const indexRouter = express.Router();

// This is the route that serves your '/' homepage
indexRouter.get('/', (req, res) => {
  res.render('index');
});

// This route serves your `/login` form
indexRouter.get('/login', (req, res) => {
  res.render('login');
});

indexRouter.get('/register', (req, res) => {
  res.render('register');
});

module.exports = indexRouter;
