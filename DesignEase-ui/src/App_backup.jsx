import React, { useState } from 'react';
import Configurator from './components/Configurator.jsx';
import Preview from './components/Preview.jsx';
import CodeViewer from './components/CodeViewer.jsx';
import './App.css';

const TEMPLATES = [
  { value: 'button', label: 'Button', icon: '🔘' },
  { value: 'modal', label: 'Modal', icon: '🪟' },
  { value: 'card', label: 'Card', icon: '🃏' },
  { value: 'input', label: 'Input', icon: '⌨️' },
  { value: 'navbar', label: 'Navbar', icon: '📑' },
  { value: 'footer', label: 'Footer', icon: '📄' },
];

export default function App() {
  const [componentType, setComponentType] = useState('button');
  const [generatedCode, setGeneratedCode] = useState('');
  const [activeTab, setActiveTab] = useState('config'); // 'config', 'preview', 'code'

  return (
    <div className="min-h-screen flex bg-white text-gray-800 overflow-hidden">
      {/* Left Side - Navigation Menu */}
      <aside className="w-[380px] min-h-screen bg-gray-50 flex flex-col justify-between py-12 px-10 z-10">
        {/* Logo */}
        <div className="space-y-10">
          <div>
            <h1 className="text-4xl font-black mb-2 tracking-tight text-gray-900">DesignEase</h1>
            <p className="text-gray-500 text-sm">Créez des composants élégants en quelques clics</p>
          </div>
          
          {/* Templates Menu */}
          <div className="space-y-6">
            <h2 className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Templates</h2>
            <div className="grid grid-cols-2 gap-3">
              {TEMPLATES.map((tpl) => (
                <button
                  key={tpl.value}
                  onClick={() => setComponentType(tpl.value)}
                  className={`
                    group flex flex-col items-center justify-center p-5 rounded-xl
                    transition-all duration-300 ease-in-out
                    ${componentType === tpl.value
                      ? 'bg-black text-white shadow-lg transform -translate-y-1'
                      : 'bg-white text-gray-700 hover:shadow-md hover:-translate-y-1 border border-gray-100'}
                  `}
                >
                  <span className="text-2xl mb-2 transition-transform duration-300 group-hover:scale-110">{tpl.icon}</span>
                  <span className="font-medium text-sm">{tpl.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="space-y-6">
            <h2 className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Actions rapides</h2>
            <div className="space-y-3">
              <button 
                onClick={() => setActiveTab('config')}
                className={`w-full flex items-center p-4 rounded-lg font-medium text-sm transition-all duration-200
                  ${activeTab === 'config' 
                    ? 'bg-black text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-100'}`}
              >
                <span className="mr-3">⚙️</span>
                <span>Configuration</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('preview')}
                className={`w-full flex items-center p-4 rounded-lg font-medium text-sm transition-all duration-200
                  ${activeTab === 'preview' 
                    ? 'bg-black text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-100'}`}
              >
                <span className="mr-3">👁️</span>
                <span>Aperçu</span>
              </button>
              
              <button 
                onClick={() => setActiveTab('code')}
                className={`w-full flex items-center p-4 rounded-lg font-medium text-sm transition-all duration-200
                  ${activeTab === 'code' 
                    ? 'bg-black text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-100'}`}
              >
                <span className="mr-3">💻</span>
                <span>Code</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-xs text-gray-500 text-center pt-6">
          <span>© 2025 DesignEase Studio</span>
        </div>
      </aside>
      
      {/* Right Side - Generator Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <div className="py-8 px-12 border-b border-gray-100 bg-white">
          <h1 className="text-3xl font-bold text-gray-900">
            {TEMPLATES.find(t => t.value === componentType)?.label}
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Personnalisez et générez votre composant React
          </p>
        </div>

        {/* Content Area */}
        <div className="flex-1 py-10 px-12 space-y-10 overflow-y-auto">
          {/* Configuration Panel - Always visible */}
          <div className={`transition-all duration-300 ${activeTab === 'config' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden m-0 p-0'}`}>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900">Configuration</h3>
                <p className="text-gray-500 text-sm mt-1">Personnalisez les options de votre composant</p>
              </div>
              <div className="p-8">
                <Configurator
                  componentType={componentType}
                  onCodeGenerated={setGeneratedCode}
                />
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className={`transition-all duration-300 ${activeTab === 'preview' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden m-0 p-0'}`}>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900">Aperçu en direct</h3>
                <p className="text-gray-500 text-sm mt-1">Visualisez votre composant en temps réel</p>
              </div>
              <div className="p-12 min-h-[400px] flex items-center justify-center bg-gray-50">
                <Preview code={generatedCode} />
              </div>
            </div>
          </div>

          {/* Code */}
          <div className={`transition-all duration-300 ${activeTab === 'code' ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden m-0 p-0'}`}>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900">Code généré</h3>
                <p className="text-gray-500 text-sm mt-1">Copiez et utilisez le code dans votre projet</p>
              </div>
              <div className="p-8">
                <CodeViewer code={generatedCode} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
