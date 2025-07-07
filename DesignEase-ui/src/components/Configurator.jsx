import React, { useState } from 'react';

const API_KEY = import.meta.env.VITE_API_KEY;

export default function Configurator({ onCodeGenerated, componentType, setComponentType }) {
  const [text, setText] = useState('Cliquez-moi');
  const [size, setSize] = useState('large');
  const [glass, setGlass] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      const body = {
        component: componentType,
        framework: 'react',
      };

      if (componentType === 'button') {
        body.text = text;
        body.size = size;
        body.glassmorphism = glass;
      }
      if (componentType === 'modal') {
        body.title = text;
        body.content = "Contenu du modal";
      }
      if (componentType === 'card') {
        body.title = text;
        body.description = "Description de la carte";
      }

      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
        },
        body: JSON.stringify(body),
      });
      
      if (!res.ok) {
        throw new Error(`Erreur ${res.status}: ${res.statusText}`);
      }
      
      const data = await res.json();
      onCodeGenerated(data.code || '// Erreur');
    } catch (err) {
      console.error('Erreur lors de la génération:', err);
      setError(err.message);
      onCodeGenerated(`// Erreur: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">🛠 Configuration</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Type de composant</label>
        <select
          value={componentType}
          onChange={(e) => setComponentType(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="button">Button</option>
          <option value="modal">Modal</option>
          <option value="card">Card</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Texte</label>
        <input
          type="text"
          className="w-full border px-3 py-2 rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Taille</label>
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="large">Large</option>
          <option value="small">Small</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center space-x-2">
          <input
            type="checkbox"
            checked={glass}
            onChange={(e) => setGlass(e.target.checked)}
          />
          <span>Glassmorphism</span>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:from-blue-500 hover:to-pink-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-60"
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
            </svg>
            Génération...
          </span>
        ) : 'Générer le composant'}
      </button>
      
      {error && (
        <div className="mt-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded">
          {error}
        </div>
      )}
    </form>
  );
}
