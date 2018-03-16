const authRoutes = require('./authRoutes');
const passport = require('passport');

module.exports = app => {
  app.use('/auth', authRoutes);
}
