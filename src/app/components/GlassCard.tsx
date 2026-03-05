import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: 'purple' | 'blue' | 'cyan' | 'none';
}

export function GlassCard({ children, className = '', hover = true, glow = 'purple' }: GlassCardProps) {
  const glowColors = {
    purple: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]',
    blue: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]',
    cyan: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]',
    none: '',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`
        bg-gradient-to-br from-white/[0.07] to-white/[0.02] 
        backdrop-blur-xl 
        border border-white/10 
        rounded-2xl 
        shadow-xl 
        ${hover ? 'transition-all duration-300 hover:border-purple-500/30 ' + glowColors[glow] : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
