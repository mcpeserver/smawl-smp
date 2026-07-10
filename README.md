# Smawl SMP - Premium & Modern Minecraft Landing Page

Landing Page premium, responsif, berkinerja tinggi, dan SEO-friendly untuk server Minecraft **Smawl SMP** (Survival Java & Bedrock). Dikembangkan menggunakan teknologi modern seperti React 19, Vite, Tailwind CSS v4, dan Motion.

## 🌟 Fitur Utama

- **Desain Modern & Imersif**: Menggunakan estetika game AAA modern dengan skema warna Biru Cyan, Diamond Blue, dan ornamen glassmorphic.
- **Dukungan Crossplay Penuh**: Menyoroti konektivitas Java & Bedrock dengan IP yang sama (`play.smawlsmp.my.id`) dan Port (`25604`) dengan fitur salin instan.
- **Data Developer Dinamis**: Mengambil data jajaran developer secara dinamis dari API eksternal jarak jauh tanpa pencampuran informasi internal server.
- **Aturan & Regulasi Interaktif**: Timeline modern yang memuat server rules dan peringatan warning yang informatif.
- **Peluang Rank Gratis**: Bagian kreator yang merinci rute mendapatkan kedudukan VIP secara cuma-cuma melalui TikTok, YouTube, dan event Builder.
- **Optimasi Performa & SEO**: Menggunakan semantic HTML5, canonical link, OpenGraph tags, JSON-LD Schema (GameServer, Organization, WebSite), favicon SVG inline, dan performa pemuatan super cepat.

---

## 🛠️ Stack Teknologi

- **Library Utama**: [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 6](https://vitejs.dev/)
- **Utility Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animasi & Interaksi**: [Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📂 Struktur Folder Proyek

```bash
├── vercel.json             # Konfigurasi rewrite & clean URL untuk Vercel
├── sitemap.xml             # Sitemap SEO ramah crawler
├── robots.txt              # Instruksi perayapan mesin telusur
├── manifest.webmanifest    # Manifest aplikasi web progresif (PWA)
├── metadata.json           # Informasi applet sistem
├── LICENSE                 # Lisensi perangkat lunak MIT
├── index.html              # Template induk HTML dengan tag SEO & JSON-LD
├── src/
│   ├── main.tsx            # Titik masuk utama aplikasi React
│   ├── index.css           # Konfigurasi Tailwind v4 & keyframes animasi
│   ├── types.ts            # Tipe TypeScript skema developer API
│   ├── App.tsx             # Penggabung tata letak seluruh bagian halaman
│   └── components/         # Komponen UI modular
│       ├── Logo.tsx               # Logo SVG Minecraft interaktif kustom
│       ├── Header.tsx             # Navbar transparan responsif dengan sticky effect
│       ├── Hero.tsx               # Bagian utama cinematic beranimasi
│       ├── QuickInfo.tsx          # Kartu ringkasan edisi permainan
│       ├── ServerInfo.tsx         # Kartu koneksi IP/Port lengkap fungsi copy
│       ├── KeepInventoryCard.tsx  # Informasi khusus zona Nether ekstrem
│       ├── ServerFeatures.tsx     # Grid fitur permainan (GSit, Shop, dll.)
│       ├── ServerRules.tsx        # Aturan bermain timeline & aturan grup WA/Discord
│       ├── FreeRank.tsx           # Cara klaim rank gratis bagi kreator & builder
│       ├── StaffSection.tsx       # Grid jajaran admin/helper dengan avatar kustom
│       ├── RankPrices.tsx         # Daftar harga rank server & CTA Supporter
│       ├── ContactSection.tsx     # Kontak Sell Plugin & tautan link resmi
│       └── Toast.tsx              # Popup notifikasi menyalin kredensial IP
```

---

## 🚀 Cara Menjalankan Secara Lokal

### Prasyarat
Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) di komputer Anda.

1. **Instal dependensi proyek:**
   ```bash
   npm install
   ```

2. **Jalankan server pengembangan lokal:**
   ```bash
   npm run dev
   ```
   Buka browser di `http://localhost:3000` untuk melihat pratinjau landing page.

3. **Lakukan linter pemeriksaan kode:**
   ```bash
   npm run lint
   ```

4. **Kompilasi proyek untuk produksi:**
   ```bash
   npm run build
   ```
   Output build yang dioptimalkan akan berada di dalam folder `dist/`.

---

## ⚡ Deployment

Proyek ini telah dikonfigurasi penuh dan siap untuk diunggah langsung ke repositori GitHub Anda dan dideploy secara instan ke platform cloud terkemuka seperti **Vercel** atau **Netlify** dengan deteksi otomatis.

---

*Dikembangkan secara independen dan tidak berafiliasi dengan Mojang Studios.*
