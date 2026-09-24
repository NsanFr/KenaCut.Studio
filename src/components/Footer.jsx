import React from 'react';
import { Scissors, ShieldCheck, Heart, Sparkles, MessageCircle, Video, Instagram, ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export default function Footer({ onOpenOrderModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-20 pb-28 border-t dark:border-white/10 border-slate-200 dark:bg-[#06070D] bg-slate-50 relative overflow-hidden text-xs dark:text-slate-400 text-slate-600 transition-colors duration-300">
      
      {/* Aurora Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#8C72FF]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Guarantee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-10 border-b dark:border-white/10 border-slate-200">
          <div className="p-4 rounded-2xl dark:bg-white/[0.02] bg-white border dark:border-white/10 border-slate-200 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#8C72FF]/20 text-[#8C72FF] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold dark:text-white text-slate-900 text-sm">100% Non-AI Slop</h4>
              <p className="text-[11px] dark:text-slate-400 text-slate-500 mt-0.5">Dipahat manual oleh editor profesional berstandar viral.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl dark:bg-white/[0.02] bg-white border dark:border-white/10 border-slate-200 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#70B9FE]/20 text-[#70B9FE] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold dark:text-white text-slate-900 text-sm">Commercial Audio Library</h4>
              <p className="text-[11px] dark:text-slate-400 text-slate-500 mt-0.5">Semua BGM & SFX aman untuk monetisasi dan akun bisnis.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl dark:bg-white/[0.02] bg-white border dark:border-white/10 border-slate-200 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFA99F]/20 text-[#FFA99F] flex items-center justify-center shrink-0">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold dark:text-white text-slate-900 text-sm">Gamified CRM Rewards</h4>
              <p className="text-[11px] dark:text-slate-400 text-slate-500 mt-0.5">Kumpulkan poin repeat order untuk diskon & prioritas 24 jam.</p>
            </div>
          </div>
        </div>

        {/* Brand & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden bg-white/10 p-0.5 border dark:border-white/20 border-slate-300">
                <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div>
                <div className="font-black text-base dark:text-white text-slate-900">KenaCut Studio</div>
                <div className="text-[11px] dark:text-slate-400 text-slate-500">Micro-Agency Video Post-Production</div>
              </div>
            </div>
            <p className="text-xs dark:text-slate-300 text-slate-600 max-w-md leading-relaxed">
              "Potong Bagian Bosan, Sisakan yang Menawan." Kami membantu kreator & brand mengembangkan jangkauan organik melalui video vertikal berkualitas tinggi.
            </p>
            <div className="text-[11px] text-slate-500">
              Surabaya & Jakarta, Indonesia • Ready for Global Remote Clients
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-bold dark:text-white text-slate-900 text-xs uppercase tracking-wider">Navigasi</h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#showcase" className="dark:hover:text-white hover:text-slate-900 transition-colors">Portofolio Video</a></li>
              <li><a href="#pipeline" className="dark:hover:text-white hover:text-slate-900 transition-colors">Alur Kerja 4 Tahap</a></li>
              <li><a href="#crm-tiers" className="dark:hover:text-white hover:text-slate-900 transition-colors">Sistem Member CRM</a></li>
              <li><a href="#estimator" className="dark:hover:text-white hover:text-slate-900 transition-colors">Kalkulator Order & Harga</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="font-bold dark:text-white text-slate-900 text-xs uppercase tracking-wider">Hubungi Kami</h5>
            <div className="space-y-2">
              <a
                href={SITE_CONFIG.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 dark:text-slate-300 text-slate-600 dark:hover:text-white hover:text-slate-950 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                <span>{SITE_CONFIG.phoneFormatted} (WhatsApp)</span>
              </a>
              <a
                href={SITE_CONFIG.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 dark:text-slate-300 text-slate-600 dark:hover:text-white hover:text-slate-950 transition-colors"
              >
                <Video className="w-4 h-4 text-[#70B9FE]" />
                <span>{SITE_CONFIG.socials.tiktokHandle} (TikTok)</span>
              </a>
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 dark:text-slate-300 text-slate-600 dark:hover:text-white hover:text-slate-950 transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#FFA99F]" />
                <span>{SITE_CONFIG.socials.instagramHandle} (Instagram)</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg dark:bg-white/5 bg-slate-200 dark:hover:bg-white/10 hover:bg-slate-300 dark:text-slate-300 text-slate-700 dark:hover:text-white hover:text-slate-900 transition-colors text-xs"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Kembali ke Atas</span>
              </button>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t dark:border-white/10 border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 KenaCut Studio. All rights reserved. Non-AI Handcrafted Video Production.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with Antigravity Aurora Design</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
