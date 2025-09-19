function generateNavbarComponent({
  brand = 'DesignEase',
  links = ['Accueil', 'Services', 'À propos', 'Contact'],
  glassIntensity = 'medium',
  glassColor = 'white',
  borderStyle = 'subtle',
  shadowIntensity = 'medium'
} = {}) {
  
  // Chemin du composant d'aperçu côté frontend
  const preview = '/previews/NavbarPreview.jsx';
  const getGlassStyles = () => {
    const intensityMap = {
      light: { bg: 'rgba(255, 255, 255, 0.05)', blur: '15px' },
      medium: { bg: 'rgba(255, 255, 255, 0.1)', blur: '20px' },
      intense: { bg: 'rgba(255, 255, 255, 0.2)', blur: '25px' }
    };

    const colorMap = {
      white: 'rgba(255, 255, 255, 0.1)',
      purple: 'rgba(147, 51, 234, 0.15)',
      blue: 'rgba(59, 130, 246, 0.15)',
      pink: 'rgba(236, 72, 153, 0.15)'
    };

    const borderMap = {
      subtle: 'border-b border-white/20',
      glow: 'border-b-2 border-purple-400/50 shadow-lg shadow-purple-500/25',
      gradient: 'border-b-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500'
    };

    const shadowMap = {
      soft: 'shadow-lg',
      medium: 'shadow-xl shadow-black/10',
      dramatic: 'shadow-2xl shadow-purple-500/20'
    };

    const glass = intensityMap[glassIntensity];
    
    return {
      background: colorMap[glassColor] || glass.bg,
      backdropFilter: `backdrop-filter: blur(${glass.blur});`,
      border: borderMap[borderStyle],
      shadow: shadowMap[shadowIntensity]
    };
  };

  const styles = getGlassStyles();

  return `import React, { useState } from 'react';

export default function GlassmorphismNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('${links[0]}');

  const menuItems = [${links.map(link => `'${link}'`).join(', ')}];

  return (
    <nav 
      className="
        fixed top-0 left-0 right-0 z-50
        ${styles.shadow}
        ${styles.border}
        transition-all duration-300
      "
      style={{
        background: '${styles.background}',
        ${styles.backdropFilter}
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              ✨ ${brand}
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveLink(item)}
                  className={\`
                    px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                    \${activeLink === item 
                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-400/30 shadow-lg shadow-purple-500/25' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }
                  \`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="
              bg-gradient-to-r from-purple-600 to-pink-600 
              text-white px-6 py-2 rounded-xl font-semibold
              backdrop-blur-xl
              hover:from-purple-700 hover:to-pink-700
              hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-purple-400/50
            ">
              Commencer
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="
                bg-white/10 backdrop-blur-xl
                inline-flex items-center justify-center p-2 rounded-xl
                text-gray-300 hover:text-white hover:bg-white/20
                focus:outline-none focus:ring-2 focus:ring-purple-400/50
                transition-all duration-300
              "
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={\`md:hidden transition-all duration-300 overflow-hidden \${
        isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }\`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/20 backdrop-blur-xl border-t border-white/10">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveLink(item);
                setIsMenuOpen(false);
              }}
              className={\`
                block w-full text-left px-3 py-2 rounded-xl text-base font-medium
                transition-all duration-300
                \${activeLink === item 
                  ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-400/30' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
                }
              \`}
            >
              {item}
            </button>
          ))}
          <button className="
            w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 
            text-white px-4 py-2 rounded-xl font-semibold
            hover:from-purple-700 hover:to-pink-700
            transition-all duration-300
          ">
            Commencer
          </button>
        </div>
      </div>
    </nav>
  );
}`;
}

module.exports = { generateNavbarComponent };
// Export du chemin d'aperçu pour usage API
module.exports.preview = '/previews/NavbarPreview.jsx';
