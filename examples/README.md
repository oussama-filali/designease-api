# 🎨 Exemples de composants DesignEase

Ce dossier contient des exemples de composants générés par DesignEase Studio, prêts à être utilisés dans vos projets React.

## 🚀 Utilisation rapide

### Button Component

```jsx
import GeneratedButton from './GeneratedButton';

function App() {
  return (
    <div>
      {/* Bouton normal */}
      <GeneratedButton 
        text="Cliquez-moi" 
        size="large"
        onClick={() => alert('Bouton cliqué!')}
      />
      
      {/* Bouton avec effet glassmorphism */}
      <GeneratedButton 
        text="Effet Glass" 
        size="small"
        glassmorphism={true}
        onClick={() => console.log('Glass button')}
      />
    </div>
  );
}
```

### Modal Component

```jsx
import { useState } from 'react';
import GeneratedModal from './GeneratedModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>
        Ouvrir Modal
      </button>
      
      <GeneratedModal
        title="Confirmation"
        content="Êtes-vous sûr de vouloir continuer ?"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
```

## 📦 Installation

1. Copiez le composant souhaité dans votre projet
2. Assurez-vous d'avoir Tailwind CSS configuré
3. Importez et utilisez le composant

## 🎨 Personnalisation

Tous les composants acceptent des props pour la personnalisation :

- **Styling** : Modifiez les classes Tailwind
- **Comportement** : Ajoutez vos propres fonctions de callback
- **Contenu** : Personnalisez le texte et les données

## 🔧 Dépendances

- React 18+
- Tailwind CSS 3+

## 💡 Conseils

- Utilisez les composants comme base et adaptez-les à vos besoins
- Les composants supportent le thème sombre automatiquement
- Tous les composants sont responsive par défaut
