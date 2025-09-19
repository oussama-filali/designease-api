export const componentOptions = [
  {
    id: 'button',
    name: 'Button',
    icon: '🔲',
    category: 'Interactive',
    description: 'Boutons interactifs modernes avec animations',
    features: ['Hover Effects', 'Multiple Sizes', 'Glassmorphism', 'Box Before Effect'],
    examples: ['Primary', 'Glassmorphism', 'Animated', 'Neon', 'Loading', 'Toggle', 'Box Before']
  },
  {
    id: 'modal',
    name: 'Modal',
    icon: '🪟',
    category: 'Overlay',
    description: 'Fenêtres modales élégantes et responsives',
    features: ['Backdrop Blur', 'Close Animation', 'Mobile Friendly', 'Custom Content'],
    examples: ['Basic', 'Confirmation', 'Form', 'Image Gallery']
  },
  {
    id: 'card',
    name: 'Card',
    icon: '🃏',
    category: 'Layout',
    description: 'Cartes d\'information stylées avec interactions',
    features: ['Hover Animations', 'Shadow Effects', 'Responsive Design', 'Action Buttons'],
    examples: ['Profile', 'Product', 'Article', 'Pricing']
  },
  {
    id: 'input',
    name: 'Input',
    icon: '📝',
    category: 'Form',
    description: 'Champs de saisie avancés avec validation',
    features: ['Floating Labels', 'Validation States', 'Icon Support', 'Multiple Types'],
    examples: ['Text', 'Email', 'Password', 'Search', 'TextArea']
  },
  {
    id: 'navbar',
    name: 'Navbar',
    icon: '🧭',
    category: 'Navigation',
    description: 'Barres de navigation responsives',
    features: ['Mobile Menu', 'Dropdown', 'Search Bar', 'Logo Support'],
    examples: ['Horizontal', 'Vertical', 'Sticky', 'Transparent']
  },
  {
    id: 'footer',
    name: 'Footer',
    icon: '🦶',
    category: 'Layout',
    description: 'Pieds de page modernes et informatifs',
    features: ['Multi-column', 'Social Links', 'Newsletter', 'Copyright'],
    examples: ['Simple', 'Corporate', 'Creative', 'Minimal']
  },
  {
    id: 'login',
    name: 'Login',
    icon: '🔐',
    category: 'Authentication',
    description: 'Formulaires de connexion sécurisés avec show/hide',
    features: ['Password Toggle', 'Validation', 'Social Login', 'Remember Me'],
    examples: ['Modern', 'Minimal', 'Animated', 'Two-Factor']
  },
  {
    id: 'loading',
    name: 'Loading',
    icon: '⏳',
    category: 'Feedback',
    description: 'Animations de chargement fluides et modernes',
    features: ['Multiple Types', 'Customizable', 'Smooth Animations', 'Size Variants'],
    examples: ['Spinner', 'Dots', 'Pulse', 'Bars', 'Wave', 'Skeleton']
  },
  {
    id: 'birthday',
    name: 'Birthday',
    icon: '🎂',
    category: 'Special',
    description: 'Animations d\'anniversaire festives avec gâteau',
    features: ['Cake Animation', 'Confetti Effect', 'Candle Blowing', 'Party Mode'],
    examples: ['Classic Cake', 'Animated', 'Minimal', 'Party Mode']
  }
];

export const categories = [
  { id: 'all', name: 'Tous', icon: '🌟' },
  { id: 'interactive', name: 'Interactif', icon: '🎯' },
  { id: 'layout', name: 'Layout', icon: '📐' },
  { id: 'form', name: 'Formulaire', icon: '📝' },
  { id: 'navigation', name: 'Navigation', icon: '🧭' },
  { id: 'overlay', name: 'Overlay', icon: '🪟' },
  { id: 'authentication', name: 'Auth', icon: '🔐' },
  { id: 'feedback', name: 'Feedback', icon: '⏳' },
  { id: 'special', name: 'Spécial', icon: '🎉' }
];

export const colorThemes = {
  primary: 'from-blue-500 to-purple-600',
  secondary: 'from-gray-500 to-gray-700', 
  accent: 'from-pink-500 to-red-600',
  success: 'from-green-500 to-emerald-600',
  warning: 'from-yellow-500 to-orange-600',
  info: 'from-cyan-500 to-blue-600',
  celebration: 'from-pink-500 via-purple-500 to-indigo-500'
};
