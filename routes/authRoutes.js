const express = require('express');
const passport = require("passport");
const router = express.Router();

// Google Authenication.
router.get("/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get("/google/callback", [passport.authenticate("google"), (req, res) => {
  res.redirect('/');
}]);

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/current_user", (req, res) => {
  res.send(req.user);
});


module.exports = router;
