import React, { useState, useEffect } from 'react';
import { 
  Scissors, Play, Pause, Sparkles, Zap, ShieldCheck, 
  Users, Clock, Star, Flame, CheckCircle2, ArrowRight, Video
} from 'lucide-react';

export default function HeroSection({ onOpenOrderModal }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState('after'); // 'before' | 'after'
  const [scrubProgress, setScrubProgress] = useState(65);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setScrubProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 120);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Aurora Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8C72FF]/20 rounded-full blur-[140px] pointer-events-none -z-10 animate-aurora-mesh"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#70B9FE]/15 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-2/3 left-10 w-[350px] h-[350px] bg-[#FFA99F]/15 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Call to Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Live Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] border border-white/15 backdrop-blur-xl shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8C72FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8C72FF]"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-slate-200">
                KenaCut Studio • Next-Gen Post-Production
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold uppercase rounded-md bg-[#FFA99F]/20 text-[#FFA99F]">
                Non-AI Slop
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Potong Bagian Bosan,{' '}
              <span className="text-gradient-aurora block sm:inline">
                Sisakan yang Menawan.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transformasi footage mentah jadi konten video vertikal 15–60 detik dengan pacing dinamis, hook ramah algoritma, dan sound design kelas agensi.
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm text-slate-950 bg-gradient-to-r from-[#8C72FF] via-[#70B9FE] to-[#FFA99F] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#8C72FF]/30 flex items-center justify-center gap-2 group"
              >
                <Scissors className="w-4 h-4 text-slate-950 group-hover:rotate-45 transition-transform" />
                <span>Klaim Kuota Edit Sekarang</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#pipeline"
                className="w-full sm:w-auto px-7 py-4 rounded-full font-semibold text-sm text-slate-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 backdrop-blur-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Lihat Alur Kerja</span>
                <div className="w-2 h-2 rounded-full bg-[#70B9FE] animate-pulse"></div>
              </a>
            </div>

            {/* Micro Feature Bullet Points */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#70B9FE]" />
                <span>Format Siap TikTok / Reels</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8C72FF]" />
                <span>Audio Bebas Copyright</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FFA99F]" />
                <span>Garansi Revisi Cepat</span>
              </div>
            </div>

            {/* 3 Antigravity Metric Cards (PRD 3.1) */}
            <div className="pt-6 grid grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto lg:mx-0">
              
              {/* Card A */}
              <div className="glass-panel p-3.5 sm:p-4 rounded-2xl border border-white/15 animate-float-slow hover:border-[#8C72FF]/50 transition-colors group">
                <div className="flex items-center gap-2 text-[#8C72FF] mb-1">
                  <Users className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Portofolio</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-white group-hover:text-[#8C72FF] transition-colors">
                  85+
                </div>
                <div className="text-[11px] text-slate-300 font-medium">Klien Aktif</div>
              </div>

              {/* Card B */}
              <div className="glass-panel p-3.5 sm:p-4 rounded-2xl border border-white/15 animate-float-reverse hover:border-[#70B9FE]/50 transition-colors group">
                <div className="flex items-center gap-2 text-[#70B9FE] mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">SLA Kilat</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-white group-hover:text-[#70B9FE] transition-colors">
                  24 Jam
                </div>
                <div className="text-[11px] text-slate-300 font-medium">Render Cepat</div>
              </div>

              {/* Card C */}
              <div className="glass-panel p-3.5 sm:p-4 rounded-2xl border border-white/15 animate-float-slow hover:border-[#FFA99F]/50 transition-colors group">
                <div className="flex items-center gap-2 text-[#FFA99F] mb-1">
                  <Star className="w-4 h-4 fill-[#FFA99F]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Rating</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-white group-hover:text-[#FFA99F] transition-colors">
                  4.9/5.0
                </div>
                <div className="text-[11px] text-slate-300 font-medium">Client Rating</div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Phone Mockup & Real Timeline Engine Preview */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Glowing Backdrop Mesh */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8C72FF]/20 via-[#70B9FE]/20 to-[#FFA99F]/20 rounded-3xl blur-2xl -z-10"></div>

            {/* Phone Container (9:16 Mockup) */}
            <div className="w-[300px] sm:w-[330px] rounded-[42px] p-3.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 border-2 border-white/20 shadow-2xl shadow-black/80 relative">
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700"></div>
              </div>

              {/* Phone Inner Screen */}
              <div className="relative w-full aspect-[9/16] rounded-[32px] overflow-hidden bg-slate-950 flex flex-col justify-between border border-white/10">
                
                {/* Visual Video Canvas */}
                <div className={`relative flex-1 bg-gradient-to-br ${
                  activeTab === 'after' 
                    ? 'from-purple-950/90 via-[#0B0D17] to-indigo-950/90' 
                    : 'from-slate-800 to-slate-900'
                } p-4 flex flex-col justify-between overflow-hidden transition-all duration-500`}>
                  
                  {/* Top Status & Mode Switcher */}
                  <div className="pt-6 flex items-center justify-between z-20">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                      <span>LIVE PREVIEW</span>
                    </div>

                    {/* Compare Toggle */}
                    <div className="flex bg-black/70 p-0.5 rounded-full border border-white/15 text-[10px] font-bold">
                      <button
                        onClick={() => setActiveTab('before')}
                        className={`px-2 py-0.5 rounded-full transition-all ${
                          activeTab === 'before' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        Mentah
                      </button>
                      <button
                        onClick={() => setActiveTab('after')}
                        className={`px-2.5 py-0.5 rounded-full transition-all ${
                          activeTab === 'after' ? 'bg-gradient-to-r from-[#8C72FF] to-[#70B9FE] text-white shadow-sm' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        KenaCut ✨
                      </button>
                    </div>
                  </div>

                  {/* Middle Content Preview (Interactive Dynamic Hook Simulation) */}
                  <div className="my-auto text-center relative z-20 space-y-3">
                    {activeTab === 'after' ? (
                      <div className="space-y-3 animate-fade-in">
                        {/* Animated Kinetic Subtitle */}
                        <div className="inline-block px-3 py-1.5 rounded-lg bg-black/80 border border-[#8C72FF]/50 shadow-lg text-xs font-black tracking-wide text-white uppercase transform -rotate-1 animate-pulse">
                          🔥 <span className="text-[#F3FFAA]">HOOK MENIT KE-0</span> BIKIN VIRAL!
                        </div>

                        {/* Floating Sticker Effect */}
                        <div className="flex justify-center items-center gap-2">
                          <div className="px-2.5 py-1 rounded-full bg-[#8C72FF]/30 border border-[#8C72FF]/60 text-[11px] font-extrabold text-[#70B9FE]">
                            +240% RETENTION
                          </div>
                          <div className="px-2 py-1 rounded-full bg-[#FFA99F]/20 text-[#FFA99F] text-[10px] font-bold">
                            💥 SFX POP
                          </div>
                        </div>

                        {/* Brand scissors avatar */}
                        <div className="mx-auto w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md p-1 border border-white/20 flex items-center justify-center shadow-xl shadow-[#8C72FF]/30">
                          <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover rounded-xl" />
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2 opacity-60">
                        <div className="text-xs font-medium text-slate-400 italic">
                          "Umm... halo semuanya, jadi hari ini saya mau bahas..."
                        </div>
                        <div className="text-[10px] text-red-400 bg-red-950/40 px-2 py-1 rounded-md border border-red-800/40 inline-block">
                          ⚠️ Jeda 4.5 detik (Bikin Penonton Kabur)
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom Stats Overlay */}
                  <div className="z-20 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-300 px-1">
                      <span className="flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-[#FFA99F]" />
                        <span>1.4M Views</span>
                      </span>
                      <span className="text-[#70B9FE] font-bold">84% Retention</span>
                    </div>

                    {/* Timeline Scrubber Bar */}
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#8C72FF] via-[#70B9FE] to-[#FFA99F] transition-all duration-100"
                        style={{ width: `${scrubProgress}%` }}
                      ></div>
                    </div>
                  </div>

                </div>

                {/* Timeline Tracks Simulator (CapCut / Premiere Pro Style) */}
                <div className="bg-slate-950 p-2.5 border-t border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                    <span>TIMELINE 00:00:{scrubProgress < 10 ? `0${scrubProgress}` : scrubProgress}</span>
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-1 rounded bg-white/10 hover:bg-white/20 text-white"
                    >
                      {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                    </button>
                  </div>

                  {/* Track 1: Subtitles */}
                  <div className="h-3 rounded bg-purple-950/70 border border-purple-500/40 flex items-center px-1">
                    <div className="text-[7px] font-bold text-purple-300 truncate">V2 Captions & SFX</div>
                  </div>

                  {/* Track 2: Video Footage */}
                  <div className="h-3.5 rounded bg-sky-950/80 border border-sky-500/40 flex items-center px-1 justify-between">
                    <div className="text-[7px] font-bold text-sky-300">V1 Cut A-Roll</div>
                    <div className="flex gap-0.5">
                      <div className="w-1.5 h-2 bg-sky-400 rounded-sm"></div>
                      <div className="w-2 h-2 bg-sky-300 rounded-sm"></div>
                      <div className="w-1.5 h-2 bg-sky-400 rounded-sm"></div>
                    </div>
                  </div>

                  {/* Track 3: Audio Beats */}
                  <div className="h-2.5 rounded bg-amber-950/70 border border-amber-500/40 flex items-center px-1">
                    <div className="text-[7px] font-bold text-amber-300">A1 BGM & Audio Mix</div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
