import React, { useState } from 'react';
import { CRM_TIERS } from '../data/tiersData';
import { 
  Award, Sparkles, Check, Gift, Crown, ShieldAlert, 
  ExternalLink, ArrowRight, UserCheck, Flame, Image as ImageIcon
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CrmTiersSection({ onOpenOrderModal }) {
  const [selectedTierId, setSelectedTierId] = useState('bronze');
  const [showRealCardsModal, setShowRealCardsModal] = useState(false);
  const [simulatedOrders, setSimulatedOrders] = useState(1);

  const currentTier = CRM_TIERS.find(t => t.id === selectedTierId) || CRM_TIERS[0];

  // Calculate tier based on order slider
  const getTierByOrderCount = (count) => {
    if (count >= 45) return CRM_TIERS[4]; // Diamond
    if (count >= 25) return CRM_TIERS[3]; // Platinum
    if (count >= 12) return CRM_TIERS[2]; // Gold
    if (count >= 5) return CRM_TIERS[1];  // Silver
    return CRM_TIERS[0]; // Bronze
  };

  const handleSliderChange = (e) => {
    const val = parseInt(e.target.value);
    setSimulatedOrders(val);
    const matchedTier = getTierByOrderCount(val);
    setSelectedTierId(matchedTier.id);

    if (val === 45 || val === 25 || val === 12 || val === 5) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 }
      });
    }
  };

  return (
    <section id="crm-tiers" className="py-20 md:py-28 relative">
      {/* Aurora Ambient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#8C72FF]/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFA99F]/15 border border-[#FFA99F]/30 text-[#FFA99F] text-xs font-bold uppercase tracking-wider">
            <Crown className="w-3.5 h-3.5" />
            <span>Gamified CRM Loyalty System</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Makin Sering Order, <span className="text-gradient-aurora">Makin Prioritas</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Sistem kartu member eksklusif KenaCut Studio. Setiap repeat order mengumpulkan poin loyalitas untuk membuka antrean kilat, diskon retainer hingga 15%, dan dedicated editor pribadi.
          </p>
        </div>

        {/* Tier Selector Buttons (Bronze, Silver, Gold, Platinum, Diamond) */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-10">
          {CRM_TIERS.map((tier) => {
            const isSelected = tier.id === selectedTierId;
            return (
              <button
                key={tier.id}
                onClick={() => setSelectedTierId(tier.id)}
                className={`px-4 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-white text-slate-950 shadow-xl shadow-white/20 scale-105 border-2 border-white'
                    : 'bg-white/[0.05] text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                <Award className={`w-4 h-4 ${isSelected ? 'text-[#8C72FF]' : 'text-slate-400'}`} />
                <span>{tier.name}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  isSelected ? 'bg-slate-900 text-white' : 'bg-white/10 text-slate-300'
                }`}>
                  {tier.orderThreshold}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Grid: Visual CRM Card Replicas & Perks Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Interactive Digital CRM Card (High Fidelity replica of 5.png, 6.png, 7.png) */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* The Physical Card Container */}
            <div 
              className="w-full max-w-md aspect-[1.7/1] rounded-[28px] p-6 sm:p-7 relative shadow-2xl transition-all duration-500 hover:scale-[1.02] border-2 flex flex-col justify-between overflow-hidden"
              style={{
                background: currentTier.colorScheme.cardBg,
                color: currentTier.colorScheme.textColor,
                borderColor: 'rgba(255, 255, 255, 0.4)',
                boxShadow: `0 20px 50px -10px ${currentTier.colorScheme.borderGlow}`
              }}
            >
              {/* Header: Tier Name & Scissors Brand Mark */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-none">
                    {currentTier.name}
                  </h3>
                  <div className="mt-3">
                    <div className="text-lg sm:text-xl font-bold tracking-tight">
                      {currentTier.clientName}
                    </div>
                    <div className="text-xs sm:text-sm font-medium opacity-80 font-mono">
                      {currentTier.phone}
                    </div>
                  </div>
                </div>

                {/* Scissor Vector Mark (Identical to 5.png, 6.png, 7.png) */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 relative flex items-center justify-center">
                  <img 
                    src="/logo.jpg" 
                    alt="KenaCut Scissors" 
                    className="w-full h-full object-contain filter drop-shadow-md rounded-xl"
                  />
                </div>
              </div>

              {/* Middle / Bottom: Points Pill & Rewards */}
              <div className="space-y-2 mt-2">
                <div className="flex flex-wrap items-center gap-3">
                  {/* Points Pill */}
                  <div className="px-3.5 py-1.5 rounded-xl bg-white shadow-md font-black text-sm sm:text-base tracking-tight flex items-center gap-1"
                       style={{ color: currentTier.colorScheme.accentPillText }}>
                    <span>{currentTier.minPoints} Point(s)</span>
                  </div>

                  {/* Fav Need */}
                  <div className="text-[11px] sm:text-xs font-semibold leading-tight">
                    <span className="opacity-70 block text-[10px]">Fav Need(s):</span>
                    <span>{currentTier.favNeed}</span>
                  </div>
                </div>

                {/* Active Rewards & Validity */}
                <div className="pt-2 border-t border-black/10 flex items-end justify-between text-[10px] sm:text-[11px]">
                  <div>
                    <span className="opacity-70 block text-[9px] font-bold uppercase">Active Reward(s):</span>
                    <span className="font-bold">{currentTier.activeReward}</span>
                  </div>
                  <div className="opacity-70 font-mono text-[10px] shrink-0">
                    Valid Until {currentTier.validUntil}
                  </div>
                </div>
              </div>

            </div>

            {/* Sub-note and Link to Original Design Sheets (5.png, 6.png, 7.png) */}
            <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1 text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-[#FFA99F]" />
                <span>Format Kartu Resmi KenaCut CRM</span>
              </span>
              <button
                onClick={() => setShowRealCardsModal(true)}
                className="text-[#70B9FE] hover:underline font-semibold flex items-center gap-1"
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Lihat Sample Gambar (5, 6, 7.png)</span>
              </button>
            </div>

          </div>

          {/* Right Column: Perks List & Interactive Order Tier Simulator */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Tier Overview Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/15 space-y-5">
              
              <div className="flex items-center justify-between">
                <div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${currentTier.colorScheme.badgeBg}`}>
                    {currentTier.badge}
                  </span>
                  <h4 className="text-xl font-extrabold text-white mt-2">
                    Keuntungan Eksklusif {currentTier.name}
                  </h4>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">Target Order</div>
                  <div className="text-lg font-black text-[#70B9FE]">{currentTier.orderThreshold}</div>
                </div>
              </div>

              {/* Perks List */}
              <ul className="space-y-3 pt-2">
                {currentTier.perks.map((perk, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-[#8C72FF]/20 border border-[#8C72FF]/50 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#8C72FF]" />
                    </div>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              {/* Order Simulator Slider */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-300">Simulasi Jumlah Order Kamu:</span>
                  <span className="font-extrabold text-[#FFA99F] text-sm">{simulatedOrders}x Order</span>
                </div>

                <input 
                  type="range" 
                  min="1" 
                  max="50" 
                  value={simulatedOrders}
                  onChange={handleSliderChange}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#8C72FF]"
                />

                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>1x (Bronze)</span>
                  <span>5x (Silver)</span>
                  <span>12x (Gold)</span>
                  <span>25x (Platinum)</span>
                  <span>45x+ (Diamond)</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenOrderModal}
                  className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-[#8C72FF] via-[#70B9FE] to-[#FFA99F] hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-[#8C72FF]/20"
                >
                  <Gift className="w-4 h-4" />
                  <span>Mulai Order & Kumpulkan Poin Tier Ini</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Modal: View Real Card Images (5.png, 6.png, 7.png) */}
      {showRealCardsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0B0D17] border border-white/20 rounded-3xl max-w-4xl w-full p-6 space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-[#70B9FE]" />
                <h3 className="text-lg font-bold text-white">Sample CRM Cards Asli (5.png, 6.png, 7.png)</h3>
              </div>
              <button 
                onClick={() => setShowRealCardsModal(false)}
                className="px-3 py-1 text-xs font-bold bg-white/10 hover:bg-white/20 text-white rounded-full"
              >
                Tutup ✕
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-[#FFA99F] mb-2">1. Bronze & Silver Tier Cards (5.png)</h4>
                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <img src="/5.png" alt="Bronze and Silver CRM Cards" className="w-full h-auto object-cover" />
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#FACC15] mb-2">2. Gold & Platinum Tier Cards (6.png)</h4>
                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <img src="/6.png" alt="Gold and Platinum CRM Cards" className="w-full h-auto object-cover" />
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#38BDF8] mb-2">3. Diamond Tier Card (7.png)</h4>
                <div className="rounded-2xl overflow-hidden border border-white/10">
                  <img src="/7.png" alt="Diamond CRM Card" className="w-full h-auto object-cover" />
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
