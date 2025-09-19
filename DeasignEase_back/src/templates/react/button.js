module.exports = ({ text = 'Button', size = 'large', glassmorphism = false, boxEffect = false }) => {
  // Chemin du composant d'aperçu côté frontend
  const preview = '/previews/ButtonPreview.jsx';
  const sizeClasses = size === 'large' 
    ? 'px-8 py-4 text-lg' 
    : 'px-6 py-3 text-base';
    
  let styleClasses, extraElements = '';
  
  if (boxEffect) {
    styleClasses = 'bg-transparent border-2 border-blue-500 text-blue-500 hover:text-white relative overflow-hidden';
    extraElements = `
      <span className="relative z-10">${text}</span>
      <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      <div className="absolute inset-0 border-2 border-blue-300 rounded-xl transform scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></div>`;
  } else if (glassmorphism) {
    styleClasses = 'backdrop-blur-lg bg-white/20 border border-white/30 text-white hover:bg-white/30';
  } else {
    styleClasses = 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl';
  }


  return `import React from 'react';

export default function Button() {
  return (
    <button 
      className="${boxEffect ? 'group' : ''} ${sizeClasses} ${styleClasses} rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300/50 active:scale-95"
    >
      ${boxEffect ? extraElements : text}
    </button>
  );
}

${boxEffect ? `
// CSS alternatif pour l'effet .box::before
/*
.box-button {
  position: relative;
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid #3b82f6;
  color: #3b82f6;
  border-radius: 0.75rem;
  font-weight: 600;
  overflow: hidden;
  transition: all 0.3s ease;
}

.box-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #3b82f6;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
  z-index: 1;
}

.box-button:hover::before {
  transform: scaleX(1);
}

.box-button:hover {
  color: white;
}

.box-button span {
  position: relative;
  z-index: 2;
}
*/
` : ''}`;
};

// Export du chemin d'aperçu pour usage API
module.exports.preview = '/previews/ButtonPreview.jsx';
