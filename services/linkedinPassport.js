const passport = require("passport");
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new LinkedInStrategy(
    {
      clientID: keys.linkedInClientID,
      clientSecret: keys.linkedInClientSecret,
      callbackURL: "/auth/linkedin/callback",
      scope: ["r_basicprofile", "r_emailaddress"],
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("Profile", profile);
      User.findOne({ linkedInId: profile.id })
        .then((existingUser)=> {
          if (existingUser) {
            // already have a record of this user
            done(null, existingUser)
          } else {
            // no user record, so create record
            new User({
              linkedInId: profile.id,
              displayName: profile.displayName
            }).save()
            .then(user => done(null, user));
          }
        })
    }
));