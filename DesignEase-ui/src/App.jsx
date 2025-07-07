import DashboardLayout from './layout/DashboardLayout';
import Configurator from './components/Configurator';
import Preview from './components/Preview';
import CodeViewer from './components/CodeViewer';
import { useState } from 'react';

export default function App() {
  const [code, setCode] = useState('');
  const [componentType, setComponentType] = useState('button');

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Bloc configurateur */}
        <div className="glass p-6 space-y-6 shadow-xl">
          <h2 className="text-2xl font-bold text-violet-300">⚙️ Configuration</h2>
          <Configurator
            onCodeGenerated={setCode}
            componentType={componentType}
            setComponentType={setComponentType}
          />
        </div>

        {/* Bloc preview + code */}
        <div className="glass p-6 space-y-6 shadow-xl">
          <h2 className="text-2xl font-bold text-violet-300">🧪 Aperçu</h2>
          <Preview code={code} />
          <CodeViewer code={code} />
        </div>
      </div>
    </DashboardLayout>
  );
}
