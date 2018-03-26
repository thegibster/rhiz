const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const passport = require('passport');

//TODO(jcarter): I would set up root level items here and import other route docs.
// That way you dont have like 100 routes in one file.
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/current_user', (req, res) => {
  res.send(req.user);
});

module.exports = router;
