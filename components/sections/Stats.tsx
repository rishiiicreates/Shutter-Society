"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const stats = [
  { value: 120, label: "Projects Delivered", suffix: "+" },
  { value: 50, label: "Global Locations", suffix: "" },
  { value: 15, label: "Awards Won", suffix: "" },
  { value: 200, label: "Million Views", suffix: "M+" },
];

export const Stats = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      numbersRef.current.forEach((el, index) => {
        if (!el) return;
        const targetValue = stats[index].value;
        
        gsap.to(el, {
          innerHTML: targetValue,
          duration: 2,
          ease: "power3.out",
          snap: { innerHTML: 1 }, // snap to integer
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
          onUpdate: function () {
            el.innerHTML = Math.round(Number(this.targets()[0].innerHTML)).toString();
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-4 md:px-8 bg-bg text-text-primary border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col">
            <div className="font-bebas text-6xl md:text-8xl text-accent mb-2">
              <span ref={el => { numbersRef.current[i] = el; }}>0</span>
              {stat.suffix}
            </div>
            <div className="font-mono text-xs uppercase tracking-widest text-text-secondary">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
