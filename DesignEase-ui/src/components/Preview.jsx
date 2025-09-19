import React, { useEffect, useState } from "react";

// Simple preview, effet glass, cohérent UI
export default function Preview({ code }) {
  const [previewComponent, setPreviewComponent] = useState(null);

  useEffect(() => {
    if (code && code !== '// Erreur' && !code.includes('Erreur:')) {
      if (code.includes('button')) {
        setPreviewComponent(
          <div className="p-6 glass-card rounded-xl border border-white/10 shadow-xl">
            <div className="flex items-center justify-center">
              <div
                className="inline-block px-7 py-4 glass-button text-lg font-bold text-white rounded-xl hover:scale-105 transition"
                dangerouslySetInnerHTML={{ __html: extractButtonText(code) }}
              />
            </div>
          </div>
        );
      } else if (code.includes('modal')) {
        setPreviewComponent(
          <div className="p-6 glass-card rounded-xl border border-white/10 shadow-xl">
            <div className="bg-white/80 rounded-xl p-6 shadow-xl max-w-md mx-auto backdrop-blur-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Modal Title</h3>
              <p className="text-gray-600">Contenu du modal</p>
            </div>
          </div>
        );
      } else if (code.includes('card')) {
        setPreviewComponent(
          <div className="p-6 glass-card rounded-xl border border-white/10 shadow-xl">
            <div className="bg-white/80 rounded-xl p-6 shadow-xl max-w-sm mx-auto backdrop-blur-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Card Title</h3>
              <p className="text-gray-600">Description de la carte</p>
            </div>
          </div>
        );
      }
    } else {
      setPreviewComponent(
        <div className="p-6 glass-card rounded-xl border border-white/10 shadow-xl">
          <div className="flex items-center justify-center text-gray-400">
            <div className="text-center">
              <div className="text-4xl mb-4">👁️</div>
              <p>Aperçu du composant généré</p>
              <p className="text-sm mt-2">Configurez et générez un composant pour voir l'aperçu</p>
            </div>
          </div>
        </div>
      );
    }
  }, [code]);

  const extractButtonText = code => {
    const textMatch = code.match(/>\s*([^<]+)\s*</);
    return textMatch ? textMatch[1] : 'Bouton';
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-3 h-3 bg-[#B9C3CF] rounded-full animate-pulse"></div>
        <h2 className="text-base font-bold text-white tracking-wide">Aperçu en Direct</h2>
      </div>
      {previewComponent}
    </div>
  );
}
