import { Hero } from "@/components/sections/Hero";
import { StoryScroll } from "@/components/sections/StoryScroll";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { PortfolioWall } from "@/components/sections/PortfolioWall";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { BehindTheScenes } from "@/components/sections/BehindTheScenes";
import { BehindTheEdit } from "@/components/sections/BehindTheEdit";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Awards } from "@/components/sections/Awards";
import { Contact } from "@/components/sections/Contact";
import { BigCTA } from "@/components/sections/BigCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <StoryScroll />
      <ClientLogos />
      <PortfolioWall />
      <ProcessTimeline />
      <BehindTheScenes />
      <BehindTheEdit />
      <Services />
      <Stats />
      <Testimonials />
      <Awards />
      <Contact />
      <BigCTA />
      
      {/* Footer minimal */}
      <footer className="py-8 text-center bg-bg font-mono text-[10px] uppercase tracking-widest text-text-secondary border-t border-border flex flex-col gap-2 items-center justify-center">
        <span>&copy; {new Date().getFullYear()} Shutter-Society. All rights reserved.</span>
        <span>
          Built by <a href="https://rishiicreates.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors">rishiicreates</a>
        </span>
      </footer>
    </main>
  );
}
