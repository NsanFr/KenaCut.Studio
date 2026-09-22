 # PRODUCT REQUIREMENT DOCUMENT (PRD)
Project: KenaCut Studio Landing Page
Version: 1.0.0
Author: KenaCut Studio Team
Status: Ready for Implementation

--------------------------------------------------------------------------------
1. OVERVIEW & OBJECTIVES
--------------------------------------------------------------------------------
1.1 Product Summary
Landing page resmi untuk KenaCut Studio, sebuah agensi mikro jasa pascaproduksi
video pendek (TikTok, Reels, Shorts) dan desain post media sosial.

1.2 Primary Goals
- Mengonversi calon klien baru (kreator konten & brand lokal) via hook visual instan.
- Mendemonstrasikan transparansi alur kerja produksi (Pipeline).
- Menampilkan portofolio riil non-AI slop.
- Mengedukasi sistem CRM berbasis rank loyalitas (Bronze - Diamond).
- Membuka jalur interaksi cepat via multi-social hub.

--------------------------------------------------------------------------------
2. DESIGN SYSTEM & VISUAL SPECIFICATION (ANTIGRAVITY AURORA)
--------------------------------------------------------------------------------
2.1 Color Palette (Mesh Aurora Gradient)
- Primary Aura: #8C72FF (Soft Electric Violet)
- Secondary Sky: #70B9FE (Pastel Sky Blue)
- Accent Flare: #FFA99F (Warm Peach/Coral Glow)
- Fresh Highlight: #F3FFAA (Subtle Mint Lemon Glow)
- Background Dark: #0B0D17 (Modern Charcoal Canvas)
- Background Light: #F8FAFC (Glass Light)
- Card Surfaces: rgba(255, 255, 255, 0.08) with backdrop-filter: blur(20px)
- Border Color: rgba(255, 255, 255, 0.18)

2.2 Typography
- Primary Font: Montserrat (Google Fonts)
- Headings: Montserrat 700 / 800 (Bold / ExtraBold)
- Body & Labels: Montserrat 400 / 500 (Regular / Medium)

2.3 Animation & Motion Principles
- Antigravity / Floating: Infinite keyframe translate-y (-6px to 6px) with smooth ease-in-out.
- Micro-interactions: Glow on hover, subtle 3D tilt on card components.
- Responsive Viewport: Fluid responsive scaling across mobile, tablet, and widescreen.

--------------------------------------------------------------------------------
3. DETAILED FEATURE SPECIFICATION
--------------------------------------------------------------------------------

3.1 SECTION 1: HERO SECTION INTERAKTIF
- Live Badge: Pulsing status pill "KenaCut Studio • Next-Gen Post-Production".
- Headline: "Potong Bagian Bosan, Sisakan yang Menawan."
- Subheadline: "Transformasi footage mentah jadi konten video vertikal 15-60 detik dengan pacing dinamis dan hook ramah algoritma."
- Primary CTA: Button "Klaim Kuota Edit Sekarang" dengan glow aurora.
- Secondary CTA: Outline glass button "Lihat Alur Kerja".
- Floating Antigravity Metric Cards:
  * Card A: "85+ Klien Aktif"
  * Card B: "Render Cepat 24 Jam"
  * Card C: "4.9/5.0 Client Satisfaction"

3.2 SECTION 2: SHOWCASE PORTFOLIO (NON-AI SLOP)
- Tab Filter: "Semua", "TikTok Hook", "Reels Edukasi", "Carousel Post".
- Display Container: Phone frame mockup (rasio 9:16) interaktif.
- Metadata per Card:
  * Visual: Pratinjau layout timeline editing riil (Premiere / CapCut style).
  * Video Title & Kategori.
  * Tag Metrik Kinerja: Total Organic Views, Retention Rate %, Duration.
  * Hover / Click State: Play video preview instan.

3.3 SECTION 3: WORKFLOW PIPELINE INTERAKTIF
- Alur 4 Langkah Terstruktur:
  1. Drop Bahan Mentah: Klien kirim link Google Drive materi video dan instruksi.
  2. Rough Cut & Hooking: Pemilihan momen krusial, pembuangan jeda kosong (silence removal).
  3. Pacing, Subtitle & Audio: Penambahan animasi teks, efek suara dinamis, dan color grading.
  4. QC & Final Render: Verifikasi batas revisi, rendering format 9:16 siap posting.
- Progress Indicator: Garis gradasi neon yang menyala saat discroll.

3.4 SECTION 4: GAMIFIED CRM MEMBER TIERS 
- Tampilan 5 Level Interaktif (Pill Switcher / Card Slider):
  * Bronze (1x Order): Antrean reguler + voucher diskon 10% next order.
  * Silver (5x Order): Bonus 1x kuota revisi minor + akses audio preset.
  * Gold (12x Order): Antrean render express 24 jam + diskon 10% flat.
  * Platinum (25x Order): Diskon retainer 15% + gratis custom thumbnail.
  * Diamond (45x+ Order): Dedicated editor pribadi + gratis sesi konsep bulanan.

3.5 SECTION 5: FLOATING MULTI-SOCIAL ACTION HUB
- Format: Floating bottom dock (fixed viewport bottom-center) ala iOS Island.
- Action Buttons:
  * WhatsApp Business: Quick quote / konsultasi order.
  * TikTok: Akses channel resmi portofolio video.
  * Instagram: Galeri visual carousel & testimonial story.
  * Upload Drive: Jalur kilat setor raw file klien loyal.
- Interaction: Expandable label tooltip saat disentuh/dihover.

--------------------------------------------------------------------------------
4. TECHNICAL REQUIREMENTS
--------------------------------------------------------------------------------
4.1 Tech Stack Recommendation
- Html, css, javascript
- Framework: Tailwind CSS
- Animation: Framer Motion
- Icons: Lucide React

4.2 Mobile Responsiveness
- Mobile first break point: < 768px.
- Portofolio dan Tier Cards menggunakan horizontal swipe touch.
- Action dock tetap berada di area jangkauan jempol (min touch target: 48x48px).

4.3 Performance & Accessibility
- Lighthouse score target: >= 90 untuk Performance & Accessibility.
- GPU-accelerated motion (will-change: transform).
- WCAG AA contrast ratio compliance pada elemen teks di atas kaca transparan.