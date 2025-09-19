# 🎨 DesignEase Studio - Script de démarrage Windows
Write-Host "🎨 Démarrage de DesignEase Studio..." -ForegroundColor Cyan

Write-Host "🔧 Vérification des dépendances..." -ForegroundColor Blue

# Vérifier Node.js
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "⚠️  Node.js n'est pas installé. Veuillez l'installer depuis https://nodejs.org" -ForegroundColor Yellow
    exit 1
}

$nodeVersion = node --version
Write-Host "✅ Node.js détecté: $nodeVersion" -ForegroundColor Green

# Installation des dépendances backend
Write-Host "📦 Installation backend..." -ForegroundColor Blue
Set-Location DeasignEase_back
if (-not (Test-Path "node_modules")) {
    npm install
}

# Vérification du fichier .env
if (-not (Test-Path ".env")) {
    Write-Host "⚠️  Création du fichier .env..." -ForegroundColor Yellow
    @"
API_KEY=key-01f7606fb5a9f0fa7
PORT=5000
"@ | Out-File -FilePath ".env" -Encoding UTF8
}

# Installation des dépendances frontend
Write-Host "📦 Installation frontend..." -ForegroundColor Blue
Set-Location ..\DesignEase-ui
if (-not (Test-Path "node_modules")) {
    npm install
}

# Vérification du fichier .env
if (-not (Test-Path ".env")) {
    Write-Host "⚠️  Création du fichier .env..." -ForegroundColor Yellow
    @"
VITE_API_URL=http://localhost:5000/api/generate
VITE_API_KEY=key-01f7606fb5a9f0fa7
"@ | Out-File -FilePath ".env" -Encoding UTF8
}

Write-Host "🚀 Démarrage des serveurs..." -ForegroundColor Green
Write-Host "Backend: http://localhost:5000" -ForegroundColor Blue
Write-Host "Frontend: http://localhost:3000" -ForegroundColor Blue
Write-Host ""
Write-Host "💡 Ouvrez http://localhost:3000 dans votre navigateur" -ForegroundColor Yellow
Write-Host ""

# Démarrage du backend
Set-Location ..\DeasignEase_back
Start-Process PowerShell -ArgumentList "-NoExit", "-Command", "npm run dev" -WindowStyle Normal

# Démarrage du frontend
Set-Location ..\DesignEase-ui
Start-Process PowerShell -ArgumentList "-NoExit", "-Command", "npm run dev" -WindowStyle Normal

Write-Host "✨ DesignEase Studio est maintenant en cours de démarrage !" -ForegroundColor Green
Write-Host "Les serveurs s'ouvrent dans des fenêtres séparées" -ForegroundColor Yellow
Write-Host ""
Write-Host "🌐 Interface principale: http://localhost:3000" -ForegroundColor Cyan
Write-Host "⚙️  API Backend: http://localhost:5000" -ForegroundColor Cyan
