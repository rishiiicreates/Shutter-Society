"use client";

import React, { useEffect, useRef } from 'react';
import { useCursor } from './CursorProvider';
import { gsap } from 'gsap';

export const Cursor = () => {
  const { cursorState } = useCursor();
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  // Track state to avoid layout thrashing
  const stateRef = useRef(cursorState);

  useEffect(() => {
    stateRef.current = cursorState;
    
    // Animate state changes purely via GSAP, NO tailwind transitions
    const tl = gsap.timeline();
    
    if (cursorState === 'DEFAULT') {
      tl.to(trailRef.current, { width: 36, height: 36, backgroundColor: 'transparent', border: '1.5px solid rgba(255,255,255,0.6)', duration: 0.3, ease: 'power3.out' }, 0)
        .to(dotRef.current, { scale: 1, duration: 0.2 }, 0)
        .to(textRef.current, { opacity: 0, duration: 0.1 }, 0);
    } else if (cursorState === 'PLAY') {
      tl.to(trailRef.current, { width: 64, height: 64, backgroundColor: 'var(--color-text-primary)', border: 'none', duration: 0.4, ease: 'elastic.out(1, 0.5)' }, 0)
        .to(dotRef.current, { scale: 0, duration: 0.2 }, 0)
        .to(textRef.current, { opacity: 1, color: 'var(--color-bg)', innerHTML: 'PLAY', duration: 0.2 }, 0.1);
    } else if (cursorState === 'EXPLORE') {
      tl.to(trailRef.current, { width: 56, height: 56, backgroundColor: 'transparent', border: '1.5px solid rgba(255,255,255,0.6)', duration: 0.3, ease: 'power3.out' }, 0)
        .to(dotRef.current, { scale: 0, duration: 0.2 }, 0)
        .to(textRef.current, { opacity: 1, color: 'var(--color-text-primary)', innerHTML: 'EXPLORE', duration: 0.2 }, 0.1);
    } else if (cursorState === 'CLICK') {
      tl.to(trailRef.current, { width: 24, height: 24, backgroundColor: 'var(--color-text-primary)', border: 'none', duration: 0.2, ease: 'power2.out' }, 0)
        .to(dotRef.current, { scale: 0, duration: 0.2 }, 0)
        .to(textRef.current, { opacity: 0, duration: 0.1 }, 0);
    }

  }, [cursorState]);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Layer 1: Core (Instant)
    const xDot = gsap.quickTo(dotRef.current, "x", { duration: 0.05, ease: "power3.out" });
    const yDot = gsap.quickTo(dotRef.current, "y", { duration: 0.05, ease: "power3.out" });
    
    // Layer 2: Trail (Fluid)
    const xTrail = gsap.quickTo(trailRef.current, "x", { duration: 0.4, ease: "power3.out" });
    const yTrail = gsap.quickTo(trailRef.current, "y", { duration: 0.4, ease: "power3.out" });
    
    // Text layer
    const xText = gsap.quickTo(textRef.current, "x", { duration: 0.4, ease: "power3.out" });
    const yText = gsap.quickTo(textRef.current, "y", { duration: 0.4, ease: "power3.out" });

    // For velocity deformation
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let trailX = mouseX;
    let trailY = mouseY;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      xDot(mouseX);
      yDot(mouseY);
    };

    window.addEventListener('mousemove', onMouseMove);

    // RAF loop for Trail Velocity stretch (Brush stroke feel)
    const ticker = gsap.ticker.add(() => {
      // Linear interpolation to find trail position manually for velocity calculation
      trailX += (mouseX - trailX) * 0.15;
      trailY += (mouseY - trailY) * 0.15;
      
      xTrail(trailX);
      yTrail(trailY);
      xText(trailX);
      yText(trailY);

      // Always apply deformation (velocity stretch) so it feels fluid constantly
      const deltaX = mouseX - trailX;
      const deltaY = mouseY - trailY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      
      // Calculate stretch based on speed
      const stretch = Math.min(distance * 0.01, 0.5); 
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      
      gsap.set(trailRef.current, {
        scaleX: 1 + stretch,
        scaleY: 1 - stretch * 0.5,
        rotation: angle
      });
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Layer 2: Brush Trail */}
      <div 
        ref={trailRef}
        className="absolute top-0 left-0 w-9 h-9 rounded-full border-[1.5px] border-white/60 -translate-x-1/2 -translate-y-1/2 will-change-transform flex items-center justify-center"
      />
      
      {/* Text overlay tied to trail */}
      <div 
        ref={textRef}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 font-mono text-[10px] font-bold tracking-widest text-transparent opacity-0 will-change-transform flex items-center justify-center pointer-events-none"
      >
        PLAY
      </div>

      {/* Layer 1: Brush Core */}
      <div 
        ref={dotRef} 
        className="absolute top-0 left-0 w-1.5 h-1.5 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 will-change-transform shadow-[0_0_10px_rgba(255,59,0,0.8)]"
      />
    </div>
  );
};
