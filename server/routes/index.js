const authRoutes = require('./authRoutes');

module.exports = app => {
  app.use('/auth', function(req, res) {
    res.send({ hi: "there" });
  });
}