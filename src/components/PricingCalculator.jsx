import React, { useState } from 'react';
import { Calculator, Sparkles, Check, Send, Clock, Flame } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export default function PricingCalculator({ onOpenDriveModal }) {
  const [format, setFormat] = useState('tiktok'); // tiktok | reels | carousel | batch
  const [videoCount, setVideoCount] = useState(3);
  const [speed, setSpeed] = useState('standard'); // standard | express24
  const [includeThumbnail, setIncludeThumbnail] = useState(true);
  const [includeSfx, setIncludeSfx] = useState(true);

  // Pricing calculation
  const baseRatePerVideo = format === 'carousel' ? 95000 : 175000;
  let total = baseRatePerVideo * videoCount;

  if (speed === 'express24') {
    total += 50000 * videoCount;
  }
  if (includeThumbnail) {
    total += 25000 * videoCount;
  }

  // Tier discount calculation
  let discountPercent = 0;
  if (videoCount >= 25) discountPercent = 15;
  else if (videoCount >= 12) discountPercent = 10;
  else if (videoCount >= 5) discountPercent = 5;

  const discountAmount = (total * discountPercent) / 100;
  const finalPrice = total - discountAmount;

  const handleOrderWhatsApp = () => {
    const text = `Halo KenaCut Studio! Saya ingin order jasa edit:
- Format: ${format.toUpperCase()}
- Jumlah Konten: ${videoCount} Video/Post
- Pengerjaan: ${speed === 'express24' ? 'Express 24 Jam' : 'Standar (48-72 Jam)'}
- Add-on: ${includeThumbnail ? 'Custom Thumbnail' : ''} ${includeSfx ? '+ Kinetic Captions & SFX' : ''}
- Estimasi Total: Rp ${finalPrice.toLocaleString('id-ID')} (Diskon ${discountPercent}%)
Mohon info ketersediaan slot antrean.`;

    const url = SITE_CONFIG.getWhatsAppUrl(text);
    window.open(url, '_blank');
  };

  return (
    <section id="estimator" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8C72FF]/15 border border-[#8C72FF]/30 text-[#8C72FF] text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Kalkulator Transparan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Hitung Estimasi <span className="text-gradient-aurora">Project Video Kamu</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Tanpa biaya tersembunyi. Sesuaikan jumlah konten, kecepatan pengerjaan, dan add-on kebutuhan media sosial Anda.
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-white/20 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Options Column */}
            <div className="md:col-span-7 space-y-6">
              
              {/* Format selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  1. Pilih Format Konten
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'tiktok', name: 'TikTok Hook', tag: '9:16' },
                    { id: 'reels', name: 'Reels Edukasi', tag: '9:16' },
                    { id: 'carousel', name: 'Carousel Post', tag: '4:5' }
                  ].map(f => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setFormat(f.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        format === f.id
                          ? 'bg-[#8C72FF]/20 border-[#8C72FF] text-white shadow-md'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-xs font-bold">{f.name}</div>
                      <div className="text-[10px] text-slate-400">{f.tag}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Video Count Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold text-slate-300 uppercase tracking-wider">
                    2. Jumlah Konten:
                  </label>
                  <span className="font-extrabold text-[#70B9FE] text-sm">{videoCount} Video</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="30" 
                  value={videoCount}
                  onChange={(e) => setVideoCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#8C72FF]"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>1 Video (Satuan)</span>
                  <span>10 Video (Hemat 5%)</span>
                  <span>25+ Video (Hemat 15%)</span>
                </div>
              </div>

              {/* Delivery Speed */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  3. Kecepatan Pengerjaan
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSpeed('standard')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      speed === 'standard'
                        ? 'bg-[#70B9FE]/20 border-[#70B9FE] text-white'
                        : 'bg-white/5 border-white/10 text-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#70B9FE]" />
                      <span>Standar (48-72 Jam)</span>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">SLA produksi normal</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSpeed('express24')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      speed === 'express24'
                        ? 'bg-[#FFA99F]/20 border-[#FFA99F] text-white'
                        : 'bg-white/5 border-white/10 text-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-[#FFA99F]" />
                      <span>Express 24 Jam</span>
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">+Rp 50k / video priority</div>
                  </button>
                </div>
              </div>

              {/* Add-ons Checkboxes */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  4. Fitur Tambahan (Add-Ons)
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 cursor-pointer hover:bg-white/[0.06]">
                    <input 
                      type="checkbox" 
                      checked={includeThumbnail}
                      onChange={(e) => setIncludeThumbnail(e.target.checked)}
                      className="rounded accent-[#8C72FF] w-4 h-4"
                    />
                    <div className="text-xs flex-1">
                      <span className="font-semibold text-white">Custom High-CTR Thumbnail Design</span>
                      <span className="text-slate-400 block text-[10px]">+Rp 25.000 / desain cover</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/10 cursor-pointer hover:bg-white/[0.06]">
                    <input 
                      type="checkbox" 
                      checked={includeSfx}
                      onChange={(e) => setIncludeSfx(e.target.checked)}
                      className="rounded accent-[#8C72FF] w-4 h-4"
                    />
                    <div className="text-xs flex-1">
                      <span className="font-semibold text-white">Kinetic Subtitle + Sound FX Pop Package</span>
                      <span className="text-emerald-400 block text-[10px]">GRATIS (Sudah Termasuk)</span>
                    </div>
                  </label>
                </div>
              </div>

            </div>

            {/* Summary & Checkout Column */}
            <div className="md:col-span-5 bg-gradient-to-b from-slate-900 to-black/80 rounded-2xl p-6 border border-white/15 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Ringkasan Order</span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#8C72FF]/20 text-[#8C72FF]">
                    KenaCut Guaranteed
                  </span>
                </div>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span>Subtotal ({videoCount}x Konten)</span>
                    <span className="font-mono">Rp {(baseRatePerVideo * videoCount).toLocaleString('id-ID')}</span>
                  </div>
                  {speed === 'express24' && (
                    <div className="flex justify-between text-[#FFA99F]">
                      <span>Express 24 Jam</span>
                      <span className="font-mono">+Rp {(50000 * videoCount).toLocaleString('id-ID')}</span>
                    </div>
                  )}
                  {includeThumbnail && (
                    <div className="flex justify-between text-[#70B9FE]">
                      <span>Thumbnail Cover</span>
                      <span className="font-mono">+Rp {(25000 * videoCount).toLocaleString('id-ID')}</span>
                    </div>
                  )}
                  {discountPercent > 0 && (
                    <div className="flex justify-between text-emerald-400 font-bold">
                      <span>Diskon Tier ({discountPercent}%)</span>
                      <span className="font-mono">-Rp {discountAmount.toLocaleString('id-ID')}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-white/15">
                  <div className="text-xs text-slate-400">Estimasi Total Investasi</div>
                  <div className="text-2xl sm:text-3xl font-black text-white mt-1 text-gradient-aurora">
                    Rp {finalPrice.toLocaleString('id-ID')}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button
                  onClick={handleOrderWhatsApp}
                  className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-[#8C72FF] via-[#70B9FE] to-[#FFA99F] hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#8C72FF]/25 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Order via WhatsApp</span>
                </button>

                <button
                  onClick={onOpenDriveModal}
                  className="w-full py-2.5 rounded-xl font-semibold text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                >
                  Langsung Drop Google Drive Mentahan
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
