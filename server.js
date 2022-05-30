require('dotenv').config()
// Dependencies
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require ('mongoose');
const app = express();
const db = mongoose.connection;
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

const TteokBowl = require('./models/tteok')

// Database Connect
mongoose.connect(MONGODB_URI , {});
// Database Error / Success
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongod connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongod disconnected'));

// Middleware
//use public folder for static assets
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Method Override
app.use(methodOverride('_method'));

// Routes
// Index
app.get('/' , (req, res) => {
    res.render('index.ejs', {
      tabTitle: 'Tteok Bowl',
    })
});

// Show
app.get('/sets/:id' , (req, res) => {
  TteokBowl.findById(req.params.id, (error, foundBowl) => {
    res.render('index.ejs', {
      tteok: foundBowl,
      tabTitle: 'Tteok Bowl | Premade Bowl',
    });
  });
})

// Create
app.post('/', (req, res) => {
  TteokBowl.create(req.body, (error, createdBowls) => {
		res.redirect('/');
    console.log(req.body);
  });
})

// Listener
app.listen(PORT, () => console.log('express is listening on:', PORT));