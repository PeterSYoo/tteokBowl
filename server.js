require('dotenv').config()
// Dependencies
const express = require('express');
const methodOverride = require('method-override');
const userController = require('./controllers/users');
const sessionsController = require('./controllers/sessions');
const buildController = require('./controllers/buildabowl');
const cartController = require('./controllers/cart');
const session = require('express-session');
const mongoose = require ('mongoose');
const bcrypt = require('bcrypt');
const app = express();
const db = mongoose.connection;
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

const TteokBowl = require('./models/tteok');
const User = require('./models/user.js');

// Database Connect
mongoose.connect(MONGODB_URI , {});
// Database Error / Success
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongod connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongod disconnected'));

// Middleware
// Express Session
app.use(
  session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false,
  }));
// Use public folder for static assets
app.use(express.static(__dirname + '/public'));
// Body parser: gives us access to req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Method Override
app.use(methodOverride('_method'));
app.use(( req, res, next ) => {
  if ( req.query._method == 'DELETE' ) {
      // change the original METHOD
      // into DELETE method
      req.method = 'DELETE';
      req.url = req.path;
  }       
  next(); 
});
// Controllers
app.use('/users', userController);
app.use('/sessions', sessionsController);
app.use('/buildabowl', buildController);
app.use('/cart', cartController);

// Routes
// Index
app.get('/', (req, res) => {
		res.render('index.ejs', {
			currentUser: req.session.currentUser,
		});
});

// Show
app.get('/sets/:id' , (req, res) => {
  TteokBowl.findById(req.params.id, (error, foundBowl) => {
    res.render('/sets/index.ejs', {
      tteok: foundBowl,
      tabTitle: 'Tteok Bowl | Premade Bowl',
    });
  });
})

// Create / Login route
app.post('/', (req, res) => {
  // check for an existing user
  User.findOne({
    email: req.body.email
  }, (error, foundUser) => {
    // send error msg if no user is found
    if (!foundUser) {
      res.send('Oops! No user with that email address has been registered.');
    } else {
      // if a user has been found
      // compare given password with hashed password we have stored
      const passwordMatches = bcrypt.compareSync(req.body.password, foundUser.password);

      // if passwords match
      if (passwordMatches) {
        // add user to our session
        req.session.currentUser = foundUser;

        //  redirect back to home page
        res.redirect('/');
      } else {
        // if passwords don't match
        res.send('Oops! Invalid credentials.');
      }
    }
  });
})


// Listener
app.listen(PORT, () => console.log('express is listening on:', PORT));