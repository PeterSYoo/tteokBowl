// Dependencies
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const Tteok = require('../models/tteok.js');

// Index
router.get('/', (req, res) => {
  res.render('buildabowl/index.ejs', {
    currentUser: req.session.currentUser,
    createdUser: req.session.createdUser,
  });
});

// Create
router.post('/', (req, res) => {
  Tteok.create({
    spiceLevel: {
      name: req.body.spiceLevelName,
      },
    toppings: {
      riceCakes: {
        name: req.body.riceCakesName,
        extras: {
          choice: req.body.riceCakesExtrasChoice,
          },
        },
      },
  }, (error, createdBowl) => {
		res.redirect('/buildabowl');
    console.log(req.body);
  });
})

// Export User Router
module.exports = router;