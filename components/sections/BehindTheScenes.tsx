"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const btsImages = [
  "/images/IMG_0455.jpeg",
  "/images/IMG_0648.jpeg",
  "/images/IMG_1099.jpeg",
  "/images/SnapInsta.to_504127915_18117783364470977_8708018950876572628_n.jpeg"
];

export const BehindTheScenes = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".bts-img");
      items.forEach((item, i) => {
        gsap.to(item, {
          y: (i % 2 === 0 ? -50 : 50),
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

  return (
    <section ref={containerRef} className="py-32 bg-bg overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <h2 className="font-bebas text-6xl md:text-8xl text-text-primary uppercase">On Set</h2>
        <p className="font-mono text-xs uppercase tracking-widest text-text-secondary mt-4">Where the magic happens</p>
      </div>

      <div className="flex gap-4 md:gap-8 px-4 md:px-8 overflow-visible h-[40vh] md:h-[60vh]">
        {btsImages.map((src, i) => (
          <div key={i} className={`bts-img relative w-[60vw] md:w-[30vw] h-full flex-shrink-0 ${i % 2 !== 0 ? 'mt-24' : ''}`}>
            <Image 
              src={src} 
              alt={`Behind the scenes ${i}`} 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </div>
        ))}
      </div>
    </section>
  );
};
