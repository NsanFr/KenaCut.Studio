import React from 'react';
import { X, Play, Flame, TrendingUp, Clock, Layers, Sparkles, CheckCircle2, Scissors } from 'lucide-react';

export default function PortfolioModal({ item, onClose, onOpenOrderModal }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#0B0D17] border border-white/20 p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="space-y-1 pr-8">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#8C72FF]/20 text-[#8C72FF] border border-[#8C72FF]/30">
              {item.category}
            </span>
            <span className="text-xs text-slate-400">{item.client}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-white">{item.title}</h3>
        </div>

        {/* Video Canvas & Timeline Preview */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-black border border-white/15 p-5 flex flex-col justify-between">
          <div className={`absolute inset-0 bg-gradient-to-tr ${item.videoPlaceholderBg} opacity-80`}></div>
          
          <div className="relative z-10 flex items-center justify-between text-xs">
            <span className="px-2 py-1 rounded bg-black/70 text-white font-mono">ASPECT {item.aspectRatio}</span>
            <span className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
              Verified Real Footage
            </span>
          </div>

          <div className="relative z-10 text-center space-y-2 my-auto">
            <div className="inline-block px-4 py-2 rounded-xl bg-black/80 border border-white/20 text-white text-xs sm:text-sm font-black">
              "{item.hookText}"
            </div>
            <p className="text-[10px] text-slate-300">Pacing Dinamis • 0% Dead Air • Kinetic Typography</p>
          </div>

          <div className="relative z-10 flex items-center justify-between text-xs text-slate-200">
            <span className="flex items-center gap-1"><Flame className="w-3.5 h-3.5 text-[#FFA99F]" /> {item.views} Organic Views</span>
            <span className="text-[#70B9FE] font-bold">{item.retention} Retention</span>
            <span className="text-slate-400 font-mono">{item.duration}</span>
          </div>
        </div>

        {/* Multi-Track Editing Blueprint */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#8C72FF]" />
            <span>Bedah Pipeline Timeline Editing (CapCut & Premiere Pro)</span>
          </h4>

          <div className="space-y-2 bg-black/50 p-4 rounded-xl border border-white/10">
            {item.timelineLayers.map((layer, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between text-[11px] text-slate-300 font-medium">
                  <span>{layer.name}</span>
                  <span className="text-slate-400 font-mono">{layer.cuts} Micro-Cuts</span>
                </div>
                <div className="h-2 rounded bg-white/5 overflow-hidden">
                  <div className={`h-full ${layer.color} opacity-90 rounded-sm w-full`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Editing Highlights Recipe */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
            Resep Editing KenaCut:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {item.editingHighlights.map((hl, i) => (
              <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#70B9FE] shrink-0" />
                <span>{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenOrderModal();
            }}
            className="flex-1 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-[#8C72FF] via-[#70B9FE] to-[#FFA99F] hover:opacity-95 transition-all shadow-xl shadow-[#8C72FF]/20 flex items-center justify-center gap-2"
          >
            <Scissors className="w-4 h-4" />
            <span>Pesan Edit Gaya Seperti Ini</span>
          </button>
        </div>

      </div>
    </div>
  );
}
