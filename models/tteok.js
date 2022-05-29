const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const tteokBowlSchema = new Schema({
}, {
  timestamps: true
});

const TteokBowl = mongoose.model('TteokBowl', tteokBowlSchema);
module.exports = TteokBowl;