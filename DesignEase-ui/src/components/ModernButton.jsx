import React, { useState } from 'react';

export default function ModernButton({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  loading = false,
  className = '' 
}) {
  const [isRippling, setIsRippling] = useState(false);
  const [rippleCoords, setRippleCoords] = useState({ x: 0, y: 0 });

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRippleCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsRippling(true);
    setTimeout(() => setIsRippling(false), 600);
    
    if (onClick && !disabled && !loading) {
      onClick(e);
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:shadow-xl';
      case 'secondary':
        return 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg hover:shadow-xl';
      case 'accent':
        return 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-xl';
      case 'success':
        return 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg hover:shadow-xl';
      case 'outline':
        return 'border-2 border-white/30 text-white hover:bg-white/10';
      case 'ghost':
        return 'text-white hover:bg-white/10';
      default:
        return 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:shadow-xl';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1.5 text-sm';
      case 'md':
        return 'px-4 py-2 text-base';
      case 'lg':
        return 'px-6 py-3 text-lg';
      default:
        return 'px-4 py-2 text-base';
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || loading}
      className={`
        relative overflow-hidden group
        ${getVariantClasses()}
        ${getSizeClasses()}
        rounded-lg font-medium
        transform transition-all duration-300 ease-out
        hover:scale-105 hover:-translate-y-0.5
        active:scale-95 active:translate-y-0
        focus:outline-none focus:ring-2 focus:ring-violet-400/50
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
        ${className}
      `}
    >
      {/* Effet de ripple */}
      {isRippling && (
        <span
          className="absolute bg-white/30 rounded-full animate-ping"
          style={{
            left: rippleCoords.x,
            top: rippleCoords.y,
            width: 20,
            height: 20,
            marginLeft: -10,
            marginTop: -10,
          }}
        />
      )}
      
      {/* Overlay de brillance */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      
      {/* Contenu du bouton */}
      <div className="relative flex items-center justify-center space-x-2">
        {loading && (
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        )}
        <span>{children}</span>
      </div>
    </button>
  );
}