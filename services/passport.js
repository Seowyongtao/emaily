const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model('users');

passport.serializeUser((user,done) => {
  done(null,user.id);
});

passport.deserializeUser((id,done) =>{
  User.findById(id)
    .then(user => {
      done(null,user);
    });
});

passport.use(new GoogleStrategy({

    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback"
  }, (accessToken,refreshToken,profile,done) => {

    //"then" is something about "promise", can check it later
    User.findOne({googleId:profile.id}).then(existingUser => {

      if (existingUser){
        //skip it
        done(null,existingUser);
      }else{
        //create new user in the database
        new User({googleId : profile.id})
          .save()
          .then(user => done(null,user));
      }
    })

  })

);
