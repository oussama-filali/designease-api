import React, { useState } from 'react';
import { ArrowLeft, Code, Eye, Copy, Download } from 'lucide-react';

const CardVisualization = ({ onBack }) => {
  const [showCode, setShowCode] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const cardCode = `import React from 'react';

export default function Card() {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden">
      {/* Image placeholder */}
      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="absolute bottom-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white">
            Featured
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          Mon Composant
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          Description avec design moderne
        </p>
        
        {/* Action buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg">
            En savoir plus
          </button>
          <button className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
            Partager
          </button>
        </div>
      </div>
    </div>
  );
}`;

  const CardComponent = ({ title = "Mon Composant", description = "Description avec design moderne" }) => (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden max-w-sm mx-auto">
      {/* Image placeholder */}
      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        <div className="absolute bottom-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white">
            Featured
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          {description}
        </p>
        
        {/* Action buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg">
            En savoir plus
          </button>
          <button className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
            Partager
          </button>
        </div>
      </div>
    </div>
  );

  const copyCode = () => {
    navigator.clipboard.writeText(cardCode);
    alert('Code copié dans le presse-papiers !');
  };

  const downloadCode = () => {
    const blob = new Blob([cardCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Card.jsx';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
        {/* Header */}
        <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button
                  onClick={onBack}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Retour</span>
                </button>
                <div className="h-6 w-px bg-gray-300 dark:bg-gray-600" />
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                  Visualisation Card Component
                </h1>
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm"
                >
                  {darkMode ? '☀️ Clair' : '🌙 Sombre'}
                </button>
                
                <button
                  onClick={() => setShowCode(!showCode)}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  {showCode ? <Eye className="w-4 h-4" /> : <Code className="w-4 h-4" />}
                  <span>{showCode ? 'Voir aperçu' : 'Voir code'}</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {showCode ? (
            /* Code View */
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Card.jsx</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={copyCode}
                    className="flex items-center space-x-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm"
                  >
                    <Copy className="w-4 h-4" />
                    <span>Copier</span>
                  </button>
                  <button
                    onClick={downloadCode}
                    className="flex items-center space-x-2 px-3 py-1.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Télécharger</span>
                  </button>
                </div>
              </div>
              <div className="p-4 overflow-x-auto">
                <pre className="text-sm text-gray-800 dark:text-gray-200 font-mono">
                  <code>{cardCode}</code>
                </pre>
              </div>
            </div>
          ) : (
            /* Preview View */
            <div className="space-y-8">
              {/* Description */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  ✅ Analyse du composant Card
                </h2>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p>• <strong>Structure parfaite</strong> : Composant bien organisé avec gradient, content et actions</p>
                  <p>• <strong>Animations fluides</strong> : Hover effects avec transform et transitions</p>
                  <p>• <strong>Mode sombre</strong> : Support complet du dark mode avec Tailwind</p>
                  <p>• <strong>Responsive design</strong> : Adapté pour toutes les tailles d'écran</p>
                  <p>• <strong>Accessibilité</strong> : Boutons et interactions bien structurés</p>
                </div>
              </div>

              {/* Preview sections */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Single card preview */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Aperçu unique
                  </h3>
                  <div className="flex justify-center p-4">
                    <CardComponent />
                  </div>
                </div>

                {/* Multiple cards grid */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Grille de cartes
                  </h3>
                  <div className="grid grid-cols-1 gap-4 p-4">
                    <div className="transform scale-75 origin-center">
                      <CardComponent title="Carte 1" description="Premier exemple de carte" />
                    </div>
                    <div className="transform scale-75 origin-center">
                      <CardComponent title="Carte 2" description="Deuxième exemple de carte" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Full width showcase */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Showcase complet
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-4">
                  <CardComponent title="Produit 1" description="Description du premier produit" />
                  <CardComponent title="Produit 2" description="Description du deuxième produit" />
                  <CardComponent title="Produit 3" description="Description du troisième produit" />
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default CardVisualization;
