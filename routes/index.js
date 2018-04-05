const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const passport = require('passport');

//TODO(jcarter): I would set up root level items here and import other route docs.
// That way you dont have like 100 routes in one file.
module.exports = app => {
  
  app.use('/auth', authRoutes);

}