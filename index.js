const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('express-session');
const passport = require('passport');
const keys = require('./config/keys');

// Load User Model
require('./models/Users');
require('./services/passport');

// connect mongoDB with mongoose
mongoose.connect(keys.mongoURI, {useNewUrlParser: true}, (err) => {
    if (err)
        console.error(err);
    else
        console.log("Connected to the mongodb");
    }
);

const app = express();

// Set up session cookie
app.use(
  cookieSession({
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // Last 30 days
    secret: keys.cookieKey
  })
);
app.use(passport.initialize());
app.use(passport.session());
// Router
require('./routes/authRoutes')(app);

app.get('/', function(req, res){
  res.send({hi: 'there'});
});

// Listening for port dynamically (Mostly on heroku)
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("listening on port: ", PORT);
