"use client";

import { useCursor } from "@/components/cursor/CursorProvider";

export const Contact = () => {
  const { setCursorState } = useCursor();

  return (
    <section id="contact" className="py-32 px-4 md:px-8 bg-surface text-text-primary">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* Left: Copy */}
        <div className="flex-1">
          <h2 className="font-bebas text-6xl md:text-8xl mb-8 uppercase">Let&apos;s Roll<br/>Camera.</h2>
          <p className="font-sans text-lg text-text-secondary max-w-md mb-12">
            Whether you have a fully formed vision or just a rough concept, we&apos;re ready to bring it to life. Drop us a line.
          </p>
          
          <div className="flex flex-col gap-4 font-mono text-xs uppercase tracking-widest text-text-secondary">
            <div>
              <span className="text-text-primary block mb-1">Email</span>
              <a 
                href="mailto:hello@contentgroup.com" 
                className="hover:text-accent transition-colors cursor-none"
                onMouseEnter={() => setCursorState("CLICK")}
                onMouseLeave={() => setCursorState("DEFAULT")}
              >
                hello@contentgroup.com
              </a>
            </div>
            <div className="mt-4">
              <span className="text-text-primary block mb-1">Socials</span>
              <div className="flex gap-4">
                {['Instagram', 'Vimeo', 'LinkedIn'].map(social => (
                  <a 
                    key={social} 
                    href="#" 
                    className="hover:text-accent transition-colors cursor-none"
                    onMouseEnter={() => setCursorState("CLICK")}
                    onMouseLeave={() => setCursorState("DEFAULT")}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form (Clapperboard inspired) */}
        <div className="flex-1">
          <div className="border border-border bg-bg p-8 relative">
            {/* Clapperboard stripes */}
            <div className="absolute top-0 left-0 w-full h-4 bg-[repeating-linear-gradient(45deg,#111_0,#111_10px,#fff_10px,#fff_20px)] opacity-20" />
            
            <form className="mt-8 flex flex-col gap-6 font-mono text-sm">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-text-secondary">Name / Brand</label>
                <input 
                  type="text" 
                  className="bg-surface border-b border-border p-2 outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-text-secondary">Email</label>
                <input 
                  type="email" 
                  className="bg-surface border-b border-border p-2 outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-text-secondary">Project Details</label>
                <textarea 
                  rows={4}
                  className="bg-surface border-b border-border p-2 outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <button 
                type="button"
                className="mt-4 bg-text-primary text-bg py-4 uppercase tracking-[0.2em] font-bold hover:bg-accent hover:text-white transition-colors cursor-none"
                onMouseEnter={() => setCursorState("CLICK")}
                onMouseLeave={() => setCursorState("DEFAULT")}
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};
