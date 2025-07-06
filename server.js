const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views'); // Dossier où seront stockées vos pages EJS

// 📌 Page d'accueil
app.get('/', (req, res) => {
    res.render('index', { apiKey: process.env.API_KEY });
});

// server.js
const API_KEY = 'key-01f7606fb5a9f0fa7';
app.post('/server.js', (req, res) => {
    const clientKey = req.headers['x-api-key'];
    if (clientKey !== API_KEY) {
        return res.status(401).json({ error: 'Clé API invalide' });
    }

    const { component, text, size, color, glassmorphism, framework } = req.body;

    let generatedCode = '';

    if (component === 'button' && framework === 'react') {
        generatedCode = `

export default function Button() {}
  return (
    <button style={{
      padding: '${size === 'large' ? '15px 30px' : '10px 20px'}',
      fontSize: '16px',
      border: 'none',
      borderRadius: '10px',
      background: '${glassmorphism ? "rgba(255, 255, 255, 0.2)" : "#007bff"}',
      backdropFilter: '${glassmorphism ? "blur(10px)" : "none"}',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      color: '#fff',
      cursor: 'pointer'
    }}>
      ${text}
    </button>
  );
}`;
    }

    res.json({ code: generatedCode });
});

// 📌 Lancer le serveur
const PORT = 5000;
app.listen(PORT, () => console.log(`DesignEase API running on http://localhost:${PORT}`));
