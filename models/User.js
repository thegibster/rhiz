const mongoose = require('mongoose');
const {
  Schema
} = mongoose;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
  googleId: {
    type: String
  },
  linkedInId: {
    type: String
  },
  displayName: {
    type: String
  },
  fullName: {
    type: String
  },
  lastName: {
    type: String
  },
  firstName: {
    type: String
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  company: {
    type: String
  },
  category: {
    type: String
  },
  iconPhotoURL: {
    type: String
  },
  bigPhotoURL: {
    type: String
  },
  linkedInProfileURL: {
    type: String
  },
  googleProfileURL: {
    type: String
  },
  reviewsReceived: [{
    type: Schema.Types.ObjectId,
    ref: "reviewsReceived",
    default: []
  }],
  reviewsGiven: [{
    type: Schema.Types.ObjectId,
    ref: "reviewsGiven",
    default: []
  }],
  resetPasswordToken: String,
  resetTokenExpires: Date,
});

userSchema.plugin(passportLocalMongoose);

mongoose.model('users', userSchema);