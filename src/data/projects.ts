import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'studymate',
    title: 'StudyMate',
    subtitle: 'Student Productivity Platform',
    category: 'app',
    categoryLabel: 'Mobile Application',
    role: 'Developer · UI/UX Designer',
    year: '2025',
    description: 'An offline-first productivity application designed for students to manage schedules, tasks, notes, habits and study resources with zero cloud dependency and optional encrypted Google Drive backup.',
    technologies: ['Flutter', 'Dart', 'SQLite', 'Google Drive API', 'Provider State', 'Local Notifications'],
    features: [
      'Academic Schedule & Timetable',
      'Task & Assignment Priority Matrix',
      'Markdown Academic Notes & Formulas',
      'Resource & Paper Bookmarking',
      'Customizable Pomodoro Focus Timer',
      'Habit & Revision Consistency Tracker',
      'Encrypted Backup & Restore to Google Drive'
    ],
    featured: true,
    accentColor: '#06B6D4',
    metrics: [
      { label: 'Startup Time', value: '< 280ms' },
      { label: 'Architecture', value: 'Offline-First' },
      { label: 'Storage Engine', value: 'SQLite Local' },
      { label: 'RAM Footprint', value: '~48 MB' }
    ],
    caseStudy: {
      overview: 'StudyMate lahir dari pengalaman langsung menghadapi fragmentasi alat belajar mahasiswa. Kebanyakan aplikasi komersial mewajibkan koneksi internet aktif, memuat iklan yang mengganggu konsentrasi, atau memisahkan jadwal kuliah, catatan, dan timer fokus ke aplikasi yang berbeda-beda. StudyMate menyatukan seluruh alur belajar harian dalam satu ekosistem native berkecepatan tinggi.',
      problem: 'Mahasiswa sering menghadapi kendala jaringan internet tidak stabil di ruang kuliah atau kampus, kehilangan data jadwal ujian karena sinkronisasi gagal, dan terdistraksi oleh interface aplikasi yang padat konten promosi. Dibutuhkan alat yang 100% fungsional tanpa internet, ringan di perangkat entry-level, dan memiliki interface yang menenangkan.',
      approach: 'Pendekatan rekayasa StudyMate bertumpu pada filosofi "Local-First Architecture". Data pengguna disimpan dalam database relasional SQLite lokal dengan skema yang dinormalisasi. Antarmuka dirancang menggunakan sistem token warna dengan rasio kontras tinggi, typography terstruktur, dan transisi micro yang responsif.',
      design: 'Merancang design system mandiri yang mengutamakan visual hierarchy yang bersih. Tampilan dibagi menjadi 4 zona fungsional utama: Dashboard Hari Ini (jadwal & deadline terdekat), Focus Station (Pomodoro timer dengan ambient visualizer), Knowledge Vault (catatan & bookmark), serta Habit Ring (konsistensi belajar mingguan). Menghindari elemen visual berlebihan untuk menjaga daya tahan baterai.',
      development: 'Dibangun di atas Flutter SDK dan bahasa Dart dengan fokus pada optimasi frame rate (60 FPS stabil). Menggunakan SQLite untuk querying instan tanpa latency HTTP, Provider untuk state management yang terprediksi, dan integrasi Google Drive API via OAuth2 untuk backup berkas basis data terenkripsi AES-256 yang diinisiasi manual oleh pengguna.',
      challenges: 'Tantangan terbesar adalah merancang algoritma penjadwalan alarm dan push notification lokal yang tidak dimatikan oleh mekanisme penghemat baterai agresif sistem operasi Android modern (Doze Mode). Hal ini diselesaikan dengan memanfaatkan native AlarmManager alarm alarms berprioritas tepat waktu dan foreground service yang efisien.',
      result: 'StudyMate menghasilkan waktu startup di bawah 280 milidetik, konsumsi memori hanya ~48MB, dan memberikan keandalan 100% bahkan di mode pesawat terbang. Seluruh kebutuhan akademik mahasiswa terorganisir rapi dalam satu aplikasi yang tenang dan terstruktur.',
      gallery: [
        {
          title: 'Academic Timetable & Schedule',
          caption: 'Visualisasi jadwal kuliah interaktif dengan penanda ruang dan pengingat deadline tugas.',
          tag: 'Schedule'
        },
        {
          title: 'Deep Work Pomodoro Station',
          caption: 'Timer fokus minimalis dengan ambient audio synthesis dan statistik repetisi.',
          tag: 'Focus Timer'
        },
        {
          title: 'Markdown Knowledge Vault',
          caption: 'Editor catatan bebas distraksi dengan rendering formula matematika dan cuplikan kode.',
          tag: 'Notes & Vault'
        },
        {
          title: 'Habit & Revision Tracker',
          caption: 'Pelacak konsistensi pengulangan materi (spaced repetition) berkala.',
          tag: 'Habit Matrix'
        }
      ],
      links: {
        github: 'https://github.com/example/studymate-app',
        demo: 'https://example.com/studymate-preview',
        documentation: 'https://github.com/example/studymate-app#readme'
      }
    }
  },
  {
    id: 'aether-design-system',
    title: 'Aether Design System',
    subtitle: 'Accessible Multi-Platform UI Tokens & Components',
    category: 'uiux',
    categoryLabel: 'UI/UX Design & Architecture',
    role: 'Product Designer · Design Engineer',
    year: '2025',
    description: 'A comprehensive, high-contrast design system crafted for data-dense developer tools, telemetry dashboards, and minimalist creative workspaces.',
    technologies: ['Figma Tokens', 'Tailwind CSS', 'Radix Primitives', 'WCAG AA Standard', 'Motion API'],
    features: [
      'Mathematical 1.25 Modular Typography Scale',
      'Dual Warm/Cool Neutral Token Generators',
      'Sub-pixel Data Grid & Visual Hierarchy Guides',
      'Compound Accessible Interactive Components',
      'Zero-Latency Micro-interaction Specifications'
    ],
    featured: true,
    accentColor: '#3B82F6',
    metrics: [
      { label: 'Contrast Ratio', value: '7.8:1 (AAA)' },
      { label: 'Token Scale', value: '48 Semantic' },
      { label: 'Components', value: '32 Atoms' }
    ],
    caseStudy: {
      overview: 'Aether adalah eksplorasi desain sistem yang menentang tren "AI Slop" — visual template generik bergradien ungu berlebihan dan shadow tanpa dasar matematis. Aether dibangun untuk software teknikal yang menuntut pembacaan informasi cepat, densitas tinggi, dan ketenangan mata.',
      problem: 'Banyak interface modern mengorbankan readability demi estetika artifisial, mengakibatkan teks abu-abu di atas latar gelap yang gagal uji aksesibilitas serta kontras yang melelahkan mata dalam penggunaan durasi panjang.',
      approach: 'Menggunakan pendekatan matematis: rasio step typography 1.25, pembatasan saturasi warna netral di bawah 5%, kalkulasi border radius bersarang (Inner = Outer - Padding), dan penegakan kontras teks WCAG AAA pada seluruh token utama.',
      design: 'Dibuat dengan Figma AutoLayout bertingkat, variabel token semantik (Surface, Elevated, Subtle, Stroke, High-Contrast), dan sistem kisi editorial yang fleksibel untuk desktop maupun mobile.',
      development: 'Diimplementasikan ke dalam komponen React dengan Tailwind CSS dan Motion, menjamin waktu render instan tanpa runtime stylesheet overhead.',
      challenges: 'Menyeimbangkan densitas informasi dengan whitespace agar dashboard teknikal tidak terasa sempit namun tidak memboroskan ruang vertikal.',
      result: 'Sistem desain yang solid dan elegan yang kini menjadi fondasi seluruh project personal dan eksplorasi digital lab.',
      gallery: [
        {
          title: 'Color Token & Contrast Matrix',
          caption: 'Spesifikasi rasio kecerahan dan batas kontras WCAG AAA pada tema gelap & terang.',
          tag: 'Tokens'
        },
        {
          title: 'Typography Baseline & Scale',
          caption: 'Pengaturan modular scale untuk hierarki teks dari display hingga monospace data cell.',
          tag: 'Typography'
        }
      ],
      links: {
        github: 'https://github.com/example/aether-design-system',
        demo: 'https://example.com/aether-preview'
      }
    }
  },
  {
    id: 'bytecode-inspector',
    title: 'Bytecode & APK Dissector',
    subtitle: 'Static Analysis & Reverse Engineering Workbench',
    category: 'research',
    categoryLabel: 'Reverse Engineering & Research',
    role: 'Systems Researcher · Frontend Developer',
    year: '2026',
    description: 'An educational in-browser workbench for inspecting Android package structures, Dalvik bytecode strings, manifest permissions, and native ELF architectures without running dangerous payloads.',
    technologies: ['WebAssembly', 'Rust', 'React', 'TypeScript', 'Web Workers', 'Monaco Editor'],
    features: [
      'Client-Side ZIP & APK Parsing via WebAssembly',
      'AndroidManifest.xml Binary to XML Translation',
      'classes.dex String Constant Pool Extractor',
      'Native Library (.so) ELF Header Architecture Tagger',
      'Entropy Analysis & Obfuscation Detection Meter'
    ],
    featured: true,
    accentColor: '#10B981',
    metrics: [
      { label: 'Parse Speed', value: '< 1.2s (25MB APK)' },
      { label: 'Security', value: '100% Client-Side' },
      { label: 'Engine', value: 'Rust WASM' }
    ],
    caseStudy: {
      overview: 'Proyek riset independen yang ditujukan untuk mendemistifikasi struktur internal paket aplikasi Android (APK) bagi developer yang ingin memahami bagaimana kode mereka dikompilasi, diproteksi, dan dijalankan oleh runtime ART.',
      problem: 'Alat reverse engineering tradisional seperti jadx atau apktool membutuhkan instalasi Java Runtime Environment lokal dan command line yang rumit, sehingga menghambat proses inspeksi cepat dan audit keamanan berkas secara portabel.',
      approach: 'Mengompilasi modul parser biner dari bahasa Rust ke WebAssembly (WASM), memungkinkan parsing berkas DEX, AXML, dan ELF langsung di sandbox browser pengguna secara privat tanpa data pernah diunggah ke server pihak ketiga.',
      design: 'Interface terinspirasi dari modern developer laboratory: panel pohon struktur berkas di sisi kiri, hex viewer & decoded XML di tengah, dan kartu metadata telemetri di sisi kanan.',
      development: 'Menggunakan Web Worker terpisah agar parsing berkas biner berukuran puluhan megabyte tidak memblokir UI thread 60fps.',
      challenges: 'Menerjemahkan format biner XML Android yang terkompresi (Resource IDs, String pools, Namespace attributes) secara akurat sesuai spesifikasi platform AOSP.',
      result: 'Sebuah visual workbench edukatif yang stabil dan informatif, memberikan pemahaman mendalam tentang internal ekosistem Android.',
      gallery: [
        {
          title: 'Binary XML Decompilation View',
          caption: 'Visualisasi manifest permissions dan exported components dalam format terstruktur.',
          tag: 'Manifest'
        },
        {
          title: 'Hex & String Pool Explorer',
          caption: 'Penjelajah string constant pool dan inspeksi signature berkas DEX.',
          tag: 'DEX Strings'
        }
      ],
      links: {
        github: 'https://github.com/example/apk-dissector-wasm',
        demo: 'https://example.com/dissector'
      }
    }
  },
  {
    id: 'nexus-web-engine',
    title: 'Nexus Workstation Core',
    subtitle: 'High-Throughput Web Development Environment',
    category: 'web',
    categoryLabel: 'Web Development',
    role: 'Fullstack Engineer',
    year: '2025',
    description: 'A modular, high-speed single-page application harness showcasing micro-frontend architecture, sub-millisecond route transitions, and responsive state hydration.',
    technologies: ['React 19', 'Vite', 'TypeScript', 'Tailwind CSS', 'Motion', 'LocalStorage'],
    features: [
      'Zero-Layout-Shift Dynamic Route Transitions',
      'Virtual Scroll Engine for Dense Data Tables',
      'Command Palette Architecture with Quick Fuzzy Match',
      'Offline-Resilient Client State Sync',
      'Dynamic Theme Switching Engine with Zero Flash'
    ],
    featured: false,
    accentColor: '#8B5CF6',
    metrics: [
      { label: 'Lighthouse', value: '100 / 100' },
      { label: 'Bundle Size', value: '< 65 KB' }
    ],
    caseStudy: {
      overview: 'Eksperimen performa web untuk membuktikan bahwa web app modern dapat memberikan pengalaman secepat aplikasi desktop native tanpa kompromi visual.',
      problem: 'Banyak website modern mengalami slow initial load, layout shift yang mengganggu, dan beban JavaScript ratusan kilobyte yang memperlambat browser seluler.',
      approach: 'Arsitektur modular berbasis komponen fungsional murni, code-splitting terarah, dan penghapusan seluruh dependensi pihak ketiga yang tidak esensial.',
      design: 'Gaya editorial monokromatik dengan sentuhan aksen cyan neon berpresisi.',
      development: 'Menggunakan React 19, Vite, dan styling utility atomic Tailwind CSS.',
      challenges: 'Menjaga ukuran bundle di bawah 65KB sambil tetap menyertakan animasi layout halus dan keyboard navigation lengkap.',
      result: 'Skor Lighthouse 100 sempurna pada performa, aksesibilitas, best practices, dan SEO.',
      gallery: [
        {
          title: 'Performance Benchmark Audit',
          caption: 'Hasil uji Core Web Vitals dengan LCP di bawah 0.4 detik.',
          tag: 'Benchmark'
        }
      ],
      links: {
        github: 'https://github.com/example/nexus-web-engine'
      }
    }
  }
];
