import React, { useState } from 'react';
import { ArrowLeft, Copy, Eye, Code, Settings, Gift, Cake, PartyPopper, Heart } from 'lucide-react';

const BirthdayExamples = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('examples');
  const [copiedCode, setCopiedCode] = useState(null);

  const birthdayExamples = [
    {
      id: 'classic',
      title: 'Gâteau Classique',
      description: 'Animation de gâteau d\'anniversaire avec bougies soufflables',
      component: <ClassicBirthdayCake />,
      code: `const ClassicBirthdayCake = () => {
  const [isBlown, setIsBlown] = useState(false);
  
  const blowCandles = () => {
    setIsBlown(true);
    setTimeout(() => setIsBlown(false), 3000);
  };

  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold text-white mb-8 animate-pulse">
        🎉 Joyeux Anniversaire! 🎉
      </h1>
      
      <div className="relative mx-auto mb-8">
        {/* Gâteau */}
        <div className="w-60 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg mx-auto relative">
          <div className="w-40 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg mx-auto relative -mt-2"></div>
          
          {/* Bougies */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
            {[1, 2, 3].map((candle) => (
              <div key={candle} className="relative">
                <div className="w-2 h-8 bg-yellow-200 rounded-sm"></div>
                {!isBlown && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-gradient-to-t from-orange-400 to-red-400 rounded-full animate-pulse"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={blowCandles}
          className="px-6 py-3 bg-white/20 backdrop-blur-lg border border-white/30 text-white rounded-xl font-semibold hover:bg-white/30 transition-all"
        >
          {isBlown ? '🎊 Bravo! 🎊' : '💨 Souffler les bougies'}
        </button>
      </div>
    </div>
  );
};`
    },
    {
      id: 'animated',
      title: 'Animation Complète',
      description: 'Gâteau avec confettis et animations avancées',
      component: <AnimatedBirthdayCake />,
      code: `const AnimatedBirthdayCake = () => {
  const [isBlown, setIsBlown] = useState(false);
  const [confetti, setConfetti] = useState([]);

  const blowCandles = () => {
    setIsBlown(true);
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: ['#ff6b6b', '#4ecdc4', '#45b7d1'][Math.floor(Math.random() * 3)]
    }));
    setConfetti(newConfetti);
    
    setTimeout(() => {
      setConfetti([]);
      setIsBlown(false);
    }, 4000);
  };

  return (
    <div className="relative min-h-[400px] bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-2xl p-8 overflow-hidden">
      {/* Confettis */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 rounded-full animate-bounce"
          style={{
            left: \`\${piece.x}%\`,
            top: \`\${piece.y}%\`,
            backgroundColor: piece.color,
            animationDuration: \`\${Math.random() * 2 + 1}s\`
          }}
        />
      ))}

      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-8 animate-pulse">
          🎂 Happy Birthday! 🎂
        </h1>
        
        {/* Gâteau détaillé */}
        <div className="relative mx-auto mb-8">
          <div className="w-80 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg mx-auto relative">
            <div className="absolute bottom-2 left-4 w-4 h-4 bg-red-400 rounded-full"></div>
            <div className="absolute bottom-2 right-4 w-4 h-4 bg-blue-400 rounded-full"></div>
          </div>
          
          <div className="w-60 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg mx-auto relative -mt-2">
            <div className="absolute bottom-2 left-6 w-3 h-3 bg-white rounded-full"></div>
            <div className="absolute bottom-2 right-6 w-3 h-3 bg-white rounded-full"></div>
          </div>
          
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
            {[1, 2, 3].map((candle, index) => (
              <div key={candle} className="relative">
                <div className="w-2 h-8 bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-sm"></div>
                {!isBlown && (
                  <div 
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-gradient-to-t from-orange-400 to-red-400 rounded-full animate-pulse"
                    style={{animationDelay: \`\${index * 0.2}s\`}}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={blowCandles}
          className="px-8 py-4 bg-white/20 backdrop-blur-lg border border-white/30 text-white rounded-xl font-semibold hover:bg-white/30 transform hover:scale-105 transition-all duration-300"
        >
          {isBlown ? '🎉 Magnifique! 🎉' : '💨 Faire un vœu et souffler'}
        </button>
        
        {isBlown && (
          <div className="mt-6 text-2xl font-bold animate-bounce">
            🌟 Que tous tes rêves se réalisent! 🌟
          </div>
        )}
      </div>
    </div>
  );
};`
    },
    {
      id: 'minimal',
      title: 'Style Minimal',
      description: 'Design épuré et moderne pour les anniversaires',
      component: <MinimalBirthday />,
      code: `const MinimalBirthday = () => {
  const [celebrated, setCelebrated] = useState(false);

  return (
    <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl text-center">
      <div className="mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <Gift className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Joyeux Anniversaire!</h2>
        <p className="text-gray-600">Une nouvelle année commence</p>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-center space-x-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <div key={star} className="w-6 h-6 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: \`\${star * 0.1}s\`}}></div>
          ))}
        </div>
      </div>
      
      <button
        onClick={() => setCelebrated(!celebrated)}
        className={\`w-full py-3 rounded-xl font-semibold transition-all duration-300 \${
          celebrated 
            ? 'bg-green-500 text-white' 
            : 'bg-pink-500 text-white hover:bg-pink-600'
        }\`}
      >
        {celebrated ? '🎉 Célébré!' : '🎁 Célébrer'}
      </button>
    </div>
  );
};`
    },
    {
      id: 'party',
      title: 'Mode Fête',
      description: 'Animation festive avec effets spéciaux',
      component: <PartyMode />,
      code: `const PartyMode = () => {
  const [partyStarted, setPartyStarted] = useState(false);

  const startParty = () => {
    setPartyStarted(true);
    setTimeout(() => setPartyStarted(false), 5000);
  };

  return (
    <div className={\`relative rounded-2xl p-8 text-center transition-all duration-500 \${
      partyStarted 
        ? 'bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 animate-pulse' 
        : 'bg-gradient-to-br from-gray-800 to-gray-900'
    }\`}>
      
      {/* Particules flottantes */}
      {partyStarted && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className={\`absolute w-3 h-3 rounded-full animate-bounce \${
                ['bg-yellow-400', 'bg-pink-400', 'bg-blue-400', 'bg-green-400'][i % 4]
              }\`}
              style={{
                left: \`\${Math.random() * 100}%\`,
                top: \`\${Math.random() * 100}%\`,
                animationDelay: \`\${Math.random() * 2}s\`,
                animationDuration: \`\${Math.random() * 2 + 1}s\`
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 text-white">
        <h1 className={\`text-4xl font-bold mb-6 \${partyStarted ? 'animate-bounce' : ''}\`}>
          🎊 PARTY TIME! 🎊
        </h1>
        
        <div className="flex justify-center space-x-4 mb-8">
          <div className={\`text-6xl \${partyStarted ? 'animate-spin' : ''}\`}>🎂</div>
          <div className={\`text-6xl \${partyStarted ? 'animate-bounce' : ''}\`}>🎈</div>
          <div className={\`text-6xl \${partyStarted ? 'animate-pulse' : ''}\`}>🎁</div>
        </div>
        
        <button
          onClick={startParty}
          disabled={partyStarted}
          className={\`px-8 py-4 rounded-xl font-bold transition-all duration-300 \${
            partyStarted
              ? 'bg-green-500 text-white cursor-not-allowed'
              : 'bg-white text-purple-600 hover:bg-purple-100 transform hover:scale-105'
          }\`}
        >
          {partyStarted ? '🎉 FÊTE EN COURS! 🎉' : '🚀 LANCER LA FÊTE!'}
        </button>
        
        {partyStarted && (
          <div className="mt-6 text-xl font-bold animate-pulse">
            🌟 Amusez-vous bien! 🌟
          </div>
        )}
      </div>
    </div>
  );
};`
    }
  ];

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour</span>
            </button>
            
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-white">Birthday Examples</h1>
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Cake className="w-4 h-4 text-white" />
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setActiveTab('examples')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'examples'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Eye className="w-4 h-4 inline mr-2" />
                Exemples
              </button>
              <button
                onClick={() => setActiveTab('playground')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'playground'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Settings className="w-4 h-4 inline mr-2" />
                Playground
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'examples' ? (
          <div className="grid grid-cols-1 gap-8">
            {birthdayExamples.map((example) => (
              <div key={example.id} className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{example.title}</h3>
                  <button
                    onClick={() => copyCode(example.code, example.id)}
                    className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    {copiedCode === example.id ? (
                      <span className="text-green-400 text-sm">Copié!</span>
                    ) : (
                      <Copy className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                </div>
                
                <p className="text-gray-400 mb-6">{example.description}</p>
                
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 mb-6 flex items-center justify-center min-h-[400px]">
                  {example.component}
                </div>
                
                <div className="bg-black/30 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <BirthdayPlayground />
        )}
      </main>
    </div>
  );
};

// Composants d'anniversaire
const ClassicBirthdayCake = () => {
  const [isBlown, setIsBlown] = useState(false);
  
  const blowCandles = () => {
    setIsBlown(true);
    setTimeout(() => setIsBlown(false), 3000);
  };

  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold text-white mb-8 animate-pulse">
        🎉 Joyeux Anniversaire! 🎉
      </h1>
      
      <div className="relative mx-auto mb-8">
        {/* Gâteau */}
        <div className="w-60 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg mx-auto relative">
          <div className="w-40 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg mx-auto relative -mt-2"></div>
          
          {/* Bougies */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
            {[1, 2, 3].map((candle) => (
              <div key={candle} className="relative">
                <div className="w-2 h-8 bg-yellow-200 rounded-sm"></div>
                {!isBlown && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-gradient-to-t from-orange-400 to-red-400 rounded-full animate-pulse"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={blowCandles}
          className="px-6 py-3 bg-white/20 backdrop-blur-lg border border-white/30 text-white rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
        >
          {isBlown ? '🎊 Bravo! 🎊' : '💨 Souffler les bougies'}
        </button>
      </div>
    </div>
  );
};

const AnimatedBirthdayCake = () => {
  const [isBlown, setIsBlown] = useState(false);
  const [confetti, setConfetti] = useState([]);

  const blowCandles = () => {
    setIsBlown(true);
    const newConfetti = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: ['#ff6b6b', '#4ecdc4', '#45b7d1'][Math.floor(Math.random() * 3)]
    }));
    setConfetti(newConfetti);
    
    setTimeout(() => {
      setConfetti([]);
      setIsBlown(false);
    }, 4000);
  };

  return (
    <div className="relative min-h-[400px] bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-2xl p-8 overflow-hidden">
      {/* Confettis */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 rounded-full animate-bounce"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            backgroundColor: piece.color,
            animationDuration: `${Math.random() * 2 + 1}s`
          }}
        />
      ))}

      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-8 animate-pulse">
          🎂 Happy Birthday! 🎂
        </h1>
        
        {/* Gâteau détaillé */}
        <div className="relative mx-auto mb-8">
          <div className="w-80 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg mx-auto relative">
            <div className="absolute bottom-2 left-4 w-4 h-4 bg-red-400 rounded-full"></div>
            <div className="absolute bottom-2 right-4 w-4 h-4 bg-blue-400 rounded-full"></div>
          </div>
          
          <div className="w-60 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-lg mx-auto relative -mt-2">
            <div className="absolute bottom-2 left-6 w-3 h-3 bg-white rounded-full"></div>
            <div className="absolute bottom-2 right-6 w-3 h-3 bg-white rounded-full"></div>
          </div>
          
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-4">
            {[1, 2, 3].map((candle, index) => (
              <div key={candle} className="relative">
                <div className="w-2 h-8 bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-sm"></div>
                {!isBlown && (
                  <div 
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-gradient-to-t from-orange-400 to-red-400 rounded-full animate-pulse"
                    style={{animationDelay: `${index * 0.2}s`}}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <button
          onClick={blowCandles}
          className="px-8 py-4 bg-white/20 backdrop-blur-lg border border-white/30 text-white rounded-xl font-semibold hover:bg-white/30 transform hover:scale-105 transition-all duration-300"
        >
          {isBlown ? '🎉 Magnifique! 🎉' : '💨 Faire un vœu et souffler'}
        </button>
        
        {isBlown && (
          <div className="mt-6 text-2xl font-bold animate-bounce">
            🌟 Que tous tes rêves se réalisent! 🌟
          </div>
        )}
      </div>
    </div>
  );
};

const MinimalBirthday = () => {
  const [celebrated, setCelebrated] = useState(false);

  return (
    <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl text-center">
      <div className="mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <Gift className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Joyeux Anniversaire!</h2>
        <p className="text-gray-600">Une nouvelle année commence</p>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-center space-x-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <div key={star} className="w-6 h-6 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: `${star * 0.1}s`}}></div>
          ))}
        </div>
      </div>
      
      <button
        onClick={() => setCelebrated(!celebrated)}
        className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
          celebrated 
            ? 'bg-green-500 text-white' 
            : 'bg-pink-500 text-white hover:bg-pink-600'
        }`}
      >
        {celebrated ? '🎉 Célébré!' : '🎁 Célébrer'}
      </button>
    </div>
  );
};

const PartyMode = () => {
  const [partyStarted, setPartyStarted] = useState(false);

  const startParty = () => {
    setPartyStarted(true);
    setTimeout(() => setPartyStarted(false), 5000);
  };

  return (
    <div className={`relative rounded-2xl p-8 text-center transition-all duration-500 ${
      partyStarted 
        ? 'bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 animate-pulse' 
        : 'bg-gradient-to-br from-gray-800 to-gray-900'
    }`}>
      
      {/* Particules flottantes */}
      {partyStarted && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 rounded-full animate-bounce ${
                ['bg-yellow-400', 'bg-pink-400', 'bg-blue-400', 'bg-green-400'][i % 4]
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 2 + 1}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 text-white">
        <h1 className={`text-4xl font-bold mb-6 ${partyStarted ? 'animate-bounce' : ''}`}>
          🎊 PARTY TIME! 🎊
        </h1>
        
        <div className="flex justify-center space-x-4 mb-8">
          <div className={`text-6xl ${partyStarted ? 'animate-spin' : ''}`}>🎂</div>
          <div className={`text-6xl ${partyStarted ? 'animate-bounce' : ''}`}>🎈</div>
          <div className={`text-6xl ${partyStarted ? 'animate-pulse' : ''}`}>🎁</div>
        </div>
        
        <button
          onClick={startParty}
          disabled={partyStarted}
          className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
            partyStarted
              ? 'bg-green-500 text-white cursor-not-allowed'
              : 'bg-white text-purple-600 hover:bg-purple-100 transform hover:scale-105'
          }`}
        >
          {partyStarted ? '🎉 FÊTE EN COURS! 🎉' : '🚀 LANCER LA FÊTE!'}
        </button>
        
        {partyStarted && (
          <div className="mt-6 text-xl font-bold animate-pulse">
            🌟 Amusez-vous bien! 🌟
          </div>
        )}
      </div>
    </div>
  );
};

// Playground
const BirthdayPlayground = () => {
  const [message, setMessage] = useState('Joyeux Anniversaire!');
  const [theme, setTheme] = useState('colorful');
  const [animated, setAnimated] = useState(true);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Configuration</h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message d'anniversaire
            </label>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Thème
            </label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="colorful">Coloré</option>
              <option value="pastel">Pastel</option>
              <option value="elegant">Élégant</option>
              <option value="dark">Sombre</option>
            </select>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={animated}
                onChange={(e) => setAnimated(e.target.checked)}
                className="rounded bg-white/10 border-white/20 text-blue-500 focus:ring-blue-500"
              />
              <span className="text-gray-300">Animations activées</span>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Aperçu</h3>
        
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 flex items-center justify-center min-h-[400px]">
          <ClassicBirthdayCake />
        </div>
      </div>
    </div>
  );
};

export default BirthdayExamples;
