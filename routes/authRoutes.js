const express = require('express');
const passport = require("passport");
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("users")
const bcrypt = require("../services/bcrypt");

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

router.post("/create", async (req, res, done) => { 
  const { fullName, email, password } = req.body;
  // password encryption
  const hashedPassword = await bcrypt.encrypt(password);
  // search for existingUser
  const existingUser = await User.findOne({ fullName: fullName });
  if (existingUser) {
    // already have a record of this user
    console.log("user already exists");
    done(null, existingUser);
  } else {
    console.log("No User matches - creating user")
    let newUser = new User({
      fullName: fullName,
      email: email,
      password: hashedPassword
    });
    newUser.save(function(err) {
      if (err) throw err;
      else {
        console.log("new user saved successfully");
      }
    });
  }
});

// Local Authentication
router.post("/login", 
  passport.authenticate("local", { failureRedirect: "/auth/invalid" }),
  function(req, res) {
    console.log("We hit the right spot!");
    res.redirect("/profile");
  }
);

router.get("/invalid", function(req, res) {
  res.send({ login: false });
});

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
