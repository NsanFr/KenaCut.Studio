import React, { useState, useRef, useCallback } from 'react';
import { Scissors, Sparkles, Volume2, Flame, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerDown = () => {
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-12">
      <div className="text-center mb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8C72FF]/15 border border-[#8C72FF]/30 text-[#8C72FF] text-xs font-bold uppercase tracking-wider">
          <Scissors className="w-3.5 h-3.5" />
          <span>Interactive Split Comparison</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black tracking-tight dark:text-white text-slate-900">
          Geser Slider: <span className="text-gradient-aurora">Lihat Transformasi Nyata</span>
        </h3>
        <p className="text-xs sm:text-sm dark:text-slate-400 text-slate-600 max-w-lg mx-auto">
          Tarik garis pemisah di bawah ini untuk membandingkan footage mentah vs hasil editan berirama algoritma KenaCut Studio.
        </p>
      </div>

      {/* Interactive Slider Container */}
      <div
        ref={containerRef}
        onMouseDown={handlePointerDown}
        onMouseUp={handlePointerUp}
        onMouseLeave={handlePointerUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handlePointerDown}
        onTouchEnd={handlePointerUp}
        onTouchMove={handleTouchMove}
        onClick={(e) => handleMove(e.clientX)}
        className="relative w-full h-[360px] sm:h-[440px] rounded-3xl overflow-hidden cursor-ew-resize select-none border-2 dark:border-white/20 border-slate-300 shadow-2xl glass-panel"
      >
        {/* RIGHT LAYER: KenaCut After (Full width base) */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-[#0B0D17] to-purple-950 p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
          {/* Animated Glow in After */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#8C72FF]/25 rounded-full blur-[90px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#70B9FE]/20 rounded-full blur-[80px] pointer-events-none"></div>

          {/* Top Label */}
          <div className="flex justify-end z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#8C72FF] to-[#70B9FE] text-white text-xs font-black shadow-lg shadow-[#8C72FF]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SETELAH: KenaCut Polish ✨</span>
            </span>
          </div>

          {/* Content Highlight Simulation */}
          <div className="relative z-10 text-right space-y-3 max-w-xs sm:max-w-sm ml-auto">
            <div className="inline-block px-3.5 py-1.5 rounded-xl bg-black/80 border border-[#8C72FF]/50 text-xs sm:text-sm font-black text-white shadow-xl">
              🔥 <span className="text-[#F3FFAA]">HOOK MENIT 00:01</span> VIRAL PACING!
            </div>
            <div className="flex justify-end items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-[#8C72FF]/30 border border-[#8C72FF]/60 text-[11px] font-bold text-[#70B9FE]">
                +240% Retention
              </span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-[11px] font-bold text-emerald-300 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Color Grade Rec.709
              </span>
            </div>
            <div className="flex items-center justify-end gap-1.5 text-xs text-[#FFA99F] font-bold">
              <Volume2 className="w-3.5 h-3.5" />
              <span>Multi-Layer SFX & Dynamic Whoosh</span>
            </div>
          </div>

          {/* Bottom Metre */}
          <div className="flex justify-end items-center gap-3 z-10 text-xs font-bold text-slate-300">
            <span className="flex items-center gap-1 text-[#FFA99F]">
              <Flame className="w-4 h-4 fill-[#FFA99F]" />
              <span>85.4% Swipe-Through Rate</span>
            </span>
          </div>
        </div>

        {/* LEFT LAYER: Raw Before (Clipped by slider position) */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 p-6 sm:p-8 flex flex-col justify-between overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          {/* Top Label */}
          <div className="flex justify-start z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 border border-white/20 text-slate-300 text-xs font-bold">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              <span>SEBELUM: Footage Mentah</span>
            </span>
          </div>

          {/* Content Highlight Raw */}
          <div className="relative z-10 text-left space-y-3 max-w-xs sm:max-w-sm opacity-70">
            <div className="inline-block px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 text-xs font-medium text-slate-300 italic">
              "Umm... halo semuanya, hari ini saya mau..."
            </div>
            <div className="space-y-1">
              <span className="inline-block px-2.5 py-1 rounded-md bg-red-950/50 border border-red-800/40 text-[11px] font-semibold text-red-300">
                ⚠️ Jeda 4.5 Detik Datar (No Hook)
              </span>
              <p className="text-[11px] text-slate-400">Audio mendem, warna pucat & tanpa subtitle.</p>
            </div>
          </div>

          {/* Bottom Metre */}
          <div className="flex justify-start items-center gap-2 z-10 text-xs text-slate-400">
            <span>Drop-off rate 72% di detik ke-3</span>
          </div>
        </div>

        {/* DRAGGABLE DIVIDER LINE */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Central Handle Handle Knob */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-950 shadow-2xl flex items-center justify-center font-bold text-xs border-2 border-[#8C72FF] group-hover:scale-110 transition-transform">
            <span className="tracking-tighter">◀ ▶</span>
          </div>
        </div>
      </div>
    </div>
  );
}
