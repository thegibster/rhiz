const express = require('express'),
 passport = require("passport"),
 router = express.Router(),
 mongoose = require('mongoose'),
 User = mongoose.model("users"),
 bcrypt = require("../services/bcrypt");

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
    scope: ['r_basicprofile', 'r_emailaddress']
  })
);
router.get("/linkedin/callback", [passport.authenticate("linkedin"), (req, res) => {
  res.redirect("/profile")
}]);

// Facebook Authenication.
router.get("/facebook", passport.authenticate("facebook"));

router.get("/facebook/callback", passport.authenticate("facebook", {
    failureRedirect: "/consumer"
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);


router.post("/create", async (req, res, done) => {
  const {
    username,
    email,
    password,
    company,
    category
  } = req.body;
  // password encryption
  const hashedPassword = await bcrypt.encrypt(password);
  // search for existingUser
  const existingUser = await User.findOne({
    fullName: fullName
  });
  if (existingUser) {
    // already have a record of this user
    console.log("user already exists");
    done(null, existingUser);
  } else {
    console.log("No User matches - creating user")
    let newUser = new User({
      fullName: fullName,
      username: username,
      email: email, 
      password: hashedPassword,
      company: company,
      category: category
    });
    newUser.save(function (err) {
      if (err) throw err;
      else {
        console.log("new user saved successfully");
        // res.redirect("/login");
        res.send(true);
        // console.log("res", res);
      }
    });
  }
});

// Local Authentication
router.post("/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/invalid"
  }),
  function (req, res) {
    console.log("We hit the right spot!");
    res.redirect("/profile");
  }
);

router.get("/invalid", function (req, res) {
  res.send({
    login: false
  });
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