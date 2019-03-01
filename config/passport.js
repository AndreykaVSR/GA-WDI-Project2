var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var Driver = require('../models/driver');


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    //   console.log(profile)
    // a user has logged in with OAuth...
    Driver.findOne({ 'googleId': profile.id }, function(err, driver) {
        if (err) return cb(err);
        if (driver) {
          return cb(null, driver);
        } else {
          // we have a new driver via OAuth!
          var newDriver = new Driver({
            driverFirst: profile.name.givenName,
            driverLast: profile.name.familyName,
            email: profile.emails[0].value,
            googleId: profile.id
          });
          newDriver.save(function(err) {
            if (err) return cb(err);
            return cb(null, newDriver);
          });
        }
      });
  }
));

passport.serializeUser(function(driver, done) {
    done(null, driver.id);
});

passport.deserializeUser(function(id, done) {
    Driver.findById(id, function(err, driver) {
      done(err, driver);
    });
  });