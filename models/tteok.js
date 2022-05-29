const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eggsSchema = new Schema({
  qty: Number,
  price: Number,
});

const cheeseSchema = new Schema({
  include: Boolean,
  price: Number,
});

const ramenNoodlesSchema = new Schema({
  include: Boolean,
  price: Number,
});

const riceCakeSchema = new Schema({
  include: Boolean,
  price: Number,
});

const fishCakeSchema = new Schema({
  include: Boolean,
  price: Number,
});

const buildBowlSchema = new Schema({
  spiceLevel: Number,
  eggs: [eggsSchema],
  cheese: [cheeseSchema],
  ramenNoodles: [ramenNoodlesSchema],
  riceCake: [riceCakeSchema],
  fishCake: [fishCakeSchema],
 }, {
  timestamps: true
 });
 
const tteokBowlSchema = new Schema({
  choices: [buildBowlSchema],
}, {
  timestamps: true
});

const TteokBowl = mongoose.model('TteokBowl', tteokBowlSchema);
module.exports = TteokBowl;