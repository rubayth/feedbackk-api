const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bp = require('body-parser');

require('./models/User'); //must require this before passport.js (below)
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
app.use(bp.json());
;app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);


app.listen(process.env.PORT || 5000);

