"use client";

import { useCursor } from "@/components/cursor/CursorProvider";

export const BigCTA = () => {
  const { setCursorState } = useCursor();

  return (
    <section className="py-48 px-4 md:px-8 bg-accent flex items-center justify-center text-center relative overflow-hidden group">
      {/* Dynamic grain just for CTA */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')] opacity-[0.05] mix-blend-overlay pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl">
        <h2 
          className="font-bebas text-[clamp(60px,12vw,160px)] leading-[0.85] text-bg uppercase tracking-tight cursor-none"
          onMouseEnter={() => setCursorState("CLICK")}
          onMouseLeave={() => setCursorState("DEFAULT")}
        >
          Let&apos;s Make People<br/>Stop Scrolling.
        </h2>
        <div className="mt-16 flex justify-center">
          <button 
            className="px-12 py-6 bg-bg text-accent font-mono text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors duration-500 cursor-none shadow-2xl"
            onMouseEnter={() => setCursorState("CLICK")}
            onMouseLeave={() => setCursorState("DEFAULT")}
          >
            Start A Project
          </button>
        </div>
      </div>
    </section>
  );
};
