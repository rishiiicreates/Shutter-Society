export default function Loading() {
  return (
    <div className="fixed inset-0 z-[99999] bg-[#050505] flex items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center gap-4">
        {/* Minimalist Spinner */}
        <div className="w-8 h-8 border border-white/10 border-t-accent rounded-full animate-spin" />
        
        {/* Cinematic Loading Text */}
        <div className="font-mono text-[10px] tracking-[0.3em] text-text-secondary uppercase animate-pulse">
          Loading Sequence...
        </div>
      </div>
    </div>
  );
}
