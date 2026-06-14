"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useCursor } from "@/components/cursor/CursorProvider";

const projects = [
  { id: 1, title: "Nike Air", client: "Nike", src: "/images/20260107_185302.jpeg" },
  { id: 2, title: "Neon Nights", client: "Spotify", src: "/images/20260107_185306.jpeg" },
  { id: 3, title: "The Drive", client: "Porsche", src: "/images/IMG_0455.jpeg" },
  { id: 4, title: "Soundscapes", client: "Sony", src: "/images/IMG_0648.jpeg" },
  { id: 5, title: "Urban Decay", client: "Vogue", src: "/images/IMG_1099.jpeg" },
  { id: 6, title: "Glow", client: "Sephora", src: "/images/SnapInsta.to_504127915_18117783364470977_8708018950876572628_n.jpeg" },
];

export const PortfolioWall = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { setCursorState } = useCursor();

  useEffect(() => {
    // Scroll parallax for different items
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".portfolio-item");
      items.forEach((item, i) => {
        const speed = 1 + (i % 3) * 0.2; // different speeds
        gsap.to(item, {
          y: -100 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>, target: HTMLElement) => {
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top;  // y position within the element.
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10; // max 10 deg rotation
    const rotateY = ((x - centerX) / centerX) * 10;
    
    gsap.to(target.querySelector('.tilt-content'), {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.5
    });
  };

  const handleMouseLeave = (target: HTMLElement) => {
    gsap.to(target.querySelector('.tilt-content'), {
      rotateX: 0,
      rotateY: 0,
      ease: "power3.out",
      duration: 0.8
    });
  };

  return (
    <section ref={containerRef} id="work" className="relative w-full min-h-screen bg-bg py-32 px-4 md:px-8">
      {/* Background Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-bg to-bg pointer-events-none" />

      <div className="max-w-7xl mx-auto mb-20 relative z-10">
        <h2 className="font-bebas text-6xl md:text-8xl text-text-primary uppercase mb-4">Selected Work</h2>
        <div className="flex gap-4">
          <button 
            className="text-xs font-mono uppercase tracking-widest text-white border-b border-white pb-1 cursor-none"
            onMouseEnter={() => setCursorState("CLICK")}
            onMouseLeave={() => setCursorState("DEFAULT")}
          >
            All
          </button>
          <button 
            className="text-xs font-mono uppercase tracking-widest text-text-secondary hover:text-white transition-colors pb-1 cursor-none"
            onMouseEnter={() => setCursorState("CLICK")}
            onMouseLeave={() => setCursorState("DEFAULT")}
          >
            Commercial
          </button>
          <button 
            className="text-xs font-mono uppercase tracking-widest text-text-secondary hover:text-white transition-colors pb-1 cursor-none"
            onMouseEnter={() => setCursorState("CLICK")}
            onMouseLeave={() => setCursorState("DEFAULT")}
          >
            Brand
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto relative z-10 perspective-[2000px]">
        {projects.map((project, i) => (
          <Link 
            href={`/work/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
            key={project.id} 
            className={`portfolio-item relative group cursor-none overflow-visible block ${i % 2 === 0 ? 'md:mt-16' : ''}`}
            onMouseEnter={() => setCursorState("PLAY")}
            onMouseLeave={(e) => {
              setCursorState("DEFAULT");
              handleMouseLeave(e.currentTarget as HTMLElement);
            }}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget as HTMLElement)}
          >
            <div className="tilt-content relative aspect-[4/5] overflow-hidden bg-surface-2 rounded-sm transform-gpu will-change-transform shadow-[0_0_0_rgba(0,0,0,0)] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-shadow duration-500">
              {/* Dark overlay default, reveal on hover */}
              <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
              
              <Image 
                src={project.src} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                 <h3 className="font-bebas tracking-widest text-white text-3xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{project.title}</h3>
                 <p className="font-mono text-white/70 text-[10px] uppercase tracking-widest mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{project.client}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
