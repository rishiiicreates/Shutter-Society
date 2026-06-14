"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const services = [
  { title: "Creative Direction", desc: "Building the visual soul of your brand." },
  { title: "Video Production", desc: "High-end cinematic shoots anywhere in the world." },
  { title: "Post-Production", desc: "Elite editing that keeps attention hooked." },
  { title: "Color Grading", desc: "Hollywood-grade color pipelines." },
  { title: "Motion Graphics", desc: "2D and 3D animations that explain and amaze." },
];

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".service-card");
      
      gsap.fromTo(cards, 
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="services" className="py-32 px-4 md:px-8 bg-surface text-text-primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bebas text-6xl md:text-8xl mb-16 uppercase">Capabilities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="service-card group p-8 border border-border bg-bg hover:border-accent transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-4xl font-bold group-hover:text-accent transition-colors">
                0{i + 1}
              </div>
              <h3 className="font-sans font-medium text-2xl mb-4 relative z-10">{service.title}</h3>
              <p className="font-mono text-xs text-text-secondary leading-relaxed relative z-10">{service.desc}</p>
              
              {/* Hover effect expanding background */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            </div>
          ))}
          
          {/* Contact Prompt Card */}
          <div className="service-card group p-8 border border-transparent bg-accent text-white hover:bg-white hover:text-black transition-colors duration-500 relative overflow-hidden flex flex-col justify-center items-center text-center">
            <h3 className="font-sans font-medium text-2xl mb-2">Have a unique vision?</h3>
            <p className="font-mono text-xs tracking-widest uppercase opacity-80">Let&apos;s talk</p>
          </div>
        </div>
      </div>
    </section>
  );
};
