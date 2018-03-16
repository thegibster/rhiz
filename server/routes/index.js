const authRoutes = require('./authRoutes');
const passport = require('passport');

module.exports = app => {
  app.use('/auth', authRoutes);
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  })
}
