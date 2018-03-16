const express = require('express');
const PORT = process.env.PORT || 4000;
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./config/keys');
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

require('./routes')(app);

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('Access Token', accessToken);
      console.log('Refresh Token', refreshToken);
      console.log('profile', profile);
    }
  )
);

app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

 // run this express heroku production
if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file
  app.use(express.static('client/build'));

  // express will serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, function() {
    console.log('app listening on Port ' + PORT);
})