const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => { //saved to session
    done(null, user.id);//points to mongo record id, user can have other ids so better to use this that google id
}); 
//done is a callback for passport after doing work with passport

passport.deserializeUser((id, done) => { //user obj attaches to req
    User.findById(id)
    .then(user => {
        done(null, user);
    })
    .catch(err => {
        console.log(err);
    })
});

passport.use
    (new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, 
    (accessToken, refreshToken, profile, done) => {
        User.findOne({googleID: profile.id})
            .then(existingUser => {
                if (existingUser) {
                    //record exists
                    done(null, existingUser);
                } else {
                    //create user
                    new User({googleID: profile.id})
                        .save()
                        .then(user => done(null, user));
                }
            })
            .catch(err => {
                console.log(err);
            })
        
    })
);