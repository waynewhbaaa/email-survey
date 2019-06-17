const passport = require('passport');
// Google Oauth 2.0
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

const mongoose = require('mongoose');
const User = mongoose.model('users');

// done argument: null (if no error happens), user.id
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Search in mongoDB
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// Use google login, not google plus login api!
passport.use(new GoogleStrategy(
  {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {
      // console.log('refresh Token: ', refreshToken);
      // console.log('profile: ', profile);
      // Verify if the user exists
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser){
        // already have the records
        console.log("the user actually exists!");
        done(null, existingUser);
      }
      else {
        // Create new user instance
        const user = await new User({
          googleId: profile.id,
          fullName: profile.displayName
        }).save();
        done(null, user);
      }
  }
));
