"use strict";

var express = require('express');

var cors = require('cors');

var bodyParser = require('body-parser');

var generateRoute = require('./routes/generate');

require('dotenv').config();

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/api/generate', generateRoute);
module.exports = app;