// Dependencies
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const Tteok = require('../models/tteok.js');

// Index
router.get('/', (req, res) => {
  Tteok.find({}, (error, allTteok) => {
    res.render('cart/index.ejs', {
      tteok: allTteok,
      currentUser: req.session.currentUser,
      createdUser: req.session.createdUser,
    });
  });
})

// Show / Review
router.get('/:id', (req, res) => {
  Tteok.findById(req.params.id, (error, foundProduct) => {
    res.render('cart/review.ejs', {
      tteok: foundProduct,
    });
  });
})

// Export User Router
module.exports = router;