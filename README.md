# 🎨 DesignEase Studio

**Générateur de composants UI moderne** - Créez des composants React magnifiques en quelques clics !

## ✨ Fonctionnalités

- 🚀 **Interface moderne** avec design glassmorphism et thème sombre
- 🎯 **Génération instantanée** de composants React optimisés
- 📱 **Responsive design** adaptatif sur tous les écrans
- 🎨 **3 types de composants** : Buttons, Modals, Cards
- 📋 **Copie/téléchargement** direct du code généré
- 👁️ **Aperçu en temps réel** des composants
- ⚡ **API REST** robuste avec validation de clé

## 🛠️ Technologies

### Frontend
- **React** + **Vite** - Interface moderne et rapide
- **Tailwind CSS** - Design system et animations
- **Glassmorphism** - Effets visuels modernes

### Backend
- **Node.js** + **Express** - API REST performante
- **EJS** - Templates dynamiques
- **CORS** - Configuration sécurisée

## 🚀 Installation & Démarrage

### Prérequis
- Node.js 18+ 
- npm ou yarn

### 1. Clone le projet
```bash
git clone <votre-repo>
cd designease-api
```

### 2. Installation Backend
```bash
cd DeasignEase_back
npm install
```

### 3. Configuration Environnement
Créer `.env` dans `DeasignEase_back/` :
```env
API_KEY=key-01f7606fb5a9f0fa7
PORT=5000
```

### 4. Installation Frontend
```bash
cd ../DesignEase-ui
npm install
```

### 5. Démarrage
**Terminal 1 - Backend :**
```bash
cd DeasignEase_back
npm run dev
```

**Terminal 2 - Frontend :**
```bash
cd DesignEase-ui
npm run dev
```

### 6. Accès
- **Interface principale** : http://localhost:3000
- **API backend** : http://localhost:5000
- **Documentation EJS** : http://localhost:5000

## 📡 API Usage

### Endpoint : `POST /api/generate`

**Headers :**
```json
{
  "Content-Type": "application/json",
  "x-api-key": "key-01f7606fb5a9f0fa7"
}
```

**Body Examples :**

**Button :**
```json
{
  "component": "button",
  "framework": "react",
  "text": "Mon Bouton",
  "size": "large",
  "glassmorphism": true
}
```

**Modal :**
```json
{
  "component": "modal",
  "framework": "react",
  "title": "Confirmation",
  "content": "Êtes-vous sûr ?"
}
```

**Card :**
```json
{
  "component": "card",
  "framework": "react",
  "title": "Ma Carte",
  "description": "Description de la carte"
}
```

## 🎨 Composants Disponibles

### 🔘 Button
- Tailles : `large`, `small`
- Effet glassmorphism
- Dégradés modernes
- Animations hover/focus

### 🪟 Modal
- Design moderne avec backdrop blur
- Fermeture par clic extérieur
- Boutons d'action personnalisables
- Responsive

### 🃏 Card
- Design avec image placeholder
- Effets hover élégants
- Boutons d'action intégrés
- Support thème sombre

## 📁 Structure du Projet

```
designease-api/
├── DeasignEase_back/          # Backend API
│   ├── src/
│   │   ├── controllers/       # Contrôleurs API
│   │   ├── middlewares/       # Validation API key
│   │   ├── routes/           # Routes Express
│   │   ├── templates/        # Templates des composants
│   │   │   └── react/        # Templates React
│   │   └── utils/            # Générateur de code
│   ├── views/                # Templates EJS
│   └── .env                  # Configuration
│
└── DesignEase-ui/            # Frontend React
    ├── src/
    │   ├── components/       # Composants React
    │   ├── layout/          # Layout principal
    │   └── data/            # Configuration
    └── .env                 # Configuration Vite
```

## 🔒 Sécurité

- **Validation API Key** - Toutes les requêtes sont protégées
- **CORS configuré** - Accès limité aux domaines autorisés
- **Validation des données** - Sanitisation des inputs

## 🎯 Utilisation Rapide

1. **Choisir** le type de composant
2. **Configurer** les options (texte, taille, style)
3. **Générer** le code
4. **Copier/Télécharger** le fichier .jsx
5. **Importer** dans votre projet React

## 🚀 Déploiement

### Backend
```bash
cd DeasignEase_back
npm run build
npm start
```

### Frontend
```bash
cd DesignEase-ui
npm run build
# Déployer le dossier dist/
```

## 🤝 Contribution

1. Fork le projet
2. Créer une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Push (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## 📄 Licence

MIT License - voir le fichier LICENSE

## 🙏 Remerciements

- **Tailwind CSS** pour le design system
- **React** pour la réactivité
- **Vite** pour la rapidité de développement

---

**🎨 DesignEase Studio** - *Créez l'impossible, simplement.*
