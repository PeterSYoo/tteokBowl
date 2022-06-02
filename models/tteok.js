const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tteokBowlSchema = new Schema({
  name: String,
  spiceLevel: {
    mild: String,
    original: String,
    spicy: String,
    volcano: String,
    },
  toppings: {
    riceCakes: {
      price: Number,
      extras: {
        price: Number,
      },
    },
    ramenNoodles: {
      price: Number,
      extras: {
        price: Number,
      },
    },
    udonNoodles: {
      price: Number,
      extras: {
        price: Number,
      },
    },
    fishCakes: {
      price: Number,
      extras: {
        price: Number,
      },
    },
    eggs: {
      price: Number,
      extras: {
        price: Number,
      },
    },
    mozzCheese: {
      price: Number,
      extras: {
        price: Number,
      },
    },
    miniSausages: {
      price: Number,
      extras: {
        price: Number,
      },
    },
    spam: {
      price: Number,
      extras: {
        price: Number,
      },
    },
  },
})

const TteokBowl = mongoose.model('TteokBowl', tteokBowlSchema);
module.exports = TteokBowl;