const express = require('express');
const passport = require("passport");
const router = express.Router();

router.get('/facebook', function(req, res) {
  res.send({ test: "working" });
})

router.get("/google", passport.authenticate(
  "google", {
    scope: ["profile", "email"]
  })
);

module.export = router;