/// EXPRESS SERVER ///
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

// Require to run on load, order of require statements can cause errors
require('./models/user');
require('./services/passport');

// Connect to mongoDB
mongoose.connect(keys.mongoURI);

const app = express();

// Use cookies in express application
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKiey]
  })
);
// Tell passport to use cookies
app.use(passport.initialize());
app.use(passport.session());

// Import authRoutesFile function (special way to do it)
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
