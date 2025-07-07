import React from 'react';

export default function Preview({ code }) {
  return (
    <div className="bg-gray-50 p-4 rounded shadow mb-4">
      <h2 className="text-lg font-semibold mb-2">👁 Aperçu (code brut)</h2>
      <pre className="text-sm bg-white p-3 rounded border overflow-auto">{code || '// Rien à afficher'}</pre>
    </div>
  );
}
