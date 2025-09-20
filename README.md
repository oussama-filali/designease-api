# DesignEase - Documentation & Guide

## Présentation
DesignEase est une application moderne permettant de générer des composants UI (React, HTML, CSS, JS) avec visualisation instantanée, dashboard de statistiques, et design inspiré de Vercel.

## Structure du projet
- **DeasignEase_back_ts/** : Backend TypeScript (Express) pour l'API de génération de composants.
- **DesignEase-ui-ts/** : Frontend TypeScript (React + Vite) pour le dashboard, la visualisation et l'import des templates.
- **test/** : Dossier global pour les tests (backend et frontend).
- **.gitignore, .vscode, tsconfig.json** : Fichiers de configuration essentiels.

## Fonctionnalités principales
- Génération de composants React, HTML, CSS, JS via API backend.
- Visualisation instantanée et interactive des templates.
- Dashboard moderne, stats en grille Vercel, dark ultra-design.
- Centralisation des templates JS wizards/glassmorphism.
- API backend utilisée par le frontend.

## Installation des dépendances

### Backend
```bash
cd DeasignEase_back_ts
npm install
```

### Frontend
```bash
cd DesignEase-ui-ts
npm install
```

## Démarrage instantané
Un script unique permet de lancer le backend et le frontend simultanément :
```bash
npm run start:all
```

## Tests
Tous les tests sont regroupés dans le dossier `test/` à la racine. Ils couvrent :
- API backend (routes, génération, cohérence)
- Frontend (dashboard, visualisation, intégration API)

Pour lancer les tests :
```bash
npm run test
```

## Modifications apportées
- Migration complète en TypeScript (backend et frontend)
- Suppression de tous les fichiers/dossiers inutiles et doublons
- Centralisation des templates JS wizards/glassmorphism
- Ajout d'un dashboard moderne avec stats Vercel
- Création d'un dossier global de tests
- Ajout d'un script de démarrage instantané

## Contact
Pour toute question ou amélioration, contactez l'équipe DesignEase.
