"use client";

import { useEffect, useState } from "react";

export const HUDOverlay = () => {
  const [time, setTime] = useState("");
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    // REC dot blink
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev);
    }, 1000);

    // Timecode (fake ticking)
    const timeInterval = setInterval(() => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      const ms = String(Math.floor(now.getMilliseconds() / 10)).padStart(2, '0');
      setTime(`${h}:${m}:${s}:${ms} TC`);
    }, 40);

    return () => {
      clearInterval(blinkInterval);
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 p-4 md:p-8 flex flex-col justify-between font-mono text-hud text-[11px] tracking-[0.1em] uppercase opacity-75 hidden md:flex">
      {/* Top Bar */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span>REC</span>
            <div
              className={`w-2 h-2 rounded-full bg-accent transition-opacity duration-300 ${
                isBlinking ? "opacity-100" : "opacity-20"
              }`}
            />
          </div>
          <span className="hidden lg:block">&middot;</span>
        </div>
        <div className="text-right">
          <span>4K 60FPS</span>
        </div>
      </div>

      {/* Frame Brackets */}
      <div className="absolute inset-x-12 inset-y-16 border-white/20 border-opacity-20 pointer-events-none">
        {/* Top Left */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/40" />
        {/* Top Right */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/40" />
        {/* Bottom Left */}
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/40" />
        {/* Bottom Right */}
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/40" />
        
        {/* Center Crosshair Optional */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center opacity-30">
          <div className="w-[1px] h-4 bg-white/50" />
          <div className="absolute w-4 h-[1px] bg-white/50" />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end">
        <div className="flex items-center gap-2">
          <span>BAT</span>
          <div className="w-12 h-3 border border-hud/50 p-[1px] flex items-center">
            <div className="h-full bg-hud/80 w-[87%]" />
          </div>
          <span>87%</span>
        </div>
        <div className="text-right">
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};
