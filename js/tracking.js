const container = document.getElementById('trackingContent');

const cariPengiriman = (keyword) => {

    const getLoginData = localStorage.getItem('userActive');
    const userData = JSON.parse(getLoginData);

    if(!userData){
        return;
    }

    const filter = dataPengiriman.filter(item => {
        return item.nomorDO.includes(keyword);
    });

    if (keyword === '') {
        renderEmpty();
    } else if (filter.length > 0) {
        renderTracking(filter);
    } else {
        renderSearchNoFound(filter.length);
    }
};

const renderTracking = (data) => {

    const getLoginData = localStorage.getItem('userActive');
    const userData = JSON.parse(getLoginData);
    let lokasi = userData.lokasi;
    let estimasiDateString = '';


    container.innerHTML = '';

    data.forEach(item => {

        if (lokasi.includes('jakarta')) {
            estimasiDateString = estimasiDate(item.tanggalKirim, 3);
        } else {
            estimasiDateString = estimasiDate(item.tanggalKirim, 5);
        }

        container.innerHTML += `
        <div class="result-card">
                    <div class="result-header">
                        <div>
                            <p style="font-size: 0.75rem; color: #a0aec0; margin:0;">Nomor DO</p>
                            <h3 class="do-number">${item.nomorDO}</h3>
                        </div>
                        <span class="status-badge">${item.status}</span>
                    </div>

                    <div class="info-grid">
                        <div class="info-item">
                            <label>Penerima</label>
                            <p>${item.nama}</p>
                        </div>
                        <div class="info-item">
                            <label>Alamat</label>
                            <p>${lokasi}</p>
                        </div>
                        <div class="info-item">
                            <label>Estimasi Tiba</label>
                            <p>${estimasiDateString}</p>
                        </div>
                    </div>

                    <div class="timeline">
                        ${renderHistoryPerjalanan(item.perjalanan)}
                    </div>
                </div>
        `;

    });


};


const renderHistoryPerjalanan = (dataPerjalanan) => {


    return dataPerjalanan.map((item , index) => `

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

const renderSearchNoFound = (dataLength) => {
    const container = document.getElementById('trackingContent');

    container.innerHTML = `
     <div class="tracking-card">
                    <div class="empty-content">
                        <i class='bx bx-search-alt' style="font-size: 2.5rem; color: #cbd5e0; margin-bottom: 10px;"></i>
                        <p>Data <b>${dataLength}</b> tidak ditemukan</p>
                    </div>
                </div>
     `;

};

document.addEventListener('DOMContentLoaded', () => {


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

    renderEmpty();

});