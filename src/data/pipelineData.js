export const PIPELINE_STEPS = [
  {
    stepNumber: "01",
    title: "Drop Bahan Mentah",
    shortDesc: "Klien kirim link Google Drive materi video & brief instruksi.",
    detail: "Cukup upload rekaman mentah kamera / HP ke link drive bersama. Sertakan referensi tone atau biarkan tim KenaCut meracik hook terbaik.",
    icon: "UploadCloud",
    tag: "Input Instan",
    highlight: "Kirim link kapan saja 24/7",
    interactiveDemo: {
      type: "upload",
      demoTitle: "Google Drive Drop Simulator",
      status: "3 Raw Video Clips Received (4K 60fps)",
      fileSize: "1.2 GB Ready for Ingestion"
    }
  },
  {
    stepNumber: "02",
    title: "Rough Cut & Hooking",
    shortDesc: "Pemilihan momen krusial & pembuangan jeda kosong (silence removal).",
    detail: "Memangkas momen 'eee...', nafas panjang, dan filler words. Menemukan 3 detik pertama paling menyengat sebagai hook utama.",
    icon: "Scissors",
    tag: "Detik Krusial",
    highlight: "0% Dead Air, 100% Pacing Padat",
    interactiveDemo: {
      type: "cut",
      demoTitle: "Smart Silence Removal Preview",
      status: "12 Jeda Kosong Terpotong (-42s Footage)",
      pacingSpeed: "Pacing Ditingkatkan +250%"
    }
  },
  {
    stepNumber: "03",
    title: "Pacing, Subtitle & Audio",
    shortDesc: "Penambahan animasi teks kinetic, SFX dinamis & color grading.",
    detail: "Membangun visual retention dengan subtitle karaoke, zoom dinamis, efek transisi halus, dan background beat berlisensi komersial.",
    icon: "Sparkles",
    tag: "Dopamine Edit",
    highlight: "Multi-layer Sound & Subtitle Pop",
    interactiveDemo: {
      type: "fx",
      demoTitle: "Kinetic Layering Engine",
      status: "18 Sound FX + 4 Color LUTs Active",
      subtitleTrack: "Karaoke Word-by-Word Highlight"
    }
  },
  {
    stepNumber: "04",
    title: "QC & Final Render",
    shortDesc: "Verifikasi batas revisi, rendering format 9:16 siap posting.",
    detail: "Inspeksi ketat bit-rate, audio loudness standar TikTok/Instagram (-14 LUFS), dan pengiriman link hasil render resolusi tinggi.",
    icon: "CheckCircle2",
    tag: "Output Final",
    highlight: "Format 9:16 Ultra Crisp Siap Viral",
    interactiveDemo: {
      type: "render",
      demoTitle: "Export Quality Verification",
      status: "1080x1920 60fps MP4 (ProRes Quality)",
      slaTimer: "Render Selesai < 24 Jam"
    }
  }
];
