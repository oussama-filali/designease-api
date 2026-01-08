'use client';

import { useState } from 'react';
import { useAuth } from '@/components/auth-provider';
import { Button } from '@/components/ui/button';
import { Lock, FileJson, FileCode, CheckCircle2, Clock } from 'lucide-react';
import Link from 'next/link';
import { CodeViewer } from './code-viewer';

export function TemplateAccessControl({ 
  fileUrl, 
  previewUrl, 
  isFree 
}: { 
  fileUrl: string; 
  previewUrl?: string;
  isFree: boolean;
}) {
  const { user } = useAuth();
  const [showCode, setShowCode] = useState(false);

  if (!user) {
    return (
      <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6 space-y-4">
         <div className="flex items-center gap-2 text-amber-600 mb-4">
             <Lock className="h-5 w-5" />
             <h3 className="font-semibold text-lg">Restricted Access</h3>
         </div>
         
         <p className="text-muted-foreground">
           To access the full source code, detailed documentation, and file structure of this template, 
           you need to be logged in.
         </p>

         <div className="space-y-2 py-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground filter blur-[4px]">
               <FileCode className="h-4 w-4" /> src/components/Engine3D.tsx
            </div>
             <div className="flex items-center gap-2 text-sm text-muted-foreground filter blur-[4px]">
               <FileJson className="h-4 w-4" /> package.json
            </div>
             <div className="flex items-center gap-2 text-sm text-muted-foreground filter blur-[4px]">
               <CheckCircle2 className="h-4 w-4" /> Detailed Setup Guide
            </div>
         </div>

         <Button asChild className="w-full" size="lg">
           <Link href="/auth/login">Login to Unlock {isFree && '(Free)'}</Link>
         </Button>
         <p className="text-xs text-center text-muted-foreground mt-2">
            No credit card required for free templates.
         </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-green-200 bg-green-50/50 dark:bg-green-900/10 p-6 space-y-6">
       <div className="flex items-center gap-2 text-green-700 dark:text-green-400 mb-2">
           <CheckCircle2 className="h-5 w-5" />
           <h3 className="font-semibold text-lg">Full Access Unlocked</h3>
       </div>

       <div className="grid grid-cols-1 gap-4">
          <div className="p-4 bg-background rounded-lg border">
             <h4 className="font-semibold mb-2 flex items-center gap-2">
               <FileCode className="h-4 w-4" /> Source Code
             </h4>
             <p className="text-sm text-muted-foreground mb-4">
               Access the complete Next.js project structure allowing full customization.
             </p>
             <Button className="w-full" variant="outline" onClick={() => setShowCode(true)}>
                View Project Files
             </Button>
             <CodeViewer isOpen={showCode} onClose={() => setShowCode(false)} title="Mechanic Pro 3D" />
          </div>

           <div className="p-4 bg-background rounded-lg border">
             <h4 className="font-semibold mb-2 flex items-center gap-2">
               <Clock className="h-4 w-4" /> Time Saver
             </h4>
             <p className="text-sm text-muted-foreground">
               This template saves approximately <strong>40+ hours</strong> of development time including design, 3D modeling integration, and responsive testing.
             </p>
          </div>
       </div>

       <Button className="w-full" size="lg">
          Download Source (.zip)
       </Button>
    </div>
  );
}
