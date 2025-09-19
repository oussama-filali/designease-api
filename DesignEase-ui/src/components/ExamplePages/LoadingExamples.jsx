import React, { useState } from 'react';
import { ArrowLeft, Copy, Eye, Code, Settings, Loader, RotateCcw, Zap } from 'lucide-react';

const LoadingExamples = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('examples');
  const [copiedCode, setCopiedCode] = useState(null);

  const loadingExamples = [
    {
      id: 'spinner',
      title: 'Spinner Classique',
      description: 'Animation de rotation simple et élégante',
      component: <SpinnerLoader />,
      code: `const SpinnerLoader = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};`
    },
    {
      id: 'dots',
      title: 'Points Animés',
      description: 'Animation de points qui rebondissent',
      component: <DotsLoader />,
      code: `const DotsLoader = () => {
  return (
    <div className="flex items-center justify-center space-x-2 p-8">
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
    </div>
  );
};`
    },
    {
      id: 'pulse',
      title: 'Pulsation',
      description: 'Effect de pulsation douce et continue',
      component: <PulseLoader />,
      code: `const PulseLoader = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
    </div>
  );
};`
    },
    {
      id: 'bars',
      title: 'Barres Verticales',
      description: 'Animation de barres qui montent et descendent',
      component: <BarsLoader />,
      code: `const BarsLoader = () => {
  return (
    <div className="flex items-center justify-center space-x-1 p-8">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="w-2 h-8 bg-blue-500 rounded animate-pulse"
          style={{
            animationDelay: \`\${i * 0.1}s\`,
            animationDuration: '1s'
          }}
        ></div>
      ))}
    </div>
  );
};`
    },
    {
      id: 'wave',
      title: 'Vague Liquide',
      description: 'Animation de vague fluide et moderne',
      component: <WaveLoader />,
      code: `const WaveLoader = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping"></div>
        <div className="absolute inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
        <div className="absolute inset-4 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};`
    },
    {
      id: 'skeleton',
      title: 'Skeleton Loading',
      description: 'Animation de squelette pour le contenu',
      component: <SkeletonLoader />,
      code: `const SkeletonLoader = () => {
  return (
    <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-lg">
      <div className="animate-pulse">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="space-y-2 flex-1">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-4/6"></div>
        </div>
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
              <h1 className="text-2xl font-bold text-white">Loading Examples</h1>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Loader className="w-4 h-4 text-white animate-spin" />
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {loadingExamples.map((example) => (
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
                
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 mb-6 flex items-center justify-center min-h-[200px]">
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
          <LoadingPlayground />
        )}
      </main>
    </div>
  );
};

// Composants de chargement
const SpinnerLoader = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

const DotsLoader = () => {
  return (
    <div className="flex items-center justify-center space-x-2 p-8">
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
    </div>
  );
};

const PulseLoader = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
    </div>
  );
};

const BarsLoader = () => {
  return (
    <div className="flex items-center justify-center space-x-1 p-8">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="w-2 h-8 bg-blue-500 rounded animate-pulse"
          style={{
            animationDelay: `${i * 0.1}s`,
            animationDuration: '1s'
          }}
        ></div>
      ))}
    </div>
  );
};

const WaveLoader = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping"></div>
        <div className="absolute inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
        <div className="absolute inset-4 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

const SkeletonLoader = () => {
  return (
    <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-lg">
      <div className="animate-pulse">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="space-y-2 flex-1">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  );
};

// Playground pour tester les configurations
const LoadingPlayground = () => {
  const [loadingType, setLoadingType] = useState('spinner');
  const [size, setSize] = useState('md');
  const [color, setColor] = useState('blue');

  const renderLoader = () => {
    const sizeClasses = {
      sm: 'w-4 h-4',
      md: 'w-8 h-8',
      lg: 'w-12 h-12',
      xl: 'w-16 h-16'
    };

    const colorClasses = {
      blue: 'border-blue-500 bg-blue-500',
      purple: 'border-purple-500 bg-purple-500',
      green: 'border-green-500 bg-green-500',
      red: 'border-red-500 bg-red-500',
      yellow: 'border-yellow-500 bg-yellow-500'
    };

    switch (loadingType) {
      case 'spinner':
        return (
          <div className={`${sizeClasses[size]} border-4 ${colorClasses[color]} border-t-transparent rounded-full animate-spin`}></div>
        );
      case 'dots':
        return (
          <div className="flex items-center space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-bounce`}
                style={{animationDelay: `${i * 0.1}s`}}
              ></div>
            ))}
          </div>
        );
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`}></div>
        );
      default:
        return <SpinnerLoader />;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Configuration</h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Type d'animation
            </label>
            <select
              value={loadingType}
              onChange={(e) => setLoadingType(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="spinner">Spinner</option>
              <option value="dots">Points</option>
              <option value="pulse">Pulsation</option>
              <option value="bars">Barres</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Taille
            </label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="sm">Petite</option>
              <option value="md">Moyenne</option>
              <option value="lg">Grande</option>
              <option value="xl">Extra Grande</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Couleur
            </label>
            <select
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="blue">Bleu</option>
              <option value="purple">Violet</option>
              <option value="green">Vert</option>
              <option value="red">Rouge</option>
              <option value="yellow">Jaune</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Aperçu</h3>
        
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 flex items-center justify-center min-h-[300px]">
          {renderLoader()}
        </div>
        
        <div className="mt-6 bg-black/30 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`<div className="flex items-center justify-center">
  <div className="${loadingType === 'spinner' ? `w-${size === 'sm' ? '4' : size === 'md' ? '8' : size === 'lg' ? '12' : '16'} h-${size === 'sm' ? '4' : size === 'md' ? '8' : size === 'lg' ? '12' : '16'} border-4 border-${color}-500 border-t-transparent rounded-full animate-spin` : ''}"></div>
</div>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default LoadingExamples;
