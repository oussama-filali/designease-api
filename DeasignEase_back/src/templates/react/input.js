function generateInputComponent({
  placeholder = 'Entrez votre texte',
  type = 'text',
  glassIntensity = 'medium',
  glassColor = 'white',
  borderStyle = 'subtle',
  shadowIntensity = 'medium'
} = {}) {
  
  const getGlassStyles = () => {
    const intensityMap = {
      light: { bg: 'rgba(255, 255, 255, 0.05)', blur: '10px' },
      medium: { bg: 'rgba(255, 255, 255, 0.1)', blur: '15px' },
      intense: { bg: 'rgba(255, 255, 255, 0.2)', blur: '20px' }
    };

    const colorMap = {
      white: 'rgba(255, 255, 255, 0.1)',
      purple: 'rgba(147, 51, 234, 0.15)',
      blue: 'rgba(59, 130, 246, 0.15)',
      pink: 'rgba(236, 72, 153, 0.15)'
    };

    const borderMap = {
      subtle: 'border border-white/20',
      glow: 'border border-purple-400/50 shadow-lg shadow-purple-500/25',
      gradient: 'border-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-border'
    };

    const shadowMap = {
      soft: 'shadow-lg',
      medium: 'shadow-xl shadow-black/25',
      dramatic: 'shadow-2xl shadow-purple-500/30'
    };

    const glass = intensityMap[glassIntensity];
    
    return {
      background: `background: ${colorMap[glassColor] || intensityMap[glassIntensity].bg};`,
      backdropFilter: `backdrop-filter: blur(${glass.blur});`,
      border: borderMap[borderStyle],
      shadow: shadowMap[shadowIntensity]
    };
  };

  const styles = getGlassStyles();

  return `import React, { useState } from 'react';

export default function GlassmorphismInput() {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative group">
      {/* Label flottant */}
      <label 
        className={\`absolute left-4 transition-all duration-300 pointer-events-none \${
          isFocused || value 
            ? '-top-2 text-xs bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold' 
            : 'top-4 text-gray-400'
        }\`}
      >
        ${placeholder}
      </label>
      
      {/* Input principal */}
      <input
        type="${type}"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="
          w-full px-4 py-4 pt-6
          ${styles.background}
          ${styles.backdropFilter}
          -webkit-backdrop-filter: blur(15px);
          ${styles.border}
          rounded-2xl
          text-white placeholder-transparent
          focus:outline-none focus:ring-0
          transition-all duration-300
          ${styles.shadow}
          group-hover:shadow-lg group-hover:shadow-purple-500/20
          focus:shadow-xl focus:shadow-purple-500/30
          focus:scale-[1.02]
        "
        style={{
          ${styles.background}
          ${styles.backdropFilter}
          WebkitBackdropFilter: 'blur(15px)',
        }}
      />
      
      {/* Effet de lueur au focus */}
      <div className={\`absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 pointer-events-none \${
        isFocused ? 'opacity-100' : ''
      }\`} />
      
      {/* Icône décorative */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-400">
        ${type === 'email' ? '📧' : type === 'password' ? '🔐' : type === 'search' ? '🔍' : '✨'}
      </div>
    </div>
  );
}`;
}

module.exports = { generateInputComponent };
