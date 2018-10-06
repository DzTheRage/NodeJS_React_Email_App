const passport = require('passport');

//// Router Handlers

// Google Auth Route Handler
module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );
  // Google AuthCode Router Handler
  app.get('/auth/google/callback', passport.authenticate('google'));

  // Logout
  app.get('/api/logout', (req, res) => {
    // passport logout method
    req.logout();
    res.send(req.user);
  });

  // GET Request to App
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
