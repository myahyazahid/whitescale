# whitescale | company profile

Website company profile whitescale: Beranda, Karya, Layanan, Proses, Harga, dan Kontak, masing-masing di halamannya sendiri. Dibangun dengan Astro + Tailwind CSS v4, font Inter + JetBrains Mono, smooth scroll dengan Lenis. Tidak butuh backend: hasil build berupa HTML statis.

## Menjalankan

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # hasil ke dist/
npm run preview   # cek hasil build
```

## Mengubah konten

Semua teks, harga, portofolio, FAQ, dan kontak ada di [src/data/site.ts](src/data/site.ts). Nama brand juga diatur di sana (`site.name`), jadi saat nama final sudah ada cukup ganti satu baris. Bagian bertanda `CONTOH` wajib diganti sebelum launch:

- nomor WhatsApp, email, alamat
- harga paket website dan skala proyek custom
- daftar proyek di halaman Karya (saat ini proyek fiktif)
- link sosial media
- domain di [astro.config.mjs](astro.config.mjs) (`site`)

## Struktur

```
src/
  data/site.ts         konten
  pages/               satu file per halaman (index, karya, layanan, proses, harga, kontak)
  layouts/Base.astro   <head>, SEO, navbar, footer
  components/          section yang dipakai halaman-halaman di atas
  scripts/motion.ts    reveal saat scroll, Lenis
  styles/global.css    token warna, tipografi, tombol, dan bingkai
public/og.png          gambar preview saat link dibagikan (buat ulang setelah nama final)
```

## Deploy

Netlify / Cloudflare Pages / Vercel: sambungkan repo, build command `npm run build`, output `dist`.
