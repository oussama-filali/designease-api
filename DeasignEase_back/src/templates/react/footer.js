function generateFooterComponent({
  company = 'DesignEase',
  year = new Date().getFullYear(),
  glassIntensity = 'medium',
  glassColor = 'white',
  borderStyle = 'subtle',
  shadowIntensity = 'medium'
} = {}) {
  
  const getGlassStyles = () => {
    const intensityMap = {
      light: { bg: 'rgba(255, 255, 255, 0.05)', blur: '15px' },
      medium: { bg: 'rgba(255, 255, 255, 0.1)', blur: '20px' },
      intense: { bg: 'rgba(255, 255, 255, 0.2)', blur: '25px' }
    };

    const colorMap = {
      white: 'rgba(255, 255, 255, 0.08)',
      purple: 'rgba(147, 51, 234, 0.15)',
      blue: 'rgba(59, 130, 246, 0.15)',
      pink: 'rgba(236, 72, 153, 0.15)'
    };

    const borderMap = {
      subtle: 'border-t border-white/20',
      glow: 'border-t-2 border-purple-400/50 shadow-lg shadow-purple-500/25',
      gradient: 'border-t-2 border-transparent bg-gradient-to-r from-purple-500 to-pink-500'
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

  return `import React from 'react';

export default function GlassmorphismFooter() {
  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'GitHub', icon: '🐙', url: '#' }
  ];

  const quickLinks = [
    { name: 'Accueil', url: '#' },
    { name: 'À propos', url: '#' },
    { name: 'Services', url: '#' },
    { name: 'Portfolio', url: '#' },
    { name: 'Contact', url: '#' }
  ];

  const services = [
    { name: 'Design UI/UX', url: '#' },
    { name: 'Développement Web', url: '#' },
    { name: 'Applications Mobile', url: '#' },
    { name: 'Consulting', url: '#' },
    { name: 'Support', url: '#' }
  ];

  return (
    <footer 
      className="
        relative
        ${styles.shadow}
        ${styles.border}
        mt-20
      "
      style={{
        background: '${styles.background}',
        ${styles.backdropFilter}
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {/* Particules décorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-20 w-1 h-1 bg-pink-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-6 right-1/3 w-1 h-1 bg-emerald-400 rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                ✨ ${company}
              </h3>
              <p className="text-gray-300 text-sm mt-2">
                Créateur de designs modernes et d'expériences utilisateur exceptionnelles.
              </p>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-3">Suivez-nous</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="
                      w-10 h-10 bg-white/10 backdrop-blur-xl rounded-xl
                      flex items-center justify-center
                      text-gray-300 hover:text-white
                      hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20
                      hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25
                      transition-all duration-300
                      border border-white/10 hover:border-purple-400/30
                    "
                    title={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Liens Rapides</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="
                    block text-gray-300 hover:text-white
                    hover:translate-x-2 transition-all duration-300
                    hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text hover:text-transparent
                    py-1
                  "
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Nos Services</h4>
            <div className="space-y-2">
              {services.map((service) => (
                <a
                  key={service.name}
                  href={service.url}
                  className="
                    block text-gray-300 hover:text-white
                    hover:translate-x-2 transition-all duration-300
                    hover:bg-gradient-to-r hover:from-blue-400 hover:to-emerald-400 hover:bg-clip-text hover:text-transparent
                    py-1
                  "
                >
                  {service.name}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-4">
              Restez informé de nos dernières créations et innovations.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="votre@email.com"
                className="
                  w-full px-4 py-3 rounded-xl
                  bg-white/10 backdrop-blur-xl
                  border border-white/20
                  text-white placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-purple-400/50
                  focus:border-purple-400/50
                  transition-all duration-300
                "
              />
              <button className="
                w-full bg-gradient-to-r from-purple-600 to-pink-600
                text-white py-3 rounded-xl font-semibold
                hover:from-purple-700 hover:to-pink-700
                hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30
                transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-purple-400/50
              ">
                S'abonner ✨
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © ${year} ${company}. Tous droits réservés. Made with ❤️ and ✨
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Conditions d'utilisation
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
    </footer>
  );
}`;
}

module.exports = { generateFooterComponent };
