// Require modules
const express = require('express');
const path = require('path');

const cabDb = require('./data/cab-db');

// Create the Express app
const app = express();

// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Mount middleware (app.use)


// Mount routes
app.get('/', function(req, res){
    res.redirect('/home');
});



// Tell the app to listen on port 3000
app.listen(3000, function(){
    console.log("Listening to port 3000");
});