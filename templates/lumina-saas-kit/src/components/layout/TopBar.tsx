import { Bell, Search, User } from 'lucide-react';

export const TopBar = () => {
  return (
    <header className="h-16 px-8 border-b border-white/5 bg-background/50 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between">
       {/* Search */}
       <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5 w-96">
         <Search className="h-4 w-4 text-text-muted" />
         <input 
           type="text" 
           placeholder="Search metrics, customers..." 
           className="bg-transparent border-none outline-none text-sm text-text-main placeholder:text-text-muted w-full"
         />
       </div>

       {/* Actions */}
       <div className="flex items-center gap-4">
         <button className="relative p-2 text-text-muted hover:text-white transition-colors">
           <Bell className="h-5 w-5" />
           <span className="absolute top-2 right-2 h-2 w-2 bg-secondary rounded-full" />
         </button>
         
         <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-secondary p-[1px]">
            <div className="h-full w-full rounded-full bg-surface flex items-center justify-center">
              <User className="h-4 w-4" />
            </div>
         </div>
       </div>
    </header>
  );
};
