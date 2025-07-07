import React from 'react';

export default function CodeViewer({ code }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert('Code copié !');
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">📄 Code généré</h2>
      <pre className="text-sm bg-gray-100 p-3 rounded border overflow-auto">{code}</pre>
      <button
        onClick={handleCopy}
        className="mt-3 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
      >
        Copier le code
      </button>
    </div>
  );
}
