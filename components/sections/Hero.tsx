"use client";

import { useEffect, useRef } from "react";
import { HUDOverlay } from "@/components/ui/HUDOverlay";
import { useCursor } from "@/components/cursor/CursorProvider";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  const { setCursorState } = useCursor();
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax background on mouse move
    const xTo = gsap.quickTo(bgRef.current, "x", { duration: 0.8, ease: "power3" });
    const yTo = gsap.quickTo(bgRef.current, "y", { duration: 0.8, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPos = (clientX / innerWidth - 0.5) * 40; // max 20px shift
      const yPos = (clientY / innerHeight - 0.5) * 40;
      xTo(-xPos);
      yTo(-yPos);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Scroll trigger zoom
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        scale: 1.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Simple text reveal since we don't have SplitText premium plugin
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.5, ease: "power3.out", delay: 0.5 }
      );
    }, containerRef);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen overflow-hidden bg-bg"
    >
      {/* Background Video Wrapper */}
      <div 
        ref={bgRef}
        className="absolute inset-[-50px] w-[calc(100%+100px)] h-[calc(100%+100px)]"
        onMouseEnter={() => setCursorState("PLAY")}
        onMouseLeave={() => setCursorState("DEFAULT")}
      >
        <video
          ref={videoRef}
          src="/videos/showreel.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        />
        {/* Vignette */}
        <div className="absolute inset-0 bg-radial-vignette opacity-80" />
      </div>

      <HUDOverlay />

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
        <h1 
          ref={titleRef}
          className="text-[clamp(40px,10vw,140px)] font-bebas leading-[0.9] tracking-[0.02em] text-center max-w-5xl px-4 text-white uppercase drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
        >
          We Don&apos;t Just Shoot Content.<br />
          <span className="text-accent drop-shadow-[0_0_30px_rgba(255,59,0,0.5)]">We Create Attention.</span>
        </h1>

        <div className="mt-12 flex gap-6 pointer-events-auto relative z-30">
          <a 
            href="#work"
            className="px-8 py-4 bg-text-primary text-bg font-mono text-xs tracking-[0.15em] uppercase hover:bg-accent hover:text-white transition-colors duration-300"
            onMouseEnter={() => setCursorState("CLICK")}
            onMouseLeave={() => setCursorState("DEFAULT")}
          >
            View Work
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 bg-transparent border border-white/20 text-text-primary font-mono text-xs tracking-[0.15em] uppercase hover:border-white transition-colors duration-300 backdrop-blur-sm"
            onMouseEnter={() => setCursorState("CLICK")}
            onMouseLeave={() => setCursorState("DEFAULT")}
          >
            Book a Call
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};
