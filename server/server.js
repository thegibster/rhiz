const express = require('express');
const cookieSession = require('cookie-session');
const passport = require("passport");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const keys = require('./config/keys');
const PORT = process.env.PORT || 4000;
const app = express();

app.use(bodyParser.json());

// wire up cookies for login
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongodbURI);
require('./models/User');
require('./services/googlePassport');

require('./routes')(app);

app.listen(PORT, function() {
    console.log('app listening on Port ' + PORT);
})