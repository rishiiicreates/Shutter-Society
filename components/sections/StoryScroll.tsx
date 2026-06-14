"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const StoryScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLHeadingElement>(null);
  const text2Ref = useRef<HTMLHeadingElement>(null);
  const text3Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3000",
          scrub: 1,
          pin: true,
        }
      });

      // Scene 1
      tl.fromTo(text1Ref.current, 
        { opacity: 0, scale: 0.8, filter: "blur(10px)", y: 20 }, 
        { opacity: 1, scale: 1, filter: "blur(0px)", y: 0, duration: 1 }
      )
      .to(text1Ref.current, 
        { opacity: 0, scale: 1.1, filter: "blur(10px)", y: -20, duration: 1 },
        "+=0.5"
      )

      // Scene 2
      .fromTo(text2Ref.current, 
        { opacity: 0, scale: 0.8, filter: "blur(10px)", y: 20 }, 
        { opacity: 1, scale: 1, filter: "blur(0px)", y: 0, duration: 1 },
        "-=0.5"
      )
      .to(text2Ref.current, 
        { opacity: 0, scale: 1.1, filter: "blur(10px)", y: -20, duration: 1 },
        "+=0.5"
      )

      // Scene 3
      .fromTo(text3Ref.current, 
        { opacity: 0, scale: 0.8, filter: "blur(10px)", y: 20 }, 
        { opacity: 1, scale: 1, filter: "blur(0px)", y: 0, duration: 1 },
        "-=0.5"
      )
      .to(text3Ref.current,
        { opacity: 0, y: -50, duration: 1 },
        "+=1"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full bg-bg flex items-center justify-center overflow-hidden relative">
      {/* Ambient background light that slowly moves/pulses */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,59,0,0.03)_0%,transparent_60%)] animate-pulse" />
      
      <h2 ref={text1Ref} className="absolute text-center font-bebas text-[clamp(40px,8vw,100px)] text-text-primary uppercase opacity-0 tracking-wide">
        Every brand has a story.
      </h2>
      
      <h2 ref={text2Ref} className="absolute text-center font-bebas text-[clamp(40px,8vw,100px)] text-text-primary uppercase opacity-0 tracking-wide">
        Most stories are ignored.
      </h2>
      
      <h2 ref={text3Ref} className="absolute text-center font-bebas text-[clamp(40px,8vw,100px)] text-accent uppercase opacity-0 tracking-wide leading-[0.9]">
        We make people<br/>stop scrolling.
      </h2>
    </section>
  );
};
