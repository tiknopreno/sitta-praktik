// localStorage.removeItem('dataBahanAjar');
// localStorage.removeItem('dataPengiriman');
// localStorage.removeItem('progressBelajar');
const renderDetail = (id) => {

    const container = document.getElementById('content-detail-page');
    const dataDetail = JSON.parse(localStorage.getItem('dataBahanAjar'));
    const data = dataDetail.find(item => item.kodeBarang === id);
    if (data) {

        container.innerHTML = `
           <div class="detail-main-row">
                <div class="detail-info-section">
                    <span class="badge-jenis">${data.jenisBarang}</span>
                    <h1 id="detail-nama">${data.namaBarang}</h1>
                     <h2 class="detail-harga">${formatRupiah(data.harga)}</h2>
                    <div class="detail-specs-grid">
                        <div class="spec-card">
                            <div class="spec-icon"><i class='bx bx-barcode-reader'></i></div>
                            <div class="spec-text">
                                <label>Kode Barang</label>
                                <span id="detail-kode">${data.kodeBarang}</span>
                            </div>
                        </div>

                        <div class="spec-card">
                            <div class="spec-icon"><i class='bx bx-map-alt'></i></div>
                            <div class="spec-text">
                                <label>Kode Lokasi</label>
                                <span id="detail-lokasi">${data.kodeLokasi}</span>
                            </div>
                        </div>


                        <div class="spec-card">
                            <div class="spec-icon"><i class='bx bx-package'></i></div>
                            <div class="spec-text">
                                <label>Stok Tersedia</label>
                                <span id="detail-stok">${data.stok} Unit</span>
                            </div>
                        </div>


                         <div class="spec-card highlight">
                            <div class="spec-icon"><i class='bx bx-book-bookmark'></i></div>
                            <div class="spec-text">
                                <label>Edisi</label>
                                <span id="detail-stok">Ke-${data.edisi}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="detail-image-section">
                    <img id="detail-cover" src="${data.cover}" alt="Cover Buku" class="main-cover">
                </div>
            </div>

          
            <div class="detail-action-footer">
                <button onclick="pesanSekarang('${JSON.stringify(data).replace(/"/g, '&quot;')}')" class="btn-primary-sitta">
                    <i class='bx bx-cart-add'></i> Pesan Sekarang
                </button>
                <button onclick="copyTex(event)" id="btn-copy" class="btn-secondary-sitta">
                    <i class='bx bx-share'></i> Bagikan
                </button>
            </div>
       `;

    } else {

        container.innerHTML = `<div class="empty-state-container">
                    <div class="empty-state-content">
                        <div class="icon-wrapper">
                            <i class='bx bx-data'></i>
                        </div>
                        <h3>Menampilkan : 0data</h3>
                        <p>Tidak ada data yang ditampilkan</p>
                    </div>
                </div>`;
    }



};

const pesanSekarang = (data) => {

    const dataObj = JSON.parse(data);
    const getLoginData = localStorage.getItem('userActive');
    const userData = JSON.parse(getLoginData);

    if (!userData) {
        showToast('Login dulu ga sih?', 'error', 5000);
        return;
    }

    let storageProgress = JSON.parse(localStorage.getItem('progressBelajar')) || [];
    let storageTracking = JSON.parse(localStorage.getItem('dataPengiriman')) || {};
    let storageBahanAjar = JSON.parse(localStorage.getItem('dataBahanAjar')) || {};

    const progress = storageProgress.find(item => item.kodeBarang === dataObj.kodeBarang);

    if (progress) {

        showToast('Bahan ajar pernah dipesan, cek laporan -> rekap bahan ajar', 'error', 5000);
        return;

    }



    const indexBahanAjar = storageBahanAjar.findIndex(b => b.kodeBarang === dataObj.kodeBarang);

    if (indexBahanAjar !== -1) {
        if (storageBahanAjar[indexBahanAjar].stok > 0) {
            storageBahanAjar[indexBahanAjar].stok -= 1;
        } else {
            showToast('Maaf stok bahan ajar abis', 'error', 5000);
            return;
        }
    }

    const newProgresEntity = {
        idProgress: storageProgress.length + 1,
        iduser: userData.id,
        kodeBarang: dataObj.kodeBarang,
        progress: 0
    };

    storageProgress.push(newProgresEntity);
    const nomorDOBaru = generateNomorDO();
    const waktuSekrang = new Date().toISOString().replace('T', ' ').substring(0, 19);

    storageTracking[nomorDOBaru] = {
        nomorDO: nomorDOBaru,
        idUser: userData.id,
        nama: userData.nama,
        status: "Diterima",
        ekspedisi: "JNE",
        tanggalKirim: waktuSekrang.split(' ')[0],
        paket: dataObj.kodeLokasi,
        total: formatRupiah(dataObj.harga) || "RPp 0",
        perjalanan: [
            {
                waktu: plusDate(waktuSekrang, 48),
                keterangan: `Paket diterima oleh : ${userData.nama}`
            },
            {
                waktu: plusDate(waktuSekrang, 36),
                keterangan: "Paket sedang diantar kelokasi tujuan"
            },
            {
                waktu: plusDate(waktuSekrang, 24),
                keterangan: "Pakte sedang disortir"
            },
            {
                waktu: plusDate(waktuSekrang, 12),
                keterangan: "Tiba diHub : TANGERANG SELATAN"
            },
            {
                waktu: waktuSekrang,
                keterangan: "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka"
            },
        ]
    };

    localStorage.setItem('dataBahanAjar', JSON.stringify(storageBahanAjar));
    localStorage.setItem('progressBelajar', JSON.stringify(storageProgress));
    localStorage.setItem('dataPengiriman', JSON.stringify(storageTracking));

    renderDetail(dataObj.kodeBarang);

    showToast(`Pesanan Berhasil!\nNomor DO :${nomorDOBaru}\nStok Sekarang: ${storageBahanAjar[indexBahanAjar].stok}\nSilahkan cek halaman Laporan -> rekap bahan ajar`, 'success', 5000);




};

const plusDate = (date, jam) => {

   const d = new Date(date);
    d.setHours(d.getHours() + jam);

    const pad = (n) => n.toString().padStart(2, '0');
    
    const yyyy = d.getFullYear();
    const mm = pad(d.getMonth() + 1);
    const dd = pad(d.getDate());
    const hh = pad(d.getHours());
    const min = pad(d.getMinutes());
    const ss = pad(d.getSeconds());

    return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;

};

const generateNomorDO = () => {
    const tahun = new Date().getFullYear().toString();
    const randomDigits = Math.floor(100000 + Math.random() * 900000).toString();
    return tahun + randomDigits;
};

const copyTex = (e) => {
    const urlLengkap = window.location.href;

    const btn = e.currentTarget;

    navigator.clipboard.writeText(urlLengkap)
        .then(() => {
            const originalText = btn.innerHTML;
            btn.innerText = "Link tersalin!";
            showToast('Berhasil salin', 'success', 5000)
            setTimeout(() => {
                btn.innerHTML = originalText;
            }, 2000);
        })
        .catch(err => {
            console.error(err);
            if (typeof showToast === 'function') {
                showToast('Gagal salin', 'error', 5000);
            } else {
                alert('Gagal menyalin link');
            }
        });
};

document.addEventListener('DOMContentLoaded', () => {

    const queryString = window.location.search;
    const urlParam = new URLSearchParams(queryString);

    const kodeBarang = urlParam.get("id");

    const getLoginData = localStorage.getItem('userActive');
    const logIn = document.querySelectorAll('.log-in');
    const logOut = document.querySelectorAll('.log-out');

    if (getLoginData) {


        logOut.forEach(button => {
            button.classList.remove('hidden')
        });


    } else {

        logIn.forEach(button => {
            button.classList.remove('hidden');
        });


    }

    renderDetail(kodeBarang);

    // DETAIL
    const btnBack = document.querySelector('.back-btn');

    const currentPage = localStorage.getItem('currentPage');
    btnBack.href = currentPage;



});