const renderDetailTransaksi = (id) => {

    const container = document.getElementById('detailTransaksi');

    const dataPengirimanTrx = JSON.parse(localStorage.getItem('dataPengiriman'));
    const pengiriman = Object.values(dataPengirimanTrx);

    
    const data = pengiriman.find(item => item.nomorDO === id);
    const getLoginData = localStorage.getItem('userActive');
    const userData = JSON.parse(getLoginData);
    let lokasi = userData.lokasi;

    if (data) {


        let estimasiDateString = '';
        if (lokasi.includes('jakarta')) {
            estimasiDateString = estimasiDate(data.tanggalKirim, 1);
        } else {
            estimasiDateString = estimasiDate(data.tanggalKirim, 2);
        }

        const bahanAjartrx = JSON.parse(localStorage.getItem('dataBahanAjar'));
        const bahanAjarDetail = bahanAjartrx.find(item => item.kodeLokasi === data.paket);
        
       
        container.innerHTML = `
             <div class="result-card">
                    <div class="result-header">
                        <div>
                            <p style="font-size: 0.75rem; color: #a0aec0; margin:0;">Nomor DO</p>
                            <h3 class="do-number">${data.nomorDO}</h3>
                        </div>
                        <span class="status-badge">${data.status}</span>
                    </div>

                    <div class="info-grid">
                        <div class="info-item">
                            <label>Penerima</label>
                            <p>${data.nama}</p>
                        </div>
                        <div class="info-item">
                            <label>Alamat</label>
                            <p>${lokasi}</p>
                        </div>
                        <div class="info-item">
                            <label>Ekspedisi</label>
                            <p>${data.ekspedisi}</p>
                        </div>
                         <div class="info-item">
                            <label>Total</label>
                            <p>${data.total}</p>
                        </div>
                        <div class="info-item">
                            <label>Tanggal kirim</label>
                            <p>${data.ekspedisi}</p>
                        </div>
                        <div class="info-item">
                            <label>Estimasi Tiba</label>
                            <p>${estimasiDateString}</p>
                        </div>
                    </div>
                    
                    <div class="timeline">
                        <h3>Detail Barang</h3>
                        <div class="info-grid" style="margin-top: 10px; margin-bottom: 10px;">
                            <div class="info-item">
                                <label>Nama Barang</label>
                                <p>${bahanAjarDetail.kodeLokasi}</p>
                            </div>
                            <div class="info-item">
                                <label>Nama Barang</label>
                                <p>${bahanAjarDetail.kodeBarang}</p>
                            </div>
                             <div class="info-item">
                                <label>Nama Barang</label>
                                <p>${bahanAjarDetail.namaBarang}</p>
                            </div>
                        </div>
                    </div>

                    <div class="timeline">
                    <h3>Detail perjalanan</h3>
                      <div style="margin-top: 10px; margin-bottom: 10px;">
                             ${renderTransaksiPerjalanan(data.perjalanan)}
                      </div>
                    </div>
                </div>
        
        `;


    } else {

        renderEmpty();

    }



};

const renderEmpty = () => {


    container.innerHTML = `
          <div class="tracking-card empty-state">
                    <div class="empty-content">
                        <div class="empty-icon-wrapper">
                            <i class='bx bx-data'></i>
                        </div>
                        <p>Tidak ada data yang ditampilkan</p>
                    </div>
                </div>
    `;

};


const renderTransaksiPerjalanan = (dataPerjalanan) => {


    return dataPerjalanan.map((item, index) => `

     <div class="timeline-item">
                            <div class="timeline-icon">
                                <div class="dot" style="${index > 0 ? 'background:#cbd5e0;' : ''}"></div>
                                ${index !== dataPerjalanan.length - 1 ? '<div class="line"></div>' : ''}
                            </div>
                            <div class="timeline-content">
                                <p style="${index > 0 ? 'color:#a0aec0;' : ''}">${item.keterangan}</p>
                                <span>${item.waktu}</span>
                            </div>
                        </div>

    `).join('');



};

document.addEventListener('DOMContentLoaded', () => {


    const queryString = window.location.search;
    const urlParam = new URLSearchParams(queryString);
    const nomorDO = urlParam.get("id");

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

    const btnBack = document.querySelector('.back-btn');

    const currentPage = localStorage.getItem('currentPage');
    btnBack.href = currentPage;


    renderDetailTransaksi(nomorDO);
});