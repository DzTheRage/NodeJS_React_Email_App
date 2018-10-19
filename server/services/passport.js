const passport = require('passport');
const googleStragey = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

// Put user.id into cookie
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Take what's inside cookie
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// Register strategy to passport
// 3rd parm is route to user after permissions
// Callback at end to do something with user
passport.use(
  new googleStragey(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    // Callback
    async (accessToken, refreshToken, profile, done) => {
      // All of Google User's Info found
      // Query with mongoose to check user with PROMISE

      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        /// Existing User Found
        // tell passport we're finished // done(error, userRecord)
        return done(null, existingUser);
      }
      // New User
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
