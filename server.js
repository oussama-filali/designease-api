const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 📌 Génération de code UI dynamique
app.post('/generate-ui', (req, res) => {
    const { component, text, size, color, glassmorphism, framework } = req.body;

    let generatedCode = '';

    if (component === 'button' && framework === 'react') {
        generatedCode = `
import React from 'react';

export default function Button() {
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
