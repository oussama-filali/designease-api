module.exports = ({ message = 'Joyeux Anniversaire!', theme = 'colorful', animated = true }) => {
  const themeStyles = {
    colorful: 'from-pink-500 via-purple-500 to-indigo-500',
    pastel: 'from-pink-200 via-purple-200 to-indigo-200',
    elegant: 'from-gold-400 via-yellow-400 to-gold-600',
    dark: 'from-gray-800 via-purple-900 to-gray-800'
  };

  return `import React, { useState, useEffect } from 'react';

export default function BirthdayCake() {
  const [isBlown, setIsBlown] = useState(false);
  const [confetti, setConfetti] = useState([]);

  const blowCandles = () => {
    setIsBlown(true);
    // Créer des confettis
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'][Math.floor(Math.random() * 5)],
      size: Math.random() * 8 + 4
    }));
    setConfetti(newConfetti);
    
    setTimeout(() => {
      setConfetti([]);
      setIsBlown(false);
    }, 3000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br ${themeStyles[theme]} overflow-hidden">
      {/* Confettis */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-bounce"
          style={{
            left: \`\${piece.x}%\`,
            top: \`\${piece.y}%\`,
            backgroundColor: piece.color,
            width: \`\${piece.size}px\`,
            height: \`\${piece.size}px\`,
            borderRadius: '50%',
            animationDuration: \`\${Math.random() * 2 + 1}s\`,
            animationDelay: \`\${Math.random() * 0.5}s\`
          }}
        />
      ))}

      <div className="text-center">
        {/* Message d'anniversaire */}
        <h1 className="text-6xl font-bold text-white mb-8 ${animated ? 'animate-pulse' : ''}">
          ${message}
        </h1>

        {/* Gâteau */}
        <div className="relative mx-auto">
          {/* Base du gâteau */}
          <div className="relative">
            {/* Étage inférieur */}
            <div className="w-80 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-500 to-transparent opacity-50"></div>
              {/* Décoration */}
              <div className="absolute bottom-2 left-4 w-4 h-4 bg-red-400 rounded-full"></div>
              <div className="absolute bottom-2 right-4 w-4 h-4 bg-blue-400 rounded-full"></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full"></div>
            </div>

            {/* Étage supérieur */}
            <div className="w-60 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg mx-auto relative -mt-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500 to-transparent opacity-50"></div>
              {/* Décoration */}
              <div className="absolute bottom-2 left-6 w-3 h-3 bg-white rounded-full"></div>
              <div className="absolute bottom-2 right-6 w-3 h-3 bg-white rounded-full"></div>
            </div>

            {/* Bougies */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
              {[1, 2, 3].map((candle, index) => (
                <div key={candle} className="relative">
                  {/* Bougie */}
                  <div className="w-2 h-8 bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-sm"></div>
                  
                  {/* Flamme */}
                  {!isBlown && (
                    <div 
                      className={\`absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-gradient-to-t from-orange-400 to-red-400 rounded-full \${animated ? 'animate-pulse' : ''}\`}
                      style={{
                        animationDelay: \`\${index * 0.2}s\`,
                        boxShadow: '0 0 10px rgba(255, 165, 0, 0.7)'
                      }}
                    >
                      <div className="w-full h-full bg-gradient-to-t from-yellow-300 to-orange-300 rounded-full animate-pulse"></div>
                    </div>
                  )}
                  
                  {/* Fumée quand soufflé */}
                  {isBlown && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="w-1 h-6 bg-gray-400 opacity-50 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bouton pour souffler */}
          <button
            onClick={blowCandles}
            className="mt-8 px-8 py-4 bg-white/20 backdrop-blur-lg border border-white/30 text-white rounded-xl font-semibold hover:bg-white/30 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {isBlown ? '🎉 Félicitations! 🎉' : '💨 Souffler les bougies 💨'}
          </button>
        </div>

        {/* Texte de célébration */}
        {isBlown && (
          <div className="mt-6 text-2xl font-bold text-white animate-bounce">
            🎊 Que tous tes rêves se réalisent! 🎊
          </div>
        )}
      </div>

      {/* Particules flottantes */}
      {animated && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-60 animate-float"
              style={{
                left: \`\${Math.random() * 100}%\`,
                top: \`\${Math.random() * 100}%\`,
                animationDelay: \`\${Math.random() * 3}s\`,
                animationDuration: \`\${Math.random() * 2 + 2}s\`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// CSS pour animations personnalisées
const customStyles = \`
  @keyframes float {
    0%, 100% { 
      transform: translateY(0px) rotate(0deg); 
      opacity: 0.6;
    }
    50% { 
      transform: translateY(-20px) rotate(180deg); 
      opacity: 1;
    }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
\`;`;
};
