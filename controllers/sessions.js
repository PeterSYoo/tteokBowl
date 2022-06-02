// Dependencies
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/user.js');

// New (login page)
router.get('/new', (req, res) => {
  res.render('sessions/new.ejs', {
    currentUser: req.session.currentUser,
  });
})

// Error
router.get('/error', (req, res) => {
  res.render('sessions/error.ejs', {
    currentUser: req.session.currentUser,
    createdUser: req.session.createdUser,
  });
});

// Delete (logout route)
router.delete('/', (req, res) => {
  req.session.destroy((error) => {
    res.redirect('/');
  });
});

// Create (login route)
router.post('/', (req, res) => {
  // check for an existing user
  User.findOne({
    email: req.body.email
  }, (error, foundUser) => {
    // send error msg if no user is found
    if (!foundUser) {
      res.redirect('/sessions/error')
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
module.exports = router;