// Aperçu visuel du modal généré par le template
import React, { useState } from 'react';

export default function ModalPreview() {
  const [isOpen, setIsOpen] = useState(true);
  if (!isOpen) return (
    <button onClick={() => setIsOpen(true)} className="px-4 py-2 bg-blue-500 text-white rounded">Ouvrir le modal</button>
  );
  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300" onClick={() => setIsOpen(false)} />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100 opacity-100">
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Aperçu Modal</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">Ceci est un exemple de modal généré.</p>
          </div>
          <div className="flex gap-3 p-6 border-t border-gray-200 dark:border-gray-700">
            <button onClick={() => setIsOpen(false)} className="flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">Annuler</button>
            <button onClick={() => setIsOpen(false)} className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">Confirmer</button>
          </div>
        </div>
      </div>
    </>
  );
}
