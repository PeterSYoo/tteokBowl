const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tteokBowlSchema = new Schema({
  toppings: {
    riceCakes: {
      extra: {
        type: Boolean
      },
      price: {
        type: Number
      },
      include: {
        type: Boolean
      },
      name: {
        type: String
      }
    },
    ramenNoodles: {
      extra: {
        type: Boolean
      },
      price: {
        type: Number
      },
      include: {
        type: Boolean
      },
      name: {
        type: String
      }
    },
    fishCakes: {
      extra: {
        type: Boolean
      },
      price: {
        type: Number
      },
      include: {
        type: Boolean
      },
      name: {
        type: String
      }
    },
    eggs: {
      extra: {
        type: Boolean
      },
      price: {
        type: Number
      },
      include: {
        type: Boolean
      },
      name: {
        type: String
      }
    },
    cheese: {
      extra: {
        type: Boolean
      },
      price: {
        type: Number
      },
      include: {
        type: Boolean
      },
      name: {
        type: String
      }
    }
  },
  spiceLevel: {
    mild: {
      type: Boolean
    },
    original: {
      type: Boolean
    },
    spicy: {
      type: Boolean
    },
    volcano: {
      type: Boolean
    }
  }
});

const TteokBowl = mongoose.model('TteokBowl', tteokBowlSchema);
module.exports = TteokBowl;