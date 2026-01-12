import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HoverImageEffectProps {
  children: React.ReactNode;
  isNavbar?: boolean;
}

export const HoverImageEffect = ({ children, isNavbar = false }: HoverImageEffectProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className={`absolute z-50 pointer-events-none ${isNavbar ? 'top-12 right-0' : '-top-44 left-1/2 -translate-x-1/2'}`}
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: [0, -5, 5, -3, 0],
            }}
            exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}
          >
            {/* Neobrutalist frame */}
            <div className="relative">
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-yellow-400 rounded-full" />
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-black shadow-[4px_4px_0px_0px_#000]">
                <img
                  src="/deonprofessionalbgless.png"
                  alt="Deon"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <motion.div
              className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-black text-yellow-400 px-4 py-2 border-2 border-yellow-400 shadow-[3px_3px_0px_0px_#facc15] whitespace-nowrap text-sm font-black uppercase tracking-wide"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Talk with our expert!
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};