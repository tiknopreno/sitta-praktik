# SITTA (Sistem Informasi Transaksi Bahan Ajar)

**SITTA** adalah aplikasi berbasis web yang dirancang untuk memfasilitasi pemesanan, pemantauan, dan pengelolaan bahan ajar secara digital. Aplikasi ini menggunakan mekanisme **database lokal** yang disimpan sepenuhnya pada `localStorage` browser. Data yang dikelola meliputi katalog bahan ajar, data pengguna, progress belajar, hingga data pengiriman.

Aplikasi ini memungkinkan pengguna untuk mengelola data secara mandiri, mulai dari melakukan **registrasi akun**, memperbarui **progres belajar**, hingga melakukan **pemesanan bahan ajar** pada halaman detail. Saat pengguna menekan tombol "Pesan Sekarang", sistem secara otomatis akan mengurangi stok bahan ajar, memperbarui progres belajar pengguna, dan menghasilkan data pengiriman dummy yang dapat dilacak secara langsung.

Untuk meningkatkan pengalaman pengguna, SITTA dilengkapi dengan fitur **pencarian** di setiap modul utamanya, termasuk pada katalog bahan ajar, fitur tracking, monitoring DO, rekapitulasi bahan ajar, hingga riwayat transaksi.

---

## 🚀 Rekomendasi Menjalankan Aplikasi

### a. Live Server VS Code
Jika Anda menggunakan Visual Studio Code, disarankan untuk menginstal ekstensi **Live Server** agar aplikasi berjalan lebih optimal:
1. Buka file `index.html`.
2. Klik kanan pada area kosong di editor, lalu pilih **"Open with Live Server"**.

### b. Jalankan Online
Aplikasi juga dapat diakses langsung tanpa instalasi melalui tautan berikut:  
🔗 [https://tiknopreno.github.io/sitta-praktik/](https://tiknopreno.github.io/sitta-praktik/)

---

# Informasi Login (Data Dummy)

Berikut adalah daftar kredensial yang dapat digunakan untuk masuk ke dalam sistem selama masa pengembangan dan pengujian.

> [!NOTE]  
> Selain menggunakan data di bawah ini, Anda juga dapat melakukan **registrasi mandiri** melalui halaman pendaftaran yang tersedia di aplikasi jika ingin mencoba alur pembuatan akun baru.

## Tabel Kredensial

| Nama | Email | Password | Role | Lokasi |
| :--- | :--- | :--- | :--- | :--- |
| **Rina Wulandari** | `rina@ut.ac.id` | `rina123` | UPBJJ-UT | UPBJJ Jakarta |
| **Agus Pranoto** | `agus@ut.ac.id` | `agus123` | UPBJJ-UT | UPBJJ Makassar |
| **Siti Marlina** | `siti@ut.ac.id` | `siti123` | Puslaba | Pusat |
| **Doni Setiawan** | `doni@ut.ac.id` | `doni123` | Fakultas | FISIP |
| **Admin SITTA** | `admin@ut.ac.id` | `admin123` | Administrator | Pusat |

## Petunjuk Penggunaan
1. Pilih salah satu email dan password dari tabel di atas.
2. Masukkan kredensial pada halaman Login.
3. Sistem akan memberikan akses sesuai dengan **Role** dan **Lokasi** yang terdaftar.

---

## 👤 Detail Pengembang
**TUGAS 1 PRAKTIKUM PEMROGRAMAN WEB**  
*   **Nama:** Ashri Prastiko Juned
*   **NIM:** 056211039
*   **Prodi:** Sistem Informasi