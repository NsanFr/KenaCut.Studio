import React, { useState, useEffect } from 'react';
import { Sparkles, Scissors, ArrowRight, MessageCircle, Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ onOpenOrderModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'dark:bg-[#0B0D17]/85 bg-white/85 backdrop-blur-xl dark:border-b dark:border-white/10 border-b border-slate-200/80 py-3 shadow-xl dark:shadow-black/50 shadow-slate-900/5' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white/10 p-0.5 border dark:border-white/20 border-slate-300 shadow-lg shadow-[#8C72FF]/20 group-hover:scale-105 transition-transform">
              <img 
                src="/logo.jpg" 
                alt="KenaCut Studio Logo" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg tracking-tight dark:text-white text-slate-900 group-hover:text-[#70B9FE] transition-colors">
                  KenaCut<span className="text-[#8C72FF]">.</span>Studio
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-[#8C72FF]/20 text-[#8C72FF] dark:text-[#FFA99F] border border-[#8C72FF]/40 rounded-full">
                  Micro-Agency
                </span>
              </div>
              <p className="text-[11px] dark:text-slate-400 text-slate-500 font-medium">Next-Gen Video Post-Production</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full dark:bg-white/[0.04] bg-slate-900/[0.04] dark:border-white/10 border-slate-200 backdrop-blur-md">
            <a href="#showcase" className="px-3.5 py-1.5 text-xs font-semibold dark:text-slate-300 text-slate-600 hover:text-slate-900 dark:hover:text-white dark:hover:bg-white/10 hover:bg-slate-900/5 rounded-full transition-all">
              Portofolio
            </a>
            <a href="#pipeline" className="px-3.5 py-1.5 text-xs font-semibold dark:text-slate-300 text-slate-600 hover:text-slate-900 dark:hover:text-white dark:hover:bg-white/10 hover:bg-slate-900/5 rounded-full transition-all">
              Alur Kerja
            </a>
            <a href="#crm-tiers" className="px-3.5 py-1.5 text-xs font-semibold dark:text-slate-300 text-slate-600 hover:text-slate-900 dark:hover:text-white dark:hover:bg-white/10 hover:bg-slate-900/5 rounded-full transition-all flex items-center gap-1">
              <span>Member CRM</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFA99F] animate-pulse"></span>
            </a>
            <a href="#estimator" className="px-3.5 py-1.5 text-xs font-semibold dark:text-slate-300 text-slate-600 hover:text-slate-900 dark:hover:text-white dark:hover:bg-white/10 hover:bg-slate-900/5 rounded-full transition-all">
              Kalkulator Order
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Dark / Light Mode Switcher */}
            <ThemeToggle />

            <a
              href={SITE_CONFIG.getWhatsAppUrl("Halo KenaCut Studio, saya tertarik untuk konsultasi jasa editing video pendek")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold dark:text-slate-200 text-slate-700 hover:text-slate-900 dark:hover:text-white dark:bg-white/5 bg-slate-100 dark:hover:bg-white/10 hover:bg-slate-200 border dark:border-white/15 border-slate-300 rounded-full transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#70B9FE]" />
              <span>Chat WhatsApp</span>
            </a>

            <button
              onClick={onOpenOrderModal}
              className="relative group overflow-hidden px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-[#8C72FF] via-[#70B9FE] to-[#FFA99F] rounded-full shadow-lg shadow-[#8C72FF]/25 hover:shadow-[#70B9FE]/40 hover:scale-105 active:scale-95 transition-all"
            >
              <span className="relative z-10 flex items-center gap-1.5 font-bold">
                <Scissors className="w-3.5 h-3.5" />
                <span>Klaim Kuota Edit</span>
              </span>
            </button>
          </div>

          {/* Mobile Right Bar: Theme Toggle + Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg dark:bg-white/5 bg-slate-100 border dark:border-white/10 border-slate-300 dark:text-slate-300 text-slate-700 hover:text-slate-950 dark:hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl dark:bg-[#0B0D17]/95 bg-white/95 border dark:border-white/15 border-slate-200 shadow-2xl backdrop-blur-2xl space-y-3">
            <a 
              href="#showcase" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium dark:text-slate-200 text-slate-700 dark:hover:bg-white/10 hover:bg-slate-100 rounded-lg"
            >
              Portofolio Video
            </a>
            <a 
              href="#pipeline" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium dark:text-slate-200 text-slate-700 dark:hover:bg-white/10 hover:bg-slate-100 rounded-lg"
            >
              Alur Kerja (Pipeline)
            </a>
            <a 
              href="#crm-tiers" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium dark:text-slate-200 text-slate-700 dark:hover:bg-white/10 hover:bg-slate-100 rounded-lg"
            >
              Member CRM Tiers (Bronze - Diamond)
            </a>
            <a 
              href="#estimator" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium dark:text-slate-200 text-slate-700 dark:hover:bg-white/10 hover:bg-slate-100 rounded-lg"
            >
              Kalkulator Biaya
            </a>
            <div className="pt-2 border-t dark:border-white/10 border-slate-200 flex flex-col gap-2">
              <a
                href={SITE_CONFIG.getWhatsAppUrl("Halo KenaCut Studio, saya tertarik untuk konsultasi")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-xs font-bold dark:text-slate-200 text-slate-700 dark:bg-white/10 bg-slate-100 dark:hover:bg-white/20 hover:bg-slate-200 rounded-xl text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                <span>Chat WhatsApp ({SITE_CONFIG.phoneNumber})</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-[#8C72FF] via-[#70B9FE] to-[#FFA99F] rounded-xl text-center shadow-md"
              >
                Klaim Kuota Edit Sekarang
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
