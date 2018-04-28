const passport = require("passport");
const LocalStrategy = require("passport-local");
const mongoose = require("mongoose");
const keys = require("../config/keys");
const User = mongoose.model("users");

passport.use(
  new LocalStrategy(function(username, password, done) {
    console.log("Passport local", username, password);
    // User.findOne({ username: username }, function(err, user) {
    //   if (err) {
    //     return done(err);
    //   }
    //   if (!user) {
    //     return done(null, false);
    //   }
    //   if (!user.verifyPassword(password)) {
    //     return done(null, false);
    //   }
    //   return done(null, user);
    // });
  })
);
