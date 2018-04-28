const express = require('express');
const passport = require("passport");
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("users")

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
router.post("/create", (req, res, done) => { 
  console.log("IN THE RIGHT SPOT");
  const { fullName, email, password } = req.body;
  console.log(fullName, email, password);
  // try {
  //   new User({
  //     fullName: fullName,
  //     email: email,
  //     password: password
  //   })
  //     .save()
  //     .then(user => done(null, user));
  // } catch (error) {
  //   res.status(500).send(error);
  // }
});

router.post("/login", () => { console.log("hit the right spot!")}
  // passport.authenticate("local", { failureRedirect: "/consumer" }),
  // function(req, res) {
  //   res.redirect("/");
  // }
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
