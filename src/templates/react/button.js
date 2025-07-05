module.exports = ({ text = 'Bouton', size = 'large', glassmorphism = false }) => {
  return `
import React from 'react';

export default function Button() {
  return (
    <button className="${size === 'large' ? 'py-3 px-6' : 'py-2 px-4'} ${
      glassmorphism ? 'backdrop-blur-lg bg-white/30' : 'bg-blue-500'
    } text-white rounded">
      ${text}
    </button>
  );
}`;
};
