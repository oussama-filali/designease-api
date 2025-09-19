import React, { useState } from 'react';
import { ArrowLeft, Copy, Download, Eye, Code, Zap, Star, Heart, Settings, Send, Play, Pause, ChevronRight, Plus, Minus } from 'lucide-react';

const ButtonExamples = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('examples');
  const [copiedCode, setCopiedCode] = useState(null);

  const buttonExamples = [
    {
      id: 'primary',
      title: 'Primary Button',
      description: 'Button principal pour les actions importantes',
      component: (
        <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
          Action Principale
        </button>
      ),
      code: `<button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
  Action Principale
</button>`
    },
    {
      id: 'glassmorphism',
      title: 'Glassmorphism Button',
      description: 'Button avec effet de verre moderne',
      component: (
        <button className="px-8 py-4 bg-white/20 backdrop-blur-lg border border-white/30 text-white rounded-xl font-semibold hover:bg-white/30 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
          <Zap className="w-5 h-5 inline mr-2" />
          Glassmorphism
        </button>
      ),
      code: `<button className="px-8 py-4 bg-white/20 backdrop-blur-lg border border-white/30 text-white rounded-xl font-semibold hover:bg-white/30 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
  <Zap className="w-5 h-5 inline mr-2" />
  Glassmorphism
</button>`
    },
    {
      id: 'animated',
      title: 'Animated Button',
      description: 'Button avec animation au survol',
      component: (
        <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <span className="relative z-10 flex items-center">
            <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Animé
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-violet-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </button>
      ),
      code: `<button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl">
  <span className="relative z-10 flex items-center">
    <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
    Animé
  </span>
  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-violet-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
</button>`
    },
    {
      id: 'neon',
      title: 'Neon Button',
      description: 'Button avec effet néon lumineux',
      component: (
        <button className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 transform hover:scale-105">
          <Star className="w-5 h-5 inline mr-2" />
          Néon
        </button>
      ),
      code: `<button className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all duration-300 transform hover:scale-105">
  <Star className="w-5 h-5 inline mr-2" />
  Néon
</button>`
    },
    {
      id: 'loading',
      title: 'Loading Button',
      description: 'Button avec état de chargement',
      component: (
        <LoadingButton />
      ),
      code: `const [isLoading, setIsLoading] = useState(false);

<button 
  onClick={() => setIsLoading(!isLoading)}
  disabled={isLoading}
  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center"
>
  {isLoading ? (
    <>
      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
      Chargement...
    </>
  ) : (
    <>
      <Send className="w-5 h-5 mr-2" />
      Envoyer
    </>
  )}
</button>`
    },
    {
      id: 'toggle',
      title: 'Toggle Button',
      description: 'Button avec état actif/inactif',
      component: (
        <ToggleButton />
      ),
      code: `const [isActive, setIsActive] = useState(false);

<button 
  onClick={() => setIsActive(!isActive)}
  className={\`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center \${
    isActive 
      ? 'bg-green-500 text-white shadow-lg' 
      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
  }\`}
>
  {isActive ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
  {isActive ? 'Actif' : 'Inactif'}
</button>`
    },
    {
      id: 'box-before',
      title: 'Box Before Effect',
      description: 'Button avec effet CSS ::before moderne',
      component: (
        <BoxBeforeButton />
      ),
      code: `const BoxBeforeButton = () => {
  return (
    <button className="group relative px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-500 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:text-white">
      <span className="relative z-10">Box Effect</span>
      <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      <div className="absolute inset-0 border-2 border-blue-300 rounded-xl transform scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></div>
    </button>
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
              <h1 className="text-2xl font-bold text-white">Button Examples</h1>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
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
            {buttonExamples.map((example) => (
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
                
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 mb-6 flex items-center justify-center min-h-[120px]">
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
          <ButtonPlayground />
        )}
      </main>
    </div>
  );
};

// Composant LoadingButton
const LoadingButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <button 
      onClick={() => setIsLoading(!isLoading)}
      disabled={isLoading}
      className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:from-green-600 hover:to-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center"
    >
      {isLoading ? (
        <>
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
          Chargement...
        </>
      ) : (
        <>
          <Send className="w-5 h-5 mr-2" />
          Envoyer
        </>
      )}
    </button>
  );
};

// Composant ToggleButton
const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button 
      onClick={() => setIsActive(!isActive)}
      className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center ${
        isActive 
          ? 'bg-green-500 text-white shadow-lg' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
    >
      {isActive ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
      {isActive ? 'Actif' : 'Inactif'}
    </button>
  );
};

// Composant BoxBeforeButton
const BoxBeforeButton = () => {
  return (
    <button className="group relative px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-500 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:text-white">
      <span className="relative z-10">Box Effect</span>
      <div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
      <div className="absolute inset-0 border-2 border-blue-300 rounded-xl transform scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></div>
    </button>
  );
};

// Composant ButtonPlayground
const ButtonPlayground = () => {
  const [buttonText, setButtonText] = useState('Mon Button');
  const [buttonSize, setButtonSize] = useState('md');
  const [buttonStyle, setButtonStyle] = useState('primary');
  const [buttonIcon, setButtonIcon] = useState('none');

  const generateButtonClasses = () => {
    const baseClasses = 'font-semibold transition-all duration-300 rounded-xl flex items-center justify-center';
    
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    const styleClasses = {
      primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl',
      secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
      success: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600',
      danger: 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600',
      outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
      ghost: 'text-gray-700 hover:bg-gray-100'
    };

    return `${baseClasses} ${sizeClasses[buttonSize]} ${styleClasses[buttonStyle]}`;
  };

  const renderIcon = () => {
    const iconClasses = 'w-5 h-5 mr-2';
    switch (buttonIcon) {
      case 'plus': return <Plus className={iconClasses} />;
      case 'minus': return <Minus className={iconClasses} />;
      case 'arrow': return <ChevronRight className={iconClasses} />;
      case 'star': return <Star className={iconClasses} />;
      case 'heart': return <Heart className={iconClasses} />;
      case 'send': return <Send className={iconClasses} />;
      default: return null;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Configuration */}
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Configuration</h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Texte du bouton
            </label>
            <input
              type="text"
              value={buttonText}
              onChange={(e) => setButtonText(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Entrez le texte..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Taille
            </label>
            <select
              value={buttonSize}
              onChange={(e) => setButtonSize(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="sm">Petite</option>
              <option value="md">Moyenne</option>
              <option value="lg">Grande</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Style
            </label>
            <select
              value={buttonStyle}
              onChange={(e) => setButtonStyle(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="success">Success</option>
              <option value="danger">Danger</option>
              <option value="outline">Outline</option>
              <option value="ghost">Ghost</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Icône
            </label>
            <select
              value={buttonIcon}
              onChange={(e) => setButtonIcon(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="none">Aucune</option>
              <option value="plus">Plus</option>
              <option value="minus">Moins</option>
              <option value="arrow">Flèche</option>
              <option value="star">Étoile</option>
              <option value="heart">Cœur</option>
              <option value="send">Envoyer</option>
            </select>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Aperçu</h3>
        
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 mb-6 flex items-center justify-center min-h-[200px]">
          <button className={generateButtonClasses()}>
            {renderIcon()}
            {buttonText}
          </button>
        </div>
        
        <div className="bg-black/30 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-gray-300">
            <code>{`<button className="${generateButtonClasses()}">
  ${buttonIcon !== 'none' ? `{renderIcon()}` : ''}
  ${buttonText}
</button>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ButtonExamples;
