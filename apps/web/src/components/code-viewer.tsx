'use client';

import { useState } from 'react';
import { X, FileCode, ChevronRight, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MOCK_FILES = {
  'package.json': `{
  "name": "mechanic-pro-3d",
  "version": "1.0.0",
  "dependencies": {
    "next": "14.2.0",
    "react": "^18.2.0",
    "three": "^0.160.0",
    "@react-three/fiber": "^8.15.0",
    "@react-three/drei": "^9.100.0",
    "framer-motion": "^11.0.0"
  }
}`,
  'src/app/page.tsx': `export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <ServicesGrid />
      <ThreeDConfigurator />
      <Testimonials />
    </main>
  )
}`,
  'src/components/Engine3D.tsx': `"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Suspense } from "react";

export function Engine3D() {
  return (
    <div className="h-[500px] w-full bg-zinc-900 rounded-xl overflow-hidden">
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <mesh>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial color="orange" />
            </mesh>
          </Stage>
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
    </div>
  );
}`,
  'src/components/Services.tsx': `export function ServicesGrid() {
  const services = [
    { title: "Diagnostic", price: "$49" },
    { title: "Tune Up", price: "$199" },
    { title: "Oil Change", price: "$29" }
  ];

  return (
    <section className="py-20 px-4 items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map(s => (
           <div key={s.title} className="p-6 border rounded-lg hover:border-primary">
             <h3 className="text-xl font-bold">{s.title}</h3>
             <p className="text-primary font-mono mt-2">{s.price}</p>
           </div>
        ))}
      </div>
    </section>
  )
}`
};

interface CodeViewerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export function CodeViewer({ isOpen, onClose, title }: CodeViewerProps) {
  const [selectedFile, setSelectedFile] = useState<string>('src/app/page.tsx');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in zoom-in-95 duration-200">
      <div className="relative w-full max-w-5xl h-[80vh] bg-background border rounded-lg shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="flex items-center gap-2">
            <FileCode className="h-5 w-5 text-primary" />
            <span className="font-semibold">Code Preview: {title}</span>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-64 bg-muted/30 border-r flex flex-col">
            <div className="p-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Files
            </div>
            <div className="flex-1 overflow-y-auto">
               {Object.keys(MOCK_FILES).map(fileName => (
                 <button
                   key={fileName}
                   onClick={() => setSelectedFile(fileName)}
                   className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 border-l-2 hover:bg-muted ${
                     selectedFile === fileName 
                       ? 'bg-muted border-primary text-foreground' 
                       : 'border-transparent text-muted-foreground'
                   }`}
                 >
                   {fileName.endsWith('.tsx') ? <FileCode className="h-4 w-4" /> : <Folder className="h-4 w-4" />}
                   <span className="truncate">{fileName}</span>
                 </button>
               ))}
            </div>
          </div>

          {/* Code Area */}
          <div className="flex-1 overflow-auto bg-[#1e1e1e] text-white font-mono text-sm">
             <div className="flex items-center justify-between bg-[#252526] px-4 py-2 border-b border-[#3e3e42] sticky top-0">
               <span>{selectedFile}</span>
               <span className="text-xs text-gray-400">Read-only</span>
             </div>
             <div className="p-4">
               <pre className="whitespace-pre-wrap">
                 <code>{MOCK_FILES[selectedFile as keyof typeof MOCK_FILES]}</code>
               </pre>
             </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t bg-muted/30 flex justify-end gap-2">
           <Button variant="outline" onClick={onClose}>Close</Button>
           <Button>Purchase License to Download</Button>
        </div>
      </div>
    </div>
  );
}
