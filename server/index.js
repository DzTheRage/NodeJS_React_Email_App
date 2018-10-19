/// EXPRESS SERVER ///
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');

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

// Body Parser middleware
app.use(bodyParser.json());

// Import authRoutes and billingRoutes function (special way to do it)
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
