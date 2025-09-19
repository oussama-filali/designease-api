# DesignEase - Générateur de Composants Modernes

![DesignEase Banner](./banner.png)

## 🌟 Nouveautés v2.0

### Nouveaux Composants Ajoutés

#### 🔐 Login Forms
- **Fonctionnalités** : Show/Hide password, validation en temps réel, thèmes multiples
- **Exemples** : Modern, Minimal, Animated
- **Templates** : Dark, Light, Gradient

#### ⏳ Loading Animations  
- **Types** : Spinner, Dots, Pulse, Bars, Wave, Skeleton
- **Personnalisation** : Taille, couleur, vitesse
- **Animations CSS** : Smooth et performantes

#### 🎂 Birthday Components
- **Animations** : Gâteau interactif, confettis, bougies soufflables
- **Modes** : Classic, Animated, Minimal, Party
- **Effets** : Particules flottantes, explosions de couleurs

#### 🔲 Button Advanced
- **Effet Box::before** : Animation de remplissage à partir de la gauche
- **CSS pur** : Alternative avec pseudo-éléments
- **Styles** : Glassmorphism, Neon, Loading states, Toggle

## 🎨 Design Inspiré de Webflow

### Accueil Moderne
- **Hero Section** : Dégradés animés, effets de flou
- **Features Grid** : Cartes glassmorphism avec hover effects
- **CTA Sections** : Boutons avec micro-interactions

### Navigation
- **Pages d'exemples** : Interface dédiée pour chaque composant
- **Playground** : Configuration en temps réel
- **Code Viewer** : Syntaxe highlighting et copie facile

## 🚀 Utilisation

### Démarrage Rapide
```bash
# Démarrer avec PowerShell
.\start_designease.ps1

# Ou manuellement :
# Backend
cd DeasignEase_back
npm start

# Frontend  
cd DesignEase-ui
npm run dev
```

### Génération de Composants

#### Button avec effet Box::before
```javascript
const response = await fetch('/api/generate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    component: 'button',
    framework: 'react',
    text: 'Mon Button',
    boxEffect: true
  })
});
```

#### Login avec Show/Hide
```javascript
const response = await fetch('/api/generate', {
  method: 'POST', 
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    component: 'login',
    framework: 'react',
    title: 'Connexion',
    withShowHide: true,
    theme: 'dark'
  })
});
```

#### Loading Animation
```javascript
const response = await fetch('/api/generate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    component: 'loading',
    framework: 'react',
    type: 'spinner', // dots, pulse, bars, wave
    size: 'md',
    color: 'blue'
  })
});
```

#### Birthday Component
```javascript  
const response = await fetch('/api/generate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    component: 'birthday',
    framework: 'react',
    message: 'Joyeux Anniversaire!',
    theme: 'colorful',
    animated: true
  })
});
```

## 📱 Pages d'Exemples

### Structure
- **ButtonExamples.jsx** : 7 variantes de boutons avec playground
- **LoginExamples.jsx** : 3 styles de login avec configuration
- **LoadingExamples.jsx** : 6 types d'animations avec personnalisation  
- **BirthdayExamples.jsx** : 4 modes de célébration

### Fonctionnalités
- ✅ Aperçu en temps réel
- ✅ Code source complet  
- ✅ Copie en un clic
- ✅ Configuration interactive
- ✅ Export ready-to-use

## 🎯 Templates Backend

### Structure des Templates
```
DeasignEase_back/src/templates/react/
├── button.js (avec boxEffect)
├── login.js (avec showHide)  
├── loading.js (6 types)
├── birthday.js (animations complètes)
├── modal.js
├── card.js
├── input.js
├── navbar.js
└── footer.js
```

### APIs Disponibles
- `POST /api/generate` : Génération de composants
- Support de tous les types avec options avancées
- Validation des paramètres
- Code optimisé et ready-to-use

## 🎨 Styles & Animations

### CSS Effects Utilisés
- **Glassmorphism** : `backdrop-blur-lg bg-white/20`
- **Box Before** : `transform: scaleX(0)` → `scaleX(1)`
- **Confetti** : Animations JavaScript avec position absolute
- **Loading** : Keyframes CSS optimisées
- **Hover Effects** : Transform, scale, shadow, color transitions

### Responsive Design
- Mobile-first approach
- Breakpoints adaptés
- Touch-friendly interactions
- Performance optimisée

## 🔧 Configuration

### Personnalisation
- Couleurs : Support de tous les thèmes
- Tailles : sm, md, lg, xl
- Animations : Durée et type configurables
- Export : Code propre sans dépendances

### Prochaines Fonctionnalités
- [ ] Plus d'effets CSS avancés
- [ ] Thèmes personnalisés
- [ ] Export Figma/Sketch
- [ ] Templates Vue.js et Angular
- [ ] Mode sombre/clair
- [ ] Sauvegarde de projets

---

**DesignEase v2.0** - Créez des composants extraordinaires en quelques clics ! 🚀
