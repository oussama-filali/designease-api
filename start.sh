#!/bin/bash

# 🎨 DesignEase Studio - Script de démarrage
echo "🎨 Démarrage de DesignEase Studio..."

# Couleurs pour l'affichage
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}🔧 Vérification des dépendances...${NC}"

# Vérifier Node.js
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}⚠️  Node.js n'est pas installé. Veuillez l'installer depuis https://nodejs.org${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Node.js détecté: $(node --version)${NC}"

# Installation des dépendances backend
echo -e "${BLUE}📦 Installation backend...${NC}"
cd DeasignEase_back
if [ ! -d "node_modules" ]; then
    npm install
fi

# Vérification du fichier .env
if [ ! -f ".env" ]; then
    echo -e "${YELLOW}⚠️  Création du fichier .env...${NC}"
    echo "API_KEY=key-01f7606fb5a9f0fa7" > .env
    echo "PORT=5000" >> .env
fi

# Installation des dépendances frontend
echo -e "${BLUE}📦 Installation frontend...${NC}"
cd ../DesignEase-ui
if [ ! -d "node_modules" ]; then
    npm install
fi

# Vérification du fichier .env
if [ ! -f ".env" ]; then
    echo -e "${YELLOW}⚠️  Création du fichier .env...${NC}"
    echo "VITE_API_URL=http://localhost:5000/api/generate" > .env
    echo "VITE_API_KEY=key-01f7606fb5a9f0fa7" >> .env
fi

echo -e "${GREEN}🚀 Démarrage des serveurs...${NC}"
echo -e "${BLUE}Backend: http://localhost:5000${NC}"
echo -e "${BLUE}Frontend: http://localhost:3000${NC}"
echo ""
echo -e "${YELLOW}💡 Ouvrez http://localhost:3000 dans votre navigateur${NC}"
echo ""

# Démarrage concurrent des serveurs
cd ../DeasignEase_back
npm run dev &
BACKEND_PID=$!

cd ../DesignEase-ui
npm run dev &
FRONTEND_PID=$!

# Fonction pour nettoyer les processus à l'arrêt
cleanup() {
    echo -e "\n${YELLOW}🛑 Arrêt des serveurs...${NC}"
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    exit 0
}

# Capturer Ctrl+C
trap cleanup SIGINT SIGTERM

echo -e "${GREEN}✨ DesignEase Studio est maintenant en cours d'exécution !${NC}"
echo -e "${YELLOW}Appuyez sur Ctrl+C pour arrêter${NC}"

# Attendre que les processus se terminent
wait
