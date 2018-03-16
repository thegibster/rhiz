const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const mongoose = require('mongoose');
const keys = require("../config/keys");
const User = mongoose.model('users');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("Profile", profile);
      User.findOne({ googleId: profile.id })
        .then((existingUser)=> {
          if (existingUser) {
            // already have a record of this user
            done(null, existingUser)
          } else {
            // no user record, so create record
            new User({
              googleId: profile.id,
              displayName: profile.displayName
            }).save()
            .then(user => done(null, user));
          }
        })

      
    }
  )
);
