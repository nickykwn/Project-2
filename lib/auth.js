const bcrypt = require('bcryptjs');
const userModel = require('../models/user');

function logIn(req, res, next) {
  const userPayload = req.body.user;

  console.log(userPayload.password);
  userModel.getUserByUsername(userPayload.username).then((dbUser) => {
    const matches = bcrypt.compareSync(userPayload.password, dbUser.password);

    console.log(dbUser.password, matches);
    if (matches) {
      req.session.userId = dbUser._id;
      res.user = dbUser;
      next();
    } else {
      res.redirect('/');
    }
  });
}

function authenticate(req, res, next) {
  if(req.ession.userID) {
    userModel.getUserById(req.session.userId).then((dbUser) => {
      res.user = dbUser;
      next();
    }).catch(() => {
      console.log('Error: ', err);
      res.redirect('/login');
    });
  } else {
    res.redirect('/login');
  }
}

module.exports = {
  logIn,
  authenticate
};
