import React from 'react';

export default function CodeViewer({ code }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert('Code copié dans le presse-papier !');
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/jsx' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'Component.jsx';
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="text-white w-full space-y-4">
      <h2 className="text-xl font-semibold tracking-wide text-violet-300 flex items-center gap-2">
        📄 Code généré
      </h2>

      <div className="glass p-4 overflow-auto text-sm max-h-96 font-mono text-green-200 whitespace-pre-wrap leading-relaxed shadow-inner">
        {code || '// Rien à afficher'}
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleCopy}
          className="bg-gradient-to-r from-green-400 to-lime-400 text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
        >
          Copier
        </button>

        <button
          onClick={handleDownload}
          className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
        >
          Télécharger .jsx
        </button>
      </div>
    </div>
  );
}
// CodeViewer.jsx
