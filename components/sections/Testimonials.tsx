"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const testimonials = [
  { quote: "This edit completely changed our campaign trajectory. Unmatched quality.", author: "Nike Global" },
  { quote: "The best production team we've ever worked with. Truly cinematic.", author: "Spotify Studios" },
  { quote: "They don't just shoot videos; they build worlds.", author: "Porsche Design" }
];

export const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".testimonial-card", 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%"
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-4 md:px-8 bg-surface text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-bebas text-6xl md:text-8xl text-text-primary uppercase mb-20">The Verdict</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card p-8 border border-border bg-bg flex flex-col justify-between items-center relative group hover:border-accent transition-colors duration-500">
              {/* Quote marks */}
              <div className="absolute top-4 left-4 text-4xl font-serif text-white/5 pointer-events-none group-hover:text-accent/10 transition-colors duration-500">&quot;</div>
              
              <p className="font-sans text-lg text-text-secondary leading-relaxed mb-8 italic">&quot;{t.quote}&quot;</p>
              <div className="font-mono text-[10px] tracking-widest uppercase text-accent">{t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
