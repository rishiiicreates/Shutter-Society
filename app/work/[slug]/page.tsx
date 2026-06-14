"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useCursor } from "@/components/cursor/CursorProvider";

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const { setCursorState } = useCursor();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Faux data matching slug
  const title = params.slug.replace(/-/g, " ");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".case-reveal", 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-bg pt-32 pb-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <Link 
          href="/#work" 
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-text-secondary hover:text-white transition-colors mb-16 cursor-none case-reveal"
          onMouseEnter={() => setCursorState("CLICK")}
          onMouseLeave={() => setCursorState("DEFAULT")}
        >
          <ArrowLeft size={14} /> Back to Work
        </Link>
        
        <h1 className="font-bebas text-6xl md:text-9xl text-text-primary uppercase mb-12 capitalize case-reveal">
          {title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24 case-reveal border-t border-border pt-8">
          <div>
            <h3 className="font-mono text-[10px] tracking-widest text-text-secondary uppercase mb-2">Client</h3>
            <p className="font-sans text-lg capitalize">{title} Global</p>
          </div>
          <div>
            <h3 className="font-mono text-[10px] tracking-widest text-text-secondary uppercase mb-2">Role</h3>
            <p className="font-sans text-lg">Creative Direction, Production, Post</p>
          </div>
          <div>
            <h3 className="font-mono text-[10px] tracking-widest text-text-secondary uppercase mb-2">Result</h3>
            <p className="font-sans text-lg">12M+ Views in 48 Hours</p>
          </div>
        </div>

        <div className="aspect-video w-full relative mb-24 case-reveal overflow-hidden rounded-sm">
          <Image 
            src="/images/20260107_185302.jpeg" 
            alt="Hero shot" 
            fill 
            className="object-cover" 
          />
        </div>

        <div className="max-w-3xl case-reveal mb-24">
          <h2 className="font-bebas text-4xl mb-6">The Challenge</h2>
          <p className="font-sans text-lg text-text-secondary leading-relaxed mb-12">
            The brief was simple but daunting: reinvent the visual language of a global icon without losing its core identity. We needed to create a campaign that felt simultaneously rooted in history and entirely from the future.
          </p>
          <h2 className="font-bebas text-4xl mb-6">The Execution</h2>
          <p className="font-sans text-lg text-text-secondary leading-relaxed">
            We built a massive 360-degree LED volume to capture in-camera VFX, blending practical stunt work with real-time Unreal Engine environments. The result is a seamless transition between reality and imagination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 case-reveal">
          <div className="aspect-[4/5] relative">
            <Image src="/images/IMG_0455.jpeg" alt="BTS" fill className="object-cover" />
          </div>
          <div className="aspect-[4/5] relative">
            <Image src="/images/IMG_0648.jpeg" alt="BTS" fill className="object-cover" />
          </div>
        </div>
      </div>
    </main>
  );
}
