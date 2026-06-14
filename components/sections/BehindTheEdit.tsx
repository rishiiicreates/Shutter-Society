"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useCursor } from "@/components/cursor/CursorProvider";

export const BehindTheEdit = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const playheadRef = useRef<HTMLDivElement>(null);
  const labelsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { setCursorState } = useCursor();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 1,
          pin: true,
        }
      });

      // Move playhead across the timeline
      tl.fromTo(playheadRef.current, 
        { x: "0%" }, 
        { x: "100%", ease: "none", duration: 10 },
        0
      );

      // Scrub video
      if (videoRef.current) {
        // Use loadedmetadata event to ensure exact duration
        videoRef.current.onloadedmetadata = () => {
          gsap.to(videoRef.current, {
            currentTime: videoRef.current?.duration || 10,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=2000",
              scrub: 1,
            }
          });
        };

        // Initialize just in case metadata is already loaded
        if (videoRef.current.readyState >= 1) {
          gsap.to(videoRef.current, {
            currentTime: videoRef.current.duration || 10,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "+=2000",
              scrub: 1,
            }
          });
        }
      }

      // Label states matching playhead progress
      const labels = gsap.utils.toArray<HTMLElement>(".edit-label");
      const durationPerLabel = 10 / labels.length;

      labels.forEach((label, i) => {
        tl.to(label, {
          color: "var(--color-accent)",
          scale: 1.1,
          duration: 0.1,
        }, i * durationPerLabel)
        .to(label, {
          color: "var(--color-text-secondary)",
          scale: 1,
          duration: 0.1,
        }, (i + 1) * durationPerLabel);
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen w-full bg-[#050505] text-[#888884] font-mono text-xs uppercase flex flex-col p-4 md:p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 border-b border-[#2A2A2A] pb-4">
        <h2 className="text-text-primary text-xl tracking-widest font-bebas">Behind The Edit</h2>
        <div className="flex gap-4">
          <span>Pr</span>
          <span>Ae</span>
          <span>DaVinci</span>
        </div>
      </div>

      {/* Main NLE Interface */}
      <div className="flex-1 flex flex-col md:flex-row gap-4 mb-4 min-h-0">
        
        {/* Left: Media Bin */}
        <div className="hidden md:flex w-64 flex-col gap-2 overflow-hidden border border-[#2A2A2A] p-2 bg-[#111111]">
          <div className="text-[10px] mb-2 px-2">Project Media</div>
          {[1,2,3,4,5].map(i => (
            <div key={i} className="h-16 bg-[#1A1A1A] border border-[#2A2A2A] flex items-center px-2 gap-2">
              <div className="w-4 h-4 bg-[#333]" />
              <span className="text-[8px] truncate">V1_00{i}_C001.mp4</span>
            </div>
          ))}
        </div>

        {/* Center: Viewer */}
        <div 
          className="flex-1 bg-black border border-[#2A2A2A] relative flex items-center justify-center cursor-none overflow-hidden"
          onMouseEnter={() => setCursorState("PLAY")}
          onMouseLeave={() => setCursorState("DEFAULT")}
        >
          <video 
            ref={videoRef}
            src="/videos/showreel.mp4" 
            muted 
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-80 mix-blend-screen"
          />
          {/* Faux UI Overlay on Video */}
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="bg-accent text-white px-2 py-1">REC</span>
          </div>
          <div className="absolute bottom-4 right-4">
            1080p · 23.976 fps
          </div>
        </div>

        {/* Right: Inspector */}
        <div className="hidden lg:flex w-64 flex-col gap-4 border border-[#2A2A2A] p-4 bg-[#111111]">
          <div className="text-[10px] border-b border-[#2A2A2A] pb-2">Color Wheels</div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="aspect-square rounded-full border border-[#333] flex items-center justify-center relative">
              <div className="w-2 h-2 rounded-full bg-accent absolute top-1/4 left-3/4" />
            </div>
            <div className="aspect-square rounded-full border border-[#333] flex items-center justify-center relative">
              <div className="w-2 h-2 rounded-full bg-hud absolute bottom-1/3 right-1/4" />
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-2" ref={labelsRef}>
            <div className="edit-label transition-colors">1. RAW</div>
            <div className="edit-label transition-colors">2. CUT</div>
            <div className="edit-label transition-colors">3. GRADE</div>
            <div className="edit-label transition-colors">4. EXPORT</div>
          </div>
        </div>
      </div>

      {/* Bottom: Timeline */}
      <div className="h-48 border border-[#2A2A2A] bg-[#111111] flex flex-col relative" ref={timelineRef}>
        <div className="h-6 border-b border-[#2A2A2A] flex items-center px-4 text-[10px] gap-8 bg-[#1A1A1A]">
          <span>00:00:00:00</span>
          <span>00:00:10:00</span>
          <span>00:00:20:00</span>
          <span>00:00:30:00</span>
          <span>00:00:40:00</span>
        </div>
        
        {/* Tracks */}
        <div className="flex-1 relative p-2 flex flex-col gap-1">
          {/* V1 */}
          <div className="h-8 bg-[#1A1A1A] flex items-center relative overflow-hidden">
            <div className="absolute left-[10%] w-[20%] h-[80%] bg-[#2A6A99] border border-[#4A8ABA] mx-1 rounded-sm flex items-center px-2 text-[8px] text-white">V1_CLIP_A</div>
            <div className="absolute left-[31%] w-[40%] h-[80%] bg-[#2A6A99] border border-[#4A8ABA] mx-1 rounded-sm flex items-center px-2 text-[8px] text-white">V1_CLIP_B</div>
            <div className="absolute left-[72%] w-[15%] h-[80%] bg-[#2A6A99] border border-[#4A8ABA] mx-1 rounded-sm flex items-center px-2 text-[8px] text-white">V1_CLIP_C</div>
          </div>
          {/* V2 */}
          <div className="h-8 bg-[#1A1A1A] flex items-center relative overflow-hidden">
            <div className="absolute left-[25%] w-[15%] h-[80%] bg-[#992A5A] border border-[#BA4A7A] mx-1 rounded-sm flex items-center px-2 text-[8px] text-white">ADJ_LAYER</div>
          </div>
          {/* A1 */}
          <div className="h-10 bg-[#1A1A1A] flex items-center relative overflow-hidden mt-2">
            <div className="absolute left-[5%] w-[85%] h-[80%] bg-[#2A995C] border border-[#4ABA7C] mx-1 rounded-sm flex items-center px-2 text-[8px] text-white overflow-hidden">
               {/* Faux Waveform */}
               <svg className="w-full h-full opacity-50" preserveAspectRatio="none" viewBox="0 0 100 100">
                 <path d="M0,50 L5,40 L10,60 L15,30 L20,70 L25,45 L30,55 L35,20 L40,80 L45,40 L50,60 L55,30 L60,70 L65,45 L70,55 L75,20 L80,80 L85,40 L90,60 L95,30 L100,50" stroke="currentColor" strokeWidth="1" fill="none" />
               </svg>
            </div>
          </div>
        </div>

        {/* Playhead */}
        <div ref={playheadRef} className="absolute top-0 bottom-0 w-[1px] bg-accent z-10 pointer-events-none -translate-x-1/2">
          <div className="absolute -top-2 -left-1.5 w-3 h-3 bg-accent rounded-sm flex items-center justify-center" />
        </div>
      </div>
    </section>
  );
};
