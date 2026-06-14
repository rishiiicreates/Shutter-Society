"use client";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect } from 'react';

// Export GSAP for easy importing elsewhere
export { gsap, ScrollTrigger };

export const initGSAP = () => {
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }
};

export const useGSAP = () => {
  useLayoutEffect(() => {
    initGSAP();
  }, []);
};
