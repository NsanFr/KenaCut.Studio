import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { Play, Flame, TrendingUp, Clock, Layers, Sparkles, Filter, ExternalLink } from 'lucide-react';

export default function PortfolioSection({ onSelectItem }) {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const categories = ['Semua', 'TikTok Hook', 'Reels Edukasi', 'Carousel Post'];

  const filteredItems = activeFilter === 'Semua' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="showcase" className="py-20 md:py-28 relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#8C72FF]/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#70B9FE]/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8C72FF]/15 border border-[#8C72FF]/30 text-[#8C72FF] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showcase Portofolio Riil</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Karya Autentik, <span className="text-gradient-aurora">Non-AI Slop</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Setiap detik dipahat manual oleh editor berpengalaman dengan manipulasi pacing, sound design presisi, dan hook visual yang menahan jari penonton agar tidak swipe away.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-[#8C72FF] to-[#70B9FE] text-white shadow-lg shadow-[#8C72FF]/30 scale-105'
                  : 'bg-white/[0.05] text-slate-300 hover:text-white hover:bg-white/[0.1] border border-white/10'
              }`}
            >
              <span>{cat}</span>
              {activeFilter === cat && <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>}
            </button>
          ))}
        </div>

        {/* Portfolio Showcase Grid (Phone Mockups & Timeline Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="group cursor-pointer glass-panel rounded-3xl p-5 border border-white/15 hover:border-[#8C72FF]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#8C72FF]/20 flex flex-col justify-between"
            >
              {/* Phone Frame 9:16 Mockup */}
              <div className="relative w-full aspect-[9/14] sm:aspect-[9/13] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900 to-black border border-white/10 mb-5 p-4 flex flex-col justify-between group-hover:border-[#70B9FE]/50 transition-colors">
                
                {/* Background Atmosphere */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.videoPlaceholderBg} opacity-80 group-hover:opacity-100 transition-opacity`}></div>

                {/* Top Badge & Metric */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-black/60 backdrop-blur-md text-white border border-white/20">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#FFA99F]/20 border border-[#FFA99F]/30 text-[#FFA99F] text-[10px] font-bold">
                    <Flame className="w-3 h-3" />
                    <span>{item.views}</span>
                  </div>
                </div>

                {/* Center Visual Mockup & Play Button Glow */}
                <div className="relative z-10 text-center space-y-3 my-auto">
                  <div className="w-14 h-14 mx-auto rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:bg-[#8C72FF] transition-all">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                  
                  {/* Hook Text Card */}
                  <div className="bg-black/75 backdrop-blur-md p-2.5 rounded-xl border border-white/15 max-w-[220px] mx-auto">
                    <p className="text-[11px] font-black text-slate-100 uppercase tracking-tight line-clamp-2">
                      "{item.hookText}"
                    </p>
                  </div>
                </div>

                {/* Bottom Timeline Layers Overlay (Premiere/CapCut Style) */}
                <div className="relative z-10 bg-black/85 backdrop-blur-md p-2.5 rounded-xl border border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono">
                    <span className="flex items-center gap-1 text-slate-300">
                      <Layers className="w-3 h-3 text-[#70B9FE]" />
                      Multi-Track Pipeline
                    </span>
                    <span className="text-[#8C72FF] font-bold">{item.duration}</span>
                  </div>

                  {/* Multi Layer Bars */}
                  <div className="space-y-1">
                    {item.timelineLayers.slice(0, 3).map((layer, idx) => (
                      <div key={idx} className="h-2 rounded bg-white/5 overflow-hidden flex items-center">
                        <div 
                          className={`h-full ${layer.color} opacity-80 rounded-sm`} 
                          style={{ width: `${Math.min(100, 40 + idx * 25)}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Meta & Details */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{item.client}</span>
                  <span className="text-[#70B9FE] font-bold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {item.retention} Retention
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#70B9FE] transition-colors line-clamp-1">
                  {item.title}
                </h3>

                {/* Highlights Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.editingHighlights.slice(0, 2).map((hl, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-slate-300">
                      ⚡ {hl}
                    </span>
                  ))}
                </div>

                {/* CTA Link */}
                <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#8C72FF] group-hover:text-[#FFA99F] transition-colors">
                  <span>Inspeksi Timeline & Breakdown</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
