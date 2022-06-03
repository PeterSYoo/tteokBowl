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
  let bowlUpdate={ 
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
    }

  Tteok.findByIdAndUpdate(
    req.params.id,
    bowlUpdate,
    {new: true},
    (error, updatedBowl) => {
      res.redirect(`/cart`);
      console.log(req.body);
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