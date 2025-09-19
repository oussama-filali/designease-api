import React, { useMemo, useState } from "react";
import ModernButton from "./components/ModernButton";
import CodeViewer from "./components/CodeViewer";
import CardVisualization from "./components/CardVisualization";
import ButtonExamples from "./components/ExamplePages/ButtonExamples";
import ModalExamples from "./components/ExamplePages/ModalExamples";
import LoginExamples from "./components/ExamplePages/LoginExamples";
import LoadingExamples from "./components/ExamplePages/LoadingExamples";
import BirthdayExamples from "./components/ExamplePages/BirthdayExamples";
import { CATEGORIES, TEMPLATES_BY_CATEGORY } from "./templates/index";
import { Settings, Code, Eye, Sparkles, ArrowRight, Zap, Layers, Palette, MousePointer, Globe, Lock, Loader, Cake } from "lucide-react";


//   { value: "button", label: "Button", icon: "🔲", color: "primary", description: "Boutons interactifs modernes" },
//   { value: "modal", label: "Modal", icon: "🪟", color: "secondary", description: "Fenêtres modales élégantes" },
//   { value: "card", label: "Card", icon: "🃏", color: "accent", description: "Cartes d'information stylées" },
//   { value: "input", label: "Input", icon: "📝", color: "success", description: "Champs de saisie avancés" },
//   { value: "navbar", label: "Navbar", icon: "🧭", color: "primary", description: "Barres de navigation" },
//   { value: "footer", label: "Footer", icon: "🦶", color: "secondary", description: "Pieds de page modernes" },
//   { value: "login", label: "Login", icon: "🔐", color: "warning", description: "Formulaires de connexion sécurisés" },
//   { value: "loading", label: "Loading", icon: "⏳", color: "info", description: "Animations de chargement fluides" },
//   { value: "birthday", label: "Birthday", icon: "🎂", color: "celebration", description: "Animations d'anniversaire festives" }
// ];

export default function App() {
  const [componentType, setComponentType] = useState("button");
  const [componentText, setComponentText] = useState("Mon Composant");
  const [componentSize, setComponentSize] = useState("md");
  const [generatedCode, setGeneratedCode] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showCardVisualization, setShowCardVisualization] = useState(false);
  const [currentExamplePage, setCurrentExamplePage] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const [previewPath, setPreviewPath] = useState(null);
  // New: local category & selected template
  const [category, setCategory] = useState("react");
  const [selectedTemplateId, setSelectedTemplateId] = useState(null);

  const templates = useMemo(() => TEMPLATES_BY_CATEGORY[category] || [], [category]);

  const generateComponent = async () => {
    setIsGenerating(true);
    
    try {
      // Utiliser la VRAIE API backend
      const body = { 
        component: componentType, 
        framework: 'react' 
      };
      
      // Ajouter les options spécifiques selon le composant
      if (componentType === 'button') {
        body.text = componentText;
        body.size = componentSize === 'sm' ? 'small' : 'large';
        body.glassmorphism = true;
      } else if (componentType === 'modal') {
        body.title = componentText;
        body.content = "Contenu du modal avec design moderne";
      } else if (componentType === 'card') {
        body.title = componentText;
        body.description = "Description avec design moderne";
      } else if (componentType === 'input') {
        body.placeholder = componentText;
        body.type = 'text';
      } else if (componentType === 'login') {
        body.title = componentText;
        body.withShowHide = true;
        body.theme = 'dark';
      } else if (componentType === 'loading') {
        body.type = 'spinner';
        body.size = componentSize;
        body.color = 'blue';
      } else if (componentType === 'birthday') {
        body.message = componentText;
        body.theme = 'colorful';
        body.animated = true;
      }
      
      const response = await fetch('http://localhost:5000/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'key-01f7606fb5a9f0fa7'
        },
        body: JSON.stringify(body)
      });
      
      const data = await response.json();
      if (response.ok) {
        // Nettoyer le code généré avant de l'afficher
        const cleanCode = data.code
          .replace(/\${/g, '${')
          .replace(/\$\{title\}/g, componentText)
          .replace(/\$\{content\}/g, 'Contenu du modal avec design moderne')
          .replace(/\$\{text\}/g, componentText)
          .replace(/\$\{placeholder\}/g, componentText)
          .replace(/\$\{description\}/g, 'Description avec design moderne');
        setGeneratedCode(cleanCode);
        setPreviewPath(data.preview || null);
      } else {
        setPreviewPath(null);
        throw new Error(data.error || 'Erreur de génération');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setGeneratedCode('// Erreur lors de la génération du composant');
    } finally {
      setIsGenerating(false);
    }
  };

  // Aperçu basé sur les VRAIS templates backend
  const renderPreview = () => {
    if (!componentText) {
      return (
        <div className="text-center text-gray-500">
          <Settings className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <p>Configurez votre composant pour voir l'aperçu</p>
        </div>
      );
    }

    switch (componentType) {
      case 'button':
        // Aperçu basé sur le template button.js
        const buttonSizeClasses = componentSize === 'sm' ? 'px-6 py-3 text-base' : 'px-8 py-4 text-lg';
        const buttonStyleClasses = 'backdrop-blur-lg bg-white/20 border border-white/30 text-white hover:bg-white/30';
        
        return (
          <button 
            className={`${buttonSizeClasses} ${buttonStyleClasses} rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300/50 active:scale-95`}
            onClick={() => alert('Button clicked!')}
          >
            {componentText}
          </button>
        );
        
      case 'modal':
        return (
          <div className="w-full max-w-md p-6 bg-white shadow-2xl dark:bg-gray-800 rounded-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">{componentText}</h2>
              <button className="text-gray-400 transition-colors hover:text-gray-600">✕</button>
            </div>
            <div className="pt-4">
              <p className="text-gray-600">Contenu du modal avec design moderne</p>
            </div>
          </div>
        );
        
      case 'card':
        return (
          <div className="space-y-4">
            <div className="max-w-sm p-8 transition-all duration-300 bg-white border border-gray-100 shadow-xl rounded-2xl hover:shadow-2xl">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">{componentText}</h3>
              <p className="mb-4 leading-relaxed text-gray-600">Description avec design moderne</p>
              <button 
                onClick={() => setShowCardVisualization(true)}
                className="flex items-center justify-center w-full px-4 py-2 space-x-2 text-white transition-all duration-200 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-lg"
              >
                <Eye className="w-4 h-4" />
                <span>Voir visualisation complète</span>
              </button>
            </div>
          </div>
        );
      case 'input':
        return (
          <input 
            type="text"
            placeholder={componentText}
            className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-300 border bg-white/10 backdrop-blur-lg border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        );
        
      case 'login':
        return (
          <div className="w-full max-w-md p-6 bg-white shadow-2xl dark:bg-gray-800 rounded-2xl">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{componentText}</h2>
            </div>
            
            <div className="space-y-4">
              <input 
                type="text"
                placeholder="Nom d'utilisateur"
                className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-300 border bg-white/10 backdrop-blur-lg border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              
              <input 
                type="password"
                placeholder="Mot de passe"
                className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-300 border bg-white/10 backdrop-blur-lg border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <button 
              onClick={() => alert('Login clicked!')}
              className="flex items-center justify-center w-full px-4 py-2 mt-4 space-x-2 text-white transition-all duration-200 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-lg"
            >
              <Lock className="w-4 h-4" />
              <span>Se connecter</span>
            </button>
          </div>
        );
        
      case 'loading':
        return (
          <div className="flex items-center justify-center space-x-2">
            <Loader className="w-6 h-6 text-white animate-spin" />
            <span className="text-white">Chargement...</span>
          </div>
        );
        
      case 'birthday':
        return (
          <div className="flex flex-col items-center justify-center text-center">
            <Cake className="w-16 h-16 mb-4 text-white animate-bounce" />
            <h3 className="mb-2 text-2xl font-bold text-white">Joyeux Anniversaire !</h3>
            <p className="text-white/80">Que cette journée soit remplie de joie et de surprises.</p>
          </div>
        );
        
      default:
        return <div className="text-gray-500">Composant non supporté</div>;
    }
  };

  // Si on est en mode visualisation Card
  if (showCardVisualization) {
    return <CardVisualization onBack={() => setShowCardVisualization(false)} />;
  }

  // Si on affiche une page d'exemple
  if (currentExamplePage === 'button') {
    return <ButtonExamples onBack={() => setCurrentExamplePage(null)} />;
  }

  if (currentExamplePage === 'modal') {
    return <ModalExamples onBack={() => setCurrentExamplePage(null)} />;
  }

  if (currentExamplePage === 'login') {
    return <LoginExamples onBack={() => setCurrentExamplePage(null)} />;
  }

  if (currentExamplePage === 'loading') {
    return <LoadingExamples onBack={() => setCurrentExamplePage(null)} />;
  }

  if (currentExamplePage === 'birthday') {
    return <BirthdayExamples onBack={() => setCurrentExamplePage(null)} />;
  }

  // Page d'accueil moderne type Webflow
  if (showWelcome) {
    return (
      <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute rounded-full top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 blur-3xl"></div>
            <div className="absolute rounded-full top-1/2 right-1/4 w-80 h-80 bg-purple-500/20 blur-3xl"></div>
            <div className="absolute w-64 h-64 rounded-full bottom-1/4 left-1/2 bg-pink-500/20 blur-3xl"></div>
          </div>

          {/* Header */}
          <header className="relative z-10 px-6 py-8">
            <div className="flex items-center justify-between mx-auto max-w-7xl">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-2xl font-bold text-white">DesignEase</h1>
              </div>
              
              <button
                onClick={() => setShowWelcome(false)}
                className="flex items-center px-6 py-3 space-x-2 text-white transition-all duration-300 border bg-white/10 backdrop-blur-lg border-white/20 rounded-xl hover:bg-white/20"
              >
                <span>Commencer</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </header>

          {/* Hero Content */}
          <div className="relative z-10 px-6 py-20">
            <div className="mx-auto text-center max-w-7xl">
              <h2 className="mb-8 text-6xl font-black leading-tight text-white md:text-8xl">
                Créez des
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text"> composants</span>
                <br />
                modernes
              </h2>
              
              <p className="max-w-3xl mx-auto mb-12 text-xl leading-relaxed md:text-2xl text-white/80">
                Générez des composants React magnifiques avec des designs modernes, 
                des animations fluides et une expérience utilisateur exceptionnelle.
              </p>
              
              <div className="flex flex-col justify-center gap-4 mb-20 sm:flex-row">
                <button
                  onClick={() => setShowWelcome(false)}
                  className="px-8 py-4 font-semibold text-white transition-all duration-300 transform shadow-2xl bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl hover:from-blue-600 hover:to-purple-600 hover:scale-105"
                >
                  Commencer gratuitement
                </button>
                
                <button
                  onClick={() => setCurrentExamplePage('button')}
                  className="px-8 py-4 font-semibold text-white transition-all duration-300 border bg-white/10 backdrop-blur-lg border-white/20 rounded-xl hover:bg-white/20"
                >
                  Voir les exemples
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative z-10 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h3 className="mb-4 text-4xl font-bold text-white">
                Pourquoi choisir DesignEase ?
              </h3>
              <p className="text-xl text-white/70">
                Des outils puissants pour créer des interfaces exceptionnelles
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: Zap,
                  title: "Génération instantanée",
                  description: "Créez des composants en quelques secondes avec notre IA avancée"
                },
                {
                  icon: Palette,
                  title: "Design moderne",
                  description: "Des designs tendance avec glassmorphism et animations fluides"
                },
                {
                  icon: Layers,
                  title: "Composants variés",
                  description: "Boutons, modals, cartes, inputs et bien plus encore"
                },
                {
                  icon: Code,
                  title: "Code propre",
                  description: "Code React optimisé et prêt pour la production"
                },
                {
                  icon: MousePointer,
                  title: "Interactif",
                  description: "Visualisez et testez vos composants en temps réel"
                },
                {
                  icon: Globe,
                  title: "Responsive",
                  description: "Tous les composants s'adaptent à tous les écrans"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-8 transition-all duration-300 border bg-white/5 backdrop-blur-xl rounded-2xl border-white/10 hover:border-white/20 group"
                >
                  <div className="flex items-center justify-center w-12 h-12 mb-6 transition-transform bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl group-hover:scale-110">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="mb-3 text-xl font-bold text-white">{feature.title}</h4>
                  <p className="leading-relaxed text-white/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Components Preview Section */}
        <div className="relative z-10 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <h3 className="mb-4 text-4xl font-bold text-white">
                Explorez nos composants
              </h3>
              <p className="text-xl text-white/70">
                Découvrez tous les composants disponibles avec des exemples interactifs
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.value}
                  className="p-8 transition-all duration-300 border cursor-pointer bg-white/5 backdrop-blur-xl rounded-2xl border-white/10 hover:border-white/20 group"
                  onClick={() => { setCategory(cat.value); setShowWelcome(false); }}
                >
                  <div className="text-center">
                    <div className="mb-4 text-4xl">{cat.icon}</div>
                    <h4 className="mb-2 text-xl font-bold text-white">{cat.label}</h4>
                    <p className="mb-6 text-white/70">Templates {cat.label} modernes et animés</p>
                    <button className="flex items-center justify-center w-full px-6 py-3 space-x-2 text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl hover:from-blue-600 hover:to-purple-600">
                      <span>Explorer</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative z-10 px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="mb-6 text-4xl font-bold text-white">
              Prêt à créer des composants extraordinaires ?
            </h3>
            <p className="mb-8 text-xl text-white/70">
              Rejoignez des milliers de développeurs qui utilisent déjà DesignEase
            </p>
            
            <button
              onClick={() => setShowWelcome(false)}
              className="px-10 py-5 text-lg font-semibold text-white transition-all duration-300 transform shadow-2xl bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl hover:from-blue-600 hover:to-purple-600 hover:scale-105"
            >
              Commencer maintenant
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* MENU HORIZONTAL - Composants */}
      <header className="z-30 flex flex-col w-full px-8 py-4 border-b bg-black/20 backdrop-blur-xl border-white/10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center mb-4 space-x-4 md:mb-0">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-white">DesignEase</h1>
          <button
            onClick={() => setShowWelcome(true)}
            className="ml-2 transition-colors text-white/60 hover:text-white"
          >
            <ArrowRight className="w-4 h-4 transform rotate-180" />
          </button>
        </div>
        {/* Menu Catégories */}
        <nav className="flex flex-row flex-wrap items-center justify-center gap-2 md:gap-4 mb-2">
          {CATEGORIES.map(cat => (
            <ModernButton
              key={cat.id}
              onClick={() => { setCategory(cat.id); setSelectedTemplateId(null); setGeneratedCode(""); }}
              variant={category === cat.id ? 'primary' : 'outline'}
              size="sm"
              className="flex items-center gap-2 px-4 py-2 text-sm"
            >
              <span>{cat.label}</span>
            </ModernButton>
          ))}
        </nav>
        {/* Menu Templates de la catégorie */}
        <nav className="flex flex-row flex-wrap items-center justify-center gap-2 md:gap-4">
          {(TEMPLATES_BY_CATEGORY[category] || []).map((template) => (
            <ModernButton
              key={template.id}
              onClick={() => { setSelectedTemplateId(template.id); setGeneratedCode(template.code || ""); }}
              variant={selectedTemplateId === template.id ? 'success' : 'outline'}
              size="sm"
              className="flex items-center gap-2 px-4 py-2 text-sm"
            >
              <span>{template.name}</span>
            </ModernButton>
          ))}
        </nav>
      </header>

      {/* CONFIGURATION */}
      <aside className="flex flex-col p-6 space-y-6 border-r w-80 bg-black/20 backdrop-blur-xl border-white/10">
        <h3 className="mb-2 text-base font-semibold text-white/90">Configuration</h3>
        <div className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-white/80">
              Texte du composant
            </label>
            <input
              type="text"
              value={componentText}
              onChange={(e) => setComponentText(e.target.value)}
              className="w-full px-3 py-2 text-sm text-white transition-all duration-300 border rounded-lg bg-white/10 border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Entrez le texte..."
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white/80">
              Taille
            </label>
            <select
              value={componentSize}
              onChange={(e) => setComponentSize(e.target.value)}
              className="w-full px-3 py-2 text-sm text-white transition-all duration-300 border rounded-lg bg-white/10 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            >
              <option value="sm">Petite</option>
              <option value="md">Moyenne</option>
              <option value="lg">Grande</option>
            </select>
          </div>
          {/* Comportement: si catégorie = local templates, on n'appelle pas le backend */}
          {category === 'react' ? (
            <ModernButton
              onClick={generateComponent}
              loading={isGenerating}
              variant="success"
              size="sm"
              className="w-full"
            >
              <Zap className="w-4 h-4 mr-2" />
              {isGenerating ? 'Génération...' : 'Générer via backend'}
            </ModernButton>
          ) : (
            <div className="text-xs text-white/60">Les catégories HTML/CSS/JS/ Wizard CSS utilisent les templates locaux.</div>
          )}
        </div>
      </aside>

      {/* ZONE CENTRALE - Aperçu */}
      <main className="flex flex-col flex-1">
        {/* Header */}
        <header className="p-4 border-b bg-black/20 backdrop-blur-xl border-white/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-r from-blue-500 to-purple-500">
                <Eye className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-lg font-bold text-white">
                {CATEGORIES.find(c => c.id === category)?.label} — {templates.length} templates
              </h2>
            </div>
          </div>
        </header>

        {/* Zone d'aperçu */}
        <div className="flex-1 p-6 m-4 border bg-black/10 backdrop-blur-xl rounded-xl border-white/10">
          <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
            {(templates || []).map((tpl) => (
              <div key={tpl.id} className={`rounded-xl border bg-white/5 border-white/10 p-4 ${selectedTemplateId === tpl.id ? 'ring-2 ring-purple-400' : ''}`}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-semibold text-sm">{tpl.name}</h4>
                  <ModernButton size="xs" variant="outline" onClick={() => { setSelectedTemplateId(tpl.id); setGeneratedCode(tpl.code || ''); }}>Sélectionner</ModernButton>
                </div>
                {/* Preview rendering */}
                {tpl.preview ? (
                  <div className="p-3 rounded-md bg-black/20 border border-white/10" dangerouslySetInnerHTML={{ __html: tpl.preview }} />
                ) : tpl.code ? (
                  <pre className="p-3 text-xs rounded-md bg-black/20 border border-white/10 overflow-auto"><code>{tpl.code}</code></pre>
                ) : (
                  <div className="text-white/60 text-sm">Pas d'aperçu</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* SIDEBAR DROITE - Terminal de code */}
      <aside className="flex flex-col p-4 border-l w-96 bg-black/20 backdrop-blur-xl border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-r from-blue-500 to-purple-500">
              <Code className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-base font-semibold text-white">Code Généré</h3>
          </div>
          
          {generatedCode && (
            <button
              onClick={() => navigator.clipboard.writeText(generatedCode)}
              className="px-3 py-1 text-sm text-white transition-colors rounded-lg bg-white/10 hover:bg-white/20"
            >
              Copier
            </button>
          )}
        </div>
        
        <div className="flex-1">
          <CodeViewer code={generatedCode} preview={previewPath} />
        </div>
      </aside>
    </div>
  );
}
