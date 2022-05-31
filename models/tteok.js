const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tteokBowlSchema = new Schema({
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
  },
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
    mozzCheese: {
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
    udonNoodles: {
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
    miniSausages: {
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
    spam: {
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
  }
});

const TteokBowl = mongoose.model('TteokBowl', tteokBowlSchema);
module.exports = TteokBowl;