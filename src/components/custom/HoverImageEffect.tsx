import React from 'react';
import { motion } from 'framer-motion';

interface HoverImageEffectProps {
  children: React.ReactNode;
  isNavbar?: boolean;
}

export const HoverImageEffect = ({ children, isNavbar = false }: HoverImageEffectProps) => {
  return (
    <div className="group relative inline-block">
      {children}
      
      <motion.div 
        className={`absolute z-50 opacity-0 group-hover:opacity-100 pointer-events-none ${isNavbar ? 'top-12 right-0' : '-top-40 right-0'}`}
        initial={{ scale: 0.5, rotate: 0 }}
        animate={{ 
          scale: [0.5, 1.1, 1],
          rotate: [0, -5, 5, -3, 0],
          transition: { 
            duration: 0.5,
            times: [0, 0.4, 0.8, 1],
            ease: "easeInOut" 
          }
        }}
        whileHover={{ 
          rotate: [0, -3, 3, -2, 0],
          transition: { 
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1
          }
        }}
      >
        <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl">
          <img 
            src="/deon_ghibli.png" 
            alt="Deon" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black text-white px-3 py-1 rounded-full shadow-lg whitespace-nowrap text-sm font-medium">
          Talk with our expert now
        </div>
      </motion.div>
    </div>
  );
};