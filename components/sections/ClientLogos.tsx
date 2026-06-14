"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const logos = ["Nike", "Porsche", "Spotify", "Red Bull", "Adidas", "Sony", "Vogue", "Sephora"];

export const ClientLogos = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".client-logo", 
        { opacity: 0, y: 20 },
        { 
          opacity: 0.5, 
          y: 0, 
          duration: 1, 
          stagger: 0.1, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%"
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-8 bg-surface border-t border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <p className="font-mono text-[10px] uppercase tracking-widest text-text-secondary mb-12">Trusted by global brands</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-80">
          {logos.map((logo, i) => (
            <div 
              key={i} 
              className="client-logo font-bebas text-4xl tracking-widest text-text-secondary hover:text-white transition-colors duration-500 cursor-none"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
