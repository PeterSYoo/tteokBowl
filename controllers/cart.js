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

// Show / Edit / Review
router.get('/:id/review', (req, res) => {
  Tteok.findById(req.params.id, (error, foundTteok) => {
    res.render('cart/review.ejs', {
      tteok: foundTteok,
      currentUser: req.session.currentUser,
      createdUser: req.session.createdUser,
    });
  });
})

// Update
router.put('/:id/review', (req, res) => {
  Tteok.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      spiceLevel: {
        name: req.body.spiceLevelName,
        },
      toppings: {
        riceCakes: {
          name: req.body.riceCakesName,
          price: req.body.riceCakesPrice,
          choice: req.body.riceCakesChoice,
          extras: {
            choice: req.body.riceCakesExtrasChoice,
            },
          },
        },
    },
    (error, updatedLogs) => {
      res.redirect(`/cart`);
    }
  )
});


// Delete
router.delete('/:id', (req, res) => {
	Tteok.findByIdAndDelete(req.params.id, (error, deletedProducts) => {
    res.redirect('/cart');
	});
});

// Export User Router
module.exports = router;