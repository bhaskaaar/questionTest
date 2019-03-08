var express  = require('express');
var app      = express();
var port     = process.env.PORT || 4200;
var mongoose = require('mongoose');
var bodyParser   = require('body-parser');
var configDB = require('./config/database.js');
mongoose.connect(configDB.url); // connect to our database

app.use(bodyParser());
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.set('view-engine','ejs');

require('./app/routes.js')(app);

app.listen(port);
console.log('server started on'+port);
