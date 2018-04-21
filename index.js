const express = require('express');
const mongoose = require('mongoose');//define mongoose
const cookieSession = require('cookie-session')
const passport = require('passport');
require('./modals/User');//define user model
require('./services/passport');//autentication functions
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI); 

const app = express();

app.use(

    cookieSession({
        maxAge:30 * 24 * 60 * 60 *1000,
        keys:[keys.cookieKey]
    })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app);//initital route

const PORT = process.env.PORT || 5000;
app.listen(PORT);