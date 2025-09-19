import React, { useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

export default function Configurator({ componentType, onCodeGenerated }) {
  const [text, setText] = useState('Mon Composant');
  const [size, setSize] = useState('large');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const body = { component: componentType, framework: 'react' };
      if (componentType === 'button') {
        body.text = text;
        body.size = size;
        body.glassmorphism = true;
      }
      if (componentType === 'modal') {
        body.title = text;
        body.content = "Contenu du modal avec glassmorphism";
      }
      if (componentType === 'card') {
        body.title = text;
        body.description = "Description avec design moderne";
      }
      if (componentType === 'input') {
        body.placeholder = text;
        body.type = 'text';
      }
      if (componentType === 'navbar') {
        body.brand = text;
        body.links = ['Accueil', 'Services', 'Contact'];
      }
      if (componentType === 'footer') {
        body.company = text;
        body.year = new Date().getFullYear();
      }
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': API_KEY,
        },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(`Erreur ${res.status}: ${res.statusText}`);
      const data = await res.json();
      onCodeGenerated(data.code || '// Erreur de génération');
    } catch (err) {
      setError(err.message);
      onCodeGenerated(`// Erreur: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-lg shadow-inner animate-fade-in-up"
    >
      {/* Zone texte config */}
      <div className="space-y-2">
        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
          {componentType === 'button' ? 'Texte du bouton' :
            componentType === 'modal' ? 'Titre du modal' :
              componentType === 'card' ? 'Titre de la carte' :
                componentType === 'input' ? 'Placeholder' :
                  componentType === 'navbar' ? 'Nom de marque' :
                    componentType === 'footer' ? 'Nom de l\'entreprise' : 'Contenu'}
        </label>
        <input
          type="text"
          className="w-full glass-input px-4 py-3 text-white placeholder-gray-300 text-base font-medium focus:ring-2 focus:ring-[#B9C3CF] transition-all"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder={`Entrez le ${componentType === 'button' ? 'texte' : 'titre'}`}
        />
      </div>
      {/* Taille pour button et card */}
      {(componentType === 'button' || componentType === 'card') && (
        <div className="space-y-2">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Taille</label>
          <div className="flex gap-4">
            {['large', 'small'].map(sizeOption => (
              <button
                key={sizeOption}
                type="button"
                onClick={() => setSize(sizeOption)}
                className={`glass-button px-6 py-2 rounded-xl font-semibold transition-all duration-200
                  ${size === sizeOption
                    ? 'bg-gradient-to-r from-[#b9c3cf]/40 to-[#ffffff]/10 border border-white/40 shadow-xl text-white scale-105'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'}
                `}
              >
                {sizeOption === 'large' ? 'Grande' : 'Petite'}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Générer */}
      <button
        type="submit"
        className="w-full glass-button py-3 px-4 rounded-xl font-bold text-lg tracking-wide shadow-lg hover:scale-105 transition-all duration-300 active:scale-95 focus:ring-2 focus:ring-[#B9C3CF] disabled:opacity-60 disabled:cursor-not-allowed"
        disabled={isLoading}
      >
        {isLoading
          ? <span className="flex items-center justify-center gap-3">
              <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
              Génération...
            </span>
          : <span>✨ Générer le composant</span>
        }
      </button>
      {/* Erreur */}
      {error && (
        <div className="p-3 bg-red-500/20 border border-red-500/30 text-red-200 rounded-lg text-sm">
          <div className="flex items-center gap-2">
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        </div>
      )}
    </form>
  );
}
