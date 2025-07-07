module.exports = ({ title = 'Titre du modal', content = 'Contenu du modal' }) => {
  return `
import React from 'react';

export default function Modal() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md">
        <h2 className="text-xl font-semibold mb-4">${title}</h2>
        <p className="text-gray-700">${content}</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Fermer</button>
      </div>
    </div>
  );
}`;
};
