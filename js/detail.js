
const renderDetail = (id) => {

    const container = document.getElementById('content-detail-page');
    const data = dataShow.find(item => item.kodeBarang === id);
    
    
    if(data){

       container.innerHTML = `
           <div class="detail-main-row">
                <div class="detail-info-section">
                    <span class="badge-jenis">${data.jenisBarang}</span>
                    <h1 id="detail-nama">${data.namaBarang}</h1>

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
                <button class="btn-primary-sitta">
                    <i class='bx bx-cart-add'></i> Pesan Sekarang
                </button>
                <button class="btn-secondary-sitta">
                    <i class='bx bx-share'></i> Bagikan
                </button>
            </div>
       `;

    }else{

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


document.addEventListener('DOMContentLoaded', () => {
    
    const queryString = window.location.search;
    const urlParam = new URLSearchParams(queryString);
    
    const kodeBarang = urlParam.get("id");

    const getLoginData = localStorage.getItem('userActive');
    const logIn = document.querySelectorAll('.log-in');
    const logOut = document.querySelectorAll('.log-out');

     if(getLoginData){
    

        logOut.forEach(button => {
            button.classList.remove('hidden')
        });
       

    }else{

        logIn.forEach(button => {
            button.classList.remove('hidden');
        });


    }
    
    renderDetail(kodeBarang);

    // DETAIL
    const btnBack = document.querySelector('.back-btn');

    const currentPage  = localStorage.getItem('currentPage');
    btnBack.href = currentPage;
    


});