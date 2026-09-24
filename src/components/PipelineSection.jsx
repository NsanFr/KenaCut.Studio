import React, { useState } from 'react';
import { PIPELINE_STEPS } from '../data/pipelineData';
import { UploadCloud, Scissors, Sparkles, CheckCircle2, ArrowRight, Play, Check } from 'lucide-react';

export default function PipelineSection({ onOpenDriveModal }) {
  const [activeStep, setActiveStep] = useState(0);

  const icons = [UploadCloud, Scissors, Sparkles, CheckCircle2];

  return (
    <section id="pipeline" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#70B9FE]/15 border border-[#70B9FE]/30 text-[#70B9FE] text-xs font-bold uppercase tracking-wider">
            <span>Workflow Pipeline Transparan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black dark:text-white text-slate-900 tracking-tight">
            Dari Bahan Mentah Menjadi <span className="text-gradient-aurora">Konten Viral</span>
          </h2>
          <p className="text-sm sm:text-base dark:text-slate-300 text-slate-600">
            Alur kerja 4 tahap tanpa ribet. Anda fokus menciptakan ide & merekam, KenaCut Studio yang menyulapnya menjadi mahakarya siap upload.
          </p>
        </div>

        {/* Pipeline Interactive Stepper Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: 4 Steps List */}
          <div className="lg:col-span-7 space-y-4">
            {PIPELINE_STEPS.map((step, idx) => {
              const StepIcon = icons[idx];
              const isSelected = activeStep === idx;

              return (
                <div
                  key={step.stepNumber}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 ${
                    isSelected
                      ? 'dark:bg-gradient-to-r dark:from-white/[0.08] dark:to-white/[0.02] bg-white border-[#8C72FF] shadow-xl shadow-[#8C72FF]/20 -translate-x-1'
                      : 'dark:bg-white/[0.02] bg-slate-900/[0.02] dark:border-white/10 border-slate-200 dark:hover:bg-white/[0.05] hover:bg-slate-900/[0.05] dark:hover:border-white/20 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Step Number & Icon */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected 
                        ? 'bg-gradient-to-br from-[#8C72FF] to-[#70B9FE] text-white shadow-lg' 
                        : 'bg-white/10 text-slate-400'
                    }`}>
                      <StepIcon className="w-6 h-6" />
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#FFA99F]' : 'text-slate-400'}`}>
                            TAHAP {step.stepNumber}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-slate-300">
                            {step.tag}
                          </span>
                        </div>
                        {isSelected && (
                          <span className="text-xs font-bold text-[#70B9FE] flex items-center gap-1 animate-pulse">
                            <span>Aktif</span>
                          </span>
                        )}
                      </div>

                      <h3 className={`text-base sm:text-lg font-bold ${isSelected ? 'dark:text-white text-slate-900' : 'dark:text-slate-200 text-slate-700'}`}>
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm dark:text-slate-400 text-slate-600">
                        {step.shortDesc}
                      </p>

                      {isSelected && (
                        <div className="pt-2 text-xs text-[#F3FFAA] font-medium flex items-center gap-1.5 animate-fade-in">
                          <Check className="w-3.5 h-3.5 text-[#F3FFAA]" />
                          <span>{step.highlight}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Step Live Simulator Console */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 rounded-3xl border border-white/20 shadow-2xl relative overflow-hidden">
              
              {/* Top Bar Simulator */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  <span className="font-mono text-[11px] text-slate-300 ml-1">KenaCut Engine v2.4</span>
                </div>
                <span className="text-[11px] font-mono text-[#8C72FF]">STEP {PIPELINE_STEPS[activeStep].stepNumber}/04</span>
              </div>

              {/* Dynamic Interactive Demo Box */}
              <div className="py-6 space-y-4">
                <div className="text-xs font-bold text-[#FFA99F] uppercase tracking-wider">
                  {PIPELINE_STEPS[activeStep].interactiveDemo.demoTitle}
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="font-medium">Status Pemrosesan:</span>
                    <span className="text-[#70B9FE] font-bold">100% Siap</span>
                  </div>

                  {/* Visual Waveform / Simulator based on step */}
                  {activeStep === 0 && (
                    <div className="space-y-2">
                      <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-500/30 text-xs text-slate-200 flex items-center justify-between">
                        <span>drive.google.com/drive/u/0/folders/...</span>
                        <button 
                          onClick={onOpenDriveModal}
                          className="px-2 py-1 text-[10px] font-bold bg-[#8C72FF] text-white rounded hover:bg-[#70B9FE] transition-colors"
                        >
                          Coba Setor
                        </button>
                      </div>
                      <p className="text-[11px] text-slate-400">Terima format MP4, MOV, ProRes, 4K 60fps tanpa kompresi.</p>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div className="space-y-2">
                      <div className="h-10 bg-slate-900 rounded-lg p-2 flex items-center gap-1">
                        <div className="h-6 w-8 bg-sky-500 rounded-sm"></div>
                        <div className="h-6 w-12 bg-sky-500 rounded-sm"></div>
                        <div className="h-2 w-4 bg-red-500/40 rounded-sm line-through"></div>
                        <div className="h-6 w-16 bg-sky-500 rounded-sm"></div>
                        <div className="h-6 w-10 bg-sky-500 rounded-sm"></div>
                      </div>
                      <div className="text-[11px] text-emerald-400 font-medium">
                        ✓ 12 Bagian hening/bisu otomatis dipangkas presisi.
                      </div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div className="space-y-2">
                      <div className="p-3 bg-purple-950/40 border border-purple-500/30 rounded-lg text-center">
                        <span className="text-xs font-black text-[#F3FFAA] animate-pulse">
                          ✨ "KENAPA BISNIS KAMU SEPI?" [SOUND: SWOOSH]
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-300">
                        Color Grading, Sound Effects, Zoom In-Out, Karaoke Captioning.
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div className="space-y-2">
                      <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-lg flex items-center justify-between text-xs">
                        <span className="text-white font-bold">final_render_kenacut.mp4</span>
                        <span className="text-emerald-400 font-bold">1080x1920 (9:16)</span>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Siap posting langsung ke TikTok, Instagram Reels, dan YouTube Shorts.
                      </div>
                    </div>
                  )}

                  <div className="pt-2 border-t border-white/10 text-xs text-slate-300 font-medium">
                    {PIPELINE_STEPS[activeStep].detail}
                  </div>
                </div>

                {/* Step Switcher Navigation */}
                <div className="flex justify-between items-center pt-2">
                  <button
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep(prev => prev - 1)}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-white/5 disabled:opacity-30 hover:bg-white/10 text-slate-300"
                  >
                    Sebelumnya
                  </button>
                  <button
                    disabled={activeStep === PIPELINE_STEPS.length - 1}
                    onClick={() => setActiveStep(prev => prev + 1)}
                    className="px-4 py-1.5 text-xs font-bold rounded-lg bg-[#8C72FF] disabled:opacity-30 hover:bg-[#70B9FE] text-white flex items-center gap-1"
                  >
                    <span>Lanjut</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
