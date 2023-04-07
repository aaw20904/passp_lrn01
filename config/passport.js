const passport = require('passport');
const LocalStrategy = require('passport-local');
 
const UserModell = require('./database');

passport.use(new LocalStrategy(function verify(username, password, done) {
    User.findOne({username: username}, function(err, user) {
      if (err) { 
        return done(err); 
      }

      if (!user) {
        return done(null, false, { message: 'Incorrect username or password.' }); 
      }
      

      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect  password.' });
      }
        return done(null, user);
      
    });
}));