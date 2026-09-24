# ✂️ KenaCut Studio • Landing Page & Micro-Agency Platform

> **"Potong Bagian Bosan, Sisakan yang Menawan."**  
> *Next-Gen Video Post-Production & Vertical Video Editing Micro-Agency.*

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg?style=for-the-badge)](LICENSE)

---

## 📖 Tentang Projek

**KenaCut Studio** adalah platform web landing page modern untuk micro-agency post-production spesialis video pendek (TikTok, Instagram Reels, dan YouTube Shorts). Dirancang dengan estetika **Antigravity Aurora Glassmorphism**, landing page ini berfokus pada penyajian karya autentik non-AI slop, transparansi alur kerja editing (*multi-track timeline*), sistem loyalti CRM berjenjang, dan kalkulator estimasi biaya instan.

---

## ✨ Fitur Utama

### 1. 🌓 Mode Terang & Gelap (Dark & Light Theme)
- Dukungan penuh tema gelap (*Cyberpunk Aurora*) dan tema terang (*Clean Glass Studio*).
- Menyimpan preferensi pengguna secara otomatis di `localStorage`.
- Tombol switch interaktif dengan animasi halus pada Navbar, Menu Mobile, dan Floating Dock.

### 2. 🌌 Dynamic Animated Aurora Mesh Background
- Latar belakang gradasi aurora dinamis (*Fluid Aurora Blobs*) yang bergerak lembut mengikuti spesifikasi desain PRD.
- Memadukan 4 palet warna signature:
  - **Aura Violet**: `#8C72FF`
  - **Electric Sky Blue**: `#70B9FE`
  - **Flare Pink/Coral**: `#FFA99F`
  - **Lemon Lime Glow**: `#F3FFAA`
- Dilengkapi lapisan tekstur halus *cinematic film grain* untuk sentuhan visual berkelas studio.

### 3. ✨ 60 FPS Cursor Spotlight Glow
- Efek pendaran cahaya multi-warna yang mengikuti pergerakan kursor mouse secara *smooth* menggunakan interpolasi linier (LERP) berbasis `requestAnimationFrame`.
- Menyinari kartu *glassmorphism* di sekitarnya saat dijelajahi pengunjung desktop.
- Dinonaktifkan otomatis di perangkat layar sentuh/mobile demi efisiensi baterai.

### 4. ✂️ Interactive Before/After Video Split Slider
- Fitur pembanding interaktif yang dapat digeser (*drag*) oleh pengunjung untuk melihat perbedaan nyata antara **Footage Mentah** (pucat, tanpa hook, datar) vs **Hasil KenaCut Polish** (color grading Rec.709, kinetic captions, sound design pop, retensi penonton +240%).

### 5. 📱 Showcase Portofolio Riil (9:16 Mockup)
- Galeri karya video vertikal dengan simulasi *phone canvas*, filter kategori (TikTok Hook, Reels Edukasi, Carousel Post), metrik retensi penonton, serta bedah blueprint track audio & video.

### 6. 🛠️ Workflow Pipeline Transparan (4 Tahap)
- Interaktif stepper dari setor bahan mentah, kurasi & rough cut, sound design & kinetic typography, hingga final export 4K 60 FPS.

### 7. 👑 Sistem Gamified Member CRM
- Konsep kartu member bertingkat (*Bronze, Silver, Gold, Platinum, Diamond*) yang membuka keuntungan eksklusif seperti antrean prioritas 24 jam dan diskon retainer bulanan.

### 8. 🧮 Kalkulator Estimasi Biaya & Add-ons
- Estimator harga transparan real-time berdasarkan format konten, jumlah video, kecepatan pengerjaan (*Standard vs Express 24 Jam*), serta add-on thumbnail.
- Tombol order langsung memformat pesan WhatsApp lengkap dan siap kirim.

### 9. 🚀 Floating Multi-Social Action Dock
- Dock mengambang ala *iOS Dynamic Island* untuk akses cepat ke WhatsApp Business, TikTok Resmi, Galeri Instagram, dan jalur kilat setor Google Drive.

---

## 🛠️ Tech Stack & Pustaka

- **Frontend Framework**: [React 18](https://react.dev/)
- **Bundler & Dev Server**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animasi & Interaksi**: [Framer Motion](https://www.framer.com/motion/) & CSS3 Keyframes
- **Special Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Typography**: [Montserrat (Google Fonts)](https://fonts.google.com/specimen/Montserrat)

---

## 📁 Struktur Direktori

```text
Profile Website/
├── public/
│   ├── logo.jpg               # Logo resmi KenaCut Studio
│   └── ...                    # Aset statis pendukung
├── src/
│   ├── components/            # Komponen modular UI
│   │   ├── Navbar.jsx         # Header & navigasi dengan theme toggle
│   │   ├── ThemeToggle.jsx    # Tombol switch light/dark mode
│   │   ├── DynamicAuroraBg.jsx# Animated aurora mesh & film grain
│   │   ├── CursorSpotlight.jsx# 60fps cursor follower spotlight
│   │   ├── HeroSection.jsx    # Hero section & interactive phone mockup
│   │   ├── BeforeAfterSlider.jsx # Interactive split comparison slider
│   │   ├── PortfolioSection.jsx # Grid showcase karya & filter
│   │   ├── PipelineSection.jsx  # 4 tahapan alur kerja editing
│   │   ├── CrmTiersSection.jsx  # Simulasi kartu member CRM
│   │   ├── PricingCalculator.jsx# Kalkulator order transparan
│   │   ├── FloatingSocialDock.jsx # Dock melayang aksi cepat
│   │   ├── DriveUploadModal.jsx # Modal setor link Google Drive
│   │   ├── PortfolioModal.jsx # Modal detail timeline video
│   │   ├── OrderModal.jsx     # Modal klaim kuota edit
│   │   └── Footer.jsx         # Footer & garansi non-AI slop
│   ├── context/
│   │   └── ThemeContext.jsx   # State management tema gelap/terang
│   ├── data/                  # Data konfigurasi & mock konten
│   │   ├── siteConfig.js      # Kontak, nomor WhatsApp, sosial media
│   │   ├── portfolioData.js   # Daftar portofolio video & metrik
│   │   ├── pipelineData.js    # Data tahapan alur kerja
│   │   └── crmTiersData.js    # Data level member & reward
│   ├── styles/
│   │   └── index.css          # Tailwind base, utilities & aurora keyframes
│   ├── App.jsx                # Komponen root aplikasi
│   └── main.jsx               # Entry point React
├── index.html                 # Template HTML utama
├── tailwind.config.js         # Konfigurasi kustom tema Tailwind
├── vite.config.js             # Konfigurasi Vite
└── package.json               # Dependensi & script proyek
```

---

## 🚀 Memulai (Local Development)

### 1. Prasyarat
Pastikan Anda telah menginstal:
- [Node.js](https://nodejs.org/) (versi 18.x atau lebih baru)
- `npm` atau `yarn` atau `pnpm`

### 2. Instalasi Dependensi
Clone repository dan jalankan instalasi paket:
```bash
git clone https://github.com/NsanFr/KenaCut.Studio.git
cd KenaCut.Studio
npm install
```

### 3. Menjalankan Server Pengembangan
```bash
npm run dev
```
Buka browser di `http://localhost:5173/` untuk melihat website.

### 4. Build untuk Produksi
```bash
npm run build
```
File siap saji (*production bundle*) akan dihasilkan di folder `dist/`.

---

## 📞 Kontak & Informasi Bisnis

- **Brand**: KenaCut Studio
- **WhatsApp**: [+62 838-3868-2010](https://wa.me/6283838682010)
- **TikTok**: [@kenacut.studio](https://tiktok.com/@kenacut.studio)
- **Instagram**: [@kenacut.studio](https://instagram.com/kenacut.studio)

---

## 📄 Lisensi
Projek ini dilindungi di bawah lisensi MIT. Silakan gunakan dan sesuaikan untuk portofolio atau keperluan kreatif Anda.
