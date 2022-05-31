// Dependencies
const bcrypt = require('bcrypt');
const express = require('express');
const userRouter = express.Router();
const User = require('../models/user.js');

// New (registration page)
userRouter.get('/new', (req, res) => {
  res.render('users/new.ejs', {
    currentUser: req.session.currentUser,
    createdUser: req.session.createdUser,
  });
});

// Create (registration route)
userRouter.post('/', (req, res) => {
  //overwrite the user password with the hashed password, then pass that in to our database
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

  User.create(req.body, (error, createdUser) => {
    if (createdUser) {
      req.session.currentUser = createdUser;
      res.redirect('/');
    } else {
      res.send('Email is already in use!')
    }
  });
});

// Export User Router
module.exports = userRouter;