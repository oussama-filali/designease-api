import DashboardLayout from './layout/DashboardLayout';
import Configurator from './components/Configurator';
import Preview from './components/Preview';
import CodeViewer from './components/CodeViewer';
import { useState } from 'react';

export default function App() {
  const [code, setCode] = useState('');
  const [componentType, setComponentType] = useState('button');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col">
      <header className="py-8 px-6 bg-white shadow flex items-center justify-between">
        <h1 className="text-4xl font-extrabold text-blue-700 flex items-center gap-3">
          <span role="img" aria-label="palette">🎨</span> DesignEase Studio
        </h1>
        <span className="text-xs text-gray-400">Générez vos composants UI en un clic</span>
      </header>
      <main className="flex-1 flex flex-col md:flex-row gap-8 p-8 max-w-6xl mx-auto w-full">
        <section className="md:w-1/2 bg-white rounded-xl shadow-lg p-8 mb-8 md:mb-0">
          <Configurator
            onCodeGenerated={setCode}
            componentType={componentType}
            setComponentType={setComponentType}
          />
        </section>
        <section className="md:w-1/2 flex flex-col gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <Preview code={code} />
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <CodeViewer code={code} />
          </div>
        </section>
      </main>
      <footer className="text-center text-gray-400 py-4 text-sm">
        © {new Date().getFullYear()} DesignEase UI
      </footer>
    </div>
  );
}
