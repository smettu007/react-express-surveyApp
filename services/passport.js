const keys = require("../config/keys");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = mongoose.model("users");

passport.serializeUser((user,done)=>{

  done(null,user.id)//1st param is err
})

//user id and done
passport.deserializeUser((id,done)=>{
User.findById(id)
.then(user =>{
  done(null,user)
})


})

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy:true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          //we have an id already
          done(null, existingUser);
        } else {
          //no id found crea
          new User({
            googleId: profile.id
          })
            .save()
            .then(user => done(null, user)); //save it to databasete an id
        }
      });
    }
  )
);
