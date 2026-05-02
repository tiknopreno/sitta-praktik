var dataPengguna = [
  {
    id: 1,
    nama: "Rina Wulandari",
    email: "rina@ut.ac.id",
    password: "rina123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Jakarta"
  },
  {
    id: 2,
    nama: "Agus Pranoto",
    email: "agus@ut.ac.id",
    password: "agus123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Makassar"
  },
  {
    id: 3,
    nama: "Siti Marlina",
    email: "siti@ut.ac.id",
    password: "siti123",
    role: "Puslaba",
    lokasi: "Pusat"
  },
  {
    id: 4,
    nama: "Doni Setiawan",
    email: "doni@ut.ac.id",
    password: "doni123",
    role: "Fakultas",
    lokasi: "FISIP"
  },
  {
    id: 5,
    nama: "Admin SITTA",
    email: "admin@ut.ac.id",
    password: "admin123",
    role: "Administrator",
    lokasi: "Pusat"
  }
];

var dataBahanAjar = [
  {
    kodeLokasi: "0TMP01",
    kodeBarang: "ASIP4301",
    namaBarang: "Pengantar Ilmu Komunikasi",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 548,
    cover: "img/pengantar_komunikasi.jpg"
  },
  {
    kodeLokasi: "0JKT01",
    kodeBarang: "EKMA4216",
    namaBarang: "Manajemen Keuangan",
    jenisBarang: "BMP",
    edisi: "3",
    stok: 392,
    cover: "img/manajemen_keuangan.jpg"
  },
  {
    kodeLokasi: "0SBY02",
    kodeBarang: "EKMA4310",
    namaBarang: "Kepemimpinan",
    jenisBarang: "BMP",
    edisi: "1",
    stok: 278,
    cover: "img/kepemimpinan.jpg"
  },
  {
    kodeLokasi: "0MLG01",
    kodeBarang: "BIOL4211",
    namaBarang: "Mikrobiologi Dasar",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 165,
    cover: "img/mikrobiologi.jpg"
  },
  {
    kodeLokasi: "0UPBJJBDG",
    kodeBarang: "PAUD4401",
    namaBarang: "Perkembangan Anak Usia Dini",
    jenisBarang: "BMP",
    edisi: "4",
    stok: 204,
    cover: "img/paud_perkembangan.jpg"
  },
  {
    kodeLokasi: "MSIMIN428",
    kodeBarang: "MSIM420801",
    namaBarang: "Interaksi Manusia dan Komputer",
    jenisBarang: "BMP",
    edisi: "4",
    stok: 215,
    cover: "https://univterbuka.kotobee.com/books/f1e9d2911d/EPUB/EPUB/imgs/cover_thumb.png"
  },
  {
    kodeLokasi: "MKWIBE891",
    kodeBarang: "MKWI420202",
    namaBarang: "Belajar Era Digital",
    jenisBarang: "BMP",
    edisi: "6",
    stok: 432,
    cover: "https://univterbuka.kotobee.com/books/fcd3ea5d4b/EPUB/EPUB/imgs/untitled07_thumb.jpg"
  },
  {
    kodeLokasi: "MSIMKE302",
    kodeBarang: "MSIM440501",
    namaBarang: "Keamanan Sistem Informasi",
    jenisBarang: "BMP",
    edisi: "9",
    stok: 128,
    cover: "https://univterbuka.kotobee.com/books/f931039990/EPUB/EPUB/imgs/untitled11_thumb.jpg"
  },
  {
    kodeLokasi: "MSIMTA554",
    kodeBarang: "MSIM440201",
    namaBarang: "Tata Kelola Teknologi Informasi",
    jenisBarang: "BMP",
    edisi: "3",
    stok: 310,
    cover: "https://univterbuka.kotobee.com/books/f4408cec92/EPUB/EPUB/imgs/gambar4_thumb.png"
  },
  {
    kodeLokasi: "MSIMAN119",
    kodeBarang: "MSIM430201",
    namaBarang: "Analisis dan Perancangan Sistem",
    jenisBarang: "BMP",
    edisi: "7",
    stok: 87,
    cover: "https://univterbuka.kotobee.com/books/ff1b155dd3/EPUB/EPUB/imgs/18_thumb.png"
  },
  {
    kodeLokasi: "MSIMSI772",
    kodeBarang: "MSIM430201",
    namaBarang: "Sistem Informasi Manajemen",
    jenisBarang: "BMP",
    edisi: "1",
    stok: 456,
    cover: "https://univterbuka.kotobee.com/books/f0d5c5572b/EPUB/EPUB/imgs/cover_thumb.png"
  },
  {
    kodeLokasi: "MSIMPE341",
    kodeBarang: "MSIM430201",
    namaBarang: "Pemprograman Web",
    jenisBarang: "BMP",
    edisi: "5",
    stok: 192,
    cover: "https://univterbuka.kotobee.com/books/ff749a18d2/EPUB/EPUB/imgs/cover01_thumb.png"
  },
  {
    kodeLokasi: "MSIMBA602",
    kodeBarang: "MSIM420601",
    namaBarang: "Basis Data",
    jenisBarang: "BMP",
    edisi: "8",
    stok: 275,
    cover: "https://univterbuka.kotobee.com/books/fe4ebb2ecd/EPUB/EPUB/imgs/cvr_thumb.png"
  },
  {
    kodeLokasi: "EKMAPE518",
    kodeBarang: "EKMA415803",
    namaBarang: "Perilaku Organisasi",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 398,
    cover: "https://univterbuka.kotobee.com/books/f7505ea17a/EPUB/EPUB/imgs/ekma415803_coverluar_thumb.jpg"
  },
  {
    kodeLokasi: "STSIPR902",
    kodeBarang: "STSI420601",
    namaBarang: "Proses Bisnis",
    jenisBarang: "BMP",
    edisi: "4",
    stok: 145,
    cover: "https://univterbuka.kotobee.com/books/f287bcd665/EPUB/EPUB/imgs/capture_thumb.PNG"
  },
  {
    kodeLokasi: "MKWNBA108",
    kodeBarang: "MKWN410801",
    namaBarang: "Bahasa Indonesia",
    jenisBarang: "BMP",
    edisi: "6",
    stok: 499,
    cover: "https://univterbuka.kotobee.com/books/fd243fa88e/EPUB/EPUB/imgs/capture_thumb.PNG"
  },
  {
    kodeLokasi: "MKWNPA411",
    kodeBarang: "MKWN411001",
    namaBarang: "Pancasila",
    jenisBarang: "BMP",
    edisi: "3",
    stok: 321,
    cover: "https://univterbuka.kotobee.com/books/fee945ed8e/EPUB/EPUB/imgs/capture_thumb.PNG"
  },
  {
    kodeLokasi: "SATSME412",
    kodeBarang: "SATS412103",
    namaBarang: "Metode Stastika",
    jenisBarang: "BMP",
    edisi: "9",
    stok: 287,
    cover: "https://univterbuka.kotobee.com/books/fd88c5c1d5/EPUB/EPUB/imgs/capture_thumb.PNG"
  },
  {
    kodeLokasi: "SATSKO411",
    kodeBarang: "SATS411102",
    namaBarang: "Komputer 1",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 110,
    cover: "https://univterbuka.kotobee.com/books/f0fcd35053/EPUB/EPUB/imgs/capture_thumb.PNG"
  },
  {
    kodeLokasi: "MSIMLO410",
    kodeBarang: "MSIM410302",
    namaBarang: "Logika Informatika",
    jenisBarang: "BMP",
    edisi: "1",
    stok: 415,
    cover: "https://univterbuka.kotobee.com/books/fe931b52df/EPUB/EPUB/imgs/capture_thumb.PNG"
  }
];

var dataTracking = {
  "2023001234": {
    nomorDO: "2023001234",
    nama: "Rina Wulandari",
    status: "Dalam Perjalanan",
    ekspedisi: "JNE",
    tanggalKirim: "2025-08-25",
    paket: "0JKT01",
    total: "Rp 180.000",
    perjalanan:[
      {
        waktu: "2025-08-25 10:12:20",
        keterangan: "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka"
      },
      {
        waktu: "2025-08-25 14:07:56",
        keterangan: "Tiba di Hub: TANGERANG SELATAN"
      },      
      {
        waktu: "2025-08-25 10:12:20",
        keterangan: "Diteruskan ke Kantor Jakarta Selatan"
      },
    ]
  },
  "2023005678": {
    nomorDO: "2023001234",
    nama: "Agus Pranoto",
    status: "Dikirim",
    ekspedisi: "Pos Indonesia",
    tanggalKirim: "2025-08-25",
    paket: "0UPBJJBDG",
    total: "Rp 220.000",
    perjalanan:[
      {
        waktu: "2025-08-25 10:12:20",
        keterangan: "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka"
      },
      {
        waktu: "2025-08-25 14:07:56",
        keterangan: "Tiba di Hub: TANGERANG SELATAN"
      },      
      {
        waktu: "2025-08-25 16:30:10",
        keterangan: "Diteruskan ke Kantor Kota Bandung"
      },
      {
        waktu: "2025-08-26 12:15:33",
        keterangan: "Tiba di Hub: Kota BANDUNG"
      },
      {
        waktu: "2025-08-26 15:06:12",
        keterangan: "Proses antar ke Cimahi"
      },
      {
        waktu: "2025-08-26 20:00:00",
        keterangan: "Selesai Antar. Penerima: Agus Pranoto"
      }
    ]
  }
};

