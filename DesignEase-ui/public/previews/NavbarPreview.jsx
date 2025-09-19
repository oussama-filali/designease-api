// Aperçu visuel de la navbar générée par le template
import React from 'react';

export default function NavbarPreview() {
  return (
    <nav className="w-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 shadow-xl border-b border-white/20 p-4 flex items-center justify-between">
      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">✨ DesignEase</div>
      <div className="flex gap-4">
        <button className="px-4 py-2 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300">Accueil</button>
        <button className="px-4 py-2 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300">Services</button>
        <button className="px-4 py-2 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300">À propos</button>
        <button className="px-4 py-2 rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300">Contact</button>
      </div>
      <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">Commencer</button>
    </nav>
  );
}
