import React, { useState } from 'react';
import { X, Scissors, MessageCircle, Sparkles, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export default function OrderModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [handle, setHandle] = useState('');
  const [service, setService] = useState('TikTok Hook / Short Video');
  const [volume, setVolume] = useState('Paket 5 Video (Silver Tier)');
  const [urgent, setUrgent] = useState(false);

  if (!isOpen) return null;

  const handleSend = (e) => {
    e.preventDefault();
    const text = `Halo KenaCut Studio! Saya ingin klaim kuota edit:
- Nama: ${name}
- Akun / Brand: ${handle}
- Layanan: ${service}
- Paket Kebutuhan: ${volume}
- Prioritas: ${urgent ? '⚡ Render Express 24 Jam' : 'Standar'}
Mohon info ketersediaan slot antrean editor hari ini.`;

    const url = SITE_CONFIG.getWhatsAppUrl(text);
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md rounded-3xl bg-[#0B0D17] border border-white/20 p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/10 p-1 border border-white/20 flex items-center justify-center shadow-lg shadow-[#8C72FF]/20">
            <img src="/logo.jpg" alt="KenaCut Logo" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Klaim Kuota Edit</h3>
            <p className="text-xs text-slate-400">Slot harian terbatas untuk menjaga kualitas SLA</p>
          </div>
        </div>

        <form onSubmit={handleSend} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Nama Lengkap / Panggilan *
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: Amanda"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#8C72FF]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Username TikTok / IG / Brand
            </label>
            <input
              type="text"
              placeholder="@brandkamu"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#70B9FE]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Layanan Utama
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 text-white text-xs focus:outline-none focus:border-[#8C72FF]"
            >
              <option>TikTok Hook / Short Video (15-60s)</option>
              <option>Instagram Reels Edukasi & Bisnis</option>
              <option>Instagram Carousel Graphic Post</option>
              <option>Retainer Bulanan (15-30 Video)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Rencana Jumlah Konten
            </label>
            <select
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/15 text-white text-xs focus:outline-none focus:border-[#8C72FF]"
            >
              <option>1 Video Trial (Bronze Tier)</option>
              <option>Paket 5 Video (Silver Tier)</option>
              <option>Paket 12 Video (Gold Tier - Express 24h)</option>
              <option>Paket 25 Video (Platinum Retainer)</option>
              <option>Paket 45+ Video (Diamond Enterprise)</option>
            </select>
          </div>

          <label className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/10 cursor-pointer">
            <input
              type="checkbox"
              checked={urgent}
              onChange={(e) => setUrgent(e.target.checked)}
              className="rounded accent-[#FFA99F] w-4 h-4"
            />
            <span className="text-xs text-slate-200">
              Butuh Render Cepat 24 Jam (Express Slot)
            </span>
          </label>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-[#8C72FF] via-[#70B9FE] to-[#FFA99F] hover:opacity-95 transition-all shadow-xl shadow-[#8C72FF]/20 flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>Kirim via WhatsApp ({SITE_CONFIG.phoneNumber})</span>
          </button>
        </form>

      </div>
    </div>
  );
}
