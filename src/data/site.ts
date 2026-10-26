// Semua konten halaman ada di sini. Bagian bertanda CONTOH wajib diganti dengan data asli sebelum launch.

export const site = {
  // CONTOH: nama sementara. Ganti di sini saja, semua halaman ikut berubah.
  name: 'whitescale',
  title: 'whitescale | Best Software Solutions for Your Businesses',
  description:
    'Mitra teknologi tepercaya untuk transformasi digital Anda. Whitescale menyediakan layanan custom software, website, & aplikasi mobile dengan standar terbaik.',
  // CONTOH: ganti dengan nomor & email asli.
  whatsapp: '085725082898',
  whatsappLabel: '0857 2508 2898',
  email: 'whitescaleapps@gmail.com',
  // CONTOH: ganti dengan alamat asli.
  address: {
    street: 'Rungkut',
    city: 'Surabaya, Indonesia',
    hours: 'Senin–Jumat, 09.00–17.00 WIB',
    mapUrl: 'https://maps.google.com/?q=Surabaya',
  },
  social: [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
    { label: 'GitHub', href: 'https://github.com/' },
  ],
};

export const waLink = (text: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { label: 'Karya', href: '/karya' },
  { label: 'Layanan', href: '/layanan' },
  { label: 'Proses', href: '/proses' },
  { label: 'Harga', href: '/harga' },
  { label: 'Kontak', href: '/kontak' },
];

// CONTOH: harga dan durasi perkiraan.
export const facts = [
  { label: 'Website mulai', value: 'Rp 4 jt' },
  { label: 'Website selesai', value: '2–3 minggu' },
  { label: 'Garansi bug', value: '3 bulan' },
  { label: 'Source code', value: '100% milikmu' },
];

// Nama harus sama persis dengan judul ikon di paket simple-icons.
export const stack = ['Next.js', 'React', 'Vue.js', 'Astro', 'Laravel', 'Flutter', 'Tailwind CSS', 'PostgreSQL', 'Supabase', 'Firebase', 'Docker', 'Vercel', 'Figma'];

export type IconName = 'globe' | 'phone' | 'layers' | 'spark' | 'chat' | 'pen' | 'code' | 'rocket' | 'shield' | 'chart' | 'cart' | 'bolt';

export const services = [
  {
    title: 'Website',
    icon: 'globe',
    tag: 'Web',
    text: 'Company profile, landing page, dan toko online yang cepat, rapi di HP, dan mudah ditemukan di Google.',
    items: [
      ['Company profile', 'Wajah bisnismu di Google, rapi di HP dan laptop.'],
      ['Landing page', 'Satu halaman untuk satu kampanye, dibuat untuk konversi.'],
      ['Toko online', 'Katalog, keranjang, ongkir, dan pembayaran lokal.'],
      ['Blog & CMS', 'Kamu mengubah konten sendiri tanpa menyentuh kode.'],
      ['SEO teknis', 'Struktur, kecepatan, dan skor Lighthouse 90+.'],
      ['Hosting & domain', 'Server, domain, dan SSL kami bereskan.'],
    ],
  },
  {
    title: 'Aplikasi mobile',
    icon: 'phone',
    tag: 'Mobile',
    text: 'Aplikasi Android dan iOS dari satu kode, lengkap dengan login, notifikasi, dan pembayaran.',
    items: [
      ['Android & iOS', 'Satu kode Flutter untuk dua platform.'],
      ['Login & akun', 'Daftar dengan nomor HP, email, atau Google.'],
      ['Notifikasi', 'Pesan langsung ke HP pelanggan di saat yang tepat.'],
      ['Pembayaran', 'QRIS, virtual account, dan e-wallet.'],
      ['Mode offline', 'Tetap jalan untuk tim lapangan tanpa sinyal.'],
      ['Rilis ke store', 'Kami urus Play Store dan App Store sampai tayang.'],
    ],
  },
  {
    title: 'Software custom',
    icon: 'layers',
    tag: 'Sistem',
    text: 'ERP, inventori, HR, dan dashboard yang mengikuti cara kerja bisnismu, bukan sebaliknya.',
    items: [
      ['ERP & inventori', 'Stok, pembelian, dan penjualan di satu sistem.'],
      ['HR & penggajian', 'Absensi, cuti, lembur, sampai slip gaji.'],
      ['Dashboard', 'Angka penting bisnis dalam satu layar untuk manajemen.'],
      ['Integrasi', 'Menyambungkan sistem lama, marketplace, dan akuntansi.'],
      ['Hak akses', 'Setiap divisi hanya melihat yang perlu dilihat.'],
      ['Jejak audit', 'Setiap perubahan data tercatat siapa dan kapan.'],
    ],
  },
  {
    title: 'Produk digital',
    icon: 'spark',
    tag: 'Produk',
    text: 'Riset, desain UI/UX, fitur AI, dan maintenance supaya produkmu terus relevan setelah rilis.',
    items: [
      ['Riset UX', 'Wawancara pengguna sebelum menggambar layar.'],
      ['Desain UI', 'Tampilan yang konsisten dalam satu design system.'],
      ['Prototipe', 'Alur yang bisa diklik di Figma untuk diuji dulu.'],
      ['Fitur AI', 'Chatbot, pencarian pintar, dan ringkasan otomatis.'],
      ['Maintenance', 'Update keamanan dan monitoring setiap bulan.'],
      ['Audit aplikasi', 'Laporan tertulis untuk aplikasi buatan vendor lain.'],
    ],
  },
] as const satisfies readonly { title: string; icon: IconName; tag: string; text: string; items: readonly (readonly [string, string])[] }[];

// CONTOH: proyek fiktif agar desain terlihat penuh. Ganti dengan portofolio asli sebelum launch.
export type Project = {
  name: string;
  year: number;
  kind: 'web' | 'mobile' | 'system';
  tone: 'paper' | 'lilac' | 'purple' | 'ink' | 'sand' | 'sky';
  headline: string;
  summary: string;
  rows: [string, string][];
};

export const projects: Project[] = [
  { name: 'Kopi Tepi Kali', year: 2026, kind: 'web', tone: 'sand', headline: 'seduh di tepi kali', summary: 'Website kedai kopi dengan menu dan reservasi meja online.', rows: [['Menu', '24 item'], ['Reservasi', 'online']] },
  { name: 'Gudang Sinar', year: 2026, kind: 'system', tone: 'paper', headline: 'Stok hari ini', summary: 'Sistem inventori untuk tiga gudang bahan bangunan.', rows: [['Semen 50 kg', '1.240 sak'], ['Besi 10 mm', '860 btg'], ['Cat tembok', '312 klg']] },
  { name: 'Antar Kilat', year: 2025, kind: 'mobile', tone: 'purple', headline: 'Paket kamu sedang diantar', summary: 'Aplikasi kurir dengan pelacakan paket secara langsung.', rows: [['Kurir', 'Rudi'], ['Tiba', '14.20']] },
  { name: 'Klinik Sehat Sentosa', year: 2025, kind: 'web', tone: 'sky', headline: 'janji temu tanpa antre', summary: 'Website klinik dengan jadwal dokter dan booking janji temu.', rows: [['Dokter umum', '08.00–20.00'], ['Dokter gigi', '10.00–17.00']] },
  { name: 'Absen Pro', year: 2025, kind: 'mobile', tone: 'ink', headline: 'Masuk 07.58', summary: 'Aplikasi absensi berbasis lokasi untuk tim lapangan.', rows: [['Lokasi', 'Kantor pusat'], ['Shift', 'Pagi']] },
  { name: 'Koperasi Maju', year: 2025, kind: 'system', tone: 'lilac', headline: 'Simpanan anggota', summary: 'Sistem simpan pinjam untuk koperasi dengan 900 anggota.', rows: [['Pokok', 'Rp 48.500.000'], ['Wajib', 'Rp 126.300.000'], ['Sukarela', 'Rp 73.900.000']] },
  { name: 'Batik Larasati', year: 2024, kind: 'web', tone: 'paper', headline: 'tulis tangan, sejak 1987', summary: 'Toko online batik tulis dengan pengiriman ke seluruh Indonesia.', rows: [['Koleksi', '86 motif'], ['Kirim', 'seluruh Indonesia']] },
  { name: 'Les Privat Cerdas', year: 2024, kind: 'mobile', tone: 'lilac', headline: 'Jadwal minggu ini', summary: 'Aplikasi jadwal les dan laporan belajar untuk orang tua.', rows: [['Matematika', 'Sel 16.00'], ['Fisika', 'Kam 16.00']] },
  { name: 'Armada Logistik', year: 2024, kind: 'system', tone: 'ink', headline: 'Truk di jalan', summary: 'Dashboard armada truk dengan posisi dan jadwal kirim.', rows: [['B 9123 KX', 'Semarang'], ['L 8810 UA', 'Malang'], ['W 7342 NB', 'Kediri']] },
];

export const kindLabel = { web: 'Website', mobile: 'Aplikasi mobile', system: 'Software custom' } as const;

export const process = [
  { title: 'Konsultasi', when: 'Minggu 1', icon: 'chat', text: 'Kita bahas masalah bisnismu, bukan fitur. Hasilnya dokumen ruang lingkup dan harga tetap. Gratis.' },
  { title: 'Desain', when: 'Minggu 1–3', icon: 'pen', text: 'Alur dan tampilan dibuat di Figma sampai bisa diklik. Revisi sebelum satu baris kode ditulis.' },
  { title: 'Development', when: 'Sprint 2 minggu', icon: 'code', text: 'Setiap akhir sprint ada versi yang bisa kamu coba sendiri, jadi tidak ada kejutan di akhir.' },
  { title: 'Rilis & rawat', when: '3 bulan garansi', icon: 'rocket', text: 'Kami urus server dan store. Source code diserahkan penuh, bug diperbaiki gratis tiga bulan.' },
] as const satisfies readonly { title: string; when: string; icon: IconName; text: string }[];

// CONTOH: harga perkiraan. Sesuaikan dengan harga asli.
export const scales = [
  { label: 'Website', price: 'Rp 4 jt', time: '2–3 minggu', includes: 'Desain custom, SEO dasar, domain dan hosting tahun pertama.' },
  { label: 'Web app', price: 'Rp 20 jt', time: '4–6 minggu', includes: 'Sistem booking, portal member, atau dashboard internal dengan panel admin.' },
  { label: 'Aplikasi mobile', price: 'Rp 35 jt', time: '6–8 minggu', includes: 'Android dan iOS dengan login, notifikasi, pembayaran, dan panel admin.' },
  { label: 'Sistem custom', price: 'Rp 50 jt', time: '8–12 minggu', includes: 'ERP, inventori multi-gudang, atau HR dan penggajian untuk ratusan karyawan.' },
];

export const faqs = [
  { q: 'Berapa biaya membuat website atau aplikasi?', a: 'Website mulai dari Rp 4 juta, aplikasi dan sistem custom tergantung ruang lingkupnya. Setelah konsultasi kamu menerima harga tetap tertulis, jadi tidak ada biaya tambahan diam-diam.' },
  { q: 'Berapa lama pengerjaannya?', a: 'Website 2–3 minggu. Web app 4-6 minggu. Aplikasi mobile 6–8 minggu. Sistem custom 8–12 minggu. Jadwal pasti ada di dokumen ruang lingkup.' },
  { q: 'Apakah source code jadi milik saya?', a: 'Ya. Source code, akun server, dan akun Play Store atau App Store atas nama bisnismu. Kamu bebas melanjutkan dengan tim lain kapan saja.' },
  { q: 'Bagaimana sistem pembayarannya?', a: 'Dibagi per tahap: 30% di awal, 40% setelah desain disetujui, dan 30% saat rilis. Untuk proyek besar bisa per sprint.' },
  { q: 'Bagaimana setelah aplikasinya rilis?', a: 'Tiga bulan pertama perbaikan bug gratis. Setelah itu ada paket maintenance bulanan untuk update keamanan, monitoring, dan fitur baru.' },
  { q: 'Saya belum punya konsep yang jelas. Bisa?', a: 'Bisa, dan itu yang paling sering terjadi. Konsultasi pertama gratis. Kami bantu memetakan masalah, memprioritaskan fitur, dan memulai dari versi terkecil yang berguna.' },
  { q: 'Bisa melanjutkan aplikasi buatan vendor lain?', a: 'Bisa. Kami audit kodenya dulu, lalu memberi laporan tertulis: apa yang bisa dipertahankan, apa yang perlu diperbaiki, dan berapa biayanya.' },
];
