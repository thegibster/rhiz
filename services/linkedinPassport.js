const passport = require("passport");
const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");
const linkedinService = require("./utils/serviceHandler");

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
    linkedinService.serviceHandler
));