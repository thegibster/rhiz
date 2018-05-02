const mongoose = require('mongoose');
const User = mongoose.model('users');
const googleAPI = require('./googleAPI');

module.exports = {
  serviceHandler: async (accessToken, refreshToken, profile, done ) => {
    let authUser = null;
    switch (profile.provider) {
        case 'google': 
        authUser = googleAPI.googleUser(profile);
        console.log("authUser", authUser);
        break;
    }
    console.log("Profile", profile);
    User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
        // already have a record of this user
        done(null, existingUser);
        } else {
        // no user record, so create record
        new User({
            googleId: profile.id,
            displayName: profile.displayName
        })
            .save()
            .then(user => done(null, user));
        }
    });
  }
}