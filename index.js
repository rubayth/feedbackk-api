const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();
//http://localhost:5000/auth/google/callback

passport.use
    (new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken) => {
        console.log(accessToken)
    })
);




app.listen(process.env.PORT || 5000);

