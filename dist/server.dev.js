"use strict";

var express = require('express');

var cors = require('cors');

var bodyParser = require('body-parser');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views'); // Dossier où seront stockées vos pages EJS
// 📌 Page d'accueil

app.get('/', function (req, res) {
  res.render('index', {
    apiKey: process.env.API_KEY
  });
}); // server.js

var API_KEY = 'key-01f7606fb5a9f0fa7';
app.post('/server.js', function (req, res) {
  var clientKey = req.headers['x-api-key'];

  if (clientKey !== API_KEY) {
    return res.status(401).json({
      error: 'Clé API invalide'
    });
  }

  var _req$body = req.body,
      component = _req$body.component,
      text = _req$body.text,
      size = _req$body.size,
      color = _req$body.color,
      glassmorphism = _req$body.glassmorphism,
      framework = _req$body.framework;
  var generatedCode = '';

  if (component === 'button' && framework === 'react') {
    generatedCode = "\n\nexport default function Button() {}\n  return (\n    <button style={{\n      padding: '".concat(size === 'large' ? '15px 30px' : '10px 20px', "',\n      fontSize: '16px',\n      border: 'none',\n      borderRadius: '10px',\n      background: '").concat(glassmorphism ? "rgba(255, 255, 255, 0.2)" : "#007bff", "',\n      backdropFilter: '").concat(glassmorphism ? "blur(10px)" : "none", "',\n      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',\n      color: '#fff',\n      cursor: 'pointer'\n    }}>\n      ").concat(text, "\n    </button>\n  );\n}");
  }

  res.json({
    code: generatedCode
  });
}); // 📌 Lancer le serveur

var PORT = 5000;
app.listen(PORT, function () {
  return console.log("DesignEase API running on http://localhost:".concat(PORT));
});