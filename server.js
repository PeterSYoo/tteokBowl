require('dotenv').config()
// Dependencies
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require ('mongoose');
const app = express();
const db = mongoose.connection;
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

// Database Connect
mongoose.connect(MONGODB_URI , {});
// Database Error / Success
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongod connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongod disconnected'));

// Middleware
//use public folder for static assets
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Method Override
app.use(methodOverride('_method'));

// Routes
app.get('/' , (req, res) => {
  res.send('Hello World!');
});

// Listener
app.listen(PORT, () => console.log('express is listening on:', PORT));