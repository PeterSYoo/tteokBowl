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
      name: String,
      extras: {
        price: Number,
        name: String,
      },
    },
    ramenNoodles: {
      price: Number,
      name: String,
      extras: {
        price: Number,
        name: String,
      },
    },
    udonNoodles: {
      price: Number,
      name: String,
      extras: {
        price: Number,
        name: String,
      },
    },
    fishCakes: {
      price: Number,
      name: String,
      extras: {
        price: Number,
        name: String,
      },
    },
    eggs: {
      price: Number,
      name: String,
      extras: {
        price: Number,
        name: String,
      },
    },
    mozzCheese: {
      price: Number,
      name: String,
      extras: {
        price: Number,
        name: String,
      },
    },
    miniSausages: {
      price: Number,
      name: String,
      extras: {
        price: Number,
        name: String,
      },
    },
    spam: {
      price: Number,
      name: String,
      extras: {
        price: Number,
        name: String,
      },
    },
  },
})

const TteokBowl = mongoose.model('TteokBowl', tteokBowlSchema);
module.exports = TteokBowl;