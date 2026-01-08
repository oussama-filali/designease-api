import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/utils/cn';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard = ({ children, className, hoverEffect = false }: GlassCardProps) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, boxShadow: "0 20px 40px -10px rgba(99, 102, 241, 0.2)" } : {}}
      transition={{ duration: 0.3 }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-surface/50 backdrop-blur-xl",
        "bg-glass p-6 text-text-main shadow-2xl ring-1 ring-white/5",
        className
      )}
    >
      {/* Glow Effect interne */}
      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
