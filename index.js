const express = require('express');
const mongoose = require('mongoose');//define mongoose
const cookieSession = require('cookie-session')
const passport = require('passport');
const bodyParser = require('body-parser');
require('./modals/User');//define user model
require('./services/passport');//autentication functions
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI); 

const app = express();

app.use(bodyParser.json());

app.use(

    cookieSession({
        maxAge:30 * 24 * 60 * 60 *1000,
        keys:[keys.cookieKey]
    })
)
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app);//initital route
require('./routes/billigRoutes')(app);//initital route

if(process.env.NODE_ENV === 'production'){

    //Express will serve production assets like main.js and main.css
    app.use(express.static('client/build'))

    //Expresss will serve index.html if it dosent recognize the route

    const parth = require('path')
    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname, 'client','build' ,'index.html'));
    })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);