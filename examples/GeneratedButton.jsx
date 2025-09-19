import React from 'react';

/**
 * Exemple de composant Button généré par DesignEase Studio
 * 
 * Props:
 * - text: Texte du bouton
 * - size: 'large' | 'small'  
 * - glassmorphism: boolean
 * - onClick: fonction de callback
 */
export default function GeneratedButton({ 
  text = "Mon Bouton", 
  size = "large", 
  glassmorphism = false,
  onClick = () => {},
  ...props 
}) {
  const sizeClasses = size === 'large' 
    ? 'px-8 py-4 text-lg' 
    : 'px-6 py-3 text-base';
    
  const styleClasses = glassmorphism 
    ? 'backdrop-blur-lg bg-white/20 border border-white/30 text-white hover:bg-white/30' 
    : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl';

  return (
    <button 
      onClick={onClick}
      className={`${sizeClasses} ${styleClasses} rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300/50 active:scale-95`}
      {...props}
    >
      {text}
    </button>
  );
}
