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
    name: req.body.name,
    img: req.body.img,
    spiceLevel: {
      mild: req.body.mild,
      original: req.body.original,
      spicy: req.body.spicy,
      volcano: req.body.volcano,
      },
    toppings: {
      riceCakes: {
        price: req.body.riceCakesPrice,
        extras: {
          price: req.body.riceCakesExtrasPrice,
          },
        },
      ramenNoodles: {
        price: req.body.ramenNoodlesPrice,
        extras: {
          price: req.body.ramenNoodlesExtrasPrice,
          },
        },
      udonNoodles: {
        price: req.body.udonNoodlesPrice,
        extras: {
          price: req.body.udonNoodlesExtrasPrice,
          },
        },
      fishCakes: {
        price: req.body.fishCakesPrice,
        extras: {
          price: req.body.fishCakesExtrasPrice,
          },
        },
      eggs: {
        price: req.body.eggsPrice,
        extras: {
          price: req.body.eggsExtrasPrice,
          },
        },
      mozzCheese: {
        price: req.body.mozzCheesePrice,
        extras: {
          price: req.body.mozzCheeseExtrasPrice,
          },
        },
      miniSausages: {
        price: req.body.miniSausagesPrice,
        extras: {
          price: req.body.miniSausagesExtrasPrice,
          },
        },
      spam: {
        price: req.body.spamPrice,
        extras: {
          price: req.body.spamExtrasPrice,
          },
        },
      },
  }, (error, createdBowl) => {
		res.redirect('/cart');
    console.log(req.body);
  });
})

// Export User Router
module.exports = router;