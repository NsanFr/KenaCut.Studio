import React, { useState } from 'react';
import { MessageCircle, Video, Instagram, UploadCloud, Scissors, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export default function FloatingSocialDock({ onOpenDriveModal, onOpenOrderModal }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  const dockItems = [
    {
      id: 'wa',
      label: 'WhatsApp Business',
      sublabel: `${SITE_CONFIG.phoneNumber} • Fast Quote`,
      icon: MessageCircle,
      href: SITE_CONFIG.getWhatsAppUrl("Halo KenaCut Studio, mau tanya jasa editing video"),
      color: 'hover:text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/40',
      badge: 'Online'
    },
    {
      id: 'tiktok',
      label: 'TikTok Resmi',
      sublabel: `${SITE_CONFIG.socials.tiktokHandle} • HD Video`,
      icon: Video,
      href: SITE_CONFIG.socials.tiktok,
      color: 'hover:text-[#70B9FE] hover:bg-[#70B9FE]/20 hover:border-[#70B9FE]/40',
      badge: 'Video'
    },
    {
      id: 'instagram',
      label: 'Instagram Gallery',
      sublabel: `${SITE_CONFIG.socials.instagramHandle} • Portofolio`,
      icon: Instagram,
      href: SITE_CONFIG.socials.instagram,
      color: 'hover:text-[#FFA99F] hover:bg-[#FFA99F]/20 hover:border-[#FFA99F]/40',
      badge: 'Feed'
    },
    {
      id: 'drive',
      label: 'Setor Raw Drive',
      sublabel: 'Jalur Kilat Klien Loyal',
      icon: UploadCloud,
      action: onOpenDriveModal,
      color: 'hover:text-[#8C72FF] hover:bg-[#8C72FF]/20 hover:border-[#8C72FF]/40',
      badge: 'Klien'
    }
  ];

  return (
    <aside aria-label="Social hub" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 px-3 py-2 rounded-full bg-[#0B0D17]/85 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/80 flex items-center gap-1.5 sm:gap-2">
      
      {/* Brand Mini Monogram */}
      <button 
        onClick={onOpenOrderModal}
        className="relative group p-2 rounded-full bg-gradient-to-r from-[#8C72FF] to-[#70B9FE] text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
        title="KenaCut Studio Quick Order"
      >
        <Scissors className="w-4 h-4 text-slate-950" />
      </button>

      <div className="h-6 w-px bg-white/20 mx-1"></div>

      {/* Dock Action Icons */}
      {dockItems.map((item) => {
        const Icon = item.icon;
        const isHovered = hoveredItem === item.id;

        return (
          <div key={item.id} className="relative group">
            
            {/* Tooltip Label ala iOS Dynamic Island */}
            {isHovered && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-white/20 text-white backdrop-blur-md shadow-xl text-center pointer-events-none whitespace-nowrap animate-fade-in z-50">
                <div className="text-[11px] font-bold">{item.label}</div>
                <div className="text-[9px] text-slate-400">{item.sublabel}</div>
                {/* Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45 border-r border-b border-white/20 -mt-1"></div>
              </div>
            )}

            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`p-2.5 sm:p-3 rounded-full text-slate-300 border border-transparent transition-all flex items-center justify-center ${item.color} active:scale-90`}
                aria-label={item.label}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ) : (
              <button
                type="button"
                onClick={item.action}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`p-2.5 sm:p-3 rounded-full text-slate-300 border border-transparent transition-all flex items-center justify-center ${item.color} active:scale-90`}
                aria-label={item.label}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )}

          </div>
        );
      })}

    </aside>
  );
}
