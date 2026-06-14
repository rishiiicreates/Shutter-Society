"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        {/* Entry Animation: Film Shutter Open / Black overlay sliding up */}
        <motion.div
          className="fixed inset-0 bg-black z-[9990] origin-top pointer-events-none"
          initial={{ y: "0%" }}
          animate={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
        
        {/* Content Fade In */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        >
          {children}
        </motion.div>

        {/* Exit Animation: Light Leak Wipe (simplistic version) */}
        <motion.div
          className="fixed inset-0 bg-white z-[9991] pointer-events-none"
          initial={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeIn' }}
        />
      </motion.div>
    </AnimatePresence>
  );
};
