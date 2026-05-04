let dtPengiriman = [...dataPengiriman];
let containerTransaksi  = document.getElementById('transaksi-content');
const getDataByLimit = (dataMentah , page = 1, limit =4) => {


    const newData = [...dataMentah].reverse();

    const start = (page -1) * limit;
    const end = start + limit;


    return newData.slice(start , end);
    
};


const cariData = (keyword) => {


    const getLoginData = localStorage.getItem('userActive');
    const userData = JSON.parse(getLoginData);

    if(!userData){
        return;
    }

    dtPengiriman = dataPengiriman.filter(item => {

        return item.nama.toLowerCase().includes(keyword.toLowerCase()) || item.nomorDO.toLowerCase().includes(keyword);

    });

    currentPage = 1;

    renderTampilanTransaksi(dtPengiriman);

};

const detailPage = (id , currentPage) => {
 
    localStorage.setItem('currentPage' , currentPage);

    window.location.href = `detail-transaksi.html?id=${id}`;

};

const renderTampilanTransaksi = (dataPengiriman) =>{

    const pengirimanDt = getDataByLimit(dataPengiriman , currentPage , limitPage);
    const path = window.location.pathname.split("/").pop() || "index.html";
    const userData = JSON.parse(localStorage.getItem('userActive'));

     if(!userData){
        renderEmptyTransaksi();
        return;
    }
    
    const namaUser = userData.nama.toLowerCase();
    let lokasi = userData.lokasi;

   


    containerTransaksi.innerHTML = "";
    if(pengirimanDt.length > 0){

        pengirimanDt.map(item => {


            if(item.nama.toLowerCase() === namaUser){


                let estimasiDateString = '';
                if (lokasi.includes('jakarta')) {
                    estimasiDateString = estimasiDate(item.tanggalKirim, 3);
                } else {
                    estimasiDateString = estimasiDate(item.tanggalKirim, 5);
                }


                containerTransaksi.innerHTML += `
                     <div class="tracking-item-card">
                    <div class="tracking-item-content">
                        <div class="tracking-item-main">
                            <div class="info-group">
                                <h3 class="item-name">${item.nama}</h3>
                                <p class="item-sub">DO: ${item.nomorDO}</p>
                                <p class="price-text">${item.total}</p>
                            </div>
                            <div class="info-meta">
                                <span class="status-badge">Terkirim</span>
                                <p class="estimasi-text">Estimasi: <strong>${estimasiDateString}</strong></p>
                            </div>
                        </div>
                        <div class="tracking-item-action">
                            <button class="detail-btn" title="Lihat Detail" onclick="detailPage('${item.nomorDO}' , '${path}')">
                                <i class='bx bx-info-circle'></i>
                            </button>
                        </div>
                    </div>
                </div>
                `;

            }

        });

    }else{

        renderEmptyTransaksi();

    }

    renderPagnationTransaksi(dataPengiriman);
    
};


const renderEmptyTransaksi = () => {


    containerTransaksi.innerHTML = `
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


const renderPagnationTransaksi = (dataCount) => {

    const paginationContainer = document.getElementById('pagination-controls');
    paginationContainer.innerHTML = "";

    const totalPage = Math.ceil(dataCount.length / limitPage);

    if(totalPage <= 1) return;

    for(let i = 1; i <= totalPage; i++){

        const btn = document.createElement('button');
        btn.innerText = i;
        btn.className = (i === currentPage) ? 'active' : '';

        btn.onclick = () => {
            currentPage = i;
            renderTampilan(dataCount);
            window.scrollTo({ top : 0 , behavior : 'smooth'});
        };

        paginationContainer.appendChild(btn);

    }
    

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

    renderTampilanTransaksi(dtPengiriman);


});