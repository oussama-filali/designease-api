import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Settings, 
  CreditCard, 
  LayoutDashboard,
  LogOut,
  ChevronLeft,
  Menu
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/utils/cn';

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

const navItems = [
  { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
  { icon: BarChart3, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: Users, label: 'Customers', href: '/dashboard/customers' },
  { icon: CreditCard, label: 'Billing', href: '/dashboard/billing' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

export const Sidebar = ({ isOpen, toggle }: SidebarProps) => {
  return (
    <motion.aside
      initial={{ width: isOpen ? 240 : 80 }}
      animate={{ width: isOpen ? 240 : 80 }}
      className="relative h-full bg-surface border-r border-white/5 flex flex-col z-20"
    >
      {/* Logo Area */}
      <div className="h-16 flex items-center justify-center border-b border-white/5">
        <div className="flex items-center gap-2">
           <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
             <span className="font-bold text-white">L</span>
           </div>
           {isOpen && (
             <motion.span 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               className="font-display font-bold text-xl tracking-tight"
             >
               Lumina
             </motion.span>
           )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={cn(
              "flex items-center gap-3 p-3 rounded-xl transition-colors relative group",
              "hover:bg-white/5 text-text-muted hover:text-white"
            )}
          >
            <item.icon className="h-5 w-5" />
            {isOpen && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm font-medium"
              >
                {item.label}
              </motion.span>
            )}
            
            {/* Active Indicator Example */}
            {item.label === 'Overview' && (
               <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full" />
            )}
          </a>
        ))}
      </nav>

      {/* Footer / Toggle */}
      <div className="p-4 border-t border-white/5">
        <button 
           onClick={toggle}
           className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-white/5 text-text-muted transition-colors"
        >
          {isOpen ? <ChevronLeft size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </motion.aside>
  );
};
