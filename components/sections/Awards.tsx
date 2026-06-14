"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const awards = [
  { year: "2025", title: "Site of the Day", category: "Awwwards", project: "Shutter-Society" },
  { year: "2024", title: "Best Cinematography", category: "Vimeo Staff Picks", project: "Neon Nights" },
  { year: "2024", title: "Gold Lion", category: "Cannes Lions", project: "The Drive" },
  { year: "2023", title: "Best Visual Direction", category: "Webby Awards", project: "Urban Decay" },
];

export const Awards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".award-row", 
        { opacity: 0, x: -50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1, 
          stagger: 0.1,
          ease: "power2.out",
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
    <section ref={containerRef} className="py-32 px-4 md:px-8 bg-surface border-t border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-bebas text-6xl md:text-8xl text-text-primary uppercase mb-20 text-center md:text-left">Recognition</h2>
        
        <div className="flex flex-col border-t border-border">
          {awards.map((award, i) => (
            <div key={i} className="award-row flex flex-col md:flex-row items-baseline md:items-center justify-between py-8 border-b border-border group hover:bg-white/5 transition-colors duration-500 px-4">
              <div className="flex items-center gap-8 mb-4 md:mb-0">
                <span className="font-mono text-text-secondary text-sm">{award.year}</span>
                <span className="font-bebas text-3xl md:text-5xl text-text-primary group-hover:text-accent transition-colors duration-500">{award.title}</span>
              </div>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-12 font-mono text-xs tracking-widest uppercase">
                <span className="text-text-secondary">{award.category}</span>
                <span className="text-white opacity-50 group-hover:opacity-100 transition-opacity">{award.project}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
