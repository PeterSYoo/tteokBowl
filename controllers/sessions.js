// Dependencies
const express = require('express');
const bcrypt = require('bcrypt');
const sessionsRouter = express.Router();
const User = require('../models/user.js');

// New (login page)
sessionsRouter.get('/new', (req, res) => {
  res.render('sessions/new.ejs');
})

// Delete (logout route)
sessionsRouter.delete('/', (req, res) => {
  req.session.destroy((error) => {
    res.redirect('/');
  });
})

// Create (login route)
sessionsRouter.post('/', (req, res) => {
  // check for an existing user
  User.findOne({
    email: req.body.email
  }, (error, foundUser) => {
    // send error msg if no user is found
    if (!foundUser) {
      res.send('Oops! No user with that email address has been registered.');
    } else {
      // if a user has been found
      // compare given password with hashed password we have stored
      const passwordMatches = bcrypt.compareSync(req.body.password, foundUser.password);

      // if passwords match
      if (passwordMatches) {
        // add user to our session
        req.session.currentUser = foundUser;

        //  redirect back to home page
        res.redirect('/');
      } else {
        // if passwords don't match
        res.send('Oops! Invalid credentials.');
      }
    }
  });
})

// Export Sessions Router
module.exports = sessionsRouter;