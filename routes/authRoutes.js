const express = require('express');
const passport = require("passport");
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("users")
const bcrypt =require('bcrypt');

// Google Authenication.
router.get("/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);
router.get("/google/callback", [passport.authenticate("google"), (req, res) => {
  res.redirect('/profile');
}]);

// Linkedin Authentication.
router.get("/linkedin", 
  passport.authenticate("linkedin", {
    scope: [ 'r_basicprofile', 'r_emailaddress' ]
  })
);
router.get("/linkedin/callback", [passport.authenticate("linkedin"), (req, res) => {
  res.redirect("/profile")
}]);

// Facebook Authenication.
router.get("/facebook", passport.authenticate("facebook"));

router.get("/facebook/callback", passport.authenticate("facebook", { failureRedirect: "/consumer" }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

// Local Authentication
router.post("/login", (req, res, done) => { 
  const { fullName, email, password } = req.body;
  // password encryption
  const saltRounds = 10;
  let hashedPassword = '';
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      hashedPassword = hash;
    });
  });
  User.findOne({ fullName: fullName }).then(existingUser => {
    if (existingUser) {
      // already have a record of this user
      done(null, existingUser);
    } else {
      // no user record, so create record
      new User({
        fullName: fullName,
        email: email,
        password: hashedPassword
      })
        .save()
        .then(user => done(null, user));
    }
  });
  res.redirect("/");
});

router.post("/login", 
  passport.authenticate("local", { failureRedirect: "/consumer" }),
  function(req, res) {
    res.redirect("/");
  }
);

// Logout 
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// Get Current User
router.get("/current_user", (req, res) => {
  res.send(req.user);
});

module.exports = router;
