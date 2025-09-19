import React, { useState, useEffect } from "react";
import { Copy, Download, Check, FileText } from "lucide-react";


export default function CodeViewer({ code, preview }) {
  const [copied, setCopied] = useState(false);
  const [lineNumbers, setLineNumbers] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [PreviewComponent, setPreviewComponent] = useState(null);
  // Import dynamique du composant d'aperçu si preview fourni
  useEffect(() => {
    if (preview && showPreview) {
      // On suppose que preview = '/previews/ButtonPreview.jsx' etc.
      const importPath = preview.replace('/previews/', '../public/previews/').replace('.jsx', '');
      import(/* @vite-ignore */ importPath + '.jsx')
        .then(mod => setPreviewComponent(() => mod.default))
        .catch(() => setPreviewComponent(() => () => <div>Erreur d'import du preview</div>));
    } else {
      setPreviewComponent(null);
    }
  }, [preview, showPreview]);

  useEffect(() => {
    if (code) {
      const lines = code.split('\n');
      setLineNumbers(lines.map((_, index) => index + 1));
    }
  }, [code]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
  };

  const downloadCode = () => {
    const blob = new Blob([code], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Component.jsx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const highlightCode = (code) => {
    if (!code) return code;
    
    // Nettoyage des caractères spéciaux AVANT le highlight
    const cleanCode = code
      .replace(/[^\x00-\x7F]/g, '') // Supprime les caractères non-ASCII
      .replace(/\u00A0/g, ' '); // Remplace les espaces insécables
  
    return cleanCode
      .replace(/(import|export|default|from|function|return|const|let|var)/g, '<span style="color: #a855f7; font-weight: bold;">$1</span>')
      .replace(/(className|onClick|type|value|onChange)/g, '<span style="color: #3b82f6;">$1</span>')
      .replace(/('([^']*)'|"([^"]*)")/g, '<span style="color: #10b981;">$1</span>')
      .replace(/({[^}]*})/g, '<span style="color: #f59e0b;">$1</span>')
      .replace(/(<\/?[^>]*>)/g, '<span style="color: #ef4444;">$1</span>');
  };

  return (
    <div className="relative group">
      {/* Bouton Visualiser */}
      {preview && (
        <button
          onClick={() => setShowPreview(true)}
          className="absolute top-4 right-24 z-20 px-3 py-1 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all text-sm"
        >
          Visualiser
        </button>
      )}
      {/* Header du code viewer */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-t-xl border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <FileText className="w-4 h-4" />
            <span className="text-sm font-mono">Component.jsx</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={copyToClipboard}
            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-700 transition-all duration-200 transform hover:scale-105"
            title="Copier le code"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
          
          <button
            onClick={downloadCode}
            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-700 transition-all duration-200 transform hover:scale-105"
            title="Télécharger le code"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

  {/* Zone de code */}
      <div className="relative bg-gray-900 rounded-b-xl overflow-hidden">
        <div className="flex">
          {/* Numéros de ligne */}
          <div className="bg-gray-800 text-gray-500 p-4 text-sm font-mono text-right border-r border-gray-700 select-none">
            {lineNumbers.map((num) => (
              <div key={num} className="leading-6 hover:text-gray-300 transition-colors duration-200">
                {num}
              </div>
            ))}
          </div>
          
          {/* Code */}
          <div className="flex-1 overflow-auto">
            <pre className="p-4 text-sm font-mono text-gray-300 leading-6 min-h-[300px] max-h-[500px] whitespace-pre-wrap break-words">
              {code || "// Générez un composant pour voir le code ici..."}
            </pre>
          </div>
        </div>
        
        {/* Indicateur de copie */}
        {copied && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium animate-pulse">
            ✓ Copié !
          </div>
        )}
      </div>
      
      {/* Effet de brillance au survol */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none rounded-xl" />

      {/* Modal d'aperçu */}
      {showPreview && PreviewComponent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative">
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl"
              title="Fermer"
            >
              ×
            </button>
            <PreviewComponent />
          </div>
        </div>
      )}
    </div>
  );
}
