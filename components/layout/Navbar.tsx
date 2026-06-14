"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCursor } from "@/components/cursor/CursorProvider";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const { setCursorState } = useCursor();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal after passing 80% of viewport height (Hero section)
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 p-6 md:p-8 flex items-center justify-between pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
      scrolled ? "opacity-100 translate-y-0 bg-black/40 backdrop-blur-md border-b border-white/5 py-4 shadow-2xl" : "opacity-0 -translate-y-full bg-transparent"
    )}>
      <Link 
        href="/"
        className="font-bebas text-2xl tracking-widest pointer-events-auto z-50 text-text-primary drop-shadow-md"
        onMouseEnter={() => setCursorState("EXPLORE")}
        onMouseLeave={() => setCursorState("DEFAULT")}
      >
        SHUTTER-SOCIETY
      </Link>
      
      <div className="flex items-center gap-8 pointer-events-auto z-50">
        <Link 
          href="#work"
          className="font-mono text-[11px] tracking-widest uppercase text-white/70 hover:text-white transition-colors relative group"
          onMouseEnter={() => setCursorState("EXPLORE")}
          onMouseLeave={() => setCursorState("DEFAULT")}
        >
          Work
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link 
          href="#services"
          className="font-mono text-[11px] tracking-widest uppercase text-white/70 hover:text-white transition-colors hidden md:block relative group"
          onMouseEnter={() => setCursorState("EXPLORE")}
          onMouseLeave={() => setCursorState("DEFAULT")}
        >
          Services
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link 
          href="#contact"
          className="font-mono text-[11px] tracking-widest uppercase text-white/70 hover:text-white transition-colors relative group"
          onMouseEnter={() => setCursorState("EXPLORE")}
          onMouseLeave={() => setCursorState("DEFAULT")}
        >
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </div>
    </nav>
  );
};
