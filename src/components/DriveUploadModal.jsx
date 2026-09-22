import React, { useState } from 'react';
import { UploadCloud, X, CheckCircle2, Link2, FileText, Send, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

export default function DriveUploadModal({ isOpen, onClose }) {
  const [driveLink, setDriveLink] = useState('');
  const [clientName, setClientName] = useState('');
  const [briefNotes, setBriefNotes] = useState('');
  const [tierCode, setTierCode] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Halo KenaCut Studio! Saya ingin setor bahan mentah video:
- Nama/Brand: ${clientName}
- Link Google Drive: ${driveLink}
- Kode/Tier Member: ${tierCode || 'Klien Baru'}
- Catatan Brief: ${briefNotes || '-'}
Mohon dicek dan dikonfirmasi waktu pengerjaannya.`;

    const url = SITE_CONFIG.getWhatsAppUrl(message);
    window.open(url, '_blank');
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0B0D17] border border-white/20 p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8C72FF] to-[#70B9FE] flex items-center justify-center text-white shadow-lg shadow-[#8C72FF]/20">
            <UploadCloud className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Jalur Kilat Setor Raw File</h3>
            <p className="text-xs text-slate-400">Khusus klien & kreator KenaCut Studio</p>
          </div>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold text-white">Bahan Mentah Terkirim!</h4>
            <p className="text-xs text-slate-300 max-w-xs mx-auto">
              Tim editor KenaCut akan segera memeriksa file & briefing di Google Drive Anda.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Nama Kamu / Nama Brand *
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Amanda (Brand Skincare)"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#8C72FF]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Link Google Drive / Dropbox *
              </label>
              <div className="relative">
                <Link2 className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                <input
                  type="url"
                  required
                  placeholder="https://drive.google.com/drive/folders/..."
                  value={driveLink}
                  onChange={(e) => setDriveLink(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#70B9FE]"
                />
              </div>
              <p className="text-[10px] text-slate-400 mt-1">
                Pastikan akses link diatur ke "Anyone with the link can view / editor".
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Tier Member (Opsional)
                </label>
                <input
                  type="text"
                  placeholder="Bronze / Gold / Platinum"
                  value={tierCode}
                  onChange={(e) => setTierCode(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#FFA99F]"
                />
              </div>
              <div className="flex flex-col justify-end">
                <div className="text-[10px] text-emerald-400 bg-emerald-950/30 p-2.5 rounded-xl border border-emerald-500/30 font-medium">
                  ✓ Member Gold ke atas langsung masuk antrean 24 jam.
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Instruksi Singkat / Referensi Hook
              </label>
              <textarea
                rows="3"
                placeholder="Misal: Buat hook cepat di detik ke-2, tambahkan subtitle karaoke neon dan SFX whoosh."
                value={briefNotes}
                onChange={(e) => setBriefNotes(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#8C72FF]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-[#8C72FF] via-[#70B9FE] to-[#FFA99F] hover:opacity-95 transition-all shadow-xl shadow-[#8C72FF]/20 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Kirim & Notifikasi Editor WhatsApp ({SITE_CONFIG.phoneNumber})</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
