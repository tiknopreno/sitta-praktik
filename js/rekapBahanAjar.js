

const sign = (event) => {

    event.preventDefault();

    window.location.href = 'login.html';

};

const getBahanAjarByKey = (keyFilter , keyValue , value) =>{

    const findData = sourceData.find(item => item[keyFilter] === value);

    return findData[keyValue];

};

const getDataByLimit = (dataMentah, page = 1, limit = 4) => {


    const newData = [...dataMentah].reverse();

    const start = (page - 1) * limit;
    const end = start + limit;


    return newData.slice(start, end);


};


const cariData = (keyword) => {


     const getLoginData = localStorage.getItem('userActive');
    const userData = JSON.parse(getLoginData);

    if(!userData){
        return;
    }

    progressBelajar = sourceProgress.filter(item => {

        return item.kodeBarang.toLowerCase().includes(keyword.toLowerCase());

    });

    currentPage = 1;

    renderTampilan(progressBelajar);

};



const renderTampilan = (bahanAjarMentah) => {

   

    // Latest Bahan Ajar
    const bahanAjarLatest = getDataByLimit(bahanAjarMentah, currentPage, limitPage);
    const latestContainer = document.querySelector('.bahan-ajar-latest');

    const path = window.location.pathname.split("/").pop() || "index.html";

    const getLoginData = localStorage.getItem('userActive');
    const userData = JSON.parse(getLoginData);

 // Bahan Latest
    latestContainer.innerHTML = "";

    if(!userData){
        renderEmpty();
        return;
    }

   

    if (bahanAjarLatest.length > 0) {


        bahanAjarLatest.map(item => {

            if(item.iduser === userData.id){
                latestContainer.innerHTML +=`
                
                    <article class="book-item-rekap">
                        <div class="rekap-content-main">
                            <div>
                                <img src="${getBahanAjarByKey('kodeBarang' , 'cover' , item.kodeBarang)}" alt="Cover" class="thumb">
                                <div class="book-info">
                                <h5>${getBahanAjarByKey('kodeBarang' , 'namaBarang' , item.kodeBarang)}</h5>
                                <p>${item.kodeBarang}</p>
                            </div>
                            </div>
                            
                             <div class="wrapper-button-plus">
                                ${item.progress < 100 ? `
                                <button class="btn-add" onclick="tambahProgress('${item.idProgress}')">
                                     <i class='bx bx-plus'></i> 10%
                                </button>
                                ` : ''}
                             </div>
                         
                        </div>
                       

                        <div class="progress-section">
                            <div class="progress-bar-bg">
                                <div class="progress-bar-fill" style="width: ${item.progress}%;"></div>
                            </div>
                            <div class="progress-text">
                                <span>${item.progress < 100 ? item.progress === 0 ? 'Backlog' : 'On Progress' : 'Done'} ${item.progress > 0 ? item.progress+'%' : ''}</span>
                            </div>
                        </div>
                    </article>
              `;
            }
        });



    } else {

        latestContainer.innerHTML = `<div class="empty-state-container">
                    <div class="empty-state-content">
                        <div class="icon-wrapper">
                            <i class='bx bx-data'></i>
                        </div>
                        <h3>Menampilkan : ${bahanAjarLatest.length}data</h3>
                        <p>Tidak ada data yang ditampilkan</p>
                    </div>
                </div>`;

    }

    renderPagnation(bahanAjarMentah);
};


const renderEmpty = () => {

    const container = document.getElementById('empty-content');


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

const renderPagnation = (dataCount) => {

    const paginationContainer = document.getElementById('pagination-controls');
    paginationContainer.innerHTML = "";

    const totalPage = Math.ceil(dataCount.length / limitPage);

    if (totalPage <= 1) return;

    for (let i = 1; i <= totalPage; i++) {

        const btn = document.createElement('button');
        btn.innerText = i;
        btn.className = (i === currentPage) ? 'active' : '';

        btn.onclick = () => {
            currentPage = i;
            renderTampilan(dataCount);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        paginationContainer.appendChild(btn);

    }


};

const tambahProgress = (id) => {

    let listData = JSON.parse(localStorage.getItem('progressBelajar')) || [];   
    
    const index = listData.findIndex(item => item.idProgress == id);
    if (index !== -1) {
    
        listData[index].progress = Math.min((listData[index].progress || 0) + 10, 100);
        localStorage.setItem('progressBelajar', JSON.stringify(listData));

        renderTampilan(listData);

    }else{
        return;
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


    renderTampilan(progressBelajar);



});