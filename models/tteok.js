const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tteokBowlSchema = new Schema({
  name: String,
  spiceLevel: {
    name: String
    },
  toppings: {
    riceCakes: {
      price: Number,
      choice: Boolean,
      name: String,
      extras: {
        price: Number,
        choice: Boolean,
        name: String,
      },
    },
    ramenNoodles: {
      price: Number,
      choice: Boolean,
      name: String,
      extras: {
        price: Number,
        choice: Boolean,
        name: String,
      },
    },
    udonNoodles: {
      price: Number,
      choice: Boolean,
      name: String,
      extras: {
        price: Number,
        choice: Boolean,
        name: String,
      },
    },
    fishCakes: {
      price: Number,
      choice: Boolean,
      name: String,
      extras: {
        price: Number,
        choice: Boolean,
        name: String,
      },
    },
    eggs: {
      price: Number,
      choice: Boolean,
      name: String,
      extras: {
        price: Number,
        choice: Boolean,
        name: String,
      },
    },
    mozzCheese: {
      price: Number,
      choice: Boolean,
      name: String,
      extras: {
        price: Number,
        choice: Boolean,
        name: String,
      },
    },
    miniSausages: {
      price: Number,
      choice: Boolean,
      name: String,
      extras: {
        price: Number,
        choice: Boolean,
        name: String,
      },
    },
    spam: {
      price: Number,
      choice: Boolean,
      name: String,
      extras: {
        price: Number,
        choice: Boolean,
        name: String,
      },
    },
  },
})

const TteokBowl = mongoose.model('TteokBowl', tteokBowlSchema);
module.exports = TteokBowl;