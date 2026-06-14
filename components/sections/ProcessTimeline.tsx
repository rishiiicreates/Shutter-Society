"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding the brand's core." },
  { num: "02", title: "Concept", desc: "Developing the cinematic narrative." },
  { num: "03", title: "Production", desc: "Executing with precision." },
  { num: "04", title: "Editing", desc: "Crafting the final rhythm." },
  { num: "05", title: "Delivery", desc: "Deployment to global screens." },
];

export const ProcessTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".process-item");
      items.forEach((item) => {
        gsap.fromTo(item, 
          { opacity: 0, x: -50 },
          { 
            opacity: 1, 
            x: 0, 
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
            }
          }
        );
      });
      
      gsap.fromTo(".process-line", 
        { scaleY: 0 },
        { 
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%",
            end: "bottom 80%",
            scrub: true
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-4 md:px-8 bg-bg relative">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-bebas text-6xl md:text-8xl text-text-primary uppercase mb-24 text-center">Our Process</h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-border origin-top">
             <div className="process-line w-full h-full bg-accent origin-top transform scale-y-0" />
          </div>

          <div className="flex flex-col gap-24">
            {steps.map((step, i) => (
              <div key={i} className={`process-item flex flex-col md:flex-row gap-8 md:gap-16 items-start ${i % 2 === 0 ? 'md:flex-row-reverse text-left md:text-right' : 'text-left'} ml-16 md:ml-0 relative`}>
                
                {/* Dot */}
                <div className="absolute -left-10 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-bg border-2 border-accent z-10 mt-2" />

                <div className="flex-1 w-full" />
                <div className="flex-1 w-full">
                  <div className="font-mono text-accent tracking-widest mb-2">{step.num}</div>
                  <h3 className="font-bebas text-4xl mb-2">{step.title}</h3>
                  <p className="font-sans text-text-secondary text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
