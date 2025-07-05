"use strict";

module.exports = function (_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? 'Bouton' : _ref$text,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size,
      _ref$glassmorphism = _ref.glassmorphism,
      glassmorphism = _ref$glassmorphism === void 0 ? false : _ref$glassmorphism;
  return "\nimport React from 'react';\n\nexport default function Button() {\n  return (\n    <button className=\"".concat(size === 'large' ? 'py-3 px-6' : 'py-2 px-4', " ").concat(glassmorphism ? 'backdrop-blur-lg bg-white/30' : 'bg-blue-500', " text-white rounded\">\n      ").concat(text, "\n    </button>\n  );\n}");
};