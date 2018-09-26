const express = require('express');
const cookieSession = require('cookie-session');
const passport = require("passport");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const keys = require('./config/keys');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

// Wire up cookies for login.
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// Set up Passport.
app.use(passport.initialize());
app.use(passport.session());

// Set up frontend file serving
app.use('/', express.static('client/build'));

//TODO(jcarter): I would add some error handling here.
mongoose.connect(keys.mongodbURI);

//TODO(jcarter): I would move CRUD with the DB into the services, and inject schemas there.
require('./models/User');

require('./services/googlePassport');
require('./services/linkedinPassport');
require('./services/facebookPassport');
require('./services/localPassport');

// Run this express heroku production.
if (process.env.NODE_ENV === "production") {
  
  // Import Production routes.
  app.use('/auth', require('./routes/authRoutes'));
} else {
  //TODO(jcarter): Add else for env === dev
  console.log("Dev Environment");
  require('./routes')(app);
}

// express will serve up index.html file if it doesn't recognize route
const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, function() {
    console.log('app listening on Port ' + PORT);
})
