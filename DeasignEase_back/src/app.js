require('dotenv').config(); // ← doit toujours être tout en haut

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const generateRoute = require('./routes/generate');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../public'))); // Pour plus tard si tu ajoutes CSS/JS custom

// Routes API
app.use('/api/generate', generateRoute);

// Route d’accueil EJS
app.get('/', (req, res) => {
  res.render('index', { apiKey: process.env.API_KEY || 'clé introuvable' });
});

// Sécurité basique
app.use((req, res) => {
  res.status(404).send('Route non trouvée');
});

module.exports = app;
