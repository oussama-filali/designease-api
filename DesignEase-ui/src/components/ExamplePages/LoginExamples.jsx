import React, { useState } from 'react';
import { ArrowLeft, Copy, Eye, Code, Settings, Lock, Mail, EyeOff, Shield, User } from 'lucide-react';

const LoginExamples = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('examples');
  const [copiedCode, setCopiedCode] = useState(null);

  const loginExamples = [
    {
      id: 'modern',
      title: 'Login Moderne',
      description: 'Formulaire de connexion avec design glassmorphism',
      component: <ModernLogin />,
      code: `import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';

const ModernLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  return (
    <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full">
      <h2 className="text-2xl font-bold text-white text-center mb-6">Connexion</h2>
      <form className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
          />
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type={showPassword ? 'text' : 'password'}
            className="w-full pl-12 pr-12 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Mot de passe"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
        <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
          Se connecter
        </button>
      </form>
    </div>
  );
};`
    },
    {
      id: 'minimal',
      title: 'Login Minimal',
      description: 'Design épuré et moderne',
      component: <MinimalLogin />,
      code: `const MinimalLogin = () => {
  return (
    <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Bienvenue</h2>
      </div>
      <form className="space-y-6">
        <input
          type="email"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Adresse email"
        />
        <input
          type="password"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Mot de passe"
        />
        <button className="w-full py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all">
          Connexion
        </button>
      </form>
    </div>
  );
};`
    },
    {
      id: 'animated',
      title: 'Login Animé',
      description: 'Avec animations et transitions fluides',
      component: <AnimatedLogin />,
      code: `const AnimatedLogin = () => {
  const [focused, setFocused] = useState('');
  
  return (
    <div className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl p-8 max-w-md w-full">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <Shield className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white">Connexion</h2>
      </div>
      <form className="space-y-6">
        <div className="relative">
          <input
            type="email"
            onFocus={() => setFocused('email')}
            onBlur={() => setFocused('')}
            className={\`w-full px-4 py-4 bg-white/10 backdrop-blur-lg border-2 rounded-xl text-white placeholder-gray-300 transition-all duration-300 \${
              focused === 'email' ? 'border-blue-400 scale-105' : 'border-white/20'
            }\`}
            placeholder="Email"
          />
        </div>
        <div className="relative">
          <input
            type="password"
            onFocus={() => setFocused('password')}
            onBlur={() => setFocused('')}
            className={\`w-full px-4 py-4 bg-white/10 backdrop-blur-lg border-2 rounded-xl text-white placeholder-gray-300 transition-all duration-300 \${
              focused === 'password' ? 'border-blue-400 scale-105' : 'border-white/20'
            }\`}
            placeholder="Mot de passe"
          />
        </div>
        <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
          Se connecter
        </button>
      </form>
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
              <h1 className="text-2xl font-bold text-white">Login Examples</h1>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <Lock className="w-4 h-4 text-white" />
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
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {loginExamples.map((example) => (
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
          <LoginPlayground />
        )}
      </main>
    </div>
  );
};

// Composants d'exemple
const ModernLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  return (
    <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full">
      <h2 className="text-2xl font-bold text-white text-center mb-6">Connexion</h2>
      <form className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="email"
            className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
          />
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type={showPassword ? 'text' : 'password'}
            className="w-full pl-12 pr-12 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Mot de passe"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
        <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
          Se connecter
        </button>
      </form>
    </div>
  );
};

const MinimalLogin = () => {
  return (
    <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Bienvenue</h2>
      </div>
      <form className="space-y-6">
        <input
          type="email"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          placeholder="Adresse email"
        />
        <input
          type="password"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          placeholder="Mot de passe"
        />
        <button className="w-full py-3 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105">
          Connexion
        </button>
      </form>
    </div>
  );
};

const AnimatedLogin = () => {
  const [focused, setFocused] = useState('');
  
  return (
    <div className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl p-8 max-w-md w-full">
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <Shield className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white">Connexion</h2>
      </div>
      <form className="space-y-6">
        <div className="relative">
          <input
            type="email"
            onFocus={() => setFocused('email')}
            onBlur={() => setFocused('')}
            className={`w-full px-4 py-4 bg-white/10 backdrop-blur-lg border-2 rounded-xl text-white placeholder-gray-300 transition-all duration-300 ${
              focused === 'email' ? 'border-blue-400 scale-105' : 'border-white/20'
            }`}
            placeholder="Email"
          />
        </div>
        <div className="relative">
          <input
            type="password"
            onFocus={() => setFocused('password')}
            onBlur={() => setFocused('')}
            className={`w-full px-4 py-4 bg-white/10 backdrop-blur-lg border-2 rounded-xl text-white placeholder-gray-300 transition-all duration-300 ${
              focused === 'password' ? 'border-blue-400 scale-105' : 'border-white/20'
            }`}
            placeholder="Mot de passe"
          />
        </div>
        <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
          Se connecter
        </button>
      </form>
    </div>
  );
};

// Playground pour tester les configurations
const LoginPlayground = () => {
  const [loginTitle, setLoginTitle] = useState('Connexion');
  const [withShowHide, setWithShowHide] = useState(true);
  const [theme, setTheme] = useState('dark');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Configuration</h3>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Titre du formulaire
            </label>
            <input
              type="text"
              value={loginTitle}
              onChange={(e) => setLoginTitle(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={withShowHide}
                onChange={(e) => setWithShowHide(e.target.checked)}
                className="rounded bg-white/10 border-white/20 text-blue-500 focus:ring-blue-500"
              />
              <span className="text-gray-300">Bouton afficher/masquer mot de passe</span>
            </label>
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
              <option value="dark">Sombre</option>
              <option value="light">Clair</option>
              <option value="gradient">Dégradé</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Aperçu</h3>
        
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 flex items-center justify-center min-h-[400px]">
          <ModernLogin />
        </div>
      </div>
    </div>
  );
};

export default LoginExamples;
