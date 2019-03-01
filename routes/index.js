var express = require('express');
var router = express.Router();
var passport = require('passport');

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/drivers',
    failureRedirect : '/drivers'
  }
));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fleet Inventory App' });
});

module.exports = router;
