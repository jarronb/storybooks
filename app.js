const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const app = express();
const port = process.env.PORT || 5000;

//LOAD KEYS
const keys = require('./config/keys');

//MONGOOSE CONNECTION
mongoose.connect(keys.monogoURI,{
  useNewUrlParser: true
}).then(() => {
  console.log('MongoDB Connected')  
}).catch(err => console.log(err));

//PASSPORT CONFIG 
require('./config/passport')(passport);

//LOAD ROUTES
const auth = require('./routes/auth');


// APP INDEX PAGE
app.get('/', (req,res) => {
  res.send(`It works`);
});

// USE ROUTES
app.use('/auth', auth);

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});