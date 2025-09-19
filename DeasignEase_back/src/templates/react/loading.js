module.exports = ({ type = 'spinner', size = 'md', color = 'blue' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const colorClasses = {
    blue: 'border-blue-500',
    purple: 'border-purple-500',
    green: 'border-green-500',
    red: 'border-red-500',
    yellow: 'border-yellow-500'
  };

  const animations = {
    spinner: `
      <div className="flex items-center justify-center">
        <div className="${sizeClasses[size]} border-4 ${colorClasses[color]} border-t-transparent rounded-full animate-spin"></div>
      </div>`,
    
    dots: `
      <div className="flex items-center justify-center space-x-2">
        <div className="${sizeClasses[size]} bg-${color}-500 rounded-full animate-bounce"></div>
        <div className="${sizeClasses[size]} bg-${color}-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
        <div className="${sizeClasses[size]} bg-${color}-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
      </div>`,
    
    pulse: `
      <div className="flex items-center justify-center">
        <div className="${sizeClasses[size]} bg-${color}-500 rounded-full animate-pulse"></div>
      </div>`,
    
    bars: `
      <div className="flex items-center justify-center space-x-1">
        <div className="w-2 ${sizeClasses[size].split(' ')[1]} bg-${color}-500 rounded animate-pulse"></div>
        <div className="w-2 ${sizeClasses[size].split(' ')[1]} bg-${color}-500 rounded animate-pulse" style={{animationDelay: '0.1s'}}></div>
        <div className="w-2 ${sizeClasses[size].split(' ')[1]} bg-${color}-500 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
        <div className="w-2 ${sizeClasses[size].split(' ')[1]} bg-${color}-500 rounded animate-pulse" style={{animationDelay: '0.3s'}}></div>
      </div>`
  };

  return `import React from 'react';

export default function LoadingAnimation() {
  return (
    <div className="p-8">
      ${animations[type]}
    </div>
  );
}

// CSS personnalisé pour animations avancées
const customStyles = \`
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes wave {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.5); }
  }
  
  .animate-float {
    animation: float 2s ease-in-out infinite;
  }
  
  .animate-wave {
    animation: wave 1s ease-in-out infinite;
  }
\`;`;
};
