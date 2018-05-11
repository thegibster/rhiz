const bcrypt = require("bcrypt");

module.exports.encrypt = (toBeHashed) => {
  return new Promise(function(resolve, reject) {
    const saltRounds = 10;
    let hashed = "";
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(toBeHashed, salt, function(err, hash) {
        if (err) {
          reject(err);
        } else {
          hashed = hash;
          resolve(hashed);
        }
      });
    });
  })
}
