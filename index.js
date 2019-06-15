const express = require('express');
const app = express();

// Rounter
app.get('/', function(req, res){
  res.send({hi: 'there'});
});

// Listening for port dynamically (Mostly on heroku)
const PORT = process.env.PORT || 5000;
app.listen(PORT);
