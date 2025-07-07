module.exports = ({ title = 'Titre', description = 'Description de la carte' }) => {
  return `
import React from 'react';

export default function Card() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-2">${title}</h3>
      <p className="text-gray-600">${description}</p>
    </div>
  );
}`;
};
