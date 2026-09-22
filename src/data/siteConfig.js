export const SITE_CONFIG = {
  brandName: "KenaCut Studio",
  tagline: "Potong Bagian Bosan, Sisakan yang Menawan.",
  
  // Nomor Telepon & WhatsApp Utama
  phoneNumber: "083838682010",
  phoneFormatted: "+62 838-3868-2010",
  whatsappNumber: "6283838682010", // Format internasional tanpa simbol + atau 0 di depan
  
  // Link Media Sosial
  socials: {
    tiktok: "https://tiktok.com/@kenacut.studio",
    tiktokHandle: "@kenacut.studio",
    instagram: "https://instagram.com/kenacut.studio",
    instagramHandle: "@kenacut.studio",
    email: "contact@kenacutstudio.com"
  },
  
  // Helper generator URL WhatsApp
  getWhatsAppUrl: (customMessage = "") => {
    const base = "https://wa.me/6283838682010";
    if (!customMessage) return base;
    return `${base}?text=${encodeURIComponent(customMessage)}`;
  }
};
