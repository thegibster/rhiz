const mongoose = require('mongoose');
const User = mongoose.model('users');
const googleAPI = require('./googleAPI');
const linkedinAPI = require('./linkedinAPI');

module.exports = {
  serviceHandler: async (accessToken, refreshToken, profile, done ) => {
    let authUser = null;
    // determines whether user is logging in with linkedin or google
    switch (profile.provider) {
      case 'google': 
        authUser = googleAPI.googleUser(profile);
        break;
        case 'linkedin':
        authUser = linkedinAPI.linkedInUser(profile);
        break;
    }

  // Search for user by authentication ID
  let existingUser = await User.findOne({ [authUser.identifier]: profile.id });
	if (existingUser) {
		return done(null, existingUser);
	}
	// Check to see if user already exists by comparing email addresses
	existingUser = await User.findOne({ email: authUser.userModel.email });
	// If email exists, update user record with new authentication ID
	if (existingUser) {
		existingUser[authUser.identifier] = authUser.userModel[authUser.identifier];
		existingUser[authUser.profileUrlId] = authUser.userModel[authUser.profileUrlId];

		try {
            existingUser = await existingUser.save();
            console.log("new ExistingUser", existingUser);
			return done(null, existingUser);
		} catch (error) {
			console.log(error);
		}
    }
    
    // Create a new user record is user does not exist
	const user = await User(authUser.userModel).save();
	done(null, user);
  }
}