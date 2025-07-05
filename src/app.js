const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const generateRoute = require('./routes/generate');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/api/generate', generateRoute);

module.exports = app;
