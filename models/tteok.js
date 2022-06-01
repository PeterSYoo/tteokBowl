const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tteokBowlSchema = new Schema({
  name: String,
  spiceLevel: {
    name: {
      type: String
    }
  },
  toppings: {
    riceCakes: {
      price: {
        type: Number
      },
      choice: {
        type: Boolean
      },
      name: {
        type: String
      },
      extras: {
        price: {
          type: Number
        },
        choice: {
          type: Boolean
        },
        name: {
          type: String
        }
      }
    }
  }
});

const TteokBowl = mongoose.model('TteokBowl', tteokBowlSchema);
module.exports = TteokBowl;