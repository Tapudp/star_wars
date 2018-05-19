const express = require('express');
var app = express();
const morgan = require('morgan');
const workingRoutes = require('./routes/workingRoutes');

app.set('view engine', 'ejs');

var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use('/', workingRoutes);

module.exports = app;