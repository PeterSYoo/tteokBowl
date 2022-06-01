// Dependencies
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const Tteok = require('../models/tteok');

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
              name: req.body.riceCakesExtrasName,
              price: req.body.riceCakesExtrasPrice,
              },
            },
          ramenNoodles: {
            name: req.body.ramenNoodlesName,
            price: req.body.ramenNoodlesPrice,
            choice: req.body.ramenNoodlesChoice,
            extras: {
              choice: req.body.ramenNoodlesExtrasChoice,
              name: req.body.ramenNoodlesExtrasName,
              price: req.body.ramenNoodlesExtrasPrice,
              },
            },
          udonNoodles: {
            name: req.body.udonNoodlesName,
            price: req.body.udonNoodlesPrice,
            choice: req.body.udonNoodlesChoice,
            extras: {
              choice: req.body.udonNoodlesExtrasChoice,
              name: req.body.udonNoodlesExtrasName,
              price: req.body.udonNoodlesExtrasPrice,
              },
            },
          fishCakes: {
            name: req.body.fishCakesName,
            price: req.body.fishCakesPrice,
            choice: req.body.fishCakesChoice,
            extras: {
              choice: req.body.fishCakesExtrasChoice,
              name: req.body.fishCakesExtrasName,
              price: req.body.fishCakesExtrasPrice,
              },
            },
          eggs: {
            name: req.body.eggsName,
            price: req.body.eggsPrice,
            choice: req.body.eggsChoice,
            extras: {
              choice: req.body.eggsExtrasChoice,
              name: req.body.eggsExtrasName,
              price: req.body.eggsExtrasPrice,
              },
            },
          mozzCheese: {
            name: req.body.mozzCheeseName,
            price: req.body.mozzCheesePrice,
            choice: req.body.mozzCheeseChoice,
            extras: {
              choice: req.body.mozzCheeseExtrasChoice,
              name: req.body.mozzCheeseExtrasName,
              price: req.body.mozzCheeseExtrasPrice,
              },
            },
          miniSausages: {
            name: req.body.miniSausagesName,
            price: req.body.miniSausagesPrice,
            choice: req.body.miniSausagesChoice,
            extras: {
              choice: req.body.miniSausagesExtrasChoice,
              name: req.body.miniSausagesExtrasName,
              price: req.body.miniSausagesExtrasPrice,
              },
            },
          spam: {
            name: req.body.spamName,
            price: req.body.spamPrice,
            choice: req.body.spamChoice,
            extras: {
              choice: req.body.spamExtrasChoice,
              name: req.body.spamExtrasName,
              price: req.body.spamExtrasPrice,
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